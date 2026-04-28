// ============================================================
// 1. ÖVERSÄTTNINGAR – ALL TEXT
// ============================================================
const translations = {
    sv: {
        headerTitle: "🌲 Finska skogssidan för alla skogsmänniskor",
        tabBlanketter: "Blanketter",
        tabJobb: "Jobb och praktikplats",
        tabKunskapstester: "Kunskapstester",
        tabNyheter: "Nyheter",
        tabStart: "Start",
        tabStudiematerial: "Studiematerial",
        tabDictionary: "Ordboken",
        welcomeMsg: "Välkommen till denna hemsida, Den är än under konstruktion men titta gärna omkring.",

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

        testIntroText: "Välkommen och testa dina skogskunskaper. Klicka in dig på sidan och välj ett ämne du vill testa dina kunskaper på. Det finns allt från indikationsväxter, skoglig matematik och vägar. Med andra ord, allt inom skogsbruk.",
        goToTests: "🌿 Gå till testerna",

        studiematerialText: "Här samlar vi studiematerial för skogsutbildningar.",
        blanketText: "Här kommer blanketter att finnas.",

        jobbIntro: "Här hittar du 3 hemsidor som publicerar arbeten inom skog och trä industrin. Nedanför så hittar du även de största skogsbolagen och länkar till deras karriär sidor. Du kan även hitta praktikplats hos dem. Lycka till",
        metsalehtiJobTitle: "Metsälehti – Työpaikat",
        metsalehtiJobDesc: "Metsälehtis jobbportal för skogsbranschen i Finland. Här publiceras lediga tjänster inom hela skogssektorn.",
        metsalehtiJobLangNote: "Webbplatsen är endast på finska.",
        skogligaJobbTitle: "Skogliga jobb",
        skogligaJobbDesc: "Sveriges samlingsplats för lediga jobb inom skogsbranschen. Här hittar du allt från skogsmaskinförare till skogsinspektorer och specialister.",
        tabshollandTitle: "Tabsholland",
        tabshollandDesc: "Rekryteringssida för träindustrin i Nederländerna. Här publiceras lediga jobb inom träförädling och produktion.",

        billerudTitle: "Billerud",
        billerudDesc: "Ledande inom förnybara pappers- och förpackningsmaterial. Verksamt i Sverige.",
        biometriaTitle: "Biometria",
        biometriaDesc: "Kvalitetssäkrar virkesmätning och skoglig logistik. Verksamt i Sverige.",
        holmenTitle: "Holmen",
        holmenDesc: "Skogsindustrikoncern med verksamhet inom skogsbruk, kartong, papper och trävaror. Verksamt i Sverige.",
        koskisenTitle: "Koskisen",
        koskisenDesc: "Internationellt träförädlingsföretag med över hundra års erfarenhet. Tillverkar sågade trävaror, plywood och spånskivor. Verksamt i Finland.",
        metsahallitusTitle: "Metsähallitus",
        metsahallitusDesc: "Finlands statliga skogsförvaltning. Förvaltar och skyddar naturresurser samt erbjuder arbetstillfällen inom skogsbruk, naturvård och friluftsliv.",
        metsaGroupTitle: "Metsä Group",
        metsaGroupDesc: "Finsk skogsindustrikoncern med produktion av nässdukar, kartong, massa och träprodukter. Har verksamhet i både Finland och Sverige.",
        mhyTitle: "Metsänhoitoyhdistys",
        mhyDesc: "Skogsvårdsförening med ca 50 föreningar och över 1000 skogsproffs runtom i Finland. Erbjuder varierande arbetsuppgifter inom skogsskötsel och rådgivning. Verksamt i Finland.",
        norraSkogTitle: "Norra Skog",
        norraSkogDesc: "Medlemsägd skogsägarförening i norra Sverige med ca 600 anställda. Verkar för skogsägarnas bästa och erbjuder varierande skogliga roller. Verksamt i Sverige.",
        scaTitle: "SCA",
        scaDesc: "Svenskt skogsbolag med produktion av massa, trävaror, förnybar energi och förpackningspapper. Verksamt i Sverige.",
        storaEnsoTitle: "Stora Enso",
        storaEnsoDesc: "En av världens äldsta och ledande aktörer inom förnybara material. Tillverkar förpackningar, biomaterial, träprodukter och papper. Verksamt i både Finland och Sverige.",
        sveaskogTitle: "Sveaskog",
        sveaskogDesc: "Förvaltar och brukar skogsmark, levererar timmer, massaved och biobränsle. Verksamt i Sverige.",
        upmTitle: "UPM",
        upmDesc: "Finländsk skogsindustrikoncern med produktion av papper, massa, plywood, energi och biomaterial. Har verksamhet i både Finland och Sverige.",
        versowoodTitle: "Versowood",
        versowoodDesc: "Finlands största privatägda träförädlingskoncern med ca 900 anställda på 13 orter. Tillverkar sågade trävaror och limträ. Verksamt i Finland.",

        sodraTitle: "Södra",
        sodraDesc: "Sveriges största skogsägarförening med över 50 000 medlemmar. Verksamt i Sverige.",
        sodraskogsTitle: "Södra skogsreviret",
        sodraskogsDesc: "Lokalt skogsrevir i södra Finland med fokus på skoglig rådgivning och virkesanskaffning. Verksamt i Finland.",
        osterbottenTitle: "Österbotten skogsrevir",
        osterbottenDesc: "Regionalt skogsrevir i Österbotten. Ansvarar för skoglig rådgivning och planering. Verksamt i Finland.",
        skogssallskapetTitle: "Skogssällskapet",
        skogssallskapetDesc: "Svensk skogsorganisation som erbjuder tjänster inom skogsförvaltning, rådgivning och fastighetsutveckling. Verksamt i Sverige och Finland.",
        mellanskogTitle: "Mellanskog",
        mellanskogDesc: "Skogsägarförening i Mellansverige. Erbjuder tjänster inom virkesförsäljning, skogsvård och uthyrning av skogsentreprenader. Verksamt i Sverige.",
        svenskakyrkanTitle: "Svenska kyrkan",
        svenskakyrkanDesc: "Svenska kyrkan är en av Sveriges största skogsägare.",

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
        tabNyheter: "Uutiset",
        tabStart: "Etusivu",
        tabStudiematerial: "Opiskelumateriaali",
        tabDictionary: "Sanakirja",
        welcomeMsg: "Tervetuloa tälle sivustolle, se on vielä rakenteilla, mutta katsele ympärillesi.",

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

        testIntroText: "Tervetuloa testaamaan metsätietouttasi. Verkkosivustollamme voit valita itseäsi kiinnostavan aiheen, jonka osaamista haluat testata. Valikoimasta löytyy aiheita kuten indikaattorikasvit, metsämatematiikka ja metsätiet – toisin sanoen kaikkea metsänhoitoon liittyvää.",
        goToTests: "🌿 Siirry testeihin",

        studiematerialText: "Tänne kokoamme opiskelumateriaaleja metsäalan koulutuksiin.",
        blanketText: "Tänne tulee lomakkeita.",

        jobbIntro: "Täältä löydät 3 verkkosivustoa, jotka julkaisevat työpaikkoja metsä- ja puuteollisuuden alalta. Alta löydät myös suurimmat metsäyhtiöt ja linkit niiden urasivuille. Voit löytää myös harjoittelupaikkoja. Onnea matkaan!",
        metsalehtiJobTitle: "Metsälehti – Työpaikat",
        metsalehtiJobDesc: "Metsälehden työpaikkaportaali metsäalalle Suomessa. Täällä julkaistaan avoimia työpaikkoja koko metsäsektorilta.",
        metsalehtiJobLangNote: "",
        skogligaJobbTitle: "Skogliga jobb",
        skogligaJobbDesc: "Ruotsin metsäalan työpaikkojen kohtaamispaikka. Täältä löydät kaiken metsäkoneenkuljettajista metsätarkastajiin ja asiantuntijoihin.",
        tabshollandTitle: "Tabsholland",
        tabshollandDesc: "Alankomaiden puuteollisuuden rekrytointisivusto. Täältä löytyy avoimia työpaikkoja puujalostuksen ja tuotannon alalla.",

        billerudTitle: "Billerud",
        billerudDesc: "Johtava uusiutuvien paperi- ja pakkausmateriaalien valmistaja. Toimii Ruotsissa.",
        biometriaTitle: "Biometria",
        biometriaDesc: "Varmistaa puunmittauksen ja metsälogistiikan laadun. Toimii Ruotsissa.",
        holmenTitle: "Holmen",
        holmenDesc: "Metsäteollisuuskonserni, joka toimii metsätalouden, kartongin, paperin ja puutuotteiden alalla. Toimii Ruotsissa.",
        koskisenTitle: "Koskisen",
        koskisenDesc: "Kansainvälinen puunjalostusyritys, jolla on yli sadan vuoden kokemus. Valmistaa sahatavaraa, vaneria ja lastulevyä. Toimii Suomessa.",
        metsahallitusTitle: "Metsähallitus",
        metsahallitusDesc: "Suomen valtion metsähallinto. Hoitaa ja suojelee luonnonvaroja sekä tarjoaa työpaikkoja metsätalouden, luonnonsuojelun ja ulkoilun parissa.",
        metsaGroupTitle: "Metsä Group",
        metsaGroupDesc: "Suomalainen metsäteollisuuskonserni, joka tuottaa tissue-paperia, kartonkia, massaa ja puutuotteita. Toimii sekä Suomessa että Ruotsissa.",
        mhyTitle: "Metsänhoitoyhdistys",
        mhyDesc: "Metsänhoitoyhdistys, johon kuuluu noin 50 yhdistystä ja yli 1000 metsäammattilaista ympäri Suomea. Tarjoaa monipuolisia työtehtäviä metsänhoidon ja neuvonnan parissa.",
        norraSkogTitle: "Norra Skog",
        norraSkogDesc: "Jäsenten omistama metsänomistajayhdistys Pohjois-Ruotsissa, jolla on noin 600 työntekijää. Toimii metsänomistajien parhaaksi ja tarjoaa monipuolisia metsäalan rooleja. Toimii Ruotsissa.",
        scaTitle: "SCA",
        scaDesc: "Ruotsalainen metsäyhtiö, joka tuottaa massaa, puutuotteita, uusiutuvaa energiaa ja pakkauspaperia. Toimii Ruotsissa.",
        storaEnsoTitle: "Stora Enso",
        storaEnsoDesc: "Yksi maailman vanhimmista ja johtavista uusiutuvien materiaalien toimijoista. Valmistaa pakkauksia, biomateriaaleja, puutuotteita ja paperia. Toimii sekä Suomessa että Ruotsissa.",
        sveaskogTitle: "Sveaskog",
        sveaskogDesc: "Hoitaa ja käyttää metsämaata, toimittaa puutavaraa, kuitupuuta ja biopolttoainetta. Toimii Ruotsissa.",
        upmTitle: "UPM",
        upmDesc: "Suomalainen metsäteollisuuskonserni, joka tuottaa paperia, massaa, vaneria, energiaa ja biomateriaaleja. Toimii sekä Suomessa että Ruotsissa.",
        versowoodTitle: "Versowood",
        versowoodDesc: "Suomen suurin yksityinen puunjalostuskonserni, jolla on noin 900 työntekijää 13 paikkakunnalla. Valmistaa sahatavaraa ja liimapuuta. Toimii Suomessa.",

        sodraTitle: "Södra",
        sodraDesc: "Ruotsin suurin metsänomistajien osuuskunta, jossa on yli 50 000 jäsentä. Toimii Ruotsissa.",
        sodraskogsTitle: "Södra Skogsreviret",
        sodraskogsDesc: "Paikallinen metsäpiiri etelä Suomi, joka keskittyy metsäneuvontaan ja puunhankintaan.",
        osterbottenTitle: "Pohjanmaan metsäpiiri",
        osterbottenDesc: "Alueellinen metsäpiiri Pohjanmaalla, Suomi. Vastaa metsäneuvonnasta ja suunnittelusta.",
        skogssallskapetTitle: "Skogssällskapet",
        skogssallskapetDesc: "Ruotsalainen metsäorganisaatio, joka tarjoaa palveluita metsänhoidossa, neuvonnassa ja kiinteistökehityksessä. Toimii sekä Suomessa että Ruotsissa.",
        mellanskogTitle: "Mellanskog",
        mellanskogDesc: "Metsänomistajayhdistys Keski-Ruotsissa. Tarjoaa palveluita puun myynnissä, metsänhoidossa ja metsäkoneyrittäjyydessä. Toimii Ruotsissa.",
        svenskakyrkanTitle: "Ruotsin kirkko",
        svenskakyrkanDesc: "Ruotsin kirkko on yksi Ruotsin suurimmista metsänomistajista.",

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
        tabNyheter: "News",
        tabStart: "Home",
        tabStudiematerial: "Study Material",
        tabDictionary: "Dictionary",
        welcomeMsg: "Welcome to this website, it is still under construction but feel free to look around.",

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

        testIntroText: "Welcome and test your forest knowledge. Enter the page and choose a topic you want to test your knowledge on. There is everything from indicator plants, forest mathematics to forest roads – in other words, everything within forestry.",
        goToTests: "🌿 Go to tests",

        studiematerialText: "Here we collect study materials for forestry education.",
        blanketText: "Forms will be available here.",

        jobbIntro: "Here you find 3 websites that publish jobs in the forest and wood industry. Below you will also find the largest forest companies and links to their career pages. You can also find internships with them. Good luck!",
        metsalehtiJobTitle: "Metsälehti – Työpaikat",
        metsalehtiJobDesc: "Metsälehti's job portal for the forestry sector in Finland. Open positions across the entire forest sector are published here.",
        metsalehtiJobLangNote: "The website is in Finnish only.",
        skogligaJobbTitle: "Skogliga jobb",
        skogligaJobbDesc: "Sweden's hub for forestry jobs. Here you'll find everything from forest machine operators to forest inspectors and specialists.",
        tabshollandTitle: "Tabsholland",
        tabshollandDesc: "Recruitment site for the wood industry in the Netherlands. Here you can find job openings in wood processing and production.",

        billerudTitle: "Billerud",
        billerudDesc: "Leading provider of renewable paper and packaging materials. Operates in Sweden.",
        biometriaTitle: "Biometria",
        biometriaDesc: "Quality assures timber measurement and forest logistics. Operates in Sweden.",
        holmenTitle: "Holmen",
        holmenDesc: "Forest industry group with operations in forestry, cardboard, paper and wood products. Operates in Sweden.",
        koskisenTitle: "Koskisen",
        koskisenDesc: "International wood processing company with over a hundred years of experience. Manufactures sawn timber, plywood and chipboard. Operates in Finland.",
        metsahallitusTitle: "Metsähallitus",
        metsahallitusDesc: "Finland's state forest administration. Manages and protects natural resources and offers employment in forestry, nature conservation and outdoor recreation.",
        metsaGroupTitle: "Metsä Group",
        metsaGroupDesc: "Finnish forest industry group producing tissue, cardboard, pulp and wood products. Operates in both Finland and Sweden.",
        mhyTitle: "Metsänhoitoyhdistys",
        mhyDesc: "Forest management associations with about 50 associations and over 1,000 forest professionals across Finland. Offers diverse tasks in forest management and advisory services. Operates in Finland.",
        norraSkogTitle: "Norra Skog",
        norraSkogDesc: "Member-owned forest owners' association in northern Sweden with about 600 employees. Works for the best interests of forest owners and offers varied forestry roles. Operates in Sweden. ",
        scaTitle: "SCA",
        scaDesc: "Swedish forest company producing pulp, wood products, renewable energy and packaging paper. Operates in Sweden.",
        storaEnsoTitle: "Stora Enso",
        storaEnsoDesc: "One of the world's oldest and leading renewable materials companies. Produces packaging, biomaterials, wood products and paper. Operates in both Finland and Sweden.",
        sveaskogTitle: "Sveaskog",
        sveaskogDesc: "Manages and cultivates forest land, delivers timber, pulpwood and biofuel. Operates in Sweden.",
        upmTitle: "UPM",
        upmDesc: "Finnish forest industry group producing paper, pulp, plywood, energy and biomaterials. Operates in both Finland and Sweden.",
        versowoodTitle: "Versowood",
        versowoodDesc: "Finland's largest privately owned wood processing group with about 900 employees in 13 locations. Manufactures sawn timber. Operates in Finland.",
        sodraTitle: "Södra",
        sodraDesc: "Sweden's largest forest owner association with over 50,000 members. Operates in Sweden.",
        sodraskogsTitle: "Södra skogsreviret",
        sodraskogsDesc: "Local forest district within south of Finland, focusing on forest advice and wood procurement.",
        osterbottenTitle: "Ostrobothnia Forest District",
        osterbottenDesc: "Regional forest district in Ostrobothnia, Finland. Responsible for forest advice.",
        skogssallskapetTitle: "Skogssällskapet",
        skogssallskapetDesc: "Swedish forest organisation offering services in forest management, advice and property development. Operates in both Finland and Sweden.",
        mellanskogTitle: "Mellanskog",
        mellanskogDesc: "Forest owner association in central Sweden. Offers services in timber sales, forest care and contracting. Operates in Sweden.",
        svenskakyrkanTitle: "Church of Sweden",
        svenskakyrkanDesc: "The Church of Sweden is one of the largest forest owners in Sweden.",

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
// 2. DATA FÖR NYHETS- OCH JOBBKORT
// ============================================================
const newsCards = [
    { key: "skogscentralen", link: "https://www.metsakeskus.fi/sv", langNoteKey: null },
    { key: "tapio", link: "https://tapio.fi/", langNoteKey: null },
    { key: "metsalehti", link: "https://www.metsalehti.fi/", langNoteKey: "metsalehtiLangNote" },
    { key: "finlandsNatur", link: "https://finlandsnatur.fi/", langNoteKey: "finlandsNaturLangNote" },
    { key: "skogsstyrelsen", link: "https://www.skogsstyrelsen.se/", langNoteKey: "skogsstyrelsenLangNote" }
];

const jobCards = [
    { key: "metsalehtiJob", link: "https://www.metsalehti.fi/tyopaikat/", langNoteKey: "metsalehtiJobLangNote" },
    { key: "skogligaJobb", link: "https://www.skogligajobb.se/", langNoteKey: null },
    { key: "tabsholland", link: "https://werkenbij.tabsholland.nl/jobs", langNoteKey: null },
    { key: "billerud", link: "https://www.billerud.com/career", langNoteKey: null },
    { key: "biometria", link: "https://www.biometria.se/", langNoteKey: null },
    { key: "holmen", link: "https://www.holmen.com/en/career/", langNoteKey: null },
    { key: "koskisen", link: "https://koskisen.fi/konserni/tyopaikat/", langNoteKey: null },
    { key: "metsahallitus", link: "https://www.metsa.fi/en/about-us/cooperation/job-opportunities/", langNoteKey: null },
    { key: "metsaGroup", link: "https://www.metsagroup.com/careers/", langNoteKey: null },
    { key: "mhy", link: "https://www.mhy.fi/avoimet-tyopaikat", langNoteKey: null },
    { key: "norraSkog", link: "https://karriar.norraskog.se/", langNoteKey: null },
    { key: "sca", link: "https://www.sca.com/sv/karriar/", langNoteKey: null },
    { key: "storaEnso", link: "https://www.storaenso.com/en/careers", langNoteKey: null },
    { key: "sveaskog", link: "https://www.sveaskog.se/karriar/", langNoteKey: null },
    { key: "upm", link: "https://www.upm.com/careers/", langNoteKey: null },
    { key: "versowood", link: "https://www.versowood.fi/fi/konserni/versowood-tyonantajana", langNoteKey: null },
    { key: "sodra", link: "https://www.sodra.com/sv/se/karriar/", langNoteKey: null },
    { key: "sodraskogs", link: "https://www.revir.org/", langNoteKey: null },
    { key: "osterbotten", link: "https://www.mhy.fi/sv/osterbotten", langNoteKey: null },
    { key: "skogssallskapet", link: "https://www.skogssallskapet.se/", langNoteKey: null },
    { key: "mellanskog", link: "https://www.mellanskog.se/om-oss/jobba-hos-oss/", langNoteKey: null },
    { key: "svenskakyrkan", link: "https://www.svenskakyrkan.se/karriar", langNoteKey: null }
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

function renderNews() {
    const container = document.getElementById('newsContainer');
    if (!container) return;
    container.innerHTML = '';
    newsCards.forEach(card => container.appendChild(createCard(card, currentLang)));
}

function renderJobs() {
    const container = document.getElementById('jobContainer');
    if (!container) return;
    container.innerHTML = '';
    jobCards.forEach(card => container.appendChild(createCard(card, currentLang)));
}

// Lyssnare
tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const tabType = btn.getAttribute('data-tab');
        if (tabType && tabType !== 'sprak') setActiveTab(tabType);
        if (tabType === 'nyheter') renderNews();
        if (tabType === 'jobb') renderJobs();
    });
});

langButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const lang = e.currentTarget.getAttribute('data-lang');
        if (lang && translations[lang]) {
            currentLang = lang;
            updateLanguage(lang);
            renderNews();
            renderJobs();
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
        window.location.href = 'ordbok.html';
    });
}

// Init
function initialize() {
    const savedLang = localStorage.getItem('preferredLanguage') || 'sv';
    currentLang = savedLang;
    updateLanguage(currentLang);
    setActiveTab('start');
}
initialize();