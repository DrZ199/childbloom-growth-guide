import { describe, it, expect, vi, beforeEach } from "vitest";

// ---------------------------------------------------------------------------
// Use vi.hoisted() so mock refs are available when vi.mock factory runs
// ---------------------------------------------------------------------------

const { mockFrom } = vi.hoisted(() => {
  const mockFrom = vi.fn();
  return { mockFrom };
});

// Mock Supabase admin client
vi.mock("@/integrations/supabase/client.server", () => ({
  supabaseAdmin: {
    from: (...args: unknown[]) => mockFrom(...args),
  },
}));

// Mock TanStack Start server functions
vi.mock("@tanstack/react-start", () => ({
  createServerFn: () => {
    let _handler: ((args: { data: unknown }) => Promise<unknown>) | null = null;
    const callable = ((args: { data: unknown }) => _handler?.(args)) as Record<string, unknown>;
    callable.validator = () => callable;
    callable.handler = (h: (args: { data: unknown }) => Promise<unknown>) => {
      _handler = h;
      return callable;
    };
    callable.middleware = () => callable;
    return callable;
  },
}));

import {
  listArticles,
  getArticleBySlug,
  getPopularArticles,
  getRelatedArticles,
} from "@/lib/api/articles";

describe("articles API", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("listArticles", () => {
    it("returns paginated response with correct structure", async () => {
      const mockRows = [
        {
          id: "1",
          title: "Test Article",
          slug: "test-article",
          excerpt: "An excerpt",
          cover_image_url: null,
          cover_image_alt: null,
          reading_minutes: 5,
          published_at: "2026-01-01",
          is_featured: false,
          is_pillar: false,
          view_count: 100,
          seo_title: null,
          seo_description: null,
          categories: { name: "Health", slug: "health" },
        },
      ];

      mockFrom.mockReturnValue({
        select: vi.fn().mockReturnValue({
          eq: vi.fn().mockReturnValue({
            order: vi.fn().mockReturnValue({
              range: vi.fn().mockResolvedValue({
                data: mockRows,
                count: 1,
                error: null,
              }),
            }),
          }),
        }),
      });

      const result = await listArticles({ data: { page: 1, pageSize: 12, sort: "newest" } });
      expect(result).toBeDefined();
      expect(result.data).toHaveLength(1);
      expect(result.data[0].title).toBe("Test Article");
      expect(result.total).toBe(1);
      expect(result.page).toBe(1);
    });

    it("returns empty array on database error", async () => {
      mockFrom.mockReturnValue({
        select: vi.fn().mockReturnValue({
          eq: vi.fn().mockReturnValue({
            order: vi.fn().mockReturnValue({
              range: vi.fn().mockResolvedValue({
                data: null,
                error: { message: "DB error" },
              }),
            }),
          }),
        }),
      });

      const result = await listArticles({ data: { page: 1, pageSize: 12, sort: "newest" } });
      expect(result.data).toEqual([]);
      expect(result.total).toBe(0);
    });
  });

  describe("getArticleBySlug", () => {
    it("returns null for non-existent article", async () => {
      mockFrom.mockReturnValue({
        select: vi.fn().mockReturnValue({
          eq: vi.fn().mockReturnValue({
            eq: vi.fn().mockReturnValue({
              maybeSingle: vi.fn().mockResolvedValue({ data: null, error: null }),
            }),
          }),
        }),
      });

      const result = await getArticleBySlug({ data: { slug: "non-existent" } });
      expect(result).toBeNull();
    });

    it("returns full article detail when found", async () => {
      const mockRow = {
        id: "uuid-1",
        title: "Newborn Sleep",
        slug: "newborn-sleep",
        excerpt: "Guide",
        content: "<p>content</p>",
        content_html: "<p>content</p>",
        cover_image_url: null,
        cover_image_alt: null,
        reading_minutes: 8,
        published_at: "2026-06-01",
        is_featured: true,
        is_pillar: false,
        view_count: 500,
        seo_title: "Sleep Guide",
        seo_description: "Sleep help",
        faq: [{ question: "Q?", answer: "A." }],
        og_image_url: null,
        canonical_url: null,
        medically_reviewed_by: null,
        medically_reviewed_at: null,
        categories: { name: "Newborn Care", slug: "newborn-care" },
        profiles: { display_name: "Dr. Emma", slug: "emma", credentials: "RN" },
        article_tags: [{ tags: { name: "sleep" } }],
      };

      mockFrom.mockReturnValue({
        select: vi.fn().mockReturnValue({
          eq: vi.fn().mockReturnValue({
            eq: vi.fn().mockReturnValue({
              maybeSingle: vi.fn().mockResolvedValue({ data: mockRow, error: null }),
            }),
          }),
        }),
      });

      const result = await getArticleBySlug({ data: { slug: "newborn-sleep" } });
      expect(result).not.toBeNull();
      expect(result!.title).toBe("Newborn Sleep");
      expect(result!.tags).toEqual(["sleep"]);
      expect(result!.author_name).toBe("Dr. Emma");
    });
  });

  describe("getPopularArticles", () => {
    it("returns empty array on error", async () => {
      mockFrom.mockReturnValue({
        select: vi.fn().mockReturnValue({
          eq: vi.fn().mockReturnValue({
            order: vi.fn().mockReturnValue({
              limit: vi.fn().mockResolvedValue({ data: null, error: { message: "fail" } }),
            }),
          }),
        }),
      });

      const result = await getPopularArticles({ data: { limit: 6 } });
      expect(result).toEqual([]);
    });
  });

  describe("getRelatedArticles", () => {
    it("excludes current article and returns matches", async () => {
      const mockRows = [
        {
          id: "2",
          title: "Related Post",
          slug: "related",
          excerpt: "desc",
          cover_image_url: null,
          reading_minutes: 3,
          published_at: "2026-05-01",
          is_featured: false,
          is_pillar: false,
          view_count: 50,
          seo_title: null,
          seo_description: null,
          categories: { name: "Health", slug: "health" },
        },
      ];

      // Build a chainable mock — every method returns `chain` itself.
      // The chain is thenable (has .then) so `await query.limit(...)` resolves.
      const chain: Record<string, unknown> = {};
      chain.select = () => chain;
      chain.eq = () => chain;
      chain.neq = () => chain;
      chain.or = () => chain;
      chain.order = () => chain;
      chain.range = () => chain;
      chain.limit = () => chain;
      // Make chain thenable — resolves to mock data when awaited
      chain.then = (resolve: (v: unknown) => void) =>
        resolve({ data: mockRows, error: null, count: mockRows.length });
      mockFrom.mockReturnValue(chain);

      const result = await getRelatedArticles({
        data: { articleId: "uuid-1", categorySlug: "health", limit: 4 },
      });
      expect(result).toHaveLength(1);
      expect(result[0].slug).toBe("related");
    });
  });
});
