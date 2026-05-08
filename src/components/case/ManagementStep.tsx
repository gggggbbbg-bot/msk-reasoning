import { useState } from 'react';
import type { Case, ManagementCategory, ManagementItem } from '../../types/case';
import EvidenceCitation from './EvidenceCitation';
import type { CaseCommits } from '../../hooks/useCaseProgress';

type Commit = NonNullable<CaseCommits['management']>;

const CATEGORY_LABELS: Record<ManagementCategory, string> = {
  education: 'Education',
  manual: 'Manual therapy',
  exercise: 'Exercise',
  modality: 'Modality',
  referral: 'Referral / further investigation',
  'self-management': 'Self-management',
};

const ALL_CATEGORIES: ManagementCategory[] = [
  'education',
  'exercise',
  'manual',
  'modality',
  'self-management',
  'referral',
];

export default function ManagementStep({
  kase,
  committed,
  onCommit,
}: {
  kase: Case;
  committed?: Commit;
  onCommit: (v: Commit) => void;
}) {
  const [picked, setPicked] = useState<Set<string>>(
    () => new Set(committed?.selectedCategories ?? [])
  );
  const submitted = !!committed;

  const toggle = (cat: ManagementCategory) => {
    if (submitted) return;
    setPicked((prev) => {
      const next = new Set(prev);
      if (next.has(cat)) next.delete(cat);
      else next.add(cat);
      return next;
    });
  };

  return (
    <div className="space-y-5">
      <header>
        <h2 className="text-xl text-brand-800">Management plan</h2>
        <p className="mt-1 text-sm text-stone-500">
          Which categories of intervention would you prioritise for this patient? Submit to reveal the expert plan,
          including specific interventions, dose, and evidence.
        </p>
      </header>

      <div className="grid gap-2 sm:grid-cols-2">
        {ALL_CATEGORIES.map((cat) => {
          const checked = picked.has(cat);
          return (
            <label
              key={cat}
              className={`flex cursor-pointer items-center gap-2 rounded-md p-3 ring-1 transition ${
                checked ? 'bg-brand-50 ring-brand-400' : 'bg-white ring-stone-200 hover:bg-stone-50'
              }`}
            >
              <input
                type="checkbox"
                disabled={submitted}
                checked={checked}
                onChange={() => toggle(cat)}
              />
              <span className="text-sm font-medium text-stone-800">{CATEGORY_LABELS[cat]}</span>
            </label>
          );
        })}
      </div>

      {!submitted ? (
        <button
          className="btn btn-primary"
          onClick={() => onCommit({ selectedCategories: Array.from(picked) })}
          disabled={picked.size === 0}
        >
          Submit priorities ({picked.size} chosen)
        </button>
      ) : (
        <Reveal kase={kase} learnerCats={Array.from(picked) as ManagementCategory[]} />
      )}
    </div>
  );
}

function Reveal({ kase, learnerCats }: { kase: Case; learnerCats: ManagementCategory[] }) {
  const expertCats = new Set(
    [...kase.management.shortTerm, ...kase.management.longTerm].map((m) => m.category)
  );
  const learnerSet = new Set(learnerCats);

  return (
    <div className="space-y-4 border-t border-stone-200 pt-4">
      <div className="rounded-md bg-stone-50 p-3 text-sm ring-1 ring-stone-200">
        <div className="label mb-1">Category match</div>
        <ul className="space-y-0.5 text-stone-700">
          {ALL_CATEGORIES.filter((c) => expertCats.has(c)).map((c) => (
            <li key={c} className="flex items-center gap-2">
              <span className={`pill ${learnerSet.has(c) ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-800'}`}>
                {learnerSet.has(c) ? '✓ chose' : '✗ missed'}
              </span>
              {CATEGORY_LABELS[c]}
            </li>
          ))}
          {[...learnerSet].filter((c) => !expertCats.has(c as ManagementCategory)).map((c) => (
            <li key={`x-${c}`} className="flex items-center gap-2">
              <span className="pill bg-stone-200 text-stone-700">extra</span>
              {CATEGORY_LABELS[c as ManagementCategory]} (not core for this case)
            </li>
          ))}
        </ul>
      </div>

      <Plan title="Short-term" items={kase.management.shortTerm} />
      <Plan title="Long-term / progression" items={kase.management.longTerm} />

      <div className="rounded-md bg-brand-50 p-3 text-sm ring-1 ring-brand-200">
        <div className="label text-brand-700">Prognosis</div>
        <p className="mt-1 text-stone-700">{kase.management.prognosis}</p>
      </div>

      <div className="rounded-md bg-rose-50 p-3 text-sm ring-1 ring-rose-200">
        <div className="label text-rose-700">Red flags to monitor</div>
        <ul className="ml-4 mt-1 list-disc text-stone-700">
          {kase.management.redFlagsToMonitor.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Plan({ title, items }: { title: string; items: ManagementItem[] }) {
  if (items.length === 0) return null;
  return (
    <section>
      <h3 className="label mb-2">{title}</h3>
      <ul className="space-y-2">
        {items.map((m, i) => (
          <li key={i} className="rounded-md bg-white p-3 ring-1 ring-stone-200">
            <div className="flex items-baseline justify-between gap-2">
              <span className="text-sm font-medium text-stone-800">{m.intervention}</span>
              <span className="pill bg-stone-100 text-stone-600">{CATEGORY_LABELS[m.category]}</span>
            </div>
            {m.doseFrequency && (
              <p className="mt-1 text-xs text-stone-500">Dose: {m.doseFrequency}</p>
            )}
            <p className="mt-1 text-sm text-stone-700">{m.rationale}</p>
            <div className="mt-1 text-xs text-stone-600">
              Evidence: <EvidenceCitation refIds={m.evidenceRefs} />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
