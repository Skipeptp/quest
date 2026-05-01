// ==========================
// КОНФИГУРАЦИЯ УРОВНЕЙ (13 ШТУК)
// ==========================
const LEVELS = [
  {
    id: 1,
    title: 'Уровень 1',
    short: 'Умничка',
    description: 'Ответь на 10 вопросов милашка',
    type: 'quiz',
    quiz: {
      questions: [
        { q: 'Вопрос 1: Какого числа мы начали общаться?', a: '24' },
        { q: 'Вопрос 2: Какое первое сообщение нашего общения?', a: 'Привет, неплохая фоточка, любишь фото эстетики?' },
        { q: 'Вопрос 3: Какой у меня размер обуви?', a: '43' },
        { q: 'Вопрос 4: Просто напиши Я люблю тебя', a: 'Я люблю тебя' },
        { q: 'Вопрос 5: Какой у тебя любимый вид спорта?', a: 'Бамбинтон' },
        { q: 'Вопрос 6: Как зовут мою маму?', a: 'Елена' },
        { q: 'Вопрос 7: Напиши название моего подика', a: 'GEEKVAPE AEGIS BOOST 2 B60' },
        { q: 'Вопрос 8: Обними любимого человека и напиши, сделала ли ты это (Да/Нет)', a: 'Да' },
        { q: 'Вопрос 9: Хоть раз хотел ли я уйти?', a: 'Нет' },
        { q: 'Вопрос 10: Ну и напоследок – моя любимая игра?', a: 'Dota 2' },
      ],
      rewardText: 'Умничка! Теперь чтобы начать наше путешествие, дождись завтрашнего дня и в 15:15 возьми его за шкирку и потащи на улицу.',
    },
  },
  {
    id: 2,
    title: 'Уровень 2',
    short: 'Милашка.',
    description: 'Надеюсь, тебе не пришлось ждать эту малекулу пока он прилизывался и обливался духами. ',
    type: 'single-answer',
    instructionHtml: '<p><strong>Задание:</strong> Отправляйся на координаты 58.519160, 31.297477, и напиши слово которое написано при входе.</p><p>Если ты не надела шарфик то идем домой, дальше я не пущу тебя так</p>',
    correctAnswer: 'РОСГОССТРАХ',
    rewardHtml: '<p>Супер! Не переживай это не долго займет времени, потопали дальше</p>',
  },
  {
    id: 3,
    title: 'Уровень 3',
    short: 'Ласочка.',
    description: 'Вторая точка нашего пути. Здесь ты также будешь идти по координатам и искать маленькую подсказку.',
    type: 'single-answer',
    instructionHtml: '<p><strong>Задание:</strong> Теперь потопали сюда 58.517686, 31.293827, тут тебе надо будет написать масштаб карты.</p><p>А на обратном пути давай зайдем в магазин за вкусняшками и да бельвито тоже сам куплю.</p>',
    correctAnswer: '1:100',
    rewardHtml: '<p>Отлично! Ты умничка. 💖</p>',
  },
  {
    id: 4,
    title: 'Уровень 4',
    short: 'Девочка моя.',
    description: 'Принцып ты поняла давай теперь дальше сама.',
    type: 'single-answer',
    instructionHtml: '<p><strong>Задание:</strong> Найди на карте Дом купца П.И.Ширяева и напиши регистрационный номер дома.</p><p>Я думал меня тут свяжут когда я это все делал.</p>',
    correctAnswer: '532511431160005',
    rewardHtml: '<p>Ого разгляела, отлично, давай дальше.</p>',
  },
  {
    id: 5,
    title: 'Уровень 5',
    short: 'Солнышка.',
    description: 'Ты уже далеко зашла. Здесь будет ещё одно место по координатам.',
    type: 'single-answer',
    instructionHtml: '<p><strong>Задание:</strong> Давай теперь сюда 58.517531, 31.283057, тут ты увидешь какую то пожарную хуйню или не хуйню, короче залупу железную с надписью ПГ и стрелками, какой то умник написал на ней число, вбей его в ответ и валим отсюда, не нравится мне этот угол, он кривой.</p><p>Еще и люди в день когда я все продумывал тут бегали, надеюсь сегодня без них будет.</p>',
    correctAnswer: '20',
    rewardHtml: '<p>Супер! Мы уже прошли большую часть пути.</p>',
  },
  {
    id: 6,
    title: 'Уровень 6',
    short: 'Стройняшка.',
    description: 'Тут давай попробуем не эти грязные табличка на стенах а башни.',
    type: 'single-answer',
    instructionHtml: '<p><strong>Задание:</strong> Так прогуляемся до точки 58.519853, 31.282537 встань в обнимку со мной и определи в какой стороне находися от тебя Новгородская Эфелива башня, тоесть Север Юг Запад Восток.</p>',
    correctAnswer: 'Запад',
    rewardHtml: '<p>Класс значит найти наше счастье мы точно сможем (Если что я уже безумно счастлив).</p>',
  },
  {
    id: 7,
    title: 'Уровень 7',
    short: 'Забота.',
    description: 'Тут проверим твою интуицию.',
    type: 'single-answer',
    instructionHtml: '<p><strong>Задание:</strong> Пройди к ближайшему музею и напиши любимую книгу моей мамы.</p>',
    correctAnswer: 'Мастер и Маргарита',
    rewardHtml: '<p>Ой ты радость моя догадалась.</p>',
  },
  {
    id: 8,
    title: 'Уровень 8',
    short: 'Спокойствие.',
    description: 'Далеко не уходи не зря мы сюда топали.',
    type: 'single-answer',
    instructionHtml: '<p><strong>Задание:</strong> Осмотри музей со всех сторон и напиши какого значения этот дом.</p><p>Тут я мог дать подсказку, но я еще думае давать или нет.</p><p>Чего стоишь замативируй меня дать подсказку.</p><p>Надеюсь ты поцеловал, а не прижучила.</p>',
    correctAnswer: 'Регионального',
    rewardHtml: '<p>Красота! Веди нас дальше.</p>',
  },
  {
    id: 9,
    title: 'Уровень 9',
    short: 'Радость.',
    description: 'Если устала я с радость тебя понесу хихихи.',
    type: 'single-answer',
    instructionHtml: '<p><strong>Задание:</strong> Теперь сюда топаем 58.523605, 31.273952, ты увидишь будки, напиши во сколько начинается последний перервы у третий с права будки.</p><p>Подсказка: <strong>Она находится в городе</strong>.</p>',
    correctAnswer: '20.45',
    rewardHtml: '<p>Отлично!</p>',
  },

  // ============================================================
  // УРОВЕНЬ 10 — обычная точка по координатам (бывший уровень 11)
  // ============================================================
  {
    id: 10,
    title: 'Уровень 10',
    short: 'Счастье.',
    description: 'Давай любовь моя немного еще.',
    type: 'single-answer',
    // ЗАМЕНИ координаты и ответ на реальные
    instructionHtml: '<p><strong>Задание:</strong> Обыщи мня и найди подсказку.</p>',
    correctAnswer: 'Котозявра', // ← ЗАМЕНИ на реальный ответ с места
    rewardHtml: '<p>Облапала меня, ужасссс.</p>',
  },

  // ============================================================
  // УРОВЕНЬ 11 — Машина без проверки (бывший уровень 10)
  // Переместили сюда по твоей просьбе
  // ============================================================
  {
    id: 11,
    title: 'Уровень 11',
    short: 'Любовь.',
    description: 'Будь очень внимательна.',
    type: 'single-answer-no-check',
    // ЗАМЕНИ текст задания и координаты на реальные
    instructionHtml: '<p><strong>Задание:</strong> Иди на эти координаты 58.523628, 31.270423 и дождись крассного сигнала светофора, посмотри на право и напиши номер первой машины которая стоит на светофоре, только цифры номера.</p>',
    rewardHtml: '<p>Вот как ты оказывается умеешь, я восхищен.</p>',
  },

  // ============================================================
  // УРОВЕНЬ 12 — Задание с фотографией
  // ЗАМЕНИ src картинки на реальную ссылку или base64
  // ============================================================
  {
    id: 12,
    title: 'Уровень 12',
    short: 'Мадам.',
    description: 'Таааак, ну и совсем немного осталось до прохождения пути, давай давай, верю в тебя',
    type: 'single-answer',
    // Замени src="" на ссылку на свою фотографию.
    // Можно вставить: https://ссылка.на/фото.jpg
    // или закодировать картинку в base64 и вставить: data:image/jpeg;base64,/9j/...
    instructionHtml: `
      <p><strong>Задание:</strong> Надо будет найти в парке фонтан со скульптурами из сказки Садко, затем узнать какой цвет скрывается под фрошем и написать его.</p>
      <p>Тут сама, большая уже девочка.</p>
      <div style="margin: 12px 0; text-align: center;">
        <img
          src="fant.jpg"
          alt="Найди это место"
          style="max-width:100%; border-radius:14px; box-shadow:0 8px 24px rgba(0,0,0,0.5);"
          onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"
        />
        <div style="display:none; padding:20px; background:rgba(255,255,255,0.08); border-radius:14px; color:#f4d9ff;">
          📷 Фото загружается...<br><small>Убедись что вставил правильную ссылку на картинку в поле src</small>
        </div>
      </div>
      <p style="font-size:0.85rem; color:#f3d0ff; opacity:0.8;">Не спеши, посмотри внимательно 😊</p>
    `,
    correctAnswer: 'Красный', // ← ЗАМЕНИ на реальный ответ с места
    rewardHtml: '<p>Умничка моя, ну и последний шаг 💖</p>',
  },

  {
    id: 13,
    title: 'Уровень 13 ',
    short: 'Миледи.',
    description: 'КОРОЧЕ ВСЕ, теперь топаем к последниму месту',
    type: 'final',
    instructionHtml: '<p><strong>Финиш!</strong> Топай сюда 58.523765, 31.265778 и сама увидешь все милыми, большими и самыми прекрасными глазками.</p>',
    finalTest: {
      questions: [
        'Делать еще похожии штуки?',
        'Хоть раз жалела что предлоила в тот день мне остаться?',
        'Обещай, что если сейчас тебе что то не понравится то ты обязательно скажешь мне?',
      ],
    },
  },
];

const STORAGE_KEY = 'love-quest-v1';

// ==========================
// РАБОТА С ПРОГРЕССОМ В localStorage
// ==========================
function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return {
        maxUnlockedLevelId: 1,
        completedLevels: [],
        quizState: { currentQuestionIndex: 0, givenAnswers: [] },
      };
    }
    return JSON.parse(raw);
  } catch (e) {
    console.error('Не удалось прочитать прогресс из localStorage', e);
    return {
      maxUnlockedLevelId: 1,
      completedLevels: [],
      quizState: { currentQuestionIndex: 0, givenAnswers: [] },
    };
  }
}

function saveProgress(progress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    console.error('Не удалось сохранить прогресс в localStorage', e);
  }
}

function resetProgress() {
  localStorage.removeItem(STORAGE_KEY);
  return loadProgress();
}

// ==========================
// DOM-ЭЛЕМЕНТЫ
// ==========================
const levelsGrid      = document.getElementById('levelsGrid');
const levelPanel      = document.getElementById('levelPanel');
const backToLevelsBtn = document.getElementById('backToLevels');
const levelTitleEl    = document.getElementById('levelTitle');
const levelDescriptionEl = document.getElementById('levelDescription');
const levelContentEl  = document.getElementById('levelContent');
const answerForm      = document.getElementById('answerForm');
const answerInput     = document.getElementById('answerInput');
const feedbackEl      = document.getElementById('feedback');
const rewardEl        = document.getElementById('reward');
const resetBtn        = document.getElementById('resetProgress');
const loveOverlay     = document.getElementById('loveOverlay');

let state        = loadProgress();
let currentLevel = null;

// ==========================
// РЕНДЕР СЕТКИ УРОВНЕЙ
// ==========================
function renderLevelsGrid() {
  levelsGrid.innerHTML = '';
  LEVELS.forEach((level) => {
    const card        = document.createElement('article');
    card.className    = 'level-card';
    const isUnlocked  = level.id <= state.maxUnlockedLevelId;
    const isCompleted = state.completedLevels.includes(level.id);

    if (!isUnlocked) card.classList.add('locked');

    const statusText  = isCompleted ? '✅ Пройден' : isUnlocked ? '🔓 Доступен' : '🔒 Закрыт';
    const badgeClass  = isCompleted ? 'badge-done' : isUnlocked ? 'badge-unlocked' : 'badge-locked';

    card.innerHTML = `
      <div class="level-card-content">
        <div class="level-number">Уровень ${level.id}</div>
        <div class="level-status">
          <span class="badge ${badgeClass}">${statusText}</span>
        </div>
        <div class="level-preview">${level.short}</div>
      </div>
    `;

    if (isUnlocked) {
      card.addEventListener('click', () => openLevel(level.id));
    }
    levelsGrid.appendChild(card);
  });
}

// ==========================
// ОТКРЫТЬ УРОВЕНЬ
// ==========================
function openLevel(levelId) {
  const level = LEVELS.find((l) => l.id === levelId);
  if (!level) return;

  currentLevel = level;
  levelTitleEl.textContent       = level.title;
  levelDescriptionEl.textContent = level.description;
  levelContentEl.innerHTML       = '';
  feedbackEl.textContent         = '';
  feedbackEl.className           = 'feedback';
  rewardEl.innerHTML             = '';
  answerInput.value              = '';
  answerForm.classList.remove('hidden');

  if (level.type === 'quiz') {
    renderQuizQuestion();
  } else if (level.type === 'single-answer' || level.type === 'single-answer-no-check') {
    const inst = document.createElement('div');
    inst.className   = 'level-instruction';
    inst.innerHTML   = level.instructionHtml || '';
    levelContentEl.appendChild(inst);
    document.getElementById('answerLabel').textContent = 'Твой ответ:';

    // Если уровень уже пройден — показываем награду сразу
    if (state.completedLevels.includes(level.id) && level.rewardHtml) {
      rewardEl.innerHTML = level.rewardHtml;
    }
  } else if (level.type === 'final') {
    renderFinalLevel(level);
    answerForm.classList.add('hidden');
  }

  levelPanel.classList.remove('hidden');
  levelsGrid.parentElement.scrollTop = 0;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==========================
// ЗАКРЫТЬ ПАНЕЛЬ УРОВНЯ
// ==========================
function closeLevelPanel() {
  levelPanel.classList.add('hidden');
  currentLevel = null;
}

backToLevelsBtn.addEventListener('click', closeLevelPanel);

// ==========================
// КВИЗ
// ==========================
function renderQuizQuestion() {
  const quiz   = currentLevel.quiz;
  const qIndex = state.quizState.currentQuestionIndex || 0;

  levelContentEl.innerHTML = '';
  answerInput.value        = '';
  feedbackEl.textContent   = '';
  feedbackEl.className     = 'feedback';

  if (qIndex >= quiz.questions.length) {
    // Квиз пройден
    answerForm.classList.add('hidden');
    const done = document.createElement('div');
    done.className = 'level-instruction';
    done.innerHTML = `<p>✅ Все вопросы пройдены!</p><p>${quiz.rewardText || ''}</p>`;
    levelContentEl.appendChild(done);
    handleLevelComplete(currentLevel, null);
    return;
  }

  const question  = quiz.questions[qIndex];
  const container = document.createElement('div');
  container.className = 'level-instruction';
  container.innerHTML = `<p><strong>Вопрос ${qIndex + 1} из ${quiz.questions.length}.</strong></p><p>${question.q}</p>`;
  levelContentEl.appendChild(container);
  document.getElementById('answerLabel').textContent = 'Твой ответ:';
}

function checkQuizAnswer(answerRaw) {
  const quiz      = currentLevel.quiz;
  const qIndex    = state.quizState.currentQuestionIndex || 0;
  const question  = quiz.questions[qIndex];
  if (!question) return;

  const normalizedLower = answerRaw.trim().toLowerCase();
  const correct         = String(question.a).trim().toLowerCase();

  if (!normalizedLower) { showError('Ответ не может быть пустым.'); return; }

  // Спец-эффект сердечка для 4-го вопроса
  const isFourthQuestion = currentLevel.id === 1 && qIndex === 3;
  const specialLove      = isFourthQuestion && normalizedLower === 'я люблю тебя';
  if (specialLove) showLoveOverlay();

  if (normalizedLower === correct || specialLove) {
    showOk('Верно! ✅');
    state.quizState.currentQuestionIndex = qIndex + 1;
    state.quizState.givenAnswers.push(answerRaw.trim());
    saveProgress(state);
    setTimeout(renderQuizQuestion, 500);
  } else {
    showError('Пока не то, попробуй ещё раз 😊');
  }
}

// ==========================
// ОБЫЧНЫЙ УРОВЕНЬ (single-answer / no-check)
// ==========================
function checkSingleAnswerLevel(level, answerRaw) {
  const normalized = answerRaw.trim().toLowerCase();
  if (!normalized) { showError('Введи ответ.'); return; }

  if (level.type === 'single-answer-no-check') {
    showOk('Принято! ✅');
    handleLevelComplete(level, level.rewardHtml || '');
    answerForm.classList.add('hidden');
    return;
  }

  const correct = String(level.correctAnswer).trim().toLowerCase();
  if (normalized === correct) {
    showOk('Правильно! ✅');
    handleLevelComplete(level, level.rewardHtml || '');
    answerForm.classList.add('hidden');
  } else {
    showError('Не совсем так, попробуй ещё раз 😊');
  }
}

// ==========================
// ФИНАЛЬНЫЙ УРОВЕНЬ
// ==========================
function renderFinalLevel(level) {
  levelContentEl.innerHTML = '';
  const container = document.createElement('div');
  container.className = 'level-instruction';

  const finalQuestions = level.finalTest?.questions || [];
  const listItems = finalQuestions.map((q) => `<li>${q}</li>`).join('');

  container.innerHTML = `
    ${level.instructionHtml || ''}
    <div class="final-test">
      <p><strong>Небольшой финальный тест. Просто ответь на пару вопросов в голове или вслух:</strong></p>
      <ul>${listItems}</ul>
    </div>
    <p style="margin-top:12px;">А дальше тебя уже ждёт небольшой сюрприз 😊</p>
  `;
  levelContentEl.appendChild(container);
  rewardEl.innerHTML = '<p>Ты прошла весь квест. Я очень рад, что ты дошла до конца 💗</p>';
  handleLevelComplete(level, null);
}

// ==========================
// ЗАВЕРШЕНИЕ УРОВНЯ
// ==========================
function handleLevelComplete(level, rewardHtmlOrText) {
  if (!state.completedLevels.includes(level.id)) {
    state.completedLevels.push(level.id);
  }
  const nextLevelId = level.id + 1;
  if (LEVELS.some((l) => l.id === nextLevelId)) {
    if (state.maxUnlockedLevelId < nextLevelId) {
      state.maxUnlockedLevelId = nextLevelId;
    }
  }
  saveProgress(state);
  renderLevelsGrid();

  if (rewardHtmlOrText) {
    if (rewardHtmlOrText.includes('<')) {
      rewardEl.innerHTML = rewardHtmlOrText;
    } else {
      rewardEl.textContent = rewardHtmlOrText;
    }
  }
}

// ==========================
// ХЕЛПЕРЫ
// ==========================
function showOk(text)    { feedbackEl.textContent = text; feedbackEl.className = 'feedback ok'; }
function showError(text) { feedbackEl.textContent = text; feedbackEl.className = 'feedback error'; }

function showLoveOverlay() {
  if (!loveOverlay) return;
  loveOverlay.classList.remove('hidden');
  setTimeout(() => loveOverlay.classList.add('hidden'), 2000);
}

// ==========================
// ФОРМА ОТВЕТА
// ==========================
answerForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!currentLevel) return;
  const value = answerInput.value;
  if (currentLevel.type === 'quiz') {
    checkQuizAnswer(value);
  } else if (
    currentLevel.type === 'single-answer' ||
    currentLevel.type === 'single-answer-no-check'
  ) {
    checkSingleAnswerLevel(currentLevel, value);
  }
});

// ==========================
// СБРОС ПРОГРЕССА
// ==========================
resetBtn.addEventListener('click', () => {
  if (!confirm('Точно сбросить весь прогресс? Его нельзя будет восстановить.')) return;
  state = resetProgress();
  currentLevel = null;
  closeLevelPanel();
  renderLevelsGrid();
  feedbackEl.textContent = '';
  rewardEl.innerHTML     = '';
});

// ==========================
// ФОНОВЫЕ СЕРДЕЧКИ
// ==========================
const bgParticles = document.getElementById('bgParticles');

function spawnHeart() {
  if (!bgParticles) return;
  const el        = document.createElement('div');
  el.className    = 'particle-heart';
  el.textContent  = '❤';
  const startX    = Math.random() * 100;
  const delay     = Math.random() * 8;
  const duration  = 10 + Math.random() * 6;
  el.style.left            = `${startX}%`;
  el.style.bottom          = '-40px';
  el.style.animationDuration = `${duration}s`;
  el.style.animationDelay    = `${delay}s`;
  bgParticles.appendChild(el);
  setTimeout(() => bgParticles.removeChild(el), (duration + delay) * 1000);
}

for (let i = 0; i < 14; i++) spawnHeart();
setInterval(spawnHeart, 2600);

// ==========================
// ИНИЦИАЛИЗАЦИЯ
// ==========================
renderLevelsGrid();
