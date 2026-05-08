import { Link, useParams } from 'react-router-dom';
import CaseStepper from '../components/case/CaseStepper';
import { ALL_CASES } from '../data/cases';
import { REGION_META } from '../types/case';

export default function CasePlayer() {
  const { caseId } = useParams<{ caseId: string }>();
  const kase = ALL_CASES.find((c) => c.id === caseId);

  if (!kase) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-8">
        <p>Case not found.</p>
        <Link to="/" className="btn btn-ghost mt-2">← Home</Link>
      </div>
    );
  }

  const meta = REGION_META[kase.region];

  return (
    <div className="mx-auto max-w-3xl px-4 py-6">
      <nav className="mb-3 text-sm text-stone-500">
        <Link to="/" className="hover:text-stone-700">All regions</Link>
        <span className="mx-1">/</span>
        <Link to={`/region/${kase.region}`} className="hover:text-stone-700">{meta.label}</Link>
      </nav>
      <CaseStepper kase={kase} />
    </div>
  );
}
