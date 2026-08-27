/*
 * Fórum da Nerimstudios — Autenticação Google + Sistema de Tópicos/Comentários
 * Dados persistidos no localStorage do navegador
 */

(() => {
  // Elementos DOM (carregados após o HTML)
  const authCard = document.getElementById('authCard');
  const loggedCard = document.getElementById('loggedCard');
  const googleBtnContainer = document.getElementById('googleBtnContainer');
  const userAvatar = document.getElementById('userAvatar');
  const userName = document.getElementById('userName');
  const userEmail = document.getElementById('userEmail');
  const logoutBtn = document.getElementById('logoutBtn');
  const forumFilters = document.getElementById('forumFilters');
  const topicsList = document.getElementById('topicsList');
  const forumEmpty = document.querySelector('.forum-empty');
  const newTopicForm = document.getElementById('newTopicForm');
  const newTopicBtn = document.getElementById('newTopicBtn');
  const postTopicBtn = document.getElementById('postTopicBtn');
  const cancelTopicBtn = document.getElementById('cancelTopicBtn');
  const topicTitle = document.getElementById('topicTitle');
  const topicBody = document.getElementById('topicBody');
  const topicCategory = document.getElementById('topicCategory');

  // Estado
  let user = null; // { id, name, email, avatarUrl }
  let topics = JSON.parse(localStorage.getItem('forumTopics') || '[]');

  // Inicializar Google One Tap / Auto-signin
  function initGoogle() {
    // Tentar login automático se houver sessão guardada
    const savedUser = localStorage.getItem('forumUser');
    if (savedUser) {
      user = JSON.parse(savedUser);
      updateAuthUI();
      renderTopics();
      return;
    }

    // Se já houver usuário logado detectado pelo GSI, atualizar
    if (window.google && window.google.accounts) {
      const client = window.google.accounts.init.getAuthResponse();
      // Nota: requires_cookie_cross_site habilitado no HTML
    }
  }

  // Atualizar UI de autenticação
  function updateAuthUI() {
    if (!user) {
      authCard.style.display = 'block';
      loggedCard.style.display = 'none';
      googleBtnContainer.innerHTML = '';
      return;
    }
    authCard.style.display = 'none';
    loggedCard.style.display = 'block';
    userAvatar.src = user.avatarUrl || 'https://ui-avatars.com/?name=' + encodeURIComponent(user.name);
    userName.textContent = user.name;
    userEmail.textContent = user.email;
    // Botão de logout
    logoutBtn.onclick = () => {
      user = null;
      localStorage.removeItem('forumUser');
      updateAuthUI();
      renderTopics(); // limpa tópicos ao desconectar
      return false;
    };
  }

  // Fazer login com Google (One Tap ou prompt)
  function loginWithGoogle() {
    // Verificar se já temos usuário via One Tap
    if (window.google && window.google.accounts) {
      // Attempt One Tap if configured
      window.google.accounts.id.prompt((notification) => {
        // User may dismiss
      });
    }

    // Fallback: prompt de login clássico
    const tokenClient = window.google.accounts.id.createOneTap({
      // última_sessão_cancelada
    });
    tokenClient.requestClickHandler();

    // Simples: abrir seletor de conta
    window.google.accounts.id.disableAutoSelect();
    const onclick = () => {
      window.google.accounts.id.prompt((resp) => {
        if (resp && resp.id) {
          // Decodificar payload base64 do Google
          const payload = JSON.parse(atob(resp.id.split('.')[1]));
          user = {
            id: resp.sub || payload.sub,
            name: payload.name,
            email: payload.email,
            avatarUrl: payload.picture
          };
          localStorage.setItem('forumUser', JSON.stringify(user));
          updateAuthUI();
          renderTopics();
        }
      });
    };
    // Botão já criado em forum.html com id="googleBtnContainer"
    // O CSS já tem .g_id_button, mas vamos usar o evento nativo
    document.getElementById('googleBtnContainer').innerHTML = '';
    const btn = document.createElement('div');
    btn.setAttribute('data-index', '0');
    btn.innerHTML = '<div class="g_id_button" style="margin:0 auto;"><span class="g_id_text">Continuar com o Google</span><span class="g_id_icon"><img src="https://ssl.gstatic.com/onetap/cse/images/g_logo_24dp.png" alt="Google"></span></div>';
    btn.querySelector('.g_id_button').onclick = () => {
      window.google.accounts.id.prompt((resp) => {
        if (resp && resp.id) {
          const payload = JSON.parse(atob(resp.id.split('.')[1]));
          user = {
            id: payload.sub,
            name: payload.name,
            email: payload.email,
            avatarUrl: payload.picture
          };
          localStorage.setItem('forumUser', JSON.stringify(user));
          updateAuthUI();
          renderTopics();
        }
      });
    };
    btn.querySelector('.g_id_button').click();
    document.getElementById('googleBtnContainer').appendChild(btn);
  }

  // Tópico (thread)
  function Topic(id, title, body, category, author, created, comments = []) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.category = category || 'todos';
    this.author = author; // { name, avatarUrl }
    this.created = created;
    this.comments = comments || [];
    this.viewCount = 0; // para futura contagem
  }

  // Renderizar um tópico como card
  function renderTopic(topic) {
    const card = document.createElement('article');
    card.className = 'topic-card';
    card.dataset.category = topic.category;
    card.innerHTML = `
      <div class="topic-head">
        <span class="topic-cat ${topic.category}">${topic.category}</span>
        <h3 class="topic-title" title="${topic.title}">${truncate(topic.title, 50)}</h3>
      </div>
      <p class="topic-preview">${truncate(topic.body || '', 120)}</p>
      <div class="topic-footer">
        <div class="comment-author">
          <span class="mini-avatar"><img src="${topic.author.avatarUrl || 'https://ui-avatars.com/?name=' + encodeURIComponent(topic.author.name)}" alt="${topic.author.name}"></span>
          ${topic.author.name}
        </span>
        <span>${formatDate(topic.created)}</span>
        <span class="reply-count">${topic.comments.length} resposta${topic.comments.length !== 1 ? 's' : ''}</span>
      </div>
    `;
    // Evento de clicar no tópico -> mostrar detalhes + comentários
    card.addEventListener('click', () => renderTopicDetail(topic));
    return card;
  }

  // Formatar data
  function formatDate(iso) {
    if (!iso) return '—';
    const d = new Date(iso);
    return d.toLocaleDateString('pt-BR', { year: 'numeric', month: 'short', day: 'numeric' });
  }

  // Recortar texto
  function truncate(str, max) {
    if (!str) return '';
    return str.length > max ? str.substring(0, max) + '...' : str;
  }

  // Renderizar página de detalhes do tópico + comentários
  function renderTopicDetail(topic) {
    // Limpar lista atual e mostrar tópico + formulário de comentário
    topicsList.innerHTML = '';

    // Header do tópico
    const detailHeader = document.createElement('div');
    detailHeader.className = 'topic-card';
    detailHeader.innerHTML = `
      <div class="topic-head">
        <span class="topic-cat ${topic.category}">${topic.category}</span>
        <h3 class="topic-title">${topic.title}</h3>
      </div>
      <p class="topic-preview">${truncate(topic.body || '', 200)}</p>
      <div class="topic-footer">
        <div class="comment-author">
          <span class="mini-avatar"><img src="${topic.author.avatarUrl || 'https://ui-avatars.com/?name=' + encodeURIComponent(topic.author.name)}" alt="${topic.author.name}"></span>
          ${topic.author.name}
        </span>
        <span>${formatDate(topic.created)}</span>
      </div>
    `;
    topicsList.appendChild(detailHeader);

    // Seção de comentários
    const commentsSection = document.createElement('div');
    commentsSection.className = 'comments-thread';
    commentsSection.innerHTML = '<h4>Comentários</h4>';

    // Lista de comentários existentes
    if (topic.comments.length > 0) {
      topic.comments.forEach(c => {
        const commentEl = document.createElement('div');
        commentEl.className = 'comment';
        commentEl.innerHTML = `
          <div class="avatar"><img src="${c.avatarUrl || 'https://ui-avatars.com/?name=' + encodeURIComponent(c.author)}" alt="${c.author}"></div>
          <div class="comment-body">
            <div class="comment-head">
              <span class="comment-author">${c.author}</span>
              <span class="comment-time">${formatDate(c.created)}</span>
            </div>
            <p class="comment-text">${c.text}</p>
          </div>
        `;
        commentsSection.appendChild(commentEl);
      });
    } else {
      commentsSection.innerHTML += '<p>Seja o primeiro a comentar neste tópico.</p>';
    }

    // Formulário de comentário
    const commentForm = document.createElement('div');
    commentForm.className = 'comment-form';
    commentForm.innerHTML = `
      <div class="avatar"><img src="${user.avatarUrl || 'https://ui-avatars.com/?name=' + encodeURIComponent(user.name)}" alt="${user.name}"></div>
      <textarea placeholder="Escreva um comentário..." rows="2" maxlength="500" id="commentInput"></textarea>
      <div style="margin-top:8px; display:flex; gap:6px;">
        <button class="btn btn-ghost btn-sm" id="postCommentBtn">Publicar</button>
        <button class="btn btn-ghost btn-sm" id="cancelCommentBtn">Cancelar</button>
      </div>
    `;
    commentsSection.appendChild(commentForm);

    topicsList.appendChild(commentsSection);

    // Botão publicar comentário
    const postCommentBtn = document.getElementById('postCommentBtn');
    const cancelCommentBtn = document.getElementById('cancelCommentBtn');
    const commentInput = document.getElementById('commentInput');

    postCommentBtn.onclick = () => {
      const text = commentInput.value.trim();
      if (!text) return;
      const now = new Date().toISOString();
      const newComment = {
        id: Date.now().toString(),
        author: user.name,
        text,
        created: now,
        avatarUrl: user.avatarUrl
      };
      topic.comments.push(newComment);
      localStorage.setItem('forumTopics', JSON.stringify(topics));
      renderTopicDetail(topic); // recarregar
    };

    cancelCommentBtn.onclick = () => renderTopicDetail(topic);
  }

  // Truncar para preview do tópico na listagem
  function renderTopics() {
    topicsList.innerHTML = '';

    if (topics.length === 0) {
      forumEmpty.style.display = 'block';
      return;
    }
    forumEmpty.style.display = 'none';

    // Ordenar por data (mais recente primeiro)
    const sorted = topics.slice().sort((a, b) => new Date(b.created) - new Date(a.created));

    sorted.forEach(topic => {
      const card = renderTopic(topic);
      topicsList.appendChild(card);
    });

    // Adicionar evento de clicar em cada tópico
    document.querySelectorAll('.topic-card').forEach(card => {
      card.addEventListener('click', () => {
        const topic = topics.find(t => renderTopic(t) === card || t.id === card.dataset.id);
        if (topic) renderTopicDetail(topic);
      });
    });
  }

  // Criar novo tópico
  function createTopic() {
    const title = topicTitle.value.trim();
    const body = topicBody.value.trim();
    const category = topicCategory.value;

    if (!title || !body) {
      alert('Preencha título e mensagem.');
      return;
    }

    const newTopic = new Topic(
      Date.now().toString(),
      title,
      body,
      category,
      user,
      new Date().toISOString()
    );

    topics.unshift(newTopic); // adicionar no início
    localStorage.setItem('forumTopics', JSON.stringify(topics));

    // Resetar formulário
    topicTitle.value = '';
    topicBody.value = '';
    topicCategory.value = 'todos';

    renderTopics();
    // Fechar formulário
    newTopicForm.style.display = 'none';
    newTopicBtn.disabled = false;
  }

  // Event Listeners
  initGoogle();

  // Mostrar/esconder formulário de novo tópico
  newTopicForm.style.display = 'none';
  newTopicBtn.onclick = () => {
    if (!user) {
      loginWithGoogle();
      return;
    }
    newTopicForm.style.display = 'block';
    newTopicBtn.disabled = true; // evitar duplo clique
    setTimeout(() => newTopicBtn.disabled = false, 3000);
  };
  cancelTopicBtn.onclick = () => newTopicForm.style.display = 'none';

  postTopicBtn.onclick = (e) => {
    e.preventDefault();
    createTopic();
  };
  cancelTopicBtn.onclick = () => {
    newTopicForm.style.display = 'none';
    topicTitle.value = '';
    topicBody.value = '';
    topicCategory.value = 'todos';
    newTopicBtn.disabled = false;
  };

  // Filtros
  forumFilters.addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-btn')) {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      // Filtrar client-side
      const filter = e.target.dataset.filter;
      document.querySelectorAll('.topic-card').forEach(card => {
        if (filter === 'todos' || card.dataset.category === filter) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    }
  });

  // Inicializar ao carregar
  updateAuthUI();
  renderTopics();

  // Expor globalmente para uso inline (HTML)
  window.forum = { renderTopic, renderTopicDetail, createTopic };
})();