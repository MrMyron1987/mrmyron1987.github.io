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
        placeholderLa: 'Ange latinskt namn'
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
        placeholderLa: 'Anna latinalainen nimi'
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
        placeholderLa: 'Enter Latin name'
    }
};

// ============================================================
// 2. DATABAS – TRÄDSLAG & BUSKAR (oförändrad)
// ============================================================
const SPECIES_DATA = [
    { sv: "Gran",        fi: "Kuusi",         en: "Norway spruce",    la: "Picea abies" },
    { sv: "Tall",        fi: "Mänty",         en: "Scots pine",       la: "Pinus sylvestris" },
    { sv: "Vårtbjörk",   fi: "Rauduskoivu",   en: "Silver birch",     la: "Betula pendula" },
    { sv: "Glasbjörk",   fi: "Hieskoivu",     en: "Downy birch",      la: "Betula pubescens" },
    { sv: "Gråal",       fi: "Harmaaleppä",   en: "Grey alder",       la: "Alnus incana" },
    { sv: "Klibbal",     fi: "Tervaleppä",    en: "Common alder",     la: "Alnus glutinosa" },
    { sv: "Ek",          fi: "Tammi",         en: "Pedunculate oak",  la: "Quercus robur" },
    { sv: "En",          fi: "Kataja",        en: "Common juniper",   la: "Juniperus communis" },
    { sv: "Lärk",        fi: "Lehtikuusi",    en: "European larch",   la: "Larix decidua" },
    { sv: "Skogslind",   fi: "Metsälehmus",   en: "Small-leaved lime",la: "Tilia cordata" },
    { sv: "Skogsalm",    fi: "Vuorijalava",   en: "Wych elm",         la: "Ulmus glabra" },
    { sv: "Ask",         fi: "Saarni",        en: "European ash",     la: "Fraxinus excelsior" },
    { sv: "Hassel",      fi: "Pähkinäpensas", en: "Common hazel",     la: "Corylus avellana" },
    { sv: "Lönn",        fi: "Metsävaahtera", en: "Norway maple",     la: "Acer platanoides" },
    { sv: "Hägg",        fi: "Tuomi",         en: "Bird cherry",      la: "Prunus padus" },
    { sv: "Rönn",        fi: "Pihlaja",       en: "Rowan",            la: "Sorbus aucuparia" },
    { sv: "Oxel",        fi: "Ruotsinpihlaja",en: "Swedish whitebeam",la: "Sorbus intermedia" },
    { sv: "Sälg",        fi: "Raita",         en: "Goat willow",      la: "Salix caprea" },
    { sv: "Asp",         fi: "Haapa",         en: "European aspen",   la: "Populus tremula" },
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

// DOM-element
const quizCard = document.getElementById('quizCard');
const resultCard = document.getElementById('resultCard');
const progressEl = document.getElementById('progressIndicator');
const treeDisplayName = document.getElementById('treeDisplayName');
const treeDisplayLanguage = document.getElementById('treeDisplayLanguage');
const treeInputsArea = document.getElementById('treeInputsArea');
const treeCheckBtn = document.getElementById('treeCheckBtn');
const treeNextBtn = document.getElementById('treeNextBtn');
const resultStats = document.getElementById('resultStats');

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
// 5. UPPDATERA UI-TEXTER
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
}

// ============================================================
// 6. STARTA / ÅTERSTÄLL ÖVNINGEN
// ============================================================
function startTreeQuiz() {
    treeQuizList = shuffleArray([...SPECIES_DATA]);
    treeQuizIndex = 0;
    treeQuizCorrectCount = 0;
    treeAnsweredLocked = false;
    
    quizCard.classList.remove('hidden');
    resultCard.classList.add('hidden');
    
    updateUITexts();
    renderTreeQuestion();
}

// ============================================================
// 7. RENDERA AKTUELL FRÅGA
// ============================================================
function renderTreeQuestion() {
    if (treeQuizIndex >= treeQuizList.length) {
        showResult();
        return;
    }
    
    const species = treeQuizList[treeQuizIndex];
    treeCurrentSpecies = species;
    
    const langs = ['sv', 'fi', 'en', 'la'];
    const displayIdx = Math.floor(Math.random() * langs.length);
    treeDisplayLang = langs[displayIdx];
    const displayValue = species[treeDisplayLang];
    
    treeRequiredLangs = langs.filter(l => l !== treeDisplayLang);
    
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
    window.location.href = 'tester.html';
});

treeCheckBtn.addEventListener('click', checkTreeAnswer);
treeNextBtn.addEventListener('click', nextTreeQuestion);

document.getElementById('restartTreeBtn').addEventListener('click', () => {
    startTreeQuiz();
});

document.getElementById('backFromResultBtn').addEventListener('click', () => {
    window.location.href = 'tester.html';
});

// ============================================================
// 12. INIT
// ============================================================
startTreeQuiz();