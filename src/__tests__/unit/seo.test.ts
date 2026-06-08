import { describe, it, expect } from "vitest";
import {
  slugify,
  calculateReadingTime,
  formatDate,
  formatDateISO,
  truncateMetaDescription,
  absoluteUrl,
  buildFaqSchema,
  buildItemListSchema,
  buildOrganizationSchema,
  buildWebsiteSearchSchema,
} from "@/lib/seo";

describe("slugify", () => {
  it("converts a title to lowercase hyphenated slug", () => {
    expect(slugify("Hello World")).toBe("hello-world");
  });

  it("strips special characters", () => {
    expect(slugify("What's New? (2026)")).toBe("whats-new-2026");
  });

  it("collapses multiple spaces and hyphens", () => {
    expect(slugify("Too   Many   Spaces")).toBe("too-many-spaces");
    expect(slugify("hyphen--double")).toBe("hyphen-double");
  });

  it("strips diacritics", () => {
    expect(slugify("Crème brûlée guide")).toBe("creme-brulee-guide");
  });

  it("trims leading/trailing hyphens", () => {
    expect(slugify("--trimmed--")).toBe("trimmed");
  });

  it("handles empty string", () => {
    expect(slugify("")).toBe("");
  });
});

describe("calculateReadingTime", () => {
  it("returns 1 minute for very short text", () => {
    expect(calculateReadingTime("Hello")).toBe(1);
  });

  it("calculates based on word count at 200 WPM", () => {
    const text = Array.from({ length: 400 }, (_, i) => `word${i}`).join(" ");
    expect(calculateReadingTime(text)).toBe(2);
  });

  it("rounds up partial minutes", () => {
    const text = Array.from({ length: 201 }, (_, i) => `w${i}`).join(" ");
    expect(calculateReadingTime(text)).toBe(2);
  });

  it("handles empty string", () => {
    expect(calculateReadingTime("")).toBe(1);
  });
});

describe("formatDate", () => {
  it("formats an ISO date string to human-readable form", () => {
    const result = formatDate("2026-06-01T00:00:00Z");
    expect(result).toMatch(/June 1, 2026|June 01, 2026/);
  });
});

describe("formatDateISO", () => {
  it("returns YYYY-MM-DD format", () => {
    expect(formatDateISO("2026-06-01T12:34:56Z")).toBe("2026-06-01");
  });
});

describe("truncateMetaDescription", () => {
  it("returns text unchanged if under limit", () => {
    expect(truncateMetaDescription("Short text")).toBe("Short text");
  });

  it("truncates at word boundary with ellipsis", () => {
    const long = "A".repeat(200);
    const result = truncateMetaDescription(long, 155);
    expect(result.length).toBeLessThanOrEqual(156); // 155 + ellipsis
    expect(result.endsWith("…")).toBe(true);
  });

  it("breaks at last space when possible", () => {
    const text = "word ".repeat(40).trim();
    const result = truncateMetaDescription(text, 100);
    expect(result.endsWith("…")).toBe(true);
    expect(result).not.toContain("… ");
  });
});

describe("absoluteUrl", () => {
  it("joins base and path", () => {
    expect(absoluteUrl("https://childbloom.app", "/articles/sleep")).toBe(
      "https://childbloom.app/articles/sleep",
    );
  });

  it("strips trailing slash from base", () => {
    expect(absoluteUrl("https://childbloom.app/", "/about")).toBe(
      "https://childbloom.app/about",
    );
  });

  it("adds leading slash to path if missing", () => {
    expect(absoluteUrl("https://childbloom.app", "about")).toBe(
      "https://childbloom.app/about",
    );
  });
});

describe("buildOrganizationSchema", () => {
  it("returns valid JSON-LD structure", () => {
    const schema = buildOrganizationSchema("https://childbloom.app", "ChildBloom");
    expect(schema["@type"]).toBe("Organization");
    expect(schema.name).toBe("ChildBloom");
    expect(schema.url).toBe("https://childbloom.app");
  });
});

describe("buildWebsiteSearchSchema", () => {
  it("includes SearchAction with correct target URL", () => {
    const schema = buildWebsiteSearchSchema("https://childbloom.app", "ChildBloom");
    expect(schema.potentialAction["@type"]).toBe("SearchAction");
    expect(schema.potentialAction.target).toContain("/search?q=");
  });
});

describe("buildFaqSchema", () => {
  it("builds FAQPage schema from FAQ array", () => {
    const faq = [
      { question: "Q1?", answer: "A1." },
      { question: "Q2?", answer: "A2." },
    ];
    const schema = buildFaqSchema(faq, "https://childbloom.app/articles/test");
    expect(schema["@type"]).toBe("FAQPage");
    expect(schema.mainEntity).toHaveLength(2);
    expect(schema.mainEntity[0]["@type"]).toBe("Question");
    expect(schema.mainEntity[0].name).toBe("Q1?");
  });
});

describe("buildItemListSchema", () => {
  it("builds ItemList schema with ordered items", () => {
    const items = [
      { title: "Article A", slug: "a", position: 1 },
      { title: "Article B", slug: "b", position: 2 },
    ];
    const schema = buildItemListSchema(items, "https://childbloom.app");
    expect(schema["@type"]).toBe("ItemList");
    expect(schema.itemListElement).toHaveLength(2);
    expect(schema.itemListElement[0].url).toContain("/articles/a");
    expect(schema.itemListElement[1].position).toBe(2);
  });
});
