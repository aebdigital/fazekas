import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  CalendarCheck,
  Check,
  ChevronRight,
  Clock3,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";
import { BookingForm } from "@/components/booking-form";
import { Header } from "@/components/header";

const gallery = [
  { src: "/images/vans-wide.JPG", alt: "Tri dodávky na prenájom pred Merkury Market v Poprade", wide: true },
  { src: "/images/vans-front.JPG", alt: "Dodávky Renault Master pripravené na prenájom" },
  { src: "/images/gallery-1.JPG", alt: "Vozový park Požičaj dodávku Poprad" },
  { src: "/images/gallery-2.JPG", alt: "Biela dodávka Renault Master na prevádzke" },
  { src: "/images/vans-side.JPG", alt: "Dodávky Požičaj si ma s označením prevádzky", wide: true },
];

export default function Home() {
  return (
    <main id="top" className="overflow-hidden">
      <Header />

      <section className="relative min-h-[830px] bg-ink pt-[76px] text-white lg:min-h-[760px]">
        <Image src="/images/hero.JPG" alt="Dodávky na prenájom v Poprade" fill priority sizes="100vw" className="object-cover object-[64%_center] opacity-70" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,25,35,0.98)_0%,rgba(18,25,35,0.88)_42%,rgba(18,25,35,0.28)_75%,rgba(18,25,35,0.5)_100%)]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.35)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-20 pt-20 sm:px-6 md:pt-28 lg:grid-cols-[1.2fr_.8fr] lg:px-8 lg:pb-24">
          <div className="max-w-3xl">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500/50 bg-orange-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-100">
              <Sparkles className="h-4 w-4 text-orange-500" /> Prenájom dodávok v Poprade
            </p>
            <h1 className="text-balance text-[52px] font-black leading-[0.94] tracking-[-0.045em] sm:text-7xl lg:text-[84px]">
              Požičaj si <span className="text-orange-500">dodávku.</span><br />Rýchlo a jednoducho.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/70">
              Potrebujete sa presťahovať alebo previezť väčší náklad? Vyberte si spoľahlivý Renault Master a vyrazte bez zbytočných starostí.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#rezervacia" className="group flex items-center justify-between gap-8 rounded-2xl bg-orange-500 px-6 py-4 font-bold transition hover:bg-orange-600">
                Chcem dodávku <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </a>
              <a href="tel:+421911431222" className="flex items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-6 py-4 font-bold backdrop-blur transition hover:bg-white/15">
                <Phone className="h-5 w-5 text-orange-500" /> 0911 431 222
              </a>
            </div>
            <div className="mt-10 grid max-w-xl grid-cols-2 gap-5 border-t border-white/15 pt-7 sm:grid-cols-3">
              {[["3", "dodávky"], ["Poprad", "osobné prevzatie"], ["Flexi", "dĺžka prenájmu"]].map(([value, label]) => (
                <div key={label}><strong className="block text-2xl font-black">{value}</strong><span className="text-xs font-semibold uppercase tracking-wider text-white/45">{label}</span></div>
              ))}
            </div>
          </div>
        </div>
        <a href="#dodavky" className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white/50 lg:flex">Zistite viac <ArrowDown className="h-4 w-4" /></a>
      </section>

      <section className="relative z-10 -mt-8 px-4 sm:px-6 lg:-mt-12 lg:px-8">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-3xl bg-white shadow-lift md:grid-cols-3">
          {[
            [Clock3, "Rýchle vybavenie", "Zavolajte a dostupnosť overíme ihneď."],
            [Truck, "3 dodávky", "Vyberte si veľkosť podľa svojho nákladu."],
            [MapPin, "Jednoduché prevzatie", "Svitská cesta 2, Poprad."],
          ].map(([Icon, title, text], index) => {
            const ItemIcon = Icon as typeof Clock3;
            return <div key={title as string} className={`flex gap-4 p-7 lg:p-8 ${index < 2 ? "border-b border-slate-100 md:border-b-0 md:border-r" : ""}`}><span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-orange-50 text-orange-500"><ItemIcon className="h-6 w-6" /></span><div><h2 className="font-extrabold text-ink">{title as string}</h2><p className="mt-1 text-sm leading-6 text-slate-500">{text as string}</p></div></div>;
          })}
        </div>
      </section>

      <section id="dodavky" className="section-pad bg-[#f6f7f9]">
        <div className="container-wide">
          <div className="max-w-2xl">
            <p className="eyebrow">Náš vozový park</p>
            <h2 className="section-title">Dodávka pre každý <span>veľký plán.</span></h2>
            <p className="section-copy">Tri Renaulty Master sú pripravené na sťahovanie, prevoz materiálu, nábytku aj firemný rozvoz.</p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              ["Praktická", "Na rýchle prevozy po meste", "/images/gallery-2.JPG"],
              ["Priestranná", "Keď potrebujete viac miesta", "/images/vans-front.JPG"],
              ["Extra veľká", "Pre poriadny náklad", "/images/fleet.JPG"],
            ].map(([name, text, src], i) => (
              <article key={name} className="group overflow-hidden rounded-3xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lift">
                <div className="relative aspect-[4/3] overflow-hidden"><Image src={src} alt={`${name} dodávka Renault Master`} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105" /><span className="absolute left-5 top-5 rounded-full bg-ink/90 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white">Dodávka 0{i + 1}</span></div>
                <div className="p-7"><h3 className="text-2xl font-black text-ink">{name}</h3><p className="mt-2 text-sm text-slate-500">{text}</p><ul className="mt-6 space-y-3 border-t border-slate-100 pt-6 text-sm font-semibold text-slate-700"><li className="flex gap-2"><Check className="h-5 w-5 text-orange-500" /> Renault Master</li><li className="flex gap-2"><Check className="h-5 w-5 text-orange-500" /> Krátkodobý aj dlhodobý prenájom</li></ul><a href="#rezervacia" className="mt-7 flex items-center justify-between rounded-xl bg-ink px-5 py-3.5 text-sm font-bold text-white transition hover:bg-orange-500">Overiť dostupnosť <ChevronRight className="h-4 w-4" /></a></div>
              </article>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-slate-500">Presný typ, rozmery a cenu vám radi potvrdíme podľa aktuálne dostupnej dodávky.</p>
        </div>
      </section>

      <section id="ako-to-funguje" className="section-pad bg-ink text-white">
        <div className="container-wide grid gap-16 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <div>
            <p className="eyebrow">Bez komplikácií</p>
            <h2 className="section-title !text-white">Od telefonátu až <span>na cestu.</span></h2>
            <p className="mt-6 max-w-lg text-lg leading-8 text-white/55">Dostupnosť overíme osobne a dohodneme presný termín, typ dodávky aj podmienky prenájmu.</p>
            <a href="tel:+421911431222" className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-orange-500 px-6 py-4 font-bold transition hover:bg-orange-600"><Phone className="h-5 w-5" /> Zavolať teraz</a>
          </div>
          <ol className="space-y-3">
            {[
              [MessageCircle, "Ozvite sa", "Zavolajte alebo vyplňte krátky formulár."],
              [CalendarCheck, "Vyberieme termín", "Spoločne overíme dostupnosť a dohodneme detaily."],
              [ShieldCheck, "Prevezmite dodávku", "Stretneme sa na Svitskej ceste 2 v Poprade."],
            ].map(([Icon, title, text], i) => {
              const StepIcon = Icon as typeof MessageCircle;
              return <li key={title as string} className="group flex items-center gap-5 rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-orange-500/50 hover:bg-white/[0.07]"><span className="font-black text-orange-500/50">0{i + 1}</span><span className="grid h-13 w-13 shrink-0 place-items-center rounded-2xl bg-orange-500 text-white"><StepIcon className="h-6 w-6" /></span><div><h3 className="text-lg font-extrabold">{title as string}</h3><p className="mt-1 text-sm leading-6 text-white/50">{text as string}</p></div></li>;
            })}
          </ol>
        </div>
      </section>

      <section id="galeria" className="section-pad bg-white">
        <div className="container-wide">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="eyebrow">Galéria</p><h2 className="section-title">Pripravené <span>vyraziť.</span></h2></div><p className="max-w-md text-sm leading-6 text-slate-500">Naše dodávky nájdete priamo pri Merkury Market v Poprade. Pozrite si vozový park.</p></div>
          <div className="mt-10 grid auto-rows-[260px] gap-4 md:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item, index) => <div key={item.src} className={`relative overflow-hidden rounded-3xl ${item.wide ? "lg:col-span-2" : ""}`}><Image src={item.src} alt={item.alt} fill sizes={item.wide ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 1024px) 100vw, 33vw"} className="object-cover transition duration-500 hover:scale-105" /><span className="absolute bottom-4 left-4 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-xs font-black text-ink">0{index + 1}</span></div>)}
          </div>
        </div>
      </section>

      <section id="rezervacia" className="section-pad bg-orange-50">
        <div className="container-wide grid overflow-hidden rounded-[32px] bg-white shadow-lift lg:grid-cols-2">
          <div className="relative min-h-[420px] bg-ink p-8 text-white sm:p-12 lg:min-h-full">
            <Image src="/images/location.JPG" alt="Dodávky na prevádzke v Poprade" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover opacity-35" />
            <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink/80 to-orange-500/50" />
            <div className="relative flex h-full flex-col justify-between"><div><p className="eyebrow">Rezervácia</p><h2 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl">Kedy potrebujete dodávku?</h2><p className="mt-5 max-w-md leading-7 text-white/60">Napíšte nám termín a kontakt. Správa sa odošle cez WhatsApp a dostupnosť vám potvrdíme osobne.</p></div><div className="mt-12 space-y-4"><a href="tel:+421911431222" className="flex items-center gap-3 font-bold"><span className="grid h-10 w-10 place-items-center rounded-xl bg-orange-500"><Phone className="h-5 w-5" /></span> 0911 431 222</a><p className="flex items-center gap-3 text-sm text-white/70"><span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10"><MapPin className="h-5 w-5 text-orange-500" /></span> Svitská cesta 2, Poprad</p></div></div>
          </div>
          <div className="p-7 sm:p-12"><h3 className="text-2xl font-black text-ink">Nezáväzný dopyt</h3><p className="mb-8 mt-2 text-sm text-slate-500">Zaberie vám to menej než minútu.</p><BookingForm /></div>
        </div>
      </section>

      <section id="kontakt" className="bg-white py-20">
        <div className="container-wide grid gap-8 lg:grid-cols-[.65fr_1.35fr] lg:items-stretch">
          <div className="rounded-3xl bg-ink p-8 text-white sm:p-10"><p className="eyebrow">Kde nás nájdete</p><h2 className="mt-4 text-4xl font-black tracking-tight">Poprad<br /><span className="text-orange-500">Merkury Market</span></h2><p className="mt-6 text-white/55">Svitská cesta 2<br />058 01 Poprad</p><div className="mt-8 space-y-3"><a href="tel:+421911431222" className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 font-bold transition hover:bg-white/15"><Phone className="h-5 w-5 text-orange-500" /> 0911 431 222</a><a href="https://www.google.com/maps/search/?api=1&query=Merkury+Market+Svitsk%C3%A1+cesta+2+Poprad" target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-2xl bg-orange-500 p-4 font-bold transition hover:bg-orange-600">Otvoriť navigáciu <ArrowRight className="h-5 w-5" /></a></div></div>
          <div className="min-h-[420px] overflow-hidden rounded-3xl border border-slate-200 bg-slate-100"><iframe title="Mapa – Merkury Market Poprad" src="https://www.google.com/maps?q=Merkury%20Market%2C%20Svitsk%C3%A1%20cesta%202%2C%20Poprad&output=embed" className="h-full min-h-[420px] w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-ink pb-28 pt-12 text-white md:pb-12">
        <div className="container-wide flex flex-col justify-between gap-8 md:flex-row md:items-center"><a href="#top" className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-xl bg-orange-500"><Truck /></span><span><strong className="block">POŽIČAJ DODÁVKU</strong><small className="text-white/40">Poprad</small></span></a><p className="text-sm text-white/40">© {new Date().getFullYear()} pozicajdodavku.sk</p><a href="tel:+421911431222" className="font-bold text-orange-500">0911 431 222</a></div>
      </footer>

      <div className="fixed inset-x-3 bottom-3 z-40 flex overflow-hidden rounded-2xl shadow-2xl md:hidden"><a href="tel:+421911431222" className="flex flex-1 items-center justify-center gap-2 bg-ink px-4 py-4 text-sm font-bold text-white"><Phone className="h-5 w-5 text-orange-500" /> Zavolať</a><a href="#rezervacia" className="flex flex-1 items-center justify-center gap-2 bg-orange-500 px-4 py-4 text-sm font-bold text-white">Rezervovať <ArrowRight className="h-4 w-4" /></a></div>
    </main>
  );
}
