interface StructuredDataProps {
  data: Record<string, unknown>;
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// ---------------------------------------------------------------------------
// FAQPage schema
// ---------------------------------------------------------------------------

export function generateFaqSchema(faq: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

// ---------------------------------------------------------------------------
// Article schema (enhanced)
// ---------------------------------------------------------------------------

export function generateArticleSchema(params: {
  title: string;
  description: string;
  url: string;
  imageUrl?: string;
  authorName?: string;
  publishedAt?: string;
  modifiedAt?: string;
  categoryName?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: params.title,
    description: params.description,
    url: params.url,
    image: params.imageUrl,
    datePublished: params.publishedAt,
    dateModified: params.modifiedAt ?? params.publishedAt,
    author: params.authorName
      ? { "@type": "Person", name: params.authorName }
      : undefined,
    publisher: {
      "@type": "Organization",
      name: "ChildBloom",
      logo: {
        "@type": "ImageObject",
        url: "https://childbloom.app/logo.png",
      },
    },
    articleSection: params.categoryName,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": params.url,
    },
  };
}

// ---------------------------------------------------------------------------
// WebSite schema with SearchAction
// ---------------------------------------------------------------------------

export function generateWebSiteSchema(baseUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ChildBloom",
    url: baseUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

// ---------------------------------------------------------------------------
// ItemList schema for article listings
// ---------------------------------------------------------------------------

export function generateItemListSchema(
  items: Array<{ title: string; url: string; position: number }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item) => ({
      "@type": "ListItem",
      position: item.position,
      name: item.title,
      url: item.url,
    })),
  };
}

// ---------------------------------------------------------------------------
// Product + Review schema
// ---------------------------------------------------------------------------

export function generateProductSchema(params: {
  name: string;
  description: string;
  imageUrl?: string;
  rating?: number;
  reviewCount?: number;
  brand?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: params.name,
    description: params.description,
    image: params.imageUrl,
    brand: params.brand ? { "@type": "Brand", name: params.brand } : undefined,
    aggregateRating: params.rating
      ? {
          "@type": "AggregateRating",
          ratingValue: params.rating,
          bestRating: 5,
          reviewCount: params.reviewCount ?? 1,
        }
      : undefined,
  };
}
