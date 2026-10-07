import { siteConfig } from "@/config/site";

/**
 * Analytics consent. Google Analytics loads with consent denied (Consent
 * Mode v2), so until a visitor accepts it sends only cookieless pings.
 * The choice is kept in localStorage; nothing is stored until one is made.
 */

export const CONSENT_KEY = "mpg-analytics-consent";
export const CONSENT_REOPEN_EVENT = "mpg:reopen-consent";

export type ConsentChoice = "granted" | "denied";

export function readConsent(): ConsentChoice | null {
  try {
    const value = window.localStorage.getItem(CONSENT_KEY);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    return null;
  }
}

export function saveConsent(choice: ConsentChoice) {
  try {
    window.localStorage.setItem(CONSENT_KEY, choice);
  } catch {
    // private browsing or blocked storage: the choice still applies this visit
  }
  const w = window as unknown as { gtag?: (...args: unknown[]) => void };
  w.gtag?.("consent", "update", { analytics_storage: choice });
}

/** Lets the footer's "Cookie settings" link bring the banner back. */
export function reopenConsent() {
  window.dispatchEvent(new Event(CONSENT_REOPEN_EVENT));
}

/**
 * Inline bootstrap placed in <head> before gtag.js: sets every consent type
 * to denied, then restores a stored "granted" choice before the first hit.
 * Ad storage stays denied; the site runs no advertising.
 */
export function analyticsBootstrap(): string {
  const id = siteConfig.analytics.GA4_MEASUREMENT_ID;
  return `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',wait_for_update:500});
try{if(localStorage.getItem('${CONSENT_KEY}')==='granted'){gtag('consent','update',{analytics_storage:'granted'});}}catch(e){}
gtag('js',new Date());gtag('config','${id}');`;
}
