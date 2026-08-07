import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { WhatsAppCta } from "@/components/cta/Cta";
import { siteConfig } from "@/config/site";
import { trackConversion } from "@/lib/analytics";

const nav = [
  { to: "/vehicle-recovery-london", label: "Vehicle Recovery" },
  { to: "/vehicle-transport-london", label: "Vehicle Transport" },
  { to: "/breakdown-recovery-london", label: "Breakdown" },
  { to: "/accident-recovery-london", label: "Accident" },
  { to: "/areas-we-cover", label: "Areas We Cover" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6">
        <Logo className="mr-auto" />

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "text-primary" }}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={siteConfig.phoneHref}
          onClick={() => trackConversion("phone_click", { placement: "header" })}
          className="hidden items-center gap-2 rounded-lg px-3 py-2 font-display text-sm font-bold text-foreground transition-colors hover:text-primary md:inline-flex"
          aria-label={`Call MPG Recovery on ${siteConfig.phoneDisplay}`}
        >
          <Phone className="size-4" aria-hidden="true" />
          {siteConfig.phoneDisplay}
        </a>

        <WhatsAppCta label="WhatsApp" size="sm" className="hidden md:inline-flex" />

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex size-11 items-center justify-center rounded-lg border border-border bg-surface-2 lg:hidden"
        >
          {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-border bg-background lg:hidden"
        >
          <ul className="mx-auto max-w-7xl px-4 py-2 sm:px-6">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  activeProps={{ className: "text-primary" }}
                  className="flex min-h-12 items-center border-b border-border/60 text-[0.95rem] text-foreground/90"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
