import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Breadcrumbs, generateBreadcrumbSchema } from "@/components/content/breadcrumbs";
import type { BreadcrumbItem } from "@/components/content/breadcrumbs";

// Mock TanStack Link since it requires router context
vi.mock("@tanstack/react-router", () => ({
  Link: ({ children, to }: { children: React.ReactNode; to: string }) => (
    <a href={to}>{children}</a>
  ),
}));

describe("Breadcrumbs", () => {
  it("renders Home as the first item", () => {
    render(<Breadcrumbs items={[{ label: "Articles" }]} />);
    expect(screen.getByText("Home")).toBeInTheDocument();
  });

  it("renders all provided items", () => {
    const items: BreadcrumbItem[] = [
      { label: "Articles", href: "/articles" },
      { label: "Newborn Sleep" },
    ];
    render(<Breadcrumbs items={items} />);
    expect(screen.getByText("Articles")).toBeInTheDocument();
    expect(screen.getByText("Newborn Sleep")).toBeInTheDocument();
  });

  it("last item has aria-current='page'", () => {
    const items: BreadcrumbItem[] = [
      { label: "Articles", href: "/articles" },
      { label: "Current Page" },
    ];
    render(<Breadcrumbs items={items} />);
    const current = screen.getByText("Current Page");
    expect(current).toHaveAttribute("aria-current", "page");
  });

  it("non-last items are rendered as links", () => {
    const items: BreadcrumbItem[] = [
      { label: "Articles", href: "/articles" },
      { label: "Current" },
    ];
    render(<Breadcrumbs items={items} />);
    const link = screen.getByText("Articles").closest("a");
    expect(link).toHaveAttribute("href", "/articles");
  });

  it("has correct aria-label on nav element", () => {
    render(<Breadcrumbs items={[{ label: "Test" }]} />);
    const nav = screen.getByRole("navigation", { name: "Breadcrumb" });
    expect(nav).toBeInTheDocument();
  });
});

describe("generateBreadcrumbSchema", () => {
  it("returns valid BreadcrumbList JSON-LD", () => {
    const items: BreadcrumbItem[] = [
      { label: "Articles", href: "/articles" },
      { label: "Sleep Guide", href: "/articles/sleep" },
    ];
    const schema = generateBreadcrumbSchema(items, "https://childbloom.app");
    expect(schema["@type"]).toBe("BreadcrumbList");
    expect(schema.itemListElement).toHaveLength(3); // Home + 2 items
    expect(schema.itemListElement[0].name).toBe("Home");
    expect(schema.itemListElement[0].position).toBe(1);
    expect(schema.itemListElement[2].name).toBe("Sleep Guide");
  });

  it("last item has no URL", () => {
    const items: BreadcrumbItem[] = [{ label: "Current Page" }];
    const schema = generateBreadcrumbSchema(items, "https://childbloom.app");
    // Home has URL, current page doesn't
    expect(schema.itemListElement[0].item).toBe("https://childbloom.app/");
    expect(schema.itemListElement[1].item).toBeUndefined();
  });
});
