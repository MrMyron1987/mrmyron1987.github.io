// ============================================================
// 1. SPRÅKTEXTER (sv, fi, en)
// ============================================================
const uiTexts = {
    sv: {
        pageTitle: '🌍 Ståndortstyper på mineraljorder',
        backBtn: '⬅ Tillbaka till testerna',
        menuTitle: 'Välj övning',
        identifyBtn: '🔍 Identifiera ståndortstyper på mineraljorder',
        matchBtn: '🌿 Para ihop rätt växt med rätt ståndort',
        checkBtn: '✅ Kontrollera',
        resetBtn: '🔄 Börja om',
        backToMenu: '⬅ Tillbaka till menyn',
        categories: {
            herbRich: 'Lund / lundartad mo',
            mesic: 'Frisk mo',
            subXeric: 'Torr mo',
            xeric: 'Karg mo',
            barren: 'Lavmo'
        },
        regions: {
            south: 'Södra Finland',
            ostro: 'Österbotten-Kajanaland',
            north: 'Nordbotten',
            lapp: 'Skogs-Lappland'
        },
        resultPerfect: '🎉 Perfekt! Alla kombinationer rätt!',
        resultPartial: (c, t) => `✅ Du har ${c} av ${t} rätt.`,
        feedbackWrong: '❌ Vissa rutor är fel. Rättade rutor är gröna, felaktiga är röda.',
        selectCode: '-- Välj kod --',
        selectName: '-- Välj typ --',
        sourcePoolTitle: '🌱 Växter att placera (dra till rätt ruta)',
        matchPerfect: '🎉 Perfekt! Alla växter rätt placerade!',
        matchPartial: (c, t) => `✅ Du har placerat ${c} av ${t} växter rätt.`,
        matchWrong: '❌ Några växter är felplacerade (markerade med rött).',
        alreadyChecked: '⚠️ Du har redan kontrollerat. Tryck "Börja om" för att försöka igen.'
    },
    fi: {
        pageTitle: '🌍 Kivennäismaiden kasvupaikkatyypit',
        backBtn: '⬅ Takaisin testeihin',
        menuTitle: 'Valitse harjoitus',
        identifyBtn: '🔍 Tunnista kivennäismaiden kasvupaikkatyypit',
        matchBtn: '🌿 Yhdistä oikea kasvi oikeaan kasvupaikkaan',
        checkBtn: '✅ Tarkista',
        resetBtn: '🔄 Aloita alusta',
        backToMenu: '⬅ Takaisin valikkoon',
        categories: {
            herbRich: 'Lehto / lehtomainen kangas',
            mesic: 'Tuore kangas',
            subXeric: 'Kuivahko kangas',
            xeric: 'Kuiva kangas',
            barren: 'Karukkokangas'
        },
        regions: {
            south: 'Etelä-Suomi',
            ostro: 'Pohjanmaa-Kainuu',
            north: 'Perä-Pohjola',
            lapp: 'Metsä-Lappi'
        },
        resultPerfect: '🎉 Täydellistä! Kaikki oikein!',
        resultPartial: (c, t) => `✅ Sait ${c} / ${t} oikein.`,
        feedbackWrong: '❌ Jotkut ruudut ovat väärin. Oikeat vihreitä, väärät punaisia.',
        selectCode: '-- Valitse koodi --',
        selectName: '-- Valitse tyyppi --',
        sourcePoolTitle: '🌱 Sijoitettavat kasvit (vedä oikeaan ruutuun)',
        matchPerfect: '🎉 Täydellistä! Kaikki kasvit oikein!',
        matchPartial: (c, t) => `✅ Sijoitit ${c} / ${t} kasvia oikein.`,
        matchWrong: '❌ Jotkut kasvit ovat väärässä paikassa (merkitty punaisella).',
        alreadyChecked: '⚠️ Olet jo tarkistanut. Aloita alusta painamalla "Aloita alusta".'
    },
    en: {
        pageTitle: '🌍 Site types on mineral soils',
        backBtn: '⬅ Back to tests',
        menuTitle: 'Choose exercise',
        identifyBtn: '🔍 Identify site types on mineral soils',
        matchBtn: '🌿 Match the right plant to the right site',
        checkBtn: '✅ Check',
        resetBtn: '🔄 Reset',
        backToMenu: '⬅ Back to menu',
        categories: {
            herbRich: 'Herb-rich / grove-like heath',
            mesic: 'Mesic heath',
            subXeric: 'Sub-xeric heath',
            xeric: 'Xeric heath',
            barren: 'Barren heath'
        },
        regions: {
            south: 'Southern Finland',
            ostro: 'Ostrobothnia-Kainuu',
            north: 'North Ostrobothnia',
            lapp: 'Forest Lapland'
        },
        resultPerfect: '🎉 Perfect! All combinations correct!',
        resultPartial: (c, t) => `✅ You got ${c} out of ${t} correct.`,
        feedbackWrong: '❌ Some cells are wrong. Correct cells are green, wrong are red.',
        selectCode: '-- Select code --',
        selectName: '-- Select type --',
        sourcePoolTitle: '🌱 Plants to place (drag to the right box)',
        matchPerfect: '🎉 Perfect! All plants placed correctly!',
        matchPartial: (c, t) => `✅ You placed ${c} out of ${t} plants correctly.`,
        matchWrong: '❌ Some plants are misplaced (marked in red).',
        alreadyChecked: '⚠️ You have already checked. Press "Reset" to try again.'
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
    return typeof val === 'function' ? val(...args) : val;
}

function shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

// ============================================================
// 3. DATA FÖR MATRISÖVNING
// ============================================================
const validCombinations = [
    { region: 'south', category: 'herbRich', code: 'OMT', nameSv: 'Harsyra-blåbärstyp', nameFi: 'Käenkaali-mustikkatyyppi', nameEn: 'Oxalis-Myrtillus type' },
    { region: 'south', category: 'mesic',    code: 'MT',  nameSv: 'Blåbärstyp', nameFi: 'Mustikkatyyppi', nameEn: 'Myrtillus type' },
    { region: 'south', category: 'subXeric', code: 'VT',  nameSv: 'Lingontyp', nameFi: 'Puolukkatyyppi', nameEn: 'Vaccinium type' },
    { region: 'south', category: 'xeric',    code: 'CT',  nameSv: 'Ljungtyp', nameFi: 'Kanervatyyppi', nameEn: 'Calluna type' },
    { region: 'south', category: 'barren',   code: 'CIT', nameSv: 'Lavtyp', nameFi: 'Jäkälätyyppi', nameEn: 'Cladina type' },
    { region: 'ostro', category: 'herbRich', code: 'GOMT', nameSv: 'Skogsnäva-harsyra-blåbärstyp', nameFi: 'Metsäkurjenpolvi-käenkaali-mustikkatyyppi', nameEn: 'Geranium-Oxalis-Myrtillus type' },
    { region: 'ostro', category: 'mesic',    code: 'VMT',  nameSv: 'Lingon-blåbärstyp', nameFi: 'Puolukka-mustikkatyyppi', nameEn: 'Vaccinium-Myrtillus type' },
    { region: 'ostro', category: 'subXeric', code: 'EVT',  nameSv: 'Kråkbär-lingontyp', nameFi: 'Variksenmarja-puolukkatyyppi', nameEn: 'Empetrum-Vaccinium type' },
    { region: 'ostro', category: 'xeric',    code: 'ECT',  nameSv: 'Kråkbär-ljungtyp', nameFi: 'Variksenmarja-kanervatyyppi', nameEn: 'Empetrum-Calluna type' },
    { region: 'ostro', category: 'barren',   code: 'CIT',  nameSv: 'Lavtyp', nameFi: 'Jäkälätyyppi', nameEn: 'Cladina type' },
    { region: 'north', category: 'herbRich', code: 'GMT', nameSv: 'Skogsnäva-blåbärstyp', nameFi: 'Metsäkurjenpolvi-mustikkatyyppi', nameEn: 'Geranium-Myrtillus type' },
    { region: 'north', category: 'mesic',    code: 'HMT', nameSv: 'Vägmossa-blåbärstyp', nameFi: 'Seinäsammal-mustikkatyyppi', nameEn: 'Hylocomium-Myrtillus type' },
    { region: 'north', category: 'subXeric', code: 'EMT', nameSv: 'Kråkbär-blåbärstyp', nameFi: 'Variksenmarja-mustikkatyyppi', nameEn: 'Empetrum-Myrtillus type' },
    { region: 'north', category: 'xeric',    code: 'MCCIT', nameSv: 'Blåbär-ljung-lavtyp', nameFi: 'Mustikka-kanerva-jäkälätyyppi', nameEn: 'Myrtillus-Calluna-Cladina type' },
    { region: 'north', category: 'barren',   code: 'CIT', nameSv: 'Lavtyp', nameFi: 'Jäkälätyyppi', nameEn: 'Cladina type' },
    { region: 'lapp', category: 'herbRich', code: 'GMT', nameSv: 'Skogsnäva-blåbärstyp', nameFi: 'Metsäkurjenpolvi-mustikkatyyppi', nameEn: 'Geranium-Myrtillus type' },
    { region: 'lapp', category: 'mesic',    code: 'LMT', nameSv: 'Skvattram-blåbärstyp', nameFi: 'Suopursu-mustikkatyyppi', nameEn: 'Ledum-Myrtillus type' },
    { region: 'lapp', category: 'subXeric', code: 'UEMT', nameSv: 'Odon-kråkbär-blåbärstyp', nameFi: 'Juolukka-variksenmarja-mustikkatyyppi', nameEn: 'Uliginosum-Empetrum-Myrtillus type' },
    { region: 'lapp', category: 'xeric',    code: 'UVET', nameSv: 'Mjölon-lingon-kråkbärstyp', nameFi: 'Juolukka-puolukka-variksenmarjatyyppi', nameEn: 'Uliginosum-Vaccinium-Empetrum type' },
    { region: 'lapp', category: 'barren',   code: 'CIT', nameSv: 'Lavtyp', nameFi: 'Jäkälätyyppi', nameEn: 'Cladina type' }
];

const allCodes = [...new Set(validCombinations.map(c => c.code))].sort();
const regions = ['south', 'ostro', 'north', 'lapp'];
const categories = ['herbRich', 'mesic', 'subXeric', 'xeric', 'barren'];

// ============================================================
// 4. DATA FÖR PARA IHOP ÖVNING (med översättningar)
// ============================================================
const siteTypeCodes = ['OMT', 'MT', 'VT', 'CT', 'CIT', 'GOMT', 'VMT', 'EVT', 'ECT', 'GMT', 'HMT', 'EMT', 'MCCIT', 'LMT', 'UEMT', 'UVET'];

// Svensk lista (används som intern nyckel)
const speciesBySiteType = {
    OMT: ['Harsyra', 'Blåbär', 'Lingon', 'Skogsbräken', 'Majbräken', 'Ekorrbär', 'Skogstry', 'Skogsnäva', 'Tandrot', 'Lundviol', 'Lundstarr', 'Vårärt', 'Blåsippa', 'Liljekonvalj', 'Trolldruva', 'Strutbräken', 'Väggmossa', 'Husmossa', 'Kranshakmossa', 'Odon', 'Kruståtel', 'Linnea', 'Vitsippa'],
    GOMT: ['Skogsnäva', 'Harsyra', 'Blåbär', 'Lingon', 'Skogsbräken', 'Majbräken', 'Ekorrbär', 'Lundviol', 'Vårärt', 'Blåsippa', 'Liljekonvalj', 'Trolldruva', 'Strutbräken', 'Väggmossa', 'Husmossa', 'Kranshakmossa', 'Odon', 'Kruståtel'],
    GMT:  ['Skogsnäva', 'Blåbär', 'Lingon', 'Harsyra', 'Ekorrbär', 'Lundviol', 'Vårärt', 'Blåsippa', 'Väggmossa', 'Husmossa', 'Kranshakmossa', 'Kruståtel', 'Odon'],
    MT:  ['Blåbär', 'Lingon', 'Skogsnäva', 'Kruståtel', 'Väggmossa', 'Husmossa', 'Björnmossa', 'Kvastmossa', 'Ekbräken', 'Linnea', 'Skogstjärnblomma', 'Vitsippa', 'Harsyra', 'Ekorrbär', 'Odon', 'Revlummer'],
    VMT: ['Lingon', 'Blåbär', 'Skogsnäva', 'Kruståtel', 'Väggmossa', 'Husmossa', 'Kvastmossa', 'Linnea', 'Vitsippa', 'Odon', 'Revlummer'],
    HMT: ['Väggmossa', 'Blåbär', 'Lingon', 'Skogsnäva', 'Kruståtel', 'Husmossa', 'Björnmossa', 'Linnea', 'Odon', 'Revlummer'],
    LMT: ['Skvattram', 'Blåbär', 'Lingon', 'Odon', 'Kråkbär', 'Väggmossa', 'Husmossa', 'Vitmossa', 'Kvastmossa', 'Revlummer'],
    VT:  ['Lingon', 'Blåbär', 'Ljung', 'Kråkbär', 'Renlav', 'Bägarlav', 'Väggmossa', 'Kvastmossa', 'Skogsnäva', 'Kruståtel', 'Odon', 'Revlummer', 'Garnlav', 'Islandslav'],
    EVT: ['Kråkbär', 'Lingon', 'Blåbär', 'Ljung', 'Renlav', 'Bägarlav', 'Väggmossa', 'Kvastmossa', 'Skogsnäva', 'Kruståtel', 'Odon', 'Garnlav', 'Islandslav'],
    EMT: ['Kråkbär', 'Blåbär', 'Lingon', 'Ljung', 'Renlav', 'Bägarlav', 'Väggmossa', 'Kvastmossa', 'Skogsnäva', 'Odon', 'Garnlav', 'Islandslav'],
    UEMT:['Odon', 'Kråkbär', 'Blåbär', 'Lingon', 'Skvattram', 'Ljung', 'Renlav', 'Bägarlav', 'Väggmossa', 'Kvastmossa', 'Garnlav', 'Islandslav'],
    CT:   ['Ljung', 'Kråkbär', 'Lingon', 'Renlav', 'Bägarlav', 'Garnlav', 'Skägglav', 'Islandslav', 'Odon', 'Blåbär'],
    ECT:  ['Kråkbär', 'Ljung', 'Lingon', 'Renlav', 'Bägarlav', 'Garnlav', 'Skägglav', 'Islandslav', 'Odon'],
    MCCIT:['Blåbär', 'Ljung', 'Renlav', 'Kråkbär', 'Lingon', 'Odon', 'Bägarlav', 'Garnlav', 'Skägglav', 'Islandslav'],
    UVET: ['Odon', 'Lingon', 'Kråkbär', 'Ljung', 'Renlav', 'Bägarlav', 'Garnlav', 'Skägglav', 'Islandslav'],
    CIT:  ['Renlav', 'Bägarlav', 'Garnlav', 'Skägglav', 'Islandslav', 'Ljung', 'Kråkbär', 'Lingon', 'Odon']
};

// Översättningstabell för arter (svenska -> finska, engelska)
const speciesTranslations = {
    sv: {}, // fylls i dynamiskt
    fi: {
        'Harsyra': 'Käenkaali',
        'Blåbär': 'Mustikka',
        'Lingon': 'Puolukka',
        'Skogsbräken': 'Metsäimarre',
        'Majbräken': 'Soreahiirenporras',
        'Ekorrbär': 'Oravanmarja',
        'Skogstry': 'Lehtokuusama',
        'Skogsnäva': 'Metsäkurjenpolvi',
        'Tandrot': 'Hammasjuuri',
        'Lundviol': 'Metsäorvokki',
        'Lundstarr': 'Vuorisara',
        'Vårärt': 'Kevätlinnunherne',
        'Blåsippa': 'Sinivuokko',
        'Liljekonvalj': 'Kielo',
        'Trolldruva': 'Mustakonnanmarja',
        'Strutbräken': 'Kotkansiipi',
        'Väggmossa': 'Seinäsammal',
        'Husmossa': 'Kynsisammal',
        'Kranshakmossa': 'Palmusammal',
        'Odon': 'Juolukka',
        'Kruståtel': 'Metsälauha',
        'Linnea': 'Vanamo',
        'Vitsippa': 'Valkovuokko',
        'Björnmossa': 'Karhunsammal',
        'Kvastmossa': 'Kerrossammal',
        'Ekbräken': 'Metsäimarre',
        'Skogstjärnblomma': 'Lehtotähtimö',
        'Revlummer': 'Rönsyliejukko',
        'Ljung': 'Kanerva',
        'Kråkbär': 'Variksenmarja',
        'Renlav': 'Poronjäkälä',
        'Bägarlav': 'Torvijäkälä',
        'Garnlav': 'Luppo',
        'Islandslav': 'Islanninjäkälä',
        'Skvattram': 'Suopursu',
        'Vitmossa': 'Rahkasammal',
        'Skägglav': 'Partajäkälä'
    },
    en: {
        'Harsyra': 'Wood sorrel',
        'Blåbär': 'Bilberry',
        'Lingon': 'Lingonberry',
        'Skogsbräken': 'Oak fern',
        'Majbräken': 'Lady fern',
        'Ekorrbär': 'May lily',
        'Skogstry': 'Fly honeysuckle',
        'Skogsnäva': 'Wood cranesbill',
        'Tandrot': 'Toothwort',
        'Lundviol': 'Wood violet',
        'Lundstarr': 'Soft-leaved sedge',
        'Vårärt': 'Spring vetchling',
        'Blåsippa': 'Liverleaf',
        'Liljekonvalj': 'Lily of the valley',
        'Trolldruva': 'Baneberry',
        'Strutbräken': 'Ostrich fern',
        'Väggmossa': 'Wall screw-moss',
        'Husmossa': 'Common haircap',
        'Kranshakmossa': 'Palm moss',
        'Odon': 'Bog whortleberry',
        'Kruståtel': 'Wavy hair-grass',
        'Linnea': 'Twinflower',
        'Vitsippa': 'Wood anemone',
        'Björnmossa': 'Woolly moss',
        'Kvastmossa': 'Stair-step moss',
        'Ekbräken': 'Oak fern',
        'Skogstjärnblomma': 'Greater stitchwort',
        'Revlummer': 'Running clubmoss',
        'Ljung': 'Heather',
        'Kråkbär': 'Crowberry',
        'Renlav': 'Reindeer lichen',
        'Bägarlav': 'Pixie cup lichen',
        'Garnlav': 'Old man\'s beard',
        'Islandslav': 'Iceland moss',
        'Skvattram': 'Marsh Labrador tea',
        'Vitmossa': 'Peat moss',
        'Skägglav': 'Beard lichen'
    }
};
// svenska översättningen är identitet
speciesTranslations.sv = Object.fromEntries(Object.keys(speciesTranslations.fi).map(k => [k, k]));

// Hjälpfunktion: översätt ett artnamn (svensk nyckel) till aktuellt språk
function translateSpecies(speciesSv, lang) {
    return speciesTranslations[lang]?.[speciesSv] || speciesSv;
}

// Bygg kortleken med översatta namn
function buildSpeciesDeck() {
    const lang = getCurrentLanguage();
    const deck = [];
    for (const [code, speciesList] of Object.entries(speciesBySiteType)) {
        speciesList.forEach(speciesSv => {
            deck.push({
                code,
                speciesKey: speciesSv,                     // svensk nyckel för kontroll
                speciesDisplay: translateSpecies(speciesSv, lang) // visningstext
            });
        });
    }
    return shuffleArray(deck);
}

// ============================================================
// 5. DOM-ELEMENT
// ============================================================
const exerciseMenu = document.getElementById('exerciseMenu');
const matrixExercise = document.getElementById('matrixExercise');
const matchExercise = document.getElementById('matchExercise');
const identifyMatrixBtn = document.getElementById('identifyMatrixBtn');
const matchSpeciesBtn = document.getElementById('matchSpeciesBtn');
const backToMenuFromMatrixBtn = document.getElementById('backToMenuFromMatrixBtn');
const backToMenuFromMatchBtn = document.getElementById('backToMenuFromMatchBtn');
const matrixContainer = document.getElementById('matrixContainer');
const matrixFeedback = document.getElementById('matrixFeedback');
const checkMatrixBtn = document.getElementById('checkMatrixBtn');
const resetMatrixBtn = document.getElementById('resetMatrixBtn');
const matchGameArea = document.getElementById('matchGameArea');
const sourceCardContainer = document.getElementById('sourceCardContainer');
const matchFeedback = document.getElementById('matchFeedback');
const checkMatchBtn = document.getElementById('checkMatchBtn');
const resetMatchBtn = document.getElementById('resetMatchBtn');
const sourcePoolTitle = document.getElementById('sourcePoolTitle');

// ============================================================
// 6. UPPDATERA UI-TEXTER
// ============================================================
function updateUITexts() {
    const lang = getCurrentLanguage();
    document.title = uiTexts[lang].pageTitle;
    document.getElementById('pageTitle').textContent = uiTexts[lang].pageTitle;
    document.getElementById('backToTestsBtn').textContent = uiTexts[lang].backBtn;
    document.getElementById('menuTitle').textContent = uiTexts[lang].menuTitle;
    identifyMatrixBtn.textContent = uiTexts[lang].identifyBtn;
    matchSpeciesBtn.textContent = uiTexts[lang].matchBtn;
    backToMenuFromMatrixBtn.textContent = uiTexts[lang].backToMenu;
    backToMenuFromMatchBtn.textContent = uiTexts[lang].backToMenu;
    checkMatrixBtn.textContent = uiTexts[lang].checkBtn;
    resetMatrixBtn.textContent = uiTexts[lang].resetBtn;
    checkMatchBtn.textContent = uiTexts[lang].checkBtn;
    resetMatchBtn.textContent = uiTexts[lang].resetBtn;
    sourcePoolTitle.textContent = uiTexts[lang].sourcePoolTitle;
}

// ============================================================
// 7. MENYNAVIGATION
// ============================================================
function showMenu() {
    exerciseMenu.classList.remove('hidden');
    matrixExercise.classList.add('hidden');
    matchExercise.classList.add('hidden');
}

function showMatrixExercise() {
    exerciseMenu.classList.add('hidden');
    matrixExercise.classList.remove('hidden');
    renderMatrix();
}

function showMatchExercise() {
    exerciseMenu.classList.add('hidden');
    matchExercise.classList.remove('hidden');
    buildMatchGame();
}

// ============================================================
// 8. MATRISÖVNING (Identifiera) – oförändrad
// ============================================================
function getNameOptions(lang) {
    const nameSet = new Set();
    validCombinations.forEach(c => {
        if (lang === 'sv') nameSet.add(c.nameSv);
        else if (lang === 'fi') nameSet.add(c.nameFi);
        else nameSet.add(c.nameEn);
    });
    return Array.from(nameSet).sort();
}

function renderMatrix() {
    const lang = getCurrentLanguage();
    const nameOptions = getNameOptions(lang);
    const table = document.createElement('table');
    table.className = 'matrix-table';
    
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const emptyTh = document.createElement('th');
    emptyTh.textContent = '';
    headerRow.appendChild(emptyTh);
    regions.forEach(reg => {
        const th = document.createElement('th');
        th.textContent = uiTexts[lang].regions[reg];
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);
    
    const tbody = document.createElement('tbody');
    categories.forEach(cat => {
        const row = document.createElement('tr');
        const rowHeader = document.createElement('td');
        rowHeader.className = 'row-header';
        rowHeader.textContent = uiTexts[lang].categories[cat];
        row.appendChild(rowHeader);
        
        regions.forEach(reg => {
            const cell = document.createElement('td');
            cell.dataset.region = reg;
            cell.dataset.category = cat;
            
            const cellContent = document.createElement('div');
            cellContent.className = 'cell-content';
            
            const codeSelect = document.createElement('select');
            codeSelect.className = 'cell-select';
            const defaultCodeOpt = document.createElement('option');
            defaultCodeOpt.value = '';
            defaultCodeOpt.textContent = getUIText('selectCode');
            codeSelect.appendChild(defaultCodeOpt);
            allCodes.forEach(code => {
                const opt = document.createElement('option');
                opt.value = code;
                opt.textContent = code;
                codeSelect.appendChild(opt);
            });
            
            const nameSelect = document.createElement('select');
            nameSelect.className = 'cell-select';
            const defaultNameOpt = document.createElement('option');
            defaultNameOpt.value = '';
            defaultNameOpt.textContent = getUIText('selectName');
            nameSelect.appendChild(defaultNameOpt);
            nameOptions.forEach(name => {
                const opt = document.createElement('option');
                opt.value = name;
                opt.textContent = name;
                nameSelect.appendChild(opt);
            });
            
            codeSelect.addEventListener('change', () => cell.classList.remove('correct-cell', 'incorrect-cell'));
            nameSelect.addEventListener('change', () => cell.classList.remove('correct-cell', 'incorrect-cell'));
            
            cellContent.appendChild(codeSelect);
            cellContent.appendChild(nameSelect);
            cell.appendChild(cellContent);
            row.appendChild(cell);
        });
        tbody.appendChild(row);
    });
    table.appendChild(tbody);
    matrixContainer.innerHTML = '';
    matrixContainer.appendChild(table);
    matrixFeedback.classList.add('hidden');
}

function checkMatrixAnswers() {
    const lang = getCurrentLanguage();
    const cells = document.querySelectorAll('.matrix-table td[data-region]');
    let correctCount = 0;
    const totalCells = cells.length;
    
    cells.forEach(cell => {
        const region = cell.dataset.region;
        const category = cell.dataset.category;
        const codeSelect = cell.querySelector('select:first-of-type');
        const nameSelect = cell.querySelector('select:last-of-type');
        const selectedCode = codeSelect.value;
        const selectedName = nameSelect.value;
        
        const correct = validCombinations.find(c => c.region === region && c.category === category);
        let isCorrect = false;
        if (correct) {
            const correctName = (lang === 'sv') ? correct.nameSv : (lang === 'fi') ? correct.nameFi : correct.nameEn;
            isCorrect = (selectedCode === correct.code && selectedName === correctName);
        } else {
            isCorrect = (selectedCode === '' && selectedName === '');
        }
        
        if (isCorrect) {
            correctCount++;
            cell.classList.add('correct-cell');
            cell.classList.remove('incorrect-cell');
        } else {
            cell.classList.add('incorrect-cell');
            cell.classList.remove('correct-cell');
        }
    });
    
    matrixFeedback.classList.remove('hidden');
    if (correctCount === totalCells) {
        matrixFeedback.className = 'feedback correct';
        matrixFeedback.textContent = getUIText('resultPerfect');
    } else {
        matrixFeedback.className = 'feedback wrong';
        matrixFeedback.textContent = getUIText('resultPartial', correctCount, totalCells) + ' ' + getUIText('feedbackWrong');
    }
}

function resetMatrix() {
    const cells = document.querySelectorAll('.matrix-table td[data-region]');
    cells.forEach(cell => {
        cell.querySelectorAll('select').forEach(sel => sel.value = '');
        cell.classList.remove('correct-cell', 'incorrect-cell');
    });
    matrixFeedback.classList.add('hidden');
}

// ============================================================
// 9. PARA IHOP ÖVNING (flerspråkig)
// ============================================================
let currentSpeciesDeck = [];
let matchLocked = false;

function buildMatchGame() {
    currentSpeciesDeck = buildSpeciesDeck();
    matchLocked = false;
    
    matchGameArea.innerHTML = '';
    siteTypeCodes.forEach(code => {
        const box = document.createElement('div');
        box.className = 'match-box';
        box.dataset.code = code;
        box.innerHTML = `<h3>${code}</h3><div class="card-container" data-code="${code}"></div>`;
        
        const container = box.querySelector('.card-container');
        container.addEventListener('dragover', e => e.preventDefault());
        container.addEventListener('drop', e => {
            e.preventDefault();
            if (matchLocked) {
                alert(getUIText('alreadyChecked'));
                return;
            }
            const cardId = e.dataTransfer.getData('text/plain');
            const cardElement = document.getElementById(cardId);
            if (!cardElement) return;
            
            if (cardElement.parentElement) {
                cardElement.parentElement.removeChild(cardElement);
            }
            container.appendChild(cardElement);
            cardElement.classList.add('placed');
            cardElement.setAttribute('draggable', 'true');
            matchFeedback.classList.add('hidden');
        });
        
        matchGameArea.appendChild(box);
    });
    
    sourceCardContainer.innerHTML = '';
    currentSpeciesDeck.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'match-card';
        card.id = `species-card-${Date.now()}-${index}`;
        card.setAttribute('draggable', 'true');
        card.textContent = item.speciesDisplay;                     // översatt text
        card.dataset.speciesKey = item.speciesKey;                 // svensk nyckel
        
        card.addEventListener('dragstart', e => {
            if (matchLocked) {
                e.preventDefault();
                return;
            }
            e.dataTransfer.setData('text/plain', card.id);
            card.classList.add('dragging');
        });
        card.addEventListener('dragend', () => card.classList.remove('dragging'));
        
        sourceCardContainer.appendChild(card);
    });
    
    matchFeedback.classList.add('hidden');
}

function checkMatchAnswers() {
    if (matchLocked) {
        matchFeedback.classList.remove('hidden');
        matchFeedback.innerHTML = getUIText('alreadyChecked');
        matchFeedback.className = 'feedback wrong';
        return;
    }
    
    const allCards = document.querySelectorAll('.match-card');
    let correctCount = 0;
    
    allCards.forEach(card => {
        card.classList.remove('incorrect-highlight');
        const container = card.closest('.card-container');
        if (!container) return;
        
        const boxCode = container.dataset.code;
        const speciesKey = card.dataset.speciesKey;
        
        const allowedSpecies = speciesBySiteType[boxCode] || [];
        if (allowedSpecies.includes(speciesKey)) {
            correctCount++;
        } else {
            card.classList.add('incorrect-highlight');
        }
    });
    
    matchLocked = true;
    allCards.forEach(card => card.setAttribute('draggable', 'false'));
    
    matchFeedback.classList.remove('hidden');
    const totalCards = currentSpeciesDeck.length;
    if (correctCount === totalCards) {
        matchFeedback.className = 'feedback correct';
        matchFeedback.textContent = getUIText('matchPerfect');
    } else {
        matchFeedback.className = 'feedback wrong';
        matchFeedback.textContent = getUIText('matchPartial', correctCount, totalCards) + ' ' + getUIText('matchWrong');
    }
}

function resetMatchGame() {
    buildMatchGame();
}

// ============================================================
// 10. EVENT LISTENERS
// ============================================================
document.getElementById('backToTestsBtn').addEventListener('click', () => {
    window.location.href = '../Testerna/testerna.html';
});

identifyMatrixBtn.addEventListener('click', showMatrixExercise);
matchSpeciesBtn.addEventListener('click', showMatchExercise);
backToMenuFromMatrixBtn.addEventListener('click', showMenu);
backToMenuFromMatchBtn.addEventListener('click', showMenu);
checkMatrixBtn.addEventListener('click', checkMatrixAnswers);
resetMatrixBtn.addEventListener('click', resetMatrix);
checkMatchBtn.addEventListener('click', checkMatchAnswers);
resetMatchBtn.addEventListener('click', resetMatchGame);

// ============================================================
// 11. INIT
// ============================================================
updateUITexts();
showMenu();