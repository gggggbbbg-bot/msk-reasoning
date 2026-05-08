import { Link, useParams } from 'react-router-dom';
import { ALL_CASES } from '../data/cases';
import { REGION_META, type Region as RegionT } from '../types/case';
import { useAllProgress } from '../hooks/useCaseProgress';

export default function Region() {
  const { regionId } = useParams<{ regionId: RegionT }>();
  const { progress } = useAllProgress();

  const region = regionId && (regionId in REGION_META) ? (regionId as RegionT) : null;
  if (!region) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-8">
        <p>Unknown region.</p>
        <Link to="/" className="btn btn-ghost mt-2">← Home</Link>
      </div>
    );
  }

  const meta = REGION_META[region];
  const cases = ALL_CASES.filter((c) => c.region === region);

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Link to="/" className="text-sm text-stone-500 hover:text-stone-700">← All regions</Link>
      <h1 className="mt-1 text-2xl text-brand-800">{meta.label}</h1>
      <p className="mt-1 text-sm text-stone-600">{meta.description}</p>

      <ul className="mt-6 space-y-2">
        {cases.length === 0 && (
          <li className="card text-sm text-stone-500">No cases yet for this region.</li>
        )}
        {cases.map((c) => {
          const status = progress.cases[c.id]?.status;
          return (
            <li key={c.id}>
              <Link
                to={`/case/${c.id}`}
                className="card flex items-start justify-between gap-3 transition hover:shadow-md hover:ring-brand-300"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium text-stone-800">{c.title}</h3>
                    {status === 'complete' && (
                      <span className="pill bg-emerald-100 text-emerald-700">✓ complete</span>
                    )}
                    {status === 'in-progress' && (
                      <span className="pill bg-amber-100 text-amber-800">in progress</span>
                    )}
                  </div>
                  <p className="text-xs text-stone-500">
                    {'★'.repeat(c.difficulty)} · ~{c.estimatedMinutes} min
                  </p>
                </div>
                <span className="text-xs text-brand-600 group-hover:underline">Open →</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
