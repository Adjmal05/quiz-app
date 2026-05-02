// result.js — affichage resultats - developpe par Ricardo 

document.addEventListener('DOMContentLoaded', () => {
  const result = Storage.getLastResult();
  if (!result) {
    window.location.href = 'index.html';
    return;
  }

  const grade = UI.getGrade(result.pct);
  const circumference = 502;
  const offset = circumference - (circumference * result.pct / 100);

  // Build review items HTML
  const reviewHTML = result.answers.map(a => `
    <div class="review-item">
      <span class="review-icon">${a.wasCorrect ? '✅' : a.chosen === -1 ? '⏰' : '❌'}</span>
      <div>
        <div class="review-q">${a.question}</div>
        <div class="review-a">
          ${a.wasCorrect
            ? `<span>✓ ${a.correctAnswer}</span>`
            : a.chosen === -1
              ? `Temps écoulé · Réponse : <span>${a.correctAnswer}</span>`
              : `Votre réponse : ${a.chosenAnswer} · Réponse : <span>${a.correctAnswer}</span>`
          }
        </div>
      </div>
    </div>
  `).join('');

  const alreadySaved = result.saved;

  document.getElementById('result-content').innerHTML = `
    <span class="result-badge">${grade.emoji}</span>
    <h1 class="result-title">${grade.label}</h1>
    <p class="result-subtitle">
      ${result.themeIcon} ${result.theme} · Joué par <strong>${result.playerName}</strong>
    </p>

    <div class="score-ring-wrap">
      <svg class="score-ring-svg" viewBox="0 0 180 180">
        <circle class="ring-track" cx="90" cy="90" r="80"/>
        <circle class="ring-fill ${grade.cls}" id="ring-fill"
          cx="90" cy="90" r="80"
          stroke-dasharray="${circumference}"
          stroke-dashoffset="${circumference}"/>
      </svg>
      <div class="score-inner">
        <div class="score-pct" id="score-pct-num">0</div>
        <div class="score-pct-label">Score</div>
      </div>
    </div>

    <div class="result-stats">
      <div class="stat-card s-correct">
        <div class="stat-card-num">${result.correctCount}</div>
        <div class="stat-card-label">Bonnes réponses</div>
      </div>
      <div class="stat-card s-wrong">
        <div class="stat-card-num">${result.wrongCount}</div>
        <div class="stat-card-label">Mauvaises réponses</div>
      </div>
      <div class="stat-card s-time">
        <div class="stat-card-num">${UI.formatTime(result.totalTime)}</div>
        <div class="stat-card-label">Temps total</div>
      </div>
    </div>

    <div class="name-entry-box" id="save-box" ${alreadySaved ? 'style="display:none"' : ''}>
      <label>Sauvegarder dans le classement</label>
      <div class="name-entry-row">
        <input type="text" class="input-field" id="save-name"
          placeholder="Votre pseudo" maxlength="20"
          value="${result.playerName || ''}" />
        <button class="btn-save" id="btn-save">💾 Sauver</button>
      </div>
    </div>
    <div id="saved-confirm" ${!alreadySaved ? 'style="display:none"' : ''}>
      <div class="score-saved">✅ Score sauvegardé dans le classement !</div>
    </div>

    <div class="review-section">
      <div class="review-title">Récapitulatif des réponses</div>
      ${reviewHTML}
    </div>

    <div class="result-actions">
      <a href="index.html" class="btn btn-ghost">🏠 Accueil</a>
      <a href="quiz.html?theme=${result.themeId}&name=${encodeURIComponent(result.playerName)}" class="btn btn-ghost">🔄 Rejouer</a>
      <a href="leaderboard.html" class="btn btn-primary">🏆 Classement</a>
    </div>
  `;

  // Animate score ring
  setTimeout(() => {
    const ring = document.getElementById('ring-fill');
    if (ring) ring.style.strokeDashoffset = offset;
  }, 100);

  // Animate percentage counter
  setTimeout(() => {
    const el = document.getElementById('score-pct-num');
    if (el) UI.animateNumber(el, 0, result.pct, 1400);
  }, 300);

  // Confetti for great scores
  if (result.pct >= 80) {
    setTimeout(() => UI.launchConfetti(result.pct === 100 ? 120 : 70), 600);
  }

  // Save score button
  document.getElementById('btn-save')?.addEventListener('click', () => {
    const name = document.getElementById('save-name').value.trim() || 'Joueur';
    Storage.saveScore({
      name,
      score: result.score,
      total: result.total,
      theme: result.theme,
      themeId: result.themeId,
      time: result.totalTime
    });
    Storage.saveSettings({ ...Storage.getSettings(), playerName: name });
    result.saved = true;
    Storage.saveResult(result);
    document.getElementById('save-box').style.display = 'none';
    document.getElementById('saved-confirm').style.display = 'block';
  });
});
