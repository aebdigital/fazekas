import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Požičaj dodávku Poprad | Renault Master",
  description:
    "Prenájom dodávok Renault Master v Poprade. Jednoduchá rezervácia, rýchle vybavenie a osobné prevzatie na Svitskej ceste 2.",
  metadataBase: new URL("https://pozicajdodavku.sk"),
  openGraph: {
    title: "Požičaj si dodávku v Poprade",
    description: "Spoľahlivé dodávky Renault Master. Zavolajte a rezervujte si termín.",
    images: ["/images/hero.JPG"],
    locale: "sk_SK",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sk">
      <body>{children}</body>
    </html>
  );
}
