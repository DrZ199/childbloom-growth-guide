import { createFileRoute } from "@tanstack/react-router";

// Enhanced affiliate redirect with tracking + sponsored support
// This supports both database-backed products and direct Amazon links

interface AffiliateData {
  redirectUrl: string;
  productName: string;
  isSponsored: boolean;
  source: string;
}

export const Route = createFileRoute("/go/$slug")({
  loader: async ({ params }) => {
    const slug = params.slug;

    // Default affiliate mapping (can be expanded or moved to DB)
    const affiliateMap: Record<string, { url: string; name: string }> = {
      // Baby monitors
      "baby-monitor": {
        url: "https://www.amazon.com/s?k=baby+monitor&tag=childbloom-20",
        name: "Baby Monitor",
      },
      // Thermometers
      "baby-thermometer": {
        url: "https://www.amazon.com/s?k=baby+thermometer&tag=childbloom-20",
        name: "Baby Thermometer",
      },
      // Bottles
      "baby-bottle": {
        url: "https://www.amazon.com/s?k=baby+bottle&tag=childbloom-20",
        name: "Baby Bottle",
      },
      "best-baby-bottles": {
        url: "https://www.amazon.com/s?k=baby+bottle&tag=childbloom-20",
        name: "Best Baby Bottles",
      },
      // Formula
      "baby-formula": {
        url: "https://www.amazon.com/s?k=baby+formula&tag=childbloom-20",
        name: "Baby Formula",
      },
      // Books
      "goodnight-moon": {
        url: "https://www.amazon.com/Goodnight-Moon-Margaret-Wise-Brown/dp/0694003611?tag=childbloom-20",
        name: "Goodnight Moon",
      },
      "very-hungry-caterpillar": {
        url: "https://www.amazon.com/Very-Hungry-Caterpillar-Eric-Carle/dp/0399226907?tag=childbloom-20",
        name: "The Very Hungry Caterpillar",
      },
      "dear-zoo": {
        url: "https://www.amazon.com/Dear-Zoo-Rod-Campbell/dp/141694737X?tag=childbloom-20",
        name: "Dear Zoo",
      },
      "thats-not-my": {
        url: "https://www.amazon.com/s?k=thats+not+my+series&tag=childbloom-20",
        name: "That's Not My Series",
      },
      // Car seats & strollers
      "chicco-keyfit-30": {
        url: "https://www.amazon.com/s?k=chicco+keyfit+30&tag=childbloom-20",
        name: "Chicco KeyFit 30",
      },
      "graco-extend2fit": {
        url: "https://www.amazon.com/s?k=graco+extend2fit&tag=childbloom-20",
        name: "Graco Extend2Fit",
      },
      "graco-modes": {
        url: "https://www.amazon.com/s?k=graco+modes+travel+system&tag=childbloom-20",
        name: "Graco Modes Travel System",
      },
      // Sleep products
      "halo-sleepsack": {
        url: "https://www.amazon.com/s?k=halo+sleepsack&tag=childbloom-20",
        name: "Halo SleepSack",
      },
      // Carriers
      "solly-baby-wrap": {
        url: "https://www.amazon.com/s?k=solly+baby+wrap&tag=childbloom-20",
        name: "Solly Baby Wrap",
      },
      "ergobaby-360": {
        url: "https://www.amazon.com/s?k=ergobaby+360&tag=childbloom-20",
        name: "Ergobaby 360",
      },
      // Diaper bags
      "skip-hop-forma": {
        url: "https://www.amazon.com/s?k=skip+hop+forma+diaper+bag&tag=childbloom-20",
        name: "Skip Hop Forma Diaper Bag",
      },
      // Generic fallbacks
      default: {
        url: "https://www.amazon.com/s?k=baby+products&tag=childbloom-20",
        name: "Amazon",
      },
    };

    const product = affiliateMap[slug] || affiliateMap.default;

    const redirectUrl = product.url;
    const productName = product.name;
    const isSponsored = true; // All /go/ links are sponsored

    // Track the click (console + future analytics)
    if (typeof window !== "undefined") {
      // Client-side tracking
      console.log(`[Affiliate] Click tracked: ${slug} → ${redirectUrl}`);

      // Optional: Send to analytics (Google Analytics, Plausible, etc.)
      // window.gtag?.('event', 'affiliate_click', { slug, url: redirectUrl });

      // Perform the redirect
      window.location.href = redirectUrl;
    }

    return {
      redirectUrl,
      productName,
      isSponsored,
      source: "childbloom-affiliate",
    } as AffiliateData;
  },
  component: AffiliateRedirect,
});

function AffiliateRedirect() {
  const data = Route.useLoaderData() as AffiliateData;

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-sm text-center">
        <h1 className="text-lg font-semibold">Redirecting to Partner Store...</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Taking you to <strong>{data.productName}</strong>.
        </p>
        <p className="mt-1 text-xs text-muted-foreground">
          {data.isSponsored && (
            <span className="inline-block rounded bg-amber-100 px-1.5 py-0.5 text-[10px] font-medium text-amber-800">
              Sponsored
            </span>
          )}
        </p>
        <p className="mt-4 text-xs text-muted-foreground">
          If you're not redirected,{" "}
          <a
            href={data.redirectUrl}
            className="text-primary underline"
            rel="sponsored nofollow noopener"
            target="_blank"
          >
            click here
          </a>
          .
        </p>
        <p className="mt-6 text-[10px] text-muted-foreground/70">
          ChildBloom earns a small commission from qualifying purchases at no extra cost to you.
        </p>
      </div>
    </main>
  );
}
