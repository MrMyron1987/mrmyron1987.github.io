// ============================================================
// 1. SPRÅKTEXTER (sv, fi, en)
// ============================================================
const uiTexts = {
    sv: {
        pageTitle: '📋 Granskningsinstruktioner',
        backBtn: '⬅ Tillbaka till testerna',
        progress: (c, t) => `Fråga ${c} / ${t}`,
        checkBtn: '✅ Kontrollera',
        nextBtn: '➡️ Nästa',
        correct: '✅ Rätt! Bra svar.',
        wrong: (correctAnswer) => `❌ Fel. Rätt svar: "${correctAnswer}".`,
        alreadyChecked: '⚠️ Du har redan kontrollerat denna fråga. Gå vidare.',
        mustSelect: '❓ Vänligen välj ett svarsalternativ först.',
        resultTitle: (c, t) => `📋 Granskningsquiz klar! 📋<br>Rätt: ${c} / ${t}`,
        perfect: '🎉 Perfekt! Alla rätt!',
        good: '💪 Bra kämpat! Öva gärna igen.',
        restartBtn: '🔄 Öva igen',
        backFromResult: '📋 Välj annat test'
    },
    fi: {
        pageTitle: '📋 Tarkastusohjeet',
        backBtn: '⬅ Takaisin testeihin',
        progress: (c, t) => `Kysymys ${c} / ${t}`,
        checkBtn: '✅ Tarkista',
        nextBtn: '➡️ Seuraava',
        correct: '✅ Oikein! Hyvä vastaus.',
        wrong: (oikea) => `❌ Väärin. Oikea vastaus: "${oikea}".`,
        alreadyChecked: '⚠️ Olet jo tarkistanut tämän kysymyksen. Siirry eteenpäin.',
        mustSelect: '❓ Valitse ensin vastausvaihtoehto.',
        resultTitle: (c, t) => `📋 Tarkastusvisa valmis! 📋<br>Oikein: ${c} / ${t}`,
        perfect: '🎉 Täydellistä! Kaikki oikein!',
        good: '💪 Hyvin yritetty! Harjoittele lisää.',
        restartBtn: '🔄 Harjoittele uudelleen',
        backFromResult: '📋 Valitse toinen testi'
    },
    en: {
        pageTitle: '📋 Inspection Instructions',
        backBtn: '⬅ Back to tests',
        progress: (c, t) => `Question ${c} / ${t}`,
        checkBtn: '✅ Check',
        nextBtn: '➡️ Next',
        correct: '✅ Correct! Good answer.',
        wrong: (correctAnswer) => `❌ Wrong. Correct answer: "${correctAnswer}".`,
        alreadyChecked: '⚠️ You have already checked this question. Move on.',
        mustSelect: '❓ Please select an answer first.',
        resultTitle: (c, t) => `📋 Inspection quiz complete! 📋<br>Correct: ${c} / ${t}`,
        perfect: '🎉 Perfect! All correct!',
        good: '💪 Good effort! Practice again.',
        restartBtn: '🔄 Practice again',
        backFromResult: '📋 Choose another test'
    }
};

// ============================================================
// 2. FRÅGEBANK (20 frågor från angivna avsnitt)
// ============================================================
const questionBank = [
    // 2.1 Hur objektet väljs
    {
        sv: {
            text: 'Hur väljer man ut figurer som ska granskas i fält?',
            options: ['Alla objekt granskas', 'Genom slumpmässigt urval eller efter prövning', 'Endast efter anmälan från markägaren'],
            correct: 1
        },
        fi: {
            text: 'Miten valitset kentällä tutkittavat luvut?',
            options: ['Kaikki kohteet tarkastetaan', 'Satunnaisotannalla tai harkinnanvaraisesti', 'Vain maanomistajan ilmoituksesta'],
            correct: 1
        },
        en: {
            text: 'How do you select figures to be examined in the field?',
            options: ['All objects are inspected', 'By random sampling or discretionary selection', 'Only upon notification by the landowner'],
            correct: 1
        }
    },
    // 2.3 Tidpunkt för granskningarna
    {
        sv: {
            text: 'När ska en fältgranskning av ett genomfört kemera- eller beskogningsprojekt i regel utföras?',
            options: ['Innan arbetet påbörjas', 'Efter att arbetet är slutfört, men innan den sista utbetalningen görs', 'När som helst, så länge det sker före projektets slutdatum'],
            correct: 1
        },
        fi: {
            text: 'Milloin toteutetun kemera- tai metsityslain hankkeen maastotarkastus on pääsääntöisesti tehtävä?',
            options: ['Ennen työn aloittamista', 'Työn valmistuttua, mutta ennen viimeisen maksuerän suorittamista', 'Milloin tahansa, kunhan se tapahtuu ennen hankkeen päättymispäivää'],
            correct: 1
        },
        en: {
            text: 'When should a field inspection of a completed Kemera or afforestation project generally be carried out?',
            options: ['Before the work begins', 'After the work is finished, but before the final payment is made', 'At any time, as long as it is before the project end date'],
            correct: 1
        }
    },
    // 2.4 Kvalitetskontroll
    {
        sv: {
            text: 'Vem kontrollerar årligen kvaliteten på de fältgranskningar som Skogscentralen utför enligt skogslagen och finansieringslagen?',
            options: ['Jord- och skogsbruksministeriet', 'Livsmedelssverket', 'Finlands skogscentral'],
            correct: 1
        },
        fi: {
            text: 'Kuka tarkastaa vuosittain Metsäkeskuksen metsälain ja rahoituslain mukaisten maastotarkastusten laadun?',
            options: ['Maa- ja metsätalousministeriö', 'Ruokavirasto', 'Suomen metsäkeskus'],
            correct: 1
        },
        en: {
            text: 'Who annually checks the quality of the field inspections carried out by the Finnish Forest Centre under the Forest Act and the Financing Act?',
            options: ['Ministry of Agriculture and Forestry', 'Finnish Food Authority', 'Finnish Forest Centre'],
            correct: 1
        }
    },
    // 3.3 Bedömningsskala
    {
        sv: {
            text: 'Vilken bedömningsskala används i allmänhet vid fältgranskning av skogsbruksåtgärder (med vissa undantag)?',
            options: ['1–5', 'Tregradig: Rätt/God, Godkänt/kräver anmärkning, Bristfällig/felaktig', 'Endast Godkänd eller Underkänd'],
            correct: 1
        },
        fi: {
            text: 'Mitä arviointiasteikkoa käytetään yleisesti metsänhoitotoimenpiteiden maastotarkastuksissa (joitakin poikkeuksia lukuun ottamatta)?',
            options: ['1–5', 'Kolmiportainen: Oikein/Hyvä, Hyväksyttävä/Huomautettavaa, Puutteellinen/Virheellinen', 'Vain Hyväksytty tai Hylätty'],
            correct: 1
        },
        en: {
            text: 'Which assessment scale is generally used in field inspections of forestry operations (with some exceptions)?',
            options: ['1–5', 'Three-tier: Correct/Good, Acceptable/remark required, Deficient/incorrect', 'Only Pass or Fail'],
            correct: 1
        }
    },
    // 3.5 Mätning av provytor
    {
        sv: {
            text: 'Hur många provytor måste man minst mäta vid en systematisk mätning, även på små figurer?',
            options: ['3', '5', '10'],
            correct: 1
        },
        fi: {
            text: 'Kuinka monta koealaa on vähintään mitattava systemaattisessa mittauksessa, pienilläkin kuvioilla?',
            options: ['3', '5', '10'],
            correct: 1
        },
        en: {
            text: 'What is the minimum number of sample plots that must be measured in a systematic measurement, even on small stands?',
            options: ['3', '5', '10'],
            correct: 1
        }
    },
    // 3.10 Stenighetsklass
    {
        sv: {
            text: 'När ska man bedöma stenighetsklass i fältgranskningen?',
            options: ['Alltid', 'När jordarten är stenig (klass 30,31,32,40,50)', 'När jordarten är stenig (klass 20,21,22,25,29)'],
            correct: 1
        },
        fi: {
            text: 'Milloin kivisyysluokka on arvioitava maastotarkastuksessa?',
            options: ['Aina', 'Kun maalaji on kivinen (luokat 30,31,32,40,50)', 'Kun maalaji on kivinen (luokat 20,21,22,25,29)'],
            correct: 1
        },
        en: {
            text: 'When must the stoniness class be assessed in a field inspection?',
            options: ['Always', 'When the soil type is stony (classes 30,31,32,40,50)', 'When the soil type is stony (classes 20,21,22,25,29)'],
            correct: 1
        }
    },
    // 3.11 Vattenvård
    {
        sv: {
            text: 'Hur bred skyddszon rekommenderas mot vattendrag vid avverkning?',
            options: ['1 meter', '5 meter', '10 meter'],
            correct: 1
        },
        fi: {
            text: 'Kuinka leveä suojavyöhyke suositellaan jätettäväksi vesistön varteen hakkuussa?',
            options: ['1 metri', '5 metriä', '10 metriä'],
            correct: 1
        },
        en: {
            text: 'What width of buffer zone is recommended along water bodies during felling?',
            options: ['1 metre', '5 metres', '10 metres'],
            correct: 1
        }
    },
    // 4.2 Avverkningar enligt skogslagens 5 § (olikåldrig skog)
    {
        sv: {
            text: 'Hur bedöms avverkningar i olikåldriga bestånd?',
            options: ['Genom normal mätning per figur', 'Genom normal mätning per fastighet', 'Genom att mäta alla träd'],
            correct: 0
        },
        fi: {
            text: 'Miten eri-ikäisrakenteisten metsien hakkuut arvioidaan?',
            options: ['Normaalilla kuvioittaisella mittauksella', 'Normaalin mittauksen avulla kiinteistöä kohden', 'Mittaamalla kaikki puut'],
            correct: 0
        },
        en: {
            text: 'How are fellings in uneven-aged stands assessed?',
            options: ['By normal stand-level measurement', 'Through normal measurement per property', 'By measuring all trees'],
            correct: 0
        }
    },
    // 4.3 Avverkningar för ändring av markanvändningsslag
    {
        sv: {
            text: 'Vad granskas vid anmälningar om avverkning för ändring av markanvändningsslag?',
            options: ['Att markanvändningen har ändrats och området inte längre används för skogsbruk', 'Att tillräckligt många träd har lämnats kvar', 'Att byggnader har upprättats'],
            correct: 0
        },
        fi: {
            text: 'Mitä tarkastetaan maankäyttölajin muutosta varten tehtyjen hakkuuilmoitusten yhteydessä?',
            options: ['Että maankäyttö on muuttunut eikä aluetta enää käytetä metsätalouteen', 'Että riittävästi puita on jätetty', 'Että rakennuksia on pystytetty'],
            correct: 0
        },
        en: {
            text: 'What is checked in connection with felling notifications for land use change?',
            options: ['That land use has changed and the area is no longer used for forestry', 'That enough trees have been left', 'That buildings have been erected'],
            correct: 0
        }
    },
    // 4.5 Uppföljning av drivningskvaliteten
    {
        sv: {
            text: 'Vilken radie används normalt för cirkelprovytor vid granskning av drivningskvalitet?',
            options: ['3,99 m', '5,64 m', '7,98 m'],
            correct: 1
        },
        fi: {
            text: 'Mitä sädettä käytetään yleensä ympyräkoealoilla korjuujäljen tarkastuksessa?',
            options: ['3,99 m', '5,64 m', '7,98 m'],
            correct: 1
        },
        en: {
            text: 'What radius is normally used for circular sample plots when inspecting logging quality?',
            options: ['3.99 m', '5.64 m', '7.98 m'],
            correct: 1
        }
    },
    // 4.9 Övervakning av skogslagen
    {
        sv: {
            text: 'Vad ska granskaren göra om det misstänks att plantbeståndet inte når upp till skogslagens minimikrav, och den lagstadgade tidsfristen för att anlägga ny skog snart går ut?',
            options: ['Räkna in alla godkända plantor, även de av kompletterande trädslag, för att se om totalantalet uppfyller lagkravet.', 'Man förlänger tidsfristen automatiskt med skogscentralen', 'Man röjer beståndet'],
            correct: 0
        },
        fi: {
            text: 'Mitä tarkastajan tulee tehdä, jos epäillään, ettei taimikko täytä metsälain vähimmäisvaatimuksia ja metsänuudistamisen lakisääteinen määräaika on umpeutumassa?',
            options: ['Laske kaikki hyväksytyt taimet, mukaan lukien täydentävien puulajien taimet, nähdäksesi, täyttääkö kokonaismäärä lakisääteiset vaatimukset.', 'Metsähallitus pidentää määräaikaa automaattisesti', 'Metsikkö raivataan'],
            correct: 0
        },
        en: {
            text: 'What must the inspector do if it is suspected that the seedling stand does not meet the Forest Acts minimum requirements and the statutory deadline for establishing a new forest is about to expire?',
            options: ['Count all approved saplings, including those of complementary tree species, to see if the total number meets the legal requirement.', 'The deadline is automatically extended by the forestry authority.', 'Brush cut the stand'],
            correct: 0
        }
    },
    // 5.5 Skogsförnyelse (beskogningslagen)
    {
        sv: {
            text: 'Vilket trädslag får inte användas som huvudträdslag på tidigare torvproduktionsområden enligt beskogningslagen?',
            options: ['Tall', 'Gran', 'Vårtbjörk'],
            correct: 1
        },
        fi: {
            text: 'Mitå puulajia ei saa käyttää pääpuulajina entisillä turvetuotantoalueilla metsityslain mukaan?',
            options: ['Mänty', 'Kuusi', 'Rauduskoivu'],
            correct: 1
        },
        en: {
            text: 'Which tree species may not be used as the main tree species on former peat production areas under the Afforestation Act?',
            options: ['Pine', 'Spruce', 'Silver birch'],
            correct: 1
        }
    },
    // 5.6 Vitaliseringsgödsling
    {
        sv: {
            text: 'Vilken är den vanligaste orsaken till vitaliseringsgödsling på torvmark?',
            options: ['Kvävebrist', 'Brist på fosfor och kalium', 'För högt pH'],
            correct: 1
        },
        fi: {
            text: 'Mikä on yleisin syy terveyslannoitukseen turvemailla?',
            options: ['Typen puute', 'Fosforin ja kaliumin puute', 'Liian korkea pH'],
            correct: 1
        },
        en: {
            text: 'What is the most common reason for vitality fertilisation on peatlands?',
            options: ['Nitrogen deficiency', 'Deficiency of phosphorus and potassium', 'Too high pH'],
            correct: 1
        }
    },
    // 5.7 Vård av skogsnaturen, naturvårdsprojekt
    {
        sv: {
            text: 'Vad granskas i ett miljöstödsprojekt?',
            options: ['Att objektet uppfyller kriterierna enligt skogslagens 10 § eller Metso', 'Att objektet uppfyller kriterierna enligt skogslagens 5 §', 'Att objektet uppfyller kriterierna enligt Metso'],
            correct: 0
        },
        fi: {
            text: 'Mitä ympäristötukihankkeessa tarkastetaan?',
            options: ['Että kohde täyttää metsälain 10 §:n tai Metso-kriteerit', 'Että kohde täyttää metsälain 5 §:n', 'Että kohde täyttää Metso-kriteerit'],
            correct: 0
        },
        en: {
            text: 'What is checked in an environmental support project?',
            options: ['That the site meets the criteria of Section 10 of the Forest Act or Metso', 'That the site meets the criteria of Section 5 of the Forest Act', 'That the site meets the criteria of Metso'],
            correct: 0
        }
    },
    // 5.9 Bedömning av kvaliteten på vägprojekt
    {
        sv: {
            text: 'Hur bred måste skogsbilvägen vara om vägen är rak?',
            options: ['3,0 m', '3,6 m', '4,0 m'],
            correct: 1
        },
        fi: {
            text: 'Kuinka leveä metsäautotien pitää olla, jos tie on suora?',
            options: ['3,0 m', '3,6 m', '4,0 m'],
            correct: 1
        },
        en: {
            text: 'How wide does the forest road have to be if the road is straight?',
            options: ['3.0 m', '3.6 m', '4.0 m'],
            correct: 1
        }
    },
    // (F.d. avstånd vändplaner - nu mötesplatser)
    {
        sv: {
            text: 'Hur långt avstånd ska det minst vara mellan mötesplatser på en skogsbilväg?',
            options: ['400 m', '600 m', '800 m'],
            correct: 1
        },
        fi: {
            text: 'Kuinka pitkä välimatka on vähintään oltava metsätien kohtaamispaikkojen välillä?',
            options: ['400 m', '600 m', '800 m'],
            correct: 1
        },
        en: {
            text: 'What is the minimum distance required between passing places on a forest road?',
            options: ['400 m', '600 m', '800 m'],
            correct: 1
        }
    },
    // 6.1 Lag om bekämpning av skogsskador
    {
        sv: {
            text: 'Vid vilken volym betraktas en trave av tallvirke som en enskild trave enligt skogsskadelagen?',
            options: ['Minst 20 m³', 'Minst 50 m³', 'Minst 100 m³'],
            correct: 1
        },
        fi: {
            text: 'Minkä kokoisena mäntypuutavarapino katsotaan erilliseksi pinoksi metsätuholain mukaan?',
            options: ['Vähintään 20 m³', 'Vähintään 50 m³', 'Vähintään 100 m³'],
            correct: 1
        },
        en: {
            text: 'At what volume is a pile of pine timber considered a separate pile under the Forest Damage Act?',
            options: ['At least 20 m³', 'At least 50 m³', 'At least 100 m³'],
            correct: 1
        }
    },
    // 6.3 Bekämpning av rotticka
    {
        sv: {
            text: 'Vid fältgranskning av stubbehandling mot rotticka under pågående arbete, hur många stubbar ska mätas?',
            options: ['Minst 20 st', 'Minst 50 st', 'Minst 100 st'],
            correct: 1
        },
        fi: {
            text: 'Kuinka monta kantoa on mitattava juurikäävän torjunnan maastotarkastuksessa työn aikana?',
            options: ['Vähintään 20 kpl', 'Vähintään 50 kpl', 'Vähintään 100 kpl'],
            correct: 1
        },
        en: {
            text: 'During a field inspection of stump treatment against root rot while work is in progress, how many stumps should be measured?',
            options: ['At least 20', 'At least 50', 'At least 100'],
            correct: 1
        }
    },
    // Andel otillräckligt täckta stubbar (förtydligad)
    {
        sv: {
            text: 'Enligt instruktionen, vid vilken andel stubbar med otillräcklig täckning (under 90 %) bedöms bekämpningsarbetet mot rotticka som felaktigt?',
            options: ['0–9 %', '10–29 %', '30 % eller fler'],
            correct: 2
        },
        fi: {
            text: 'Ohjeen mukaan, millä puutteellisesti peitettyjen (alle 90 %) kantojen osuudella juurikäävän torjuntatyö arvioidaan virheelliseksi?',
            options: ['0–9 %', '10–29 %', '30 % tai enemmän'],
            correct: 2
        },
        en: {
            text: 'According to the instructions, at what proportion of stumps with insufficient coverage (under 90%) is the root rot control work assessed as incorrect?',
            options: ['0–9%', '10–29%', '30% or more'],
            correct: 2
        }
    }
];

// ============================================================
// 3. HJÄLPFUNKTIONER
// ============================================================
function shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function getCurrentLanguage() {
    const saved = localStorage.getItem('preferredLanguage');
    return (saved && uiTexts[saved]) ? saved : 'sv';
}

function getUIText(key, ...args) {
    const lang = getCurrentLanguage();
    const val = uiTexts[lang][key];
    return typeof val === 'function' ? val(...args) : val;
}

// ============================================================
// 4. STATE
// ============================================================
let currentQuestions = [];
let currentIndex = 0;
let correctCount = 0;
let answered = false;
let selectedOption = null;

const quizCard = document.getElementById('quizCard');
const resultCard = document.getElementById('resultCard');
const progressEl = document.getElementById('progressIndicator');
const questionText = document.getElementById('questionText');
const optionsDiv = document.getElementById('optionsContainer');
const feedbackDiv = document.getElementById('feedbackArea');
const checkBtn = document.getElementById('checkBtn');
const nextBtn = document.getElementById('nextBtn');
const restartBtn = document.getElementById('restartBtn');
const backFromResultBtn = document.getElementById('backFromResultBtn');
const resultStats = document.getElementById('resultStats');

// ============================================================
// 5. UPPDATERA UI-TEXTER
// ============================================================
function updateUITexts() {
    const lang = getCurrentLanguage();
    document.title = uiTexts[lang].pageTitle;
    document.getElementById('pageTitle').textContent = uiTexts[lang].pageTitle;
    document.getElementById('backToTestsBtn').textContent = uiTexts[lang].backBtn;
    checkBtn.textContent = uiTexts[lang].checkBtn;
    nextBtn.textContent = uiTexts[lang].nextBtn;
    restartBtn.textContent = uiTexts[lang].restartBtn;
    backFromResultBtn.textContent = uiTexts[lang].backFromResult;
}

// ============================================================
// 6. STARTA / ÅTERSTÄLL QUIZ
// ============================================================
function startQuiz() {
    const lang = getCurrentLanguage();
    const rawQuestions = questionBank.map(q => ({
        text: q[lang].text,
        options: q[lang].options,
        correct: q[lang].correct
    }));
    // Slumpa frågeordning och blanda svarsalternativ
    currentQuestions = shuffleArray(rawQuestions).map(q => {
        const opts = q.options.map((opt, idx) => ({ text: opt, isCorrect: idx === q.correct }));
        const shuffledOpts = shuffleArray(opts);
        const newCorrect = shuffledOpts.findIndex(opt => opt.isCorrect);
        return {
            text: q.text,
            options: shuffledOpts.map(opt => opt.text),
            correct: newCorrect
        };
    });
    
    currentIndex = 0;
    correctCount = 0;
    answered = false;
    selectedOption = null;
    
    quizCard.classList.remove('hidden');
    resultCard.classList.add('hidden');
    
    updateUITexts();
    renderQuestion();
}

// ============================================================
// 7. RENDERA FRÅGA
// ============================================================
function renderQuestion() {
    if (currentIndex >= currentQuestions.length) {
        showResult();
        return;
    }
    
    const q = currentQuestions[currentIndex];
    questionText.textContent = q.text;
    progressEl.textContent = getUIText('progress', currentIndex + 1, currentQuestions.length);
    
    optionsDiv.innerHTML = '';
    q.options.forEach((opt, idx) => {
        const optDiv = document.createElement('div');
        optDiv.className = 'option';
        optDiv.textContent = opt;
        optDiv.dataset.index = idx;
        optDiv.addEventListener('click', () => {
            if (answered) return;
            document.querySelectorAll('.option').forEach(el => el.classList.remove('selected'));
            optDiv.classList.add('selected');
            selectedOption = idx;
        });
        optionsDiv.appendChild(optDiv);
    });
    
    feedbackDiv.classList.add('hidden');
    feedbackDiv.innerHTML = '';
    feedbackDiv.className = 'feedback';
    checkBtn.disabled = false;
    nextBtn.disabled = true;
    answered = false;
    selectedOption = null;
}

// ============================================================
// 8. KONTROLLERA SVAR
// ============================================================
function checkAnswer() {
    if (answered) {
        feedbackDiv.classList.remove('hidden');
        feedbackDiv.innerHTML = getUIText('alreadyChecked');
        feedbackDiv.className = 'feedback wrong';
        return;
    }
    if (selectedOption === null) {
        feedbackDiv.classList.remove('hidden');
        feedbackDiv.innerHTML = getUIText('mustSelect');
        feedbackDiv.className = 'feedback wrong';
        return;
    }
    
    const q = currentQuestions[currentIndex];
    const isCorrect = (selectedOption === q.correct);
    if (isCorrect) correctCount++;
    answered = true;
    
    feedbackDiv.classList.remove('hidden');
    if (isCorrect) {
        feedbackDiv.innerHTML = getUIText('correct');
        feedbackDiv.className = 'feedback correct';
    } else {
        const correctAnswer = q.options[q.correct];
        feedbackDiv.innerHTML = getUIText('wrong', correctAnswer);
        feedbackDiv.className = 'feedback wrong';
    }
    
    document.querySelectorAll('.option').forEach(opt => opt.classList.add('disabled'));
    checkBtn.disabled = true;
    nextBtn.disabled = false;
}

// ============================================================
// 9. NÄSTA FRÅGA
// ============================================================
function nextQuestion() {
    if (!answered) {
        feedbackDiv.classList.remove('hidden');
        feedbackDiv.innerHTML = getUIText('mustSelect');
        feedbackDiv.className = 'feedback wrong';
        return;
    }
    currentIndex++;
    renderQuestion();
}

// ============================================================
// 10. VISA RESULTAT
// ============================================================
function showResult() {
    quizCard.classList.add('hidden');
    resultCard.classList.remove('hidden');
    
    const total = currentQuestions.length;
    const correct = correctCount;
    const lang = getCurrentLanguage();
    
    let message = getUIText('resultTitle', correct, total);
    if (correct === total) {
        message += `<br>${uiTexts[lang].perfect}`;
    } else {
        message += `<br>${uiTexts[lang].good}`;
    }
    resultStats.innerHTML = message;
}

// ============================================================
// 11. EVENT LISTENERS
// ============================================================
document.getElementById('backToTestsBtn').addEventListener('click', () => {
    window.location.href = '../Testerna/testerna.html';
});

checkBtn.addEventListener('click', checkAnswer);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', startQuiz);
backFromResultBtn.addEventListener('click', () => {
    window.location.href = '../Testerna/testerna.html';
});

// ============================================================
// 12. INIT
// ============================================================
startQuiz();