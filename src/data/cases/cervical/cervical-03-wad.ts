import type { Case } from '../../../types/case';

export const cervical03: Case = {
  id: 'cervical-03-wad',
  region: 'cervical',
  title: 'Neck pain and headache 10 days after a rear-end collision — acute WAD II',
  difficulty: 2,
  estimatedMinutes: 18,
  learningObjectives: [
    'Apply the Canadian C-spine Rule and the Quebec Task Force WAD grading after a motor vehicle crash.',
    'Identify prognostic indicators for poor recovery after whiplash (initial pain intensity, NDI, hyperarousal).',
    'Balance reassurance and active management against over-medicalisation in acute WAD.',
    'Construct a guideline-based programme of advice, exercise, and staged review consistent with Australian (SIRA) whiplash guidelines.',
  ],

  demographics: { age: 29, sex: 'F', occupation: 'Office administrator (full-time, desk-based)', handedness: 'R' },

  referral:
    'Self-referred via CTP insurer approval. 29 yo female, rear-end collision 10 days ago at suburban traffic lights (~30 km/h). Attended ED same day: Canadian C-spine Rule negative, no imaging performed, discharged with analgesia advice. Ongoing neck pain and headaches, struggling with full days at work.',

  subjective: {
    hpc:
      'Stationary at lights when struck from behind. Immediate shock, neck stiffness by that evening, diffuse posterior neck pain (worst next morning, 7/10). Now constant ache 4/10, spikes to 6/10 by late afternoon at her desk. Occipital-to-forehead headache most afternoons. Intermittent pins-and-needles briefly in both hands the first two days, none since. Feels "on edge" driving through intersections.',
    aggravating: [
      'Sustained desk posture >45 minutes',
      'Checking blind spot while driving (rotation)',
      'End-of-day fatigue — pain and headache build across the day',
    ],
    easing: ['Heat pack', 'Gentle movement/short walks', 'Lying supported with a rolled towel under the neck'],
    pmh: ['Nil significant. No prior neck pain episodes.'],
    drugHx: ['Paracetamol 1 g prn (using ~2 doses/day)', 'Ibuprofen 400 mg with dinner most nights'],
    socialHx:
      'Lives with partner in Melbourne, no children. Desk-based role 5 days/week (currently on modified hours — leaving 2 h early). Previously F45 classes ×3/week, paused since the crash. Non-smoker. Anxious about driving; her car is being repaired.',
    redFlagScreen: [
      { flag: 'Canadian C-spine Rule criteria (dangerous mechanism, midline tenderness, unable to rotate 45°)', present: false, note: 'Assessed in ED day 0: low-risk criteria met, rotation >45° both ways — no imaging indicated' },
      { flag: 'Bilateral limb paraesthesia or gait disturbance (cord signs)', present: false, note: 'Transient hand pins-and-needles days 0–2 only, fully resolved; no gait change' },
      { flag: 'Vertebrobasilar / vascular features (5 Ds, dizziness, visual disturbance)', present: false },
      { flag: 'Severe unremitting pain or rapidly worsening neurology', present: false },
      { flag: 'Loss of consciousness / post-concussive features', present: false, note: 'No head strike, no amnesia' },
      { flag: 'Fracture risk factors (age >65, osteoporosis, high-energy mechanism)', present: false },
    ],
    yellowFlags: [
      'Driving-related anxiety and hypervigilance at intersections',
      'Worry that pain at 10 days means "something was missed" in ED',
      'Compensation claim in progress (CTP) — known association with slower recovery trajectories',
    ],
    patientGoals: [
      'Return to full work hours within 2 weeks',
      'Drive without anxiety, including freeway merging',
      'Return to F45 classes within 6 weeks',
    ],
  },

  hypotheses: [
    {
      id: 'hyp-wad2',
      label: 'Whiplash-associated disorder grade II (neck pain with musculoskeletal signs, no neurological deficit)',
      isPrimary: true,
      supportingFeatures: [
        'Classic acceleration–deceleration mechanism with delayed-onset stiffness',
        'Neck pain with expected reduced ROM and tender points (musculoskeletal signs)',
        'No current neurological symptoms or signs',
        'Cervicogenic-pattern afternoon headache consistent with WAD symptom cluster',
      ],
      refutingFeatures: ['Transient early hand paraesthesia — must confirm neuro screen is clean before settling on grade II vs III'],
      rationale:
        'Quebec Task Force grading drives WAD management intensity. Pain plus musculoskeletal signs without neurological deficit is WAD II — the most common presentation, managed with active, reassurance-based care.',
      evidenceRefs: ['SIRA-WAD-2014', 'JOSPT-NECK-2017'],
    },
    {
      id: 'hyp-wad3',
      label: 'WAD grade III (neurological deficit present)',
      isPrimary: false,
      supportingFeatures: ['Bilateral hand paraesthesia reported on days 0–2'],
      refutingFeatures: [
        'Paraesthesia fully resolved by day 3 and not recurrent',
        'Expect normal myotome/dermatome/reflex screen today',
      ],
      rationale:
        'Grading requires current neurological deficit. A normal neuro examination today keeps this at WAD II, but the early symptoms mandate that the screen actually be performed, not assumed.',
      evidenceRefs: ['SIRA-WAD-2014', 'MAGEE-7E-CERV'],
    },
    {
      id: 'hyp-fracture',
      label: 'Occult cervical fracture / instability',
      isPrimary: false,
      supportingFeatures: ['MVA mechanism'],
      refutingFeatures: [
        'Canadian C-spine Rule negative day 0 (low-risk criteria, active rotation >45°)',
        'Low-speed collision, no midline bony tenderness, improving trajectory',
      ],
      rationale:
        'The CCR has near-perfect sensitivity for clinically important fracture; a negative rule with an improving course makes fracture highly unlikely.',
      evidenceRefs: ['CCSR-2001'],
    },
    {
      id: 'hyp-cgh',
      label: 'Cervicogenic headache as an isolated primary problem',
      isPrimary: false,
      supportingFeatures: ['Occipital-to-frontal headache pattern', 'Neck-movement relationship'],
      refutingFeatures: [
        'Headache onset with the whiplash event — best framed as part of the WAD presentation, not a separate diagnosis',
      ],
      rationale:
        'Post-traumatic headache attributed to whiplash is expected within the WAD symptom cluster; treat the cervical drivers rather than labelling a second condition.',
      evidenceRefs: ['ICHD-3-2018', 'JOSPT-NECK-2017'],
    },
    {
      id: 'hyp-stress',
      label: 'Dominant post-traumatic stress response driving symptom persistence',
      isPrimary: false,
      supportingFeatures: ['Driving hypervigilance, feeling "on edge"', 'Compensation context'],
      refutingFeatures: [
        'Symptoms are mechanically consistent and improving',
        'Distress is situational (driving) rather than pervasive',
      ],
      rationale:
        'Hyperarousal is a recognised poor-prognosis indicator in whiplash rather than a competing diagnosis — screen it (e.g. abbreviated IES) and address through education and graded exposure to driving.',
      evidenceRefs: ['WHIPPREDICT-2013', 'SIRA-WAD-2014'],
    },
  ],

  objectiveTests: [
    {
      id: 't-obs',
      name: 'Posture & behaviour observation',
      category: 'observation',
      rationale: 'Guarded posture and movement avoidance in acute WAD inform pacing of the active approach.',
      result: 'Mildly protracted head posture, visibly guarded neck movement; removes jumper carefully "en bloc".',
      interpretation: 'Protective movement behaviour — target with graded active movement and reassurance rather than immobilisation.',
      expertSelected: true,
      evidenceRefs: ['SIRA-WAD-2014', 'MAGEE-7E-CERV'],
    },
    {
      id: 't-arom',
      name: 'Cervical AROM (all planes, with overpressure if pain-free)',
      category: 'AROM',
      rationale: 'Quantifies the movement impairment for WAD grading and provides the key outcome baseline.',
      result: 'Rotation R 55°, L 60° (familiar pulling pain end-range); extension 40° with pain; flexion full with tightness. No overpressure applied to painful directions.',
      interpretation: 'Moderate multidirectional restriction with pain — musculoskeletal signs consistent with WAD II.',
      expertSelected: true,
      evidenceRefs: ['SIRA-WAD-2014', 'MAGEE-7E-CERV'],
    },
    {
      id: 't-neuro',
      name: 'Upper limb neuro screen (myotomes C5–T1, dermatomes, reflexes)',
      category: 'neuro',
      rationale: 'Mandatory given the transient hand paraesthesia — determines WAD II vs III.',
      result: 'Power 5/5 throughout, sensation intact, reflexes 2+ and symmetrical. Hoffmann negative.',
      interpretation: 'No neurological deficit — confirms WAD grade II.',
      expertSelected: true,
      evidenceRefs: ['SIRA-WAD-2014', 'MAGEE-7E-CERV'],
    },
    {
      id: 't-ndi',
      name: 'Neck Disability Index (NDI)',
      category: 'functional',
      rationale: 'Initial NDI is one of the strongest prognostic indicators after whiplash and anchors the WhipPredict pathway.',
      result: 'NDI = 34% (moderate disability).',
      interpretation: 'NDI ≥32% at baseline flags moderate risk of delayed recovery — schedule closer review and address psychological features early.',
      expertSelected: true,
      evidenceRefs: ['WHIPPREDICT-2013', 'SIRA-WAD-2014'],
    },
    {
      id: 't-ies',
      name: 'Hyperarousal screen (abbreviated Impact of Event Scale items)',
      category: 'functional',
      rationale: 'Post-traumatic stress symptoms independently predict poor recovery in the WhipPredict rule.',
      result: 'Endorses being "jumpy/easily startled" while driving; sleep intact; no intrusive imagery outside driving contexts.',
      interpretation: 'Mild situational hyperarousal — manage with education and graded driving exposure; escalate to psychology if not settling by review.',
      expertSelected: true,
      evidenceRefs: ['WHIPPREDICT-2013', 'SIRA-WAD-2014'],
    },
    {
      id: 't-palp',
      name: 'Cervical palpation (midline bony, articular pillars, muscle)',
      category: 'palpation',
      rationale: 'Confirms absence of midline bony tenderness and maps symptomatic segments.',
      result: 'No midline bony tenderness. Familiar local pain over right C2–3 and C5–6 articular pillars; upper trapezius and levator hypertonicity bilaterally.',
      interpretation: 'Segmental joint tenderness and muscle guarding — musculoskeletal signs supporting WAD II; C2–3 involvement fits the headache.',
      expertSelected: true,
      evidenceRefs: ['MAGEE-7E-CERV', 'CCSR-2001'],
    },
    {
      id: 't-ccft',
      name: 'Craniocervical flexion test (CCFT, pressure biofeedback)',
      category: 'special',
      rationale: 'Deep neck flexor impairment is common after whiplash and guides low-load motor control retraining.',
      result: 'Achieves 24 mmHg with superficial flexor substitution; unable to hold 26 mmHg for 10 s.',
      interpretation: 'Reduced deep cervical flexor endurance — a specific, trainable impairment.',
      expertSelected: true,
      evidenceRefs: ['JULL-CGH-2002', 'JOSPT-NECK-2017'],
    },
    {
      id: 't-vbi',
      name: 'Vascular screening interview (IFOMPT framework)',
      category: 'special',
      rationale: 'Trauma to the neck warrants explicit screening for vascular pathology risk before any end-range or manual techniques.',
      result: 'No 5 Ds/3 Ns features, no severe unfamiliar headache, no risk factors elicited.',
      interpretation: 'No features of vascular pathology; proceed with graded active management.',
      expertSelected: true,
      evidenceRefs: ['IFOMPT-CERV-2020'],
    },
    {
      id: 't-xray',
      name: 'Request cervical radiographs',
      category: 'special',
      rationale: 'Imaging is only indicated when the Canadian C-spine Rule is positive.',
      result: 'Not indicated — CCR negative at ED and remains negative today.',
      interpretation: 'Ordering imaging here contradicts the rule, adds radiation, and risks reinforcing threat beliefs.',
      expertSelected: false,
      sensitivity: 0.99,
      specificity: 0.45,
      evidenceRefs: ['CCSR-2001', 'SIRA-WAD-2014'],
    },
  ],

  diagnosis: {
    primary:
      'Acute whiplash-associated disorder grade II (Quebec Task Force) with post-traumatic cervicogenic-pattern headache; moderate risk of delayed recovery (NDI 34%, mild hyperarousal).',
    keyElements: [
      { label: 'Whiplash-associated disorder', synonyms: ['whiplash', 'wad'], hint: 'What is the umbrella diagnosis after this mechanism?' },
      { label: 'Grade II (signs, no neuro deficit)', synonyms: ['grade ii', 'grade 2', 'wad ii', 'wad 2'], hint: 'Which Quebec Task Force grade, given the clean neuro screen?' },
      { label: 'Fracture excluded via Canadian C-spine Rule', synonyms: ['c-spine rule', 'ccr', 'canadian', 'no fracture', 'imaging not indicated'], hint: 'How was serious bony injury excluded?' },
      { label: 'Prognostic risk identified', synonyms: ['ndi', 'prognos', 'risk', 'hyperarousal', 'delayed recovery'], hint: 'Did you comment on her recovery-risk profile?' },
    ],
    differentialsExcluded: [
      'Cervical fracture/instability (Canadian C-spine Rule negative, low-energy mechanism, no midline tenderness)',
      'WAD III / radiculopathy (normal myotomes, dermatomes, reflexes; paraesthesia resolved and non-recurrent)',
      'Cervical arterial pathology (no vascular features on IFOMPT screening)',
      'Concussion / post-traumatic brain injury (no head strike, no LOC or cognitive symptoms)',
    ],
    reasoning:
      'The mechanism, delayed-onset neck pain with restricted ROM and segmental tenderness, and a normal neurological examination place this presentation squarely in WAD II. The Canadian C-spine Rule, applied on day 0 and still negative, makes fracture highly unlikely and imaging inappropriate. The task then shifts from diagnosis to prognosis: baseline NDI 34% and situational hyperarousal are the two strongest modifiable-risk signals in the WhipPredict rule, so management front-loads reassurance, active exercise, and early review rather than passive care.',
  },

  icf: {
    bodyStructureFunction: [
      'Neck pain 4–6/10, worse across the day',
      'Multidirectional cervical AROM restriction (rotation R 55°)',
      'Reduced deep cervical flexor endurance (CCFT 24 mmHg with substitution)',
      'Afternoon cervicogenic-pattern headache',
    ],
    activityLimitations: [
      'Sustained desk work limited to ~45 minutes per bout',
      'Difficulty with blind-spot checking while driving',
      'Unable to tolerate high-intensity exercise classes',
    ],
    participationRestrictions: [
      'Working reduced hours (leaving 2 h early)',
      'Not driving on freeways; avoiding intersections where possible',
      'Paused F45 classes and associated social network',
    ],
    personalFactors: [
      'First significant injury — uncertain what recovery "should" look like',
      'Worry that ongoing pain means missed pathology',
      'Previously very active with strong exercise habit (favourable)',
      'Driving-related anxiety',
    ],
    environmentalFactors: [
      'Supportive employer offering modified hours and workstation review',
      'CTP compensation claim in progress',
      'Partner available to share driving during graded exposure',
    ],
  },

  management: {
    shortTerm: [
      {
        category: 'education',
        intervention:
          '"Act as usual" whiplash education: expected recovery trajectory, pain does not equal damage, imaging appropriately not indicated (CCR negative), importance of staying at work and active.',
        doseFrequency: 'Session 1, reinforced each visit; SIRA whiplash recovery booklet provided.',
        rationale:
          'Reassurance and advice to remain active is the highest-priority intervention in acute WAD and counters the "something was missed" belief.',
        evidenceRefs: ['SIRA-WAD-2014', 'JOSPT-NECK-2017'],
      },
      {
        category: 'exercise',
        intervention:
          'Frequent active ROM programme (rotation, extension within comfort) plus low-load craniocervical flexion training with pressure biofeedback targets.',
        doseFrequency: 'ROM 10 reps each direction every 1–2 waking hours; CCFT holds 10×10 s daily, progressing 2 mmHg per week as substitution resolves.',
        rationale:
          'Early active exercise improves pain and function in acute WAD compared with immobilisation or rest; deep flexor training targets the measured impairment.',
        evidenceRefs: ['SIRA-WAD-2014', 'JULL-CGH-2002', 'JOSPT-NECK-2017'],
      },
      {
        category: 'self-management',
        intervention:
          'Workstation micro-break strategy (movement snack every 30–45 min), heat for symptom relief, graded return to full work hours over 2 weeks with employer.',
        doseFrequency: 'Daily; review work hours at week 2.',
        rationale:
          'Staying at (modified) work predicts better outcomes than time off; addresses the desk-related aggravator directly.',
        evidenceRefs: ['SIRA-WAD-2014'],
      },
      {
        category: 'manual',
        intervention:
          'Gentle grade I–II cervical mobilisation (right C2–3, C5–6) strictly as an adjunct to active care; no manipulation in the acute post-trauma window.',
        doseFrequency: 'Brief, within first 2–3 sessions only, always paired with exercise.',
        rationale:
          'Mobilisation may provide short-term pain relief in WAD but must not displace active management; vascular screen clear per IFOMPT framework.',
        evidenceRefs: ['JOSPT-NECK-2017', 'IFOMPT-CERV-2020'],
      },
    ],
    longTerm: [
      {
        category: 'exercise',
        intervention:
          'Progress to scapular and global neck strengthening, then graded return to F45 (technique-modified, load-graded classes from week 3–4).',
        doseFrequency: '2–3×/week for 6 weeks.',
        rationale:
          'Graded resumption of valued activity consolidates recovery; comprehensive exercise adds little over quality advice in chronic WAD, so the emphasis is early activity restoration rather than prolonged supervised programmes.',
        evidenceRefs: ['MICHALEFF-2014', 'SIRA-WAD-2014'],
      },
      {
        category: 'self-management',
        intervention:
          'Graded driving exposure hierarchy: passenger trips → quiet local drives → intersections at off-peak → freeway merging, with partner support.',
        doseFrequency: 'Progress one rung every few days as anxiety allows.',
        rationale:
          'Targets situational hyperarousal — a key modifiable prognostic factor — through structured re-engagement.',
        evidenceRefs: ['WHIPPREDICT-2013', 'SIRA-WAD-2014'],
      },
      {
        category: 'referral',
        intervention:
          'Structured review at 6 weeks: if NDI remains >30%, pain ≥5/10, or hyperarousal persists, refer to GP for psychology input (trauma-focused) and reassess pathway rather than continuing routine physiotherapy unchanged.',
        rationale:
          'Guidelines mandate formal reassessment milestones in WAD; persistent moderate disability at 6 weeks predicts chronicity and warrants escalated multidisciplinary care, not more of the same.',
        evidenceRefs: ['SIRA-WAD-2014', 'WHIPPREDICT-2013'],
      },
    ],
    prognosis:
      'Approximately half of people with acute whiplash recover fully; her age, activity history, improving trajectory and clean neuro examination are favourable, while baseline NDI 34%, hyperarousal, and the compensation context elevate risk of delayed recovery. Early active management with milestone-based review at 6 and 12 weeks is the evidence-based response to this mixed profile.',
    redFlagsToMonitor: [
      'New or recurrent neurological symptoms (paraesthesia, weakness) — re-examine and regrade',
      'Vascular features: severe unfamiliar headache, dizziness, visual disturbance, dysarthria (urgent medical review)',
      'Escalating unremitting pain out of keeping with mechanism',
      'Worsening post-traumatic stress symptoms (nightmares, avoidance generalising beyond driving)',
    ],
  },

  references: [
    {
      id: 'SIRA-WAD-2014',
      citation:
        'State Insurance Regulatory Authority (NSW). Guidelines for the management of acute whiplash-associated disorders for health professionals. 3rd ed. Sydney: SIRA 2014.',
      url: 'https://www.sira.nsw.gov.au/',
      level: 'CPG',
    },
    {
      id: 'JOSPT-NECK-2017',
      citation:
        'Blanpied PR et al. Neck Pain: Revision 2017. Clinical Practice Guidelines Linked to the ICF. JOSPT 2017;47(7):A1–A83.',
      doi: '10.2519/jospt.2017.0302',
      url: 'https://www.jospt.org/doi/10.2519/jospt.2017.0302',
      level: 'CPG',
    },
    {
      id: 'CCSR-2001',
      citation:
        'Stiell IG et al. The Canadian C-spine rule for radiography in alert and stable trauma patients. JAMA 2001;286(15):1841–1848.',
      doi: '10.1001/jama.286.15.1841',
      level: 'RCT',
    },
    {
      id: 'WHIPPREDICT-2013',
      citation:
        'Ritchie C, Hendrikz J, Kenardy J, Sterling M. Derivation of a clinical prediction rule to identify both chronic moderate/severe disability and full recovery following whiplash injury. Pain 2013;154(10):2198–2206.',
      doi: '10.1016/j.pain.2013.07.001',
      level: 'Cohort',
    },
    {
      id: 'MICHALEFF-2014',
      citation:
        'Michaleff ZA et al. Comprehensive physiotherapy exercise programme or advice for chronic whiplash (PROMISE): a pragmatic randomised controlled trial. Lancet 2014;384(9938):133–141.',
      doi: '10.1016/S0140-6736(14)60457-8',
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
