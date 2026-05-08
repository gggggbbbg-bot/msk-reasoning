# MSK Clinical Reasoning Trainer

Educational case-based web app for musculoskeletal physiotherapy clinical reasoning.
Australian clinical context. Five regions: low back pain, headache, cervical, ankle, knee.
Each case uses a commit-before-reveal stepper integrating hypothesis-oriented reasoning,
ICF problem mapping, and evidence-based management citing JOSPT CPGs, Magee 7e, ICHD-3,
and Ottawa rules.

> **Disclaimer**: educational use only. Not clinical advice. Patient cases are simulated.

## Run locally

```sh
npm install
npm run dev      # http://localhost:5173
npm run build    # type-checks and produces /dist
```

## Deploy

Static SPA. Connect this repo to [Vercel](https://vercel.com); framework auto-detects as Vite.
Includes `vercel.json` rewrites for client-side routing. No env vars required.

## Adding a case

1. Drop a new TS file under `src/data/cases/<region>/<slug>.ts` exporting a `Case`.
2. Import & register it in `src/data/cases/index.ts`.
3. Cite evidence using ids from `src/data/references.ts` (or add new refs there).
4. Run `npm run dev` — `validateCase` will warn in the console if any required field is missing.

## Tech

Vite · React 18 · TypeScript · Tailwind CSS · React Router · localStorage progress.
