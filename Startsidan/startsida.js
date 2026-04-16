// ============================================================
// 1. SPRÅKHANTERING – ÖVERSÄTTNINGAR
// ============================================================
const translations = {
    sv: {
        welcomeTitle: "Hej och välkommen!",
        welcomeText: "Detta är en plats för skogsstuderande, skogsexperter och skogsägare att testa sina kunskaper inom skogsbruk. Spelet befinner sig i en betafas och kan därför innehålla felaktigheter eller brister. Om du upptäcker något som inte stämmer, får du gärna kontakta mig så att jag kan rätta till det. Observera att spelet utgår från finska standarder. Om du gör testet från ett annat land kan vissa svar därför skilja sig från vad som gäller där.",
        goToTests: "🌿 Gå till testerna",
        pageTitle: "Skogsbrukstest – Välkommen"
    },
    fi: {
        welcomeTitle: "Hei ja tervetuloa!",
        welcomeText: "Tämä on paikka metsäopiskelijoille, metsäasiantuntijoille ja metsänomistajille testata metsänhoidon taitojaan. Peli on beta-vaiheessa ja saattaa sisältää virheitä tai puutteita. Jos huomaat jotain virheellistä, ota minuun yhteyttä, jotta voin korjata asian. Huomioithan, että peli perustuu suomalaisiin standardeihin. Jos teet testin toisesta maasta, jotkin vastaukset saattavat poiketa siitä, mihin olet tottunut.",
        goToTests: "🌿 Siirry testeihin",
        pageTitle: "Metsätietotesti – Tervetuloa"
    },
    en: {
        welcomeTitle: "Hello and welcome!",
        welcomeText: "This is a place for forestry students, experts, and forest owners to test their knowledge in forestry. The game is currently in beta and may contain errors or inaccuracies. If you notice anything that seems incorrect, please feel free to contact me so I can fix it. Please note that the game is based on Finnish standards. If you take the test from another country, some answers may differ from what applies there.",
        goToTests: "🌿 Go to tests",
        pageTitle: "Forestry Quiz – Welcome"
    }
};

let currentLang = 'sv';  // standard svenska

// DOM-element
const welcomeTitleEl = document.getElementById('welcomeTitle');
const welcomeTextEl = document.getElementById('welcomeText');
const goToTestsBtn = document.getElementById('goToTestsBtn');
const langButtons = document.querySelectorAll('.lang-btn');

// ============================================================
// 2. UPPDATERA SPRÅK I GRÄNSSNITTET
// ============================================================
function updateLanguage(lang) {
    const t = translations[lang];
    if (!t) return;
    
    welcomeTitleEl.textContent = t.welcomeTitle;
    welcomeTextEl.textContent = t.welcomeText;
    goToTestsBtn.textContent = t.goToTests;
    document.title = t.pageTitle;
    document.documentElement.lang = lang;
    
    // Spara val i localStorage för att använda senare i andra sidor
    localStorage.setItem('preferredLanguage', lang);
    
    // Uppdatera aktiv knapp
    langButtons.forEach(btn => {
        const btnLang = btn.getAttribute('data-lang');
        if (btnLang === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// ============================================================
// 3. HÄMTA SPARAT SPRÅK (om det finns) VID START
// ============================================================
function initializeLanguage() {
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && translations[savedLang]) {
        currentLang = savedLang;
    } else {
        currentLang = 'sv';
    }
    updateLanguage(currentLang);
}

// ============================================================
// 4. EVENT LISTENERS
// ============================================================
// Språkknappar
langButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const lang = e.currentTarget.getAttribute('data-lang');
        if (lang) {
            currentLang = lang;
            updateLanguage(lang);
        }
    });
});

// "Gå till testerna" – för tillfället placeholder.
// Här kan du senare länka till nästa sida, t.ex. 'tester.html'
goToTestsBtn.addEventListener('click', () => {
    // Tillfällig logik – byt ut mot window.location.href = 'tester.html';
    window.location.href = '../Testerna/testerna.html';
});

// ============================================================
// 5. INIT
// ============================================================
initializeLanguage();