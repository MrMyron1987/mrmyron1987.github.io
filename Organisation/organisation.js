// ============================================================
// 1. ÖVERSÄTTNINGAR (Alla tabbar + organisationskorten)
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

        // Introtext för organisationer
        newsIntro: "Här har jag samlat de främsta skogliga webbplatserna som publicerar nyheter inom skogsbranschen. Gillar du innehållet kan du börja prenumerera på dem och understöda dem.",
        skogscentralenTitle: "Skogscentralen",
        skogscentralenDesc: "Finlands nationella skogsmyndighet. Ansvarar för genomförandet av Finlands skogspolitik och erbjuder rådgivning, utbildning och finansieringsstöd för skogsägare.",
        tapioTitle: "Tapio",
        tapioDesc: "En neutral, erfaren expertorganisation med över 110 års erfarenhet inom hållbart skogsbruk. Erbjuder konsulttjänster, skogsplanering och klimatanpassningstjänster.",
        metsalehtiTitle: "Metsälehti",
        metsalehtiDesc: "Finlands ledande skogstidskrift sedan 1933, med nyheter, reportage och debatt om skogsbruk och skogsägande.",
        metsalehtiLangNote: "Webbplatsen är endast på finska.",
        finlandsNaturTitle: "Finlands Natur",
        finlandsNaturDesc: "Den finlandssvenska naturtidningen som sedan 1941 erbjuder naturskildringar, miljönyheter och praktiska tips för en hållbar livsstil.",
        finlandsNaturLangNote: "",
        skogsstyrelsenTitle: "Skogsstyrelsen",
        skogsstyrelsenDesc: "Sveriges nationella skogsmyndighet. Arbetar för hållbart skogsbruk, rådgivning, tillsyn av Skogsvårdslagen och hanterar statliga stöd för skogsbruket.",
        skogsstyrelsenLangNote: "Webbplatsen finns på svenska och engelska.",
        mmsaatioTitle: "Maa- ja metsätaloussäätiö",
        mmsaatioDesc: "Stiftelse som främjar finländsk jord- och skogsbruksforskning samt kunskapsspridning."
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

        newsIntro: "Tälle sivulle olen koonnut tärkeimmät metsäalan verkkosivustot, jotka julkaisevat uutisia metsäalalta. Jos pidät sisällöstä, voit aloittaa niiden tilaamisen ja tukea niitä.",
        skogscentralenTitle: "Metsäkeskus",
        skogscentralenDesc: "Suomen kansallinen metsäviranomainen, joka vastaa metsäpolitiikan toimeenpanosta ja tarjoaa neuvontaa, koulutusta ja rahoitustukea metsänomistajille.",
        tapioTitle: "Tapio",
        tapioDesc: "Neutraali, kokenut asiantuntijaorganisaatio, jolla on yli 110 vuoden kokemus kestävästä metsätaloudesta. Tarjoaa konsultointia, metsäsuunnittelua ja ilmastonmuutokseen sopeutumisen palveluita.",
        metsalehtiTitle: "Metsälehti",
        metsalehtiDesc: "Suomen johtava metsäalan lehti vuodesta 1933, tarjoten uutisia, raportteja ja keskustelua metsätaloudesta ja metsänomistuksesta.",
        metsalehtiLangNote: "",
        finlandsNaturTitle: "Finlands Natur",
        finlandsNaturDesc: "Suomenruotsalainen luontolehti, joka vuodesta 1941 lähtien on tarjonnut luontokertomuksia, ympäristöuutisia ja käytännön vinkkejä kestävään elämäntapaan.",
        finlandsNaturLangNote: "Verkkosivusto on vain ruotsiksi.",
        skogsstyrelsenTitle: "Skogsstyrelsen",
        skogsstyrelsenDesc: "Ruotsin kansallinen metsäviranomainen. Edistää kestävää metsätaloutta, tarjoaa neuvontaa, valvoo metsälakia ja hallinnoi valtion tukia.",
        skogsstyrelsenLangNote: "Verkkosivusto on ruotsiksi ja englanniksi.",
        mmsaatioTitle: "Maa- ja metsätaloussäätiö",
        mmsaatioDesc: "Säätiö, joka edistää suomalaista maa- ja metsätaloustutkimusta sekä tiedon levittämistä."
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

        newsIntro: "Here I have gathered the leading forestry websites that publish news within the forest industry. If you like the content, you can start subscribing to them and support them.",
        skogscentralenTitle: "Skogscentralen",
        skogscentralenDesc: "Finland's national forest authority. Responsible for implementing Finland's forest policy and offers advice, training and financial support for forest owners.",
        tapioTitle: "Tapio",
        tapioDesc: "A neutral, experienced expert organisation with over 110 years of experience in sustainable forestry. Offers consulting, forest planning and climate adaptation services.",
        metsalehtiTitle: "Metsälehti",
        metsalehtiDesc: "Finland's leading forestry magazine since 1933, featuring news, reports and debate on forestry and forest ownership.",
        metsalehtiLangNote: "The website is in Finnish only.",
        finlandsNaturTitle: "Finlands Natur",
        finlandsNaturDesc: "The Swedish-speaking Finnish nature magazine that since 1941 has offered nature stories, environmental news and practical tips for a sustainable lifestyle.",
        finlandsNaturLangNote: "The website is in Swedish only.",
        skogsstyrelsenTitle: "Skogsstyrelsen",
        skogsstyrelsenDesc: "Sweden's national forest authority. Promotes sustainable forestry, provides advice, enforces the Forestry Act and handles state subsidies for forestry.",
        skogsstyrelsenLangNote: "The website is available in Swedish and English.",
        mmsaatioTitle: "Maa- ja metsätaloussäätiö",
        mmsaatioDesc: "Foundation that promotes Finnish agricultural and forestry research and knowledge dissemination."
    }
};

// ============================================================
// 2. DATA FÖR ORGANISATIONSKORTEN
// ============================================================
const newsCards = [
    { key: "skogscentralen", link: "https://www.metsakeskus.fi/sv", langNoteKey: null },
    { key: "tapio", link: "https://tapio.fi/", langNoteKey: null },
    { key: "metsalehti", link: "https://www.metsalehti.fi/", langNoteKey: "metsalehtiLangNote" },
    { key: "finlandsNatur", link: "https://finlandsnatur.fi/", langNoteKey: "finlandsNaturLangNote" },
    { key: "skogsstyrelsen", link: "https://www.skogsstyrelsen.se/", langNoteKey: "skogsstyrelsenLangNote" },
    { key: "mmsaatio", link: "https://www.mmsaatio.fi/", langNoteKey: null }
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
    document.title = t.headerTitle + " – " + t.tabNyheter;
    document.documentElement.lang = lang;
    langButtons.forEach(btn => {
        const bl = btn.getAttribute('data-lang');
        btn.classList.toggle('active', bl === lang);
    });
    localStorage.setItem('preferredLanguage', lang);
    renderNews();
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

function renderNews() {
    const container = document.getElementById('newsContainer');
    if (!container) return;
    container.innerHTML = '';
    newsCards.forEach(card => container.appendChild(createCard(card, currentLang)));
}

// Fliknavigering – till andra sidor
tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const tabType = btn.getAttribute('data-tab');
        if (tabType === 'start') {
            window.location.href = '/Startsidan/startsida.html';
        } else if (tabType === 'jobb') {
            window.location.href = '/jobb/jobb.html';
        } else if (tabType === 'kunskapstester') {
            window.location.href = '/Testerna/testerna.html';
        } else if (tabType === 'studiematerial') {
            window.location.href = '/Studiematerial/studiematerial.html';
        } else if (tabType === 'blanketter') {
            window.location.href = '/Blanketter/blanketter.html';
        } else if (tabType === 'ordbok') {
            window.location.href = '/Ordbok/ordbok.html';
        } else if (tabType === 'skolor') {
            window.location.href = '/Skola/skola.html';
        }
        // 'nyheter' är den aktiva sidan, gör inget
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