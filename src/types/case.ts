export type Region = 'lbp' | 'cervical' | 'headache' | 'ankle' | 'knee';

export const REGION_META: Record<Region, { id: Region; label: string; short: string; description: string }> = {
  lbp: {
    id: 'lbp',
    label: 'Low Back Pain',
    short: 'LBP',
    description: 'Acute, chronic, radiculopathy, stenosis. Classification, red flags, evidence-based management.',
  },
  cervical: {
    id: 'cervical',
    label: 'Cervical Spine',
    short: 'Cervical',
    description: 'Mechanical neck pain, radiculopathy, WAD. Pre-manipulative screening, IFOMPT framework.',
  },
  headache: {
    id: 'headache',
    label: 'Headache',
    short: 'Headache',
    description: 'Cervicogenic, tension-type, migraine. ICHD-3 diagnostic criteria, manual therapy evidence.',
  },
  ankle: {
    id: 'ankle',
    label: 'Ankle',
    short: 'Ankle',
    description: 'Lateral ligament sprain, syndesmotic injury. Ottawa rules, return-to-sport.',
  },
  knee: {
    id: 'knee',
    label: 'Knee',
    short: 'Knee',
    description: 'PFP, meniscus, ACL, OA. Special tests with Sn/Sp/LR, conservative vs surgical pathways.',
  },
};

export type EvidenceLevel = 'CPG' | 'SR' | 'RCT' | 'Cohort' | 'Textbook' | 'Expert';

export interface EvidenceRef {
  id: string;
  citation: string;
  url?: string;
  doi?: string;
  level: EvidenceLevel;
}

export interface RedFlagItem {
  flag: string;
  present: boolean;
  note?: string;
}

export interface Hypothesis {
  id: string;
  label: string;
  supportingFeatures: string[];
  refutingFeatures: string[];
  isPrimary: boolean;
  rationale: string;
  evidenceRefs?: string[];
}

export type TestCategory =
  | 'observation'
  | 'AROM'
  | 'PROM'
  | 'special'
  | 'neuro'
  | 'palpation'
  | 'functional';

export interface ObjectiveTest {
  id: string;
  name: string;
  category: TestCategory;
  rationale: string;
  result: string;
  interpretation: string;
  expertSelected: boolean;
  sensitivity?: number;
  specificity?: number;
  lrPositive?: number;
  lrNegative?: number;
  evidenceRefs?: string[];
}

export interface ICFProblemList {
  bodyStructureFunction: string[];
  activityLimitations: string[];
  participationRestrictions: string[];
  personalFactors: string[];
  environmentalFactors: string[];
}

export type ManagementCategory =
  | 'education'
  | 'manual'
  | 'exercise'
  | 'modality'
  | 'referral'
  | 'self-management';

export interface ManagementItem {
  category: ManagementCategory;
  intervention: string;
  doseFrequency?: string;
  rationale: string;
  evidenceRefs: string[];
}

export interface Case {
  id: string;
  region: Region;
  title: string;
  difficulty: 1 | 2 | 3;
  estimatedMinutes: number;
  learningObjectives: string[];

  demographics: {
    age: number;
    sex: 'M' | 'F' | 'Other';
    occupation: string;
    handedness?: 'R' | 'L';
  };
  referral: string;

  subjective: {
    hpc: string;
    aggravating: string[];
    easing: string[];
    pmh: string[];
    drugHx: string[];
    socialHx: string;
    familyHx?: string;
    redFlagScreen: RedFlagItem[];
    yellowFlags?: string[];
    patientGoals: string[];
  };

  hypotheses: Hypothesis[];
  objectiveTests: ObjectiveTest[];

  diagnosis: {
    primary: string;
    differentialsExcluded: string[];
    reasoning: string;
  };

  icf: ICFProblemList;

  management: {
    shortTerm: ManagementItem[];
    longTerm: ManagementItem[];
    prognosis: string;
    redFlagsToMonitor: string[];
  };

  references: EvidenceRef[];
}
