import { useMemo, useState } from 'react';
import type { Case, ICFProblemList } from '../../types/case';
import type { CaseCommits } from '../../hooks/useCaseProgress';

type Commit = NonNullable<CaseCommits['icf']>;

const BUCKETS: { key: keyof ICFProblemList; label: string; hint: string }[] = [
  {
    key: 'bodyStructureFunction',
    label: 'Body structure & function',
    hint: 'Pain, ROM, strength, joint integrity, sensation.',
  },
  {
    key: 'activityLimitations',
    label: 'Activity limitations',
    hint: 'Walking, sitting tolerance, lifting, stairs.',
  },
  {
    key: 'participationRestrictions',
    label: 'Participation restrictions',
    hint: 'Work, sport, community/family roles.',
  },
  {
    key: 'personalFactors',
    label: 'Personal factors',
    hint: 'Beliefs, prior experience, fitness, motivation, age.',
  },
  {
    key: 'environmentalFactors',
    label: 'Environmental factors',
    hint: 'Workplace, equipment, supports, healthcare access.',
  },
];

const EMPTY: Commit = {
  bodyStructureFunction: [''],
  activityLimitations: [''],
  participationRestrictions: [''],
  personalFactors: [''],
  environmentalFactors: [''],
};

export default function ICFStep({
  kase,
  committed,
  onCommit,
}: {
  kase: Case;
  committed?: Commit;
  onCommit: (v: Commit) => void;
}) {
  const [draft, setDraft] = useState<Commit>(() => committed ?? EMPTY);
  const submitted = !!committed;

  const filledCount = useMemo(
    () => BUCKETS.filter((b) => (draft[b.key] ?? []).some((x) => x.trim())).length,
    [draft]
  );

  const update = (key: keyof ICFProblemList, value: string) => {
    setDraft((d) => ({ ...d, [key]: value.split('\n') }));
  };

  const submit = () => {
    const cleaned: Commit = {
      bodyStructureFunction: draft.bodyStructureFunction.map((x) => x.trim()).filter(Boolean),
      activityLimitations: draft.activityLimitations.map((x) => x.trim()).filter(Boolean),
      participationRestrictions: draft.participationRestrictions.map((x) => x.trim()).filter(Boolean),
      personalFactors: draft.personalFactors.map((x) => x.trim()).filter(Boolean),
      environmentalFactors: draft.environmentalFactors.map((x) => x.trim()).filter(Boolean),
    };
    onCommit(cleaned);
  };

  return (
    <div className="space-y-5">
      <header>
        <h2 className="text-xl text-brand-800">ICF problem list</h2>
        <p className="mt-1 text-sm text-stone-500">
          Map this patient's problems into the five ICF buckets. One item per line — at least 1 in each is required.
          Reveal the expert mapping after submission.
        </p>
      </header>

      <div className="grid gap-3 md:grid-cols-2">
        {BUCKETS.map((b) => (
          <div key={b.key} className="rounded-md ring-1 ring-stone-200">
            <div className="rounded-t-md bg-brand-50 px-3 py-2 text-sm font-medium text-brand-800">
              {b.label}
              <span className="ml-1 text-xs font-normal text-stone-500">— {b.hint}</span>
            </div>
            <textarea
              rows={4}
              className="block w-full resize-y rounded-b-md border-0 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-200"
              placeholder={`One ${b.label.toLowerCase()} per line...`}
              value={(draft[b.key] ?? []).join('\n')}
              onChange={(e) => update(b.key, e.target.value)}
              disabled={submitted}
            />
          </div>
        ))}
      </div>

      {!submitted ? (
        <button className="btn btn-primary" onClick={submit} disabled={filledCount < 5}>
          Submit ICF problem list ({filledCount}/5 buckets filled)
        </button>
      ) : (
        <Reveal expert={kase.icf} learner={committed} />
      )}
    </div>
  );
}

function Reveal({ expert, learner }: { expert: ICFProblemList; learner: Commit }) {
  return (
    <div className="border-t border-stone-200 pt-4">
      <h3 className="label mb-2">Side-by-side comparison</h3>
      <div className="grid gap-3 md:grid-cols-2">
        {BUCKETS.map((b) => (
          <div key={b.key} className="rounded-md ring-1 ring-stone-200">
            <div className="rounded-t-md bg-stone-50 px-3 py-2 text-xs font-medium text-stone-700">
              {b.label}
            </div>
            <div className="space-y-2 p-3 text-sm">
              <div>
                <div className="label">Yours</div>
                <ul className="ml-4 list-disc text-stone-700">
                  {(learner[b.key] ?? []).map((x, i) => (
                    <li key={i}>{x}</li>
                  ))}
                  {(learner[b.key] ?? []).length === 0 && (
                    <li className="list-none italic text-stone-400">— empty —</li>
                  )}
                </ul>
              </div>
              <div>
                <div className="label text-brand-700">Expert</div>
                <ul className="ml-4 list-disc text-stone-700">
                  {expert[b.key].map((x, i) => (
                    <li key={i}>{x}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
