/*
 * Home - Nerimstudios
 * - Votação de personagens (localStorage)
 * - Quiz Dragon Ball (5 perguntas, 4 alternativas)
 */

var VOTE_KEY = 'nerim_votes';
var QUIZ_KEY = 'nerim_quiz';

function getVotes() {
  try {
    return JSON.parse(localStorage.getItem(VOTE_KEY)) || {};
  } catch (e) {
    return {};
  }
}

function saveVotes(votes) {
  localStorage.setItem(VOTE_KEY, JSON.stringify(votes));
}

function hasVoted() {
  return !!localStorage.getItem(VOTE_KEY + '_voted');
}

function setVoted() {
  localStorage.setItem(VOTE_KEY + '_voted', '1');
}

function vote(character) {
  if (hasVoted()) {
    showVoteResults();
    return;
  }
  var votes = getVotes();
  votes[character] = (votes[character] || 0) + 1;
  saveVotes(votes);
  setVoted();
  showVoteResults();
}

function resetVote() {
  localStorage.removeItem(VOTE_KEY + '_voted');
  document.getElementById('vote-options').style.display = 'flex';
  document.getElementById('vote-results').style.display = 'none';
}

function showVoteResults() {
  var votes = getVotes();
  var total = Object.values(votes).reduce(function (a, b) { return a + b; }, 0);
  var container = document.getElementById('vote-results');
  var stats = document.getElementById('vote-stats');
  var fill = document.getElementById('vote-bar-fill');

  container.style.display = 'block';
  document.getElementById('vote-options').style.display = 'none';

  var characters = ['Goku', 'Superman', 'Homem-Aranha', 'Saitama'];
  var html = '';
  characters.forEach(function (c) {
    var count = votes[c] || 0;
    var pct = total > 0 ? Math.round((count / total) * 100) : 0;
    html += '<div class="vote-stat-row">';
    html += '<span class="vote-stat-name">' + c + '</span>';
    html += '<span class="vote-stat-pct">' + pct + '%</span>';
    html += '</div>';
  });
  stats.innerHTML = html;

  var maxVote = Math.max.apply(null, characters.map(function (c) { return votes[c] || 0; }));
  var topChar = characters.find(function (c) { return votes[c] === maxVote; }) || characters[0];
  fill.style.width = (total > 0 ? ((votes[topChar] || 0) / total) * 100 : 0) + '%';
}

/* Quiz Dragon Ball */
var quizData = {
  questions: [
    {
      question: 'Qual é o nome do planeta de origem dos Saiyajins?',
      options: ['Planeta Terra', 'Planeta Vegeta', 'Planeta Namekusei', 'Planeta Kakarotto'],
      answer: 1
    },
    {
      question: 'Quem é o mestre de Goku no início de Dragon Ball?',
      options: ['Mestre Kame', 'Mestre Roshi', 'Mestre Anjin', 'Mestre Korin'],
      answer: 2
    },
    {
      question: 'Quantas Esferas do Dragão existem?',
      options: ['5', '6', '7', '8'],
      answer: 2
    },
    {
      question: 'Qual é a transformação lendária dos Saiyajins?',
      options: ['Super Saiyajin', 'Super Saiyajin 2', 'Super Saiyajin 3', 'Super Saiyajin God'],
      answer: 0
    },
    {
      question: 'Quem matou o Cell?',
      options: ['Goku', 'Gohan', 'Vegeta', 'Trunks'],
      answer: 1
    }
  ]
};

var quizState = { current: 0, score: 0 };

function startQuiz() {
  quizState = { current: 0, score: 0 };
  document.getElementById('quiz-start').style.display = 'none';
  document.getElementById('quiz-game').style.display = 'block';
  document.getElementById('quiz-result').style.display = 'none';
  renderQuizQuestion();
}

function renderQuizQuestion() {
  var q = quizData.questions[quizState.current];
  document.getElementById('quiz-question-number').textContent = 'Pergunta ' + (quizState.current + 1) + ' de ' + quizData.questions.length;
  document.getElementById('quiz-score').textContent = 'Pontos: ' + quizState.score;
  document.getElementById('quiz-question-text').textContent = q.question;
  var opts = document.getElementById('quiz-options');
  opts.innerHTML = '';
  q.options.forEach(function (opt, i) {
    var btn = document.createElement('button');
    btn.className = 'quiz-option-btn';
    btn.textContent = opt;
    btn.onclick = function () { answerQuiz(i); };
    opts.appendChild(btn);
  });
  document.getElementById('quiz-feedback').textContent = '';
}

function answerQuiz(index) {
  var q = quizData.questions[quizState.current];
  var feedback = document.getElementById('quiz-feedback');
  if (index === q.answer) {
    quizState.score++;
    feedback.textContent = '✅ Correto!';
    feedback.style.color = '#4ade80';
  } else {
    feedback.textContent = '❌ Errado! A resposta era: ' + q.options[q.answer];
    feedback.style.color = '#f87171';
  }
  quizState.current++;
  if (quizState.current >= quizData.questions.length) {
    setTimeout(showQuizResult, 1200);
  } else {
    setTimeout(renderQuizQuestion, 1200);
  }
}

function showQuizResult() {
  document.getElementById('quiz-game').style.display = 'none';
  document.getElementById('quiz-result').style.display = 'block';
  var title = document.getElementById('quiz-result-title');
  var text = document.getElementById('quiz-result-text');
  var score = quizState.score;
  var total = quizData.questions.length;
  if (score === total) {
    title.textContent = 'Perfeito! 🎉';
    text.textContent = 'Você acertou ' + score + '/' + total + '! É um verdadeiro fã de Dragon Ball!';
  } else if (score >= total * 0.7) {
    title.textContent = 'Muito bom! 🔥';
    text.textContent = 'Você acertou ' + score + '/' + total + '. Quase perfeito!';
  } else if (score >= total * 0.4) {
    title.textContent = 'Bom trabalho! 👍';
    text.textContent = 'Você acertou ' + score + '/' + total + '. Continue estudando!';
  } else {
    title.textContent = 'Hmm... 😅';
    text.textContent = 'Você acertou ' + score + '/' + total + '. Que tal assistir alguns vídeos da Nerim?';
  }
}

function restartQuiz() {
  document.getElementById('quiz-start').style.display = 'block';
  document.getElementById('quiz-game').style.display = 'none';
  document.getElementById('quiz-result').style.display = 'none';
}

/* Inicializar votação ao carregar */
document.addEventListener('DOMContentLoaded', function () {
  if (document.getElementById('vote-options')) {
    if (hasVoted()) {
      showVoteResults();
    }
  }
});