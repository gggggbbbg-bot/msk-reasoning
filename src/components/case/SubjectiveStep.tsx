import { useState } from 'react';
import type { Case } from '../../types/case';
import RedFlagBadge from './RedFlagBadge';

export default function SubjectiveStep({ kase }: { kase: Case }) {
  const s = kase.subjective;
  return (
    <div className="space-y-4">
      <header>
        <h2 className="text-xl text-brand-800">Subjective examination</h2>
        <p className="mt-1 text-sm text-stone-500">Read carefully — you'll generate hypotheses from this in the next step.</p>
      </header>

      <Section title="History of presenting complaint">
        <p className="text-sm leading-relaxed text-stone-700">{s.hpc}</p>
      </Section>

      <div className="grid gap-3 sm:grid-cols-2">
        <Section title="Aggravating factors">
          <BulletList items={s.aggravating} />
        </Section>
        <Section title="Easing factors">
          <BulletList items={s.easing} />
        </Section>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <Section title="Past medical history">
          <BulletList items={s.pmh} />
        </Section>
        <Section title="Drug history">
          <BulletList items={s.drugHx} />
        </Section>
      </div>

      <Section title="Social history">
        <p className="text-sm text-stone-700">{s.socialHx}</p>
      </Section>

      {s.familyHx && (
        <Section title="Family history">
          <p className="text-sm text-stone-700">{s.familyHx}</p>
        </Section>
      )}

      <Section title="Red flag screen" defaultOpen>
        <ul className="space-y-1 text-sm">
          {s.redFlagScreen.map((r, i) => (
            <li
              key={i}
              className="flex items-start justify-between gap-2 rounded-md bg-stone-50 px-3 py-1.5 ring-1 ring-stone-200"
            >
              <span className="text-stone-700">
                {r.flag}
                {r.note && <span className="ml-1 text-stone-500">— {r.note}</span>}
              </span>
              <RedFlagBadge present={r.present} />
            </li>
          ))}
        </ul>
      </Section>

      {s.yellowFlags && s.yellowFlags.length > 0 && (
        <Section title="Yellow flags">
          <BulletList items={s.yellowFlags} />
        </Section>
      )}

      <Section title="Patient goals">
        <BulletList items={s.patientGoals} />
      </Section>
    </div>
  );
}

function Section({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <section className="rounded-md ring-1 ring-stone-200">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between rounded-md bg-stone-50 px-3 py-2 text-left text-sm font-medium text-stone-700 hover:bg-stone-100"
      >
        <span>{title}</span>
        <span className="text-stone-400">{open ? '−' : '+'}</span>
      </button>
      {open && <div className="p-3">{children}</div>}
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  if (items.length === 0) return <p className="text-sm italic text-stone-500">None reported.</p>;
  return (
    <ul className="ml-4 list-disc space-y-1 text-sm text-stone-700">
      {items.map((x, i) => (
        <li key={i}>{x}</li>
      ))}
    </ul>
  );
}
