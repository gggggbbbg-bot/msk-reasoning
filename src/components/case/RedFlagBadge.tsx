export default function RedFlagBadge({ present }: { present: boolean }) {
  return (
    <span
      className={`pill ${
        present ? 'bg-rose-100 text-rose-700' : 'bg-emerald-50 text-emerald-700'
      }`}
    >
      {present ? 'Positive' : 'Negative'}
    </span>
  );
}
