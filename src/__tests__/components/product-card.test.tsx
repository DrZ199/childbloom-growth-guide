import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ProductCard, ComparisonTable } from "@/components/monetization/product-card";
import type { AffiliateProduct } from "@/types/article";

function makeProduct(overrides: Partial<AffiliateProduct> = {}): AffiliateProduct {
  return {
    id: "prod-1",
    name: "Test Baby Monitor",
    slug: "test-monitor",
    description: "A reliable baby monitor",
    image_url: "https://example.com/img.jpg",
    affiliate_url: "https://amzn.to/abc",
    rating: 4.5,
    price_cents: 9999,
    currency: "USD",
    pros: ["Great quality", "Easy setup"],
    cons: ["Pricey"],
    key_features: ["Night vision", "Two-way talk"],
    is_recommended: true,
    click_count: 100,
    ...overrides,
  };
}

describe("ProductCard", () => {
  it("renders product name", () => {
    render(<ProductCard product={makeProduct()} />);
    expect(screen.getByText("Test Baby Monitor")).toBeInTheDocument();
  });

  it("renders price formatted in USD", () => {
    render(<ProductCard product={makeProduct()} />);
    expect(screen.getByText("$99.99")).toBeInTheDocument();
  });

  it("renders 'ChildBloom Recommended' badge when recommended", () => {
    render(<ProductCard product={makeProduct({ is_recommended: true })} />);
    expect(screen.getByText("ChildBloom Recommended")).toBeInTheDocument();
  });

  it("does not render badge when not recommended", () => {
    render(<ProductCard product={makeProduct({ is_recommended: false })} />);
    expect(screen.queryByText("ChildBloom Recommended")).not.toBeInTheDocument();
  });

  it("renders star rating", () => {
    render(<ProductCard product={makeProduct({ rating: 4 })} />);
    expect(screen.getByText("4/5")).toBeInTheDocument();
  });

  it("renders pros and cons", () => {
    render(<ProductCard product={makeProduct()} />);
    expect(screen.getByText("+ Great quality")).toBeInTheDocument();
    expect(screen.getByText("- Pricey")).toBeInTheDocument();
  });

  it("renders key features", () => {
    render(<ProductCard product={makeProduct()} />);
    expect(screen.getByText("Night vision")).toBeInTheDocument();
    expect(screen.getByText("Two-way talk")).toBeInTheDocument();
  });

  it("affiliate link has rel='sponsored nofollow noopener'", () => {
    render(<ProductCard product={makeProduct()} />);
    const link = screen.getByRole("link", { name: /View on Store/i });
    expect(link).toHaveAttribute("rel", "sponsored nofollow noopener");
    expect(link).toHaveAttribute("href", "https://amzn.to/abc");
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("handles null price gracefully", () => {
    render(<ProductCard product={makeProduct({ price_cents: null })} />);
    expect(screen.queryByText(/\$/)).not.toBeInTheDocument();
  });
});

describe("ComparisonTable", () => {
  it("renders product names in table", () => {
    const products = [
      makeProduct({ id: "1", name: "Monitor A" }),
      makeProduct({ id: "2", name: "Monitor B" }),
    ];
    render(<ComparisonTable products={products} />);
    expect(screen.getByText("Monitor A")).toBeInTheDocument();
    expect(screen.getByText("Monitor B")).toBeInTheDocument();
  });

  it("renders nothing for empty products array", () => {
    const { container } = render(<ComparisonTable products={[]} />);
    expect(container.innerHTML).toBe("");
  });

  it("renders rating and price for each product", () => {
    const products = [makeProduct({ rating: 4.5, price_cents: 5000 })];
    render(<ComparisonTable products={products} />);
    expect(screen.getByText("4.5/5")).toBeInTheDocument();
    expect(screen.getByText("$50.00")).toBeInTheDocument();
  });

  it("all affiliate links in table have correct rel", () => {
    const products = [makeProduct({ id: "1" }), makeProduct({ id: "2" })];
    render(<ComparisonTable products={products} />);
    const links = screen.getAllByRole("link", { name: /View/i });
    links.forEach((link) => {
      expect(link).toHaveAttribute("rel", "sponsored nofollow noopener");
    });
  });
});
