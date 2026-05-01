// storage.js — Gestion du localStorage

const Storage = {
  KEYS: {
    LEADERBOARD: 'quizapp_leaderboard',
    CURRENT_SESSION: 'quizapp_session',
    LAST_RESULT: 'quizapp_last_result',
    SETTINGS: 'quizapp_settings'
  },

  // ── LEADERBOARD ──────────────────────────────────────────────────────────

  getLeaderboard() {
    try {
      return JSON.parse(localStorage.getItem(this.KEYS.LEADERBOARD)) || [];
    } catch {
      return [];
    }
  },

  saveScore(entry) {
    // entry: { name, score, total, theme, themeId, time, date }
    const lb = this.getLeaderboard();
    const newEntry = {
      ...entry,
      id: Date.now(),
      date: new Date().toLocaleDateString('fr-FR'),
      pct: Math.round((entry.score / entry.total) * 100)
    };
    lb.push(newEntry);
    lb.sort((a, b) => b.pct - a.pct || a.time - b.time);
    localStorage.setItem(this.KEYS.LEADERBOARD, JSON.stringify(lb));
    return newEntry;
  },

  getTopScores(themeId = null, limit = 10) {
    let lb = this.getLeaderboard();
    if (themeId) lb = lb.filter(e => e.themeId === themeId);
    return lb.slice(0, limit);
  },

  clearLeaderboard() {
    localStorage.removeItem(this.KEYS.LEADERBOARD);
  },

  // ── SESSION ──────────────────────────────────────────────────────────────

  saveSession(session) {
    localStorage.setItem(this.KEYS.CURRENT_SESSION, JSON.stringify(session));
  },

  getSession() {
    try {
      return JSON.parse(localStorage.getItem(this.KEYS.CURRENT_SESSION));
    } catch {
      return null;
    }
  },

  clearSession() {
    localStorage.removeItem(this.KEYS.CURRENT_SESSION);
  },

  // ── LAST RESULT ──────────────────────────────────────────────────────────

  saveResult(result) {
    localStorage.setItem(this.KEYS.LAST_RESULT, JSON.stringify(result));
  },

  getLastResult() {
    try {
      return JSON.parse(localStorage.getItem(this.KEYS.LAST_RESULT));
    } catch {
      return null;
    }
  },

  // ── SETTINGS ─────────────────────────────────────────────────────────────

  saveSettings(settings) {
    localStorage.setItem(this.KEYS.SETTINGS, JSON.stringify(settings));
  },

  getSettings() {
    try {
      return JSON.parse(localStorage.getItem(this.KEYS.SETTINGS)) || {
        sound: true,
        playerName: ''
      };
    } catch {
      return { sound: true, playerName: '' };
    }
  }
};
