import type { Case } from '../../../types/case';

export const ankle03: Case = {
  id: 'ankle-03-achilles-tendinopathy',
  region: 'ankle',
  title: 'Morning-stiff Achilles pain in a 45-year-old runner training for a half marathon',
  difficulty: 1,
  estimatedMinutes: 15,
  learningObjectives: [
    'Recognise the load-related, warm-up-dependent pattern of mid-portion Achilles tendinopathy.',
    'Differentiate mid-portion tendinopathy from insertional tendinopathy, partial rupture, and plantaris/sural involvement.',
    'Apply palpation location and the Royal London Hospital / arc signs in tendinopathy diagnosis.',
    'Prescribe progressive tendon loading using a pain-monitoring model and manage training-load error.',
  ],

  demographics: { age: 45, sex: 'M', occupation: 'Accountant; recreational runner', handedness: 'R' },

  referral:
    'Self-referred. 45 yo male with 8 weeks of left Achilles pain that began ~3 weeks after starting a half-marathon programme. Pain is worst with the first steps each morning and at the start of runs, warms up, then aches afterwards. Wants to keep training for an event in 10 weeks.',

  subjective: {
    hpc:
      'Gradual onset of left posterior heel-cord pain 8 weeks ago, ~3 weeks after jumping from casual 15 km/week jogging to a half-marathon programme (added interval sessions and a hill run in the same fortnight, weekly volume up ~60%). Pain 4/10 with first steps in the morning easing over 15–20 minutes; 5/10 for the first kilometre of a run, settles to 2/10 mid-run, then aches 4–5/10 that evening and is stiffer the next morning after harder sessions. Localises pain with one finger to the tendon ~4 cm above the heel bone. No sudden snap, no giving way, no sensation of being "kicked in the calf".',
    aggravating: [
      'First steps after rest (morning, after sitting at desk)',
      'Start of runs; hills and faster intervals worst',
      'Single-leg hopping (tried once — sharp 6/10)',
    ],
    easing: ['Warming up (pain eases mid-run)', 'Relative rest days', 'Heel raise in shoe (self-trialled, mild help)'],
    pmh: ['Nil significant. No inflammatory disease, no psoriasis, no previous tendon problems.'],
    drugHx: ['Nil regular. No fluoroquinolone antibiotics ever prescribed (checked — tendinopathy risk factor). No corticosteroid use.'],
    socialHx:
      'Lives with family in Perth. Desk job. Running 4×/week on the programme; parkrun regular. BMI 26. Non-smoker, social alcohol. Motivated by a charity half-marathon in 10 weeks with workmates.',
    redFlagScreen: [
      { flag: 'Sudden snap / audible pop with immediate weakness (rupture)', present: false, note: 'Gradual onset, can heel-raise' },
      { flag: 'Fluoroquinolone or systemic corticosteroid exposure', present: false },
      { flag: 'Inflammatory features (multiple entheses, psoriasis, IBD, uveitis)', present: false },
      { flag: 'Constant non-mechanical pain or night pain', present: false },
      { flag: 'Calf swelling/heat suggestive of DVT', present: false },
      { flag: 'Constitutional symptoms', present: false },
    ],
    yellowFlags: [
      'Event deadline pressure — risk of pushing through escalating pain',
      '"No pain no gain" attitude expressed in first minutes of interview',
    ],
    patientGoals: [
      'Complete the half marathon in 10 weeks',
      'Run without next-morning stiffness',
      'Understand what he did wrong with training',
    ],
  },

  hypotheses: [
    {
      id: 'hyp-midportion',
      label: 'Mid-portion Achilles tendinopathy',
      isPrimary: true,
      supportingFeatures: [
        'Pain localised 2–6 cm proximal to the calcaneal insertion',
        'Classic load-pattern: morning stiffness, start-of-run pain that warms up, next-day flare after hard sessions',
        'Clear training-load error (~60% volume spike plus new hills/intervals)',
        'Age 40s, male, recreational runner — typical profile',
      ],
      refutingFeatures: ['None significant'],
      rationale:
        'Location (mid-portion), warm-up-dependent load-related pain, morning stiffness, and a preceding load spike form the classic clinical picture. Diagnosis is clinical; imaging is not required when the presentation is typical.',
      evidenceRefs: ['JOSPT-ACHILLES-2018', 'MAFFULLI-2003'],
    },
    {
      id: 'hyp-insertional',
      label: 'Insertional Achilles tendinopathy',
      isPrimary: false,
      supportingFeatures: ['Runner with posterior heel pain', 'Heel raise gave some relief (helps both types)'],
      refutingFeatures: [
        'Pain pinpointed 4 cm above the insertion, not at the bone–tendon junction',
        'No pain with shoe heel-counter pressure',
      ],
      rationale:
        'The distinction matters for management: insertional disease is compressed in dorsiflexion, so loading is initially restricted to neutral/plantar-grade range. Palpation location separates them.',
      evidenceRefs: ['JOSPT-ACHILLES-2018', 'MAGEE-7E-ANKLE'],
    },
    {
      id: 'hyp-rupture',
      label: 'Partial Achilles rupture',
      isPrimary: false,
      supportingFeatures: ['Middle-aged male runner'],
      refutingFeatures: [
        'No snap/pop or acute incident',
        'Able to single-leg heel raise (painful but strong)',
        'Expect negative Thompson test and no palpable gap',
      ],
      rationale:
        'Rupture presents acutely with a snap and weakness; the Thompson test and palpation for a gap formally exclude it.',
      evidenceRefs: ['MAGEE-7E-ANKLE', 'MAFFULLI-2003'],
    },
    {
      id: 'hyp-retro',
      label: 'Retrocalcaneal bursitis / posterior impingement',
      isPrimary: false,
      supportingFeatures: ['Posterior heel region pain in a runner'],
      refutingFeatures: [
        'No pain anterior to the tendon at the bursa site on two-finger squeeze',
        'Pain not provoked by passive end-range dorsiflexion compression',
      ],
      rationale: 'Bursal pain sits deep and just proximal to the insertion, provoked by compression rather than tendon load.',
      evidenceRefs: ['MAGEE-7E-ANKLE'],
    },
    {
      id: 'hyp-sural',
      label: 'Sural neuropathy / lumbar referral',
      isPrimary: false,
      supportingFeatures: ['Posterolateral pain region overlaps sural territory'],
      refutingFeatures: [
        'No burning, paraesthesia, or numbness',
        'Pain is load-dependent and pinpoint on the tendon, not neural in behaviour',
      ],
      rationale: 'Neural pain is typically burning/dysaesthetic and not tightly coupled to tendon-loading dose. Low probability; screen only.',
      evidenceRefs: ['MAGEE-7E-ANKLE'],
    },
  ],

  objectiveTests: [
    {
      id: 't-obs',
      name: 'Observation & tendon comparison (standing, prone)',
      category: 'observation',
      rationale: 'Fusiform mid-substance thickening is typical of mid-portion tendinopathy.',
      result: 'Visible and palpable fusiform thickening of the left Achilles ~3–5 cm above the insertion; calf bulk mildly reduced on the left (girth −1 cm).',
      interpretation: 'Localised mid-portion thickening with early calf deconditioning — consistent with tendinopathy of 8 weeks.',
      expertSelected: true,
      evidenceRefs: ['MAFFULLI-2003', 'MAGEE-7E-ANKLE'],
    },
    {
      id: 't-palp',
      name: 'Tendon palpation (location, Royal London Hospital test)',
      category: 'palpation',
      rationale: 'Pinpoint mid-portion tenderness that reduces in maximal dorsiflexion (RLH test) supports tendinopathy.',
      result: 'Familiar sharp tenderness at 4 cm proximal to insertion in plantar-grade; markedly less tender with tendon under stretch in dorsiflexion (RLH positive). Insertion and bursa region non-tender.',
      interpretation: 'Positive Royal London Hospital test with mid-portion localisation — supports the primary hypothesis and excludes insertional disease.',
      expertSelected: true,
      sensitivity: 0.54,
      specificity: 0.91,
      lrPositive: 6.0,
      evidenceRefs: ['MAFFULLI-2003', 'COOK-HEGEDUS-2013'],
    },
    {
      id: 't-arc',
      name: 'Arc sign',
      category: 'special',
      rationale: 'The thickened portion moving with the tendon through plantar/dorsiflexion distinguishes tendinopathy from paratendinopathy (where swelling stays fixed).',
      result: 'The area of thickening moves proximally/distally with ankle movement — arc sign positive.',
      interpretation: 'Swelling is within the tendon substance — mid-portion tendinopathy rather than isolated paratendon involvement.',
      expertSelected: true,
      sensitivity: 0.42,
      specificity: 0.88,
      evidenceRefs: ['MAFFULLI-2003', 'COOK-HEGEDUS-2013'],
    },
    {
      id: 't-thompson',
      name: 'Thompson (calf squeeze) test + palpation for gap',
      category: 'special',
      rationale: 'Excludes complete/partial rupture before prescribing heavy loading.',
      result: 'Brisk symmetrical plantarflexion on calf squeeze; no palpable gap.',
      interpretation: 'Negative — rupture excluded; safe to load progressively.',
      expertSelected: true,
      sensitivity: 0.96,
      specificity: 0.93,
      evidenceRefs: ['MAGEE-7E-ANKLE', 'COOK-HEGEDUS-2013'],
    },
    {
      id: 't-heelraise',
      name: 'Single-leg heel-raise capacity (to fatigue, metronome)',
      category: 'functional',
      rationale: 'Quantifies calf function deficit — the key rehab outcome measure and loading baseline.',
      result: 'Left: 14 reps (pain 4/10 by final reps, reduced height). Right: 26 reps pain-free.',
      interpretation: 'Meaningful strength-endurance deficit on the affected side; provides the baseline for progressive loading and return-to-run criteria.',
      expertSelected: true,
      evidenceRefs: ['JOSPT-ACHILLES-2018', 'SILBERNAGEL-2007'],
    },
    {
      id: 't-visa',
      name: 'VISA-A questionnaire',
      category: 'functional',
      rationale: 'Validated severity and outcome measure for Achilles tendinopathy.',
      result: 'VISA-A = 58/100.',
      interpretation: 'Moderate severity; retest at 4-week intervals (MCID ≈ 10–15 points).',
      expertSelected: true,
      evidenceRefs: ['JOSPT-ACHILLES-2018'],
    },
    {
      id: 't-arom',
      name: 'Ankle AROM/PROM including weight-bearing lunge test',
      category: 'AROM',
      rationale: 'Dorsiflexion restriction alters running loading and is a treatable contributor.',
      result: 'Weight-bearing lunge: left 8 cm, right 10 cm. Other ranges full.',
      interpretation: 'Mild dorsiflexion deficit on the left — address with calf mobility once symptoms allow; not a primary driver.',
      expertSelected: false,
      evidenceRefs: ['MAGEE-7E-ANKLE', 'JOSPT-ACHILLES-2018'],
    },
    {
      id: 't-hop',
      name: 'Single-leg hop test',
      category: 'functional',
      rationale: 'Assesses energy-storage capacity — relevant later in rehab, but provocative now.',
      result: 'Deferred — reproduced 6/10 sharp pain on trial at home; repeating today adds irritation without changing the diagnosis.',
      interpretation: 'Reserve as a stage-4 (energy-storage) rehab criterion rather than a day-1 diagnostic test.',
      expertSelected: false,
      evidenceRefs: ['SILBERNAGEL-2007', 'JOSPT-ACHILLES-2018'],
    },
    {
      id: 't-us',
      name: 'Request diagnostic ultrasound',
      category: 'special',
      rationale: 'Imaging in typical presentations rarely changes management and can medicalise degenerative findings.',
      result: 'Not requested.',
      interpretation: 'Clinical diagnosis is sufficient; imaging reserved for atypical features, failure to progress by ~12 weeks, or suspected rupture.',
      expertSelected: false,
      evidenceRefs: ['JOSPT-ACHILLES-2018'],
    },
  ],

  diagnosis: {
    primary:
      'Left mid-portion Achilles tendinopathy secondary to a training-load spike (volume +60% plus new hill/interval sessions); rupture and insertional pathology excluded.',
    keyElements: [
      { label: 'Achilles tendinopathy', synonyms: ['tendinopath', 'tendinosis', 'tendonitis'], hint: 'What is the tissue diagnosis?' },
      { label: 'Mid-portion (not insertional)', synonyms: ['mid-portion', 'midportion', 'mid portion', '2-6 cm', 'non-insertional'], hint: 'Which part of the tendon — and why does it matter for loading?' },
      { label: 'Training-load error as the driver', synonyms: ['load', 'training error', 'volume', 'spike', 'overload'], hint: 'What caused it?' },
      { label: 'Rupture excluded', synonyms: ['rupture', 'thompson', 'no tear'], hint: 'What serious differential did you clear before loading?' },
    ],
    differentialsExcluded: [
      'Achilles rupture (no acute snap, negative Thompson test, no palpable gap, strong heel raise)',
      'Insertional tendinopathy / retrocalcaneal bursitis (tenderness 4 cm proximal to insertion, insertion and bursa non-tender)',
      'Inflammatory enthesopathy (no systemic features, single-site, clear mechanical load history)',
      'Sural neuropathy / referred pain (no neural symptoms, pinpoint load-dependent tendon pain)',
    ],
    reasoning:
      'A 60% weekly-volume spike with simultaneous introduction of hills and intervals is a textbook load error. The symptom signature — morning stiffness, start-of-activity pain that warms up, next-day flare proportional to session load — plus pinpoint mid-portion tenderness, positive Royal London Hospital and arc signs, and a 12-rep heel-raise deficit establish mid-portion Achilles tendinopathy clinically. High-specificity palpation findings rule the diagnosis in; the negative Thompson test clears the dangerous differential. Management is progressive tendon loading with a pain-monitoring model and structured training-load correction — complete rest is neither necessary nor helpful.',
  },

  icf: {
    bodyStructureFunction: [
      'Mid-portion Achilles pain (morning 4/10, post-run 4–5/10) with fusiform thickening',
      'Calf strength-endurance deficit (14 vs 26 single-leg heel raises)',
      'Mild dorsiflexion restriction (WB lunge −2 cm)',
      'Morning tendon stiffness 15–20 minutes',
    ],
    activityLimitations: [
      'Cannot complete interval or hill sessions without flare',
      'Painful first steps after desk sitting',
      'Single-leg hopping provocative (6/10)',
    ],
    participationRestrictions: [
      'Half-marathon programme suspended in current form',
      'Considering withdrawing from charity event with workmates',
      'Reduced parkrun participation',
    ],
    personalFactors: [
      '"No pain no gain" beliefs — risk of overloading during rehab',
      'Strong motivation and adherence potential (structured programme follower)',
      'First tendon injury — no prior rehab experience',
      'Age-related tendon load tolerance decline (mid-40s)',
    ],
    environmentalFactors: [
      'Event deadline in 10 weeks (fixed external timeline)',
      'Desk job allows seated heel-raise micro-dosing and flexible lunchtime sessions',
      'Access to gym with calf-raise equipment; supportive running group',
    ],
  },

  management: {
    shortTerm: [
      {
        category: 'education',
        intervention:
          'Explain tendinopathy as a load-capacity mismatch: the tendon is not "torn" or inflamed but under-prepared for the spike; pain up to 5/10 during loading that settles by next morning is acceptable (pain-monitoring model). Correct the "no pain no gain" frame into "known pain, known load".',
        doseFrequency: 'Session 1; traffic-light pain-monitoring handout.',
        rationale:
          'The pain-monitoring model permits continued meaningful activity with equivalent outcomes to complete activity restriction, and manages both his deadline pressure and flare risk.',
        evidenceRefs: ['SILBERNAGEL-2007', 'JOSPT-ACHILLES-2018'],
      },
      {
        category: 'exercise',
        intervention:
          'Progressive calf loading: begin with isotonic heel-raise programme — seated/standing bilateral progressing rapidly to single-leg raises off a step (knee straight and bent), slow tempo (3-0-3).',
        doseFrequency: '3×15 building to 4×6–8 with load (backpack/dumbbell), daily initially then alternate-day heavy sessions.',
        rationale:
          'Progressive resistance loading is the cornerstone with strong CPG support; heavy-slow resistance and eccentric regimes show equivalent outcomes, so use the schedule he can adhere to around work.',
        evidenceRefs: ['JOSPT-ACHILLES-2018', 'BEYER-2015', 'ALFREDSON-1998'],
      },
      {
        category: 'self-management',
        intervention:
          'Training modification, not cessation: continue running at flat, easy, reduced volume (~50% of pre-flare, no hills/intervals), guided by the pain-monitoring rules (≤5/10 during, settled by next morning, no week-on-week worsening).',
        doseFrequency: '2–3 easy runs/week; review weekly against morning-stiffness diary.',
        rationale:
          'Continued running under a pain-monitoring model does not impair recovery and preserves fitness and event feasibility.',
        evidenceRefs: ['SILBERNAGEL-2007', 'VUURBERG-BJSM-2018'],
      },
      {
        category: 'modality',
        intervention:
          'Temporary in-shoe heel lifts (bilateral, ~9 mm) during the symptomatic phase; wean as loading capacity improves.',
        doseFrequency: 'Daily wear 2–4 weeks.',
        rationale:
          'Reduces tendon strain during daily ambulation with low cost and some CPG support as an adjunct — never a substitute for loading.',
        evidenceRefs: ['JOSPT-ACHILLES-2018'],
      },
    ],
    longTerm: [
      {
        category: 'exercise',
        intervention:
          'Staged progression: heavy-slow resistance (weeks 2–6) → faster concentric work → energy-storage loading (skipping, hopping, weeks 6–8) → return to hills and intervals, each stage gated by criteria (heel-raise symmetry within 10%, hop pain ≤2/10, morning stiffness <10 min).',
        doseFrequency: 'Heavy loading 2–3×/week continuing ≥12 weeks total.',
        rationale:
          'Tendon adaptation is slow; criteria-based staging up to energy-storage load is required before speed/hill running, and premature return predicts recurrence.',
        evidenceRefs: ['BEYER-2015', 'SILBERNAGEL-2007', 'JOSPT-ACHILLES-2018'],
      },
      {
        category: 'education',
        intervention:
          'Training-load literacy: ~10% weekly volume progression rule of thumb, one new stressor at a time (volume OR hills OR speed), planned down-weeks, and monitoring morning stiffness as the tendon\'s "gauge". Reframe the event goal: completing the half at easy pace is realistic; a time goal is not.',
        doseFrequency: 'Across sessions; written return-to-run plan to week 10 and beyond.',
        rationale:
          'Addresses the root cause (load error) and sets honest event expectations, reducing recurrence risk after the race.',
        evidenceRefs: ['JOSPT-ACHILLES-2018', 'VUURBERG-BJSM-2018'],
      },
      {
        category: 'referral',
        intervention:
          'If VISA-A has not improved ≥10 points by 12 weeks of well-adhered loading, arrange ultrasound and sports-physician review to reconsider the diagnosis and adjuncts. No corticosteroid injection into the tendon.',
        rationale:
          'Most patients improve with education plus loading by 12 weeks; non-responders warrant diagnostic review. Intratendinous corticosteroid risks rupture and is guideline-discordant.',
        evidenceRefs: ['JOSPT-ACHILLES-2018'],
      },
    ],
    prognosis:
      'Good with adherence: most recreational runners return to full training over 12 weeks, though tendon symptoms can grumble for months and VISA-A gains continue to 12 months. The 10-week event is feasible at easy pace if weekly criteria are met; the bigger risk is post-event load spikes. Morning stiffness duration is his best day-to-day barometer.',
    redFlagsToMonitor: [
      'Sudden snap or acute loss of push-off strength (rupture — urgent assessment)',
      'Pain becoming constant, non-mechanical, or nocturnal',
      'New multi-site tendon/enthesis pain or systemic features (consider inflammatory arthropathy — GP referral)',
      'Escalating morning stiffness week-on-week despite programme adherence (load re-audit, consider imaging)',
    ],
  },

  references: [
    {
      id: 'JOSPT-ACHILLES-2018',
      citation:
        'Martin RL et al. Achilles Pain, Stiffness, and Muscle Power Deficits: Midportion Achilles Tendinopathy Revision 2018. Clinical Practice Guidelines Linked to the ICF. JOSPT 2018;48(5):A1–A38.',
      doi: '10.2519/jospt.2018.0302',
      url: 'https://www.jospt.org/doi/10.2519/jospt.2018.0302',
      level: 'CPG',
    },
    {
      id: 'SILBERNAGEL-2007',
      citation:
        'Silbernagel KG, Thomeé R, Eriksson BI, Karlsson J. Continued sports activity, using a pain-monitoring model, during rehabilitation in patients with Achilles tendinopathy: a randomized controlled study. Am J Sports Med 2007;35(6):897–906.',
      doi: '10.1177/0363546506298279',
      level: 'RCT',
    },
    {
      id: 'BEYER-2015',
      citation:
        'Beyer R et al. Heavy slow resistance versus eccentric training as treatment for Achilles tendinopathy: a randomized controlled trial. Am J Sports Med 2015;43(7):1704–1711.',
      doi: '10.1177/0363546515584760',
      level: 'RCT',
    },
    {
      id: 'ALFREDSON-1998',
      citation:
        'Alfredson H, Pietilä T, Jonsson P, Lorentzon R. Heavy-load eccentric calf muscle training for the treatment of chronic Achilles tendinosis. Am J Sports Med 1998;26(3):360–366.',
      doi: '10.1177/03635465980260030301',
      level: 'RCT',
    },
    {
      id: 'MAFFULLI-2003',
      citation:
        'Maffulli N, Kenward MG, Testa V, Capasso G, Regine R, King JB. Clinical diagnosis of Achilles tendinopathy with tendinosis. Clin J Sport Med 2003;13(1):11–15.',
      doi: '10.1097/00042752-200301000-00003',
      level: 'Cohort',
    },
    {
      id: 'VUURBERG-BJSM-2018',
      citation:
        'Vuurberg G et al. Diagnosis, treatment and prevention of ankle sprains: update of an evidence-based clinical guideline. Br J Sports Med 2018;52:956.',
      doi: '10.1136/bjsports-2017-098106',
      level: 'CPG',
    },
    {
      id: 'MAGEE-7E-ANKLE',
      citation: 'Magee DJ. Orthopedic Physical Assessment, 7th ed. Ch. 13: Lower Leg, Ankle, Foot. Elsevier 2021.',
      level: 'Textbook',
    },
    {
      id: 'COOK-HEGEDUS-2013',
      citation:
        'Cook CE, Hegedus EJ. Orthopedic Physical Examination Tests: An Evidence-Based Approach. 2nd ed. Pearson 2013.',
      level: 'Textbook',
    },
  ],
};
