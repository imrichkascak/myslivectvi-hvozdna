import type { MetadataRoute } from "next";
import { posts } from "@/lib/posts";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL;
  const staticRoutes = [
    "",
    "/o-nas",
    "/honitba",
    "/fotogalerie",
    "/aktuality",
    "/kontakt",
  ].map(
    (path) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
    }),
  );
  const articleRoutes = posts.map((post) => ({
    url: `${base}/aktuality/${post.slug}`,
    lastModified: new Date(post.date),
  }));
  return [...staticRoutes, ...articleRoutes];
}
