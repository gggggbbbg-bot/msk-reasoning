import type { Case } from '../../../types/case';

export const ankle02: Case = {
  id: 'ankle-02-syndesmosis',
  region: 'ankle',
  title: 'High ankle (syndesmotic) sprain in a netballer',
  difficulty: 3,
  estimatedMinutes: 16,
  learningObjectives: [
    'Recognise the dorsiflexion-eversion mechanism of syndesmotic injury.',
    'Differentiate high ankle from lateral ankle sprain through specific tests.',
    'Plan a longer rehabilitation timeline reflecting syndesmotic pathophysiology.',
  ],

  demographics: { age: 28, sex: 'F', occupation: 'Primary school teacher; competitive netballer' },

  referral:
    'GP referral. 28 yo female, 1 week post-injury during a netball game (foot planted, opponent fell on her). X-ray reported as "no fracture". Continued pain on push-off and difficulty running.',

  subjective: {
    hpc:
      'Dorsiflexion-eversion mechanism — foot was planted, opponent fell across the leg. Immediate anterolateral ankle pain. Walking but with marked pain on push-off and running. NPRS 4/10 walking, 8/10 running. Mild anterolateral ankle swelling. No bruising.',
    aggravating: ['Push-off / toe-off', 'Running', 'Squatting deep', 'Stairs ascending'],
    easing: ['Resting in slight plantarflexion', 'Ice'],
    pmh: ['One prior contralateral ankle sprain — recovered'],
    drugHx: ['Ibuprofen prn'],
    socialHx: 'Lives in regional NSW, married, two young kids. Plays netball Saturdays in local A-grade.',
    redFlagScreen: [
      { flag: 'Bony tenderness over posterior 6 cm or tip of lateral malleolus', present: false },
      { flag: 'Bony tenderness over posterior 6 cm or tip of medial malleolus', present: false },
      { flag: 'Bony tenderness at navicular / base of 5th MT', present: false },
      { flag: 'Inability to weight bear', present: false },
      { flag: 'High-energy mechanism', present: false, note: 'Sport injury, not high-energy' },
      { flag: 'Maisonneuve fracture (proximal fibular tenderness)', present: false, note: 'Confirmed not tender' },
    ],
    yellowFlags: ['Frustrated with prolonged recovery'],
    patientGoals: ['Return to netball mid-season', 'Walk pain-free in 2 weeks', 'Resume PE class supervision'],
  },

  hypotheses: [
    {
      id: 'hyp-syndesm',
      label: 'Syndesmotic (high) ankle sprain — distal anterior tibiofibular ligament',
      isPrimary: true,
      supportingFeatures: [
        'Dorsiflexion-eversion mechanism',
        'Anterolateral ankle pain on push-off',
        'Pain on dorsiflexion in single-leg stance',
        'Mild swelling without lateral bruising',
      ],
      refutingFeatures: [],
      rationale: 'Classic mechanism and pain location for distal AITFL injury. Confirm with squeeze, ER stress, and DF compression tests.',
      evidenceRefs: ['JOSPT-ANKLE-2021', 'VUURBERG-BJSM-2018'],
    },
    {
      id: 'hyp-lateral',
      label: 'Lateral ankle (ATFL) sprain',
      isPrimary: false,
      supportingFeatures: ['Sport ankle injury'],
      refutingFeatures: ['Mechanism is DF-eversion (not inversion)', 'Pain anterolateral, not over ATFL'],
      rationale: 'Mechanism mismatch. AD test will likely be negative.',
      evidenceRefs: ['JOSPT-ANKLE-2021'],
    },
    {
      id: 'hyp-deltoid',
      label: 'Medial (deltoid) ligament sprain',
      isPrimary: false,
      supportingFeatures: ['Eversion component'],
      refutingFeatures: ['Pain anterolateral, not medial', 'No medial swelling'],
      rationale: 'Possible co-injury but not primary.',
      evidenceRefs: ['MAGEE-7E-ANKLE'],
    },
    {
      id: 'hyp-maisonneuve',
      label: 'Maisonneuve fracture (proximal fibular fracture with syndesmotic disruption)',
      isPrimary: false,
      supportingFeatures: ['Syndesmotic-type mechanism'],
      refutingFeatures: ['No proximal fibular tenderness', 'Walking unaided'],
      rationale: 'Excluded clinically — but always palpate full length of fibula in suspected syndesmotic injuries.',
      evidenceRefs: ['JOSPT-ANKLE-2021'],
    },
  ],

  objectiveTests: [
    {
      id: 't-squeeze',
      name: 'Squeeze test',
      category: 'special',
      rationale: 'Compresses tibia/fibula at mid-calf — pain at distal syndesmosis is provocative.',
      result: 'Positive — anterolateral ankle pain reproduced.',
      interpretation: 'Supports syndesmotic injury.',
      expertSelected: true,
      sensitivity: 0.3,
      specificity: 0.93,
      lrPositive: 4.3,
      evidenceRefs: ['COOK-HEGEDUS-2013', 'JOSPT-ANKLE-2021'],
    },
    {
      id: 't-erstress',
      name: 'External rotation (Kleiger) stress test',
      category: 'special',
      rationale: 'Stresses the syndesmosis directly.',
      result: 'Positive — reproduces familiar pain at distal anterior syndesmosis.',
      interpretation: 'Supports syndesmotic injury.',
      expertSelected: true,
      sensitivity: 0.71,
      specificity: 0.63,
      evidenceRefs: ['COOK-HEGEDUS-2013', 'JOSPT-ANKLE-2021'],
    },
    {
      id: 't-dfcomp',
      name: 'Dorsiflexion-compression test',
      category: 'special',
      rationale: 'Compresses talus into mortise; relief with mortise compression supports syndesmotic injury.',
      result: 'Positive — DF range increases by ~10° with manual mortise compression.',
      interpretation: 'Supports syndesmotic widening / instability.',
      expertSelected: true,
      evidenceRefs: ['JOSPT-ANKLE-2021'],
    },
    {
      id: 't-fibula',
      name: 'Full-length fibular palpation',
      category: 'palpation',
      rationale: 'Rule out Maisonneuve fracture.',
      result: 'No proximal fibular tenderness.',
      interpretation: 'Excludes Maisonneuve fracture.',
      expertSelected: true,
      evidenceRefs: ['JOSPT-ANKLE-2021'],
    },
    {
      id: 't-anteriordraw',
      name: 'Anterior drawer test',
      category: 'special',
      rationale: 'Test ATFL integrity (differential).',
      result: 'Negative.',
      interpretation: 'Reduces likelihood of lateral ankle sprain.',
      expertSelected: true,
      evidenceRefs: ['COOK-HEGEDUS-2013'],
    },
    {
      id: 't-arom',
      name: 'Ankle AROM (DF in particular)',
      category: 'AROM',
      rationale: 'Quantify DF deficit and pain on push-off.',
      result: 'Weight-bearing DF (knee-to-wall) 6 cm R vs 12 cm L; reproduces anterolateral pain.',
      interpretation: 'Marked DF deficit fits syndesmotic pattern.',
      expertSelected: true,
      evidenceRefs: ['JOSPT-ANKLE-2021'],
    },
    {
      id: 't-singleheel',
      name: 'Single-leg heel raise (height + pain)',
      category: 'functional',
      rationale: 'Functional baseline; load through ankle complex.',
      result: 'Painful at top range; height reduced 50% R vs L.',
      interpretation: 'Functional impairment — return-to-sport target.',
      expertSelected: true,
      evidenceRefs: ['JOSPT-ANKLE-2021'],
    },
    {
      id: 't-talartilt',
      name: 'Talar tilt',
      category: 'special',
      rationale: 'Tests CFL.',
      result: 'Negative.',
      interpretation: 'Reduces lateral ligament involvement.',
      expertSelected: false,
      evidenceRefs: ['COOK-HEGEDUS-2013'],
    },
  ],

  diagnosis: {
    primary: 'Right distal syndesmotic (high ankle) sprain (Grade I–II) without diastasis on x-ray.',
    keyElements: [
      { label: 'Syndesmotic / high ankle', synonyms: ['syndesmo', 'high ankle', 'aitfl', 'tibiofibular'], hint: 'Which structure? (mechanism is DF-eversion)' },
      { label: 'Sprain', synonyms: ['sprain'], hint: 'What injury type?' },
      { label: 'Fracture / Maisonneuve excluded', synonyms: ['no fracture', 'maisonneuve', 'no diastasis', 'fracture excluded'], hint: 'Did you exclude fracture / Maisonneuve?' },
    ],
    differentialsExcluded: [
      'Lateral ankle sprain (negative AD; mechanism mismatch)',
      'Maisonneuve fracture (no proximal fibular tenderness)',
      'Deltoid sprain (no medial pain)',
      'Osteochondral lesion (not currently — to consider if no improvement)',
    ],
    reasoning:
      'DF-eversion mechanism, anterolateral pain pattern, and 3 positive syndesmosis tests (squeeze, ER, DF-compression) localise the injury to the distal syndesmosis. X-ray-confirmed absence of fracture/diastasis allows conservative care with a longer recovery timeline (typically 6–10 weeks) than a lateral sprain.',
  },

  icf: {
    bodyStructureFunction: [
      'Anterolateral ankle pain at distal syndesmosis',
      'Reduced weight-bearing DF (6 cm vs 12 cm)',
      'Reduced single-leg heel raise capacity',
    ],
    activityLimitations: [
      'Cannot run or cut',
      'Difficulty squatting and climbing stairs',
      'Pain on push-off',
    ],
    participationRestrictions: [
      'Off netball',
      'Limited PE supervision at school',
      'Reduced ability to play with kids',
    ],
    personalFactors: [
      'Active, motivated to return to sport',
      'Mid-season frustration — manage expectations',
    ],
    environmentalFactors: [
      'Regional access to physiotherapy (consider tele-physio if needed)',
      'Supportive school',
    ],
  },

  management: {
    shortTerm: [
      {
        category: 'self-management',
        intervention: 'Walking boot 1–2 weeks if push-off pain >5/10; transition to running shoe with heel lift/tape as tolerated.',
        rationale: 'Syndesmotic sprains benefit from initial offloading more than lateral sprains.',
        evidenceRefs: ['JOSPT-ANKLE-2021', 'VUURBERG-BJSM-2018'],
      },
      {
        category: 'exercise',
        intervention: 'Calf raise progression in pain-free range; isometric inversion/eversion; gentle DF mobility.',
        doseFrequency: '2 x/day, progress weekly.',
        rationale: 'Maintains capacity while syndesmosis heals.',
        evidenceRefs: ['JOSPT-ANKLE-2021'],
      },
      {
        category: 'education',
        intervention: 'Set realistic timeline (6–10 weeks to full sport); return-to-sport criteria-based.',
        rationale: 'Premature return is the leading cause of recurrent symptoms.',
        evidenceRefs: ['JOSPT-ANKLE-2021'],
      },
    ],
    longTerm: [
      {
        category: 'exercise',
        intervention: 'Progressive plyometric and change-of-direction programme; netball-specific skills (defensive footwork, lay-up).',
        doseFrequency: '3 x/week from week 4–10.',
        rationale: 'Criteria-based progression reduces re-injury.',
        evidenceRefs: ['JOSPT-ANKLE-2021', 'VUURBERG-BJSM-2018'],
      },
      {
        category: 'self-management',
        intervention: 'Tape or brace for return to netball for 6 months; ongoing balance routine.',
        rationale: 'Reduces recurrent ankle injury.',
        evidenceRefs: ['VUURBERG-BJSM-2018'],
      },
      {
        category: 'referral',
        intervention: 'Refer for orthopaedic review if ER stress remains positive at 4–6 weeks or instability persists — possible occult diastasis or Grade III injury needing fixation.',
        rationale: 'High-grade syndesmotic injury may require surgical stabilisation.',
        evidenceRefs: ['JOSPT-ANKLE-2021'],
      },
    ],
    prognosis: 'Generally good with conservative care for Grade I–II syndesmotic sprains, but recovery is twice as long as lateral sprains. Manage expectations and progress on criteria, not weeks.',
    redFlagsToMonitor: [
      'Persistent ER stress positivity past 6 weeks',
      'New proximal fibular pain (Maisonneuve)',
      'Locking, catching (osteochondral)',
    ],
  },

  references: [
    {
      id: 'JOSPT-ANKLE-2021',
      citation:
        'Martin RL et al. Lateral Ankle Ligament Sprains CPG. Revision 2021. JOSPT 2021;51(4):CPG1–CPG80. (also covers syndesmotic considerations)',
      doi: '10.2519/jospt.2021.0302',
      level: 'CPG',
    },
    {
      id: 'VUURBERG-BJSM-2018',
      citation: 'Vuurberg G et al. Ankle sprain CPG update. Br J Sports Med 2018;52:956.',
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
