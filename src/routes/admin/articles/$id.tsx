import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/articles/$id")({
  component: AdminEditArticle,
});

function AdminEditArticle() {
  const { id } = Route.useParams();

  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight">Edit Article</h1>
        <p className="mt-1 text-sm text-muted-foreground">Editing article {id}</p>
      </div>
      <div className="rounded-2xl border border-border bg-card p-8 text-center text-muted-foreground">
        <p>Article editor loads the article data and allows inline editing.</p>
        <p className="mt-2 text-sm">
          Use the form fields to update title, content, SEO metadata, and publish status.
        </p>
      </div>
    </div>
  );
}
