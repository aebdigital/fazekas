const siteUrl = "https://pozicajdodavku.sk";

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "AutoRental",
    "@id": `${siteUrl}/#business`,
    name: "Požičaj si ma",
    alternateName: "Požičaj dodávku Poprad",
    legalName: "Globway Trans EU s. r. o.",
    taxID: "2122711668",
    vatID: "SK2122711668",
    description:
      "Prenájom dodávok Renault Master L3H2 a L4H3 v Poprade s klimatizáciou, cúvacou kamerou a ťažným zariadením.",
    url: siteUrl,
    logo: `${siteUrl}/images/logo-source.JPG`,
    image: [
      `${siteUrl}/images/hero.JPG`,
      `${siteUrl}/images/vans-wide.JPG`,
      `${siteUrl}/images/vans-front.JPG`,
    ],
    telephone: "+421911431222",
    email: "info@pozicajdodavku.sk",
    priceRange: "35 € – 50 € bez DPH",
    currenciesAccepted: "EUR",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Svitská cesta 2",
      postalCode: "058 01",
      addressLocality: "Poprad",
      addressCountry: "SK",
    },
    areaServed: {
      "@type": "City",
      name: "Poprad",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Prenájom dodávok Renault Master",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Prenájom dodávky na 3 hodiny",
          price: 35,
          priceCurrency: "EUR",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: 35,
            priceCurrency: "EUR",
            valueAddedTaxIncluded: false,
          },
          description: "Trojhodinový prenájom s limitom 100 km.",
          itemOffered: {
            "@type": "Service",
            name: "Krátkodobý prenájom dodávky",
          },
        },
        {
          "@type": "Offer",
          name: "Prenájom dodávky na 1 až 7 dní",
          price: 50,
          priceCurrency: "EUR",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: 50,
            priceCurrency: "EUR",
            valueAddedTaxIncluded: false,
          },
          description: "Cena za deň s limitom 300 km za deň.",
          itemOffered: {
            "@type": "Service",
            name: "Denný prenájom dodávky",
          },
        },
      ],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: "Požičaj si ma",
    alternateName: "Požičaj dodávku Poprad",
    inLanguage: "sk-SK",
    publisher: {
      "@id": `${siteUrl}/#business`,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteUrl}/#webpage`,
    url: siteUrl,
    name: "Požičaj dodávku Poprad | Renault Master",
    description:
      "Prenájom nových dodávok Renault Master L3H2 a L4H3 v Poprade od 35 € bez DPH na 3 hodiny.",
    inLanguage: "sk-SK",
    isPartOf: {
      "@id": `${siteUrl}/#website`,
    },
    about: {
      "@id": `${siteUrl}/#business`,
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${siteUrl}/images/hero.JPG`,
      width: 2048,
      height: 1536,
    },
  },
];

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
      }}
    />
  );
}
