export interface ArticleSummary {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  cover_image_url: string | null;
  cover_image_alt: string | null;
  reading_minutes: number | null;
  published_at: string | null;
  category_name?: string;
  category_slug?: string;
  tags?: string[];
  is_featured: boolean;
  is_pillar: boolean;
  view_count: number;
  seo_title: string | null;
  seo_description: string | null;
}

export interface ArticleDetail extends ArticleSummary {
  content: string;
  content_html: string | null;
  author_name?: string;
  author_slug?: string;
  author_credentials?: string;
  faq: Array<{ question: string; answer: string }> | null;
  og_image_url: string | null;
  canonical_url: string | null;
  medically_reviewed_by: string | null;
  medically_reviewed_at: string | null;
}

export interface CategorySummary {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  icon: string | null;
  color: string | null;
  article_count?: number;
}

export interface CategoryDetail extends CategorySummary {
  seo_title: string | null;
  seo_description: string | null;
  articles: ArticleSummary[];
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface SearchResult {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  category_name?: string;
  rank: number;
}

export interface AffiliateProduct {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  image_url: string | null;
  affiliate_url: string;
  rating: number | null;
  price_cents: number | null;
  currency: string;
  pros: string[] | null;
  cons: string[] | null;
  key_features: string[] | null;
  is_recommended: boolean;
  click_count: number;
}
