import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { FileText, Users, LayoutDashboard, Tags, MessageSquare, LogOut, BarChart3 } from "lucide-react";

export const Route = createFileRoute("/admin/")({
  component: AdminLayout,
});

function AdminLayout() {
  const navItems = [
    { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
    { label: "Articles", href: "/admin/articles", icon: FileText },
    { label: "Categories", href: "/admin/categories", icon: Tags },
    { label: "Subscribers", href: "/admin/subscribers", icon: Users },
    { label: "Messages", href: "/admin/messages", icon: MessageSquare },
    { label: "Analytics", href: "/admin/analytics", icon: BarChart3 },
    { label: "Back to site", href: "/", icon: LogOut },
  ];

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="hidden w-64 border-r border-border bg-card p-4 md:block">
        <div className="mb-8 flex items-center gap-2 px-2">
          <span className="text-lg font-semibold" style={{ fontFamily: "Fraunces, serif" }}>
            ChildBloom
          </span>
          <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase text-primary">
            Admin
          </span>
        </div>
        <nav className="space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              activeProps={{ className: "bg-primary/10 text-primary" }}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 p-6 md:p-8">
        <Outlet />
      </div>
    </div>
  );
}
