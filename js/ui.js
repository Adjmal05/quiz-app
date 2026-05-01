// ui.js — Manipulation du DOM & helpers UI

const UI = {
  // ── QUERY HELPERS ────────────────────────────────────────────────────────

  $(sel, ctx = document) { return ctx.querySelector(sel); },
  $$(sel, ctx = document) { return [...ctx.querySelectorAll(sel)]; },

  el(tag, attrs = {}, ...children) {
    const el = document.createElement(tag);
    Object.entries(attrs).forEach(([k, v]) => {
      if (k === 'class') el.className = v;
      else if (k === 'html') el.innerHTML = v;
      else el.setAttribute(k, v);
    });
    children.forEach(c => {
      if (typeof c === 'string') el.appendChild(document.createTextNode(c));
      else if (c) el.appendChild(c);
    });
    return el;
  },

  // ── THEME COLORS ─────────────────────────────────────────────────────────

  getThemeColor(themeId) {
    const colors = {
      culture: '#7c5cfc',
      science: '#43e8a0',
      sport:   '#ff6b6b',
      tech:    '#ffcc44',
      geo:     '#4cc9f0',
      cinema:  '#f72585'
    };
    return colors[themeId] || '#7c5cfc';
  },

  // ── TOAST ─────────────────────────────────────────────────────────────────

  showToast(message, type = 'correct', duration = 1800) {
    let toast = document.getElementById('feedback-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'feedback-toast';
      toast.className = 'feedback-toast';
      document.body.appendChild(toast);
    }
    toast.className = `feedback-toast ${type}`;
    toast.innerHTML = type === 'correct'
      ? `✅ ${message}`
      : `❌ ${message}`;
    toast.classList.add('show');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => toast.classList.remove('show'), duration);
  },

  // ── ANIMATIONS ───────────────────────────────────────────────────────────

  animateNumber(el, from, to, duration = 1000) {
    const start = performance.now();
    const update = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(from + (to - from) * ease);
      if (p < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  },

  // ── SCORE GRADE ───────────────────────────────────────────────────────────

  getGrade(pct) {
    if (pct === 100) return { label: '🏆 Parfait !', cls: 's-perfect', color: '#43e8a0', emoji: '🌟' };
    if (pct >= 80)  return { label: '🎉 Excellent !', cls: 's-great', color: '#7c5cfc', emoji: '🔥' };
    if (pct >= 60)  return { label: '👍 Bien joué !', cls: 's-good', color: '#ffcc44', emoji: '💪' };
    if (pct >= 40)  return { label: '📚 Peut mieux faire', cls: 's-poor', color: '#ff6b6b', emoji: '😅' };
    return { label: '💡 À retravailler', cls: 's-poor', color: '#ff6b6b', emoji: '📖' };
  },

  // ── CONFETTI ─────────────────────────────────────────────────────────────

  launchConfetti(count = 60) {
    const colors = ['#7c5cfc', '#43e8a0', '#ff6b6b', '#ffcc44', '#4cc9f0', '#f72585'];
    for (let i = 0; i < count; i++) {
      const conf = document.createElement('div');
      conf.style.cssText = `
        position: fixed;
        top: -10px;
        left: ${Math.random() * 100}vw;
        width: ${6 + Math.random() * 8}px;
        height: ${6 + Math.random() * 8}px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
        pointer-events: none;
        z-index: 9998;
        animation: confettiFall ${1.5 + Math.random() * 2}s ${Math.random() * 0.5}s cubic-bezier(0.5, 0, 1, 1) forwards;
      `;
      document.body.appendChild(conf);
      setTimeout(() => conf.remove(), 4000);
    }

    if (!document.getElementById('confetti-style')) {
      const s = document.createElement('style');
      s.id = 'confetti-style';
      s.textContent = `
        @keyframes confettiFall {
          0%   { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(105vh) rotate(${Math.random() > 0.5 ? '' : '-'}720deg); opacity: 0; }
        }
      `;
      document.head.appendChild(s);
    }
  },

  // ── FORMAT TIME ───────────────────────────────────────────────────────────

  formatTime(seconds) {
    if (seconds < 60) return `${seconds}s`;
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}m ${s.toString().padStart(2, '0')}s`;
  },

  // ── AVATAR EMOJI ─────────────────────────────────────────────────────────

  getAvatar(name) {
    const avatars = ['🧑', '👩', '🧔', '👨', '🦸', '🧙', '🧝', '🦊', '🐼', '🦋', '🐲', '🌟'];
    const idx = name ? name.charCodeAt(0) % avatars.length : 0;
    return avatars[idx];
  }
};
