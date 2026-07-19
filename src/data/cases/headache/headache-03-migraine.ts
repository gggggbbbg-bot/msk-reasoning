import type { Case } from '../../../types/case';

export const headache03: Case = {
  id: 'headache-03-migraine',
  region: 'headache',
  title: 'Recurrent disabling unilateral headache in a 34-year-old — is this one for physio?',
  difficulty: 3,
  estimatedMinutes: 20,
  learningObjectives: [
    'Apply ICHD-3 criteria to differentiate migraine without aura from cervicogenic and tension-type headache.',
    'Screen for secondary headache using the SNNOOP10 red/orange flag list.',
    'Interpret a negative flexion-rotation test when the neck is a suspected headache source.',
    'Define the physiotherapy scope in migraine: co-manage neck impairments and triggers, refer for medical diagnosis and pharmacological management.',
  ],

  demographics: { age: 34, sex: 'F', occupation: 'Marketing manager (hybrid office/home)', handedness: 'R' },

  referral:
    'Self-referred. 34 yo female with recurrent headaches for ~2 years, worsening over the last 6 months (now 3–4 attacks/month, each lasting 1–2 days). Believes her "neck is causing the headaches" because she feels neck tightness before attacks. Wants neck treatment. No current GP involvement for the headaches.',

  subjective: {
    hpc:
      'Episodic headaches: right-sided (occasionally swaps sides) throbbing pain around the temple and behind the eye, building over an hour to 7–8/10. During attacks she is nauseated, sensitive to light and noise, and must lie in a dark room; climbing stairs or bending over worsens the pounding. Attacks last 24–48 h untreated. Between attacks she is symptom-free apart from mild neck tightness with long screen days. Notes attacks often follow poor sleep, skipped meals, or the days before menstruation. Denies visual aura, limb weakness or speech disturbance.',
    aggravating: [
      'Routine physical activity during an attack (stairs, bending)',
      'Bright light and noise during an attack',
      'Poor sleep, skipped meals, perimenstrual days (triggers)',
    ],
    easing: ['Lying still in a dark quiet room', 'Sleep', 'Ibuprofen if taken very early (increasingly ineffective)'],
    pmh: ['Motion sickness as a child', 'Nil other significant. No head trauma.'],
    drugHx: [
      'Ibuprofen 400 mg at headache onset (using ~6–8 days/month)',
      'Combined oral contraceptive pill',
      'No preventive or triptan therapy — never prescribed',
    ],
    socialHx:
      'Lives with partner in Sydney. Demanding marketing role, 9–10 h screen days in busy periods. Gym 1–2×/week (lapsed from 4×). Caffeine 3 coffees/day. Alcohol socially. Mother "always had sick headaches".',
    familyHx: 'Mother: recurrent severe headaches with vomiting through her 30s–40s (undiagnosed, self-managed).',
    redFlagScreen: [
      { flag: 'Systemic symptoms (fever, weight loss) or Secondary risk factors (malignancy, immunosuppression)', present: false },
      { flag: 'Neurological deficit or dysfunction (weakness, confusion, seizure)', present: false },
      { flag: 'Onset sudden/thunderclap', present: false, note: 'Builds over ~1 hour' },
      { flag: 'Older age of onset (>50 years)', present: false, note: 'Onset early 30s' },
      { flag: 'Pattern change / rapidly progressive', present: true, note: 'Frequency increasing 6 months — orange flag: warrants medical review, though phenotype is stable and classic' },
      { flag: 'Positional / precipitated by Valsalva or exertion (onset trigger)', present: false, note: 'Activity worsens established attacks (typical of migraine) but does not trigger onset' },
      { flag: 'Papilloedema symptoms / visual obscurations', present: false },
      { flag: 'Pregnancy', present: false },
    ],
    yellowFlags: [
      'Strong belief the neck is the sole cause ("fix my neck and the headaches will go")',
      'Escalating self-medication with NSAIDs (medication-overuse risk if ≥15 days/month)',
      'Work stress and disrupted sleep in busy periods',
    ],
    patientGoals: [
      'Fewer headache days — currently losing 3–4 workdays/month',
      'Understand what is causing the headaches',
      'Get back to regular gym training',
    ],
  },

  hypotheses: [
    {
      id: 'hyp-migraine',
      label: 'Migraine without aura (ICHD-3 1.1)',
      isPrimary: true,
      supportingFeatures: [
        '≥5 attacks lasting 4–72 h (hers: 24–48 h)',
        'Unilateral, pulsating, moderate–severe intensity, aggravated by routine activity (all four pain criteria)',
        'Nausea plus photophobia and phonophobia during attacks',
        'Family history, childhood motion sickness, menstrual and sleep/meal triggers',
      ],
      refutingFeatures: ['Premonitory neck tightness could be misread as a cervical source — neck symptoms are a common migraine prodrome'],
      rationale:
        'She meets every ICHD-3 criterion for migraine without aura. Side-swapping pain and prodromal neck tightness are typical of migraine, not cervicogenic headache. Physiotherapy identifies this and refers for medical diagnosis and treatment while co-managing musculoskeletal contributors.',
      evidenceRefs: ['ICHD-3-2018', 'DO-SNNOOP10-2019'],
    },
    {
      id: 'hyp-cgh',
      label: 'Cervicogenic headache',
      isPrimary: false,
      supportingFeatures: ['Neck tightness preceding attacks', 'Desk-heavy occupation with screen-related neck stiffness'],
      refutingFeatures: [
        'Side-swapping headache (CGH is side-locked)',
        'Throbbing quality with nausea, photo- and phonophobia (not CGH features)',
        'Attacks triggered by sleep/meals/menses, not neck movement or posture',
        'Expect negative flexion-rotation test',
      ],
      rationale:
        'CGH is side-locked, non-throbbing, provoked by neck movement or sustained postures, and rarely features marked nausea or photophobia. The pattern here fails those criteria; the flexion-rotation test provides a strong objective check.',
      evidenceRefs: ['ICHD-3-2018', 'OGINCE-FRT-2007'],
    },
    {
      id: 'hyp-tth',
      label: 'Tension-type headache',
      isPrimary: false,
      supportingFeatures: ['Work stress association', 'Mild interictal neck tightness'],
      refutingFeatures: [
        'Unilateral throbbing pain (TTH is bilateral, pressing/tightening)',
        'Moderate–severe intensity that prohibits activity',
        'Nausea and combined photo/phonophobia exclude TTH by ICHD-3',
      ],
      rationale:
        'TTH is mild–moderate, bilateral, band-like, not aggravated by routine activity, and lacks nausea. Her attack phenotype is the opposite on every axis.',
      evidenceRefs: ['ICHD-3-2018'],
    },
    {
      id: 'hyp-mou',
      label: 'Medication-overuse headache (developing)',
      isPrimary: false,
      supportingFeatures: ['Escalating NSAID use as attacks became more frequent', 'Declining effectiveness of ibuprofen'],
      refutingFeatures: ['Current use ~6–8 days/month — below the ≥15 days/month (simple analgesics) ICHD-3 threshold'],
      rationale:
        'Not yet established, but the trajectory is concerning. Flag to the GP and educate on the threshold — a key reason not to leave her self-managing with escalating analgesia.',
      evidenceRefs: ['ICHD-3-2018'],
    },
    {
      id: 'hyp-secondary',
      label: 'Secondary headache (structural, vascular, raised ICP)',
      isPrimary: false,
      supportingFeatures: ['Increasing frequency over 6 months (SNNOOP10 "pattern change" orange flag)'],
      refutingFeatures: [
        'Stable, classic migraine phenotype for 2 years',
        'No thunderclap onset, no neurological deficit, no positional features, normal age of onset',
      ],
      rationale:
        'The SNNOOP10 screen is otherwise clean; escalating frequency with a stable primary-headache phenotype most often reflects trigger load or evolving migraine, but justifies GP assessment rather than physiotherapy-only care.',
      evidenceRefs: ['DO-SNNOOP10-2019'],
    },
  ],

  objectiveTests: [
    {
      id: 't-frt',
      name: 'Cervical flexion-rotation test (FRT)',
      category: 'special',
      rationale: 'Best-validated test to implicate or exonerate C1–2 as a headache source; discriminates CGH from migraine.',
      result: 'Rotation in full flexion: 42° right, 44° left. No headache reproduction. (Positive threshold <32–34° with familiar pain.)',
      interpretation: 'Negative — does not support a C1–2 cervicogenic source; consistent with migraine.',
      expertSelected: true,
      sensitivity: 0.91,
      specificity: 0.9,
      lrPositive: 9.1,
      lrNegative: 0.1,
      evidenceRefs: ['OGINCE-FRT-2007'],
    },
    {
      id: 't-neuro',
      name: 'Neurological screen (cranial nerves, upper limb neuro, coordination)',
      category: 'neuro',
      rationale: 'Any deficit converts this to an urgent medical referral (SNNOOP10 "neurological deficit").',
      result: 'Cranial nerves II–XII intact, visual fields full to confrontation, no limb deficit, coordination normal.',
      interpretation: 'Normal — no features of secondary headache on examination.',
      expertSelected: true,
      evidenceRefs: ['DO-SNNOOP10-2019', 'MAGEE-7E-CERV'],
    },
    {
      id: 't-arom',
      name: 'Cervical AROM',
      category: 'AROM',
      rationale: 'Quantifies interictal neck impairment; CGH typically shows restricted, headache-provoking movement.',
      result: 'Full range all planes; mild familiar tightness (not headache) at end-range rotation after long screen days reported, none today.',
      interpretation: 'Essentially normal — argues further against a cervical headache source; mild screen-related muscle tightness is a co-management target, not the cause.',
      expertSelected: true,
      evidenceRefs: ['MAGEE-7E-CERV', 'ICHD-3-2018'],
    },
    {
      id: 't-palp',
      name: 'Upper cervical segmental palpation (C0–C3)',
      category: 'palpation',
      rationale: 'CGH typically shows marked unilateral upper cervical joint signs reproducing the headache.',
      result: 'Mild bilateral suboccipital and upper trapezius tenderness; no reproduction of head pain.',
      interpretation: 'Non-specific muscle tenderness without headache reproduction — insufficient for a cervicogenic diagnosis.',
      expertSelected: true,
      evidenceRefs: ['MAGEE-7E-CERV', 'OGINCE-FRT-2007'],
    },
    {
      id: 't-diary',
      name: 'Headache diary (4 weeks: attacks, triggers, medication days)',
      category: 'functional',
      rationale: 'Confirms attack frequency and duration against ICHD-3 criteria, tracks analgesic days for MOH risk, and exposes trigger patterns.',
      result: 'Prescribed today: record attack days, severity, symptoms, menstrual days, sleep, meals, and every analgesic dose.',
      interpretation: 'Provides the dataset for the GP diagnosis, MOH surveillance, and evaluation of trigger-management strategies.',
      expertSelected: true,
      evidenceRefs: ['ICHD-3-2018', 'LUEDTKE-2016'],
    },
    {
      id: 't-hit6',
      name: 'HIT-6 (Headache Impact Test)',
      category: 'functional',
      rationale: 'Baseline disability measure to judge treatment response.',
      result: 'HIT-6 = 63 (severe impact).',
      interpretation: 'Severe headache-related disability — supports the case for GP referral and preventive-treatment discussion.',
      expertSelected: true,
      evidenceRefs: ['LUEDTKE-2016'],
    },
    {
      id: 't-ccft',
      name: 'Craniocervical flexion test',
      category: 'special',
      rationale: 'Assesses deep flexor performance related to her screen-associated neck tightness.',
      result: 'Achieves 28 mmHg with minimal substitution.',
      interpretation: 'Near-normal deep flexor performance — minor contribution at most; light postural/mobility work suffices.',
      expertSelected: false,
      evidenceRefs: ['JULL-CGH-2002'],
    },
    {
      id: 't-manip',
      name: 'Upper cervical manipulation as a treatment trial',
      category: 'special',
      rationale: 'Sometimes proposed to "treat the neck cause" of headache.',
      result: 'Not performed.',
      interpretation: 'With a negative FRT and no cervical signs reproducing headache, there is no target lesion; manipulation would chase the patient\'s belief rather than the evidence, and cervical manipulation carries small but real vascular risk.',
      expertSelected: false,
      evidenceRefs: ['IFOMPT-CERV-2020', 'LUEDTKE-2016'],
    },
  ],

  diagnosis: {
    primary:
      'Migraine without aura (meets ICHD-3 1.1 criteria) with mild interictal screen-related neck muscle tightness; cervicogenic headache excluded (negative FRT, no cervical reproduction). Requires GP referral for formal diagnosis and pharmacological management; developing medication-overuse risk flagged.',
    keyElements: [
      { label: 'Migraine (without aura)', synonyms: ['migraine'], hint: 'Which primary headache disorder fits the attack phenotype?' },
      { label: 'ICHD-3 criteria applied', synonyms: ['ichd', 'criteria', '4-72', 'pulsating', 'photophobia', 'nausea'], hint: 'Did you justify the diagnosis against formal criteria?' },
      { label: 'Cervicogenic headache excluded', synonyms: ['cervicogenic', 'cgh', 'flexion-rotation', 'frt', 'not the neck'], hint: 'What did you conclude about the neck as the source?' },
      { label: 'GP/medical referral', synonyms: ['gp', 'refer', 'medical', 'neurolog'], hint: 'What is the correct pathway for diagnosis and drug therapy?' },
    ],
    differentialsExcluded: [
      'Cervicogenic headache (side-swapping pain, negative FRT at 42–44°, no headache reproduction on segmental palpation, full pain-free AROM)',
      'Tension-type headache (unilateral throbbing severe pain with nausea and photo/phonophobia — excluded by ICHD-3)',
      'Medication-overuse headache (analgesic days below threshold — monitored via diary)',
      'Secondary headache (SNNOOP10 screen clear apart from frequency increase; normal neuro exam; stable classic phenotype — GP review arranged)',
    ],
    reasoning:
      'Every ICHD-3 criterion for migraine without aura is met: attack duration 24–48 h, unilateral pulsating moderate–severe pain aggravated by routine activity, with nausea, photophobia and phonophobia. The features she attributes to her neck — prodromal tightness — are recognised migraine premonitory symptoms, and the objective cervical examination (FRT 42–44° with LR− ≈ 0.1, no segmental reproduction, full AROM) effectively rules out a cervicogenic source. The 6-month frequency escalation is an orange flag mandating GP review, and escalating NSAID use needs surveillance. The physiotherapist\'s evidence-based role: communicate the working diagnosis to the GP, educate on triggers and medication thresholds, manage the minor musculoskeletal contributors, and support aerobic exercise — not to "fix the neck".',
  },

  icf: {
    bodyStructureFunction: [
      'Episodic severe unilateral head pain (7–8/10) with nausea, photo/phonophobia',
      'Premonitory neck tightness and mild suboccipital muscle tenderness',
      'Attack-related functional shutdown 1–2 days, 3–4×/month',
    ],
    activityLimitations: [
      'Unable to work or use screens during attacks',
      'Cannot exercise during and for a day after attacks',
      'Meal and sleep routines disrupted in busy work periods (feeding the trigger cycle)',
    ],
    participationRestrictions: [
      'Losing 3–4 workdays/month (HIT-6 = 63, severe impact)',
      'Withdrawing from social events for fear of triggering or enduring an attack',
      'Gym attendance lapsed from 4× to 1–2×/week',
    ],
    personalFactors: [
      'Firm attribution of headaches to the neck — expectation of hands-on neck treatment',
      'Family history normalising severe headache ("mum just put up with it")',
      'High work demands with boom-bust sleep and meal patterns',
      'Previously strong exercise habit (favourable for aerobic-exercise strategy)',
    ],
    environmentalFactors: [
      'Hybrid work allows schedule flexibility for regular meals/sleep if planned',
      'No current GP engagement for headache (pathway gap to close)',
      'Supportive partner; private health cover for allied health',
    ],
  },

  management: {
    shortTerm: [
      {
        category: 'referral',
        intervention:
          'Written referral letter to GP: presentation meets ICHD-3 migraine-without-aura criteria, HIT-6 63, frequency escalating, cervical source excluded on examination; request diagnostic confirmation and discussion of acute (triptan) ± preventive pharmacotherapy and menstrual pattern.',
        rationale:
          'Migraine diagnosis and drug therapy sit with medicine; escalating frequency and severe impact make this the single highest-value intervention available today.',
        evidenceRefs: ['ICHD-3-2018', 'DO-SNNOOP10-2019'],
      },
      {
        category: 'education',
        intervention:
          'Reframe the neck story: prodromal neck tightness is part of the migraine attack sequence, not its cause; explain the negative FRT in plain language. Educate on the medication-overuse threshold (≥15 NSAID days/month) and early-treatment principles.',
        doseFrequency: 'Session 1, reinforced at review.',
        rationale:
          'Accurate illness understanding redirects her from repeated passive neck treatment toward effective medical care and trigger management.',
        evidenceRefs: ['ICHD-3-2018', 'LUEDTKE-2016'],
      },
      {
        category: 'self-management',
        intervention:
          'Trigger-regularity plan built around the diary: consistent sleep window, no skipped meals (calendar reminders in busy periods), caffeine kept stable, hydration; identify perimenstrual high-risk days for early attack treatment.',
        doseFrequency: 'Daily habits; diary reviewed at each visit.',
        rationale:
          'Regularising sleep and meals targets her two clearest modifiable triggers; the diary converts belief into data.',
        evidenceRefs: ['ICHD-3-2018', 'LUEDTKE-2016'],
      },
      {
        category: 'manual',
        intervention:
          'Short course of soft-tissue work and mobility drills for screen-related suboccipital/upper trapezius tightness, explicitly framed as comfort care for a secondary issue.',
        doseFrequency: '1–2 sessions, transitioning to self-managed mobility breaks.',
        rationale:
          'Addresses the genuine (minor) musculoskeletal complaint without reinforcing a causal neck narrative; manual therapy has at best modest, inconsistent evidence in migraine.',
        evidenceRefs: ['LUEDTKE-2016', 'MAGEE-7E-CERV'],
      },
    ],
    longTerm: [
      {
        category: 'exercise',
        intervention:
          'Graded aerobic exercise programme: rebuild to 3–4×/week moderate-intensity sessions (gym classes/runs), scheduled away from high-risk perimenstrual days initially.',
        doseFrequency: '30–40 min, 3–4×/week, progressed over 8 weeks.',
        rationale:
          'Regular aerobic exercise reduces migraine frequency and intensity in meta-analysis and restores her valued gym participation.',
        evidenceRefs: ['LUEDTKE-2016'],
      },
      {
        category: 'education',
        intervention:
          'Workstation and workload strategies: screen-break cadence, sleep protection during campaign periods, stress-management basics; review whether busy-period patterns predict attack clusters in the diary.',
        doseFrequency: 'Reviewed at 4 and 8 weeks.',
        rationale:
          'Targets the boom-bust pattern driving both trigger load and neck tightness.',
        evidenceRefs: ['LUEDTKE-2016', 'ICHD-3-2018'],
      },
      {
        category: 'referral',
        intervention:
          'Outcome review at 8–12 weeks with GP: if headache days not meaningfully reduced on optimised acute therapy plus lifestyle measures, support escalation to preventive medication or neurologist referral.',
        rationale:
          'Stepped-care escalation is indicated when attack frequency remains disabling despite first-line measures.',
        evidenceRefs: ['ICHD-3-2018', 'DO-SNNOOP10-2019'],
      },
    ],
    prognosis:
      'Migraine is a chronic episodic condition — the goal is fewer, shorter, better-treated attacks, not cure. With accurate diagnosis, effective acute medication, trigger regularisation and aerobic exercise, a clinically meaningful reduction in headache days is achievable within 3 months. Escalating analgesic use is the main trajectory risk; the diary plus GP co-management is the guardrail.',
    redFlagsToMonitor: [
      'Thunderclap or dramatically different headache (immediate ED)',
      'New neurological symptoms: weakness, speech, visual field loss, persistent aura (urgent medical review)',
      'Analgesic use reaching ≥15 days/month (medication-overuse headache)',
      'Progressive pattern change despite treatment, or new headache features on waking with vomiting',
    ],
  },

  references: [
    {
      id: 'ICHD-3-2018',
      citation:
        'Headache Classification Committee of the International Headache Society. The International Classification of Headache Disorders, 3rd edition. Cephalalgia 2018;38(1):1–211.',
      doi: '10.1177/0333102417738202',
      url: 'https://ichd-3.org/',
      level: 'Expert',
    },
    {
      id: 'DO-SNNOOP10-2019',
      citation:
        'Do TP et al. Red and orange flags for secondary headaches in clinical practice: SNNOOP10 list. Neurology 2019;92(3):134–144.',
      doi: '10.1212/WNL.0000000000006697',
      level: 'Expert',
    },
    {
      id: 'OGINCE-FRT-2007',
      citation:
        'Ogince M, Hall T, Robinson K, Blackmore AM. The diagnostic validity of the cervical flexion–rotation test in C1/2-related cervicogenic headache. Man Ther 2007;12(3):256–262.',
      doi: '10.1016/j.math.2006.06.016',
      level: 'Cohort',
    },
    {
      id: 'LUEDTKE-2016',
      citation:
        'Luedtke K et al. Efficacy of interventions used by physiotherapists for patients with headache and migraine — systematic review and meta-analysis. Cephalalgia 2016;36(5):474–492.',
      doi: '10.1177/0333102415597889',
      level: 'SR',
    },
    {
      id: 'JULL-CGH-2002',
      citation:
        'Jull G et al. A randomized controlled trial of exercise and manipulative therapy for cervicogenic headache. Spine 2002;27(17):1835–1843.',
      doi: '10.1097/00007632-200209010-00004',
      level: 'RCT',
    },
    {
      id: 'IFOMPT-CERV-2020',
      citation:
        'Rushton A et al. International Framework for Examination of the Cervical Region for potential of vascular pathologies of the neck prior to Orthopaedic Manual Therapy intervention. IFOMPT 2020.',
      url: 'https://www.ifompt.org/',
      level: 'Expert',
    },
    {
      id: 'MAGEE-7E-CERV',
      citation: 'Magee DJ. Orthopedic Physical Assessment, 7th ed. Ch. 5: Cervical Spine. Elsevier 2021.',
      level: 'Textbook',
    },
  ],
};
