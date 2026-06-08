import { useEffect, useState } from "react";

interface TocEntry {
  id: string;
  text: string;
  level: number;
}

function extractHeadings(html: string): TocEntry[] {
  const headingRegex = /<h([23])[^>]*id="([^"]*)"[^>]*>(.*?)<\/h\1>/gi;
  const entries: TocEntry[] = [];
  let match: RegExpExecArray | null;
  while ((match = headingRegex.exec(html)) !== null) {
    entries.push({
      level: parseInt(match[1], 10),
      id: match[2],
      text: match[3].replace(/<[^>]+>/g, ""), // strip inner HTML tags
    });
  }
  return entries;
}

/** Add IDs to h2/h3 tags in HTML content for anchor linking */
export function addHeadingIds(html: string): string {
  let counter = 0;
  return html.replace(/<h([23])([^>]*)>(.*?)<\/h\1>/gi, (_match, level, attrs, content) => {
    const existingId = /id="([^"]*)"/.exec(attrs);
    const id = existingId
      ? existingId[1]
      : `section-${++counter}`;
    const cleanAttrs = attrs.replace(/\s*id="[^"]*"/, "");
    return `<h${level}${cleanAttrs} id="${id}">${content}</h${level}>`;
  });
}

export function TableOfContents({ html }: { html: string }) {
  const [activeId, setActiveId] = useState<string>("");
  const headings = extractHeadings(html);

  useEffect(() => {
    if (typeof window === "undefined" || headings.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0.1 },
    );
    for (const h of headings) {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav aria-label="Table of contents" className="rounded-2xl border border-border bg-card p-5">
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
        In this article
      </h3>
      <ul className="space-y-2 text-sm">
        {headings.map((h) => (
          <li key={h.id} style={{ paddingLeft: h.level === 3 ? "1rem" : 0 }}>
            <a
              href={`#${h.id}`}
              className={`block transition-colors ${
                activeId === h.id
                  ? "font-medium text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(h.id)?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
