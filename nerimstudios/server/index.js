const express = require('express');
const cors = require('cors');
const path = require('node:path');
const fetch = (...args) => {
  if (typeof globalThis.fetch === 'function') return globalThis.fetch(...args);
  return import('node-fetch').then(({ default: nodeFetch }) => nodeFetch(...args));
};
const cron = require('node-cron');
require('dotenv').config({ path: path.resolve(__dirname, '..', '.env') });

const app = express();
const PORT = process.env.PORT || 3000;
const allowedOrigins = new Set([
  'https://nerim.com.br',
  'https://www.nerim.com.br'
]);

function isLocalDevelopmentOrigin(origin) {
  try {
    const url = new URL(origin);
    const hostname = url.hostname.toLowerCase();
    const isLocalHost = hostname === 'localhost' || hostname.endsWith('.localhost') ||
      hostname === '127.0.0.1' || hostname === '[::1]' || hostname.endsWith('.test');
    return isLocalHost && (url.protocol === 'http:' || url.protocol === 'https:');
  } catch {
    return false;
  }
}

app.use(cors({
  origin(origin, callback) {
    const isAllowedOrigin = !origin || allowedOrigins.has(origin) ||
      (process.env.NODE_ENV !== 'production' && isLocalDevelopmentOrigin(origin));
    callback(null, isAllowedOrigin);
  }
}));

// Serve the static site only when the backend is used as the local/host server.
app.use(express.static(path.resolve(__dirname, '..')));

// --- Configuration ---
const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const YOUTUBE_CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID || 'UC-2XJW3DwmlhlXdL5L0WYZQ'; // Will be set by user

if (!YOUTUBE_API_KEY) {
  console.warn('⚠️  YOUTUBE_API_KEY não configurada no .env - funcionalidades YouTube retornarão erro controlado');
  console.warn('   Configure YOUTUBE_API_KEY e YOUTUBE_CHANNEL_ID no arquivo .env para ativar estatísticas e vídeos');
} else {
  console.log(`🔑 YouTube API Key configurada`);
}

console.log(`📺 Channel ID: ${YOUTUBE_CHANNEL_ID}`);

// --- Caching ---
const cache = {
  stats: { data: null, timestamp: 0, ttl: 5 * 60 * 1000 }, // 5 minutes
  videos: { data: null, timestamp: 0, ttl: 5 * 60 * 1000 }, // 5 minutes
  featured: { data: null, timestamp: 0, ttl: 5 * 60 * 1000 } // 5 minutes
};

// --- Helper: Formatar números brasileiro ---
const formatNumberBr = (num) => {
  if (num === undefined || num === null) return '0';
  const number = Number(num);
  if (isNaN(number)) return '0';
  if (number >= 1000000) {
    return `${(number / 1000000).toFixed(1)} milhões`.replace('.', ',');
  }
  if (number >= 1000) {
    return `${(number / 1000).toFixed(1)} mil`.replace('.', ',');
  }
  return number.toLocaleString('pt-BR');
};

// --- Helper: Formatar duração do YouTube ---
const formatDuration = (duration) => {
  if (!duration) return '--:--';
  const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
  if (!match) return '--:--';
  const hours = match[1] ? parseInt(match[1]) : 0;
  const minutes = match[2] ? parseInt(match[2]) : 0;
  const seconds = match[3] ? parseInt(match[3]) : 0;
  if (hours > 0) {
    return `${hours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};

// --- Fetch YouTube Stats ---
async function fetchYouTubeStats() {
  const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${YOUTUBE_CHANNEL_ID}&key=${YOUTUBE_API_KEY}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const data = await response.json();
  if (data.items && data.items.length > 0) {
    const stats = data.items[0].statistics;
    return {
      subscribers: stats.subscriberCount,
      views: stats.viewCount,
      videoCount: stats.videoCount
    };
  }
  throw new Error('Nenhum dado de canal encontrado');
}

// --- Fetch YouTube Videos (latest) ---
async function fetchYouTubeVideos() {
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet,id&order=date&channelId=${YOUTUBE_CHANNEL_ID}&maxResults=10&key=${YOUTUBE_API_KEY}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const data = await response.json();
  return (data.items || []).filter(item => item.id && item.id.videoId).map(item => ({
    videoId: item.id.videoId,
    title: item.snippet.title,
    description: item.snippet.description,
    thumbnails: item.snippet.thumbnails,
    publishedAt: item.snippet.publishedAt,
    channelTitle: item.snippet.channelTitle
  }));
}

// --- Fetch Featured Video (latest) ---
async function fetchFeaturedVideo() {
  const videos = await fetchYouTubeVideos();
  if (videos && videos.length > 0) return videos[0];
  return null;
}

// --- Cache Update Functions (without async keyword since they're called from async context) ---
function updateStatsCache() {
  return fetchYouTubeStats().then(data => {
    if (data) {
      cache.stats = { data, timestamp: Date.now(), ttl: 5 * 60 * 1000 };
      console.log(`✅ Cache de stats atualizado: ${data.subscribers} inscritos, ${formatNumberBr(data.views)} visualizações, ${data.videoCount} vídeos`);
    }
    return cache.stats.data;
  });
}

function updateVideosCache() {
  return fetchYouTubeVideos().then(data => {
    if (data) {
      cache.videos = { data, timestamp: Date.now(), ttl: 5 * 60 * 1000 };
      console.log(`✅ Cache de vídeos atualizado: ${data.length} vídeos`);
    }
    return cache.videos.data;
  });
}

function updateFeaturedCache() {
  return fetchFeaturedVideo().then(data => {
    if (data) {
      cache.featured = { data, timestamp: Date.now(), ttl: 5 * 60 * 1000 };
    }
    return cache.featured.data;
  });
}

async function updateCacheSafely(updateCache) {
  try {
    await updateCache();
  } catch (error) {
    console.error('❌ Erro na atualização agendada do cache:', error.name);
  }
}

// --- Scheduled Cache Updates (every 10 minutes) ---
if (YOUTUBE_CHANNEL_ID) {
  cron.schedule('*/10 * * * *', async () => {
    await updateCacheSafely(updateStatsCache);
    await updateCacheSafely(updateVideosCache);
    await updateCacheSafely(updateFeaturedCache);
    console.log('🔄 Atualização automática de cache agendada');
  });
  console.log('⏰ Agendador de atualização automática ativada (a cada 10 minutos)');
}

// --- API Routes ---

// Health check
app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'Nerimstudios Backend ativo', timestamp: new Date().toISOString() });
});

// YouTube Stats endpoint
app.get('/api/youtube/stats', async (req, res) => {
  try {
    const now = Date.now();
    if (cache.stats.data && (now - cache.stats.timestamp) < cache.stats.ttl) {
      // Return cached data
      const stats = cache.stats.data;
      return res.json({
        success: true,
        data: {
          subscribers: stats.subscribers,
          views: stats.views,
          videoCount: stats.videoCount,
          formattedSubscribers: formatNumberBr(stats.subscribers),
          formattedViews: formatNumberBr(stats.views),
          formattedVideoCount: formatNumberBr(stats.videoCount)
        },
        fromCache: true
      });
    }

    const data = await fetchYouTubeStats();
    if (!data) throw new Error('YouTube stats request failed');
    if (data) {
      cache.stats = { data, timestamp: now, ttl: 5 * 60 * 1000 };
    }

    res.json({
      success: true,
      data: {
        subscribers: data ? data.subscribers : 0,
        views: data ? data.views : 0,
        videoCount: data ? data.videoCount : 0,
        formattedSubscribers: data ? formatNumberBr(data.subscribers) : '0',
        formattedViews: data ? formatNumberBr(data.views) : '0',
        formattedVideoCount: data ? formatNumberBr(data.videoCount) : '0'
      },
      fromCache: false
    });
  } catch (error) {
    console.error('❌ Erro no endpoint /api/youtube/stats:', error.name);
    // Return cached data even if expired, or error state
    res.status(503).json({
      success: false,
      error: 'Serviço temporariamente indisponível',
      fromCache: !!cache.stats.data,
      data: cache.stats.data ? {
        subscribers: cache.stats.data.subscribers,
        views: cache.stats.data.views,
        videoCount: cache.stats.data.videoCount,
        formattedSubscribers: formatNumberBr(cache.stats.data.subscribers),
        formattedViews: formatNumberBr(cache.stats.data.views),
        formattedVideoCount: formatNumberBr(cache.stats.data.videoCount)
      } : null
    });
  }
});

// YouTube Videos endpoint
app.get('/api/youtube/videos', async (req, res) => {
  try {
    const now = Date.now();
    if (cache.videos.data && (now - cache.videos.timestamp) < cache.videos.ttl) {
      return res.json({
        success: true,
        data: cache.videos.data,
        fromCache: true
      });
    }

    const data = await fetchYouTubeVideos();
    if (!data) throw new Error('YouTube videos request failed');
    if (data) {
      cache.videos = { data, timestamp: now, ttl: 5 * 60 * 1000 };
    }

    res.json({
      success: true,
      data: data || [],
      fromCache: false
    });
  } catch (error) {
    console.error('❌ Erro no endpoint /api/youtube/videos:', error.name);
    res.status(503).json({
      success: false,
      error: 'Serviço temporariamente indisponível',
      fromCache: !!cache.videos.data,
      data: cache.videos.data || []
    });
  }
});

// YouTube Featured endpoint
app.get('/api/youtube/featured', async (req, res) => {
  try {
    const now = Date.now();
    if (cache.featured.data && (now - cache.featured.timestamp) < cache.featured.ttl) {
      return res.json({
        success: true,
        data: cache.featured.data,
        fromCache: true
      });
    }

    const data = await fetchFeaturedVideo();
    if (data) {
      cache.featured = { data, timestamp: now, ttl: 5 * 60 * 1000 };
    }

    res.json({
      success: true,
      data: data || null,
      fromCache: false
    });
  } catch (error) {
    console.error('❌ Erro no endpoint /api/youtube/featured:', error.name);
    res.status(503).json({
      success: false,
      error: 'Serviço temporariamente indisponível',
      fromCache: !!cache.featured.data,
      data: cache.featured.data || null
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Nerimstudios Backend rodando em http://localhost:${PORT}`);
  console.log(`📡 Endpoints disponíveis:`);
  console.log(`   GET /api/youtube/stats - Estatísticas do canal`);
  console.log(`   GET /api/youtube/videos - Últimos vídeos`);
  console.log(`   GET /api/youtube/featured - Vídeo em destaque`);
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('🛑 Servidor encerrado');
  process.exit(0);
});