"use client";

import { useEffect, useState } from "react";
import { ShieldCheck, X } from "lucide-react";

const STORAGE_KEY = "pozicajdodavku-cookie-consent-v1";
const OPEN_SETTINGS_EVENT = "pozicajdodavku:open-cookie-settings";
const CONSENT_UPDATED_EVENT = "pozicajdodavku:cookie-consent-updated";

type CookiePreferences = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  updatedAt?: string;
};

const defaultPreferences: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
};

function readPreferences(): CookiePreferences | null {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) return null;
    const parsed = JSON.parse(stored) as Partial<CookiePreferences>;
    if (typeof parsed.analytics !== "boolean" || typeof parsed.marketing !== "boolean") return null;
    return { necessary: true, analytics: parsed.analytics, marketing: parsed.marketing, updatedAt: parsed.updatedAt };
  } catch {
    return null;
  }
}

function applyPreferences(preferences: CookiePreferences) {
  document.documentElement.dataset.cookieAnalytics = String(preferences.analytics);
  document.documentElement.dataset.cookieMarketing = String(preferences.marketing);
  window.dispatchEvent(new CustomEvent(CONSENT_UPDATED_EVENT, { detail: preferences }));
}

function savePreferences(preferences: CookiePreferences) {
  const saved = { ...preferences, necessary: true as const, updatedAt: new Date().toISOString() };
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
  applyPreferences(saved);
  return saved;
}

export function CookieSettingsButton({ className = "" }: { className?: string }) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT))}
    >
      Nastavenia cookies
    </button>
  );
}

export function CookieAwareMap() {
  const [marketingAllowed, setMarketingAllowed] = useState(false);

  useEffect(() => {
    const sync = () => setMarketingAllowed(readPreferences()?.marketing ?? false);
    const timer = window.setTimeout(sync, 0);
    window.addEventListener(CONSENT_UPDATED_EVENT, sync);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener(CONSENT_UPDATED_EVENT, sync);
    };
  }, []);

  if (marketingAllowed) {
    return (
      <iframe
        title="Mapa – Merkury Market Poprad"
        src="https://www.google.com/maps?q=Merkury%20Market%2C%20Svitsk%C3%A1%20cesta%202%2C%20Poprad&output=embed"
        className="h-full min-h-[420px] w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    );
  }

  return (
    <div className="flex min-h-[420px] flex-col items-center justify-center p-8 text-center">
      <span className="grid h-14 w-14 place-items-center rounded-2xl bg-orange-50 text-orange-500"><ShieldCheck className="h-7 w-7" /></span>
      <h3 className="mt-5 text-xl font-black text-ink">Mapa čaká na váš súhlas</h3>
      <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">Google Maps načítame až po povolení marketingových cookies a externého obsahu.</p>
      <CookieSettingsButton className="mt-5 rounded-xl bg-ink px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-500" />
    </div>
  );
}

export function CookieConsent() {
  const [ready, setReady] = useState(false);
  const [hasChoice, setHasChoice] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);

  useEffect(() => {
    const initialize = () => {
      const stored = readPreferences();
      if (stored) {
        setPreferences(stored);
        setHasChoice(true);
        applyPreferences(stored);
      }
      setReady(true);
    };
    const timer = window.setTimeout(initialize, 0);

    const openSettings = () => {
      const current = readPreferences();
      if (current) setPreferences(current);
      setSettingsOpen(true);
    };
    window.addEventListener(OPEN_SETTINGS_EVENT, openSettings);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener(OPEN_SETTINGS_EVENT, openSettings);
    };
  }, []);

  useEffect(() => {
    if (!settingsOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSettingsOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [settingsOpen]);

  function choose(next: CookiePreferences) {
    const saved = savePreferences(next);
    setPreferences(saved);
    setHasChoice(true);
    setSettingsOpen(false);
  }

  if (!ready) return null;

  return (
    <>
      {!hasChoice && !settingsOpen && (
        <aside className="fixed inset-x-3 bottom-3 z-[70] mx-auto max-w-6xl rounded-3xl border border-white/10 bg-ink p-5 text-white shadow-2xl sm:bottom-5 sm:p-6" aria-label="Súhlas s cookies">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex max-w-2xl gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-orange-500"><ShieldCheck className="h-5 w-5" /></span>
              <div>
                <h2 className="font-black">Vaše súkromie je dôležité</h2>
                <p className="mt-1 text-sm leading-6 text-white/60">Nevyhnutné cookies zabezpečujú fungovanie stránky. Analytické a marketingové cookies použijeme iba s vaším súhlasom.</p>
              </div>
            </div>
            <div className="grid shrink-0 gap-2 sm:grid-cols-3">
              <button type="button" onClick={() => setSettingsOpen(true)} className="rounded-xl border border-white/20 px-4 py-3 text-sm font-bold transition hover:bg-white/10">Nastavenia</button>
              <button type="button" onClick={() => choose(defaultPreferences)} className="rounded-xl bg-white px-4 py-3 text-sm font-bold text-ink transition hover:bg-slate-100">Odmietnuť voliteľné</button>
              <button type="button" onClick={() => choose({ necessary: true, analytics: true, marketing: true })} className="rounded-xl bg-orange-500 px-4 py-3 text-sm font-bold transition hover:bg-orange-600">Prijať všetko</button>
            </div>
          </div>
        </aside>
      )}

      {settingsOpen && (
        <div className="fixed inset-0 z-[80] grid place-items-center bg-ink/75 p-4 backdrop-blur-sm" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setSettingsOpen(false); }}>
          <section className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-[28px] bg-white p-6 shadow-2xl sm:p-8" role="dialog" aria-modal="true" aria-labelledby="cookie-settings-title">
            <div className="flex items-start justify-between gap-4">
              <div><p className="eyebrow">Vaše voľby</p><h2 id="cookie-settings-title" className="mt-2 text-3xl font-black tracking-tight text-ink">Nastavenia cookies</h2></div>
              <button type="button" onClick={() => setSettingsOpen(false)} className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-slate-100 text-slate-600 transition hover:bg-slate-200" aria-label="Zavrieť nastavenia cookies"><X className="h-5 w-5" /></button>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-500">Svoj súhlas môžete kedykoľvek zmeniť cez odkaz v päte stránky.</p>

            <div className="mt-7 space-y-3">
              <CookieToggle title="Nevyhnutné cookies" description="Zabezpečujú základné fungovanie stránky a uloženie vašej voľby." checked disabled onChange={() => undefined} />
              <CookieToggle title="Analytické cookies" description="Pomáhajú nám pochopiť anonymné používanie stránky. Momentálne nepoužívame analytický nástroj." checked={preferences.analytics} onChange={(analytics) => setPreferences((current) => ({ ...current, analytics }))} />
              <CookieToggle title="Marketingové cookies" description="Povoľujú externý obsah, napríklad vloženú mapu Google Maps." checked={preferences.marketing} onChange={(marketing) => setPreferences((current) => ({ ...current, marketing }))} />
            </div>

            <div className="mt-7 grid gap-2 sm:grid-cols-3">
              <button type="button" onClick={() => choose(defaultPreferences)} className="rounded-xl border border-slate-200 px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-50">Odmietnuť voliteľné</button>
              <button type="button" onClick={() => choose({ necessary: true, analytics: true, marketing: true })} className="rounded-xl bg-ink px-4 py-3 text-sm font-bold text-white transition hover:bg-slate-800">Prijať všetko</button>
              <button type="button" onClick={() => choose(preferences)} className="rounded-xl bg-orange-500 px-4 py-3 text-sm font-bold text-white transition hover:bg-orange-600">Uložiť výber</button>
            </div>
          </section>
        </div>
      )}
    </>
  );
}

function CookieToggle({ title, description, checked, disabled = false, onChange }: { title: string; description: string; checked: boolean; disabled?: boolean; onChange: (checked: boolean) => void }) {
  return (
    <div className="flex items-center justify-between gap-5 rounded-2xl border border-slate-200 p-4 sm:p-5">
      <div><h3 className="text-sm font-extrabold text-ink">{title}</h3><p className="mt-1 text-xs leading-5 text-slate-500">{description}</p></div>
      <button type="button" role="switch" aria-checked={checked} disabled={disabled} onClick={() => onChange(!checked)} className={`relative h-7 w-12 shrink-0 rounded-full transition ${checked ? "bg-orange-500" : "bg-slate-300"} ${disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer"}`} aria-label={title}>
        <span className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow-sm transition-transform ${checked ? "translate-x-6" : "translate-x-1"}`} />
      </button>
    </div>
  );
}
