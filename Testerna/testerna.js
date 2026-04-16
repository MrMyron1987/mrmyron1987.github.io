// ============================================================
// 1. ÖVERSÄTTNINGAR FÖR ALLA KATEGORIER
// ============================================================
const categoryTranslations = {
    "Trädslag och buskars namn": {
        sv: "Trädslag och buskars namn",
        fi: "Puu- ja pensaslajien nimet",
        en: "Tree and shrub species"
    },
    "Ståndortstyper på mineraljorder": {
        sv: "Ståndortstyper på mineraljorder",
        fi: "Kivennäismaiden kasvupaikkatyypit",
        en: "Site types on mineral soils"
    },
    "Växter namn": {
        sv: "Växter namn",
        fi: "Kasvien nimet",
        en: "Plant names"
    },
    "Koefficient räkning": {
        sv: "Koefficient räkning",
        fi: "Muuntokertoimella",
        en: "Coefficient calculations",
    },
    "Vägar": {
        sv: "Vägar",
        fi: "Tiet",
        en: "Forest roads",
    },
    "Relaskoptabell": {
        sv: "Relaskoptabell",
        fi: "Relaskooppitaulukko",
        en: "Relascope table",
    },
};

// Lista över aktiva kategorier (visas i denna ordning efter sortering)
const allCategoryKeys = [
    "Trädslag och buskars namn",
    "Ståndortstyper på mineraljorder",
    "Växter namn",
    "Koefficient räkning",
    "Vägar",
    "Relaskoptabell"
];

// ============================================================
// 2. HJÄLPFUNKTIONER
// ============================================================
function getCurrentLanguage() {
    const saved = localStorage.getItem('preferredLanguage');
    return (saved && ['sv', 'fi', 'en'].includes(saved)) ? saved : 'sv';
}

function translateCategory(key, lang) {
    return categoryTranslations[key]?.[lang] || key;
}

// ============================================================
// 3. RENDERA KNAPPAR SORTERADE EFTER AKTIVT SPRÅK
// ============================================================
function renderCategoryButtons() {
    const lang = getCurrentLanguage();
    const grid = document.getElementById('categoriesGrid');
    
    const items = allCategoryKeys.map(key => ({
        key: key,
        display: translateCategory(key, lang)
    }));
    
    items.sort((a, b) => a.display.localeCompare(b.display, lang));
    
    grid.innerHTML = '';
    items.forEach(item => {
        const btn = document.createElement('button');
        btn.className = 'cat-btn';
        btn.textContent = item.display;
        btn.dataset.categoryKey = item.key;
        
        btn.classList.add('special');
        
        btn.addEventListener('click', () => onCategorySelected(item.key));
        grid.appendChild(btn);
    });
    
    updateUILanguage(lang);
}

function updateUILanguage(lang) {
    const titles = {
        sv: 'Välj test – Skogskunskap',
        fi: 'Valitse testi – Metsätieto',
        en: 'Select test – Forestry knowledge'
    };
    const headers = {
        sv: '🌲 Välj ett test',
        fi: '🌲 Valitse testi',
        en: '🌲 Select a test'
    };
    const backTexts = {
        sv: '🏠 Till startsidan',
        fi: '🏠 Etusivulle',
        en: '🏠 Back to start'
    };
    
    document.title = titles[lang] || titles.sv;
    document.querySelector('.main-header h1').textContent = headers[lang] || headers.sv;
    document.getElementById('backToStartBtn').textContent = backTexts[lang] || backTexts.sv;
    document.documentElement.lang = lang;
}

// ============================================================
// 4. HANTERING AV KATEGORIVAL
// ============================================================
function onCategorySelected(categoryKey) {
    const lang = getCurrentLanguage();
    console.log(`Vald kategori: ${categoryKey}, språk: ${lang}`);

    if (categoryKey === 'Trädslag och buskars namn') {
        window.location.href = '../Tradslag/tradslagochbuskar.html';
    } else if (categoryKey === 'Ståndortstyper på mineraljorder') {
        window.location.href = '../Standorter/standorter.html';
    } else if (categoryKey === 'Växter namn') {
        window.location.href = '../Vaxternamn/vaxternamn.html';
    } else if (categoryKey === 'Koefficient räkning') {
        window.location.href = '../Kofficient/kofficient.html';
    } else if (categoryKey === 'Vägar') {
        window.location.href = '../vagarna/vagar.html';
    } else if (categoryKey === 'Relaskoptabell') {
        window.location.href = '../Relaskop/relaskop.html';
    }
}

// ============================================================
// 5. ÅTERGÅ TILL STARTSIDAN
// ============================================================
document.getElementById('backToStartBtn').addEventListener('click', () => {
    window.location.href = '../Startsidan/startsida.html';
});

// ============================================================
// 6. INIT
// ============================================================
renderCategoryButtons();