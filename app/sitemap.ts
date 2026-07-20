import type { MetadataRoute } from "next";

const siteUrl = "https://pozicajdodavku.sk";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          "sk-SK": siteUrl,
        },
      },
    },
    {
      url: `${siteUrl}/ochrana-osobnych-udajov`,
      changeFrequency: "yearly",
      priority: 0.3,
      alternates: {
        languages: {
          "sk-SK": `${siteUrl}/ochrana-osobnych-udajov`,
        },
      },
    },
  ];
}
