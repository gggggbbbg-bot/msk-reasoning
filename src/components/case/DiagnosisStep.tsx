import { useState } from 'react';
import type { Case } from '../../types/case';
import type { CaseCommits } from '../../hooks/useCaseProgress';

type Commit = NonNullable<CaseCommits['diagnosis']>;

export default function DiagnosisStep({
  kase,
  committed,
  onCommit,
}: {
  kase: Case;
  committed?: Commit;
  onCommit: (v: Commit) => void;
}) {
  const [text, setText] = useState<string>(committed?.freeText ?? '');
  const submitted = !!committed;

  return (
    <div className="space-y-5">
      <header>
        <h2 className="text-xl text-brand-800">Working diagnosis</h2>
        <p className="mt-1 text-sm text-stone-500">
          Synthesise subjective + objective findings into a clear working diagnosis. One sentence is enough.
        </p>
      </header>

      <div>
        <label className="label mb-1">Your working diagnosis</label>
        <textarea
          rows={3}
          className="input"
          placeholder="e.g. Acute non-specific LBP with right-sided L5 radiculopathy from disc-related mechanism, no red flags, mechanical pattern..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          disabled={submitted}
        />
      </div>

      {!submitted ? (
        <button
          className="btn btn-primary"
          onClick={() => onCommit({ freeText: text.trim() })}
          disabled={text.trim().length < 5}
        >
          Submit diagnosis
        </button>
      ) : (
        <div className="space-y-4 border-t border-stone-200 pt-4">
          <div className="rounded-md bg-stone-50 p-3 text-sm ring-1 ring-stone-200">
            <div className="label">Your answer</div>
            <p className="mt-1 italic text-stone-700">{committed.freeText}</p>
          </div>
          <div className="rounded-md bg-brand-50 p-3 text-sm ring-1 ring-brand-200">
            <div className="label text-brand-700">Expert primary diagnosis</div>
            <p className="mt-1 font-medium text-stone-800">{kase.diagnosis.primary}</p>
            <p className="mt-2 text-stone-700">{kase.diagnosis.reasoning}</p>
          </div>
          <div>
            <h3 className="label mb-1">Differentials excluded</h3>
            <ul className="ml-4 list-disc space-y-0.5 text-sm text-stone-700">
              {kase.diagnosis.differentialsExcluded.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
