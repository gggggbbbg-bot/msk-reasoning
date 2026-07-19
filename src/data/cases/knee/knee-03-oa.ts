import type { Case } from '../../../types/case';

export const knee03: Case = {
  id: 'knee-03-oa',
  region: 'knee',
  title: 'Medial knee pain on stairs in a 61-year-old — knee osteoarthritis without an X-ray',
  difficulty: 1,
  estimatedMinutes: 15,
  learningObjectives: [
    'Make a clinical (non-radiographic) diagnosis of knee osteoarthritis using validated clinical criteria.',
    'Explain why imaging is not required for diagnosis and why radiographic severity correlates poorly with symptoms.',
    'Apply first-line care for knee OA: education, exercise therapy, and weight management (GLA:D model).',
    'Use OARSI-recommended performance tests to set baselines and track outcomes.',
  ],

  demographics: { age: 61, sex: 'F', occupation: 'Practice manager (part-time); grandchild care 2 days/week' },

  referral:
    'GP referral via Medicare CDM plan. 61 yo female with 14 months of gradually worsening right medial knee pain, worst on stairs and after gardening. GP has deliberately not ordered an X-ray and requests exercise-based management for presumed knee osteoarthritis. BMI 31. Keen to avoid surgery.',

  subjective: {
    hpc:
      'Gradual onset right medial knee ache over ~14 months, no injury. Now 3/10 on flat walking beyond 30 minutes, 5–6/10 descending stairs and rising from low chairs. Morning stiffness ~15 minutes, and brief "gelling" stiffness after sitting through a movie or long drive. Occasional mild swelling after heavy gardening days; no locking, no giving way, no instability. Crepitus she can "hear on the stairs". Symptoms slowly worsening; now avoiding kneeling and taking stairs one at a time.',
    aggravating: [
      'Descending stairs and slopes',
      'Rising from low chairs after sitting (start-up pain)',
      'Kneeling in the garden; heavy gardening days (mild swelling after)',
      'Walking beyond ~30 minutes',
    ],
    easing: ['Gentle movement after the initial stiffness', 'Heat pack in the evening', 'Paracetamol before long outings (partial help)'],
    pmh: [
      'Hypertension (controlled)',
      'BMI 31 (weight gradually increased over the last decade)',
      'Right ankle fracture in her 20s (healed)',
      'No inflammatory arthritis; no psoriasis',
    ],
    drugHx: ['Amlodipine 5 mg daily', 'Paracetamol 665 mg SR prn', 'Fish oil (self-started)'],
    socialHx:
      'Lives with husband in a two-storey house in Geelong (bedroom upstairs). Part-time practice manager (on her feet half the day). Minds two grandchildren (ages 2 and 4) two days a week — floor play and park trips increasingly avoided. Enjoys gardening and used to swim. Never smoked; wine 3–4 nights/week.',
    redFlagScreen: [
      { flag: 'Significant trauma this episode', present: false, note: 'Insidious onset — Ottawa knee rule not applicable' },
      { flag: 'Hot, red, markedly swollen joint (septic arthritis / crystal arthropathy)', present: false, note: 'Mild cool effusion after activity only' },
      { flag: 'True locking or acute mechanical block', present: false, note: 'Crepitus and stiffness, but no locking' },
      { flag: 'Constitutional symptoms / history of malignancy', present: false },
      { flag: 'Prolonged morning stiffness >30 min or multi-joint inflammatory pattern', present: false, note: '~15 minutes, single joint' },
      { flag: 'Night pain unrelieved by position change', present: false, note: 'Occasional ache settling with repositioning' },
    ],
    yellowFlags: [
      'Believes the knee is "bone on bone" (phrase from a friend\'s X-ray report) and that exercise will wear it out faster',
      'Expects an X-ray and is mildly sceptical the GP "didn\'t bother"',
      'Low confidence in knee on stairs → avoidance and deconditioning cycle',
    ],
    patientGoals: [
      'Play on the floor and walk to the park with the grandchildren',
      'Manage stairs at home normally (bedroom is upstairs)',
      'Return to gardening without a two-day flare',
      'Avoid a knee replacement',
    ],
  },

  hypotheses: [
    {
      id: 'hyp-oa',
      label: 'Knee osteoarthritis (tibiofemoral, medial-compartment dominant)',
      isPrimary: true,
      supportingFeatures: [
        'Age >50 with activity-related pain and insidious onset',
        'Morning stiffness <30 minutes with "gelling" after rest',
        'Crepitus, no significant instability, no inflammatory features',
        'Meets ACR clinical criteria for knee OA without imaging',
        'Risk profile: age, female, BMI 31, occupational/loading history',
      ],
      refutingFeatures: ['None significant'],
      rationale:
        'ACR clinical criteria (knee pain plus crepitus, morning stiffness <30 min, age >50) allow confident clinical diagnosis. NICE explicitly endorses diagnosing OA without imaging in over-45s with activity-related pain and no prolonged morning stiffness.',
      evidenceRefs: ['ACR-ALTMAN-1986', 'NICE-NG226', 'RACGP-OA-2018'],
    },
    {
      id: 'hyp-meniscus',
      label: 'Degenerative medial meniscal tear as the primary pain driver',
      isPrimary: false,
      supportingFeatures: ['Medial joint line region pain', 'Age group where degenerative tears are near-universal on MRI'],
      refutingFeatures: [
        'No locking, catching, or giving way',
        'No twisting incident',
        'Degenerative tears co-exist with OA and rarely change first-line management',
      ],
      rationale:
        'Degenerative meniscal findings are part of the OA spectrum; arthroscopic surgery offers no benefit over exercise therapy in this group, so the label must not derail conservative care.',
      evidenceRefs: ['JOSPT-MENISCUS-2018', 'RACGP-OA-2018'],
    },
    {
      id: 'hyp-pes',
      label: 'Pes anserine bursitis/tendinopathy',
      isPrimary: false,
      supportingFeatures: ['Medial knee pain in an active woman >50 with elevated BMI'],
      refutingFeatures: [
        'Pain located over the joint line rather than 4–5 cm distal on the proximal tibia',
        'No focal tenderness at the pes insertion expected',
      ],
      rationale: 'Common co-presentation with OA; palpation location separates it and it responds to the same loading programme if present.',
      evidenceRefs: ['MAGEE-7E-KNEE'],
    },
    {
      id: 'hyp-inflam',
      label: 'Inflammatory arthropathy (RA, crystal)',
      isPrimary: false,
      supportingFeatures: ['Episodic swelling'],
      refutingFeatures: [
        'Single joint, morning stiffness <30 min',
        'No heat/redness, no systemic features, cool mild effusion only after load',
      ],
      rationale: 'Pattern is mechanical and mono-articular; refer for bloods only if inflammatory features emerge.',
      evidenceRefs: ['NICE-NG226', 'RACGP-OA-2018'],
    },
    {
      id: 'hyp-hip',
      label: 'Referred pain from ipsilateral hip OA',
      isPrimary: false,
      supportingFeatures: ['Age group; hip OA can refer to the knee'],
      refutingFeatures: [
        'Pain well-localised medially with local crepitus',
        'No groin pain; expect full pain-free hip screen',
      ],
      rationale: 'Cheap to screen with hip PROM; missed hip OA is a classic error in "knee" presentations.',
      evidenceRefs: ['MAGEE-7E-KNEE'],
    },
  ],

  objectiveTests: [
    {
      id: 't-obs',
      name: 'Observation: alignment, gait, stairs',
      category: 'observation',
      rationale: 'Alignment and movement strategy inform exercise targets; stair descent is her key functional complaint.',
      result: 'Mild genu varum bilaterally. Antalgic strategy descending a step: leads with left, trunk lean, hand on rail. Reduced right stance time on gait.',
      interpretation: 'Load-avoidance strategies consistent with painful medial-compartment loading and reduced knee confidence — retrainable.',
      expertSelected: true,
      evidenceRefs: ['MAGEE-7E-KNEE', 'DOBSON-2013'],
    },
    {
      id: 't-arom',
      name: 'Knee AROM/PROM with overpressure',
      category: 'AROM',
      rationale: 'Documents capsular pattern restriction and end-range irritability.',
      result: 'Right flexion 125° (tight ache at end range), extension −2° vs 0° left. Coarse patellofemoral and tibiofemoral crepitus through range.',
      interpretation: 'Mild capsular-pattern restriction with crepitus — typical of tibiofemoral OA; near-full range is a good prognostic feature.',
      expertSelected: true,
      evidenceRefs: ['ACR-ALTMAN-1986', 'MAGEE-7E-KNEE'],
    },
    {
      id: 't-palp',
      name: 'Palpation: joint lines, pes anserinus, effusion sweep',
      category: 'palpation',
      rationale: 'Localises the symptomatic compartment and excludes pes anserine involvement; grades effusion.',
      result: 'Familiar tenderness along the medial joint line; pes anserine insertion non-tender. Sweep test: trace effusion. No warmth.',
      interpretation: 'Medial tibiofemoral compartment is the symptomatic source; pes anserine syndrome excluded; minimal cool effusion consistent with OA.',
      expertSelected: true,
      evidenceRefs: ['ACR-ALTMAN-1986', 'MAGEE-7E-KNEE'],
    },
    {
      id: 't-hip',
      name: 'Hip screen (PROM including internal rotation, FADIR)',
      category: 'PROM',
      rationale: 'Excludes hip referral — mandatory in any degenerative knee presentation.',
      result: 'Hip IR 35° pain-free, flexion full, FADIR negative.',
      interpretation: 'Hip not contributing.',
      expertSelected: true,
      evidenceRefs: ['MAGEE-7E-KNEE'],
    },
    {
      id: 't-30scst',
      name: '30-second chair stand test',
      category: 'functional',
      rationale: 'OARSI-recommended core performance test; quantifies functional lower-limb strength and start-up pain.',
      result: '9 stands (age-sex norm ≥12); start-up pain 4/10 on first two reps easing thereafter.',
      interpretation: 'Below-norm functional strength — a primary, measurable exercise target.',
      expertSelected: true,
      evidenceRefs: ['DOBSON-2013', 'GLAD-SKOU-2017'],
    },
    {
      id: 't-40mwalk',
      name: '40 m fast-paced walk test',
      category: 'functional',
      rationale: 'OARSI-recommended measure of ambulatory function.',
      result: '32 s (1.25 m/s), pain 2/10 by completion.',
      interpretation: 'Mildly reduced walking speed; baseline for retest at 6 and 12 weeks.',
      expertSelected: true,
      evidenceRefs: ['DOBSON-2013'],
    },
    {
      id: 't-koos',
      name: 'KOOS (Knee injury and Osteoarthritis Outcome Score)',
      category: 'functional',
      rationale: 'Patient-reported baseline across pain, function, and quality-of-life subscales; standard GLA:D outcome.',
      result: 'KOOS-Pain 58, ADL 63, QoL 44.',
      interpretation: 'Moderate impact with quality-of-life most affected — consistent with her confidence and avoidance pattern.',
      expertSelected: true,
      evidenceRefs: ['GLAD-SKOU-2017'],
    },
    {
      id: 't-ligament',
      name: 'Ligament screen (Lachman, valgus/varus stress)',
      category: 'special',
      rationale: 'Confirms the "no instability" history before loading; quick to perform.',
      result: 'Lachman firm end-feel, valgus/varus stable at 0° and 30°.',
      interpretation: 'Ligamentously stable knee — consistent with degenerative rather than traumatic pathology.',
      expertSelected: false,
      evidenceRefs: ['MAGEE-7E-KNEE', 'COOK-HEGEDUS-2013'],
    },
    {
      id: 't-mcmurray',
      name: "McMurray's test",
      category: 'special',
      rationale: 'Often reflexively performed for medial knee pain, but a positive test would not change management here.',
      result: 'Crepitus without reproduction of sharp pain or click.',
      interpretation: 'Equivocal — and immaterial: degenerative meniscal findings accompany OA and do not alter first-line exercise-based care.',
      expertSelected: false,
      sensitivity: 0.7,
      specificity: 0.71,
      lrPositive: 2.4,
      lrNegative: 0.42,
      evidenceRefs: ['JOSPT-MENISCUS-2018', 'COOK-HEGEDUS-2013'],
    },
    {
      id: 't-xray',
      name: 'Request weight-bearing knee X-ray',
      category: 'special',
      rationale: 'Frequently expected by patients; rarely needed for diagnosis.',
      result: 'Not requested.',
      interpretation: 'Clinical criteria are met; radiographic severity correlates poorly with symptoms, and "bone on bone" report language often increases fear and surgical expectation without changing first-line care.',
      expertSelected: false,
      evidenceRefs: ['NICE-NG226', 'RACGP-OA-2018'],
    },
  ],

  diagnosis: {
    primary:
      'Clinical knee osteoarthritis, medial tibiofemoral compartment dominant (meets ACR clinical criteria; imaging not required), with associated quadriceps weakness, reduced knee confidence, and BMI 31 as modifiable contributors.',
    keyElements: [
      { label: 'Knee osteoarthritis', synonyms: ['osteoarthritis', 'oa', 'degenerative joint'], hint: 'What is the primary diagnosis?' },
      { label: 'Clinical diagnosis — imaging not required', synonyms: ['clinical criteria', 'no x-ray', 'without imaging', 'acr', 'nice'], hint: 'Did you justify diagnosing without an X-ray?' },
      { label: 'Medial tibiofemoral compartment', synonyms: ['medial', 'tibiofemoral'], hint: 'Which compartment is symptomatic?' },
      { label: 'Modifiable factors identified (strength, weight, beliefs)', synonyms: ['weight', 'bmi', 'strength', 'quadriceps', 'belief', 'confidence'], hint: 'What modifiable contributors will management target?' },
    ],
    differentialsExcluded: [
      'Inflammatory arthropathy (mono-articular, morning stiffness <30 min, cool joint, no systemic features)',
      'Symptomatic meniscal tear requiring separate pathway (no locking/giving way; management identical — exercise first)',
      'Pes anserine syndrome (insertion non-tender)',
      'Referred hip OA (full pain-free hip screen, negative FADIR)',
      'Septic arthritis/crystal (no heat, redness, or acute severe presentation)',
    ],
    reasoning:
      'Age over 50, activity-related medial knee pain with brief morning stiffness, crepitus, and a stable, cool joint meet the ACR clinical criteria for knee OA, and NICE guidance explicitly supports making this diagnosis without radiographs. The examination localises symptoms to the medial tibiofemoral compartment and quantifies the treatable impairments: below-norm chair-stand performance, reduced walking speed, guarded stair strategy, and KOOS-QoL 44. Her "bone on bone" belief and exercise-fear are as much treatment targets as the joint itself, because first-line care — education, structured exercise, and weight management — depends on her engaging with loading rather than protecting the knee.',
  },

  icf: {
    bodyStructureFunction: [
      'Medial knee pain (3/10 walking, 5–6/10 stairs) with crepitus and trace effusion',
      'Right knee flexion 125°, extension −2°',
      'Functional quadriceps weakness (9 chair stands vs norm ≥12)',
      'Morning stiffness ~15 min with gelling after rest',
    ],
    activityLimitations: [
      'Stairs one-at-a-time with rail (bedroom upstairs)',
      'Cannot kneel for gardening or floor play',
      'Walking limited to ~30 min before pain escalates',
      'Difficulty rising from low chairs',
    ],
    participationRestrictions: [
      'Avoiding park trips and floor play with grandchildren',
      'Gardening restricted (flares after heavy days)',
      'Stopped swimming; social outings planned around seating and stairs',
    ],
    personalFactors: [
      '"Bone on bone / exercise wears it out" beliefs driving activity avoidance',
      'BMI 31 — modifiable load factor',
      'Strong family motivators (grandchildren) and clear goals',
      'Preference to avoid surgery (aligned with evidence-based pathway)',
    ],
    environmentalFactors: [
      'Two-storey home — daily stair demand (both barrier and built-in training stimulus)',
      'Medicare CDM plan funding limited sessions; GLA:D program available locally',
      'Supportive husband; garden can be adapted (raised beds, kneeling stool)',
    ],
  },

  management: {
    shortTerm: [
      {
        category: 'education',
        intervention:
          'OA education (GLA:D-style): OA is a whole-joint process, not "wearing out"; cartilage needs load to stay healthy; exercise is safe and is the treatment, not a threat; X-ray appearance correlates poorly with pain and would not change today\'s plan.',
        doseFrequency: '2 structured education sessions in week 1–2; written/online resources.',
        rationale:
          'Education is a core first-line intervention in every major OA guideline and directly targets the beliefs blocking engagement with exercise.',
        evidenceRefs: ['RACGP-OA-2018', 'NICE-NG226', 'GLAD-SKOU-2017'],
      },
      {
        category: 'exercise',
        intervention:
          'Supervised neuromuscular exercise programme (GLA:D model): sit-to-stands, step-ups, hip abductor and quadriceps strengthening, weight-shift and stair-descent retraining, dosed to acceptable pain (≤5/10, settling by next day).',
        doseFrequency: '2 supervised sessions/week for 6 weeks + 1 home session.',
        rationale:
          'Structured education-plus-exercise reduces pain ~25% and improves function and quality of life in real-world OA cohorts; strengthening has consistent guideline support as first-line care.',
        evidenceRefs: ['GLAD-SKOU-2017', 'OARSI-2019', 'RACGP-OA-2018'],
      },
      {
        category: 'self-management',
        intervention:
          'Activity pacing for gardening (raised beds, kneeling stool, split sessions) and a flare plan (relative rest 1–2 days, heat, keep moving within comfort, resume programme); paracetamol timing reviewed with GP.',
        doseFrequency: 'Ongoing; flare plan in writing.',
        rationale:
          'Keeps valued activities viable while the programme builds capacity, preventing the boom-bust flare cycle.',
        evidenceRefs: ['RACGP-OA-2018', 'NICE-NG226'],
      },
      {
        category: 'referral',
        intervention:
          'GP-coordinated weight-management referral (dietitian via CDM plan): target 5–10% body-weight reduction, paired with the exercise programme.',
        rationale:
          'Weight loss of ≥5% produces dose-dependent symptom improvement in knee OA and is a strong recommendation in Australian guidelines for BMI >25.',
        evidenceRefs: ['RACGP-OA-2018', 'OARSI-2019', 'NICE-NG226'],
      },
    ],
    longTerm: [
      {
        category: 'exercise',
        intervention:
          'Progress to independent gym/home maintenance programme plus return to swimming and progressive walking; re-test 30 s chair stand, 40 m walk, and KOOS at 6 and 12 weeks.',
        doseFrequency: 'Strength 2×/week ongoing (lifelong habit framing); aerobic activity toward 150 min/week.',
        rationale:
          'Exercise benefits in OA persist only with continued loading; objective retesting sustains motivation and demonstrates change.',
        evidenceRefs: ['OARSI-2019', 'GLAD-SKOU-2017', 'DOBSON-2013'],
      },
      {
        category: 'education',
        intervention:
          'Long-term joint-health plan: maintaining load tolerance, footwear, managing flares independently, and honest framing of the surgical horizon — joint replacement is a late option for severe disease unresponsive to comprehensive conservative care, not an inevitability.',
        doseFrequency: 'Discharge session with written plan.',
        rationale:
          'Realistic long-term framing reduces care-seeking driven by fear and keeps the patient anchored to first-line management.',
        evidenceRefs: ['RACGP-OA-2018', 'NICE-NG226'],
      },
      {
        category: 'referral',
        intervention:
          'Escalate via GP only if comprehensive conservative care (≥3–6 months, including weight loss) fails with persistent severe pain and functional decline: consider imaging at that point and orthopaedic opinion. Avoid arthroscopy for degenerative knee; intra-articular corticosteroid only as short-term adjunct for significant flares.',
        rationale:
          'Guidelines reserve imaging and surgical referral for failed conservative care; arthroscopic surgery for degenerative knees confers no meaningful benefit over exercise therapy.',
        evidenceRefs: ['RACGP-OA-2018', 'JOSPT-MENISCUS-2018', 'NICE-NG226'],
      },
    ],
    prognosis:
      'Good for meaningful symptom and function gains: education-plus-exercise programmes typically deliver ~25% pain reduction and improved confidence by 3 months, amplified by 5–10% weight loss. OA is slowly progressive, but symptom trajectory is modifiable and many patients defer or avoid arthroplasty. Key risks: reverting to avoidance beliefs, and flare-driven programme abandonment — both addressed in the plan.',
    redFlagsToMonitor: [
      'Acute hot, red, markedly swollen joint ± fever (septic arthritis — same-day medical review)',
      'True locking or acute mechanical block',
      'Rapidly progressive pain or deformity out of keeping with OA trajectory',
      'New multi-joint inflammatory pattern or prolonged (>30 min) morning stiffness (rheumatology screen via GP)',
    ],
  },

  references: [
    {
      id: 'RACGP-OA-2018',
      citation:
        'Royal Australian College of General Practitioners. Guideline for the management of knee and hip osteoarthritis. 2nd ed. East Melbourne: RACGP 2018.',
      url: 'https://www.racgp.org.au/clinical-resources/clinical-guidelines/key-racgp-guidelines/view-all-racgp-guidelines/knee-and-hip-osteoarthritis',
      level: 'CPG',
    },
    {
      id: 'OARSI-2019',
      citation:
        'Bannuru RR et al. OARSI guidelines for the non-surgical management of knee, hip, and polyarticular osteoarthritis. Osteoarthritis Cartilage 2019;27(11):1578–1589.',
      doi: '10.1016/j.joca.2019.06.011',
      level: 'CPG',
    },
    {
      id: 'NICE-NG226',
      citation:
        'NICE. Osteoarthritis in over 16s: diagnosis and management. NICE guideline NG226 (2022).',
      url: 'https://www.nice.org.uk/guidance/ng226',
      level: 'CPG',
    },
    {
      id: 'GLAD-SKOU-2017',
      citation:
        'Skou ST, Roos EM. Good Life with osteoArthritis in Denmark (GLA:D): evidence-based education and supervised neuromuscular exercise delivered by certified physiotherapists nationwide. BMC Musculoskelet Disord 2017;18:72.',
      doi: '10.1186/s12891-017-1439-y',
      level: 'Cohort',
    },
    {
      id: 'ACR-ALTMAN-1986',
      citation:
        'Altman R et al. Development of criteria for the classification and reporting of osteoarthritis: classification of osteoarthritis of the knee. Arthritis Rheum 1986;29(8):1039–1049.',
      doi: '10.1002/art.1780290816',
      level: 'Cohort',
    },
    {
      id: 'DOBSON-2013',
      citation:
        'Dobson F et al. OARSI recommended performance-based tests to assess physical function in people diagnosed with hip or knee osteoarthritis. Osteoarthritis Cartilage 2013;21(8):1042–1052.',
      doi: '10.1016/j.joca.2013.05.002',
      level: 'Expert',
    },
    {
      id: 'JOSPT-MENISCUS-2018',
      citation:
        'Logerstedt DS et al. Knee Pain and Mobility Impairments: Meniscal and Articular Cartilage Lesions. Revision 2018. JOSPT 2018;48(2):A1–A50.',
      doi: '10.2519/jospt.2018.0301',
      url: 'https://www.jospt.org/doi/10.2519/jospt.2018.0301',
      level: 'CPG',
    },
    {
      id: 'MAGEE-7E-KNEE',
      citation: 'Magee DJ. Orthopedic Physical Assessment, 7th ed. Ch. 12: Knee. Elsevier 2021.',
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
