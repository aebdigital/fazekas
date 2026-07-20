import type { MetadataRoute } from "next";

const siteUrl = "https://pozicajdodavku.sk";
const privatePaths = ["/api/", "/.netlify/functions/"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: privatePaths,
      },
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
        disallow: privatePaths,
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
        disallow: privatePaths,
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
