import { useState } from 'react';
import type { Case } from '../../types/case';
import EvidenceCitation from './EvidenceCitation';
import type { CaseCommits } from '../../hooks/useCaseProgress';

type Commit = NonNullable<CaseCommits['hypothesis']>;

export default function HypothesisStep({
  kase,
  committed,
  onCommit,
}: {
  kase: Case;
  committed?: Commit;
  onCommit: (v: Commit) => void;
}) {
  const [pick, setPick] = useState<string>(committed?.primaryId ?? '');
  const [rationale, setRationale] = useState<string>(committed?.rationale ?? '');

  const submitted = !!committed;

  const submit = () => {
    if (!pick || rationale.trim().length < 5) return;
    onCommit({ primaryId: pick, rationale: rationale.trim() });
  };

  return (
    <div className="space-y-5">
      <header>
        <h2 className="text-xl text-brand-800">Hypothesis generation</h2>
        <p className="mt-1 text-sm text-stone-500">
          Based on the history alone, pick the <strong>most likely</strong> primary hypothesis and write a one-line
          rationale. You'll see the expert answer once you submit.
        </p>
      </header>

      <div className="space-y-2">
        {kase.hypotheses.map((h) => (
          <label
            key={h.id}
            className={`block cursor-pointer rounded-md p-3 ring-1 transition ${
              pick === h.id ? 'bg-brand-50 ring-brand-400' : 'bg-white ring-stone-200 hover:bg-stone-50'
            }`}
          >
            <div className="flex items-start gap-2">
              <input
                type="radio"
                name="hypothesis"
                disabled={submitted}
                checked={pick === h.id}
                onChange={() => setPick(h.id)}
                className="mt-1"
              />
              <span className="font-medium text-stone-800">{h.label}</span>
            </div>
          </label>
        ))}
      </div>

      <div>
        <label className="label mb-1">Your one-line rationale</label>
        <textarea
          rows={2}
          className="input"
          placeholder="e.g. Mechanism, distribution, behaviour, and red-flag absence point to..."
          value={rationale}
          onChange={(e) => setRationale(e.target.value)}
          disabled={submitted}
        />
      </div>

      {!submitted ? (
        <button
          className="btn btn-primary"
          onClick={submit}
          disabled={!pick || rationale.trim().length < 5}
        >
          Submit hypothesis
        </button>
      ) : (
        <Reveal kase={kase} learnerPick={committed.primaryId} learnerRationale={committed.rationale} />
      )}
    </div>
  );
}

function Reveal({
  kase,
  learnerPick,
  learnerRationale,
}: {
  kase: Case;
  learnerPick: string;
  learnerRationale: string;
}) {
  const expert = kase.hypotheses.find((h) => h.isPrimary);
  const learner = kase.hypotheses.find((h) => h.id === learnerPick);
  const correct = expert?.id === learnerPick;

  return (
    <div className="space-y-4 border-t border-stone-200 pt-4">
      <div
        className={`rounded-md p-3 text-sm ring-1 ${
          correct ? 'bg-emerald-50 text-emerald-900 ring-emerald-200' : 'bg-amber-50 text-amber-900 ring-amber-200'
        }`}
      >
        <p className="font-medium">
          {correct ? '✓ Same as the expert primary hypothesis.' : 'Different from the expert primary hypothesis.'}
        </p>
        <p className="mt-1">
          <strong>Your pick:</strong> {learner?.label ?? '—'}
        </p>
        <p className="mt-0.5">
          <strong>Your rationale:</strong> <em>{learnerRationale}</em>
        </p>
      </div>

      <h3 className="label">All candidate hypotheses (expert breakdown)</h3>
      <div className="space-y-3">
        {kase.hypotheses.map((h) => (
          <div
            key={h.id}
            className={`rounded-md p-3 ring-1 ${
              h.isPrimary ? 'bg-brand-50 ring-brand-300' : 'bg-stone-50 ring-stone-200'
            }`}
          >
            <div className="flex items-baseline justify-between gap-2">
              <h4 className="font-medium text-stone-800">{h.label}</h4>
              {h.isPrimary && <span className="pill bg-brand-600 text-white">Primary</span>}
            </div>
            <p className="mt-1 text-sm text-stone-700">{h.rationale}</p>
            <div className="mt-2 grid gap-2 text-xs sm:grid-cols-2">
              <div>
                <div className="font-medium text-emerald-700">Supports</div>
                <ul className="ml-4 list-disc space-y-0.5 text-stone-700">
                  {h.supportingFeatures.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="font-medium text-rose-700">Refutes</div>
                <ul className="ml-4 list-disc space-y-0.5 text-stone-700">
                  {h.refutingFeatures.length === 0 ? (
                    <li className="italic text-stone-500 list-none">—</li>
                  ) : (
                    h.refutingFeatures.map((f, i) => <li key={i}>{f}</li>)
                  )}
                </ul>
              </div>
            </div>
            {h.evidenceRefs && h.evidenceRefs.length > 0 && (
              <div className="mt-2 text-xs text-stone-600">
                Evidence: <EvidenceCitation refIds={h.evidenceRefs} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
