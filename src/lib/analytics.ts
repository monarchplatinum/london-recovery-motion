import { siteConfig } from "@/config/site";

export type ConversionEvent =
  | "whatsapp_click"
  | "phone_click"
  | "location_share_click"
  | "transport_quote_click"
  | "recovery_enquiry_click";

/**
 * Fires a conversion event only when an analytics ID has actually been
 * configured. No IDs = no scripts, no network calls, no cookies.
 */
export function trackConversion(event: ConversionEvent, params?: Record<string, string>) {
  if (typeof window === "undefined") return;
  const enabled =
    Boolean(siteConfig.analytics.GA4_MEASUREMENT_ID) ||
    Boolean(siteConfig.analytics.GTM_CONTAINER_ID);
  if (!enabled) return;

  const w = window as unknown as {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  };

  if (typeof w.gtag === "function") {
    w.gtag("event", event, params ?? {});
  } else if (Array.isArray(w.dataLayer)) {
    w.dataLayer.push({ event, ...params });
  }
}
