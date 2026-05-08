import { REFERENCES } from '../data/references';

export default function About() {
  const refs = Object.values(REFERENCES);
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="text-2xl text-brand-800">About</h1>

      <section className="mt-4 space-y-3 text-sm text-stone-700">
        <p>
          MSK Clinical Reasoning Trainer is an educational tool for physiotherapy students practising
          musculoskeletal clinical reasoning. It uses a <strong>commit-before-reveal</strong> case format: at every
          step (hypothesis, test selection, diagnosis, ICF mapping, management) the learner must submit an answer
          before the expert response is shown.
        </p>
        <p>
          The pedagogical frame integrates three things:
        </p>
        <ul className="ml-5 list-disc space-y-1">
          <li>
            <strong>Hypothesis-oriented clinical reasoning</strong> — explicit hypothesis generation,
            confirmation/refutation, and revision.
          </li>
          <li>
            <strong>ICF</strong> — body structure/function, activity, participation, personal & environmental
            factors mapped for every case.
          </li>
          <li>
            <strong>Evidence-based practice</strong> — every management item is cited to a CPG, peer-reviewed
            paper, or textbook (Magee 7e, Cook & Hegedus).
          </li>
        </ul>
        <p>
          Cases reflect Australian clinical context: APA terminology, Medicare/MBS pathways where relevant,
          Australian occupations and healthcare settings.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-lg text-brand-700">Disclaimer</h2>
        <p className="mt-1 text-sm text-stone-700">
          This app is for educational use only and does not replace supervised clinical training, professional
          judgement, or the standards of the APA and AHPRA. All patient cases are simulated. Always practise
          within your scope.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-lg text-brand-700">Evidence sources</h2>
        <ol className="mt-2 space-y-1.5 text-xs text-stone-700">
          {refs.map((r) => (
            <li key={r.id} className="rounded-md bg-stone-50 p-2 ring-1 ring-stone-200">
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
    </div>
  );
}
