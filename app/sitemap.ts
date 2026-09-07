import type { MetadataRoute } from "next";
import { posts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://myslivectvi-hvozdna.vercel.app";
  const staticRoutes = ["", "/o-nas", "/honitba", "/aktuality", "/kontakt"].map(
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
