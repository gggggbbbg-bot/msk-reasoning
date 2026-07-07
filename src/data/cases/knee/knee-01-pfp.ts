import type { Case } from '../../../types/case';

export const knee01: Case = {
  id: 'knee-01-pfp',
  region: 'knee',
  title: 'Patellofemoral pain in a recreational runner',
  difficulty: 1,
  estimatedMinutes: 14,
  learningObjectives: [
    'Recognise patellofemoral pain via the JOSPT 2019 PFP CPG diagnostic features.',
    'Identify modifiable contributors: hip strength, kinematics, training load.',
    'Build a load-management + hip+knee strengthening programme with evidence.',
  ],

  demographics: { age: 24, sex: 'F', occupation: 'Marketing assistant; recreational runner', handedness: 'R' },

  referral:
    'Self-referred. 24 yo female with 3 months of progressive anterior knee pain, worse with running and stair descent. No trauma. Wants to keep training for a half-marathon in 12 weeks.',

  subjective: {
    hpc:
      'Insidious onset 3 months ago after increasing weekly running mileage from 25 → 50 km/week to train for a half-marathon. Diffuse anterior knee ache, worse late in runs and descending stairs. "Movie sign" — pain after sitting >30 min. No locking, no giving way. NPRS 5/10 running, 3/10 stairs.',
    aggravating: ['Running, especially downhill', 'Descending stairs', 'Sitting >30 min ("movie sign")', 'Squatting deep'],
    easing: ['Rest', 'Heat', 'Reducing mileage'],
    pmh: ['Nil significant'],
    drugHx: ['Nil regular'],
    socialHx: 'Lives in inner Melbourne with partner. Park-runs and longer Saturday runs. Non-smoker.',
    redFlagScreen: [
      { flag: 'True locking / mechanical block', present: false },
      { flag: 'Effusion / warmth / erythema', present: false },
      { flag: 'Constitutional symptoms', present: false },
      { flag: 'History of malignancy', present: false },
      { flag: 'Significant trauma', present: false },
    ],
    yellowFlags: ['Anxiety about half-marathon goal'],
    patientGoals: ['Complete half-marathon pain-free', 'Run 4 x/week without flare', 'Squat at gym pain-free'],
  },

  hypotheses: [
    {
      id: 'hyp-pfp',
      label: 'Patellofemoral pain (PFP)',
      isPrimary: true,
      supportingFeatures: [
        'Diffuse anterior knee pain',
        'Aggravated by squatting, stairs, prolonged sitting',
        'Increase in running load',
        'No effusion, no mechanical symptoms',
      ],
      refutingFeatures: [],
      rationale: 'JOSPT PFP CPG 2019 — diagnosis is clinical, based on diffuse retropatellar/peripatellar pain reproduced by squatting/loaded knee flexion.',
      evidenceRefs: ['JOSPT-PFP-2019'],
    },
    {
      id: 'hyp-tendin',
      label: 'Patellar tendinopathy (jumper\'s knee)',
      isPrimary: false,
      supportingFeatures: ['Anterior knee pain'],
      refutingFeatures: ['Pain is diffuse, not localised to inferior pole', 'No jumping load history'],
      rationale: 'Patellar tendinopathy is focal and load-related, typically in jumping athletes.',
      evidenceRefs: ['JOSPT-PFP-2019'],
    },
    {
      id: 'hyp-itb',
      label: 'Iliotibial band syndrome',
      isPrimary: false,
      supportingFeatures: ['Running-related knee pain'],
      refutingFeatures: ['Pain anterior, not lateral', 'Not lateral epicondyle'],
      rationale: 'ITB pain is lateral and onset is at a consistent distance into runs.',
      evidenceRefs: ['MAGEE-7E-KNEE'],
    },
    {
      id: 'hyp-meniscal',
      label: 'Medial meniscal tear',
      isPrimary: false,
      supportingFeatures: ['Knee pain with rotation/squatting'],
      refutingFeatures: ['No locking, no giving way, no joint line tenderness expected', 'No twisting injury'],
      rationale: 'Mechanism and behaviour atypical for meniscal injury.',
      evidenceRefs: ['JOSPT-MENISCUS-2018'],
    },
  ],

  objectiveTests: [
    {
      id: 't-squat',
      name: 'Double-leg and single-leg squat',
      category: 'functional',
      rationale: 'Reproduces typical PFP pain and reveals kinematics.',
      result: 'Bilateral squat — anterior knee pain at 90°. Single-leg squat R — dynamic knee valgus, hip drop, pain at 60°.',
      interpretation: 'Supports PFP with hip-strength contributor.',
      expertSelected: true,
      evidenceRefs: ['JOSPT-PFP-2019'],
    },
    {
      id: 't-stepdown',
      name: 'Lateral step-down test',
      category: 'functional',
      rationale: 'Functional measure of hip-knee kinematics during eccentric load.',
      result: 'Hip drop, knee valgus, balance shift, pain.',
      interpretation: 'Suggests hip-knee neuromuscular contribution.',
      expertSelected: true,
      evidenceRefs: ['JOSPT-PFP-2019'],
    },
    {
      id: 't-hipstrength',
      name: 'Hip abductor + ER strength (handheld dynamometer or break test)',
      category: 'functional',
      rationale: 'Hip muscle weakness is a key modifiable factor in PFP.',
      result: 'Hip abductor 3+/5 R (4+/5 L); ER 4-/5 R.',
      interpretation: 'Confirms hip strength deficit on the painful side.',
      expertSelected: true,
      evidenceRefs: ['JOSPT-PFP-2019'],
    },
    {
      id: 't-quadlength',
      name: 'Quad and hamstring length',
      category: 'PROM',
      rationale: 'Length deficits can contribute to PFP load.',
      result: 'Quad length: tight (Thomas test +ve), hamstrings WNL.',
      interpretation: 'Tight quads contribute to patellar load.',
      expertSelected: true,
      evidenceRefs: ['MAGEE-7E-KNEE'],
    },
    {
      id: 't-grind',
      name: "Patellar grind (Clarke's) test",
      category: 'special',
      rationale: 'Provocation test, modest diagnostic value.',
      result: 'Positive — reproduces familiar anterior pain.',
      interpretation: 'Supports patellofemoral pain origin.',
      expertSelected: false,
      sensitivity: 0.49,
      specificity: 0.75,
      evidenceRefs: ['COOK-HEGEDUS-2013'],
    },
    {
      id: 't-mcmurray',
      name: 'McMurray test',
      category: 'special',
      rationale: 'Screen for meniscal tear.',
      result: 'Negative.',
      interpretation: 'Reduces meniscal probability.',
      expertSelected: true,
      sensitivity: 0.55,
      specificity: 0.77,
      evidenceRefs: ['COOK-HEGEDUS-2013'],
    },
    {
      id: 't-effusion',
      name: 'Patellar tap / sweep for effusion',
      category: 'observation',
      rationale: 'Effusion suggests intra-articular pathology, not PFP.',
      result: 'No effusion.',
      interpretation: 'Consistent with PFP (no effusion expected).',
      expertSelected: true,
      evidenceRefs: ['JOSPT-PFP-2019'],
    },
    {
      id: 't-load',
      name: 'Training load history (weekly distance, surface, footwear)',
      category: 'functional',
      rationale: 'Training error is a major PFP driver.',
      result: 'Increased mileage 100% in 4 weeks (25 → 50 km/week); changed shoes 6 weeks ago.',
      interpretation: 'Training error is a primary modifiable factor.',
      expertSelected: true,
      evidenceRefs: ['JOSPT-PFP-2019'],
    },
  ],

  diagnosis: {
    primary: 'Right patellofemoral pain (clinical), driven by training-load error and hip strength deficit, with quadriceps tightness.',
    keyElements: [
      { label: 'Patellofemoral pain', synonyms: ['patellofemoral', 'pfp', 'anterior knee'], hint: 'Name the condition.' },
      { label: 'Training-load error', synonyms: ['load', 'training', 'overload', 'overuse', 'mileage'], hint: 'What is the main modifiable driver?' },
      { label: 'Hip strength / kinematics', synonyms: ['hip', 'abductor', 'valgus', 'gluteal'], hint: 'What proximal contributor?' },
      { label: 'Intra-articular / meniscal excluded', synonyms: ['no effusion', 'not meniscal', 'no meniscus', 'non-mechanical'], hint: 'Did you exclude intra-articular pathology?' },
    ],
    differentialsExcluded: [
      'Patellar tendinopathy (no focal inferior pole tenderness)',
      'Meniscal tear (no locking, McMurray negative)',
      'ITB syndrome (pain anterior, not lateral)',
      'Intra-articular pathology (no effusion)',
    ],
    reasoning:
      "Diffuse anterior knee pain reproduced by squatting/stairs in a runner with a 100% training-load step-up, plus dynamic knee valgus and hip abductor weakness, fits JOSPT 2019 PFP CPG. Modifiable factors are training load, hip strength, and quad length.",
  },

  icf: {
    bodyStructureFunction: [
      'Anterior knee pain reproduced on loaded knee flexion',
      'Hip abductor and ER weakness',
      'Quadriceps length deficit',
      'Dynamic knee valgus on single-leg tasks',
    ],
    activityLimitations: [
      'Cannot run >5 km without pain',
      'Stairs descending painful',
      'Sitting >30 min produces stiffness',
    ],
    participationRestrictions: [
      'Reduced training for half-marathon',
      'Avoidance of recreational gym',
    ],
    personalFactors: [
      'Strong goal commitment (half-marathon)',
      'No prior injury — training-error risk',
    ],
    environmentalFactors: [
      'Access to gym + running paths',
      'Coach available for load management discussion',
    ],
  },

  management: {
    shortTerm: [
      {
        category: 'education',
        intervention: 'Load-management plan: temporarily reduce mileage 30–50%, replace with cross-training (cycling, pool running). Pain-monitoring traffic light (≤3/10 OK).',
        rationale: 'Training error is a primary driver — load reduction is essential for symptom modulation.',
        evidenceRefs: ['JOSPT-PFP-2019'],
      },
      {
        category: 'exercise',
        intervention: 'Hip strengthening (clams, side-planks, single-leg bridges) + knee strengthening (split squats, leg press in pain-free range).',
        doseFrequency: '3 x/week, 6 weeks.',
        rationale: 'Hip + knee strengthening is a Strong recommendation in JOSPT 2019 PFP CPG.',
        evidenceRefs: ['JOSPT-PFP-2019'],
      },
      {
        category: 'self-management',
        intervention: 'Quad and ITB stretching; consider patellar taping during runs for symptom modulation.',
        rationale: 'Patellar taping has small short-term effect on pain and may improve adherence.',
        evidenceRefs: ['JOSPT-PFP-2019'],
      },
    ],
    longTerm: [
      {
        category: 'exercise',
        intervention: 'Graded return to running with cadence cue (+5–10% step rate) to reduce patellofemoral load.',
        doseFrequency: '8–12 week return-to-running plan.',
        rationale: 'Increased cadence reduces patellofemoral joint stress.',
        evidenceRefs: ['JOSPT-PFP-2019'],
      },
      {
        category: 'education',
        intervention: 'Long-term load progression (10% rule), recovery, footwear advice.',
        rationale: 'Prevents recurrence which is common in PFP without addressing training behaviour.',
        evidenceRefs: ['JOSPT-PFP-2019'],
      },
    ],
    prognosis: 'Most cases improve substantially with 6–12 weeks of guideline-concordant care. Recurrence common if training behaviour and hip strength are not addressed.',
    redFlagsToMonitor: [
      'New effusion → re-screen for intra-articular pathology',
      'Locking / mechanical symptoms',
      'Severe pain at rest or night pain',
    ],
  },

  references: [
    {
      id: 'JOSPT-PFP-2019',
      citation:
        'Willy RW et al. Patellofemoral Pain. Clinical Practice Guidelines Linked to the ICF. JOSPT 2019;49(9):CPG1–CPG95.',
      doi: '10.2519/jospt.2019.0302',
      level: 'CPG',
    },
    {
      id: 'JOSPT-MENISCUS-2018',
      citation:
        'Logerstedt DS et al. Knee Pain and Mobility Impairments: Meniscal and Articular Cartilage Lesions. JOSPT 2018;48(2):A1–A50.',
      doi: '10.2519/jospt.2018.0301',
      level: 'CPG',
    },
    {
      id: 'MAGEE-7E-KNEE',
      citation: 'Magee DJ. Orthopedic Physical Assessment, 7th ed. Ch. 12. Elsevier 2021.',
      level: 'Textbook',
    },
    {
      id: 'COOK-HEGEDUS-2013',
      citation: 'Cook CE, Hegedus EJ. Orthopedic Physical Examination Tests, 2nd ed.',
      level: 'Textbook',
    },
  ],
};
