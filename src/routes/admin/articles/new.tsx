import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { adminCreateArticle } from "@/lib/api/admin";
import { Save } from "lucide-react";

export const Route = createFileRoute("/admin/articles/new")({
  component: AdminNewArticle,
});

function AdminNewArticle() {
  const navigate = useNavigate();
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    seoTitle: "",
    seoDescription: "",
    status: "draft" as "draft" | "published",
  });

  function generateSlug(title: string) {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .slice(0, 200);
  }

  function estimateReadingTime(text: string): number {
    const words = text.split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.round(words / 200));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    try {
      const slug = form.slug || generateSlug(form.title);
      const res = await adminCreateArticle({
        data: {
          ...form,
          slug,
        },
      });
      if ("error" in res) {
        alert(`Error: ${res.error}`);
      } else {
        navigate({ to: "/admin/articles" });
      }
    } catch (err) {
      console.error(err);
      alert("Failed to create article");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight">New Article</h1>
        <p className="mt-1 text-sm text-muted-foreground">Create a new article for ChildBloom.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="rounded-2xl border border-border bg-card p-6 space-y-5">
          <div>
            <label className="mb-1.5 block text-sm font-medium">Title</label>
            <input
              type="text"
              value={form.title}
              onChange={(e) =>
                setForm({
                  ...form,
                  title: e.target.value,
                  slug: form.slug || generateSlug(e.target.value),
                })
              }
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              required
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium">Slug</label>
            <input
              type="text"
              value={form.slug}
              onChange={(e) => setForm({ ...form, slug: e.target.value })}
              placeholder="auto-generated-from-title"
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium">Excerpt</label>
            <textarea
              value={form.excerpt}
              onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
              rows={2}
              maxLength={1000}
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium">
              Content (HTML)
              {form.content && (
                <span className="ml-2 text-xs text-muted-foreground">
                  ~{estimateReadingTime(form.content)} min read
                </span>
              )}
            </label>
            <textarea
              value={form.content}
              onChange={(e) => setForm({ ...form, content: e.target.value })}
              rows={15}
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 font-mono text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              required
              placeholder="<h2>Section title</h2><p>Article content...</p>"
            />
          </div>
        </div>

        {/* SEO fields */}
        <div className="rounded-2xl border border-border bg-card p-6 space-y-5">
          <h3 className="text-lg font-semibold">SEO</h3>
          <div>
            <label className="mb-1.5 block text-sm font-medium">SEO Title</label>
            <input
              type="text"
              value={form.seoTitle}
              onChange={(e) => setForm({ ...form, seoTitle: e.target.value })}
              maxLength={200}
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium">Meta Description</label>
            <textarea
              value={form.seoDescription}
              onChange={(e) => setForm({ ...form, seoDescription: e.target.value })}
              rows={2}
              maxLength={500}
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>

        {/* Publish options */}
        <div className="flex items-center justify-between rounded-2xl border border-border bg-card p-6">
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 text-sm">
              <input
                type="radio"
                name="status"
                value="draft"
                checked={form.status === "draft"}
                onChange={() => setForm({ ...form, status: "draft" })}
                className="h-4 w-4"
              />
              Draft
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input
                type="radio"
                name="status"
                value="published"
                checked={form.status === "published"}
                onChange={() => setForm({ ...form, status: "published" })}
                className="h-4 w-4"
              />
              Published
            </label>
          </div>
          <button
            type="submit"
            disabled={saving}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90 disabled:opacity-50"
          >
            <Save className="h-4 w-4" />
            {saving ? "Saving..." : "Save Article"}
          </button>
        </div>
      </form>
    </div>
  );
}
