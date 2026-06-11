import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { adminListCategories, adminCreateCategory } from "@/lib/api/admin";

export const Route = createFileRoute("/admin/categories")({
  component: AdminCategories,
});

function AdminCategories() {
  const [categories, setCategories] = useState<Array<Record<string, unknown>>>([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ name: "", slug: "", description: "" });

  async function load() {
    setLoading(true);
    try {
      const res = await adminListCategories({ data: undefined });
      setCategories(res as Array<Record<string, unknown>>);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    const slug = form.slug || form.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    await adminCreateCategory({ data: { ...form, slug } });
    setForm({ name: "", slug: "", description: "" });
    load();
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight">Categories</h1>
        <p className="mt-1 text-sm text-muted-foreground">Manage content categories.</p>
      </div>

      <div className="mb-8 rounded-2xl border border-border bg-card p-6">
        <h3 className="mb-4 text-lg font-semibold">Add Category</h3>
        <form onSubmit={handleCreate} className="flex flex-wrap gap-3">
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Category name"
            className="rounded-lg border border-border bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none"
            required
          />
          <input
            type="text"
            value={form.slug}
            onChange={(e) => setForm({ ...form, slug: e.target.value })}
            placeholder="slug (auto)"
            className="rounded-lg border border-border bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none"
          />
          <input
            type="text"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            placeholder="Description"
            className="flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            Add
          </button>
        </form>
      </div>

      {loading ? (
        <div className="space-y-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-14 animate-pulse rounded-xl border border-border bg-muted" />
          ))}
        </div>
      ) : (
        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="p-3 text-left font-medium">Name</th>
                <th className="p-3 text-left font-medium">Slug</th>
                <th className="p-3 text-left font-medium">Description</th>
                <th className="p-3 text-left font-medium">Order</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((c) => (
                <tr key={c.id as string} className="border-b border-border/50">
                  <td className="p-3 font-medium">{c.name as string}</td>
                  <td className="p-3 text-muted-foreground">{c.slug as string}</td>
                  <td className="p-3 text-muted-foreground">{(c.description as string) ?? "—"}</td>
                  <td className="p-3 text-muted-foreground">{c.sort_order as number}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
