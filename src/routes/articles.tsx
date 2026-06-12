import { createFileRoute } from "@tanstack/react-router";
import { Outlet } from "@tanstack/react-router";
import { siteDescription } from "@/lib/site-data";

export const Route = createFileRoute("/articles")({
  head: () => ({
    meta: [
      { title: "Articles | ChildBloom" },
      {
        name: "description",
        content:
          "Explore child health, newborn care, nutrition, development, and parenting articles from ChildBloom.",
      },
      { property: "og:title", content: "Articles | ChildBloom" },
      { property: "og:description", content: siteDescription },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/articles" }],
  }),
  component: ArticlesLayout,
});

function ArticlesLayout() {
  return <Outlet />;
}
