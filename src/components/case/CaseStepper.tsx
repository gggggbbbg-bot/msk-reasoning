import { useEffect, useMemo } from 'react';
import type { Case } from '../../types/case';
import { STEP_ORDER, useCaseProgress, type StepId } from '../../hooks/useCaseProgress';
import IntroStep from './IntroStep';
import SubjectiveStep from './SubjectiveStep';
import HypothesisStep from './HypothesisStep';
import ObjectiveTestsStep from './ObjectiveTestsStep';
import DiagnosisStep from './DiagnosisStep';
import ICFStep from './ICFStep';
import ManagementStep from './ManagementStep';
import SummaryStep from './SummaryStep';

const STEP_LABELS: Record<StepId, string> = {
  intro: 'Intro',
  subjective: 'Subjective',
  hypothesis: 'Hypothesis',
  objective: 'Objective',
  diagnosis: 'Diagnosis',
  icf: 'ICF',
  management: 'Management',
  summary: 'Summary',
};

const ACTIVE_STEPS: StepId[] = ['hypothesis', 'objective', 'diagnosis', 'icf', 'management'];

export default function CaseStepper({ kase }: { kase: Case }) {
  const { record, setStep, commit, markComplete } = useCaseProgress(kase.id);

  const stepIndex = STEP_ORDER.indexOf(record.currentStep);

  const isCommitted = useMemo(() => {
    return {
      hypothesis: !!record.commits.hypothesis,
      objective: !!record.commits.objective,
      diagnosis: !!record.commits.diagnosis,
      icf: !!record.commits.icf,
      management: !!record.commits.management,
    };
  }, [record.commits]);

  useEffect(() => {
    if (record.status === 'not-started') {
      setStep('intro');
    }
  }, [record.status, setStep]);

  const goNext = () => {
    const next = STEP_ORDER[stepIndex + 1];
    if (next) {
      setStep(next);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const goPrev = () => {
    const prev = STEP_ORDER[stepIndex - 1];
    if (prev) {
      setStep(prev);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const canAdvance = () => {
    const cur = record.currentStep;
    if (ACTIVE_STEPS.includes(cur)) return isCommitted[cur as keyof typeof isCommitted];
    return true;
  };

  return (
    <div className="space-y-4">
      <StepNav currentStep={record.currentStep} commits={isCommitted} onJump={setStep} />

      <div className="card">
        {record.currentStep === 'intro' && <IntroStep kase={kase} />}
        {record.currentStep === 'subjective' && <SubjectiveStep kase={kase} />}
        {record.currentStep === 'hypothesis' && (
          <HypothesisStep
            kase={kase}
            committed={record.commits.hypothesis}
            onCommit={(v) => commit('hypothesis', v)}
          />
        )}
        {record.currentStep === 'objective' && (
          <ObjectiveTestsStep
            kase={kase}
            committed={record.commits.objective}
            onCommit={(v) => commit('objective', v)}
          />
        )}
        {record.currentStep === 'diagnosis' && (
          <DiagnosisStep
            kase={kase}
            committed={record.commits.diagnosis}
            onCommit={(v) => commit('diagnosis', v)}
          />
        )}
        {record.currentStep === 'icf' && (
          <ICFStep kase={kase} committed={record.commits.icf} onCommit={(v) => commit('icf', v)} />
        )}
        {record.currentStep === 'management' && (
          <ManagementStep
            kase={kase}
            committed={record.commits.management}
            onCommit={(v) => commit('management', v)}
          />
        )}
        {record.currentStep === 'summary' && (
          <SummaryStep kase={kase} commits={record.commits} onMarkComplete={markComplete} status={record.status} />
        )}
      </div>

      <div className="flex items-center justify-between pt-2">
        <button
          className="btn btn-ghost"
          onClick={goPrev}
          disabled={stepIndex === 0}
        >
          ← Back
        </button>
        <span className="text-xs text-stone-500">
          Step {stepIndex + 1} of {STEP_ORDER.length}
        </span>
        {record.currentStep !== 'summary' ? (
          <button
            className="btn btn-primary"
            onClick={goNext}
            disabled={!canAdvance()}
            title={!canAdvance() ? 'Submit your answer on this step to continue.' : undefined}
          >
            Next →
          </button>
        ) : (
          <span className="w-20" />
        )}
      </div>
    </div>
  );
}

function StepNav({
  currentStep,
  commits,
  onJump,
}: {
  currentStep: StepId;
  commits: Record<string, boolean>;
  onJump: (s: StepId) => void;
}) {
  return (
    <ol className="grid grid-cols-4 gap-1 sm:grid-cols-8">
      {STEP_ORDER.map((s) => {
        const isCurrent = s === currentStep;
        const committed = commits[s];
        return (
          <li key={s}>
            <button
              onClick={() => onJump(s)}
              className={`w-full rounded-md px-2 py-1.5 text-center text-[11px] font-medium transition ${
                isCurrent
                  ? 'bg-brand-600 text-white'
                  : committed
                  ? 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              {STEP_LABELS[s]}
              {committed && !isCurrent && <span className="ml-1">✓</span>}
            </button>
          </li>
        );
      })}
    </ol>
  );
}
