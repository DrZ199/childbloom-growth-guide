import { Clock } from "lucide-react";
import type { ArticleSummary } from "@/types/article";

export function RelatedArticles({ articles }: { articles: ArticleSummary[] }) {
  if (articles.length === 0) return null;

  return (
    <section className="mt-12 border-t border-border pt-10">
      <h2 className="mb-6 text-2xl font-semibold tracking-tight">Related articles</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {articles.map((a) => (
          <a
            key={a.id}
            href={`/articles/${a.slug}`}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]"
          >
            {a.cover_image_url ? (
              <div className="aspect-[16/10] w-full overflow-hidden bg-muted">
                <img
                  src={a.cover_image_url}
                  alt={a.cover_image_alt ?? a.title}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            ) : (
              <div className="aspect-[16/10] w-full bg-gradient-to-br from-primary/10 to-accent/10" />
            )}
            <div className="flex flex-1 flex-col p-4">
              {a.category_name && (
                <span className="text-xs font-medium uppercase tracking-wider text-primary">
                  {a.category_name}
                </span>
              )}
              <h3 className="mt-1.5 text-sm font-semibold leading-snug line-clamp-2">{a.title}</h3>
              {a.reading_minutes && (
                <span className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" /> {a.reading_minutes} min read
                </span>
              )}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
