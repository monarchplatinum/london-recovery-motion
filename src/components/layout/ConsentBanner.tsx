import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { siteConfig } from "@/config/site";
import {
  CONSENT_REOPEN_EVENT,
  readConsent,
  saveConsent,
  type ConsentChoice,
} from "@/lib/consent";

/**
 * Small cookie choice for Google Analytics. Shows until the visitor picks
 * one, and again from the footer's "Cookie settings" link. Sits above the
 * mobile WhatsApp/Call dock rather than covering it.
 */
export function ConsentBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!siteConfig.analytics.GA4_MEASUREMENT_ID) return;
    if (readConsent() === null) setOpen(true);
    const reopen = () => setOpen(true);
    window.addEventListener(CONSENT_REOPEN_EVENT, reopen);
    return () => window.removeEventListener(CONSENT_REOPEN_EVENT, reopen);
  }, []);

  if (!open) return null;

  const choose = (choice: ConsentChoice) => {
    saveConsent(choice);
    setOpen(false);
  };

  return (
    <div
      role="region"
      aria-label="Cookie choice"
      className="fixed inset-x-3 bottom-[calc(5.5rem+env(safe-area-inset-bottom))] z-[60] mx-auto max-w-xl rounded-xl border border-border bg-background p-4 shadow-lift md:bottom-4"
    >
      <p className="text-sm leading-relaxed text-foreground">
        Can we use analytics cookies to see how people find and use this site? It helps us
        improve it.{" "}
        <Link to="/cookie-policy" className="text-primary underline underline-offset-2">
          Cookie policy
        </Link>
      </p>
      <div className="mt-3 flex gap-2">
        <button
          type="button"
          onClick={() => choose("granted")}
          className="min-h-11 flex-1 rounded-lg bg-primary px-4 font-display text-sm font-bold uppercase tracking-wide text-primary-foreground"
        >
          Accept
        </button>
        <button
          type="button"
          onClick={() => choose("denied")}
          className="min-h-11 flex-1 rounded-lg border border-border px-4 font-display text-sm font-bold uppercase tracking-wide text-foreground"
        >
          Reject
        </button>
      </div>
    </div>
  );
}
