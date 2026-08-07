import type { ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "@/components/layout/Breadcrumbs";
import { WhatsAppCta, CallCta } from "@/components/cta/Cta";
import { waMessages } from "@/config/site";

export function PageHero({
  eyebrow,
  title,
  intro,
  crumbs,
  ctaLabel = "Message us on WhatsApp",
  ctaMessage = waMessages.general,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  crumbs: Crumb[];
  ctaLabel?: string;
  ctaMessage?: string;
}) {
  return (
    <section className="grid-lines border-b border-border bg-surface/30">
      <div className="mx-auto max-w-4xl px-4 pb-14 pt-10 sm:px-6 sm:pt-14">
        <Breadcrumbs items={crumbs} />
        <p className="text-eyebrow">{eyebrow}</p>
        <h1 className="mt-3 text-balance font-display text-4xl font-extrabold leading-[0.98] sm:text-5xl md:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {intro}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <WhatsAppCta label={ctaLabel} message={ctaMessage} size="lg" />
          <CallCta size="lg" />
        </div>
      </div>
    </section>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
      <div className="space-y-10 text-[1.02rem] leading-relaxed text-muted-foreground [&_h2]:mt-2 [&_h2]:text-2xl [&_h2]:font-extrabold [&_h2]:text-foreground sm:[&_h2]:text-3xl [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-foreground [&_p]:mt-3 [&_li]:mt-2 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-5">
        {children}
      </div>
    </div>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 ${className}`}>
      {children}
    </section>
  );
}
