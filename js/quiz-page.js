//quiz-page.js - Logique bouton retour - développé par Minosoa

document.getElementById('btn-back').addEventListener('click', (e) => {
  e.preventDefault();
  if (confirm('Quitter la partie ? Votre progression sera perdue.')) {
    QuizGame.stopTimer();
    window.location.href = 'index.html';
  }
});
