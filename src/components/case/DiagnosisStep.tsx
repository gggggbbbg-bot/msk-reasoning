import { useState } from 'react';
import type { Case } from '../../types/case';
import type { CaseCommits } from '../../hooks/useCaseProgress';
import { analyseDiagnosis } from '../../lib/diagnosisFeedback';

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

          {kase.diagnosis.keyElements && kase.diagnosis.keyElements.length > 0 && (
            <Feedback answer={committed.freeText} kase={kase} />
          )}

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

function Feedback({ answer, kase }: { answer: string; kase: Case }) {
  const elements = kase.diagnosis.keyElements!;
  const { matched, missed, score, wordCount } = analyseDiagnosis(answer, elements);
  const pct = Math.round(score * 100);

  const tone =
    score >= 0.75
      ? { bar: 'bg-emerald-500', ring: 'ring-emerald-200', bg: 'bg-emerald-50', text: 'text-emerald-800' }
      : score >= 0.4
      ? { bar: 'bg-amber-500', ring: 'ring-amber-200', bg: 'bg-amber-50', text: 'text-amber-900' }
      : { bar: 'bg-rose-500', ring: 'ring-rose-200', bg: 'bg-rose-50', text: 'text-rose-800' };

  const headline =
    score >= 0.75
      ? 'Strong — you captured most of the key reasoning elements.'
      : score >= 0.4
      ? 'Partial — you got some key elements; a few are missing.'
      : 'Keep going — most key elements are not yet in your answer.';

  return (
    <div className={`rounded-md p-3 text-sm ring-1 ${tone.ring} ${tone.bg}`}>
      <div className="mb-2 flex items-center justify-between gap-2">
        <span className={`font-medium ${tone.text}`}>Feedback on your answer</span>
        <span className={`pill bg-white ${tone.text} ring-1 ${tone.ring}`}>
          {matched.length}/{elements.length} key elements
        </span>
      </div>

      <div className="mb-2 h-2 w-full overflow-hidden rounded-full bg-white ring-1 ring-stone-200">
        <div className={`h-full ${tone.bar}`} style={{ width: `${pct}%` }} />
      </div>

      <p className={`mb-3 ${tone.text}`}>{headline}</p>

      {matched.length > 0 && (
        <div className="mb-2">
          <div className="label text-emerald-700">✓ You mentioned</div>
          <ul className="mt-1 space-y-0.5">
            {matched.map((el) => (
              <li key={el.label} className="flex items-start gap-1.5 text-stone-700">
                <span className="text-emerald-600">✓</span>
                <span>{el.label}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {missed.length > 0 && (
        <div>
          <div className="label text-rose-700">Consider adding</div>
          <ul className="mt-1 space-y-0.5">
            {missed.map((el) => (
              <li key={el.label} className="flex items-start gap-1.5 text-stone-700">
                <span className="text-rose-500">•</span>
                <span>
                  <span className="font-medium">{el.label}</span>
                  <span className="text-stone-500"> — {el.hint}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {wordCount < 6 && (
        <p className="mt-2 text-xs text-stone-500">
          Tip: a fuller sentence (structure, side, mechanism, and what you excluded) gives you more to check against.
        </p>
      )}

      <p className="mt-2 border-t border-stone-200/70 pt-2 text-xs text-stone-500">
        This is an automated concept check based on key terms — use your own judgement and compare with the expert
        answer below.
      </p>
    </div>
  );
}
