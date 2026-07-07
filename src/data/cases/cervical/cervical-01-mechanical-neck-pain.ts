import type { Case } from '../../../types/case';

export const cervical01: Case = {
  id: 'cervical-01-mechanical-neck-pain',
  region: 'cervical',
  title: 'Mechanical neck pain in a desk-based worker (JOSPT Group 1)',
  difficulty: 1,
  estimatedMinutes: 14,
  learningObjectives: [
    'Apply the JOSPT 2017 Neck Pain CPG classification (mobility, headaches, movement coordination, radiating pain).',
    'Use the Neck Disability Index (NDI) to stratify severity.',
    'Recognise when pre-manipulative cervical screening (IFOMPT framework) is required.',
  ],

  demographics: { age: 32, sex: 'F', occupation: 'Administration officer (state government, full-time desk)' },

  referral:
    'Self-referred private. 32 yo female with 6 weeks of right-sided neck pain associated with desk work. No arm symptoms. Trial of OTC NSAIDs and stretches.',

  subjective: {
    hpc:
      'Insidious onset 6 weeks ago, gradually worsening. Right posterior cervical ache 4/10 baseline, 6/10 with prolonged screen work. Stiffness on rising in the morning, eases within 20 min. No leg, arm or facial symptoms. No headaches.',
    aggravating: ['Sustained sitting at computer >45 min', 'Looking down at phone', 'Reversing the car (cervical rotation)'],
    easing: ['Heat', 'Movement breaks', 'Lying flat'],
    pmh: ['Mild lower back pain 2 years ago, resolved'],
    drugHx: ['OTC ibuprofen prn'],
    socialHx: 'Lives in Melbourne suburbs with partner. Hybrid desk role. Pilates 1×/week. Non-smoker.',
    redFlagScreen: [
      { flag: 'Significant trauma (fall, MVA)', present: false },
      { flag: 'Unexplained weight loss / malignancy', present: false },
      { flag: 'Fever / IV drug use / immunosuppression', present: false },
      { flag: 'Bilateral arm symptoms or progressive weakness (myelopathy)', present: false },
      { flag: 'Bowel/bladder change', present: false },
      { flag: 'Drop attacks / dizziness / dysarthria / dysphagia (5Ds)', present: false },
      { flag: 'Vertebrobasilar / cardiovascular risk factors', present: false },
    ],
    yellowFlags: ['Mild work stress'],
    patientGoals: ['Get through a full work day without pain', 'Return to Pilates', 'Reduce reliance on NSAIDs'],
  },

  hypotheses: [
    {
      id: 'hyp-mnp',
      label: 'Mechanical neck pain (JOSPT Group 1: neck pain with mobility deficits)',
      isPrimary: true,
      supportingFeatures: [
        'Insidious posture-related onset',
        'Localised, mechanical pattern, no radiation',
        'Cervical rotation aggravates',
      ],
      refutingFeatures: ['No clear segmental hypomobility identified yet — confirm with exam'],
      rationale: 'JOSPT 2017 Neck Pain CPG classifies non-radiating, mechanical neck pain with mobility deficits as Group 1 — manual therapy + cervico-thoracic exercise.',
      evidenceRefs: ['JOSPT-NECK-2017', 'MAGEE-7E-CERV'],
    },
    {
      id: 'hyp-radic',
      label: 'Cervical radiculopathy',
      isPrimary: false,
      supportingFeatures: ['Unilateral neck pain'],
      refutingFeatures: ['No arm pain or paraesthesia', 'No dermatomal pattern'],
      rationale: 'Radiculopathy requires arm-dominant dermatomal pain — absent here.',
      evidenceRefs: ['JOSPT-NECK-2017'],
    },
    {
      id: 'hyp-cgh',
      label: 'Cervicogenic headache',
      isPrimary: false,
      supportingFeatures: ['Upper cervical irritation possible'],
      refutingFeatures: ['No headache reported'],
      rationale: 'A cervicogenic headache requires headache as a primary feature.',
      evidenceRefs: ['ICHD-3-2018'],
    },
    {
      id: 'hyp-myelo',
      label: 'Cervical myelopathy',
      isPrimary: false,
      supportingFeatures: ['Cervical pain'],
      refutingFeatures: ['No bilateral signs', 'No gait change', 'No bowel/bladder', 'Young age'],
      rationale: 'Excluded by age, normal screen, and absence of long-tract signs.',
      evidenceRefs: ['JOSPT-NECK-2017'],
    },
  ],

  objectiveTests: [
    {
      id: 't-obs',
      name: 'Postural observation',
      category: 'observation',
      rationale: 'Identify forward head posture / thoracic kyphosis contribution.',
      result: 'Forward head posture with increased upper-thoracic kyphosis.',
      interpretation: 'Postural pattern consistent with desk-related load.',
      expertSelected: true,
      evidenceRefs: ['MAGEE-7E-CERV'],
    },
    {
      id: 't-arom',
      name: 'Cervical AROM (flex/ext, rotation, side-flex)',
      category: 'AROM',
      rationale: 'Quantify mobility and pain provocation; required for JOSPT classification.',
      result: 'R rotation 65° (limited, normal 80°), reproducing R neck pain. Other planes WNL.',
      interpretation: 'Mobility deficit in R rotation supports Group 1 classification.',
      expertSelected: true,
      evidenceRefs: ['JOSPT-NECK-2017', 'MAGEE-7E-CERV'],
    },
    {
      id: 't-ccft',
      name: 'Craniocervical Flexion Test (CCFT) with biofeedback unit',
      category: 'functional',
      rationale: 'Assesses deep cervical flexor activation — key motor control measure.',
      result: 'Reaches 24 mmHg with substitution from SCM at 26 mmHg.',
      interpretation: 'Reduced deep neck flexor endurance — common in mechanical neck pain.',
      expertSelected: true,
      evidenceRefs: ['JOSPT-NECK-2017'],
    },
    {
      id: 't-palp',
      name: 'Cervical PA palpation (C2–C7)',
      category: 'palpation',
      rationale: 'Identify symptomatic and stiff segments to guide manual therapy.',
      result: 'Stiff and pain-reproducing right unilateral C5–C6.',
      interpretation: 'Provides target for grade III–IV mobilisation.',
      expertSelected: true,
      evidenceRefs: ['MAGEE-7E-CERV'],
    },
    {
      id: 't-spurling',
      name: 'Spurling test',
      category: 'special',
      rationale: 'Test for cervical radiculopathy.',
      result: 'Negative — no arm symptoms reproduced.',
      interpretation: 'Reduces likelihood of radiculopathy.',
      expertSelected: true,
      sensitivity: 0.5,
      specificity: 0.86,
      lrPositive: 3.5,
      lrNegative: 0.58,
      evidenceRefs: ['COOK-HEGEDUS-2013', 'JOSPT-CERV-RAD-2018'],
    },
    {
      id: 't-distract',
      name: 'Cervical distraction test',
      category: 'special',
      rationale: 'Reduce nerve root compression — relieves true radicular pain.',
      result: 'Negative.',
      interpretation: 'No relief on distraction; consistent with non-radicular pain.',
      expertSelected: false,
      sensitivity: 0.44,
      specificity: 0.9,
      evidenceRefs: ['COOK-HEGEDUS-2013'],
    },
    {
      id: 't-vbi',
      name: 'IFOMPT cervical artery screen (VBI history + sustained rotation)',
      category: 'special',
      rationale: 'Required prior to high-velocity cervical thrust techniques per IFOMPT framework.',
      result: 'No 5D-and-3N symptoms; sustained rotation tests negative.',
      interpretation: 'Cervical artery dysfunction screen negative — informed-consent for any HVT still required if used.',
      expertSelected: true,
      evidenceRefs: ['IFOMPT-CERV-2020'],
    },
    {
      id: 't-ndi',
      name: 'Neck Disability Index (NDI)',
      category: 'functional',
      rationale: 'Validated PROM for severity stratification.',
      result: '14/50 (mild–moderate).',
      interpretation: 'Useful baseline for outcome tracking.',
      expertSelected: true,
      evidenceRefs: ['JOSPT-NECK-2017'],
    },
  ],

  diagnosis: {
    primary: 'Mechanical neck pain with mobility deficits (JOSPT 2017 Group 1), R-sided, mild-moderate disability (NDI 14).',
    keyElements: [
      { label: 'Mechanical neck pain', synonyms: ['mechanical', 'neck pain'], hint: 'Name the pain type.' },
      { label: 'Mobility deficit (JOSPT Group 1)', synonyms: ['mobility', 'stiff', 'hypomobil', 'rotation deficit', 'restricted', 'reduced rotation'], hint: 'What impairment classification?' },
      { label: 'Radiculopathy excluded', synonyms: ['no arm', 'non-radicular', 'no radiculopathy', 'not radicular'], hint: 'Did you exclude nerve-root involvement?' },
      { label: 'Postural / desk contribution', synonyms: ['postur', 'desk', 'forward head', 'ergonom'], hint: 'What contributing factor?' },
    ],
    differentialsExcluded: [
      'Cervical radiculopathy (no arm pain, Spurling negative)',
      'Cervical myelopathy (no long-tract signs)',
      'Cervicogenic headache (no headache)',
      'Cervical artery dysfunction (negative IFOMPT screen)',
    ],
    reasoning:
      'Insidious posture-related onset with localised mechanical pain, R rotation limitation, segmental hypomobility at C5–C6 and CCFT deficits matches JOSPT 2017 Group 1 (mobility deficits). Manual therapy plus cervico-thoracic exercise is the recommended pathway.',
  },

  icf: {
    bodyStructureFunction: [
      'Right cervical pain 4/10',
      'R rotation deficit 15°',
      'Reduced deep cervical flexor endurance (CCFT 24 mmHg)',
      'C5–C6 unilateral hypomobility',
    ],
    activityLimitations: [
      'Cannot sustain desk work >45 min without pain',
      'Limited reversing in car',
      'Reduced exercise tolerance',
    ],
    participationRestrictions: [
      'Reduced productivity at work',
      'Paused Pilates classes',
    ],
    personalFactors: [
      'Active lifestyle pre-onset (favourable)',
      'Mild work stress',
      'Health-literate, motivated',
    ],
    environmentalFactors: [
      'Hybrid workplace — flexibility for ergonomic changes',
      'Access to private physiotherapy',
    ],
  },

  management: {
    shortTerm: [
      {
        category: 'manual',
        intervention: 'Cervical and thoracic mobilisations (grade III–IV) targeting C5–C6 and upper thoracic.',
        doseFrequency: '2 x/week for 2 weeks; reassess.',
        rationale: 'Strong evidence for combined cervical + thoracic mobilisation in Group 1 neck pain.',
        evidenceRefs: ['JOSPT-NECK-2017'],
      },
      {
        category: 'exercise',
        intervention: 'Cervico-scapulothoracic strengthening + CCFT progressions.',
        doseFrequency: 'Daily home programme; supervised 1 x/week.',
        rationale: 'Strong recommendation in JOSPT 2017 CPG; addresses CCFT deficit.',
        evidenceRefs: ['JOSPT-NECK-2017'],
      },
      {
        category: 'education',
        intervention: 'Workstation set-up advice + hourly micro-break strategy.',
        rationale: 'Reduces sustained postural load contributing to symptoms.',
        evidenceRefs: ['JOSPT-NECK-2017'],
      },
    ],
    longTerm: [
      {
        category: 'exercise',
        intervention: 'Progress to resisted scapular and cervical strengthening, integrate with Pilates return.',
        doseFrequency: '2–3 x/week.',
        rationale: 'Strength training reduces recurrence in mechanical neck pain.',
        evidenceRefs: ['JOSPT-NECK-2017'],
      },
      {
        category: 'self-management',
        intervention: 'Self-mobilisation routine + flare plan (positions of comfort, pacing).',
        rationale: 'Reduces dependence on passive care and supports self-efficacy.',
        evidenceRefs: ['JOSPT-NECK-2017'],
      },
    ],
    prognosis: 'Favourable. Most cases of Group 1 neck pain improve substantially with 6–8 sessions of guideline-concordant care. Recurrence reduced by sustained strength + ergonomic changes.',
    redFlagsToMonitor: [
      'Onset of arm pain or paraesthesia',
      'Bilateral arm or hand involvement',
      'Drop attacks, dizziness, dysarthria, dysphagia',
      'Loss of fine motor control or balance',
    ],
  },

  references: [
    {
      id: 'JOSPT-NECK-2017',
      citation:
        'Blanpied PR et al. Neck Pain: Revision 2017. CPG Linked to the ICF. JOSPT 2017;47(7):A1–A83.',
      doi: '10.2519/jospt.2017.0302',
      level: 'CPG',
    },
    {
      id: 'JOSPT-CERV-RAD-2018',
      citation: 'Cervical Radiculopathy CPG. JOSPT 2018.',
      level: 'CPG',
    },
    {
      id: 'IFOMPT-CERV-2020',
      citation: 'Rushton A et al. International Framework for Examination of the Cervical Region — IFOMPT 2020.',
      url: 'https://www.ifompt.org/',
      level: 'Expert',
    },
    {
      id: 'MAGEE-7E-CERV',
      citation: 'Magee DJ. Orthopedic Physical Assessment, 7th ed. Ch. 5. Elsevier 2021.',
      level: 'Textbook',
    },
    {
      id: 'COOK-HEGEDUS-2013',
      citation: 'Cook CE, Hegedus EJ. Orthopedic Physical Examination Tests, 2nd ed. Pearson 2013.',
      level: 'Textbook',
    },
    {
      id: 'ICHD-3-2018',
      citation: 'ICHD-3. Cephalalgia 2018;38(1):1–211.',
      url: 'https://ichd-3.org/',
      level: 'Expert',
    },
  ],
};
