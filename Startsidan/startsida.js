// ============================================================
// 1. ÖVERSÄTTNINGAR – ALL TEXT
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
        welcomeMsg: "Välkommen till denna hemsida, Den är än under konstruktion men titta gärna omkring.",

        infoBox1Title: "Välkommen till Skogsriket",
        infoBox1Text: "Utforska våra skogstester, nyheter och jobb inom skogssektorn. Här hittar du allt för skogsproffs och entusiaster.",
        infoBox2Title: "Senaste nytt",
        infoBox2Text: "Håll dig uppdaterad med de senaste händelserna och rönen från skogsindustrin, både i Finland och Sverige.",
        infoBox3Title: "Testa dina kunskaper",
        infoBox3Text: "Välj bland flera kategorier som trädslag, växter, matematik och vägar – och utmana dig själv!",

        dictionaryIntro: "Här hittar du alla skogliga ord och dess benämningar",
        dictionaryClickText: "Klicka på knappen för att komma till den skogliga ordboken",
        dictionaryButton: "📖 Öppna ordboken",

        pageTitle: "Finska skogssidan – Start"
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
        welcomeMsg: "Tervetuloa tälle sivustolle, se on vielä rakenteilla, mutta katsele ympärillesi.",

        infoBox1Title: "Tervetuloa Metsävaltakuntaan",
        infoBox1Text: "Tutustu metsätesteihin, uutisiin ja työpaikkoihin. Täältä löydät kaiken metsäammattilaisille ja –harrastajille.",
        infoBox2Title: "Viimeisimmät uutiset",
        infoBox2Text: "Pysy ajan tasalla metsäteollisuuden tapahtumista ja tutkimuksista Suomessa ja Ruotsissa.",
        infoBox3Title: "Testaa tietosi",
        infoBox3Text: "Valitse useista kategorioista kuten puulajit, kasvit, matematiikka ja tiet – ja haasta itsesi!",

        dictionaryIntro: "Täältä löydät kaikki metsäalan sanat ja niiden nimet",
        dictionaryClickText: "Napsauta painiketta päästäksesi metsäalan sanakirjaan",
        dictionaryButton: "📖 Avaa sanakirja",

        pageTitle: "Suomen metsäsivusto – Etusivu"
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
        welcomeMsg: "Welcome to this website, it is still under construction but feel free to look around.",

        infoBox1Title: "Welcome to the Forest Realm",
        infoBox1Text: "Explore our forest tests, news and jobs within the forestry sector. Here you'll find everything for forest professionals and enthusiasts.",
        infoBox2Title: "Latest News",
        infoBox2Text: "Stay updated with the latest events and findings from the forest industry in Finland and Sweden.",
        infoBox3Title: "Test Your Knowledge",
        infoBox3Text: "Choose from several categories such as tree species, plants, mathematics and roads – and challenge yourself!",

        dictionaryIntro: "Here you find all forestry words and their designations",
        dictionaryClickText: "Click the button to access the forestry dictionary",
        dictionaryButton: "📖 Open dictionary",

        pageTitle: "Finnish Forest Site – Home"
    }
};

// ============================================================
// 3. DOM & INIT
// ============================================================
const tabButtons = document.querySelectorAll('.tab');
const langButtons = document.querySelectorAll('.lang-btn');
const goToDictionaryBtn = document.getElementById('goToDictionaryBtn');
const allPanels = document.querySelectorAll('.tab-panel');
let currentLang = 'sv';

function updateLanguage(lang) {
    const t = translations[lang];
    if (!t) return;
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (t[key] !== undefined) el.textContent = t[key];
    });
    document.title = t.pageTitle;
    document.documentElement.lang = lang;
    langButtons.forEach(btn => {
        const bl = btn.getAttribute('data-lang');
        btn.classList.toggle('active', bl === lang);
    });
    localStorage.setItem('preferredLanguage', lang);
}

function setActiveTab(tabId) {
    tabButtons.forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-tab') === tabId);
    });
    allPanels.forEach(panel => {
        panel.classList.toggle('active', panel.id === `panel-${tabId}`);
    });
}

tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const tabType = btn.getAttribute('data-tab');
        if (!tabType || tabType === 'sprak') return;
        if (tabType === 'jobb') {
            window.location.href = '/jobb/jobb.html';
            return;
        }
        if (tabType === 'nyheter') {
            window.location.href = '/Organisation/organisation.html';
            return;
        }
        if (tabType === 'kunskapstester') {
            window.location.href = '/Testerna/testerna.html';
            return;
        }
        if (tabType === 'blanketter') {
            window.location.href = '/Blanketter/blanketter.html';
            return;
        }
        if (tabType === 'studiematerial') {
            window.location.href = '/Studiematerial/studiematerial.html';
            return;
        }
        setActiveTab(tabType);
    });
});

langButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const lang = e.currentTarget.getAttribute('data-lang');
        if (lang && translations[lang]) {
            currentLang = lang;
            updateLanguage(lang);
        }
    });
});

if (goToDictionaryBtn) {
    goToDictionaryBtn.addEventListener('click', () => {
        window.location.href = '/Ordbok/ordbok.html';
    });
}

function initialize() {
    const savedLang = localStorage.getItem('preferredLanguage') || 'sv';
    currentLang = savedLang;
    updateLanguage(currentLang);
    setActiveTab('start');
}
initialize();