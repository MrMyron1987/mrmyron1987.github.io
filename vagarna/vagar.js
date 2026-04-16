// ============================================================
// 1. SPRÅKTEXTER
// ============================================================
const uiTexts = {
    sv: {
        pageTitle: '🚧 Vägar',
        backBtn: '⬅ Tillbaka till testerna',
        progress: (c, t) => `Fråga ${c} / ${t}`,
        checkBtn: '✅ Kontrollera',
        nextBtn: '➡️ Nästa',
        correct: '✅ Rätt! Bra svar.',
        wrong: (correctAnswer) => `❌ Fel. Rätt svar: "${correctAnswer}".`,
        alreadyChecked: '⚠️ Du har redan kontrollerat denna fråga. Gå vidare.',
        mustSelect: '❓ Vänligen välj ett svarsalternativ först.',
        resultTitle: (c, t) => `🚧 Vägquiz klar! 🚧<br>Rätt: ${c} / ${t}`,
        perfect: '🎉 Perfekt! Alla rätt!',
        good: '💪 Bra kämpat! Öva gärna igen.',
        restartBtn: '🔄 Öva igen',
        backFromResult: '📋 Välj annat test'
    },
    fi: {
        pageTitle: '🚧 Tiet',
        backBtn: '⬅ Takaisin testeihin',
        progress: (c, t) => `Kysymys ${c} / ${t}`,
        checkBtn: '✅ Tarkista',
        nextBtn: '➡️ Seuraava',
        correct: '✅ Oikein! Hyvä vastaus.',
        wrong: (oikea) => `❌ Väärin. Oikea vastaus: "${oikea}".`,
        alreadyChecked: '⚠️ Olet jo tarkistanut tämän kysymyksen. Siirry eteenpäin.',
        mustSelect: '❓ Valitse ensin vastausvaihtoehto.',
        resultTitle: (c, t) => `🚧 Tietovisa valmis! 🚧<br>Oikein: ${c} / ${t}`,
        perfect: '🎉 Täydellistä! Kaikki oikein!',
        good: '💪 Hyvin yritetty! Harjoittele lisää.',
        restartBtn: '🔄 Harjoittele uudelleen',
        backFromResult: '📋 Valitse toinen testi'
    },
    en: {
        pageTitle: '🚧 Forest Roads',
        backBtn: '⬅ Back to tests',
        progress: (c, t) => `Question ${c} / ${t}`,
        checkBtn: '✅ Check',
        nextBtn: '➡️ Next',
        correct: '✅ Correct! Good answer.',
        wrong: (correctAnswer) => `❌ Wrong. Correct answer: "${correctAnswer}".`,
        alreadyChecked: '⚠️ You have already checked this question. Move on.',
        mustSelect: '❓ Please select an answer first.',
        resultTitle: (c, t) => `🚧 Road quiz complete! 🚧<br>Correct: ${c} / ${t}`,
        perfect: '🎉 Perfect! All correct!',
        good: '💪 Good effort! Practice again.',
        restartBtn: '🔄 Practice again',
        backFromResult: '📋 Choose another test'
    }
};

// ============================================================
// 2. FRÅGEBANK – 20 frågor baserade på finska rekommendationer
// ============================================================
const questionBank = [
    // 1. Bärighetsmål vid renovering
    {
        sv: {
            text: 'Vilket är det allmänna målsatta värdet för bärigheten (E₂-värde) vid planering av reparation av vägkroppen på en skogsbilväg?',
            options: ['40–50 MPa', '60–80 MPa', '100–120 MPa'],
            correct: 1
        },
        fi: {
            text: 'Mikä on yleisesti käytetty tavoitekantavuus (E₂-arvo) metsätien rungon korjausta suunniteltaessa?',
            options: ['40–50 MPa', '60–80 MPa', '100–120 MPa'],
            correct: 1
        },
        en: {
            text: 'What is the general target bearing capacity (E₂ value) when planning the repair of a forest road body?',
            options: ['40–50 MPa', '60–80 MPa', '100–120 MPa'],
            correct: 1
        }
    },
    // 2. Slitlagrets tjocklek
    {
        sv: {
            text: 'Vilken tjocklek på slitlagret rekommenderas på en byggd skogsbilväg för att ytan ska hållas fuktig och inte spricka upp?',
            options: ['2–4 cm', '5–10 cm', '15–20 cm'],
            correct: 1
        },
        fi: {
            text: 'Mikä on suositeltava kulutuskerroksen paksuus rakennetulla metsätiellä, jotta pinta säilyy kosteana eikä halkeile?',
            options: ['2–4 cm', '5–10 cm', '15–20 cm'],
            correct: 1
        },
        en: {
            text: 'What thickness of the wearing course is recommended on a constructed forest road to keep the surface moist and prevent cracking?',
            options: ['2–4 cm', '5–10 cm', '15–20 cm'],
            correct: 1
        }
    },
    // 3. Krossgrusets finmaterialhalt
    {
        sv: {
            text: 'Vilken viktprocent av materialet bör passera ett 0,063 mm såll för att krossgruset ska vara lämpligt som slitlager?',
            options: ['2–5 %', '8–14 %', '20–25 %'],
            correct: 1
        },
        fi: {
            text: 'Mikä painoprosentti materiaalista tulisi läpäistä 0,063 mm seula, jotta murske soveltuu kulutuskerrokseen?',
            options: ['2–5 %', '8–14 %', '20–25 %'],
            correct: 1
        },
        en: {
            text: 'What percentage by weight of the material should pass a 0.063 mm sieve for the crushed gravel to be suitable as a wearing course?',
            options: ['2–5 %', '8–14 %', '20–25 %'],
            correct: 1
        }
    },
    // 4. Markduk vid reparation
    {
        sv: {
            text: 'Vilken klass av markduk används vanligen vid reparation av vägkroppen för att hindra material från undergrunden att blandas med vägmaterialet?',
            options: ['N1', 'N3', 'N5'],
            correct: 1
        },
        fi: {
            text: 'Minkä luokan suodatinkangasta käytetään yleisesti tierungon korjauksessa estämään pohjamaan materiaalin sekoittuminen tierakenteeseen?',
            options: ['N1', 'N3', 'N5'],
            correct: 1
        },
        en: {
            text: 'Which class of geotextile is commonly used in road body repair to prevent subgrade material from mixing with the road material?',
            options: ['N1', 'N3', 'N5'],
            correct: 1
        }
    },
    // 5. Krossgrusets tjocklek vid reparation
    {
        sv: {
            text: 'Hur tjockt lager av krossgrus läggs vanligen ovanpå markduken vid reparation av vägkroppen?',
            options: ['5–10 cm', '20–30 cm', '40–50 cm'],
            correct: 1
        },
        fi: {
            text: 'Kuinka paksu murskekerros levitetään yleensä suodatinkankaan päälle tierungon korjauksessa?',
            options: ['5–10 cm', '20–30 cm', '40–50 cm'],
            correct: 1
        },
        en: {
            text: 'How thick a layer of crushed gravel is typically placed on top of the geotextile when repairing a road body?',
            options: ['5–10 cm', '20–30 cm', '40–50 cm'],
            correct: 1
        }
    },
    // 6. Geonätets funktion
    {
        sv: {
            text: 'Vilken är den huvudsakliga funktionen hos ett geonät som placeras tillsammans med krossgrus vid reparation av vägkroppen?',
            options: ['Hindra blandning av material', 'Göra konstruktionen styvare', 'Förbättra dräneringen'],
            correct: 1
        },
        fi: {
            text: 'Mikä on geoverkon pääasiallinen tehtävä, kun se asennetaan murskeen kanssa tierungon korjauksessa?',
            options: ['Estää materiaalien sekoittuminen', 'Jäykistää rakennetta', 'Parantaa kuivatusta'],
            correct: 1
        },
        en: {
            text: 'What is the main function of a geogrid placed together with crushed gravel when repairing a road body?',
            options: ['Prevent mixing of materials', 'Stiffen the structure', 'Improve drainage'],
            correct: 1
        }
    },
    // 7. Dammbindningens tidpunkt
    {
        sv: {
            text: 'När på våren utförs dammbindning på skogsbilvägar samtidigt med vägbearbetningen?',
            options: ['Genast efter att den ytliga tjällossningen upphört', 'Före tjällossningen börjar', 'Mitt i sommaren'],
            correct: 0
        },
        fi: {
            text: 'Milloin keväällä metsäteiden pölynsidonta tehdään samanaikaisesti tienhoidon kanssa?',
            options: ['Heti pintakelirikon päätyttyä', 'Ennen kelirikon alkua', 'Keskikesällä'],
            correct: 0
        },
        en: {
            text: 'When in spring is dust binding on forest roads carried out simultaneously with road grading?',
            options: ['Immediately after surface thaw weakening has ended', 'Before thaw weakening begins', 'In mid-summer'],
            correct: 0
        }
    },
    // 8. Maximal kornstorlek för slitlager
    {
        sv: {
            text: 'Vilken maximidiameter på krossgrus används ofta för slitlagret på skogsbilvägar?',
            options: ['8 mm', '16 mm', '32 mm'],
            correct: 1
        },
        fi: {
            text: 'Mitä maksimiraekokoa käytetään usein metsäteiden kulutuskerroksen murskeessa?',
            options: ['8 mm', '16 mm', '32 mm'],
            correct: 1
        },
        en: {
            text: 'What maximum grain size is often used for crushed gravel in the wearing course of forest roads?',
            options: ['8 mm', '16 mm', '32 mm'],
            correct: 1
        }
    },
    // 9. Saltets effekt vid dammbindning
    {
        sv: {
            text: 'Vilken effekt har inblandning av salt i slitlagermaterialet vid dammbindning?',
            options: ['Slitlagret blir mer homogent och håller vatten bättre', 'Slitlagret blir hårdare och vattentåligare', 'Saltet minskar vägens friktion'],
            correct: 0
        },
        fi: {
            text: 'Mikä vaikutus suolan sekoittamisella kulutuskerrosmateriaaliin on pölynsidonnassa?',
            options: ['Kulutuskerroksesta tulee homogeenisempi ja se pidättää vettä paremmin', 'Kulutuskerroksesta tulee kovempi ja vettähylkivämpi', 'Suola vähentää tien kitkaa'],
            correct: 0
        },
        en: {
            text: 'What effect does mixing salt into the wearing course material have in dust binding?',
            options: ['The wearing course becomes more homogeneous and retains water better', 'The wear layer becomes harder and water-resistant', 'Salt reduces road friction'],
            correct: 0
        }
    },
    // 10. Vägkroppens bredd
    {
        sv: {
            text: 'Vilken bredd bör vägkroppens (underbyggnadens) utjämningsbredd vara enligt anvisningarna?',
            options: ['3,0–3,5 m', '4,2–5,8 m', '6,0–7,0 m'],
            correct: 1
        },
        fi: {
            text: 'Mikä tulee olla tierungon tasoitusleveys ohjeiden mukaan?',
            options: ['3,0–3,5 m', '4,2–5,8 m', '6,0–7,0 m'],
            correct: 1
        },
        en: {
            text: 'What should be the levelling width of the road subgrade according to the guidelines?',
            options: ['3.0–3.5 m', '4.2–5.8 m', '6.0–7.0 m'],
            correct: 1
        }
    },
    // 11. Tillåten spårbildning
    {
        sv: {
            text: 'Hur djupa spår (hjulspår) kan tolereras innan vägens bärighet anses försämrad och spåren bör åtgärdas?',
            options: ['Under 20 mm', 'Under 40 mm', 'Under 60 mm'],
            correct: 1
        },
        fi: {
            text: 'Kuinka syvät urat voidaan sallia ennen kuin tien kantavuus katsotaan heikentyneen ja urat tulisi korjata?',
            options: ['Alle 20 mm', 'Alle 40 mm', 'Alle 60 mm'],
            correct: 1
        },
        en: {
            text: 'How deep ruts (wheel tracks) can be tolerated before the road\'s bearing capacity is considered impaired and the ruts should be repaired?',
            options: ['Under 20 mm', 'Under 40 mm', 'Under 60 mm'],
            correct: 1
        }
    },
    // 12. Vändplaners avstånd
    {
        sv: {
            text: 'Vad är ett rekommenderat avstånd mellan vändplaner eller mötesplatser på en skogsbilväg?',
            options: ['200–400 m', '500–800 m', '1000–1200 m'],
            correct: 1
        },
        fi: {
            text: 'Mikä on suositeltava etäisyys kääntöpaikkojen tai kohtaamispaikkojen välillä metsätiellä?',
            options: ['200–400 m', '500–800 m', '1000–1200 m'],
            correct: 1
        },
        en: {
            text: 'What is the recommended distance between turnaround areas or passing places on a forest road?',
            options: ['200–400 m', '500–800 m', '1000–1200 m'],
            correct: 1
        }
    },
    // 13. Körbanans bredd
    {
        sv: {
            text: 'Vilken bredd rekommenderas för körbanan på en ny skogsbilväg (exklusive diken och vägrenar)?',
            options: ['2,5–3,0 m', '3,5–4,5 m', '5,0–6,0 m'],
            correct: 1
        },
        fi: {
            text: 'Mikä on suositeltu ajoradan leveys uudelle metsätielle (ilman ojia ja pientareita)?',
            options: ['2,5–3,0 m', '3,5–4,5 m', '5,0–6,0 m'],
            correct: 1
        },
        en: {
            text: 'What is the recommended width for the carriageway of a new forest road (excluding ditches and shoulders)?',
            options: ['2.5–3.0 m', '3.5–4.5 m', '5.0–6.0 m'],
            correct: 1
        }
    },
    // 14. Maximal lutning
    {
        sv: {
            text: 'Vilken är den maximalt rekommenderade lutningen för en skogsbilväg som trafikeras av fullastade timmerbilar?',
            options: ['6–8 %', '8–10 %', '12–15 %'],
            correct: 1
        },
        fi: {
            text: 'Mikä on suurin suositeltu kaltevuus metsätielle, jota käyttävät täydet puutavara-autot?',
            options: ['6–8 %', '8–10 %', '12–15 %'],
            correct: 1
        },
        en: {
            text: 'What is the maximum recommended gradient for a forest road used by fully loaded timber trucks?',
            options: ['6–8 %', '8–10 %', '12–15 %'],
            correct: 1
        }
    },
    // 15. Skyddszon mot vattendrag
    {
        sv: {
            text: 'Vad är en viktig vattenskyddsåtgärd vid byggande av skogsbilvägar nära vattendrag?',
            options: ['Lämna en skyddszon (kantzon) med träd och vegetation', 'Bygg breda och djupa diken', 'Använda smalare vägtrummor'],
            correct: 0
        },
        fi: {
            text: 'Mikä on tärkeä vesiensuojelutoimenpide rakennettaessa metsäteitä vesistöjen läheisyydessä?',
            options: ['Jättää suojavyöhyke (reunavyöhyke) puita ja kasvillisuutta', 'Rakenna leveitä ja syviä ojia', 'Käyttää kapeampia rumpuja'],
            correct: 0
        },
        en: {
            text: 'What is an important water protection measure when building forest roads near water bodies?',
            options: ['Leave a buffer zone with trees and vegetation', 'Build wide and deep trenches', 'Use narrower culverts'],
            correct: 0
        }
    },
    // 16. Vägtrummor för fisk
    {
        sv: {
            text: 'Vilken typ av vägtrumma rekommenderas för att minimera vandringshinder för fisk och andra vattenorganismer?',
            options: ['Cirkulär trumma med liten diameter', 'Halvtrumma eller valvtrumma med naturlig botten', 'Cirkulär betongtrumma'],
            correct: 1
        },
        fi: {
            text: 'Minkä tyyppistä tierumpua suositellaan kalojen ja muiden vesieliöiden vaellusesteiden minimoimiseksi?',
            options: ['Pieni pyöreä rumpu', 'Puolikas rumpu tai holvirumpu, jossa luonnonmukainen pohja', 'Pyöreä betonirumpu'],
            correct: 1
        },
        en: {
            text: 'What type of culvert is recommended to minimize migration barriers for fish and other aquatic organisms?',
            options: ['Small circular culvert', 'Half-culvert or arch culvert with natural bottom', 'Circular concrete culvert'],
            correct: 1
        }
    },
    // 17. Anmälan om vägbygge
    {
        sv: {
            text: 'Vilken myndighet ska man lämna in en genomföringsanmälan (toteutusilmoitus) till vid byggande eller grundförbättring av en skogsbilväg för att kunna få stöd?',
            options: ['NTM-centralen (ELY-keskus)', 'Finlands skogscentral (Suomen metsäkeskus)', 'Kommunens byggnadstillsyn'],
            correct: 1
        },
        fi: {
            text: 'Mille viranomaiselle toteutusilmoitus metsätien rakentamisesta tai perusparannuksesta tehdään tuen hakemiseksi?',
            options: ['ELY-keskus', 'Suomen metsäkeskus', 'Kunnan rakennusvalvonta'],
            correct: 1
        },
        en: {
            text: 'To which authority should an implementation notice be submitted when building or improving a forest road to receive support?',
            options: ['ELY Centre', 'Finnish Forest Centre', 'Municipal building control'],
            correct: 1
        }
    },
    // 18. Vinterunderhåll
    {
        sv: {
            text: 'Vilka är de huvudsakliga vinterunderhållsåtgärderna för en skogsbilväg?',
            options: ['Snö- och sörjeborttagning', 'Sandning och saltning', 'Påläggning av nytt grus'],
            correct: 0
        },
        fi: {
            text: 'Mitkä ovat metsätien talviajan tärkeimmät kunnossapitotoimenpiteet?',
            options: ['Lumen ja loskan poisto', 'Hiekka ja suolaus', 'Uuden soran levittäminen'],
            correct: 0
        },
        en: {
            text: 'What are the main winter maintenance measures for a forest road?',
            options: ['Snow and slush removal', 'Sanding and salting', 'Laying new gravel'],
            correct: 0
        }
    },
    // 19. Materialkvalitet för slitlager
    {
        sv: {
            text: 'Vilket basmaterial ger krossgrus med bäst hållfasthet för slitlagret?',
            options: ['Bergkross (berg) (kalliomurske)', 'Grus (sora)', 'Återvunnen betong'],
            correct: 0
        },
        fi: {
            text: 'Mikä perusmateriaali antaa parhaan lujuuden kulutuskerroksen murskeelle?',
            options: ['Kalliomurske', 'Sora', 'Kierrätetty betoni'],
            correct: 0
        },
        en: {
            text: 'Which base material gives the best strength for crushed gravel in the wearing course?',
            options: ['Crushed rock (bedrock)', 'Gravel', 'Recycled concrete'],
            correct: 0
        }
    },
    // 20. Krav på kornstorlekskurva
    {
        sv: {
            text: 'Vad bör väglaget begära av en leverantör av krossgrus för att säkerställa materialets kvalitet för slitlagret?',
            options: ['En graf som beskriver kornstorlekskurvan', 'En graf som beskriver vägens hållbarhet', 'Pris per ton'],
            correct: 0
        },
        fi: {
            text: 'Mitä tiekunnan tulisi pyytää murskeen toimittajalta varmistaakseen materiaalin laadun kulutuskerrokseen?',
            options: ['Rakeisuuskäyrän kuvaaja', 'Tien kestävyyttä kuvaava kaavio', 'Hinta tonnilta'],
            correct: 0
        },
        en: {
            text: 'What should the road association request from a crushed gravel supplier to ensure the material quality for the wearing course?',
            options: ['A graph describing the grain size distribution curve', 'A graph describing the sustainability of the road', 'Price per ton'],
            correct: 0
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