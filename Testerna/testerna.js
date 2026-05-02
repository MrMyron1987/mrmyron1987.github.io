// ============================================================
// 1. ÖVERSÄTTNINGAR (Alla tabbar + testkategorier)
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

        catTreeNames: "Namnge träd och buskar",
        catSiteTypes: "Ståndortstyper på mineraljordar",
        catPlantNames: "Namnge indikatorväxter",
        catCoefficient: "Koefficient räkning",
        catRoads: "Vägar",
        catRelascope: "Relaskoptabell",
        catInspection: "Frågor kring granskning",

        descInspection: 'I detta test följer vi <a href="https://www.metsakeskus.fi/sites/default/files/document/tarkastusohje-sv.pdf" target="_blank">Skogscentralens granskningsinstruktioner</a> och ställer frågor kring dem. Testet innehåller bland annat flervalsfrågor om skogsbrukets kvalitetskrav och naturvård. Klicka på knappen nedan för att starta direkt.',
        descCoefficient: "Här testar du dina matematiska kunskaper i koefficientberäkning för provytor med radierna 3,99 och 5,64 meter. Du får räkna ut olika omvandlingstal. Klicka på knappen för att starta testet.",
        descRelascope: "Här kan du testa dina kunskaper i grundyta med hjälp av Tapios relaskoptabell. Tabellen finns tillgänglig direkt på denna sida så att du enkelt kan använda den under testets gång. Klicka på knappen när du är redo.",
        descSiteTypes: "Testa dina kunskaper i att identifiera ståndortstyper och att koppla rätt indikatorväxter till rätt växtplats. Du får se typiska arter för både friska och torra marker och välja rätt marktyp. Klicka på knappen nedan för att börja testet.",
        descTreeNames: "Här kan du testa dina språkliga kunskaper om träd och buskar. Fyra språk – finska, svenska, engelska och latin, blandas för en riktig utmaning. Se hur många du kan namnge korrekt! Tryck på knappen för att börja.",
        descRoads: 'Här testar du dina kunskaper om skogsbilvägar. All information bygger på <a href="https://metsanhoidonsuositukset.fi/sv" target="_blank">Rekommendationer för skogsvård</a>. Du får frågor om vägdimensionering, bärighet och underhåll. Klicka på knappen för att påbörja testet.',
        descPlantNames: "I detta test kombinerar du dina kunskaper på fyra språk för att namnge Finlands olika indikatorväxter inom grupperna kärlväxter, ris, mossor, lavar, svampar och träd. Språken är finska, svenska, engelska och latin. Testa hur många du klarar! Klicka på knappen nedan."
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

        catTreeNames: "Nimeä puut ja pensaat",
        catSiteTypes: "Kivennäismaiden kasvupaikkatyypit",
        catPlantNames: "Nimeä ilmentäjälajit",
        catCoefficient: "Muuntokertoimella",
        catRoads: "Tiet",
        catRelascope: "Relaskooppitaulukko",
        catInspection: "Tarkastusohjekysymykset",

        descInspection: 'Tässä testissä noudatamme <a href="https://www.metsakeskus.fi/sites/default/files/document/tarkastusohje.pdf" target="_blank">Metsäkeskuksen tarkastusohjeita</a> ja esitämme niihin liittyviä kysymyksiä. Testi sisältää monivalintakysymyksiä metsänhoidon laatuvaatimuksista ja luonnonhoidosta. Aloita napsauttamalla alta.',
        descCoefficient: "Tässä testaat matemaattisia taitojasi muuntokertoimen laskennassa 3,99 ja 5,64 metrin koealoilla. Saat laskea erilaisia muuntolukuja. Aloita napsauttamalla alla olevaa painiketta.",
        descRelascope: "Täällä voit testata osaamistasi pohjapinta-alassa käyttäen Tapion relaskooppitaulukkoa. Taulukko on saatavilla suoraan tällä sivulla, jotta voit hyödyntää sitä testin aikana. Napsauta painiketta, kun olet valmis.",
        descSiteTypes: "Testaa taitosi tunnistaa kasvupaikkatyyppejä ja yhdistää oikeat ilmentäjälajit oikeaan kasvupaikkaan. Näet tyypillisiä lajeja tuoreilta ja kuivilta mailta ja valitset oikean maatyypin. Aloita napsauttamalla alta.",
        descTreeNames: "Täällä voit testata kielitaitoasi puiden ja pensaiden nimissä. Neljä kieltä – suomi, ruotsi, englanti ja latina, on sekoitettu todellisen haasteen saavuttamiseksi. Katso kuinka monta osaat nimetä oikein! Aloita painikkeesta.",
        descRoads: 'Testaa taitosi metsäautoteiden suhteen. Kaikki tieto perustuu <a href="https://metsanhoidonsuositukset.fi/fi" target="_blank">Metsänhoidon suosituksiin</a>. Saat kysymyksiä tien mitoituksesta, kantavuudesta ja kunnossapidosta. Aloita painikkeesta.',
        descPlantNames: "Tässä testissä yhdistät taitosi neljällä kielellä nimetäksesi Suomen eri ilmentäjälajeja putkilokasvien, varpujen, sammalten, jäkälien, sienten ja puiden ryhmistä. Kielet ovat suomi, ruotsi, englanti ja latina. Katso kuinka monta osaat! Napsauta alla olevaa painiketta."
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

        catTreeNames: "Name trees and shrubs",
        catSiteTypes: "Site types on mineral soils",
        catPlantNames: "Name indicator plants",
        catCoefficient: "Coefficient calculations",
        catRoads: "Forest roads",
        catRelascope: "Relascope table",
        catInspection: "Inspection questions",

        descInspection: 'This test follows <a href="https://www.metsakeskus.fi/sites/default/files/document/tarkastusohje-sv.pdf" target="_blank">Swedish inspection guidelines</a> and <a href="https://www.metsakeskus.fi/sites/default/files/document/tarkastusohje.pdf" target="_blank">Finnish inspection guidelines</a>. It includes multiple-choice questions on quality requirements and nature conservation. Please note there is no English version. Click the button below to begin.',
        descCoefficient: "Here you can test your mathematical skills with coefficient calculations for sample plots of 3.99 and 5.64 meters. You will compute various conversion factors. Press the button to begin the test.",
        descRelascope: "Here you can test your skills in basal area using Tapio's relascope table. The table is available right here on the page so you can use it during the test. Click the button when you're ready.",
        descSiteTypes: "Test your knowledge of site type identification and matching the correct indicator species to the correct habitat. You'll encounter species typical of mesic and dry sites and pick the right soil type. Click the button below to start.",
        descTreeNames: "Test your linguistic skills with tree and shrub names in four languages – Finnish, Swedish, English, and Latin, all mixed together for a real challenge. See how many you can name correctly! Press the button to get started.",
        descRoads: 'Test your knowledge of forest roads. All information is based on <a href="https://metsanhoidonsuositukset.fi/en" target="_blank">Forest management recommendations</a>. You\'ll answer questions about road dimensions, bearing capacity, and maintenance. Press the button to start.',
        descPlantNames: "In this test, you combine your skills in four languages to name Finland's various indicator plants within the groups vascular plants, dwarf shrubs, mosses, lichens, fungi, and trees. Languages: Finnish, Swedish, English, and Latin. See how many you can manage! Click the button below."
    }
};

// ============================================================
// 2. DATA FÖR TESTKATEGORIER
// ============================================================
const testCards = [
    {
        key: "Inspection",
        nameKey: "catInspection",
        descKey: "descInspection",
        link: "granskning.html"
    },
    {
        key: "Coefficient",
        nameKey: "catCoefficient",
        descKey: "descCoefficient",
        link: "koefficient.html"
    },
    {
        key: "Relascope",
        nameKey: "catRelascope",
        descKey: "descRelascope",
        link: "relaskop.html"
    },
    {
        key: "SiteTypes",
        nameKey: "catSiteTypes",
        descKey: "descSiteTypes",
        link: "standorter.html"
    },
    {
        key: "TreeNames",
        nameKey: "catTreeNames",
        descKey: "descTreeNames",
        link: "tradslag.html"
    },
    {
        key: "Roads",
        nameKey: "catRoads",
        descKey: "descRoads",
        link: "vag.html"
    },
    {
        key: "PlantNames",
        nameKey: "catPlantNames",
        descKey: "descPlantNames",
        link: "vaxternamn.html"
    }
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
    document.title = t.headerTitle + " – " + t.tabKunskapstester;
    document.documentElement.lang = lang;
    langButtons.forEach(btn => {
        const bl = btn.getAttribute('data-lang');
        btn.classList.toggle('active', bl === lang);
    });
    localStorage.setItem('preferredLanguage', lang);
    renderTests();
}

// Hjälpfunktion för att skapa testkort
function createTestCard(card, lang) {
    const t = translations[lang];
    const div = document.createElement('div');
    div.className = 'test-item';

    const desc = document.createElement('p');
    desc.className = 'cat-desc';
    desc.innerHTML = t[card.descKey] || '';
    div.appendChild(desc);

    const btn = document.createElement('button');
    btn.className = 'cat-btn';
    btn.textContent = t[card.nameKey] || card.key;
    btn.addEventListener('click', () => {
        window.location.href = card.link;
    });
    div.appendChild(btn);

    return div;
}

function renderTests() {
    const container = document.getElementById('categoriesList');
    if (!container) return;
    container.innerHTML = '';
    testCards.forEach(card => container.appendChild(createTestCard(card, currentLang)));
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
        } else if (tabType === 'studiematerial') {
            window.location.href = '/Studiematerial/studiematerial.html';
        } else if (tabType === 'blanketter') {
            window.location.href = '/Blanketter/blanketter.html';
        } else if (tabType === 'ordbok') {
            window.location.href = '/Ordbok/ordbok.html';
        }
        // 'kunskapstester' är den aktiva sidan
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