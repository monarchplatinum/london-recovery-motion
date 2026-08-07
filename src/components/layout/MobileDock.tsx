import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { siteConfig, whatsappLink, waMessages } from "@/config/site";
import { trackConversion } from "@/lib/analytics";

/**
 * Fixed bottom conversion dock (mobile only).
 * Page content adds bottom padding via the layout so nothing is covered.
 */
export function MobileDock() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 md:hidden"
      style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}
    >
      <div className="mx-3 mb-1 grid grid-cols-[1.6fr_1fr] gap-2 rounded-2xl border border-border bg-background/85 p-2 shadow-lift backdrop-blur-xl">
        <a
          href={whatsappLink(waMessages.general)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackConversion("whatsapp_click", { placement: "mobile_dock" })}
          aria-label="Message MPG Recovery on WhatsApp (opens WhatsApp in a new tab)"
          className="flex min-h-14 items-center justify-center gap-2 rounded-xl bg-whatsapp font-display text-sm font-bold uppercase tracking-wide text-whatsapp-foreground"
        >
          <WhatsAppIcon className="size-5" />
          WhatsApp
        </a>
        <a
          href={siteConfig.phoneHref}
          onClick={() => trackConversion("phone_click", { placement: "mobile_dock" })}
          aria-label={`Call MPG Recovery on ${siteConfig.phoneDisplay}`}
          className="flex min-h-14 items-center justify-center gap-2 rounded-xl border border-border bg-surface-2 font-display text-sm font-bold uppercase tracking-wide text-foreground"
        >
          <Phone className="size-5" aria-hidden="true" />
          Call
        </a>
      </div>
    </div>
  );
}
