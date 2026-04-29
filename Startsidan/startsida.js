// ============================================================
// 1. ÖVERSÄTTNINGAR – ALL TEXT
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

        // Organisationer (tidigare nyheter)
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

        // Ny organisation
        mmsaatioTitle: "Maa- ja metsätaloussäätiö",
        mmsaatioDesc: "Stiftelse som främjar finländsk jord- och skogsbruksforskning samt kunskapsspridning.",

        testIntroText: "Välkommen och testa dina skogskunskaper. Klicka in dig på sidan och välj ett ämne du vill testa dina kunskaper på. Det finns allt från indikationsväxter, skoglig matematik och vägar. Med andra ord, allt inom skogsbruk.",
        goToTests: "🌿 Gå till testerna",

        // Studiematerial
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

        // Jobb
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

        // Blanketter
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
        mmsaatioDesc: "Säätiö, joka edistää suomalaista maa- ja metsätaloustutkimusta sekä tiedon levittämistä.",

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

        jobbIntro: "Täältä löydät 3 verkkosivustoa, jotka julkaisevat työpaikkoja metsä- ja puuteollisuuden alalta. Alta löydät myös suurimmat metsäyhtiöt ja linkit niiden urasivuille. Voit löytää myös harjoittelupaikkoja. Onnea matkaan!",
        metsalehtiJobTitle: "Metsälehti – Työpaikat",
        metsalehtiJobDesc: "Metsälehden työpaikkaportaali metsäalalle Suomessa.",
        metsalehtiJobLangNote: "",
        skogligaJobbTitle: "Skogliga jobb",
        skogligaJobbDesc: "Ruotsin metsäalan työpaikkojen kohtaamispaikka.",
        tabshollandTitle: "Tabsholland",
        tabshollandDesc: "Alankomaiden puuteollisuuden rekrytointisivusto.",

        billerudTitle: "Billerud",
        billerudDesc: "Johtava uusiutuvien paperi- ja pakkausmateriaalien valmistaja. Toimii Ruotsissa.",
        biometriaTitle: "Biometria",
        biometriaDesc: "Varmistaa puunmittauksen ja metsälogistiikan laadun. Toimii Ruotsissa.",
        holmenTitle: "Holmen",
        holmenDesc: "Metsäteollisuuskonserni, joka toimii metsätalouden, kartongin, paperin ja puutuotteiden alalla. Toimii Ruotsissa.",
        koskisenTitle: "Koskisen",
        koskisenDesc: "Kansainvälinen puunjalostusyritys. Toimii Suomessa.",
        metsahallitusTitle: "Metsähallitus",
        metsahallitusDesc: "Suomen valtion metsähallinto.",
        metsaGroupTitle: "Metsä Group",
        metsaGroupDesc: "Suomalainen metsäteollisuuskonserni.",
        mhyTitle: "Metsänhoitoyhdistys",
        mhyDesc: "Metsänhoitoyhdistys, johon kuuluu noin 50 yhdistystä ja yli 1000 metsäammattilaista.",
        norraSkogTitle: "Norra Skog",
        norraSkogDesc: "Jäsenten omistama metsänomistajayhdistys Pohjois-Ruotsissa.",
        scaTitle: "SCA",
        scaDesc: "Ruotsalainen metsäyhtiö.",
        storaEnsoTitle: "Stora Enso",
        storaEnsoDesc: "Yksi maailman vanhimmista ja johtavista uusiutuvien materiaalien toimijoista.",
        sveaskogTitle: "Sveaskog",
        sveaskogDesc: "Hoitaa ja käyttää metsämaata, toimittaa puutavaraa.",
        upmTitle: "UPM",
        upmDesc: "Suomalainen metsäteollisuuskonserni.",
        versowoodTitle: "Versowood",
        versowoodDesc: "Suomen suurin yksityinen puunjalostuskonserni.",

        sodraTitle: "Södra",
        sodraDesc: "Ruotsin suurin metsänomistajien osuuskunta.",
        sodraskogsTitle: "Södra skogsreviret",
        sodraskogsDesc: "Paikallinen metsäpiiri etelä Suomessa.",
        osterbottenTitle: "Pohjanmaan metsäpiiri",
        osterbottenDesc: "Alueellinen metsäpiiri Pohjanmaalla.",
        skogssallskapetTitle: "Skogssällskapet",
        skogssallskapetDesc: "Ruotsalainen metsäorganisaatio.",
        mellanskogTitle: "Mellanskog",
        mellanskogDesc: "Metsänomistajayhdistys Keski-Ruotsissa.",
        svenskakyrkanTitle: "Ruotsin kirkko",
        svenskakyrkanDesc: "Ruotsin kirkko on yksi Ruotsin suurimmista metsänomistajista.",

        blanketIntro: "Täältä löydät tarkistuslistoja ja lomakkeita omavalvontaan ja luonnonhoitoon.",
        formOmaTitle: "Metsänhoitotöiden omavalvontaopas",
        formOmaDesc: "Tapion opas, jossa tarkistuslistoja ja ohjeita metsänomistajan itsevalvontaan. Vain suomenkieliset lomakkeet.",
        formAuditTitle: "Sisäinen auditointi",
        formAuditDesc: "Työkaluja metsäorganisaatioiden prosessien tarkasteluun ja kehittämiseen. Materiaali suomeksi.",
        formCheckTitle: "Luonnonhoitotoimenpiteiden tarkistuslista",
        formCheckDesc: "Metsäkeskuksen ruotsinkielinen PDF-lomake luonnonhoitotoimenpiteiden seurantaan.",
        formCheckLang: "PDF on ruotsiksi.",

        infoBox1Title: "Tervetuloa Metsävaltakuntaan",
        infoBox1Text: "Tutustu metsätesteihin, uutisiin ja työpaikkoihin.",
        infoBox2Title: "Viimeisimmät uutiset",
        infoBox2Text: "Pysy ajan tasalla metsäteollisuuden tapahtumista.",
        infoBox3Title: "Testaa tietosi",
        infoBox3Text: "Valitse useista kategorioista ja haasta itsesi!",

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

        newsIntro: "Here I have gathered the leading forestry websites that publish news within the forest industry. If you like the content, you can start subscribing to them and support them.",
        skogscentralenTitle: "Skogscentralen",
        skogscentralenDesc: "Finland's national forest authority. Responsible for implementing Finland's forest policy.",
        tapioTitle: "Tapio",
        tapioDesc: "A neutral, experienced expert organisation with over 110 years of experience in sustainable forestry.",
        metsalehtiTitle: "Metsälehti",
        metsalehtiDesc: "Finland's leading forestry magazine since 1933.",
        metsalehtiLangNote: "The website is in Finnish only.",
        finlandsNaturTitle: "Finlands Natur",
        finlandsNaturDesc: "The Swedish-speaking Finnish nature magazine.",
        finlandsNaturLangNote: "The website is in Swedish only.",
        skogsstyrelsenTitle: "Skogsstyrelsen",
        skogsstyrelsenDesc: "Sweden's national forest authority.",
        skogsstyrelsenLangNote: "The website is available in Swedish and English.",

        mmsaatioTitle: "Maa- ja metsätaloussäätiö",
        mmsaatioDesc: "Foundation that promotes Finnish agricultural and forestry research and knowledge dissemination.",

        testIntroText: "Welcome and test your forest knowledge.",
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

        jobbIntro: "Here you find 3 websites that publish jobs in the forest and wood industry.",
        metsalehtiJobTitle: "Metsälehti – Työpaikat",
        metsalehtiJobDesc: "Metsälehti's job portal for the forestry sector in Finland.",
        metsalehtiJobLangNote: "The website is in Finnish only.",
        skogligaJobbTitle: "Skogliga jobb",
        skogligaJobbDesc: "Sweden's hub for forestry jobs.",
        tabshollandTitle: "Tabsholland",
        tabshollandDesc: "Recruitment site for the wood industry in the Netherlands.",

        billerudTitle: "Billerud",
        billerudDesc: "Leading provider of renewable paper and packaging materials. Operates in Sweden.",
        biometriaTitle: "Biometria",
        biometriaDesc: "Quality assures timber measurement and forest logistics. Operates in Sweden.",
        holmenTitle: "Holmen",
        holmenDesc: "Forest industry group with operations in forestry, cardboard, paper and wood products.",
        koskisenTitle: "Koskisen",
        koskisenDesc: "International wood processing company.",
        metsahallitusTitle: "Metsähallitus",
        metsahallitusDesc: "Finland's state forest administration.",
        metsaGroupTitle: "Metsä Group",
        metsaGroupDesc: "Finnish forest industry group producing tissue, cardboard, pulp and wood products.",
        mhyTitle: "Metsänhoitoyhdistys",
        mhyDesc: "Forest management associations across Finland.",
        norraSkogTitle: "Norra Skog",
        norraSkogDesc: "Member-owned forest owners' association in northern Sweden.",
        scaTitle: "SCA",
        scaDesc: "Swedish forest company producing pulp, wood products, renewable energy and packaging paper.",
        storaEnsoTitle: "Stora Enso",
        storaEnsoDesc: "One of the world's oldest and leading renewable materials companies.",
        sveaskogTitle: "Sveaskog",
        sveaskogDesc: "Manages and cultivates forest land, delivers timber, pulpwood and biofuel.",
        upmTitle: "UPM",
        upmDesc: "Finnish forest industry group producing paper, pulp, plywood, energy and biomaterials.",
        versowoodTitle: "Versowood",
        versowoodDesc: "Finland's largest privately owned wood processing group.",

        sodraTitle: "Södra",
        sodraDesc: "Sweden's largest forest owner association.",
        sodraskogsTitle: "Södra skogsreviret",
        sodraskogsDesc: "Local forest district within south of Finland.",
        osterbottenTitle: "Ostrobothnia Forest District",
        osterbottenDesc: "Regional forest district in Ostrobothnia, Finland.",
        skogssallskapetTitle: "Skogssällskapet",
        skogssallskapetDesc: "Swedish forest organisation.",
        mellanskogTitle: "Mellanskog",
        mellanskogDesc: "Forest owner association in central Sweden.",
        svenskakyrkanTitle: "Church of Sweden",
        svenskakyrkanDesc: "The Church of Sweden is one of the largest forest owners in Sweden.",

        blanketIntro: "Here you will find checklists and forms for self-monitoring and nature conservation.",
        formOmaTitle: "Self-monitoring guide for forest management work",
        formOmaDesc: "Tapio's guide with checklists and instructions for forest owner self-monitoring. Forms in Finnish only.",
        formAuditTitle: "Internal auditing",
        formAuditDesc: "Tools for reviewing and developing forest organisation processes. Material in Finnish only.",
        formCheckTitle: "Checklist for nature conservation measures",
        formCheckDesc: "PDF form from the Finnish Forest Centre for monitoring nature management actions. The form is in Swedish.",
        formCheckLang: "PDF is in Swedish.",

        infoBox1Title: "Welcome to the Forest Realm",
        infoBox1Text: "Explore our forest tests, news and jobs within the forestry sector.",
        infoBox2Title: "Latest News",
        infoBox2Text: "Stay updated with the latest events and findings from the forest industry.",
        infoBox3Title: "Test Your Knowledge",
        infoBox3Text: "Choose from several categories and challenge yourself!",

        dictionaryIntro: "Here you find all forestry words and their designations",
        dictionaryClickText: "Click the button to access the forestry dictionary",
        dictionaryButton: "📖 Open dictionary",

        pageTitle: "Finnish Forest Site – Home"
    }
};

// ============================================================
// 2. DATA FÖR KORTEN (Organisationer, Studiematerial, Blanketter)
// ============================================================
const newsCards = [
    { key: "skogscentralen", link: "https://www.metsakeskus.fi/sv", langNoteKey: null },
    { key: "tapio", link: "https://tapio.fi/", langNoteKey: null },
    { key: "metsalehti", link: "https://www.metsalehti.fi/", langNoteKey: "metsalehtiLangNote" },
    { key: "finlandsNatur", link: "https://finlandsnatur.fi/", langNoteKey: "finlandsNaturLangNote" },
    { key: "skogsstyrelsen", link: "https://www.skogsstyrelsen.se/", langNoteKey: "skogsstyrelsenLangNote" },
    { key: "mmsaatio", link: "https://www.mmsaatio.fi/", langNoteKey: null }
];

const studyCards = [
    {
        key: "studyRec",
        link: "https://metsanhoidonsuositukset.fi",
        langNoteKey: null
    },
    {
        key: "studyMetso",
        link: "https://metsonpolku.fi/documents/115183005/124281117/Metso_Tikka_2018_Suomi.pdf/afcc4af9-c8b0-d133-47f3-a9b077db9ffd/Metso_Tikka_2018_Suomi.pdf?t=1655465275803",
        langNoteKey: "studyMetsoLang"
    },
    {
        key: "studyArvo",
        link: "https://julkaisut.valtioneuvosto.fi/server/api/core/bitstreams/35938706-0485-42d3-bff1-724f245e4c6b/content",
        langNoteKey: "studyArvoLang"
    },
    {
        key: "studyBok",
        link: "https://share.google/vN4YfB8GjvWnsLjii",
        langNoteKey: "studyBokLang"
    },
    {
        key: "studyGransk",
        link: "https://www.metsakeskus.fi/sites/default/files/document/tarkastusohje-sv.pdf",
        langNoteKey: "studyGranskLang"
    }
];

const formCards = [
    {
        key: "formOma",
        link: "https://tapio.fi/oppaat-ja-tyovalineet/metsanhoitotoiden-omavalvontaopas/",
        langNoteKey: null  // inget extra språknotis, info finns i desc
    },
    {
        key: "formAudit",
        link: "https://kestavametsa.fi/sisainen-auditointi/",
        langNoteKey: null
    },
    {
        key: "formCheck",
        link: "https://www.metsakeskus.fi/sites/default/files/document/lomake-luonnonhoitotoimenpiteiden-tarkistuslista-sv.pdf",
        langNoteKey: "formCheckLang"
    }
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

// Renderingsfunktioner för varje sektion
function renderSection(containerId, cards) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';
    cards.forEach(card => container.appendChild(createCard(card, currentLang)));
}

function renderNews() { renderSection('newsContainer', newsCards); }
function renderStudy() { renderSection('studyContainer', studyCards); }
function renderForms() { renderSection('formContainer', formCards); }
function renderJobs() { renderSection('jobContainer', jobCards); }
// Lyssnare för flikar
tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const tabType = btn.getAttribute('data-tab');
        if (!tabType || tabType === 'sprak') return;
        setActiveTab(tabType);
        // Rendera innehållet för den aktiva fliken
        if (tabType === 'nyheter') renderNews();
        else if (tabType === 'jobb') renderJobs();
        else if (tabType === 'studiematerial') renderStudy();
        else if (tabType === 'blanketter') renderForms();
    });
});

// (fortsätter från tidigare)
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

// Renderingsfunktion för jobb använder nu den globala jobCards
function renderJobs() {
    const container = document.getElementById('jobContainer');
    if (!container) return;
    container.innerHTML = '';
    jobCards.forEach(card => container.appendChild(createCard(card, currentLang)));
}

// Lyssnare för språkknappar
langButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const lang = e.currentTarget.getAttribute('data-lang');
        if (lang && translations[lang]) {
            currentLang = lang;
            updateLanguage(lang);
            // Rendera alla synliga paneler för att uppdatera språket
            if (document.getElementById('panel-nyheter').classList.contains('active')) renderNews();
            if (document.getElementById('panel-jobb').classList.contains('active')) renderJobs();
            if (document.getElementById('panel-studiematerial').classList.contains('active')) renderStudy();
            if (document.getElementById('panel-blanketter').classList.contains('active')) renderForms();
        }
    });
});

// Navigering
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

// Init
function initialize() {
    const savedLang = localStorage.getItem('preferredLanguage') || 'sv';
    currentLang = savedLang;
    updateLanguage(currentLang);
    setActiveTab('start');
}
initialize();