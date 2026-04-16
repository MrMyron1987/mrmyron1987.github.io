// ============================================================
// 1. SPRÅKHANTERING & ÖVERSÄTTNINGAR
// ============================================================
const uiTexts = {
    sv: {
        pageTitle: '🧮 Kalkylera koefficienter',
        backBtn: '⬅ Tillbaka till testerna',
        progress: (c, t) => `Fråga ${c} / ${t}`,
        checkBtn: '✅ Kontrollera',
        nextBtn: '➡️ Nästa',
        correctAll: '✅ Rätt! Båda svaren stämmer.',
        wrongAnswer: '❌ Fel. Rätt svar: per hektar: {perHectare}, totalt: {total}',
        alreadyChecked: '⚠️ Du har redan kontrollerat denna fråga. Gå vidare.',
        mustCheck: '🔍 Du måste kontrollera ditt svar först.',
        resultTitle: (c, t) => `🧮 Övningen klar! 🧮<br>Rätt: ${c} / ${t}`,
        perfect: '🎉 Perfekt! Alla rätt!',
        good: '💪 Bra kämpat! Öva gärna igen.',
        restartBtn: '🔄 Öva igen',
        backFromResult: '📋 Välj annat test',
        perHectareLabel: 'Plantor per hektar (st/ha):',
        totalLabel: 'Totalt i figuren:',
        treePine: 'tall',
        treeSpruce: 'gran',
        treeBirch: 'björk',
        figureSize: 'figuren',
        coeffUsed: 'Koefficienten du använde är',
        // Korrigerad: endast coeff (med värde) används i meningen
        questionText: (pine, spruce, birch, area, coeffDesc) =>
            `I figuren har du mätt ${spruce} gran, ${pine} tall och ${birch} björk plantor. Figuren är ${area.toFixed(1)} ha stor. ${coeffDesc}. Hur många plantor finns det per hektar och totalt i figuren?`,
        invalidInput: 'Vänligen fyll i båda fälten med giltiga tal.',
    },
    fi: {
        pageTitle: '🧮 Laske kertoimet',
        backBtn: '⬅ Takaisin testeihin',
        progress: (c, t) => `Kysymys ${c} / ${t}`,
        checkBtn: '✅ Tarkista',
        nextBtn: '➡️ Seuraava',
        correctAll: '✅ Oikein! Molemmat vastaukset oikein.',
        wrongAnswer: '❌ Väärin. Oikeat vastaukset: hehtaaria kohti: {perHectare}, yhteensä kuviolla: {total}',
        alreadyChecked: '⚠️ Olet jo tarkistanut tämän kysymyksen. Siirry eteenpäin.',
        mustCheck: '🔍 Tarkista vastauksesi ensin.',
        resultTitle: (c, t) => `🧮 Harjoitus valmis! 🧮<br>Oikein: ${c} / ${t}`,
        perfect: '🎉 Täydellistä! Kaikki oikein!',
        good: '💪 Hyvin yritetty! Harjoittele lisää.',
        restartBtn: '🔄 Harjoittele uudelleen',
        backFromResult: '📋 Valitse toinen testi',
        perHectareLabel: 'Taimia hehtaarilla (kpl/ha):',
        totalLabel: 'Yhteensä kuviolla:',
        treePine: 'mänty',
        treeSpruce: 'kuusi',
        treeBirch: 'koivu',
        figureSize: 'kuvio',
        coeffUsed: 'Käyttämäsi kerroin on',
        questionText: (pine, spruce, birch, area, coeffDesc) =>
            `Kuviolla mittasit ${spruce} kuusta, ${pine} mäntyä ja ${birch} koivua. Kuvion pinta-ala on ${area.toFixed(1)} ha. ${coeffDesc}. Kuinka monta tainta on hehtaarilla ja yhteensä kuviolla?`,
        invalidInput: 'Täytä molemmat kentät kelvollisilla numeroilla.',
    },
    en: {
        pageTitle: '🧮 Calculate coefficients',
        backBtn: '⬅ Back to tests',
        progress: (c, t) => `Question ${c} / ${t}`,
        checkBtn: '✅ Check',
        nextBtn: '➡️ Next',
        correctAll: '✅ Correct! Both answers are right.',
        wrongAnswer: '❌ Wrong. Correct answers: per hectare: {perHectare}, total in stand: {total}',
        alreadyChecked: '⚠️ You have already checked this question. Move on.',
        mustCheck: '🔍 You must check your answer first.',
        resultTitle: (c, t) => `🧮 Exercise complete! 🧮<br>Correct: ${c} / ${t}`,
        perfect: '🎉 Perfect! All correct!',
        good: '💪 Good effort! Practice again.',
        restartBtn: '🔄 Practice again',
        backFromResult: '📋 Choose another test',
        perHectareLabel: 'Saplings per hectare (st/ha):',
        totalLabel: 'Total in the stand:',
        treePine: 'pine',
        treeSpruce: 'spruce',
        treeBirch: 'birch',
        figureSize: 'stand',
        coeffUsed: 'The coefficient used is',
        questionText: (pine, spruce, birch, area, coeffDesc) =>
            `In the stand you measured ${spruce} spruce, ${pine} pine and ${birch} birch seedlings. The stand area is ${area.toFixed(1)} ha. ${coeffDesc}. How many seedlings per hectare and in total in the stand?`,
        invalidInput: 'Please fill in both fields with valid numbers.',
    }
};

// ============================================================
// 2. HJÄLPFUNKTIONER
// ============================================================
function getCurrentLanguage() {
    const saved = localStorage.getItem('preferredLanguage');
    return (saved && uiTexts[saved]) ? saved : 'sv';
}

function getUIText(key, ...args) {
    const lang = getCurrentLanguage();
    const val = uiTexts[lang][key];
    if (typeof val === 'function') return val(...args);
    return val;
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomDecimal(min, max) {
    return Math.round((Math.random() * (max - min) + min) * 10) / 10;
}

function generateQuestion() {
    const totalSeedlings = randomInt(5, 20);
    let pine = randomInt(0, totalSeedlings);
    let spruce = randomInt(0, totalSeedlings - pine);
    let birch = totalSeedlings - pine - spruce;

    const area = randomDecimal(1.0, 10.0);
    const coeffType = Math.random() < 0.5 ? 3.99 : 5.64;
    const multiplier = coeffType === 3.99 ? 200 : 100;

    const perHectare = totalSeedlings * multiplier;
    const totalInStand = Math.round(perHectare * area);

    return {
        pine, spruce, birch, totalSeedlings, area, coeffType, multiplier,
        perHectare, totalInStand
    };
}

// ============================================================
// 3. STATE
// ============================================================
let questions = [];
let currentIndex = 0;
let correctCount = 0;
let answered = false;
let userAnswers = [];

const quizCard = document.getElementById('quizCard');
const resultCard = document.getElementById('resultCard');
const progressEl = document.getElementById('progressIndicator');
const questionText = document.getElementById('questionText');
const perHectareInput = document.getElementById('perHectareInput');
const totalInput = document.getElementById('totalInput');
const feedbackArea = document.getElementById('feedbackArea');
const checkBtn = document.getElementById('checkBtn');
const nextBtn = document.getElementById('nextBtn');
const restartBtn = document.getElementById('restartBtn');
const backFromResultBtn = document.getElementById('backFromResultBtn');
const resultStats = document.getElementById('resultStats');

// ============================================================
// 4. UPPDATERA UI-TEXTER
// ============================================================
function updateUITexts() {
    const lang = getCurrentLanguage();
    document.title = uiTexts[lang].pageTitle;
    document.getElementById('pageTitle').textContent = uiTexts[lang].pageTitle;
    document.getElementById('backToTestsBtn').textContent = uiTexts[lang].backBtn;
    document.getElementById('perHectareLabel').textContent = uiTexts[lang].perHectareLabel;
    document.getElementById('totalLabel').textContent = uiTexts[lang].totalLabel;
    checkBtn.textContent = uiTexts[lang].checkBtn;
    nextBtn.textContent = uiTexts[lang].nextBtn;
    restartBtn.textContent = uiTexts[lang].restartBtn;
    backFromResultBtn.textContent = uiTexts[lang].backFromResult;
}

// ============================================================
// 5. STARTA / ÅTERSTÄLL
// ============================================================
function startQuiz() {
    questions = [];
    for (let i = 0; i < 10; i++) questions.push(generateQuestion());
    currentIndex = 0;
    correctCount = 0;
    answered = false;
    userAnswers = new Array(10).fill(false);

    quizCard.classList.remove('hidden');
    resultCard.classList.add('hidden');

    updateUITexts();
    renderQuestion();
}

// ============================================================
// 6. RENDERA FRÅGA
// ============================================================
function renderQuestion() {
    if (currentIndex >= questions.length) {
        showResult();
        return;
    }

    const q = questions[currentIndex];
    const lang = getCurrentLanguage();

    progressEl.textContent = getUIText('progress', currentIndex + 1, questions.length);

    const coeffValue = q.coeffType === 3.99 ? '3,99' : '5,64';
    const coeffDescription = `${getUIText('coeffUsed')} ${coeffValue}`;

    const pineName = uiTexts[lang].treePine;
    const spruceName = uiTexts[lang].treeSpruce;
    const birchName = uiTexts[lang].treeBirch;
    const figureWord = uiTexts[lang].figureSize;

    // Anropa questionText med rätt parametrar (endast coeffDescription, ej dubbel)
    let rawText = getUIText('questionText', q.pine, q.spruce, q.birch, q.area, coeffDescription);
    // Ersätt generiska trädslagsnamn med språkspecifika (om de förekommer som "gran", "tall", etc.)
    rawText = rawText
        .replace(/gran/g, spruceName)
        .replace(/tall/g, pineName)
        .replace(/björk/g, birchName)
        .replace(/figuren/g, figureWord)
        .replace(/kuvio/g, figureWord)
        .replace(/stand/g, figureWord);
    questionText.innerHTML = rawText;

    perHectareInput.value = '';
    totalInput.value = '';
    feedbackArea.classList.add('hidden');
    feedbackArea.innerHTML = '';
    feedbackArea.className = 'feedback';

    checkBtn.disabled = false;
    nextBtn.disabled = true;
    answered = false;
}

// ============================================================
// 7. KONTROLLERA SVAR
// ============================================================
function checkAnswer() {
    if (answered) {
        feedbackArea.classList.remove('hidden');
        feedbackArea.innerHTML = getUIText('alreadyChecked');
        feedbackArea.className = 'feedback wrong';
        return;
    }

    const perHectareVal = parseFloat(perHectareInput.value);
    const totalVal = parseFloat(totalInput.value);

    if (isNaN(perHectareVal) || isNaN(totalVal)) {
        feedbackArea.classList.remove('hidden');
        feedbackArea.innerHTML = getUIText('invalidInput');
        feedbackArea.className = 'feedback wrong';
        return;
    }

    const q = questions[currentIndex];
    const perHectareCorrect = q.perHectare;
    const totalCorrect = q.totalInStand;

    const isPerHectareOk = Math.abs(perHectareVal - perHectareCorrect) < 0.5;
    const isTotalOk = Math.abs(totalVal - totalCorrect) < 0.5;
    const allCorrect = isPerHectareOk && isTotalOk;

    answered = true;
    userAnswers[currentIndex] = allCorrect;
    if (allCorrect) correctCount++;

    feedbackArea.classList.remove('hidden');
    const lang = getCurrentLanguage();
    if (allCorrect) {
        feedbackArea.innerHTML = getUIText('correctAll');
        feedbackArea.className = 'feedback correct';
    } else {
        let msg = getUIText('wrongAnswer')
            .replace('{perHectare}', perHectareCorrect)
            .replace('{total}', totalCorrect);
        feedbackArea.innerHTML = msg;
        feedbackArea.className = 'feedback wrong';
    }

    checkBtn.disabled = true;
    nextBtn.disabled = false;
}

// ============================================================
// 8. NÄSTA FRÅGA
// ============================================================
function nextQuestion() {
    if (!answered) {
        feedbackArea.classList.remove('hidden');
        feedbackArea.innerHTML = getUIText('mustCheck');
        feedbackArea.className = 'feedback wrong';
        return;
    }
    currentIndex++;
    renderQuestion();
}

// ============================================================
// 9. VISA RESULTAT
// ============================================================
function showResult() {
    quizCard.classList.add('hidden');
    resultCard.classList.remove('hidden');

    const total = questions.length;
    const correct = correctCount;
    const lang = getCurrentLanguage();

    let message = getUIText('resultTitle', correct, total);
    if (correct === total) {
        message += `<br>${uiTexts[lang].perfect}`;
    } else {
        message += `<br>${uiTexts[lang].good}`;
    }
    resultStats.innerHTML = message;
}

// ============================================================
// 10. EVENT LISTENERS
// ============================================================
document.getElementById('backToTestsBtn').addEventListener('click', () => {
    window.location.href = '../Testerna/testerna.html';
});

checkBtn.addEventListener('click', checkAnswer);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', startQuiz);
backFromResultBtn.addEventListener('click', () => {
    window.location.href = '../Testerna/testerna.html';
});

// ============================================================
// 11. INIT
// ============================================================
startQuiz();