import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { Logo } from "@/components/brand/Logo";
import { SocialLinks } from "@/components/layout/SocialLinks";
import { siteConfig, whatsappLink, waMessages, serviceAreas } from "@/config/site";
import { trackConversion } from "@/lib/analytics";

export function Footer() {
  const { address } = siteConfig;

  return (
    <footer className="hairline-top mt-16 bg-surface/40 pb-[calc(5.5rem+env(safe-area-inset-bottom))] sm:mt-24 md:pb-0">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 sm:py-14 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            {siteConfig.tagline}. Recovery, towing and vehicle transport arranged by
            WhatsApp or phone.
          </p>

          <div className="mt-6 flex flex-col gap-2 text-sm">
            <a
              href={siteConfig.phoneHref}
              onClick={() => trackConversion("phone_click", { placement: "footer" })}
              className="inline-flex items-center gap-2 font-display font-bold text-foreground hover:text-primary"
            >
              <Phone className="size-4" aria-hidden="true" />
              Call {siteConfig.phoneDisplay}
            </a>
            <a
              href={whatsappLink(waMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackConversion("whatsapp_click", { placement: "footer" })}
              className="inline-flex items-center gap-2 font-display font-bold text-foreground hover:text-primary"
            >
              <WhatsAppIcon className="size-4" />
              WhatsApp {siteConfig.whatsappDisplay}
            </a>
          </div>

          <SocialLinks className="mt-5" />
        </div>


        <nav aria-label="Services">
          <h2 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
            Services
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/vehicle-recovery-london" className="text-foreground/85 hover:text-primary">Vehicle Recovery London</Link></li>
            <li><Link to="/vehicle-transport-london" className="text-foreground/85 hover:text-primary">Vehicle Transport London</Link></li>
            <li><Link to="/breakdown-recovery-london" className="text-foreground/85 hover:text-primary">Breakdown Recovery London</Link></li>
            <li><Link to="/accident-recovery-london" className="text-foreground/85 hover:text-primary">Accident Recovery London</Link></li>
            <li><Link to="/areas-we-cover" className="text-foreground/85 hover:text-primary">Areas We Cover</Link></li>
            <li><Link to="/gallery" className="text-foreground/85 hover:text-primary">Gallery</Link></li>
          </ul>
        </nav>

        <nav aria-label="Coverage and company">
          <h2 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
            Coverage
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {serviceAreas.map((area) => (
              <li key={area.slug}>
                <Link
                  to={`/vehicle-recovery-${area.slug}` as "/"}
                  className="text-foreground/85 hover:text-primary"
                >
                  Vehicle Recovery {area.name}
                </Link>
              </li>
            ))}

          </ul>
        </nav>
      </div>

      <div className="hairline-top">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 text-xs text-muted-foreground sm:px-6 md:flex-row md:items-start md:justify-between">
          <address className="not-italic leading-relaxed">
            <strong className="font-display text-foreground">{siteConfig.legalName}</strong>
            <br />
            Company No. {siteConfig.companyNumber}
            <br />
            Registered office: {address.line1}, {address.line2}, {address.city},{" "}
            {address.postcode}, {address.country}
            {!siteConfig.addressIsPublicPremises ? (
              <>
                <br />
                <span className="text-muted-foreground/80">
                  Registered office address only — not a customer drop-in location.
                </span>
              </>
            ) : null}
          </address>

          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            <li><Link to="/privacy-policy" className="hover:text-primary">Privacy Policy</Link></li>
            <li><Link to="/cookie-policy" className="hover:text-primary">Cookie Policy</Link></li>
            <li><Link to="/terms" className="hover:text-primary">Terms</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            <li><Link to="/areas-we-cover" className="hover:text-primary">Areas We Cover</Link></li>
          </ul>
        </div>
        <p className="mx-auto max-w-7xl px-4 pb-24 text-xs text-muted-foreground/70 sm:px-6 md:pb-8">
          © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
