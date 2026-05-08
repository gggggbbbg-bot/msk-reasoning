import { useState } from 'react';
import type { Case, ObjectiveTest, TestCategory } from '../../types/case';
import EvidenceCitation from './EvidenceCitation';
import type { CaseCommits } from '../../hooks/useCaseProgress';

type Commit = NonNullable<CaseCommits['objective']>;

const CATEGORY_LABELS: Record<TestCategory, string> = {
  observation: 'Observation',
  AROM: 'Active ROM',
  PROM: 'Passive ROM',
  special: 'Special tests',
  neuro: 'Neuro',
  palpation: 'Palpation',
  functional: 'Functional',
};

export default function ObjectiveTestsStep({
  kase,
  committed,
  onCommit,
}: {
  kase: Case;
  committed?: Commit;
  onCommit: (v: Commit) => void;
}) {
  const [selected, setSelected] = useState<Set<string>>(
    () => new Set(committed?.selectedTestIds ?? [])
  );
  const submitted = !!committed;

  const toggle = (id: string) => {
    if (submitted) return;
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const submit = () => onCommit({ selectedTestIds: Array.from(selected) });

  const grouped = kase.objectiveTests.reduce<Record<string, ObjectiveTest[]>>((acc, t) => {
    (acc[t.category] ||= []).push(t);
    return acc;
  }, {});

  return (
    <div className="space-y-5">
      <header>
        <h2 className="text-xl text-brand-800">Objective examination — test selection</h2>
        <p className="mt-1 text-sm text-stone-500">
          Tick the tests <strong>you</strong> would perform. Some tests in the list may not be useful — selecting
          everything is not the goal. Submit to reveal the expert selection plus results, Sn/Sp/LR.
        </p>
      </header>

      <div className="space-y-4">
        {Object.entries(grouped).map(([cat, tests]) => (
          <div key={cat}>
            <h3 className="label mb-1">{CATEGORY_LABELS[cat as TestCategory]}</h3>
            <ul className="space-y-1.5">
              {tests.map((t) => {
                const checked = selected.has(t.id);
                return (
                  <li key={t.id}>
                    <label
                      className={`flex cursor-pointer items-start gap-2 rounded-md p-2 ring-1 transition ${
                        checked ? 'bg-brand-50 ring-brand-300' : 'bg-white ring-stone-200 hover:bg-stone-50'
                      }`}
                    >
                      <input
                        type="checkbox"
                        disabled={submitted}
                        checked={checked}
                        onChange={() => toggle(t.id)}
                        className="mt-1"
                      />
                      <div className="flex-1 text-sm">
                        <div className="font-medium text-stone-800">{t.name}</div>
                        {submitted && (
                          <TestReveal test={t} learnerSelected={checked} />
                        )}
                      </div>
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      {!submitted ? (
        <button className="btn btn-primary" onClick={submit} disabled={selected.size === 0}>
          Submit test selection ({selected.size} chosen)
        </button>
      ) : (
        <ScorePanel kase={kase} learnerIds={Array.from(selected)} />
      )}
    </div>
  );
}

function TestReveal({ test, learnerSelected }: { test: ObjectiveTest; learnerSelected: boolean }) {
  const match = learnerSelected === test.expertSelected;
  return (
    <div className="mt-1 space-y-1 border-t border-stone-200 pt-1.5">
      <div className="flex flex-wrap items-center gap-2 text-xs">
        <span className={`pill ${test.expertSelected ? 'bg-brand-600 text-white' : 'bg-stone-200 text-stone-700'}`}>
          Expert: {test.expertSelected ? 'Selected' : 'Not selected'}
        </span>
        {match ? (
          <span className="pill bg-emerald-100 text-emerald-700">✓ matches</span>
        ) : (
          <span className="pill bg-amber-100 text-amber-800">≠ differs</span>
        )}
        {typeof test.sensitivity === 'number' && (
          <span className="pill bg-stone-100 text-stone-700">
            Sn {(test.sensitivity * 100).toFixed(0)}%
          </span>
        )}
        {typeof test.specificity === 'number' && (
          <span className="pill bg-stone-100 text-stone-700">
            Sp {(test.specificity * 100).toFixed(0)}%
          </span>
        )}
        {typeof test.lrPositive === 'number' && (
          <span className="pill bg-stone-100 text-stone-700">+LR {test.lrPositive.toFixed(1)}</span>
        )}
        {typeof test.lrNegative === 'number' && (
          <span className="pill bg-stone-100 text-stone-700">−LR {test.lrNegative.toFixed(1)}</span>
        )}
      </div>
      <div className="text-stone-700">
        <strong>Rationale:</strong> {test.rationale}
      </div>
      <div className="text-stone-700">
        <strong>Result:</strong> {test.result}
      </div>
      <div className="text-stone-700">
        <strong>Interpretation:</strong> {test.interpretation}
      </div>
      {test.evidenceRefs && (
        <div className="text-stone-600">
          Evidence: <EvidenceCitation refIds={test.evidenceRefs} />
        </div>
      )}
    </div>
  );
}

function ScorePanel({ kase, learnerIds }: { kase: Case; learnerIds: string[] }) {
  const expertSet = new Set(kase.objectiveTests.filter((t) => t.expertSelected).map((t) => t.id));
  const learnerSet = new Set(learnerIds);

  const truePos = [...expertSet].filter((id) => learnerSet.has(id)).length;
  const missed = [...expertSet].filter((id) => !learnerSet.has(id)).length;
  const overSelected = [...learnerSet].filter((id) => !expertSet.has(id)).length;

  return (
    <div className="rounded-md bg-stone-50 p-3 text-sm ring-1 ring-stone-200">
      <div className="mb-1 font-medium text-stone-800">Selection summary</div>
      <ul className="space-y-0.5 text-stone-700">
        <li>
          <span className="font-medium text-emerald-700">{truePos}</span> matched expert selection
        </li>
        <li>
          <span className="font-medium text-rose-700">{missed}</span> expert tests you did not select
        </li>
        <li>
          <span className="font-medium text-amber-700">{overSelected}</span> tests you selected that are not
          recommended for this presentation
        </li>
      </ul>
    </div>
  );
}
