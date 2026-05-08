import type { Case } from '../../types/case';

export default function IntroStep({ kase }: { kase: Case }) {
  return (
    <div className="space-y-5">
      <header>
        <h2 className="text-2xl text-brand-800">{kase.title}</h2>
        <p className="mt-1 text-sm text-stone-500">
          Difficulty {'★'.repeat(kase.difficulty)} · ~{kase.estimatedMinutes} min
        </p>
      </header>

      <section>
        <h3 className="label mb-2">Patient</h3>
        <div className="grid gap-3 text-sm sm:grid-cols-2">
          <Row k="Age" v={`${kase.demographics.age}`} />
          <Row k="Sex" v={kase.demographics.sex} />
          <Row k="Occupation" v={kase.demographics.occupation} />
          {kase.demographics.handedness && <Row k="Handedness" v={kase.demographics.handedness} />}
        </div>
      </section>

      <section>
        <h3 className="label mb-2">Referral</h3>
        <p className="rounded-md bg-stone-50 p-3 text-sm leading-relaxed text-stone-700 ring-1 ring-stone-200">
          {kase.referral}
        </p>
      </section>

      <section>
        <h3 className="label mb-2">Learning objectives</h3>
        <ul className="ml-4 list-disc space-y-1 text-sm text-stone-700">
          {kase.learningObjectives.map((o, i) => (
            <li key={i}>{o}</li>
          ))}
        </ul>
      </section>

      <p className="rounded-md bg-amber-50 p-3 text-xs text-amber-900 ring-1 ring-amber-200">
        This case is for educational practice. Each step asks you to commit your reasoning before revealing the
        expert answer — submit your answer to unlock the next step.
      </p>
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-md bg-stone-50 px-3 py-2 ring-1 ring-stone-200">
      <div className="label">{k}</div>
      <div className="mt-0.5 text-stone-800">{v}</div>
    </div>
  );
}
