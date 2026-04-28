// ============================================================
// 1. SPRÅKHANTERING & ÖVERSÄTTNINGAR
// ============================================================
const uiTexts = {
    sv: {
        pageTitle: '🌳 Trädslag och buskar',
        backBtn: '⬅ Tillbaka till testerna',
        progress: (current, total) => `Fråga ${current} / ${total}`,
        checkBtn: '✅ Kontrollera',
        nextBtn: '➡️ Nästa',
        correctAll: '✅ Rätt! Alla namn är korrekta.',
        wrongHeader: '❌ Fel! Rätt svar:',
        alreadyChecked: '⚠️ Du har redan kontrollerat detta träd. Gå vidare.',
        mustCheck: '🔍 Du måste kontrollera ditt svar först.',
        resultTitle: (correct, total) => `🌳 Övningen klar! 🌳<br>Rätt: ${correct} / ${total}`,
        perfect: '🎉 Perfekt! Alla rätt!',
        good: '💪 Bra kämpat! Öva gärna igen.',
        restartBtn: '🔄 Öva igen',
        backFromResult: '📋 Välj annat test',
        langSv: 'Svenska',
        langFi: 'Finska',
        langEn: 'Engelska',
        langLa: 'Latin',
        placeholderSv: 'Ange svenskt namn',
        placeholderFi: 'Ange finskt namn',
        placeholderEn: 'Ange engelskt namn',
        placeholderLa: 'Ange latinskt namn',
        // Nytt intro
        introText: 'Välkommen, välj vilka språk du vill öva på, du måste ha minst 2 språk valda.',
        startBtn: '🚀 Starta spelet'
    },
    fi: {
        pageTitle: '🌳 Puu- ja pensaslajit',
        backBtn: '⬅ Takaisin testeihin',
        progress: (c, t) => `Kysymys ${c} / ${t}`,
        checkBtn: '✅ Tarkista',
        nextBtn: '➡️ Seuraava',
        correctAll: '✅ Oikein! Kaikki nimet ovat oikein.',
        wrongHeader: '❌ Väärin! Oikeat vastaukset:',
        alreadyChecked: '⚠️ Olet jo tarkistanut tämän puun. Siirry eteenpäin.',
        mustCheck: '🔍 Tarkista vastauksesi ensin.',
        resultTitle: (c, t) => `🌳 Harjoitus valmis! 🌳<br>Oikein: ${c} / ${t}`,
        perfect: '🎉 Täydellistä! Kaikki oikein!',
        good: '💪 Hyvin yritetty! Harjoittele lisää.',
        restartBtn: '🔄 Harjoittele uudelleen',
        backFromResult: '📋 Valitse toinen testi',
        langSv: 'Ruotsi',
        langFi: 'Suomi',
        langEn: 'Englanti',
        langLa: 'Latina',
        placeholderSv: 'Anna ruotsinkielinen nimi',
        placeholderFi: 'Anna suomenkielinen nimi',
        placeholderEn: 'Anna englanninkielinen nimi',
        placeholderLa: 'Anna latinalainen nimi',
        introText: 'Tervetuloa, valitse kielet joita haluat harjoitella. Valitse vähintään 2 kieltä.',
        startBtn: '🚀 Aloita peli'
    },
    en: {
        pageTitle: '🌳 Tree and shrub species',
        backBtn: '⬅ Back to tests',
        progress: (c, t) => `Question ${c} / ${t}`,
        checkBtn: '✅ Check',
        nextBtn: '➡️ Next',
        correctAll: '✅ Correct! All names are right.',
        wrongHeader: '❌ Wrong! Correct answers:',
        alreadyChecked: '⚠️ You have already checked this tree. Move on.',
        mustCheck: '🔍 You must check your answer first.',
        resultTitle: (c, t) => `🌳 Exercise complete! 🌳<br>Correct: ${c} / ${t}`,
        perfect: '🎉 Perfect! All correct!',
        good: '💪 Good effort! Practice again.',
        restartBtn: '🔄 Practice again',
        backFromResult: '📋 Choose another test',
        langSv: 'Swedish',
        langFi: 'Finnish',
        langEn: 'English',
        langLa: 'Latin',
        placeholderSv: 'Enter Swedish name',
        placeholderFi: 'Enter Finnish name',
        placeholderEn: 'Enter English name',
        placeholderLa: 'Enter Latin name',
        introText: 'Welcome, choose the languages you want to practice. You must select at least 2 languages.',
        startBtn: '🚀 Start game'
    }
};

// ============================================================
// 2. DATABAS – TRÄDSLAG & BUSKAR
// ============================================================
const SPECIES_DATA = [
    { sv: "Gran",        fi: "Kuusi",         en: "Spruce",           la: "Picea abies" },
    { sv: "Tall",        fi: "Mänty",         en: "Pine",             la: "Pinus sylvestris" },
    { sv: "Vårtbjörk",   fi: "Rauduskoivu",   en: "Silver birch",     la: "Betula pendula" },
    { sv: "Glasbjörk",   fi: "Hieskoivu",     en: "Downy birch",      la: "Betula pubescens" },
    { sv: "Gråal",       fi: "Harmaaleppä",   en: "Grey alder",       la: "Alnus incana" },
    { sv: "Klibbal",     fi: "Tervaleppä",    en: "Common alder",     la: "Alnus glutinosa" },
    { sv: "Ek",          fi: "Tammi",         en: "Oak",              la: "Quercus robur" },
    { sv: "En",          fi: "Kataja",        en: "Juniper",          la: "Juniperus communis" },
    { sv: "Lärk",        fi: "Lehtikuusi",    en: "Larch",            la: "Larix decidua" },
    { sv: "Skogslind",   fi: "Metsälehmus",   en: "Lime",             la: "Tilia cordata" },
    { sv: "Skogsalm",    fi: "Vuorijalava",   en: "Wych elm",         la: "Ulmus glabra" },
    { sv: "Ask",         fi: "Saarni",        en: "Ash",              la: "Fraxinus excelsior" },
    { sv: "Hassel",      fi: "Pähkinäpensas", en: "Hazel",            la: "Corylus avellana" },
    { sv: "Lönn",        fi: "Metsävaahtera", en: "Maple",            la: "Acer platanoides" },
    { sv: "Hägg",        fi: "Tuomi",         en: "Bird cherry",      la: "Prunus padus" },
    { sv: "Rönn",        fi: "Pihlaja",       en: "Rowan",            la: "Sorbus aucuparia" },
    { sv: "Oxel",        fi: "Ruotsinpihlaja",en: "Swedish whitebeam",la: "Sorbus intermedia" },
    { sv: "Sälg",        fi: "Raita",         en: "Goat willow",      la: "Salix caprea" },
    { sv: "Asp",         fi: "Haapa",         en: "Aspen",            la: "Populus tremula" },
    { sv: "Olvon",       fi: "Koiranheisi",   en: "Guelder rose",     la: "Viburnum opulus" },
    { sv: "Skvattram",   fi: "Suopursu",      en: "Marsh Labrador tea", la: "Rhododendron tomentosum" },
    { sv: "Skogstry",    fi: "Lehtokuusama",  en: "Fly honeysuckle",  la: "Lonicera xylosteum" },
    { sv: "Hallon",      fi: "Vadelma",       en: "Raspberry",        la: "Rubus idaeus" },
    { sv: "Blåbär",      fi: "Mustikka",      en: "Bilberry",         la: "Vaccinium myrtillus" },
    { sv: "Lingon",      fi: "Puolukka",      en: "Lingonberry",      la: "Vaccinium vitis-idaea" },
    { sv: "Hjorton",     fi: "Lakka",         en: "Cloudberry",       la: "Rubus chamaemorus" }
];

// ============================================================
// 3. HJÄLPFUNKTIONER
// ============================================================
function shuffleArray(arr) {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function getCurrentLanguage() {
    const saved = localStorage.getItem('preferredLanguage');
    return (saved && uiTexts[saved]) ? saved : 'sv';
}

function getUIText(key, ...args) {
    const lang = getCurrentLanguage();
    const textObj = uiTexts[lang];
    let value = textObj[key];
    if (typeof value === 'function') {
        return value(...args);
    }
    return value;
}

// ============================================================
// 4. STATE FÖR ÖVNINGEN
// ============================================================
let treeQuizList = [];
let treeQuizIndex = 0;
let treeQuizCorrectCount = 0;
let treeCurrentSpecies = null;
let treeDisplayLang = null;
let treeRequiredLangs = [];
let treeAnsweredLocked = false;
let selectedLangs = []; // språk valda av användaren

// DOM-element
const introCard = document.getElementById('introCard');
const quizCard = document.getElementById('quizCard');
const resultCard = document.getElementById('resultCard');
const progressEl = document.getElementById('progressIndicator');
const treeDisplayName = document.getElementById('treeDisplayName');
const treeDisplayLanguage = document.getElementById('treeDisplayLanguage');
const treeInputsArea = document.getElementById('treeInputsArea');
const treeCheckBtn = document.getElementById('treeCheckBtn');
const treeNextBtn = document.getElementById('treeNextBtn');
const resultStats = document.getElementById('resultStats');
const startGameBtn = document.getElementById('startGameBtn');

let treeFeedback = null;

function getFeedbackElement() {
    if (!treeFeedback) {
        treeFeedback = document.createElement('div');
        treeFeedback.id = 'treeFeedbackArea';
        treeFeedback.className = 'feedback hidden';
        const buttonGroup = quizCard.querySelector('.button-group');
        quizCard.insertBefore(treeFeedback, buttonGroup);
    }
    return treeFeedback;
}

// ============================================================
// 5. UPPDATERA UI-TEXTER (inkl. intro)
// ============================================================
function updateUITexts() {
    const lang = getCurrentLanguage();
    document.title = uiTexts[lang].pageTitle;
    document.getElementById('pageTitle').textContent = uiTexts[lang].pageTitle;
    document.getElementById('backToTestsBtn').textContent = uiTexts[lang].backBtn;
    treeCheckBtn.textContent = uiTexts[lang].checkBtn;
    treeNextBtn.textContent = uiTexts[lang].nextBtn;
    document.getElementById('restartTreeBtn').textContent = uiTexts[lang].restartBtn;
    document.getElementById('backFromResultBtn').textContent = uiTexts[lang].backFromResult;

    // Intro
    document.getElementById('introText').textContent = uiTexts[lang].introText;
    startGameBtn.textContent = uiTexts[lang].startBtn;

    // Checkbox-labels
    const langLabels = ['sv', 'fi', 'en', 'la'];
    langLabels.forEach(code => {
        const span = document.querySelector(`span[data-lang-label="${code}"]`);
        if (span) span.textContent = uiTexts[lang]['lang' + code.charAt(0).toUpperCase() + code.slice(1)];
    });
}

// ============================================================
// 6. STARTA SPEL (efter språkval)
// ============================================================
function startGame() {
    // Läs valda språk
    const checkboxes = document.querySelectorAll('#langCheckboxes input[type="checkbox"]');
    selectedLangs = [];
    checkboxes.forEach(cb => {
        if (cb.checked) selectedLangs.push(cb.value);
    });

    if (selectedLangs.length < 2) {
        alert(getUIText('introText')); // visa påminnelse (kan förbättras)
        return;
    }

    introCard.classList.add('hidden');
    quizCard.classList.remove('hidden');
    resultCard.classList.add('hidden');

    startTreeQuiz();
}

function startTreeQuiz() {
    treeQuizList = shuffleArray([...SPECIES_DATA]);
    treeQuizIndex = 0;
    treeQuizCorrectCount = 0;
    treeAnsweredLocked = false;

    updateUITexts();
    renderTreeQuestion();
}

// ============================================================
// 7. RENDERA AKTUELL FRÅGA (med selectedLangs)
// ============================================================
function renderTreeQuestion() {
    if (treeQuizIndex >= treeQuizList.length) {
        showResult();
        return;
    }

    const species = treeQuizList[treeQuizIndex];
    treeCurrentSpecies = species;

    // Välj display-språk slumpmässigt från valda
    const displayIdx = Math.floor(Math.random() * selectedLangs.length);
    treeDisplayLang = selectedLangs[displayIdx];
    const displayValue = species[treeDisplayLang];

    // Resterande valda språk är inputs
    treeRequiredLangs = selectedLangs.filter(l => l !== treeDisplayLang);

    progressEl.textContent = getUIText('progress', treeQuizIndex + 1, treeQuizList.length);

    treeDisplayName.textContent = displayValue;
    const lang = getCurrentLanguage();
    const langNames = uiTexts[lang];
    treeDisplayLanguage.textContent = `(${langNames['lang' + treeDisplayLang.charAt(0).toUpperCase() + treeDisplayLang.slice(1)]})`;

    treeInputsArea.innerHTML = '';
    treeRequiredLangs.forEach(langCode => {
        const row = document.createElement('div');
        row.className = 'tree-input-row';

        const label = document.createElement('label');
        label.textContent = langNames['lang' + langCode.charAt(0).toUpperCase() + langCode.slice(1)] + ':';
        row.appendChild(label);

        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = langNames['placeholder' + langCode.charAt(0).toUpperCase() + langCode.slice(1)];
        input.dataset.lang = langCode;
        row.appendChild(input);

        treeInputsArea.appendChild(row);
    });

    const fb = getFeedbackElement();
    fb.classList.add('hidden');
    fb.innerHTML = '';
    fb.className = 'feedback';

    treeCheckBtn.disabled = false;
    treeNextBtn.disabled = true;
    treeAnsweredLocked = false;
}

// ============================================================
// 8. KONTROLLERA SVAR
// ============================================================
function checkTreeAnswer() {
    const fb = getFeedbackElement();

    if (treeAnsweredLocked) {
        fb.classList.remove('hidden');
        fb.innerHTML = getUIText('alreadyChecked');
        fb.className = 'feedback wrong';
        return;
    }

    const inputs = treeInputsArea.querySelectorAll('input');
    let allCorrect = true;
    const wrongFields = [];

    inputs.forEach(input => {
        const lang = input.dataset.lang;
        const userAnswer = input.value.trim();
        const correctAnswer = treeCurrentSpecies[lang];

        if (userAnswer.toLowerCase() !== correctAnswer.toLowerCase()) {
            allCorrect = false;
            wrongFields.push({ lang, correct: correctAnswer });
        }
    });

    treeAnsweredLocked = true;
    if (allCorrect) treeQuizCorrectCount++;

    fb.classList.remove('hidden');
    const lang = getCurrentLanguage();
    if (allCorrect) {
        fb.innerHTML = getUIText('correctAll');
        fb.className = 'feedback correct';
    } else {
        let msg = `${getUIText('wrongHeader')}<br>`;
        const langNames = uiTexts[lang];
        wrongFields.forEach(wf => {
            msg += `${langNames['lang' + wf.lang.charAt(0).toUpperCase() + wf.lang.slice(1)]}: ${wf.correct}<br>`;
        });
        fb.innerHTML = msg;
        fb.className = 'feedback wrong';
    }

    inputs.forEach(input => input.disabled = true);
    treeCheckBtn.disabled = true;
    treeNextBtn.disabled = false;
}

// ============================================================
// 9. NÄSTA FRÅGA
// ============================================================
function nextTreeQuestion() {
    const fb = getFeedbackElement();
    if (!treeAnsweredLocked) {
        fb.classList.remove('hidden');
        fb.innerHTML = getUIText('mustCheck');
        fb.className = 'feedback wrong';
        return;
    }
    treeQuizIndex++;
    renderTreeQuestion();
}

// ============================================================
// 10. VISA RESULTAT
// ============================================================
function showResult() {
    quizCard.classList.add('hidden');
    resultCard.classList.remove('hidden');

    const total = treeQuizList.length;
    const correct = treeQuizCorrectCount;
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
// 11. EVENT LISTENERS
// ============================================================
document.getElementById('backToTestsBtn').addEventListener('click', () => {
    window.location.href = 'tradslagochbuskar.html';
});

startGameBtn.addEventListener('click', startGame);

treeCheckBtn.addEventListener('click', checkTreeAnswer);
treeNextBtn.addEventListener('click', nextTreeQuestion);

document.getElementById('restartTreeBtn').addEventListener('click', () => {
    // Gå tillbaka till intro för att välja språk igen
    introCard.classList.remove('hidden');
    quizCard.classList.add('hidden');
    resultCard.classList.add('hidden');
    updateUITexts();
});

document.getElementById('backFromResultBtn').addEventListener('click', () => {
    window.location.href = 'tradslagochbuskar.html';
});

// Aktivera/avaktivera start-knapp baserat på antal val
document.getElementById('langCheckboxes').addEventListener('change', () => {
    const checked = document.querySelectorAll('#langCheckboxes input[type="checkbox"]:checked').length;
    startGameBtn.disabled = checked < 2;
});

// ============================================================
// 12. INIT – visa intro
// ============================================================
updateUITexts();
introCard.classList.remove('hidden');
quizCard.classList.add('hidden');
resultCard.classList.add('hidden');
// Start-knapp aktiveras först när användare ändrar (eller redan 4 valda)
startGameBtn.disabled = false; // eftersom alla är förkryssade initialt