// leaderboard.js — Logique de la page classement

let currentFilter = 'all';

function render(filter) {
  currentFilter = filter;
  const scores = filter === 'all'
    ? Storage.getTopScores(null, 20)
    : Storage.getTopScores(filter, 20);

  const podiumEl = document.getElementById('podium-section');
  const tableEl = document.getElementById('lb-table');

  if (scores.length === 0) {
    podiumEl.innerHTML = '';
    tableEl.innerHTML = `
      <div class="lb-empty">
        <div class="lb-empty-icon">🎯</div>
        <p>Aucun score sauvegardé pour le moment.<br/>Jouez un quiz et entrez votre pseudo !</p>
        <br/><a href="index.html" class="btn btn-primary lb-play-btn">Jouer maintenant ⚡</a>
      </div>
    `;
    return;
  }

  // PODIUM (top 3)
  const top3 = scores.slice(0, Math.min(3, scores.length));

  // Reorder for visual podium: 2nd · 1st · 3rd
  const podiumOrder = top3.length === 1
    ? [top3[0]]
    : top3.length === 2
      ? [top3[1], top3[0]]
      : [top3[1], top3[0], top3[2]];

  const positions = top3.length === 1
    ? [1]
    : top3.length === 2
      ? [2, 1]
      : [2, 1, 3];

  podiumEl.innerHTML = `
    <div class="podium">
      ${podiumOrder.map((entry, i) => {
        const rank = positions[i];
        const medal = rank === 1 ? '🥇' : rank === 2 ? '🥈' : '🥉';
        const h = rank === 1 ? 140 : rank === 2 ? 100 : 80;
        return `
          <div class="podium-item">
            <div class="podium-avatar">${UI.getAvatar(entry.name)}</div>
            <div class="podium-name" title="${entry.name}">${entry.name}</div>
            <div class="podium-score">${entry.pct}%</div>
            <div class="podium-stand" style="height:${h}px">${medal}</div>
          </div>
        `;
      }).join('')}
    </div>
  `;

  // TABLE (all scores)
  const rankIcons = { 1: '🥇', 2: '🥈', 3: '🥉' };
  tableEl.innerHTML = scores.map((entry, i) => {
    const rank = i + 1;
    const isTop3 = rank <= 3;
    return `
      <div class="lb-row">
        <div class="lb-rank ${isTop3 ? 'top3' : ''}">
          ${rankIcons[rank] || rank}
        </div>
        <div class="lb-player-info">
          <div class="lb-player-name">${UI.getAvatar(entry.name)} ${entry.name}</div>
          <div class="lb-player-sub">${entry.theme} · ${entry.date}</div>
        </div>
        <div class="lb-score-wrap">
          <div class="lb-score-num">${entry.pct}%</div>
          <div class="lb-score-pct">${entry.score} pts · ${UI.formatTime(entry.time)}</div>
        </div>
      </div>
    `;
  }).join('');
}

// Filter buttons
document.getElementById('lb-filters').addEventListener('click', (e) => {
  const btn = e.target.closest('.lb-filter-btn');
  if (!btn) return;
  document.querySelectorAll('.lb-filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  render(btn.dataset.theme);
});

// Clear leaderboard
document.getElementById('btn-clear').addEventListener('click', () => {
  if (confirm('Effacer tout le classement ? Cette action est irréversible.')) {
    Storage.clearLeaderboard();
    render(currentFilter);
  }
});

// Initial render
render('all');
