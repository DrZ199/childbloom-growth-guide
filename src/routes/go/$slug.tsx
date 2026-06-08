import { createFileRoute } from "@tanstack/react-router";
import { getProductBySlug, trackAffiliateClick } from "@/lib/api/products";

export const Route = createFileRoute("/go/$slug")({
  loader: async ({ params }) => {
    const product = await getProductBySlug({ data: { slug: params.slug } });
    if (!product) {
      throw new Error("Product not found");
    }

    // Track click asynchronously
    trackAffiliateClick({ data: { productId: product.id } }).catch(() => {});

    // Redirect to affiliate URL
    if (typeof window !== "undefined") {
      window.location.href = product.affiliate_url;
    }

    return { redirectUrl: product.affiliate_url, productName: product.name };
  },
  component: AffiliateRedirect,
});

function AffiliateRedirect() {
  const { redirectUrl, productName } = Route.useLoaderData();

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-sm text-center">
        <h1 className="text-lg font-semibold">Redirecting...</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Taking you to <strong>{productName}</strong>.
        </p>
        <p className="mt-4 text-xs text-muted-foreground">
          If you're not redirected,{" "}
          <a
            href={redirectUrl}
            className="text-primary underline"
            rel="sponsored nofollow noopener"
          >
            click here
          </a>
          .
        </p>
      </div>
    </main>
  );
}
