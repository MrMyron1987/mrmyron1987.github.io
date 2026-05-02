// ============================================================
// 1. ÖVERSÄTTNINGAR (inkl. fliknamn)
// ============================================================
const translations = {
    sv: {
        headerTitle: "🌲 Skogsordboken",
        introText: "Här hittar du skogliga ord och deras benämningar på finska, svenska och engelska.",
        colFinnish: "Finska",
        colSwedish: "Svenska",
        colEnglish: "Engelska",
        searchPlaceholder: "Sök ord...",
        pageTitle: "Skogsordboken",
        // Fliköversättningar
        tabStart: "Start",
        tabNyheter: "Organisationer",
        tabKunskapstester: "Kunskapstester",
        tabStudiematerial: "Studiematerial",
        tabJobb: "Jobb och praktikplats",
        tabBlanketter: "Blanketter",
        tabDictionary: "Ordboken",
        tabSchools: "Skolor",
    },
    fi: {
        headerTitle: "🌲 Metsäsanakirja",
        introText: "Täältä löydät metsäalan sanoja ja niiden nimityksiä suomeksi, ruotsiksi ja englanniksi.",
        colFinnish: "Suomi",
        colSwedish: "Ruotsi",
        colEnglish: "Englanti",
        searchPlaceholder: "Etsi sana...",
        pageTitle: "Metsäsanakirja",
        tabStart: "Etusivu",
        tabNyheter: "Organisaatiot",
        tabKunskapstester: "Tietotestit",
        tabStudiematerial: "Opiskelumateriaali",
        tabJobb: "Työpaikat ja harjoittelu",
        tabBlanketter: "Lomakkeet",
        tabDictionary: "Sanakirja",
        tabSchools: "Koulut",
    },
    en: {
        headerTitle: "🌲 Forest Dictionary",
        introText: "Here you find forestry words and their designations in Finnish, Swedish and English.",
        colFinnish: "Finnish",
        colSwedish: "Swedish",
        colEnglish: "English",
        searchPlaceholder: "Search word...",
        pageTitle: "Forest Dictionary",
        tabStart: "Home",
        tabNyheter: "Organizations",
        tabKunskapstester: "Knowledge Tests",
        tabStudiematerial: "Study Material",
        tabJobb: "Jobs and Internships",
        tabBlanketter: "Forms",
        tabDictionary: "Dictionary",
        tabSchools: "Schools",
    }
};

// ============================================================
// 2. ORDBOKSDATA – klistra in hela din dictionaryData-array här
// ============================================================
const dictionaryData = [
    // --- KLISTRA IN DIN FULLSTÄNDIGA ARRAY HÄR ---
    { fi: "Jokamiehenoikeudet", sv: "Allemansrätten", en: "Everyman's right", desc: "Jokamiehenoikeudet tarkoittavat sitä, että kaikki saavat liikkua luonnossa, kuten metsissä ja järvien rannoilla, marjastaa ja sienestää sekä oleskella tilapäisesti, kunhan eivät häiritse maanomistajaa tai vahingoita luontoa.<br><br>Allemansrätten betyder att alla får röra sig fritt i naturen, till exempel i skogar och vid sjöar, plocka bär och svamp samt vistas tillfälligt, så länge man inte stör markägaren eller skadar naturen.<br><br>  Everyman’s Right / Right of Public Access means that everyone can freely enjoy nature, such as walking in forests, visiting lakeshores, picking berries and mushrooms, and staying temporarily, as long as they respect nature and do not disturb landowners." },
  
    { fi: "Hollanninjalavatauti", sv: "Almsjuka", en: "Dutch elm disease", desc: "Hollanninjalavatauti on sienitauti, joka tappaa jalavia tukkimalla niiden vedenkuljetusjärjestelmän ja aiheuttaa puun kuihtumisen ja kuoleman.<br><br>Almsjuka är en svampsjukdom som angriper almar genom att blockera deras vattenledning, vilket gör att trädet vissnar och dör.<br><br>  Dutch elm disease is a fungal disease that affects elm trees by blocking their water transport system, causing the tree to wilt and eventually die." },
  
    { fi: "Alunamaa", sv: "Alunjord", en: "Acid sulfate soil", desc: "Alunamaa on maaperää, jossa on runsaasti sulfidimineraaleja ja joka hapettuessaan voi muuttua hyvin happamaksi sekä vapauttaa haitallisia metalleja ympäristöön.<br><br>Alunjord är jord som innehåller mycket sulfidmineraler och som vid oxidation kan bli mycket sur samt frigöra skadliga metaller till miljön.<br><br>  Acid sulfate soil is soil rich in sulfide minerals that can become highly acidic when exposed to oxygen, releasing harmful metals into the environment." },
  
    { fi: "Metsänkäyttöilmoitus", sv: "Anmälan om användning av skog", en: "Forest use notification", desc: "Metsänkäyttöilmoitus on viranomaiselle tehtävä ilmoitus suunnitelluista metsänhakkuista tai muista metsänkäyttötoimenpiteistä ennen työn aloittamista.<br><br>Anmälan om användning av skog är en anmälan till myndigheterna om planerade avverkningar eller andra åtgärder i skogen innan arbetet påbörjas.<br><br>  Forest use notification is a formal notice submitted to the authorities about planned logging or other forest management actions before the work begins." },
  
    { fi: "Näkemäraivaus", sv: "Anpassad förröjning", en: "Visibility clearing", desc: "Näkemäraivaus / kohdennettu raivaus,Kevyt raivaus, jossa poistetaan pensaita ja pieniä puita näkyvyyden parantamiseksi esimerkiksi teiden, polkujen tai sähkölinjojen varrella.<br><br>Anpassad förröjning / siktröjningEn lätt röjning där man tar bort buskar och mindre träd för att förbättra sikten, till exempel längs vägar, stigar eller ledningsgator.<br><br>Visibility clearing or “selective clearing for sightlines” A light form of vegetation removal where trees and bushes are cut to improve visibility in an area, for example along roads, paths, or utility corridors." },
  
    { fi: "Säätöauraus", sv: "Anpassad plogning", en: "Adaptive ploughing", desc: "Säätöauraus tarkoittaa maanmuokkausta, jossa aurauksen syvyyttä ja tapaa säädetään maaperän, kosteuden ja kasvupaikan olosuhteiden mukaan parhaan tuloksen saavuttamiseksi.<br><br>Anpassad plogning innebär markberedning där plöjningens djup och metod anpassas efter markförhållanden, fuktighet och växtplatsens egenskaper för bästa resultat.<br><br>  Adaptive ploughing means soil preparation where the depth and method of ploughing are adjusted according to soil conditions, moisture, and site characteristics to achieve the best result." },
  
    { fi: "Rikastumiskerros", sv: "Anrikningsskikt", en: "Illuvial horizon", desc: "Rikastumiskerros on maaperän kerros, johon vettä mukana kulkeutuvat aineet, kuten savi, rauta tai humus, kerrostuvat ylemmistä maakerroksista.<br><br>Anrikningsskikt är det jordlager där ämnen som transporteras med vatten, såsom lera, järn eller humus, samlas från de övre jordlagren.<br><br>  Illuvial horizon is the soil layer where materials carried by water, such as clay, iron, or humus, accumulate from the upper soil layers." },
  
    { fi: "Metsäliittymä", sv: "Skogssammanslutning", en: "Forest joint ownership", desc: "Metsäliittymä tarkoittaa usean omistajan yhteisesti omistamaa metsäaluetta tai järjestelyä, jossa metsää hallitaan ja käytetään yhdessä sovittujen sääntöjen mukaisesti.<br><br>Skogssammanslutning betyder ett skogsområde som ägs gemensamt av flera personer eller en ordning där skogen förvaltas och används tillsammans enligt överenskomna regler.<br><br>  Forest joint ownership means a forest area owned by several people together, where the forest is managed and used jointly according to agreed rules." },
  
    { fi: "Laji", sv: "Art", en: "Species", desc: "Laji tarkoittaa eliöryhmää, jonka yksilöt ovat keskenään samankaltaisia ja voivat lisääntyä keskenään tuottaen lisääntymiskykyisiä jälkeläisiä.<br><br>Art betyder en grupp organismer vars individer liknar varandra och kan fortplanta sig med varandra och få fertil avkomma.<br><br>  Species means a group of organisms whose individuals are similar to each other and can reproduce together to produce fertile offspring." },
  
    { fi: "Erityisesti suojeltava laji", sv: "Art som omfattas av särskilt skydd", en: "Strictly protected species", desc: "Erityisesti suojeltava laji on laji, joka on määritelty uhanalaiseksi ja jonka elinympäristöä ja säilymistä suojellaan erityisen tiukoin toimenpitein.<br><br>Art som omfattas av särskilt skydd är en art som klassificeras som hotad och vars livsmiljö och överlevnad skyddas med särskilt strikta åtgärder.<br><br>  A strictly protected species is a species classified as threatened and protected with particularly strict measures to safeguard its habitat and survival." },
  
    { fi: "Eliöyhteisö", sv: "Artsamhälle", en: "Biological community", desc: "Eliöyhteisö tarkoittaa samassa elinympäristössä eläviä eri lajien eliöitä, jotka ovat vuorovaikutuksessa keskenään.<br><br>Artsamhälle är alla olika arter av organismer som lever i samma livsmiljö och samverkar med varandra.<br><br>  A biological community is a group of different species living in the same habitat and interacting with each other." },
  
    { fi: "Perimä", sv: "Arvsmassa", en: "Genome", desc: "Perimä tarkoittaa eliön koko perinnöllistä tietoa, joka on tallentunut DNA:han ja ohjaa sen ominaisuuksia ja toimintaa.<br><br>Arvsmassa betyder en organisms samlade genetiska information som finns i DNA och styr dess egenskaper och funktioner.<br><br>  A genome is the complete set of genetic information of an organism stored in DNA, which determines its traits and biological functions." },
  
    { fi: "Aasianrunkojäärä", sv: "Asiatisk långhorning", en: "Asian long-horned beetle", desc: "Aasianrunkojäärä on puuhun kaivautuva kovakuoriaislaji, joka voi aiheuttaa vakavia tuhoja lehtipuille, koska sen toukat syövät puun sisäosaa.<br><br>Asiatisk långhorning är en vedlevande skalbagge som kan orsaka stora skador på lövträd eftersom larverna äter inne i trädet.<br><br>  The Asian long-horned beetle is a wood-boring beetle that can cause serious damage to hardwood trees, as its larvae feed inside the wood." },
  
    { fi: "Saarni", sv: "Ask", en: "European ash", desc: "Saarni on lehtipuu, joka kasvaa Euroopassa ja tunnetaan kestävästä ja joustavasta puuaineksestaan sekä sulkamaisista lehdistään.<br><br>Ask är ett lövträd som växer i Europa och är känt för sitt starka och flexibla virke samt sina fjäderlika blad.<br><br>  European ash is a deciduous tree native to Europe, known for its strong and flexible wood and its feather-like leaves." },
  
    { fi: "Tuhkalannoitus", sv: "Askgödsling", en: "Ash fertilization", desc: "Tuhkalannoitus tarkoittaa metsän tai maaperän lannoittamista puutuhkalla, joka sisältää ravinteita kuten kaliumia ja kalsiumia ja parantaa maan kasvukuntoa.<br><br>Askgödsling innebär att man gödslar skog eller mark med träaska som innehåller näringsämnen som kalium och kalcium och förbättrar jordens bördighet.<br><br>  Ash fertilization means applying wood ash to forests or soil to supply nutrients such as potassium and calcium, improving soil fertility and growth conditions." },
  
    { fi: "Saarnensurma", sv: "Askskottsjuka", en: "Ash dieback", desc: "Saarnensurma on sienitauti, joka vaurioittaa saarnia ja aiheuttaa versojen ja oksien kuolemista sekä lopulta koko puun heikkenemistä ja kuolemista.<br><br>Askskottsjuka är en svampsjukdom som skadar askar och orsakar att skott och grenar dör, vilket till slut försvagar och kan döda hela trädet.<br><br>  Ash dieback is a fungal disease that affects ash trees, causing shoots and branches to die and eventually leading to the decline and death of the entire tree." },
  
    { fi: "Haapa", sv: "Asp", en: "Aspen", desc: "Haapa on nopeasti kasvava lehtipuu, joka tunnetaan siitä, että sen lehdet havisevat helposti tuulessa pitkien ja litteiden lehtiruotiensa vuoksi.<br><br>Asp är ett snabbväxande lövträd som är känt för att bladen lätt darrar i vinden på grund av sina långa och platta bladskaft.<br><br>  Aspen is a fast-growing deciduous tree known for its leaves that tremble easily in the wind due to their long, flat leaf stalks." },
  
    { fi: "Haavikko", sv: "Aspbestånd", en: "Aspen stand", desc: "Haavikko tarkoittaa aluetta, jossa kasvaa pääasiassa haapoja, usein samanikäisenä ja melko tiheänä puustona.<br><br>Aspbestånd är ett område där det huvudsakligen växer aspar, ofta som en jämnårig och ganska tät skog.<br><br>  An aspen stand is an area of forest dominated mainly by aspen trees, often growing as an even-aged and relatively dense group." },
  
    { fi: "Haavanroso", sv: "Aspdyna", en: "Aspen bracket fungus (poplar bracket)", desc: "Haavanroso on haavoilla kasvava kääväkkäsieni, joka muodostaa kovia, monivuotisia kasvustoja ja hajottaa puun rakennetta aiheuttaen lahottumista.<br><br>Aspdyna är en ticka som växer på aspar och bildar hårda, fleråriga fruktkroppar som bryter ner veden och orsakar röta.<br><br>  Aspen bracket fungus is a wood-decaying bracket fungus that grows on aspen trees, forming hard perennial fruiting bodies and breaking down the wood structure, leading to rot." },
  
    { fi: "Vesittäminen", sv: "Att leda in vatten på tidigare torvtäkt", en: "Flooding (of former peat extraction area)", desc: "Vesittäminen tarkoittaa toimenpidettä, jossa aiemmin ojitettu tai turvetuotannossa ollut alue täytetään vedellä, yleensä kosteikon tai uuden vesiluonnon palauttamiseksi.<br><br>Att leda in vatten på tidigare torvtäkt innebär att man fyller ett tidigare dikat eller torvproducerat område med vatten, ofta för att återställa det som våtmark eller skapa en ny vattenmiljö.<br><br>Flooding (of a former peat extraction area) means intentionally filling a previously drained or peat extraction site with water, typically to restore it as a wetland or create a new aquatic habitat." },
  
    { fi: "Luontaisesti vähäpuustoinen hiekkadyyni", sv: "Av naturen trädfattig sanddyn", en: "Naturally tree-sparse sand dune", desc: "Luontaisesti vähäpuustoinen hiekkadyyni on hiekkadyyni, jossa puut eivät kasva luonnostaan esimerkiksi tuulen, kuivuuden ja ravinneköyhyyden vuoksi.<br><br>Av naturen trädfattig sanddyn är en sanddyn där träd naturligt inte växer, till exempel på grund av vind, torka och näringsfattig jord.<br><br>  A naturally tree-sparse sand dune is a sand dune where trees do not naturally grow due to factors such as wind, dryness, and poor nutrient conditions." },
  
    { fi: "Ojakatko", sv: "Dikes avbrott", en: "Ditch interruption", desc: "Ojakatko tarkoittaa kohtaa ojassa, jossa veden virtaus katkeaa tai hidastuu esimerkiksi maaston, padon tai muun esteen vuoksi.<br><br>Dikes avbrott betyder en plats i ett dike där vattenflödet avbryts eller bromsas, till exempel på grund av terräng, en vall eller ett hinder.<br><br>  A ditch interruption is a point in a drainage ditch where water flow is stopped or slowed down due to terrain features, a barrier, or other obstacles." },
  
    { fi: "Haihdunta", sv: "Avdunstning", en: "Evaporation", desc: "Haihdunta tarkoittaa prosessia, jossa vesi muuttuu nesteestä kaasuksi ja siirtyy ilmakehään, esimerkiksi järvistä, maaperästä tai kasvien pinnalta.<br><br>Avdunstning betyder processen där vatten övergår från vätska till gas och hamnar i atmosfären, till exempel från sjöar, mark eller växters ytor.<br><br>  Evaporation is the process where water changes from liquid to vapor and enters the atmosphere, for example from lakes, soil, or plant surfaces." },
  
    { fi: "Uudistusalan rajaus", sv: "Avgränsning av förnyelseytan", en: "Regeneration area delineation", desc: "Uudistusalan rajaus tarkoittaa metsätaloudessa sitä, että metsän uudistamiseen varattu alue merkitään ja sen rajat määritellään ennen hakkuuta tai uudistamistoimia.<br><br>Avgränsning av förnyelseytan betyder att man i skogsbruket markerar och bestämmer gränserna för ett område som ska föryngras innan avverkning eller andra åtgärder.<br><br>  Regeneration area delineation means defining and marking the boundaries of a forest area intended for regeneration before logging or other management operations." },
  
    { fi: "Laskuoja", sv: "Avloppsdike", en: "Drainage ditch", desc: "Laskuoja on oja, jonka tehtävänä on johtaa ylimääräinen vesi pois maasta, esimerkiksi pellolta tai metsäalueelta, jotta maaperä pysyy sopivan kuivana.<br><br>Avloppsdike är ett dike som leder bort överskottsvatten från marken, till exempel från åkrar eller skogsområden, så att jorden hålls lagom torr.<br><br>  A drainage ditch is a ditch that removes excess water from land, such as fields or forest areas, to keep the soil properly drained." },
  
    { fi: "Välivarasto", sv: "Avlägg", en: "Intermediate storage (log landing)", desc: "Välivarasto tarkoittaa metsätaloudessa paikkaa, johon puutavaraa kerätään tilapäisesti ennen kuljetusta jatkokäsittelyyn tai tehtaalle.<br><br>Avlägg är en plats i skogsbruket där virke tillfälligt samlas innan det transporteras vidare till förädling eller industri.<br><br>  An intermediate storage (log landing) is a temporary site in forestry where timber is collected before being transported for further processing or to a mill." },
  
    { fi: "Haihduttavan puuston poisto", sv: "Avlägsnande av trädbestånd som genom avdunstning sänker vattennivån", en: "Removal of evapotranspiring trees", desc: "Haihduttavan puuston poisto tarkoittaa toimenpidettä, jossa poistetaan puustoa, joka kuluttaa ja haihduttaa paljon vettä, usein vedenpinnan tai pohjaveden tason hallitsemiseksi.<br><br>Avlägsnande av trädbestånd som genom avdunstning sänker vattennivån innebär att man tar bort träd som förbrukar och avdunstar mycket vatten för att påverka eller höja grundvattennivån eller vattenståndet.<br><br>  Removal of evapotranspiring trees means cutting or removing trees that consume and evaporate large amounts of water, often to influence or manage groundwater or surface water levels." },
  
    { fi: "Valuma-alue", sv: "Avrinningsområde", en: "Catchment area (drainage basin)", desc: "Valuma-alue tarkoittaa aluetta, jolta sade- ja sulamisvedet virtaavat samaan vesistöön, kuten jokeen, järveen tai mereen.<br><br>Avrinningsområde är ett område där allt regn- och smältvatten rinner till samma vattendrag, till exempel en flod, sjö eller hav.<br><br>  A catchment area (drainage basin) is an area where all precipitation and meltwater flows into the same river, lake, or sea." },
  
    { fi: "Karkote", sv: "Avskräckningsmedel", en: "en: Repellent", desc: "Karkote tarkoittaa ainetta tai menetelmää, jolla pyritään estämään eläinten tai hyönteisten pääsy tietylle alueelle tai kasveille, esimerkiksi metsätaloudessa tai puutarhassa.<br><br>Avskräckningsmedel är ett ämne eller en metod som används för att hålla djur eller insekter borta från ett område eller växter, till exempel inom skogsbruk eller trädgård.<br><br>  A repellent is a substance or method used to deter animals or insects from entering a specific area or damaging plants, for example in forestry or gardening." },
  
    { fi: "Syönninestoaine", sv: "Avskräckningsmedel", en: "Feeding deterrent (anti-browsing agent)", desc: "Syönninestoaine on aine, jota levitetään kasveihin tai puihin estämään eläimiä, kuten hirviä tai jäniksiä, syömästä niitä tekemällä ne maultaan tai hajultaan epämiellyttäviksi.<br><br>Avskräckningsmedel är ett ämne som används för att hindra djur från att beta på växter eller träd genom att göra dem oaptitliga eller obehagliga i smak eller lukt.<br><br>  A feeding deterrent (anti-browsing agent) is a substance applied to plants or trees to prevent animals such as deer or hares from eating them by making them taste or smell unpleasant." },
  
    { fi: "Ajouraväli", sv: "Avstånd mellan körstråken", en: "Harvest trail spacing", desc: "Ajouraväli tarkoittaa metsätaloudessa ajourien eli koneiden kulkureittien välistä etäisyyttä hakkuualalla.<br><br>Avstånd mellan körstråken betyder i skogsbruket avståndet mellan körstråk, alltså de spår där skogsmaskiner kör vid avverkning.<br><br>  Skid trail spacing (harvest trail spacing) is the distance between machine tracks in a forest harvest area where logging equipment operates." },
  
    { fi: "Hakkuusopimus", sv: "Avtal om avverkning", en: "Logging contract (timber harvesting agreement)", desc: "Hakkuusopimus on metsänomistajan ja puunostajan tai urakoitsijan välinen sopimus, jossa sovitaan hakkuun toteutuksesta, ehdoista ja korvauksista.<br><br>Avtal om avverkning är ett avtal mellan skogsägaren och virkesköparen eller entreprenören där man kommer överens om hur avverkningen ska utföras, på vilka villkor och med vilken ersättning.<br><br>  A logging contract (timber harvesting agreement) is an agreement between a forest owner and a timber buyer or contractor that defines how logging will be carried out, under what conditions, and for what compensation." },
  
    { fi: "Metsänhoitosopimus", sv: "Avtal om skogsvård", en: "Forest management agreement", desc: "Metsänhoitosopimus on sopimus, jossa metsänomistaja ja palveluntarjoaja sopivat metsän hoitoon liittyvistä toimenpiteistä, kuten taimikonhoidosta, harvennuksista tai lannoituksesta.<br><br>Avtal om skogsvård är ett avtal där skogsägaren och en tjänsteleverantör kommer överens om skogsvårdsåtgärder, såsom plantskogsskötsel, gallring eller gödsling.<br><br>  A forest management agreement is a contract where a forest owner and a service provider agree on forest care activities such as young stand management, thinning, or fertilization." },
  
    { fi: "Hakkuutoimenpide", sv: "Avverkning", en: "Logging operation", desc: "Hakkuutoimenpide tarkoittaa metsänhoidollista toimenpidettä, jossa puita kaadetaan ja poistetaan suunnitellusti esimerkiksi puuntuotannon tai metsän uudistamisen vuoksi.<br><br>Avverkning är en skogsvårdsåtgärd där träd fälls och tas bort planerat, till exempel för virkesproduktion eller föryngring av skogen.<br><br>  A logging operation is a forest management activity where trees are deliberately cut and removed, for example for timber production or forest regeneration." },
  
    { fi: "Siemenpuuhakkuu", sv: "Avverkning i fröträdsställning", en: "Seed tree cutting", desc: "Siemenpuuhakkuu on metsänuudistamismenetelmä, jossa osa puista jätetään siementämään aluetta luonnollista uudistumista varten ja loput puustosta poistetaan.<br><br>Avverkning i fröträdsställning är en föryngringsmetod där vissa träd lämnas kvar för att sprida frön och möjliggöra naturlig föryngring, medan resten av beståndet avverkas.<br><br>  Seed tree cutting is a forest regeneration method where selected trees are left standing to produce seeds for natural regeneration, while the rest of the stand is harvested." },
  
    { fi: "Suojuspuuhakkuu", sv: "Avverkning i skärmställning", en: "Shelterwood cutting", desc: "Suojuspuuhakkuu on metsänuudistusmenetelmä, jossa puustoa poistetaan vaiheittain niin, että osa puista jätetään suojaamaan ja edistämään taimien syntymistä ja kasvua.<br><br>Avverkning i skärmställning är en föryngringsmetod där skogen avverkas stegvis så att en del träd lämnas kvar för att skydda och främja föryngringens etablering och tillväxt.<br><br>  Shelterwood cutting is a forest regeneration method where trees are removed in stages, leaving some overstory trees to protect and support the establishment and growth of new seedlings." },
  
    { fi: "Hakkuulaite", sv: "Avverkningsaggregat", en: "Harvesting head (felling head)", desc: "Hakkuulaite on metsäkoneen osa, joka kaataa puun, karsii oksat ja katkaisee rungon haluttuihin pituuksiin hakkuun aikana.<br><br>Avverkningsaggregat är en del av en skogsmaskin som fäller träd, kvistar dem och kapar stammen i önskade längder under avverkning.<br><br>  A harvesting head (felling head) is a part of a forestry machine that fells trees, removes branches, and cuts the trunk into specified lengths during logging operations." },
  
    { fi: "Hakkuutähde", sv: "GROT", en: "Logging residue", desc: "Hakkuutähde tarkoittaa metsään hakkuun jälkeen jäävää puumateriaalia, kuten oksia, latvuksia ja muuta käyttökelvotonta puuainesta.<br><br>GROT (grenar och toppar) är det material som blir kvar efter avverkning, såsom grenar, toppar och annat virkesavfall i skogen.<br><br>  Logging residue (slash) refers to the leftover material after logging, such as branches, treetops, and other non-merchantable wood." },
  
    { fi: "Hakkuuvuorokausi", sv: "Avverkningsdag", en: "Logging day", desc: "Hakkuuvuorokausi tarkoittaa ajanjaksoa, yleensä yhtä päivää, jonka aikana metsäkoneet tai hakkuutyöryhmä tekee hakkuutyötä tietyllä alueella.<br><br>Avverkningsdag är den dag eller tidsperiod då avverkningsarbete utförs i ett visst område av skogsmaskiner eller ett arbetslag.<br><br>  A logging day is the period, typically one day, during which logging operations are carried out in a specific forest area by machinery or a work crew." },
  
    { fi: "Puunmyyntitulot", sv: "Avverkningsintäkter", en: "Timber sales income", desc: "Puunmyyntitulot tarkoittavat tuloja, jotka saadaan metsätaloudessa myydystä puutavarasta, kuten tukeista tai kuitupuusta.<br><br>Avverkningsintäkter är inkomster som fås från försäljning av virke från skogsbruk, till exempel stock eller massaved.<br><br>  Timber sales income refers to revenue received from selling forest timber, such as logs or pulpwood." },

{ fi: "Hakkuukypsyys", sv: "Avverkningsmognad", en: "Harvest maturity", desc: "Hakkuukypsyys tarkoittaa metsikön kehitysvaihetta, jossa puusto on kasvanut hakkuukelpoiseksi taloudellisesti tai biologisesti.<br><br>Avverkningsmognad är det utvecklingsstadium där ett skogsbestånd har nått lämplig ålder och storlek för avverkning.<br><br>  Harvest maturity is the stage when a forest stand has reached suitable age and size for harvesting, either economically or biologically." },

{ fi: "Hakkuukohde", sv: "Avverkningsobjekt", en: "Harvesting site", desc: "Hakkuukohde on rajattu metsäalue, jossa suoritetaan hakkuutoimenpiteitä.<br><br>Avverkningsobjekt är ett avgränsat skogsområde där avverkning utförs.<br><br>  A harvesting site is a defined forest area where logging operations are carried out." },

{ fi: "Hakkuukertymä", sv: "Avverkningsuttag", en: "Harvest yield", desc: "Hakkuukertymä tarkoittaa hakkuussa saatavan puutavaran määrää.<br><br>Avverkningsuttag är den mängd virke som fås vid en avverkning.<br><br>  Harvest yield refers to the amount of timber obtained from a logging operation." },

{ fi: "Hakkuumäärä", sv: "Avverkningsvolym", en: "Harvest volume", desc: "Hakkuumäärä tarkoittaa kokonaismäärää puuta, joka poistetaan metsästä tietyssä hakkuussa.<br><br>Avverkningsvolym är den totala volymen virke som avlägsnas vid en avverkning.<br><br>  Harvest volume is the total amount of timber removed during a logging operation." },
  
    { fi: "Hakkuuarvo", sv: "Avverkningsvärde", en: "Logging value", desc: "Hakkuuarvo tarkoittaa metsiköstä hakkuussa saatavan puutavaran taloudellista arvoa.<br><br>Avverkningsvärde är det ekonomiska värdet av det virke som fås vid en avverkning.<br><br>  Logging value refers to the monetary value of timber obtained from a harvesting operation." },

{ fi: "Hakkuualue", sv: "Avverkningsyta", en: "Harvesting area", desc: "Hakkuualue on metsän osa, jolla hakkuutoimenpiteet suoritetaan.<br><br>Avverkningsyta är det skogsområde där avverkning utförs.<br><br>  A harvesting area is a part of the forest where logging operations are carried out." },

{ fi: "Paali", sv: "Bal", en: "Bale", desc: "Paali tarkoittaa tiiviiksi puristettua ja sidottua materiaalia, kuten heinää, olkea tai kuitupuuta kuljetusta varten.<br><br>Bal är ett hårt pressat och bundet paket av material, till exempel hö, halm eller fiberråvara för transport.<br><br>  A bale is a compacted and tied bundle of material such as hay, straw, or fiber used for transport or storage." },

{ fi: "Kaarna", sv: "Bark", en: "Bark", desc: "Kaarna on puun ulompi, usein kuollut ja suojaava pintakerros, joka suojaa puuta ulkoisilta vaurioilta.<br><br>Bark är det yttersta skyddande lagret på ett träd som skyddar mot skador och yttre påverkan.<br><br>  Bark is the outer protective layer of a tree that shields it from external damage and environmental stress." },

{ fi: "Kuori", sv: "Bark", en: "Bark", desc: "Kuori tarkoittaa puun ulkopintaa, joka suojaa sisempiä osia ja voi irrota luonnollisesti tai käsittelyssä.<br><br>Bark är det yttre lagret på ett träd som skyddar de inre delarna och kan lossna naturligt eller vid bearbetning.<br><br>  Bark is the outer layer of a tree that protects the inner tissues and may naturally or mechanically detach." },
    { fi: "Kaarnakuoriaiset", sv: "Barkborrar", en: "Bark beetles", desc: "Kaarnakuoriaiset ovat pieniä kovakuoriaisia, jotka elävät puiden kuoren alla ja voivat aiheuttaa merkittäviä metsätuhoja kaivertamalla käytäviä puuhun.<br><br>Barkborrar är små skalbaggar som lever under trädens bark och kan orsaka stora skador genom att borra gångar i veden.<br><br>  Bark beetles are small insects that live under tree bark and can cause significant forest damage by tunneling through wood." },

{ fi: "Neulanen", sv: "Barr", en: "Needle", desc: "Neulanen tarkoittaa havupuun lehteä, joka on kapea ja neulamainen, ja pysyy puussa useita vuosia.<br><br>Barr är ett barrträdblad som är smalt och nålformat och kan sitta kvar på trädet i flera år.<br><br>  A needle is the narrow, needle-like leaf of a conifer tree that often remains on the tree for several years." },

{ fi: "Neulasanalyysi", sv: "Barranalys", en: "Needle analysis", desc: "Neulasanalyysi on menetelmä, jossa havupuiden neulasista tutkitaan ravinnepitoisuuksia puun terveydentilan arvioimiseksi.<br><br>Barranalys är en metod där man analyserar näringsinnehållet i barr för att bedöma trädens hälsa.<br><br>  Needle analysis is a method where the nutrient content of conifer needles is examined to assess tree health." },

{ fi: "Havumetsä", sv: "Barrskog", en: "Coniferous forest", desc: "Havumetsä on metsätyyppi, jossa pääasiallisina puulajeina ovat havupuut, kuten kuusi ja mänty.<br><br>Barrskog är en skogstyp där de dominerande träden är barrträd som gran och tall.<br><br>  A coniferous forest is a forest dominated by conifer trees such as spruce and pine." },

{ fi: "Havununna", sv: "Barrskogsnunna", en: "Conifer sawfly", desc: "Havununna on hyönteinen, jonka toukat voivat syödä havupuiden neulasia ja aiheuttaa metsätuhoja.<br><br>Barrskogsnunna är en insekt vars larver kan äta barr på barrträd och orsaka skador i skogen.<br><br>  The conifer sawfly is an insect whose larvae feed on conifer needles and can cause forest damage." },

{ fi: "Havupuu", sv: "Barrträd", en: "Conifer", desc: "Havupuu on puulaji, jolla on neulasmaiset lehdet ja joka tuottaa yleensä käpyjä siementen leviämistä varten.<br><br>Barrträd är en trädtyp med nållika blad som vanligtvis producerar kottar för spridning av frön.<br><br>  A conifer is a type of tree with needle-like leaves that typically produces cones for seed dispersal." },
    { fi: "Syyshaavakkasieni", sv: "Barrträdskräfta", en: "Conifer canker fungus", desc: "Syyshaavakkasieni on sienitauti, joka aiheuttaa vaurioita havupuiden rungoissa ja oksissa, muodostaen kuolleita tai kuorettomia alueita.<br><br>Barrträdskräfta är en svampsjukdom som orsakar skador på barrträdens stammar och grenar och bildar döda eller barklösa områden.<br><br>  Conifer canker fungus is a fungal disease that damages the stems and branches of conifer trees, forming dead or barkless areas." },

{ fi: "Metsänkäsittely", sv: "Behandling av skogar", en: "Forest management", desc: "Metsänkäsittely tarkoittaa kaikkia toimenpiteitä, joilla metsää hoidetaan, kuten hakkuut, istutus, harvennus ja lannoitus.<br><br>Behandling av skogar innebär alla åtgärder som används för att sköta skog, såsom avverkning, plantering, gallring och gödsling.<br><br>  Forest management refers to all actions used to care for forests, such as logging, planting, thinning, and fertilization." },

{ fi: "Käsittelyalue", sv: "Behandlingsyta", en: "Management area", desc: "Käsittelyalue on rajattu metsäalue, jolla tehdään tiettyjä metsänhoitotoimenpiteitä.<br><br>Behandlingsyta är ett avgränsat skogsområde där specifika skogsvårdsåtgärder utförs.<br><br>  A management area is a defined forest area where specific forest treatment operations are carried out." },

{ fi: "Välipuu", sv: "Behärskade träd", en: "Intermediate tree", desc: "Välipuu tarkoittaa metsikössä puuta, joka sijoittuu valtapuiden ja alikasvoksen väliin kilpailuasemaltaan ja kasvultaan.<br><br>Behärskade träd är träd i ett bestånd som har en mellanställning mellan dominerande träd och undervegetation.<br><br>  An intermediate tree is a tree in a stand that occupies a position between dominant trees and suppressed understory trees." },

{ fi: "Torjunta-aine", sv: "Bekämpningsmedel", en: "Pesticide", desc: "Torjunta-aine on aine, jota käytetään tuhohyönteisten, tautien tai rikkakasvien torjumiseen maataloudessa ja metsätaloudessa.<br><br>Bekämpningsmedel är ett ämne som används för att bekämpa skadedjur, sjukdomar eller ogräs inom jord- och skogsbruk.<br><br>  A pesticide is a substance used to control pests, diseases, or weeds in agriculture and forestry." },
  
    { fi: "Kiintoainekuormitus", sv: "Belastning av fasta partiklar", en: "Sediment load", desc: "Kiintoainekuormitus tarkoittaa veteen joutuvaa kiinteää ainesta, kuten maahiukkasia, joka kulkeutuu esimerkiksi valunnan mukana vesistöihin.<br><br>Belastning av fasta partiklar innebär att fasta partiklar som jord och sediment transporteras till vattendrag med vattenflöden.<br><br>  Sediment load refers to the amount of solid particles, such as soil and sediment, carried into water bodies by runoff or erosion." },

{ fi: "Metallikuormitus", sv: "Belastning av metaller", en: "Metal load", desc: "Metallikuormitus tarkoittaa ympäristöön, erityisesti vesistöihin, päätyviä metalleja, jotka voivat olla haitallisia eliöille suurina pitoisuuksina.<br><br>Belastning av metaller innebär att metaller tillförs miljön, särskilt vattendrag, där de kan vara skadliga för organismer.<br><br>  Metal load refers to the release of metals into the environment, especially water bodies, where they may be harmful to organisms at high concentrations." },

{ fi: "Ravinnekuormitus", sv: "Belastning av näringsämnen", en: "Nutrient load", desc: "Ravinnekuormitus tarkoittaa ylimääräisten ravinteiden, kuten typen ja fosforin, päätymistä vesistöihin, mikä voi aiheuttaa rehevöitymistä.<br><br>Belastning av näringsämnen innebär att överskott av näringsämnen, som kväve och fosfor, hamnar i vattendrag och kan orsaka övergödning.<br><br>  Nutrient load refers to excess nutrients such as nitrogen and phosphorus entering water bodies, potentially causing eutrophication." },

{ fi: "Vesistökuormitus", sv: "Belastning på vattendrag", en: "Water body load", desc: "Vesistökuormitus tarkoittaa kaikkia aineita ja vaikutuksia, jotka heikentävät vesistöjen tilaa, kuten ravinteita, kiintoaineita ja haitta-aineita.<br><br>Belastning på vattendrag innebär alla ämnen och påverkan som försämrar vattenkvaliteten, såsom näringsämnen, partiklar och föroreningar.<br><br>  Water body load refers to all substances and impacts that degrade the condition of water bodies, such as nutrients, solids, and pollutants." },

{ fi: "Happamuuskuormitus", sv: "Belastning som bidrar till försurning", en: "Acid load", desc: "Happamuuskuormitus tarkoittaa ympäristöön tulevaa happamoittavaa kuormitusta, joka laskee maaperän tai vesistöjen pH-arvoa.<br><br>Belastning som bidrar till försurning innebär tillförsel av ämnen som gör mark eller vatten surare genom att sänka pH-värdet.<br><br>  Acid load refers to the input of acidifying substances into the environment, lowering the pH of soil or water bodies." },
  
    { fi: "Lahoalttius", sv: "Benägenhet för röta", en: "Susceptibility to rot", desc: "Lahoalttius tarkoittaa puun tai puuston taipumusta lahota eli altistua sienien ja mikrobien aiheuttamalle hajoamiselle.<br><br>Benägenhet för röta innebär hur känsligt trä eller skog är för att drabbas av röta orsakad av svampar och mikroorganismer.<br><br>  Susceptibility to rot refers to how prone wood or trees are to decay caused by fungi and microorganisms." },

{ fi: "Kallio", sv: "Berg", en: "Bedrock", desc: "Kallio tarkoittaa maanpinnan kovaa peruskalliota, joka muodostuu kiinteästä kivilajista ja toimii maaperän perustana.<br><br>Berg är det hårda underlaget i marken som består av fast bergart och utgör grunden för jordlagren.<br><br>  Bedrock is the solid rock layer beneath soil and loose material, forming the foundation of the ground surface." },

{ fi: "Kalliokko", sv: "Berghäll", en: "Rock outcrop", desc: "Kalliokko on alue, jossa kallio on paljastunut maan pinnalle ilman merkittävää maapeitettä.<br><br>Berghäll är ett område där berggrunden är synlig vid markytan utan större jordtäcke.<br><br>  A rock outcrop is an area where bedrock is exposed at the surface with little or no soil cover." },

{ fi: "Metsittäminen", sv: "Beskogning", en: "Afforestation", desc: "Metsittäminen tarkoittaa puiden istuttamista tai luonnollisen metsän syntymisen edistämistä alueelle, jossa ei aiemmin ole kasvanut metsää.<br><br>Beskogning innebär att man planterar träd eller främjar naturlig skogstillväxt på ett område som tidigare inte varit skog.<br><br>  Afforestation is the process of establishing forest on land that has not previously been forested, either by planting or natural regeneration." },

{ fi: "Uudistamispäätös", sv: "Beslut att förnya skogen", en: "Reforestation decision", desc: "Uudistamispäätös on metsänomistajan tai toimijan tekemä päätös siitä, että metsä uudistetaan hakkuun jälkeen joko istuttamalla tai luonnollisesti.<br><br>Beslut att förnya skogen är ett beslut om att föryngra skogen efter avverkning genom plantering eller naturlig föryngring.<br><br>  A reforestation decision is a decision to regenerate a forest after harvesting, either through planting or natural regeneration." },
  
    { fi: "Elpymiskykyinen puusto", sv: "Bestånd som reagerar på gallringen", en: "Responsive forest stand", desc: "Elpymiskykyinen puusto tarkoittaa metsikköä, joka pystyy reagoimaan harvennukseen nopeuttamalla kasvuaan ja parantamalla laatuaan vapautuneen kasvutilan ansiosta.<br><br>Bestånd som reagerar på gallringen är ett skogsbestånd som svarar på gallring genom ökad tillväxt och förbättrad kvalitet tack vare mer växtutrymme.<br><br>  A responsive forest stand is a stand that responds to thinning by increasing growth and improving quality due to released growing space." },

{ fi: "Metsikön keski-ikä", sv: "Beståndets medelålder", en: "Mean stand age", desc: "Metsikön keski-ikä tarkoittaa puuston keskimääräistä ikää tietyllä metsikköalueella.<br><br>Beståndets medelålder är den genomsnittliga åldern på träden i ett skogsbestånd.<br><br>  Mean stand age is the average age of trees within a forest stand." },

{ fi: "Puuston epätasaisuus", sv: "Beståndets ojämnhet", en: "Stand variability", desc: "Puuston epätasaisuus tarkoittaa sitä, kuinka paljon puusto vaihtelee esimerkiksi koon, iän tai tiheyden suhteen samassa metsikössä.<br><br>Beståndets ojämnhet beskriver hur mycket ett skogsbestånd varierar i till exempel storlek, ålder eller täthet.<br><br>  Stand variability refers to how much a forest stand varies in characteristics such as tree size, age, or density." },

{ fi: "Metsän suhteellinen arvokasvu", sv: "Beståndets relativa värdetillväxt", en: "Relative value growth of forest stand", desc: "Metsän suhteellinen arvokasvu tarkoittaa puuston arvon kasvua suhteessa sen nykyiseen arvoon tietyn ajanjakson aikana.<br><br>Beståndets relativa värdetillväxt är ökningen av ett skogsbestånds värde i förhållande till dess nuvarande värde över en viss tid.<br><br>  Relative value growth of a forest stand refers to the increase in the stand’s value relative to its current value over a given period." },
  
    { fi: "Puuston tilajärjestys", sv: "Beståndets rumsliga fördelning", en: "Spatial structure of a stand", desc: "Puuston tilajärjestys tarkoittaa sitä, miten puut ovat sijoittuneet tilassa metsikössä, esimerkiksi tasaisesti, ryhmissä tai epätasaisesti.<br><br>Beståndets rumsliga fördelning beskriver hur träden är fördelade i rummet inom ett skogsbestånd, till exempel jämnt, i grupper eller ojämnt.<br><br>  Spatial structure of a stand refers to how trees are distributed in space within a forest stand, such as evenly, in clusters, or irregularly." },

{ fi: "Puuston kehitysennuste", sv: "Beståndets utvecklingsprognos", en: "Stand development forecast", desc: "Puuston kehitysennuste tarkoittaa arviota siitä, miten metsikön puusto kasvaa ja kehittyy tulevaisuudessa erilaisten kasvumallien perusteella.<br><br>Beståndets utvecklingsprognos är en uppskattning av hur ett skogsbestånd kommer att växa och utvecklas i framtiden baserat på tillväxtmodeller.<br><br>  A stand development forecast is an estimate of how a forest stand will grow and develop in the future based on growth models." },

{ fi: "Runkotilavuus", sv: "Beståndets volym", en: "Stem volume", desc: "Runkotilavuus tarkoittaa puuston rungon puuaineksen kokonaismäärää, yleensä kuutiometreinä mitattuna.<br><br>Beståndets volym avser den totala volymen virke i ett skogsbestånd, vanligtvis mätt i kubikmeter.<br><br>  Stem volume refers to the total amount of wood in the stems of trees, typically measured in cubic meters." },

{ fi: "Taimikon perustamistoimenpiteet", sv: "Beståndsanläggningsåtgärder", en: "Regeneration establishment measures", desc: "Taimikon perustamistoimenpiteet tarkoittavat kaikkia toimia, joilla uusi metsä saadaan aikaan, kuten istutus, kylvö ja maanmuokkaus.<br><br>Beståndsanläggningsåtgärder innebär alla åtgärder som används för att etablera ett nytt skogsbestånd, såsom plantering, sådd och markberedning.<br><br>  Regeneration establishment measures are all actions used to create a new forest stand, such as planting, sowing, and site preparation." },

{ fi: "Metsikkökuvio", sv: "Beståndsfigur", en: "Forest stand compartment", desc: "Metsikkökuvio tarkoittaa metsäsuunnittelussa rajattua yhtenäistä metsäaluetta, jota käsitellään yhtenä kokonaisuutena.<br><br>Beståndsfigur är ett avgränsat enhetligt skogsområde som behandlas som en helhet i skogsplanering.<br><br>  A forest stand compartment is a defined, uniform forest area that is managed as a single unit in forest planning." },
  
    { fi: "Luonnonsiemen", sv: "Beståndsfrö", en: "Natural seed", desc: "Luonnonsiemen tarkoittaa puun siementä, joka syntyy ja leviää luonnollisesti ilman ihmisen kylvöä tai istutusta.<br><br>Beståndsfrö är frö som bildas och sprids naturligt från träd i ett bestånd utan mänsklig sådd eller plantering.<br><br>  Natural seed refers to seed produced and dispersed naturally by trees without human sowing or planting." },

{ fi: "Puustotunnus", sv: "Beståndskaraktäristika", en: "Stand characteristic", desc: "Puustotunnus tarkoittaa metsikön puustoa kuvaavaa ominaisuutta, kuten puuston keskipituutta, tiheyttä tai tilavuutta.<br><br>Beståndskaraktäristika är en egenskap som beskriver ett skogsbestånd, till exempel medelhöjd, täthet eller volym.<br><br>  A stand characteristic is a feature describing a forest stand, such as average height, density, or volume." },

{ fi: "Puustorakenne", sv: "Beståndsstruktur", en: "Stand structure", desc: "Puustorakenne tarkoittaa metsikön puuston rakennetta, kuten puiden jakautumista eri koko- ja ikäluokkiin.<br><br>Beståndsstruktur beskriver hur träden i ett skogsbestånd är fördelade i olika storleks- och åldersklasser.<br><br>  Stand structure refers to the arrangement of trees in a forest stand, such as their distribution across size and age classes." },

{ fi: "Kasvatustiheys", sv: "Beståndstäthet", en: "Stand density", desc: "Kasvatustiheys tarkoittaa puuston tiheyttä tietyllä alueella, eli kuinka paljon puita kasvaa suhteessa pinta-alaan.<br><br>Beståndstäthet är hur tätt träd växer i ett område i förhållande till arealen.<br><br>  Stand density refers to how densely trees grow in an area relative to its surface area." },

{ fi: "Metsikkötalous", sv: "Beståndsvis skogsvård", en: "Stand-level forestry management", desc: "Metsikkötalous tarkoittaa metsänhoitoa, jossa metsää käsitellään ja suunnitellaan metsikkökohtaisesti sen ominaisuuksien mukaan.<br><br>Beståndsvis skogsvård innebär att skog sköts och planeras på beståndsnivå utifrån dess egenskaper.<br><br>  Stand-level forestry management refers to managing and planning forests at the stand level based on the characteristics of each stand." },
  
    { fi: "Tasaikäiskasvatus", sv: "Beståndsvård trädskiktsvis", en: "Even-aged forestry", desc: "Tasaikäiskasvatus tarkoittaa metsänhoitomenetelmää, jossa metsikkö kasvatetaan tasakokoisena ja suunnilleen saman ikäisenä puustona.<br><br>Beståndsvård trädskiktsvis innebär en skötselmetod där skogen odlas som ett jämnåldrigt bestånd i samma utvecklingsfas.<br><br>  Even-aged forestry is a silvicultural system where forest stands are managed to consist of trees of similar age and size." },

{ fi: "Jaksollinen metsänkasvatus", sv: "Beståndsvård trädskiktsvis", en: "Even-aged stand management system", desc: "Jaksollinen metsänkasvatus tarkoittaa metsänhoitoa, jossa metsän kehitys etenee selkeinä vaiheina taimesta uudistuskypsään metsään.<br><br>Beståndsvård trädskiktsvis är en skötselmetod där skogens utveckling sker i tydliga faser från ungskog till mogen skog.<br><br>  The even-aged stand management system is a forestry method where forest development progresses in clear stages from regeneration to mature forest." },

{ fi: "Kasvatushakkuu", sv: "Beståndsvårdande avverkning", en: "Thinning harvest", desc: "Kasvatushakkuu tarkoittaa hakkuuta, jossa poistetaan osa puustosta jäljelle jäävän metsän kasvun ja laadun parantamiseksi.<br><br>Beståndsvårdande avverkning innebär avverkning där en del av träden tas bort för att förbättra tillväxt och kvalitet hos kvarvarande skog.<br><br>  A thinning harvest is a cutting operation where part of the trees are removed to improve the growth and quality of the remaining stand." },

{ fi: "Kasvatusvaihe", sv: "Beståndsvårdande fas", en: "Growth stage", desc: "Kasvatusvaihe tarkoittaa metsän kehitysvaihetta, jossa puusto kasvaa aktiivisesti harvennusten ja hoitotoimenpiteiden avulla.<br><br>Beståndsvårdande fas är det utvecklingsstadium där skogen växer aktivt med hjälp av gallringar och skötselåtgärder.<br><br>  A growth stage is a forest development phase where trees actively grow with the help of thinning and management operations." },

{ fi: "Poistovelvoite", sv: "Bestämmelse om borttransport", en: "Removal obligation", desc: "Poistovelvoite tarkoittaa vaatimusta, että hakkuussa syntyvä puutavara tai jäte on kuljetettava pois metsäalueelta tai käsiteltävä määräysten mukaisesti.<br><br>Bestämmelse om borttransport är ett krav på att virke eller avfall från avverkning ska transporteras bort från skogsområdet eller hanteras enligt regler.<br><br>  A removal obligation is a requirement that timber or residues from logging must be transported away from the forest area or handled according to regulations." },
  
    { fi: "Puuston hiilensidonta", sv: "Bindning av kol", en: "Carbon sequestration in trees", desc: "Puuston hiilensidonta tarkoittaa prosessia, jossa puut sitovat ilmakehän hiilidioksidia ja varastoivat hiiltä biomassaansa, kuten runkoihin, juuriin ja lehtiin.<br><br>Bindning av kol innebär att träd tar upp koldioxid från atmosfären och lagrar kolet i sin biomassa, såsom stam, rötter och blad.<br><br>  Carbon sequestration in trees is the process where trees absorb carbon dioxide from the atmosphere and store carbon in their biomass, such as trunks, roots, and leaves." },

{ fi: "Koivu", sv: "Björk", en: "Birch", desc: "Koivu on lehtipuu, joka kasvaa laajasti pohjoisilla alueilla ja tunnetaan valkeasta kaarnastaan ja nopeasta kasvustaan.<br><br>Björk är ett lövträd som växer i nordliga områden och är känt för sin vita bark och snabba tillväxt.<br><br>  Birch is a deciduous tree widely found in northern regions, known for its white bark and fast growth." },

{ fi: "Ruskotäpläkärpänen", sv: "Björkbastfluga", en: "Birch leaf miner fly", desc: "Ruskotäpläkärpänen on hyönteinen, jonka toukat kaivautuvat koivun kuoriin ja aiheuttavat ruskeita käytäviä puuhun.<br><br>Björkbastfluga är en insekt vars larver lever i björkbarken och orsakar bruna gångar i veden.<br><br>  The birch leaf miner fly is an insect whose larvae live in birch bark and cause brown passages in the wood." },

{ fi: "Koivikko", sv: "Björkbestånd", en: "Birch stand", desc: "Koivikko on metsäalue, jossa koivu on vallitseva puulaji.<br><br>Björkbestånd är ett skogsområde där björk är det dominerande trädslaget.<br><br>  A birch stand is a forest area dominated by birch trees." },

{ fi: "Koivulettokorpi", sv: "Björkbrunmosskärr", en: "Birch fen swamp forest", desc: "Koivulettokorpi on kostea metsätyyppi, jossa kasvaa koivuja ja esiintyy runsasravinteisia soistuneita alueita.<br><br>Björkbrunmosskärr är en fuktig skogstyp med björk där näringsrika kärrmarker förekommer.<br><br>  A birch fen swamp forest is a moist forest type dominated by birch trees with nutrient-rich wetland conditions." },
  
    { fi: "Nuokkutalvikki", sv: "Björkpyrola", en: "Nodding wintergreen", desc: "Nuokkutalvikki on pieni varpu, joka kasvaa happamissa kangasmetsissä ja jonka vaaleanvihreät lehdet muistuttavat talvikkiä.<br><br>Björkpyrola är en liten växt som växer i sura skogar och har ljusgröna blad som liknar vintergröna växter.<br><br>  Nodding wintergreen is a small plant found in acidic forest habitats, with pale green leaves resembling wintergreens." },

{ fi: "Korpikarhunsammal", sv: "Björnmossa", en: "Bear moss (haircap moss)", desc: "Korpikarhunsammal on sammallaji, joka kasvaa kosteissa ja varjoisissa metsäympäristöissä ja muodostaa tiheitä sammalkasvustoja.<br><br>Björnmossa är en mossart som växer i fuktiga och skuggiga skogsmiljöer och bildar täta mossmattor.<br><br>  Bear moss (haircap moss) is a moss species found in moist, shaded forest environments, forming dense moss carpets." },

{ fi: "Sekametsikkö", sv: "Blandbestånd", en: "Mixed forest stand", desc: "Sekametsikkö on metsä, jossa kasvaa useita eri puulajeja sekoittuneina samassa metsikössä.<br><br>Blandbestånd är ett skogsbestånd där flera olika trädslag växer tillsammans i samma område.<br><br>  A mixed forest stand is a forest area where multiple tree species grow together in the same stand." },

{ fi: "Puulajisekoitus", sv: "Blandning av olika trädslag", en: "Tree species mixture", desc: "Puulajisekoitus tarkoittaa eri puulajien esiintymistä samassa metsässä tai istutuksessa yhdessä.<br><br>Blandning av olika trädslag innebär att flera trädslag förekommer tillsammans i samma skog eller plantering.<br><br>  Tree species mixture refers to the presence of multiple tree species growing together in the same forest or plantation." },

{ fi: "Sekaistutus", sv: "Blandplantering", en: "Mixed planting", desc: "Sekaistutus tarkoittaa metsän uudistamista istuttamalla useita eri puulajeja samalle alueelle.<br><br>Blandplantering innebär att man planterar flera olika trädslag på samma område vid skogsodling.<br><br>  Mixed planting is the practice of planting multiple tree species together in the same area during forest regeneration." },
  
    { fi: "Sekapuusto", sv: "Blandskog", en: "Mixed forest", desc: "Sekapuusto tarkoittaa metsää, jossa kasvaa useita eri puulajeja samassa puustossa ilman yhtä selvästi hallitsevaa lajia.<br><br>Blandskog är en skog där flera olika trädslag växer tillsammans utan att ett enda dominerar tydligt.<br><br>  Mixed forest is a forest where several tree species grow together without one clearly dominating the stand." },

{ fi: "Sekapuu", sv: "Blandträd", en: "Mixed tree", desc: "Sekapuu tarkoittaa yksittäistä puuta sekametsässä tai metsikössä, jossa kasvaa useita eri puulajeja.<br><br>Blandträd är ett enskilt träd i en blandskog där flera olika trädslag förekommer.<br><br>  A mixed tree is an individual tree growing in a mixed forest containing multiple tree species." },

{ fi: "Louhikko", sv: "Blockfält", en: "Rocky field", desc: "Louhikko on kivinen alue, jossa maan pinnalla on suuria kiviä tai lohkareita, mikä vaikeuttaa kasvillisuuden kasvua.<br><br>Blockfält är ett stenigt område där stora stenar eller block täcker markytan och försvårar växtlighet.<br><br>  A rocky field is an area covered with large stones or boulders on the soil surface, making vegetation growth difficult." },

{ fi: "Kukka", sv: "Blomma", en: "Flower", desc: "Kukka on kasvin lisääntymiselin, joka tuottaa siemeniä ja houkuttelee pölyttäjiä.<br><br>Blomma är växtens fortplantningsorgan som producerar frön och lockar pollinatörer.<br><br>  A flower is the reproductive structure of a plant that produces seeds and attracts pollinators." },

{ fi: "Mustikka", sv: "Blåbär", en: "Blueberry", desc: "Mustikka on varpu, joka kasvaa happamissa kangasmetsissä ja tuottaa syötäviä sinisiä marjoja.<br><br>Blåbär är en risväxt som växer i sura skogar och producerar ätliga blå bär.<br><br>  Blueberry is a shrub that grows in acidic forests and produces edible blue berries." },
  
    { fi: "Mustikkaturvekangas", sv: "Blåbärstorvmo", en: "Bilberry peat forest site", desc: "Mustikkaturvekangas on metsätyyppi, jossa yhdistyvät mustikkatyypin kangasmetsän ja turvemaiden piirteet, ja jossa kasvillisuus on kostean ja ravinteisuustasoltaan vaihtelevan ympäristön mukaista.<br><br>Blåbärstorvmo är en skogstyp som kombinerar egenskaper från blåbärsmarker och torvmarker med fuktig och varierande näringsmiljö.<br><br>  A bilberry peat forest site is a forest type combining characteristics of bilberry-dominated mineral soils and peatlands, with moist and variable nutrient conditions." },

{ fi: "Verinahakka", sv: "Blödskinn", en: "Bleeding crust fungus", desc: "Verinahakka on puussa kasvava kääväkkäsieni, joka muodostaa punertavia tai verimäisiä rihmastoja ja voi aiheuttaa puun lahovaurioita.<br><br>Blödskinn är en vedlevande svamp som bildar rödaktiga, blodliknande strukturer och kan orsaka röta i trä.<br><br>  Bleeding crust fungus is a wood-inhabiting fungus that forms reddish, blood-like growths and can cause wood decay." },

{ fi: "Pohjoinen havumetsävyöhyke", sv: "Boreal barrträdszon", en: "Boreal coniferous zone", desc: "Pohjoinen havumetsävyöhyke on maapallon metsävyöhyke, jota hallitsevat havupuut kuten kuusi ja mänty kylmässä ilmastossa.<br><br>Boreal barrträdszon är ett globalt skogsbälte dominerat av barrträd i ett kallt klimat.<br><br>  The boreal coniferous zone is a global forest zone dominated by conifer trees such as spruce and pine in a cold climate." },

{ fi: "Piikkisiipikaira", sv: "Borr med vilken man mäter torvens skärhållfasthet", en: "Peat shear vane probe", desc: "Piikkisiipikaira on mittauslaite, jolla tutkitaan turpeen tai pehmeän maaperän leikkauslujuutta pyörittämällä siipimäistä anturia maassa.<br><br>Borr med vilken man mäter torvens skärhållfasthet är ett instrument som används för att mäta torvens skjuvhållfasthet genom att rotera en vinge i marken.<br><br>  A peat shear vane probe is a measuring device used to determine the shear strength of peat or soft soils by rotating a vane in the ground." },

{ fi: "Pesäpuu", sv: "Boträd", en: "Nest tree", desc: "Pesäpuu on puu, johon linnut tai muut eläimet rakentavat pesänsä, usein korkean ja suojaavan sijainnin vuoksi.<br><br>Boträd är ett träd där fåglar eller andra djur bygger sina bon, ofta på en hög och skyddad plats.<br><br>  A nest tree is a tree where birds or other animals build their nests, often due to its height and protective location." },
  
    { fi: "Pohjakerros", sv: "Bottenskikt", en: "Ground layer", desc: "Pohjakerros tarkoittaa metsän alimmaista kasvillisuuskerrosta, joka koostuu esimerkiksi sammalista ja jäkälistä.<br><br>Bottenskikt är det nedersta växtskiktet i skogen och består till exempel av mossor och lavar.<br><br>  The ground layer is the lowest vegetation layer in a forest, consisting for example of mosses and lichens." },

{ fi: "Paatsama", sv: "Brakved", en: "Alder buckthorn", desc: "Paatsama on pensasmainen kasvi, joka kasvaa kosteissa metsissä ja tuottaa pieniä marjamaisia hedelmiä, jotka ovat myrkyllisiä raakana.<br><br>Brakved är en busklik växt som växer i fuktiga skogar och har små bärliknande frukter som är giftiga när de är omogna.<br><br>  Alder buckthorn is a shrub-like plant that grows in moist forests and produces small berry-like fruits that are toxic when unripe." },

{ fi: "Metsäpalovaara", sv: "Brandfara", en: "Fire hazard", desc: "Metsäpalovaara tarkoittaa tilannetta, jossa metsässä on korkea riski syttyä palamaan esimerkiksi kuivuuden tai kuumuuden vuoksi.<br><br>Brandfara innebär en situation där det finns hög risk för skogsbrand, till exempel på grund av torka eller värme.<br><br>  Fire hazard refers to conditions where there is a high risk of forest fire, for example due to drought or heat." },

{ fi: "Metsäpaloriski", sv: "Brandrisk", en: "Wildfire risk", desc: "Metsäpaloriski tarkoittaa todennäköisyyttä sille, että metsäpalo syttyy tietyssä paikassa ja ajassa.<br><br>Brandrisk är sannolikheten för att en skogsbrand ska uppstå i ett visst område vid en viss tid.<br><br>  Wildfire risk is the probability of a forest fire occurring in a specific area at a given time." },

{ fi: "Metsäpalonsammutus", sv: "Brandsläckning", en: "Firefighting", desc: "Metsäpalonsammutus tarkoittaa toimenpiteitä, joilla pyritään sammuttamaan tai rajoittamaan metsäpaloa.<br><br>Brandsläckning innebär åtgärder för att släcka eller begränsa en skogsbrand.<br><br>Firefighting refers to actions taken to extinguish or control a forest fire." },
  
    { fi: "Ajouraleveys", sv: "Bredden på körstråken", en: "Harvest trail width", desc: "Ajouraleveys tarkoittaa metsäkoneiden ajouran leveyttä, eli sitä kuinka leveä kulkureitti on hakkuualalla.<br><br>Bredden på körstråken är hur breda körvägarna i skogen är där skogsmaskiner rör sig vid avverkning.<br><br>Harvest trail width refers to the width of machine tracks in a forest where logging equipment operates." },

{ fi: "Ruskea hake", sv: "Brunflis", en: "Brown wood chips", desc: "Ruskea hake tarkoittaa haketta, joka on valmistettu osittain maatuneesta tai kuorellisesta puuaineksesta ja on väriltään tummempaa kuin vaalea hake.<br><br>Brunflis är flis som tillverkats av delvis nedbrutet eller barkrikt virke och har en mörkare färg än vanlig ljus flis.<br><br>  Brown wood chips are chips made from partially decayed or bark-rich wood, giving them a darker color than standard wood chips." },

{ fi: "Ruskomaannos", sv: "Brunjord", en: "Brown earth soil", desc: "Ruskomaannos on ravinteikas metsämaannos, jossa orgaaninen aines hajoaa nopeasti ja ravinteet kiertävät tehokkaasti.<br><br>Brunjord är en näringsrik skogsjord där organiskt material bryts ner snabbt och näringsämnen cirkulerar effektivt.<br><br>  Brown earth soil is a fertile forest soil type where organic matter decomposes rapidly and nutrients cycle efficiently." },

{ fi: "Letto", sv: "Brunmosse", en: "Rich fen", desc: "Letto on runsasravinteinen suotyyppi, jossa kasvaa monipuolista kasvillisuutta ja maaperä on kalkkipitoisempi kuin tavallisissa soissa.<br><br>Brunmosse är en näringsrik mosse med varierad vegetation och mer kalkrik jord än vanliga mossar.<br><br>  A rich fen is a nutrient-rich wetland type with diverse vegetation and more mineral-rich conditions than typical bogs." },

{ fi: "Kaivo", sv: "Brunn", en: "Well", desc: "Kaivo on ihmisen rakentama tai luonnollinen vesilähde, josta saadaan pohjavettä käyttöön.<br><br>Brunn är en anläggning eller naturlig källa där grundvatten tas upp för användning.<br><br>  A well is a constructed or natural water source used to access groundwater." },
  
    { fi: "Reikäperkaus", sv: "Brunnsröjning", en: "Spot clearing", desc: "Reikäperkaus tarkoittaa taimikonhoitoa, jossa poistetaan kilpailevaa kasvillisuutta vain yksittäisten taimien ympäriltä kasvutilan parantamiseksi.<br><br>Brunnsröjning innebär röjning där konkurrerande vegetation tas bort runt enskilda plantor för att förbättra deras tillväxtutrymme.<br><br>  Spot clearing is a type of vegetation management where competing plants are removed only around individual seedlings to improve their growing space." },

{ fi: "Rinnankorkeusläpimitta", sv: "Brösthöjdsdiameter", en: "Diameter at breast height (DBH)", desc: "Rinnankorkeusläpimitta tarkoittaa puun rungon halkaisijaa mitattuna noin 1,3 metrin korkeudelta maan pinnasta.<br><br>Brösthöjdsdiameter är diametern på ett träds stam mätt cirka 1,3 meter över marken.<br><br>  Diameter at breast height (DBH) is the diameter of a tree trunk measured at about 1.3 meters above ground level." },

{ fi: "Pensaskerros", sv: "Buskskikt", en: "Shrub layer", desc: "Pensaskerros on metsän kasvillisuuskerros, joka koostuu pensaista ja pienistä puista puuston alla.<br><br>Buskskikt är det vegetationsskikt i skogen som består av buskar och små träd under trädkronorna.<br><br>  The shrub layer is the vegetation layer in a forest consisting of shrubs and small trees beneath the canopy." },

{ fi: "Pensaskasvillisuus", sv: "Buskvegetation", en: "Shrub vegetation", desc: "Pensaskasvillisuus tarkoittaa alueen pensaslajeista koostuvaa kasvillisuutta, joka voi muodostaa tiheitä kasvustoja metsissä tai avoimilla alueilla.<br><br>Buskvegetation är växtlighet som domineras av buskar och kan bilda täta bestånd i skog eller öppna marker.<br><br>  Shrub vegetation refers to plant communities dominated by shrubs that can form dense growth in forests or open areas." },

{ fi: "Puro", sv: "Bäck", en: "Stream", desc: "Puro on pieni, luonnollinen virtaava vesiuoma, joka kuljettaa vettä esimerkiksi metsä- tai maastoalueilla.<br><br>Bäck är ett litet naturligt rinnande vattendrag som transporterar vatten genom skog eller landskap.<br><br>  A stream is a small natural flowing watercourse that carries water through forests or landscapes." },
  
    { fi: "Puronvarsi", sv: "Bäckfåra", en: "Stream corridor", desc: "Puronvarsi tarkoittaa puroa ympäröivää aluetta, mukaan lukien sen uoma ja välitön rantavyöhyke, joka vaikuttaa vesiekosysteemiin.<br><br>Bäckfåra är området kring en bäck, inklusive dess får och närliggande strandzon som påverkar vattenmiljön.<br><br>  A stream corridor is the area surrounding a stream, including its channel and adjacent riparian zone, which influences the aquatic ecosystem." },

{ fi: "Marjanpoiminta", sv: "Bärplockning", en: "Berry picking", desc: "Marjanpoiminta tarkoittaa luonnonmarjojen keräämistä metsistä ja muilta luonnonalueilta ravinnoksi tai myyntiin.<br><br>Bärplockning innebär att man samlar vilda bär i skog och natur för eget bruk eller försäljning.<br><br>  Berry picking is the activity of collecting wild berries from forests and natural areas for food or commercial use." },

{ fi: "Marjastus", sv: "Bärplockning", en: "Foraging for berries", desc: "Marjastus tarkoittaa luonnonmarjojen keräämistä osana jokamiehenoikeuksia tai vapaa-ajan toimintaa.<br><br>Bärplockning är att plocka vilda bär som en del av allemansrätten eller fritidsaktivitet.<br><br>  Foraging for berries refers to collecting wild berries as part of everyman’s rights or recreational activity." },

{ fi: "Varvusto", sv: "Bärris", en: "Dwarf shrub layer", desc: "Varvusto tarkoittaa matalakasvuista kasvillisuuskerrosta, joka koostuu varvuista kuten mustikasta ja puolukasta.<br><br>Bärris är ett lågt växtskikt som består av risväxter som blåbär och lingon.<br><br>  The dwarf shrub layer is a low vegetation layer consisting of dwarf shrubs such as bilberry and lingonberry." },

{ fi: "Marjasato", sv: "Bärskörd", en: "Berry yield", desc: "Marjasato tarkoittaa tietyn alueen tuottamaa luonnonmarjojen kokonaismäärää tiettynä aikana.<br><br>Bärskörd är den totala mängden bär som produceras i ett område under en viss period.<br><br>  Berry yield refers to the total amount of berries produced in a given area during a specific time period." },
  
    { fi: "Viljavampi kangas", sv: "Bördigare mo", en: "More fertile forest site", desc: "Viljavampi kangas tarkoittaa metsämaata, joka on ravinteikkaampaa ja tuottavampaa kuin tavanomainen kangasmaa.<br><br>Bördigare mo är en skogsmark som är mer näringsrik och produktiv än vanlig mo-mark.<br><br>  A more fertile forest site refers to forest soil that is more nutrient-rich and productive than typical dry forest sites." },

{ fi: "Viljavuus", sv: "Bördighet", en: "Soil fertility", desc: "Viljavuus tarkoittaa maaperän kykyä tuottaa kasveille ravinteita ja tukea niiden kasvua.<br><br>Bördighet är jordens förmåga att förse växter med näring och stödja deras tillväxt.<br><br>  Soil fertility refers to the ability of soil to supply nutrients to plants and support their growth." },

{ fi: "Viljavuustaso", sv: "Bördighet", en: "Fertility level", desc: "Viljavuustaso tarkoittaa maaperän ravinteikkuuden tasoa, joka vaikuttaa kasvillisuuden kasvuolosuhteisiin.<br><br>Bördighet beskriver nivån av näringsrikedom i marken som påverkar växtlighetens tillväxtförhållanden.<br><br>  Fertility level refers to the level of nutrient richness in soil that affects plant growth conditions." },

{ fi: "Rehevä lehtolaikku", sv: "Bördigt mindre lundområde", en: "Fertile small grove patch", desc: "Rehevä lehtolaikku tarkoittaa pientä, ravinteikasta lehtimetsäaluetta, jossa kasvillisuus on runsasta ja monimuotoista.<br><br>Bördigt mindre lundområde är ett litet näringsrikt lövskogsområde med rik och varierad vegetation.<br><br>  A fertile small grove patch is a small nutrient-rich deciduous forest area with abundant and diverse vegetation." },

{ fi: "Ympyräkoeala", sv: "Cirkelprovyta", en: "Circular sample plot", desc: "Ympyräkoeala on metsän inventoinnissa käytettävä ympyrän muotoinen koeala, jolla mitataan puuston ominaisuuksia.<br><br>Cirkelprovyta är en cirkelformad provyta som används i skogsinventering för att mäta beståndets egenskaper.<br><br>  A circular sample plot is a round sampling area used in forest inventory to measure characteristics of a forest stand." },
  
    { fi: "Ympyräkoealamittaus", sv: "Cirkelprovytemätning", en: "Circular plot measurement", desc: "Ympyräkoealamittaus tarkoittaa metsän inventointimenetelmää, jossa puuston ominaisuuksia mitataan ympyrän muotoisilta koealoilta.<br><br>Cirkelprovytemätning är en inventeringsmetod där skogsbeståndets egenskaper mäts på cirkelformade provytor.<br><br>  Circular plot measurement is a forest inventory method where stand characteristics are measured on circular sample plots." },

{ fi: "ClT", sv: "CIT", en: "CIT", desc: "Cladina-typ" },

{ fi: "CT", sv: "CT", en: "CT", desc: "Calluna-typ" },

{ fi: "Louhos", sv: "Dagbrott", en: "Open-pit quarry", desc: "Louhos on avolouhintapaikka, jossa kivi- tai maa-ainesta otetaan maan pinnalta kaivamalla avoin kuoppa.<br><br>Dagbrott är en brytningsplats där sten eller jordmaterial tas ut genom öppen gruvdrift vid markytan.<br><br>  An open-pit quarry is a mining site where stone or soil materials are extracted from an open excavation at the surface." },

{ fi: "Kunnostusojituslohko", sv: "Del av område som iståndsättningsdikas", en: "Drainage restoration block", desc: "Kunnostusojituslohko tarkoittaa metsäalueen osaa, jossa tehdään ojien kunnostamista vedenpoiston parantamiseksi.<br><br>Del av område som iståndsättningsdikas är ett område där diken restaureras för att förbättra vattenavledning.<br><br>  A drainage restoration block is a part of an area where ditches are restored to improve water drainage." },
  
    { fi: "Pintamaa", sv: "Det översta jordskiktet", en: "Topsoil", desc: "Pintamaa tarkoittaa maan ylimpää kerrosta, jossa on eniten orgaanista ainesta ja jossa suurin osa kasvien juurista ja mikrobeista toimii.<br><br>Det översta jordskiktet är jordens översta lager med högst halt organiskt material där de flesta växters rötter och mikroorganismer finns.<br><br>  Topsoil is the uppermost layer of soil containing the highest amount of organic matter and most biological activity." },

{ fi: "Uudistamisläpimitta", sv: "Diameter för förnyelse", en: "Regeneration diameter threshold", desc: "Uudistamisläpimitta tarkoittaa puun läpimittaa, jonka perusteella arvioidaan metsän uudistamistarvetta.<br><br>Diameter för förnyelse är den diameter på träd som används som gräns för att bedöma behovet av föryngring.<br><br>  The regeneration diameter threshold is the tree diameter used as a criterion for deciding when forest regeneration is needed." },

{ fi: "Järeytyminen", sv: "Diametertillväxt", en: "Diameter growth", desc: "Järeytyminen tarkoittaa puun rungon paksuuden kasvua eli läpimitan lisääntymistä ajan myötä.<br><br>Diametertillväxt är ökningen av trädets stamdiameter över tid.<br><br>  Diameter growth refers to the increase in a tree’s trunk diameter over time." },

{ fi: "Paksuuskasvu", sv: "Diameterutveckling", en: "Radial growth", desc: "Paksuuskasvu tarkoittaa puun säteittäistä kasvua, joka lisää rungon paksuutta vuosilustojen kautta.<br><br>Diameterutveckling är trädets radiella tillväxt som ökar stamdiametern genom årsringar.<br><br>  Radial growth is the outward growth of a tree that increases stem thickness through annual rings." },

{ fi: "Metsäojitettu suo", sv: "Dikad torvmark", en: "Drained peatland forest", desc: "Metsäojitettu suo tarkoittaa suota, johon on kaivettu ojia veden pinnan laskemiseksi ja puuston kasvun parantamiseksi.<br><br>Dikad torvmark är en torvmark där diken har grävts för att sänka vattennivån och förbättra skogstillväxten.<br><br>  A drained peatland forest is a peatland where ditches have been dug to lower the water table and improve tree growth." },
  
    { fi: "Ojitettu turvemaa", sv: "Dikad torvmark", en: "Drained peatland", desc: "Ojitettu turvemaa tarkoittaa suomaata, josta vettä on johdettu pois ojien avulla puuston kasvun parantamiseksi.<br><br>Dikad torvmark är torvmark där vatten har avletts genom diken för att förbättra skogstillväxten.<br><br>  Drained peatland refers to peat soil that has been drained using ditches to improve tree growth conditions." },

{ fi: "Ojitusalue", sv: "Dikat område", en: "Drained area", desc: "Ojitusalue tarkoittaa aluetta, jossa on tehty ojituksia veden poistamiseksi maaperästä tai kasvillisuuden kasvun parantamiseksi.<br><br>Dikat område är ett område där dikning har utförts för att avleda vatten och förbättra markens förutsättningar.<br><br>  A drained area is a region where drainage ditches have been constructed to remove excess water from the soil." },

{ fi: "Oja", sv: "Dike", en: "Ditch", desc: "Oja on maahan kaivettu kanava, jonka avulla johdetaan vettä pois alueelta.<br><br>Dike är en grävd kanal i marken som används för att leda bort vatten.<br><br>  A ditch is a man-made channel in the ground used to drain water away from an area." },

{ fi: "Ojasyvyys", sv: "Dikesdjup", en: "Ditch depth", desc: "Ojasyvyys tarkoittaa ojan pystysuuntaista syvyyttä, joka vaikuttaa vedenpoiston tehokkuuteen.<br><br>Dikesdjup är djupet på ett dike, vilket påverkar hur effektivt vatten leds bort.<br><br>  Ditch depth refers to the vertical depth of a drainage ditch, affecting its water removal efficiency." },

{ fi: "Ojaverkosto", sv: "Dikesnät", en: "Drainage network", desc: "Ojaverkosto tarkoittaa toisiinsa yhdistyneiden ojien järjestelmää, joka ohjaa veden pois laajalta alueelta.<br><br>Dikesnät är ett system av sammanlänkade diken som leder bort vatten från ett större område.<br><br>  A drainage network is a system of interconnected ditches that directs water away from a large area." },
  
    { fi: "Jätkänpolku", sv: "Dikesren", en: "Ditch edge path", desc: "Jätkänpolku tarkoittaa ojan reunaa kulkevaa kapeaa kulku-uraa, jota pitkin liikutaan metsässä ojien varsilla.<br><br>Dikesren är den smala kanten längs ett dike där man kan röra sig i skog och mark.<br><br>  A ditch edge path is a narrow path along the edge of a drainage ditch used for movement in forested terrain." },

{ fi: "Ojasto", sv: "Dikessystem", en: "Drainage system", desc: "Ojasto tarkoittaa kokonaisuutta, joka muodostuu toisiinsa liittyvistä ojista veden johtamiseksi.<br><br>Dikessystem är ett sammanhängande system av diken som leder bort vatten från ett område.<br><br>  A drainage system is a connected network of ditches used to transport water away from an area." },

{ fi: "Ojitusmätästys", sv: "Dikningshögläggning", en: "Mounding with drainage preparation", desc: "Ojitusmätästys tarkoittaa metsänuudistamismenetelmää, jossa maata muokataan mättäiksi samalla kun ojitusta käytetään veden hallintaan.<br><br>Dikningshögläggning är en markberedningsmetod där högar skapas i samband med dikning för att förbättra vattenhantering och plantering.<br><br>  Mounding with drainage preparation is a site preparation method where soil is formed into mounds in combination with drainage to improve planting conditions." },

{ fi: "Etelänversosurma", sv: "Diplodia pinea", en: "Diplodia shoot blight", desc: "Etelänversosurma on sienitauti, joka vaurioittaa erityisesti mäntyjen versoja ja neulasia aiheuttaen kuivumista ja kuolleita latvakasvaimia.<br><br>Diplodia pinea är en svampsjukdom som angriper främst tallskott och barr och orsakar torkskador och döda skott.<br><br>  Diplodia shoot blight (Diplodia pinea) is a fungal disease that affects pine shoots and needles, causing dieback and drying of young growth." },

{ fi: "Punavyökariste", sv: "Dothistroma septosporum", en: "Dothistroma needle blight", desc: "Punavyökariste on sienitauti, joka aiheuttaa männyn neulasiin punertavia vyöhykkeitä ja ennenaikaista neulasten varisemista.<br><br>Dothistroma septosporum är en svampsjukdom som orsakar röda band på tallbarr och leder till tidig barravfall.<br><br>  Dothistroma needle blight (Dothistroma septosporum) is a fungal disease that causes red banding on pine needles and premature needle drop." },
  
    { fi: "Tuhoalue", sv: "Drabbat område", en: "Affected area", desc: "Tuhoalue tarkoittaa metsäaluetta, jota on vaurioittanut esimerkiksi myrsky, tuholaiset, tuli tai muu häiriö.<br><br>Drabbat område är ett skogsområde som har skadats av till exempel storm, skadedjur, brand eller annan störning.<br><br>  An affected area is a forest area that has been damaged by events such as storms, pests, fire, or other disturbances." },

{ fi: "Korjuukelpoisuus", sv: "Drivningsduklighet", en: "Harvesting suitability", desc: "Korjuukelpoisuus tarkoittaa sitä, kuinka hyvin metsä tai maasto soveltuu puunkorjuuseen koneilla tai muilla menetelmillä.<br><br>Drivningsduklighet beskriver hur väl ett område lämpar sig för skogsavverkning med maskiner eller andra metoder.<br><br>  Harvesting suitability refers to how suitable a forest or terrain is for logging operations using machinery or other methods." },

{ fi: "Harvennusjälki", sv: "Drivningskvalitet", en: "Thinning result quality", desc: "Harvennusjälki tarkoittaa metsään jäävää jälkeä harvennushakkuun jälkeen, kuten puuston tasaisuutta ja vaurioiden määrää.<br><br>Drivningskvalitet avser kvaliteten på det resultat som lämnas efter gallring, såsom jämnhet i beståndet och skador.<br><br>  Thinning result quality refers to the condition left in a forest after thinning, including stand uniformity and level of damage." },

{ fi: "Korjuuvaurio", sv: "Drivningsskada", en: "Harvesting damage", desc: "Korjuuvaurio tarkoittaa metsään tai puustoon hakkuun tai korjuun aikana syntyneitä vaurioita, kuten runkovaurioita tai juuristovaurioita.<br><br>Drivningsskada är skador på skog eller träd som uppstår under avverkning eller drivning, till exempel stamskador eller rotskador.<br><br>  Harvesting damage refers to injuries to trees or forest soil caused during logging operations, such as stem or root damage."},

{ fi: "Korjuujälki", sv: "Drivningsspår", en: "Harvesting tracks", desc: "Korjuujälki tarkoittaa metsään jääviä jälkiä puunkorjuusta, kuten koneiden ajouria ja maaperän painaumia.<br><br>Drivningsspår är spår i skogen efter avverkning, såsom körvägar och markpåverkan från maskiner.<br><br>  Harvesting tracks refer to the visible traces left in a forest after logging, such as machine trails and soil compaction." },
  
    { fi: "Maitohorsma", sv: "Duntrav", en: "Fireweed", desc: "Maitohorsma on yleinen pioneerikasvi, joka kasvaa avoimilla alueilla kuten hakkuuaukioilla ja tienvarsilla.<br><br>Duntrav är en snabbväxande pionjärväxt som ofta förekommer på hyggen och vägkanter.<br><br>  Fireweed is a pioneer plant that commonly grows in open areas such as clearcuts and roadsides." },

{ fi: "Vaivaiskoivu", sv: "Dvärgbjörk", en: "Dwarf birch", desc: "Vaivaiskoivu on matalakasvuinen koivulaji, joka kasvaa erityisesti tunturi- ja suoympäristöissä.<br><br>Dvärgbjörk är en lågväxande björkart som främst förekommer i fjäll- och myrområden.<br><br>  Dwarf birch is a low-growing birch species found mainly in tundra and wetland environments." },

{ fi: "Notko", sv: "Däld", en: "Hollow", desc: "Notko tarkoittaa maaston matalaa kohtaa tai painannetta, jossa vesi voi kerääntyä tai virrata.<br><br>Däld är en sänka i terrängen där vatten kan samlas eller rinna.<br><br>  A hollow is a low-lying depression in the terrain where water may collect or flow." },

{ fi: "Lahopuu", sv: "Död ved", en: "Dead wood", desc: "Lahopuu tarkoittaa kuollutta puuta, joka on maassa tai pystyssä ja hajoaa luonnollisesti osana ekosysteemiä.<br><br>Död ved är döda träd eller trädelar som bryts ned naturligt i ekosystemet.<br><br>  Dead wood refers to dead trees or tree parts that decompose naturally as part of the ecosystem." },

{ fi: "Lahopuusto", sv: "Död ved", en: "Deadwood stand", desc: "Lahopuusto tarkoittaa metsää tai metsikön osaa, jossa on runsaasti kuollutta puuta eri lahoamisvaiheissa.<br><br>Död ved i bestånd avser ett skogsområde med mycket döda träd i olika nedbrytningsstadier.<br><br>  Deadwood stand refers to a forest area containing a high amount of dead trees at different stages of decay." },
  
    { fi: "Suppa", sv: "Dödisgrop", en: "Kettle hole", desc: "Suppa tarkoittaa jääkauden aikana syntynyttä painannetta maastossa, joka on usein muodostunut sulaneen jäälohkareen paikalle.<br><br>Dödisgrop är en sänka som bildats under istiden när en isblock har smält och lämnat en grop i marken.<br><br>  A kettle hole is a depression formed during the Ice Age when a block of ice melted and left a hole in the ground." },

{ fi: "ECT", sv: "ECT", en: "ECT", desc: "Empetrum-Calluna-typ" },

{ fi: "Pohjavesivaikutus", sv: "Effekt på grundvattnet", en: "Impact on groundwater", desc: "Pohjavesivaikutus tarkoittaa toimintojen, kuten ojituksen tai metsänhoidon, vaikutusta pohjaveden tasoon ja laatuun.<br><br>Effekt på grundvattnet avser hur exempelvis dikning eller skogsbruk påverkar grundvattennivåer och kvalitet.<br><br>  Impact on groundwater refers to how activities such as drainage or forestry affect groundwater levels and quality." },

{ fi: "Tehoisa lämpösumma", sv: "Effektiv temperatursumma", en: "Effective temperature sum", desc: "Tehoisa lämpösumma tarkoittaa kasvukauden aikana kertyvää lämpömäärää, joka vaikuttaa kasvien kasvuun ja kehitykseen.<br><br>Effektiv temperatursumma är den ackumulerade värmemängd under växtsäsongen som påverkar växternas tillväxt.<br><br>  Effective temperature sum is the accumulated heat during the growing season that influences plant growth and development." },

{ fi: "Turvemaan jälkihoito", sv: "Eftervård av torvtäkt", en: "Peatland aftercare", desc: "Turvemaan jälkihoito tarkoittaa toimenpiteitä, joilla turpeenoton jälkeen alue palautetaan tai ennallistetaan esimerkiksi kasvillisuuden tai vedenhallinnan avulla.<br><br>Eftervård av torvtäkt innebär åtgärder för att återställa eller rehabilitera ett torvuttagsområde efter brytning.<br><br>  Peatland aftercare refers to measures taken to restore or rehabilitate a peat extraction site after harvesting, often through vegetation or water management." },
  
    { fi: "Metsänhoidon omavalvonta", sv: "Egenkontroll i skogsvård", en: "Self-monitoring in forest management", desc: "Metsänhoidon omavalvonta tarkoittaa metsänomistajan tai toimijan itse tekemää valvontaa, jolla varmistetaan, että metsänhoitotyöt tehdään lakien ja ohjeiden mukaisesti.<br><br>Egenkontroll i skogsvård innebär att skogsägaren eller aktören själv kontrollerar att skogsvårdsåtgärder följer lagar och riktlinjer.<br><br>  Self-monitoring in forest management refers to the process where forest owners or operators independently ensure that forestry operations comply with laws and guidelines." },

{ fi: "Varsinainen letto", sv: "Egentlig brunmosse", en: "True rich fen", desc: "Varsinainen letto tarkoittaa ravinteikasta suotyyppiä, jossa kasvaa vaativia kasvilajeja ja maaperä on usein kalkkipitoinen.<br><br>Egentlig brunmosse är en näringsrik mossetyp med krävande vegetation och ofta kalkrik mark.<br><br>  A true rich fen is a nutrient-rich wetland type with demanding plant species and often calcareous soil conditions." },

{ fi: "Varsinainen lettoräme", sv: "Egentlig brunmossmyr", en: "True rich fen pine bog", desc: "Varsinainen lettoräme on suotyyppi, jossa yhdistyvät rämeen ja letton piirteet ja jossa kasvaa sekä puita että ravinteikasta suokasvillisuutta.<br><br>Egentlig brunmossmyr är en myrtyp som kombinerar drag från kärr och mosse med både träd och näringsrik vegetation.<br><br>  A true rich fen pine bog is a wetland type combining characteristics of fens and bogs, with both trees and nutrient-rich vegetation." },

{ fi: "Varsinainen saraneva", sv: "Egentlig starrmyr", en: "True sedge fen", desc: "Varsinainen saraneva on avosuotyyppi, jossa saroja eli sarakasveja esiintyy runsaasti ja ravinteisuus vaihtelee.<br><br>Egentlig starrmyr är en öppen myrtyp där starrväxter dominerar och näringsnivån kan variera.<br><br>  A true sedge fen is an open wetland type dominated by sedges, with varying nutrient levels." },

{ fi: "Varsinainen lettokorpi", sv: "Egentligt brunmosskärr", en: "True rich fen swamp forest", desc: "Varsinainen lettokorpi on kostea metsäinen suotyyppi, jossa esiintyy sekä puustoa että ravinteikasta suokasvillisuutta.<br><br>Egentligt brunmosskärr är en fuktig skogskärrtyp med både träd och näringsrik myrvegetation.<br><br>  A true rich fen swamp forest is a wet forested mire type with both tree cover and nutrient-rich wetland vegetation." },
  
    { fi: "varsinainen sarakorpi", sv: "egentligt starrkärr", en: "true sedge fen", desc: "Varsinainen sarakorpi on suotyyppi, jossa vallitsevat sarakasvit ja turve on rahkavaltaista.<br><br>Egentligt starrkärr är en torvmarkstyp där starrarter dominerar och torven är tämligen föga förmultnad.<br><br>True sedge fen is a mire type dominated by sedges, with moderately decomposed peat." },
  
{ fi: "ekologinen kestävyys", sv: "ekologisk hållbarhet", en: "ecological sustainability", desc: "Ekologinen kestävyys tarkoittaa luonnon järjestelmien ja monimuotoisuuden säilyttämistä pitkällä aikavälillä.<br><br>Ekologisk hållbarhet innebär att bevara naturens system och biologisk mångfald på lång sikt.<br><br>Ecological sustainability means preserving natural systems and biodiversity in the long term." },
  
{ fi: "taloudellinen kestävyys", sv: "ekonomisk hållbarhet", en: "economic sustainability", desc: "Taloudellinen kestävyys on talouden tasapainoista kehitystä, joka ei perustu velkaantumiseen tai luonnonvarojen ylikulutukseen.<br><br>Ekonomisk hållbarhet är en balanserad ekonomisk utveckling som inte bygger på skuldsättning eller överutnyttjande av naturresurser.<br><br>Economic sustainability is balanced economic development that does not rely on indebtedness or overconsumption of natural resources." },
  
{ fi: "talousmetsä", sv: "ekonomiskog", en: "commercial forest", desc: "Talousmetsä on metsäalue, jota hoidetaan ja käytetään ensisijaisesti puuntuotantoon ja taloudellisen hyödyn saamiseksi.<br><br>Ekonomiskog är ett skogsområde som sköts och används främst för virkesproduktion och ekonomisk avkastning.<br><br>A commercial forest is a forest area managed and used primarily for timber production and economic return." },
  
{ fi: "taloudellisesti vajaatuottoinen metsikkö", sv: "ekonomiskt underproduktivt bestånd", en: "economically underproductive stand", desc: "Taloudellisesti vajaatuottoinen metsikkö on metsikkö, jonka puuntuotos ja tuotto jäävät selvästi alle kannattavan metsätalouden rajan.<br><br>Ekonomiskt underproduktivt bestånd är ett skogsbestånd vars virkesproduktion och avkastning klart understiger gränsen för lönsamt skogsbruk.<br><br>An economically underproductive stand is a forest stand whose wood production and yield fall clearly below the threshold of profitable forestry." },
  
{ fi: "oravanmarja", sv: "ekorrbär", en: "false lily of the valley", desc: "Oravanmarja on myrkyllinen ruoho, jolla on sydämenmuotoiset lehdet ja valkoiset kukat.<br><br>Ekorrbär är en giftig ört med hjärtformade blad och vita blommor.<br><br>False lily of the valley is a poisonous herb with heart-shaped leaves and white flowers (Maianthemum bifolium)." },
  
{ fi: "ekosysteemi", sv: "ekosystem", en: "ecosystem", desc: "Ekosysteemi on luonnon kokonaisuus, jossa eliöt ja niiden eloton ympäristö ovat vuorovaikutuksessa.<br><br>Ekossystem är en naturlig helhet där organismer och deras livlösa miljö samverkar.<br><br>An ecosystem is a natural community where living organisms and their non-living environment interact." },
  
    { fi: "Ekosysteemipalvelut", sv: "Ekosystemtjänster", en: "Ecosystem services", desc: "Ekosysteemipalvelut tarkoittavat luonnon tarjoamia hyötyjä ihmisille, kuten puhdas ilma, veden säätely, pölytys ja virkistysmahdollisuudet.<br><br>Ekosystemtjänster är de nyttor som naturen ger människor, såsom ren luft, vattenreglering, pollinering och rekreation.<br><br>  Ecosystem services are the benefits that nature provides to people, such as clean air, water regulation, pollination, and recreation." },

{ fi: "Valiopuu", sv: "Elitträd", en: "Elite tree", desc: "Valiopuu tarkoittaa metsikön parhaita ja laadukkaimpia puita, joita suositaan siementuotannossa tai kasvatuksessa.<br><br>Elitträd är de bästa och mest högkvalitativa träden i ett bestånd som används för fröproduktion eller fortsatt odling.<br><br>  An elite tree is a high-quality tree selected in a forest stand for seed production or future growth." },

{ fi: "EMT", sv: "EMT", en: "EMT", desc: "EMT" },

{ fi: "Katajaketo", sv: "Enbevuxen ängsmark", en: "Juniper meadow", desc: "Katajaketo tarkoittaa avointa niittyä tai ketoa, jossa kasvaa runsaasti katajaa ja kuivien paikkojen kasvilajeja.<br><br>Enbevuxen ängsmark är en öppen äng där enbuskar och torrmarksvegetation dominerar.<br><br>  A juniper meadow is an open grassland area dominated by juniper shrubs and dry-site vegetation." },

{ fi: "Energiapuu", sv: "Energived", en: "Energy wood", desc: "Energiapuu tarkoittaa puuta, jota käytetään polttoaineena energian tuotantoon, kuten hakkeena tai rankapuuna.<br><br>Energived är virke som används som bränsle för energiproduktion, till exempel flis eller klenvirke.<br><br>  Energy wood refers to wood used as fuel for energy production, such as chips or small-diameter stems." },
  
    { fi: "Kertalannoitus", sv: "Engångsgödsling", en: "Single fertilization", desc: "Kertalannoitus tarkoittaa metsän lannoitusta, joka tehdään yhtenä kertana kasvun parantamiseksi ilman toistuvia toimenpiteitä.<br><br>Engångsgödsling är en gödsling som utförs vid ett tillfälle för att förbättra skogens tillväxt utan upprepade insatser.<br><br>  Single fertilization refers to applying fertilizer once to improve forest growth without repeated treatments." },

{ fi: "Yksijaksoinen sekametsä", sv: "Enskiktad blandskog", en: "Even-aged mixed forest", desc: "Yksijaksoinen sekametsä tarkoittaa metsää, jossa eri puulajeja kasvaa yhdessä, mutta puusto on rakenteeltaan ja iältään melko yhtenäistä.<br><br>Enskiktad blandskog är en blandad skog där olika trädslag växer tillsammans men har en relativt jämn struktur och ålder.<br><br>  An even-aged mixed forest is a forest with multiple tree species but a relatively uniform age and structure." },

{ fi: "Yksijaksoinen metsikkö", sv: "Enskiktat bestånd", en: "Even-aged stand", desc: "Yksijaksoinen metsikkö tarkoittaa metsää, jossa puusto on suunnilleen saman ikäistä ja muodostaa yhden selkeän kehitysvaiheen.<br><br>Enskiktat bestånd är ett skogsbestånd där träden är ungefär lika gamla och bildar ett tydligt utvecklingsstadium.<br><br>  An even-aged stand is a forest stand where trees are roughly the same age and form a single developmental layer." },

{ fi: "EVT", sv: "EVT", en: "EVT", desc: "Empetrum-Vaccinium-typ" },

{ fi: "Vaneritukki", sv: "Fanerstock", en: "Plywood log", desc: "Vaneritukki on korkealaatuinen tukkipuu, jota käytetään viilun ja vanerin valmistukseen sen suoran ja tasalaatuisen rungon vuoksi.<br><br>Fanerstock är en högkvalitativ stock som används för faner- och plywoodtillverkning på grund av sin raka och jämna kvalitet.<br><br>  A plywood log is a high-quality log used for veneer and plywood production due to its straight and uniform stem quality." },
  
    { fi: "Kiintoaine", sv: "Fasta partiklar", en: "Suspended solids", desc: "Kiintoaine tarkoittaa vedessä tai ilmassa olevia kiinteitä hiukkasia, jotka eivät liukene vaan kulkeutuvat mukana esimerkiksi virtaavassa vedessä.<br><br>Fasta partiklar är fasta ämnen i vatten eller luft som inte är lösta utan transporteras med flödet.<br><br>  Suspended solids refer to solid particles in water or air that do not dissolve but are carried along in the flow." },

{ fi: "Vikaisuus", sv: "Felaktighet", en: "Defectiveness", desc: "Vikaisuus tarkoittaa puuaineen tai materiaalin virheitä tai laatuun vaikuttavia poikkeamia, kuten halkeamia tai lahovaurioita.<br><br>Felaktighet innebär brister eller avvikelser i materialets kvalitet, såsom sprickor eller rötskador.<br><br>  Defectiveness refers to flaws or quality deviations in wood or material, such as cracks or decay." },

{ fi: "Taskutus", sv: "Fickning", en: "Pocket formation", desc: "Taskutus tarkoittaa maaperän tai kallioperän rakenteessa esiintyviä taskumaisia painanteita tai kerrostumia.<br><br>Fickning avser fickliknande fördjupningar eller strukturer i jord eller berggrund.<br><br>  Pocket formation refers to pocket-like depressions or structures in soil or bedrock layers." },

{ fi: "Hieno hiekka", sv: "Fin sand", en: "Fine sand", desc: "Hieno hiekka tarkoittaa hyvin pienirakeista hiekkaa, joka tuntuu sileältä ja pakkautuu tiiviisti.<br><br>Fin sand är sand med mycket små korn som känns slät och packas tätt.<br><br>  Fine sand refers to sand with very small particles that feels smooth and compacts tightly." },

{ fi: "Hienojakoinen", sv: "Finkornig", en: "Fine-grained", desc: "Hienojakoinen tarkoittaa materiaalia tai maata, jonka hiukkaset ovat pieniä ja tasakokoisia.<br><br>Finkornig beskriver material eller jord med små och jämnstora partiklar.<br><br>  Fine-grained refers to material or soil composed of small and uniformly sized particles." },
  
    { fi: "Hieno hiesu", sv: "Finmjäla", en: "Fine silt", desc: "Hieno hiesu tarkoittaa hyvin hienorakeista maa-ainesta, joka koostuu saven ja hiekan välimuotoisista hiukkasista ja tuntuu jauhomaiselta.<br><br>Finmjäla är ett mycket finkornigt jordmaterial som består av partiklar mellan lera och sand och känns mjöligt.<br><br>  Fine silt is a very fine-grained soil material between clay and sand that feels powdery." },

{ fi: "Hieno hieta", sv: "Finmo", en: "Fine sand soil", desc: "Hieno hieta tarkoittaa hienorakeista, hiekan ja hiesun välimuotoista maa-ainesta, joka pidättää jonkin verran vettä mutta läpäisee sitä hyvin.<br><br>Finmo är ett finkornigt jordmaterial mellan sand och silt som håller lite vatten men släpper igenom det väl.<br><br>  Fine sand soil refers to a fine-grained soil between sand and silt that retains some water but drains well." },

{ fi: "Tunturialue", sv: "Fjällregion", en: "Mountain tundra region", desc: "Tunturialue tarkoittaa korkealla sijaitsevaa aluetta, jossa puusto on niukkaa ja kasvillisuus koostuu matalista kasveista.<br><br>Fjällregion är ett högt beläget område med gles eller ingen skog och lågväxande vegetation.<br><br>  A mountain tundra region is a high-altitude area with sparse or no trees and low-growing vegetation." },

{ fi: "Kaukomaisema", sv: "Fjärrlandskap", en: "Distant landscape", desc: "Kaukomaisema tarkoittaa näkymää, joka ulottuu kauas horisonttiin ja sisältää laajoja maisemakokonaisuuksia.<br><br>Fjärrlandskap är en vy över ett stort landskap som sträcker sig långt mot horisonten.<br><br>  A distant landscape refers to a view extending far into the horizon, showing broad landscape features." },

{ fi: "Flada", sv: "Flada", en: "Flada (coastal lagoon stage)", desc: "Flada tarkoittaa rannikon matalaa merenlahtea, joka on osittain eriytynyt merestä maankohoamisen seurauksena.<br><br>Flada är en grund havsvik som delvis har avskilts från havet genom landhöjning.<br><br>  A flada is a shallow coastal lagoon that is partially separated from the sea due to land uplift." },
  
    { fi: "Monijaksoinen sekametsä", sv: "Flerskiktad blandskog", en: "Multi-layered mixed forest", desc: "Monijaksoinen sekametsä tarkoittaa metsää, jossa on useita latvuskerroksia ja eri-ikäisiä sekä eri puulajeja kasvavia puita samassa metsikössä.<br><br>Flerskiktad blandskog är en blandad skog med flera kronskikt och träd av olika ålder och arter.<br><br>  A multi-layered mixed forest is a forest with several canopy layers and trees of different ages and species." },

{ fi: "Monijaksoinen metsikkö", sv: "Flerskiktat bestånd", en: "Multi-layered stand", desc: "Monijaksoinen metsikkö tarkoittaa metsää, jossa puusto muodostaa useita kerroksia eri-ikäisistä ja erikokoisista puista.<br><br>Flerskiktat bestånd är ett skogsbestånd med flera skikt av träd i olika åldrar och storlekar.<br><br>  A multi-layered stand is a forest stand consisting of several layers of trees of different ages and sizes." },

{ fi: "Monihaaraisuus", sv: "Flertoppighet", en: "Multi-stem or forked growth", desc: "Monihaaraisuus tarkoittaa puun kasvutapaa, jossa rungosta haarautuu useita latvuksia tai pääversoja.<br><br>Flertoppighet innebär att ett träd har flera toppar eller huvudstammar som växer från samma stam.<br><br>  Multi-stem or forked growth refers to a tree growth form where multiple leaders or stems develop from a single trunk." },

{ fi: "Uittolaite", sv: "Flottningsanläggning", en: "Log floating facility", desc: "Uittolaite tarkoittaa rakenteita tai järjestelmiä, joita käytettiin ennen puutavaran kuljettamiseen vesistöjen kautta.<br><br>Flottningsanläggning är en anläggning som användes för att transportera timmer via vattendrag.<br><br>  A log floating facility refers to structures used historically to transport timber via waterways." },

{ fi: "Lentolevitys", sv: "Flygbesprutning", en: "Aerial spraying", desc: "Lentolevitys tarkoittaa aineiden, kuten lannoitteiden tai torjunta-aineiden, levittämistä ilmasta käsin lentokoneella tai helikopterilla.<br><br>Flygbesprutning innebär spridning av ämnen som gödsel eller bekämpningsmedel från luften med flygplan eller helikopter.<br><br>  Aerial spraying is the application of substances such as fertilizers or pesticides from the air using aircraft or helicopters." },
  
    { fi: "Liito-orava", sv: "Flygekorre", en: "Siberian flying squirrel", desc: "Liito-orava on yöaktiivinen oravalaji, joka pystyy liitämään puusta toiseen ihopoimujen avulla ja elää vanhoissa metsissä.<br><br>Flygekorre är ett nattaktivt ekorrliknande däggdjur som kan glidflyga mellan träd och lever i gamla skogar.<br><br>  The Siberian flying squirrel is a nocturnal squirrel species that can glide between trees using skin membranes and lives in old-growth forests." },

{ fi: "Laikku", sv: "Fläck", en: "Patch", desc: "Laikku tarkoittaa metsikössä tai maastossa olevaa erillistä aluetta, joka poikkeaa ympäristöstään esimerkiksi kasvillisuuden tai maaperän suhteen.<br><br>Fläck är ett avgränsat område i skog eller terräng som skiljer sig från omgivningen, till exempel i vegetation eller marktyp.<br><br>  A patch refers to a distinct area in a forest or landscape that differs from its surroundings in vegetation or soil conditions." },

{ fi: "Laikkumätästys", sv: "Fläckhögläggning", en: "Spot mounding", desc: "Laikkumätästys tarkoittaa maanmuokkausmenetelmää, jossa istutuspaikat valmistetaan pieninä mättäinä taimien kasvun parantamiseksi.<br><br>Fläckhögläggning är en markberedningsmetod där små högar skapas för plantering av plantor.<br><br>  Spot mounding is a site preparation method where small mounds are created to improve planting conditions for seedlings." },

{ fi: "Laikutus", sv: "Fläckupptagning", en: "Spot scarification", desc: "Laikutus tarkoittaa maanpinnan käsittelyä, jossa kasvillisuus ja pintamaa poistetaan pieniltä alueilta taimien istutusta varten.<br><br>Fläckupptagning är en markberedningsmetod där vegetation och ytjord tas bort i små fläckar inför plantering.<br><br>  Spot scarification is a site preparation method where vegetation and topsoil are removed in small patches for planting." },

{ fi: "Muinaisjäännökset", sv: "Fornlämningar", en: "Ancient remains", desc: "Muinaisjäännökset tarkoittavat ihmisen toiminnasta jääneitä historiallisia kohteita, kuten asuinpaikkoja, hautaröykkiöitä tai rakenteita, joita suojellaan lailla.<br><br>Fornlämningar är historiska lämningar efter mänsklig aktivitet, såsom boplatser, gravrösen eller strukturer som skyddas enligt lag.<br><br>  Ancient remains refer to protected historical sites left by human activity, such as settlements, burial sites, or structures." },
  
    { fi: "Muinaisjäännösalue", sv: "Fornlämningsområde", en: "Archaeological site area", desc: "Muinaisjäännösalue tarkoittaa aluetta, jossa sijaitsee useita suojeltuja muinaisjäännöksiä ja joka on lakisääteisesti suojeltu.<br><br>Fornlämningsområde är ett område med flera skyddade fornlämningar som omfattas av lagligt skydd.<br><br>  An archaeological site area is a protected area containing multiple ancient remains that are legally safeguarded." },

{ fi: "Muinaisjäännösrekisteri", sv: "Fornlämningsregister", en: "Heritage site register", desc: "Muinaisjäännösrekisteri on virallinen tietokanta, johon on kirjattu tunnetut muinaisjäännökset ja arkeologiset kohteet.<br><br>Fornlämningsregister är en officiell databas över kända fornlämningar och arkeologiska platser.<br><br>  A heritage site register is an official database of known archaeological and historical sites." },

{ fi: "Muinaismuistolaki", sv: "Fornminneslag", en: "Ancient Monuments Act", desc: "Muinaismuistolaki on laki, joka suojelee muinaisjäännöksiä ja määrittää niiden säilyttämisen ja tutkimisen säännöt.<br><br>Fornminneslag är en lag som skyddar fornlämningar och reglerar deras bevarande och undersökning.<br><br>  The Ancient Monuments Act is legislation that protects archaeological remains and regulates their preservation and study." },

{ fi: "Rauhoitettu laji", sv: "Fridlyst art", en: "Protected species", desc: "Rauhoitettu laji tarkoittaa lajia, jonka pyydystäminen, tappaminen tai vahingoittaminen on lailla kielletty sen suojelun vuoksi.<br><br>Fridlyst art är en art som är skyddad enligt lag och inte får fångas, dödas eller skadas.<br><br>  A protected species is a species that is legally protected and cannot be captured, killed, or harmed." },

{ fi: "Retkeily", sv: "Friluftsaktiviteter", en: "Outdoor recreation", desc: "Retkeily tarkoittaa luonnossa liikkumista ja siellä tapahtuvaa vapaa-ajan viettoa, kuten vaeltamista ja leiriytymistä.<br><br>Friluftsaktiviteter innebär att vistas och röra sig i naturen som fritidsaktivitet, till exempel vandring och camping.<br><br>  Outdoor recreation refers to leisure activities in nature, such as hiking and camping." },
  
    { fi: "Tuore kangas", sv: "Frisk mo", en: "Fresh forest site", desc: "Tuore kangas tarkoittaa metsätyyppiä, jossa maaperä on melko kostea ja ravinteikas, ja kasvillisuus on rehevämpää kuin kuivilla kankailla.<br><br>Frisk mo är en skogstyp med relativt fuktig och näringsrik mark där vegetationen är mer frodig än på torra mo-marker.<br><br>  A fresh forest site refers to a moderately moist and nutrient-rich forest type with more vigorous vegetation than dry forest sites." },

{ fi: "Halla", sv: "Frost", en: "Frost", desc: "Halla tarkoittaa tilannetta, jossa lämpötila laskee maanpinnassa pakkasen puolelle ja aiheuttaa kasveille kylmävaurioita.<br><br>Frost är ett tillstånd där temperaturen vid markytan sjunker under noll och orsakar köldskador på växter.<br><br>  Frost occurs when temperatures drop below freezing at ground level, causing damage to plants." },

{ fi: "Hallavaurio", sv: "Frostskada", en: "Frost damage", desc: "Hallavaurio tarkoittaa kasveille aiheutuneita vaurioita, kun halla on vahingoittanut niiden kudoksia, kuten versoja tai lehtiä.<br><br>Frostskada är skador på växter som uppstår när frost skadar deras vävnader, såsom skott eller blad.<br><br>  Frost damage refers to injury to plants caused when freezing temperatures harm their tissues, such as shoots or leaves." },

{ fi: "Pintaturpeen jyrsintä", sv: "Fräsning av yttorven", en: "Surface peat milling", desc: "Pintaturpeen jyrsintä tarkoittaa turpeen pintakerroksen mekaanista käsittelyä, jossa sitä muokataan tai irrotetaan esimerkiksi kuivumisen tai käytön helpottamiseksi.<br><br>Fräsning av yttorven är mekanisk bearbetning av torvens ytskikt för att underlätta torkning eller användning.<br><br>  Surface peat milling refers to the mechanical processing of the top layer of peat to facilitate drying or harvesting." },

{ fi: "Siemen", sv: "Frö", en: "Seed", desc: "Siemen on kasvin lisääntymiselin, josta uusi kasvi voi kehittyä oikeissa kasvuolosuhteissa.<br><br>Frö är växternas fortplantningsenhet som kan utvecklas till en ny planta under rätt förhållanden.<br><br>  A seed is the reproductive unit of a plant that can develop into a new plant under suitable conditions." },
  
    { fi: "Siementen itävyys", sv: "Frönas grobarhet", en: "Seed germination capacity", desc: "Siementen itävyys tarkoittaa siementen kykyä itää ja kehittyä taimiksi sopivissa kasvuolosuhteissa.<br><br>Frönas grobarhet är fröers förmåga att gro och utvecklas till plantor under rätt förhållanden.<br><br>  Seed germination capacity refers to the ability of seeds to germinate and develop into seedlings under suitable conditions." },

{ fi: "Siemenviljelys", sv: "Fröplantage", en: "Seed orchard", desc: "Siemenviljelys tarkoittaa metsätaloudessa perustettua aluetta, jossa kasvatetaan valikoituja puita korkealaatuisten siementen tuottamiseksi.<br><br>Fröplantage är ett anlagt område där utvalda träd odlas för att producera högkvalitativa frön.<br><br>  A seed orchard is a managed area where selected trees are grown to produce high-quality seeds." },

{ fi: "Siemensato", sv: "Fröskörd", en: "Seed crop", desc: "Siemensato tarkoittaa tiettynä vuonna tuotettujen siementen määrää, joka voi vaihdella sääolosuhteiden ja puuston mukaan.<br><br>Fröskörd är mängden frön som produceras under ett visst år och varierar beroende på väder och bestånd.<br><br>  Seed crop refers to the amount of seeds produced in a given year, which varies with weather and stand conditions." },

{ fi: "Siemennys", sv: "Frösättning", en: "Seed production", desc: "Siemennys tarkoittaa kasvien siementen muodostumista ja vapautumista lisääntymisen osana.<br><br>Frösättning är bildandet och spridningen av frön som en del av växternas fortplantning.<br><br>  Seed production refers to the formation and release of seeds as part of plant reproduction." },

{ fi: "Siemenpuu", sv: "Fröträd", en: "Seed tree", desc: "Siemenpuu on metsään jätettävä yksittäinen puu tai puuryhmä, jonka tarkoituksena on tuottaa siemeniä metsän luontaista uudistumista varten.<br><br>Fröträd är ett träd som lämnas kvar i skogen för att producera frön och möjliggöra naturlig föryngring.<br><br>  A seed tree is a tree left in a forest to produce seeds for natural regeneration." },
  
    { fi: "Siemenpuuasento", sv: "Fröträdsställning", en: "Seed tree stand", desc: "Siemenpuuasento tarkoittaa metsänhoitomenetelmää, jossa hakkuun jälkeen jätetään siemenpuita metsän luontaista uudistumista varten.<br><br>Fröträdsställning är en skogsföryngringsmetod där fröträd lämnas kvar efter avverkning för naturlig återväxt.<br><br>  A seed tree stand is a silvicultural method where seed trees are left after logging to enable natural regeneration." },

{ fi: "Siemenvuosi", sv: "Fröår", en: "Seed year", desc: "Siemenvuosi tarkoittaa vuotta, jolloin puut tuottavat poikkeuksellisen runsaasti siemeniä metsän uudistumista varten.<br><br>Fröår är ett år då träd producerar ovanligt mycket frön för skogens föryngring.<br><br>  A seed year is a year when trees produce an unusually large amount of seeds for forest regeneration." },

{ fi: "Kosteikkopainanne", sv: "Fuktig däld", en: "Wet hollow", desc: "Kosteikkopainanne tarkoittaa maaston matalaa kohtaa, jossa vesi kerääntyy ja kasvillisuus on kosteikkomaista.<br><br>Fuktig däld är en sänka i terrängen där vatten samlas och fuktälskande vegetation trivs.<br><br>  A wet hollow is a low-lying terrain depression where water accumulates and wetland vegetation develops." },

{ fi: "Täysperkaus", sv: "Fullständig röjning", en: "Complete clearing", desc: "Täysperkaus tarkoittaa taimikon hoitotoimenpidettä, jossa ei-toivottu kasvillisuus poistetaan kokonaan taimien kasvun turvaamiseksi.<br><br>Fullständig röjning är en åtgärd där oönskad vegetation helt avlägsnas för att gynna plantornas tillväxt.<br><br>  Complete clearing is a silvicultural treatment where unwanted vegetation is fully removed to support seedling growth." },

{ fi: "Rahkaneva", sv: "Fuscummosse", en: "Sphagnum bog", desc: "Rahkaneva on karu suotyyppi, jossa vallitsevat rahkasammalet ja ravinteiden määrä on vähäinen.<br><br>Fuscummosse är en näringsfattig mosse där vitmossor dominerar.<br><br>  A sphagnum bog is a nutrient-poor wetland dominated by sphagnum mosses." },
  
    { fi: "Rahkaräme", sv: "Fuscummyr", en: "Sphagnum pine bog", desc: "Rahkaräme tarkoittaa suotyyppiä, jossa rahkasammalten lisäksi kasvaa yleensä kitukasvuista mäntyä ja olosuhteet ovat niukkaravinteiset.<br><br>Fuscummyr är en myrtyp där vitmossor dominerar tillsammans med gles, lågväxande tall.<br><br>  A sphagnum pine bog is a nutrient-poor wetland type dominated by sphagnum moss with sparse pine trees." },

{ fi: "Navero", sv: "Fåra", en: "Channel or furrow", desc: "Navero tarkoittaa maahan muodostunutta tai kaivettua pitkää painannetta, jota käytetään esimerkiksi veden ohjaukseen tai maanmuokkaukseen.<br><br>Fåra är en långsmal fördjupning i marken som används för exempelvis vattenavledning eller markberedning.<br><br>  A channel or furrow is a long narrow depression in the ground used for drainage or soil preparation." },

{ fi: "Kenttäkoe", sv: "Fältförsök", en: "Field experiment", desc: "Kenttäkoe tarkoittaa luonnonolosuhteissa tehtävää koetta, jossa tutkitaan esimerkiksi metsänhoidon tai kasvillisuuden vaikutuksia.<br><br>Fältförsök är ett experiment som utförs i naturliga förhållanden för att studera till exempel skogsskötsel eller vegetation.<br><br>  A field experiment is a study conducted under natural conditions to examine effects such as forestry practices or vegetation response." },

{ fi: "Kenttäkerros", sv: "Fältskikt", en: "Field layer", desc: "Kenttäkerros tarkoittaa kasvillisuuden kerrosta, joka koostuu matalista kasveista kuten heinistä, varvuista ja ruohokasveista.<br><br>Fältskikt är växtskiktet bestående av låga växter som gräs, örter och risväxter.<br><br>  The field layer is the vegetation layer consisting of low-growing plants such as grasses, herbs, and dwarf shrubs." },

{ fi: "Kulku-ura", sv: "Färdled", en: "Travel route", desc: "Kulku-ura tarkoittaa maastoon muodostunutta tai tehtyä reittiä, jota pitkin liikutaan esimerkiksi metsätyökoneilla tai jalkaisin.<br><br>Färdled är en stig eller väg i terrängen som används för förflyttning, till exempel med maskiner eller till fots.<br><br>  A travel route is a path or track in terrain used for movement, for example by forestry machines or on foot." },
    { fi: "Värivika", sv: "Färgfel", en: "Color defect", desc: "Värivika tarkoittaa puuaineen tai materiaalin poikkeavaa värimuutosta, joka voi heikentää sen laatua tai ulkonäköä.<br><br>Färgfel är en avvikande färgförändring i trä eller material som kan försämra dess kvalitet eller utseende.<br><br>  A color defect refers to an abnormal discoloration in wood or material that may reduce its quality or appearance." },

{ fi: "Ruokailupaikka", sv: "Födoplats", en: "Feeding site", desc: "Ruokailupaikka tarkoittaa aluetta, jossa eläimet käyvät säännöllisesti syömässä ravintoa.<br><br>Födoplats är ett område där djur regelbundet söker och äter föda.<br><br>  A feeding site is an area where animals regularly go to obtain food." },

{ fi: "Palleroporonjäkälä", sv: "Fönsterlav", en: "Reindeer lichen", desc: "Palleroporonjäkälä on yleinen jäkälälaji, joka kasvaa erityisesti karuilla mailla ja on tärkeä ravintoaine poroille.<br><br>Fönsterlav är en lavart som växer på näringsfattiga marker och är viktig föda för renar.<br><br>  Reindeer lichen is a lichen species common in poor soils and an important food source for reindeer." },

{ fi: "Haaraisuus", sv: "Förgrenade stammar", en: "Branching habit", desc: "Haaraisuus tarkoittaa puun tai kasvin kasvutapaa, jossa rungosta tai päävarresta muodostuu useita haaroja.<br><br>Förgrenade stammar innebär att ett träd eller en växt utvecklar flera grenar från huvudstammen.<br><br>  Branching habit refers to a growth form where a tree or plant develops multiple branches from the main stem." },

{ fi: "Maatuneisuus", sv: "Förmultning", en: "Decomposition", desc: "Maatuneisuus tarkoittaa orgaanisen aineen hajoamisastetta, jossa esimerkiksi puu tai kasviaines on muuttunut humukseksi.<br><br>Förmultning är nedbrytningen av organiskt material där till exempel trä eller växtdelar bryts ner till humus.<br><br>  Decomposition refers to the degree of breakdown of organic matter, such as wood or plant material turning into humus." },
  
    { fi: "Maatuneisuusaste", sv: "Förmultningsgrad", en: "Degree of decomposition", desc: "Maatuneisuusaste tarkoittaa sitä, kuinka pitkälle orgaaninen aine, kuten karike tai puu, on hajonnut maaperässä.<br><br>Förmultningsgrad beskriver hur långt organiskt material som förna eller trä har brutits ner i marken.<br><br>  Degree of decomposition refers to how far organic material such as litter or wood has broken down in the soil." },

{ fi: "Karike", sv: "Förna", en: "Litter layer", desc: "Karike tarkoittaa metsän maapinnalle kertynyttä orgaanista ainesta, kuten lehtiä, neulasia ja pieniä oksia.<br><br>Förna är det organiska material som samlas på markytan i skogen, såsom löv, barr och små kvistar.<br><br>  The litter layer refers to organic material accumulated on the forest floor, such as leaves, needles, and small branches." },

{ fi: "Uudistushakkuu", sv: "Förnyelseavverkning", en: "Regeneration cutting", desc: "Uudistushakkuu tarkoittaa hakkuuta, jossa metsä poistetaan tai harvennetaan niin, että tilalle syntyy uusi puusukupolvi.<br><br>Förnyelseavverkning är en avverkning där skogen tas bort eller glesas ut för att ge plats åt ny föryngring.<br><br>  Regeneration cutting is a harvesting method where a forest is removed or heavily thinned to allow a new generation of trees to establish." },

{ fi: "Metsän uudistamisvaihe", sv: "Förnyelsefas", en: "Regeneration phase", desc: "Metsän uudistamisvaihe tarkoittaa metsän kehitysvaihetta, jossa vanha puusto korvautuu uudella taimikkovaiheella.<br><br>Förnyelsefas är den utvecklingsfas där ett gammalt bestånd ersätts av ny föryngring.<br><br>  The regeneration phase is the stage in forest development where old trees are replaced by new seedlings." },

{ fi: "Uudistamisketju", sv: "Förnyelsekedja", en: "Regeneration chain", desc: "Uudistamisketju tarkoittaa metsänuudistamisen toimenpiteiden kokonaisuutta, jossa eri vaiheet etenevät taimikon perustamiseen asti.<br><br>Förnyelsekedja är en serie åtgärder inom skogsföryngring som leder fram till etablering av en ny skog.<br><br>  A regeneration chain refers to the sequence of silvicultural actions that lead to the establishment of a new forest stand." },
  
    { fi: "Uudistamismenetelmä", sv: "Förnyelsemetod", en: "Regeneration method", desc: "Uudistamismenetelmä tarkoittaa tapaa, jolla metsä uudistetaan, kuten luontainen uudistaminen tai istutus.<br><br>Förnyelsemetod är det sätt på vilket en skog föryngras, till exempel naturlig föryngring eller plantering.<br><br>  A regeneration method refers to the approach used to renew a forest, such as natural regeneration or planting." },

{ fi: "Uudistamistapa", sv: "Förnyelsemetod", en: "Regeneration approach", desc: "Uudistamistapa tarkoittaa käytännön menetelmää, jolla metsän uudistaminen toteutetaan tietyssä kohteessa.<br><br>Förnyelsemetod kan även avse det praktiska sättet att genomföra föryngring i ett specifikt område.<br><br>  A regeneration approach refers to the practical way in which forest regeneration is carried out in a specific area." },

{ fi: "Uudistuskypsä metsikkö", sv: "Förnyelsemoget bestånd", en: "Regeneration-ready stand", desc: "Uudistuskypsä metsikkö tarkoittaa metsää, joka on saavuttanut iän tai tilan, jossa se kannattaa uudistaa.<br><br>Förnyelsemoget bestånd är ett skogsbestånd som har nått den ålder eller struktur där föryngring är lämplig.<br><br>  A regeneration-ready stand is a forest stand that has reached a stage where regeneration is appropriate." },

{ fi: "Uudistuskypsyys", sv: "Förnyelsemognad", en: "Regeneration maturity", desc: "Uudistuskypsyys tarkoittaa metsikön kehitysvaihetta, jossa puusto on kasvanut hakkuukypsäksi ja valmis uudistettavaksi.<br><br>Förnyelsemognad är det utvecklingsstadium där ett bestånd är moget för avverkning och föryngring.<br><br>  Regeneration maturity refers to the stage when a forest stand has reached maturity for harvesting and renewal." },

{ fi: "Uudistushakkuukohde", sv: "Förnyelseobjekt", en: "Regeneration site", desc: "Uudistushakkuukohde tarkoittaa metsikköä tai aluetta, jossa tehdään uudistushakkuu metsän uudistamiseksi.<br><br>Förnyelseobjekt är ett skogsområde där föryngringsavverkning utförs för att skapa ny skog.<br><br>  A regeneration site is an area where regeneration cutting is carried out to establish a new forest." },
  
    { fi: "Uudistamisajankohta", sv: "Förnyelsetidpunkt", en: "Regeneration timing", desc: "Uudistamisajankohta tarkoittaa ajankohtaa, jolloin metsä päätetään uudistaa esimerkiksi hakkuun ja uuden puusukupolven perustamisen vuoksi.<br><br>Förnyelsetidpunkt är den tidpunkt då ett bestånd beslutas att föryngras genom avverkning och ny etablering.<br><br>  Regeneration timing refers to the point in time when a forest is scheduled for renewal through harvesting and re-establishment." },

{ fi: "Uudistusala", sv: "Förnyelseyta", en: "Regeneration area", desc: "Uudistusala tarkoittaa metsän aluetta, jolla tehdään uudistamistoimenpiteitä uuden puuston kasvattamiseksi.<br><br>Förnyelseyta är ett skogsområde där föryngringsåtgärder utförs för att etablera ny skog.<br><br>  A regeneration area is a forest area where renewal measures are carried out to establish new tree growth." },

{ fi: "Pohjaveden pilaantuminen", sv: "Förorening av grundvatten", en: "Groundwater contamination", desc: "Pohjaveden pilaantuminen tarkoittaa tilannetta, jossa haitalliset aineet pääsevät maaperän läpi pohjaveteen ja heikentävät sen laatua.<br><br>Förorening av grundvatten innebär att skadliga ämnen tränger ner i grundvattnet och försämrar dess kvalitet.<br><br>  Groundwater contamination refers to the process where harmful substances enter groundwater and reduce its quality." },

{ fi: "Ennakkoraivaus", sv: "Förröjning", en: "Pre-clearing", desc: "Ennakkoraivaus tarkoittaa metsänhoitotoimenpidettä, jossa poistetaan alikasvosta ja muuta kasvillisuutta ennen hakkuuta tai istutusta.<br><br>Förröjning är en skogsvårdsåtgärd där undervegetation och annan växtlighet tas bort före avverkning eller plantering.<br><br>  Pre-clearing is a silvicultural practice where undergrowth and vegetation are removed before harvesting or planting." },

{ fi: "Uudistusalan ennakkoraivaus", sv: "Förröjning av förnyelseytan", en: "Site pre-clearing", desc: "Uudistusalan ennakkoraivaus tarkoittaa uudistettavan metsän alueen raivaamista ennen varsinaisia uudistustoimenpiteitä.<br><br>Förröjning av förnyelseytan innebär röjning av ett område som ska föryngras före de egentliga åtgärderna.<br><br>  Site pre-clearing refers to clearing a regeneration area before actual renewal operations begin." },
  
    { fi: "Ensiharvennus", sv: "Första gallring", en: "First thinning", desc: "Ensiharvennus tarkoittaa metsänhoidollista hakkuuta, jossa nuoresta metsästä poistetaan osa puista kasvutilan parantamiseksi.<br><br>Första gallring är en skogsvårdsåtgärd där en del av träden i ett ungt bestånd tas bort för att ge utrymme åt de kvarvarande träden.<br><br>  First thinning is a silvicultural operation where some trees are removed from a young stand to improve growing space for the remaining trees." },

{ fi: "Soistunut kangas", sv: "Försumpad mo", en: "Waterlogged forest site", desc: "Soistunut kangas tarkoittaa kangasmetsätyyppiä, joka on alkanut vettyä ja muuttua kosteammaksi suoksi.<br><br>Försumpad mo är en skogstyp där en tidigare torr mo har blivit fuktigare och börjat utvecklas mot myr.<br><br>  A waterlogged forest site is a forest type where a previously dry site has become wetter and is transitioning toward wetland conditions." },

{ fi: "Soistuma", sv: "Försumpat ställe", en: "Waterlogged area", desc: "Soistuma tarkoittaa maaston kohtaa, jossa vesi seisoo tai maaperä on jatkuvasti märkä, mikä edistää suon muodostumista.<br><br>Försumpat ställe är en plats i terrängen där marken är vattenmättad och ofta leder till myrbildning.<br><br>  A waterlogged area is a location where water accumulates or the soil remains saturated, often leading to wetland formation." },

{ fi: "Taimettumisvarmuus", sv: "Förutsättningar för plantsättning", en: "Regeneration success probability", desc: "Taimettumisvarmuus tarkoittaa metsän kykyä uudistua onnistuneesti ja tuottaa riittävästi taimia luonnollisesti tai istutuksen kautta.<br><br>Förutsättningar för plantsättning avser sannolikheten att en föryngring lyckas och att tillräckligt många plantor etableras.<br><br>  Regeneration success probability refers to the likelihood that a forest will successfully regenerate and establish sufficient seedlings." },

{ fi: "Jalostettu siemen", sv: "Förädlat frö", en: "Improved seed", desc: "Jalostettu siemen tarkoittaa siementä, joka on tuotettu valikoiduista, geneettisesti paremmista puista kasvun ja laadun parantamiseksi.<br><br>Förädlat frö är frö som produceras från utvalda träd med förbättrade genetiska egenskaper.<br><br>  Improved seed refers to seeds produced from selected trees with superior genetic traits for better growth and quality." },
  
    { fi: "Jalostusaste", sv: "Förädlingsgrad", en: "Degree of improvement", desc: "Jalostusaste tarkoittaa sitä, kuinka pitkälle puumateriaalia tai siementä on jalostettu parempien kasvu- tai laatuominaisuuksien saavuttamiseksi.<br><br>Förädlingsgrad avser hur långt material eller frö har förädlats för att förbättra tillväxt eller kvalitet.<br><br>  Degree of improvement refers to how far plant material or seeds have been genetically or otherwise improved." },

{ fi: "Jalostushyöty", sv: "Förädlingsnytta", en: "Breeding benefit", desc: "Jalostushyöty tarkoittaa sitä lisäarvoa, joka saadaan jalostetuista siemenistä tai puista, kuten parempi kasvu tai laatu.<br><br>Förädlingsnytta är den extra nytta som uppnås genom förädlat material, till exempel bättre tillväxt eller kvalitet.<br><br>  Breeding benefit refers to the added value gained from improved genetic material, such as better growth or quality." },

{ fi: "Jalostusarvo", sv: "Förädlingsvärde", en: "Breeding value", desc: "Jalostusarvo tarkoittaa puun tai siemenen geneettistä arvoa, joka kuvaa sen periyttämää laatua ja kasvukykyä.<br><br>Förädlingsvärde är det genetiska värdet hos ett träd eller frö som beskriver dess nedärvda kvalitet och tillväxtförmåga.<br><br>  Breeding value refers to the genetic value of a tree or seed indicating its inherited quality and growth potential." },

{ fi: "Muuttuma", sv: "Förändring", en: "Transition state", desc: "Muuttuma tarkoittaa suokasvillisuuden tai maaperän kehitysvaihetta, jossa alue muuttuu yhdestä luontotyypistä toiseen.<br><br>Förändring kan i detta sammanhang avse en övergångsfas där ett område förändras från en naturtyp till en annan.<br><br>  Transition state refers to a stage where an ecosystem is changing from one type to another." },

{ fi: "Ainespuu", sv: "Gagnvirke", en: "Saw timber", desc: "Ainespuu tarkoittaa puutavaraa, jota voidaan käyttää teollisuudessa sahatavarana tai muissa jalostetuissa puutuotteissa.<br><br>Gagnvirke är virke som kan användas industriellt, till exempel som sågtimmer eller i vidareförädling.<br><br>  Saw timber refers to wood suitable for industrial use such as lumber or further wood processing." },

{ fi: "Käyttöpuu", sv: "Gagnvirke", en: "Commercial timber", desc: "Käyttöpuu tarkoittaa puuta, joka kelpaa teolliseen käyttöön tai rakentamiseen, toisin kuin polttopuu tai hukkapuu.<br><br>Gagnvirke är virke som lämpar sig för industriell användning eller byggnation.<br><br>  Commercial timber refers to wood suitable for industrial use or construction rather than fuelwood or waste wood." },
  
    { fi: "Ainespuurunko", sv: "Gagnvirkesstam", en: "Saw log stem", desc: "Ainespuurunko tarkoittaa puun runkoa, joka täyttää laatuvaatimukset ja voidaan käyttää sahatavaraksi tai muuhun teolliseen käyttöön.<br><br>Gagnvirkesstam är en trädstam som uppfyller kvalitetskrav och kan användas som sågtimmer eller industrivirke.<br><br>  A saw log stem refers to a tree trunk suitable for sawn timber or industrial wood use." },

{ fi: "Harvennushakkuu", sv: "Gallring", en: "Thinning", desc: "Harvennushakkuu tarkoittaa metsänhoitotoimenpidettä, jossa osa puista poistetaan kasvutilan ja metsän kasvun parantamiseksi.<br><br>Gallring är en skogsvårdsåtgärd där en del av träden tas bort för att förbättra tillväxtutrymmet.<br><br>  Thinning is a silvicultural practice where some trees are removed to improve growth conditions for the remaining stand." },

{ fi: "Harvennuskerta", sv: "Gallring", en: "Thinning operation", desc: "Harvennuskerta tarkoittaa yksittäistä harvennustoimenpidettä, joka tehdään metsikössä sen kasvun aikana.<br><br>Gallring kan avse ett enskilt gallringstillfälle i ett bestånd.<br><br>  A thinning operation refers to a single thinning event carried out in a forest stand during its development." },

{ fi: "Harvennustarve", sv: "Gallringsbehov", en: "Need for thinning", desc: "Harvennustarve tarkoittaa arvioitua tarvetta poistaa puita metsiköstä sen kasvun ja laadun parantamiseksi.<br><br>Gallringsbehov är det uppskattade behovet av att avlägsna träd för att förbättra tillväxt och kvalitet.<br><br>  Need for thinning refers to the assessed necessity of removing trees to improve stand growth and quality." },

{ fi: "Harvennustapa", sv: "Gallringsform", en: "Thinning method", desc: "Harvennustapa tarkoittaa menetelmää, jolla puut valitaan poistettaviksi harvennushakkuussa.<br><br>Gallringsform är den metod som används för att välja vilka träd som ska tas bort vid gallring.<br><br>  Thinning method refers to the approach used to select trees for removal during thinning." },
  
   { fi: "Harvennusraja", sv: "Gallringsgräns", en: "Thinning threshold", desc: "Harvennusraja tarkoittaa rajaa tai kriteeriä, jonka perusteella päätetään, milloin metsässä tehdään harvennushakkuu.<br><br>Gallringsgräns är en gräns eller ett kriterium som avgör när gallring ska utföras i ett bestånd.<br><br>  Thinning threshold refers to the limit or criterion used to decide when thinning should be carried out in a forest stand." },

{ fi: "Harvennusmalli", sv: "Gallringsmall", en: "Thinning model", desc: "Harvennusmalli tarkoittaa metsänhoidollista ohjetta tai mallia, joka määrittää kuinka paljon ja millä tavalla puita poistetaan harvennuksessa.<br><br>Gallringsmall är en skötselmodell som anger hur mycket och på vilket sätt träd ska avlägsnas vid gallring.<br><br>  A thinning model is a management guideline that defines how much and in what way trees are removed during thinning." },

{ fi: "Harvennuskohde", sv: "Gallringsobjekt", en: "Thinning site", desc: "Harvennuskohde tarkoittaa metsikköä tai aluetta, jossa harvennushakkuu toteutetaan.<br><br>Gallringsobjekt är ett skogsområde där gallring utförs.<br><br>  A thinning site refers to a forest stand or area where thinning operations are carried out." },

{ fi: "Kasvatusmetsä", sv: "Gallringsskog", en: "Production forest", desc: "Kasvatusmetsä tarkoittaa metsää, jota hoidetaan puuston kasvun ja puuntuotannon optimoimiseksi harvennusten avulla.<br><br>Gallringsskog är en skog som sköts för att optimera tillväxt och virkesproduktion genom gallring.<br><br>  A production forest is a forest managed to optimize tree growth and timber production through thinning." },

{ fi: "Harvennusvoimakkuus", sv: "Gallringsstyrka", en: "Thinning intensity", desc: "Harvennusvoimakkuus tarkoittaa sitä, kuinka suuri osa puustosta poistetaan harvennushakkuussa.<br><br>Gallringsstyrka beskriver hur stor andel av träden som tas bort vid gallring.<br><br>  Thinning intensity refers to how large a proportion of trees is removed during thinning." },

{ fi: "Harvennuskertymä", sv: "Gallringsuttag", en: "Thinning yield", desc: "Harvennuskertymä tarkoittaa harvennushakkuussa poistettavan puun määrää, joka voidaan hyödyntää puutavarana.<br><br>Gallringsuttag är mängden virke som tas ut vid gallring och kan användas som råvara.<br><br>  Thinning yield refers to the volume of timber removed during thinning that can be utilized." },

{ fi: "Hieskoivu", sv: "Glasbjörk", en: "Downy birch", desc: "Hieskoivu on koivulaji, joka viihtyy kosteilla ja ravinteikkailla kasvupaikoilla ja on yleinen koko Suomessa.<br><br>Glasbjörk är en björkart som trivs på fuktiga och näringsrika marker och är vanlig i hela Finland.<br><br>  Downy birch is a birch species that thrives in moist and nutrient-rich sites and is common throughout Finland." },
  
    { fi: "Kluuvijärvi", sv: "Glo", en: "Relict lagoon lake", desc: "Kluuvijärvi tarkoittaa entistä merenlahtea, joka on maankohoamisen seurauksena eristynyt merestä ja muuttunut järveksi.<br><br>Glo är en forntida havsvik som av landhöjning har avskilts från havet och blivit en sjö.<br><br>  A relict lagoon lake is a former sea bay that has become isolated from the sea due to land uplift and turned into a lake." },

{ fi: "GMT", sv: "GMT", en: "GMT", desc: "Geranium-Myrtillus-typ" },

{ fi: "Jyrsijätuho", sv: "Gnagarskada", en: "Rodent damage", desc: "Jyrsijätuho tarkoittaa metsälle tai viljelykasveille aiheutunutta vahinkoa, jonka ovat tehneet jyrsijät kuten myyrät tai hiiret.<br><br>Gnagarskada är skador på skog eller grödor orsakade av gnagare som sorkar eller möss.<br><br>  Rodent damage refers to harm caused to forests or crops by rodents such as voles or mice." },

{ fi: "Runsasravinteisuus", sv: "God bördighet", en: "High fertility", desc: "Runsasravinteisuus tarkoittaa maaperän tai kasvupaikan korkeaa ravinteiden määrää, joka edistää kasvien kasvua.<br><br>God bördighet innebär att marken har hög näringshalt som gynnar växttillväxt.<br><br>  High fertility refers to soil or site conditions with abundant nutrients that promote plant growth." },

{ fi: "Hyvä metsänhoito", sv: "God skogsvård", en: "Good forest management", desc: "Hyvä metsänhoito tarkoittaa metsän hoitamista kestävällä tavalla, joka edistää puuston kasvua, terveyttä ja monimuotoisuutta.<br><br>God skogsvård innebär hållbar skötsel av skog som främjar tillväxt, hälsa och biologisk mångfald.<br><br>  Good forest management refers to sustainable forest care that promotes growth, health, and biodiversity." },

{ fi: "GOMT", sv: "GOMT", en: "GOMT", desc: "Geranium-Oxalis-Myrtillus-typ" },
  
    { fi: "Kuusi", sv: "Gran", en: "Norway spruce", desc: "Kuusi on yleinen havupuu, joka kasvaa erityisesti kosteilla ja ravinteikkailla kasvupaikoilla ja on tärkeä metsätaloudelle.<br><br>Gran är ett vanligt barrträd som trivs på fuktiga och näringsrika marker och är viktigt inom skogsbruket.<br><br>  Norway spruce is a common conifer tree that grows in moist and nutrient-rich sites and is important in forestry." },

{ fi: "Kirjanpainaja", sv: "Granbarkborre", en: "Spruce bark beetle", desc: "Kirjanpainaja on kuusissa elävä tuhohyönteinen, joka kaivautuu puun kuoren alle ja voi aiheuttaa laajoja metsätuhoja.<br><br>Granbarkborre är en skadegörande insekt som lever i gran och borrar sig in under barken, vilket kan orsaka omfattande skador.<br><br>  The spruce bark beetle is a pest insect that lives in spruce trees and tunnels under the bark, often causing major forest damage." },

{ fi: "Kuusikko", sv: "Granbestånd", en: "Spruce stand", desc: "Kuusikko tarkoittaa metsikköä, jossa kuusi on vallitseva puulaji.<br><br>Granbestånd är ett skogsbestånd där gran dominerar som trädslag.<br><br>  A spruce stand is a forest area dominated by spruce trees." },

{ fi: "Kuusettuminen", sv: "Grandominans", en: "Spruce dominance", desc: "Kuusettuminen tarkoittaa ilmiötä, jossa kuusi alkaa vallita metsikössä muiden puulajien kustannuksella.<br><br>Grandominans innebär att gran blir det dominerande trädslaget i ett bestånd.<br><br>  Spruce dominance refers to the process where spruce becomes the dominant tree species in a forest stand." },

{ fi: "Kuusenjuurikääpä", sv: "Granens rotticka", en: "Root rot fungus in spruce", desc: "Kuusenjuurikääpä on sienitauti, joka lahottaa kuusen juuria ja heikentää puiden kasvua sekä aiheuttaa metsätuhoja.<br><br>Granens rotticka är en svampsjukdom som orsakar rotröta i gran och försvagar trädens tillväxt.<br><br>  Root rot fungus in spruce is a fungal disease that decays spruce roots and weakens tree growth, often causing forest damage." },

{ fi: "Uudistustuloksen tarkastus", sv: "Granskning av förnyelseresultatet", en: "Regeneration result inspection", desc: "Uudistustuloksen tarkastus tarkoittaa metsän uudistamisen onnistumisen arviointia, jossa tarkastetaan taimikon synty ja laatu.<br><br>Granskning av förnyelseresultatet innebär att man utvärderar hur väl föryngringen har lyckats och hur plantorna har etablerats.<br><br>  Regeneration result inspection refers to evaluating the success of forest regeneration and the establishment of seedlings." },
  
    { fi: "Taimikon tarkastus", sv: "Granskning av plantskogen", en: "Seedling stand inspection", desc: "Taimikon tarkastus tarkoittaa taimikon tilan ja kehityksen arviointia, jossa tarkistetaan taimien määrä, laatu ja kasvuolosuhteet.<br><br>Granskning av plantskogen innebär att man bedömer plantbeståndets tillstånd, antal, kvalitet och växtförhållanden.<br><br>  Seedling stand inspection refers to evaluating the condition, density, and growth of a young forest stand." },

{ fi: "Kuusipuutavara", sv: "Granvirke", en: "Spruce timber", desc: "Kuusipuutavara tarkoittaa kuusesta saatavaa puutavaraa, jota käytetään esimerkiksi rakentamiseen ja teollisiin tuotteisiin.<br><br>Granvirke är virke från gran som används till exempel inom byggnation och industri.<br><br>  Spruce timber refers to wood derived from spruce trees used in construction and industrial products." },

{ fi: "Korpirahkasammal", sv: "Granvitmossa", en: "Sphagnum moss (spruce mire type)", desc: "Korpirahkasammal on rahkasammallaji, joka kasvaa kosteissa korpimetsissä ja soistuneilla alueilla.<br><br>Granvitmossa är en art av vitmossa som växer i fuktiga sumpskogar och myrmarker.<br><br>  Sphagnum moss (spruce mire type) refers to moss species growing in moist spruce-dominated swamp forests and wetland areas." },

{ fi: "Sirkkataimi", sv: "Groddplanta", en: "Germinating seedling", desc: "Sirkkataimi tarkoittaa kasvin varhaisinta kehitysvaihetta, jossa siemenestä on juuri alkanut kasvaa taimi.<br><br>Groddplanta är det tidigaste utvecklingsstadiet hos en växt efter att fröet har börjat gro.<br><br>  A germinating seedling is the earliest stage of plant development after a seed has begun to sprout." },

{ fi: "Latvusmassa", sv: "Grot", en: "Crown biomass (branches and tops)", desc: "Latvusmassa tarkoittaa puun latvuksen muodostamaa biomassaa, kuten oksia ja latvuksia, joka jää usein hakkuun jälkeen metsään.<br><br>Grot (grenar och toppar) är den biomassa som består av trädens kronor, såsom grenar och toppar, som ofta blir kvar efter avverkning.<br><br>  Crown biomass refers to the branches and treetops of trees, often left in the forest after logging." },
  
    { fi: "Puuston järeys", sv: "Grovlek", en: "Tree size class", desc: "Puuston järeys tarkoittaa metsikön puiden paksuutta ja kokoa, yleensä rinnankorkeusläpimitan perusteella arvioituna.<br><br>Grovlek beskriver trädens grovlek i ett bestånd, ofta baserat på diameter i brösthöjd.<br><br>  Tree size class refers to the thickness and size of trees in a stand, typically measured by diameter at breast height." },

{ fi: "Karkea hieta", sv: "Grovmo", en: "Coarse sandy soil", desc: "Karkea hieta tarkoittaa karkearakeista maaperää, jossa on enemmän hiekkahiukkasia kuin hienojakoisessa maassa ja joka läpäisee vettä hyvin.<br><br>Grovmo är en grovkornig jordtyp med relativt stor andel sand som släpper igenom vatten lätt.<br><br>  Coarse sandy soil refers to a coarse-grained soil with a higher proportion of sand particles that drains well." },

{ fi: "Perusparannus", sv: "Grundförbättring", en: "Infrastructure improvement", desc: "Perusparannus tarkoittaa pysyviä toimenpiteitä, joilla parannetaan esimerkiksi metsäteitä tai ojituksia niiden toimivuuden ja kestävyyden lisäämiseksi.<br><br>Grundförbättring är permanenta åtgärder som förbättrar till exempel skogsvägar eller diken för bättre funktion och hållbarhet.<br><br>  Infrastructure improvement refers to long-term measures that enhance structures such as forest roads or drainage systems." },

{ fi: "Pohjavesi", sv: "Grundvatten", en: "Groundwater", desc: "Pohjavesi tarkoittaa maaperän ja kallioperän huokosissa ja raoissa olevaa vettä, joka on tärkeä juomaveden lähde.<br><br>Grundvatten är vatten som finns i markens och berggrundens porer och sprickor och utgör en viktig dricksvattenkälla.<br><br>  Groundwater is water stored in the pores and cracks of soil and bedrock, serving as an important source of drinking water." },

{ fi: "Pohjavedenpinnan taso", sv: "Grundvattennivå", en: "Groundwater level", desc: "Pohjavedenpinnan taso tarkoittaa sitä korkeutta, jolla pohjavesi sijaitsee maan alla suhteessa maanpintaan.<br><br>Grundvattennivå är den nivå där grundvattnet står under markytan.<br><br>  Groundwater level refers to the depth at which groundwater is found below the ground surface." },
    { fi: "Pohjavesialue", sv: "Grundvattenområde", en: "Groundwater area", desc: "Pohjavesialue tarkoittaa aluetta, jossa muodostuu ja esiintyy pohjavettä ja joka on usein tärkeä vedenhankinnan kannalta.<br><br>Grundvattenområde är ett område där grundvatten bildas och förekommer och som ofta är viktigt för vattenförsörjning.<br><br>  A groundwater area is a region where groundwater is formed and present, often important for water supply." },

{ fi: "Pohjavesialueen raja", sv: "Grundvattenområdets gräns", en: "Boundary of groundwater area", desc: "Pohjavesialueen raja tarkoittaa sitä maantieteellistä rajaa, joka määrittää pohjavesialueen laajuuden.<br><br>Grundvattenområdets gräns är den geografiska gräns som avgränsar ett grundvattenområde.<br><br>  The boundary of a groundwater area is the geographic limit defining the extent of the groundwater zone." },

{ fi: "Pohjavesialueen reunavyöhyke", sv: "Grundvattenområdets kantzon", en: "Buffer zone of groundwater area", desc: "Pohjavesialueen reunavyöhyke tarkoittaa aluetta pohjavesialueen reunoilla, jossa maankäyttö voi vaikuttaa pohjaveden laatuun.<br><br>Grundvattenområdets kantzon är den zon i utkanten av ett grundvattenområde där markanvändning kan påverka vattenkvaliteten.<br><br>  A buffer zone of a groundwater area is the outer area where land use may affect groundwater quality." },

{ fi: "Pohjavedenpinta", sv: "Grundvattenyta", en: "Groundwater surface", desc: "Pohjavedenpinta tarkoittaa tasoa, jossa maaperä on täysin veden kyllästämä ja pohjavesi alkaa.<br><br>Grundvattenyta är den nivå där marken är vattenmättad och grundvattnet börjar.<br><br>  The groundwater surface is the level at which the ground becomes fully saturated with water." },

{ fi: "Pohjaveden muodostumisalue", sv: "Grundvattnets bildningsområde", en: "Recharge area", desc: "Pohjaveden muodostumisalue tarkoittaa aluetta, jossa sade- ja sulamisvedet imeytyvät maaperään ja muodostavat pohjavettä.<br><br>Grundvattnets bildningsområde är det område där nederbörd och smältvatten infiltrerar marken och bildar grundvatten.<br><br>  A recharge area is where precipitation and meltwater infiltrate the ground to form groundwater." },

{ fi: "Pohjapinta-ala", sv: "Grundyta", en: "Basal area", desc: "Pohjapinta-ala tarkoittaa metsikön puiden poikkileikkauspinta-alojen summaa tietyllä pinta-alalla, yleensä hehtaaria kohti.<br><br>Grundyta är summan av trädens tvärsnittsareor i ett bestånd per ytenhet, vanligtvis per hektar.<br><br>  Basal area is the sum of cross-sectional areas of trees in a stand per unit area, typically per hectare." },

{ fi: "Säästöpuuryhmä", sv: "Grupp med naturvårdsträd", en: "Retention tree group", desc: "Säästöpuuryhmä tarkoittaa hakkuussa jätettävää puuryhmää, joka säästetään luonnon monimuotoisuuden turvaamiseksi.<br><br>Grupp med naturvårdsträd är en grupp träd som lämnas kvar vid avverkning för att bevara biologisk mångfald.<br><br>  A retention tree group is a cluster of trees left during logging to support biodiversity." },
  
    { fi: "Sora", sv: "Grus", en: "Gravel", desc: "Sora tarkoittaa karkearakeista maa-ainesta, jota käytetään esimerkiksi teiden rakentamisessa ja maanrakennuksessa.<br><br>Grus är ett grovkornigt jordmaterial som används till exempel vid vägbyggen och markarbeten.<br><br>  Gravel refers to a coarse-grained material used in road construction and earthworks." },

{ fi: "Soramoreeni", sv: "Grusig morän", en: "Sandy till gravelly till soil (till variant)", desc: "Soramoreeni on moreenimaa, jossa on runsaasti soraa ja karkeaa kiviainesta.<br><br>Grusig morän är en moränjord med hög andel grus och grovt stenmaterial.<br><br>  Gravelly till is a type of till soil containing a high proportion of gravel and coarse material." },

{ fi: "Harmaaleppä", sv: "Gråal", en: "Grey alder", desc: "Harmaaleppä on lehtipuu, joka kasvaa kosteilla ja rehevillä kasvupaikoilla ja sitoo typpeä maaperään.<br><br>Gråal är ett lövträd som växer på fuktiga och näringsrika marker och binder kväve i marken.<br><br>  Grey alder is a deciduous tree that grows in moist and fertile sites and fixes nitrogen in the soil." },

{ fi: "Taimikon varhaishoito", sv: "Gräs- och slyröjning", en: "Early seedling stand tending", desc: "Taimikon varhaishoito tarkoittaa taimikon hoitotoimenpiteitä, joissa poistetaan heinää ja vesakkoa taimien kasvun turvaamiseksi.<br><br>Gräs- och slyröjning är åtgärder i unga bestånd där gräs och sly tas bort för att gynna plantornas tillväxt.<br><br>  Early seedling stand tending refers to removing grass and brush to support the growth of young trees." },

{ fi: "Heinäntorjunta", sv: "Gräsröjning", en: "Grass control", desc: "Heinäntorjunta tarkoittaa toimenpiteitä, joilla vähennetään heinän ja muun kasvillisuuden kilpailua taimien kanssa.<br><br>Gräsröjning innebär åtgärder för att minska konkurrensen från gräs i unga bestånd.<br><br>  Grass control refers to measures that reduce grass competition in young forest stands." },

{ fi: "Heinittyminen", sv: "Gräsuppslag", en: "Grass invasion", desc: "Heinittyminen tarkoittaa tilannetta, jossa kasvupaikka rehevöityy ja heinät valtaavat alaa taimilta.<br><br>Gräsuppslag innebär att gräs snabbt tar över en plats och konkurrerar med plantor.<br><br>  Grass invasion refers to the rapid spread of grass that competes with tree seedlings." },

{ fi: "Heinäkasvillisuus", sv: "Gräsvegetation", en: "Grass vegetation", desc: "Heinäkasvillisuus tarkoittaa alueen kasvillisuutta, jossa heinät ovat vallitseva kasvimuoto.<br><br>Gräsvegetation är växtlighet där gräs dominerar i ett område.<br><br>  Grass vegetation refers to plant communities dominated by grasses." },
  
    { fi: "Kaivukatko", sv: "Grävavbrott", en: "Excavation interruption", desc: "Kaivukatko tarkoittaa keskeytystä kaivuutyössä, esimerkiksi ojituksessa tai maanrakennuksessa.<br><br>Grävavbrott är ett avbrott i grävningsarbete, till exempel vid dikning eller markarbeten.<br><br>  Excavation interruption refers to a pause or stoppage in digging or earthworks." },

{ fi: "Varttuneen kasvatusmetsikön vaihe", sv: "Grövre gallringsskog", en: "Advanced thinning stage stand", desc: "Varttuneen kasvatusmetsikön vaihe tarkoittaa metsikön kehitysvaihetta, jossa puusto on varttunutta ja vaatii säännöllistä harvennusta.<br><br>Grövre gallringsskog avser ett utvecklingsstadium där beståndet är moget och kräver återkommande gallring.<br><br>  Advanced thinning stage stand refers to a forest stage where trees are mature and require periodic thinning." },

{ fi: "Varttunut kasvatusmetsikkö", sv: "Grövre gallringsskog", en: "Mature managed stand", desc: "Varttunut kasvatusmetsikkö tarkoittaa metsikköä, jossa puusto on saavuttanut järeämmän koon ja sitä hoidetaan harvennuksin ennen uudistushakkuuta.<br><br>Grövre gallringsskog är ett bestånd med grövre träd som sköts med gallring innan slutavverkning.<br><br>  Mature managed stand refers to a forest stand with larger trees managed through thinning before final harvesting." },

{ fi: "Pihapuu", sv: "Gårdsträd", en: "Yard tree", desc: "Pihapuu tarkoittaa yksittäistä puuta pihapiirissä tai rakennetussa ympäristössä, jolla voi olla maisema- tai suojavaikutus.<br><br>Gårdsträd är ett enskilt träd på gårds- eller bebyggda områden med ofta estetisk eller skyddande funktion.<br><br>  A yard tree is a single tree located in a yard or built environment, often for aesthetic or shelter purposes." },

{ fi: "Lannoite", sv: "Gödselmedel", en: "Fertilizer", desc: "Lannoite on aine, jota lisätään maaperään kasvien kasvun edistämiseksi ravinteita tarjoamalla.<br><br>Gödselmedel är ett ämne som tillförs marken för att ge näring och främja växttillväxt.<br><br>  Fertilizer is a substance added to soil to supply nutrients and promote plant growth." },

{ fi: "Lannoitus", sv: "Gödsling", en: "Fertilization", desc: "Lannoitus tarkoittaa toimenpidettä, jossa maaperään lisätään ravinteita puuston tai kasvillisuuden kasvun parantamiseksi.<br><br>Gödsling är en åtgärd där näringsämnen tillförs marken för att förbättra tillväxten.<br><br>  Fertilization refers to the application of nutrients to soil to improve plant or forest growth." },
  
    { fi: "Lannoitustapa", sv: "Gödslingsmetod", en: "Fertilization method", desc: "Lannoitustapa tarkoittaa menetelmää, jolla lannoite levitetään maahan tai kasvustoon, esimerkiksi levityksen tai sijoituksen kautta.<br><br>Gödslingsmetod är det sätt på vilket gödselmedel sprids eller placeras i marken.<br><br>  Fertilization method refers to the technique used to apply fertilizer to soil or vegetation." },

{ fi: "Lannoituskohde", sv: "Gödslingobjekt", en: "Fertilization site", desc: "Lannoituskohde tarkoittaa aluetta tai metsikköä, johon lannoitus kohdistetaan kasvun parantamiseksi.<br><br>Gödslingobjekt är det område eller bestånd där gödsling utförs.<br><br>  Fertilization site refers to the area or stand where fertilization is carried out." },

{ fi: "Hakamaa", sv: "Hagmark", en: "Wooded pasture", desc: "Hakamaa on perinteinen maankäyttömuoto, jossa puustoinen alue toimii laidunmaana ja siinä esiintyy sekä puita että niittykasvillisuutta.<br><br>Hagmark är en traditionell betesmark med glest träd- och ängsvegetation.<br><br>  Wooded pasture is a traditional land use type combining grazing land with scattered trees and meadow vegetation." },

{ fi: "Vadelma", sv: "Hallon", en: "Raspberry", desc: "Vadelma on marjapensas, joka tuottaa syötäviä marjoja ja kasvaa usein metsänreunoilla ja valoisilla paikoilla.<br><br>Hallon är en bärbuske som producerar ätliga bär och växer ofta i skogsbryn och ljusa miljöer.<br><br>  Raspberry is a berry-producing shrub commonly found in forest edges and sunny areas." },

{ fi: "Kauppasieni", sv: "Handelssvamp", en: "Commercial mushroom", desc: "Kauppasieni tarkoittaa sieniä, joita kerätään ja myydään elintarvikkeeksi tai teolliseen käyttöön.<br><br>Handelssvamp är svampar som plockas och säljs som livsmedel eller för kommersiellt bruk.<br><br>  Commercial mushroom refers to mushrooms collected and sold for food or commercial use." },

{ fi: "Käenkaali", sv: "Harsyra", en: "Wood sorrel", desc: "Käenkaali on yleinen metsäkasvi, joka viihtyy varjoisissa ja kosteissa metsissä ja tunnistetaan kolmisormisista lehdistä.<br><br>Harsyra är en vanlig skogsväxt som trivs i skuggiga och fuktiga miljöer och känns igen på sina trefingrade blad.<br><br>  Wood sorrel is a common forest plant found in shady, moist forests and identified by its clover-like leaves." },
  
    { fi: "Äestys", sv: "Harvning", en: "Harrowing", desc: "Äestys tarkoittaa maan muokkausta äkeellä, yleensä metsänuudistamisen yhteydessä siementen itämisen parantamiseksi.<br><br>Harvning innebär markberedning med harv, ofta för att förbättra grobarhet vid föryngring.<br><br>  Harrowing refers to soil preparation using a harrow, typically to improve seed germination in regeneration areas." },

{ fi: "Pähkinäpensaslehto", sv: "Hassellund", en: "Hazel grove", desc: "Pähkinäpensaslehto on lehtometsätyyppi, jossa pähkinäpensas on keskeinen kasvillisuus ja kasvupaikka on ravinteikas.<br><br>Hassellund är en lövskogstyp där hassel dominerar och växtplatsen är näringsrik.<br><br>  Hazel grove refers to a nutrient-rich deciduous forest type dominated by hazel shrubs." },

{ fi: "Kokopuu", sv: "Helträd", en: "Whole tree", desc: "Kokopuu tarkoittaa puuta, joka korjataan metsätaloudessa runkoineen, oksineen ja latvuksineen.<br><br>Helträd är ett träd som tas ut i sin helhet inklusive stam, grenar och topp.<br><br>  Whole tree refers to a tree harvested with stem, branches, and crown included." },

{ fi: "Kokopuun korjuu", sv: "Helträdsavverkning", en: "Whole-tree harvesting", desc: "Kokopuun korjuu tarkoittaa hakkuumenetelmää, jossa puu korjataan kokonaisena metsätalouden käyttöön.<br><br>Helträdsavverkning är en avverkningsmetod där hela trädet tas ut från skogen.<br><br>  Whole-tree harvesting refers to a logging method where the entire tree is removed from the forest." },

{ fi: "Tammivyöhyke", sv: "Hemiboreal ekzon", en: "Hemiboreal zone", desc: "Tammivyöhyke tarkoittaa siirtymävyöhykettä boreaalisen ja lehtimetsävyöhykkeen välillä, jossa tammi voi esiintyä luonnostaan.<br><br>Hemiboreal ekzon är en övergångszon mellan boreal och tempererad lövskog där ek kan förekomma naturligt.<br><br>  Hemiboreal zone is a transitional ecological zone between boreal and temperate forests where oak naturally occurs." },

{ fi: "Hirvituho", sv: "Hjortdjursskada", en: "Moose damage", desc: "Hirvituho tarkoittaa hirvieläinten aiheuttamia vahinkoja taimikoille ja nuorille metsille, kuten kuorimista ja latvatuhoja.<br><br>Hjortdjursskada är skador på plantor och unga skogar orsakade av älg och andra hjortdjur.<br><br>  Moose damage refers to forest damage caused by moose and other deer species, such as browsing and bark stripping." },
  
   { fi: "Suomuurain", sv: "Hjortron", en: "Cloudberry", desc: "Suomuurain on pohjoisilla soilla kasvava marjakasvi, joka tuottaa arvostettuja oranssinkeltaisia marjoja.<br><br>Hjortron är en myrbärsbuske som växer på nordliga myrar och ger eftertraktade orangegula bär.<br><br>  Cloudberry is a northern bog plant producing highly valued orange-yellow berries." },

{ fi: "Muurainkorpi", sv: "Hjortrongrankärr", en: "Cloudberry spruce swamp", desc: "Muurainkorpi on rehevä korpityyppi, jossa kasvaa kuusta ja hjortron esiintyy kenttäkerroksessa.<br><br>Hjortrongrankärr är en näringsrik sumpskogstyp med gran där hjortron kan förekomma i fältskiktet.<br><br>  Cloudberry spruce swamp is a fertile spruce-dominated wet forest type where cloudberry may occur in the ground layer." },

{ fi: "Täydennysistutus", sv: "Hjälpplantering", en: "Supplementary planting", desc: "Täydennysistutus tarkoittaa taimikon paikkaamista istuttamalla uusia taimia alueille, joissa aiempi uudistuminen on epäonnistunut.<br><br>Hjälpplantering innebär att man planterar nya plantor där föryngringen inte lyckats.<br><br>  Supplementary planting refers to planting new seedlings in gaps where regeneration has failed." },

{ fi: "Täydennysviljely", sv: "Hjälpplantering", en: "Supplemental regeneration planting", desc: "Täydennysviljely tarkoittaa metsän uudistamisen täydentämistä istutuksilla tai kylvöllä, jotta taimikko tiheytyy riittävästi.<br><br>Hjälpplantering används för att förstärka föryngringen genom extra plantering eller sådd.<br><br>  Supplemental regeneration planting refers to reinforcing forest regeneration through additional planting or sowing." },

{ fi: "HMT", sv: "HMT", en: "HMT", desc: "Hylocomium-Myrtillus-typ" },

{ fi: "Mesisieni", sv: "Honungsskivling", en: "Honey fungus", desc: "Mesisieni on lahottajasieni, joka kasvaa puiden juuristossa ja voi aiheuttaa lahoa sekä metsätuhoja.<br><br>Honungsskivling är en vedlevande svamp som kan orsaka rotröta och skogsskador.<br><br>  Honey fungus is a wood-decaying fungus that can infect tree roots and cause forest damage." },
    { fi: "Uhanalainen laji", sv: "Hotad art", en: "Threatened species", desc: "Uhanalainen laji tarkoittaa lajia, jonka riski hävitä luonnosta on kasvanut esimerkiksi elinympäristöjen muutosten tai ihmistoiminnan vuoksi.<br><br>Hotad art är en art som löper ökad risk att försvinna från naturen på grund av till exempel habitatförändringar.<br><br>  A threatened species is a species at increased risk of extinction due to habitat loss or other pressures." },

{ fi: "Uhanalainen luontotyyppi", sv: "Hotad naturtyp", en: "Threatened habitat type", desc: "Uhanalainen luontotyyppi tarkoittaa luonnonympäristöä, joka on harvinaistunut tai vaarassa hävitä.<br><br>Hotad naturtyp är en naturmiljö som har minskat kraftigt eller riskerar att försvinna.<br><br>  A threatened habitat type is a natural environment that is rare or at risk of disappearing." },

{ fi: "Uhanalaisuus", sv: "Hotbild", en: "Threat status", desc: "Uhanalaisuus tarkoittaa lajien tai luontotyyppien tilaa, jossa niiden säilyminen on vaarantunut.<br><br>Hotbild beskriver graden av risk för att arter eller naturtyper ska försvinna.<br><br>  Threat status refers to the level of risk that a species or habitat may become extinct or disappear." },

{ fi: "Korpi-imarre", sv: "Hultbräken", en: "Oak fern (forest fern)", desc: "Korpi-imarre on varjoisissa ja kosteissa metsissä kasvava saniainen, joka viihtyy erityisesti korpialueilla.<br><br>Hultbräken är en ormbunke som växer i skuggiga och fuktiga skogar, särskilt i sumpskogar.<br><br>  Oak fern is a shade-loving fern that grows in moist forest habitats, especially swamp forests." },

{ fi: "Humus", sv: "Humus", en: "Humus", desc: "Humus tarkoittaa maaperän eloperäistä ainesta, joka muodostuu hajonneista kasvi- ja eläinjäänteistä ja parantaa maan viljavuutta.<br><br>Humus är organiskt material i marken som bildas av nedbrutet växt- och djurmaterial och förbättrar jordens bördighet.<br><br>  Humus is organic matter in soil formed from decomposed plant and animal material that improves soil fertility." },

{ fi: "Humuskerros", sv: "Humuslager", en: "Humus layer", desc: "Humuskerros tarkoittaa maaperän pintakerrosta, jossa orgaaninen aines on kertynyt ja jossa tapahtuu voimakasta biologista toimintaa.<br><br>Humuslager är det översta jordlagret där organiskt material ansamlas och biologisk aktivitet är hög.<br><br>  The humus layer is the topsoil layer where organic matter accumulates and biological activity is high." },
  
    { fi: "Kerrossammal", sv: "Husmossa", en: "Plait moss (Hylocomium splendens)", desc: "Kerrossammal on yleinen metsäsammal, joka kasvaa kerroksittain ja muodostaa peittävän sammalmaton metsäpohjalle.<br><br>Husmossa är en vanlig skogsmossa som växer i lager och bildar ett täckande mosskikt på skogsmarken.<br><br>  Plait moss (Hylocomium splendens) is a common forest moss that grows in layers and forms a carpet-like cover on the forest floor." },

{ fi: "Pääravinne", sv: "Huvudnäringsämne", en: "Primary nutrient", desc: "Pääravinne tarkoittaa kasvien kasvulle välttämättömiä ravinteita, kuten typpeä, fosforia ja kaliumia.<br><br>Huvudnäringsämne är näringsämnen som är nödvändiga för växternas tillväxt, såsom kväve, fosfor och kalium.<br><br>  Primary nutrient refers to essential nutrients for plant growth such as nitrogen, phosphorus, and potassium." },

{ fi: "Pääjakso", sv: "Huvudskikt", en: "Main canopy layer", desc: "Pääjakso tarkoittaa metsän puuston vallitsevaa latvuskerrosta, joka muodostaa metsän pääosan rakenteesta.<br><br>Huvudskikt är det dominerande trädskiktet i ett bestånd som utgör skogens huvudstruktur.<br><br>  Main canopy layer refers to the dominant layer of tree crowns forming the main structure of a forest stand." },

{ fi: "Pääpuulaji", sv: "Huvudträdslag", en: "Dominant tree species", desc: "Pääpuulaji tarkoittaa metsikön yleisintä puulajia, joka määrittää metsän rakenteen ja ominaisuudet.<br><br>Huvudträdslag är det dominerande trädslaget i ett bestånd som bestämmer skogens karaktär.<br><br>  Dominant tree species refers to the main tree species in a stand that defines its structure and characteristics." },

{ fi: "Hybridihaapa", sv: "Hybridasp", en: "Hybrid aspen", desc: "Hybridihaapa on haavan ja poppelin risteymä, jota käytetään metsätaloudessa nopeakasvuisena puulajina.<br><br>Hybridasp är en korsning mellan asp och poppel som används inom skogsbruk för snabb tillväxt.<br><br>  Hybrid aspen is a cross between aspen and poplar used in forestry for its fast growth." },

{ fi: "Kulotus", sv: "Hyggesbränning", en: "Prescribed burning", desc: "Kulotus tarkoittaa metsän hallittua polttamista uudistamisen tai kasvupaikan parantamisen edistämiseksi.<br><br>Hyggesbränning är kontrollerad bränning av skog för att främja föryngring och markens egenskaper.<br><br>  Prescribed burning refers to the controlled burning of forest areas to support regeneration and site improvement." },

{ fi: "Uudistusalan raivaus", sv: "Hyggesrensning", en: "Site clearing", desc: "Uudistusalan raivaus tarkoittaa hakkuualueen puuston ja Hakkutähdet poistamista ennen metsän uudistamista.<br><br>Hyggesrensning innebär att man avlägsnar GROT på ett hygge före föryngring.<br><br>  Site clearing refers to removing bioenergy from a clear-cut area before forest regeneration." },

{ fi: "Metsien kestävä hoito ja käyttö", sv: "Hållbart skogsbruk", en: "Sustainable forestry", desc: "Metsien kestävä hoito ja käyttö tarkoittaa metsien käyttöä tavalla, joka turvaa niiden biologisen monimuotoisuuden ja tuottavuuden pitkällä aikavälillä.<br><br>Hållbart skogsbruk innebär skötsel och användning av skog som bevarar biologisk mångfald och produktionsförmåga över tid.<br><br>  Sustainable forestry refers to managing forests in a way that maintains biodiversity and productivity over the long term." },

{ fi: "Kestävä metsätalous", sv: "Hållbart skogsbruk", en: "Sustainable forest management", desc: "Kestävä metsätalous tarkoittaa metsien hoitoa ja käyttöä siten, että ekologiset, taloudelliset ja sosiaaliset tavoitteet toteutuvat tasapainoisesti.<br><br>Hållbart skogsbruk är skogsskötsel där ekologiska, ekonomiska och sociala mål balanseras.<br><br>  Sustainable forest management refers to managing forests in a balanced way considering ecological, economic, and social goals." },

{ fi: "Kolopuu", sv: "Hålträd", en: "Tree with cavities", desc: "Kolopuu tarkoittaa puuta, jonka rungossa on koloja ja joka on tärkeä monille eläinlajeille elinpaikkana.<br><br>Hålträd är ett träd med håligheter i stammen som fungerar som livsmiljö för många arter.<br><br>  A tree with cavities is a tree that contains hollows and serves as habitat for many species." },
  
    { fi: "Luppo", sv: "Hänglav", en: "Old man's beard lichen", desc: "Luppo tarkoittaa puissa kasvavia riippuvia jäkäliä, jotka viihtyvät erityisesti puhtaissa ja kosteissa metsissä.<br><br>Hänglav är lavar som växer hängande från träd och trivs i rena och fuktiga skogar.<br><br>  Old man's beard lichen refers to hanging lichens that grow on trees, typically in clean and moist forest environments." },

{ fi: "Vallitseva latvuskerros", sv: "Härskande kronskikt", en: "Dominant canopy layer", desc: "Vallitseva latvuskerros tarkoittaa metsän ylimpää puustokerrosta, joka saa eniten valoa ja määrää metsän rakenteen.<br><br>Härskande kronskikt är det övre trädskiktet som dominerar ljusförhållanden och skogsstruktur.<br><br>  Dominant canopy layer refers to the upper tree layer that receives most light and defines forest structure." },

{ fi: "Päävaltapuu", sv: "Härskande träd", en: "Dominant tree", desc: "Päävaltapuu tarkoittaa yksittäistä puuta, joka on kooltaan ja kilpailukyvyltään metsikön hallitsevimpia puita.<br><br>Härskande träd är ett träd som dominerar i beståndet genom storlek och konkurrenskraft.<br><br>  A dominant tree is an individual tree that dominates the stand in size and competitiveness." },

{ fi: "Valtapuusto", sv: "Härskande träd", en: "Dominant stand trees", desc: "Valtapuusto tarkoittaa metsikön vallitsevaa puustoa, joka muodostaa suurimman osan latvuskerroksesta.<br><br>Härskande träd avser de dominerande träden i ett bestånd.<br><br>  Dominant stand trees refer to the main trees forming the canopy and structure of a forest stand." },

{ fi: "Valtapuut", sv: "Härskande träd", en: "Dominant trees", desc: "Valtapuut tarkoittavat metsikön suurimpia ja hallitsevimpia puita, jotka vaikuttavat eniten metsän rakenteeseen.<br><br>Härskande träd är de största och mest dominerande träden i ett bestånd.<br><br>  Dominant trees are the largest and most influential trees in a forest stand." },

{ fi: "Kohouma", sv: "Hög", en: "Mound / rise", desc: "Kohouma tarkoittaa maaston pientä korkeampaa kohtaa, joka voi syntyä luonnollisesti tai maaperän muokkauksen seurauksena.<br><br>Hög är en mindre upphöjning i terrängen.<br><br>  A mound or rise is a small elevated feature in the terrain." },

{ fi: "Kourakasa", sv: "Hög", en: "Grab pile", desc: "Kourakasa tarkoittaa puutavaran kasaa, joka on muodostettu koneellisessa hakkuussa tai korjuussa.<br><br>Hög kan avse en upplagd hög av virke från maskinell avverkning.<br><br>  A grab pile refers to a stack of timber formed during mechanical harvesting operations." },

{ fi: "Mätäs", sv: "Hög", en: "Hummock", desc: "Mätäs tarkoittaa maaperän kohoumaa, joka on tyypillinen erityisesti soilla ja kosteilla alueilla.<br><br>Hög i detta sammanhang avser en tuva eller upphöjning i marken.<br><br>  A hummock is a small natural mound in the ground, often found in wetlands." },

{ fi: "Puustoisuus", sv: "Hög virkesvolym", en: "Stand density / timber volume", desc: "Puustoisuus tarkoittaa metsikön puuston määrää tai tiheyttä, joka vaikuttaa metsän kasvuun ja tuottavuuteen.<br><br>Hög virkesvolym beskriver ett bestånd med stor mängd virke per ytenhet.<br><br>  Stand density or timber volume refers to the amount of trees or wood volume in a forest area." },

{ fi: "Yläharvennus", sv: "Höggallring", en: "High thinning", desc: "Yläharvennus tarkoittaa harvennustapaa, jossa poistetaan pääasiassa suurimpia ja valtapuita kilpailun vähentämiseksi.<br><br>Höggallring är en gallringsmetod där främst de största träden tas bort.<br><br>  High thinning is a thinning method where mainly dominant and larger trees are removed." },
    { fi: "Naveromätästys", sv: "Högläggning med fåror", en: "Mounding with furrows", desc: "Naveromätästys tarkoittaa maanmuokkausmenetelmää, jossa tehdään kohoumia ja ojia taimien kasvua varten.<br><br>Högläggning med fåror är en markberedningsmetod där man skapar högar och fåror för plantering.<br><br>  Mounding with furrows is a site preparation method where raised mounds and furrows are created for planting seedlings." },

{ fi: "Korkea alue", sv: "Höglänt område", en: "Upland area", desc: "Korkea alue tarkoittaa ympäristöään korkeammalla sijaitsevaa maaston osaa, joka on usein kuivempi kuin alavat alueet.<br><br>Höglänt område är ett område som ligger högre än omgivningen och ofta är torrare.<br><br>  Upland area refers to terrain that is higher than surrounding land and typically drier." },

{ fi: "Pökkelö", sv: "Högstubbe", en: "High stump", desc: "Pökkelö tarkoittaa metsään jätettyä korkeaa kantoa, joka toimii elinympäristönä monille lajeille.<br><br>Högstubbe är en hög stubbe som lämnas kvar i skogen för naturvårdsändamål.<br><br>  A high stump is a tall stump left in forests to support biodiversity." },

{ fi: "Tekopökkelö", sv: "Högstubbe", en: "Artificial high stump", desc: "Tekopökkelö tarkoittaa ihmisen tekemää korkeaa kantoa, joka jätetään metsään luonnon monimuotoisuuden lisäämiseksi.<br><br>Högstubbe (skapad) är en konstgjord hög stubbe som lämnas av naturvårdsskäl.<br><br>  An artificial high stump is a man-made stump left in forests to enhance biodiversity." },

{ fi: "Vaara", sv: "Höjd", en: "Hill / upland", desc: "Vaara tarkoittaa mäkistä tai ylänköaluetta, joka on tyypillinen erityisesti Pohjois-Suomen maisemille.<br><br>Höjd kan avse en höjd eller kulle i terrängen.<br><br>  A hill or upland refers to elevated terrain, often characteristic of northern landscapes." },

{ fi: "Metso-ohjelman elinympäristö", sv: "I METSO-programmet nämnd livsmiljö", en: "METSO habitat", desc: "Metso-ohjelman elinympäristö tarkoittaa suojelun kohteena olevaa metsäluontotyyppiä, jota METSO-ohjelma turvaa.<br><br>I METSO-programmet nämnd livsmiljö är en skogsmiljö som skyddas inom METSO-programmet.<br><br>  A METSO habitat refers to a forest habitat protected under the Finnish METSO biodiversity programme." },

{ fi: "Kehityskelvoton metsikkö", sv: "Icke-utvecklingsbart bestånd", en: "Non-productive stand", desc: "Kehityskelvoton metsikkö tarkoittaa metsää, jonka kasvu- tai tuotantopotentiaali on erittäin heikko.<br><br>Icke-utvecklingsbart bestånd är ett skogsbestånd med mycket låg tillväxtpotential.<br><br>  A non-productive stand is a forest area with very poor growth or production potential." },

{ fi: "Joutomaa", sv: "Impediment", en: "Unproductive land", desc: "Joutomaa tarkoittaa maata, joka ei sovellu metsätalouteen tai muuhun tuottavaan käyttöön.<br><br>Impediment är mark som inte lämpar sig för produktiv skogsproduktion.<br><br>  Unproductive land refers to land unsuitable for forestry or other productive use." },

{ fi: "Jatkuvapeitteinen metsänkasvatus", sv: "Ingen kalavverkning", en: "Continuous cover forestry", desc: "Jatkuvapeitteinen metsänkasvatus tarkoittaa metsänhoitomenetelmää, jossa metsää ei avohakata vaan se säilyy jatkuvasti puustoisena.<br><br>Ingen kalavverkning innebär skogsskötsel utan kalhyggen där skogen hålls kontinuerligt trädbevuxen.<br><br>  Continuous cover forestry is a management method where forests are not clear-cut but remain continuously forested." },

{ fi: "Aidoitus", sv: "Inhägnande", en: "Fencing", desc: "Aidoitus tarkoittaa alueen rajaamista aidalla esimerkiksi taimikoiden suojaamiseksi eläimiltä.<br><br>Inhägnande är att avgränsa ett område med stängsel, till exempel för att skydda plantor.<br><br>  Fencing refers to enclosing an area with a barrier to protect seedlings or manage land use." },
  
    { fi: "Hyönteistuho", sv: "Insektskada", en: "Insect damage", desc: "Hyönteistuho tarkoittaa hyönteisten aiheuttamia vaurioita puille tai metsälle, kuten kuoriaisten tai toukkien aiheuttamaa heikentymistä.<br><br>Insektskada är skador på träd eller skog orsakade av insekter, till exempel barkborrar eller larver.<br><br>  Insect damage refers to harm caused to trees or forests by insects such as beetles or larvae." },

{ fi: "Kaiverrus", sv: "Inskription", en: "Engraving / inscription", desc: "Kaiverrus tarkoittaa pintaan tehtyä merkintää tai kuviota, joka voidaan tehdä esimerkiksi puuhun tai kiveen.<br><br>Inskription är en inristad text eller symbol i ett material.<br><br>  An engraving or inscription is a mark or text carved into a surface such as wood or stone." },

{ fi: "Yhdistetty korjuu", sv: "Integrerad avverkning", en: "Integrated harvesting", desc: "Yhdistetty korjuu tarkoittaa menetelmää, jossa useita puutavaralajeja korjataan samassa hakkuussa tehokkuuden lisäämiseksi.<br><br>Integrerad avverkning innebär att olika sortiment av virke tas ut samtidigt i samma avverkning.<br><br>  Integrated harvesting refers to harvesting multiple timber types in the same operation for efficiency." },

{ fi: "Tulokaslaji", sv: "Invasiv art", en: "Invasive species", desc: "Tulokaslaji tarkoittaa lajia, joka on levinnyt uudelle alueelle ja voi häiritä alkuperäistä ekosysteemiä.<br><br>Invasiv art är en art som sprider sig till nya områden och kan påverka ekosystemet negativt.<br><br>  An invasive species is a species that spreads into new areas and may disrupt native ecosystems." },

{ fi: "Maisemavaikutus", sv: "Inverkan på landskapet", en: "Landscape impact", desc: "Maisemavaikutus tarkoittaa toimenpiteiden, kuten hakkuiden, vaikutusta maiseman ulkonäköön ja rakenteeseen.<br><br>Inverkan på landskapet avser hur åtgärder påverkar landskapets utseende.<br><br>  Landscape impact refers to how actions such as logging affect the appearance and structure of the landscape." },

{ fi: "Vesistövaikutus", sv: "Inverkan på vattendragen", en: "Impact on water bodies", desc: "Vesistövaikutus tarkoittaa toiminnan vaikutuksia järviin, jokiin tai muihin vesistöihin, kuten ravinnekuormitusta.<br><br>Inverkan på vattendragen avser hur verksamhet påverkar sjöar och vattendrag.<br><br>  Impact on water bodies refers to effects of activities on lakes, rivers, or other aquatic systems." },

{ fi: "Kääntömätästys", sv: "Inversmarkberedning", en: "Inversion mounding", desc: "Kääntömätästys on maanmuokkausmenetelmä, jossa maa käännetään ja kohoumia tehdään taimien kasvua varten.<br><br>Inversmarkberedning är en markberedningsmetod där jorden vänds för att skapa planteringspunkter.<br><br>  Inversion mounding is a site preparation method where soil is inverted to create planting mounds." },

{ fi: "Ojituksen kunnostus", sv: "Iståndsättning av dikessystem", en: "Ditch network restoration", desc: "Ojituksen kunnostus tarkoittaa vanhojen ojien perkaamista ja toimintakyvyn palauttamista metsätalouden tarpeisiin.<br><br>Iståndsättning av dikessystem innebär att rensning och förbättring av gamla diken.<br><br>  Ditch network restoration refers to restoring and maintaining forest drainage systems." },

{ fi: "Kunnostusojitus", sv: "Iståndsättningsdikning", en: "Maintenance ditching", desc: "Kunnostusojitus tarkoittaa ojien puhdistamista ja syventämistä vedenjohtokyvyn parantamiseksi.<br><br>Iståndsättningsdikning är underhåll av diken för att förbättra vattenavrinning.<br><br>  Maintenance ditching refers to cleaning and improving drainage ditches in forests." },
    { fi: "Metsästys", sv: "Jakt", en: "Hunting", desc: "Metsästys tarkoittaa villieläinten pyyntiä esimerkiksi ravinnoksi, riistanhoidollisista syistä tai kannan säätelyyn.<br><br>Jakt är fångst av vilda djur för mat, viltvård eller reglering av populationer.<br><br>  Hunting refers to the practice of capturing or killing wild animals for food, population control, or wildlife management." },

{ fi: "Metsästyslaki", sv: "Jaktlag", en: "Hunting Act", desc: "Metsästyslaki määrittelee metsästyksen säännöt, kiintiöt ja vastuullisen riistanhoidon periaatteet Suomessa.<br><br>Jaktlag är den lag som reglerar jakt, viltvård och jaktmetoder i Finland.<br><br>  The Hunting Act is legislation that regulates hunting practices, quotas, and wildlife management." },

{ fi: "Metsästysalue", sv: "Jaktområde", en: "Hunting area", desc: "Metsästysalue tarkoittaa aluetta, jossa metsästys on sallittua tiettyjen sääntöjen ja lupien puitteissa.<br><br>Jaktområde är ett geografiskt område där jakt är tillåten enligt regler och tillstånd.<br><br>  A hunting area is a designated region where hunting is permitted under specific rules and permits." },

{ fi: "Metsästys- ja riistamatkailu", sv: "Jaktturism och vildmarksturism", en: "Hunting and wildlife tourism", desc: "Metsästys- ja riistamatkailu tarkoittaa matkailua, jossa osallistutaan metsästykseen tai luonnonvaraisten eläinten tarkkailuun.<br><br>Jaktturism och vildmarksturism är turism som omfattar jakt och upplevelser i vildmarken.<br><br>  Hunting and wildlife tourism refers to travel activities involving hunting or observing wild animals in natural environments." },

{ fi: "Kivennäismaalaji", sv: "Jordart", en: "Mineral soil type", desc: "Kivennäismaalaji tarkoittaa maaperän mineraalikoostumusta, kuten hiekkaa, savea tai soraa.<br><br>Jordart är den geologiska typen av jord, till exempel sand, lera eller grus.<br><br>  Mineral soil type refers to the mineral composition of soil such as sand, clay, or gravel." },

{ fi: "Maalaji", sv: "Jordmån", en: "Soil type", desc: "Maalaji tarkoittaa maaperän rakennetta ja koostumusta, joka vaikuttaa kasvillisuuden kasvuun.<br><br>Jordmån avser jordens egenskaper och struktur som påverkar växtlighet.<br><br>  Soil type refers to the physical composition and structure of soil affecting plant growth." },

{ fi: "Maannos", sv: "Jordmån", en: "Soil profile", desc: "Maannos tarkoittaa maaperän eri kerroksia ja niiden muodostamaa kokonaisuutta.<br><br>Jordmån kan avse jordprofilens olika lager.<br><br>  Soil profile refers to the layers of soil and their overall structure." },

{ fi: "Pintakosteus", sv: "Jordytans fuktighet", en: "Surface moisture", desc: "Pintakosteus tarkoittaa maan ylimmän kerroksen kosteuspitoisuutta, joka vaikuttaa taimettumiseen ja kasvuun.<br><br>Jordytans fuktighet är fukthalten i markens ytskikt.<br><br>  Surface moisture refers to the water content in the top layer of soil." },

{ fi: "Metsästäjä", sv: "Jägare", en: "Hunter", desc: "Metsästäjä on henkilö, joka harjoittaa metsästystä ja osallistuu riistanhoitoon.<br><br>Jägare är en person som jagar vilda djur.<br><br>  A hunter is a person who engages in hunting wildlife." },

{ fi: "Avohakkuu", sv: "Kalavverkning", en: "Clear-cutting", desc: "Avohakkuu tarkoittaa metsän hakkaamista lähes kokonaan yhdellä kertaa uuden metsän perustamista varten.<br><br>Kalavverkning är avverkning där nästan alla träd tas bort på ett område.<br><br>  Clear-cutting is a harvesting method where most or all trees are removed from an area at once." },

{ fi: "Kaliumlannoitus", sv: "Kaliumgödsling", en: "Potassium fertilization", desc: "Kaliumlannoitus tarkoittaa kaliumravinteiden lisäämistä maaperään puiden kasvun parantamiseksi.<br><br>Kaliumgödsling innebär tillförsel av kalium för att förbättra trädens tillväxt.<br><br>  Potassium fertilization refers to adding potassium nutrients to soil to support tree growth." },

{ fi: "Aukea", sv: "Kalmark", en: "Open clearing", desc: "Aukea tarkoittaa puutonta tai lähes puutonta aluetta, kuten hakkuuaukkoa tai peltoa.<br><br>Kalmark är ett öppet område utan träd.<br><br>  An open clearing refers to an area without trees, such as a clear-cut or open field." },
    { fi: "Vasomisalue", sv: "Kalvningsland", en: "Calving area", desc: "Vasomisalue tarkoittaa aluetta, jossa hirvieläimet synnyttävät ja hoitavat vasojaan.<br><br>Kalvningsland är ett område där hjortdjur kalvar och tar hand om sina ungar.<br><br>  A calving area is a place where deer or similar animals give birth and raise their calves." },

{ fi: "Avohakkuuala", sv: "Kalyta", en: "Clear-cut area", desc: "Avohakkuuala tarkoittaa aluetta, jolta puusto on poistettu avohakkuussa.<br><br>Kalyta avser ett kalhygge eller område där skogen avverkats.<br><br>  A clear-cut area is a forest area where trees have been completely harvested." },

{ fi: "Kantarelli", sv: "Kantarell", en: "Chanterelle", desc: "Kantarelli on syötävä sienilaji, joka kasvaa erityisesti sammaleisissa metsissä.<br><br>Kantarell är en ätlig svamp som ofta växer i mossiga skogar.<br><br>  The chanterelle is an edible mushroom that typically grows in forested, mossy environments." },

{ fi: "Reunavaikutus", sv: "Kanteffekt", en: "Edge effect", desc: "Reunavaikutus tarkoittaa metsän reuna-alueiden erilaisia olosuhteita verrattuna metsän sisäosiin.<br><br>Kanteffekt beskriver hur skogens kanter påverkar ljus, vind och biologisk mångfald.<br><br>  Edge effect refers to the different ecological conditions occurring at habitat boundaries compared to the interior." },

{ fi: "Reunametsä", sv: "Kantskog", en: "Edge forest", desc: "Reunametsä tarkoittaa metsän reunavyöhykettä, jossa olosuhteet poikkeavat metsän sisäosista.<br><br>Kantskog är skog i kanten av ett område.<br><br>  Edge forest refers to forest located at the boundary of a larger forested area." },

{ fi: "Reunapuusto", sv: "Kantskog", en: "Edge trees", desc: "Reunapuusto tarkoittaa metsän reuna-alueella kasvavaa puustoa.<br><br>Kantskog kan avse träden i skogens kantzon.<br><br>  Edge trees refer to trees growing at the forest boundary." },

{ fi: "Reunavyöhyke", sv: "Kantzon", en: "Buffer zone / edge zone", desc: "Reunavyöhyke tarkoittaa siirtymäaluetta metsän ja avoimen alueen välillä.<br><br>Kantzon är en övergångszon mellan skog och öppna områden.<br><br>  A buffer or edge zone is a transitional area between forest and open land." },

{ fi: "Puustopääoma", sv: "Kapital bundet i trädbeståndet", en: "Timber capital", desc: "Puustopääoma tarkoittaa metsän puuston taloudellista arvoa, joka kasvaa puiden kasvun myötä.<br><br>Kapital bundet i trädbeståndet avser värdet av stående skog.<br><br>  Timber capital refers to the economic value stored in standing forest trees." },

{ fi: "Kuiva kangas", sv: "Karg mo", en: "Dry heath forest", desc: "Kuiva kangas tarkoittaa kuivaa ja vähäravinteista metsätyyppiä, jossa kasvaa niukasti kasvillisuutta.<br><br>Karg mo är en torr och näringsfattig skogstyp.<br><br>  Dry heath forest is a nutrient-poor forest type with sparse vegetation." },

{ fi: "Kemiallinen heinäntorjunta", sv: "Kemisk gräsröjning", en: "Chemical grass control", desc: "Kemiallinen heinäntorjunta tarkoittaa kasvillisuuden, erityisesti heinän, torjuntaa kemiallisilla aineilla taimikoiden suojelemiseksi.<br><br>Kemisk gräsröjning innebär användning av kemikalier för att kontrollera gräsvegetation.<br><br>  Chemical grass control refers to using chemicals to suppress grass growth in forest regeneration areas." },

{ fi: "Metsä- ja suotyyppiluokitus", sv: "Klassificering av skogstyper och torvmarkstyper", en: "Forest and mire type classification", desc: "Metsä- ja suotyyppiluokitus tarkoittaa järjestelmää, jolla luokitellaan erilaiset metsä- ja suotyypit kasvillisuuden ja maaperän perusteella.<br><br>Klassificering av skogstyper och torvmarkstyper är ett system för att dela in naturtyper.<br><br>  Forest and mire type classification is a system for categorizing forest and peatland types based on vegetation and soil." },
    { fi: "Nuoren kasvatusmetsikön vaihe", sv: "Klenare gallringsskog", en: "Young thinning stand phase", desc: "Nuoren kasvatusmetsikön vaihe tarkoittaa metsän kehitysvaihetta, jossa puusto on vielä nuorta mutta sitä harvennetaan kasvun ohjaamiseksi.<br><br>Klenare gallringsskog är ett ungt gallringsskede där beståndet ännu är relativt klent och gallras för att styra tillväxten.<br><br>  The young thinning stand phase refers to a stage where a forest is still young and is selectively thinned to improve growth." },

{ fi: "Nuori kasvatusmetsikkö", sv: "Klenare gallringsskog", en: "Young managed stand", desc: "Nuori kasvatusmetsikkö tarkoittaa metsikköä, joka on taimikkovaiheen jälkeen ja jossa puusto kehittyy aktiivisesti.<br><br>Klenare gallringsskog är ett ungt skötta bestånd i tillväxtfas.<br><br>  A young managed stand is a forest stand in early development after the sapling stage." },

{ fi: "Pienpuusto", sv: "Klenträd", en: "Small-diameter trees", desc: "Pienpuusto tarkoittaa paksuudeltaan ja kooltaan pieniä puita, joita esiintyy usein nuorissa metsissä tai tiheiköissä.<br><br>Klenträd avser små träd med liten diameter.<br><br>  Small-diameter trees refer to thin and young trees typically found in young forests." },

{ fi: "Tervaleppä", sv: "Klibbal", en: "Black alder", desc: "Tervaleppä on kosteilla alueilla kasvava lehtipuu, joka sietää hyvin märkiä kasvupaikkoja.<br><br>Klibbal är ett lövträd som trivs i fuktiga miljöer.<br><br>  Black alder is a deciduous tree species that thrives in wet environments." },

{ fi: "Tervaleppikkö", sv: "Klibbalbestånd", en: "Black alder stand", desc: "Tervaleppikkö tarkoittaa metsikköä, jossa tervaleppä on vallitseva puulaji.<br><br>Klibbalbestånd är ett bestånd dominerat av klibbal.<br><br>  A black alder stand is a forest dominated by black alder trees." },

{ fi: "Tervaleppäkorpi", sv: "Klibbalskärr", en: "Alder swamp forest", desc: "Tervaleppäkorpi on kostea metsätyyppi, jossa tervaleppä kasvaa suopohjaisilla alueilla.<br><br>Klibbalskärr är en fuktig skogstyp dominerad av klibbal på torvmark.<br><br>  An alder swamp forest is a wet forest type dominated by black alder on peat soils." },

{ fi: "Ilmastonmuutos", sv: "Klimatförändring", en: "Climate change", desc: "Ilmastonmuutos tarkoittaa pitkän aikavälin muutoksia maapallon ilmastossa, kuten lämpötilan nousua ja sään vaihtelua.<br><br>Klimatförändring avser långsiktiga förändringar i jordens klimat.<br><br>  Climate change refers to long-term changes in global climate patterns." },

{ fi: "Pallosarakorpi", sv: "Klotstarrkärr", en: "Sedge swamp", desc: "Pallosarakorpi on kostea suotyyppi, jossa kasvaa erityisesti saroja ja muita kosteikkokasveja.<br><br>Klotstarrkärr är en våt myrtyp dominerad av starrväxter.<br><br>  A sedge swamp is a wetland type dominated by sedges." },

{ fi: "Pallosararäme", sv: "Klotstarrmyr", en: "Sedge bog", desc: "Pallosararäme on rämetyyppinen suo, jossa saroilla on merkittävä rooli kasvillisuudessa.<br><br>Klotstarrmyr är en myrtyp där starrväxter dominerar.<br><br>  A sedge bog is a peatland type dominated by sedge vegetation." },

{ fi: "Rotko", sv: "Klyfta", en: "Gorge", desc: "Rotko tarkoittaa jyrkkäreunaista maastonmuotoa, joka voi olla syntynyt eroosion seurauksena.<br><br>Klyfta är en djup och brant dalformation i terrängen.<br><br>  A gorge is a steep-sided landform often formed by erosion." },
  
    { fi: "Silmu", sv: "Knopp", en: "Bud", desc: "Silmu tarkoittaa kasvin kasvupistettä, josta kehittyy uusia lehtiä, versoja tai kukkia.<br><br>Knopp är en vilande växtdel som kan utvecklas till blad, skott eller blommor.<br><br>  A bud is a growth structure on plants that develops into leaves, shoots, or flowers." },

{ fi: "Männynversoruoste", sv: "Knäckesjuka", en: "Pine rust disease", desc: "Männynversoruoste on sienitauti, joka vaurioittaa männyn versoja ja heikentää puun kasvua.<br><br>Knäckesjuka är en svampsjukdom som skadar tallskott och minskar tillväxten.<br><br>  Pine rust disease is a fungal disease that damages pine shoots and reduces growth." },

{ fi: "Versoruostesieni", sv: "Knäckesjuka", en: "Rust fungus", desc: "Versoruostesieni tarkoittaa sieniä, jotka aiheuttavat versojen ruostetautia ja heikentävät puustoa.<br><br>Knäckesjuka orsakas av rostsvampar som angriper skott.<br><br>  Rust fungus refers to fungi that cause rust diseases on plant shoots." },

{ fi: "Hiilidioksidi", sv: "Koldioxid", en: "Carbon dioxide", desc: "Hiilidioksidi on ilmakehässä esiintyvä kaasu, jota syntyy hengityksessä ja palamisessa.<br><br>Koldioxid är en gas i atmosfären som bildas vid andning och förbränning.<br><br>  Carbon dioxide is a gas in the atmosphere produced by respiration and combustion." },

{ fi: "Hiilenvarasto", sv: "Kollager", en: "Carbon pool", desc: "Hiilenvarasto tarkoittaa ekosysteemiä tai materiaalia, johon hiiltä sitoutuu pitkäksi aikaa.<br><br>Kollager är ett system eller material där kol lagras över tid.<br><br>  A carbon pool is a reservoir where carbon is stored for a long period." },

{ fi: "Hiilivarasto", sv: "Kollager", en: "Carbon storage", desc: "Hiilivarasto tarkoittaa luonnon tai materiaalin kykyä varastoida hiiltä ilmasta tai maaperästä.<br><br>Kollager avser lagring av kol i naturen eller material.<br><br>  Carbon storage refers to the capacity of ecosystems or materials to store carbon." },

{ fi: "Täydennysoja", sv: "Kompletterande dike", en: "Supplementary ditch", desc: "Täydennysoja tarkoittaa lisäojaa, joka parantaa veden johtumista ojitusalueella.<br><br>Kompletterande dike är ett extra dike som förbättrar dränering.<br><br>  A supplementary ditch is an additional drainage ditch used to improve water flow." },

{ fi: "Jatkuva kasvatus", sv: "Kontinuerlig beståndsvård", en: "Continuous management", desc: "Jatkuva kasvatus tarkoittaa metsänhoitomenetelmää, jossa metsää uudistetaan ilman avohakkuita.<br><br>Kontinuerlig beståndsvård innebär skötsel utan kalhyggen.<br><br>  Continuous management refers to forestry without clear-cutting, maintaining continuous cover." },

{ fi: "Jatkuvapeitteinen metsä", sv: "Kontinuerlig trädbeklädd skog", en: "Continuous cover forest", desc: "Jatkuvapeitteinen metsä tarkoittaa metsää, jossa puusto säilyy jatkuvasti ilman suuria avohakkuita.<br><br>Kontinuerlig trädbeklädd skog är skog som alltid har trädskikt.<br><br>  A continuous cover forest is a forest that remains continuously tree-covered without clear-cutting." },

{ fi: "Jyvänen", sv: "Korn", en: "Grain", desc: "Jyvänen tarkoittaa kasvin siementä tai pientä jyvämäistä rakennetta.<br><br>Korn är en liten fröliknande struktur.<br><br>  A grain refers to a small seed or grain-like structure." },

{ fi: "Rae", sv: "Korn", en: "Granule", desc: "Rae tarkoittaa pientä hiukkasta tai jyvää, jota esiintyy maaperässä tai materiaalissa.<br><br>Korn kan avse en liten partikel eller granulat.<br><br>  A granule is a small particle or grain found in soil or materials." },
  
    { fi: "Raekoko", sv: "Kornstorlek", en: "Grain size", desc: "Raekoko tarkoittaa maaperän tai materiaalin hiukkasten kokoa, joka vaikuttaa veden läpäisevyyteen ja kasvupaikkaolosuhteisiin.<br><br>Kornstorlek beskriver storleken på partiklar i jord eller material.<br><br>  Grain size refers to the size of particles in soil or material, affecting drainage and site conditions." },

{ fi: "Käpy", sv: "Kotte", en: "Cone", desc: "Käpy on havupuun lisääntymiselin, jossa siemenet kehittyvät ja varisevat maahan.<br><br>Kotte är ett reproduktionsorgan hos barrträd där frön utvecklas.<br><br>  A cone is the reproductive structure of conifer trees that produces and releases seeds." },

{ fi: "Mutkaisuus", sv: "Krokighet", en: "Crookedness", desc: "Mutkaisuus tarkoittaa puun rungon tai varren epäsuoraa kasvua, joka voi heikentää puutavaran laatua.<br><br>Krokighet avser hur böjd eller krokig en stam är.<br><br>  Crookedness refers to the degree of curvature in a tree stem, affecting timber quality." },

{ fi: "Latvus", sv: "Krona", en: "Crown", desc: "Latvus tarkoittaa puun oksistoa ja lehtiä tai neulasia sisältävää yläosaa.<br><br>Krona är den del av trädet som består av grenar och barr eller löv.<br><br>  The crown is the upper part of a tree consisting of branches and foliage." },

{ fi: "Latvussuhde", sv: "Kronandel", en: "Crown ratio", desc: "Latvussuhde kuvaa elävän latvuksen pituuden suhdetta puun kokonaispituuteen.<br><br>Kronandel är förhållandet mellan kronans längd och trädets höjd.<br><br>  Crown ratio is the proportion of a tree’s live crown length to its total height." },

{ fi: "Latvuskerros", sv: "Kronskikt", en: "Canopy layer", desc: "Latvuskerros tarkoittaa metsän ylimpää puustokerrosta, joka muodostaa latvuston.<br><br>Kronskikt är det översta skiktet av trädens kronor i en skog.<br><br>  The canopy layer is the upper layer of tree crowns in a forest." },

{ fi: "Latvusto", sv: "Kronskikt", en: "Canopy", desc: "Latvusto tarkoittaa metsän puiden muodostamaa latvakerrosta kokonaisuutena.<br><br>Kronskikt kan avse den samlade trädkronbildningen i en skog.<br><br>  The canopy refers to the collective layer formed by tree crowns in a forest." },

{ fi: "Variksenmarja", sv: "Kråkbär", en: "Crowberry", desc: "Variksenmarja on ikivihreä varpu, joka kasvaa erityisesti pohjoisilla soilla ja kangasmetsissä.<br><br>Kråkbär är en vintergrön risväxt som växer i nordliga skogar och myrar.<br><br>  Crowberry is an evergreen shrub commonly found in northern forests and peatlands." },

{ fi: "Vaatelias laji", sv: "Krävande art", en: "Demanding species", desc: "Vaatelias laji tarkoittaa lajia, joka tarvitsee erityisiä elinolosuhteita menestyäkseen.<br><br>Krävande art är en art som kräver specifika livsmiljöer.<br><br>  A demanding species requires specific environmental conditions to thrive." },

{ fi: "Lakialue", sv: "Krön", en: "Hilltop / summit area", desc: "Lakialue tarkoittaa mäen tai vaaran korkeinta kohtaa.<br><br>Krön är den högsta delen av en höjd eller kulle.<br><br>  A summit area refers to the highest point of a hill or elevation." },

{ fi: "Ylärinne", sv: "Krön", en: "Upper slope", desc: "Ylärinne tarkoittaa rinteen yläosaa, jossa olosuhteet voivat olla kuivemmat ja valoisammat.<br><br>Krön kan avse den övre delen av en sluttning.<br><br>  Upper slope refers to the upper part of a hillside, often drier and more exposed." },
  
    { fi: "Kulttuuriperintökohde", sv: "Kulturarv", en: "Cultural heritage site", desc: "Kulttuuriperintökohde tarkoittaa aluetta tai rakennetta, jolla on historiallista, kulttuurista tai arkeologista arvoa.<br><br>Kulturarv avser platser eller objekt med historiskt eller kulturellt värde.<br><br>  A cultural heritage site is a place with historical, cultural, or archaeological significance." },

{ fi: "Kulttuuripalvelut", sv: "Kulturella tjänster", en: "Cultural ecosystem services", desc: "Kulttuuripalvelut tarkoittavat luonnon tarjoamia aineettomia hyötyjä, kuten virkistystä, maisema-arvoja ja kokemuksia.<br><br>Kulturella tjänster är de icke-materiella nyttor som naturen ger, såsom rekreation och upplevelser.<br><br>  Cultural ecosystem services are non-material benefits people obtain from nature, such as recreation and aesthetic value." },

{ fi: "Kulttuurimaisema", sv: "Kulturmiljö", en: "Cultural landscape", desc: "Kulttuurimaisema tarkoittaa ihmisen muokkaamaa maisemaa, jossa näkyy pitkäaikainen maankäyttö.<br><br>Kulturmiljö är ett landskap format av mänsklig aktivitet över tid.<br><br>  A cultural landscape is a landscape shaped by long-term human activity." },

{ fi: "Laatuvika", sv: "Kvalitetsfel", en: "Quality defect", desc: "Laatuvika tarkoittaa puutavaran tai puun ominaisuutta, joka heikentää sen laatua tai käyttöarvoa.<br><br>Kvalitetsfel är en egenskap som försämrar virkets kvalitet.<br><br>  A quality defect is a flaw in timber that reduces its quality or usability." },

{ fi: "Laatuharvennus", sv: "Kvalitetsgallring", en: "Quality thinning", desc: "Laatuharvennus on harvennusmenetelmä, jossa poistetaan huonolaatuisia puita ja suositaan hyvälaatuisia yksilöitä.<br><br>Kvalitetsgallring är gallring där dåliga träd tas bort och bättre träd gynnas.<br><br>  Quality thinning is a silvicultural method where lower-quality trees are removed to favor better ones." },

{ fi: "Laatutukki", sv: "Kvalitetsstock", en: "High-quality log", desc: "Laatutukki tarkoittaa tukkipuuta, joka täyttää korkeat laatuvaatimukset esimerkiksi sahaukseen.<br><br>Kvalitetsstock är en stock med hög kvalitet för sågning.<br><br>  A high-quality log is a timber log that meets strict quality standards for sawmilling." },

{ fi: "Jäävä puusto", sv: "Kvarvarande bestånd", en: "Residual stand", desc: "Jäävä puusto tarkoittaa metsään hakkuun jälkeen jätettävää puustoa.<br><br>Kvarvarande bestånd är de träd som lämnas kvar efter avverkning.<br><br>  Residual stand refers to the trees left standing after harvesting." },

{ fi: "Kynsisammal", sv: "Kvastmossa", en: "Fork moss", desc: "Kynsisammal on sammallaji, jota esiintyy kosteissa ja varjoisissa metsäympäristöissä.<br><br>Kvastmossa är en typ av mossa som växer i fuktiga skogar.<br><br>  Fork moss is a moss species typically found in moist and shaded forest environments." },

{ fi: "Oksa", sv: "Kvist", en: "Branch", desc: "Oksa on puun rungosta kasvava sivuhaara, joka muodostaa latvuksen rakenteen.<br><br>Kvist är en gren som växer från trädets stam.<br><br>  A branch is a woody offshoot growing from the trunk of a tree." },

{ fi: "Rankapuu", sv: "Kvistade träd", en: "Delimbed tree", desc: "Rankapuu tarkoittaa puuta, josta oksat on poistettu korjuun tai käsittelyn yhteydessä.<br><br>Kvistade träd är träd som har kvistats efter avverkning.<br><br>  A delimbed tree is a tree from which branches have been removed." },

{ fi: "Ranka", sv: "Kvistat träd", en: "Small log / delimbed stem", desc: "Ranka tarkoittaa oksatonta tai vähäoksaisempaa puunrunkoa, jota käytetään usein energiapuuna.<br><br>Kvistat träd kan avse en avkvistad stam.<br><br>  A small log or delimbed stem refers to a tree stem with branches removed, often used for energy wood." },
  
    { fi: "Oksikkuus", sv: "Kvistighet", en: "Branchiness", desc: "Oksikkuus tarkoittaa puun oksien määrää, kokoa ja jakautumista rungossa, mikä vaikuttaa puutavaran laatuun.<br><br>Kvistighet beskriver hur mycket och hur stora kvistar ett träd har.<br><br>  Branchiness refers to the amount and distribution of branches in a tree, affecting timber quality." },

{ fi: "Oksankaula", sv: "Kvistkudde", en: "Branch collar", desc: "Oksankaula on puun rungossa oleva paksuuntunut kohta oksan tyvellä, joka liittyy puun luonnolliseen paranemiseen.<br><br>Kvistkudde är förtjockningen vid basen av en gren.<br><br>  The branch collar is the swollen area at the base of a branch where it connects to the trunk." },

{ fi: "Karsintakorkeus", sv: "Kvistningshöjd", en: "Pruning height", desc: "Karsintakorkeus tarkoittaa korkeutta, johon asti puun oksat on poistettu rungosta.<br><br>Kvistningshöjd är den höjd upp till vilken grenar har tagits bort.<br><br>  Pruning height is the height up to which branches have been removed from a tree trunk." },

{ fi: "Oksasaha", sv: "Kvistsåg", en: "Pruning saw", desc: "Oksasaha on työkalu, jota käytetään puiden oksien katkaisemiseen ja karsintaan.<br><br>Kvistsåg är ett verktyg för att kapa grenar.<br><br>  A pruning saw is a tool used to cut branches from trees." },

{ fi: "Oksisto", sv: "Kvistverk", en: "Branch system", desc: "Oksisto tarkoittaa puun kaikkien oksien muodostamaa kokonaisuutta.<br><br>Kvistverk avser hela grenverket i ett träd.<br><br>  Branch system refers to the entire network of branches in a tree." },

{ fi: "Typpilannoitus", sv: "Kvävegödsling", en: "Nitrogen fertilization", desc: "Typpilannoitus on metsänhoitotoimenpide, jossa maahan lisätään typpeä kasvun lisäämiseksi.<br><br>Kvävegödsling är tillförsel av kväve för att öka tillväxten.<br><br>  Nitrogen fertilization is the application of nitrogen to increase forest growth." },

{ fi: "Typpitilanne", sv: "Kvävetillstånd", en: "Nitrogen status", desc: "Typpitilanne kuvaa maaperän tai kasvupaikan typen määrää ja saatavuutta kasveille.<br><br>Kvävetillstånd beskriver mängden och tillgängligheten av kväve i marken.<br><br>  Nitrogen status describes the availability and amount of nitrogen in soil." },

{ fi: "Pihka", sv: "Kåda", en: "Resin", desc: "Pihka on puiden erittämä tahmea aine, joka suojaa vaurioitunutta kohtaa.<br><br>Kåda är en klibbig substans som träd producerar för skydd.<br><br>  Resin is a sticky substance produced by trees for protection against damage." },

{ fi: "Lähde", sv: "Källa", en: "Spring", desc: "Lähde on paikka, jossa pohjavesi purkautuu maan pinnalle.<br><br>Källa är en plats där grundvatten tränger upp till ytan.<br><br>  A spring is a place where groundwater flows naturally to the surface." },

{ fi: "Hallanarkuus", sv: "Känslighet för frost", en: "Frost sensitivity", desc: "Hallanarkuus tarkoittaa kasvin tai puuston alttiutta pakkasvaurioille.<br><br>Känslighet för frost beskriver hur lätt en växt skadas av frost.<br><br>  Frost sensitivity is the susceptibility of plants or trees to frost damage." },

{ fi: "Korpi", sv: "Kärr", en: "Herb-rich swamp forest", desc: "Korpi on kostea metsätyyppi, jossa on runsaasti ravinteita ja kosteutta.<br><br>Kärr är en fuktig skogstyp med rik vegetation.<br><br>  A swamp forest is a wet forest type rich in moisture and nutrients." },

{ fi: "Korpiräme", sv: "Kärrmyr", en: "Swampy mire forest", desc: "Korpiräme on soistunut metsäalue, jossa yhdistyvät räme- ja korpipiirteet.<br><br>Kärrmyr är en myrskog med både kärr- och mosselement.<br><br>  A swampy mire forest is a peatland forest with mixed swamp characteristics." },
  
    { fi: "Ajoura", sv: "Körstråk", en: "Skid trail / extraction trail", desc: "Ajoura tarkoittaa metsäkoneen kulkureittiä, jota pitkin puutavaraa kuljetetaan hakkuualalla.<br><br>Körstråk är en körväg i skogen för maskiner vid avverkning.<br><br>  An extraction trail is a route used by forest machinery to move timber during harvesting." },

{ fi: "Metsätuholaki", sv: "Lag om bekämpning av skogsskador", en: "Forest damage control act", desc: "Metsätuholaki säätelee metsien suojelemista tuhohyönteisiltä ja taudeilta.<br><br>Lagen reglerar bekämpning av skogsskador.<br><br>  The Forest Damage Control Act regulates measures to prevent and control forest pests and diseases." },

{ fi: "Maisemointi", sv: "Landskapsgestaltning", en: "Landscaping", desc: "Maisemointi tarkoittaa alueen muokkaamista niin, että se sopii ympäristöön ja maisemaan.<br><br>Landskapsgestaltning innebär att forma landskapet estetiskt eller funktionellt.<br><br>  Landscaping is the shaping of an area to improve or integrate it with the surrounding environment." },

{ fi: "Maisemapuu", sv: "Landskapsträd", en: "Scenic tree", desc: "Maisemapuu on yksittäinen puu, joka jätetään maisemallisten arvojen vuoksi.<br><br>Landskapsträd är ett träd som lämnas kvar för sitt estetiska värde.<br><br>  A scenic tree is a tree preserved for its visual or landscape value." },

{ fi: "Maiseman hoito", sv: "Landskapsvård", en: "Landscape management", desc: "Maiseman hoito tarkoittaa toimenpiteitä, joilla ylläpidetään tai parannetaan maiseman arvoa.<br><br>Landskapsvård är skötsel av landskapets utseende och funktion.<br><br>  Landscape management refers to actions taken to maintain or improve landscape values." },

{ fi: "Maisema-arvo", sv: "Landskapsvärde", en: "Landscape value", desc: "Maisema-arvo kuvaa alueen esteettistä, kulttuurista tai ekologista merkitystä.<br><br>Landskapsvärde avser ett områdes estetiska eller ekologiska värde.<br><br>  Landscape value refers to the aesthetic, cultural, or ecological importance of an area." },

{ fi: "Koneen kantavuus", sv: "Lastförmåga", en: "Load-bearing capacity", desc: "Koneen kantavuus tarkoittaa maaperän kykyä kantaa metsäkoneen paino ilman vaurioita.<br><br>Lastförmåga är markens förmåga att bära maskiner.<br><br>  Load-bearing capacity is the ability of soil to support the weight of machinery." },

{ fi: "Jäkälä", sv: "Lav", en: "Lichen", desc: "Jäkälä on sieni- ja leväkumppanuuteen perustuva eliö, joka kasvaa usein karuissa ympäristöissä.<br><br>Lav är en organism som består av svamp och alger i symbios.<br><br>  Lichen is a symbiotic organism formed by a fungus and algae." },

{ fi: "Karukkokangas", sv: "Lavmo", en: "Dry barren heath forest", desc: "Karukkokangas on hyvin vähäravinteinen ja kuiva metsätyyppi.<br><br>Lavmo är en mycket näringsfattig skogstyp.<br><br>  A dry barren heath forest is a nutrient-poor and dry forest type." },

{ fi: "Kuukkeli", sv: "Lavskrika", en: "Siberian jay", desc: "Kuukkeli on pohjoisten havumetsien lintu, joka tunnetaan uteliaisuudestaan.<br><br>Lavskrika är en fågel som lever i nordliga skogar.<br><br>  The Siberian jay is a bird species found in northern coniferous forests." },

{ fi: "Jäkäläturvekangas", sv: "Lavtorvmo", en: "Lichen peat forest", desc: "Jäkäläturvekangas on metsätyyppi, jossa esiintyy jäkälää ja turvepohjaa.<br><br>Lavtorvmo är en skogstyp med lav och torvmark.<br><br>  A lichen peat forest is a forest type with lichens and peat soil." },

{ fi: "Tunnuslaji", sv: "Ledväxt", en: "Indicator species", desc: "Tunnuslaji on laji, joka kertoo ympäristön tilasta tai kasvupaikan ominaisuuksista.<br><br>Ledväxt är en art som indikerar miljöförhållanden.<br><br>  An indicator species is a species that reflects environmental conditions." },

{ fi: "Savi", sv: "Ler", en: "Clay", desc: "Savi on hienojakoinen maalaji, joka pidättää vettä ja ravinteita.<br><br>Ler är en finkornig jordart.<br><br>  Clay is a fine-grained soil that retains water and nutrients." },

{ fi: "Savimoreeni", sv: "Lerig morän", en: "Clay-rich till", desc: "Savimoreeni on moreenimaata, jossa on runsaasti saviaineista ainesta.<br><br>Lerig morän är morän med hög lerhalt.<br><br>  Clay-rich till is glacial soil containing a significant amount of clay." },
  
    { fi: "Savimaa", sv: "Lerjord", en: "Clay soil", desc: "Savimaa on maalaji, jossa savipitoisuus on korkea ja joka pidättää hyvin vettä ja ravinteita.<br><br>Lerjord är en jordart med hög lerhalt som håller kvar vatten och näring.<br><br>  Clay soil is a soil type with high clay content that retains water and nutrients well." },

{ fi: "Savenottopaikka", sv: "Lertäkt", en: "Clay pit", desc: "Savenottopaikka on alue, josta otetaan savea esimerkiksi rakennus- tai teollisuuskäyttöön.<br><br>Lertäkt är en plats där lera bryts för användning.<br><br>  A clay pit is a site where clay is extracted for industrial or construction use." },

{ fi: "Tasaikäisrakenteinen metsikkö", sv: "Likåldrig bestånd", en: "Even-aged stand", desc: "Tasaikäisrakenteinen metsikkö koostuu pääosin samanikäisistä puista.<br><br>Likåldrig bestånd består av träd i samma ålder.<br><br>  An even-aged stand is a forest stand composed of trees of similar age." },

{ fi: "Tasaikäisrakenteinen metsä", sv: "Likåldrig skog", en: "Even-aged forest", desc: "Tasaikäisrakenteinen metsä on metsä, jossa puusto on pääosin saman ikäistä.<br><br>Likåldrig skog är en skog med träd i samma åldersklass.<br><br>  An even-aged forest is a forest where most trees are of the same age." },

{ fi: "Tasaikäisrakenteinen metsänkasvatus", sv: "Likåldrigt skogsbruk", en: "Even-aged forestry", desc: "Tasaikäisrakenteinen metsänkasvatus on metsänhoitomenetelmä, jossa puusto pidetään samanikäisenä.<br><br>Likåldrigt skogsbruk innebär skogsskötsel med jämn ålderstruktur.<br><br>  Even-aged forestry is a silvicultural system where stands are managed to remain even-aged." },

{ fi: "Puolukka", sv: "Lingon", en: "Lingonberry", desc: "Puolukka on ikivihreä varpukasvi, joka tuottaa punaisia marjoja.<br><br>Lingon är en vintergrön risväxt med röda bär.<br><br>  Lingonberry is an evergreen shrub producing red berries." },

{ fi: "Puolukkakorpi", sv: "Lingonkärr", en: "Lingon swamp forest", desc: "Puolukkakorpi on kostea metsätyyppi, jossa kasvaa puolukkaa ja muuta varvikkoa.<br><br>Lingonkärr är en fuktig skogstyp med lingonris.<br><br>  A lingon swamp forest is a moist forest type where lingonberry grows." },

{ fi: "Puolukkaturvekangas", sv: "Lingontorvmo", en: "Lingon peat forest", desc: "Puolukkaturvekangas on metsätyyppi, jossa esiintyy puolukkaa ja turvepohjaista maata.<br><br>Lingontorvmo är en skogstyp på torvmark med lingonvegetation.<br><br>  A lingon peat forest is a forest type on peat soil with lingonberry vegetation." },

{ fi: "Vanamo", sv: "Linnea", en: "Twinflower", desc: "Vanamo on varjossa kasvava metsäkukka, joka muodostaa matalia kasvustoja.<br><br>Linnea är en skuggväxande skogsblomma.<br><br>  Twinflower is a small forest plant that grows in shaded environments." },

{ fi: "Elinympäristö", sv: "Livsmiljö", en: "Habitat", desc: "Elinympäristö on alue, jossa eliö elää ja saa tarvitsemansa resurssit.<br><br>Livsmiljö är den miljö där en organism lever.<br><br>  A habitat is the natural environment where an organism lives." },

{ fi: "Kanerva", sv: "Ljung", en: "Heather", desc: "Kanerva on yleinen varpukasvi kuivilla ja karuilla kasvupaikoilla.<br><br>Ljung är en risväxt som växer i torra marker.<br><br>  Heather is a shrub commonly found in dry and poor soils." },

{ fi: "Valoisuus", sv: "Ljus", en: "Light", desc: "Valoisuus kuvaa ympäristön valon määrää, joka vaikuttaa kasvien kasvuun.<br><br>Ljus avser mängden ljus i en miljö.<br><br>  Light refers to the amount of illumination in an environment." },

{ fi: "Valontarve", sv: "Ljusbehov", en: "Light requirement", desc: "Valontarve tarkoittaa kasvin tarvitsemaa valon määrää kasvun tueksi.<br><br>Ljusbehov är den mängd ljus en växt behöver.<br><br>  Light requirement is the amount of light a plant needs to grow." },

{ fi: "Valo-olosuhteet", sv: "Ljusförhållanden", en: "Light conditions", desc: "Valo-olosuhteet kuvaavat ympäristön valon määrää ja laatua.<br><br>Ljusförhållanden beskriver ljusets nivå och kvalitet i en miljö.<br><br>  Light conditions describe the intensity and quality of light in an environment." },
    { fi: "Väljennyshakkuu", sv: "Ljushuggning", en: "Selective cutting", desc: "Väljennyshakkuu on hakkuutapa, jossa metsää harvennetaan poistamalla yksittäisiä puita valikoivasti.<br><br>Ljushuggning innebär att enskilda träd tas bort för att gynna återstående bestånd.<br><br>  Selective cutting is a harvesting method where individual trees are removed to improve stand conditions." },

{ fi: "Valovaatimukset", sv: "Ljuskrav", en: "Light requirements", desc: "Valovaatimukset kuvaavat, kuinka paljon valoa kasvi tarvitsee kasvaakseen ja kehittyäkseen.<br><br>Ljuskrav beskriver hur mycket ljus en växt behöver.<br><br>  Light requirements describe how much light a plant needs to grow." },

{ fi: "Valopuulaji", sv: "Ljuskrävande trädslag", en: "Light-demanding tree species", desc: "Valopuulaji on puulaji, joka tarvitsee runsaasti valoa menestyäkseen.<br><br>Ljuskrävande trädslag kräver mycket ljus för att växa bra.<br><br>  A light-demanding tree species requires high light levels to thrive." },

{ fi: "LMT", sv: "LMT", en: "LMT", desc: "Ledum-Myrtillus-typ" },

{ fi: "Paikallinen ilmasto", sv: "Lokalklimat", en: "Local climate", desc: "Paikallinen ilmasto tarkoittaa tietyn alueen ilmasto-olosuhteita, jotka voivat poiketa yleisestä ilmastosta.<br><br>Lokalklimat är klimatförhållanden i ett begränsat område.<br><br>  Local climate refers to climate conditions in a specific area." },

{ fi: "Pienaukko", sv: "Lucka", en: "Small gap", desc: "Pienaukko on metsään syntynyt tai tehty pieni avoin alue, joka antaa tilaa uudelle kasvulle.<br><br>Lucka är en liten öppning i skogen.<br><br>  A small gap is a small opening in a forest canopy allowing new growth." },

{ fi: "Pienaukkohakkuu", sv: "Luckhuggning", en: "Gap cutting", desc: "Pienaukkohakkuu on hakkuumenetelmä, jossa metsään tehdään pieniä aukkoja uudistumista varten.<br><br>Luckhuggning innebär att små luckor skapas i skogen.<br><br>  Gap cutting is a harvesting method that creates small openings in a forest." },

{ fi: "Aukkoisuus", sv: "Luckighet", en: "Gapiness", desc: "Aukkoisuus kuvaa metsän latvuston avoimuutta ja aukkojen määrää.<br><br>Luckighet beskriver hur öppet ett skogsbestånd är.<br><br>  Gapiness describes how open a forest canopy is and how many gaps it has." },

{ fi: "Lehto", sv: "Lund", en: "Herb-rich forest", desc: "Lehto on rehevä ja ravinteikas metsätyyppi, jossa kasvaa monipuolinen kasvillisuus.<br><br>Lund är en näringsrik skogstyp.<br><br>  A herb-rich forest is a fertile forest type with diverse vegetation." },

{ fi: "Lehtomainen kangas", sv: "Lundartad mo", en: "Herb-rich heath forest", desc: "Lehtomainen kangas on metsätyyppi, joka on rehevämpi kuin tavallinen kangas.<br><br>Lundartad mo är en friskare skogstyp än vanlig mo.<br><br>  A herb-rich heath forest is a forest type richer than typical heath forests." },

{ fi: "Lehtokorpi", sv: "Lundkärr", en: "Herb-rich swamp forest", desc: "Lehtokorpi on kostea ja ravinteikas metsätyyppi, jossa esiintyy lehtokasvillisuutta.<br><br>Lundkärr är en fuktig och näringsrik skogstyp.<br><br>  A herb-rich swamp forest is a nutrient-rich wet forest type." },

{ fi: "Lehtomaa", sv: "Lundmark", en: "Fertile forest site", desc: "Lehtomaa on erittäin ravinteikas kasvupaikka, joka soveltuu vaateliaalle kasvillisuudelle.<br><br>Lundmark är en mycket bördig marktyp.<br><br>  A fertile forest site is a highly nutrient-rich growing site suitable for demanding vegetation." },
    { fi: "Lehväsammalet", sv: "Lundmossor", en: "Broadleaf forest mosses", desc: "Lehväsammalet ovat sammalryhmä, joka viihtyy rehevissä ja kosteissa metsissä, usein lehtomaisilla kasvupaikoilla.<br><br>Lundmossor är mossor som trivs i näringsrika och fuktiga skogar.<br><br>  Broadleaf forest mosses are moss species typically found in rich, moist forest habitats." },

{ fi: "Rinne", sv: "Lutning", en: "Slope", desc: "Rinne tarkoittaa maaston kaltevaa osaa, joka voi vaikuttaa veden valumiseen ja kasvupaikkaolosuhteisiin.<br><br>Lutning är en sluttande del av terrängen.<br><br>  A slope is an inclined part of terrain affecting drainage and site conditions." },

{ fi: "Koro", sv: "Lyra", en: "Resin scar / wound", desc: "Koro on puun rungossa oleva vaurio tai arpi, josta voi erittyä pihkaa.<br><br>Lyra kan avse ett skadat område i trädstammen.<br><br>  A resin scar is a wound on a tree trunk where resin may be exuded." },

{ fi: "Maapuu", sv: "Låga", en: "Fallen log", desc: "Maapuu on maahan kaatunut ja maatumassa oleva puunrunko, joka on tärkeä osa metsäekosysteemiä.<br><br>Låga är en nedfallen trädstam.<br><br>  A fallen log is a tree trunk lying on the ground, important for forest biodiversity." },

{ fi: "Alaharvennus", sv: "Låggallring", en: "Low thinning", desc: "Alaharvennus on harvennusmenetelmä, jossa poistetaan pääasiassa pienempiä ja huonokuntoisia puita.<br><br>Låggallring innebär att främst undertryckta träd tas bort.<br><br>  Low thinning removes mainly smaller and suppressed trees." },

{ fi: "Verhopuusto", sv: "Lågskärm", en: "Shelterwood stand", desc: "Verhopuusto tarkoittaa puustoa, joka jätetään suojaamaan taimettumista uudistamisen aikana.<br><br>Lågskärm är ett skyddande trädbestånd.<br><br>  Shelterwood stand is a stand left to protect regeneration underneath." },

{ fi: "Lyhytkorsikalvakkaneva", sv: "Lågstarrhöljemosse", en: "Short-sedge flark fen", desc: "Lyhytkorsikalvakkaneva on kostea suotyyppi, jossa kasvaa matalia sarakasveja.<br><br>Lågstarrhöljemosse är en våt myrtyp med lågväxande starrarter.<br><br>  A short-sedge fen is a wetland type dominated by low sedges." },

{ fi: "Lyhytkorsineva", sv: "Lågstarrmyr", en: "Low sedge mire", desc: "Lyhytkorsineva on saravaltainen suotyyppi, jossa kasvillisuus on matalaa.<br><br>Lågstarrmyr är en myr med lågväxande starrvegetation.<br><br>  A low sedge mire is a peatland dominated by low sedge plants." },

{ fi: "Lyhytkorsiräme", sv: "Lågstarrmyr", en: "Low sedge pine bog", desc: "Lyhytkorsiräme on rämetyyppinen suo, jossa kasvaa matalia sarakasveja ja puita harvakseltaan.<br><br>Lågstarrmyr är en myrtyp med låg starrvegetation.<br><br>  A low sedge pine bog is a bog with low sedges and sparse tree cover." },

{ fi: "Vähimmäispuusto", sv: "Lägsta stamantal", en: "Minimum stem number", desc: "Vähimmäispuusto tarkoittaa metsän vähimmäistiheyttä, joka on säilytettävä metsänkasvatuksessa.<br><br>Lägsta stamantal är det minsta tillåtna antalet träd per hektar.<br><br>  Minimum stem number is the lowest allowed tree density in forest management." },

{ fi: "Vähimmäis-PPA", sv: "Lägsta tillåtna grundyta (enligt skogslagstiftningen)", en: "Minimum basal area", desc: "Vähimmäis-PPA tarkoittaa metsälainsäädännössä määriteltyä pienintä sallittua pohjapinta-alaa.<br><br>Lägsta tillåtna grundyta är minsta tillåtna grundyta enligt lag.<br><br>  Minimum basal area is the legally required minimum stand basal area." },

{ fi: "Pituuskasvu", sv: "Längdtillväxt", en: "Height growth", desc: "Pituuskasvu tarkoittaa puun kasvua pituussuunnassa tietyn ajanjakson aikana.<br><br>Längdtillväxt är hur mycket ett träd växer i höjd.<br><br>  Height growth refers to how much a tree increases in height over time." },
  
    { fi: "Lehtikuusi", sv: "Lärk", en: "Larch", desc: "Lehtikuusi on havupuu, joka pudottaa neulasensa talveksi ja kestää hyvin kylmää.<br><br>Lärk är ett barrträd som fäller sina barr på vintern.<br><br>  Larch is a coniferous tree that sheds its needles seasonally and tolerates cold climates well." },

{ fi: "Vaahtera", sv: "Lönn", en: "Maple", desc: "Vaahtera on lehtipuu, joka tunnetaan erityisesti värikkäästä syysasustaan ja siivellisistä siemenistään.<br><br>Lönn är ett lövträd känt för sina färggranna höstlöv.<br><br>  Maple is a deciduous tree known for its colorful autumn foliage and winged seeds." },

{ fi: "Metsänkasvatuksen kannattavuus", sv: "Lönsamhet i skogsbruk", en: "Profitability of forestry", desc: "Metsänkasvatuksen kannattavuus kuvaa metsätalouden taloudellista tuottoa ja kustannusten suhdetta.<br><br>Lönsamhet i skogsbruk handlar om ekonomisk avkastning från skogsskötsel.<br><br>  Profitability of forestry refers to the economic return from forest management relative to costs." },

{ fi: "Lehti", sv: "Löv", en: "Leaf", desc: "Lehti on kasvin yhteyttävä osa, joka sijaitsee yleensä puiden ja pensaiden oksissa.<br><br>Löv är växtens blad som utför fotosyntes.<br><br>  A leaf is the photosynthetic organ of a plant, usually found on branches." },

{ fi: "Lehtipuusekoitus", sv: "Lövinslag", en: "Deciduous tree mixture", desc: "Lehtipuusekoitus tarkoittaa havumetsässä tai sekametsässä esiintyvää lehtipuiden osuutta.<br><br>Lövinslag avser andelen lövträd i ett bestånd.<br><br>  Deciduous tree mixture refers to the proportion of broadleaf trees in a forest stand." },

{ fi: "Metsäluhta", sv: "Lövsumpskog", en: "Flooded deciduous forest", desc: "Metsäluhta on kostea metsätyyppi, jossa esiintyy ajoittaista tulvimista ja rehevää kasvillisuutta.<br><br>Lövsumpskog är en fuktig lövskog som periodvis översvämmas.<br><br>  A flooded deciduous forest is a wet forest type that experiences periodic flooding." },

{ fi: "Lehtipuu", sv: "Lövträd", en: "Broadleaf tree", desc: "Lehtipuu on puu, joka pudottaa lehtensä syksyllä tai kuivana kautena.<br><br>Lövträd är ett träd som fäller sina blad säsongsmässigt.<br><br>  A broadleaf tree is a tree that sheds its leaves seasonally." },

{ fi: "Lehdesniitty", sv: "Löväng", en: "Wooded meadow", desc: "Lehdesniitty on perinteinen niitty, jossa kasvaa yksittäisiä puita ja niittykasvillisuutta.<br><br>Löväng är en traditionell slåtteräng med spridda träd.<br><br>  A wooded meadow is a traditional meadow with scattered trees." },

{ fi: "Lehtoniitty", sv: "Löväng", en: "Herb-rich meadow", desc: "Lehtoniitty on ravinteikas niitty, jossa kasvaa monipuolinen kasvillisuus.<br><br>Löväng kan avse en näringsrik ängstyp.<br><br>  A herb-rich meadow is a nutrient-rich meadow with diverse vegetation." },

{ fi: "Luhta", sv: "Madkärr", en: "Wet meadow / marsh", desc: "Luhta on kosteapohjainen alue, joka voi olla osittain veden peitossa.<br><br>Madkärr är en fuktig marktyp.<br><br>  A wet meadow or marsh is a waterlogged or periodically flooded area." },

{ fi: "Hiirenporras", sv: "Majbräken", en: "Lady fern", desc: "Hiirenporras on yleinen saniaiskasvi kosteissa metsissä.<br><br>Majbräken är en vanlig ormbunke i fuktiga skogar.<br><br>  Lady fern is a common fern found in moist forest habitats." },

{ fi: "Käsinkylvö", sv: "Manuell sådd", en: "Manual sowing", desc: "Käsinkylvö tarkoittaa siementen kylvämistä käsin metsänuudistamisessa.<br><br>Manuell sådd innebär att frön sprids för hand.<br><br>  Manual sowing is the process of spreading seeds by hand in forestry regeneration." },

{ fi: "Maapohja", sv: "Mark", en: "Soil / ground", desc: "Maapohja tarkoittaa metsän tai alueen maaperää ja sen ominaisuuksia.<br><br>Mark avser jordens egenskaper i ett område.<br><br>  Soil or ground refers to the physical ground and its characteristics in a forest site." },
  
    { fi: "Maa", sv: "Mark", en: "Land / Soil", desc: "Maa tarkoittaa yleisesti maan pintaa tai aluetta, joka voi viitata sekä maaperään että maa-alueeseen.<br><br>Mark avser jord eller landyta.<br><br>  Land or soil refers to the Earth's surface or ground area." },

{ fi: "Maa-analyysi", sv: "Markanalys", en: "Soil analysis", desc: "Maa-analyysi on maaperän ominaisuuksien tutkimista, kuten ravinteita ja rakennetta.<br><br>Markanalys är undersökning av jordens egenskaper.<br><br>  Soil analysis examines soil properties such as nutrients and structure." },

{ fi: "Maanmuokkaus", sv: "Markberedning", en: "Soil preparation", desc: "Maanmuokkaus on maaperän käsittelyä ennen metsänuudistamista tai viljelyä.<br><br>Markberedning innebär att förbereda marken för plantering.<br><br>  Soil preparation is the process of treating soil before planting or regeneration." },

{ fi: "Maanmuokkausmenetelmä", sv: "Markberedningsmetod", en: "Soil preparation method", desc: "Maanmuokkausmenetelmä tarkoittaa tapaa, jolla maaperää käsitellään metsänuudistamisessa.<br><br>Markberedningsmetod är sättet att bearbeta marken.<br><br>  A soil preparation method describes how soil is treated in forestry operations." },

{ fi: "Muokkausjälki", sv: "Markberedningsspår", en: "Soil preparation track", desc: "Muokkausjälki on maanmuokkauksesta maahan jäävä jälki.<br><br>Markberedningsspår är spår efter markbearbetning.<br><br>  A soil preparation track is the visible trace left in the soil after preparation work." },

{ fi: "Maaperän viljavuus", sv: "Markens bördighet", en: "Soil fertility", desc: "Maaperän viljavuus kuvaa maan kykyä tuottaa kasvien kasvua.<br><br>Markens bördighet beskriver jordens produktionsförmåga.<br><br>  Soil fertility refers to the ability of soil to support plant growth." },

{ fi: "Maaperän rakenne", sv: "Markens struktur", en: "Soil structure", desc: "Maaperän rakenne tarkoittaa maan hiukkasten järjestystä ja koostumusta.<br><br>Markens struktur beskriver jordens uppbyggnad.<br><br>  Soil structure refers to the arrangement of particles in the soil." },

{ fi: "Maan vedenläpäisevyys", sv: "Markens vattengenomsläpplighet", en: "Soil permeability", desc: "Maan vedenläpäisevyys kuvaa kuinka hyvin vesi kulkee maaperän läpi.<br><br>Markens vattengenomsläpplighet visar hur vatten rör sig genom jord.<br><br>  Soil permeability describes how easily water moves through soil." },

{ fi: "Maaperän puuntuotoskyky", sv: "Markens virkesproduktionsförmåga", en: "Site productivity", desc: "Maaperän puuntuotoskyky kertoo, kuinka hyvin maa tuottaa puuta.<br><br>Markens virkesproduktionsförmåga beskriver skogsmarkens produktivitet.<br><br>  Site productivity refers to how well soil can produce timber." },

{ fi: "Uudistusalan merkintä", sv: "Markering av förnyelseytan", en: "Marking of regeneration area", desc: "Uudistusalan merkintä tarkoittaa alueen rajaamista metsänuudistamista varten.<br><br>Markering av förnyelseytan innebär att avgränsa ett område.<br><br>  Marking of a regeneration area defines boundaries for forest renewal work." },

{ fi: "Maanparannus", sv: "Markförbättring", en: "Soil improvement", desc: "Maanparannus on toimenpiteitä, joilla parannetaan maaperän laatua.<br><br>Markförbättring innebär åtgärder för att förbättra jordens egenskaper.<br><br>  Soil improvement refers to actions that enhance soil quality." },

{ fi: "Aluskasvillisuus", sv: "Markvegetation", en: "Ground vegetation", desc: "Aluskasvillisuus on metsän pohjakerroksen kasvillisuutta kuten varpuja ja ruohoja.<br><br>Markvegetation är växter i skogens bottenskikt.<br><br>  Ground vegetation refers to plants growing in the forest floor layer." },
  
    { fi: "Pintakasvillisuus", sv: "Markvegetation", en: "Ground vegetation", desc: "Pintakasvillisuus tarkoittaa maanpinnan lähellä kasvavaa kasvillisuutta kuten heiniä, varpuja ja sammalia.<br><br>Markvegetation avser växter nära markytan.<br><br>  Ground vegetation refers to plants growing close to the soil surface." },

{ fi: "Paljaan maan arvo", sv: "Markvärde", en: "Bare land value", desc: "Paljaan maan arvo kuvaa maan taloudellista arvoa ilman puustoa.<br><br>Markvärde avser värdet av mark utan skog.<br><br>  Bare land value is the economic value of land without standing timber." },

{ fi: "Maanpinta", sv: "Markyta", en: "Ground surface", desc: "Maanpinta on maan uloin näkyvä kerros.<br><br>Markyta är jordens yta.<br><br>  Ground surface refers to the outer visible layer of the land." },

{ fi: "Koneellinen korjuu", sv: "Maskinell avverkning", en: "Mechanized harvesting", desc: "Koneellinen korjuu tarkoittaa puunhakkuuta ja korjuuta koneiden avulla.<br><br>Maskinell avverkning sker med maskiner.<br><br>  Mechanized harvesting is timber harvesting using machines." },

{ fi: "Koneellinen kitkentä", sv: "Maskinell slyuppryckning", en: "Mechanical brush removal", desc: "Koneellinen kitkentä on vesakon ja taimikon poistamista koneellisesti.<br><br>Maskinell slyuppryckning innebär mekanisk borttagning av sly.<br><br>  Mechanical brush removal is clearing young unwanted vegetation using machines." },

{ fi: "Koneellinen kylvö", sv: "Maskinell sådd", en: "Mechanical sowing", desc: "Koneellinen kylvö tarkoittaa siementen kylvämistä koneiden avulla.<br><br>Maskinell sådd utförs med maskin.<br><br>  Mechanical sowing is spreading seeds using machinery." },

{ fi: "Kuitupuu", sv: "Massaved", en: "Pulpwood", desc: "Kuitupuu on puuta, jota käytetään sellun ja paperin raaka-aineena.<br><br>Massaved är virke för pappersmassa.<br><br>  Pulpwood is timber used for producing paper pulp." },

{ fi: "Visakoivu", sv: "Masurbjörk", en: "Curly birch", desc: "Visakoivu on erikoismuotoista koivua, jolla on koristeellinen puuaine.<br><br>Masurbjörk är en dekorativ björk med speciell vedstruktur.<br><br>  Curly birch is a birch variety with distinctive ornamental wood grain." },

{ fi: "Ruokasieni", sv: "Matsvamp", en: "Edible mushroom", desc: "Ruokasieni on syötäväksi kelpaava sienilaji.<br><br>Matsvamp är en ätlig svamp.<br><br>  An edible mushroom is a fungus safe for human consumption." },

{ fi: "MCClT", sv: "MCCIT", en: "MCCIT", desc: "Myrtillus-Calluna-Cladina-typ" },

{ fi: "Puuston keskiläpimitta", sv: "Medeldiameter", en: "Mean diameter", desc: "Puuston keskiläpimitta kuvaa metsikön puiden keskimääräistä läpimittaa.<br><br>Medeldiameter är trädens genomsnittliga diameter.<br><br>  Mean diameter refers to the average tree diameter in a stand." },

{ fi: "Keskipituus", sv: "Medelhöjd", en: "Mean height", desc: "Keskipituus on puuston keskimääräinen korkeus metsikössä.<br><br>Medelhöjd är trädens genomsnittliga höjd.<br><br>  Mean height is the average height of trees in a forest stand." },
  
    { fi: "Lisävaltapuut", sv: "Medhärskande träd", en: "Co-dominant trees", desc: "Lisävaltapuut ovat puita, jotka muodostavat metsikön latvuskerroksessa pääpuuston rinnalla vallitsevan osan, mutta eivät ole aivan hallitsevia.<br><br>Medhärskande träd är träd i kronskiktet som delar dominans men inte är helt härskande.<br><br>  Co-dominant trees are trees in the canopy that share dominance but are not the main dominant individuals." },

{ fi: "Mekaaninen heinäntorjunta", sv: "Mekanisk gräsröjning", en: "Mechanical grass control", desc: "Mekaaninen heinäntorjunta tarkoittaa heinän ja muun kasvillisuuden poistamista koneellisesti ilman kemikaaleja.<br><br>Mekanisk gräsröjning innebär att man tar bort gräs mekaniskt.<br><br>  Mechanical grass control is removing grass and vegetation using mechanical methods instead of chemicals." },

{ fi: "Aukkojen välialue", sv: "Mellanområde", en: "Inter-stand area", desc: "Aukkojen välialue on metsän osaa, joka sijaitsee avohakkuualojen tai pienaukkojen välillä.<br><br>Mellanområde är området mellan öppna ytor i skogen.<br><br>  Inter-stand area refers to forest areas between openings or gaps." },

{ fi: "Väli-isäntä", sv: "Mellanvärd", en: "Intermediate host", desc: "Väli-isäntä on eliö, jossa loinen elää osan elinkiertoaan ennen lopullista isäntää.<br><br>Mellanvärd är en organism som parasiten använder under sin livscykel.<br><br>  An intermediate host is an organism that hosts a parasite during part of its life cycle." },

{ fi: "Lisäkasvu", sv: "Mertillväxt", en: "Increment growth", desc: "Lisäkasvu tarkoittaa puuston kasvun lisääntymistä tietyllä ajanjaksolla.<br><br>Mertillväxt är den extra tillväxten i skogen.<br><br>  Increment growth refers to additional growth in tree volume or size over time." },

{ fi: "Metso-ohjelma", sv: "METSO-handlingsprogram", en: "METSO Programme", desc: "Metso-ohjelma on vapaaehtoinen luonnonsuojeluohjelma metsien monimuotoisuuden turvaamiseksi Suomessa.<br><br>METSO-programmet är ett finskt skyddsprogram för skogar.<br><br>  The METSO Programme is a Finnish voluntary forest conservation program." },

{ fi: "Pienilmasto", sv: "Mikroklimat", en: "Microclimate", desc: "Pienilmasto on paikallinen ilmasto-olosuhde, joka voi poiketa ympäröivästä alueesta.<br><br>Mikroklimat är lokala klimatförhållanden.<br><br>  A microclimate is a localized climate differing from the surrounding area." },

{ fi: "Pieneliö", sv: "Mikroorganism", en: "Microorganism", desc: "Pieneliö on mikroskooppinen eliö kuten bakteeri tai sieni.<br><br>Mikroorganism är en mikroskopisk organism.<br><br>  A microorganism is a microscopic living organism such as bacteria or fungi." },

{ fi: "Ympäristötekijä", sv: "Miljöfaktor", en: "Environmental factor", desc: "Ympäristötekijä on luonnollinen tai ihmisen aiheuttama tekijä, joka vaikuttaa ekosysteemiin.<br><br>Miljöfaktor är en faktor som påverkar miljön.<br><br>  An environmental factor is any natural or human-caused influence on an ecosystem." },

{ fi: "Ympäristöhallinto", sv: "Miljöförvaltning", en: "Environmental administration", desc: "Ympäristöhallinto vastaa ympäristöön liittyvästä ohjauksesta ja valvonnasta.<br><br>Miljöförvaltning är myndigheternas arbete med miljöfrågor.<br><br>  Environmental administration refers to governing bodies managing environmental issues." },

{ fi: "Ympäristöhaitta", sv: "Miljörisk", en: "Environmental hazard", desc: "Ympäristöhaitta tarkoittaa toimintaa tai ilmiötä, joka voi vahingoittaa ympäristöä.<br><br>Miljörisk är risk för skada på miljön.<br><br>  An environmental hazard is a factor that can cause harm to the environment." },

{ fi: "Ympäristönsuojelulaki", sv: "Miljöskyddslag", en: "Environmental Protection Act", desc: "Ympäristönsuojelulaki säätelee ympäristön suojelua ja käyttöä Suomessa.<br><br>Miljöskyddslag reglerar miljöskydd.<br><br>  The Environmental Protection Act regulates environmental protection activities." },

{ fi: "Ympäristöarvo", sv: "Miljövärden", en: "Environmental value", desc: "Ympäristöarvo tarkoittaa luonnon tai maiseman ekologista, esteettistä tai kulttuurista arvoa.<br><br>Miljövärden är värden kopplade till natur och landskap.<br><br>  Environmental value refers to ecological, aesthetic, or cultural importance of nature or landscape." },
  
    { fi: "Vaakanävertäjä", sv: "Mindre märgborre", en: "Small pine shoot beetle", desc: "Vaakanävertäjä on kuorella elävä hyönteinen, joka voi vahingoittaa erityisesti havupuiden versoja ja runkoja.<br><br>Mindre märgborre är en skalbagge som lever i barken på träd.<br><br>  The small pine shoot beetle is an insect that can damage conifer shoots and stems." },

{ fi: "Kivennäismaa", sv: "Mineraljord", en: "Mineral soil", desc: "Kivennäismaa on maaperää, joka koostuu kivennäisaineksista eikä turpeesta.<br><br>Mineraljord består av mineralpartiklar.<br><br>  Mineral soil is soil composed mainly of mineral particles rather than organic peat." },

{ fi: "Pohjamaa", sv: "Mineraljord under torven", en: "Subsoil", desc: "Pohjamaa on turpeen tai pintamaan alla oleva kivennäismaa.<br><br>Mineraljord under torven är jordlagret under torv.<br><br>  Subsoil is the layer of mineral soil located beneath peat or topsoil." },

{ fi: "Hiesumoreeni", sv: "Mjälig morän", en: "Silty till", desc: "Hiesumoreeni on hienojakoinen moreenimaa, jossa on paljon hiesua.<br><br>Mjälig morän är en finjordig morän.<br><br>  Silty till is glacial till with a high proportion of silt." },

{ fi: "Hiesu", sv: "Mjälja", en: "Silt", desc: "Hiesu on hienojakoinen maalaji, joka sijoittuu hiekan ja saven väliin raekooltaan.<br><br>Mjälja är en finkornig jordart.<br><br>  Silt is a fine-grained soil between sand and clay in particle size." },

{ fi: "Emopuu", sv: "Moderträd", en: "Seed tree", desc: "Emopuu on siementä tuottava puu, jota jätetään metsänuudistamisessa.<br><br>Moderträd är ett träd som lämnas för fröspridning.<br><br>  A seed tree is a tree left to provide seeds for natural regeneration." },

{ fi: "Tuleentuminen", sv: "Mognande", en: "Ripening / maturation", desc: "Tuleentuminen tarkoittaa siementen tai hedelmien kypsymistä.<br><br>Mognande är processen där frön mognar.<br><br>  Ripening refers to the maturation process of seeds or fruits." },

{ fi: "Hietamoreeni", sv: "Moig morän", en: "Sandy till", desc: "Hietamoreeni on moreenimaa, jossa on runsaasti hiekkaa.<br><br>Moig morän innehåller mycket sand.<br><br>  Sandy till is glacial till with a high sand content." },

{ fi: "Kangaskorpi", sv: "Mokärr", en: "Forest swamp type", desc: "Kangaskorpi on metsäinen suo- tai kostean maan tyyppi.<br><br>Mokärr är en skoglig myrtyp.<br><br>  A forest swamp type is a wet forest habitat with mixed characteristics." },

{ fi: "Hietamaa", sv: "Momark", en: "Sandy soil", desc: "Hietamaa on hiekkapitoinen maa.<br><br>Momark är sandig mark.<br><br>  Sandy soil is soil dominated by sand particles." },

{ fi: "Kangasmaa", sv: "Momark", en: "Upland forest soil", desc: "Kangasmaa on kuivahko ja kivennäismaalta vaikuttava metsämaa.<br><br>Momark är skogsmark på mineraljord.<br><br>  Upland forest soil refers to drier mineral soil forest sites." },

{ fi: "Kangasräme", sv: "Momy", en: "Pine bog forest", desc: "Kangasräme on suon ja kangasmetsän välimuoto.<br><br>Momyr är en skogbevuxen myrtyp.<br><br>  A pine bog forest is a transitional wetland-forest type dominated by pines." },

{ fi: "Monokulttuuri", sv: "Monokultur", en: "Monoculture", desc: "Monokulttuuri tarkoittaa yhden puulajin tai kasvin viljelyä laajalla alueella.<br><br>Monokultur är odling av en enda art.<br><br>  Monoculture is the cultivation of a single species over a large area." },
  
    { fi: "Moreeni", sv: "Morän", en: "Glacial till", desc: "Moreeni on jäätikön kerrostamaa lajittumatonta maa-ainesta, joka sisältää erikokoisia kiviä, hiekkaa ja savea.<br><br>Morän är osorterat material som lämnats av inlandsis.<br><br>  Glacial till is unsorted sediment deposited directly by ice." },

{ fi: "Moreenimaa", sv: "Moränmark", en: "Till soil / moraine soil", desc: "Moreenimaa on maaperä, joka koostuu pääasiassa moreenista ja on yleinen metsämaaperä Suomessa.<br><br>Moränmark består av moränjord.<br><br>  Moraine soil is soil dominated by glacial till." },

{ fi: "Osakasvusto", sv: "Mosaikartad vegetation", en: "Patchy vegetation", desc: "Osakasvusto tarkoittaa kasvillisuutta, joka esiintyy laikuttaisesti tai mosaiikkimaisesti alueella.<br><br>Mosaikartad vegetation är växtlighet i fläckar.<br><br>  Patchy vegetation refers to vegetation occurring in irregular patches." },

{ fi: "Mosaiikkimaisuus", sv: "Mosaikstruktur", en: "Mosaic structure", desc: "Mosaiikkimaisuus kuvaa metsän tai maiseman vaihtelevaa ja laikuttaista rakennetta.<br><br>Mosaikstruktur beskriver en varierad landskapsstruktur.<br><br>  Mosaic structure refers to a spatially patchy pattern in vegetation or landscape." },

{ fi: "Sammal", sv: "Mossa", en: "Moss", desc: "Sammal on pieni, itiökasvi, joka kasvaa usein kosteilla ja varjoisilla paikoilla.<br><br>Mossa är en liten sporeväxt.<br><br>  Moss is a small non-vascular plant that grows in moist environments." },

{ fi: "Tuhonkestävyys", sv: "Motståndskraft mot skador", en: "Damage resistance", desc: "Tuhonkestävyys tarkoittaa metsän kykyä vastustaa tuhoja kuten hyönteisiä tai myrskyjä.<br><br>Motståndskraft mot skador beskriver skogens tålighet.<br><br>  Damage resistance is the ability to withstand biological or environmental damage." },

{ fi: "MT", sv: "MT", en: "MT", desc: "MT" },

{ fi: "Multa", sv: "Mull", en: "Humus-rich soil", desc: "Multa on orgaanista ainesta sisältävä ravinteikas maaperä.<br><br>Mull är näringsrik jord med organiskt material.<br><br>  Humus-rich soil contains a high proportion of decomposed organic matter." },

{ fi: "Räme", sv: "Myr", en: "Pine bog", desc: "Räme on suotyyppi, jossa kasvaa pääasiassa mäntyä ja varpukasvillisuutta.<br><br>Myr är en torvmarkstyp.<br><br>  A pine bog is a wetland type dominated by pine trees." },

{ fi: "Suosaareke", sv: "Myrholme", en: "Bog island", desc: "Suosaareke on pienialainen metsäinen alue suon keskellä.<br><br>Myrholme är en skoglig ö i en myr.<br><br>  A bog island is a small forested patch within a wetland." },

{ fi: "Rämevarpu", sv: "Myrris", en: "Bog shrub", desc: "Rämevarpu tarkoittaa suolla kasvavia varpukasveja kuten suopursua.<br><br>Myrris avser risväxter i myr.<br><br>  Bog shrubs are dwarf shrubs growing in peatlands." },

{ fi: "Metsien monikäyttö", sv: "Mångbruk", en: "Multiple use of forests", desc: "Metsien monikäyttö tarkoittaa metsien hyödyntämistä useisiin tarkoituksiin kuten talous, virkistys ja suojelu.<br><br>Mångbruk innebär flera användningsformer av skog.<br><br>  Multiple use of forests refers to using forests for several purposes simultaneously." },
  
    { fi: "Lajiston monimuotoisuus", sv: "Mångfald av arter", en: "Species diversity", desc: "Lajiston monimuotoisuus tarkoittaa alueella esiintyvien lajien määrää ja vaihtelua sekä niiden keskinäisiä suhteita.<br><br>Mångfald av arter avser variationen av arter i ett område.<br><br>  Species diversity refers to the variety and abundance of different species in an ecosystem." },

{ fi: "Maankohoamisrannikon monimuotoisuuskohde", sv: "Mångfaldsobjekt längs landhöjningskusten", en: "Biodiversity site on post-glacial uplift coast", desc: "Maankohoamisrannikon monimuotoisuuskohde on alue, jossa maankohoaminen luo jatkuvasti uusia elinympäristöjä ja lisää luonnon monimuotoisuutta.<br><br>Mångfaldsobjekt längs landhöjningskusten är områden med unik naturutveckling.<br><br>  A biodiversity site on a post-glacial uplift coast is an area where land uplift creates continuously changing habitats." },

{ fi: "Kangashumus", sv: "Mår", en: "Mor humus", desc: "Kangashumus on karuilla kangasmailla esiintyvä hitaasti hajoava humuskerros.<br><br>Mår är ett surt humusskikt i skogsmark.<br><br>  Mor humus is a raw, slowly decomposing humus layer in forest soils." },

{ fi: "Kuntta", sv: "Mår", en: "Forest floor mat / raw humus layer", desc: "Kuntta on metsän pintakerros, joka sisältää neulasia, sammalia ja humusta yhtenä mattona.<br><br>Mår är ett sammanhängande humusskikt på skogsmark.<br><br>  The forest floor mat is a continuous layer of organic material on the soil surface." },

{ fi: "Kunttakerros", sv: "Mårlager", en: "Raw humus layer", desc: "Kunttakerros on metsän pintakerros, joka koostuu orgaanisesta aineksesta ja kasvijätteistä.<br><br>Mårlager är det översta organiska lagret i skogsmark.<br><br>  The raw humus layer is the upper organic layer of forest soil." },

{ fi: "Ytimennävertäjät", sv: "Märgborrar", en: "Wood borers", desc: "Ytimennävertäjät ovat hyönteisiä, jotka kaivautuvat puiden sydänpuuhun ja voivat heikentää puustoa.<br><br>Märgborrar är insekter som angriper träds märg.<br><br>  Wood borers are insects that tunnel into the heartwood of trees." },

{ fi: "Kansallinen metsästrategia", sv: "Nationella skogsstrategi", en: "National forest strategy", desc: "Kansallinen metsästrategia ohjaa metsien kestävää käyttöä ja hoitoa Suomessa.<br><br>Nationella skogsstrategin styr skogspolitiken.<br><br>  The national forest strategy guides sustainable forest management and use." },

{ fi: "Luonnon biologinen monimuotoisuus", sv: "Naturens biologiska mångfald", en: "Biodiversity", desc: "Luonnon biologinen monimuotoisuus tarkoittaa lajien, elinympäristöjen ja geenien monimuotoisuutta luonnossa.<br><br>Naturens biologiska mångfald är variationen i naturen.<br><br>  Biodiversity refers to the variety of life, habitats, and genes in nature." },

{ fi: "Luonnonpoistuma", sv: "Naturlig avgång", en: "Natural mortality", desc: "Luonnonpoistuma tarkoittaa puiden tai eliöiden kuolemista ilman ihmisen vaikutusta.<br><br>Naturlig avgång är dödlighet utan mänsklig påverkan.<br><br>  Natural mortality refers to the death of organisms without human intervention." },

{ fi: "Luonnonsiemennys", sv: "Naturlig frösättning", en: "Natural seeding", desc: "Luonnonsiemennys tarkoittaa siementen leviämistä ja taimettumista luonnollisesti.<br><br>Naturlig frösättning sker utan mänsklig hjälp.<br><br>  Natural seeding is the process of seed dispersal and regeneration without human assistance." },

{ fi: "Luontainen uudistaminen", sv: "Naturlig förnyelse", en: "Natural regeneration", desc: "Luontainen uudistaminen on metsän uudistumista ilman istutusta tai kylvöä.<br><br>Naturlig förnyelse sker genom självföryngring.<br><br>  Natural regeneration is forest renewal without planting or sowing." },

{ fi: "Luontainen vesitalous", sv: "Naturlig vattenhushållning", en: "Natural water regime", desc: "Luontainen vesitalous kuvaa veden luonnollista kiertoa ja virtausta ekosysteemissä.<br><br>Naturlig vattenhushållning beskriver vattenbalansen i naturen.<br><br>  Natural water regime refers to the natural flow and balance of water in ecosystems." },

{ fi: "Luontokohde", sv: "Naturobjekt", en: "Nature site", desc: "Luontokohde on luonnon erityiskohde, jolla on ekologista tai maisemallista arvoa.<br><br>Naturobjekt är ett område med naturvärden.<br><br>  A nature site is a natural area with ecological or landscape value." },

{ fi: "Luonnontaimi", sv: "Naturplanta", en: "Natural seedling", desc: "Luonnontaimi on ilman istutusta syntynyt puun taimi.<br><br>Naturplanta är en självföryngrad planta.<br><br>  A natural seedling is a tree seedling that has grown without planting." },
  
    { fi: "luonnontuotteet", sv: "naturprodukter", en: "non-wood forest products", desc: "Luonnontuotteet ovat metsistä ja luonnosta saatavia tuotteita kuten marjoja, sieniä ja yrttejä.<br><br>Naturprodukter är produkter från skog och natur, till exempel bär, svamp och örter.<br><br>Non-wood forest products are goods from forests and nature such as berries, mushrooms and herbs." },

{ fi: "luonnontuho", sv: "naturskada", en: "natural damage", desc: "Luonnontuho tarkoittaa luonnon aiheuttamia vahinkoja kuten myrskyt, hyönteiset tai taudit.<br><br>Naturskada är skador orsakade av naturen, till exempel stormar eller insekter.<br><br>Natural damage refers to harm caused by natural events such as storms, insects or diseases." },

{ fi: "luonnonmetsä", sv: "naturskog", en: "natural forest", desc: "Luonnonmetsä on metsä, joka on kehittynyt ilman merkittävää ihmisen vaikutusta.<br><br>Naturskog är skog som utvecklats utan större mänsklig påverkan.<br><br>Natural forest is a forest that has developed without significant human influence." },

{ fi: "luonnontila", sv: "naturtillstånd", en: "natural state", desc: "Luonnontila tarkoittaa aluetta, jossa ihmisen vaikutus on vähäinen tai puuttuu.<br><br>Naturtillstånd är ett område där människans påverkan är liten eller obefintlig.<br><br>Natural state refers to an area with little or no human impact." },

{ fi: "luontomatkailu", sv: "naturturism", en: "nature tourism", desc: "Luontomatkailu on matkailua, joka perustuu luonnossa liikkumiseen ja elämyksiin.<br><br>Naturturism är turism som bygger på upplevelser i naturen.<br><br>Nature tourism is travel based on experiencing nature." },

{ fi: "luontotyyppi", sv: "naturtyp", en: "habitat type", desc: "Luontotyyppi on alue, jolla on samanlaiset kasvi- ja maaperäolosuhteet.<br><br>Naturtyp är ett område med liknande vegetation och markförhållanden.<br><br>A habitat type is an area with similar vegetation and soil conditions." },

{ fi: "luonnonhoito", sv: "naturvård", en: "nature conservation management", desc: "Luonnonhoito on toimia luonnon monimuotoisuuden säilyttämiseksi.<br><br>Naturvård är åtgärder för att bevara biologisk mångfald.<br><br>Nature conservation management refers to actions that maintain biodiversity." },

  { fi: "luonnonsuojeluasetus", sv: "naturvårdsförordning", en: "Nature Conservation Decree", desc: "Luonnonsuojeluasetus on säädös, joka tarkentaa luonnonsuojelulain soveltamista.<br><br>Naturvårdsförordning är en förordning som preciserar hur naturvårdslagen ska tillämpas.<br><br>The Nature Conservation Decree is legislation that specifies how the Nature Conservation Act is applied."},
{ fi: "luonnonsuojelulaki", sv: "naturvårdslag", en: "Nature Conservation Act", desc: "Luonnonsuojelulaki säätelee luonnon ja lajien suojelua Suomessa.<br><br>Naturvårdslag reglerar skyddet av natur och arter.<br><br>The Nature Conservation Act regulates the protection of nature and species." },

{ fi: "säästöpuu", sv: "naturvårdsträd", en: "retention tree", desc: "Säästöpuu jätetään hakkuussa luonnon monimuotoisuuden säilyttämiseksi.<br><br>Naturvårdsträd lämnas vid avverkning för att bevara biologisk mångfald.<br><br>A retention tree is left during logging to support biodiversity." },

{ fi: "säästöpuusto", sv: "naturvårdsträd", en: "retention trees", desc: "Säästöpuusto on joukko puita, jotka jätetään hakkuun jälkeen metsään.<br><br>Naturvårdsträd är grupper av träd som lämnas kvar vid avverkning.<br><br>Retention trees are groups of trees left after harvesting." },

{ fi: "säästökanto", sv: "naturvårdstubbe", en: "retention stump", desc: "Säästökanto on metsään jätetty kanto luonnonhoidon tarkoituksiin.<br><br>Naturvårdstubbe är en stubbe som lämnas för naturvård.<br><br>A retention stump is a stump left in the forest for conservation purposes." },

{ fi: "luonnonarvo", sv: "naturvärde", en: "nature value", desc: "Luonnonarvo kuvaa alueen tai kohteen ekologista merkitystä.<br><br>Naturvärde beskriver ett områdes ekologiska betydelse.<br><br>Nature value refers to the ecological importance of an area or feature." },

{ fi: "luontoarvo", sv: "naturvärde", en: "nature value", desc: "Luontoarvo tarkoittaa luonnon ominaisuuksia, joilla on suojeluarvoa.<br><br>Naturvärde är egenskaper i naturen som har skyddsvärde.<br><br>Nature value refers to natural features that have conservation value." },

{ fi: "lahottajasieni", sv: "nedbrytande svamp", en: "decomposer fungus", desc: "Lahottajasienet hajottavat kuollutta orgaanista ainesta metsässä.<br><br>Nedbrytande svamp bryter ner dött organiskt material.<br><br>Decomposer fungi break down dead organic matter in forests." },

{ fi: "lahottaja", sv: "nedbrytare", en: "decomposer", desc: "Lahottajat hajottavat kuollutta biomassaa ja kierrättävät ravinteita.<br><br>Nedbrytare bryter ner dött material i ekosystemet.<br><br>Decomposers break down dead material and recycle nutrients." },

{ fi: "sadanta", sv: "nederbörd", en: "precipitation", desc: "Sadanta tarkoittaa kaikenlaista vettä, joka sataa ilmakehästä maahan.<br><br>Nederbörd är allt vatten som faller från atmosfären.<br><br>Precipitation refers to all forms of water falling from the atmosphere to the ground."},
  
    { fi: "latvuspidäntä", sv: "nederbördsupptagning", en: "canopy interception", desc: "Latvuspidäntä tarkoittaa sitä, että puiden latvukset pidättävät osan sateesta ennen kuin se pääsee maahan.<br><br>Nederbördsupptagning innebär att trädens kronor fångar upp en del av nederbörden.<br><br>Canopy interception is the process where tree crowns intercept and retain part of the precipitation before it reaches the ground." },

{ fi: "kuoripolte", sv: "Neofabraea populi", en: "Neofabraea populi", desc: "Kuoripolte on haavan ja muiden lehtipuiden kuoritauteja aiheuttava sieni.<br><br>Kuorpolte är en svampsjukdom på asp och andra lövträd.<br><br>Neofabraea populi is a fungal pathogen causing bark diseases, especially on poplar and related trees." },

{ fi: "nettonykyarvo", sv: "nettonuvärd", en: "net present value", desc: "Nettonykyarvo kuvaa investoinnin nykyhetkeen diskontattua tuottojen ja kustannusten erotusta.<br><br>Nettonuvärde är nuvärdet av framtida intäkter minus kostnader.<br><br>Net present value is the present value of benefits minus costs over time, discounted to today." },

{ fi: "isoalvejuuri", sv: "nordbräken", en: "northern lady fern", desc: "Isoalvejuuri on yleinen saniaiskasvi kosteissa ja varjoisissa metsissä.<br><br>Nordbräken är en vanlig ormbunke i fuktiga skogar.<br><br>Northern lady fern is a fern species commonly found in moist and shaded forest habitats." },

{ fi: "uusintalannoitus", sv: "ny gödsling", en: "re-fertilization", desc: "Uusintalannoitus tarkoittaa metsän lannoittamista uudelleen kasvun ylläpitämiseksi.<br><br>Ny gödsling är upprepad gödsling av skog för att stödja tillväxt.<br><br>Re-fertilization is the repeated application of fertilizers to maintain or improve forest growth." },

{ fi: "avainlaji", sv: "nyckelart", en: "keystone species", desc: "Avainlaji on laji, jolla on suuri vaikutus ekosysteemin rakenteeseen.<br><br>Nyckelart är en art som har stor betydelse för ekosystemets funktion.<br><br>A keystone species is one that has a disproportionately large effect on its ecosystem." },

{ fi: "avainpuulaji", sv: "nyckelträdslag", en: "key tree species", desc: "Avainpuulaji on puulaji, joka vaikuttaa merkittävästi metsän ekologiaan.<br><br>Nyckelträdslag är ett trädslag som har stor ekologisk betydelse.<br><br>A key tree species is a tree species that plays an important ecological role in the forest." },

{ fi: "uudisoja", sv: "nytt dike", en: "new ditch", desc: "Uudisoja on uusi ojitus, joka tehdään veden hallitsemiseksi metsäalueella.<br><br>Nytt dike är ett nyanlagt dike för vattenreglering.<br><br>A new ditch is a newly constructed drainage channel in a forest area." },

{ fi: "ravinneanalyysi", sv: "näringsanalys", en: "nutrient analysis", desc: "Ravinneanalyysi mittaa maaperän tai kasvillisuuden ravinteiden määrää.<br><br>Näringsanalys mäter näringsinnehållet i jord eller vegetation.<br><br>Nutrient analysis measures the nutrient content of soil or vegetation." },

{ fi: "ravinnetalous", sv: "näringsbalans", en: "nutrient balance", desc: "Ravinnetalous kuvaa ravinteiden kiertoa ja tasapainoa ekosysteemissä.<br><br>Näringsbalans beskriver balansen mellan näringsämnen i ett ekosystem.<br><br>Nutrient balance describes the cycling and balance of nutrients in an ecosystem." },
    { fi: "ravinnetasapaino", sv: "näringsbalans", en: "nutrient balance", desc: "Ravinnetasapaino tarkoittaa tilannetta, jossa kasvien tarvitsemat ravinteet ovat sopivassa suhteessa.<br><br>Näringsbalans är ett tillstånd där näringsämnen finns i balanserade mängder.<br><br>Nutrient balance refers to a situation where nutrients are present in balanced proportions for plant growth." },

{ fi: "ravinnepuutos", sv: "näringsbrist", en: "nutrient deficiency", desc: "Ravinnepuutos tarkoittaa tilannetta, jossa kasvilta puuttuu jokin tärkeä ravinne.<br><br>Näringsbrist är när en växt saknar viktiga näringsämnen.<br><br>Nutrient deficiency is when a plant lacks essential nutrients." },

{ fi: "ravinnehäiriö", sv: "näringsobalans", en: "nutrient imbalance", desc: "Ravinnehäiriö tarkoittaa ravinteiden epätasapainoa kasvupaikalla tai kasvissa.<br><br>Näringsobalans är obalans i näringsämnen i mark eller växt.<br><br>Nutrient imbalance refers to an uneven distribution of nutrients in soil or plants." },

{ fi: "ravinne-epätasapaino", sv: "näringsobalans", en: "nutrient imbalance", desc: "Ravinne-epätasapaino tarkoittaa samaa kuin ravinnehäiriö eli ravinteiden epätasainen suhde.<br><br>Näringsobalans betyder obalans mellan olika näringsämnen.<br><br>Nutrient imbalance refers to disproportion among essential nutrients." },

{ fi: "ravinnelisäys", sv: "näringstillskott", en: "nutrient addition", desc: "Ravinnelisäys on toimenpide, jossa maaperään lisätään ravinteita kasvun parantamiseksi.<br><br>Näringstillskott är tillskott av näringsämnen till marken.<br><br>Nutrient addition is the process of adding nutrients to soil to improve growth." },

{ fi: "ravinnetila", sv: "näringstillstånd", en: "nutrient status", desc: "Ravinnetila kuvaa maaperän tai kasvupaikan ravinnetasoa.<br><br>Näringstillstånd beskriver näringsnivån i mark eller växtplats.<br><br>Nutrient status describes the nutrient level of soil or a growing site." },

{ fi: "ravintokasvi", sv: "näringsväxt", en: "food plant", desc: "Ravintokasvi on kasvi, jota eläimet käyttävät ravinnoksi.<br><br>Näringsväxt är en växt som fungerar som föda för djur.<br><br>A food plant is a plant that serves as food for animals." },

{ fi: "ravinne", sv: "näringsämne", en: "nutrient", desc: "Ravinne on aine, jota eliöt tarvitsevat kasvuun ja elintoimintoihin.<br><br>Näringsämne är ett ämne som behövs för tillväxt och livsfunktioner.<br><br>A nutrient is a substance essential for growth and biological functions." },

{ fi: "ravinnekierto", sv: "näringsämnenas kretslopp", en: "nutrient cycle", desc: "Ravinnekierto tarkoittaa ravinteiden kiertoa ekosysteemissä maasta kasveihin ja takaisin.<br><br>Näringsämnenas kretslopp beskriver hur näringsämnen cirkulerar i ekosystem.<br><br>The nutrient cycle describes how nutrients circulate through ecosystems." },

{ fi: "lähimaisema", sv: "närlandskap", en: "near landscape", desc: "Lähimaisema tarkoittaa ihmisen välittömässä ympäristössä olevaa maisemaa.<br><br>Närlandskap är landskapet i den närmaste omgivningen.<br><br>Near landscape refers to the immediate surrounding landscape." },

{ fi: "lähiympäristö", sv: "närmiljö", en: "immediate environment", desc: "Lähiympäristö on ihmistä tai kohdetta ympäröivä lähialue.<br><br>Närmiljö är den närmaste omgivningen runt en plats.<br><br>Immediate environment refers to the area directly surrounding a location." },
    { fi: "metsätiestö", sv: "nätverk av skogsbilvägar", en: "forest road network", desc: "Metsätiestö tarkoittaa metsien käytössä olevaa metsäautotieverkostoa.<br><br>Nätverk av skogsbilvägar är ett system av vägar i skogsbruket.<br><br>A forest road network is a system of roads used for accessing and managing forests." },

{ fi: "tuohi", sv: "näver", en: "birch bark", desc: "Tuohi on koivun kuorta, jota on käytetty perinteisesti moniin tarkoituksiin.<br><br>Näver är det yttersta lagret av björkbark.<br><br>Birch bark is the outer bark of a birch tree." },

{ fi: "pähkinä", sv: "nöt", en: "nut", desc: "Pähkinä on kovahedelmäinen siemen, jota monet kasvit tuottavat.<br><br>Nöt är en hård frukt eller frö från vissa växter.<br><br>A nut is a hard-shelled fruit or seed produced by certain plants." },

{ fi: "korjuukohde", sv: "objekt för uttag", en: "harvesting site", desc: "Korjuukohde on alue, jolta puustoa tai biomassaa korjataan.<br><br>Objekt för uttag är ett område där avverkning sker.<br><br>A harvesting site is an area where trees or biomass are extracted." },

{ fi: "viljely", sv: "odling", en: "cultivation", desc: "Viljely tarkoittaa kasvien kasvattamista ihmisen toimesta.<br><br>Odling är odling av växter av människor.<br><br>Cultivation refers to the growing of plants by humans." },

{ fi: "kasvatusalue", sv: "odlingsområde", en: "cultivation area", desc: "Kasvatusalue on alue, jolla kasveja tai metsää kasvatetaan.<br><br>Odlingsområde är ett område där odling sker.<br><br>A cultivation area is a region used for growing crops or forest." },

{ fi: "juolukka", sv: "odon", en: "bog bilberry", desc: "Juolukka on kosteilla alueilla kasvava marjakasvi.<br><br>Odon är en bärväxt som växer i myrmarker.<br><br>Bog bilberry is a berry plant growing in wetland habitats." },

{ fi: "epätasainen tilajärjestys", sv: "ojämn fördelning av ytan", en: "uneven spatial distribution", desc: "Epätasainen tilajärjestys tarkoittaa rakenteen tai puuston epätasaista jakautumista alueella.<br><br>Ojämn fördelning av ytan innebär att strukturen är ojämnt spridd.<br><br>Uneven spatial distribution refers to irregular distribution across an area." },

{ fi: "epätasainen metsikkö", sv: "ojämnt bestånd", en: "uneven stand", desc: "Epätasainen metsikkö on metsikkö, jossa puusto on eri-ikäistä tai epätasaista.<br><br>Ojämnt bestånd är ett bestånd med varierande struktur.<br><br>An uneven stand is a forest stand with irregular structure or age distribution." },

{ fi: "eri-ikäismetsikkö", sv: "olikåldrigt bestånd", en: "uneven-aged stand", desc: "Eri-ikäismetsikkö sisältää eri-ikäisiä puita samassa metsikössä.<br><br>Olikåldrigt bestånd består av träd i olika åldrar.<br><br>An uneven-aged stand contains trees of different ages." },

{ fi: "eri-ikäisrakenteinen metsä", sv: "olikåldrigt bestånd", en: "uneven-aged forest", desc: "Eri-ikäisrakenteinen metsä koostuu eri-ikäisistä puista ja rakenteista.<br><br>Olikåldrigt bestånd är skog med olika åldersstrukturer.<br><br>An uneven-aged forest has trees of multiple age classes and structure." },

{ fi: "kiertoaika", sv: "omloppstid", en: "rotation period", desc: "Kiertoaika on aika, joka kuluu metsän uudistamisesta hakkuukypsyyteen.<br><br>Omloppstid är tiden för en skogs omlopp från föryngring till avverkning.<br><br>Rotation period is the time required for a forest to grow from regeneration to harvest maturity." },

{ fi: "aapasuoalue", sv: "område med flackmossar", en: "aapa mire area", desc: "Aapasuoalue on laaja suoalue, jossa on vetisiä ja avoimia suotyyppejä.<br><br>Område med flackmossar är ett område med öppna myrtyper.<br><br>An aapa mire area is a wetland region characterized by open, flat mire ecosystems." },
  
    { fi: "OMT", sv: "OMT", en: "OMT", desc: "Oxalis–Myrtillus type." },
  
{ fi: "orgaaninen aines", sv: "organiskt material", en: "organic matter", desc: "Orgaaninen aines koostuu eloperäisestä materiaalista maaperässä.<br><br>Organiskt material består av biologiskt nedbrutet material i marken.<br><br>  Organic matter is material in soil derived from decomposed plants and organisms." },
  
{ fi: "eliö", sv: "organism", en: "organism", desc: "Eliö on elävä yksilö, kuten kasvi, eläin tai mikrobi.<br><br>En organism är en levande varelse som växt, djur eller mikroorganism.<br><br>  An organism is any living individual such as a plant, animal, or microbe." },
{ fi: "lahopuueliöstö", sv: "organismer som lever på död ved", en: "saproxylic organisms", desc: "Lahopuueliöstö tarkoittaa kuolleessa puussa eläviä ja siitä riippuvaisia eliöitä.<br><br>Organismer som lever på död ved är arter som är beroende av murken eller död ved.<br><br>  Saproxylic organisms are species that depend on dead or decaying wood." },
{ fi: "taudinaiheuttaja", sv: "patogen", en: "pathogen", desc: "Taudinaiheuttaja on eliö tai tekijä, joka aiheuttaa sairauksia.<br><br>En patogen är en organism som orsakar sjukdom.<br><br>  A pathogen is an organism or agent that causes disease." },
{ fi: "harmaaorvakkasieni", sv: "pergamentsvamp", en: "pergament fungus", desc: "Harmaaorvakkasieni on lahottajasieni, joka kasvaa puulla.<br><br>Pergamentsvamp är en vedlevande svamp som bryter ner trä.<br><br>  Pergament fungus is a wood-decaying fungus growing on dead wood." },
{ fi: "kasvatusjakso", sv: "period i beståndets utveckling", en: "growth phase", desc: "Kasvatusjakso on metsikön kehitysvaihe hoidon ja kasvun aikana.<br><br>Period i beståndets utveckling är en fas i skogens tillväxt.<br><br>  A growth phase is a stage in forest stand development." },
  
{ fi: "routajakso", sv: "period med tjäle", en: "frozen ground period", desc: "Routajakso tarkoittaa aikaa, jolloin maa on jäässä.<br><br>Period med tjäle är den tid då marken är frusen.<br><br>  A frozen ground period is a time when the soil is frozen." },
  
{ fi: "kuivuusjakso", sv: "period med torka", en: "drought period", desc: "Kuivuusjakso on ajanjakso, jolloin sateita on vähän.<br><br>Period med torka är en period med låg nederbörd.<br><br>  A drought period is a time of unusually low rainfall." },
  
{ fi: "pintarouste", sv: "pipkrake", en: "surface frost heave", desc: "Pintarouste syntyy, kun jää nostaa maan pintaa.<br><br>Pipkrake är när markytan lyfts av isbildning.<br><br>  Surface frost heave is when freezing lifts the soil surface." },
  
{ fi: "rouste", sv: "pipkrake", en: "frost heave", desc: "Rouste on maan jäätymisen aiheuttamaa maan kohoamista.<br><br>Pipkrake är marklyft som orsakas av frost.<br><br>  Frost heave is the upward movement of soil caused by freezing." },
  
{ fi: "piiskausvaurio", sv: "piskskada", en: "whiplash damage", desc: "Piiskausvaurio syntyy, kun puut vaurioituvat toisiaan vasten liikkuessaan.<br><br>Piskskada är skador som uppstår när träd slår mot varandra.<br><br>  Whiplash damage is injury to trees caused by mechanical movement or impact." },
  
{ fi: "valuma-aluesuunnittelu", sv: "planering av avrinningsområdet", en: "watershed planning", desc: "Valuma-aluesuunnittelu tarkoittaa vesistöalueen kokonaisvaltaista suunnittelua.<br><br>Planering av avrinningsområdet är planering av ett helt avrinningsområde.<br><br>  Watershed planning is integrated management of a drainage basin." },
  
{ fi: "metsäsuunnittelu", sv: "planering av skogsbruk", en: "forest planning", desc: "Metsäsuunnittelu on metsien hoidon ja käytön suunnittelua.<br><br>Planering av skogsbruk är planering av skogsskötsel och användning.<br><br>  Forest planning is the process of planning forest management and use." },
  
    { fi: "kaava-alue", sv: "planläggningsområde", en: "zoning area", desc: "Kaava-alue on alue, jolle on laadittu maankäyttöä ohjaava kaava.<br><br>Planläggningsområde är ett område där detalj- eller generalplan gäller.<br><br>  A zoning area is a region where land use is regulated by a planning scheme." },
  
{ fi: "istutustaimi", sv: "planta", en: "seedling", desc: "Istutustaimi on viljelyä varten kasvatettu nuori puuntaimi.<br><br>Planta är en ung planta som används vid plantering.<br><br>  A seedling is a young plant grown for planting." },
  
{ fi: "taimi", sv: "planta", en: "seedling", desc: "Taimi on nuori kasvi, joka on vasta alkanut kasvaa.<br><br>Planta är en ung växt i tidigt utvecklingsstadium.<br><br>  A seedling is a young plant in its early growth stage." },
  
{ fi: "taimikon pituus", sv: "plantbeståndets höjd", en: "height of young stand", desc: "Taimikon pituus kuvaa nuoren metsän keskimääräistä korkeutta.<br><br>Plantbeståndets höjd är medelhöjden i en plantskog.<br><br>  The height of a young stand is the average height of trees in a young forest." },
  
{ fi: "istutustaimikko", sv: "planterad plantskog", en: "planted seedling stand", desc: "Istutustaimikko on istuttamalla perustettu nuori metsä.<br><br>Planterad plantskog är en ung skog som planterats.<br><br>  A planted seedling stand is a young forest established by planting." },
  
{ fi: "istutettu metsä", sv: "planterad skog", en: "planted forest", desc: "Istutettu metsä on ihmisen perustama metsäalue.<br><br>Planterad skog är en skog som etablerats genom plantering.<br><br>  A planted forest is a forest established through planting." },
  
{ fi: "istutusmetsikkö", sv: "planterat bestånd", en: "planted stand", desc: "Istutusmetsikkö on metsikkö, joka on perustettu istuttamalla.<br><br>Planterat bestånd är ett skogsbestånd som planterats.<br><br>  A planted stand is a forest stand established by planting." },
  
{ fi: "istutus", sv: "plantering", en: "planting", desc: "Istutus on puiden tai taimien istuttamista maahan.<br><br>Plantering är processen att sätta plantor i marken.<br><br>  Planting is the act of placing young trees or plants into the soil." },
  
{ fi: "istutuskohta", sv: "planteringspunkt", en: "planting spot", desc: "Istutuskohta on paikka, johon taimi istutetaan.<br><br>Planteringspunkt är den exakta plats där en planta sätts.<br><br>  A planting spot is the exact location where a seedling is planted." },
  
{ fi: "viljelypaikka", sv: "planteringspunkt", en: "planting spot", desc: "Viljelypaikka on paikka taimien kasvattamiselle tai istutukselle.<br><br>Planteringspunkt är platsen där växter etableras.<br><br>  A planting spot is a site designated for planting." },
  
{ fi: "istutusajankohta", sv: "planteringstidpunkt", en: "planting time", desc: "Istutusajankohta on oikea aika taimien istuttamiseen.<br><br>Planteringstidpunkt är den optimala tiden för plantering.<br><br>  Planting time is the optimal moment for planting seedlings." },
  
{ fi: "istutustiheys", sv: "planteringstäthet", en: "planting density", desc: "Istutustiheys kuvaa taimien määrää hehtaarilla.<br><br>Planteringstäthet anger antal plantor per ytenhet.<br><br>  Planting density is the number of seedlings per unit area." },
  
{ fi: "taimietiketti", sv: "plantetikett", en: "plant label", desc: "Taimietiketti kertoo taimen alkuperän ja lajin.<br><br>Plantetikett visar information om plantans ursprung.<br><br>  A plant label provides information about a seedling’s origin." },
  
{ fi: "metsävarasto", sv: "plantlager i skogen", en: "forest seedling stock", desc: "Metsävarasto tarkoittaa taimien varastointia metsässä tai varastossa.<br><br>Plantlager i skogen avser lagring av plantor.<br><br>  Forest seedling stock refers to stored planting material in forestry." },
  
{ fi: "taimihuolto", sv: "plantleverans", en: "seedling delivery", desc: "Taimihuolto tarkoittaa taimien kuljetusta ja jakelua.<br><br>Plantleverans är distribution av plantor till skogsbruk.<br><br>  Seedling delivery is the transport and supply of planting material." },
  
{ fi: "taimierä", sv: "plantparti", en: "batch of seedlings", desc: "Taimierä on tietty erä taimia tuotannossa tai toimituksessa.<br><br>Plantparti är en samlad leverans av plantor.<br><br>  A batch of seedlings is a specific group of plants produced or delivered together." },
  
{ fi: "taimitupas", sv: "plantrugge", en: "seedling clump", desc: "Taimitupas on usean taimen muodostama ryhmä.<br><br>Plantrugge är en samling plantor som växer tätt.<br><br>  A seedling clump is a group of seedlings growing together." },
  
{ fi: "ylispuustoinen taimikko", sv: "plantskog med överståndare", en: "young stand with overstory", desc: "Taimikko, jossa on vielä vanhempia ylispuustoisia puita.<br><br>Plantskog med överståndare innehåller kvarstående äldre träd.<br><br>  A young stand with overstory is a seedling stand with remaining older trees." },
  
{ fi: "taimikkovaihe", sv: "plantskogsstadium", en: "seedling stage", desc: "Taimikkovaihe on metsän kehityksen nuori vaihe.<br><br>Plantskogsstadium är ett tidigt utvecklingsstadium i skogen.<br><br>  The seedling stage is an early phase in forest development." },
  
{ fi: "taimikonhoito", sv: "plantskogsvård", en: "seedling stand management", desc: "Taimikonhoito tarkoittaa nuoren metsän hoitoa ja harvennusta.<br><br>Plantskogsvård är skötsel av ungskog.<br><br>  Seedling stand management is the care of young forest stands." },
  
{ fi: "taimitarha", sv: "plantskola", en: "nursery", desc: "Taimitarha on paikka, jossa taimia kasvatetaan.<br><br>Plantskola är en plats där plantor odlas.<br><br>  A nursery is a place where seedlings are grown." },
  
{ fi: "taimisuoja", sv: "plantskydd", en: "plant protection", desc: "Taimisuoja tarkoittaa taimien suojaamista tuholaisilta tai eläimiltä.<br><br>Plantskydd är skydd av plantor mot skador.<br><br>  Plant protection is measures taken to protect seedlings from damage." },
  
{ fi: "taimettuminen", sv: "plantsättning", en: "natural regeneration establishment", desc: "Taimettuminen tarkoittaa taimien syntymistä luontaisesti tai istuttamalla.<br><br>Plantsättning avser etablering av ny vegetation.<br><br>  Establishment of regeneration is the formation of new seedlings naturally or by planting." },
  
{ fi: "luontainen siemennys", sv: "plantsättning på naturlig väg", en: "natural regeneration", desc: "Luontainen siemennys tarkoittaa metsän uudistumista ilman istutusta.<br><br>Naturlig föryngring sker utan plantering.<br><br>  Natural regeneration is forest renewal without human planting." },
  
{ fi: "taimettumiskyky", sv: "plantsättningsförmåga", en: "regeneration capacity", desc: "Taimettumiskyky kuvaa maan kykyä uudistua taimille.<br><br>Plantsättningsförmåga är markens förmåga att bära ny skog.<br><br>  Regeneration capacity is the ability of a site to produce new seedlings." },
  
{ fi: "taimiaines", sv: "plantuppslag", en: "seedling stock", desc: "Taimiaines tarkoittaa luonnon tai viljelyn tuottamaa taimimateriaalia.<br><br>Plantuppslag är naturligt eller odlat plantmaterial.<br><br>  Seedling stock refers to naturally or artificially regenerated seedlings." },
  
{ fi: "poimintahakkuu", sv: "plockhuggning", en: "selective cutting", desc: "Poimintahakkuu on yksittäisten puiden hakkuumenetelmä.<br><br>Plockhuggning är avverkning av enstaka träd.<br><br>  Selective cutting is harvesting individual trees from a forest." },
  
{ fi: "penkkikyntö", sv: "plöja upp planteringsbänkar", en: "mound plowing", desc: "Penkkikyntö on maanmuokkausmenetelmä taimien istutusta varten.<br><br>Plöjning av planteringsbäddar används vid skogsodling.<br><br>  Mound plowing is soil preparation for planting seedlings." },
  
{ fi: "pallekyntö", sv: "plöja upp tiltor", en: "ridge plowing", desc: "Pallekyntö on maaperän muokkausta kohopenkeiksi.<br><br>Plöjning i tiltor formar höjda åsar i marken.<br><br>  Ridge plowing is soil preparation creating raised ridges." },
  
{ fi: "podsolimaannos", sv: "podsoljord", en: "podzol soil", desc: "Podsolimaannos on happamilla alueilla esiintyvä maaperätyyppi.<br><br>Podsoljord är en sur jordtyp vanlig i boreala skogar.<br><br>  Podzol soil is a typical acidic forest soil type." },
  
{ fi: "tuotantopalvelut", sv: "producerande tjänster", en: "provisioning services", desc: "Tuotantopalvelut ovat luonnon tarjoamia hyödykkeitä kuten puu ja marjat.<br><br>Producerande tjänster är ekosystemens produkter.<br><br>  Provisioning services are ecosystem goods such as timber and berries." },
  
{ fi: "koeala", sv: "provyta", en: "sample plot", desc: "Koeala on tutkimuksessa käytetty pienialainen mittausalue.<br><br>Provyta är ett avgränsat område för mätning.<br><br>  A sample plot is a small area used for scientific measurement." },
  
{ fi: "talvikki", sv: "pyrola", en: "wintergreen plant", desc: "Talvikki on varjoisissa metsissä kasvava kasvi.<br><br>Pyrola är en skogsört som trivs i skugga.<br><br>  Wintergreen plant is a shade-loving forest herb." },
  
{ fi: "viirukylvö", sv: "radsådd", en: "row sowing", desc: "Viirukylvö on kylvömenetelmä, jossa siemenet kylvetään riveihin.<br><br>Radsådd innebär sådd i rader.<br><br>  Row sowing is a planting method where seeds are sown in rows." },
  
{ fi: "kuru", sv: "ravin", en: "ravine", desc: "Kuru on jyrkkärinteinen laakso.<br><br>Ravin är en djup dalgång.<br><br>  A ravine is a narrow, steep-sided valley." },
  
{ fi: "elpymiskyky", sv: "reaktionsförmåga", en: "resilience", desc: "Elpymiskyky kuvaa metsän kykyä toipua häiriöistä.<br><br>Reaktionsförmåga är ekosystemets återhämtningsförmåga.<br><br>  Resilience is the ability of a forest or ecosystem to recover from disturbance." },
  
{ fi: "säätelypalvelut", sv: "reglerande tjänster", en: "regulating services", desc: "Säätelypalvelut ovat ekosysteemien tarjoamia säätelytoimintoja.<br><br>Reglerande tjänster är ekosystemens funktioner som reglerar klimat och vatten.<br><br>  Regulating services are ecosystem functions that regulate climate and environmental conditions." },
  
{ fi: "metsien virkistyskäyttö", sv: "rekreation och friluftsliv", en: "recreation and outdoor use", desc: "Metsien virkistyskäyttö tarkoittaa metsien käyttöä vapaa-aikaan.<br><br>Rekreation och friluftsliv avser användning av skog för fritid.<br><br>  Recreation and outdoor use refer to using forests for leisure activities." },
  
{ fi: "puustokaistale", sv: "remsa med träd", en: "strip of trees", desc: "Puustokaistale on puustoinen kapea metsäalue.<br><br>Remsa med träd är ett smalt skogsbälte.<br><br>  A strip of trees is a narrow wooded area." },
  
   { fi: "poro", sv: "ren", en: "reindeer", desc: "Poro on Lapissa elävä kotieläin, joka laiduntaa luonnossa ympäri vuoden.<br><br>Ren är ett tamdjur som lever i norra Fennoskandien och betar fritt i naturen.<br><br>  A reindeer is a semi-domesticated animal living in northern regions and feeding on natural vegetation." },
  
{ fi: "poronjäkälät", sv: "renlavar", en: "reindeer lichens", desc: "Poronjäkälät ovat jäkälälajeja, joita porot käyttävät tärkeänä ravintona talvella.<br><br>Renlavar är lavar som är en viktig vinterföda för renar.<br><br>  Reindeer lichens are lichen species that serve as an important winter food source for reindeer." },
  
{ fi: "erotuspaikka", sv: "renskiljningsplats", en: "reindeer separation site", desc: "Erotuspaikka on alue, jossa porot erotellaan ja käsitellään.<br><br>Renskiljningsplats är en plats där renar sorteras och hanteras.<br><br>  A reindeer separation site is a place where reindeer are gathered and sorted." },
  
{ fi: "poronhoito", sv: "renskötsel", en: "reindeer husbandry", desc: "Poronhoito on porojen kasvatusta ja hoitoa elinkeinona.<br><br>Renskötsel är näring som baseras på uppfödning och skötsel av renar.<br><br>  Reindeer husbandry is the practice of raising and managing reindeer as a livelihood." },
  
{ fi: "poronhoitolaki", sv: "renskötsellag", en: "Reindeer Husbandry Act", desc: "Poronhoitolaki säätelee poronhoitoa Suomessa.<br><br>Renskötsellag reglerar renskötsel i Finland.<br><br>  The Reindeer Husbandry Act is legislation governing reindeer herding in Finland." },
  
{ fi: "poronhoitoalue", sv: "renskötselområde", en: "reindeer husbandry area", desc: "Poronhoitoalue on alue, jossa poronhoito on sallittua ja yleistä.<br><br>Renskötselområde är ett geografiskt område där renskötsel bedrivs.<br><br>  A reindeer husbandry area is a region where reindeer herding is permitted and practiced." },
  
{ fi: "poroaita", sv: "renstängsel", en: "reindeer fence", desc: "Poroaita on aita, jolla ohjataan tai rajoitetaan porojen liikkumista.<br><br>Renstängsel är ett stängsel som används för att hålla eller styra renar.<br><br>  A reindeer fence is a barrier used to control the movement of reindeer." },
  
{ fi: "ennallistaminen", sv: "restaurering", en: "restoration", desc: "Ennallistaminen tarkoittaa luonnon palauttamista lähemmäs alkuperäistä tilaa.<br><br>Restaurering är återställande av naturmiljöer.<br><br>  Restoration is the process of returning an ecosystem closer to its natural state." },
  
{ fi: "ennallistamissuunnitelma", sv: "restaureringsplan", en: "restoration plan", desc: "Ennallistamissuunnitelma on suunnitelma luonnon tilan palauttamiseksi.<br><br>Restaureringsplan är en plan för att återställa naturvärden.<br><br>  A restoration plan is a strategy for restoring natural environments." },
  
{ fi: "ennallistamistoimenpide", sv: "restaureringsåtgärd", en: "restoration measure", desc: "Ennallistamistoimenpide on yksittäinen käytännön teko luonnon palauttamiseksi.<br><br>Restaureringsåtgärd är en konkret åtgärd för naturvård.<br><br>  A restoration measure is a specific action taken to restore an ecosystem." },
  
{ fi: "kaskiraunio", sv: "rester av svedjebruk", en: "remains of slash-and-burn agriculture", desc: "Kaskiraunio on jälki vanhasta kaskiviljelystä.<br><br>Rester av svedjebruk är spår av historisk svedjeodling.<br><br>  Remains of slash-and-burn agriculture are traces of former shifting cultivation." },
  
{ fi: "luonnon monimuotoisuus", sv: "rik natur", en: "biodiversity", desc: "Luonnon monimuotoisuus tarkoittaa lajien ja elinympäristöjen moninaisuutta.<br><br>Rik natur syftar på hög biologisk mångfald.<br><br>  Biodiversity refers to the variety of species and ecosystems." },
  
{ fi: "metsäluonnon monimuotoisuus", sv: "rik skogsnatur", en: "forest biodiversity", desc: "Metsäluonnon monimuotoisuus kuvaa metsien lajikirjoa ja elinympäristöjä.<br><br>Rik skogsnatur avser skogarnas biologiska mångfald.<br><br>  Forest biodiversity is the variety of species and habitats in forests." },
  
{ fi: "lettoneva", sv: "rikkärrsartad fattigkärr", en: "rich fen-like poor mire", desc: "Lettoneva on suotyyppi, jossa on sekä rikkaita että köyhiä piirteitä.<br><br>Rikkärrsartad fattigkärr är en övergångstyp av myr.<br><br>  A fen-like poor mire is a transitional bog type with mixed nutrient levels." },
  
{ fi: "kaulaus", sv: "ringbarkning", en: "girdling", desc: "Kaulaus on puun kuoren poistaminen ympäri rungon.<br><br>Ringbarkning innebär att barken avlägsnas runt stammen.<br><br>  Girdling is the removal of bark around a tree trunk." },
  
{ fi: "huuhtoumariski", sv: "risk för erosion av jordmaterial", en: "erosion risk", desc: "Huuhtoumariski tarkoittaa maaperän aineksen kulkeutumisen riskiä veden mukana.<br><br>Risk för erosion av jordmaterial avser risk för markförlust.<br><br>  Erosion risk is the likelihood of soil being washed away by water." },
  
{ fi: "tulvaherkkyys", sv: "risk för översvämning", en: "flood susceptibility", desc: "Tulvaherkkyys kuvaa alueen alttiutta tulville.<br><br>Risk för översvämning är hur utsatt ett område är för översvämningar.<br><br>  Flood susceptibility is the tendency of an area to experience flooding." },
  
{ fi: "isovarpuräme", sv: "rismyr", en: "dwarf-shrub bog", desc: "Isovarpuräme on varpuvaltainen suotyyppi.<br><br>Rismyr är en myrdominerad av risväxter.<br><br>  A dwarf-shrub bog is a bog dominated by small shrubs." },
  
{ fi: "varputurvekangas", sv: "ristorvmo", en: "dwarf-shrub peatland forest", desc: "Varputurvekangas on varpukasvillisuuden ja turpeen yhdistelmäalue.<br><br>Ristorvmo är en torvmarkstyp med risvegetation.<br><br>  A dwarf-shrub peatland forest is a forested peatland with shrub vegetation." },
  
{ fi: "isovarputupasvillaräme", sv: "ristuvdunmyr", en: "tall dwarf-shrub bog", desc: "Isovarputupasvillaräme on korkeakasvuisten varpujen hallitsema suo.<br><br>Ristuvdunmyr är en myr med höga risväxter.<br><br>  A tall dwarf-shrub bog is a bog dominated by taller shrubs." },
  
{ fi: "varpukasvillisuus", sv: "risväxt", en: "shrub vegetation", desc: "Varpukasvillisuus tarkoittaa matalaa pensasmaisia kasveja.<br><br>Risväxt avser buskvegetation.<br><br>  Shrub vegetation refers to low woody plants and shrubs." },
  
{ fi: "juurenniska", sv: "rothals", en: "root collar", desc: "Juurenniska on kohta, jossa puun juuri ja runko kohtaavat.<br><br>Rothals är övergången mellan rot och stam.<br><br>  The root collar is the transition zone between a tree’s roots and trunk." },
  
{ fi: "juuripaakku", sv: "rotklump", en: "root ball", desc: "Juuripaakku tarkoittaa taimen tai puun juuriston ympärillä olevaa multapaakkua, joka siirretään istutuksen yhteydessä.<br><br>Rotklump är den jordklump som omger rötterna vid plantering eller flytt av en planta.<br><br>Root ball is the soil mass surrounding a plant’s roots when it is transplanted." },
  
{ fi: "paakku", sv: "rotklump", en: "root ball", desc: "Paakku on juuriston mukana siirrettävä maa-aines, joka suojaa juuria istutuksen aikana.<br><br>Rotklump är en jordklump runt rötterna som skyddar dem vid plantering.<br><br>Root ball refers to the compact soil holding a plant’s roots together." },
  
{ fi: "juuristokilpailu", sv: "rotkonkurrens", en: "root competition", desc: "Juuristokilpailu tarkoittaa kasvien välistä kilpailua vedestä, ravinteista ja tilasta maaperässä.<br><br>Rotkonkurrens är konkurrens mellan växters rotsystem om vatten och näring.<br><br>Root competition is the competition between plants for water, nutrients, and space underground." },
  
{ fi: "puun kantohinta", sv: "rotpris", en: "stumpage price", desc: "Puun kantohinta on metsänomistajalle maksettava hinta pystypuusta ennen hakkuuta ja korjuuta.<br><br>Rotpris är priset som betalas till skogsägaren för stående träd före avverkning.<br><br>Stumpage price is the price paid for standing timber before harvesting." },
  
{ fi: "tyvilaho", sv: "rotröta", en: "butt rot", desc: "Tyvilaho on puun tyviosan lahottajasienien aiheuttama vaurio, joka heikentää puun laatua.<br><br>Rotröta är röta i trädets bas orsakad av svampar som bryter ned veden.<br><br>Butt rot is decay at the base of a tree caused by wood-decaying fungi." },
  
{ fi: "juurivaurio", sv: "rotskada", en: "root damage", desc: "Juurivaurio tarkoittaa puun juuriston vaurioitumista esimerkiksi koneiden, kuivumisen tai eläinten takia.<br><br>Rotskada är skador på trädets rötter orsakade av maskiner, torka eller djur.<br><br>Root damage refers to injury to a plant’s roots caused by mechanical, environmental, or biological factors." },
  
{ fi: "juurikerros", sv: "rotskikt", en: "root layer", desc: "Juurikerros on maaperän osa, jossa kasvien juuret pääasiassa kasvavat ja ottavat ravinteita.<br><br>Rotskikt är det marklager där växternas rötter huvudsakligen finns.<br><br>The root layer is the soil layer where most plant roots grow and absorb nutrients." },
  
{ fi: "juurivesa", sv: "rotskott", en: "root sucker", desc: "Juurivesa on puun juurista kasvava uusi verso, joka voi muodostaa uusia runkoja.<br><br>Rotskott är ett skott som växer från trädets rötter och kan bilda nya stammar.<br><br>A root sucker is a shoot that grows from the roots of a tree." },
  
{ fi: "tyvitukki", sv: "rotstock", en: "butt log", desc: "Tyvitukki on puun tyviosasta saatava tukkipuu, joka on yleensä arvokkainta puutavaraa.<br><br>Rotstock är den nedersta stocken från ett träd, ofta av högsta kvalitet.<br><br>A butt log is the lowest log from a tree, usually the most valuable timber section." },
  
{ fi: "juuristo", sv: "rotsystem", en: "root system", desc: "Juuristo on kasvin kaikkien juurien muodostama kokonaisuus, joka imee vettä ja ravinteita.<br><br>Rotsystem är hela växtens rotnätverk som tar upp vatten och näring.<br><br>The root system is the network of roots that absorbs water and nutrients for the plant." },
  
{ fi: "juurikääpä", sv: "rotticka", en: "root rot fungus", desc: "Juurikääpä on sienitauti, joka aiheuttaa puiden juuriston lahoamista ja heikentymistä.<br><br>Rotticka är en svampsjukdom som orsakar röta i trädens rötter.<br><br>Root rot fungus is a disease that decays and weakens tree roots." },
  
{ fi: "maannousema", sv: "rotticka", en: "root rot disease", desc: "Maannousema on juuristossa ja tyvessä esiintyvä lahottajasienitauti, joka heikentää puustoa.<br><br>Rotticka är en sjukdom som angriper rötter och stam och orsakar röta.<br><br>Root rot disease is a fungal infection affecting roots and lower trunk of trees." },
  
{ fi: "petolintu", sv: "rovfågel", en: "bird of prey", desc: "Petolintu on lintu, joka saalistaa muita eläimiä ravinnokseen, kuten kotkat ja haukat.<br><br>Rovfågel är en fågel som jagar och äter andra djur.<br><br>A bird of prey is a carnivorous bird that hunts other animals." },
  
{ fi: "metsäkauris", sv: "rådjur", en: "roe deer", desc: "Metsäkauris on pieni hirvieläin, joka elää metsissä ja peltojen reunoilla.<br><br>Rådjur är ett litet hjortdjur som lever i skog och öppna marker.<br><br>Roe deer is a small deer species living in forests and field edges." },
  
{ fi: "raakahumus", sv: "råhumus", en: "raw humus", desc: "Raakahumus on hitaasti hajoavaa orgaanista ainesta maaperässä, joka kertyy metsäpohjaan.<br><br>Råhumus är ofullständigt nedbrutet organiskt material i marken.<br><br>Raw humus is partially decomposed organic matter in forest soil." },
  
{ fi: "maan arvo", sv: "råmarkens värde", en: "land value", desc: "Maan arvo tarkoittaa metsän tai maa-alueen taloudellista arvoa ilman puustoa.<br><br>Råmarkens värde är värdet på marken utan växande skog.<br><br>Land value is the economic value of land excluding standing timber." },
  
{ fi: "noro", sv: "rännil", en: "small stream", desc: "Noro on pieni, usein ajoittainen puro tai valumavesiuoma maastossa.<br><br>Rännil är ett litet naturligt vattenflöde eller dike.<br><br>A small stream is a narrow or intermittent water flow in the landscape." },
  
{ fi: "ruskomäntypistiäinen", sv: "röd tallstekel", en: "brown pine sawfly", desc: "Ruskomäntypistiäinen on mäntyjä syövä hyönteinen, joka voi aiheuttaa metsätuhoja.<br><br>Röd tallstekel är en insekt som angriper tallar och kan orsaka skogsskador.<br><br>The brown pine sawfly is an insect pest that feeds on pine trees." },
  
{ fi: "taimikonharvennus", sv: "röjning", en: "pre-commercial thinning", desc: "Taimikonharvennus on metsänhoitotoimenpide, jossa poistetaan osa taimista kasvun parantamiseksi.<br><br>Röjning är en skogsvårdsåtgärd där man glesar ut unga träd.<br><br>Pre-commercial thinning is the removal of excess seedlings to improve forest growth." },
  
{ fi: "pihlaja", sv: "rönn", en: "rowan", desc: "Pihlaja on lehtipuu, joka tuottaa marjoja ja kasvaa yleisesti Suomessa.<br><br>Rönn är ett lövträd med röda bär som är vanligt i Norden.<br><br>Rowan is a deciduous tree known for its red berries." },
  
{ fi: "putkipato", sv: "rördamm", en: "pipe dam", desc: "Putkipato on vesirakennelma, jossa veden virtausta säädellään putkien avulla.<br><br>Rördamm är en konstruktion som reglerar vattenflöde med rör.<br><br>A pipe dam is a structure used to control water flow using pipes." },
  
    { fi: "laho", sv: "röta", en: "rot", desc: "Laho tarkoittaa puuaineksen hajoamista sienien ja mikrobien vaikutuksesta, mikä heikentää puun rakennetta.<br><br>Röta är nedbrytning av trä orsakad av svampar och mikroorganismer som försvagar träets struktur.<br><br>Rot is the decomposition of wood caused by fungi and microorganisms that weaken its structure." },
  
{ fi: "laho oksa", sv: "rötskadad kvist", en: "rotten branch", desc: "Laho oksa on oksa, joka on alkanut lahota sienitautien tai vaurioiden seurauksena.<br><br>Rötskadad kvist är en gren som börjat brytas ned av röta.<br><br>A rotten branch is a branch that has started to decay due to fungal infection or damage." },
  
{ fi: "hiekka", sv: "sand", en: "sand", desc: "Hiekka on karkearakeinen maalaji, joka läpäisee vettä hyvin.<br><br>Sand är ett grovkornigt jordmaterial som släpper igenom vatten lätt.<br><br>Sand is a coarse-grained soil material that allows water to pass through easily." },
  
{ fi: "hiekkadyyni", sv: "sanddyn", en: "sand dune", desc: "Hiekkadyyni on tuulen kasaama hiekkamuodostelma, jota esiintyy erityisesti rannikolla.<br><br>Sanddyn är en vindformad sandformation som ofta finns vid kuster.<br><br>A sand dune is a hill of sand formed by wind, commonly found along coasts." },
  
{ fi: "hietikko", sv: "sandfält", en: "sandy area", desc: "Hietikko on alue, jossa maaperä koostuu pääosin hiekasta.<br><br>Sandfält är ett område dominerat av sandjord.<br><br>A sandy area is land where the soil is mainly sand." },
  
{ fi: "sorakuoppa", sv: "sandgrop", en: "gravel pit", desc: "Sorakuoppa on maa-ainesalue, josta otetaan soraa ja hiekkaa rakentamiseen.<br><br>Sandgrop är en plats där sand och grus bryts.<br><br>A gravel pit is an excavation site where sand and gravel are extracted." },
  
{ fi: "hiekkamoreeni", sv: "sandig morän", en: "sandy moraine", desc: "Hiekkamoreeni on maalaji, jossa on paljon hiekkapartikkeleita moreenissa.<br><br>Sandig morän är moränjord med hög andel sand.<br><br>Sandy moraine is a type of soil with a high proportion of sand within moraine material." },
  
{ fi: "hiekkamaa", sv: "sandmark", en: "sandy soil", desc: "Hiekkamaa on maaperä, jossa hiekka on hallitseva maalaji.<br><br>Sandmark är jord där sand dominerar.<br><br>Sandy soil is soil dominated by sand particles." },
  
{ fi: "mahla", sv: "sav", en: "sap", desc: "Mahla on puun neste, joka kuljettaa ravinteita ja vettä kasvukaudella.<br><br>Sav är vätskan som transporterar näring i träd under växtsäsongen.<br><br>Sap is the fluid in trees that transports nutrients and water during the growing season." },
  
{ fi: "nila-aika", sv: "savningstid", en: "sap flow season", desc: "Nila-aika on kevätkausi, jolloin puun nestevirtaus on voimakkaimmillaan.<br><br>Savningstid är perioden på våren när savflödet i träd är som störst.<br><br>Sap flow season is the spring period when sap movement in trees is strongest." },
  
{ fi: "seurannaistuho", sv: "sekundär skadegörare", en: "secondary pest", desc: "Seurannaistuho tarkoittaa tuhohyönteistä tai -tautia, joka hyödyntää jo heikentynyttä puustoa.<br><br>Sekundär skadegörare är en art som angriper redan försvagade träd.<br><br>A secondary pest is an organism that attacks trees already weakened by other factors." },
  
{ fi: "myöhempi harvennus", sv: "senare gallring", en: "late thinning", desc: "Myöhempi harvennus on metsänhoitotoimenpide, joka tehdään puuston kasvaessa varttuneeksi.<br><br>Senare gallring är en gallring som görs i ett senare skede av beståndets utveckling.<br><br>Late thinning is forest thinning carried out at a later stage of stand development." },
  
{ fi: "serpentiinikallio", sv: "serpentinberg", en: "serpentine rock", desc: "Serpentiinikallio on erityinen kivilaji, joka vaikuttaa kasvillisuuden koostumukseen.<br><br>Serpentinberg är en bergart som påverkar den lokala vegetationen.<br><br>Serpentine rock is a type of rock that strongly influences local vegetation." },
  
{ fi: "siperianlehtikuusi", sv: "sibirisk lärk", en: "Siberian larch", desc: "Siperianlehtikuusi on kylmää kestävä havupuu, jota käytetään metsätaloudessa.<br><br>Sibirisk lärk är ett kalltåligt barrträd som används i skogsbruk.<br><br>Siberian larch is a cold-hardy conifer used in forestry." },
  
{ fi: "roustevaurio", sv: "skada av pipkrake", en: "frost heave damage", desc: "Roustevaurio syntyy, kun maan jäätyminen nostaa tai vaurioittaa kasvien juuria.<br><br>Skada av pipkrake orsakas av tjällyft som skadar växternas rötter.<br><br>Frost heave damage occurs when freezing soil lifts and damages plant roots." },
  
{ fi: "puustovaurio", sv: "skada på träd", en: "tree damage", desc: "Puustovaurio tarkoittaa puiden fyysistä vaurioitumista esimerkiksi tuulen tai koneiden takia.<br><br>Skada på träd är fysisk skada orsakad av vind, maskiner eller andra faktorer.<br><br>Tree damage refers to physical injury to trees caused by wind, machinery, or other factors." },
  
{ fi: "tuhopuusto", sv: "skadat bestånd", en: "damaged stand", desc: "Tuhopuusto on metsikkö, jota tuhohyönteiset, myrskyt tai taudit ovat vaurioittaneet.<br><br>Skadat bestånd är ett skogsområde som skadats av skadedjur, storm eller sjukdom.<br><br>A damaged stand is a forest area affected by pests, storms, or disease." },
  
{ fi: "tuhojen torjunta", sv: "skadebekämpning", en: "pest control", desc: "Tuhojen torjunta tarkoittaa toimenpiteitä, joilla ehkäistään tai vähennetään metsätuhoja.<br><br>Skadebekämpning är åtgärder för att förebygga eller minska skogsskador.<br><br>Pest control refers to actions taken to prevent or reduce forest damage." },
  
{ fi: "tuhoeläin", sv: "skadedjur", en: "pest", desc: "Tuhoeläin on eliö, joka aiheuttaa vahinkoa metsille tai viljelykasveille.<br><br>Skadedjur är en organism som orsakar skador på skog eller grödor.<br><br>A pest is an organism that causes damage to forests or crops." },
  
{ fi: "tuhonaiheuttaja", sv: "skadegörare", en: "damaging agent", desc: "Tuhonaiheuttaja on mikä tahansa tekijä, joka aiheuttaa metsätuhoja, kuten hyönteiset tai taudit.<br><br>Skadegörare är en faktor som orsakar skador, till exempel insekter eller sjukdomar.<br><br>A damaging agent is any factor that causes damage, such as insects or diseases." },
  
{ fi: "hyönteistuholainen", sv: "skadeinsekt", en: "damaging insect", desc: "Hyönteistuholainen on hyönteinen, joka vahingoittaa puita tai metsää.<br><br>Skadeinsekt är en insekt som skadar träd eller skog.<br><br>A damaging insect is an insect that harms trees or forests." },
  
    { fi: "kuoriainen", sv: "skalbagge", en: "beetle", desc: "Kuoriainen on kovakuoristen hyönteisten ryhmä, joka elää monenlaisissa ympäristöissä ja voi olla sekä hyödyllinen että tuhoisa metsissä.<br><br>Skalbagge är en grupp hårdskaliga insekter som lever i många miljöer och kan vara både nyttiga och skadegörande i skogen.<br><br>A beetle is a group of hard-shelled insects that live in many environments and can be either beneficial or harmful in forests." },
  
{ fi: "metsä", sv: "skog", en: "forest", desc: "Metsä on puiden ja muun kasvillisuuden muodostama ekosysteemi, joka kattaa laajoja maa-alueita.<br><br>Skog är ett ekosystem dominerat av träd och annan vegetation som täcker stora markområden.<br><br>A forest is an ecosystem dominated by trees and vegetation covering large land areas." },
  
{ fi: "pienvesien lähimetsä", sv: "skog i anslutning till småvatten", en: "riparian forest near small waters", desc: "Pienvesien lähimetsä on metsävyöhyke, joka kasvaa purojen, lampien tai muiden pienten vesistöjen läheisyydessä ja suojaa vesistöä.<br><br>Skog i anslutning till småvatten är skogsområden nära små vattendrag som skyddar vattenmiljön.<br><br>A riparian forest near small waters is a forest zone growing near small streams or ponds that helps protect the water ecosystem." },
  
{ fi: "siemenpuumetsikkö", sv: "skog i fröträdsställning", en: "seed tree stand", desc: "Siemenpuumetsikkö on uudistushakkuun jälkeen jätetty metsikkö, jossa yksittäiset siemenpuut tuottavat uutta taimikkoa.<br><br>Skog i fröträdsställning är ett bestånd där fröträd lämnas kvar för naturlig föryngring.<br><br>A seed tree stand is a forest where selected seed trees are left to regenerate new seedlings naturally." },
  
{ fi: "suojuspuumetsikkö", sv: "skog i skärmställning", en: "shelterwood stand", desc: "Suojuspuumetsikkö on metsikkö, jossa osa puista jätetään suojaamaan taimettumista ja nuorta kasvustoa.<br><br>Skog i skärmställning är ett bestånd där träd lämnas för att skydda föryngringen.<br><br>A shelterwood stand is a forest where some trees are retained to protect regeneration and young growth." },
  
{ fi: "ojitusaluemetsä", sv: "skog på dikad torvmark", en: "forest on drained peatland", desc: "Ojitusaluemetsä on metsä, joka kasvaa ojitetulla turvemaalla, jossa veden määrää on säädelty ojituksella.<br><br>Skog på dikad torvmark är skog som växer på dikad myrmark.<br><br>A forest on drained peatland is a forest growing on peat soil where drainage has been used to control water levels." },
  
{ fi: "saarimetsä", sv: "skog på holmar", en: "island forest", desc: "Saarimetsä on metsää, joka kasvaa saarilla tai pienillä saarimaisilla alueilla vesistöissä.<br><br>Skog på holmar är skog som växer på små öar.<br><br>An island forest is a forest growing on islands or small land areas surrounded by water." },
  
{ fi: "rinnemetsä", sv: "skog som växer på sluttningar", en: "slope forest", desc: "Rinnemetsä on metsä, joka kasvaa rinteissä, joissa maaperä ja kosteusolosuhteet vaihtelevat.<br><br>Skog som växer på sluttningar är skog i kuperad terräng.<br><br>A slope forest is a forest growing on hillsides with varying soil and moisture conditions." },
  
{ fi: "maankohoamisrannikon metsä", sv: "skog vid landhöjningskusten", en: "forest along land uplift coast", desc: "Maankohoamisrannikon metsä on metsää alueilla, joilla maa nousee merestä ja uutta maata paljastuu jatkuvasti.<br><br>Skog vid landhöjningskusten är skog i områden där land höjs ur havet.<br><br>A forest along a land uplift coast is a forest in areas where land is gradually rising from the sea." },
  
{ fi: "puustoinen horisontti", sv: "skogbevuxen horisontlinje", en: "tree-covered horizon", desc: "Puustoinen horisontti tarkoittaa maisemaa, jossa puusto muodostaa näkyvän horisonttilinjan.<br><br>Skogbevuxen horisontlinje är en horisont där träd täcker sikten.<br><br>A tree-covered horizon is a landscape where trees form the visible horizon line." },
  
{ fi: "dyynimetsä", sv: "skogbevuxna sanddyner", en: "forested sand dunes", desc: "Dyynimetsä on metsä, joka kasvaa hiekkadyynien päällä ja sopeutuu karuihin olosuhteisiin.<br><br>Skogbevuxna sanddyner är trädbevuxna sanddyner.<br><br>Forested sand dunes are sand dunes covered with forest vegetation adapted to harsh conditions." },
  
{ fi: "metsän aineettomat hyödyt", sv: "skogens icke materiella nyttigheter", en: "non-material benefits of forests", desc: "Metsän aineettomat hyödyt tarkoittavat esimerkiksi virkistystä, maisema-arvoja ja hyvinvointivaikutuksia.<br><br>Skogens icke materiella nyttigheter är exempelvis rekreation och landskapsvärden.<br><br>Non-material benefits of forests include recreation, landscape values, and well-being effects." },
  
{ fi: "metsän maisemallinen arvo", sv: "skogens landskapsvärde", en: "landscape value of forest", desc: "Metsän maisemallinen arvo kuvaa metsän merkitystä maiseman kauneuden ja monimuotoisuuden kannalta.<br><br>Skogens landskapsvärde avser skogens estetiska och visuella betydelse.<br><br>The landscape value of a forest refers to its aesthetic and visual importance." },
  
{ fi: "vuorijalava", sv: "skogsalm", en: "wych elm", desc: "Vuorijalava on harvinainen jalavapuulaji, joka kasvaa kosteissa ja ravinteikkaissa metsissä.<br><br>Skogsalm är en almart som växer i fuktiga och näringsrika skogar.<br><br>Wych elm is a species of elm that grows in moist and nutrient-rich forests." },
  
{ fi: "alusmetsä", sv: "skogsbestånd vid stupens nedre del", en: "understorey forest at slope base", desc: "Alusmetsä tarkoittaa alempana rinteessä kasvavaa metsää, joka voi olla varjoisampaa ja kosteampaa.<br><br>Skogsbestånd vid stupens nedre del är skog vid foten av en sluttning.<br><br>An understorey forest at the base of a slope is forest growing at lower slope areas with different light and moisture conditions." },
  
{ fi: "metsälaidun", sv: "skogsbete", en: "forest pasture", desc: "Metsälaidun on metsäalue, jota käytetään laiduntamiseen eläimille.<br><br>Skogsbete är skog som används som betesmark.<br><br>A forest pasture is woodland used for grazing animals." },
  
{ fi: "metsätie", sv: "skogsbilväg", en: "forest road", desc: "Metsätie on metsänhoitoa ja puunkuljetusta varten rakennettu tie.<br><br>Skogsbilväg är en väg i skogen för skogsbruk och transport.<br><br>A forest road is a road built for forestry operations and timber transport." },
  
{ fi: "metsäautotieverkosto", sv: "skogsbilvägnät", en: "forest road network", desc: "Metsäautotieverkosto on metsäteiden muodostama verkosto, joka helpottaa metsätaloutta.<br><br>Skogsbilvägnät är nätverket av skogsbilvägar.<br><br>A forest road network is the system of forest roads used for forestry access and transport." },
  
{ fi: "metsäpalo", sv: "skogsbrand", en: "forest fire", desc: "Metsäpalo on tulipalo metsäalueella, joka voi levitä nopeasti ja aiheuttaa suuria tuhoja.<br><br>Skogsbrand är en brand i skogsområde.<br><br>A forest fire is a fire in woodland that can spread rapidly and cause major damage." },
  
{ fi: "metsäpaloympäristö", sv: "skogsbrandområde", en: "post-fire forest area", desc: "Metsäpaloympäristö on alue, jossa on tapahtunut metsäpalo ja jossa ekosysteemi on muuttunut.<br><br>Skogsbrandområde är ett område som påverkats av skogsbrand.<br><br>A post-fire forest area is a landscape affected by wildfire where the ecosystem has been altered." },
  
    { fi: "metsäpalovalvonta", sv: "skogsbrandövervakning", en: "forest fire surveillance", desc: "Metsäpalovalvonta tarkoittaa metsäpalojen havaitsemista ja seurantaa, jotta tulipaloihin voidaan reagoida nopeasti.<br><br>Skogsbrandövervakning är övervakning för att upptäcka och följa skogsbränder i tid.<br><br>Forest fire surveillance means monitoring forests to detect and respond to wildfires quickly." },
  
{ fi: "metsänkasvatus", sv: "skogsbruk", en: "silviculture / forestry", desc: "Metsänkasvatus tarkoittaa metsän hoitoa ja kehittämistä puuntuotannon ja muiden tavoitteiden mukaan.<br><br>Skogsbruk avser skötsel och bruk av skog för virkesproduktion och andra mål.<br><br>Silviculture refers to the management and cultivation of forests for timber production and other objectives." },
  
{ fi: "metsätalous", sv: "skogsbruk", en: "forestry", desc: "Metsätalous on toimiala, joka käsittelee metsien käyttöä, hoitoa ja puuntuotantoa.<br><br>Skogsbruk är näringen som handlar om användning och skötsel av skog.<br><br>Forestry is the sector dealing with the use, management, and production of forests." },
  
{ fi: "metsätalouden haavoittuvuus", sv: "skogsbrukets sårbarhet", en: "vulnerability of forestry", desc: "Metsätalouden haavoittuvuus kuvaa, kuinka herkkä metsätalous on esimerkiksi ilmastonmuutokselle tai tuhoille.<br><br>Skogsbrukets sårbarhet beskriver hur känslig skogsbruket är för till exempel klimatförändringar.<br><br>The vulnerability of forestry describes how sensitive forestry is to factors like climate change or disturbances." },
{ fi: "metsätalousmaa", sv: "skogsbruksmark", en: "forestry land", desc: "Metsätalousmaa on maa-alue, jota käytetään metsätalouteen ja puuntuotantoon.<br><br>Skogsbruksmark är mark som används för skogsbruk.<br><br>Forestry land is land used for forestry and timber production." },
  
{ fi: "metsäsuunnitelma", sv: "skogsbruksplan", en: "forest management plan", desc: "Metsäsuunnitelma on suunnitelma, jossa määritellään metsän hoito- ja hakkuutoimet.<br><br>Skogsbruksplan är en plan för skötsel och avverkning av skog.<br><br>A forest management plan outlines how a forest should be managed and harvested." },
  
{ fi: "metsäalvejuuri", sv: "skogsbräken", en: "male fern", desc: "Metsäalvejuuri on yleinen saniaiskasvi, joka kasvaa varjoisissa metsissä.<br><br>Skogsbräken är en vanlig ormbunke som växer i skuggiga skogar.<br><br>Male fern is a common fern species growing in shady forests." },
  
{ fi: "luonnonmarja", sv: "skogsbär", en: "wild berry", desc: "Luonnonmarja on luonnossa kasvava syötävä marja, kuten mustikka tai puolukka.<br><br>Skogsbär är ätliga bär som växer i naturen.<br><br>A wild berry is an edible berry growing naturally in the wild, such as bilberry or lingonberry." },
  
{ fi: "metsämarja", sv: "skogsbär", en: "forest berry", desc: "Metsämarja tarkoittaa metsässä kasvavia marjoja, joita kerätään ravinnoksi.<br><br>Skogsbär är bär som växer i skog och samlas som föda.<br><br>A forest berry is a berry growing in forests that is collected for food." },
  
{ fi: "metsäsertifiointi", sv: "skogscertifiering", en: "forest certification", desc: "Metsäsertifiointi on järjestelmä, jolla varmistetaan metsänhoidon kestävyyttä ja vastuullisuutta.<br><br>Skogscertifiering är ett system som säkerställer hållbart skogsbruk.<br><br>Forest certification is a system that ensures sustainable and responsible forest management." },
  
{ fi: "metsäomaisuus", sv: "skogsegendom", en: "forest property", desc: "Metsäomaisuus tarkoittaa metsää tai metsätiloja, jotka kuuluvat omistajalle.<br><br>Skogsegendom är skog som ägs av en person eller organisation.<br><br>Forest property refers to forest land owned by an individual or organization." },
  
{ fi: "metsätila", sv: "skogsfastighet", en: "forest estate", desc: "Metsätila on kiinteistö, johon kuuluu metsämaata.<br><br>Skogsfastighet är en fastighet som består av skogsmark.<br><br>A forest estate is a property consisting of forest land." },
  
{ fi: "metsäkortekorpi", sv: "skogsfräkenkärr", en: "wood horsetail swamp forest", desc: "Metsäkortekorpi on kostea metsätyyppi, jossa kasvaa runsaasti kortekasveja.<br><br>Skogsfräkenkärr är en fuktig skogstyp med riklig förekomst av fräken.<br><br>A wood horsetail swamp forest is a wet forest type rich in horsetail plants." },
  
{ fi: "metsikön uudistaminen", sv: "skogsförnyelse", en: "forest regeneration", desc: "Metsikön uudistaminen tarkoittaa uuden puusukupolven aikaansaamista hakkuun jälkeen.<br><br>Skogsförnyelse är att skapa ny skog efter avverkning.<br><br>Forest regeneration is the establishment of a new tree generation after harvesting." },
  
{ fi: "metsän uudistaminen", sv: "skogsförnyelse", en: "forest regeneration", desc: "Metsän uudistaminen on metsän palauttamista kasvavaan tilaan luonnollisesti tai istuttamalla.<br><br>Skogsförnyelse är att återföra skog till växande tillstånd.<br><br>Forest regeneration is restoring a forest through natural or artificial means." },
  
{ fi: "metsävakuutus", sv: "skogsförsäkring", en: "forest insurance", desc: "Metsävakuutus suojaa metsänomistajaa taloudellisilta menetyksiltä metsätuhojen yhteydessä.<br><br>Skogsförsäkring skyddar mot ekonomiska förluster vid skogsskador.<br><br>Forest insurance protects owners against financial losses from forest damage." },
  
{ fi: "metsänraja", sv: "skogsgräns", en: "forest boundary", desc: "Metsänraja on alue, jossa metsä vaihtuu toiseen maankäyttömuotoon tai kasvillisuuteen.<br><br>Skogsgräns är gränsen där skog övergår till annan markanvändning.<br><br>A forest boundary is the edge where forest transitions into another land use type." },
  
{ fi: "kangasmetsäsaareke", sv: "skogsholme", en: "forest island patch", desc: "Kangasmetsäsaareke on pieni metsäalue avoimessa maisemassa tai suolla.<br><br>Skogsholme är en mindre skogsyta i ett öppet landskap.<br><br>A forest island patch is a small forest area within open landscapes or wetlands." },
  
{ fi: "metsäkanalintu", sv: "skogshönsfågel", en: "forest grouse", desc: "Metsäkanalintu on metsissä elävä riistalintu, kuten teeri tai metso.<br><br>Skogshönsfågel är en grupp fåglar som lever i skog.<br><br>A forest grouse is a game bird species living in forests." },
  
{ fi: "metsämaitikka", sv: "skogskovall", en: "wood cow-wheat", desc: "Metsämaitikka on metsäkasvi, joka kasvaa yleensä varjoisissa ja rehevissä metsissä.<br><br>Skogskovall är en växt som växer i skuggiga skogar.<br><br>Wood cow-wheat is a forest plant growing in shady, fertile woods." },
  
{ fi: "metsälaki", sv: "skogslag", en: "forestry law", desc: "Metsälaki säätelee metsien käyttöä ja hoitoa Suomessa.<br><br>Skogslag reglerar användningen av skog.<br><br>The forestry law regulates the use and management of forests." },
  
{ fi: "metsälainsäädäntö", sv: "skogslagstiftning", en: "forestry legislation", desc: "Metsälainsäädäntö koostuu laeista, jotka koskevat metsien hoitoa ja käyttöä.<br><br>Skogslagstiftning består av lagar om skogsbruk.<br><br>Forestry legislation consists of laws governing forest use and management." },
  
{ fi: "metsämaisema", sv: "skogslandskap", en: "forest landscape", desc: "Metsämaisema on maisema, jossa metsät ovat hallitseva elementti.<br><br>Skogslandskap är ett landskap dominerat av skog.<br><br>A forest landscape is a landscape dominated by forests." },
  
{ fi: "metsälehmus", sv: "skogslind", en: "small-leaved lime", desc: "Metsälehmus on lehtipuu, joka kasvaa rehevissä metsissä ja on tärkeä biodiversiteetille.<br><br>Skogslind är ett lövträd som växer i bördiga skogar.<br><br>Small-leaved lime is a deciduous tree growing in fertile forests and important for biodiversity." },
  
    { fi: "metsänviljely", sv: "skogsodling", en: "forestry cultivation", desc: "Metsänviljely tarkoittaa metsän uudistamista ja kasvattamista istuttamalla tai kylvämällä.<br><br>Skogsodling innebär att man anlägger och föryngrar skog genom plantering eller sådd.<br><br>Forest cultivation means establishing and regenerating forests by planting or sowing." },

{ fi: "metsänviljelyaineisto", sv: "skogsodlingsmaterial", en: "forest planting material", desc: "Metsänviljelyaineisto tarkoittaa siemeniä ja taimia metsän uudistamiseen.<br><br>Skogsodlingsmaterial är frön och plantor som används vid skogsodling.<br><br>Forest planting material refers to seeds and seedlings used for forest regeneration." },

{ fi: "metsätähti", sv: "skogsstjärna", en: "wood stitchwort", desc: "Metsätähti on metsäkasvi, joka kasvaa varjoisissa ja kosteissa metsissä.<br><br>Skogsstjärna är en skogsväxt som trivs i skuggiga och fuktiga miljöer.<br><br>Wood stitchwort is a forest plant that grows in shady and moist habitats." },

{ fi: "metsäkuljetusmatka", sv: "skogstransportsträcka", en: "timber transport distance", desc: "Metsäkuljetusmatka on etäisyys, jolla puut kuljetetaan metsästä tieverkolle.<br><br>Skogstransportsträcka är avståndet för transport av virke från skogen till väg.<br><br>Timber transport distance is the distance wood is moved from the forest to the road network." },

{ fi: "metsänjalostus", sv: "skogsträdsförädling", en: "tree breeding", desc: "Metsänjalostus parantaa puiden kasvua ja laatua valinnan ja risteytyksen avulla.<br><br>Skogsträdsförädling förbättrar trädens tillväxt och kvalitet genom urval och förädling.<br><br>Tree breeding improves growth and quality of trees through selection and breeding." },

{ fi: "metsänhoito", sv: "skogsvård", en: "forest management", desc: "Metsänhoito sisältää kaikki toimet, joilla metsää kasvatetaan ja hoidetaan.<br><br>Skogsvård omfattar alla åtgärder för att sköta och utveckla skog.<br><br>Forest management includes all actions used to grow and maintain forests." },

{ fi: "jaksollinen kasvatus", sv: "skogsvård i likåldriga skogar", en: "even-aged forestry", desc: "Jaksollinen kasvatus tarkoittaa metsän hoitoa tasarakenteisina jaksoina.<br><br>Skogsvård i likåldriga skogar innebär skötsel av jämnåriga bestånd.<br><br>Even-aged forestry manages forests in uniform age stages." },

{ fi: "kasvatusmenetelmä", sv: "skogsvårdsmetod", en: "silvicultural method", desc: "Kasvatusmenetelmä on tapa hoitaa ja kasvattaa metsää eri vaiheissa.<br><br>Skogsvårdsmetod är ett sätt att sköta och utveckla skog.<br><br>Silvicultural method is a technique for managing forest growth." },

{ fi: "kasvatustapa", sv: "skogsvårdsmetod", en: "management method", desc: "Kasvatustapa kuvaa, miten metsää hoidetaan ja uudistetaan.<br><br>Skogsvårdsmetod beskriver hur skogen sköts och föryngras.<br><br>Management method describes how a forest is managed and regenerated." },

{ fi: "metsän kasvatustapa", sv: "skogsvårdsmetod", en: "forestry system", desc: "Metsän kasvatustapa määrittää metsänhoidon perusperiaatteen.<br><br>Skogsvårdsmetod anger grundsättet för skogsskötsel.<br><br>Forestry system defines the basic approach to forest management." },

{ fi: "metsänhoitomenetelmä", sv: "skogsvårdsmetod", en: "forest management method", desc: "Metsänhoitomenetelmä on käytännön tapa toteuttaa metsänhoitoa.<br><br>Skogsvårdsmetod är ett praktiskt sätt att genomföra skogsskötsel.<br><br>Forest management method is a practical approach to managing forests." },

{ fi: "metsänhoidon suositukset", sv: "skogsvårdsrekommendationer", en: "forest management recommendations", desc: "Metsänhoidon suositukset ohjaavat hyvää metsänhoitokäytäntöä.<br><br>Skogsvårdsrekommendationer ger riktlinjer för god skogsskötsel.<br><br>Forest management recommendations guide best practices in forestry." },

{ fi: "metsänhoitotoimenpide", sv: "skogsvårdsåtgärd", en: "silvicultural operation", desc: "Metsänhoitotoimenpide on yksittäinen toimenpide metsän käsittelyssä.<br><br>Skogsvårdsåtgärd är en enskild åtgärd i skogsskötseln.<br><br>Silvicultural operation is a specific action in forest management." },

{ fi: "metsänomistus", sv: "skogsägande", en: "forest ownership", desc: "Metsänomistus tarkoittaa metsän hallintaa ja omistamista.<br><br>Skogsägande innebär att äga och förvalta skog.<br><br>Forest ownership means owning and managing forest land." },

{ fi: "metsänomistaja", sv: "skogsägare", en: "forest owner", desc: "Metsänomistaja on henkilö tai organisaatio, joka omistaa metsää.<br><br>Skogsägare är en person eller organisation som äger skog.<br><br>Forest owner is a person or organization that owns forest land." },

{ fi: "vesa", sv: "skott", en: "shoot", desc: "Vesa on puun tai kasvin uusi versokasvu.<br><br>Skott är en ny tillväxtdel av en växt.<br><br>Shoot is a new growth of a plant." },

{ fi: "varjostuksensietokyky", sv: "skuggtålighet", en: "shade tolerance", desc: "Varjostuksensietokyky tarkoittaa kasvin kykyä kasvaa varjossa.<br><br>Skuggtålighet är en arts förmåga att växa i skugga.<br><br>Shade tolerance is the ability of a plant to grow in shade." },

{ fi: "suopursu", sv: "skvattram", en: "bog rosemary", desc: "Suopursu on suokasvi, joka kasvaa happamilla soilla.<br><br>Skvattram är en myrväxt som växer på sura myrar.<br><br>Bog rosemary is a wetland shrub growing in acidic bogs." },

{ fi: "suojapaikka", sv: "skydd", en: "shelter site", desc: "Suojapaikka on alue, joka tarjoaa suojaa luonnolle tai eläimille.<br><br>Skydd är ett område som ger skydd åt natur eller djur.<br><br>Shelter site is an area providing protection for nature or wildlife." },

{ fi: "yksityinen suojelualue", sv: "skyddsområde på frivillig basis", en: "private protected area", desc: "Yksityinen suojelualue on maanomistajan suojelema alue.<br><br>Skyddsområde på frivillig basis är ett område som skyddas av markägaren.<br><br>Private protected area is land voluntarily protected by its owner." },

{ fi: "suojametsävyöhyke", sv: "skyddsskogsområde", en: "protection forest zone", desc: "Suojametsävyöhyke suojaa esimerkiksi tuulelta tai eroosiolta.<br><br>Skyddsskogsområde skyddar mot till exempel vind och erosion.<br><br>Protection forest zone protects against wind and erosion." },

{ fi: "suojametsäalue", sv: "skyddsskogsområde", en: "protective forest area", desc: "Suojametsäalue on metsää, jolla on erityinen suojelutehtävä.<br><br>Skyddsskogsområde är skog med särskilt skyddande funktion.<br><br>Protective forest area is forest with a protective function." },

{ fi: "suojakaista", sv: "skyddszon", en: "buffer strip", desc: "Suojakaista on kapea alue, joka suojaa vesistöjä tai maata.<br><br>Skyddszon är ett smalt område som skyddar natur eller vatten.<br><br>Buffer strip is a narrow zone protecting soil or water bodies." },

{ fi: "suojavyöhyke", sv: "skyddszon", en: "buffer zone", desc: "Suojavyöhyke vähentää ihmistoiminnan vaikutuksia luontoon.<br><br>Skyddszon minskar påverkan från mänsklig aktivitet.<br><br>Buffer zone reduces the impact of human activity on nature." },
    { fi: "metsän uudistamisvelvoite", sv: "skyldighet att förnya skogen", en: "forest regeneration obligation", desc: "Metsän uudistamisvelvoite tarkoittaa velvollisuutta varmistaa, että hakattu metsä uudistuu joko luontaisesti tai viljellen.<br><br>Skyldighet att förnya skogen innebär krav på att skogen återbeskogas efter avverkning.<br><br>Forest regeneration obligation means the legal duty to ensure that a harvested forest is successfully regenerated either naturally or by planting." },

{ fi: "uudistamisvelvoite", sv: "skyldighet att förnya skogen", en: "regeneration obligation", desc: "Uudistamisvelvoite on vaatimus huolehtia metsän uusiutumisesta hakkuun jälkeen.<br><br>Skyldighet att förnya skogen är ett krav på återväxt efter avverkning.<br><br>Regeneration obligation is the requirement to ensure forest regrowth after harvesting." },

{ fi: "suojuspuumenetelmä", sv: "skärmställning", en: "shelterwood system", desc: "Suojuspuumenetelmä on metsänuudistamismenetelmä, jossa osa puista jätetään suojaamaan taimettumista.<br><br>Skärmställning är en föryngringsmetod där skyddande träd lämnas kvar.<br><br>Shelterwood system is a regeneration method where some trees are left to protect regeneration." },

{ fi: "suojuspuuasento", sv: "skärmställning", en: "shelterwood stand structure", desc: "Suojuspuuasento tarkoittaa metsän rakennetta, jossa suojapuut jäävät kasvamaan taimikon ylle.<br><br>Skärmställning beskriver en skog där skyddsträd står kvar över föryngringen.<br><br>Shelterwood stand structure refers to a forest structure with overstory protection trees." },

{ fi: "suojuspuu", sv: "skärmträd", en: "shelter tree", desc: "Suojuspuu on puu, joka jätetään suojaamaan taimien kasvua.<br><br>Skärmträd är ett träd som lämnas kvar för att skydda föryngring.<br><br>Shelter tree is a tree left standing to protect young regeneration." },

{ fi: "suojuspuusto", sv: "skärmträd", en: "shelterwood trees", desc: "Suojuspuusto on joukko puita, jotka suojaavat taimikkoa.<br><br>Skärmträd är träd som skyddar föryngring.<br><br>Shelterwood trees are trees left to protect regeneration." },

{ fi: "kasvatusketju", sv: "skötselprogram", en: "management sequence", desc: "Kasvatusketju kuvaa metsänhoitotoimenpiteiden sarjaa eri vaiheissa.<br><br>Skötselprogram beskriver en följd av skötselåtgärder.<br><br>Management sequence describes a series of forest management actions over time." },

{ fi: "kasvatusohjelma", sv: "skötselprogram", en: "management program", desc: "Kasvatusohjelma on suunnitelma metsän hoitotoimenpiteistä.<br><br>Skötselprogram är en plan för skogsskötselåtgärder.<br><br>Management program is a plan for forest management activities." },

{ fi: "metsän kasvatussuositukset?", sv: "skötselrekommendationer", en: "forest management recommendations", desc: "Metsän kasvatussuositukset ohjaavat hyvää metsänhoitoa ja käsittelyä.<br><br>Skötselrekommendationer ger riktlinjer för skogsskötsel.<br><br>Forest management recommendations provide guidelines for good forestry practice." },

{ fi: "lietekuoppa", sv: "slamgrop", en: "sediment pit", desc: "Lietekuoppa on kuoppa, johon kerätään kiintoainesta vedestä tai maasta.<br><br>Slamgrop är en grop som fångar upp sediment.<br><br>Sediment pit is a pit used to collect solids from water or soil." },

{ fi: "päätehakkuu", sv: "slutavverkning", en: "final felling", desc: "Päätehakkuu on metsän viimeinen hakkuu ennen uudistamista.<br><br>Slutavverkning är den sista avverkningen innan föryngring.<br><br>Final felling is the last harvest before forest regeneration." },

{ fi: "rinnemaa", sv: "sluttning", en: "slope land", desc: "Rinnemaa tarkoittaa kaltevaa maastoa.<br><br>Sluttning är ett lutande markområde.<br><br>Slope land refers to sloping terrain." },

{ fi: "vesakko", sv: "sly", en: "brushwood", desc: "Vesakko on nuorta pensaikkoa tai vesomista.<br><br>Sly är ung buskvegetation.<br><br>Brushwood refers to young woody vegetation." },

{ fi: "taimikon varhaisperkaus", sv: "slyröjning", en: "early cleaning of young stand", desc: "Taimikon varhaisperkaus on taimikon hoitoa poistamalla haitallista vesakkoa.<br><br>Slyröjning innebär tidig röjning av ungskog.<br><br>Early cleaning of young stand is removing competing vegetation in young forests." },

{ fi: "varhaisperkaus", sv: "slyröjning", en: "pre-commercial thinning", desc: "Varhaisperkaus on taimikon varhainen hoitotoimenpide.<br><br>Slyröjning är tidig röjning i ungskog.<br><br>Pre-commercial thinning is early forest tending before thinning operations." },

{ fi: "kitkentä", sv: "slyuppryckning", en: "weed pulling", desc: "Kitkentä tarkoittaa ei-toivotun kasvillisuuden poistamista juurineen.<br><br>Slyuppryckning är borttagning av sly med rötterna.<br><br>Weed pulling is removing unwanted vegetation by pulling it out." },

{ fi: "vesoittuminen", sv: "slyuppslag", en: "sprouting", desc: "Vesoittuminen on uusien versojen kasvua kannoista tai juurista.<br><br>Slyuppslag är uppslag av nya skott.<br><br>Sprouting is the growth of new shoots from stumps or roots." },

{ fi: "korpijuotti", sv: "smalt kärr", en: "narrow mire strip", desc: "Korpijuotti on kapea soistunut alue metsässä.<br><br>Smalt kärr är ett smalt myrområde.<br><br>Narrow mire strip is a narrow wetland area in a forest." },

{ fi: "Saarnenjalosoukko", sv: "Smaragdgrön asksmalpraktbagge", en: "Emerald ash borer", desc: "Saarnenjalosoukko on hyönteinen, joka vahingoittaa saarnia.<br><br>Asksmalpraktbagge är en skadegörande insekt på ask.<br><br>Emerald ash borer is an insect that damages ash trees." },

{ fi: "Ahomansikka", sv: "Smultron", en: "Wild strawberry", desc: "Ahomansikka on pieni luonnonvarainen marja.<br><br>Smultron är ett vildväxande bär.<br><br>Wild strawberry is a small wild berry." },

{ fi: "pienvesi", sv: "småvatten", en: "small water body", desc: "Pienvesi tarkoittaa pieniä lampia, puroja tai lähteitä.<br><br>Småvatten är små sjöar eller vattendrag.<br><br>Small water body refers to ponds, streams, or springs." },
  
{ fi: "tukkimiehentäi", sv: "snytbagge", en: "pine weevil", desc: "Tukkimiehentäi on metsätuholainen, joka vioittaa erityisesti taimien runkoa ja juurenniskaa.<br><br>Snytbagge är en skadegörande insekt som främst angriper plantor i ungskog.<br><br>Pine weevil is a forest pest that damages seedlings, especially at the stem base." },

{ fi: "lumituho", sv: "snöskada", en: "snow damage", desc: "Lumituho syntyy, kun raskas lumi katkoo tai taivuttaa puita.<br><br>Snöskada uppstår när tung snö bryter eller böjer träd.<br><br>Snow damage occurs when heavy snow breaks or bends trees." },

{ fi: "männyntalvihome", sv: "snöskytte på tall", en: "snow blight on pine", desc: "Männyntalvihome on sieni, joka aiheuttaa neulasten vaurioita talvella.<br><br>Snöskytte på tall är en svampsjukdom som skadar tallbarr under vintern.<br><br>Snow blight on pine is a fungal disease that damages pine needles in winter." },

{ fi: "sosiaalinen kestävyys", sv: "social hållbarhet", en: "social sustainability", desc: "Sosiaalinen kestävyys tarkoittaa hyvinvoinnin, oikeudenmukaisuuden ja osallistumisen turvaamista.<br><br>Social hållbarhet handlar om rättvisa, välfärd och delaktighet i samhället.<br><br>Social sustainability refers to maintaining wellbeing, fairness, and participation in society." },

{ fi: "harjun paahdeympäristö", sv: "solexponerad ås", en: "sun-exposed esker habitat", desc: "Harjun paahdeympäristö on kuiva ja aurinkoinen elinympäristö harjuilla.<br><br>Solexponerad ås är en torr och solig miljö på rullstensåsar.<br><br>Sun-exposed esker habitat is a dry, sunny environment found on esker formations." },

{ fi: "kesäkorjuu", sv: "sommaravverkning", en: "summer harvesting", desc: "Kesäkorjuu tarkoittaa puunkorjuuta sulan maan aikana.<br><br>Sommaravverkning är avverkning som sker under barmarksperioden.<br><br>Summer harvesting refers to logging during the snow-free season." },

{ fi: "rassi", sv: "sond", en: "probe", desc: "Rassi on työkalu tai mittaväline, jolla tutkitaan maata tai puun rakennetta.<br><br>Sond är ett verktyg för att undersöka mark eller material.<br><br>Probe is a tool used to investigate soil or structures." },

{ fi: "myyrä", sv: "sork", en: "vole", desc: "Myyrä on pieni jyrsijä, joka voi aiheuttaa vaurioita taimikoissa.<br><br>Sork (myra) är en liten gnagare som kan skada ungskog.<br><br>Vole is a small rodent that can damage seedlings and young forests." },

{ fi: "myyrätuho", sv: "sorkskada", en: "vole damage", desc: "Myyrätuho tarkoittaa myyrien aiheuttamia vaurioita kasvillisuudelle.<br><br>Sorkskada är skador orsakade av sorkar i vegetation.<br><br>Vole damage refers to damage caused by voles to plants and seedlings." },

{ fi: "lajittunut maalaji", sv: "sorterad jordart", en: "sorted soil type", desc: "Lajittunut maalaji on maa-aines, joka on lajittunut rakeiden koon mukaan veden tai tuulen vaikutuksesta.<br><br>Sorterad jordart är jord som sorterats efter kornstorlek av vatten eller vind.<br><br>Sorted soil type is soil material separated by particle size through water or wind action." },

{ fi: "erikoispuulaji", sv: "specialträdslag", en: "special tree species", desc: "Erikoispuulaji on harvinaisempi tai erityiskäyttöön soveltuva puulaji.<br><br>Specialträdslag är en ovanlig eller särskilt användbar trädart.<br><br>Special tree species refers to less common or specially valued tree species." },

{ fi: "hukkapuu", sv: "spillvirke", en: "waste timber", desc: "Hukkapuu on puutavaraa, joka ei kelpaa käyttöön tai jää hyödyntämättä.<br><br>Spillvirke är virke som inte kan användas eller går till spillo.<br><br>Waste timber refers to wood that is not utilized or is unsuitable for use." },

{ fi: "itiötartunta", sv: "sporinfektion", en: "spore infection", desc: "Itiötartunta on sienen leviämistä itiöiden kautta kasveihin.<br><br>Sporinfektion är spridning av svampsporer till växter.<br><br>Spore infection is the spread of fungal spores to plants." },

{ fi: "pakurikääpä", sv: "sprängticka", en: "chaga fungus", desc: "Pakurikääpä on puissa kasvava sieni, jota esiintyy erityisesti koivussa.<br><br>Sprängticka är en svamp som växer på träd, ofta björk.<br><br>Chaga fungus is a parasitic fungus growing mainly on birch trees." },

{ fi: "raiteistuminen", sv: "spårbildning", en: "rutting / track formation", desc: "Raiteistuminen tarkoittaa koneiden aiheuttamia uria maastoon.<br><br>Spårbildning är bildning av spår i marken efter maskiner.<br><br>Rutting refers to tracks formed in soil by machinery." },

{ fi: "runko", sv: "stam", en: "tree stem", desc: "Runko on puun pääosa juurien ja latvuksen välissä.<br><br>Stam är den centrala delen av ett träd mellan rot och krona.<br><br>Tree stem is the main trunk of a tree." },

{ fi: "runkoluku", sv: "stamantal", en: "stem count", desc: "Runkoluku tarkoittaa puiden lukumäärää tietyllä alueella.<br><br>Stamantal är antalet träd i ett bestånd.<br><br>Stem count refers to the number of trees in an area." },

{ fi: "pystykarsittu metsikkö", sv: "stamkvistat bestånd", en: "pruned stand", desc: "Pystykarsittu metsikkö on metsikkö, jossa puiden oksia on poistettu rungon alaosasta.<br><br>Stamkvistat bestånd är en skog där nedre grenar har tagits bort.<br><br>Pruned stand is a forest where lower branches have been removed." },

{ fi: "pystykarsinta", sv: "stamkvistning", en: "pruning", desc: "Pystykarsinta tarkoittaa puiden oksien poistamista rungosta.<br><br>Stamkvistning är borttagning av grenar från trädstammen.<br><br>Pruning is the removal of branches from tree stems." },

{ fi: "runkovaurio", sv: "stamskada", en: "stem damage", desc: "Runkovaurio on puun rungon vaurio, joka voi heikentää puuta.<br><br>Stamskada är skada på trädets stam.<br><br>Stem damage is injury to the trunk of a tree." },

{ fi: "runkopuu", sv: "stamvirke", en: "stem wood", desc: "Runkopuu on puun rungosta saatavaa käyttöpuuta.<br><br>Stamvirke är virke från trädets stam.<br><br>Stem wood is timber derived from the trunk of a tree." },

{ fi: "saraturve", sv: "starrtorv", en: "sedge peat", desc: "Saraturve on suotyyppi, jossa vallitsevat sarakasvit.<br><br>Starrtorv är torv dominerad av starrväxter.<br><br>Sedge peat is peat dominated by sedge plants." },

{ fi: "ylispuukasvatus", sv: "stegvis avveckling av överståndare", en: "gradual removal of overstory trees", desc: "Ylispuukasvatus tarkoittaa metsän uudistamista vähitellen poistamalla ylispuita.<br><br>Stegvis avveckling av överståndare innebär gradvis borttagning av skyddsträd.<br><br>Gradual removal of overstory trees is a regeneration method where canopy trees are removed step by step." },

{ fi: "kivikko", sv: "stenbunden mark", en: "stony ground", desc: "Kivikko on alue, jossa on runsaasti kiviä.<br><br>Stenbunden mark är mark med mycket sten.<br><br>Stony ground refers to land with many stones." },

{ fi: "kiviaita", sv: "stengärdsgård", en: "stone fence", desc: "Kiviaita on kivistä rakennettu aita.<br><br>Stengärdsgård är ett stängsel byggt av sten.<br><br>Stone fence is a fence made of stones." },

 { fi: "kiviröykkiö", sv: "stenrös", en: "cairn", desc: "Kiviröykkiö on ihmisen tekemä kivikasa, joka on usein syntynyt pellonraivauksen yhteydessä tai toimii maamerkkinä.<br><br>Ett stenrös är en av människor upplagd stenhög, ofta från röjning av åkermark eller som ett gränsmärke.<br><br>A cairn is a human-made pile of stones, often created during field clearance or serving as a landmark." },
 
{ fi: "herkkutatti", sv: "stensopp", en: "porcini mushroom", desc: "Herkkutatti on arvostettu ja erittäin maukas ruokasieni, joka tunnetaan myös kivitattina.<br><br>Stensopp är en uppskattad och mycket välsmakande matsvamp, även kallad karljohansvamp.<br><br>Porcini mushroom is a highly prized and delicious edible mushroom, also known as cep or king bolete." },

{ fi: "tukkipuu", sv: "stock", en: "sawlog", desc: "Tukkipuu on kaadettu ja karsittu puunrunko, joka täyttää sahateollisuuden laatu- ja mittavaatimukset.<br><br>Stock är en avkvistad och kapad trädstam som uppfyller sågverkets kvalitets- och dimensionskrav.<br><br>A sawlog is a felled and delimbed tree trunk that meets the quality and size requirements of the sawmill industry." },
  
{ fi: "tukkipuukoko", sv: "stockdimension", en: "sawlog dimension", desc: "Tukkipuukoko tarkoittaa tukin mittoja, kuten pituutta ja läpimittaa.<br><br>Stockdimension avser en stocks mått, såsom längd och diameter.<br><br>Sawlog dimension refers to the measurements of a log, such as its length and diameter." },
  
{ fi: "tukkikertymä", sv: "stockuttag", en: "sawlog yield", desc: "Tukkikertymä on hakkuissa kertynyt tukkien määrä tai tilavuus.<br><br>Stockuttag är den mängd stock som tas ut vid avverkning.<br><br>Sawlog yield is the quantity or volume of sawlogs harvested from a stand or cutting area." },
  
{ fi: "suursaniaiset", sv: "stora ormbunkar", en: "large ferns", desc: "Suursaniaiset ovat suurikokoisia saniaislajeja, joiden lehdet voivat kasvaa useita metrejä pitkiksi.<br><br>Stora ormbunkar är ormbunksarter som kan bli mycket stora, med blad som kan bli flera meter långa.<br><br>Large ferns are fern species that grow to a considerable size, with fronds that can reach several meters in length." },
  
{ fi: "myrskytuho", sv: "stormskada", en: "storm damage", desc: "Myrskytuho on myrskyn aiheuttama vahinko, kuten puiden kaatumista tai rakenteiden vaurioitumista.<br><br>Stormskada är en skada orsakad av storm, som t.ex. kullfallna träd eller skadade byggnader.<br><br>Storm damage refers to harm caused by a storm, such as fallen trees or damaged structures." },
  
{ fi: "myrskytuuli", sv: "stormvind", en: "storm wind", desc: "Myrskytuuli on erittäin voimakas tuuli, joka voi aiheuttaa tuhoa.<br><br>Stormvind är en mycket stark vind som kan orsaka skador.<br><br>A storm wind is a very strong wind that can cause damage." },
  
{ fi: "rantakaista", sv: "strandkappa", en: "shoreline buffer strip", desc: "Rantakaista on vesistön varteen jätettävä puustoinen suojavyöhyke hakkuissa.<br><br>Strandkappa är en trädbevuxen skyddszon som lämnas kvar längs stränder vid avverkning.<br><br>A shoreline buffer strip is a wooded protection zone left along water bodies during logging." },
  
{ fi: "rantametsä", sv: "strandskog", en: "riparian forest", desc: "Rantametsä on vesistön välittömässä läheisyydessä kasvava metsä.<br><br>Strandskog är skog som växer omedelbart intill vattendrag eller sjöar.<br><br>Riparian forest is forest growing immediately adjacent to a watercourse or lake." },
  
{ fi: "kotkansiipi", sv: "strutbräken", en: "ostrich fern", desc: "Kotkansiipi on suuri saniainen, jonka lehdet muodostavat suppilon muotoisen ruusukkeen.<br><br>Strutbräken är en stor ormbunke vars blad bildar en trattformad rosett.<br><br>Ostrich fern is a large fern whose fronds form a vase-shaped rosette." },
  
{ fi: "säteilypakote", sv: "strålningsdrivning", en: "radiative forcing", desc: "Säteilypakote kuvaa maapallon ilmastojärjestelmään tulevan ja sieltä poistuvan säteilyn epätasapainon aiheuttamaa lämmitys- tai viilennysvaikutusta.<br><br>Strålningsdrivning beskriver den uppvärmande eller avkylande effekten av en obalans mellan inkommande och utgående strålning i jordens klimatsystem.<br><br>Radiative forcing describes the warming or cooling effect caused by an imbalance between incoming and outgoing radiation in Earth's climate system." },
  
{ fi: "keidasräme", sv: "strängmyr", en: "string bog", desc: "Keidasräme on kohosuotyyppi, jossa vuorottelevat märät rimmet ja kuivemmat jänteet eli kermit.<br><br>Strängmyr är en typ av högmosse där blöta höljor och torrare strängar avlöser varandra.<br><br>A string bog is a type of raised bog characterized by alternating wet hollows (flarks) and drier ridges (strings)." },
  
{ fi: "kantoläpimitta", sv: "stubbdiameter", en: "stump diameter", desc: "Kantoläpimitta on puun katkaisukohdan läpimitta juurenkaulasta tai kaatokorkeudelta mitattuna.<br><br>Stubbdiameter är diametern på stubben vid kapstället, mätt vid rotbenet eller fällhöjd.<br><br>Stump diameter is the diameter of a tree stump at the cutting point, measured at the root collar or felling height." },
  
{ fi: "kanto", sv: "stubbe", en: "stump", desc: "Kanto on puun maahan jäävä osa rungon katkaisun jälkeen.<br><br>Stubbe är den del av trädstammen som blir kvar i marken efter avverkning.<br><br>A stump is the remaining part of a tree trunk left in the ground after felling." },
  
{ fi: "kantokäsittely", sv: "stubbehandling", en: "stump treatment", desc: "Kantokäsittely on toimenpide, jolla estetään kantojen kautta leviäviä sienitauteja, kuten juurikääpää.<br><br>Stubbehandling är en åtgärd för att förhindra spridning av svampsjukdomar, som rotticka, via stubbar.<br><br>Stump treatment is a measure to prevent the spread of fungal diseases, such as root rot, through stumps." },
  
{ fi: "kannonnosto", sv: "stubbrytning", en: "stump extraction", desc: "Kannonnosto on kantojen poistamista maasta esimerkiksi pellonraivauksen tai energiakäytön vuoksi.<br><br>Stubbrytning innebär att stubbar avlägsnas ur marken, t.ex. vid markberedning eller för energiändamål.<br><br>Stump extraction is the removal of stumps from the ground, e.g., for land clearing or energy use." },
  
{ fi: "kantojen korjuu", sv: "stubbrytning", en: "stump harvesting", desc: "Kantojen korjuu on kantojen talteenottoa metsästä energiakäyttöä varten.<br><br>Stubbrytning (stubbskörd) är insamling av stubbar från skogen för energiproduktion.<br><br>Stump harvesting is the collection of stumps from the forest for energy production." },
  
{ fi: "kantovesa", sv: "stubbskott", en: "stump sprout", desc: "Kantovesa on kannosta kasvava uusi verso, joka syntyy katkaisun jälkeen.<br><br>Stubbskott är ett nytt skott som växer ur en stubbe efter avverkning.<br><br>A stump sprout is a new shoot growing from a stump after cutting." },
  
{ fi: "kantopuu", sv: "stubbved", en: "stump wood", desc: "Kantopuu on kannon sisältämä puuaines, jota voidaan hyödyntää esimerkiksi energiana.<br><br>Stubbved är vedmaterialet i en stubbe, som kan användas t.ex. som biobränsle.<br><br>Stump wood is the wood material contained in a stump, usable for example as biofuel." },
  
{ fi: "jyrkänne", sv: "stup", en: "cliff", desc: "Jyrkänne on hyvin jyrkkä, lähes pystysuora kallioseinämä tai rinne.<br><br>Stup är en mycket brant, nästan lodrät bergvägg eller sluttning.<br><br>A cliff is a very steep, almost vertical rock face or slope." },
  
{ fi: "kasvupaikka", sv: "ståndort", en: "forest site", desc: "Kasvupaikka on maantieteellinen alue ja sen ympäristöolot, jotka vaikuttavat kasvillisuuden kehitykseen.<br><br>Ståndort är den geografiska plats och de miljöförhållanden som påverkar vegetationens utveckling.<br><br>A forest site is a geographical location and its environmental conditions that affect vegetation development." },
  
{ fi: "kasvupaikan viljavuus", sv: "ståndortens bördighet", en: "site fertility", desc: "Kasvupaikan viljavuus kuvaa maaperän kykyä tuottaa kasvibiomassaa, usein ravinteiden ja vesitalouden perusteella.<br><br>Ståndortens bördighet beskriver markens förmåga att producera växtbiomassa, ofta baserat på närings- och vattenförhållanden.<br><br>Site fertility describes the soil's ability to produce plant biomass, often based on nutrient and water conditions." },
  
{ fi: "kasvupaikan puuntuotoskyky", sv: "ståndortens produktionsförmåga", en: "site productivity", desc: "Kasvupaikan puuntuotoskyky tarkoittaa metsikön puuston kasvun määrää tietyllä ajanjaksolla.<br><br>Ståndortens produktionsförmåga avser skogens tillväxt av virke under en viss tidsperiod.<br><br>Site productivity refers to the amount of wood growth produced by a forest stand over a certain period." },
  
{ fi: "kasvupaikkaluokitus", sv: "ståndortsklassificering", en: "site classification", desc: "Kasvupaikkaluokitus on järjestelmä metsämaiden jaotteluun niiden kasvukyvyn ja kasvillisuuden perusteella.<br><br>Ståndortsklassificering är ett system för att dela in skogsmark utifrån dess produktionsförmåga och vegetation.<br><br>Site classification is a system for categorizing forest land based on its growth capacity and vegetation." },
  
{ fi: "kasvupaikkavaatimukset", sv: "ståndortskraven", en: "site requirements", desc: "Kasvupaikkavaatimukset tarkoittavat kasvilajin tarvitsemia maaperä-, valo- ja ilmasto-olosuhteita menestyäkseen.<br><br>Ståndortskraven avser de mark-, ljus- och klimatförhållanden en växtart behöver för att trivas.<br><br>Site requirements refer to the soil, light, and climatic conditions a plant species needs to thrive." },
  
{ fi: "kasvupaikkatyyppi", sv: "ståndortstyp", en: "site type", desc: "Kasvupaikkatyyppi on luokitteluyksikkö, joka kuvaa metsäalueen kasvuoloja aluskasvillisuuden ja maaperän perusteella.<br><br>Ståndortstyp är en klassificeringsenhet som beskriver ett skogsområdes växtbetingelser baserat på undervegetation och mark.<br><br>A site type is a classification unit that describes the growing conditions of a forest area based on understory vegetation and soil." },
  
    { fi: "leimausraja", sv: "stämplingsgräns", en: "marking boundary", desc: "Leimausraja on raja, johon asti puut leimataan hakattavaksi metsässä.<br><br>Stämplingsgräns är den gräns inom vilken träd stämplas för avverkning i skogen.<br><br>The marking boundary is the limit within which trees are marked for felling in the forest." },
  
{ fi: "leimikko", sv: "stämplingspost", en: "marked stand", desc: "Leimikko on metsäkuvio tai puuryhmä, jonka puut on leimattu hakattavaksi.<br><br>Stämplingspost är ett skogsbestånd där träden stämplats för avverkning.<br><br>A marked stand is a forest compartment where the trees have been marked for felling." },
  
{ fi: "ylläpitopalvelut", sv: "stödjande tjänster", en: "supporting services", desc: "Ylläpitopalvelut ovat ekosysteemipalveluja, jotka ylläpitävät muiden palvelujen tuotantoa, kuten ravinteiden kierto ja maaperän muodostus.<br><br>Stödjande tjänster är ekosystemtjänster som upprätthåller produktionen av andra tjänster, såsom näringscykler och jordmånsbildning.<br><br>Supporting services are ecosystem services that maintain the production of other services, such as nutrient cycling and soil formation." },
  
{ fi: "pystynävertäjä", sv: "större märgborre", en: "common pine shoot beetle", desc: "Pystynävertäjä on mäntyjä vahingoittava kaarnakuoriainen, jonka toukat kaivavat käytäviä rungon kuoren alle.<br><br>Större märgborre är en barkborre som skadar tallar genom att larverna gnager gångar under barken.<br><br>The common pine shoot beetle is a bark beetle that damages pines by boring galleries under the bark." },
  
{ fi: "sulfaattimaa", sv: "sulfatjord", en: "acid sulfate soil", desc: "Sulfaattimaa on maaperää, joka sisältää rautasulfideja ja happamoituu voimakkaasti kuivuessaan.<br><br>Sulfatjord är jord som innehåller järnsulfider och blir starkt sur vid torka.<br><br>Acid sulfate soil is soil containing iron sulfides that becomes highly acidic when drained and oxidized." },
  
{ fi: "happamuus", sv: "surhet", en: "acidity", desc: "Happamuus kuvaa aineen tai liuoksen pH-arvoa, eli vetyionien pitoisuutta.<br><br>Surhet beskriver ett ämnes pH-värde, det vill säga koncentrationen av vätejoner.<br><br>Acidity describes the pH value of a substance or solution, i.e., the concentration of hydrogen ions." },
  
{ fi: "sieni", sv: "svamp", en: "fungus", desc: "Sieni on eliö, joka kuuluu sienten kuntaan ja voi olla yksisoluinen tai monisoluinen, kuten hiivat, homeet ja sienet.<br><br>Svamp är en organism som tillhör svamparna och kan vara encelliga eller flercelliga, som jäst, mögel och svampar.<br><br>A fungus is an organism belonging to the kingdom Fungi, which can be unicellular or multicellular, such as yeasts, molds, and mushrooms." },
  
{ fi: "sienestys", sv: "svampplockning", en: "mushroom picking", desc: "Sienestys on luonnonvaraisten ruokasienten keräämistä metsistä.<br><br>Svampplockning är insamling av vilda matsvampar i skogen.<br><br>Mushroom picking is the gathering of wild edible mushrooms from forests." },
{ fi: "sienitauti", sv: "svampsjukdom", en: "fungal disease", desc: "Sienitauti on sienen aiheuttama kasvitauti, kuten ruoste, härmä tai laho.<br><br>Svampsjukdom är en växtsjukdom orsakad av svampar, som rost, mjöldagg eller röta.<br><br>A fungal disease is a plant disease caused by fungi, such as rust, mildew, or rot." },
{ fi: "sienisato", sv: "svampskörd", en: "mushroom yield", desc: "Sienisato on tiettynä vuonna kerättävien sienten määrä.<br><br>Svampskörd är mängden svamp som kan plockas under ett visst år.<br><br>Mushroom yield is the amount of mushrooms that can be harvested in a given year." },
  
{ fi: "kaskitalous", sv: "svedjebruk", en: "slash-and-burn agriculture", desc: "Kaskitalous on perinteinen viljelymenetelmä, jossa metsä poltetaan ja tuhka lannoittaa maata.<br><br>Svedjebruk är en traditionell odlingsmetod där skog bränns och askan gödslar marken.<br><br>Slash-and-burn agriculture is a traditional farming method where forest is burned and the ash fertilizes the soil." },
  
{ fi: "tulvametsä", sv: "svämskog", en: "floodplain forest", desc: "Tulvametsä on alavaa metsää jokien tai järvien rannoilla, joka on säännöllisesti tulvien peitossa.<br><br>Svämskog är låglänt skog längs floder eller sjöar som periodvis översvämmas.<br><br>A floodplain forest is low-lying forest along rivers or lakes that is periodically inundated by floods." },
  
{ fi: "kylvö", sv: "sådd", en: "sowing", desc: "Kylvö on siementen kylvämistä maahan kasvien lisäämiseksi.<br><br>Sådd är utsådd av frön i marken för växtförökning.<br><br>Sowing is the planting of seeds in the soil for plant propagation." },
  
{ fi: "kylvökohta", sv: "såddpunkt", en: "sowing spot", desc: "Kylvökohta on tarkka paikka, johon siemen tai siemenet kylvetään.<br><br>Såddpunkt är den exakta plats där frön sås.<br><br>A sowing spot is the specific location where seed(s) are sown." },
  
{ fi: "kylvötupas", sv: "såddrugge", en: "seedling clump", desc: "Kylvötupas on pieni taimi­ryhmä, joka syntyy kun useita siemeniä kylvetään samaan paikkaan.<br><br>Såddrugge är en liten grupp plantor som uppstår när flera frön sås på samma plats.<br><br>A seedling clump is a small group of seedlings that emerges when several seeds are sown in the same spot." },
  
{ fi: "kylvöala", sv: "såddyta", en: "sowing area", desc: "Kylvöala on se metsämaan osa, jolle siemenet kylvetään.<br><br>Såddyta är den del av skogsmarken där frön sås.<br><br>Sowing area is the part of forest land where seeds are sown." },
  
{ fi: "sahapuu", sv: "sågtimmer", en: "sawlog", desc: "Sahapuu on puutavaraa, joka täyttää sahauksen laatuvaatimukset, sama kuin tukkipuu.<br><br>Sågtimmer är virke som uppfyller sågverkens kvalitetskrav, synonymt med stock.<br><br>Sawlog is timber that meets the quality requirements for sawing, synonymous with sawlog." },
  
{ fi: "vaarantunut laji", sv: "sårbar art", en: "vulnerable species", desc: "Vaarantunut laji on laji, joka on luokiteltu suureksi riskiksi kuolla sukupuuttoon luonnossa.<br><br>Sårbar art är en art som bedöms löpa hög risk att dö ut i naturen.<br><br>A vulnerable species is a species classified as facing a high risk of extinction in the wild." },
  
{ fi: "kylvöaika", sv: "såtid", en: "sowing time", desc: "Kylvöaika on optimaalinen ajankohta siementen kylvämiselle.<br><br>Såtid är den optimala tidpunkten för sådd av frön.<br><br>Sowing time is the optimal period for sowing seeds." },
  
{ fi: "raita", sv: "sälg", en: "goat willow", desc: "Raita on yleinen lehtipuu, joka kasvaa kosteilla paikoilla ja tuottaa pajunkissoja.<br><br>Sälg är ett vanligt lövträd som växer på fuktiga marker och ger videkissar.<br><br>Goat willow is a common deciduous tree that grows in moist places and produces catkins." },
  
{ fi: "harvinainen laji", sv: "sällsynt art", en: "rare species", desc: "Harvinainen laji on laji, jota esiintyy vain vähän tai rajoitetulla alueella.<br><br>Sällsynt art är en art som förekommer i begränsad mängd eller inom ett begränsat område.<br><br>A rare species is a species that occurs in small numbers or in a restricted area." },
  
{ fi: "erityisen tärkeä elinympäristö", sv: "särskilt viktig livsmiljö", en: "particularly important habitat", desc: "Erityisen tärkeä elinympäristö on metsälain suojelema kohde, kuten pähkinäpensaslehto tai tervaleppäkorpi.<br><br>Särskilt viktig livsmiljö är enligt skogslagen en skyddad miljö, såsom hassellund eller klibbalskärr.<br><br>A particularly important habitat is a site protected under the Forest Act, such as a hazel grove or a black alder swamp." },
  
{ fi: "mänty", sv: "tall", en: "Scots pine", desc: "Mänty on Suomen yleisin havupuu, jolla on pitkät neulaset ja kaarna rungon alaosassa.<br><br>Tall är Finlands vanligaste barrträd, med långa barr och skorpbark på nedre delen av stammen.<br><br>Scots pine is Finland's most common conifer, with long needles and rough bark on the lower trunk." },
  
{ fi: "männikkö", sv: "tallbestånd", en: "pine stand", desc: "Männikkö on metsikkö, jossa valtapuulajina on mänty.<br><br>Tallbestånd är ett skogsbestånd där tall är det dominerande trädslaget.<br><br>A pine stand is a forest stand where pine is the dominant tree species." },
  
{ fi: "versosurma", sv: "tallens knopp- och grentorka", en: "pine shoot dieback", desc: "Versosurma on sienitauti, joka aiheuttaa männyn versojen ja silmujen kuolemista.<br><br>Tallens knopp- och grentorka är en svampsjukdom som orsakar att tallskott och knoppar dör.<br><br>Pine shoot dieback is a fungal disease that causes the death of pine shoots and buds." },
  
   { fi: "tyvitervastauti", sv: "tallens rotröta", en: "pine root rot", desc: "Tyvitervastauti on männynjuurikäävän aiheuttama sienitauti, joka lahottavaa puun juuristoa ja tyveä.<br><br>Tallens rotröta är en svampsjukdom orsakad av rotticka som rötar tallens rotsystem och stamved.<br><br>Pine root rot is a fungal disease caused by Heterobasidion annosum that decays the roots and stem base of pine trees." },
  
{ fi: "männynjuurikääpä", sv: "tallens rotticka", en: "pine root fungus", desc: "Männynjuurikääpä on lahottajasieni, joka aiheuttaa tyvitervastautia ja leviää itiöinä tai juuriyhteyksien kautta.<br><br>Tallens rotticka är en rötsvamp som orsakar rotröta och sprids via sporer eller rotkontakter.<br><br>Pine root fungus (Heterobasidion annosum) causes root rot, spreading via spores or root contacts." },
  
{ fi: "mäntymittari", sv: "tallmätare", en: "pine looper moth", desc: "Mäntymittari on perhonen, jonka toukat syövät männyn neulasia ja voivat aiheuttaa laajoja tuhoja.<br><br>Tallmätare är en fjäril vars larver äter tallbarr och kan orsaka omfattande skador.<br><br>The pine looper moth is a moth whose larvae feed on pine needles, potentially causing extensive damage." },
  
{ fi: "mäntypistiäinen", sv: "tallstekel", en: "pine sawfly", desc: "Mäntypistiäinen on hyönteinen, jonka toukat syövät männyn neulasia.<br><br>Tallstekel är en insekt vars larver äter tallbarr.<br><br>The pine sawfly is an insect whose larvae feed on pine needles." },
  
{ fi: "mäntytukki", sv: "tallstock", en: "pine sawlog", desc: "Mäntytukki on männystä valmistettu tukkipuu, jota käytetään sahateollisuudessa.<br><br>Tallstock är en stock av tallvirke som används i sågverksindustrin.<br><br>A pine sawlog is a log made from pine timber used in the sawmill industry." },
  
{ fi: "mäntyankeroinen", sv: "tallvedsnematod", en: "pine wood nematode", desc: "Mäntyankeroinen on vaarallinen tuholainen, joka aiheuttaa mäntyjen nopeaa kuihtumista.<br><br>Tallvedsnematod är en farlig skadegörare som orsakar snabb vissnesjuka hos tall.<br><br>The pine wood nematode is a dangerous pest causing rapid wilt disease in pine trees." },
  
{ fi: "mäntypuutavara", sv: "tallvirke", en: "pine timber", desc: "Mäntypuutavara on männystä sahattua tai muuten jalostettua puutavaraa.<br><br>Tallvirke är sågat eller bearbetat virke av tall.<br><br>Pine timber is sawn or processed wood from pine." },
  
{ fi: "sarkaoja", sv: "tegdike", en: "strip drain", desc: "Sarkaoja on ojitusalueella kahden saran välinen oja, joka johtaa veden valtaojaan.<br><br>Tegdike är ett dike mellan två tegar i ett utdikat område, som leder vatten till huvudfåran.<br><br>A strip drain is a ditch between two cultivated strips in a drained area, leading water to the main ditch." },
  
{ fi: "kaistalehakkuu", sv: "teghuggning", en: "strip cutting", desc: "Kaistalehakkuu on hakkuumenetelmä, jossa metsä hakataan kapeina kaistoina.<br><br>Teghuggning är en avverkningsmetod där skogen avverkas i smala band.<br><br>Strip cutting is a felling method where the forest is harvested in narrow strips." },
  
{ fi: "maaston kaltevuus", sv: "terrängens lutning", en: "terrain slope", desc: "Maaston kaltevuus ilmoitetaan usein prosentteina tai asteina ja se vaikuttaa mm. koneiden käyttöön.<br><br>Terrängens lutning anges ofta i procent eller grader och påverkar maskinernas framkomlighet.<br><br>Terrain slope is often expressed in percent or degrees and affects machine operability." },
  
{ fi: "kääpä", sv: "ticka", en: "bracket fungus", desc: "Kääpä on lahottajasieni, jonka itiöemä kasvaa usein puun rungolla hyllymäisenä.<br><br>Ticka är en rötsvamp vars fruktkropp ofta växer som en hylla på trädstammar.<br><br>A bracket fungus is a decay fungus whose fruiting body often forms shelf-like growths on tree trunks." },
  
{ fi: "määräaikainen suojelualue", sv: "tidsbundet skydd", en: "fixed-term protection area", desc: "Määräaikainen suojelualue on määräajaksi perustettu luonnonsuojelualue.<br><br>Tidsbundet skydd är ett naturskyddsområde som inrättats för en bestämd tidsperiod.<br><br>A fixed-term protection area is a nature conservation area established for a limited period." },
  
{ fi: "ravinteisuus", sv: "tillgång på näring", en: "nutrient status", desc: "Ravinteisuus kuvaa kasvupaikan ravinteiden saatavuutta, mikä vaikuttaa kasvillisuuden koostumukseen.<br><br>Tillgång på näring beskriver förekomsten av växtnäringsämnen på ståndorten och påverkar vegetationens sammansättning.<br><br>Nutrient status describes the availability of nutrients at a site, influencing the vegetation composition." },
  
{ fi: "maisematyölupa", sv: "tillstånd för miljöåtgärder", en: "landscape work permit", desc: "Maisematyölupa on viranomaisen myöntämä lupa toimenpiteelle, joka vaikuttaa maisemaan.<br><br>Tillstånd för miljöåtgärder är ett myndighetstillstånd för åtgärder som påverkar landskapet.<br><br>A landscape work permit is an official permit for activities that affect the landscape." },
  
{ fi: "kasvuominaisuudet", sv: "tillväxtegenskaper", en: "growth characteristics", desc: "Kasvuominaisuudet kuvaavat puun tai metsikön kasvunopeutta ja -tapaa.<br><br>Tillväxtegenskaper beskriver ett träds eller bestånds tillväxttakt och -sätt.<br><br>Growth characteristics describe the growth rate and pattern of a tree or stand." },
  
{ fi: "kasvureaktio", sv: "tillväxtreaktion", en: "growth response", desc: "Kasvureaktio tarkoittaa puun kasvussa tapahtuvaa muutosta esim. harvennuksen tai lannoituksen seurauksena.<br><br>Tillväxtreaktion är förändringen i trädets tillväxt till följd av t.ex. gallring eller gödsling.<br><br>Growth response refers to the change in tree growth following e.g. thinning or fertilization." },
  
{ fi: "kasvurytmi", sv: "tillväxtrytm", en: "growth rhythm", desc: "Kasvurytmi kuvaa puun kasvun vuodenaikaista vaihtelua.<br><br>Tillväxtrytm beskriver den årstidsberoende variationen i trädets tillväxt.<br><br>Growth rhythm describes the seasonal variation in tree growth." },
  
{ fi: "kasvuhäiriö", sv: "tillväxtstörning", en: "growth disorder", desc: "Kasvuhäiriö on poikkeavuus puun normaalista kasvusta, esim. ulkoisen vaurion tai taudin aiheuttama.<br><br>Tillväxtstörning är en avvikelse från trädets normala tillväxt, orsakad av t.ex. yttre skada eller sjukdom.<br><br>A growth disorder is a deviation from normal tree growth, caused e.g. by external damage or disease." },
  
{ fi: "kasvunlisäys", sv: "tillväxtökning", en: "growth increment", desc: "Kasvunlisäys on puun tai metsikön tilavuuden tai pituuden kasvu tiettynä ajanjaksona.<br><br>Tillväxtökning är den volym- eller längdökning ett träd eller bestånd har under en viss period.<br><br>Growth increment is the increase in volume or height of a tree or stand over a given period." },
  
{ fi: "metso", sv: "tjäder", en: "capercaillie", desc: "Metso on suurikokoinen metsäkanalintu, joka elää havumetsissä.<br><br>Tjäder är en stor skogshönsfågel som lever i barrskogar.<br><br>The capercaillie is a large forest grouse living in coniferous forests." },
  
{ fi: "routa", sv: "tjäle", en: "ground frost", desc: "Routa on maan jäätymistä pakkasella, mikä vaikeuttaa maansiirto- ja hakkuutöitä.<br><br>Tjäle är markens frysning vid kyla, vilket försvårar schaktning och avverkning.<br><br>Ground frost is the freezing of soil, which complicates earthmoving and logging operations." },
  
{ fi: "tervahauta", sv: "tjärdal", en: "tar pit", desc: "Tervahauta on historiallinen polttomenetelmällä tervan tuottamiseen käytetty kuoppa.<br><br>Tjärdal är en historisk grop som användes för att framställa trätjära genom pyrolys.<br><br>A tar pit is a historical pit used for producing wood tar by pyrolysis." },
  
{ fi: "lampi", sv: "tjärn", en: "tarn", desc: "Lampi on pieni järvi, usein metsän ympäröimä.<br><br>Tjärn är en liten skogssjö.<br><br>A tarn is a small lake, often surrounded by forest." },
  
{ fi: "latva", sv: "topp", en: "tree top", desc: "Latva on puun ylin osa, josta runko päättyy ja jossa latvus kasvaa.<br><br>Topp är den översta delen av trädet där stammen slutar och kronan breder ut sig.<br><br>The tree top is the uppermost part of the tree where the trunk ends and the crown grows." },

  { fi: "latvakasvain", sv: "toppskott", en: "leader shoot", desc: "Latvakasvain on puun latvan uusin pituuskasvuverson osa.<br><br>Toppskottet är den nyaste delen av trädets höjdtillväxtskott.<br><br>The leader shoot is the newest terminal shoot of a tree that contributes to height growth." },
      
  { fi: "kuivahko kangas", sv: "torr mo", en: "sub-dry heath forest", desc: "Kuivahko kangas on metsätyyppi, jossa maaperä on melko kuivaa ja varpukasvillisuus on tyypillistä.<br><br>Torr mo är en skogstyp med ganska torr mark och typisk risvegetation.<br><br>The sub-dry heath forest is a forest site type with fairly dry soil and characteristic dwarf shrub vegetation." },
      
  { fi: "pystypuu", sv: "torraka", en: "standing dead tree", desc: "Pystypuu on pystyyn kuollut puu, joka on tärkeä elinympäristö monille lajeille.<br><br>Torraka är ett stående dött träd som utgör en viktig livsmiljö för många arter.<br><br>A standing dead tree is a tree that has died upright and provides important habitat for many species." },
      
  { fi: "puuturve", sv: "torv med trädrester", en: "wood peat", desc: "Puuturve on turvelaji, joka sisältää runsaasti puun jäänteitä ja on maatuneisuudeltaan keskinkertaista.<br><br>Torv med trädrester är en torvtyp som innehåller rikligt med vedrester och har måttlig förmultningsgrad.<br><br>Wood peat is a peat type containing abundant wood remains and having moderate decomposition." },
      
  { fi: "turvelaji", sv: "torvart", en: "peat type", desc: "Turvelaji luokittelee turpeen sen kasviaineksen perusteella, esimerkiksi rahkaturve tai saraturve.<br><br>Torvart klassificerar torv utgående från det växtmaterial den består av, till exempel vitmosstorv eller starrtorv.<br><br>Peat type classifies peat based on its botanical composition, e.g. sphagnum peat or sedge peat." },
      
  { fi: "turvekerros", sv: "torvlager", en: "peat layer", desc: "Turvekerros on maaperän orgaanisen aineksen kerrostuma, joka on muodostunut osittain hajonneesta kasvimateriaalista.<br><br>Torvlagret är ett markskikt av organiskt material som bildats av delvis nedbrutna växtdelar.<br><br>The peat layer is a soil stratum of organic material formed from partially decomposed plant matter." },
      
  { fi: "suo", sv: "torvmark", en: "mire", desc: "Suo on kosteikkoekosysteemi, jossa turpeen muodostuminen on mahdollista veden kyllästämässä maaperässä.<br><br>Torvmark är ett våtmarksekosystem där torvbildning kan ske i vattenmättad mark.<br><br>A mire is a wetland ecosystem where peat formation is possible in water-saturated soil." },
      
  { fi: "turvemaa", sv: "torvmark", en: "peatland", desc: "Turvemaa on maa-aluetta, jossa on turvekerros, ja jota käytetään usein maa- tai metsätalouteen.<br><br>Torvmark är ett markområde med torvlager, ofta använt för jord- eller skogsbruk.<br><br>Peatland is an area with a peat layer, often used for agriculture or forestry." },
      
  { fi: "harvapuustoinen suo", sv: "torvmark med mycket glest trädbestånd", en: "sparsely wooded mire", desc: "Harvapuustoinen suo on suo, jolla kasvaa hyvin vähän puita.<br><br>Torvmark med mycket glest trädbestånd är en myr med mycket få träd.<br><br>A sparsely wooded mire is a mire with very few trees." },
      
  { fi: "suonpohja", sv: "torvmarkens botten efter torvbrytning", en: "cutover peatland", desc: "Suonpohja on turpeennoston jäljiltä paljastunut pohjamaa.<br><br>Torvmarkens botten efter torvbrytning är den blottlagda mineraljorden efter torvtäkt.<br><br>The cutover peatland is the exposed subsoil left after peat extraction." },
      
  { fi: "suoelinympäristö", sv: "torvmarksmiljö", en: "mire habitat", desc: "Suoelinympäristö on suon muodostama elinympäristö sen ominaispiirteineen.<br><br>Torvmarksmiljö är den livsmiljö som utgörs av en myr med dess karakteristiska egenskaper.<br><br>The mire habitat is the environment formed by a mire with its characteristic features." },
      
  { fi: "suometsä", sv: "torvmarksskog", en: "peatland forest", desc: "Suometsä on turvemaalla kasvava metsä, jonka vesitaloutta usein säännellään ojituksella.<br><br>Torvmarksskog är skog som växer på torvmark, ofta med reglerad vattenhushållning genom dikning.<br><br>Peatland forest is forest growing on peatland, often with water management through ditching." },
      
  { fi: "suotyyppi", sv: "torvmarkstyp", en: "mire type", desc: "Suotyyppi luokittelee suot niiden kasvillisuuden, vesitalouden ja turvekerroksen perusteella.<br><br>Torvmarkstyp klassificerar myrar efter vegetation, vattenförhållanden och torvlager.<br><br>Mire type classifies mires based on their vegetation, hydrology, and peat layer." },
      
  { fi: "suokasvillisuus", sv: "torvmarksväxter", en: "mire vegetation", desc: "Suokasvillisuus on suolla esiintyviä kasvilajeja ja -yhdyskuntia.<br><br>Torvmarksväxter är de växtarter och -samhällen som förekommer på myren.<br><br>Mire vegetation refers to the plant species and communities occurring on a mire." },
      
  { fi: "turvekangastyyppi", sv: "torvmotyp", en: "peatland forest site type", desc: "Turvekangastyyppi on ojitettujen soiden luokittelujärjestelmä metsätaloudellisen tuottokyvyn mukaan.<br><br>Torvmotyp är ett klassificeringssystem för dikade myrar baserat på skoglig produktionsförmåga.<br><br>The peatland forest site type is a classification system for drained mires based on forest productivity." },
      
  { fi: "turpeennostopaikka", sv: "torvtäkt", en: "peat extraction site", desc: "Turpeennostopaikka on alue, jolla harjoitetaan turpeen teollista nostoa.<br><br>Torvtäkt är ett område där industriell torvbrytning bedrivs.<br><br>A peat extraction site is an area where industrial peat harvesting takes place." },
      
  { fi: "turvemaapelto", sv: "torvåker", en: "peatland field", desc: "Turvemaapelto on turvemaalle raivattu viljelyalue.<br><br>Torvåker är ett odlingsområde på torvmark.<br><br>A peatland field is an agricultural area cleared on peat soil." },
      
  { fi: "kokonaiskasvu", sv: "total tillväxt", en: "total increment", desc: "Kokonaiskasvu on puuston koko kasvukauden tai määräajan aikana tuottama biomassa tai tilavuus.<br><br>Total tillväxt är den biomassa eller volym som trädskiktet producerar under hela vegetationsperioden eller en given tidsrymd.<br><br>Total increment is the biomass or volume produced by the stand over the entire growing season or a specified period." },
      
  { fi: "kokonaistuotos", sv: "total virkesproduktion", en: "total yield", desc: "Kokonaistuotos on koko kiertoajan tai tarkastelujakson aikana kertynyt puumäärä.<br><br>Total virkesproduktion är den totala virkesmängd som ackumulerats under hela omloppstiden eller betraktade perioden.<br><br>Total yield is the total wood volume accumulated over the entire rotation or studied period." },
      
  { fi: "karpalo", sv: "tranbär", en: "cranberry", desc: "Karpalo on suolla kasvava matalakasvuinen varpu, jonka marjat ovat happamia ja C-vitamiinipitoisia.<br><br>Tranbär är en lågväxande risväxt på myrar, med syrliga, C-vitaminrika bär.<br><br>Cranberry is a low-growing dwarf shrub on mires, producing sour berries rich in vitamin C." },
      
  { fi: "pino", sv: "trave", en: "pile (of wood)", desc: "Pino on puutavaran mittaus- ja varastointiyksikkö, jossa puut on pinottu tiiviisti.<br><br>Trave är en mät- och lagringsenhet för virke där stockarna är tätt staplade.<br><br>A pile (of wood) is a measurement and storage unit where timber is stacked tightly." },
      
  { fi: "paineellinen pohjavesi", sv: "tryckpåverkat grundvatten", en: "confined groundwater", desc: "Paineellinen pohjavesi on pohjavettä, joka on läpäisemättömän kerroksen alla ja purkautuu paineen alaisena.<br><br>Tryckpåverkat grundvatten är grundvatten under ett ogenomsläppligt lager som tränger fram under tryck.<br><br>Confined groundwater is groundwater trapped under an impermeable layer that discharges under pressure." },
      
  { fi: "puutuhka", sv: "träaska", en: "wood ash", desc: "Puutuhka on puun palamisessa syntyvää jäännöstä, jota käytetään lannoitteena ja maanparannusaineena.<br><br>Träaska är restprodukten från vedeldning, använd som gödsel och jordförbättringsmedel.<br><br>Wood ash is the residue from wood combustion, used as fertilizer and soil amendment." },
      
  { fi: "aliskasvospuu", sv: "träd i underväxtskiktet", en: "understory tree", desc: "Aliskasvospuu on puu, joka kasvaa ylispuuston alla alemmassa latvuskerroksessa.<br><br>Träd i underväxtskiktet är ett träd som växer under överståndarna i ett lägre kronskikt.<br><br>An understory tree is a tree growing beneath the overstory in a lower canopy layer." },
      
  { fi: "raivauspuusto", sv: "träd som fällts vid förröjningen", en: "pre-commercial thinning slash", desc: "Raivauspuusto on ennen hakkuuta tai taimikonhoitoa kaadettua pienpuustoa.<br><br>Träd som fällts vid förröjningen är småträd som avverkats före gallring eller plantskogsvård.<br><br>Pre-commercial thinning slash is small trees cut during pre-commercial thinning or cleaning." },
      
  { fi: "tyvitukkipuu", sv: "träd som ger rotblock", en: "butt log tree", desc: "Tyvitukkipuu on puu, jonka tyvestä saadaan arvokkain, paksuin tukki.<br><br>Träd som ger rotblock är ett träd vars nedersta stock är den värdefullaste och grövsta.<br><br>A butt log tree is a tree whose basal log is the most valuable and thickest sawlog." },
      
  { fi: "haihduttava puusto", sv: "trädbestånd som genom avdunstning sänker vattennivån", en: "evaporative tree cover", desc: "Haihduttava puusto tarkoittaa puita, jotka haihduttamisen kautta laskevat pohjaveden pintaa.<br><br>Trädbestånd som genom avdunstning sänker vattennivån är träd som via evapotranspiration sänker grundvattenytan.<br><br>Evaporative tree cover refers to trees that lower the groundwater table through evapotranspiration." },
      
  { fi: "puuston kasvukunto", sv: "trädbeståndets kondition", en: "stand vigour", desc: "Puuston kasvukunto kuvaa puiden terveydentilaa ja kykyä kasvaa.<br><br>Trädbeståndets kondition beskriver trädens hälsotillstånd och tillväxtförmåga.<br><br>Stand vigour describes the health and growth capacity of the trees in a stand." },
      
  { fi: "puuston laatu", sv: "trädbeståndets kvalitet", en: "stand quality", desc: "Puuston laatu kertoo puiden teknisestä soveltuvuudesta ja arvosta eri käyttötarkoituksiin.<br><br>Trädbeståndets kvalitet anger trädens tekniska lämplighet och värde för olika användningsområden.<br><br>Stand quality expresses the technical suitability and value of trees for different uses." },
      
  { fi: "metsän elinkaari", sv: "trädbeståndets omloppstid", en: "rotation period", desc: "Metsän elinkaari on aika metsän perustamisesta uudistamiskypsyyteen ja hakkuuseen.<br><br>Trädbeståndets omloppstid är tiden från beståndsanläggning till slutavverkning vid mogen ålder.<br><br>The rotation period is the time from stand establishment to final harvest at maturity." },
      
  { fi: "metsikön rakenne", sv: "trädbeståndets struktur", en: "stand structure", desc: "Metsikön rakenne kuvaa puuston pituus-, läpimitta- ja ikäjakaumaa sekä latvuskerroksia.<br><br>Trädbeståndets struktur beskriver trädskiktets fördelning av höjder, diametrar, åldrar och kronskikt.<br><br>Stand structure describes the distribution of tree heights, diameters, ages, and canopy layers." },
      
  { fi: "puuston kokonaistilavuus", sv: "trädbeståndets totalvolym", en: "growing stock volume", desc: "Puuston kokonaistilavuus on kaikkien elävien puiden runkopuun tilavuus metsikössä.<br><br>Trädbeståndets totalvolym är stamvolymen hos alla levande träd i beståndet.<br><br>Growing stock volume is the total stem volume of all living trees in a stand." },
      
  { fi: "puuston kehitys", sv: "trädbeståndets utveckling", en: "stand development", desc: "Puuston kehitys on metsikön rakenteen ja tilavuuden muuttumista ajan myötä.<br><br>Trädbeståndets utveckling är förändringen av beståndets struktur och volym över tiden.<br><br>Stand development is the change in stand structure and volume over time." },
      
  { fi: "puuston arvo", sv: "trädbeståndets värde", en: "stand value", desc: "Puuston arvo on metsikön puuston rahallinen arvo markkinahintojen perusteella.<br><br>Trädbeståndets värde är det ekonomiska värdet på virket i beståndet enligt marknadspriser.<br><br>Stand value is the monetary value of the timber in a stand based on market prices." },
      
  { fi: "puuston arvokehitys", sv: "trädbeståndets värdeutveckling", en: "stand value increment", desc: "Puuston arvokehitys on metsikön arvonnousu ajan kuluessa kasvun ja laadun paranemisen myötä.<br><br>Trädbeståndets värdeutveckling är värdestegringen över tid genom tillväxt och kvalitetsförbättring.<br><br>Stand value increment is the appreciation of stand value over time due to growth and quality improvement." },
      
  { fi: "puuston ikä", sv: "trädbeståndets ålder", en: "stand age", desc: "Puuston ikä tarkoittaa metsikön valtapuiden keski-ikää tai perustamisesta kulunutta aikaa.<br><br>Trädbeståndets ålder avser medelåldern hos de härskande träden eller tid sedan anläggning.<br><br>Stand age refers to the average age of the dominant trees or time since stand establishment." },
      
  { fi: "puustoinen suo", sv: "trädbevuxen torvmark", en: "wooded mire", desc: "Puustoinen suo on suo, jolla kasvaa runsaasti puita, usein kitukasvuista mäntyä.<br><br>Trädbevuxen torvmark är en myr med riklig trädförekomst, ofta lågvuxen tall.<br><br>A wooded mire is a mire with abundant tree growth, often stunted pine." },
      
  { fi: "puustoinen perinnebiotooppi", sv: "trädbevuxen vårdbiotop", en: "wooded traditional rural biotope", desc: "Puustoinen perinnebiotooppi on perinteisen maankäytön synnyttämä puustoinen elinympäristö, kuten hakamaa.<br><br>Trädbevuxen vårdbiotop är en trädbärande livsmiljö skapad genom traditionell markanvändning, som löväng.<br><br>A wooded traditional rural biotope is a tree-covered habitat created by traditional land use, such as wooded meadow." },
      
  { fi: "puunkasvu", sv: "trädens tillväxt", en: "tree growth", desc: "Puunkasvu on puiden pituuden ja paksuuden lisääntymistä ajan myötä.<br><br>Trädens tillväxt är ökningen av trädens höjd och tjocklek över tiden.<br><br>Tree growth is the increase in height and diameter of trees over time." },
      
  { fi: "rinnankorkeusikä", sv: "trädens ålder på brösthöjd", en: "breast height age", desc: "Rinnankorkeusikä on puun ikä 1,3 metrin korkeudelta mitattuna.<br><br>Trädens ålder på brösthöjd är trädets ålder mätt vid 1,3 meters höjd.<br><br>Breast height age is the age of a tree measured at 1.3 meters above ground." },
      
  { fi: "vähäpuustoinen suo", sv: "trädfattiga kärr och myrar", en: "sparsely treed mire", desc: "Vähäpuustoinen suo on suotyyppi, jolla puuston määrä on vähäinen.<br><br>Trädfattiga kärr och myrar är myrtyper med ringa trädförekomst.<br><br>A sparsely treed mire is a mire type with low tree density." },
      
  { fi: "puusukupolvi", sv: "trädgeneration", en: "tree generation", desc: "Puusukupolvi on samaan aikaan syntynyt puujoukko metsikössä.<br><br>Trädgeneration är en grupp träd i ett bestånd som etablerats samtidigt.<br><br>A tree generation is a cohort of trees in a stand established at the same time." },
      
  { fi: "puuton hiekkadyyni", sv: "trädlös sanddyn", en: "treeless sand dune", desc: "Puuton hiekkadyyni on tuulen kasaama hiekkadyyni, jolla ei kasva puita.<br><br>Trädlös sanddyn är en vindavlagrad sanddyn utan trädvegetation.<br><br>A treeless sand dune is a wind-deposited sand dune without tree cover." },
      
  { fi: "puukerros", sv: "trädskikt", en: "tree layer", desc: "Puukerros on metsän pystysuuntainen kerros, johon kuuluvat kaikki puiden latvukset.<br><br>Trädskiktet är det vertikala skikt i skogen som omfattar alla trädkronor.<br><br>The tree layer is the vertical stratum of a forest comprising all tree crowns." },
      
  { fi: "puulaji", sv: "trädslag", en: "tree species", desc: "Puulaji on tiettyyn lajiin kuuluva puu, kuten mänty, kuusi tai koivu.<br><br>Trädslag är en trädart, som tall, gran eller björk.<br><br>A tree species is a specific kind of tree, such as pine, spruce, or birch." },
      
  { fi: "puolivarjopuu", sv: "trädslag som trivs i halvskugga", en: "semi-shade tolerant tree", desc: "Puolivarjopuu on puulaji, joka sietää varjostusta ja menestyy puolivarjossa.<br><br>Trädslag som trivs i halvskugga är en trädart som tål beskuggning och klarar sig i halvskugga.<br><br>A semi-shade tolerant tree is a tree species that tolerates shade and thrives in partial shade." },
      
  { fi: "sekapuustoisuus", sv: "trädslagsblandning", en: "mixture of tree species", desc: "Sekapuustoisuus tarkoittaa eri puulajien kasvamista samassa metsikössä.<br><br>Trädslagsblandning innebär att olika trädslag växer i samma bestånd.<br><br>Mixture of tree species means different tree species growing in the same stand." },
      
  { fi: "puulajisuhteet", sv: "trädslagsförhållandena", en: "tree species proportion", desc: "Puulajisuhteet kuvaavat eri puulajien osuuksia metsikön tilavuudesta tai runkoluvusta.<br><br>Trädslagsförhållandena anger de olika trädslagens andelar av beståndets volym eller stamantal.<br><br>Tree species proportion describes the share of each tree species in stand volume or stem number." },
      
  { fi: "puulajivalikoima", sv: "trädslagssortiment", en: "assortment of tree species", desc: "Puulajivalikoima on tietyn metsikön tai metsäalueen puulajien valikoima.<br><br>Trädslagssortiment är urvalet av trädslag i ett visst bestånd eller skogsområde.<br><br>Assortment of tree species is the selection of tree species present in a particular stand or forest area." },
      
  { fi: "puulajivaihtelu", sv: "trädslagsvariation", en: "tree species diversity", desc: "Puulajivaihtelu on puulajien monimuotoisuutta metsässä.<br><br>Trädslagsvariation är mångfalden av trädslag i skogen.<br><br>Tree species diversity is the diversity of tree species in a forest." },
      
  { fi: "ohutturpeisuus", sv: "tunt torvtäcke", en: "thin peat layer", desc: "Ohutturpeisuus tarkoittaa ohutta turvekerrosta kivennäismaan päällä.<br><br>Tunt torvtäcke avser ett tunt torvlager ovanpå mineraljorden.<br><br>A thin peat layer refers to a shallow peat layer overlying mineral soil." },
      
  { fi: "tupasvillaräme", sv: "tuvdunstarrmyr", en: "cottongrass pine bog", desc: "Tupasvillaräme on suotyyppi, jossa tupasvilla ja mänty ovat vallitsevia.<br><br>Tuvdunstarrmyr är en myrtyp där tuvull och tall dominerar.<br><br>Cottongrass pine bog is a mire type dominated by cottongrass and pine." },
      
  { fi: "tupasvilla", sv: "tuvull", en: "hare's-tail cottongrass", desc: "Tupasvilla on suolla kasvava valkokukintoinen sarakasvi.<br><br>Tuvull är en på myrar växande starrart med vita blomställningar.<br><br>Hare's-tail cottongrass is a sedge species with white, cotton-like heads growing on mires." },
      
  { fi: "kitumaa", sv: "tvinmark", en: "impediment", desc: "Kitumaa on metsätaloudellisesti vähätuottoista tai puutonta aluetta, kuten kalliota tai suota.<br><br>Tvinmark är ett skogligt improduktivt eller trädlöst område, som hällmark eller myr.<br><br>Impediment is a forest land of low productivity or treeless area, like bare rock or mire." },
      
  { fi: "kaksijaksoinen sekametsä", sv: "tvåskiktad blandskog", en: "two-storied mixed forest", desc: "Kaksijaksoinen sekametsä on metsä, jossa on kaksi selvää latvuskerrosta ja useita puulajeja.<br><br>Tvåskiktad blandskog är en skog med två tydliga kronskikt och flera trädslag.<br><br>A two-storied mixed forest is a forest with two distinct canopy layers and several tree species." },
      
  { fi: "kaksijaksoinen metsikkö", sv: "tvåskiktat bestånd", en: "two-storied stand", desc: "Kaksijaksoinen metsikkö on metsikkö, jossa on kaksi eri-ikäistä puusukupolvea.<br><br>Tvåskiktat bestånd är ett bestånd med två olika trädgenerationer.<br><br>A two-storied stand is a stand with two different tree generations." },
      
  { fi: "paakkutaimi", sv: "täckrotsplant", en: "containerized seedling", desc: "Paakkutaimi on taimi, jonka juuret kasvavat turve- tai muussa kasvualustapaakussa.<br><br>Täckrotsplant är en planta vars rötter växer i en torv- eller substratklump.<br><br>A containerized seedling is a seedling grown with its roots in a peat or substrate plug." },
      
  { fi: "tiheikkö", sv: "tät buskage", en: "thicket", desc: "Tiheikkö on tiheäkasvuinen pensaikko tai nuori puurykelmä.<br><br>Tät buskage är ett tätt buskage eller en ung träddunge.<br><br>A thicket is a dense growth of bushes or young trees." },
      
  { fi: "taajamametsä", sv: "tätotsnära skog", en: "urban forest", desc: "Taajamametsä on taajama-alueella tai sen välittömässä läheisyydessä sijaitseva metsä.<br><br>Tätortsnära skog är skog som ligger i eller nära tätbebyggelse.<br><br>Urban forest is a forest located in or near an urban area." },
      
  { fi: "tervasroso", sv: "törved", en: "resinous heartwood stump", desc: "Tervasroso on vanhan männyn tervaspitoinen tyvi, joka kestää hyvin lahoamista.<br><br>Törved är den kådrika basen av en gammal tall, motståndskraftig mot röta.<br><br>Resinous heartwood stump is the resin-soaked base of an old pine, highly resistant to decay." },
      
  { fi: "UEMT", sv: "UEMT", en: "UEMT", desc: "UEMT on lyhenne sanoista 'Ulkoilun ja elämysten metsät', tarkoittaen virkistysmetsiä.<br><br>UEMT är en förkortning för 'skogar för friluftsliv och upplevelser', dvs. rekreationsskogar.<br><br>UEMT stands for 'Forests for Outdoor Recreation and Experiences'." },
      
  { fi: "alikasvos", sv: "underväxt", en: "understorey", desc: "Alikasvos on metsän latvuskerroksen alla kasvava pensas- ja taimikerros.<br><br>Underväxt är det busk- och plantskikt som växer under de högre trädens kronor.<br><br>The understorey is the layer of shrubs and saplings growing beneath the main canopy." },
      
  { fi: "alikasvosjakso", sv: "underväxtskikt", en: "understorey stratum", desc: "Alikasvosjakso on alikasvoksen muodostama erillinen kerros metsän rakenteessa.<br><br>Underväxtskikt är det separata skikt i skogens struktur som utgörs av underväxten.<br><br>The understorey stratum is the distinct layer in forest structure formed by the understorey." },
      
  { fi: "pohjaveden purkautuminen", sv: "uppbrytning av grundvatten", en: "groundwater discharge", desc: "Pohjaveden purkautuminen on pohjaveden virtaamista maanpinnalle, esimerkiksi lähteistä.<br><br>Uppbrytning av grundvatten är grundvattnets framträngande i dagen, t.ex. i källor.<br><br>Groundwater discharge is the outflow of groundwater to the surface, such as in springs." },
      
  { fi: "routiminen", sv: "uppfrysning", en: "frost heaving", desc: "Routiminen on maan jäätymisen ja sulamisen aiheuttamaa liikettä, joka nostaa esim. taimia.<br><br>Uppfrysning är jordens rörelse orsakad av frysning och upptining, vilket kan lyfta plantor.<br><br>Frost heaving is the soil movement caused by freezing and thawing, which can lift seedlings." },
      
  { fi: "vesominen", sv: "uppkomst av sly", en: "sprouting", desc: "Vesominen on kantojen tai juurten tuottamien uusien versojen syntymistä.<br><br>Uppkomst av sly är bildandet av nya skott från stubbar eller rötter.<br><br>Sprouting is the emergence of new shoots from stumps or roots." },
      
  { fi: "tykkylumi", sv: "upplega", en: "crown snow-load", desc: "Tykkylumi on puiden latvuksiin kertyvä, jäinen lumikerros, joka voi aiheuttaa tuhoja.<br><br>Uppgega är tung snö som fryser fast i trädkronorna och kan orsaka skador.<br><br>Crown snow-load is heavy, icy snow accumulating on tree crowns, potentially causing damage." },
      
  { fi: "jatkolannoitus", sv: "upprepad gödsling", en: "repeated fertilization", desc: "Jatkolannoitus on lannoituksen toistamista useita kertoja kiertoajan aikana.<br><br>Upprepad gödsling är gödsling som upprepas flera gånger under omloppstiden.<br><br>Repeated fertilization is fertilization applied several times during the rotation period." },
      
  { fi: "kokoojaoja", sv: "uppsamlingsdike", en: "collecting ditch", desc: "Kokoojaoja on oja, joka kerää vedet sarkaojista ja johtaa ne valtaojaan.<br><br>Uppsamlingsdike är ett dike som samlar upp vatten från tegdiken och leder det till huvudfåran.<br><br>A collecting ditch gathers water from strip drains and conveys it to the main ditch." },
      
  { fi: "rehevöityminen", sv: "uppslag av gräs och örter", en: "herbaceous growth flush", desc: "Rehevöityminen tarkoittaa nopeaa ruoho- ja heinäkasvillisuuden lisääntymistä esim. hakkuun jälkeen.<br><br>Uppslag av gräs och örter är en snabb ökning av gräs- och örtvegetation efter t.ex. en avverkning.<br><br>Herbaceous growth flush is a rapid increase in grass and herb vegetation after e.g. cutting." },
      
  { fi: "huuhtoutumiskerros", sv: "urlakningsskikt", en: "leached layer", desc: "Huuhtoutumiskerros on maaprofiilin osa, josta vesi on huuhtonut ravinteita syvemmälle.<br><br>Urlakningsskikt är det markskikt varifrån vatten transporterat bort näringsämnen till djupare lager.<br><br>The leached layer is the part of the soil profile from which water has washed nutrients downward." },
      
  { fi: "levinneisyys", sv: "utbredning", en: "distribution", desc: "Levinneisyys kuvaa lajin esiintymisaluetta maantieteellisesti.<br><br>Utbredning beskriver en arts geografiska förekomstområde.<br><br>Distribution describes the geographical occurrence range of a species." },
      
  { fi: "levinneisyysalue", sv: "utbredningsområde", en: "distribution range", desc: "Levinneisyysalue on se maantieteellinen alue, jolla lajia tavataan.<br><br>Utbredningsområde är det geografiska område inom vilket en art förekommer.<br><br>The distribution range is the geographical area where a species is found." },
      
  { fi: "lähtötiheys", sv: "utgångstäthet", en: "initial stand density", desc: "Lähtötiheys on metsikön runkoluku perustettaessa tai tarkastelujakson alussa.<br><br>Utgångstäthet är stamantalet vid beståndets anläggning eller en periods början.<br><br>Initial stand density is the stem number at stand establishment or the beginning of a period." },
      
  { fi: "sammutuskalusto", sv: "utrustning för brandsläckning", en: "firefighting equipment", desc: "Sammutuskalusto on metsäpalojen sammuttamiseen käytettävä välineistö.<br><br>Utrustning för brandsläckning är den utrustning som används för att bekämpa skogsbränder.<br><br>Firefighting equipment is the gear used for extinguishing forest fires." },
      
  { fi: "poistuma", sv: "uttag", en: "removal", desc: "Poistuma on metsästä hakkuilla tai luontaisesti poistuneiden puiden määrä.<br><br>Uttag är mängden träd som avlägsnats från skogen genom avverkning eller naturlig avgång.<br><br>Removal is the amount of trees taken from the forest through harvesting or natural mortality." },
      
  { fi: "energiapuuhakkuu", sv: "uttag av energived", en: "energy wood harvesting", desc: "Energiapuuhakkuu on pieniläpimittaisen puuston korjuuta energiakäyttöön.<br><br>Uttag av energived är avverkning av klenvirke för energiändamål.<br><br>Energy wood harvesting is the cutting of small-diameter trees for energy use." },
      
  { fi: "ainespuuhakkuu", sv: "uttag av gagnvirke", en: "industrial wood harvesting", desc: "Ainespuuhakkuu on sahaukseen tai muuhun jalostukseen soveltuvan puutavaran korjuuta.<br><br>Uttag av gagnvirke är avverkning av virke som duger till sågning eller annan förädling.<br><br>Industrial wood harvesting is the cutting of timber suitable for sawmilling or other processing." },
      
  { fi: "kasvatuskelpoinen puu", sv: "utveckligsdugligt träd", en: "acceptable growing stock tree", desc: "Kasvatuskelpoinen puu on puu, jolla on edellytykset kasvaa arvokkaaksi osaksi tulevaa puustoa.<br><br>Utvecklingsdugligt träd är ett träd som har potential att bli en värdefull del av framtida bestånd.<br><br>An acceptable growing stock tree is a tree with the potential to become a valuable part of the future stand." },
      
  { fi: "kehityskelpoinen metsikkö", sv: "utvecklingsbart bestånd", en: "stand with development potential", desc: "Kehityskelpoinen metsikkö on metsikkö, jolla on edellytykset tuottaa laadukasta puuta.<br><br>Utvecklingsbart bestånd är ett bestånd med förutsättningar att producera kvalitetsvirke.<br><br>A stand with development potential is a stand capable of producing high-quality timber." },
      
  { fi: "kasvatuskelpoinen taimi", sv: "utvecklingsduglig planta", en: "acceptable seedling", desc: "Kasvatuskelpoinen taimi on taimi, joka on riittävän hyväkuntoinen jätettäväksi kasvamaan.<br><br>Utvecklingsduglig planta är en planta av tillräckligt god kvalitet för att lämnas kvar att växa.<br><br>An acceptable seedling is a seedling of sufficient quality to be left for further growth." },
      
  { fi: "metsän kehitysvaihe", sv: "utvecklingsfas", en: "development phase", desc: "Metsän kehitysvaihe on metsikön sukkession vaihe, kuten taimikko, nuori metsä tai varttunut metsä.<br><br>Utvecklingsfas är ett successionsstadium som plantskog, ungskog eller äldre skog.<br><br>The development phase is a successional stage of the stand, such as seedling stand, young forest, or mature forest." },
      
  { fi: "kehitysluokka", sv: "utvecklingsklass", en: "development class", desc: "Kehitysluokka on metsikön ikä- ja rakennepohjainen luokittelu, kuten taimikko-, harvennus- tai uudistusmetsä.<br><br>Utvecklingsklass är en ålders- och strukturrelaterad klassificering, som plantskog, gallringsskog eller föryngringsskog.<br><br>Development class is an age- and structure-based classification, such as seedling stand, thinning stand, or regeneration stand." },
      
  { fi: "kehitysmalli", sv: "utvecklingsmodell", en: "growth model", desc: "Kehitysmalli on matemaattinen malli, joka kuvaa metsikön kasvua ja rakenteen muutoksia.<br><br>Utvecklingsmodell är en matematisk modell som beskriver beståndets tillväxt och strukturförändringar.<br><br>A growth model is a mathematical model describing stand growth and structural changes." },
      
  { fi: "UVET", sv: "UVET", en: "UVET", desc: "Uliginosum-Vaccinium-Empetrum-typ" },
      
  { fi: "tähtikudospistiäinen", sv: "vanlig tallspinnarstekel", en: "common pine sawfly", desc: "Tähtikudospistiäinen on mäntyjen neulasia syövä pistiäislaji.<br><br>Vanlig tallspinnarstekel är en stekelart vars larver äter tallbarr.<br><br>The common pine sawfly is a sawfly species that feeds on pine needles." },
      
  { fi: "pilkkumäntypistiäinen", sv: "vanlig tallstekel", en: "common pine sawfly", desc: "Pilkkumäntypistiäinen on yleinen männyn neulasia syövä hyönteinen.<br><br>Vanlig tallstekel är en vanlig insekt som äter tallbarr.<br><br>The common pine sawfly is a common insect feeding on pine needles." },
      
  { fi: "epätasainen kokojakauma", sv: "varierande diameterfördelning", en: "uneven-sized structure", desc: "Epätasainen kokojakauma tarkoittaa suurta vaihtelua puiden läpimitoissa samassa metsikössä.<br><br>Varierande diameterfördelning innebär stor variation i trädens diametrar inom samma bestånd.<br><br>Uneven-sized structure means a wide variation in tree diameters within the same stand." },
      
  { fi: "erirakenteisuus", sv: "varierande struktur", en: "uneven-aged structure", desc: "Erirakenteisuus kuvaa metsikön moni-ikäisyyttä ja puuston kokovaihtelua.<br><br>Varierande struktur beskriver ett bestånds olikåldrighet och storleksvariation.<br><br>Uneven-aged structure describes the multi-aged nature and size variation within a stand." },
      
  { fi: "metsäpalovaroitus", sv: "varning för skogsbrand", en: "forest fire warning", desc: "Metsäpalovaroitus on viranomaisen antama varoitus kohonneesta metsäpaloriskistä.<br><br>Varning för skogsbrand är en varning från myndighet om ökad risk för skogsbrand.<br><br>A forest fire warning is an official alert about elevated wildfire risk." },
      
  { fi: "vedenjakaja-alue", sv: "vattendelarområde", en: "watershed divide", desc: "Vedenjakaja-alue on maaston kohta, josta vedet virtaavat eri suuntiin eri valuma-alueille.<br><br>Vattendelarområde är den plats i terrängen där vatten rinner åt olika håll till olika avrinningsområden.<br><br>The watershed divide is the topographic boundary separating drainage basins." },
      
  { fi: "vesistö", sv: "vattendrag", en: "watercourse", desc: "Vesistö on joen, järven tai muun pintaveden muodostama kokonaisuus.<br><br>Vattendrag är ett sammanhängande system av floder, sjöar och andra ytvatten.<br><br>A watercourse is a system of rivers, lakes and other surface waters." },
      
  { fi: "vesitalous", sv: "vattenhushållning", en: "water management", desc: "Vesitalous on metsäojituksen ja vesistön säätelyn avulla tapahtuvaa veden hallintaa.<br><br>Vattenhushållning är kontroll av vatten med hjälp av dikning och reglering av vattendrag.<br><br>Water management is the control of water through ditching and regulation of watercourses." },
      
  { fi: "vesilaki", sv: "vattenlag", en: "Water Act", desc: "Vesilaki on Suomen lainsäädäntö, joka säätelee vesivarojen käyttöä ja suojelua.<br><br>Vattenlagen är den finska lag som reglerar användning och skydd av vattenresurser.<br><br>The Water Act is Finnish legislation regulating the use and protection of water resources." },
      
  { fi: "vesieliöstö", sv: "vattenorganismer", en: "aquatic organisms", desc: "Vesieliöstö käsittää vesistöissä elävät kasvit, eläimet ja mikrobit.<br><br>Vattenorganismer omfattar växter, djur och mikrober som lever i vatten.<br><br>Aquatic organisms include plants, animals and microbes living in water." },
      
  { fi: "vesioksa", sv: "vattenskott", en: "water sprout", desc: "Vesioksa on puun oksa, joka on syntynyt kiivaasti esim. lehtipuun rungon silmuista.<br><br>Vattenskott är ett snabbvuxet skott från stamknoppar på lövträd.<br><br>A water sprout is a fast-growing shoot arising from dormant buds on a tree trunk." },
      
  { fi: "vesiensuojelu", sv: "vattenvård", en: "water protection", desc: "Vesien suojelu on toimenpiteitä vesien laadun ja ekologisen tilan säilyttämiseksi.<br><br>Vattenvård är åtgärder för att bevara vattnens kvalitet och ekologiska status.<br><br>Water protection refers to measures to preserve water quality and ecological status." },
      
  { fi: "puuaines", sv: "ved", en: "wood", desc: "Puuaines on puun solukkojen muodostamaa materiaalia, jota käytetään rakentamiseen ja energiana.<br><br>Ved är det material som trädens cellvävnad består av och används till byggnation och energi.<br><br>Wood is the material consisting of tree tissues, used for construction and energy." },
      
  { fi: "kasvuolosuhteet", sv: "vegetationsförhållanden", en: "growing conditions", desc: "Kasvuolosuhteet ovat maaperän, valon, lämpötilan ja veden muodostama kokonaisuus.<br><br>Vegetationsförhållanden är de samlade mark-, ljus-, temperatur- och vattenförhållandena.<br><br>Growing conditions are the combined soil, light, temperature, and water conditions." },
      
  { fi: "kasvillisuusvyöhyke", sv: "vegetationszon", en: "vegetation zone", desc: "Kasvillisuusvyöhyke on maantieteellinen alue, jolla on yhtenäinen kasvillisuusilmasto.<br><br>Vegetationszon är ett geografiskt område med enhetligt vegetationsklimat.<br><br>A vegetation zone is a geographical area with a uniform vegetation climate." },
      
  { fi: "villiyrtti", sv: "vild ört", en: "wild herb", desc: "Villiyrtti on luonnonvarainen ruoho, jota käytetään ravinnoksi tai lääkkeenä.<br><br>Vild ört är en vildväxande ört som används som föda eller läkemedel.<br><br>A wild herb is a naturally growing herb used for food or medicine." },
      
  { fi: "riista", sv: "vilt", en: "game", desc: "Riista on metsästettäviä luonnonvaraisia eläimiä.<br><br>Vilt är jaktbara vilda djur.<br><br>Game refers to huntable wild animals." },
      
  { fi: "riistaeläin", sv: "viltart", en: "game species", desc: "Riistaeläin on eläinlaji, jota metsästetään.<br><br>Viltart är en djurart som jagas.<br><br>A game species is an animal species that is hunted." },
      
  { fi: "riistalaji", sv: "viltart", en: "game species", desc: "Riistalaji on metsästettävä eläinlaji.<br><br>Viltart är en jaktbar djurart.<br><br>A game species is a huntable animal species." },
      
  { fi: "riistatiheikkö", sv: "viltbuskage", en: "game thicket", desc: "Riistatiheikkö on tiheä pensaikko, joka tarjoaa suojaa ja ravintoa riistaeläimille.<br><br>Viltbuskage är ett tätt buskage som ger skydd och föda åt vilt.<br><br>A game thicket is a dense shrub area providing cover and food for game." },
      
  { fi: "saalisarvo", sv: "viltets värde", en: "game value", desc: "Saalisarvo on riistaeläimen metsästysarvo ja merkitys metsästäjälle.<br><br>Viltets värde är det jaktliga värdet och betydelsen för jägaren.<br><br>Game value is the hunting value and significance of a game animal to the hunter." },
      
  { fi: "riistakanta", sv: "viltstam", en: "game population", desc: "Riistakanta on tietyllä alueella elävien riistaeläinten määrä.<br><br>Viltstam är antalet vilt av en art inom ett område.<br><br>The game population is the number of game animals of a species in an area." },
      
  { fi: "riistanhoito", sv: "viltvård", en: "game management", desc: "Riistahoito on toimenpiteitä riistakantojen elinvoimaisuuden ja elinympäristöjen parantamiseksi.<br><br>Viltvård är åtgärder för att förbättra viltstammarnas livskraft och livsmiljöer.<br><br>Game management is measures to improve game populations' vitality and habitats." },
      
  { fi: "riistapelto", sv: "viltåker", en: "game field", desc: "Riistapelto on riistaeläimille perustettu viljelyala, jolla kasvatetaan ravintokasveja.<br><br>Viltåker är en odlad yta anlagd för vilt med foderproduktion.<br><br>A game field is a cultivated area established for game with food plants." },
      
  { fi: "tuulenkaato", sv: "vindfälle", en: "windthrow", desc: "Tuulenkaato on puu, jonka tuuli on kaatanut juurineen.<br><br>Vindfälle är ett träd som blåst omkull med rötterna.<br><br>Windthrow is a tree uprooted by wind." },
      
  { fi: "tuulikuorma", sv: "vindlast", en: "wind load", desc: "Tuulikuorma on tuulen puuhun kohdistama mekaaninen kuormitus.<br><br>Vindlast är den mekaniska belastning som vinden utövar på ett träd.<br><br>Wind load is the mechanical stress exerted on a tree by wind." },
      
  { fi: "tuulituho", sv: "vindskada", en: "wind damage", desc: "Tuulituho on tuulen aiheuttamaa metsän vaurioitumista, kuten tuulenkaatoja.<br><br>Vindskada är skada på skog orsakad av vind, t.ex. vindfällen.<br><br>Wind damage is forest damage caused by wind, such as windthrow." },
      
  { fi: "talvikorjuu", sv: "vinteravverkning", en: "winter harvesting", desc: "Talvikorjuu on puunkorjuuta, joka tehdään maan ollessa jäässä ja lumen peitossa.<br><br>Vinteravverkning är drivning som utförs när marken är frusen och snötäckt.<br><br>Winter harvesting is logging carried out when the ground is frozen and snow-covered." },
      
  { fi: "talvikorjuuleimikko", sv: "vinterstämpling", en: "winter marked stand", desc: "Talvikorjuuleimikko on metsikkö, joka on leimattu talvella hakattavaksi.<br><br>Vinterstämpling är ett bestånd som stämplats för avverkning under vintern.<br><br>A winter marked stand is a stand designated for felling in winter." },
      
  { fi: "puunkorjuu", sv: "virkesdrivning", en: "timber harvesting", desc: "Puunkorjuu on kaikkien niiden toimenpiteiden kokonaisuus, jolla puut saadaan metsästä tienvarteen.<br><br>Virkesdrivning är summan av alla åtgärder för att få virket från skogen till avlägg vid väg.<br><br>Timber harvesting is the total set of operations to bring timber from the forest to roadside." },
      
  { fi: "puuvarat", sv: "virkesförråd", en: "growing stock", desc: "Puuvarat tarkoittavat metsässä olevien elävien puiden määrää tilavuutena.<br><br>Virkesförråd är den volym levande träd som finns i skogen.<br><br>Growing stock refers to the volume of living trees in the forest." },
      
  { fi: "puukauppa", sv: "virkesförsäljning", en: "timber trade", desc: "Puukauppa on metsänomistajan ja puunostajan välinen puutavaran kauppa.<br><br>Virkesförsäljning är handel med virke mellan skogsägare och virkesköpare.<br><br>Timber trade is the transaction of wood between forest owner and timber buyer." },
      
  { fi: "puunostaja", sv: "virkesköpare", en: "timber buyer", desc: "Puunostaja on yritys tai henkilö, joka ostaa puuta metsästä.<br><br>Virkesköpare är ett företag eller person som köper virke från skogen.<br><br>A timber buyer is a company or person purchasing wood from the forest." },
      
  { fi: "puumarkkinat", sv: "virkesmarknad", en: "timber market", desc: "Puumarkkinat ovat puun kysynnän ja tarjonnan muodostama markkinapaikka.<br><br>Virkesmarknad är den marknad som bildas av efterfrågan och utbud på virke.<br><br>The timber market is the marketplace formed by supply and demand for wood." },
      
  { fi: "puunkasvatus", sv: "virkesproduktion", en: "timber production", desc: "Puunkasvatus on metsänhoidon tavoite tuottaa puuta teollisuuden tarpeisiin.<br><br>Virkesproduktion är det skogliga målet att producera virke för industrin.<br><br>Timber production is the silvicultural objective of growing wood for industry." },
      
  { fi: "puuntuotanto", sv: "virkesproduktion", en: "timber production", desc: "Puuntuotanto on metsän käyttömuoto, jossa pääpaino on puutavaran tuottamisessa.<br><br>Virkesproduktion är den skogliga inriktning där fokus ligger på att producera virke.<br><br>Timber production is the forest use focused on producing wood." },
      
  { fi: "puuntuotos", sv: "virkesproduktion", en: "wood yield", desc: "Puuntuotos on metsikön tietyssä ajassa tuottama puumäärä.<br><br>Virkesproduktion är den virkesmängd ett bestånd producerar under en viss tid.<br><br>Wood yield is the amount of wood produced by a stand in a given time." },
      
  { fi: "puuntuotoskyky", sv: "virkesproduktionsförmåga", en: "productivity", desc: "Puuntuotoskyky on metsämaan kyky tuottaa puuta, usein mitattuna kuutiometreinä hehtaarilla vuodessa.<br><br>Virkesproduktionsförmåga är markens förmåga att producera virke, ofta mätt i m³ per ha och år.<br><br>Productivity is the capacity of forest land to produce wood, often measured in m³ per hectare per year." },
      
  { fi: "puutavaralaji", sv: "virkessortiment", en: "timber assortment", desc: "Puutavaralaji on puutavaran lajitteluperusteen mukainen luokka, kuten tukki tai kuitu.<br><br>Virkessortiment är en klassificering av virke enligt kvalitet och dimension, t.ex. timmer eller massaved.<br><br>Timber assortment is a classification of wood according to quality and size, such as sawlog or pulpwood." },
      
  { fi: "terveyslannoitus", sv: "vitaliseringsgödsling", en: "health fertilization", desc: "Terveyslannoitus on lannoitus, jolla pyritään korjaamaan ravinnepuutoksia ja parantamaan puiden terveyttä.<br><br>Vitaliseringsgödsling är gödsling för att avhjälpa näringsbrist och förbättra trädens hälsa.<br><br>Health fertilization is fertilization aimed at correcting nutrient deficiencies and improving tree health." },
      
  { fi: "rahkasammal", sv: "vitmossa", en: "sphagnum moss", desc: "Rahkasammal on kosteilla paikoilla kasvava sammalsuku, joka muodostaa turvetta.<br><br>Vitmossa är ett mossläkte som växer på fuktiga platser och bildar torv.<br><br>Sphagnum moss is a genus of moss growing in wet places that forms peat." },
      
  { fi: "valkohäntäpeura", sv: "vitsvanshjort", en: "white-tailed deer", desc: "Valkohäntäpeura on Pohjois-Amerikasta istutettu sorkkaeläin, joka on nykyään yleinen Suomessa.<br><br>Vitsvanshjort är ett från Nordamerika inplanterat hovdjur som nu är vanligt i Finland.<br><br>The white-tailed deer is a hoofed animal introduced from North America, now common in Finland." },
      
  { fi: "VMT", sv: "VMT", en: "VMT (Cranberry-Vaccinium mire type)", desc: "VMT on lyhenne suotyypistä 'varputurvekangas', ojitettu suotyyppi.<br><br>VMT är en förkortning för torvmarkstypen 'ris- och blåbärstorvmo', en dikad myr.<br><br>VMT stands for the peatland forest type 'dwarf shrub peatland forest'." },
      
  { fi: "tilavuuskasvu", sv: "volymtillväxt", en: "volume increment", desc: "Tilavuuskasvu on puuston rungon tilavuuden lisääntyminen tietyssä ajassa.<br><br>Volymtillväxt är ökningen av stammens volym hos trädskiktet under en viss tid.<br><br>Volume increment is the increase in stem volume of the stand over a period." },
      
  { fi: "von Postin maatuneisuusasteikko", sv: "von Posts skala för bedömning av humifieringsgrad", en: "von Post humification scale", desc: "Von Postin asteikko mittaa turpeen maatuneisuutta käsin puristamalla 10-portaisella asteikolla.<br><br>Von Posts skala bedömer torvens förmultningsgrad genom handpressning på en 10-gradig skala.<br><br>The von Post humification scale measures peat decomposition by hand squeezing on a 10-grade scale." },
      
  { fi: "hylkypuu", sv: "vraktimmer", en: "reject timber", desc: "Hylkypuu on laatuvaatimukset alittavaa puutavaraa, jota ei hyväksytä varsinaisiin käyttötarkoituksiin.<br><br>Vraktimmer är virke som understiger kvalitetskraven och inte godtas för avsett ändamål.<br><br>Reject timber is wood not meeting quality standards and not accepted for intended use." },
      
  { fi: "kynäjalava", sv: "vresalm", en: "European white elm", desc: "Kynäjalava on Suomessa luonnonvarainen jalava, jonka puuaines on kovaa ja sitkeää.<br><br>Vresalm är en inhemsk alm i Finland, med hårt och segt virke.<br><br>European white elm is a native elm species in Finland, with hard and tough wood." },
      
  { fi: "VT", sv: "VT", en: "VT (Vaccinium type)", desc: "VT on metsätyyppilyhenne sanoista 'kuivahko kangas' (Vaccinium-tyyppi).<br><br>VT är en förkortning för skogstypen 'torr mo' (blåbärstyp).<br><br>VT stands for the forest site type 'sub-dry heath forest' (Vaccinium type)." },
      
  { fi: "rauduskoivu", sv: "vårtbjörk", en: "silver birch", desc: "Rauduskoivu on yleinen lehtipuu, jolla on raudanharmaa, hienojakoinen oksainen latvus.<br><br>Vårtbjörk är ett vanligt lövträd med järngrå, finkvistig krona.<br><br>Silver birch is a common deciduous tree with a silver-grey, finely branched crown." },
      
  { fi: "kosteikko", sv: "våtmark", en: "wetland", desc: "Kosteikko on alue, jossa vesi vaikuttaa maaperään ja eliöstöön, kuten suot ja tulvaniityt.<br><br>Våtmark är ett område där vatten präglar mark och organismer, som myrar och svämängar.<br><br>A wetland is an area where water influences soil and organisms, such as mires and flood meadows." },
      
  { fi: "piennartie", sv: "väg på dikesren", en: "ditch bank road", desc: "Piennartie on ojan pientareelle rakennettu kapea tie.<br><br>Väg på dikesren är en smal väg anlagd på en dikesren.<br><br>A ditch bank road is a narrow road built on the berm of a ditch." },
      
  { fi: "seinäsammal", sv: "väggmossa", en: "wall moss", desc: "Seinäsammal on kallionpinnoilla ja kivillä kasvava sammal.<br><br>Väggmossa är en mossa som växer på klippor och stenar.<br><br>Wall moss is a moss growing on rock surfaces and stones." },
      
  { fi: "tiepisto", sv: "vägstump", en: "short road section", desc: "Tiepisto on lyhyt, usein umpiperäinen metsätieosuus.<br><br>Vägstump är en kort, ofta återvändsgränd av skogsbilväg.<br><br>A short road section is a brief, often dead-end forest road segment." },
      
  { fi: "arvokas elinympäristö", sv: "värdefull livsmiljö", en: "valuable habitat", desc: "Arvokas elinympäristö on luonnon monimuotoisuuden kannalta tärkeä ympäristö.<br><br>Värdefull livsmiljö är en miljö som är viktig för biologisk mångfald.<br><br>A valuable habitat is an environment important for biodiversity." },
      
  { fi: "arvotukki", sv: "värdefull stock", en: "high-value log", desc: "Arvotukki on laadultaan erityisen hyvä ja kallisarvoinen tukkipuu.<br><br>Värdefull stock är en stock av särskilt hög kvalitet och stort värde.<br><br>A high-value log is a log of particularly high quality and great value." },
      
  { fi: "puun arvo", sv: "värdet på träd", en: "tree value", desc: "Puun arvo on puun rahallinen arvo perustuen sen tilavuuteen ja laatuun.<br><br>Värdet på träd är det ekonomiska värdet baserat på volym och kvalitet.<br><br>Tree value is the monetary worth of a tree based on its volume and quality." },
      
  { fi: "arvokasvu", sv: "värdetillväxt", en: "value increment", desc: "Arvokasvu on metsikön arvon nousu ajan kuluessa kasvun ja laadun paranemisen ansiosta.<br><br>Värdetillväxt är den ökning av beståndets värde över tid tack vare tillväxt och kvalitetsförbättring.<br><br>Value increment is the rise in stand value over time due to growth and quality improvement." },
      
  { fi: "arvokasvuprosentti", sv: "värdetillväxtprocent", en: "value increment percentage", desc: "Arvokasvuprosentti ilmoittaa metsikön arvon vuotuisen suhteellisen kasvun.<br><br>Värdetillväxtprocent anger den årliga relativa ökningen av beståndets värde.<br><br>Value increment percentage gives the annual relative increase in stand value." },
      
  { fi: "hellejakso", sv: "värmeperiod", en: "heat period", desc: "Hellejakso on ajanjakso, jolloin päivän ylin lämpötila ylittää hellelukemat.<br><br>Värmeperiod är en period då dagens högsta temperatur överskrider värmeböljenivå.<br><br>A heat period is a spell with daily maximum temperatures above heatwave threshold." },
      
  { fi: "kasvihuonekaasut", sv: "växthusgaser", en: "greenhouse gases", desc: "Kasvihuonekaasut, kuten hiilidioksidi ja metaani, sitovat lämpöä ilmakehässä.<br><br>Växthusgaser, som koldioxid och metan, fångar värme i atmosfären.<br><br>Greenhouse gases, such as carbon dioxide and methane, trap heat in the atmosphere." },
      
  { fi: "kasvumalli", sv: "växtmodell", en: "growth model", desc: "Kasvumalli on matemaattinen kuvaus puuston kasvusta.<br><br>Växtmodell är en matematisk beskrivning av trädens tillväxt.<br><br>A growth model is a mathematical description of tree growth." },
      
  { fi: "kasvukausi", sv: "växtperiod", en: "growing season", desc: "Kasvukausi on se osa vuotta, jolloin lämpötila ja valo mahdollistavat kasvien kasvun.<br><br>Växtperiod är den del av året då temperatur och ljus tillåter växttillväxt.<br><br>The growing season is the part of the year when temperature and light allow plant growth." },
      
  { fi: "kasvatuspaikka", sv: "växtplats", en: "growing site", desc: "Kasvatuspaikka on se maaperä- ja ympäristöolosuhde, jossa kasvi kasvaa.<br><br>Växtplats är de mark- och miljöförhållanden där en växt växer.<br><br>A growing site is the soil and environmental conditions where a plant grows." },
      
  { fi: "paksukunttaisuus", sv: "växtplats med tjockt mårtäcke", en: "site with thick humus layer", desc: "Paksukunttaisuus tarkoittaa paksun raakahumuskerroksen peittämää maata.<br><br>Växtplats med tjockt mårtäcke är mark täckt av ett tjockt förnalager.<br><br>Site with thick humus layer means soil covered by a deep layer of raw humus." },
      
  { fi: "kasviyhdyskunta", sv: "växtsamhälle", en: "plant community", desc: "Kasviyhdyskunta on tietyllä paikalla esiintyvien kasvien muodostama kokonaisuus.<br><br>Växtsamhälle är den samling växter som förekommer på en viss plats.<br><br>A plant community is the assemblage of plants occurring in a specific location." },
      
  { fi: "kasvitauti", sv: "växtsjukdom", en: "plant disease", desc: "Kasvitauti on kasvin sairaus, jonka aiheuttaja on sieni, bakteeri, virus tms.<br><br>Växtsjukdom är en sjukdom på växt orsakad av svampar, bakterier, virus etc.<br><br>A plant disease is an illness in a plant caused by fungi, bacteria, viruses, etc." },
      
  { fi: "kasvintuhooja", sv: "växtskadegörare", en: "plant pest", desc: "Kasvintuhooja on hyönteinen, eläin tai mikrobi, joka vahingoittaa kasveja.<br><br>Växtskadegörare är en insekt, ett djur eller en mikrob som skadar växter.<br><br>A plant pest is an insect, animal or microorganism that damages plants." },
      
  { fi: "kasvinsuojeluaine", sv: "växtskyddsmedel", en: "plant protection product", desc: "Kasvinsuojeluaine on kemiallinen aine, jolla torjutaan kasvintuhoojia.<br><br>Växtskyddsmedel är ett kemiskt medel för bekämpning av växtskadegörare.<br><br>A plant protection product is a chemical agent used to control plant pests." },
      
  { fi: "kasvutila", sv: "växtutrymme", en: "growing space", desc: "Kasvutila on yksittäisen puun käytettävissä oleva tila latvuksen ja juurten kasvamiseen.<br><br>Växtutrymme är det utrymme som står till buds för ett enskilt träds krona och rötter.<br><br>Growing space is the space available to a single tree for crown and root growth." },
      
  { fi: "kasvinsyöjähyönteinen", sv: "växtätande insekt", en: "herbivorous insect", desc: "Kasvinsyöjähyönteinen on hyönteinen, joka syö kasvinosia.<br><br>Växtätande insekt är en insekt som äter växtdelar.<br><br>A herbivorous insect is an insect that feeds on plant parts." },
      
  { fi: "pieni taimikko", sv: "yngre plantskog", en: "young seedling stand", desc: "Pieni taimikko on juuri perustettu tai nuori taimikko, jossa taimet ovat vielä pieniä.<br><br>Yngre plantskog är en nyanlagd eller ung plantskog där plantorna ännu är små.<br><br>A young seedling stand is a newly established or young stand with small seedlings." },
      
  { fi: "pintaeroosio", sv: "yterosion", en: "surface erosion", desc: "Pintaeroosio on veden tai tuulen aiheuttamaa maanpinnan kulumista.<br><br>Yterosion är nötning av markytan genom vatten eller vind.<br><br>Surface erosion is the wearing away of the soil surface by water or wind." },
      
  { fi: "pintaturve", sv: "yttorv", en: "surface peat", desc: "Pintaturve on suoekosysteemin ylimmäistä, vähän maatunutta turvekerrosta.<br><br>Yttorv är det översta, föga förmultnade torvlagret i ett myrekosystem.<br><br>Surface peat is the topmost, least decomposed peat layer in a mire ecosystem." },
      
  { fi: "pintavesi", sv: "ytvatten", en: "surface water", desc: "Pintavesi on maanpinnalla olevaa vettä, kuten joet, järvet ja lammet.<br><br>Ytvatten är vatten på markytan, som floder, sjöar och dammar.<br><br>Surface water is water on the land surface, such as rivers, lakes, and ponds." },
      
  { fi: "pelto", sv: "åker", en: "field", desc: "Pelto on maatalouskäytössä oleva kyntö- tai viljelyala.<br><br>Åker är ett jordbruksområde för plöjning och odling.<br><br>A field is an agricultural area used for ploughing and cultivation." },
      
  { fi: "peltomaa", sv: "åkermark", en: "agricultural land", desc: "Peltomaa on viljelyyn käytettävää maata.<br><br>Åkermark är mark som används för odling.<br><br>Agricultural land is land used for cultivation." },
      
  { fi: "vuotuinen arvokasvu", sv: "årlig värdetillväxt", en: "annual value increment", desc: "Vuotuinen arvokasvu on metsikön arvon lisäys yhden vuoden aikana.<br><br>Årlig värdetillväxt är ökningen av beståndets värde under ett år.<br><br>Annual value increment is the increase in stand value over one year." },
      
  { fi: "vuotuinen keskilämpötila", sv: "årsmedeltemperatur", en: "annual mean temperature", desc: "Vuotuinen keskilämpötila on vuoden kaikkien vuorokausien keskilämpötila.<br><br>Årsmedeltemperatur är medeltemperaturen av dygnsmedelvärden under ett år.<br><br>Annual mean temperature is the average of daily mean temperatures over a year." },
      
  { fi: "lusto", sv: "årsring", en: "annual ring", desc: "Lusto on puun vuosikasvu, joka näkyy poikkileikkauksessa renkaana.<br><br>Årsring är ett års tillväxt hos ett träd, synlig som en ring i tvärsnitt.<br><br>An annual ring is one year's growth of a tree, visible as a ring in cross-section." },
      
  { fi: "harju", sv: "ås", en: "esker", desc: "Harju on jäätikön sulamisvesien kasaama pitkä, kapea soraharjanne.<br><br>Ås är en lång, smal grusrygg bildad av smältvatten från inlandsisen.<br><br>An esker is a long, narrow gravel ridge deposited by glacial meltwater." },
      
  { fi: "turvemaan jälkikäyttö", sv: "återanvändning av torvtäkt", en: "after-use of peatland", desc: "Turvemaan jälkikäyttö tarkoittaa turvetuotannosta poistuneen alueen uutta käyttöä, kuten metsitystä.<br><br>Återanvändning av torvtäkt avser ny användning av nedlagd torvtäkt, t.ex. beskogning.<br><br>After-use of peatland means new use of a cutaway peatland, such as afforestation." },
      
  { fi: "luontaisen vesitalouden palauttaminen", sv: "återskapande av ett naturligt vattenflöde", en: "restoration of natural hydrology", desc: "Luontaisen vesitalouden palauttaminen on soiden ennallistamista tukkimalla ojia ja palauttamalla pohjaveden taso.<br><br>Återskapande av ett naturligt vattenflöde är restaurering av myrar genom att dämma diken och återställa grundvattennivån.<br><br>Restoration of natural hydrology is the rehabilitation of mires by blocking ditches and restoring the water table." },
      
  { fi: "jalot lehtipuut", sv: "ädla lövträd", en: "noble hardwoods", desc: "Jalot lehtipuut ovat arvokkaita lehtipuulajeja, kuten tammi, lehmus ja vaahtera.<br><br>Ädla lövträd är värdefulla lövträdslag som ek, lind och lönn.<br><br>Noble hardwoods are valuable broadleaf tree species, such as oak, lime, and maple." },
      
  { fi: "varttunut taimikko", sv: "äldre plantskog", en: "established sapling stand", desc: "Varttunut taimikko on yli 1,3 m pituinen, jo hyvässä kasvussa oleva taimikko.<br><br>Äldre plantskog är en plantskog med höjder över 1,3 m som redan växer bra.<br><br>An established sapling stand is a sapling stand with heights over 1.3 m, actively growing." },
      
  { fi: "hirvi", sv: "älg", en: "moose", desc: "Hirvi on suuri sorkkaeläin, joka aiheuttaa usein tuhoja nuorissa metsissä.<br><br>Älg är ett stort hovdjur som ofta orsakar skador i ungskog.<br><br>The moose is a large hoofed animal often causing damage in young forests." },
      
  { fi: "mesiangervo", sv: "älggräs", en: "meadowsweet", desc: "Mesiangervo on ruoho, jolla on tuoksuvat valkoiset kukat ja kasvaa kosteilla paikoilla.<br><br>Älggräs är en ört med väldoftande vita blommor som växer på fuktiga marker.<br><br>Meadowsweet is a herb with fragrant white flowers, growing in moist places." },
      
  { fi: "keto", sv: "äng", en: "meadow", desc: "Keto on kuiva, niukkaravinteinen niittymäinen luontotyyppi.<br><br>Äng är en torr, näringsfattig gräsmarksbiotop.<br><br>A meadow is a dry, nutrient-poor grassland habitat." },
      
  { fi: "niitty", sv: "äng", en: "meadow", desc: "Niitty on ruohovaltainen, usein kosteampi avoin biotooppi.<br><br>Äng är en örtdominerad, ofta fuktigare öppen biotop.<br><br>A meadow is a herb-dominated, often moister open habitat." },
      
  { fi: "merenrantaniitty", sv: "äng vid havsstrand", en: "coastal meadow", desc: "Merenrantaniitty on suolaisen veden vaikutuksesta syntynyt rantaniitty.<br><br>Äng vid havsstrand är en strandäng påverkad av saltvatten.<br><br>A coastal meadow is a seashore meadow influenced by saline water." },
      
  { fi: "avosuo", sv: "öppen torvmark", en: "open mire", desc: "Avosuo on puuton tai lähes puuton suotyyppi.<br><br>Öppen torvmark är en trädlös eller nästan trädlös myrtyp.<br><br>An open mire is a treeless or nearly treeless mire type." },
  { fi: "ruohokorpi", sv: "örtkärr", en: "herb-rich fen", desc: "Ruohokorpi on rehevä, ruoho- ja saravaltainen metsäinen suotyyppi.<br><br>Örtkärr är ett näringsrikt, ört- och starrik skogsmyr.<br><br>A herb-rich fen is a nutrient-rich, herb- and sedge-dominated wooded mire." },
      
  { fi: "ruohoinen saraneva", sv: "örtrik starrmosse", en: "herb-rich sedge fen", desc: "Ruohoinen saraneva on nevatyyppi, jossa saroja ja ruohoja on runsaasti.<br><br>Örtrik starrmosse är ett mosseparti med riklig förekomst av starr och örter.<br><br>A herb-rich sedge fen is a fen type with abundant sedges and herbs." },
      
  { fi: "ruohoinen sararäme", sv: "örtrik starrmyr", en: "herb-rich sedge pine bog", desc: "Ruohoinen sararäme on rämetyyppi, jossa männyn lisäksi esiintyy runsaasti ruohoja ja saroja.<br><br>Örtrik starrmyr är en tallmyr med rik förekomst av örter och starr.<br><br>A herb-rich sedge pine bog is a pine bog with abundant herbs and sedges." },
      
  { fi: "ruohoinen sarakorpi", sv: "örtrikt starrkärr", en: "herb-rich sedge fen forest", desc: "Ruohoinen sarakorpi on korpityyppi, jossa on sekä metsäkasvillisuutta että runsaasti ruohoja.<br><br>Örtrikt starrkärr är en skogskärr med både trädskikt och riklig örtvegetation.<br><br>A herb-rich sedge fen forest is a forested mire type with both trees and abundant herbs." },
      
  { fi: "ruohoturvekangas", sv: "örttorvmo", en: "herb-rich drained peatland", desc: "Ruohoturvekangas on ojitettu, rehevä suotyyppi, jossa kasvaa saniaisia ja ruohoja.<br><br>Örttorvmo är en dikad, näringsrik torvmarkstyp med ormbunkar och örter.<br><br>A herb-rich drained peatland is a drained, nutrient-rich mire type with ferns and herbs." },
      
  { fi: "ruohokasvillisuus", sv: "örtvegetation", en: "herbaceous vegetation", desc: "Ruohokasvillisuus on kasvillisuutta, jossa vallitsevat ruohovartiset kasvit.<br><br>Örtvegetation är vegetation som domineras av örtartade växter.<br><br>Herbaceous vegetation is vegetation dominated by non-woody plants." },
      
  { fi: "vaihettumisvyöhyke", sv: "övergångszon", en: "transition zone", desc: "Vaihettumisvyöhyke on kahden erilaisen ekosysteemin rajapinta, kuten metsän ja suon välissä.<br><br>Övergångszon är gränsområdet mellan två olika ekosystem, som skog och myr.<br><br>A transition zone is the boundary between two different ecosystems, such as forest and mire." },
      
  { fi: "pintavalutus", sv: "översilning", en: "overland flow", desc: "Pintavalutus on veden virtaamista maanpintaa pitkin.<br><br>Översilning är vatten som rinner av längs markytan.<br><br>Overland flow is water flowing over the ground surface." },
      
  { fi: "pintavalutuskenttä", sv: "översilningsområde", en: "overland flow area", desc: "Pintavalutuskenttä on maaston kohta, jossa pintavalunta tapahtuu.<br><br>Översilningsområde är ett terrängavsnitt där översilning sker.<br><br>An overland flow area is a terrain section where overland flow occurs." },
      
  { fi: "ylispuiden poisto", sv: "överståndaravverkning", en: "overstorey removal", desc: "Ylispuiden poisto on ylispuuhakkuu, jossa vanhat ylispuut poistetaan.<br><br>Överståndaravverkning är avverkning av de gamla överståndarna.<br><br>Overstorey removal is the harvest of the old overstorey trees." },
      
  { fi: "ylispuuhakkuu", sv: "överståndaravverkning", en: "overstorey harvest", desc: "Ylispuuhakkuu on uudistushakkuun muoto, jossa ylispuut poistetaan.<br><br>Överståndaravverkning är en föryngringsavverkning där överståndarna avlägsnas.<br><br>Overstorey harvest is a regeneration felling where the overstorey trees are removed." },
      
  { fi: "ylispuu", sv: "överståndare", en: "overstorey tree", desc: "Ylispuu on metsikön ylimmässä latvuskerroksessa kasvava puu.<br><br>Överståndare är ett träd i det översta kronskiktet i ett bestånd.<br><br>An overstorey tree is a tree in the uppermost canopy layer of a stand." },
      
  { fi: "ylispuusto", sv: "överståndare", en: "overstorey", desc: "Ylispuusto on metsikön ylispuiden muodostama latvuskerros.<br><br>Överståndare är det översta trädskiktet i ett bestånd.<br><br>The overstorey is the uppermost tree layer of a stand." },
      
  { fi: "tulvamaa", sv: "översvämningsland", en: "floodplain", desc: "Tulvamaa on jokien tulva-aikoina peittämiä alavia maa-alueita.<br><br>Översvämningsland är låglänta markområden som översvämmas vid högvatten.<br><br>Floodplain is low-lying land flooded during high water periods." },
      
  { fi: "ylitiheys", sv: "övertäthet", en: "overcrowding", desc: "Ylitiheys on metsikön liian suuri runkoluku suhteessa kehitysvaiheeseen.<br><br>Övertäthet är ett för högt stamantal i förhållande till beståndets utvecklingsstadium.<br><br>Overcrowding is an excessively high stem number relative to stand development stage." },
      
  { fi: "valtapituus", sv: "övre höjd", en: "dominant height", desc: "Valtapituus on metsikön valtapuiden keskipituus, käytetty metsän kasvupaikan tuottokyvyn mittarina.<br><br>Övre höjd är medelhöjden hos de härskande träden, använd som mått på ståndortens produktionsförmåga.<br><br>Dominant height is the average height of dominant trees, used as a measure of site productivity." },
      
  { fi: "peittävyys", sv: "täckningsgrad", en: "cover percentage", desc: "Peittävyys on kasvillisuuden maanpinnan peittämä osuus prosentteina.<br><br>Täckningsgrad är den andel av markytan som täcks av vegetation, uttryckt i procent.<br><br>Cover percentage is the proportion of ground surface covered by vegetation, in percent." },
      
  { fi: "peitteisyys", sv: "slutenhet", en: "canopy closure", desc: "Peitteisyys on latvuston peittävyys taivaalta katsottuna, ilmoitetaan usein prosentteina.<br><br>Slutenhet är krontakets täthet sett från himlen, ofta angivet i procent.<br><br>Canopy closure is the density of the canopy as seen from above, often given in percent." },
      
  { fi: "avohakattu viljelyala", sv: "kalhyggesareal", en: "clearcut area", desc: "Avohakattu viljelyala on avohakkuun jälkeen uudistettava metsäala.<br><br>Kalhyggesareal är den skogsmark som ska föryngras efter ett kalhygge.<br><br>A clearcut area is the forest land to be regenerated after clearcutting." },
      
  { fi: "hakkuuhetki", sv: "avverkningstidpunkt", en: "harvesting time", desc: "Hakkuuhetki on se ajankohta, jolloin metsikkö hakataan.<br><br>Avverkningstidpunkt är den tidpunkt då ett bestånd avverkas.<br><br>Harvesting time is the point in time when a stand is logged." },
      
  { fi: "harvennuspoistuma", sv: "gallringsuttag", en: "thinning removal", desc: "Harvennuspoistuma on harvennushakkuussa poistettavien puiden määrä.<br><br>Gallringsuttag är den mängd träd som tas ut vid gallring.<br><br>Thinning removal is the amount of trees harvested in a thinning operation." },
      
  { fi: "kasvatuskelpoisuus", sv: "utvecklingsbarhet", en: "potential to develop", desc: "Kasvatuskelpoisuus on puun tai metsikön edellytys kehittyä laadukkaaksi puustoksi.<br><br>Utvecklingsbarhet är ett träds eller bestånds förutsättning att utvecklas till ett kvalitativt bestånd.<br><br>Potential to develop is the capability of a tree or stand to grow into a high-quality stand." },
      
  { fi: "metsityskelpoisuus", sv: "beskogningslämplighet", en: "suitability for afforestation", desc: "Metsityskelpoisuus on maan soveltuvuus metsän istuttamiseen.<br><br>Beskogningslämplighet är markens lämplighet för plantering av skog.<br><br>Suitability for afforestation is the land's suitability for tree planting." },
      
  { fi: "metsän kulkukelpoisuus", sv: "framkomlighet", en: "forest trafficability", desc: "Metsän kulkukelpoisuus kuvaa maaston helppoutta liikkua koneilla tai jalan.<br><br>Framkomlighet i skog beskriver hur lätt det är att ta sig fram med maskiner eller till fots.<br><br>Forest trafficability describes how easily the terrain can be traversed by machines or on foot." },
      
  { fi: "perinneympäristö", sv: "traditionell miljö", en: "traditional rural biotope", desc: "Perinneympäristö on perinteisen maatalouden ja karjatalouden synnyttämä luontotyyppi.<br><br>Traditionell miljö är en naturtyp skapad genom traditionellt jordbruk och boskapsskötsel.<br><br>A traditional rural biotope is a habitat created by traditional agriculture and animal husbandry." }
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
    const searchInput = document.getElementById('dictSearch');
    if (searchInput) searchInput.placeholder = t.searchPlaceholder;
    document.title = t.pageTitle;
    document.documentElement.lang = lang;
    langButtons.forEach(btn => {
        const bl = btn.getAttribute('data-lang');
        btn.classList.toggle('active', bl === lang);
    });
    localStorage.setItem('preferredLanguage', lang);
    renderDictionary();
}

// Sök och sortering
let dictSortCol = 'fi';
let dictSortAsc = true;

function renderDictionary() {
    const tbody = document.getElementById('dictBody');
    const searchTerm = document.getElementById('dictSearch').value.toLowerCase();
    const filtered = dictionaryData.filter(item =>
        item.fi.toLowerCase().includes(searchTerm) ||
        item.sv.toLowerCase().includes(searchTerm) ||
        item.en.toLowerCase().includes(searchTerm)
    );
    filtered.sort((a, b) => {
        let valA = (a[dictSortCol] || '').toLowerCase();
        let valB = (b[dictSortCol] || '').toLowerCase();
        if (dictSortAsc) return valA.localeCompare(valB, 'fi');
        else return valB.localeCompare(valA, 'fi');
    });
    tbody.innerHTML = '';
    filtered.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${item.fi}</td><td>${item.sv}</td><td>${item.en}</td>`;
        row.addEventListener('click', () => {
            const existing = row.nextSibling;
            if (existing && existing.classList.contains('term-definition')) {
                existing.style.display = existing.style.display === 'none' ? 'table-row' : 'none';
            } else {
                const defRow = document.createElement('tr');
                defRow.className = 'term-definition';
                defRow.innerHTML = `<td colspan="3">${item.desc}</td>`;
                defRow.style.display = 'table-row';
                row.after(defRow);
            }
        });
        tbody.appendChild(row);
    });
}

// Fliknavigering
tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const tabType = btn.getAttribute('data-tab');
        if (tabType === 'start') window.location.href = '/Startsidan/startsida.html';
        else if (tabType === 'nyheter') window.location.href = '/Organisation/organisation.html';
        else if (tabType === 'kunskapstester') window.location.href = '/Testerna/testerna.html';
        else if (tabType === 'studiematerial') window.location.href = '/Studiematerial/studiematerial.html';
        else if (tabType === 'jobb') window.location.href = '/jobb/jobb.html';
        else if (tabType === 'blanketter') window.location.href = '/Blanketter/blanketter.html';
        else if (tabType === 'skolor') {window.location.href = '/Skola/skola.html';
        }
        // 'ordbok' är aktiv
    });
});

// Sökfält
document.getElementById('dictSearch').addEventListener('input', renderDictionary);

// Sorteringsknappar
document.querySelectorAll('.sort-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const col = btn.getAttribute('data-col');
        if (dictSortCol === col) dictSortAsc = !dictSortAsc;
        else { dictSortCol = col; dictSortAsc = true; }
        renderDictionary();
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

// Starta
updateLanguage(currentLang);