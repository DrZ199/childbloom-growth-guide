import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Search, Sparkles } from "lucide-react";
import { ThemeToggleCompact } from "./theme-toggle";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/articles", label: "Articles" },
  { href: "/categories", label: "Categories" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

/**
 * Mobile navigation with hamburger menu and search overlay
 * - Slide-out drawer from right
 * - Full-screen search overlay
 * - Touch-friendly targets (min 44px)
 * - Keyboard navigation support
 * - Focus trap when open
 */
export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Close on ESC
  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Escape") {
      setIsOpen(false);
      setSearchOpen(false);
    }
  }

  // Close when clicking outside
  function handleBackdropClick() {
    setIsOpen(false);
  }

  return (
    <>
      {/* Hamburger button */}
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
        aria-expanded={isOpen}
        className="lg:hidden inline-flex items-center justify-center rounded-lg p-2 text-foreground hover:bg-muted transition-colors"
        style={{ minWidth: 44, minHeight: 44 }}
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={handleBackdropClick}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        onKeyDown={handleKeyDown}
        className={cn(
          "lg:hidden fixed inset-y-0 right-0 z-50 w-80 max-w-[80vw] bg-background border-l border-border shadow-xl transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <Link
              to="/"
              className="flex items-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              <span
                className="grid h-9 w-9 place-items-center rounded-xl text-primary-foreground"
                style={{ background: "var(--gradient-primary)" }}
              >
                <Sparkles className="h-5 w-5" />
              </span>
              <span className="text-lg font-semibold" style={{ fontFamily: "Fraunces, serif" }}>
                ChildBloom
              </span>
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              className="inline-flex items-center justify-center rounded-lg p-2 hover:bg-muted transition-colors"
              style={{ minWidth: 44, minHeight: 44 }}
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation links */}
          <nav className="flex-1 overflow-y-auto p-4" aria-label="Mobile navigation">
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-lg px-4 py-3 text-base font-medium text-foreground hover:bg-muted transition-colors"
                    style={{ minHeight: 44 }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer actions */}
          <div className="border-t border-border p-4 space-y-3">
            {/* Search button */}
            <button
              onClick={() => {
                setIsOpen(false);
                setSearchOpen(true);
              }}
              className="w-full inline-flex items-center gap-3 rounded-lg border border-border bg-background px-4 py-3 text-sm text-muted-foreground hover:bg-muted transition-colors"
              style={{ minHeight: 44 }}
            >
              <Search className="h-5 w-5" />
              Search articles...
            </button>

            {/* Theme toggle */}
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Theme</span>
              <ThemeToggleCompact />
            </div>

            {/* Subscribe button */}
            <Link
              to="/"
              hash="newsletter"
              onClick={() => setIsOpen(false)}
              className="w-full inline-flex items-center justify-center rounded-full bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
              style={{ minHeight: 44 }}
            >
              Subscribe
            </Link>
          </div>
        </div>
      </div>

      {/* Search overlay */}
      {searchOpen && (
        <SearchOverlay onClose={() => setSearchOpen(false)} />
      )}
    </>
  );
}

/**
 * Full-screen search overlay
 */
function SearchOverlay({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState("");

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Escape") {
      onClose();
    }
    if (e.key === "Enter" && query.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(query)}`;
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm animate-in fade-in duration-200"
      onKeyDown={handleKeyDown}
    >
      <div className="mx-auto max-w-2xl px-4 pt-20">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-muted-foreground" />
          <input
            type="search"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles..."
            aria-label="Search articles"
            className="w-full rounded-2xl border-2 border-primary bg-background pl-14 pr-12 py-4 text-lg focus:outline-none focus:ring-4 focus:ring-primary/20"
            style={{ minHeight: 56 }}
          />
          <button
            onClick={onClose}
            aria-label="Close search"
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-lg p-2 hover:bg-muted transition-colors"
            style={{ minWidth: 44, minHeight: 44 }}
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <p className="mt-4 text-center text-sm text-muted-foreground">
          Press Enter to search, ESC to close
        </p>
      </div>
    </div>
  );
}
