import { getRef } from '../../data/references';

export default function EvidenceCitation({ refIds }: { refIds: string[] | undefined }) {
  if (!refIds || refIds.length === 0) return null;
  return (
    <span className="ml-1 inline-flex flex-wrap gap-1 align-baseline">
      {refIds.map((id) => {
        const ref = getRef(id);
        if (!ref) return <Badge key={id} title={`Unknown ref: ${id}`}>{id}</Badge>;
        return (
          <a
            key={id}
            href={`#ref-${id}`}
            title={ref.citation}
            className="pill bg-brand-50 text-brand-700 hover:bg-brand-100"
          >
            {id}
          </a>
        );
      })}
    </span>
  );
}

function Badge({ children, title }: { children: React.ReactNode; title?: string }) {
  return (
    <span title={title} className="pill bg-amber-100 text-amber-800">
      {children}
    </span>
  );
}
