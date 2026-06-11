import { Star, ThumbsDown, ThumbsUp, ExternalLink } from "lucide-react";
import type { AffiliateProduct } from "@/types/article";

interface ProductCardProps {
  product: AffiliateProduct;
}

export function ProductCard({ product }: ProductCardProps) {
  const price =
    product.price_cents != null
      ? `${product.currency === "USD" ? "$" : product.currency}${(product.price_cents / 100).toFixed(2)}`
      : null;

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]">
      {product.is_recommended && (
        <div className="bg-primary px-4 py-1.5 text-center text-xs font-semibold uppercase tracking-wider text-primary-foreground">
          ChildBloom Recommended
        </div>
      )}
      {product.image_url && (
        <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
          <img
            src={product.image_url}
            alt={product.name}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      )}
      <div className="p-5">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        {product.rating && (
          <div className="mt-1 flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${i < Math.round(product.rating!) ? "fill-amber-400 text-amber-400" : "text-muted-foreground/30"}`}
              />
            ))}
            <span className="ml-1 text-xs text-muted-foreground">{product.rating}/5</span>
          </div>
        )}
        {price && <p className="mt-2 text-lg font-bold text-foreground">{price}</p>}
        {product.description && (
          <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{product.description}</p>
        )}
        {product.key_features && product.key_features.length > 0 && (
          <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
            {product.key_features.map((f, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {f}
              </li>
            ))}
          </ul>
        )}
        {product.pros && product.pros.length > 0 && (
          <div className="mt-4">
            <div className="flex items-center gap-1.5 text-sm font-medium text-green-700">
              <ThumbsUp className="h-4 w-4" /> Pros
            </div>
            <ul className="mt-1 space-y-1 text-sm text-muted-foreground">
              {product.pros.map((p, i) => (
                <li key={i}>+ {p}</li>
              ))}
            </ul>
          </div>
        )}
        {product.cons && product.cons.length > 0 && (
          <div className="mt-3">
            <div className="flex items-center gap-1.5 text-sm font-medium text-red-600">
              <ThumbsDown className="h-4 w-4" /> Cons
            </div>
            <ul className="mt-1 space-y-1 text-sm text-muted-foreground">
              {product.cons.map((c, i) => (
                <li key={i}>- {c}</li>
              ))}
            </ul>
          </div>
        )}
        <a
          href={product.affiliate_url}
          target="_blank"
          rel="sponsored nofollow noopener"
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
        >
          <ExternalLink className="h-4 w-4" />
          View on Store
        </a>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Comparison table component
// ---------------------------------------------------------------------------

interface ComparisonTableProps {
  products: AffiliateProduct[];
}

export function ComparisonTable({ products }: ComparisonTableProps) {
  if (products.length === 0) return null;

  return (
    <div className="overflow-x-auto rounded-2xl border border-border">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border bg-muted/50">
            <th className="p-3 text-left font-semibold">Product</th>
            <th className="p-3 text-center font-semibold">Rating</th>
            <th className="p-3 text-center font-semibold">Price</th>
            <th className="p-3 text-center font-semibold">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id} className="border-b border-border/50">
              <td className="p-3 font-medium">{p.name}</td>
              <td className="p-3 text-center">{p.rating ? `${p.rating}/5` : "—"}</td>
              <td className="p-3 text-center">
                {p.price_cents != null
                  ? `${p.currency === "USD" ? "$" : p.currency}${(p.price_cents / 100).toFixed(2)}`
                  : "—"}
              </td>
              <td className="p-3 text-center">
                <a
                  href={p.affiliate_url}
                  target="_blank"
                  rel="sponsored nofollow noopener"
                  className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground hover:opacity-90"
                >
                  View <ExternalLink className="h-3 w-3" />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
