import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 text-center">
      <h1 className="text-2xl text-brand-800">Page not found</h1>
      <p className="mt-1 text-sm text-stone-600">That route doesn't exist.</p>
      <Link to="/" className="btn btn-primary mt-4 inline-flex">← Home</Link>
    </div>
  );
}
