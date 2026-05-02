// ============================================================
// 1. ÖVERSÄTTNINGAR (Alla tabbar + blanketterna)
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

        // Introtext för blanketterna
        blanketIntro: "Här hittar du checklistor och blanketter för egenkontroll och naturhänsyn.",
        formOmaTitle: "Guide för egenkontroll av skogsvårdsarbeten",
        formOmaDesc: "Tapios guide med checklistor och anvisningar för skogsägarens egenkontroll. Blanketterna är endast på finska.",
        formAuditTitle: "Intern auditering",
        formAuditDesc: "Verktyg för att granska och utveckla skogsorganisationers processer. Allt material är på finska.",
        formCheckTitle: "Checklista för naturhänsyn",
        formCheckDesc: "PDF-blankett från Skogscentralen för att följa upp naturvårdsåtgärder. Blanketten är på svenska.",
        formCheckLang: "PDF:en är på svenska."
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

        blanketIntro: "Täältä löydät tarkistuslistoja ja lomakkeita omavalvontaan ja luonnonhoitoon.",
        formOmaTitle: "Metsänhoitotöiden omavalvontaopas",
        formOmaDesc: "Tapion opas, jossa tarkistuslistoja ja ohjeita metsänomistajan itsevalvontaan. Vain suomenkieliset lomakkeet.",
        formAuditTitle: "Sisäinen auditointi",
        formAuditDesc: "Työkaluja metsäorganisaatioiden prosessien tarkasteluun ja kehittämiseen. Materiaali suomeksi.",
        formCheckTitle: "Luonnonhoitotoimenpiteiden tarkistuslista",
        formCheckDesc: "Metsäkeskuksen ruotsinkielinen PDF-lomake luonnonhoitotoimenpiteiden seurantaan.",
        formCheckLang: "PDF on ruotsiksi."
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

        blanketIntro: "Here you will find checklists and forms for self-monitoring and nature conservation.",
        formOmaTitle: "Self-monitoring guide for forest management work",
        formOmaDesc: "Tapio's guide with checklists and instructions for forest owner self-monitoring. Forms in Finnish only.",
        formAuditTitle: "Internal auditing",
        formAuditDesc: "Tools for reviewing and developing forest organisation processes. Material in Finnish only.",
        formCheckTitle: "Checklist for nature conservation measures",
        formCheckDesc: "PDF form from the Finnish Forest Centre for monitoring nature management actions. The form is in Swedish.",
        formCheckLang: "PDF is in Swedish."
    }
};

// ============================================================
// 2. DATA FÖR BLANKETTKORTEN
// ============================================================
const formCards = [
    { key: "formOma", link: "https://tapio.fi/oppaat-ja-tyovalineet/metsanhoitotoiden-omavalvontaopas/", langNoteKey: null },
    { key: "formAudit", link: "https://kestavametsa.fi/sisainen-auditointi/", langNoteKey: null },
    { key: "formCheck", link: "https://www.metsakeskus.fi/sites/default/files/document/lomake-luonnonhoitotoimenpiteiden-tarkistuslista-sv.pdf", langNoteKey: "formCheckLang" }
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
    document.title = t.headerTitle + " – " + t.tabBlanketter;
    document.documentElement.lang = lang;
    langButtons.forEach(btn => {
        const bl = btn.getAttribute('data-lang');
        btn.classList.toggle('active', bl === lang);
    });
    localStorage.setItem('preferredLanguage', lang);
    renderForms();
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

function renderForms() {
    const container = document.getElementById('formContainer');
    if (!container) return;
    container.innerHTML = '';
    formCards.forEach(card => container.appendChild(createCard(card, currentLang)));
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
        } else if (tabType === 'studiematerial') {
            window.location.href = '/Studiematerial/studiematerial.html';
        } else if (tabType === 'ordbok') {
            window.location.href = '/Ordbok/ordbok.html';
        }
        // 'blanketter' är den aktiva sidan
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