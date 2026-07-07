import type { Case } from '../../../types/case';

export const lbp02: Case = {
  id: 'lbp-02-non-specific-chronic',
  region: 'lbp',
  title: 'Chronic non-specific LBP with high fear-avoidance in a sedentary worker',
  difficulty: 2,
  estimatedMinutes: 16,
  learningObjectives: [
    'Recognise non-specific chronic LBP and the role of psychosocial drivers.',
    'Use validated PROMs (FABQ, ÖMSPQ) to stratify risk.',
    'Build an active, evidence-based plan that prioritises exercise + education over passive modalities.',
  ],

  demographics: { age: 55, sex: 'F', occupation: 'Senior administrator (desk-based, full-time)' },
  referral:
    'GP referral. 55 yo female with 8 months of progressively worsening LBP. No leg pain, no red flags reported. NSAIDs minimal benefit. Has had two short courses of physiotherapy with limited success. Considering imaging.',

  subjective: {
    hpc:
      'Insidious onset 8 months ago after a busy work period. Diffuse low back ache 5/10 at baseline, sharp 7/10 with prolonged sitting (>20 min). No leg symptoms. Has stopped morning walks "in case I do more damage". Sleep disturbed 2–3 nights/week.',
    aggravating: ['Prolonged sitting', 'First movements after sitting', 'Stress at work', 'Lifting groceries'],
    easing: ['Gentle walking in short bursts', 'Lying with knees bent', 'Heat'],
    pmh: ['Hypothyroidism (well controlled)', 'Anxiety (managed with GP)'],
    drugHx: ['Levothyroxine', 'Paracetamol prn', 'Brief course of celecoxib'],
    socialHx:
      'Lives with husband in Adelaide; two adult children. Sedentary work, drives 40 min commute. No exercise in last 6 months. Non-smoker.',
    redFlagScreen: [
      { flag: 'Saddle anaesthesia', present: false },
      { flag: 'Bowel/bladder dysfunction', present: false },
      { flag: 'Bilateral leg pain or progressive weakness', present: false },
      { flag: 'Significant trauma', present: false },
      { flag: 'Unexplained weight loss', present: false },
      { flag: 'History of malignancy', present: false },
      { flag: 'Night pain unrelieved by position', present: false },
    ],
    yellowFlags: [
      'High kinesiophobia ("I think exercise will hurt my disc")',
      'Pain catastrophising',
      'Avoidance of physical activity',
      'Belief that imaging is needed to "find the cause"',
    ],
    patientGoals: ['Walk pain-free for 30 minutes', 'Sit through a 90-minute work meeting', 'Sleep through the night'],
  },

  hypotheses: [
    {
      id: 'hyp-nschronic',
      label: 'Chronic non-specific LBP with prominent psychosocial drivers',
      isPrimary: true,
      supportingFeatures: [
        'Insidious onset, >12 weeks duration',
        'No dermatomal leg pain or red flags',
        'High FABQ-PA, kinesiophobia, deconditioning',
        'Diffuse, non-anatomical pain pattern',
      ],
      refutingFeatures: ['Mechanical aggravation pattern still consistent — does not exclude this hypothesis'],
      rationale:
        'The Lancet LBP series 2018 highlights that ~85–90% of LBP is non-specific. Psychosocial drivers explain much of the chronicity. JOSPT 2021 CPG recommends classification → cognitive functional/active care.',
      evidenceRefs: ['JOSPT-LBP-2021', 'LANCET-LBP-2018', 'BUCHBINDER-LBP-2018'],
    },
    {
      id: 'hyp-radic',
      label: 'Lumbar radiculopathy',
      isPrimary: false,
      supportingFeatures: ['Chronic LBP'],
      refutingFeatures: ['No leg pain', 'No paraesthesia', 'No neuro deficit'],
      rationale: 'Radiculopathy requires leg-dominant dermatomal pain — absent here.',
      evidenceRefs: ['JOSPT-LBP-2021'],
    },
    {
      id: 'hyp-stenosis',
      label: 'Lumbar canal stenosis',
      isPrimary: false,
      supportingFeatures: ['Age 55'],
      refutingFeatures: [
        'No neurogenic claudication',
        'Walking eases symptoms',
        'Sitting aggravates (opposite of stenosis pattern)',
      ],
      rationale: 'Classic stenosis pattern is leg pain on walking, eased by flexion/sitting — opposite of this presentation.',
      evidenceRefs: ['MAGEE-7E-LBP'],
    },
    {
      id: 'hyp-facet-oa',
      label: 'Facet joint osteoarthritis',
      isPrimary: false,
      supportingFeatures: ['Age, morning stiffness, extension-aggravated'],
      refutingFeatures: ['Sitting (flexion-loaded) is the main aggravator', 'Pattern is too diffuse'],
      rationale: 'Possible contributor but unlikely as primary driver given sitting-dominant pattern and psychosocial features.',
      evidenceRefs: ['MAGEE-7E-LBP'],
    },
  ],

  objectiveTests: [
    {
      id: 't-arom',
      name: 'Lumbar AROM with repeated movements',
      category: 'AROM',
      rationale: 'Identify directional preference and behavioural response.',
      result: 'No clear directional preference; pain reproduced equally in flexion and extension. No peripheralisation.',
      interpretation: 'Non-mechanical/non-directional pattern fits non-specific chronic LBP.',
      expertSelected: true,
      evidenceRefs: ['JOSPT-LBP-2021'],
    },
    {
      id: 't-neuro',
      name: 'Lower-limb neuro screen',
      category: 'neuro',
      rationale: 'Rule out occult radiculopathy or stenosis.',
      result: 'Normal myotomes, dermatomes, reflexes. SLR negative bilaterally.',
      interpretation: 'Excludes nerve root involvement.',
      expertSelected: true,
      evidenceRefs: ['MAGEE-7E-LBP'],
    },
    {
      id: 't-fabq',
      name: 'FABQ + ÖMSPQ',
      category: 'functional',
      rationale: 'Quantify psychosocial risk.',
      result: 'FABQ-PA 22 (high); ÖMSPQ 110 (high risk for chronicity).',
      interpretation: 'High psychosocial risk — prioritise cognitive functional approach and graded activity.',
      expertSelected: true,
      evidenceRefs: ['JOSPT-LBP-2021'],
    },
    {
      id: 't-sts',
      name: '5-Times Sit-to-Stand',
      category: 'functional',
      rationale: 'Functional capacity / lower-limb strength baseline.',
      result: '14 s (slow for age — suggests deconditioning).',
      interpretation: 'Confirms deconditioning; provides a measurable retest target.',
      expertSelected: true,
      evidenceRefs: ['JOSPT-LBP-2021'],
    },
    {
      id: 't-palp',
      name: 'Lumbar palpation',
      category: 'palpation',
      rationale: 'Localise tender segments.',
      result: 'Diffuse paraspinal tenderness, no segmental hypomobility.',
      interpretation: 'Non-specific finding, supports diffuse pain pattern.',
      expertSelected: false,
      evidenceRefs: ['MAGEE-7E-LBP'],
    },
    {
      id: 't-slr',
      name: 'Straight Leg Raise',
      category: 'special',
      rationale: 'Sensitive screen for radiculopathy — needed even when leg pain absent if there is doubt.',
      result: 'Negative bilaterally to 80°.',
      interpretation: 'Reduces likelihood of nerve root involvement.',
      expertSelected: true,
      evidenceRefs: ['COOK-HEGEDUS-2013'],
    },
    {
      id: 't-faber',
      name: 'FABER test',
      category: 'special',
      rationale: 'Screens hip and SIJ.',
      result: 'Negative bilaterally.',
      interpretation: 'Reduces likelihood of hip/SIJ contribution.',
      expertSelected: false,
      evidenceRefs: ['MAGEE-7E-LBP'],
    },
    {
      id: 't-ultrasound',
      name: 'Lumbar ultrasound imaging',
      category: 'special',
      rationale: 'Sometimes requested by patients but no diagnostic role here.',
      result: 'Not performed.',
      interpretation: 'No indication. Avoid adding to the patient\'s mental model that imaging will explain pain.',
      expertSelected: false,
      evidenceRefs: ['NICE-NG59', 'BUCHBINDER-LBP-2018'],
    },
  ],

  diagnosis: {
    primary: 'Chronic non-specific LBP with high psychosocial risk (yellow flags +ve, no red flags).',
    keyElements: [
      { label: 'Non-specific', synonyms: ['non-specific', 'nonspecific', 'non specific'], hint: 'Can you attribute it to a specific structure?' },
      { label: 'Chronic / persistent', synonyms: ['chronic', 'persistent', 'long-standing', 'longstanding', '3 month', 'months'], hint: 'Note the duration / chronicity.' },
      { label: 'Psychosocial drivers (yellow flags)', synonyms: ['psychosocial', 'yellow flag', 'fear', 'kinesiophob', 'catastroph', 'fear-avoidance', 'fear avoidance'], hint: 'What non-tissue factors are driving this?' },
      { label: 'Serious / radicular pathology excluded', synonyms: ['no red flag', 'non-radicular', 'no radiculopathy', 'not radicular', 'no leg pain'], hint: 'Did you rule out radiculopathy / red flags?' },
    ],
    differentialsExcluded: [
      'Lumbar radiculopathy (no leg pain, neuro normal, SLR negative)',
      'Lumbar canal stenosis (no neurogenic claudication; sitting-aggravated)',
      'Inflammatory back pain (no morning stiffness >60 min, no peripheral arthritis, age of onset)',
    ],
    reasoning:
      'A chronic, diffuse, non-dermatomal presentation with no red flags, normal neuro screen, and prominent yellow flags is consistent with non-specific chronic LBP. Imaging is not indicated and may worsen kinesiophobia. JOSPT 2021 CPG recommendation: active physical and psychologically informed care.',
  },

  icf: {
    bodyStructureFunction: [
      'Diffuse paraspinal pain 5/10 baseline',
      'No neurological deficit',
      'Reduced lumbopelvic motor control & deconditioning (slow STS)',
    ],
    activityLimitations: [
      'Cannot sit >20 minutes without pain',
      'Avoiding walks',
      'Difficulty lifting groceries',
    ],
    participationRestrictions: [
      'Reduced productivity at work',
      'Stopped social walking group',
      'Reduced family activities',
    ],
    personalFactors: [
      'High kinesiophobia & catastrophising',
      'Anxiety history',
      'Belief that imaging is required',
      'Age 55 — modifiable cardiometabolic profile',
    ],
    environmentalFactors: [
      'Sedentary, screen-based workplace',
      '40-min commute',
      'Supportive husband',
      'Access to GP and Medicare CDM physiotherapy',
    ],
  },

  management: {
    shortTerm: [
      {
        category: 'education',
        intervention: 'Pain neuroscience education emphasising pain ≠ tissue damage in chronic LBP, role of psychosocial factors, and that imaging is unlikely to change management.',
        rationale: 'Strong recommendation for education in chronic LBP; addresses high FABQ and the imaging request.',
        evidenceRefs: ['JOSPT-LBP-2021', 'BUCHBINDER-LBP-2018'],
      },
      {
        category: 'exercise',
        intervention: 'Graded walking programme + general aerobic activity (target 150 min/week).',
        doseFrequency: 'Start 10 min x 5/week; +2 min/session/week.',
        rationale: 'Aerobic exercise reduces pain and disability in chronic LBP and addresses deconditioning.',
        evidenceRefs: ['JOSPT-LBP-2021'],
      },
      {
        category: 'self-management',
        intervention: 'Sitting-tolerance pacing (e.g., stand-up break every 25 min) and home set-up advice.',
        rationale: 'Activity pacing reduces flare frequency and breaks the "sit then catastrophise" loop.',
        evidenceRefs: ['JOSPT-LBP-2021'],
      },
    ],
    longTerm: [
      {
        category: 'exercise',
        intervention: 'Progressive resistance + motor control training; consider yoga or Pilates if patient prefers.',
        doseFrequency: '2–3 sessions/week, 8–12 weeks.',
        rationale: 'Multiple modalities of exercise reduce chronic LBP pain/disability with similar effect sizes — patient preference improves adherence.',
        evidenceRefs: ['JOSPT-LBP-2021', 'NICE-NG59'],
      },
      {
        category: 'education',
        intervention: 'Cognitive functional therapy principles — link movements to behaviours; reframe protective postures.',
        rationale: 'CFT shows large effects in chronic LBP with high psychosocial drivers.',
        evidenceRefs: ['JOSPT-LBP-2021'],
      },
      {
        category: 'referral',
        intervention: 'Refer to clinical psychology if FABQ/ÖMSPQ remain elevated at 6 weeks despite physio.',
        rationale: 'Multidisciplinary care is recommended where psychosocial barriers persist.',
        evidenceRefs: ['JOSPT-LBP-2021', 'NICE-NG59'],
      },
    ],
    prognosis:
      'With active care + education, meaningful improvement is realistic over 8–12 weeks. High FABQ predicts slower progress; consistent reassurance and graded activity are key.',
    redFlagsToMonitor: [
      'Emergence of leg-dominant pain or paraesthesia',
      'New constitutional symptoms (weight loss, fever, night pain)',
      'Bilateral leg symptoms or saddle changes',
    ],
  },

  references: [
    {
      id: 'JOSPT-LBP-2021',
      citation:
        'George SZ et al. Interventions for the Management of Acute and Chronic Low Back Pain: Revision 2021. JOSPT 2021;51(11):CPG1–CPG60.',
      doi: '10.2519/jospt.2021.0304',
      level: 'CPG',
    },
    {
      id: 'NICE-NG59',
      citation:
        'NICE. Low back pain and sciatica in over 16s: assessment and management. NICE guideline NG59.',
      url: 'https://www.nice.org.uk/guidance/ng59',
      level: 'CPG',
    },
    {
      id: 'LANCET-LBP-2018',
      citation:
        'Hartvigsen J et al. What low back pain is and why we need to pay attention. Lancet 2018;391:2356–2367.',
      doi: '10.1016/S0140-6736(18)30480-X',
      level: 'SR',
    },
    {
      id: 'BUCHBINDER-LBP-2018',
      citation:
        'Buchbinder R, et al. Low back pain: a call for action. Lancet 2018;391:2384–2388.',
      doi: '10.1016/S0140-6736(18)30488-4',
      level: 'Expert',
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
