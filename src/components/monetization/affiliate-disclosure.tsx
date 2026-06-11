import { Info } from "lucide-react";

/**
 * FTC-compliant affiliate disclosure. Place at the TOP of any article body
 * that contains affiliate links (product reviews, "best of" roundups).
 */
export function AffiliateDisclosure({ className = "" }: { className?: string }) {
  return (
    <div
      role="note"
      aria-label="Affiliate disclosure"
      className={`flex items-start gap-3 rounded-xl border border-border bg-muted/50 p-4 text-sm text-muted-foreground ${className}`}
    >
      <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
      <p>
        <strong className="text-foreground">Affiliate disclosure:</strong> Some links in this
        article are affiliate links. If you buy through them, ChildBloom may earn a small
        commission at no extra cost to you. We only recommend products our team has independently
        researched. See our{" "}
        <a href="/affiliate-disclosure" className="text-primary underline hover:no-underline">
          full affiliate disclosure
        </a>
        .
      </p>
    </div>
  );
}