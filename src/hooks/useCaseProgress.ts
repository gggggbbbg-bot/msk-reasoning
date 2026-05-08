import { useCallback, useMemo } from 'react';
import { useLocalStorage } from './useLocalStorage';

export type StepId = 'intro' | 'subjective' | 'hypothesis' | 'objective' | 'diagnosis' | 'icf' | 'management' | 'summary';

export const STEP_ORDER: StepId[] = [
  'intro',
  'subjective',
  'hypothesis',
  'objective',
  'diagnosis',
  'icf',
  'management',
  'summary',
];

export interface CaseCommits {
  hypothesis?: { primaryId: string; rationale: string };
  objective?: { selectedTestIds: string[] };
  diagnosis?: { freeText: string };
  icf?: {
    bodyStructureFunction: string[];
    activityLimitations: string[];
    participationRestrictions: string[];
    personalFactors: string[];
    environmentalFactors: string[];
  };
  management?: { selectedCategories: string[] };
}

export interface CaseRecord {
  status: 'not-started' | 'in-progress' | 'complete';
  currentStep: StepId;
  commits: CaseCommits;
  startedAt: string;
  completedAt?: string;
}

export interface StoredProgress {
  version: 1;
  cases: Record<string, CaseRecord>;
  preferences: { fontSize?: 'sm' | 'md' | 'lg' };
}

const STORAGE_KEY = 'msk-reasoning-progress-v1';

const INITIAL: StoredProgress = {
  version: 1,
  cases: {},
  preferences: {},
};

export function useAllProgress() {
  const [progress, setProgress, reset] = useLocalStorage<StoredProgress>(STORAGE_KEY, INITIAL);
  return { progress, setProgress, reset };
}

export function useCaseProgress(caseId: string) {
  const { progress, setProgress } = useAllProgress();

  const record: CaseRecord = useMemo(() => {
    return (
      progress.cases[caseId] ?? {
        status: 'not-started',
        currentStep: 'intro',
        commits: {},
        startedAt: new Date().toISOString(),
      }
    );
  }, [progress, caseId]);

  const updateRecord = useCallback(
    (patch: Partial<CaseRecord>) => {
      setProgress((prev) => {
        const existing =
          prev.cases[caseId] ?? {
            status: 'not-started' as const,
            currentStep: 'intro' as StepId,
            commits: {},
            startedAt: new Date().toISOString(),
          };
        return {
          ...prev,
          cases: {
            ...prev.cases,
            [caseId]: { ...existing, ...patch },
          },
        };
      });
    },
    [caseId, setProgress]
  );

  const setStep = useCallback((step: StepId) => updateRecord({ currentStep: step, status: 'in-progress' }), [updateRecord]);

  const commit = useCallback(
    <K extends keyof CaseCommits>(key: K, value: CaseCommits[K]) => {
      setProgress((prev) => {
        const existing =
          prev.cases[caseId] ?? {
            status: 'not-started' as const,
            currentStep: 'intro' as StepId,
            commits: {},
            startedAt: new Date().toISOString(),
          };
        return {
          ...prev,
          cases: {
            ...prev.cases,
            [caseId]: {
              ...existing,
              status: 'in-progress',
              commits: { ...existing.commits, [key]: value },
            },
          },
        };
      });
    },
    [caseId, setProgress]
  );

  const markComplete = useCallback(() => {
    updateRecord({ status: 'complete', completedAt: new Date().toISOString(), currentStep: 'summary' });
  }, [updateRecord]);

  const resetCase = useCallback(() => {
    setProgress((prev) => {
      const next = { ...prev, cases: { ...prev.cases } };
      delete next.cases[caseId];
      return next;
    });
  }, [caseId, setProgress]);

  return { record, setStep, commit, markComplete, resetCase };
}
