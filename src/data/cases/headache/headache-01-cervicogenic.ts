import type { Case } from '../../../types/case';

export const headache01: Case = {
  id: 'headache-01-cervicogenic',
  region: 'headache',
  title: 'Cervicogenic headache in a yoga instructor',
  difficulty: 2,
  estimatedMinutes: 16,
  learningObjectives: [
    'Apply ICHD-3 diagnostic criteria for cervicogenic headache.',
    'Use the Flexion-Rotation Test (FRT) to localise upper-cervical (C1–C2) involvement.',
    'Construct a Jull-style multimodal physiotherapy plan (manual therapy + cervical exercise).',
  ],

  demographics: { age: 38, sex: 'F', occupation: 'Yoga instructor and part-time barista' },

  referral:
    'Self-referred. 38 yo female with 6 months of right-sided headache, often triggered by neck postures during teaching. Has tried massage and OTC analgesia.',

  subjective: {
    hpc:
      'Right unilateral headache, occipital → fronto-temporal, gradual onset 6 months ago. Episodes 2–3 times/week, lasting hours. NPRS 5–7/10. Triggered by sustained neck rotation right (e.g. demonstrating poses) and prolonged head-down phone use. No aura, no photophobia (mild only), no nausea. Always same side.',
    aggravating: ['Sustained R cervical rotation', 'Prolonged forward head posture', 'Phone use in bed'],
    easing: ['Lying down with neck supported', 'Self-massage suboccipital', 'Heat'],
    pmh: ['Mild whiplash 6 years ago — fully recovered'],
    drugHx: ['OTC paracetamol prn (~2 doses/week)'],
    socialHx: 'Lives in Sydney with partner. Teaches 12 classes/week + casual barista. No smoking, light alcohol.',
    redFlagScreen: [
      { flag: 'Thunderclap onset (worst-ever, sudden)', present: false },
      { flag: 'Fever / neck stiffness', present: false },
      { flag: 'Neurological signs (focal deficit, aura with weakness)', present: false },
      { flag: '5Ds and 3Ns (cervical artery)', present: false },
      { flag: 'Worsening pattern over days', present: false },
      { flag: 'Onset >50 yr (giant cell arteritis risk)', present: false },
      { flag: 'Wakes from sleep / worsens with Valsalva', present: false },
    ],
    yellowFlags: ['Mild stress about juggling two jobs'],
    patientGoals: ['Teach a full week without headaches', 'Reduce reliance on analgesia', 'Sleep without waking'],
  },

  hypotheses: [
    {
      id: 'hyp-cgh',
      label: 'Cervicogenic headache (ICHD-3 11.2.1)',
      isPrimary: true,
      supportingFeatures: [
        'Strictly unilateral, side-locked',
        'Triggered/worsened by neck movements & sustained postures',
        'Occipital → frontal pattern (referral from upper cervical)',
        'No aura, minimal photophobia/nausea',
      ],
      refutingFeatures: [],
      rationale: 'ICHD-3 requires evidence of cervical disorder + temporal/clinical relationship to headache. Side-locked, neck-triggered HA with prior whiplash supports CGH.',
      evidenceRefs: ['ICHD-3-2018', 'JULL-CGH-2002'],
    },
    {
      id: 'hyp-migraine',
      label: 'Migraine without aura',
      isPrimary: false,
      supportingFeatures: ['Moderate–severe intensity'],
      refutingFeatures: [
        'Strictly unilateral and side-locked (migraine often switches sides)',
        'No nausea, photophobia mild, no phonophobia',
        'Triggered by neck movement (atypical for migraine)',
      ],
      rationale: 'Migraine has higher intensity and prominent autonomic features; less mechanically triggered.',
      evidenceRefs: ['ICHD-3-2018'],
    },
    {
      id: 'hyp-tth',
      label: 'Tension-type headache',
      isPrimary: false,
      supportingFeatures: ['Mild–moderate pressing quality'],
      refutingFeatures: ['TTH is typically bilateral and non-pulsatile, not movement-triggered'],
      rationale: 'TTH would not be side-locked or triggered by neck rotation.',
      evidenceRefs: ['ICHD-3-2018'],
    },
    {
      id: 'hyp-secondary',
      label: 'Secondary headache (vascular, infective, neoplastic)',
      isPrimary: false,
      supportingFeatures: ['Headache as primary complaint'],
      refutingFeatures: ['Negative red-flag screen', 'No constitutional symptoms', 'Stable pattern over months'],
      rationale: 'Excluded clinically; would require imaging/medical referral if new red flags develop.',
      evidenceRefs: ['ICHD-3-2018'],
    },
  ],

  objectiveTests: [
    {
      id: 't-frt',
      name: 'Flexion-Rotation Test (FRT) for C1–C2',
      category: 'special',
      rationale: 'Best-supported test for upper cervical mobility deficit in CGH.',
      result: 'R rotation in flexion 28° (limited; symmetry threshold ~44°), reproduces familiar headache.',
      interpretation: 'Strongly supports C1–C2 contribution.',
      expertSelected: true,
      sensitivity: 0.91,
      specificity: 0.9,
      lrPositive: 9.0,
      lrNegative: 0.1,
      evidenceRefs: ['JULL-CGH-2002', 'COOK-HEGEDUS-2013'],
    },
    {
      id: 't-arom',
      name: 'Cervical AROM',
      category: 'AROM',
      rationale: 'Identifies general cervical mobility deficits.',
      result: 'R rotation 65° reproduces headache; extension 70%; other planes WNL.',
      interpretation: 'Mobility deficit in R rotation contributes to symptom triggering.',
      expertSelected: true,
      evidenceRefs: ['JOSPT-NECK-2017'],
    },
    {
      id: 't-palp',
      name: 'Manual segmental palpation C0–C3',
      category: 'palpation',
      rationale: 'Locate symptomatic upper cervical segments — required for ICHD-3 evidence of cervical disorder.',
      result: 'R C1–C2 reproduces familiar headache; stiff into rotation right.',
      interpretation: 'Symptomatic upper cervical dysfunction directly reproducing the headache.',
      expertSelected: true,
      evidenceRefs: ['JULL-CGH-2002', 'MAGEE-7E-CERV'],
    },
    {
      id: 't-ccft',
      name: 'Craniocervical Flexion Test',
      category: 'functional',
      rationale: 'Deep cervical flexor performance is impaired in CGH (Jull et al.).',
      result: 'Reaches 22 mmHg with substitution at 24 mmHg.',
      interpretation: 'Impaired deep cervical flexor endurance — common finding in CGH.',
      expertSelected: true,
      evidenceRefs: ['JULL-CGH-2002', 'JOSPT-NECK-2017'],
    },
    {
      id: 't-ifompt',
      name: 'IFOMPT cervical artery + upper cervical instability screen',
      category: 'special',
      rationale: 'Required prior to upper-cervical manual therapy.',
      result: 'Negative — no 5D/3N; alar and transverse ligament tests negative.',
      interpretation: 'Safe to proceed with informed-consent manual therapy.',
      expertSelected: true,
      evidenceRefs: ['IFOMPT-CERV-2020'],
    },
    {
      id: 't-spurling',
      name: 'Spurling test',
      category: 'special',
      rationale: 'Screens cervical radiculopathy.',
      result: 'Negative — no arm symptoms.',
      interpretation: 'Excludes radicular contribution.',
      expertSelected: false,
      evidenceRefs: ['COOK-HEGEDUS-2013'],
    },
    {
      id: 't-tmj',
      name: 'TMJ assessment',
      category: 'special',
      rationale: 'TMJ dysfunction can mimic CGH.',
      result: 'No TMJ deviation, opening 42 mm, pain-free.',
      interpretation: 'Excludes TMJ-driven HA.',
      expertSelected: false,
      evidenceRefs: ['MAGEE-7E-CERV'],
    },
  ],

  diagnosis: {
    primary: 'Cervicogenic headache (ICHD-3 11.2.1) — right side, upper cervical (C1–C2 + C2–C3) involvement, with deep cervical flexor deficit.',
    differentialsExcluded: [
      'Migraine without aura (lacks autonomic features, side-locked)',
      'Tension-type headache (unilateral, movement-triggered)',
      'Secondary headache (red-flag screen negative)',
      'TMJ dysfunction (negative TMJ exam)',
    ],
    reasoning:
      'Side-locked HA reproducibly triggered by neck rotation, with FRT-positive on right (high specificity) and segmental reproduction at C1–C2, fulfils ICHD-3 11.2.1. Plan: Jull-style combined manual + exercise programme.',
  },

  icf: {
    bodyStructureFunction: [
      'Right C1–C2 hypomobility',
      'Reduced deep cervical flexor endurance (CCFT 22 mmHg)',
      'Right cervical rotation deficit',
    ],
    activityLimitations: [
      'Cannot demonstrate certain yoga poses',
      'Limited phone/screen tolerance',
      'Disturbed sleep on flare days',
    ],
    participationRestrictions: [
      'Reduced teaching capacity',
      'Reduced barista shifts',
      'Avoidance of social events on flare days',
    ],
    personalFactors: [
      'Health-literate',
      'Two-job workload',
      'Prior whiplash (predisposing)',
    ],
    environmentalFactors: [
      'Yoga studio offers flexibility on schedule',
      'Access to private physio',
    ],
  },

  management: {
    shortTerm: [
      {
        category: 'manual',
        intervention: 'Upper cervical mobilisation (grade III–IV) at C1–C2 in flexion-rotation; thoracic mobilisation.',
        doseFrequency: '2 x/week for 3 weeks.',
        rationale: 'Jull et al. demonstrated multimodal manual + exercise reduces CGH frequency/intensity at long-term follow-up.',
        evidenceRefs: ['JULL-CGH-2002', 'JOSPT-NECK-2017'],
      },
      {
        category: 'exercise',
        intervention: 'CCFT-guided deep cervical flexor training + scapulothoracic activation.',
        doseFrequency: 'Daily home programme; supervised 1 x/week.',
        rationale: 'Strong evidence for deep cervical flexor training in CGH (Jull et al.).',
        evidenceRefs: ['JULL-CGH-2002', 'JOSPT-NECK-2017'],
      },
      {
        category: 'education',
        intervention: 'Headache diary + trigger education + workstation/teaching set-up advice.',
        rationale: 'Diaries clarify pattern and improve self-monitoring.',
        evidenceRefs: ['ICHD-3-2018', 'JOSPT-NECK-2017'],
      },
    ],
    longTerm: [
      {
        category: 'exercise',
        intervention: 'Progressive cervico-scapulothoracic strengthening; teaching-specific position retraining.',
        rationale: 'Reduces recurrence and supports occupational demands.',
        evidenceRefs: ['JOSPT-NECK-2017'],
      },
      {
        category: 'referral',
        intervention: 'GP referral for migraine assessment if pattern shifts (bilateral/onset of aura/autonomic features).',
        rationale: 'CGH and migraine can co-exist; revisit diagnosis if pattern changes.',
        evidenceRefs: ['ICHD-3-2018'],
      },
    ],
    prognosis: 'Favourable. Jull et al. showed 10% reduction in HA frequency at 12 months for combined manual + exercise. Address upper cervical dysfunction + deep flexor deficit for best outcome.',
    redFlagsToMonitor: [
      'Sudden thunderclap onset',
      'Onset of focal neurological deficit or aura',
      'Fever, neck stiffness, photophobia',
      'Drop attacks, dysarthria, dysphagia, diplopia (cervical artery)',
    ],
  },

  references: [
    {
      id: 'ICHD-3-2018',
      citation: 'ICHD-3. Cephalalgia 2018;38(1):1–211.',
      url: 'https://ichd-3.org/',
      level: 'Expert',
    },
    {
      id: 'JULL-CGH-2002',
      citation:
        'Jull G et al. A randomized controlled trial of exercise and manipulative therapy for cervicogenic headache. Spine 2002;27(17):1835–1843.',
      doi: '10.1097/00007632-200209010-00004',
      level: 'RCT',
    },
    {
      id: 'JOSPT-NECK-2017',
      citation: 'Blanpied PR et al. Neck Pain: Revision 2017. JOSPT 2017;47(7):A1–A83.',
      doi: '10.2519/jospt.2017.0302',
      level: 'CPG',
    },
    {
      id: 'IFOMPT-CERV-2020',
      citation: 'Rushton A et al. IFOMPT International Framework — cervical region. 2020.',
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
      citation: 'Cook CE, Hegedus EJ. Orthopedic Physical Examination Tests, 2nd ed.',
      level: 'Textbook',
    },
  ],
};
