import RegionCard from '../components/layout/RegionCard';
import { ALL_CASES } from '../data/cases';
import { REGION_META, type Region } from '../types/case';

export default function Home() {
  const regions = Object.keys(REGION_META) as Region[];
  const counts = regions.reduce<Record<Region, number>>((acc, r) => {
    acc[r] = ALL_CASES.filter((c) => c.region === r).length;
    return acc;
  }, { lbp: 0, cervical: 0, headache: 0, ankle: 0, knee: 0 });

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <section className="mb-8">
        <h1 className="text-3xl text-brand-800">MSK Clinical Reasoning Trainer</h1>
        <p className="mt-2 max-w-2xl text-stone-600">
          Practise hypothesis-oriented clinical reasoning across five musculoskeletal regions. Each case asks
          you to commit your answer at every step — hypothesis, test selection, diagnosis, ICF mapping, management
          — before you see the expert response. Evidence is cited from JOSPT clinical practice guidelines, Magee's{' '}
          <em>Orthopedic Physical Assessment</em>, and ICHD-3 criteria.
        </p>
      </section>

      <section>
        <h2 className="mb-3 text-lg text-stone-700">Choose a region</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {regions.map((r) => (
            <RegionCard key={r} region={r} caseCount={counts[r]} />
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-md bg-amber-50 p-4 text-sm text-amber-900 ring-1 ring-amber-200">
        <strong>Disclaimer.</strong> This app is for educational practice only. It does not replace clinical
        judgement, supervision, or the standards of the Australian Physiotherapy Association (APA) and AHPRA. Always
        practise within your scope.
      </section>
    </div>
  );
}
