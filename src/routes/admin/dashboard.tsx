import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { getAdminDashboardStats } from "@/lib/api/admin";
import { FileText, Users, MessageSquare, Plus } from "lucide-react";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/dashboard")({
  component: AdminDashboard,
});

function AdminDashboard() {
  const [stats, setStats] = useState({ articleCount: 0, subscriberCount: 0, unhandledMessages: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAdminDashboardStats({ data: undefined })
      .then(setStats)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const cards = [
    {
      label: "Articles",
      value: stats.articleCount,
      icon: FileText,
      color: "bg-primary/10 text-primary",
      href: "/admin/articles",
    },
    {
      label: "Subscribers",
      value: stats.subscriberCount,
      icon: Users,
      color: "bg-blue-100 text-blue-700",
      href: "/admin/subscribers",
    },
    {
      label: "Unread Messages",
      value: stats.unhandledMessages,
      icon: MessageSquare,
      color: "bg-amber-100 text-amber-700",
      href: "/admin/messages",
    },
  ];

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Dashboard</h1>
          <p className="mt-1 text-sm text-muted-foreground">Overview of your ChildBloom content.</p>
        </div>
        <Link
          to="/admin/articles/new"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
        >
          <Plus className="h-4 w-4" /> New Article
        </Link>
      </div>

      {loading ? (
        <div className="grid gap-6 sm:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-32 animate-pulse rounded-2xl border border-border bg-muted" />
          ))}
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-3">
          {cards.map((card) => (
            <Link
              key={card.label}
              to={card.href}
              className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition hover:shadow-[var(--shadow-soft)]"
            >
              <div className={`mb-4 inline-flex rounded-xl p-3 ${card.color}`}>
                <card.icon className="h-5 w-5" />
              </div>
              <p className="text-3xl font-bold">{card.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{card.label}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
