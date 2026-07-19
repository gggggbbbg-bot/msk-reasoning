import type { Case } from '../../../types/case';

export const lbp03: Case = {
  id: 'lbp-03-spinal-stenosis',
  region: 'lbp',
  title: 'Insidious bilateral leg symptoms on walking in a 68-year-old — neurogenic claudication',
  difficulty: 3,
  estimatedMinutes: 20,
  learningObjectives: [
    'Differentiate neurogenic claudication from vascular claudication and hip osteoarthritis.',
    'Recognise the posture-dependent symptom pattern that characterises lumbar spinal stenosis.',
    'Apply the ISSLS consensus features supporting a clinical diagnosis of lumbar spinal stenosis.',
    'Design a flexion-biased, conditioning-focused conservative programme and know the surgical referral triggers.',
  ],

  demographics: { age: 68, sex: 'F', occupation: 'Retired primary school teacher; volunteers at community garden' },

  referral:
    'GP referral. 68 yo female with 18 months of gradually worsening bilateral buttock and posterior leg heaviness on walking, now limiting her to ~200 m. Lumbar X-ray shows multilevel degenerative change. Doppler studies of lower limbs normal. Please assess and commence conservative management.',

  subjective: {
    hpc:
      'Insidious onset over ~18 months of bilateral buttock and posterior thigh heaviness with calf "tiredness" brought on by walking and prolonged standing. Symptoms build over 5–10 minutes of walking and force her to stop; relieved within minutes by sitting or leaning forward on a bench. She can cycle at the gym for 30 minutes without symptoms and pushes a shopping trolley "hunched over" to get around the supermarket. Occasional numbness in both feet at worst. Minimal back pain (2/10 stiffness in the morning).',
    aggravating: [
      'Walking >200 m on flat ground (worse downhill)',
      'Prolonged standing (church, queues)',
      'Lying prone or extending the back',
    ],
    easing: [
      'Sitting for 2–3 minutes',
      'Leaning forward on a shopping trolley (trolley sign)',
      'Cycling (flexed posture) is symptom-free',
    ],
    pmh: [
      'Hypertension, hypercholesterolaemia — managed by GP',
      'Type 2 diabetes (diet-controlled, HbA1c 6.4%)',
      'Total abdominal hysterectomy age 52',
      'No history of malignancy',
    ],
    drugHx: ['Telmisartan 40 mg daily', 'Rosuvastatin 10 mg daily', 'Paracetamol osteo 665 mg prn'],
    socialHx:
      'Widowed, lives alone in a single-level home in Adelaide. Independent with ADLs. Volunteers twice weekly at a community garden (increasingly difficult). Two adult children nearby. Never smoked, minimal alcohol. Walks with a friend socially — now avoids it, which she misses.',
    redFlagScreen: [
      { flag: 'Saddle anaesthesia', present: false },
      { flag: 'Bowel/bladder dysfunction', present: false, note: 'Mild long-standing stress incontinence, unchanged — not new' },
      { flag: 'Progressive motor weakness', present: false, note: 'Heaviness with walking only; no fixed weakness' },
      { flag: 'History of malignancy', present: false },
      { flag: 'Unexplained weight loss', present: false },
      { flag: 'Fever / infection risk', present: false },
      { flag: 'Night pain unrelieved by position', present: false, note: 'Sleeps well on her side with knees curled up' },
      { flag: 'Significant trauma / osteoporotic fracture risk', present: false, note: 'DEXA 2 years ago: osteopenia, on calcium/vitamin D' },
    ],
    yellowFlags: [
      'Progressive activity avoidance ("I just don\'t go far from a seat any more")',
      'Belief that her spine is "crumbling" after seeing the X-ray report wording',
    ],
    patientGoals: [
      'Walk 30 minutes with her friend without stopping',
      'Manage a full morning at the community garden',
      'Avoid surgery if possible',
    ],
  },

  hypotheses: [
    {
      id: 'hyp-lss',
      label: 'Degenerative lumbar spinal stenosis with neurogenic claudication',
      isPrimary: true,
      supportingFeatures: [
        'Age >65 with insidious onset',
        'Bilateral leg symptoms provoked by walking/standing, relieved by sitting and flexion',
        'Positive shopping-trolley sign; symptom-free cycling',
        'Worse walking downhill (increased lumbar extension) than uphill',
        'Leg symptoms > back pain',
      ],
      refutingFeatures: ['Imaging is degenerate but X-ray cannot confirm canal narrowing (MRI would)'],
      rationale:
        'The ISSLS consensus identifies leg symptoms with walking/standing relieved by sitting or flexion, in an older adult, as the most useful clinical cluster for lumbar spinal stenosis. The posture-dependency (flexion eases, extension provokes) reflects dynamic narrowing of the canal and foramina in extension.',
      evidenceRefs: ['TOMKINS-LANE-2016', 'NASS-LSS-2011'],
    },
    {
      id: 'hyp-vasc',
      label: 'Vascular (intermittent) claudication — peripheral arterial disease',
      isPrimary: false,
      supportingFeatures: [
        'Age and cardiovascular risk factors (HTN, cholesterol, T2DM)',
        'Leg symptoms provoked by walking',
      ],
      refutingFeatures: [
        'Relief requires sitting/flexion, not just standing still (vascular claudication settles with standing rest)',
        'Cycling is symptom-free (would provoke vascular claudication)',
        'Normal Doppler studies; foot pulses palpable',
      ],
      rationale:
        'Vascular claudication is exercise-dose-dependent regardless of posture; neurogenic claudication is posture-dependent. Symptom-free cycling in flexion is a strong discriminator, corroborated here by normal vascular studies.',
      evidenceRefs: ['TOMKINS-LANE-2016', 'MAGEE-7E-LBP'],
    },
    {
      id: 'hyp-hip-oa',
      label: 'Bilateral hip osteoarthritis',
      isPrimary: false,
      supportingFeatures: ['Age group', 'Buttock symptoms with walking'],
      refutingFeatures: [
        'No groin pain or start-up pain',
        'Symptoms bilateral, posture-dependent, and relieved by sitting within minutes',
        'No reported loss of hip internal rotation',
      ],
      rationale:
        'Hip OA classically produces groin/anterior thigh pain with start-up behaviour and restricted internal rotation. Screen hip PROM to formally exclude.',
      evidenceRefs: ['MAGEE-7E-LBP'],
    },
    {
      id: 'hyp-poly',
      label: 'Peripheral neuropathy (diabetic)',
      isPrimary: false,
      supportingFeatures: ['T2DM', 'Intermittent bilateral foot numbness'],
      refutingFeatures: [
        'Numbness is activity-related and fully resolves with sitting',
        'Well-controlled diabetes (HbA1c 6.4%)',
        'No constant stocking-distribution sensory loss',
      ],
      rationale:
        'Diabetic neuropathy produces constant, length-dependent symptoms, not posture-dependent claudicant symptoms. Sensory screen at rest should be normal.',
      evidenceRefs: ['MAGEE-7E-LBP'],
    },
    {
      id: 'hyp-ce',
      label: 'Cauda equina compromise / severe stenosis with neurological deterioration',
      isPrimary: false,
      supportingFeatures: ['Multilevel degenerative spine in an older adult'],
      refutingFeatures: [
        'No new bladder/bowel change, no saddle anaesthesia',
        'No fixed or progressive motor deficit',
      ],
      rationale:
        'Slowly progressive stenosis can rarely decompensate. Excluded today but forms the ongoing safety-net advice.',
      evidenceRefs: ['NICE-NG59', 'NASS-LSS-2011'],
    },
  ],

  objectiveTests: [
    {
      id: 't-obs-gait',
      name: 'Posture & gait observation (including sustained standing)',
      category: 'observation',
      rationale: 'Flexed antalgic posture and wide-based gait are common in stenosis; observe the effect of sustained standing.',
      result: 'Stands with slight forward lean and flattened lordosis. After 3 minutes of standing reports familiar bilateral buttock heaviness, eased by sitting for 60 seconds.',
      interpretation: 'Posture-dependent symptom reproduction consistent with neurogenic claudication.',
      expertSelected: true,
      evidenceRefs: ['TOMKINS-LANE-2016', 'MAGEE-7E-LBP'],
    },
    {
      id: 't-arom',
      name: 'Lumbar AROM',
      category: 'AROM',
      rationale: 'Establishes the directional pattern — extension typically provokes, flexion eases.',
      result: 'Flexion full and symptom-free (fingertips to mid-shin). Extension 50% with reproduction of bilateral buttock heaviness after 10 s sustained; eased immediately on returning to neutral/flexion.',
      interpretation: 'Extension intolerance with flexion relief supports dynamic canal narrowing.',
      expertSelected: true,
      evidenceRefs: ['NASS-LSS-2011', 'MAGEE-7E-LBP'],
    },
    {
      id: 't-treadmill',
      name: 'Two-stage treadmill test (level vs inclined walking)',
      category: 'functional',
      rationale: 'Discriminates neurogenic from vascular claudication: incline (flexed posture) prolongs walking tolerance in stenosis, shortens it in PAD.',
      result: 'Level walking: symptoms at 4 min, forced stop at 6 min, recovery sitting 2 min. Inclined (10%) walking: 10 min with minimal symptoms.',
      interpretation: 'Markedly better tolerance on incline — strongly favours neurogenic over vascular claudication and provides an objective baseline for retesting.',
      expertSelected: true,
      sensitivity: 0.68,
      specificity: 0.83,
      evidenceRefs: ['TOMKINS-LANE-2016', 'COOK-HEGEDUS-2013'],
    },
    {
      id: 't-neuro',
      name: 'Lower limb neuro screen at rest (myotomes/dermatomes/reflexes)',
      category: 'neuro',
      rationale: 'Documents baseline; resting neuro examination is often normal in stenosis, and a fixed deficit changes the pathway.',
      result: 'Power 5/5 throughout. Light touch intact at rest. Ankle jerks diminished (1+) bilaterally, knee jerks 2+. Plantar responses downgoing.',
      interpretation: 'No fixed deficit. Reduced ankle reflexes are common in this age group and in stenosis; document and monitor.',
      expertSelected: true,
      evidenceRefs: ['NASS-LSS-2011', 'MAGEE-7E-LBP'],
    },
    {
      id: 't-pulses',
      name: 'Lower limb vascular screen (dorsalis pedis / posterior tibial pulses, skin/trophic changes)',
      category: 'palpation',
      rationale: 'Bedside corroboration of the vascular differential even with formal Dopplers reported normal.',
      result: 'Pulses palpable and symmetrical. No trophic skin changes, hair loss, or pallor on elevation.',
      interpretation: 'Consistent with normal Doppler studies — vascular claudication unlikely.',
      expertSelected: true,
      evidenceRefs: ['MAGEE-7E-LBP'],
    },
    {
      id: 't-hip',
      name: 'Hip PROM screen (flexion, internal rotation) + FADIR',
      category: 'PROM',
      rationale: 'Excludes hip OA as the buttock symptom source; loss of internal rotation is the earliest OA sign.',
      result: 'Hip IR 30° bilaterally, pain-free. Flexion full. FADIR negative bilaterally.',
      interpretation: 'Hip joint unlikely to be contributing.',
      expertSelected: true,
      evidenceRefs: ['MAGEE-7E-LBP'],
    },
    {
      id: 't-slr',
      name: 'Straight Leg Raise',
      category: 'special',
      rationale: 'Low yield in stenosis (symptoms are extension-loaded, not neural-tension-loaded) but cheap to screen.',
      result: '75° bilaterally with posterior thigh stretch only.',
      interpretation: 'Negative — argues against an acute disc/radicular presentation.',
      expertSelected: false,
      sensitivity: 0.91,
      specificity: 0.26,
      evidenceRefs: ['COOK-HEGEDUS-2013'],
    },
    {
      id: 't-balance',
      name: 'Balance & falls screen (single-leg stance, timed up-and-go)',
      category: 'functional',
      rationale: 'Stenosis, age, and activity avoidance all elevate falls risk; informs safety of the walking programme.',
      result: 'Single-leg stance 8 s right, 6 s left. TUG 11.5 s.',
      interpretation: 'Mildly reduced balance for age — include balance work and review footwear before progressing walking volume.',
      expertSelected: true,
      evidenceRefs: ['AMMENDOLIA-2013'],
    },
    {
      id: 't-palp',
      name: 'Lumbar PA palpation',
      category: 'palpation',
      rationale: 'Assesses segmental mobility; central stiffness is expected with multilevel degenerative change.',
      result: 'Generalised stiffness L3–L5, mild familiar local ache centrally at L4–L5. No step deformity.',
      interpretation: 'Consistent with degenerative change; no features suggesting instability or fracture.',
      expertSelected: false,
      evidenceRefs: ['MAGEE-7E-LBP'],
    },
  ],

  diagnosis: {
    primary:
      'Degenerative lumbar spinal stenosis with bilateral neurogenic claudication (clinical diagnosis; no fixed neurological deficit, vascular causes excluded).',
    keyElements: [
      { label: 'Lumbar spinal stenosis', synonyms: ['stenosis', 'canal narrowing', 'foraminal narrowing'], hint: 'What structural process best explains the presentation?' },
      { label: 'Neurogenic claudication', synonyms: ['neurogenic claudication', 'claudicat'], hint: 'What is the name of the walking-related leg symptom pattern?' },
      { label: 'Posture-dependency (flexion eases / extension provokes)', synonyms: ['flexion', 'extension', 'posture', 'trolley'], hint: 'What movement/posture behaviour is characteristic?' },
      { label: 'Vascular claudication excluded', synonyms: ['vascular', 'arterial', 'pad', 'doppler', 'pulses'], hint: 'Which key differential did you rule out, and how?' },
    ],
    differentialsExcluded: [
      'Vascular claudication (posture-dependent relief, symptom-free cycling, normal Dopplers and pulses)',
      'Hip osteoarthritis (full pain-free hip IR, negative FADIR, no groin pain)',
      'Diabetic peripheral neuropathy (intermittent posture-related numbness only, normal resting sensation)',
      'Cauda equina syndrome / progressive deficit (no sphincter or saddle changes, no fixed weakness)',
      'Malignancy/infection (no constitutional features, mechanical posture-dependent pattern)',
    ],
    reasoning:
      'An older adult with insidious bilateral leg symptoms provoked by walking and standing, relieved within minutes by sitting or flexion, with symptom-free cycling and a positive trolley sign, satisfies the ISSLS consensus cluster for lumbar spinal stenosis. The two-stage treadmill test and normal vascular screen separate neurogenic from vascular claudication. A normal resting neuro examination is expected and does not refute the diagnosis. MRI is only required if the result would change management (e.g. surgical consideration after failed conservative care or if deficit emerges).',
  },

  icf: {
    bodyStructureFunction: [
      'Bilateral buttock/leg heaviness and paraesthesia with extension-loaded positions',
      'Lumbar extension intolerance (sustained 10 s reproduces symptoms)',
      'Reduced walking capacity (level-ground tolerance ~6 minutes)',
      'Mildly reduced single-leg balance for age',
    ],
    activityLimitations: [
      'Walking limited to ~200 m on flat ground',
      'Standing tolerance ~3 minutes (queues, church)',
      'Difficulty with prolonged gardening tasks in upright kneeling/standing',
    ],
    participationRestrictions: [
      'Stopped social walking with friend',
      'Reduced volunteering at community garden',
      'Avoids outings without guaranteed seating',
    ],
    personalFactors: [
      'Belief that spine is "crumbling" (imaging-report language) driving activity avoidance',
      'Motivated to avoid surgery; good exercise history (gym cycling)',
      'Lives alone — self-efficacy for a home programme is important',
    ],
    environmentalFactors: [
      'Single-level home (favourable)',
      'Gym membership with stationary bikes nearby',
      'Supportive adult children in the same city; friend available as walking partner',
    ],
  },

  management: {
    shortTerm: [
      {
        category: 'education',
        intervention:
          'Reframe the imaging findings: degenerative change is age-normal; symptoms are posture-dependent and modifiable; "motion is lotion", spine is not crumbling. Teach flexion-based symptom-relief positions.',
        doseFrequency: 'First two sessions, reinforced throughout; written summary provided.',
        rationale:
          'Education addressing threatening imaging language reduces fear-avoidance; conservative care is an appropriate first-line pathway for stenosis without fixed deficit.',
        evidenceRefs: ['NASS-LSS-2011', 'NICE-NG59', 'BUCHBINDER-LBP-2018'],
      },
      {
        category: 'exercise',
        intervention:
          'Flexion-biased mobility and unloading programme: supine double knee-to-chest, posterior pelvic tilts, seated flexion; plus symptom-free aerobic dosing on the stationary bike.',
        doseFrequency: 'Mobility drills daily; bike 20–30 min, 3–4×/week at comfortable intensity.',
        rationale:
          'Flexion-based exercise and cycling maintain aerobic capacity within the posture-dependent envelope while walking tolerance is rebuilt.',
        evidenceRefs: ['AMMENDOLIA-2013', 'NASS-LSS-2011'],
      },
      {
        category: 'manual',
        intervention:
          'Lumbar flexion-biased mobilisation (grade III PAs in flexion, rotational mobilisation) and hip flexor/thoracic mobility work as an adjunct.',
        doseFrequency: 'Weekly for 4 weeks alongside active programme.',
        rationale:
          'Manual therapy combined with exercise and body-weight-supported walking shows benefit over self-directed care in neurogenic claudication cohorts.',
        evidenceRefs: ['AMMENDOLIA-2013', 'JOSPT-LBP-2021'],
      },
      {
        category: 'self-management',
        intervention:
          'Interval walking programme: walk to ~70% of symptom threshold (about 4 minutes), sit or flex for 1–2 minutes, repeat ×4; progress interval length weekly. Use of walking poles trialled.',
        doseFrequency: 'Daily, logged in a simple diary.',
        rationale:
          'Interval dosing below the claudicant threshold progressively extends walking capacity — mirroring the treadmill-test behaviour.',
        evidenceRefs: ['AMMENDOLIA-2013', 'TOMKINS-LANE-2016'],
      },
    ],
    longTerm: [
      {
        category: 'exercise',
        intervention:
          'Progressive lower-limb strengthening (sit-to-stand, step-ups, calf raises) and balance training; graduation to community walking group with friend.',
        doseFrequency: '2–3×/week for 8–12 weeks, then maintenance.',
        rationale:
          'Strength and balance work targets deconditioning and the mildly elevated falls risk, supporting durable walking gains.',
        evidenceRefs: ['AMMENDOLIA-2013', 'JOSPT-LBP-2021'],
      },
      {
        category: 'education',
        intervention:
          'Flare-management plan: temporary return to flexion-relief positions and bike-dominant dosing, then re-grade walking. Clear safety-netting on cauda equina symptoms.',
        doseFrequency: 'Reviewed at discharge; written plan.',
        rationale:
          'Stenosis symptoms typically fluctuate; a self-managed flare plan reduces re-referral and maintains confidence.',
        evidenceRefs: ['NASS-LSS-2011', 'NICE-NG59'],
      },
      {
        category: 'referral',
        intervention:
          'If meaningful walking gains are not achieved by 12 weeks of well-adhered conservative care, or a progressive deficit emerges, refer for MRI and surgical (decompression) opinion via the GP.',
        rationale:
          'Decompression surgery has evidence of benefit for stenosis, but a randomised comparison showed comparable 2-year outcomes with structured physiotherapy — an adequate conservative trial is justified first, with clear escalation triggers.',
        evidenceRefs: ['DELITTO-LSS-2015', 'NASS-LSS-2011'],
      },
    ],
    prognosis:
      'Neurogenic claudication typically follows a fluctuating, slowly progressive course, but structured conservative care produces clinically meaningful gains in walking capacity for many patients, with outcomes comparable to decompression in randomised comparison at 2 years. Favourable factors here: motivated, symptom-free cycling capacity, no fixed deficit. Monitor for neurological progression.',
    redFlagsToMonitor: [
      'New saddle anaesthesia or bladder/bowel change (urgent ED — cauda equina)',
      'Fixed or progressive motor weakness (foot drop, tripping)',
      'Rapid unexplained deterioration in walking distance',
      'Constitutional symptoms or new non-mechanical night pain',
    ],
  },

  references: [
    {
      id: 'NASS-LSS-2011',
      citation:
        'Kreiner DS et al. An evidence-based clinical guideline for the diagnosis and treatment of degenerative lumbar spinal stenosis (update). North American Spine Society. Spine J 2013;13(7):734–743.',
      doi: '10.1016/j.spinee.2012.11.059',
      level: 'CPG',
    },
    {
      id: 'TOMKINS-LANE-2016',
      citation:
        'Tomkins-Lane C et al. ISSLS Prize Winner: Consensus on the Clinical Diagnosis of Lumbar Spinal Stenosis. Spine 2016;41(15):1239–1246.',
      doi: '10.1097/BRS.0000000000001476',
      level: 'Expert',
    },
    {
      id: 'DELITTO-LSS-2015',
      citation:
        'Delitto A et al. Surgery versus nonsurgical treatment of lumbar spinal stenosis: a randomized trial. Ann Intern Med 2015;162(7):465–473.',
      doi: '10.7326/M14-1420',
      level: 'RCT',
    },
    {
      id: 'AMMENDOLIA-2013',
      citation:
        'Ammendolia C et al. Nonoperative treatment for lumbar spinal stenosis with neurogenic claudication. Cochrane Database Syst Rev 2013;(8):CD010712.',
      doi: '10.1002/14651858.CD010712',
      level: 'SR',
    },
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
