// home.js — Logique de la page d'accueil

let selectedTheme = null;

// Theme card clicks
document.querySelectorAll('.theme-card').forEach(card => {
  card.addEventListener('click', () => {
    selectedTheme = card.dataset.theme;
    const theme = QUIZ_DATA[selectedTheme];

    // Update modal display
    const display = document.getElementById('selected-theme-display');
    display.innerHTML = `<span>${theme.icon}</span><strong>${theme.name}</strong>`;

    // Prefill name from storage
    const settings = Storage.getSettings();
    const nameInput = document.getElementById('player-name');
    if (settings.playerName) nameInput.value = settings.playerName;

    // Show modal
    document.getElementById('modal-overlay').classList.add('active');
    setTimeout(() => nameInput.focus(), 300);
  });
});

// Modal cancel
document.getElementById('modal-cancel').addEventListener('click', () => {
  document.getElementById('modal-overlay').classList.remove('active');
});

// Click outside modal closes it
document.getElementById('modal-overlay').addEventListener('click', (e) => {
  if (e.target === e.currentTarget) {
    e.currentTarget.classList.remove('active');
  }
});

// Start quiz
function startQuiz() {
  const name = document.getElementById('player-name').value.trim() || 'Joueur';
  Storage.saveSettings({ ...Storage.getSettings(), playerName: name });
  window.location.href = `quiz.html?theme=${selectedTheme}&name=${encodeURIComponent(name)}`;
}

document.getElementById('modal-start').addEventListener('click', startQuiz);

document.getElementById('player-name').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') startQuiz();
});
