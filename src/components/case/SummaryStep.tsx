import type { Case } from '../../types/case';
import type { CaseCommits, CaseRecord } from '../../hooks/useCaseProgress';

export default function SummaryStep({
  kase,
  commits,
  status,
  onMarkComplete,
}: {
  kase: Case;
  commits: CaseCommits;
  status: CaseRecord['status'];
  onMarkComplete: () => void;
}) {
  return (
    <div className="space-y-5">
      <header>
        <h2 className="text-xl text-brand-800">Summary & references</h2>
        <p className="mt-1 text-sm text-stone-500">
          Quick recap, your committed answers, and the full bibliography.
        </p>
      </header>

      <section className="rounded-md bg-brand-50 p-3 text-sm ring-1 ring-brand-200">
        <div className="label text-brand-700">Diagnosis</div>
        <p className="mt-1 font-medium text-stone-800">{kase.diagnosis.primary}</p>
      </section>

      <section className="space-y-2">
        <h3 className="label">Your committed answers</h3>
        <KeyVal k="Hypothesis" v={
          commits.hypothesis
            ? `${kase.hypotheses.find((h) => h.id === commits.hypothesis!.primaryId)?.label ?? '—'} — "${commits.hypothesis.rationale}"`
            : '— not committed —'
        } />
        <KeyVal k="Working diagnosis" v={commits.diagnosis?.freeText ?? '— not committed —'} />
        <KeyVal k="Tests selected" v={`${commits.objective?.selectedTestIds.length ?? 0} tests`} />
        <KeyVal k="Mgmt categories" v={commits.management?.selectedCategories.join(', ') || '—'} />
      </section>

      <section>
        <h3 className="label mb-2">References</h3>
        <ol className="space-y-2 text-xs text-stone-700">
          {kase.references.map((r) => (
            <li key={r.id} id={`ref-${r.id}`} className="rounded-md bg-stone-50 p-2 ring-1 ring-stone-200">
              <span className="pill bg-brand-50 text-brand-700">{r.id}</span>{' '}
              <span className="pill bg-stone-200 text-stone-700">{r.level}</span>
              <p className="mt-1 leading-relaxed">{r.citation}</p>
              {(r.url || r.doi) && (
                <a
                  href={r.url ?? `https://doi.org/${r.doi}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-brand-700 underline hover:text-brand-800"
                >
                  {r.url ?? `https://doi.org/${r.doi}`}
                </a>
              )}
            </li>
          ))}
        </ol>
      </section>

      {status !== 'complete' ? (
        <button className="btn btn-primary" onClick={onMarkComplete}>
          Mark case complete
        </button>
      ) : (
        <p className="rounded-md bg-emerald-50 p-3 text-sm text-emerald-800 ring-1 ring-emerald-200">
          ✓ Case marked complete. Open <a className="underline" href="/progress">Progress</a> to review.
        </p>
      )}
    </div>
  );
}

function KeyVal({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-md bg-stone-50 px-3 py-2 text-sm ring-1 ring-stone-200">
      <div className="label">{k}</div>
      <div className="mt-0.5 text-stone-700">{v}</div>
    </div>
  );
}
