import type { Case } from '../../../types/case';

export const ankle01: Case = {
  id: 'ankle-01-lateral-sprain',
  region: 'ankle',
  title: 'Acute lateral ankle sprain in a community soccer player',
  difficulty: 1,
  estimatedMinutes: 14,
  learningObjectives: [
    'Apply the Ottawa Ankle Rules to triage the need for imaging.',
    'Stage and grade lateral ankle ligament sprain.',
    'Plan early functional rehabilitation per JOSPT 2021 Ankle CPG (graded loading + balance).',
  ],

  demographics: { age: 22, sex: 'M', occupation: 'University student & weekend soccer (community league)', handedness: 'R' },

  referral:
    'Self-referred private. 22 yo male, 48 h post inversion injury during a soccer match. Walked off with help, has been weight-bearing partially in a moon boot. Imaging not done. Wants to return to sport.',

  subjective: {
    hpc:
      'During a side-step on uneven turf, R foot inverted under load. Heard a "snap"-feeling, not a clear pop. Immediate lateral ankle pain, swelling within hours. Bruising on lateral foot. Currently 4/10 at rest, 7/10 with weight-bearing through forefoot. No medial ankle pain, no proximal fibula pain, no midfoot pain.',
    aggravating: ['Weight-bearing on forefoot', 'Inversion / cutting movements', 'Stairs descending'],
    easing: ['Elevation', 'Ice', 'Boot offloading'],
    pmh: ['Two prior R lateral ankle sprains in last 3 years (lower-grade, 2 weeks back to sport)'],
    drugHx: ['Ibuprofen 400 mg tds since injury'],
    socialHx: 'Studies engineering at UQ. Plays soccer recreationally. Lives with housemates in shared rental.',
    redFlagScreen: [
      { flag: 'Bony tenderness over posterior 6 cm or tip of lateral malleolus', present: true, note: 'Yes — anterior to lateral malleolus, not posterior edge' },
      { flag: 'Bony tenderness over posterior 6 cm or tip of medial malleolus', present: false },
      { flag: 'Bony tenderness at navicular', present: false },
      { flag: 'Bony tenderness at base of 5th metatarsal', present: false },
      { flag: 'Inability to weight bear immediately and in clinic 4 steps', present: false, note: 'Can walk 4 steps with limp' },
      { flag: 'High-energy mechanism / open wound', present: false },
      { flag: 'Neurovascular compromise', present: false },
    ],
    yellowFlags: ['Concern about losing fitness for soccer season'],
    patientGoals: ['Return to soccer training in 4 weeks', 'Walk pain-free in week 2', 'Resume gym in 2 weeks'],
  },

  hypotheses: [
    {
      id: 'hyp-atfl',
      label: 'Grade II right lateral ankle (ATFL ± CFL) sprain',
      isPrimary: true,
      supportingFeatures: [
        'Inversion mechanism',
        'Lateral ankle pain and swelling',
        'Anterior to lateral malleolus tenderness',
        'Partial weight-bearing tolerated',
      ],
      refutingFeatures: ['Need to confirm via anterior drawer / talar tilt'],
      rationale: 'Most common ankle injury. ATFL is the first ligament injured in inversion-supination. CFL involvement increases instability.',
      evidenceRefs: ['JOSPT-ANKLE-2021', 'MAGEE-7E-ANKLE'],
    },
    {
      id: 'hyp-syndesmosis',
      label: 'Syndesmotic (high ankle) sprain',
      isPrimary: false,
      supportingFeatures: ['Sport-related ankle injury'],
      refutingFeatures: ['Mechanism is inversion (syndesmosis is dorsiflexion-eversion)', 'No anteroinferior tibiofibular tenderness'],
      rationale: 'Mechanism and palpation pattern do not fit syndesmotic injury — confirm with squeeze and ER tests.',
      evidenceRefs: ['JOSPT-ANKLE-2021'],
    },
    {
      id: 'hyp-fracture',
      label: 'Lateral malleolar (Weber B) fracture',
      isPrimary: false,
      supportingFeatures: ['Significant inversion injury'],
      refutingFeatures: ['Tenderness anterior to malleolus, not posterior 6 cm', 'Walking 4 steps possible'],
      rationale: 'Ottawa rules negative for posterior malleolar tenderness or inability to weight bear — low probability of fracture, x-ray not indicated.',
      evidenceRefs: ['OAR-1992'],
    },
    {
      id: 'hyp-peroneal',
      label: 'Peroneal tendon tear / subluxation',
      isPrimary: false,
      supportingFeatures: ['Lateral ankle pain'],
      refutingFeatures: ['No pain on resisted eversion', 'No tendon snap with circumduction'],
      rationale: 'Less likely; check resisted eversion to confirm.',
      evidenceRefs: ['MAGEE-7E-ANKLE'],
    },
  ],

  objectiveTests: [
    {
      id: 't-oar',
      name: 'Ottawa Ankle Rules screen',
      category: 'special',
      rationale: 'Decision rule to triage need for x-ray. Sensitive to ~98%.',
      result: 'Negative on all four criteria — no imaging required.',
      interpretation: 'Reduces probability of fracture; can proceed with conservative management.',
      expertSelected: true,
      sensitivity: 0.98,
      specificity: 0.4,
      lrNegative: 0.05,
      evidenceRefs: ['OAR-1992', 'JOSPT-ANKLE-2021'],
    },
    {
      id: 't-anteriordraw',
      name: 'Anterior drawer test',
      category: 'special',
      rationale: 'Tests ATFL integrity.',
      result: 'Increased anterior translation R vs L with soft end-feel; reproduces lateral pain.',
      interpretation: 'Supports ATFL injury (Grade II).',
      expertSelected: true,
      sensitivity: 0.74,
      specificity: 0.4,
      evidenceRefs: ['COOK-HEGEDUS-2013'],
    },
    {
      id: 't-talartilt',
      name: 'Talar tilt test',
      category: 'special',
      rationale: 'Tests CFL integrity.',
      result: 'Mildly increased varus opening on R; reproduces lateral pain.',
      interpretation: 'Possible mild CFL involvement.',
      expertSelected: true,
      sensitivity: 0.52,
      specificity: 0.88,
      evidenceRefs: ['COOK-HEGEDUS-2013'],
    },
    {
      id: 't-squeeze',
      name: 'Squeeze test',
      category: 'special',
      rationale: 'Screens syndesmotic injury.',
      result: 'Negative — no distal tibiofibular pain on proximal compression.',
      interpretation: 'Reduces likelihood of syndesmotic involvement.',
      expertSelected: true,
      sensitivity: 0.3,
      specificity: 0.93,
      lrNegative: 0.75,
      evidenceRefs: ['COOK-HEGEDUS-2013', 'JOSPT-ANKLE-2021'],
    },
    {
      id: 't-er',
      name: 'External rotation (Kleiger) test',
      category: 'special',
      rationale: 'Provocation for syndesmotic injury.',
      result: 'Negative.',
      interpretation: 'Further reduces syndesmotic probability.',
      expertSelected: false,
      evidenceRefs: ['COOK-HEGEDUS-2013'],
    },
    {
      id: 't-romobs',
      name: 'Ankle AROM and observation (swelling, ecchymosis, gait)',
      category: 'observation',
      rationale: 'Baseline functional capacity.',
      result: 'Lateral swelling +; bruising over lateral foot; antalgic gait, partial weight-bear; DF 5° (R) vs 15° (L); inversion limited 50%.',
      interpretation: 'Confirms moderate severity; provides retest measures.',
      expertSelected: true,
      evidenceRefs: ['JOSPT-ANKLE-2021'],
    },
    {
      id: 't-singleleg',
      name: 'Single-leg balance test (eyes open/closed)',
      category: 'functional',
      rationale: 'Baseline balance for return-to-sport criteria; chronic ankle instability risk indicator.',
      result: 'Eyes open R 12 s vs L 30 s; eyes closed R 5 s vs L 18 s.',
      interpretation: 'Significant proprioceptive deficit — needs balance training.',
      expertSelected: true,
      evidenceRefs: ['JOSPT-ANKLE-2021', 'VUURBERG-BJSM-2018'],
    },
  ],

  diagnosis: {
    primary: 'Acute right Grade II lateral ankle ligament sprain (ATFL ± CFL), no fracture (Ottawa rules negative), no syndesmotic involvement.',
    differentialsExcluded: [
      'Lateral malleolar fracture (Ottawa rules negative)',
      'Syndesmotic injury (negative squeeze; mechanism mismatch)',
      'Peroneal tendon tear (no resisted eversion pain)',
      '5th MT base fracture (no point tenderness)',
    ],
    reasoning:
      'Mechanism, location of tenderness, examination findings, and Ottawa rules all point to a moderate (Grade II) ATFL ± CFL sprain. Functional rehabilitation per JOSPT 2021 Ankle CPG with graded loading and balance training; NSAIDs short-term only.',
  },

  icf: {
    bodyStructureFunction: [
      'Lateral ankle pain and swelling',
      'Reduced ankle DF and inversion ROM',
      'Mechanical instability (positive AD, mildly positive talar tilt)',
      'Proprioceptive deficit (single-leg balance)',
    ],
    activityLimitations: [
      'Antalgic gait, partial weight-bearing',
      'Cannot ascend/descend stairs without pain',
      'Cannot run or cut',
    ],
    participationRestrictions: [
      'Off soccer; missing fitness training',
      'Difficulty getting around campus',
    ],
    personalFactors: [
      'Two prior sprains — chronic ankle instability risk',
      'Young, motivated to return to sport',
    ],
    environmentalFactors: [
      'Access to private physio',
      'Soccer team with flexible attendance',
    ],
  },

  management: {
    shortTerm: [
      {
        category: 'self-management',
        intervention: 'POLICE acronym — Protection (boot off ASAP), Optimal Loading (early weight-bearing as tolerated), Ice, Compression, Elevation. Discontinue boot at 5–7 days based on tolerance.',
        rationale: 'JOSPT 2021 Ankle CPG recommends early loading over prolonged immobilisation for Grade I/II sprains.',
        evidenceRefs: ['JOSPT-ANKLE-2021', 'VUURBERG-BJSM-2018'],
      },
      {
        category: 'exercise',
        intervention: 'Pain-free ankle ROM (ABCs, towel scrunches, calf stretch); progress to single-leg balance on firm → foam.',
        doseFrequency: '3 x/day; progress weekly.',
        rationale: 'Strong evidence for early functional rehab + balance training.',
        evidenceRefs: ['JOSPT-ANKLE-2021', 'VUURBERG-BJSM-2018'],
      },
      {
        category: 'manual',
        intervention: 'Talocrural anterior-to-posterior mobilisation (Mulligan) to restore dorsiflexion.',
        doseFrequency: '6 reps x 3 sets, 2 x/week.',
        rationale: 'Manual therapy to restore DF range improves outcomes per CPG.',
        evidenceRefs: ['JOSPT-ANKLE-2021'],
      },
      {
        category: 'education',
        intervention: 'Reassurance about favourable prognosis, importance of progressive loading, taping vs bracing for return-to-sport.',
        rationale: 'Reduces fear of re-injury; brace use during early return reduces re-sprain by ~70%.',
        evidenceRefs: ['VUURBERG-BJSM-2018', 'JOSPT-ANKLE-2021'],
      },
    ],
    longTerm: [
      {
        category: 'exercise',
        intervention: 'Strength (calf, peroneals, gluteals), plyometric and cutting drills with criteria-based progression.',
        doseFrequency: '3 x/week, 4–6 weeks.',
        rationale: 'Reduces chronic ankle instability and re-injury.',
        evidenceRefs: ['JOSPT-ANKLE-2021'],
      },
      {
        category: 'self-management',
        intervention: 'External brace or tape on return to soccer for 6 months; ongoing single-leg balance routine.',
        rationale: 'Strong evidence to reduce recurrent sprains in athletes.',
        evidenceRefs: ['VUURBERG-BJSM-2018'],
      },
    ],
    prognosis: 'Favourable. ~70% return to full sport by 4–6 weeks for Grade II. Two prior sprains increase chronic instability risk — emphasise long-term balance and strength.',
    redFlagsToMonitor: [
      'Inability to weight bear at 1 week → re-screen Ottawa rules',
      'New medial pain (consider deltoid or syndesmotic)',
      'Numbness or distal vascular changes',
    ],
  },

  references: [
    {
      id: 'JOSPT-ANKLE-2021',
      citation:
        'Martin RL et al. Ankle Stability and Movement Coordination Impairments: Lateral Ankle Ligament Sprains. Revision 2021. JOSPT 2021;51(4):CPG1–CPG80.',
      doi: '10.2519/jospt.2021.0302',
      level: 'CPG',
    },
    {
      id: 'OAR-1992',
      citation:
        'Stiell IG et al. A study to develop clinical decision rules for the use of radiography in acute ankle injuries. Ann Emerg Med 1992;21(4):384–390.',
      doi: '10.1016/S0196-0644(05)82656-3',
      level: 'Cohort',
    },
    {
      id: 'VUURBERG-BJSM-2018',
      citation:
        'Vuurberg G et al. Diagnosis, treatment and prevention of ankle sprains: update of an evidence-based clinical guideline. Br J Sports Med 2018;52:956.',
      doi: '10.1136/bjsports-2017-098106',
      level: 'CPG',
    },
    {
      id: 'MAGEE-7E-ANKLE',
      citation: 'Magee DJ. Orthopedic Physical Assessment, 7th ed. Ch. 13. Elsevier 2021.',
      level: 'Textbook',
    },
    {
      id: 'COOK-HEGEDUS-2013',
      citation: 'Cook CE, Hegedus EJ. Orthopedic Physical Examination Tests, 2nd ed.',
      level: 'Textbook',
    },
  ],
};
