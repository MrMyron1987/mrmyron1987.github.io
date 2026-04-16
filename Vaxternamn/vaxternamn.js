// ============================================================
// 1. SPRÅKHANTERING & ÖVERSÄTTNINGAR
// ============================================================
const uiTexts = {
    sv: {
        pageTitle: '🌿 Växter namn',
        backBtn: '⬅ Tillbaka till testerna',
        categoryTitle: 'Välj en växtgrupp',
        progress: (c, t) => `Växt ${c} / ${t}`,
        checkBtn: '✅ Kontrollera',
        nextBtn: '➡️ Nästa',
        correctAll: '✅ Rätt! Alla namn är korrekta.',
        wrongHeader: '❌ Fel! Rätt svar:',
        alreadyChecked: '⚠️ Du har redan kontrollerat denna växt. Gå vidare.',
        mustCheck: '🔍 Du måste kontrollera ditt svar först.',
        resultTitle: (c, t) => `🌿 Övningen klar! 🌿<br>Rätt: ${c} / ${t}`,
        perfect: '🎉 Perfekt! Alla rätt!',
        good: '💪 Bra kämpat! Öva gärna igen.',
        restartBtn: '🔄 Öva igen',
        backFromResult: '📋 Välj annan kategori',
        abortBtn: '📋 Byt kategori',
        langSv: 'Svenska',
        langFi: 'Finska',
        langEn: 'Engelska',
        langLa: 'Latin',
        placeholderSv: 'Ange svenskt namn',
        placeholderFi: 'Ange finskt namn',
        placeholderEn: 'Ange engelskt namn',
        placeholderLa: 'Ange latinskt namn',
        catVascular: 'Kärlväxter',
        catDwarfShrubs: 'Ris',
        catMosses: 'Mossor',
        catLichens: 'Lavar',
        catFungi: 'Svampar',
        catIndicatorTrees: 'Indikator träd'
    },
    fi: {
        pageTitle: '🌿 Kasvien nimet',
        backBtn: '⬅ Takaisin testeihin',
        categoryTitle: 'Valitse kasviryhmä',
        progress: (c, t) => `Kasvi ${c} / ${t}`,
        checkBtn: '✅ Tarkista',
        nextBtn: '➡️ Seuraava',
        correctAll: '✅ Oikein! Kaikki nimet ovat oikein.',
        wrongHeader: '❌ Väärin! Oikeat vastaukset:',
        alreadyChecked: '⚠️ Olet jo tarkistanut tämän kasvin. Siirry eteenpäin.',
        mustCheck: '🔍 Tarkista vastauksesi ensin.',
        resultTitle: (c, t) => `🌿 Harjoitus valmis! 🌿<br>Oikein: ${c} / ${t}`,
        perfect: '🎉 Täydellistä! Kaikki oikein!',
        good: '💪 Hyvin yritetty! Harjoittele lisää.',
        restartBtn: '🔄 Harjoittele uudelleen',
        backFromResult: '📋 Valitse toinen ryhmä',
        abortBtn: '📋 Vaihda ryhmää',
        langSv: 'Ruotsi',
        langFi: 'Suomi',
        langEn: 'Englanti',
        langLa: 'Latina',
        placeholderSv: 'Anna ruotsinkielinen nimi',
        placeholderFi: 'Anna suomenkielinen nimi',
        placeholderEn: 'Anna englanninkielinen nimi',
        placeholderLa: 'Anna latinalainen nimi',
        catVascular: 'Putkilokasvit',
        catDwarfShrubs: 'Varvut',
        catMosses: 'Sammalet',
        catLichens: 'Jäkälät',
        catFungi: 'Sienet',
        catIndicatorTrees: 'Indikaattoripuut'
    },
    en: {
        pageTitle: '🌿 Plant names',
        backBtn: '⬅ Back to tests',
        categoryTitle: 'Choose a plant group',
        progress: (c, t) => `Plant ${c} / ${t}`,
        checkBtn: '✅ Check',
        nextBtn: '➡️ Next',
        correctAll: '✅ Correct! All names are right.',
        wrongHeader: '❌ Wrong! Correct answers:',
        alreadyChecked: '⚠️ You have already checked this plant. Move on.',
        mustCheck: '🔍 You must check your answer first.',
        resultTitle: (c, t) => `🌿 Exercise complete! 🌿<br>Correct: ${c} / ${t}`,
        perfect: '🎉 Perfect! All correct!',
        good: '💪 Good effort! Practice again.',
        restartBtn: '🔄 Practice again',
        backFromResult: '📋 Choose another group',
        abortBtn: '📋 Change group',
        langSv: 'Swedish',
        langFi: 'Finnish',
        langEn: 'English',
        langLa: 'Latin',
        placeholderSv: 'Enter Swedish name',
        placeholderFi: 'Enter Finnish name',
        placeholderEn: 'Enter English name',
        placeholderLa: 'Enter Latin name',
        catVascular: 'Vascular plants',
        catDwarfShrubs: 'Dwarf shrubs',
        catMosses: 'Mosses',
        catLichens: 'Lichens',
        catFungi: 'Fungi',
        catIndicatorTrees: 'Indicator trees'
    }
};

// ============================================================
// 2. DATABAS – VÄXTER PER KATEGORI (med fullständiga översättningar)
// ============================================================
const CATEGORY_DATA = {
    vascular: [
        { sv: "Smultron", fi: "Ahomansikka", en: "Wild strawberry", la: "Fragaria vesca" },
        { sv: "Majbräken", fi: "Soreahiirenporras", en: "Lady fern", la: "Athyrium filix-femina" },
        { sv: "Ulltistel", fi: "Huopaohdake", en: "Woolly thistle", la: "Cirsium eriophorum" },
        { sv: "Lungört", fi: "Imikkä", en: "Lungwort", la: "Pulmonaria officinalis" },
        { sv: "Strätta", fi: "Rohtokalmojuuri", en: "Sweet flag", la: "Acorus calamus" },
        { sv: "Liljekonvalj", fi: "Kielo", en: "Lily of the valley", la: "Convallaria majalis" },
        { sv: "Trolldruvor", fi: "Mustakonnanmarja", en: "Baneberry", la: "Actaea spicata" },
        { sv: "Strutbräken", fi: "Kotkansiipi", en: "Ostrich fern", la: "Matteuccia struthiopteris" },
        { sv: "Harsyra", fi: "Käenkaali", en: "Wood sorrel", la: "Oxalis acetosella" },
        { sv: "Älggräs", fi: "Mesiangervo", en: "Meadowsweet", la: "Filipendula ulmaria" },
        { sv: "Ekbräken", fi: "Metsäimarre", en: "Oak fern", la: "Gymnocarpium dryopteris" },
        { sv: "Skogsnäva", fi: "Metsäkurjenpolvi", en: "Wood cranesbill", la: "Geranium sylvaticum" },
        { sv: "Bergslok", fi: "Tuoksusimake", en: "Holy grass", la: "Hierochloe odorata" },
        { sv: "Humleblomster", fi: "Lehtotähtimö", en: "Greater stitchwort", la: "Stellaria holostea" },
        { sv: "Ekorrbär", fi: "Oravanmarja", en: "May lily", la: "Maianthemum bifolium" },
        { sv: "Blåsippa", fi: "Sinivuokko", en: "Liverleaf", la: "Hepatica nobilis" },
        { sv: "Vitsippa", fi: "Valkovuokko", en: "Wood anemone", la: "Anemone nemorosa" },
        { sv: "Lundviol", fi: "Metsäorvokki", en: "Wood violet", la: "Viola reichenbachiana" },
        { sv: "Lundarv", fi: "Lehtotädyke", en: "Wood speedwell", la: "Veronica montana" },
        { sv: "Vårärt", fi: "Kevätlinnunherne", en: "Spring vetchling", la: "Lathyrus vernus" },
        { sv: "Tibast", fi: "Näsiä", en: "Mezereon", la: "Daphne mezereum" },
        { sv: "Tandrot", fi: "Hammasjuuri", en: "Toothwort", la: "Cardamine bulbifera" },
        { sv: "Skogstry", fi: "Lehtokuusama", en: "Fly honeysuckle", la: "Lonicera xylosteum" }
    ],
    dwarfShrubs: [
        { sv: "Blåbär", fi: "Mustikka", en: "Bilberry", la: "Vaccinium myrtillus" },
        { sv: "Lingon", fi: "Puolukka", en: "Lingonberry", la: "Vaccinium vitis-idaea" },
        { sv: "Ljung", fi: "Kanerva", en: "Heather", la: "Calluna vulgaris" },
        { sv: "Odon", fi: "Juolukka", en: "Bog whortleberry", la: "Vaccinium uliginosum" },
        { sv: "Kråkbär", fi: "Variksenmarja", en: "Crowberry", la: "Empetrum nigrum" },
        { sv: "Linnea", fi: "Vanamo", en: "Twinflower", la: "Linnaea borealis" },
        { sv: "Skvattram", fi: "Suopursu", en: "Marsh Labrador tea", la: "Rhododendron tomentosum" }
    ],
    mosses: [
        { sv: "Väggmossa", fi: "Seinäsammal", en: "Wall screw-moss", la: "Pleurozium schreberi" },
        { sv: "Husmossa", fi: "Kynsisammal", en: "Common haircap", la: "Polytrichum commune" },
        { sv: "Vitmossa", fi: "Rahkasammal", en: "Peat moss", la: "Sphagnum spp." },
        { sv: "Björnmossa", fi: "Karhunsammal", en: "Woolly moss", la: "Polytrichastrum formosum" },
        { sv: "Kvastmossa", fi: "Kerrossammal", en: "Stair-step moss", la: "Hylocomium splendens" },
        { sv: "Vedtrappsmossa", fi: "Metsäliekosammal", en: "Common striated feather-moss", la: "Rhytidiadelphus triquetrus" },
        { sv: "Kärrglansmossa", fi: "Luhtakiiltosammal", en: "Yellow starry fen-moss", la: "Campylium stellatum" },
        { sv: "Glansskedmossa", fi: "Isokiiltosammal", en: "Magnificent moss", la: "Calliergonella cuspidata" }
    ],
    lichens: [
        { sv: "Lunglav", fi: "Keuhkojäkälä", en: "Lungwort lichen", la: "Lobaria pulmonaria" },
        { sv: "Garnlav", fi: "Luppo", en: "Old man's beard", la: "Usnea spp." },
        { sv: "Skägglav", fi: "Partajäkälä", en: "Beard lichen", la: "Bryoria spp." },
        { sv: "Skrykellav", fi: "Raidankeuhkojäkälä", en: "Wrinkled shield lichen", la: "Peltigera spp." },
        { sv: "Hundlav", fi: "Harmaaporonjäkälä", en: "Gray reindeer lichen", la: "Cladonia rangiferina" },
        { sv: "Islandslav", fi: "Islanninjäkälä", en: "Iceland moss", la: "Cetraria islandica" },
        { sv: "Renlav", fi: "Poronjäkälä", en: "Reindeer lichen", la: "Cladonia rangiferina" },
        { sv: "Bägarlav", fi: "Torvijäkälä", en: "Pixie cup lichen", la: "Cladonia pyxidata" }
    ],
    fungi: [
        { sv: "Stubbticka", fi: "Kantokääpä", en: "Red-banded polypore", la: "Fomitopsis pinicola" },
        { sv: "Granticka", fi: "Kuusenkääpä", en: "Red ring rot", la: "Phellinus chrysoloma" },
        { sv: "Gränsticka", fi: "Arinakääpä", en: "Birch polypore", la: "Phellinus laevigatus" },
        { sv: "Harticka", fi: "Tervakääpä", en: "Pine tar fungus", la: "Ischnoderma benzoinum" },
        { sv: "Rödbrun ticka", fi: "Punakääpä", en: "Red-brown polypore", la: "Pycnoporellus fulgens" },
        { sv: "Lackticka", fi: "Lakkakääpä", en: "Varnished polypore", la: "Ganoderma lucidum" },
        { sv: "Fnösticka", fi: "Taulakääpä", en: "Tinder fungus", la: "Fomes fomentarius" },
        { sv: "Sprängticka", fi: "Raspikääpä", en: "Red-belted polypore", la: "Fomitopsis pinicola" }
    ],
    indicatorTrees: [
        { sv: "Asp", fi: "Haapa", en: "Aspen", la: "Populus tremula" },
        { sv: "Sälg", fi: "Raita", en: "Goat willow", la: "Salix caprea" },
        { sv: "Rönn", fi: "Pihlaja", en: "Rowan", la: "Sorbus aucuparia" },
        { sv: "Gråal", fi: "Harmaaleppä", en: "Grey alder", la: "Alnus incana" },
        { sv: "Klibbal", fi: "Tervaleppä", en: "Common alder", la: "Alnus glutinosa" },
        { sv: "Hägg", fi: "Tuomi", en: "Bird cherry", la: "Prunus padus" },
        { sv: "Lönn", fi: "Vaahtera", en: "Maple", la: "Acer platanoides" },
        { sv: "Ek", fi: "Tammi", en: "Oak", la: "Quercus robur" },
        { sv: "Ask", fi: "Saarni", en: "Ash", la: "Fraxinus excelsior" },
        { sv: "Alm", fi: "Vuorijalava", en: "Elm", la: "Ulmus glabra" },
        { sv: "Skogslind", fi: "Metsälehmus", en: "Lime", la: "Tilia cordata" },
        { sv: "Vårtbjörk", fi: "Rauduskoivu", en: "Silver birch", la: "Betula pendula" },
        { sv: "Glasbjörk", fi: "Hieskoivu", en: "Downy birch", la: "Betula pubescens" },
        { sv: "En", fi: "Kataja", en: "Juniper", la: "Juniperus communis" },
        { sv: "Brakved", fi: "Korpipaatsama", en: "Alder buckthorn", la: "Frangula alnus" },
        { sv: "Hassel", fi: "Pähkinäpensas", en: "Common hazel", la: "Corylus avellana" },
        { sv: "Skogstry", fi: "Lehtokuusama", en: "Fly honeysuckle", la: "Lonicera xylosteum" }
    ]
};

// Kategorinycklar för att generera meny
const categoryKeys = [
    { key: 'vascular', nameKey: 'catVascular' },
    { key: 'dwarfShrubs', nameKey: 'catDwarfShrubs' },
    { key: 'mosses', nameKey: 'catMosses' },
    { key: 'lichens', nameKey: 'catLichens' },
    { key: 'fungi', nameKey: 'catFungi' },
    { key: 'indicatorTrees', nameKey: 'catIndicatorTrees' }
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
    if (typeof value === 'function') return value(...args);
    return value;
}

// ============================================================
// 4. STATE FÖR ÖVNINGEN
// ============================================================
let currentCategoryData = [];
let plantQuizList = [];
let plantQuizIndex = 0;
let plantQuizCorrectCount = 0;
let plantCurrentSpecies = null;
let plantDisplayLang = null;
let plantRequiredLangs = [];
let plantAnsweredLocked = false;

// DOM-element
const categoryMenu = document.getElementById('categoryMenu');
const quizCard = document.getElementById('quizCard');
const resultCard = document.getElementById('resultCard');
const progressEl = document.getElementById('progressIndicator');
const plantDisplayName = document.getElementById('plantDisplayName');
const plantDisplayLanguage = document.getElementById('plantDisplayLanguage');
const plantInputsArea = document.getElementById('plantInputsArea');
const plantFeedback = document.getElementById('plantFeedbackArea');
const plantCheckBtn = document.getElementById('plantCheckBtn');
const plantNextBtn = document.getElementById('plantNextBtn');
const resultStats = document.getElementById('resultStats');
const abortQuizBtn = document.getElementById('abortQuizBtn');

// ============================================================
// 5. UPPDATERA UI-TEXTER
// ============================================================
function updateUITexts() {
    const lang = getCurrentLanguage();
    document.title = uiTexts[lang].pageTitle;
    document.getElementById('pageTitle').textContent = uiTexts[lang].pageTitle;
    document.getElementById('backToTestsBtn').textContent = uiTexts[lang].backBtn;
    document.getElementById('categoryTitle').textContent = uiTexts[lang].categoryTitle;
    plantCheckBtn.textContent = uiTexts[lang].checkBtn;
    plantNextBtn.textContent = uiTexts[lang].nextBtn;
    document.getElementById('restartPlantBtn').textContent = uiTexts[lang].restartBtn;
    document.getElementById('backToCategoriesBtn').textContent = uiTexts[lang].backFromResult;
    abortQuizBtn.textContent = uiTexts[lang].abortBtn;
}

// ============================================================
// 6. BYGG KATEGORIMENY
// ============================================================
function buildCategoryMenu() {
    const lang = getCurrentLanguage();
    const grid = document.getElementById('categoryGrid');
    grid.innerHTML = '';
    categoryKeys.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = 'cat-btn';
        btn.textContent = uiTexts[lang][cat.nameKey];
        btn.addEventListener('click', () => startCategory(cat.key));
        grid.appendChild(btn);
    });
}

// ============================================================
// 7. STARTA EN KATEGORI
// ============================================================
function startCategory(categoryKey) {
    currentCategoryData = CATEGORY_DATA[categoryKey];
    plantQuizList = shuffleArray([...currentCategoryData]);
    plantQuizIndex = 0;
    plantQuizCorrectCount = 0;
    plantAnsweredLocked = false;
    
    categoryMenu.classList.add('hidden');
    quizCard.classList.remove('hidden');
    resultCard.classList.add('hidden');
    
    updateUITexts();
    renderPlantQuestion();
}

// ============================================================
// 8. RENDERA AKTUELL FRÅGA
// ============================================================
function renderPlantQuestion() {
    if (plantQuizIndex >= plantQuizList.length) {
        showResult();
        return;
    }
    
    const species = plantQuizList[plantQuizIndex];
    plantCurrentSpecies = species;
    
    const langs = ['sv', 'fi', 'en', 'la'];
    const displayIdx = Math.floor(Math.random() * langs.length);
    plantDisplayLang = langs[displayIdx];
    const displayValue = species[plantDisplayLang];
    
    plantRequiredLangs = langs.filter(l => l !== plantDisplayLang);
    
    progressEl.textContent = getUIText('progress', plantQuizIndex + 1, plantQuizList.length);
    
    plantDisplayName.textContent = displayValue;
    const lang = getCurrentLanguage();
    const langNames = uiTexts[lang];
    plantDisplayLanguage.textContent = `(${langNames['lang' + plantDisplayLang.charAt(0).toUpperCase() + plantDisplayLang.slice(1)]})`;
    
    plantInputsArea.innerHTML = '';
    plantRequiredLangs.forEach(langCode => {
        const row = document.createElement('div');
        row.className = 'plant-input-row';
        
        const label = document.createElement('label');
        label.textContent = langNames['lang' + langCode.charAt(0).toUpperCase() + langCode.slice(1)] + ':';
        row.appendChild(label);
        
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = langNames['placeholder' + langCode.charAt(0).toUpperCase() + langCode.slice(1)];
        input.dataset.lang = langCode;
        row.appendChild(input);
        
        plantInputsArea.appendChild(row);
    });
    
    plantFeedback.classList.add('hidden');
    plantFeedback.innerHTML = '';
    plantFeedback.className = 'feedback';
    plantCheckBtn.disabled = false;
    plantNextBtn.disabled = true;
    plantAnsweredLocked = false;
}

// ============================================================
// 9. KONTROLLERA SVAR
// ============================================================
function checkPlantAnswer() {
    if (plantAnsweredLocked) {
        plantFeedback.classList.remove('hidden');
        plantFeedback.innerHTML = getUIText('alreadyChecked');
        plantFeedback.className = 'feedback wrong';
        return;
    }
    
    const inputs = plantInputsArea.querySelectorAll('input');
    let allCorrect = true;
    const wrongFields = [];
    
    inputs.forEach(input => {
        const lang = input.dataset.lang;
        const userAnswer = input.value.trim();
        const correctAnswer = plantCurrentSpecies[lang];
        
        if (userAnswer.toLowerCase() !== correctAnswer.toLowerCase()) {
            allCorrect = false;
            wrongFields.push({ lang, correct: correctAnswer });
        }
    });
    
    plantAnsweredLocked = true;
    if (allCorrect) plantQuizCorrectCount++;
    
    plantFeedback.classList.remove('hidden');
    const lang = getCurrentLanguage();
    if (allCorrect) {
        plantFeedback.innerHTML = getUIText('correctAll');
        plantFeedback.className = 'feedback correct';
    } else {
        let msg = `${getUIText('wrongHeader')}<br>`;
        const langNames = uiTexts[lang];
        wrongFields.forEach(wf => {
            msg += `${langNames['lang' + wf.lang.charAt(0).toUpperCase() + wf.lang.slice(1)]}: ${wf.correct}<br>`;
        });
        plantFeedback.innerHTML = msg;
        plantFeedback.className = 'feedback wrong';
    }
    
    inputs.forEach(input => input.disabled = true);
    plantCheckBtn.disabled = true;
    plantNextBtn.disabled = false;
}

// ============================================================
// 10. NÄSTA FRÅGA
// ============================================================
function nextPlantQuestion() {
    if (!plantAnsweredLocked) {
        plantFeedback.classList.remove('hidden');
        plantFeedback.innerHTML = getUIText('mustCheck');
        plantFeedback.className = 'feedback wrong';
        return;
    }
    plantQuizIndex++;
    renderPlantQuestion();
}

// ============================================================
// 11. VISA RESULTAT
// ============================================================
function showResult() {
    quizCard.classList.add('hidden');
    resultCard.classList.remove('hidden');
    
    const total = plantQuizList.length;
    const correct = plantQuizCorrectCount;
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
// 12. ÅTERGÅ TILL KATEGORIMENYN
// ============================================================
function backToCategories() {
    quizCard.classList.add('hidden');
    resultCard.classList.add('hidden');
    categoryMenu.classList.remove('hidden');
}

// ============================================================
// 13. EVENT LISTENERS
// ============================================================
document.getElementById('backToTestsBtn').addEventListener('click', () => {
    window.location.href = '../Testerna/testerna.html';
});

plantCheckBtn.addEventListener('click', checkPlantAnswer);
plantNextBtn.addEventListener('click', nextPlantQuestion);

document.getElementById('restartPlantBtn').addEventListener('click', () => {
    if (currentCategoryData.length > 0) {
        startCategory(Object.keys(CATEGORY_DATA).find(key => CATEGORY_DATA[key] === currentCategoryData));
    }
});

document.getElementById('backToCategoriesBtn').addEventListener('click', backToCategories);
abortQuizBtn.addEventListener('click', backToCategories);

// ============================================================
// 14. INIT
// ============================================================
updateUITexts();
buildCategoryMenu();
categoryMenu.classList.remove('hidden');
quizCard.classList.add('hidden');
resultCard.classList.add('hidden');