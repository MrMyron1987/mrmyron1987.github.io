// ============================================================
// 1. ÖVERSÄTTNINGAR – ALL TEXT (Organisationer borttagna)
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

        testIntroText: "Välkommen och testa dina skogskunskaper. Klicka in dig på sidan och välj ett ämne du vill testa dina kunskaper på. Det finns allt från indikationsväxter, skoglig matematik och vägar. Med andra ord, allt inom skogsbruk.",
        goToTests: "🌿 Gå till testerna",

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
        studyGranskLang: "PDF:en är på svenska.",

        blanketIntro: "Här hittar du checklistor och blanketter för egenkontroll och naturhänsyn.",
        formOmaTitle: "Guide för egenkontroll av skogsvårdsarbeten",
        formOmaDesc: "Tapios guide med checklistor och anvisningar för skogsägarens egenkontroll. Blanketterna är endast på finska.",
        formAuditTitle: "Intern auditering",
        formAuditDesc: "Verktyg för att granska och utveckla skogsorganisationers processer. Allt material är på finska.",
        formCheckTitle: "Checklista för naturhänsyn",
        formCheckDesc: "PDF-blankett från Skogscentralen för att följa upp naturvårdsåtgärder. Blanketten är på svenska.",
        formCheckLang: "PDF:en är på svenska.",

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

        testIntroText: "Tervetuloa testaamaan metsätietouttasi. Verkkosivustollamme voit valita itseäsi kiinnostavan aiheen, jonka osaamista haluat testata. Valikoimasta löytyy aiheita kuten indikaattorikasvit, metsämatematiikka ja metsätiet – toisin sanoen kaikkea metsänhoitoon liittyvää.",
        goToTests: "🌿 Siirry testeihin",

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
        studyGranskLang: "PDF on ruotsiksi.",

        blanketIntro: "Täältä löydät tarkistuslistoja ja lomakkeita omavalvontaan ja luonnonhoitoon.",
        formOmaTitle: "Metsänhoitotöiden omavalvontaopas",
        formOmaDesc: "Tapion opas, jossa tarkistuslistoja ja ohjeita metsänomistajan itsevalvontaan. Vain suomenkieliset lomakkeet.",
        formAuditTitle: "Sisäinen auditointi",
        formAuditDesc: "Työkaluja metsäorganisaatioiden prosessien tarkasteluun ja kehittämiseen. Materiaali suomeksi.",
        formCheckTitle: "Luonnonhoitotoimenpiteiden tarkistuslista",
        formCheckDesc: "Metsäkeskuksen ruotsinkielinen PDF-lomake luonnonhoitotoimenpiteiden seurantaan.",
        formCheckLang: "PDF on ruotsiksi.",

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

        testIntroText: "Welcome and test your forest knowledge. Enter the page and choose a topic you want to test your knowledge on. There is everything from indicator plants, forest mathematics to forest roads – in other words, everything within forestry.",
        goToTests: "🌿 Go to tests",

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
        studyGranskLang: "PDF is in Swedish.",

        blanketIntro: "Here you will find checklists and forms for self-monitoring and nature conservation.",
        formOmaTitle: "Self-monitoring guide for forest management work",
        formOmaDesc: "Tapio's guide with checklists and instructions for forest owner self-monitoring. Forms in Finnish only.",
        formAuditTitle: "Internal auditing",
        formAuditDesc: "Tools for reviewing and developing forest organisation processes. Material in Finnish only.",
        formCheckTitle: "Checklist for nature conservation measures",
        formCheckDesc: "PDF form from the Finnish Forest Centre for monitoring nature management actions. The form is in Swedish.",
        formCheckLang: "PDF is in Swedish.",

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
// 2. DATA FÖR KORTEN (Studiematerial, Blanketter)
// ============================================================
const studyCards = [
    { key: "studyRec", link: "https://metsanhoidonsuositukset.fi", langNoteKey: null },
    { key: "studyMetso", link: "https://metsonpolku.fi/documents/115183005/124281117/Metso_Tikka_2018_Suomi.pdf/afcc4af9-c8b0-d133-47f3-a9b077db9ffd/Metso_Tikka_2018_Suomi.pdf?t=1655465275803", langNoteKey: "studyMetsoLang" },
    { key: "studyArvo", link: "https://julkaisut.valtioneuvosto.fi/server/api/core/bitstreams/35938706-0485-42d3-bff1-724f245e4c6b/content", langNoteKey: "studyArvoLang" },
    { key: "studyBok", link: "https://share.google/vN4YfB8GjvWnsLjii", langNoteKey: "studyBokLang" },
    { key: "studyGransk", link: "https://www.metsakeskus.fi/sites/default/files/document/tarkastusohje-sv.pdf", langNoteKey: "studyGranskLang" }
];

const formCards = [
    { key: "formOma", link: "https://tapio.fi/oppaat-ja-tyovalineet/metsanhoitotoiden-omavalvontaopas/", langNoteKey: null },
    { key: "formAudit", link: "https://kestavametsa.fi/sisainen-auditointi/", langNoteKey: null },
    { key: "formCheck", link: "https://www.metsakeskus.fi/sites/default/files/document/lomake-luonnonhoitotoimenpiteiden-tarkistuslista-sv.pdf", langNoteKey: "formCheckLang" }
];

// ============================================================
// 3. DOM & INIT
// ============================================================
const tabButtons = document.querySelectorAll('.tab');
const langButtons = document.querySelectorAll('.lang-btn');
const goToTestsBtn = document.getElementById('goToTestsBtn');
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

function renderSection(containerId, cards) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';
    cards.forEach(card => container.appendChild(createCard(card, currentLang)));
}

function renderStudy()  { renderSection('studyContainer', studyCards); }
function renderForms()  { renderSection('formContainer', formCards); }

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
        setActiveTab(tabType);
        if (tabType === 'studiematerial') renderStudy();
        else if (tabType === 'blanketter') renderForms();
    });
});

langButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const lang = e.currentTarget.getAttribute('data-lang');
        if (lang && translations[lang]) {
            currentLang = lang;
            updateLanguage(lang);
            if (document.getElementById('panel-studiematerial').classList.contains('active')) renderStudy();
            if (document.getElementById('panel-blanketter').classList.contains('active')) renderForms();
        }
    });
});

if (goToTestsBtn) {
    goToTestsBtn.addEventListener('click', () => {
        window.location.href = '/Testerna/testerna.html';
    });
}
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