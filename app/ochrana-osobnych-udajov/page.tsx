import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Mail, Phone } from "lucide-react";
import { CookieConsent, CookieSettingsButton } from "@/components/cookie-consent";

export const metadata: Metadata = {
  title: "Ochrana osobných údajov | Požičaj si ma",
  description:
    "Informácie o spracúvaní osobných údajov, kontaktnom formulári, cookies a právach dotknutých osôb na pozicajdodavku.sk.",
  alternates: {
    canonical: "/ochrana-osobnych-udajov",
    languages: {
      "sk-SK": "/ochrana-osobnych-udajov",
    },
  },
  openGraph: {
    title: "Ochrana osobných údajov | Požičaj si ma",
    description: "Zásady ochrany osobných údajov webovej stránky pozicajdodavku.sk.",
    url: "/ochrana-osobnych-udajov",
    type: "article",
  },
};

const rights = [
  "Prístup k osobným údajom, ktoré spracúvame.",
  "Oprava nepresných alebo neúplných údajov.",
  "Vymazanie („právo na zabudnutie“), ak na spracovanie už nie je právny základ.",
  "Obmedzenie spracovania.",
  "Prenosnosť údajov.",
  "Odvolanie súhlasu – stane sa účinným dňom odvolania.",
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-ink">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/95 text-white backdrop-blur-lg">
        <div className="container-wide flex h-[76px] items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5" aria-label="Požičaj si ma – domov">
            <span className="relative h-11 w-14 shrink-0 overflow-hidden rounded-xl bg-orange-500">
              <Image src="/images/logo-source.JPG" alt="Logo Požičaj si ma" fill sizes="56px" className="object-cover object-[50%_75%]" />
            </span>
            <span className="leading-none">
              <strong className="block text-[17px] tracking-tight">POŽIČAJ SI MA</strong>
              <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.22em] text-orange-500">Poprad</span>
            </span>
          </Link>
          <Link href="/" className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-3 text-sm font-bold transition hover:bg-white/15">
            <ArrowLeft className="h-4 w-4" /> Späť na stránku
          </Link>
        </div>
      </header>

      <section className="bg-ink px-4 pb-20 pt-16 text-white sm:px-6 sm:pb-24 sm:pt-20">
        <div className="mx-auto max-w-4xl">
          <p className="eyebrow">Právne informácie</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-6xl">Ochrana osobných údajov</h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
            Informácie o tom, ako spracúvame osobné údaje pri používaní webovej stránky a rezervačného formulára.
          </p>
        </div>
      </section>

      <article className="mx-auto -mt-8 max-w-4xl px-4 pb-24 sm:px-6">
        <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-lift sm:p-10 lg:p-14">
          <section aria-labelledby="operator-title">
            <h2 id="operator-title" className="text-2xl font-black">Prevádzkovateľ</h2>
            <dl className="mt-6 grid gap-x-8 gap-y-4 rounded-2xl bg-slate-50 p-5 text-sm sm:grid-cols-[150px_1fr] sm:p-6">
              <dt className="font-bold text-slate-500">Obchodné meno</dt><dd className="font-semibold">Globway Trans EU s. r. o.</dd>
              <dt className="font-bold text-slate-500">IČO</dt><dd className="font-semibold">57423172</dd>
              <dt className="font-bold text-slate-500">DIČ</dt><dd className="font-semibold">2122711668</dd>
              <dt className="font-bold text-slate-500">IČ DPH</dt><dd className="font-semibold">SK2122711668, podľa § 4, registrácia od 1. 3. 2026</dd>
              <dt className="font-bold text-slate-500">Sídlo</dt><dd className="font-semibold">Jovická 1861/36, 048 01 Rožňava</dd>
              <dt className="font-bold text-slate-500">E-mail</dt><dd><a href="mailto:info@pozicajdodavku.sk" className="font-bold text-orange-600 hover:underline">info@pozicajdodavku.sk</a></dd>
              <dt className="font-bold text-slate-500">Telefón</dt><dd><a href="tel:+421911431222" className="font-bold text-orange-600 hover:underline">+421 911 431 222</a></dd>
            </dl>
            <p className="mt-7 leading-7 text-slate-600">
              Tieto Zásady ochrany osobných údajov (ďalej len „Zásady“) popisujú, aké osobné údaje spracúvame v súvislosti s používaním našej webovej stránky a kontaktného formulára.
            </p>
          </section>

          <div className="my-10 h-px bg-slate-200" />

          <section aria-labelledby="contact-form-title">
            <p className="eyebrow">I.</p>
            <h2 id="contact-form-title" className="mt-2 text-3xl font-black">Kontaktný formulár</h2>
            <p className="mt-5 leading-7 text-slate-600">
              Na stránke <strong className="text-ink">www.pozicajdodavku.sk</strong> prevádzkujeme kontaktný formulár, ktorého účelom je umožniť vám:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-600 marker:text-orange-500">
              <li>položiť otázku k prenájmu dodávok,</li>
              <li>požiadať o cenovú ponuku,</li>
              <li>overiť dostupnosť vozidla vo vybranom termíne.</li>
            </ul>

            <InfoBlock title="Rozsah spracúvaných údajov">
              <ul className="list-disc space-y-2 pl-6 marker:text-orange-500">
                <li>meno a priezvisko,</li>
                <li>e-mailová adresa,</li>
                <li>telefónne číslo,</li>
                <li>požadovaný dátum prevzatia a vrátenia vozidla,</li>
                <li>obsah nepovinnej poznámky.</li>
              </ul>
            </InfoBlock>
            <InfoBlock title="Účel spracovania">
              Spracúvame uvedené údaje, aby sme vás mohli kontaktovať a reagovať na váš dopyt.
            </InfoBlock>
            <InfoBlock title="Právny základ">
              Článok 6 ods. 1 písm. b) GDPR – plnenie opatrení pred uzavretím zmluvy na žiadosť dotknutej osoby.
            </InfoBlock>
            <InfoBlock title="Doba uchovávania">
              Osobné údaje budeme uchovávať maximálne 10 rokov od odozvy na váš dopyt, pokiaľ nevznikne ďalší zmluvný vzťah.
            </InfoBlock>
          </section>

          <div className="my-10 h-px bg-slate-200" />

          <section aria-labelledby="cookies-title">
            <p className="eyebrow">II.</p>
            <h2 id="cookies-title" className="mt-2 text-3xl font-black">Súbory cookies</h2>
            <p className="mt-5 leading-7 text-slate-600">Na našej webovej stránke používame cookies na nasledujúce účely:</p>
            <div className="mt-6 space-y-4">
              <CookieCategory title="Nevyhnutné cookies">
                Zabezpečujú základnú funkčnosť stránky a uloženie nastavení súhlasu používateľa.
              </CookieCategory>
              <CookieCategory title="Štatistické (analytické) cookies">
                Pomáhajú nám pochopiť, ako návštevníci stránku používajú. Nasadzujeme ich len so súhlasom používateľa.
              </CookieCategory>
              <CookieCategory title="Marketingové cookies a externý obsah">
                Umožňujú načítanie externého obsahu, napríklad vloženej mapy Google Maps. Nasadzujeme ich len so súhlasom používateľa.
              </CookieCategory>
            </div>
            <InfoBlock title="Správa súhlasov">
              Používateľ môže kedykoľvek odvolať alebo zmeniť svoj súhlas prostredníctvom nastavení cookie lišty alebo priamo v prehliadači.
              <CookieSettingsButton className="ml-1 font-bold text-orange-600 underline underline-offset-4" />
            </InfoBlock>
          </section>

          <div className="my-10 h-px bg-slate-200" />

          <section aria-labelledby="rights-title">
            <p className="eyebrow">III.</p>
            <h2 id="rights-title" className="mt-2 text-3xl font-black">Práva dotknutej osoby</h2>
            <p className="mt-5 leading-7 text-slate-600">Podľa nariadenia GDPR máte nasledujúce práva:</p>
            <ul className="mt-4 list-disc space-y-2 pl-6 leading-7 text-slate-600 marker:text-orange-500">
              {rights.map((right) => <li key={right}>{right}</li>)}
            </ul>
            <p className="mt-6 leading-7 text-slate-600">
              Máte tiež právo podať sťažnosť na Úrad na ochranu osobných údajov Slovenskej republiky, Hraničná 12, 820 07 Bratislava,{" "}
              <a href="https://dataprotection.gov.sk/" target="_blank" rel="noreferrer" className="font-bold text-orange-600 underline underline-offset-4">www.dataprotection.gov.sk</a>.
            </p>
            <div className="mt-7 rounded-2xl bg-ink p-6 text-white">
              <p className="leading-7 text-white/70">V prípade otázok alebo uplatnenia vašich práv nás môžete kontaktovať:</p>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <a href="mailto:info@pozicajdodavku.sk" className="flex items-center gap-2 font-bold text-orange-500"><Mail className="h-5 w-5" /> info@pozicajdodavku.sk</a>
                <a href="tel:+421911431222" className="flex items-center gap-2 font-bold text-orange-500"><Phone className="h-5 w-5" /> +421 911 431 222</a>
              </div>
            </div>
          </section>

          <p className="mt-10 border-t border-slate-200 pt-6 text-sm italic text-slate-500">
            Tieto Zásady nadobúdajú účinnosť dňom 25. 4. 2025.
          </p>
        </div>
      </article>

      <footer className="bg-ink py-10 text-white">
        <div className="container-wide flex flex-col justify-between gap-6 text-sm md:flex-row md:items-center">
          <div className="text-white/40">
            <p>© {new Date().getFullYear()} pozicajdodavku.sk</p>
            <p className="mt-1">Sídlo: Globway Trans EU s. r. o., Jovická 1861/36, 048 01 Rožňava</p>
            <p className="mt-1">IČO: 57423172 · DIČ: 2122711668 · IČ DPH: SK2122711668</p>
          </div>
          <div className="flex flex-wrap gap-5 text-white/60">
            <Link href="/" className="transition hover:text-white">Domov</Link>
            <CookieSettingsButton className="underline decoration-white/20 underline-offset-4 transition hover:text-white" />
          </div>
          <a href="mailto:info@pozicajdodavku.sk" className="font-bold text-orange-500">info@pozicajdodavku.sk</a>
        </div>
      </footer>

      <CookieConsent />
    </main>
  );
}

function InfoBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-6 rounded-2xl border border-slate-200 p-5 sm:p-6">
      <h3 className="font-black">{title}</h3>
      <div className="mt-2 leading-7 text-slate-600">{children}</div>
    </div>
  );
}

function CookieCategory({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl bg-slate-50 p-5 sm:p-6">
      <h3 className="font-black">{title}</h3>
      <p className="mt-2 leading-7 text-slate-600">{children}</p>
    </div>
  );
}
