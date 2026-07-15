"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";

const links = [
  ["Dodávky", "#dodavky"],
  ["Cenník", "#cennik"],
  ["Ako to funguje", "#ako-to-funguje"],
  ["Galéria", "#galeria"],
  ["Kontakt", "#kontakt"],
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/95 text-white backdrop-blur-lg">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2.5" aria-label="Požičaj dodávku – domov">
          <span className="relative h-11 w-14 shrink-0 overflow-hidden rounded-xl bg-orange-500">
            <Image src="/images/logo-source.JPG" alt="Logo Požičaj si ma" fill sizes="56px" className="object-cover object-[50%_75%]" />
          </span>
          <span className="leading-none">
            <strong className="block text-[17px] tracking-tight">POŽIČAJ SI MA</strong>
            <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.22em] text-orange-500">Poprad</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Hlavná navigácia">
          {links.map(([label, href]) => <a key={href} href={href} className="text-sm font-semibold text-white/75 transition hover:text-white">{label}</a>)}
        </nav>

        <div className="flex items-center gap-2">
          <a href="tel:+421911431222" className="flex h-11 shrink-0 items-center gap-2 whitespace-nowrap rounded-xl bg-white/10 px-3 font-bold transition hover:bg-white/15 sm:px-4">
            <Phone className="h-4 w-4 text-orange-500" />
            <span className="text-[11px] sm:text-sm">0911&nbsp;431&nbsp;222</span>
          </a>
          <a href="#rezervacia" className="hidden h-11 items-center rounded-xl bg-orange-500 px-5 text-sm font-bold transition hover:bg-orange-600 md:flex">Rezervovať</a>
          <button type="button" onClick={() => setOpen(!open)} className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 lg:hidden" aria-expanded={open} aria-label="Otvoriť menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-white/10 bg-ink px-4 py-4 lg:hidden" aria-label="Mobilná navigácia">
          {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="block border-b border-white/10 py-3 text-sm font-semibold">{label}</a>)}
          <a href="#rezervacia" onClick={() => setOpen(false)} className="mt-4 block rounded-xl bg-orange-500 px-5 py-3 text-center text-sm font-bold">Rezervovať dodávku</a>
        </nav>
      )}
    </header>
  );
}
