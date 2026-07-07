import type { Case } from '../../../types/case';

export const knee02: Case = {
  id: 'knee-02-acl',
  region: 'knee',
  title: 'Acute ACL rupture in a basketballer (non-contact pivot)',
  difficulty: 3,
  estimatedMinutes: 16,
  learningObjectives: [
    'Recognise the classic non-contact pivot mechanism, audible "pop" and rapid effusion of ACL injury.',
    'Apply Lachman, anterior drawer and pivot shift with their relative diagnostic accuracy.',
    'Plan early conservative care while triaging surgical opinion (per JOSPT 2017 ACL CPG).',
  ],

  demographics: { age: 19, sex: 'F', occupation: 'University student; semi-elite basketballer (state league)', handedness: 'R' },

  referral:
    'Emergency department review one day post-injury. 19 yo female with non-contact knee injury during a basketball game. Effusion within 1 hour. Walking with crutches. X-ray normal. Please assess and advise.',

  subjective: {
    hpc:
      'Landed from a jump shot and pivoted on a planted left foot. Heard an audible "pop", immediate severe pain and inability to continue play. Rapid effusion within 60 minutes. Currently 5/10 at rest, 8/10 with weight-bearing. Sensation of giving way when attempting to weight bear.',
    aggravating: ['Weight-bearing', 'Twisting / pivoting', 'Stairs'],
    easing: ['Crutches and offloading', 'Ice', 'Elevation'],
    pmh: ['Nil significant; menstrual cycle regular'],
    drugHx: ['Paracetamol/ibuprofen prn'],
    socialHx: 'Lives in residential college, plays state-level basketball ~10 h/week. Strong sport identity.',
    redFlagScreen: [
      { flag: 'Open wound / vascular compromise', present: false },
      { flag: 'Severe deformity', present: false },
      { flag: 'Bony tenderness suggesting fracture (Ottawa knee rules)', present: false },
      { flag: 'Inability to weight bear immediately AND in clinic', present: false, note: 'Crutch-assisted partial WB' },
      { flag: 'Constitutional symptoms', present: false },
    ],
    yellowFlags: ['High sport identity — strong drive to return; risk of re-injury if too early'],
    patientGoals: ['Understand surgery vs conservative options', 'Return to basketball within 9 months', 'Maintain academic year'],
  },

  hypotheses: [
    {
      id: 'hyp-acl',
      label: 'Anterior cruciate ligament (ACL) rupture',
      isPrimary: true,
      supportingFeatures: [
        'Non-contact pivot mechanism on planted foot',
        'Audible "pop" and immediate inability to continue',
        'Rapid effusion (<2 h)',
        'Sensation of giving way',
      ],
      refutingFeatures: [],
      rationale: 'Classic ACL presentation. Confirm with Lachman (high sensitivity) and pivot shift (high specificity).',
      evidenceRefs: ['JOSPT-ACL-2017', 'COOK-HEGEDUS-2013'],
    },
    {
      id: 'hyp-meniscal',
      label: 'Acute meniscal tear (often co-injury)',
      isPrimary: false,
      supportingFeatures: ['Twisting injury', 'Effusion'],
      refutingFeatures: ['Effusion much faster than typical isolated meniscal tear (rapid effusion suggests haemarthrosis)'],
      rationale: 'Often co-occurs with ACL rupture; confirm with McMurray/Thessaly.',
      evidenceRefs: ['JOSPT-MENISCUS-2018'],
    },
    {
      id: 'hyp-mcl',
      label: 'MCL sprain',
      isPrimary: false,
      supportingFeatures: ['Pivoting injury'],
      refutingFeatures: ['No valgus mechanism described', 'No medial pain'],
      rationale: 'Less likely without valgus loading or medial tenderness; check valgus stress at 0° and 30°.',
      evidenceRefs: ['MAGEE-7E-KNEE'],
    },
    {
      id: 'hyp-patdisl',
      label: 'Lateral patellar dislocation (relocated)',
      isPrimary: false,
      supportingFeatures: ['Pivot mechanism', 'Effusion', '"Pop" feeling'],
      refutingFeatures: ['No medial tenderness over MPFL', 'No apprehension on lateral patellar glide expected'],
      rationale: 'Possible — confirm with apprehension test.',
      evidenceRefs: ['MAGEE-7E-KNEE'],
    },
  ],

  objectiveTests: [
    {
      id: 't-effusion',
      name: 'Patellar tap / sweep test',
      category: 'observation',
      rationale: 'Quantify effusion (haemarthrosis suggests intra-articular bleeding — ACL/fracture).',
      result: 'Large effusion (3+).',
      interpretation: 'Consistent with haemarthrosis from ACL rupture.',
      expertSelected: true,
      evidenceRefs: ['JOSPT-ACL-2017'],
    },
    {
      id: 't-lachman',
      name: 'Lachman test',
      category: 'special',
      rationale: 'Most sensitive test for ACL rupture.',
      result: 'Positive — 1+ anterior translation with soft end-feel.',
      interpretation: 'Supports ACL rupture.',
      expertSelected: true,
      sensitivity: 0.85,
      specificity: 0.94,
      lrPositive: 14.2,
      lrNegative: 0.16,
      evidenceRefs: ['COOK-HEGEDUS-2013'],
    },
    {
      id: 't-anteriordraw',
      name: 'Anterior drawer test',
      category: 'special',
      rationale: 'Less sensitive in acute setting due to guarding/effusion.',
      result: 'Equivocal due to muscle guarding.',
      interpretation: 'Limited diagnostic value acutely; rely on Lachman.',
      expertSelected: true,
      sensitivity: 0.55,
      specificity: 0.92,
      evidenceRefs: ['COOK-HEGEDUS-2013'],
    },
    {
      id: 't-pivot',
      name: 'Pivot shift test',
      category: 'special',
      rationale: 'Highest specificity for ACL — best done under anaesthesia, often deferred in acute clinic.',
      result: 'Not performed (acute pain/guarding).',
      interpretation: 'Defer to surgical assessment if needed.',
      expertSelected: false,
      sensitivity: 0.24,
      specificity: 0.98,
      evidenceRefs: ['COOK-HEGEDUS-2013'],
    },
    {
      id: 't-okr',
      name: 'Ottawa Knee Rules',
      category: 'special',
      rationale: 'Decision rule for x-ray indication.',
      result: 'Negative on all five criteria; x-ray already done — clear.',
      interpretation: 'No bony injury.',
      expertSelected: true,
      sensitivity: 0.98,
      specificity: 0.49,
      evidenceRefs: ['OKR-1995'],
    },
    {
      id: 't-mcmurray',
      name: 'McMurray test',
      category: 'special',
      rationale: 'Screen for meniscal co-injury.',
      result: 'Equivocal — guarding limits assessment; mild medial joint line tenderness on palpation.',
      interpretation: 'Possible medial meniscal involvement; reassess at 2 weeks.',
      expertSelected: true,
      sensitivity: 0.55,
      specificity: 0.77,
      evidenceRefs: ['COOK-HEGEDUS-2013'],
    },
    {
      id: 't-valgus',
      name: 'Valgus stress at 0° and 30°',
      category: 'special',
      rationale: 'Screen MCL.',
      result: 'Negative bilaterally.',
      interpretation: 'Excludes significant MCL injury.',
      expertSelected: true,
      evidenceRefs: ['COOK-HEGEDUS-2013'],
    },
    {
      id: 't-apprehension',
      name: 'Patellar apprehension test',
      category: 'special',
      rationale: 'Screen for prior lateral patellar dislocation.',
      result: 'Negative.',
      interpretation: 'Reduces patellar dislocation probability.',
      expertSelected: true,
      evidenceRefs: ['MAGEE-7E-KNEE'],
    },
  ],

  diagnosis: {
    primary: 'Right ACL rupture (high probability based on mechanism + Lachman positive + haemarthrosis), with possible medial meniscal tear (to confirm).',
    keyElements: [
      { label: 'ACL', synonyms: ['acl', 'anterior cruciate'], hint: 'Which ligament?' },
      { label: 'Rupture / tear', synonyms: ['ruptur', 'tear', 'torn'], hint: 'What injury type?' },
      { label: 'Supporting signs (haemarthrosis / pivot / Lachman)', synonyms: ['haemarthrosis', 'hemarthrosis', 'effusion', 'pivot', 'non-contact', 'pop', 'lachman'], hint: 'What findings support it?' },
      { label: 'Meniscal co-injury considered', synonyms: ['meniscal', 'meniscus'], hint: 'Any likely co-injury?' },
    ],
    differentialsExcluded: [
      'Bony injury (Ottawa rules negative; x-ray clear)',
      'MCL injury (negative valgus)',
      'Patellar dislocation (negative apprehension)',
    ],
    reasoning:
      'Lachman positivity has +LR ~14 in acute knee injury. Combined with classic mechanism and haemarthrosis, ACL rupture is the leading diagnosis. Confirmation by MRI and orthopaedic review will guide reconstruction vs conservative management decision (the COMPARE / KANON pathway).',
  },

  icf: {
    bodyStructureFunction: [
      'Knee haemarthrosis (3+ effusion)',
      'ACL deficiency on Lachman',
      'Reduced knee ROM (full extension and 90° flexion guarded)',
      'Quadriceps inhibition',
    ],
    activityLimitations: [
      'Cannot weight-bear without crutches',
      'Cannot pivot or run',
      'Stairs limited',
    ],
    participationRestrictions: [
      'Off basketball',
      'Difficulty attending classes',
      'Sport identity disruption',
    ],
    personalFactors: [
      'Young, female, jumping/cutting sport — high re-rupture risk if early return',
      'High sport identity',
      'Strong motivation',
    ],
    environmentalFactors: [
      'Access to private physio + university health',
      'College accommodation (stairs)',
      'Coach involvement',
    ],
  },

  management: {
    shortTerm: [
      {
        category: 'self-management',
        intervention: 'Crutches (PWB → FWB as quad control returns), ice, compression. Knee brace for comfort if needed.',
        rationale: 'Symptom control; quad inhibition is common after ACL rupture.',
        evidenceRefs: ['JOSPT-ACL-2017'],
      },
      {
        category: 'exercise',
        intervention: 'Quadriceps activation (SLR, quad sets, NMES if needed), full extension drills, gentle ROM.',
        doseFrequency: '3 x/day in week 1.',
        rationale: 'Restoring full extension and quad activation early reduces post-op stiffness if surgery proceeds.',
        evidenceRefs: ['JOSPT-ACL-2017'],
      },
      {
        category: 'education',
        intervention: 'Explain natural history of ACL injury, surgical vs conservative pathways, importance of early prehab.',
        rationale: 'Informed patient choice and adherence to prehab improves outcomes regardless of surgical decision.',
        evidenceRefs: ['JOSPT-ACL-2017'],
      },
      {
        category: 'referral',
        intervention: 'Refer for MRI and orthopaedic surgical opinion within 1–2 weeks.',
        rationale: 'High-level athlete with cutting/pivoting sport — typically considered for ACL reconstruction; conservative pathway is also evidence-based for some patients.',
        evidenceRefs: ['JOSPT-ACL-2017'],
      },
    ],
    longTerm: [
      {
        category: 'exercise',
        intervention: 'Structured ACL prehab/rehab programme (e.g., Cincinnati or KNEE-ACL) with criteria-based RTS at 9–12 months including hop tests, LSI ≥ 90%, psychological readiness (ACL-RSI).',
        rationale: 'Returning before 9 months and below LSI 90% is associated with high re-rupture rates.',
        evidenceRefs: ['JOSPT-ACL-2017'],
      },
      {
        category: 'education',
        intervention: 'Discuss re-injury risk and prevention (ongoing landing/cutting training, neuromuscular warm-ups like FIFA 11+ or KNEE).',
        rationale: 'Re-rupture rates ~15–25% within 2 years if not addressed.',
        evidenceRefs: ['JOSPT-ACL-2017'],
      },
    ],
    prognosis: 'With surgery + structured rehab, return-to-pivoting sport at 9–12 months is realistic. Conservative management is feasible for non-pivoting goals. Re-injury risk high without comprehensive rehab and neuromuscular training.',
    redFlagsToMonitor: [
      'Locking or block to extension (bucket-handle meniscal tear)',
      'Calf swelling, increased pain, dyspnoea (DVT)',
      'Increasing effusion or warmth (haemarthrosis or infection)',
    ],
  },

  references: [
    {
      id: 'JOSPT-ACL-2017',
      citation:
        'Logerstedt DS et al. Knee Stability and Movement Coordination Impairments: Knee Ligament Sprain Revision 2017. JOSPT 2017;47(11):A1–A47.',
      doi: '10.2519/jospt.2017.0303',
      level: 'CPG',
    },
    {
      id: 'JOSPT-MENISCUS-2018',
      citation:
        'Logerstedt DS et al. Meniscal and Articular Cartilage Lesions CPG. JOSPT 2018;48(2):A1–A50.',
      doi: '10.2519/jospt.2018.0301',
      level: 'CPG',
    },
    {
      id: 'OKR-1995',
      citation:
        'Stiell IG et al. Implementation of the Ottawa Knee Rule. JAMA 1997;278(23):2075–2079.',
      doi: '10.1001/jama.278.23.2075',
      level: 'Cohort',
    },
    {
      id: 'MAGEE-7E-KNEE',
      citation: 'Magee DJ. Orthopedic Physical Assessment, 7th ed. Ch. 12. Elsevier 2021.',
      level: 'Textbook',
    },
    {
      id: 'COOK-HEGEDUS-2013',
      citation: 'Cook CE, Hegedus EJ. Orthopedic Physical Examination Tests, 2nd ed.',
      level: 'Textbook',
    },
  ],
};
