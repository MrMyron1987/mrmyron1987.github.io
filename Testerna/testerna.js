// ============================================================
// 1. ÖVERSÄTTNINGAR – KNAPPTEXTER & BESKRIVNINGAR
// ============================================================
const categoryTranslations = {
    "Trädslag och buskars namn": {
        sv: "Namnge träd och buskar",
        fi: "Nimeä puut ja pensaat",
        en: "Name trees and shrubs"
    },
    "Ståndortstyper på mineraljorder": {
        sv: "Ståndortstyper på mineraljordar",
        fi: "Kivennäismaiden kasvupaikkatyypit",
        en: "Site types on mineral soils"
    },
    "Växter namn": {
        sv: "Namnge indikatorväxter",
        fi: "Nimeä ilmentäjälajit",
        en: "Name indicator plants"
    },
    "Koefficient räkning": {
        sv: "Koefficient räkning",
        fi: "Muuntokertoimella",
        en: "Coefficient calculations"
    },
    "Vägar": {
        sv: "Vägar",
        fi: "Tiet",
        en: "Forest roads"
    },
    "Relaskoptabell": {
        sv: "Relaskoptabell",
        fi: "Relaskooppitaulukko",
        en: "Relascope table"
    },
    "Granskningsinstruktioner frågor": {
        sv: "Frågor kring granskning",
        fi: "Tarkastusohjekysymykset",
        en: "Inspection questions"
    }
};

// Förlängda beskrivningar
const categoryDescriptions = {
    "Granskningsinstruktioner frågor": {
        sv: 'I detta test följer vi <a href="https://www.metsakeskus.fi/sites/default/files/document/tarkastusohje-sv.pdf" target="_blank">Skogscentralens granskningsinstruktioner</a> och ställer frågor kring dem. Testet innehåller bland annat flervalsfrågor om skogsbrukets kvalitetskrav, naturvård och planering. Klicka på knappen nedan för att starta direkt.',
        fi: 'Tässä testissä noudatamme <a href="https://www.metsakeskus.fi/sites/default/files/document/tarkastusohje.pdf" target="_blank">Metsäkeskuksen tarkastusohjeita</a> ja esitämme niihin liittyviä kysymyksiä. Testi sisältää monivalintakysymyksiä metsänhoidon laatuvaatimuksista, luonnonhoidosta ja suunnittelusta. Aloita napsauttamalla alta.',
        en: 'This test follows <a href="https://www.metsakeskus.fi/sites/default/files/document/tarkastusohje-sv.pdf" target="_blank">Swedish inspection guidelines</a> and <a href="https://www.metsakeskus.fi/sites/default/files/document/tarkastusohje.pdf" target="_blank">Finnish inspection guidelines</a>. It includes multiple-choice questions on quality requirements, nature conservation, and planning. Please note there is no English version. Click the button below to begin.'
    },
    "Koefficient räkning": {
        sv: "Här testar du dina matematiska kunskaper i koefficientberäkning för provytor med radierna 3,99 och 5,64 meter. Du får räkna ut olika omvandlingstal och tolka resultaten korrekt. Klicka på knappen för att starta testet.",
        fi: "Tässä testaat matemaattisia taitojasi muuntokertoimen laskennassa 3,99 ja 5,64 metrin koealoilla. Saat laskea erilaisia muuntolukuja ja tulkita tulokset oikein. Aloita napsauttamalla alla olevaa painiketta.",
        en: "Here you can test your mathematical skills with coefficient calculations for sample plots of 3.99 and 5.64 meters. You will compute various conversion factors and interpret the outcomes. Press the button to begin the test."
    },
    "Relaskoptabell": {
        sv: "Här kan du testa dina kunskaper i grundyta med hjälp av Tapios relaskoptabell. Tabellen finns tillgänglig direkt på denna sida så att du enkelt kan använda den under testets gång. Klicka på knappen när du är redo.",
        fi: "Täällä voit testata osaamistasi pohjapinta-alassa käyttäen Tapion relaskooppitaulukkoa. Taulukko on saatavilla suoraan tällä sivulla, jotta voit hyödyntää sitä testin aikana. Napsauta painiketta, kun olet valmis.",
        en: "Here you can test your skills in basal area using Tapio's relascope table. The table is available right here on the page so you can use it during the test. Click the button when you're ready."
    },
    "Ståndortstyper på mineraljorder": {
        sv: "Testa dina kunskaper i att identifiera ståndortstyper och att koppla rätt indikatorväxter till rätt växtplats. Du får se typiska arter för både friska och torra marker och välja rätt marktyp. Klicka på knappen nedan för att börja testet.",
        fi: "Testaa taitosi tunnistaa kasvupaikkatyyppejä ja yhdistää oikeat ilmentäjälajit oikeaan kasvupaikkaan. Näet tyypillisiä lajeja tuoreilta ja kuivilta mailta ja valitset oikean maatyypin. Aloita napsauttamalla alta.",
        en: "Test your knowledge of site type identification and matching the correct indicator species to the correct habitat. You'll encounter species typical of mesic and dry sites and pick the right soil type. Click the button below to start."
    },
    "Trädslag och buskars namn": {
        sv: "Här kan du testa dina språkliga kunskaper om träd och buskar. Fyra språk – finska, svenska, engelska och latin – blandas för en riktig utmaning. Se hur många du kan namnge korrekt! Tryck på knappen för att börja.",
        fi: "Täällä voit testata kielitaitoasi puiden ja pensaiden nimissä. Neljä kieltä – suomi, ruotsi, englanti ja latina – on sekoitettu todellisen haasteen saavuttamiseksi. Katso kuinka monta osaat nimetä oikein! Aloita painikkeesta.",
        en: "Test your linguistic skills with tree and shrub names in four languages – Finnish, Swedish, English, and Latin – all mixed together for a real challenge. See how many you can name correctly! Press the button to get started."
    },
    "Vägar": {
        sv: 'Här testar du dina kunskaper om skogsbilvägar. All information bygger på <a href="https://metsanhoidonsuositukset.fi/sv" target="_blank">Rekommendationer för skogsvård</a>. Du får frågor om vägdimensionering, bärighet och underhåll. Klicka på knappen för att påbörja testet.',
        fi: 'Testaa taitosi metsäautoteiden suhteen. Kaikki tieto perustuu <a href="https://metsanhoidonsuositukset.fi/fi" target="_blank">Metsänhoidon suosituksiin</a>. Saat kysymyksiä tien mitoituksesta, kantavuudesta ja kunnossapidosta. Aloita painikkeesta.',
        en: 'Test your knowledge of forest roads. All information is based on <a href="https://metsanhoidonsuositukset.fi/en" target="_blank">Forest management recommendations</a>. You\'ll answer questions about road dimensions, bearing capacity, and maintenance. Press the button to start.'
    },
    "Växter namn": {
        sv: "I detta test kombinerar du dina kunskaper på fyra språk för att namnge Finlands olika indikatorväxter inom grupperna kärlväxter, ris, mossor, lavar, svampar och träd. Språken är finska, svenska, engelska och latin. Testa hur många du klarar! Klicka på knappen nedan.",
        fi: "Tässä testissä yhdistät taitosi neljällä kielellä nimetäksesi Suomen eri ilmentäjälajeja putkilokasvien, varpujen, sammalten, jäkälien, sienten ja puiden ryhmistä. Kielet ovat suomi, ruotsi, englanti ja latina. Katso kuinka monta osaat! Napsauta alla olevaa painiketta.",
        en: "In this test, you combine your skills in four languages to name Finland's various indicator plants within the groups vascular plants, dwarf shrubs, mosses, lichens, fungi, and trees. Languages: Finnish, Swedish, English, and Latin. See how many you can manage! Click the button below."
    }
};

// Lista över aktiva kategorier (fast ordning)
const allCategoryKeys = [
    "Trädslag och buskars namn",
    "Ståndortstyper på mineraljorder",
    "Växter namn",
    "Koefficient räkning",
    "Vägar",
    "Relaskoptabell",
    "Granskningsinstruktioner frågor"
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

function getDescription(key, lang) {
    return categoryDescriptions[key]?.[lang] || "";
}

// ============================================================
// 3. RENDERA LISTA (beskrivning först, knapp sist)
// ============================================================
function renderCategoryList() {
    const lang = getCurrentLanguage();
    const list = document.getElementById('categoriesList');
    
    // Sortera alfabetiskt efter visningsnamnet på aktuellt språk
    const items = allCategoryKeys.map(key => ({
        key: key,
        display: translateCategory(key, lang)
    }));
    items.sort((a, b) => a.display.localeCompare(b.display, lang));

    list.innerHTML = '';
    
    items.forEach(item => {
        const descText = getDescription(item.key, lang);

        const card = document.createElement('div');
        card.className = 'test-item';

        // 1. Beskrivning först
        if (descText) {
            const desc = document.createElement('p');
            desc.className = 'cat-desc';
            desc.innerHTML = descText;
            card.appendChild(desc);
        }

        // 2. Knapp sist (längst ner)
        const btn = document.createElement('button');
        btn.className = 'cat-btn';
        btn.textContent = item.display;
        btn.addEventListener('click', () => onCategorySelected(item.key));
        card.appendChild(btn);

        list.appendChild(card);
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
    } else if (categoryKey === 'Granskningsinstruktioner frågor') {
        window.location.href = '../Granskningsinstruktioner/granskning.html';
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
renderCategoryList();