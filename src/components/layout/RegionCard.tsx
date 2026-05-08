import { Link } from 'react-router-dom';
import type { Region } from '../../types/case';
import { REGION_META } from '../../types/case';

export default function RegionCard({ region, caseCount }: { region: Region; caseCount: number }) {
  const meta = REGION_META[region];
  return (
    <Link
      to={`/region/${region}`}
      className="card group flex flex-col gap-2 transition hover:shadow-md hover:ring-brand-300"
    >
      <div className="flex items-baseline justify-between">
        <h3 className="text-lg text-brand-800">{meta.label}</h3>
        <span className="pill bg-brand-50 text-brand-700">{caseCount} {caseCount === 1 ? 'case' : 'cases'}</span>
      </div>
      <p className="text-sm text-stone-600">{meta.description}</p>
      <span className="mt-1 text-xs font-medium text-brand-600 group-hover:underline">Open region →</span>
    </Link>
  );
}
