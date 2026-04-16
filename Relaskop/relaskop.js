// ============================================================
// 1. SPRÅKTEXTER (sv, fi, en) – komplett med frågemall
// ============================================================
const uiTexts = {
    sv: {
        pageTitle: '📊 Relaskoptabell',
        backBtn: '⬅ Tillbaka till testerna',
        introText: 'Ta fram din relaskoptabell från Tapio och en kalkylator. Du kommer att behöva dem. Lycka till!',
        startBtn: '🚀 Starta spelet',
        progress: (c, t) => `Fråga ${c} / ${t}`,
        checkBtn: '✅ Kontrollera',
        nextBtn: '➡️ Nästa',
        perHectareLabel: 'Kubik per hektar (m³/ha):',
        totalLabel: 'Totalt på figuren (m³):',
        correct: '✅ Rätt! Båda svaren stämmer.',
        wrong: (perHectare, total) => `❌ Fel. Rätt svar: per hektar: ${perHectare.toFixed(1)} m³/ha, totalt: ${total} m³.`,
        alreadyChecked: '⚠️ Du har redan kontrollerat denna fråga. Gå vidare.',
        mustCheck: '🔍 Du måste kontrollera ditt svar först.',
        invalidInput: 'Vänligen fyll i båda fälten med giltiga tal.',
        resultTitle: (c, t) => `📊 Relaskopspelet klart! 📊<br>Rätt: ${c} / ${t}`,
        perfect: '🎉 Perfekt! Alla rätt!',
        good: '💪 Bra kämpat! Öva gärna igen.',
        restartBtn: '🔄 Öva igen',
        backFromResult: '📋 Välj annat test',
        treePine: 'tall',
        treeSpruce: 'gran',
        questionTemplate: (spruceCount, pineCount, spruceName, pineName, area, meanHeight) =>
            `Du har uppmätt i medeltal ${spruceCount} ${spruceName} och ${pineCount} ${pineName} på figuren som är ${area.toFixed(1)} hektar. Medelhöjden är ${meanHeight} m.`,
        tableTitleMixed: '🌲 Tall och gran (blandskog) – Medelhöjd (m)',
        tableTitlePine: '🌲 Tall – Medelhöjd (m)',
        tableTitleSpruce: '🌲 Gran – Medelhöjd (m)',
        tableHeaderGYta: 'Grundyta (m²/ha)',
        tableClose: 'Stäng'
    },
    fi: {
        pageTitle: '📊 Relaskooppitaulukko',
        backBtn: '⬅ Takaisin testeihin',
        introText: 'Ota esiin Tapion relaskooppitaulukko ja laskin. Tarvitset niitä. Onnea matkaan!',
        startBtn: '🚀 Aloita peli',
        progress: (c, t) => `Kysymys ${c} / ${t}`,
        checkBtn: '✅ Tarkista',
        nextBtn: '➡️ Seuraava',
        perHectareLabel: 'Kuutiota hehtaarilla (m³/ha):',
        totalLabel: 'Yhteensä kuviolla (m³):',
        correct: '✅ Oikein! Molemmat vastaukset oikein.',
        wrong: (ph, tot) => `❌ Väärin. Oikeat vastaukset: hehtaaria kohti: ${ph.toFixed(1)} m³/ha, yhteensä: ${tot} m³.`,
        alreadyChecked: '⚠️ Olet jo tarkistanut tämän kysymyksen. Siirry eteenpäin.',
        mustCheck: '🔍 Tarkista vastauksesi ensin.',
        invalidInput: 'Täytä molemmat kentät kelvollisilla numeroilla.',
        resultTitle: (c, t) => `📊 Relaskooppipeli valmis! 📊<br>Oikein: ${c} / ${t}`,
        perfect: '🎉 Täydellistä! Kaikki oikein!',
        good: '💪 Hyvin yritetty! Harjoittele lisää.',
        restartBtn: '🔄 Harjoittele uudelleen',
        backFromResult: '📋 Valitse toinen testi',
        treePine: 'mänty',
        treeSpruce: 'kuusi',
        questionTemplate: (spruceCount, pineCount, spruceName, pineName, area, meanHeight) =>
            `Kuviolla mittasit keskimäärin ${spruceCount} ${spruceName} ja ${pineCount} ${pineName}. Kuvion pinta-ala on ${area.toFixed(1)} ha. Keskipituus on ${meanHeight} m.`,
        tableTitleMixed: '🌲 Mänty ja kuusi (sekametsä) – Keskipituus (m)',
        tableTitlePine: '🌲 Mänty – Keskipituus (m)',
        tableTitleSpruce: '🌲 Kuusi – Keskipituus (m)',
        tableHeaderGYta: 'Pohjapinta-ala (m²/ha)',
        tableClose: 'Sulje'
    },
    en: {
        pageTitle: '📊 Relascope Table',
        backBtn: '⬅ Back to tests',
        introText: 'Take out your Tapio relascope table and a calculator. You will need them. Good luck!',
        startBtn: '🚀 Start game',
        progress: (c, t) => `Question ${c} / ${t}`,
        checkBtn: '✅ Check',
        nextBtn: '➡️ Next',
        perHectareLabel: 'Cubic metres per hectare (m³/ha):',
        totalLabel: 'Total in stand (m³):',
        correct: '✅ Correct! Both answers are right.',
        wrong: (ph, tot) => `❌ Wrong. Correct answers: per hectare: ${ph.toFixed(1)} m³/ha, total: ${tot} m³.`,
        alreadyChecked: '⚠️ You have already checked this question. Move on.',
        mustCheck: '🔍 You must check your answer first.',
        invalidInput: 'Please fill in both fields with valid numbers.',
        resultTitle: (c, t) => `📊 Relascope game complete! 📊<br>Correct: ${c} / ${t}`,
        perfect: '🎉 Perfect! All correct!',
        good: '💪 Good effort! Practice again.',
        restartBtn: '🔄 Practice again',
        backFromResult: '📋 Choose another test',
        treePine: 'pine',
        treeSpruce: 'spruce',
        questionTemplate: (spruceCount, pineCount, spruceName, pineName, area, meanHeight) =>
            `You measured on average ${spruceCount} ${spruceName} and ${pineCount} ${pineName} on the stand of ${area.toFixed(1)} hectares. Mean height is ${meanHeight} m.`,
        tableTitleMixed: '🌲 Mixed (pine & spruce) – Mean height (m)',
        tableTitlePine: '🌲 Pine – Mean height (m)',
        tableTitleSpruce: '🌲 Spruce – Mean height (m)',
        tableHeaderGYta: 'Basal area (m²/ha)',
        tableClose: 'Close'
    }
};

// ============================================================
// 2. DATA FRÅN EXCEL – EXAKT KOPIA
// ============================================================
const basalAreas = [6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40];

const mixedHeights = [6, 8, 10, 12, 14, 16];
const pineHeights = [18, 20, 22, 24, 26, 28];
const spruceHeights = [18, 20, 22, 24, 26, 28];

const mixedVolume = [
    [23, 27, 32, 37, 42, 47],
    [30, 36, 43, 50, 57, 63],
    [38, 46, 54, 62, 71, 79],
    [45, 55, 65, 75, 85, 94],
    [53, 64, 76, 87, 99, 110],
    [60, 73, 86, 100,113,126],
    [68, 82, 97, 112,127,142],
    [75, 91, 108,125,142,158],
    [83, 100,119,137,156,174],
    [90, 109,130,150,170,189],
    [null,118,140,162,184,205],
    [null,null,151,175,198,221],
    [null,null,162,187,212,237],
    [null,null,null,200,227,252],
    [null,null,null,null,241,268],
    [null,null,null,null,255,284],
    [null,null,null,null,null,300],
    [null,null,null,null,null,316]
];

const pineVolume = [
    [52, 56, 60, 64, 68, 72],
    [69, 74, 80, 85, 90, 96],
    [86, 93, 100,106,113,120],
    [103,112,120,128,136,144],
    [120,130,140,149,158,168],
    [138,149,160,170,181,192],
    [155,167,179,191,204,216],
    [172,186,199,213,226,240],
    [189,204,219,234,249,264],
    [206,223,239,255,271,288],
    [224,242,259,276,294,312],
    [241,260,279,298,317,336],
    [258,279,299,319,339,360],
    [275,298,319,340,362,384],
    [292,316,339,361,385,408],
    [310,335,359,383,407,432],
    [327,353,379,404,430,456],
    [344,372,399,425,452,480]
];

const spruceVolume = [
    [53, 58, 63, 69, 74, 79],
    [70, 77, 84, 92, 99, 106],
    [88, 97, 106,114,123,132],
    [105,116,127,137,148,159],
    [123,136,148,160,172,185],
    [140,155,169,183,197,212],
    [158,174,190,206,222,238],
    [176,194,211,229,246,264],
    [193,213,232,252,271,291],
    [211,232,253,275,296,317],
    [229,252,275,297,320,344],
    [246,271,296,320,345,370],
    [264,290,317,343,370,397],
    [281,310,338,366,394,423],
    [298,329,359,389,419,449],
    [316,348,380,412,444,476],
    [334,368,401,435,468,502],
    [352,387,422,458,493,529]
];

// ============================================================
// 3. HJÄLPFUNKTIONER FÖR INTERPOLERING OCH FRÅGEGENERERING
// ============================================================
function getVolumeFromTable(tableData, heights, basalArea, meanHeight) {
    let g_idx = basalAreas.indexOf(basalArea);
    let h_idx = heights.indexOf(meanHeight);
    
    // Om exakt värde finns, returnera det
    if (g_idx !== -1 && h_idx !== -1 && tableData[g_idx][h_idx] !== null) {
        return tableData[g_idx][h_idx];
    }
    
    // Annars hitta omgivande punkter för interpolation
    let g1_idx = g_idx, g2_idx = g_idx;
    if (basalArea < basalAreas[0]) { g1_idx = 0; g2_idx = 0; }
    else if (basalArea > basalAreas[basalAreas.length-1]) { g1_idx = basalAreas.length-1; g2_idx = basalAreas.length-1; }
    else {
        for (let i = 0; i < basalAreas.length-1; i++) {
            if (basalArea >= basalAreas[i] && basalArea <= basalAreas[i+1]) {
                g1_idx = i; g2_idx = i+1; break;
            }
        }
    }
    
    let h1_idx = h_idx, h2_idx = h_idx;
    if (meanHeight < heights[0]) { h1_idx = 0; h2_idx = 0; }
    else if (meanHeight > heights[heights.length-1]) { h1_idx = heights.length-1; h2_idx = heights.length-1; }
    else {
        for (let i = 0; i < heights.length-1; i++) {
            if (meanHeight >= heights[i] && meanHeight <= heights[i+1]) {
                h1_idx = i; h2_idx = i+1; break;
            }
        }
    }
    
    const h1 = heights[h1_idx], h2 = heights[h2_idx];
    const g1 = basalAreas[g1_idx], g2 = basalAreas[g2_idx];
    const v11 = tableData[g1_idx]?.[h1_idx] ?? null;
    const v12 = tableData[g1_idx]?.[h2_idx] ?? null;
    const v21 = tableData[g2_idx]?.[h1_idx] ?? null;
    const v22 = tableData[g2_idx]?.[h2_idx] ?? null;
    
    if (v11 === null || v12 === null || v21 === null || v22 === null) {
        // Fallback: hitta närmaste giltiga punkt
        const points = [];
        for (let gi = 0; gi < basalAreas.length; gi++) {
            for (let hi = 0; hi < heights.length; hi++) {
                const val = tableData[gi][hi];
                if (val !== null) points.push({ g: basalAreas[gi], h: heights[hi], v: val });
            }
        }
        let nearest = points[0];
        let minDist = Math.abs(basalArea - nearest.g) + Math.abs(meanHeight - nearest.h);
        for (let p of points) {
            const dist = Math.abs(basalArea - p.g) + Math.abs(meanHeight - p.h);
            if (dist < minDist) { minDist = dist; nearest = p; }
        }
        return nearest.v;
    }
    
    const t = (meanHeight - h1) / (h2 - h1);
    const u = (basalArea - g1) / (g2 - g1);
    const v = (1-t)*(1-u)*v11 + (1-t)*u*v12 + t*(1-u)*v21 + t*u*v22;
    return Math.round(v * 10) / 10;
}

function getValidCombinations() {
    const combinations = [];
    
    // Blandskog (mixed)
    for (let gi = 0; gi < basalAreas.length; gi++) {
        for (let hi = 0; hi < mixedHeights.length; hi++) {
            if (mixedVolume[gi][hi] !== null) {
                combinations.push({
                    tableType: 'mixed',
                    basalArea: basalAreas[gi],
                    meanHeight: mixedHeights[hi]
                });
            }
        }
    }
    // Tall
    for (let gi = 0; gi < basalAreas.length; gi++) {
        for (let hi = 0; hi < pineHeights.length; hi++) {
            if (pineVolume[gi][hi] !== null) {
                combinations.push({
                    tableType: 'pine',
                    basalArea: basalAreas[gi],
                    meanHeight: pineHeights[hi]
                });
            }
        }
    }
    // Gran
    for (let gi = 0; gi < basalAreas.length; gi++) {
        for (let hi = 0; hi < spruceHeights.length; hi++) {
            if (spruceVolume[gi][hi] !== null) {
                combinations.push({
                    tableType: 'spruce',
                    basalArea: basalAreas[gi],
                    meanHeight: spruceHeights[hi]
                });
            }
        }
    }
    return combinations;
}

// ============================================================
// 4. GENERERA FRÅGA (säkert inom tabellens gränser)
// ============================================================
const validCombos = getValidCombinations();

function generateQuestion() {
    // Välj en slumpmässig giltig kombination
    const combo = validCombos[Math.floor(Math.random() * validCombos.length)];
    const basalArea = combo.basalArea;
    const meanHeight = combo.meanHeight;
    const tableType = combo.tableType;
    
    // Bestäm trädslagsfördelning baserat på tabelltyp
    let pineCount, spruceCount;
    if (tableType === 'pine') {
        // Talldominerat: minst 70% tall
        const minPine = Math.ceil(basalArea * 0.7);
        pineCount = Math.floor(Math.random() * (basalArea - minPine + 1)) + minPine;
        spruceCount = basalArea - pineCount;
    } else if (tableType === 'spruce') {
        // Grandominerat: minst 70% gran
        const minSpruce = Math.ceil(basalArea * 0.7);
        spruceCount = Math.floor(Math.random() * (basalArea - minSpruce + 1)) + minSpruce;
        pineCount = basalArea - spruceCount;
    } else {
        // Blandskog: fördelning spelar mindre roll, men håll inom 30-70%
        const minPine = Math.ceil(basalArea * 0.3);
        const maxPine = Math.floor(basalArea * 0.7);
        pineCount = Math.floor(Math.random() * (maxPine - minPine + 1)) + minPine;
        spruceCount = basalArea - pineCount;
    }
    
    // Välj rätt tabell för volymberäkning
    let tableData, heights;
    if (tableType === 'mixed') { tableData = mixedVolume; heights = mixedHeights; }
    else if (tableType === 'pine') { tableData = pineVolume; heights = pineHeights; }
    else { tableData = spruceVolume; heights = spruceHeights; }
    
    const volumePerHa = getVolumeFromTable(tableData, heights, basalArea, meanHeight);
    const area = Math.round((Math.random() * 19 + 1.1) * 10) / 10;
    const totalVolume = Math.round(volumePerHa * area);
    
    return {
        pineCount, spruceCount, basalArea, meanHeight, area,
        volumePerHa, totalVolume, tableType
    };
}

// ============================================================
// 5. STATE
// ============================================================
let questions = [];
let currentIndex = 0;
let correctCount = 0;
let answered = false;

const introCard = document.getElementById('introCard');
const quizCard = document.getElementById('quizCard');
const resultCard = document.getElementById('resultCard');
const progressEl = document.getElementById('progressIndicator');
const questionText = document.getElementById('questionText');
const perHectareInput = document.getElementById('perHectareInput');
const totalInput = document.getElementById('totalInput');
const feedbackDiv = document.getElementById('feedbackArea');
const checkBtn = document.getElementById('checkBtn');
const nextBtn = document.getElementById('nextBtn');
const restartBtn = document.getElementById('restartBtn');
const backFromResultBtn = document.getElementById('backFromResultBtn');
const resultStats = document.getElementById('resultStats');
const startGameBtn = document.getElementById('startGameBtn');

// ============================================================
// 6. UI-TEXTER UPPDATERING
// ============================================================
function updateUITexts() {
    const lang = getCurrentLanguage();
    document.title = uiTexts[lang].pageTitle;
    document.getElementById('pageTitle').textContent = uiTexts[lang].pageTitle;
    document.getElementById('backToTestsBtn').textContent = uiTexts[lang].backBtn;
    document.getElementById('introText').textContent = uiTexts[lang].introText;
    startGameBtn.textContent = uiTexts[lang].startBtn;
    checkBtn.textContent = uiTexts[lang].checkBtn;
    nextBtn.textContent = uiTexts[lang].nextBtn;
    document.getElementById('perHectareLabel').textContent = uiTexts[lang].perHectareLabel;
    document.getElementById('totalLabel').textContent = uiTexts[lang].totalLabel;
    restartBtn.textContent = uiTexts[lang].restartBtn;
    backFromResultBtn.textContent = uiTexts[lang].backFromResult;
}

// ============================================================
// 7. SPELSTART & RENDERING
// ============================================================
function startGame() {
    questions = [];
    for (let i = 0; i < 10; i++) questions.push(generateQuestion());
    currentIndex = 0; correctCount = 0; answered = false;
    introCard.classList.add('hidden');
    quizCard.classList.remove('hidden');
    resultCard.classList.add('hidden');
    updateUITexts();
    renderQuestion();
}

function renderQuestion() {
    if (currentIndex >= questions.length) { showResult(); return; }
    const q = questions[currentIndex];
    const lang = getCurrentLanguage();
    const pineName = uiTexts[lang].treePine;
    const spruceName = uiTexts[lang].treeSpruce;
    
    const template = uiTexts[lang].questionTemplate;
    questionText.innerHTML = template(q.spruceCount, q.pineCount, spruceName, pineName, q.area, q.meanHeight);
    
    progressEl.textContent = getUIText('progress', currentIndex + 1, questions.length);
    perHectareInput.value = '';
    totalInput.value = '';
    feedbackDiv.classList.add('hidden');
    feedbackDiv.innerHTML = '';
    feedbackDiv.className = 'feedback';
    checkBtn.disabled = false;
    nextBtn.disabled = true;
    answered = false;
}

function checkAnswer() {
    if (answered) { feedbackDiv.classList.remove('hidden'); feedbackDiv.innerHTML = getUIText('alreadyChecked'); feedbackDiv.className = 'feedback wrong'; return; }
    const perHectareVal = parseFloat(perHectareInput.value.replace(',', '.'));
    const totalVal = parseFloat(totalInput.value.replace(',', '.'));
    if (isNaN(perHectareVal) || isNaN(totalVal)) { feedbackDiv.classList.remove('hidden'); feedbackDiv.innerHTML = getUIText('invalidInput'); feedbackDiv.className = 'feedback wrong'; return; }
    const q = questions[currentIndex];
    const perHectareCorrect = q.volumePerHa;
    const totalCorrect = q.totalVolume;
    const isPerHectareOk = Math.abs(perHectareVal - perHectareCorrect) < 0.05;
    const isTotalOk = Math.abs(totalVal - totalCorrect) < 0.5;
    const allCorrect = isPerHectareOk && isTotalOk;
    answered = true;
    if (allCorrect) correctCount++;
    feedbackDiv.classList.remove('hidden');
    const lang = getCurrentLanguage();
    if (allCorrect) { feedbackDiv.innerHTML = getUIText('correct'); feedbackDiv.className = 'feedback correct'; }
    else { feedbackDiv.innerHTML = getUIText('wrong', perHectareCorrect, totalCorrect); feedbackDiv.className = 'feedback wrong'; }
    checkBtn.disabled = true;
    nextBtn.disabled = false;
}

function nextQuestion() {
    if (!answered) { feedbackDiv.classList.remove('hidden'); feedbackDiv.innerHTML = getUIText('mustCheck'); feedbackDiv.className = 'feedback wrong'; return; }
    currentIndex++; renderQuestion();
}

function showResult() {
    quizCard.classList.add('hidden'); resultCard.classList.remove('hidden');
    const total = questions.length, correct = correctCount, lang = getCurrentLanguage();
    let message = getUIText('resultTitle', correct, total);
    message += `<br>${correct === total ? uiTexts[lang].perfect : uiTexts[lang].good}`;
    resultStats.innerHTML = message;
}

function getCurrentLanguage() {
    const saved = localStorage.getItem('preferredLanguage');
    return (saved && uiTexts[saved]) ? saved : 'sv';
}
function getUIText(key, ...args) {
    const lang = getCurrentLanguage();
    const val = uiTexts[lang][key];
    return typeof val === 'function' ? val(...args) : val;
}

// ============================================================
// 8. RENDERA TABELL I MODAL (flerspråkig)
// ============================================================
function renderTableModal() {
    const table = document.getElementById('relaskopTable');
    table.innerHTML = '';
    const lang = getCurrentLanguage();
    
    function getColorForValue(val) {
        if (val === null) return '#e0d5bc';
        if (val < 50) return '#f2f9ec';
        if (val < 100) return '#e0f0d0';
        if (val < 200) return '#c8e6b5';
        if (val < 300) return '#a9d68e';
        if (val < 400) return '#85c465';
        return '#5ea63a';
    }
    
    function addSection(title, heights, data) {
        const headerRow = document.createElement('tr');
        const th = document.createElement('th');
        th.colSpan = heights.length + 1;
        th.textContent = title;
        th.style.backgroundColor = '#2c5e2e';
        th.style.color = '#f9f1cf';
        headerRow.appendChild(th);
        table.appendChild(headerRow);
        
        const colRow = document.createElement('tr');
        const thGYta = document.createElement('th');
        thGYta.textContent = uiTexts[lang].tableHeaderGYta;
        thGYta.style.backgroundColor = '#4a7a4a';
        thGYta.style.color = 'white';
        colRow.appendChild(thGYta);
        heights.forEach(h => {
            const thH = document.createElement('th');
            thH.textContent = h;
            thH.style.backgroundColor = '#4a7a4a';
            thH.style.color = 'white';
            colRow.appendChild(thH);
        });
        table.appendChild(colRow);
        
        basalAreas.forEach((g, gi) => {
            const row = document.createElement('tr');
            const tdG = document.createElement('td');
            tdG.textContent = g;
            tdG.style.backgroundColor = '#d9e6c3';
            tdG.style.fontWeight = '700';
            row.appendChild(tdG);
            heights.forEach((_, hi) => {
                const td = document.createElement('td');
                const val = data[gi][hi];
                if (val !== null) {
                    td.textContent = val;
                    td.style.backgroundColor = getColorForValue(val);
                    if (val >= 300) td.style.color = '#fff';
                } else {
                    td.textContent = '—';
                    td.style.backgroundColor = '#e0d5bc';
                }
                row.appendChild(td);
            });
            table.appendChild(row);
        });
        
        const spacerRow = document.createElement('tr');
        const spacerCell = document.createElement('td');
        spacerCell.colSpan = heights.length + 1;
        spacerCell.style.padding = '10px';
        spacerCell.style.backgroundColor = '#fef9e8';
        spacerRow.appendChild(spacerCell);
        table.appendChild(spacerRow);
    }
    
    addSection(uiTexts[lang].tableTitleMixed, mixedHeights, mixedVolume);
    addSection(uiTexts[lang].tableTitlePine, pineHeights, pineVolume);
    addSection(uiTexts[lang].tableTitleSpruce, spruceHeights, spruceVolume);
}

// ============================================================
// 9. EVENT LISTENERS
// ============================================================
const modal = document.getElementById('tableModal');
const tableBtn = document.getElementById('tableBtn');
const closeModalBtn = document.getElementById('closeModalBtn');

tableBtn.addEventListener('click', () => {
    renderTableModal();
    modal.classList.remove('hidden');
});
closeModalBtn.addEventListener('click', () => modal.classList.add('hidden'));
modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.add('hidden'); });

document.getElementById('backToTestsBtn').addEventListener('click', () => {
    window.location.href = '../Testerna/testerna.html';
});
startGameBtn.addEventListener('click', startGame);
checkBtn.addEventListener('click', checkAnswer);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', () => {
    introCard.classList.remove('hidden');
    quizCard.classList.add('hidden');
    resultCard.classList.add('hidden');
});
backFromResultBtn.addEventListener('click', () => {
    window.location.href = '../Testerna/testerna.html';
});

// ============================================================
// 10. INIT
// ============================================================
updateUITexts();