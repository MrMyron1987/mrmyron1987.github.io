// ============================================================
// 1. ÖVERSÄTTNINGAR – alla texter på tre språk
//    Notera: HTML innehåller fallback-texter, men JS uppdaterar dem dynamiskt.
// ============================================================
const translations = {
    sv: {
        headerTitle: "🌲 Finska skogssidan för alla skogsmänniskor",
        tabBlanketter: "Blanketter",
        tabJobb: "Jobb",
        tabKunskapstester: "Kunskapstester",
        tabNyheter: "Nyheter",
        tabStart: "Start",
        tabStudiematerial: "Studiematerial",
        welcomeMsg: "Välkommen till denna hemsida, Den är än under konstruktion men titta gärna omkring.",

        newsIntro: "Här har vi samlat de främsta skogliga webbplatserna som publicerar nyheter inom skogsbranschen. Gillar du innehållet kan du börja prenumerera via deras prenumerationslänkar.",
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
        skogsstyrelsenLangNote: "Webbplatsen finns på svenska och finska.",

        testIntroText: "Välkommen och testa dina skogskunskaper. Klicka in dig på sidan och välj ett ämne du vill testa dina kunskaper på. Det finns allt från indikationsväxter, skoglig matematik och vägar. Med andra ord, allt inom skogsbruk.",
        goToTests: "🌿 Gå till testerna",

        jobbIntro: "Här hittar du både företag och webbplatser inom skogsbruk från Finland och Sverige, samt direktlänkar till deras rekryteringssidor.",
        metsalehtiJobTitle: "Metsälehti – Työpaikat",
        metsalehtiJobDesc: "Metsälehtis jobbportal för skogsbranschen i Finland. Här publiceras lediga tjänster inom hela skogssektorn.",
        metsalehtiJobLangNote: "Webbplatsen är endast på finska.",
        skogligaJobbTitle: "Skogliga jobb",
        skogligaJobbDesc: "Sveriges samlingsplats för lediga jobb inom skogsbranschen. Här hittar du allt från skogsmaskinförare till skogsinspektorer och specialister.",

        billerudTitle: "Billerud",
        billerudDesc: "Världsledande inom förnybara pappers- och förpackningsmaterial. Verksamt i Sverige.",
        biometriaTitle: "Biometria",
        biometriaDesc: "Kvalitetssäkrar virkesmätning och skoglig logistik. Erbjuder tjänster för digitalisering och automatisering av virkesflödet. Verksamt i Sverige.",
        holmenTitle: "Holmen",
        holmenDesc: "Skogsindustrikoncern med verksamhet inom skogsbruk, kartong, papper och trävaror. Verksamt i Sverige.",
        kopparforsTitle: "Kopparfors Skogar",
        kopparforsDesc: "Skogsförvaltningsbolag med fokus på hållbart skogsbruk och virkesaffärer. Verksamt i Sverige.",
        koskisenTitle: "Koskisen",
        koskisenDesc: "Internationellt träförädlingsföretag med över hundra års erfarenhet. Tillverkar sågade trävaror, plywood och spånskivor. Verksamt i Finland.",
        metsahallitusTitle: "Metsähallitus",
        metsahallitusDesc: "Finlands statliga skogsförvaltning. Förvaltar och skyddar naturresurser samt erbjuder arbetstillfällen inom skogsbruk, naturvård och friluftsliv. Verksamt i Finland.",
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

        pageTitle: "Finska skogssidan – Start"
    },
    fi: {
        headerTitle: "🌲 Suomen metsäsivusto kaikille metsäihmisille",
        tabBlanketter: "Lomakkeet",
        tabJobb: "Työpaikat",
        tabKunskapstester: "Tietotestit",
        tabNyheter: "Uutiset",
        tabStart: "Etusivu",
        tabStudiematerial: "Opiskelumateriaali",
        welcomeMsg: "Tervetuloa tälle sivustolle, se on vielä rakenteilla, mutta katsele ympärillesi.",

        newsIntro: "Tälle sivulle olemme koonneet tärkeimmät metsäalan verkkosivustot, jotka julkaisevat uutisia metsäalalta. Jos pidät sisällöstä, voit aloittaa tilauksen heidän tilauslinkkiensä kautta.",
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
        skogsstyrelsenLangNote: "Verkkosivusto on ruotsiksi ja suomeksi.",

        testIntroText: "Tervetuloa testaamaan metsätietouttasi. Verkkosivustollamme voit valita itseäsi kiinnostavan aiheen, jonka osaamista haluat testata. Valikoimasta löytyy aiheita kuten indikaattorikasvit, metsämatematiikka ja metsätiet – toisin sanoen kaikkea metsänhoitoon liittyvää.",
        goToTests: "🌿 Siirry testeihin",

        jobbIntro: "Täältä löydät sekä metsäalan yrityksiä että verkkosivustoja Suomesta ja Ruotsista, sekä suorat linkit heidän rekrytointisivuilleen.",
        metsalehtiJobTitle: "Metsälehti – Työpaikat",
        metsalehtiJobDesc: "Metsälehden työpaikkaportaali metsäalalle Suomessa. Täällä julkaistaan avoimia työpaikkoja koko metsäsektorilta.",
        metsalehtiJobLangNote: "",
        skogligaJobbTitle: "Skogliga jobb",
        skogligaJobbDesc: "Ruotsin metsäalan työpaikkojen kohtaamispaikka. Täältä löydät kaiken metsäkoneenkuljettajista metsätarkastajiin ja asiantuntijoihin.",

        billerudTitle: "Billerud",
        billerudDesc: "Maailman johtava uusiutuvien paperi- ja pakkausmateriaalien valmistaja. Toimii Ruotsissa.",
        biometriaTitle: "Biometria",
        biometriaDesc: "Varmistaa puunmittauksen ja metsälogistiikan laadun. Tarjoaa palveluita puuvirran digitalisointiin ja automatisointiin. Toimii Ruotsissa.",
        holmenTitle: "Holmen",
        holmenDesc: "Metsäteollisuuskonserni, joka toimii metsätalouden, kartongin, paperin ja puutuotteiden alalla. Toimii Ruotsissa.",
        kopparforsTitle: "Kopparfors Skogar",
        kopparforsDesc: "Metsänhoitoyhtiö, joka keskittyy kestävään metsätalouteen ja puukauppaan. Toimii Ruotsissa.",
        koskisenTitle: "Koskisen",
        koskisenDesc: "Kansainvälinen puunjalostusyritys, jolla on yli sadan vuoden kokemus. Valmistaa sahatavaraa, vaneria ja lastulevyä. Toimii Suomessa.",
        metsahallitusTitle: "Metsähallitus",
        metsahallitusDesc: "Suomen valtion metsähallinto. Hoitaa ja suojelee luonnonvaroja sekä tarjoaa työpaikkoja metsätalouden, luonnonsuojelun ja ulkoilun parissa. Toimii Suomessa.",
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

        pageTitle: "Suomen metsäsivusto – Etusivu"
    },
    en: {
        headerTitle: "🌲 Finnish Forest Site for all forest people",
        tabBlanketter: "Forms",
        tabJobb: "Jobs",
        tabKunskapstester: "Knowledge Tests",
        tabNyheter: "News",
        tabStart: "Home",
        tabStudiematerial: "Study Material",
        welcomeMsg: "Welcome to this website, it is still under construction but feel free to look around.",

        newsIntro: "Here we have gathered the leading forestry websites that publish news within the forest industry. If you like the content, you can start subscribing via their subscription links.",
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
        skogsstyrelsenLangNote: "The website is available in Swedish and Finnish.",

        testIntroText: "Welcome and test your forest knowledge. Enter the page and choose a topic you want to test your knowledge on. There is everything from indicator plants, forest mathematics to forest roads – in other words, everything within forestry.",
        goToTests: "🌿 Go to tests",

        jobbIntro: "Here you will find both companies and websites within forestry from Finland and Sweden, along with direct links to their recruitment pages.",
        metsalehtiJobTitle: "Metsälehti – Työpaikat",
        metsalehtiJobDesc: "Metsälehti's job portal for the forestry sector in Finland. Open positions across the entire forest sector are published here.",
        metsalehtiJobLangNote: "The website is in Finnish only.",
        skogligaJobbTitle: "Skogliga jobb",
        skogligaJobbDesc: "Sweden's hub for forestry jobs. Here you'll find everything from forest machine operators to forest inspectors and specialists.",

        billerudTitle: "Billerud",
        billerudDesc: "World-leading provider of renewable paper and packaging materials. Operates in Sweden.",
        biometriaTitle: "Biometria",
        biometriaDesc: "Quality assures timber measurement and forest logistics. Offers services for digitalising and automating the wood flow. Operates in Sweden.",
        holmenTitle: "Holmen",
        holmenDesc: "Forest industry group with operations in forestry, cardboard, paper and wood products. Operates in Sweden.",
        kopparforsTitle: "Kopparfors Skogar",
        kopparforsDesc: "Forest management company focused on sustainable forestry and timber trade. Operates in Sweden.",
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

        pageTitle: "Finnish Forest Site – Home"
    }
};

let currentLang = 'sv';

// ============================================================
// 2. DOM-REFERENSER
// ============================================================
const tabButtons = document.querySelectorAll('.tab');
const langButtons = document.querySelectorAll('.lang-btn');
const goToTestsBtn = document.getElementById('goToTestsBtn');
const allPanels = document.querySelectorAll('.tab-panel');

// ============================================================
// 3. UPPDATERA SPRÅK – slår upp översättningar och uppdaterar UI
// ============================================================
function updateLanguage(lang) {
    const t = translations[lang];
    if (!t) return;

    // Alla element med data-translate-attribut
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (t[key] !== undefined) {
            el.textContent = t[key];
        }
    });

    document.title = t.pageTitle;
    document.documentElement.lang = lang;

    // Markera aktiv språkknapp
    langButtons.forEach(btn => {
        const btnLang = btn.getAttribute('data-lang');
        if (btnLang === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    localStorage.setItem('preferredLanguage', lang);
}

// ============================================================
// 4. FLIKBYTE – visar rätt panel och aktiverar flik-knapp
// ============================================================
function setActiveTab(tabId) {
    tabButtons.forEach(btn => {
        const btnTab = btn.getAttribute('data-tab');
        if (btnTab === tabId) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    allPanels.forEach(panel => {
        if (panel.id === `panel-${tabId}`) {
            panel.classList.add('active');
        } else {
            panel.classList.remove('active');
        }
    });
}

// ============================================================
// 5. EVENT LISTENERS
// ============================================================

// Klick på tabbar
tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const tabType = btn.getAttribute('data-tab');
        if (tabType && tabType !== 'sprak') {
            setActiveTab(tabType);
        }
    });
});

// Klick på språkknappar
langButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const lang = e.currentTarget.getAttribute('data-lang');
        if (lang && translations[lang]) {
            currentLang = lang;
            updateLanguage(lang);
        }
    });
});

// Navigering till testerna
if (goToTestsBtn) {
    goToTestsBtn.addEventListener('click', () => {
        window.location.href = '/Testerna/testerna.html';
    });
}

// ============================================================
// 6. INIT – startar sidan med rätt språk och flik
// ============================================================
function initialize() {
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && translations[savedLang]) {
        currentLang = savedLang;
    } else {
        currentLang = 'sv';
    }
    updateLanguage(currentLang);
    setActiveTab('start');   // Start-fliken visas först
}

initialize();