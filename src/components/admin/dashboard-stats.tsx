import { BarChart3, Eye, Mail, MessageSquare, MousePointerClick, Users } from "lucide-react";
import type { AnalyticsOverview } from "@/lib/api/analytics";

interface DashboardStatsProps {
  stats: AnalyticsOverview;
}

export function DashboardStats({ stats }: DashboardStatsProps) {
  const cards = [
    {
      label: "Total Articles",
      value: stats.totalArticles,
      icon: BarChart3,
      sub: `${stats.publishedArticles} published, ${stats.draftArticles} drafts`,
      color: "text-blue-600 bg-blue-50",
    },
    {
      label: "Page Views",
      value: stats.totalPageViews.toLocaleString(),
      icon: Eye,
      sub: "Across all published articles",
      color: "text-emerald-600 bg-emerald-50",
    },
    {
      label: "Subscribers",
      value: stats.totalSubscribers.toLocaleString(),
      icon: Mail,
      sub: `${stats.confirmedSubscribers} confirmed`,
      color: "text-violet-600 bg-violet-50",
    },
    {
      label: "Messages",
      value: stats.totalMessages,
      icon: MessageSquare,
      sub: `${stats.unhandledMessages} unhandled`,
      color: "text-amber-600 bg-amber-50",
    },
    {
      label: "Affiliate Clicks",
      value: stats.totalAffiliateClicks.toLocaleString(),
      icon: MousePointerClick,
      sub: "Total click-throughs",
      color: "text-rose-600 bg-rose-50",
    },
    {
      label: "Active Users",
      value: stats.confirmedSubscribers,
      icon: Users,
      sub: "Confirmed newsletter subscribers",
      color: "text-teal-600 bg-teal-50",
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((card) => (
        <div
          key={card.label}
          className="overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)]"
        >
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-muted-foreground">{card.label}</p>
            <div className={`rounded-lg p-2 ${card.color}`}>
              <card.icon className="h-4 w-4" />
            </div>
          </div>
          <p className="mt-2 text-3xl font-bold tracking-tight">{card.value}</p>
          <p className="mt-1 text-xs text-muted-foreground">{card.sub}</p>
        </div>
      ))}
    </div>
  );
}
