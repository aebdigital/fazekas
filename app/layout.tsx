import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Požičaj dodávku Poprad | Renault Master",
  description:
    "Prenájom nových dodávok Renault Master L3H2 a L4H3 v Poprade od 45 € za deň. Poistenie, diaľničná známka SR a nonstop asistencia v cene.",
  metadataBase: new URL("https://pozicajdodavku.sk"),
  openGraph: {
    title: "Požičaj si dodávku v Poprade",
    description: "Nové dodávky Renault Master L3H2 a L4H3 v Poprade od 45 € za deň.",
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
