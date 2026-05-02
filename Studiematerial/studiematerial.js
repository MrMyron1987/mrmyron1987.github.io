// ============================================================
// 1. ÖVERSÄTTNINGAR (Alla tabbar + studiekorten)
// ============================================================
const translations = {
    sv: {
        headerTitle: "🌲 Finska skogssidan för alla skogsmänniskor",
        tabBlanketter: "Blanketter",
        tabJobb: "Jobb och praktikplats",
        tabKunskapstester: "Kunskapstester",
        tabNyheter: "Organisationer",
        tabStart: "Start",
        tabStudiematerial: "Studiematerial",
        tabDictionary: "Ordboken",
        tabSchools: "Skolor",

        studiematerialIntro: "Här hittar du PDF:er och webbsidor som kan hjälpa dig i dina studier.",
        studyRecTitle: "Rekommendationer för skogsvård",
        studyRecDesc: "Webbplats med riktlinjer för god skogsvård i Finland enligt de senaste forskningsrönen.",
        studyMetsoTitle: "Metso",
        studyMetsoDesc: "Handbok för METSO-applikation. Praktiska råd till skogsägare och skogsexperter.",
        studyMetsoLang: "PDF:en är på finska.",
        studyArvoTitle: "Värdekedjor inom skogsbioekonomi",
        studyArvoDesc: "Utredning om skogsbioekonomins möjligheter och värdekedjor.",
        studyArvoLang: "PDF:en är på finska.",
        studyBokTitle: "Bokföring och lönsamhetsberäkning i skogsbruket",
        studyBokDesc: "Handbok i ekonomisk planering för skogsägare, med fokus på bokföring och lönsamhet.",
        studyBokLang: "PDF:en är på svenska.",
        studyGranskTitle: "Granskningsinstruktion 2023",
        studyGranskDesc: "Instruktion för fältgranskning av skogsvårdsåtgärder, utgiven av Finlands skogscentral.",
        studyGranskLang: "PDF:en är på svenska."
    },
    fi: {
        headerTitle: "🌲 Suomen metsäsivusto kaikille metsäihmisille",
        tabBlanketter: "Lomakkeet",
        tabJobb: "Työpaikat ja harjoittelu",
        tabKunskapstester: "Tietotestit",
        tabNyheter: "Organisaatiot",
        tabStart: "Etusivu",
        tabStudiematerial: "Opiskelumateriaali",
        tabDictionary: "Sanakirja",
        tabSchools: "Koulut",

        studiematerialIntro: "Täältä löydät PDF-tiedostoja ja verkkosivuja, jotka auttavat opinnoissasi.",
        studyRecTitle: "Metsänhoidon suositukset",
        studyRecDesc: "Verkkosivusto, jossa ohjeita hyvään metsänhoitoon Suomessa uusimpien tutkimustulosten mukaan.",
        studyMetsoTitle: "Metso",
        studyMetsoDesc: "METSO-sovelluksen käsikirja. Käytännön neuvoja metsänomistajille ja metsäasiantuntijoille.",
        studyMetsoLang: "PDF on suomeksi.",
        studyArvoTitle: "Arvoketjut metsäbiotaloudessa",
        studyArvoDesc: "Selvitys metsäbiotalouden mahdollisuuksista ja arvoketjuista.",
        studyArvoLang: "PDF on suomeksi.",
        studyBokTitle: "Kirjanpito ja kannattavuuslaskenta metsätaloudessa",
        studyBokDesc: "Opas taloudelliseen suunnitteluun metsänomistajille.",
        studyBokLang: "PDF on ruotsiksi.",
        studyGranskTitle: "Tarkastusohje 2023",
        studyGranskDesc: "Metsäkeskuksen ohje metsänhoitotöiden maastotarkastuksiin.",
        studyGranskLang: "PDF on ruotsiksi."
    },
    en: {
        headerTitle: "🌲 Finnish Forest Site for all forest people",
        tabBlanketter: "Forms",
        tabJobb: "Jobs and Internships",
        tabKunskapstester: "Knowledge Tests",
        tabNyheter: "Organizations",
        tabStart: "Home",
        tabStudiematerial: "Study Material",
        tabDictionary: "Dictionary",
        tabSchools: "Schools",

        studiematerialIntro: "Here you will find PDFs and websites to help you in your studies.",
        studyRecTitle: "Forest Management Recommendations",
        studyRecDesc: "Website with guidelines for good forest management in Finland based on the latest research.",
        studyMetsoTitle: "Metso",
        studyMetsoDesc: "Handbook for METSO application. Practical advice for forest owners and forest experts.",
        studyMetsoLang: "PDF is in Finnish.",
        studyArvoTitle: "Value chains in forest bioeconomy",
        studyArvoDesc: "Report on the opportunities and value chains of forest bioeconomy.",
        studyArvoLang: "PDF is in Finnish.",
        studyBokTitle: "Accounting and profitability calculation in forestry",
        studyBokDesc: "Guide to financial planning for forest owners.",
        studyBokLang: "PDF is in Swedish.",
        studyGranskTitle: "Inspection Instruction 2023",
        studyGranskDesc: "Instruction for field inspection of silvicultural measures, published by the Finnish Forest Centre.",
        studyGranskLang: "PDF is in Swedish."
    }
};

// ============================================================
// 2. DATA FÖR STUDIEKORTEN
// ============================================================
const studyCards = [
    { key: "studyRec", link: "https://metsanhoidonsuositukset.fi", langNoteKey: null },
    { key: "studyMetso", link: "https://metsonpolku.fi/documents/115183005/124281117/Metso_Tikka_2018_Suomi.pdf/afcc4af9-c8b0-d133-47f3-a9b077db9ffd/Metso_Tikka_2018_Suomi.pdf?t=1655465275803", langNoteKey: "studyMetsoLang" },
    { key: "studyArvo", link: "https://julkaisut.valtioneuvosto.fi/server/api/core/bitstreams/35938706-0485-42d3-bff1-724f245e4c6b/content", langNoteKey: "studyArvoLang" },
    { key: "studyBok", link: "https://share.google/vN4YfB8GjvWnsLjii", langNoteKey: "studyBokLang" },
    { key: "studyGransk", link: "https://www.metsakeskus.fi/sites/default/files/document/tarkastusohje-sv.pdf", langNoteKey: "studyGranskLang" }
];

// ============================================================
// 3. DOM & INIT
// ============================================================
const langButtons = document.querySelectorAll('.lang-btn');
const tabButtons = document.querySelectorAll('.tab');
let currentLang = localStorage.getItem('preferredLanguage') || 'sv';

function updateLanguage(lang) {
    const t = translations[lang];
    if (!t) return;
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (t[key] !== undefined) el.textContent = t[key];
    });
    document.title = t.headerTitle + " – " + t.tabStudiematerial;
    document.documentElement.lang = lang;
    langButtons.forEach(btn => {
        const bl = btn.getAttribute('data-lang');
        btn.classList.toggle('active', bl === lang);
    });
    localStorage.setItem('preferredLanguage', lang);
    renderStudy();
}

// Hjälpfunktion för att skapa kort
function createCard(data, lang) {
    const t = translations[lang];
    const div = document.createElement('div');
    div.className = 'news-item';
    const h3 = document.createElement('h3');
    const a = document.createElement('a');
    a.href = data.link;
    a.target = '_blank';
    a.textContent = t[data.key + 'Title'] || data.key;
    h3.appendChild(a);
    div.appendChild(h3);
    const p = document.createElement('p');
    p.textContent = t[data.key + 'Desc'] || '';
    div.appendChild(p);
    if (data.langNoteKey) {
        const note = document.createElement('p');
        note.className = 'lang-note';
        note.textContent = t[data.langNoteKey] || '';
        div.appendChild(note);
    }
    return div;
}

function renderStudy() {
    const container = document.getElementById('studyContainer');
    if (!container) return;
    container.innerHTML = '';
    studyCards.forEach(card => container.appendChild(createCard(card, currentLang)));
}

// Fliknavigering – till andra sidor
tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const tabType = btn.getAttribute('data-tab');
        if (tabType === 'start') {
            window.location.href = '/Startsidan/startsida.html';
        } else if (tabType === 'jobb') {
            window.location.href = '/jobb/jobb.html';
        } else if (tabType === 'nyheter') {
            window.location.href = '/Organisation/organisation.html';
        } else if (tabType === 'kunskapstester') {
            window.location.href = '/Testerna/testerna.html';
        } else if (tabType === 'blanketter') {
            window.location.href = '/Blanketter/blanketter.html';
        } else if (tabType === 'ordbok') {
            window.location.href = '/Ordbok/ordbok.html';
        } else if (tabType === 'skolor') {
            window.location.href = '/Skola/skola.html';
        }
        // 'studiematerial' är den aktiva sidan
    });
});

// Språkknappar
langButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const lang = e.currentTarget.getAttribute('data-lang');
        if (lang && translations[lang]) {
            currentLang = lang;
            updateLanguage(lang);
        }
    });
});

// Init
updateLanguage(currentLang);