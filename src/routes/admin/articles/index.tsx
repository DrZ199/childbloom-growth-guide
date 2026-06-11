import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { adminListArticles, adminDeleteArticle } from "@/lib/api/admin";
import { Plus, Edit, Trash2 } from "lucide-react";

export const Route = createFileRoute("/admin/articles/")({
  component: AdminArticlesList,
});

function AdminArticlesList() {
  const [articles, setArticles] = useState<Array<Record<string, unknown>>>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  async function load() {
    setLoading(true);
    try {
      const res = await adminListArticles({ data: { page: 1, pageSize: 20 } });
      setArticles(res.data as Array<Record<string, unknown>>);
      setTotal(res.total);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  async function handleDelete(id: string) {
    if (!confirm("Are you sure you want to delete this article?")) return;
    await adminDeleteArticle({ data: { id } });
    load();
  }

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Articles</h1>
          <p className="mt-1 text-sm text-muted-foreground">{total} total articles</p>
        </div>
        <Link
          to="/admin/articles/new"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
        >
          <Plus className="h-4 w-4" /> New Article
        </Link>
      </div>

      {loading ? (
        <div className="space-y-3">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="h-16 animate-pulse rounded-xl border border-border bg-muted" />
          ))}
        </div>
      ) : articles.length === 0 ? (
        <div className="rounded-2xl border border-border bg-card p-10 text-center text-muted-foreground">
          <p>No articles yet. Create your first article!</p>
        </div>
      ) : (
        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="p-3 text-left font-medium">Title</th>
                <th className="p-3 text-left font-medium">Status</th>
                <th className="p-3 text-left font-medium">Category</th>
                <th className="p-3 text-left font-medium">Views</th>
                <th className="p-3 text-left font-medium">Updated</th>
                <th className="p-3 text-right font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {articles.map((a) => {
                const cat = a.categories as Record<string, unknown> | undefined;
                return (
                  <tr key={a.id as string} className="border-b border-border/50">
                    <td className="p-3 font-medium">{a.title as string}</td>
                    <td className="p-3">
                      <span
                        className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                          a.status === "published"
                            ? "bg-green-100 text-green-700"
                            : a.status === "draft"
                              ? "bg-amber-100 text-amber-700"
                              : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {a.status as string}
                      </span>
                    </td>
                    <td className="p-3 text-muted-foreground">{(cat?.name as string) ?? "—"}</td>
                    <td className="p-3 text-muted-foreground">{(a.view_count as number) ?? 0}</td>
                    <td className="p-3 text-muted-foreground">
                      {a.updated_at ? new Date(a.updated_at as string).toLocaleDateString() : "—"}
                    </td>
                    <td className="p-3">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          to={`/admin/articles/$id`}
                          params={{ id: a.id as string }}
                          className="rounded-lg p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground"
                        >
                          <Edit className="h-4 w-4" />
                        </Link>
                        <button
                          onClick={() => handleDelete(a.id as string)}
                          className="rounded-lg p-1.5 text-muted-foreground hover:bg-red-50 hover:text-red-600"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
