import { WhatsAppCta, CallCta } from "@/components/cta/Cta";
import { CopyField } from "@/components/contact/CopyField";
import { ShareLocation } from "@/components/contact/ShareLocation";
import { siteConfig, waMessages } from "@/config/site";
import { useReveal } from "@/hooks/use-motion";

export function ContactSection({ id = "contact" }: { id?: string }) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id={id} className="border-t border-border bg-surface/40 grid-lines">
      <div ref={ref} className="reveal mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="text-eyebrow">Contact MPG Recovery</p>
            <h2 className="mt-2.5 text-balance font-display text-[2.1rem] font-extrabold leading-[0.98] sm:text-5xl md:text-6xl">
              Need Your Vehicle Moved?
            </h2>
            <p className="mt-4 max-w-xl text-[1.02rem] sm:text-lg text-muted-foreground">
              Send us your location and vehicle details on WhatsApp or call MPG Recovery
              directly.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsAppCta
                label="Message MPG Recovery"
                message={waMessages.general}
                size="lg"
                pulse
                className="w-full sm:w-auto"
              />
              <CallCta label={siteConfig.phoneDisplay} size="lg" className="w-full sm:w-auto" />
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <CopyField label="Phone" value={siteConfig.phoneDisplay} />
              <CopyField label="WhatsApp" value={siteConfig.whatsappDisplay} />
              <CopyField label="Location" value="London" copyValue="London, UK" />
              {siteConfig.email ? (
                <CopyField label="Email" value={siteConfig.email} />
              ) : null}
            </div>
          </div>

          <div className="space-y-4">
            <ShareLocation />
            <div className="rounded-xl border border-border bg-surface-2/50 p-5">
              <h3 className="font-display text-base font-bold">
                What to send for a quicker answer
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>Collection location or postcode</li>
                <li>Destination</li>
                <li>Vehicle make and model</li>
                <li>Whether the vehicle runs, rolls and steers</li>
                <li>When it needs moving</li>
                <li>Photos, if the vehicle is damaged or awkwardly parked</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
