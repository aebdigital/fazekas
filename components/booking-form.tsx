"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function BookingForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      "Dobrý deň, mám záujem o prenájom dodávky.",
      `Meno: ${data.get("name")}`,
      `Telefón: ${data.get("phone")}`,
      `Termín: ${data.get("from")} – ${data.get("to")}`,
      data.get("note") ? `Poznámka: ${data.get("note")}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    setSent(true);
    window.open(`https://wa.me/421911431222?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" aria-label="Rezervačný formulár">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="field sm:col-span-2">
          <span>Meno a priezvisko</span>
          <input name="name" autoComplete="name" placeholder="Vaše meno" required />
        </label>
        <label className="field sm:col-span-2">
          <span>Telefón</span>
          <input name="phone" type="tel" autoComplete="tel" placeholder="0900 000 000" required />
        </label>
        <label className="field">
          <span>Od</span>
          <input name="from" type="date" required />
        </label>
        <label className="field">
          <span>Do</span>
          <input name="to" type="date" required />
        </label>
        <label className="field sm:col-span-2">
          <span>Poznámka <em>– nepovinné</em></span>
          <textarea name="note" rows={3} placeholder="Kam sa chystáte alebo čo potrebujete previezť?" />
        </label>
      </div>
      <button type="submit" className="group flex w-full items-center justify-between rounded-2xl bg-orange-500 px-6 py-4 font-bold text-white transition hover:bg-orange-600">
        <span>Odoslať cez WhatsApp</span>
        <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
      </button>
      <p className="flex items-start gap-2 text-xs leading-5 text-slate-500">
        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" />
        {sent ? "Správa je pripravená vo WhatsAppe." : "Odoslaním sa otvorí WhatsApp s predvyplnenou správou. Termín potvrdíme telefonicky."}
      </p>
    </form>
  );
}
