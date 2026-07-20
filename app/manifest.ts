import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Požičaj si ma – prenájom dodávok Poprad",
    short_name: "Požičaj si ma",
    description: "Prenájom dodávok Renault Master L3H2 a L4H3 v Poprade.",
    start_url: "/",
    display: "standalone",
    background_color: "#111827",
    theme_color: "#f97316",
    lang: "sk-SK",
  };
}
