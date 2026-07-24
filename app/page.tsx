import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  CalendarCheck,
  Check,
  ChevronRight,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import { BookingForm } from "@/components/booking-form";
import { CookieAwareMap, CookieConsent, CookieSettingsButton } from "@/components/cookie-consent";
import { GalleryLightbox } from "@/components/gallery-lightbox";
import { Header } from "@/components/header";
import { ScrollReveal } from "@/components/scroll-reveal";
import { StructuredData } from "@/components/structured-data";

const gallery = [
  { src: "/images/vans-wide.JPG", alt: "Dodávky na prenájom pred Merkury Market v Poprade", wide: true },
  { src: "/images/vans-front.JPG", alt: "Dodávky Renault Master pripravené na prenájom" },
  { src: "/images/gallery-1.JPG", alt: "Vozový park Požičaj dodávku Poprad" },
  { src: "/images/vans-side.JPG", alt: "Dodávky Požičaj si ma s označením prevádzky", wide: true },
];

export default function Home() {
  return (
    <main id="top" className="overflow-hidden">
      <StructuredData />
      <ScrollReveal />
      <Header />

      <section className="relative min-h-[830px] bg-ink pt-[76px] text-white lg:min-h-[760px]">
        <Image src="/images/hero.JPG" alt="Dodávky na prenájom v Poprade" fill priority sizes="100vw" className="object-cover object-[64%_center] opacity-70" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,25,35,0.98)_0%,rgba(18,25,35,0.88)_42%,rgba(18,25,35,0.28)_75%,rgba(18,25,35,0.5)_100%)]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.35)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-20 pt-20 sm:px-6 md:pt-28 lg:grid-cols-[1.2fr_.8fr] lg:px-8 lg:pb-24">
          <div className="max-w-3xl" data-reveal>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500/50 bg-orange-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-100">
              <Sparkles className="h-4 w-4 text-orange-500" /> Prenájom dodávok v Poprade
            </p>
            <h1 className="text-balance text-[52px] font-black leading-[0.94] tracking-[-0.045em] sm:text-7xl lg:text-[84px]">
              Požičaj si <span className="text-orange-500">dodávku</span><br />Rýchlo a jednoducho
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/70">
              <span className="block">Potrebujete sa presťahovať alebo previezť väčší náklad?</span>
              <span className="block">Nové dodávky Renault Master L3H2 a L4H3 sú pripravené vyraziť.</span>
              <span className="block">Klimatizácia, cúvacia kamera a ťažné zariadenie sú samozrejmosťou.</span>
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
              {[
                { value: "od 35 €", label: "na 3 hodiny" },
                { value: "200 €", label: "vratná záloha", hideOnMobile: true },
                { value: "L3H2 / L4H3", label: "dostupné modely" },
              ].map(({ value, label, hideOnMobile }) => (
                <div key={label} className={hideOnMobile ? "hidden sm:block" : ""}><strong className="block text-2xl font-black">{value}</strong><span className="text-xs font-semibold uppercase tracking-wider text-white/45">{label}</span></div>
              ))}
            </div>
          </div>
        </div>
        <a href="#dodavky" className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white/50 lg:flex">Zistite viac <ArrowDown className="h-4 w-4" /></a>
      </section>

      <section className="relative z-10 -mt-8 px-4 sm:px-6 lg:-mt-12 lg:px-8">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-3xl bg-white shadow-lift md:grid-cols-3" data-reveal>
          {[
            [Clock3, "Od 35 €", "Trojhodinový prenájom s limitom 100 km."],
            [ShieldCheck, "Kompletne poistené", "PZP, havarijné poistenie a nonstop asistencia."],
            [MapPin, "Parkovanie zdarma", "Vaše auto môže zostať na našom vyhradenom parkovisku."],
          ].map(([Icon, title, text], index) => {
            const ItemIcon = Icon as typeof Clock3;
            return <div key={title as string} className={`flex gap-4 p-7 lg:p-8 ${index < 2 ? "border-b border-slate-100 md:border-b-0 md:border-r" : ""}`}><span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-orange-50 text-orange-500"><ItemIcon className="h-6 w-6" /></span><div><h2 className="font-extrabold text-ink">{title as string}</h2><p className="mt-1 text-sm leading-6 text-slate-500">{text as string}</p></div></div>;
          })}
        </div>
      </section>

      <section id="dodavky" className="section-pad bg-[#f6f7f9]">
        <div className="container-wide">
          <div className="max-w-2xl" data-reveal>
            <h2 className="section-title !mt-0">Dodávka pre každý <span>veľký plán</span></h2>
            <p className="section-copy">
              <span className="block">Nové Renaulty Master sú dostupné vo veľkostiach L3H2 a L4H3.</span>
              <span className="block">Sú pripravené na sťahovanie, prevoz materiálu, nábytku aj firemný rozvoz.</span>
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2" data-reveal data-reveal-delay="80">
            {[
              ["Renault Master L3H2", "Priestranná dodávka na sťahovanie a väčší náklad.", "/images/vans-front.JPG"],
              ["Renault Master L4H3", "Extra dlhá a vysoká dodávka pre poriadny náklad.", "/images/fleet.JPG"],
            ].map(([name, text, src]) => (
              <article key={name} className="group overflow-hidden rounded-3xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lift">
                <div className="relative aspect-[16/10] overflow-hidden"><Image src={src} alt={`Dodávka ${name}`} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition duration-500 group-hover:scale-105" /><span className="absolute left-5 top-5 rounded-full bg-ink/90 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white">Nové vozidlo</span></div>
                <div className="p-7"><h3 className="text-2xl font-black text-ink">{name}</h3><p className="mt-2 text-sm text-slate-500">{text}</p><ul className="mt-6 grid gap-3 border-t border-slate-100 pt-6 text-sm font-semibold text-slate-700 sm:grid-cols-2"><li className="flex gap-2"><Check className="h-5 w-5 shrink-0 text-orange-500" /> Klimatizácia</li><li className="flex gap-2"><Check className="h-5 w-5 shrink-0 text-orange-500" /> Cúvacia kamera</li><li className="flex gap-2"><Check className="h-5 w-5 shrink-0 text-orange-500" /> Ťažné zariadenie</li><li className="flex gap-2"><Check className="h-5 w-5 shrink-0 text-orange-500" /> Diaľničná známka SR</li></ul><a href="#rezervacia" className="mt-7 flex items-center justify-between rounded-xl bg-ink px-5 py-3.5 text-sm font-bold text-white transition hover:bg-orange-500">Overiť dostupnosť <ChevronRight className="h-4 w-4" /></a></div>
              </article>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-slate-500">Konkrétny model vám potvrdíme podľa aktuálnej dostupnosti.</p>
        </div>
      </section>

      <section id="cennik" className="section-pad bg-white">
        <div className="container-wide">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end" data-reveal>
            <div>
              <h2 className="section-title !mt-0">Jednoduchý <span>cenník</span></h2>
              <p className="section-copy">
                <span className="block">Vyberte si krátky prenájom alebo celodennú sadzbu.</span>
                <span className="block">Cena pri prenájme nad 5 dní sa určuje individuálne.</span>
              </p>
            </div>
            <div>
              <div className="grid gap-4 sm:grid-cols-3">
                <article className="relative overflow-hidden rounded-3xl bg-orange-500 p-7 text-white shadow-lift">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-white/70">3 hodiny</p>
                  <p className="mt-4 text-5xl font-black tracking-tight">35 €</p>
                  <p className="mt-1 text-sm text-white/70">limit 100 km</p>
                </article>
                <article className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">1 – 4 dni</p>
                  <p className="mt-4 text-5xl font-black tracking-tight text-ink">50 €</p>
                  <p className="mt-1 text-sm text-slate-500">za deň · limit 300 km/deň</p>
                </article>
                <article className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">Nad 5 dní</p>
                  <p className="mt-4 text-4xl font-black tracking-tight text-ink">Dohodou</p>
                  <p className="mt-2 text-sm text-slate-500">Individuálna cenová ponuka</p>
                </article>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3" data-reveal>
            <div className="rounded-2xl border border-slate-200 p-6"><p className="text-sm text-slate-500">Vratná záloha</p><strong className="mt-2 block text-2xl font-black text-ink">200 €</strong></div>
            <div className="rounded-2xl border border-slate-200 p-6"><p className="text-sm text-slate-500">Nadlimitné kilometre</p><strong className="mt-2 block text-2xl font-black text-ink">0,12 € / km</strong></div>
            <div className="rounded-2xl border border-slate-200 p-6"><p className="text-sm text-slate-500">Vaše vozidlo</p><strong className="mt-2 block text-2xl font-black text-ink">Parkovanie zdarma</strong></div>
          </div>

          <div className="mt-8 rounded-3xl bg-ink p-7 text-white sm:p-9" data-reveal>
            <h3 className="text-xl font-black">V cene prenájmu máte</h3>
            <ul className="mt-6 grid gap-4 text-sm text-white/70 sm:grid-cols-2 lg:grid-cols-4">
              {["Platnú diaľničnú známku SR", "Zákonné a havarijné poistenie", "Nonstop asistenčné služby", "Vyhradené parkovanie počas nájmu"].map((item) => <li key={item} className="flex gap-3"><Check className="h-5 w-5 shrink-0 text-orange-500" /> {item}</li>)}
            </ul>
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-2xl bg-orange-50 p-5 text-sm leading-6 text-slate-600" data-reveal>
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" />
            <p><span className="block">Dodávku odovzdávame čistú a s plnou nádržou.</span><span className="block">V rovnakom stave – čistú a s plnou nádržou – ju zákazník aj vracia.</span></p>
          </div>

          <div className="mt-4 rounded-3xl border border-slate-200 p-6 sm:p-8" data-reveal>
            <h3 className="text-2xl font-black text-ink">Čo potrebujete k prenájmu</h3>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <span className="flex items-center gap-3 rounded-2xl bg-slate-50 px-5 py-4 text-sm font-bold text-slate-700"><Check className="h-5 w-5 text-orange-500" /> Občiansky preukaz</span>
              <span className="flex items-center gap-3 rounded-2xl bg-slate-50 px-5 py-4 text-sm font-bold text-slate-700"><Check className="h-5 w-5 text-orange-500" /> Vodičský preukaz</span>
            </div>
          </div>
        </div>
      </section>

      <section id="ako-to-funguje" className="section-pad bg-ink text-white">
        <div className="container-wide grid gap-16 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <div data-reveal>
            <h2 className="section-title !mt-0 !text-white">Od telefonátu až <span>na cestu</span></h2>
            <p className="mt-6 max-w-lg text-lg leading-8 text-white/55">Dostupnosť overíme osobne a dohodneme presný termín, typ dodávky aj podmienky prenájmu.</p>
            <a href="tel:+421911431222" className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-orange-500 px-6 py-4 font-bold transition hover:bg-orange-600"><Phone className="h-5 w-5" /> Zavolať teraz</a>
          </div>
          <ol className="space-y-3" data-reveal data-reveal-delay="100">
            {[
              [MessageCircle, "Ozvite sa", "Zavolajte alebo vyplňte krátky formulár."],
              [CalendarCheck, "Pripravte si doklady", "Budete potrebovať občiansky a vodičský preukaz."],
              [ShieldCheck, "Prevezmite dodávku", "Stretneme sa na Svitskej ceste 2 v Poprade."],
            ].map(([Icon, title, text], i) => {
              const StepIcon = Icon as typeof MessageCircle;
              return <li key={title as string} className="group flex items-center gap-5 rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-orange-500/50 hover:bg-white/[0.07]"><span className="font-black text-white">0{i + 1}</span><span className="grid h-13 w-13 shrink-0 place-items-center rounded-2xl bg-orange-500 text-white"><StepIcon className="h-6 w-6" /></span><div><h3 className="text-lg font-extrabold">{title as string}</h3><p className="mt-1 text-sm leading-6 text-white/50">{text as string}</p></div></li>;
            })}
          </ol>
        </div>
      </section>

      <section id="galeria" className="section-pad bg-white">
        <div className="container-wide">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end" data-reveal><div><h2 className="section-title !mt-0">Pripravené <span>vyraziť</span></h2></div><p className="max-w-md text-sm leading-6 text-slate-500">Naše dodávky nájdete priamo pri Merkury Market v Poprade. Pozrite si vozový park.</p></div>
          <GalleryLightbox images={gallery} />
        </div>
      </section>

      <section id="recenzie" className="section-pad bg-[#f6f7f9]">
        <div className="container-wide">
          <div className="grid overflow-hidden rounded-[36px] bg-white shadow-lift lg:grid-cols-[1.2fr_.8fr]">
            <div className="p-8 sm:p-12 lg:p-16" data-reveal>
              <div className="flex items-center gap-4">
                <span className="grid h-14 w-14 place-items-center rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <Image src="/images/google-logo.svg" alt="Google" width={34} height={34} />
                </span>
                <div>
                  <p className="text-sm font-black text-ink">Google recenzie</p>
                  <div className="mt-1 flex gap-0.5 text-amber-400" aria-label="Päť hviezdičiek">
                    {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}
                  </div>
                </div>
              </div>
              <h2 className="section-title !mt-8">Podeľte sa o svoju <span>skúsenosť</span></h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
                Boli ste s prenájmom spokojní? Vaša recenzia pomôže ďalším zákazníkom vybrať si správnu dodávku.
              </p>
              <a
                href="https://share.google/IWDUQVtrMdAicZWCK"
                target="_blank"
                rel="noreferrer"
                className="group mt-8 inline-flex items-center gap-4 rounded-2xl bg-ink px-6 py-4 font-bold text-white transition hover:bg-orange-500"
              >
                <Image src="/images/google-logo.svg" alt="" width={26} height={26} />
                Dajte nám recenziu na Google
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </a>
            </div>
            <a
              href="https://share.google/IWDUQVtrMdAicZWCK"
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col items-center justify-center bg-ink p-8 text-center text-white sm:p-12"
              data-reveal
              data-reveal-delay="100"
              aria-label="Otvoriť Google recenzie"
            >
              <span className="rounded-[28px] bg-white p-5 shadow-2xl transition duration-300 group-hover:-translate-y-1 group-hover:scale-[1.02]">
                <Image
                  src="/images/google-review-qr.svg"
                  alt="QR kód pre Google recenzie"
                  width={260}
                  height={260}
                  unoptimized
                  className="h-auto w-[220px] sm:w-[260px]"
                />
              </span>
              <strong className="mt-6 text-xl font-black">Naskenujte QR kód</strong>
              <span className="mt-2 max-w-xs text-sm leading-6 text-white/55">Otvorí sa formulár na pridanie recenzie na Google.</span>
            </a>
          </div>
        </div>
      </section>

      <section id="rezervacia" className="section-pad bg-white">
        <div className="grid overflow-hidden bg-white lg:grid-cols-2">
          <div className="relative min-h-[420px] bg-ink text-white lg:min-h-full">
            <Image src="/images/location.JPG" alt="Dodávky na prevádzke v Poprade" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover opacity-35" />
            <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink/80 to-orange-500/50" />
            <div className="relative ml-auto flex h-full max-w-2xl flex-col justify-between p-8 sm:p-12 lg:p-16" data-reveal><div><h2 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl">Kedy potrebujete dodávku?</h2><p className="mt-5 max-w-md leading-7 text-white/60">Napíšte nám termín a kontakt. Dopyt odošleme e-mailom a dostupnosť vám potvrdíme osobne.</p></div><div className="mt-12 space-y-4"><a href="tel:+421911431222" className="flex items-center gap-3 font-bold"><span className="grid h-10 w-10 place-items-center rounded-xl bg-orange-500"><Phone className="h-5 w-5" /></span> 0911 431 222</a><p className="flex items-center gap-3 text-sm text-white/70"><span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10"><MapPin className="h-5 w-5 text-orange-500" /></span> Svitská cesta 2, Poprad</p></div></div>
          </div>
          <div className="bg-white">
            <div className="max-w-2xl p-7 sm:p-12 lg:p-16" data-reveal data-reveal-delay="100">
              <h3 className="mb-8 text-2xl font-black text-ink">Nezáväzný dopyt</h3>
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      <section id="kontakt" className="bg-white py-20">
        <div className="container-wide grid gap-8 lg:grid-cols-[.65fr_1.35fr] lg:items-stretch">
          <div className="rounded-3xl bg-ink p-8 text-white sm:p-10" data-reveal><h2 className="text-4xl font-black tracking-tight">Poprad<br /><span className="text-orange-500">Merkury Market</span></h2><p className="mt-6 text-white/55">Svitská cesta 2<br />058 01 Poprad</p><div className="mt-8 space-y-3"><a href="tel:+421911431222" className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 font-bold transition hover:bg-white/15"><Phone className="h-5 w-5 text-orange-500" /> 0911 431 222</a><a href="mailto:info@pozicajdodavku.sk" className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 text-sm font-bold transition hover:bg-white/15"><Mail className="h-5 w-5 shrink-0 text-orange-500" /> info@pozicajdodavku.sk</a><a href="https://www.google.com/maps/search/?api=1&query=Merkury+Market+Svitsk%C3%A1+cesta+2+Poprad" target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-2xl bg-orange-500 p-4 font-bold transition hover:bg-orange-600">Otvoriť navigáciu <ArrowRight className="h-5 w-5" /></a></div></div>
          <div className="min-h-[420px] overflow-hidden rounded-3xl border border-slate-200 bg-slate-100" data-reveal data-reveal-delay="100"><CookieAwareMap /></div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-ink pb-28 pt-12 text-white md:pb-12">
        <div className="container-wide flex flex-col justify-between gap-8 md:flex-row md:items-center"><a href="#top" className="flex items-center gap-3"><span className="relative h-11 w-14 overflow-hidden rounded-xl bg-orange-500"><Image src="/images/logo-source.JPG" alt="Logo Požičaj si ma" fill sizes="56px" className="object-cover object-[50%_75%]" /></span><span><strong className="block">POŽIČAJ SI MA</strong><small className="text-white/40">Poprad</small></span></a><div className="flex flex-col gap-2 text-sm text-white/40 md:items-center"><p>© {new Date().getFullYear()} pozicajdodavku.sk</p><p className="max-w-md md:text-center">Sídlo: Globway Trans EU s. r. o., Jovická 1861/36, 048 01 Rožňava</p><p className="max-w-md md:text-center">IČO: 57423172 · DIČ: 2122711668 · IČ DPH: SK2122711668</p><div className="flex flex-wrap gap-4 md:justify-center"><Link href="/ochrana-osobnych-udajov" className="underline decoration-white/20 underline-offset-4 transition hover:text-white">Ochrana osobných údajov</Link><CookieSettingsButton className="underline decoration-white/20 underline-offset-4 transition hover:text-white" /></div></div><div className="flex flex-col gap-2 font-bold md:items-end"><a href="tel:+421911431222" className="text-orange-500">0911 431 222</a><a href="mailto:info@pozicajdodavku.sk" className="text-sm text-white/60 transition hover:text-white">info@pozicajdodavku.sk</a></div></div>
      </footer>

      <CookieConsent />
      <div className="fixed inset-x-3 bottom-3 z-40 flex overflow-hidden rounded-2xl shadow-2xl md:hidden"><a href="tel:+421911431222" className="flex flex-1 items-center justify-center gap-2 bg-ink px-4 py-4 text-sm font-bold text-white"><Phone className="h-5 w-5 text-orange-500" /> Zavolať</a><a href="#rezervacia" className="flex flex-1 items-center justify-center gap-2 bg-orange-500 px-4 py-4 text-sm font-bold text-white">Rezervovať <ArrowRight className="h-4 w-4" /></a></div>
    </main>
  );
}
