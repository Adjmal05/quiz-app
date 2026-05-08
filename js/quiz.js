//quiz.js - Page de jeu - développé par Ritso
// quiz.js — Logique principale du jeu (timer, score, navigation)

const QuizGame = {
  // ── STATE ─────────────────────────────────────────────────────────────────

  state: {
    themeId: null,
    questions: [],
    currentIndex: 0,
    score: 0,
    answers: [],        // { questionId, chosen, correct, time }
    timerValue: 30,
    timerInterval: null,
    timerStarted: false,
    questionStartTime: null,
    totalTime: 0,
    answered: false,
    playerName: '',
    finished: false
  },

  TIMER_DURATION: 30,

  // ── INIT ──────────────────────────────────────────────────────────────────

  init() {
    const params = new URLSearchParams(window.location.search);
    const themeId = params.get('theme') || 'culture';
    const name = params.get('name') || 'Joueur';

    const theme = QUIZ_DATA[themeId];
    if (!theme) {
      window.location.href = 'index.html';
      return;
    }

    // Shuffle questions
    const shuffled = [...theme.questions].sort(() => Math.random() - 0.5);

    this.state = {
      ...this.state,
      themeId,
      questions: shuffled,
      playerName: decodeURIComponent(name),
      currentIndex: 0,
      score: 0,
      answers: [],
      totalTime: 0,
      finished: false
    };

    this.renderHeader(theme);
    this.renderQuestion();
    this.updateProgress();
  },

  // ── HEADER ────────────────────────────────────────────────────────────────

  renderHeader(theme) {
    const nameEl = document.getElementById('quiz-theme-name');
    if (nameEl) nameEl.textContent = theme.name;

    const iconEl = document.getElementById('quiz-theme-icon');
    if (iconEl) iconEl.textContent = theme.icon;
  },

  // ── QUESTION ─────────────────────────────────────────────────────────────

  renderQuestion() {
    const s = this.state;
    const q = s.questions[s.currentIndex];

    this.state.answered = false;
    this.state.questionStartTime = Date.now();

    // Question number
    const numEl = document.getElementById('question-num');
    if (numEl) numEl.textContent = `Question ${s.currentIndex + 1} sur ${s.questions.length}`;

    // Question text
    const textEl = document.getElementById('question-text');
    if (textEl) {
      textEl.style.animation = 'none';
      textEl.offsetHeight; // reflow
      textEl.style.animation = 'fadeUp 0.4s ease both';
      textEl.textContent = q.question;
    }

    // Answers
    const answersEl = document.getElementById('answers-grid');
    if (answersEl) {
      answersEl.innerHTML = '';
      const letters = ['A', 'B', 'C', 'D'];
      q.answers.forEach((ans, i) => {
        const btn = document.createElement('button');
        btn.className = 'answer-btn animate-fade-up';
        btn.style.animationDelay = `${i * 0.07}s`;
        btn.innerHTML = `
          <span class="answer-letter">${letters[i]}</span>
          <span class="answer-text">${ans}</span>
        `;
        btn.addEventListener('click', () => this.selectAnswer(i));
        answersEl.appendChild(btn);
      });
    }

    // Hide explanation
    const expl = document.getElementById('explanation');
    if (expl) expl.style.display = 'none';

    // Hide next button
    const nextBtn = document.getElementById('btn-next');
    if (nextBtn) nextBtn.classList.remove('visible');

    // Start timer
    this.startTimer();
    this.updateProgress();
  },

  // ── TIMER ─────────────────────────────────────────────────────────────────

  startTimer() {
    this.stopTimer();
    this.state.timerValue = this.TIMER_DURATION;
    this.updateTimerUI();

    this.state.timerInterval = setInterval(() => {
      this.state.timerValue--;
      this.updateTimerUI();

      if (this.state.timerValue <= 0) {
        this.stopTimer();
        if (!this.state.answered) this.onTimeout();
      }
    }, 1000);
  },

  stopTimer() {
    if (this.state.timerInterval) {
      clearInterval(this.state.timerInterval);
      this.state.timerInterval = null;
    }
  },

  updateTimerUI() {
    const val = this.state.timerValue;
    const numEl = document.getElementById('timer-number');
    const progressEl = document.getElementById('timer-progress');

    if (numEl) {
      numEl.textContent = val;
      numEl.className = 'timer-number';
      if (val <= 10 && val > 5) numEl.classList.add('warning');
      else if (val <= 5) numEl.classList.add('danger');
    }

    if (progressEl) {
      const circumference = 220;
      const fraction = val / this.TIMER_DURATION;
      progressEl.style.strokeDashoffset = circumference * (1 - fraction);
      progressEl.className = 'timer-progress';
      if (val <= 10 && val > 5) progressEl.classList.add('warning');
      else if (val <= 5) progressEl.classList.add('danger');
    }
  },

  onTimeout() {
    this.state.answered = true;
    const q = this.state.questions[this.state.currentIndex];

    // Show timeout overlay
    const overlay = document.getElementById('timeout-overlay');
    if (overlay) {
      overlay.classList.add('show');
      setTimeout(() => overlay.classList.remove('show'), 1200);
    }

    // Highlight correct answer
    const btns = document.querySelectorAll('.answer-btn');
    btns.forEach((btn, i) => {
      btn.disabled = true;
      if (i === q.correct) btn.classList.add('correct');
    });

    // Record missed answer
    const elapsed = Math.round((Date.now() - this.state.questionStartTime) / 1000);
    this.state.answers.push({
      questionId: q.id,
      chosen: -1,
      correct: q.correct,
      wasCorrect: false,
      time: elapsed,
      question: q.question,
      correctAnswer: q.answers[q.correct]
    });
    this.state.totalTime += elapsed;

    UI.showToast('Temps écoulé ! ⏰', 'wrong', 1500);
    this.showExplanation(q.explanation);
    this.showNextButton();
  },

  // ── ANSWER ────────────────────────────────────────────────────────────────

  selectAnswer(index) {
    if (this.state.answered) return;
    this.state.answered = true;
    this.stopTimer();

    const q = this.state.questions[this.state.currentIndex];
    const isCorrect = index === q.correct;
    const elapsed = Math.round((Date.now() - this.state.questionStartTime) / 1000);

    // Update score
    if (isCorrect) {
      const bonus = Math.max(0, this.state.timerValue - 10);
      this.state.score += 10 + bonus;
    }

    // Record answer
    this.state.answers.push({
      questionId: q.id,
      chosen: index,
      correct: q.correct,
      wasCorrect: isCorrect,
      time: elapsed,
      question: q.question,
      chosenAnswer: q.answers[index],
      correctAnswer: q.answers[q.correct]
    });
    this.state.totalTime += elapsed;

    // Animate buttons
    const btns = document.querySelectorAll('.answer-btn');
    btns.forEach((btn, i) => {
      btn.disabled = true;
      if (i === q.correct) btn.classList.add('correct');
      else if (i === index && !isCorrect) btn.classList.add('wrong');
    });

    // Update score display
    const scoreEl = document.getElementById('score-val');
    if (scoreEl) scoreEl.textContent = this.state.score;

    // Update dot
    this.updateDot(this.state.currentIndex, isCorrect);

    // Toast
    if (isCorrect) {
      UI.showToast('Bonne réponse ! 🎉', 'correct');
    } else {
      UI.showToast(`Faux ! La réponse était : ${q.answers[q.correct]}`, 'wrong', 2500);
    }

    this.showExplanation(q.explanation);
    this.showNextButton();
  },

  // ── EXPLANATION ───────────────────────────────────────────────────────────

  showExplanation(text) {
    const expl = document.getElementById('explanation');
    if (expl) {
      expl.innerHTML = `<strong>💡 Le saviez-vous ?</strong> ${text}`;
      expl.style.display = 'block';
    }
  },

  // ── NEXT BUTTON ───────────────────────────────────────────────────────────

  showNextButton() {
    const nextBtn = document.getElementById('btn-next');
    if (!nextBtn) return;
    const isLast = this.state.currentIndex >= this.state.questions.length - 1;
    nextBtn.innerHTML = isLast
      ? 'Voir les résultats <span>🏁</span>'
      : 'Question suivante <span>→</span>';
    nextBtn.classList.add('visible');
  },

  nextQuestion() {
    const s = this.state;
    if (s.currentIndex >= s.questions.length - 1) {
      this.endGame();
    } else {
      this.state.currentIndex++;
      this.renderQuestion();
    }
  },

  // ── PROGRESS ─────────────────────────────────────────────────────────────

  updateProgress() {
    const s = this.state;
    const total = s.questions.length;
    const current = s.currentIndex;
    const pct = (current / total) * 100;

    const fillEl = document.getElementById('progress-fill');
    if (fillEl) fillEl.style.width = pct + '%';

    const countEl = document.getElementById('progress-count');
    if (countEl) countEl.textContent = `${current + 1} / ${total}`;

    // Render dots on first load
    const dotsEl = document.getElementById('progress-dots');
    if (dotsEl && dotsEl.children.length !== total) {
      dotsEl.innerHTML = '';
      for (let i = 0; i < total; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot' + (i === current ? ' current' : '');
        dot.id = `dot-${i}`;
        dotsEl.appendChild(dot);
      }
    } else if (dotsEl) {
      // Update current dot
      const prev = dotsEl.querySelector('.dot.current');
      if (prev) prev.classList.remove('current');
      const curr = document.getElementById(`dot-${current}`);
      if (curr && !curr.classList.contains('correct') && !curr.classList.contains('wrong')) {
        curr.classList.add('current');
      }
    }
  },

  updateDot(index, isCorrect) {
    const dot = document.getElementById(`dot-${index}`);
    if (dot) {
      dot.classList.remove('current');
      dot.classList.add(isCorrect ? 'correct' : 'wrong');
    }
  },

  // ── END GAME ─────────────────────────────────────────────────────────────

  endGame() {
    this.stopTimer();
    this.state.finished = true;

    const s = this.state;
    const theme = QUIZ_DATA[s.themeId];
    const total = s.questions.length;
    const correctCount = s.answers.filter(a => a.wasCorrect).length;
    const pct = Math.round((correctCount / total) * 100);

    const result = {
      themeId: s.themeId,
      theme: theme.name,
      themeIcon: theme.icon,
      score: s.score,
      total,
      correctCount,
      wrongCount: total - correctCount,
      pct,
      totalTime: s.totalTime,
      playerName: s.playerName,
      answers: s.answers,
      date: new Date().toLocaleDateString('fr-FR')
    };

    Storage.saveResult(result);

    // Navigate
    window.location.href = 'result.html';
  }
};

// Init when DOM ready
document.addEventListener('DOMContentLoaded', () => {
  QuizGame.init();

  // Next button
  const nextBtn = document.getElementById('btn-next');
  if (nextBtn) nextBtn.addEventListener('click', () => QuizGame.nextQuestion());

  // Keyboard support
  document.addEventListener('keydown', (e) => {
    if (['1', '2', '3', '4'].includes(e.key)) {
      const idx = parseInt(e.key) - 1;
      QuizGame.selectAnswer(idx);
    }
    if (e.key === 'Enter' || e.key === ' ') {
      const nextBtn = document.getElementById('btn-next');
      if (nextBtn && nextBtn.classList.contains('visible')) QuizGame.nextQuestion();
    }
  });
});
