import type { Case } from '../../../types/case';

export const lbp01: Case = {
  id: 'lbp-01-acute-radiculopathy',
  region: 'lbp',
  title: 'Acute LBP with right L5 radiculopathy after a lifting injury',
  difficulty: 2,
  estimatedMinutes: 18,
  learningObjectives: [
    'Distinguish radicular from referred leg pain on the basis of distribution and behaviour.',
    'Apply red-flag screening for serious lumbar pathology (cauda equina, fracture, malignancy).',
    'Select objective tests with the strongest diagnostic value for L5 radiculopathy.',
    'Construct an evidence-based first-line management plan consistent with the JOSPT 2021 LBP CPG.',
  ],

  demographics: { age: 42, sex: 'M', occupation: 'Warehouse picker (manual handling, full-time)', handedness: 'R' },

  referral:
    'GP referral via Medicare CDM (item 10960). 42 yo male, sudden onset right-sided lower back and posterolateral leg pain after lifting a 25 kg box from floor 5 days ago. No leg weakness reported, no bowel/bladder change. Imaging not done. Please assess and manage.',

  subjective: {
    hpc:
      'Sudden, sharp catch in right lumbar region while lifting a heavy carton at work. Pain radiated within hours into the right buttock, posterolateral thigh, lateral calf and dorsum of foot. Constant background ache (4/10), sharp on movement (8/10). Pins-and-needles in dorsum of right foot when sitting >30 min. Worse over the past 48 h.',
    aggravating: [
      'Sitting >30 minutes (driving, mealtime)',
      'Bending forward to put on shoes',
      'Sneezing/coughing reproduces leg pain',
      'Loaded lifting',
    ],
    easing: ['Walking short distances', 'Lying supine with knees bent', 'Heat'],
    pmh: [
      'Episode of mechanical LBP 3 years ago, resolved in ~4 weeks',
      'Hypertension — well controlled',
    ],
    drugHx: ['Perindopril 5 mg daily', 'Paracetamol 1 g qid + ibuprofen 400 mg tds since onset'],
    socialHx:
      'Lives with partner and two school-aged children in suburban Brisbane. Warehouse picker, 8 h shifts, repetitive lifting up to 30 kg. Casual recreational soccer (paused). Smokes 5 cig/day, alcohol 4 standard drinks/week.',
    redFlagScreen: [
      { flag: 'Saddle anaesthesia', present: false },
      { flag: 'Bowel/bladder dysfunction', present: false },
      { flag: 'Bilateral leg pain or progressive weakness', present: false, note: 'Unilateral only' },
      { flag: 'Significant trauma', present: false, note: 'Lifting injury, no fall' },
      { flag: 'Unexplained weight loss', present: false },
      { flag: 'History of malignancy', present: false },
      { flag: 'Fever / IV drug use / immunosuppression', present: false },
      { flag: 'Night pain unrelieved by position', present: false },
    ],
    yellowFlags: [
      'Anxiety about returning to manual lifting',
      'Catastrophising language ("I think I\'ve done my disc")',
    ],
    patientGoals: [
      'Return to warehouse work within 2 weeks',
      'Resume soccer training within 6 weeks',
      'Sleep through the night without waking',
    ],
  },

  hypotheses: [
    {
      id: 'hyp-l5-radic',
      label: 'Right L5 nerve root irritation (lumbar disc-related radiculopathy)',
      isPrimary: true,
      supportingFeatures: [
        'Dermatomal pattern (lateral calf, dorsum of foot) consistent with L5',
        'Cough/sneeze reproduction (Dejerine sign) suggests intraneural pressure',
        'Aggravated by sitting and forward flexion (typical disc behaviour)',
        'Mechanism (loaded flexion lift) consistent with disc-related injury',
      ],
      refutingFeatures: ['No frank weakness reported (subtle deficit possible)'],
      rationale:
        'Acute, dermatomal, mechanical, with cough-impulse positivity and sit-aggravated behaviour fit a disc-related L5 radiculopathy. JOSPT 2021 LBP CPG flags this presentation as the radiculopathy classification, requiring neuro screen and SLR/slump.',
      evidenceRefs: ['JOSPT-LBP-2021', 'MAGEE-7E-LBP'],
    },
    {
      id: 'hyp-nsclbp',
      label: 'Non-specific mechanical LBP with referred (somatic) leg pain',
      isPrimary: false,
      supportingFeatures: ['Mechanical pattern', 'No prior radicular history'],
      refutingFeatures: [
        'Distinct dermatomal distribution (not diffuse referred)',
        'Cough/sneeze sign positive (suggests neural rather than somatic source)',
      ],
      rationale: 'Somatic referred pain is usually proximal, deep, and non-dermatomal. The dermatomal map and Dejerine sign make this less likely than a true radiculopathy.',
      evidenceRefs: ['JOSPT-LBP-2021', 'LANCET-LBP-2018'],
    },
    {
      id: 'hyp-facet',
      label: 'Lumbar facet (zygapophyseal) sprain',
      isPrimary: false,
      supportingFeatures: ['Sudden onset', 'Localised back pain'],
      refutingFeatures: [
        'Leg pain extending below knee',
        'Sneeze reproduction',
        'Pattern of radicular features',
      ],
      rationale: 'Facet pain is typically localised, eased by flexion, and rarely produces dermatomal symptoms below the knee.',
      evidenceRefs: ['MAGEE-7E-LBP'],
    },
    {
      id: 'hyp-si',
      label: 'Sacroiliac joint dysfunction',
      isPrimary: false,
      supportingFeatures: ['Sudden mechanical onset', 'Buttock pain'],
      refutingFeatures: [
        'Pain extending past the knee with paraesthesia',
        'Aggravated by forward flexion (more disc-like)',
      ],
      rationale: 'SIJ pain rarely radiates below the knee and is not typically associated with cough impulse.',
      evidenceRefs: ['MAGEE-7E-LBP'],
    },
    {
      id: 'hyp-ce',
      label: 'Cauda equina syndrome',
      isPrimary: false,
      supportingFeatures: ['Lumbar mechanism with radiculopathy features'],
      refutingFeatures: [
        'No saddle anaesthesia',
        'Normal bowel/bladder',
        'Unilateral leg involvement only',
      ],
      rationale: 'Excluded on red-flag screen but must be re-checked at every visit — patients can deteriorate quickly.',
      evidenceRefs: ['NICE-NG59'],
    },
  ],

  objectiveTests: [
    {
      id: 't-obs',
      name: 'Standing posture & gait observation',
      category: 'observation',
      rationale: 'Antalgic listing/lateral shift is common in disc-related radiculopathy and informs centralisation strategy.',
      result: 'Slight lateral shift to the left away from the painful side; reduced right heel-toe gait quality.',
      interpretation: 'Lateral shift away from the painful side suggests a posterolateral disc lesion lateral to the nerve root.',
      expertSelected: true,
      evidenceRefs: ['MAGEE-7E-LBP'],
    },
    {
      id: 't-arom',
      name: 'Lumbar AROM (flexion, extension, side-flexion bilateral)',
      category: 'AROM',
      rationale: 'Establishes baseline movement, directional preference, and centralisation behaviour.',
      result: 'Flexion 30% with peripheralisation of right leg pain; extension 60% with centralisation; side-flex right limited 50%.',
      interpretation: 'Centralisation with extension suggests directional preference — favourable prognostic indicator and guides exercise.',
      expertSelected: true,
      evidenceRefs: ['JOSPT-LBP-2021'],
    },
    {
      id: 't-slr',
      name: 'Straight Leg Raise (SLR)',
      category: 'special',
      rationale: 'Sensitive screen for lumbar disc herniation with radiculopathy.',
      result: 'Right SLR positive at 35° reproducing leg pain; sensitised by ankle dorsiflexion. Left SLR 70° pain-free.',
      interpretation: 'Strongly suggests L5/S1 nerve root involvement.',
      expertSelected: true,
      sensitivity: 0.91,
      specificity: 0.26,
      lrPositive: 1.2,
      lrNegative: 0.35,
      evidenceRefs: ['COOK-HEGEDUS-2013', 'MAGEE-7E-LBP'],
    },
    {
      id: 't-slump',
      name: 'Slump test',
      category: 'special',
      rationale: 'More specific than SLR for neural mechanosensitivity.',
      result: 'Reproduces right leg pain at full neck flexion + knee extension; relieved with neck extension.',
      interpretation: 'Positive — supports radicular component and neural mechanosensitivity.',
      expertSelected: true,
      sensitivity: 0.84,
      specificity: 0.83,
      lrPositive: 4.9,
      lrNegative: 0.19,
      evidenceRefs: ['COOK-HEGEDUS-2013'],
    },
    {
      id: 't-neuro',
      name: 'Lower limb neuro screen (myotomes/dermatomes/reflexes L2–S2)',
      category: 'neuro',
      rationale: 'Detects motor or sensory loss that would change urgency and management pathway.',
      result: 'Right EHL 4/5; reduced light touch over right dorsum of foot. Reflexes 2+ symmetric.',
      interpretation: 'Mild L5 motor and sensory deficit consistent with nerve root irritation; not severe enough to alter conservative pathway, but document and review.',
      expertSelected: true,
      evidenceRefs: ['JOSPT-LBP-2021', 'MAGEE-7E-LBP'],
    },
    {
      id: 't-fabq',
      name: 'Fear-Avoidance Beliefs Questionnaire (FABQ-W)',
      category: 'functional',
      rationale: 'Screens for psychosocial drivers (yellow flags) that predict prolonged disability.',
      result: 'FABQ-W = 22 (cut-off ≥21 indicates increased risk of prolonged work disability).',
      interpretation: 'Elevated work-related fear-avoidance — incorporate education/CBT-informed approach.',
      expertSelected: true,
      evidenceRefs: ['JOSPT-LBP-2021'],
    },
    {
      id: 't-fabere',
      name: 'FABER test',
      category: 'special',
      rationale: 'Screens hip and SIJ for contribution to buttock/leg pain.',
      result: 'Negative bilaterally — no buttock or groin pain reproduced.',
      interpretation: 'Reduces likelihood of SIJ or hip-driven pain.',
      expertSelected: false,
      evidenceRefs: ['MAGEE-7E-LBP'],
    },
    {
      id: 't-thomas',
      name: "Thomas test (hip flexor length)",
      category: 'PROM',
      rationale: 'Useful for chronic LBP rehab but low yield in acute radiculopathy.',
      result: 'Mild bilateral psoas tightness.',
      interpretation: 'Not directly relevant to the acute presentation.',
      expertSelected: false,
      evidenceRefs: ['MAGEE-7E-LBP'],
    },
    {
      id: 't-palp',
      name: 'Lumbar PA palpation (central + unilateral L4–S1)',
      category: 'palpation',
      rationale: 'Assesses segmental mobility and pain provocation.',
      result: 'Reproduction of central LBP at L4–L5 with stiff feel; unilateral right L4–L5 reproduces familiar back pain.',
      interpretation: 'Symptomatic and stiff at L4–L5 — supports working hypothesis and may guide manual therapy.',
      expertSelected: true,
      evidenceRefs: ['MAGEE-7E-LBP'],
    },
  ],

  diagnosis: {
    primary: 'Acute right L5 radiculopathy from posterolateral L4–L5 disc lesion (no red flags, no severe motor loss).',
    keyElements: [
      { label: 'Spinal level (L5)', synonyms: ['l5', 'l4-l5', 'l4/5', 'l4-5', 'l4/l5'], hint: 'Which nerve root / level is involved?' },
      { label: 'Radicular / nerve-root involvement', synonyms: ['radiculopath', 'radicular', 'nerve root', 'sciatic'], hint: 'Is this radicular (nerve root) or somatic referred pain?' },
      { label: 'Disc-related mechanism', synonyms: ['disc', 'disk', 'herniat', 'prolaps', 'discogenic'], hint: 'What structure is likely driving it?' },
      { label: 'Red flags addressed / cauda equina excluded', synonyms: ['no red flag', 'red flag', 'cauda', 'no serious'], hint: 'Did you comment on red flags / cauda equina?' },
    ],
    differentialsExcluded: [
      'Cauda equina syndrome (no saddle anaesthesia, no bladder/bowel signs, unilateral)',
      'Spinal infection / malignancy (no constitutional signs, no night pain)',
      'Vertebral fracture (mechanism low-energy, no point tenderness, no osteoporosis risk factors)',
      'Vascular claudication (mechanical aggravators, dermatomal pattern)',
    ],
    reasoning:
      'Mechanical onset with dermatomal leg pain below the knee, positive cough impulse, positive Slump (high specificity), positive ipsilateral SLR with sensitisation, and a mild but consistent L5 motor and sensory deficit converge on disc-related L5 radiculopathy. Centralisation with extension provides a favourable prognostic signal and a directional-preference pathway. JOSPT 2021 LBP CPG → "radiculopathy" classification → first-line conservative care, neural mobilisation, education, and active exercise.',
  },

  icf: {
    bodyStructureFunction: [
      'Lumbar pain 4/10 background, 8/10 on flexion',
      'Right L5 dermatome paraesthesia',
      'EHL 4/5 weakness',
      'Reduced lumbar flexion (peripheralising) and right side-flexion',
    ],
    activityLimitations: [
      'Cannot tolerate prolonged sitting (>30 min)',
      'Difficulty bending to put on shoes/socks',
      'Unable to perform loaded lifting',
      'Disturbed sleep',
    ],
    participationRestrictions: [
      'Off work as warehouse picker',
      'Cannot drive long distances',
      'Cannot play recreational soccer',
      'Reduced participation in family activities',
    ],
    personalFactors: [
      'Smoker — modifiable risk for delayed disc recovery',
      'Catastrophising beliefs about back pain',
      'Prior LBP episode resolved with conservative care (favourable prior experience)',
      'Strong return-to-work motivation',
    ],
    environmentalFactors: [
      'Manual-handling-heavy workplace; modified duties available via WorkSafe Queensland process',
      'Supportive partner',
      'Access to GP and physiotherapy through Medicare CDM/EPC plan',
    ],
  },

  management: {
    shortTerm: [
      {
        category: 'education',
        intervention:
          'Reassurance using guideline-concordant messaging — favourable natural history of radiculopathy; pain-vs-harm distinction; centralisation as a positive sign.',
        doseFrequency: 'Embedded in every session, supported with patient handout.',
        rationale:
          'Education is a Strong recommendation in the JOSPT 2021 LBP CPG and addresses the FABQ-W elevation.',
        evidenceRefs: ['JOSPT-LBP-2021', 'NICE-NG59'],
      },
      {
        category: 'exercise',
        intervention:
          'Directional-preference exercise: prone press-ups + repeated lumbar extension in standing.',
        doseFrequency: '10 reps every 2 hours awake; progress as centralisation improves.',
        rationale:
          'Centralisation with extension predicts a favourable response to a directional-preference programme.',
        evidenceRefs: ['JOSPT-LBP-2021'],
      },
      {
        category: 'manual',
        intervention: 'Lumbar PA mobilisation grade III–IV at L4–L5 in a position of comfort.',
        doseFrequency: '2–3 sets x 30 s, twice weekly for 2 weeks, alongside active exercise.',
        rationale:
          'Manual therapy as an adjunct to active care has Moderate evidence in the acute LBP CPG.',
        evidenceRefs: ['JOSPT-LBP-2021', 'MAGEE-7E-LBP'],
      },
      {
        category: 'self-management',
        intervention: 'Activity modification — avoid prolonged sitting, frequent position changes, walking 10–15 min several times daily.',
        doseFrequency: 'Every awake hour.',
        rationale: 'Maintains activity, reduces deconditioning, and supports neural health.',
        evidenceRefs: ['JOSPT-LBP-2021', 'NICE-NG59'],
      },
    ],
    longTerm: [
      {
        category: 'exercise',
        intervention:
          'Graded motor control + lumbopelvic strengthening; progress to occupation-specific lifting retraining.',
        doseFrequency: '2–3 sessions/week for 6–8 weeks.',
        rationale:
          'Active exercise reduces recurrence and improves disability outcomes for both acute and chronic LBP.',
        evidenceRefs: ['JOSPT-LBP-2021'],
      },
      {
        category: 'education',
        intervention:
          'Pain neuroscience principles; manual handling re-training in collaboration with workplace OH&S.',
        doseFrequency: '2 sessions over 3 weeks.',
        rationale:
          'Reduces fear-avoidance and supports sustainable return to manual work.',
        evidenceRefs: ['JOSPT-LBP-2021', 'LANCET-LBP-2018'],
      },
      {
        category: 'referral',
        intervention:
          'Refer for MRI ± neurosurgical opinion if no improvement in pain or neuro signs at 6–8 weeks, or earlier if progressive deficit emerges.',
        rationale:
          'Imaging is not indicated in the first 6 weeks of radiculopathy without red flags or progressive deficit.',
        evidenceRefs: ['NICE-NG59', 'JOSPT-LBP-2021'],
      },
    ],
    prognosis:
      'Most disc-related radiculopathies improve substantially over 6–12 weeks with conservative care. Centralisation and absence of severe weakness are favourable. Smoking, FABQ-W elevation and manual job are modest risk factors for prolonged recovery — address proactively.',
    redFlagsToMonitor: [
      'New or progressive motor weakness',
      'New saddle anaesthesia or bowel/bladder dysfunction (urgent ED referral for cauda equina screen)',
      'Bilateralisation of leg symptoms',
      'Constitutional symptoms (fever, weight loss, night pain unrelieved by position)',
    ],
  },

  references: [
    {
      id: 'JOSPT-LBP-2021',
      citation:
        'George SZ et al. Interventions for the Management of Acute and Chronic Low Back Pain: Revision 2021. Clinical Practice Guidelines Linked to the ICF. JOSPT 2021;51(11):CPG1–CPG60.',
      doi: '10.2519/jospt.2021.0304',
      url: 'https://www.jospt.org/doi/10.2519/jospt.2021.0304',
      level: 'CPG',
    },
    {
      id: 'NICE-NG59',
      citation:
        'NICE. Low back pain and sciatica in over 16s: assessment and management. NICE guideline NG59 (updated 2020).',
      url: 'https://www.nice.org.uk/guidance/ng59',
      level: 'CPG',
    },
    {
      id: 'LANCET-LBP-2018',
      citation:
        'Hartvigsen J, Hancock MJ, Kongsted A, et al. What low back pain is and why we need to pay attention. Lancet 2018;391(10137):2356–2367.',
      doi: '10.1016/S0140-6736(18)30480-X',
      level: 'SR',
    },
    {
      id: 'MAGEE-7E-LBP',
      citation: 'Magee DJ. Orthopedic Physical Assessment, 7th ed. Ch. 9: Lumbar Spine. Elsevier 2021.',
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
