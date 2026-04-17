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
            text: 'Hur väljs de objekt som ska granskas i första hand?',
            options: ['Alla objekt granskas', 'Genom slumpmässigt urval eller efter prövning', 'Endast efter anmälan från markägaren'],
            correct: 1
        },
        fi: {
            text: 'Miten tarkastettavat kohteet valitaan ensisijaisesti?',
            options: ['Kaikki kohteet tarkastetaan', 'Satunnaisotannalla tai harkinnanvaraisesti', 'Vain maanomistajan ilmoituksesta'],
            correct: 1
        },
        en: {
            text: 'How are the objects to be inspected primarily selected?',
            options: ['All objects are inspected', 'By random sampling or discretionary selection', 'Only upon notification by the landowner'],
            correct: 1
        }
    },
    // 2.3 Tidpunkt för granskningarna
    {
        sv: {
            text: 'När ska granskningar enligt finansieringslagen i regel utföras?',
            options: ['Före planen görs upp', 'Efter planen gjorts eller arbetet utförts, men före sista utbetalningen', 'När som helst under projektets gång'],
            correct: 1
        },
        fi: {
            text: 'Milloin rahoituslain mukaiset tarkastukset on pääsääntöisesti tehtävä?',
            options: ['Ennen suunnitelman laatimista', 'Suunnitelman tai työn valmistuttua, mutta ennen viimeistä maksatusta', 'Milloin tahansa hankkeen aikana'],
            correct: 1
        },
        en: {
            text: 'When should inspections under the Financing Act generally be carried out?',
            options: ['Before the plan is drawn up', 'After the plan or work is completed, but before the final payment', 'At any time during the project'],
            correct: 1
        }
    },
    // 2.4 Kvalitetskontroll
    {
        sv: {
            text: 'Vem utför årligen en kvalitetskontroll av Skogscentralens granskningsverksamhet?',
            options: ['Jord- och skogsbruksministeriet', 'Livsmedelssverket', 'Finlands skogscentral'],
            correct: 1
        },
        fi: {
            text: 'Kuka suorittaa vuosittain Metsäkeskuksen tarkastustoiminnan laadunvalvonnan?',
            options: ['Maa- ja metsätalousministeriö', 'Ruokavirasto', 'Suomen metsäkeskus'],
            correct: 1
        },
        en: {
            text: 'Who carries out an annual quality control of the Finnish Forest Centre\'s inspection activities?',
            options: ['Ministry of Agriculture and Forestry', 'Finnish Food Authority', 'Finnish Forest Centre'],
            correct: 1
        }
    },
    // 3.3 Bedömningsskala
    {
        sv: {
            text: 'Vilken bedömningsskala används i allmänhet vid granskning av objekt (med vissa undantag)?',
            options: ['1–5', 'Tregradig: Rätt/God, Godkänt/kräver anmärkning, Bristfällig/felaktig', 'Endast Godkänd eller Underkänd'],
            correct: 1
        },
        fi: {
            text: 'Mitä arviointiasteikkoa käytetään yleisesti kohteiden tarkastuksessa (joitakin poikkeuksia lukuun ottamatta)?',
            options: ['1–5', 'Kolmiportainen: Oikein/Hyvä, Hyväksyttävä/Huomautettavaa, Puutteellinen/Virheellinen', 'Vain Hyväksytty tai Hylätty'],
            correct: 1
        },
        en: {
            text: 'Which assessment scale is generally used in object inspections (with some exceptions)?',
            options: ['1–5', 'Three-tier: Correct/Good, Acceptable/remark required, Deficient/incorrect', 'Only Pass or Fail'],
            correct: 1
        }
    },
    // 3.5 Mätning av provytor
    {
        sv: {
            text: 'Hur många provytor ska man alltid mäta som minimum vid systematisk mätning, även på små figurer?',
            options: ['3', '5', '10'],
            correct: 1
        },
        fi: {
            text: 'Kuinka monta koealaa on aina mitattava vähintään systemaattisessa mittauksessa, myös pienillä kuvioilla?',
            options: ['3', '5', '10'],
            correct: 1
        },
        en: {
            text: 'How many sample plots must always be measured as a minimum in systematic measurement, even on small stands?',
            options: ['3', '5', '10'],
            correct: 1
        }
    },
    // 3.10 Stenighetsklass
    {
        sv: {
            text: 'När aktiveras bedömningen av stenighetsklass på datasamlaren?',
            options: ['Alltid', 'När jordarten är stenig (klass 30,31,32,40,50)', 'När jordarten är stenig (klass 20,21,22,25,29)'],
            correct: 1
        },
        fi: {
            text: 'Milloin kivisyysluokan arviointi aktivoituu maastotallentimessa?',
            options: ['Aina', 'Kun maalaji on kivinen (luokat 30,31,32,40,50)', 'Kun maalaji on kivinen (luokat 20,21,22,25,29)'],
            correct: 1
        },
        en: {
            text: 'When is the assessment of stoniness class activated on the data logger?',
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
            text: 'Vad händer om man misstänker att plantbeståndet inte uppfyller minimikraven i skogslagen och tidsfristen snart löper ut?',
            options: ['Man räknar även kompletterande trädslags plantor', 'Man förlänger tidsfristen automatiskt', 'Man röjer beståndet'],
            correct: 0
        },
        fi: {
            text: 'Mitä tehdään, jos epäillään, ettei taimikko täytä metsälain vähimmäisvaatimuksia ja määräaika on umpeutumassa?',
            options: ['Lasketaan mukaan myös täydentävien puulajien taimet', 'Määräaikaa pidennetään automaattisesti', 'Metsikkö raivataan'],
            correct: 0
        },
        en: {
            text: 'What is done if it is suspected that the seedling stand does not meet the minimum requirements of the Forest Act and the deadline is about to expire?',
            options: ['Seedlings of supplementary tree species are also counted', 'The deadline is automatically extended', 'Brush cut the stand'],
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
            text: 'Vad är minimibredden för körbanan på en basväg (undantagsvis på raksträckor)?',
            options: ['3,0 m', '3,6 m', '4,0 m'],
            correct: 1
        },
        fi: {
            text: 'Mikä on perustien ajouran vähimmäisleveys (poikkeuksellisesti suorilla osuuksilla)?',
            options: ['3,0 m', '3,6 m', '4,0 m'],
            correct: 1
        },
        en: {
            text: 'What is the minimum width of the carriageway on a basic forest road (exceptionally on straight sections)?',
            options: ['3.0 m', '3.6 m', '4.0 m'],
            correct: 1
        }
    },
    {
        sv: {
            text: 'Hur långt rekommenderas avståndet vara mellan vändplaner på en skogsväg?',
            options: ['200–400 m', '500–800 m', '1000–2000 m'],
            correct: 2
        },
        fi: {
            text: 'Kuinka pitkä on suositeltu etäisyys kääntöpaikkojen välillä metsätiellä?',
            options: ['200–400 m', '500–800 m', '1000–2000 m'],
            correct: 2
        },
        en: {
            text: 'What is the recommended distance between turnarounds on a forest road?',
            options: ['200–400 m', '500–800 m', '1000–2000 m'],
            correct: 2
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
            text: 'Hur många stubbar bör man mäta vid en fältgranskning av stubbehandling?',
            options: ['Minst 20 st', 'Minst 50 st', 'Minst 100 st'],
            correct: 1
        },
        fi: {
            text: 'Kuinka monta kantoa tulisi mitata kantokäsittelyn maastotarkastuksessa?',
            options: ['Vähintään 20 kpl', 'Vähintään 50 kpl', 'Vähintään 100 kpl'],
            correct: 1
        },
        en: {
            text: 'How many stumps should be measured during a field inspection of stump treatment?',
            options: ['At least 20', 'At least 50', 'At least 100'],
            correct: 1
        }
    },
    {
        sv: {
            text: 'Vid vilken andel otillräckligt täckta stubbar bedöms arbetsresultatet som felaktigt/odugligt?',
            options: ['0–9 %', '10–29 %', '30 % eller fler'],
            correct: 2
        },
        fi: {
            text: 'Millä puutteellisesti peitettyjen kantojen osuudella työtulos arvioidaan virheelliseksi/kelvottomaksi?',
            options: ['0–9 %', '10–29 %', '30 % tai enemmän'],
            correct: 2
        },
        en: {
            text: 'At what proportion of insufficiently covered stumps is the work result assessed as incorrect/unusable?',
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