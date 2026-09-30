import type { ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "@/components/layout/Breadcrumbs";
import { WhatsAppCta, CallCta } from "@/components/cta/Cta";
import { waMessages } from "@/config/site";
import { TrustStrip } from "@/components/sections/QuickAssist";

export type HeroImage = { src: string; alt: string };

/**
 * Page hero. With `image`, the photograph sits behind the text under a dark
 * scrim and the trust signals show beneath the buttons, as Caleb's service
 * page template asks. Without it, the original light hero.
 */
export function PageHero({
  eyebrow,
  title,
  intro,
  crumbs,
  ctaLabel = "Message us on WhatsApp",
  ctaMessage = waMessages.general,
  image,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  crumbs: Crumb[];
  ctaLabel?: string;
  ctaMessage?: string;
  image?: HeroImage;
}) {
  if (!image) {
    return (
      <section className="grid-lines border-b border-border bg-surface/30">
        <div className="mx-auto max-w-4xl px-4 pb-10 pt-6 sm:px-6 sm:pb-14 sm:pt-14">
          <Breadcrumbs items={crumbs} />
          <p className="text-eyebrow">{eyebrow}</p>
          <h1 className="mt-2.5 text-balance font-display text-[2.1rem] font-extrabold leading-[0.98] sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-[0.98rem] leading-relaxed text-muted-foreground sm:text-lg">
            {intro}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <WhatsAppCta label={ctaLabel} message={ctaMessage} size="lg" className="w-full sm:w-auto" />
            <CallCta size="lg" className="w-full sm:w-auto" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative isolate overflow-hidden border-b border-border bg-neutral-950">
      <img
        src={image.src}
        alt={image.alt}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 size-full object-cover"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(100deg,rgba(10,8,8,0.92)_0%,rgba(10,8,8,0.8)_45%,rgba(10,8,8,0.45)_100%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-4xl px-4 pb-12 pt-6 sm:px-6 sm:pb-16 sm:pt-14">
        <Breadcrumbs items={crumbs} onDark />
        <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-white/70">
          {eyebrow}
        </p>
        <h1 className="mt-2.5 text-balance font-display text-[2.1rem] font-extrabold leading-[0.98] text-white sm:text-5xl md:text-6xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-[0.98rem] leading-relaxed text-white/80 sm:text-lg">
          {intro}
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <WhatsAppCta label={ctaLabel} message={ctaMessage} size="lg" className="w-full sm:w-auto" />
          <CallCta size="lg" className="w-full sm:w-auto" />
        </div>
        <div className="mt-7">
          <TrustStrip />
        </div>
      </div>
    </section>
  );
}

export function InlineFigure({
  src,
  alt,
  caption,
  width,
  height,
}: {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
}) {
  return (
    <figure className="mt-6 overflow-hidden rounded-xl border border-border bg-surface/60">
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
        className="aspect-16/10 w-full object-cover"
      />
      <figcaption className="px-4 py-3 text-sm text-muted-foreground">{caption}</figcaption>
    </figure>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="space-y-10 text-[1.02rem] leading-relaxed text-muted-foreground [&_h2]:mt-2 [&_h2]:text-2xl [&_h2]:font-extrabold [&_h2]:text-foreground sm:[&_h2]:text-3xl [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-foreground [&_p]:mt-3 [&_li]:mt-2 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-5 [&_p_a]:underline [&_p_a]:underline-offset-2">
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
    <section id={id} className={`mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 ${className}`}>
      {children}
    </section>
  );
}
