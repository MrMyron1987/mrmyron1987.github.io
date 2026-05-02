// ============================================================
// 1. ÖVERSÄTTNINGAR (Alla tabbar + jobbkorten)
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

        metsalehtiJobTitle: "Metsälehti – Työpaikat",
        metsalehtiJobDesc: "Metsälehtis jobbportal för skogsbranschen i Finland. Här publiceras lediga tjänster inom hela skogssektorn.",
        metsalehtiJobLangNote: "Webbplatsen är endast på finska.",
        skogligaJobbTitle: "Skogliga jobb",
        skogligaJobbDesc: "Sveriges samlingsplats för lediga jobb inom skogsbranschen. Här hittar du allt från skogsmaskinförare till skogsinspektorer och specialister.",
        tabshollandTitle: "Tabsholland",
        tabshollandDesc: "Rekryteringssida för träindustrin i Nederländerna. Här publiceras lediga jobb inom träförädling och produktion.",

        billerudTitle: "Billerud",
        billerudDesc: "Världsledande inom förnybara pappers- och förpackningsmaterial. Verksamt i Sverige.",
        biometriaTitle: "Biometria",
        biometriaDesc: "Kvalitetssäkrar virkesmätning och skoglig logistik. Erbjuder tjänster för digitalisering och automatisering av virkesflödet. Verksamt i Sverige.",
        holmenTitle: "Holmen",
        holmenDesc: "Skogsindustrikoncern med verksamhet inom skogsbruk, kartong, papper och trävaror. Verksamt i Sverige.",
        koskisenTitle: "Koskisen",
        koskisenDesc: "Internationellt träförädlingsföretag med över hundra års erfarenhet. Tillverkar sågade trävaror, plywood och spånskivor. Verksamt i Finland.",
        metsahallitusTitle: "Metsähallitus",
        metsahallitusDesc: "Finlands statliga skogsförvaltning. Förvaltar och skyddar naturresurser samt erbjuder arbetstillfällen inom skogsbruk, naturvård och friluftsliv.",
        metsaGroupTitle: "Metsä Group",
        metsaGroupDesc: "Finsk skogsindustrikoncern med produktion av tissue, kartong, massa och träprodukter. Har verksamhet i både Finland och Sverige.",
        mhyTitle: "Metsänhoitoyhdistys",
        mhyDesc: "Skogsvårdsföreningarnas kedja med ca 50 föreningar och över 1000 skogsproffs runtom i Finland. Erbjuder varierande arbetsuppgifter inom skogsskötsel och rådgivning. Verksamt i Finland.",
        norraSkogTitle: "Norra Skog",
        norraSkogDesc: "Medlemsägd skogsägarförening i norra Sverige med ca 600 anställda. Verkar för skogsägarnas bästa och erbjuder varierande skogliga roller.",
        scaTitle: "SCA",
        scaDesc: "Svenskt skogsbolag med produktion av massa, trävaror, förnybar energi och förpackningspapper. Har över 250 olika yrkesroller. Verksamt i Sverige.",
        storaEnsoTitle: "Stora Enso",
        storaEnsoDesc: "En av världens äldsta och ledande aktörer inom förnybara material. Tillverkar förpackningar, biomaterial, träprodukter och papper. Verksamt i både Finland och Sverige.",
        sveaskogTitle: "Sveaskog",
        sveaskogDesc: "Sveriges statliga skogsbolag. Förvaltar och brukar skogsmark, levererar timmer, massaved och biobränsle. Rymmer ca 100 olika roller. Verksamt i Sverige.",
        upmTitle: "UPM",
        upmDesc: "Finländsk skogsindustrikoncern med produktion av papper, massa, plywood, energi och biomaterial. Har verksamhet i både Finland och Sverige.",
        versowoodTitle: "Versowood",
        versowoodDesc: "Finlands största privatägda träförädlingskoncern med ca 900 anställda på 13 orter. Tillverkar sågade trävaror och limträ. Verksamt i Finland.",

        sodraTitle: "Södra",
        sodraDesc: "Sveriges största skogsägarförening med över 50 000 medlemmar. Erbjuder karriärmöjligheter inom skogsbruk, industri och innovation.",
        sodraskogsTitle: "Södra skogsreviret",
        sodraskogsDesc: "Lokalt skogsrevir inom Södra med fokus på skoglig rådgivning och virkesanskaffning. Sök praktik eller jobb här.",
        osterbottenTitle: "Österbotten skogsrevir",
        osterbottenDesc: "Regionalt skogsrevir i Österbotten, Finland. Ansvarar för skoglig rådgivning och planering. Lediga tjänster via Skogscentralen.",
        skogssallskapetTitle: "Skogssällskapet",
        skogssallskapetDesc: "Finlandssvensk skogsorganisation som erbjuder tjänster inom skogsförvaltning, rådgivning och fastighetsutveckling.",
        mellanskogTitle: "Mellanskog",
        mellanskogDesc: "Skogsägarförening i Mellansverige. Erbjuder tjänster inom virkesförsäljning, skogsvård och uthyrning av skogsentreprenader.",
        svenskakyrkanTitle: "Svenska kyrkan",
        svenskakyrkanDesc: "Svenska kyrkan är en av Sveriges största skogsägare. Skogsförvaltningen söker regelbundet skogliga tjänstemän och praktikanter."
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

        metsalehtiJobTitle: "Metsälehti – Työpaikat",
        metsalehtiJobDesc: "Metsälehden työpaikkaportaali metsäalalle Suomessa. Täällä julkaistaan avoimia työpaikkoja koko metsäsektorilta.",
        metsalehtiJobLangNote: "",
        skogligaJobbTitle: "Skogliga jobb",
        skogligaJobbDesc: "Ruotsin metsäalan työpaikkojen kohtaamispaikka. Täältä löydät kaiken metsäkoneenkuljettajista metsätarkastajiin ja asiantuntijoihin.",
        tabshollandTitle: "Tabsholland",
        tabshollandDesc: "Alankomaiden puuteollisuuden rekrytointisivusto. Täältä löytyy avoimia työpaikkoja puujalostuksen ja tuotannon alalla.",

        billerudTitle: "Billerud",
        billerudDesc: "Maailman johtava uusiutuvien paperi- ja pakkausmateriaalien valmistaja. Toimii Ruotsissa.",
        biometriaTitle: "Biometria",
        biometriaDesc: "Varmistaa puunmittauksen ja metsälogistiikan laadun. Tarjoaa palveluita puuvirran digitalisointiin ja automatisointiin. Toimii Ruotsissa.",
        holmenTitle: "Holmen",
        holmenDesc: "Metsäteollisuuskonserni, joka toimii metsätalouden, kartongin, paperin ja puutuotteiden alalla. Toimii Ruotsissa.",
        koskisenTitle: "Koskisen",
        koskisenDesc: "Kansainvälinen puunjalostusyritys, jolla on yli sadan vuoden kokemus. Valmistaa sahatavaraa, vaneria ja lastulevyä. Toimii Suomessa.",
        metsahallitusTitle: "Metsähallitus",
        metsahallitusDesc: "Suomen valtion metsähallinto. Hoitaa ja suojelee luonnonvaroja sekä tarjoaa työpaikkoja metsätalouden, luonnonsuojelun ja ulkoilun parissa.",
        metsaGroupTitle: "Metsä Group",
        metsaGroupDesc: "Suomalainen metsäteollisuuskonserni, joka tuottaa tissue-paperia, kartonkia, massaa ja puutuotteita. Toimii sekä Suomessa että Ruotsissa.",
        mhyTitle: "Metsänhoitoyhdistys",
        mhyDesc: "Metsänhoitoyhdistysten ketju, johon kuuluu noin 50 yhdistystä ja yli 1000 metsäammattilaista ympäri Suomea. Tarjoaa monipuolisia työtehtäviä metsänhoidon ja neuvonnan parissa. Toimii Suomessa.",
        norraSkogTitle: "Norra Skog",
        norraSkogDesc: "Jäsenten omistama metsänomistajayhdistys Pohjois-Ruotsissa, jolla on noin 600 työntekijää. Toimii metsänomistajien parhaaksi ja tarjoaa monipuolisia metsäalan rooleja.",
        scaTitle: "SCA",
        scaDesc: "Ruotsalainen metsäyhtiö, joka tuottaa massaa, puutuotteita, uusiutuvaa energiaa ja pakkauspaperia. Tarjoaa yli 250 erilaista ammattiroolia. Toimii Ruotsissa.",
        storaEnsoTitle: "Stora Enso",
        storaEnsoDesc: "Yksi maailman vanhimmista ja johtavista uusiutuvien materiaalien toimijoista. Valmistaa pakkauksia, biomateriaaleja, puutuotteita ja paperia. Toimii sekä Suomessa että Ruotsissa.",
        sveaskogTitle: "Sveaskog",
        sveaskogDesc: "Ruotsin valtion metsäyhtiö. Hoitaa ja käyttää metsämaata, toimittaa puutavaraa, kuitupuuta ja biopolttoainetta. Tarjoaa noin 100 erilaista roolia. Toimii Ruotsissa.",
        upmTitle: "UPM",
        upmDesc: "Suomalainen metsäteollisuuskonserni, joka tuottaa paperia, massaa, vaneria, energiaa ja biomateriaaleja. Toimii sekä Suomessa että Ruotsissa.",
        versowoodTitle: "Versowood",
        versowoodDesc: "Suomen suurin yksityinen puunjalostuskonserni, jolla on noin 900 työntekijää 13 paikkakunnalla. Valmistaa sahatavaraa ja liimapuuta. Toimii Suomessa.",

        sodraTitle: "Södra",
        sodraDesc: "Ruotsin suurin metsänomistajien osuuskunta, jossa on yli 50 000 jäsentä. Tarjoaa uramahdollisuuksia metsätaloudessa, teollisuudessa ja innovaatioissa.",
        sodraskogsTitle: "Södra skogsreviret",
        sodraskogsDesc: "Paikallinen metsäpiiri Södran sisällä, joka keskittyy metsäneuvontaan ja puunhankintaan. Hae harjoittelupaikkaa tai työtä täältä.",
        osterbottenTitle: "Pohjanmaan metsäpiiri",
        osterbottenDesc: "Alueellinen metsäpiiri Pohjanmaalla, Suomi. Vastaa metsäneuvonnasta ja suunnittelusta. Avoimet työpaikat Metsäkeskuksen kautta.",
        skogssallskapetTitle: "Metsäseura",
        skogssallskapetDesc: "Suomenruotsalainen metsäorganisaatio, joka tarjoaa palveluita metsänhoidossa, neuvonnassa ja kiinteistökehityksessä.",
        mellanskogTitle: "Mellanskog",
        mellanskogDesc: "Metsänomistajayhdistys Keski-Ruotsissa. Tarjoaa palveluita puun myynnissä, metsänhoidossa ja metsäkoneyrittäjyydessä.",
        svenskakyrkanTitle: "Ruotsin kirkko",
        svenskakyrkanDesc: "Ruotsin kirkko on yksi Ruotsin suurimmista metsänomistajista. Metsäosasto etsii säännöllisesti metsäalan ammattilaisia ja harjoittelijoita."
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

        metsalehtiJobTitle: "Metsälehti – Työpaikat",
        metsalehtiJobDesc: "Metsälehti's job portal for the forestry sector in Finland. Open positions across the entire forest sector are published here.",
        metsalehtiJobLangNote: "The website is in Finnish only.",
        skogligaJobbTitle: "Skogliga jobb",
        skogligaJobbDesc: "Sweden's hub for forestry jobs. Here you'll find everything from forest machine operators to forest inspectors and specialists.",
        tabshollandTitle: "Tabsholland",
        tabshollandDesc: "Recruitment site for the wood industry in the Netherlands. Here you can find job openings in wood processing and production.",

        billerudTitle: "Billerud",
        billerudDesc: "World-leading provider of renewable paper and packaging materials. Operates in Sweden.",
        biometriaTitle: "Biometria",
        biometriaDesc: "Quality assures timber measurement and forest logistics. Offers services for digitalising and automating the wood flow. Operates in Sweden.",
        holmenTitle: "Holmen",
        holmenDesc: "Forest industry group with operations in forestry, cardboard, paper and wood products. Operates in Sweden.",
        koskisenTitle: "Koskisen",
        koskisenDesc: "International wood processing company with over a hundred years of experience. Manufactures sawn timber, plywood and chipboard. Operates in Finland.",
        metsahallitusTitle: "Metsähallitus",
        metsahallitusDesc: "Finland's state forest administration. Manages and protects natural resources and offers employment in forestry, nature conservation and outdoor recreation. Operates in Finland.",
        metsaGroupTitle: "Metsä Group",
        metsaGroupDesc: "Finnish forest industry group producing tissue, cardboard, pulp and wood products. Operates in both Finland and Sweden.",
        mhyTitle: "Metsänhoitoyhdistys",
        mhyDesc: "A chain of forest management associations with about 50 associations and over 1,000 forest professionals across Finland. Offers diverse tasks in forest management and advisory services. Operates in Finland.",
        norraSkogTitle: "Norra Skog",
        norraSkogDesc: "Member-owned forest owners' association in northern Sweden with about 600 employees. Works for the best interests of forest owners and offers varied forestry roles.",
        scaTitle: "SCA",
        scaDesc: "Swedish forest company producing pulp, wood products, renewable energy and packaging paper. Offers over 250 different professional roles. Operates in Sweden.",
        storaEnsoTitle: "Stora Enso",
        storaEnsoDesc: "One of the world's oldest and leading renewable materials companies. Produces packaging, biomaterials, wood products and paper. Operates in both Finland and Sweden.",
        sveaskogTitle: "Sveaskog",
        sveaskogDesc: "Sweden's state forest company. Manages and cultivates forest land, delivers timber, pulpwood and biofuel. Encompasses about 100 different roles. Operates in Sweden.",
        upmTitle: "UPM",
        upmDesc: "Finnish forest industry group producing paper, pulp, plywood, energy and biomaterials. Operates in both Finland and Sweden.",
        versowoodTitle: "Versowood",
        versowoodDesc: "Finland's largest privately owned wood processing group with about 900 employees in 13 locations. Manufactures sawn timber and glulam. Operates in Finland.",

        sodraTitle: "Södra",
        sodraDesc: "Sweden's largest forest owner association with over 50,000 members. Provides career opportunities in forestry, industry and innovation.",
        sodraskogsTitle: "Södra Forest District",
        sodraskogsDesc: "Local forest district within Södra, focusing on forest advice and wood procurement. Apply for internships or jobs here.",
        osterbottenTitle: "Ostrobothnia Forest District",
        osterbottenDesc: "Regional forest district in Ostrobothnia, Finland. Responsible for forest advice and planning. Vacancies via the Forest Centre.",
        skogssallskapetTitle: "Forest Society",
        skogssallskapetDesc: "Swedish-speaking Finnish forest organisation offering services in forest management, advice and property development.",
        mellanskogTitle: "Mellanskog",
        mellanskogDesc: "Forest owner association in central Sweden. Offers services in timber sales, forest care and contracting.",
        svenskakyrkanTitle: "Church of Sweden",
        svenskakyrkanDesc: "The Church of Sweden is one of the largest forest owners in Sweden. The forest administration regularly seeks forestry professionals and interns."
    }
};

// ============================================================
// 2. DATA FÖR JOBBKORTEN
// ============================================================
const jobCards = [
    { key: "metsalehtiJob", link: "https://www.metsalehti.fi/tyopaikat/", langNoteKey: "metsalehtiJobLangNote" },
    { key: "skogligaJobb", link: "https://www.skogligajobb.se/", langNoteKey: null },
    { key: "tabsholland", link: "https://werkenbij.tabsholland.nl/jobs", langNoteKey: null },
    { key: "billerud", link: "https://www.billerud.com/career", langNoteKey: null },
    { key: "biometria", link: "https://www.biometria.se/", langNoteKey: null },
    { key: "holmen", link: "https://www.holmen.com/en/career/", langNoteKey: null },
    { key: "koskisen", link: "https://koskisen.fi/en/career", langNoteKey: null },
    { key: "metsahallitus", link: "https://www.metsa.fi/en/careers-and-internships/", langNoteKey: null },
    { key: "metsaGroup", link: "https://www.metsagroup.com/careers/", langNoteKey: null },
    { key: "mhy", link: "https://www.mhy.fi/avoimet-tyopaikat", langNoteKey: null },
    { key: "norraSkog", link: "https://karriar.norraskog.se/", langNoteKey: null },
    { key: "sca", link: "https://www.sca.com/sv/karriar/", langNoteKey: null },
    { key: "storaEnso", link: "https://www.storaenso.com/en/careers", langNoteKey: null },
    { key: "sveaskog", link: "https://www.sveaskog.se/karriar/", langNoteKey: null },
    { key: "upm", link: "https://www.upm.com/careers/", langNoteKey: null },
    { key: "versowood", link: "https://www.versowood.com/en/career", langNoteKey: null },
    { key: "sodra", link: "https://www.sodra.com/sv/jobba-har/", langNoteKey: null },
    { key: "sodraskogs", link: "https://www.sodra.com/sv/jobba-har/", langNoteKey: null },
    { key: "osterbotten", link: "https://www.metsakeskus.fi/sv/om-oss/jobba-hos-oss", langNoteKey: null },
    { key: "skogssallskapet", link: "https://skogssallskapet.fi/sv/om-oss/karriar/", langNoteKey: null },
    { key: "mellanskog", link: "https://www.mellanskog.se/om-oss/jobba-hos-oss/", langNoteKey: null },
    { key: "svenskakyrkan", link: "https://www.svenskakyrkan.se/karriar", langNoteKey: null }
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
    document.title = t.headerTitle + " – " + t.tabJobb;
    document.documentElement.lang = lang;
    langButtons.forEach(btn => {
        const bl = btn.getAttribute('data-lang');
        btn.classList.toggle('active', bl === lang);
    });
    localStorage.setItem('preferredLanguage', lang);
    renderJobs();
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

function renderJobs() {
    const container = document.getElementById('jobContainer');
    if (!container) return;
    container.innerHTML = '';
    jobCards.forEach(card => container.appendChild(createCard(card, currentLang)));
}

// Fliknavigering (till andra sidor)
tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const tabType = btn.getAttribute('data-tab');
        if (tabType === 'start') {
            window.location.href = 'index.html';
        } else if (tabType === 'nyheter') {
            window.location.href = 'nyheter.html';
        } else if (tabType === 'kunskapstester') {
            window.location.href = 'kunskapstester.html';
        } else if (tabType === 'studiematerial') {
            window.location.href = 'studiematerial.html';
        } else if (tabType === 'blanketter') {
            window.location.href = 'blanketter.html';
        } else if (tabType === 'ordbok') {
            window.location.href = 'ordbok.html';
        }
        // 'jobb' är den aktiva sidan, gör inget
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