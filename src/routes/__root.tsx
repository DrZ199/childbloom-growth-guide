import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { ThemeProvider } from "@/hooks/use-theme";
import { SkipToContent } from "@/components/layout/skip-to-content";
import { initWebVitals } from "@/lib/web-vitals";
import { initSentryClient, captureException } from "@/lib/error-monitor";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  useEffect(() => {
    captureException(error, {
      action: "route_error",
      extra: { route: window.location.pathname },
    });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "ChildBloom — Helping Children Grow, Learn, and Thrive" },
      {
        name: "description",
        content:
          "Expert, evidence-based guidance on child health, parenting, newborn care, nutrition, development, and trusted product reviews for modern families.",
      },
      { property: "og:title", content: "ChildBloom — Helping Children Grow, Learn, and Thrive" },
      {
        property: "og:description",
        content:
          "Expert guidance on child health, parenting, newborn care, nutrition, development, and trusted product reviews.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://childbloom.site/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "ChildBloom — Helping Children Grow, Learn, and Thrive" },
      {
        name: "twitter:description",
        content:
          "Expert guidance on child health, parenting, newborn care, nutrition, development, and trusted product reviews.",
      },
      { name: "twitter:image", content: "https://childbloom.site/og-image.png" },
      { name: "p:domain_verify", content: "0f57af0769c37ae9cd4b9d83f49a3800" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "ChildBloom",
          url: "https://childbloom.site",
          logo: "https://childbloom.site/logo.png",
          description:
            "Evidence-based guidance on child health, parenting, newborn care, nutrition, and development.",
          sameAs: [
            "https://www.pinterest.com/childbloom",
            "https://www.facebook.com/childbloom",
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "ChildBloom",
          url: "https://childbloom.site",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://childbloom.site/search?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <SkipToContent />
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  useEffect(() => {
    initSentryClient();
    initWebVitals();

    const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID;
    if (gaId) {
      const s = document.createElement("script");
      s.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
      s.async = true;
      document.head.appendChild(s);

      const initScript = document.createElement("script");
      initScript.innerHTML = [
        "window.dataLayer=window.dataLayer||[];",
        "function gtag(){dataLayer.push(arguments);}",
        "gtag('js', new Date());",
        `gtag('config', '${gaId}', { page_path: window.location.pathname });`,
      ].join("\n");
      document.head.appendChild(initScript);
    }
  }, []);

  return (
    <ThemeProvider defaultTheme="system">
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
