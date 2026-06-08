import { createFileRoute } from "@tanstack/react-router";
import { siteName } from "@/lib/site-data";
import { Breadcrumbs } from "@/components/content/breadcrumbs";
import { DashboardStats } from "@/components/admin/dashboard-stats";
import { TopArticlesTable } from "@/components/admin/top-articles-table";
import type { AnalyticsOverview, TopArticle } from "@/lib/api/analytics";

export const Route = createFileRoute("/admin/analytics")({
  head: () => ({
    meta: [
      { title: `Analytics | Admin | ${siteName}` },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminAnalyticsPage,
});

function AdminAnalyticsPage() {
  // In a real app, these would be loaded via a TanStack loader:
  // const analytics = Route.useLoaderData();
  // For now, show placeholder structure
  const placeholderStats: AnalyticsOverview = {
    totalArticles: 0,
    publishedArticles: 0,
    draftArticles: 0,
    totalSubscribers: 0,
    confirmedSubscribers: 0,
    totalPageViews: 0,
    totalMessages: 0,
    unhandledMessages: 0,
    totalAffiliateClicks: 0,
  };

  const placeholderTopArticles: TopArticle[] = [];

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <Breadcrumbs
        items={[
          { label: "Admin", href: "/admin" },
          { label: "Analytics" },
        ]}
      />

      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Analytics Dashboard</h1>
        <p className="mt-2 text-muted-foreground">
          Overview of your site's performance, content, and audience.
        </p>
      </div>

      <div className="space-y-8">
        <DashboardStats stats={placeholderStats} />

        <div className="grid gap-6 lg:grid-cols-2">
          <TopArticlesTable articles={placeholderTopArticles} />

          {/* Subscriber Growth Chart placeholder */}
          <div className="overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
            <h2 className="mb-4 text-lg font-semibold">Subscriber Growth</h2>
            <div className="flex h-48 items-center justify-center rounded-xl border-2 border-dashed border-border text-sm text-muted-foreground">
              Connect analytics to view subscriber growth chart
            </div>
          </div>
        </div>

        {/* Category Performance */}
        <div className="overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
          <h2 className="mb-4 text-lg font-semibold">Category Performance</h2>
          <div className="flex h-32 items-center justify-center rounded-xl border-2 border-dashed border-border text-sm text-muted-foreground">
            Connect analytics to view category performance
          </div>
        </div>

        {/* Affiliate Click Stats */}
        <div className="overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
          <h2 className="mb-4 text-lg font-semibold">Top Affiliate Products</h2>
          <div className="flex h-32 items-center justify-center rounded-xl border-2 border-dashed border-border text-sm text-muted-foreground">
            Connect analytics to view affiliate click-through data
          </div>
        </div>
      </div>
    </main>
  );
}
