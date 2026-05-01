// quiz-page.js — Logique spécifique à la page quiz.html (bouton retour)

document.getElementById('btn-back').addEventListener('click', (e) => {
  e.preventDefault();
  if (confirm('Quitter la partie ? Votre progression sera perdue.')) {
    QuizGame.stopTimer();
    window.location.href = 'index.html';
  }
});
