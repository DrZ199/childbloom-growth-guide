export interface Reference {
  title: string;
  source: string;
  url: string;
  accessed?: string;
}

/**
 * References / citations section. Drop at the bottom of any health article.
 * Outbound links should point to .gov, .edu, AAP, WHO, NHS, CDC, NIH, or
 * peer-reviewed journals.
 */
export function References({ items }: { items: Reference[] }) {
  if (!items?.length) return null;
  return (
    <section
      aria-labelledby="references-heading"
      className="mt-10 rounded-2xl border border-border bg-card p-6"
    >
      <h2 id="references-heading" className="mb-4 text-xl font-semibold">
        References
      </h2>
      <ol className="list-decimal space-y-3 pl-5 text-sm text-muted-foreground">
        {items.map((r, i) => (
          <li key={i}>
            <a
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline hover:no-underline"
            >
              {r.title}
            </a>{" "}
            — <span className="italic">{r.source}</span>
            {r.accessed ? <span> (accessed {r.accessed})</span> : null}
          </li>
        ))}
      </ol>
    </section>
  );
}