import { Phone } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { siteConfig, whatsappLink, waMessages } from "@/config/site";
import { trackConversion, type ConversionEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

const ctaVariants = cva(
  "inline-flex items-center justify-center gap-2.5 rounded-lg font-display font-bold uppercase tracking-wide transition-all duration-200 min-h-11 magnetic focus-visible:outline-2",
  {
    variants: {
      tone: {
        whatsapp:
          "bg-whatsapp text-whatsapp-foreground hover:brightness-110 shadow-[0_16px_40px_-18px_oklch(0.72_0.17_152/0.7)]",
        phone:
          "border border-border bg-surface-2/70 text-foreground hover:bg-surface-2 hover:border-primary/50",
        primary:
          "bg-primary text-primary-foreground hover:brightness-110 shadow-[0_16px_40px_-18px_oklch(0.78_0.17_64/0.8)]",
        ghost: "text-foreground/90 hover:text-primary",
      },
      size: {
        sm: "px-4 py-2.5 text-xs",
        md: "px-5 py-3 text-sm",
        lg: "px-6 py-4 text-sm sm:text-base",
      },
      full: { true: "w-full", false: "" },
    },
    defaultVariants: { tone: "whatsapp", size: "md", full: false },
  },
);

type CtaProps = VariantProps<typeof ctaVariants> & {
  className?: string;
  label?: string;
  /** Prefilled WhatsApp message key or literal text. */
  message?: string;
  event?: ConversionEvent;
  pulse?: boolean;
};

export function WhatsAppCta({
  className,
  label = "WhatsApp MPG Recovery",
  message = waMessages.general,
  event = "whatsapp_click",
  tone = "whatsapp",
  size,
  full,
  pulse = false,
}: CtaProps) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackConversion(event)}
      aria-label={`${label} on WhatsApp (opens WhatsApp in a new tab)`}
      className={cn(ctaVariants({ tone, size, full }), pulse && "wa-pulse", className)}
    >
      <WhatsAppIcon className="size-5 shrink-0" />
      <span>{label}</span>
    </a>
  );
}

export function CallCta({
  className,
  label = `Call ${siteConfig.phoneDisplay}`,
  tone = "phone",
  size,
  full,
}: Omit<CtaProps, "message" | "event" | "pulse">) {
  return (
    <a
      href={siteConfig.phoneHref}
      onClick={() => trackConversion("phone_click")}
      aria-label={`Call MPG Recovery on ${siteConfig.phoneDisplay}`}
      className={cn(ctaVariants({ tone, size, full }), className)}
    >
      <Phone className="size-5 shrink-0" aria-hidden="true" />
      <span>{label}</span>
    </a>
  );
}

/** Contextual heading + WhatsApp CTA block used between sections. */
export function ContextualCta({
  heading,
  label,
  message,
  event = "whatsapp_click",
  className,
}: {
  heading: string;
  label: string;
  message: string;
  event?: ConversionEvent;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "surface-panel flex flex-col items-start gap-4 rounded-xl p-6 sm:flex-row sm:items-center sm:justify-between",
        className,
      )}
    >
      <p className="font-display text-lg font-bold sm:text-xl">{heading}</p>
      <WhatsAppCta label={label} message={message} event={event} size="md" />
    </div>
  );
}
