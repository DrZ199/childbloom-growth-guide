import { TrendingUp } from "lucide-react";
import type { TopArticle } from "@/lib/api/analytics";

interface TopArticlesTableProps {
  articles: TopArticle[];
}

export function TopArticlesTable({ articles }: TopArticlesTableProps) {
  if (articles.length === 0) {
    return (
      <div className="rounded-2xl border border-border bg-card p-8 text-center text-muted-foreground">
        No articles published yet.
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]">
      <div className="flex items-center gap-2 border-b border-border px-5 py-4">
        <TrendingUp className="h-5 w-5 text-primary" />
        <h2 className="text-lg font-semibold">Top Articles by Views</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="px-5 py-3 text-left font-semibold">#</th>
              <th className="px-5 py-3 text-left font-semibold">Title</th>
              <th className="px-5 py-3 text-right font-semibold">Views</th>
              <th className="px-5 py-3 text-right font-semibold">Published</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((article, i) => (
              <tr key={article.id} className="border-b border-border/50 hover:bg-muted/30">
                <td className="px-5 py-3 text-muted-foreground">{i + 1}</td>
                <td className="px-5 py-3">
                  <a
                    href={`/articles/${article.slug}`}
                    className="font-medium text-foreground hover:text-primary hover:underline"
                  >
                    {article.title}
                  </a>
                </td>
                <td className="px-5 py-3 text-right font-mono font-medium">
                  {article.view_count.toLocaleString()}
                </td>
                <td className="px-5 py-3 text-right text-muted-foreground">
                  {article.published_at
                    ? new Date(article.published_at).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })
                    : "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
