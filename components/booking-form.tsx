"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { AlertCircle, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

type FormStatus = {
  type: "idle" | "loading" | "success" | "error";
  message: string;
};

export function BookingForm() {
  const [status, setStatus] = useState<FormStatus>({ type: "idle", message: "" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus({ type: "loading", message: "Odosielame váš dopyt…" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = (await response.json().catch(() => null)) as { message?: string } | null;

      if (!response.ok) {
        throw new Error(result?.message || "Dopyt sa nepodarilo odoslať.");
      }

      form.reset();
      setStatus({
        type: "success",
        message: result?.message || "Ďakujeme. Váš dopyt bol úspešne odoslaný.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Dopyt sa nepodarilo odoslať. Skúste to znova.",
      });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" aria-label="Rezervačný formulár" aria-busy={status.type === "loading"}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="field sm:col-span-2">
          <span>Meno a priezvisko</span>
          <input name="name" autoComplete="name" placeholder="Vaše meno" maxLength={100} required />
        </label>
        <label className="field">
          <span>Telefón</span>
          <input name="phone" type="tel" autoComplete="tel" placeholder="0900 000 000" maxLength={30} required />
        </label>
        <label className="field">
          <span>E-mail</span>
          <input name="email" type="email" autoComplete="email" placeholder="vas@email.sk" maxLength={254} required />
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
          <textarea name="message" rows={3} maxLength={2000} placeholder="Kam sa chystáte alebo čo potrebujete previezť?" />
        </label>
        <label className="absolute -left-[9999px]" aria-hidden="true">
          <span>Spoločnosť</span>
          <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <button type="submit" disabled={status.type === "loading"} className="group flex w-full items-center justify-between rounded-2xl bg-orange-500 px-6 py-4 font-bold text-white transition hover:bg-orange-600 disabled:cursor-wait disabled:opacity-70">
        <span>{status.type === "loading" ? "Odosielam…" : "Odoslať nezáväzný dopyt"}</span>
        {status.type === "loading" ? <Loader2 className="h-5 w-5 animate-spin" /> : <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />}
      </button>
      {status.message && (
        <div role="status" aria-live="polite" className={`flex min-h-5 items-start gap-2 text-xs leading-5 ${status.type === "error" ? "text-red-600" : status.type === "success" ? "text-emerald-700" : "text-slate-500"}`}>
          {status.type === "error" ? <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" /> : <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" />}
          <p>{status.message}</p>
        </div>
      )}
      <p className="text-xs leading-5 text-slate-400">
        Odoslaním formulára beriete na vedomie naše{" "}
        <Link href="/ochrana-osobnych-udajov" className="font-semibold text-slate-600 underline underline-offset-4 transition hover:text-orange-600">
          zásady ochrany osobných údajov
        </Link>.
      </p>
    </form>
  );
}
