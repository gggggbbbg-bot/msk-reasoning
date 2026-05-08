import { Link } from 'react-router-dom';
import { useAllProgress } from '../hooks/useCaseProgress';
import { ALL_CASES } from '../data/cases';
import { REGION_META } from '../types/case';

export default function Progress() {
  const { progress, reset } = useAllProgress();
  const records = Object.entries(progress.cases);

  const completed = records.filter(([, r]) => r.status === 'complete').length;

  const onReset = () => {
    if (confirm('Clear all progress on this browser? This cannot be undone.')) {
      reset();
    }
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="text-2xl text-brand-800">Progress</h1>
      <p className="mt-1 text-sm text-stone-600">
        {completed} of {ALL_CASES.length} cases complete. Stored only in this browser.
      </p>

      <div className="mt-4">
        {records.length === 0 ? (
          <p className="card text-sm text-stone-500">No cases started yet. <Link to="/" className="text-brand-600 underline">Pick a region →</Link></p>
        ) : (
          <ul className="space-y-3">
            {records.map(([id, rec]) => {
              const k = ALL_CASES.find((c) => c.id === id);
              if (!k) return null;
              const expert = k.hypotheses.find((h) => h.isPrimary);
              const learnerHypothesis = rec.commits.hypothesis
                ? k.hypotheses.find((h) => h.id === rec.commits.hypothesis!.primaryId)
                : null;
              return (
                <li key={id} className="card">
                  <div className="flex items-baseline justify-between">
                    <Link to={`/case/${id}`} className="font-medium text-brand-700 hover:underline">
                      {k.title}
                    </Link>
                    <span className="pill bg-stone-100 text-stone-700">{REGION_META[k.region].short}</span>
                  </div>
                  <p className="mt-1 text-xs text-stone-500">
                    Status:{' '}
                    <span className={rec.status === 'complete' ? 'text-emerald-700' : 'text-amber-700'}>
                      {rec.status}
                    </span>
                    {rec.completedAt && ` · completed ${new Date(rec.completedAt).toLocaleDateString()}`}
                  </p>
                  {learnerHypothesis && expert && (
                    <div className="mt-2 grid gap-2 text-xs sm:grid-cols-2">
                      <div className="rounded-md bg-stone-50 p-2 ring-1 ring-stone-200">
                        <div className="label">Your hypothesis</div>
                        <div className="text-stone-700">{learnerHypothesis.label}</div>
                        {rec.commits.hypothesis?.rationale && (
                          <div className="mt-0.5 italic text-stone-500">"{rec.commits.hypothesis.rationale}"</div>
                        )}
                      </div>
                      <div className="rounded-md bg-brand-50 p-2 ring-1 ring-brand-200">
                        <div className="label text-brand-700">Expert hypothesis</div>
                        <div className="text-stone-700">{expert.label}</div>
                      </div>
                    </div>
                  )}
                  {rec.commits.diagnosis && (
                    <div className="mt-2 rounded-md bg-stone-50 p-2 text-xs ring-1 ring-stone-200">
                      <div className="label">Your working diagnosis</div>
                      <div className="text-stone-700">{rec.commits.diagnosis.freeText}</div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </div>

      {records.length > 0 && (
        <button onClick={onReset} className="btn btn-ghost mt-6 text-rose-700 hover:bg-rose-50">
          Clear all progress
        </button>
      )}
    </div>
  );
}
