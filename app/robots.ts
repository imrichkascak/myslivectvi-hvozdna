import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/kickoff" },
    sitemap: "https://myslivectvi-hvozdna.vercel.app/sitemap.xml",
  };
}
