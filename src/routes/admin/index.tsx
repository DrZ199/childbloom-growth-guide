import { useState, useEffect, useCallback } from "react";
import { createFileRoute, Link, Outlet, useLocation } from "@tanstack/react-router";
import { FileText, Users, LayoutDashboard, Tags, MessageSquare, LogOut, BarChart3, Menu, X } from "lucide-react";

export const Route = createFileRoute("/admin/")({
  component: AdminLayout,
});

const navItems = [
  { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Articles", href: "/admin/articles", icon: FileText },
  { label: "Categories", href: "/admin/categories", icon: Tags },
  { label: "Subscribers", href: "/admin/subscribers", icon: Users },
  { label: "Messages", href: "/admin/messages", icon: MessageSquare },
  { label: "Analytics", href: "/admin/analytics", icon: BarChart3 },
  { label: "Back to site", href: "/", icon: LogOut },
];

function AdminLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // Close mobile sidebar on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Close on ESC
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Escape") setMobileOpen(false);
  }, []);

  return (
    <div className="flex min-h-screen bg-background">
      {/* Mobile header bar */}
      <div className="fixed top-0 left-0 right-0 z-30 flex h-14 items-center gap-3 border-b border-border bg-card px-4 md:hidden">
        <button
          onClick={() => setMobileOpen(true)}
          aria-label="Open admin menu"
          aria-expanded={mobileOpen}
          className="inline-flex items-center justify-center rounded-lg p-2 text-foreground hover:bg-muted transition-colors"
          style={{ minWidth: 44, minHeight: 44 }}
        >
          <Menu className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-2">
          <span className="text-base font-semibold" style={{ fontFamily: "Fraunces, serif" }}>
            ChildBloom
          </span>
          <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase text-primary">
            Admin
          </span>
        </div>
      </div>

      {/* Mobile backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar — desktop: always visible; mobile: slide-out drawer */}
      <aside
        onKeyDown={handleKeyDown}
        className={`
          fixed inset-y-0 left-0 z-50 w-64 border-r border-border bg-card p-4
          transform transition-transform duration-300 ease-in-out
          md:static md:translate-x-0 md:z-auto
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Close button (mobile only) */}
        <div className="mb-4 flex items-center justify-between md:hidden">
          <div className="flex items-center gap-2 px-2">
            <span className="text-base font-semibold" style={{ fontFamily: "Fraunces, serif" }}>
              ChildBloom
            </span>
            <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase text-primary">
              Admin
            </span>
          </div>
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Close admin menu"
            className="inline-flex items-center justify-center rounded-lg p-2 text-foreground hover:bg-muted transition-colors"
            style={{ minWidth: 44, minHeight: 44 }}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Logo (desktop only) */}
        <div className="mb-8 hidden items-center gap-2 px-2 md:flex">
          <span className="text-lg font-semibold" style={{ fontFamily: "Fraunces, serif" }}>
            ChildBloom
          </span>
          <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase text-primary">
            Admin
          </span>
        </div>

        <nav className="space-y-1" aria-label="Admin navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              style={{ minHeight: 44 }}
              activeProps={{ className: "bg-primary/10 text-primary" }}
            >
              <item.icon className="h-4 w-4 shrink-0" />
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main content — offset for mobile header */}
      <div className="flex-1 pt-14 md:pt-0">
        <div className="p-6 md:p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
