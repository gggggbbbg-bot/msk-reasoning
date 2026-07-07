import type { Case } from '../../../types/case';

export const headache02: Case = {
  id: 'headache-02-tension-type',
  region: 'headache',
  title: 'Frequent episodic tension-type headache in a software developer',
  difficulty: 2,
  estimatedMinutes: 14,
  learningObjectives: [
    'Apply ICHD-3 criteria for tension-type headache (TTH).',
    'Differentiate TTH from cervicogenic headache and migraine.',
    'Plan a stress-and-load focused management with sparing manual input.',
  ],

  demographics: { age: 28, sex: 'M', occupation: 'Software developer (remote, full-time)' },

  referral:
    'Self-referred. 28 yo male with 4 months of frequent bilateral pressing headaches, often during long coding sessions.',

  subjective: {
    hpc:
      'Bilateral, band-like pressing headache, 3–5 days per week, 1–4 hours each. NPRS 3–5/10. No nausea, no aura, no photophobia. No vomiting. Often appears late afternoon during long coding sprints.',
    aggravating: ['Prolonged screen time', 'Mental fatigue / deadlines', 'Poor sleep'],
    easing: ['Walking outside', 'Sleep', 'Reducing screen time'],
    pmh: ['Anxiety (mild, no medication)', 'Mild myopia (corrected)'],
    drugHx: ['OTC paracetamol prn (3–4 doses/week)'],
    socialHx: 'Lives in Perth, partner. Works remotely 50–55 h/week. Sedentary, ~5,000 steps/day. Caffeine 4–5 cups/day.',
    redFlagScreen: [
      { flag: 'Thunderclap onset', present: false },
      { flag: 'Fever / neck stiffness', present: false },
      { flag: 'Focal neurological deficit', present: false },
      { flag: '5Ds and 3Ns', present: false },
      { flag: 'Wakes from sleep / Valsalva-aggravated', present: false },
      { flag: 'Onset >50 yr', present: false },
    ],
    yellowFlags: ['Excessive analgesic use risk (>10 days/month would suggest medication-overuse HA)'],
    patientGoals: ['Reduce HA frequency to <2 per week', 'Reduce analgesia use', 'Improve sleep'],
  },

  hypotheses: [
    {
      id: 'hyp-tth',
      label: 'Frequent episodic tension-type headache (ICHD-3 2.2)',
      isPrimary: true,
      supportingFeatures: [
        'Bilateral pressing/tightening quality',
        'Mild–moderate intensity',
        'Not aggravated by routine physical activity',
        'No nausea, photophobia/phonophobia ≤1',
      ],
      refutingFeatures: [],
      rationale: 'Meets ICHD-3 episodic TTH criteria; ≥10 episodes occurring on average 1–14 days/month for >3 months.',
      evidenceRefs: ['ICHD-3-2018'],
    },
    {
      id: 'hyp-migraine',
      label: 'Migraine without aura',
      isPrimary: false,
      supportingFeatures: ['Recurrent headache'],
      refutingFeatures: ['Bilateral, pressing (not pulsating)', 'No nausea/photophobia', 'Mild intensity'],
      rationale: 'Migraine requires ≥2 of unilateral/pulsatile/moderate-severe/aggravated by activity, plus nausea or photophobia.',
      evidenceRefs: ['ICHD-3-2018'],
    },
    {
      id: 'hyp-cgh',
      label: 'Cervicogenic headache',
      isPrimary: false,
      supportingFeatures: ['Sustained postures'],
      refutingFeatures: ['Bilateral (CGH is usually side-locked)', 'No clear cervical movement trigger', 'No reproducible cervical findings expected'],
      rationale: 'CGH is unilateral and reproduced by cervical movements/palpation.',
      evidenceRefs: ['ICHD-3-2018'],
    },
    {
      id: 'hyp-moh',
      label: 'Medication-overuse headache',
      isPrimary: false,
      supportingFeatures: ['Regular analgesic use'],
      refutingFeatures: ['<10 days/month analgesic use currently'],
      rationale: 'Risk to monitor — escalate education if use rises.',
      evidenceRefs: ['ICHD-3-2018'],
    },
  ],

  objectiveTests: [
    {
      id: 't-arom',
      name: 'Cervical AROM',
      category: 'AROM',
      rationale: 'Screen for cervical contribution.',
      result: 'Full and pain-free in all planes.',
      interpretation: 'No mobility deficit; reduces likelihood of CGH.',
      expertSelected: true,
      evidenceRefs: ['JOSPT-NECK-2017'],
    },
    {
      id: 't-frt',
      name: 'Flexion-Rotation Test',
      category: 'special',
      rationale: 'Screen upper cervical for CGH contribution.',
      result: 'Symmetrical at 44°.',
      interpretation: 'Reduces likelihood of CGH.',
      expertSelected: true,
      sensitivity: 0.91,
      specificity: 0.9,
      lrNegative: 0.1,
      evidenceRefs: ['COOK-HEGEDUS-2013'],
    },
    {
      id: 't-palp',
      name: 'Pericranial / cervical palpation',
      category: 'palpation',
      rationale: 'Pericranial tenderness is the key examination feature in TTH.',
      result: 'Increased pericranial tenderness over temporalis, masseter, suboccipital, trapezius — bilateral.',
      interpretation: 'Supports TTH classification ICHD-3 2.2.1.',
      expertSelected: true,
      evidenceRefs: ['ICHD-3-2018'],
    },
    {
      id: 't-ccft',
      name: 'CCFT',
      category: 'functional',
      rationale: 'Screen deep neck flexor performance.',
      result: 'Reaches 28 mmHg without substitution.',
      interpretation: 'Within normal limits.',
      expertSelected: false,
      evidenceRefs: ['JOSPT-NECK-2017'],
    },
    {
      id: 't-jaw',
      name: 'TMJ exam',
      category: 'special',
      rationale: 'Exclude TMJ contribution.',
      result: 'Pain-free, opening 42 mm, no clicking.',
      interpretation: 'Excludes TMJ-driven HA.',
      expertSelected: false,
      evidenceRefs: ['MAGEE-7E-CERV'],
    },
    {
      id: 't-diary',
      name: 'Headache diary review (4 weeks)',
      category: 'functional',
      rationale: 'Quantify frequency, triggers, analgesic use — needed for ICHD-3 classification.',
      result: '~14 HA days in last 4 weeks; analgesic 3–4 days/week.',
      interpretation: 'Confirms frequent episodic TTH (10–14 days/month). Risk of MOH if analgesic use rises.',
      expertSelected: true,
      evidenceRefs: ['ICHD-3-2018'],
    },
  ],

  diagnosis: {
    primary: 'Frequent episodic tension-type headache (ICHD-3 2.2.1) with pericranial tenderness; analgesic use within safe range but to be monitored.',
    keyElements: [
      { label: 'Tension-type headache', synonyms: ['tension-type', 'tension type', 'tth', 'tension headache'], hint: 'What headache classification?' },
      { label: 'Bilateral', synonyms: ['bilateral', 'both side'], hint: 'What is the laterality?' },
      { label: 'Pericranial tenderness', synonyms: ['pericranial', 'tender'], hint: 'What key exam finding supports it?' },
      { label: 'Episodic / frequency noted', synonyms: ['episodic', 'frequent', 'days per month', 'days/month'], hint: 'Note the frequency pattern.' },
    ],
    differentialsExcluded: [
      'Migraine without aura (no autonomic features, mild intensity, bilateral pressing)',
      'Cervicogenic headache (FRT symmetrical, AROM full, no segmental reproduction)',
      'Medication-overuse headache (currently <10 days/month)',
      'Secondary headache (red flags negative)',
    ],
    reasoning:
      'Bilateral pressing HA without autonomic features and pericranial tenderness, no cervical reproduction, is consistent with frequent episodic TTH. Drivers are likely stress, sleep, screen-load and sedentary patterns. Manage with lifestyle and exercise; spare manual therapy.',
  },

  icf: {
    bodyStructureFunction: [
      'Pericranial tenderness',
      'No cervical mobility deficit',
      'Mild deconditioning (low daily steps)',
    ],
    activityLimitations: [
      'Reduced focused work tolerance late afternoon',
      'Avoidance of long coding sessions',
    ],
    participationRestrictions: [
      'Avoiding evening social activities on HA days',
      'Reduced gym attendance',
    ],
    personalFactors: [
      'Mild anxiety',
      'High caffeine intake',
      'Sedentary lifestyle',
    ],
    environmentalFactors: [
      'Remote work — flexible to restructure breaks',
      'Sole partner support; access to GP',
    ],
  },

  management: {
    shortTerm: [
      {
        category: 'education',
        intervention: 'Headache diary + analgesic ceiling education (avoid >10 days/month) + stress/sleep hygiene.',
        rationale: 'Lifestyle factors are primary drivers of TTH; analgesic ceiling reduces MOH risk.',
        evidenceRefs: ['ICHD-3-2018'],
      },
      {
        category: 'exercise',
        intervention: 'Aerobic exercise — walk/cycle 30 min, 3–5 x/week.',
        rationale: 'Aerobic exercise reduces TTH frequency and intensity.',
        evidenceRefs: ['ICHD-3-2018'],
      },
      {
        category: 'self-management',
        intervention: 'Pomodoro-style 25:5 breaks; hydration; reduce caffeine after 2pm.',
        rationale: 'Targeted lifestyle changes reduce contributing factors.',
        evidenceRefs: ['ICHD-3-2018'],
      },
    ],
    longTerm: [
      {
        category: 'exercise',
        intervention: 'Add resistance training 2 x/week; address scapulothoracic posture if it emerges.',
        rationale: 'Maintains gains and reduces recurrence.',
        evidenceRefs: ['JOSPT-NECK-2017'],
      },
      {
        category: 'referral',
        intervention: 'GP review for psychological support / CBT if HA frequency persists despite lifestyle changes.',
        rationale: 'CBT shows benefit in chronic TTH and addresses anxiety co-morbidity.',
        evidenceRefs: ['ICHD-3-2018'],
      },
    ],
    prognosis: 'Favourable with lifestyle modification. Watch for transition to chronic TTH (≥15 days/month for >3 months) — earlier referral if so.',
    redFlagsToMonitor: [
      'Onset of aura, focal deficit, vomiting',
      'Sudden change in pattern',
      'Increasing analgesic use beyond 10 days/month',
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
      id: 'JOSPT-NECK-2017',
      citation: 'Blanpied PR et al. Neck Pain: Revision 2017. JOSPT 2017;47(7):A1–A83.',
      level: 'CPG',
    },
    {
      id: 'COOK-HEGEDUS-2013',
      citation: 'Cook CE, Hegedus EJ. Orthopedic Physical Examination Tests, 2nd ed.',
      level: 'Textbook',
    },
    {
      id: 'MAGEE-7E-CERV',
      citation: 'Magee DJ. Orthopedic Physical Assessment, 7th ed. Ch. 5. Elsevier 2021.',
      level: 'Textbook',
    },
  ],
};
