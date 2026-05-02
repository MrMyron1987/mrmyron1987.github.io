// ============================================================
// 1. ÖVERSÄTTNINGAR (Alla tabbar + skolkorten)
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

        schoolsIntro: "På denna sida hittar du alla skolor som erbjuder skogsutbildningar i Finland och Sverige.",

        // Finska skolor
        noviaTitle: "Novia",
        noviaDesc: "Den enda svenskspråkiga yrkeshögskolan i Finland som erbjuder skogsbruksingenjörsutbildning (YH). Kombinerar teori med praktiskt arbete i Åbo.",
        hamkTitle: "HAMK",
        hamkDesc: "Hämeen ammattikorkeakoulu med anor från 1862. Erbjuder skogsbruksingenjör (AMK) samt internationellt Sustainable Forest Management-program på engelska.",
        xamkTitle: "XAMK",
        xamkDesc: "Kaakkois-Suomen ammattikorkeakoulu med fokus på skogsbioekonomi. Erbjuder skogsbruksingenjörsutbildning i Savonlinna.",
        kareliaTitle: "Karelia",
        kareliaDesc: "Yrkeshögskola i Joensuu som erbjuder utbildning inom hållbart skogsbruk med internationellt fokus.",
        lapinamkTitle: "Lapin AMK",
        lapinamkDesc: "Lapplands yrkeshögskola med skogsutbildning anpassad för arktiska förhållanden och nordligt skogsbruk.",
        tuniTitle: "TAMK",
        tuniDesc: "Tampereen ammattikorkeakoulu – en av Finlands största yrkeshögskolor. Erbjuder utbildning inom naturresurser och miljö.",
        amkopinnotTitle: "Ammattikorkeakouluopinnot",
        amkopinnotDesc: "Söktjänst för yrkeshögskolestudier i Finland. Här hittar du aktuell information om när skogsutbildningarna startar.",
        opintopolkuTitle: "Opintopolku",
        opintopolkuDesc: "Finlands officiella utbildningsportal med detaljerad information om skogsbruksutbildningar och ansökningsperioder.",

        // Svenska skolor
        sluTitle: "SLU",
        sluDesc: "Sveriges lantbruksuniversitet erbjuder skoglig utbildning på alla nivåer: Jägmästarprogrammet, Skogsmästarprogrammet och internationellt kandidatprogram i Forest and Landscape.",
        skogstekniskaTitle: "Skogstekniska",
        skogstekniskaDesc: "Erbjuder grundläggande skogsutbildning, skogligt basår och skogsmaskinsutbildningar för yrkesverksamma.",
        gammelkroppaTitle: "Gammelkroppa",
        gammelkroppaDesc: "Sveriges äldsta privata skogsskola, grundad 1860. Erbjuder en tvåårig skogsteknikerutbildning i Värmland.",
        ltuTitle: "LTU",
        ltuDesc: "Luleå tekniska universitet erbjuder utbildning inom träteknik och bedriver forskning inom autonom skogsteknik.",
        vretaTitle: "NBG Vreta",
        vretaDesc: "Naturbruksgymnasium i Östergötland med inriktning skog som kombinerar teori och praktik inom modernt skogsbruk.",
        vgregionTitle: "Naturbruk VG",
        vgregionDesc: "Västra Götalandsregionens naturbruksskolor erbjuder skogsutbildning på gymnasie- och vuxennivå vid flera skolor.",
        ttuhammaroTitle: "TTU Hammarö",
        ttuhammaroDesc: "Träteknikerutbildning med fokus på hela produktionskedjan från stock till färdig produkt.",
        myhTitle: "MYH",
        myhDesc: "Myndigheten för yrkeshögskolan – här hittar du yrkeshögskoleutbildningar inom skog i Sverige.",
        skogenTitle: "Skogen.se",
        skogenDesc: "Samlad information om utbildningar inom skog och skogsindustri i Sverige."
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

        schoolsIntro: "Tältä sivulta löydät kaikki metsäalan koulutusta tarjoavat oppilaitokset Suomessa ja Ruotsissa.",

        noviaTitle: "Novia",
        noviaDesc: "Ainoa ruotsinkielinen ammattikorkeakoulu Suomessa, joka tarjoaa metsätalousinsinöörin (AMK) koulutusta. Yhdistää teorian ja käytännön työelämän Turussa.",
        hamkTitle: "HAMK",
        hamkDesc: "Hämeen ammattikorkeakoulu, jolla on juuret vuodessa 1862. Tarjoaa metsätalousinsinööri (AMK) -koulutusta ja kansainvälisen Sustainable Forest Management -ohjelman englanniksi.",
        xamkTitle: "XAMK",
        xamkDesc: "Kaakkois-Suomen ammattikorkeakoulu, joka profiloituu metsäbiotalouteen. Tarjoaa metsätalousinsinöörikoulutusta Savonlinnassa.",
        kareliaTitle: "Karelia",
        kareliaDesc: "Joensuun ammattikorkeakoulu, joka tarjoaa kestävän metsätalouden koulutusta kansainvälisellä otteella.",
        lapinamkTitle: "Lapin AMK",
        lapinamkDesc: "Lapin ammattikorkeakoulu tarjoaa metsätalouden koulutusta arktisiin olosuhteisiin ja pohjoiseen metsätalouteen.",
        tuniTitle: "TAMK",
        tuniDesc: "Tampereen ammattikorkeakoulu – yksi Suomen suurimmista AMK:sta. Tarjoaa luonnonvara- ja ympäristöalan koulutusta.",
        amkopinnotTitle: "Ammattikorkeakouluopinnot",
        amkopinnotDesc: "Hakupalvelu ammattikorkeakouluopintoihin Suomessa. Täältä löydät ajankohtaista tietoa metsäalan koulutusten alkamisesta.",
        opintopolkuTitle: "Opintopolku",
        opintopolkuDesc: "Suomen virallinen koulutustietoportaali, josta löytyy tarkempaa tietoa metsätalouden koulutuksista ja hakuaikoista.",

        sluTitle: "SLU",
        sluDesc: "Ruotsin maatalousyliopisto tarjoaa metsäalan koulutusta kaikilla tasoilla: Jägmästar-, Skogsmästar- ja kansainvälinen Forest and Landscape -kandidaattiohjelma.",
        skogstekniskaTitle: "Skogstekniska",
        skogstekniskaDesc: "Tarjoaa metsäalan peruskoulutusta, metsäalan perusvuoden ja metsäkonekoulutuksia ammattilaisille.",
        gammelkroppaTitle: "Gammelkroppa",
        gammelkroppaDesc: "Ruotsin vanhin yksityinen metsäkoulu, perustettu 1860. Tarjoaa kaksivuotista metsäteknikon koulutusta Värmlannissa.",
        ltuTitle: "LTU",
        ltuDesc: "Luulajan teknillinen yliopisto tarjoaa puutekniikan koulutusta ja tekee tutkimusta autonomisessa metsäteknologiassa.",
        vretaTitle: "NBG Vreta",
        vretaDesc: "Luonnonvara-alan lukio Itä-Götanmaalla, jossa on metsälinja, joka yhdistää teorian ja käytännön nykyaikaisessa metsätaloudessa.",
        vgregionTitle: "Naturbruk VG",
        vgregionDesc: "Länsi-Götanmaan luonnonvara-alan koulut tarjoavat metsäkoulutusta lukio- ja aikuistasolla useissa kouluissa.",
        ttuhammaroTitle: "TTU Hammarö",
        ttuhammaroDesc: "Puutekniikkakoulutus, joka keskittyy koko tuotantoketjuun tukista valmiiseen tuotteeseen.",
        myhTitle: "MYH",
        myhDesc: "Ruotsin ammattikorkeakouluviranomainen – täältä löydät metsäalan ammattikorkeakoulutuksia Ruotsissa.",
        skogenTitle: "Skogen.se",
        skogenDesc: "Kattavaa tietoa metsä- ja metsäteollisuusalan koulutuksista Ruotsissa."
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

        schoolsIntro: "On this page you will find all schools offering forestry education in Finland and Sweden.",

        noviaTitle: "Novia",
        noviaDesc: "The only Swedish-speaking university of applied sciences in Finland offering a forestry engineer degree. Combines theory with practical work in Turku.",
        hamkTitle: "HAMK",
        hamkDesc: "Häme University of Applied Sciences with roots dating back to 1862. Offers a forestry engineer degree and an international Sustainable Forest Management program in English.",
        xamkTitle: "XAMK",
        xamkDesc: "South-Eastern Finland University of Applied Sciences with a focus on forest bioeconomy. Offers forestry education in Savonlinna.",
        kareliaTitle: "Karelia",
        kareliaDesc: "University of Applied Sciences in Joensuu offering sustainable forestry education with an international focus.",
        lapinamkTitle: "Lapin AMK",
        lapinamkDesc: "Lapland University of Applied Sciences offers forestry education adapted to Arctic conditions and northern forestry.",
        tuniTitle: "TAMK",
        tuniDesc: "Tampere University of Applied Sciences – one of Finland's largest UAS. Offers education in natural resources and environment.",
        amkopinnotTitle: "Ammattikorkeakouluopinnot",
        amkopinnotDesc: "Search service for university of applied sciences studies in Finland. Find up-to-date information on when forestry programs start.",
        opintopolkuTitle: "Opintopolku",
        opintopolkuDesc: "Finland's official education portal with detailed information on forestry education and application periods.",

        sluTitle: "SLU",
        sluDesc: "Swedish University of Agricultural Sciences offers forestry education at all levels, including the Jägmästare and Skogsmästare programs and an international Bachelor's in Forest and Landscape.",
        skogstekniskaTitle: "Skogstekniska",
        skogstekniskaDesc: "Offers basic forestry training, a forestry foundation year and forest machine training for professionals.",
        gammelkroppaTitle: "Gammelkroppa",
        gammelkroppaDesc: "Sweden's oldest private forestry school, founded in 1860. Offers a two-year forestry technician program in Värmland.",
        ltuTitle: "LTU",
        ltuDesc: "Luleå University of Technology offers education in wood technology and conducts research in autonomous forest technology.",
        vretaTitle: "NBG Vreta",
        vretaDesc: "Natural resource gymnasium in Östergötland with a forestry track combining theory and practice in modern forestry.",
        vgregionTitle: "Naturbruk VG",
        vgregionDesc: "Västra Götaland Region's natural resource schools offer forestry education at upper secondary and adult level at several schools.",
        ttuhammaroTitle: "TTU Hammarö",
        ttuhammaroDesc: "Wood technology training focusing on the entire production chain from log to finished product.",
        myhTitle: "MYH",
        myhDesc: "Swedish Agency for Higher Vocational Education – find higher vocational education in forestry in Sweden here.",
        skogenTitle: "Skogen.se",
        skogenDesc: "Comprehensive information about education in forestry and the forest industry in Sweden."
    }
};

// ============================================================
// 2. DATA FÖR SKOLKORTEN
// ============================================================
const schoolCards = [
    // Finska skolor
    { key: "novia", link: "https://www.novia.fi/" },
    { key: "hamk", link: "https://www.hamk.fi/" },
    { key: "xamk", link: "https://www.xamk.fi/" },
    { key: "karelia", link: "https://www.karelia.fi/" },
    { key: "lapinamk", link: "https://lapinamk.fi/" },
    { key: "tuni", link: "https://www.tuni.fi/" },
    // Info-länkar Finland
    { key: "amkopinnot", link: "https://www.ammattikorkeakouluopinnot.fi/koulutushaku/ammattikorkeakoulut-metsatalous/a41-c3902" },
    { key: "opintopolku", link: "https://opintopolku.fi/konfo/fi/koulutus/1.2.246.562.13.00000000000000000186" },
    // Svenska skolor
    { key: "slu", link: "https://www.slu.se/" },
    { key: "skogstekniska", link: "https://skogstekniska.se/" },
    { key: "gammelkroppa", link: "https://www.gammelkroppa.se/" },
    { key: "ltu", link: "https://www.ltu.se/" },
    { key: "vreta", link: "https://www.nbg.nu/vreta/" },
    { key: "vgregion", link: "https://www.vgregion.se/f/naturbruk/" },
    { key: "ttuhammaro", link: "https://ttuhammaro.se/" },
    // Info-länkar Sverige
    { key: "myh", link: "https://www.myh.se/" },
    { key: "skogen", link: "https://www.skogen.se/skogssverige/forsk-utb/utbildningar-inom-skog-skogsindustri/" }
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
    document.title = t.headerTitle + " – " + t.tabSchools;
    document.documentElement.lang = lang;
    langButtons.forEach(btn => {
        const bl = btn.getAttribute('data-lang');
        btn.classList.toggle('active', bl === lang);
    });
    localStorage.setItem('preferredLanguage', lang);
    renderSchools();
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
    return div;
}

function renderSchools() {
    const container = document.getElementById('schoolsContainer');
    if (!container) return;
    container.innerHTML = '';
    schoolCards.forEach(card => container.appendChild(createCard(card, currentLang)));
}

// Fliknavigering – till andra sidor
tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const tabType = btn.getAttribute('data-tab');
        if (tabType === 'start') {
            window.location.href = '/Startsidan/startsida.html';
        } else if (tabType === 'nyheter') {
            window.location.href = '/Organisation/organisation.html';
        } else if (tabType === 'kunskapstester') {
            window.location.href = '/Testerna/testerna.html';
        } else if (tabType === 'studiematerial') {
            window.location.href = '/Studiematerial/studiematerial.html';
        } else if (tabType === 'jobb') {
            window.location.href = '/jobb/jobb.html';
        } else if (tabType === 'blanketter') {
            window.location.href = '/Blanketter/blanketter.html';
        } else if (tabType === 'ordbok') {
            window.location.href = '/Ordbok/ordbok.html';
        }
        // 'skolor' är den aktiva sidan
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