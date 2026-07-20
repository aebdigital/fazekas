import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://pozicajdodavku.sk";
const title = "Požičaj dodávku Poprad | Renault Master";
const description =
  "Prenájom nových dodávok Renault Master L3H2 a L4H3 v Poprade od 35 € bez DPH na 3 hodiny. Poistenie, diaľničná známka SR a nonstop asistencia v cene.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "Požičaj si ma",
  category: "Prenájom dodávok",
  creator: "Požičaj si ma",
  publisher: "Požičaj si ma",
  alternates: {
    canonical: "/",
    languages: {
      "sk-SK": "/",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Požičaj si ma",
    images: [
      {
        url: "/images/hero.JPG",
        width: 2048,
        height: 1536,
        alt: "Dodávky Renault Master na prenájom v Poprade",
      },
    ],
    locale: "sk_SK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/hero.JPG"],
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    other: process.env.BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION }
      : undefined,
  },
  other: {
    "geo.region": "SK-PV",
    "geo.placename": "Poprad",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sk-SK">
      <body>{children}</body>
    </html>
  );
}
