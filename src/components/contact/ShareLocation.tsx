import { useState } from "react";
import { MapPin, Loader2 } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { whatsappLink, waMessages } from "@/config/site";
import { trackConversion } from "@/lib/analytics";

type State =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "ready"; url: string }
  | { status: "error"; message: string };

/**
 * Geolocation is requested ONLY on explicit click, held in component state
 * for the current visit, and never persisted or transmitted to our servers.
 */
export function ShareLocation() {
  const [state, setState] = useState<State>({ status: "idle" });

  const request = () => {
    trackConversion("location_share_click");

    if (typeof navigator === "undefined" || !navigator.geolocation) {
      setState({ status: "error", message: "Location isn't available on this device." });
      return;
    }

    setState({ status: "loading" });
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude.toFixed(5);
        const lng = pos.coords.longitude.toFixed(5);
        setState({
          status: "ready",
          url: `https://www.google.com/maps?q=${lat},${lng}`,
        });
      },
      () => {
        setState({
          status: "error",
          message: "We couldn't get your location. You can send it in WhatsApp instead.",
        });
      },
      { enableHighAccuracy: true, timeout: 12000, maximumAge: 0 },
    );
  };

  return (
    <div className="rounded-xl border border-border bg-surface-2/50 p-5">
      <h3 className="font-display text-base font-bold">Share my location</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Optional. Your location is only requested when you tap the button, and it is
        never stored by this website.
      </p>

      {state.status !== "ready" ? (
        <button
          type="button"
          onClick={request}
          disabled={state.status === "loading"}
          className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-lg border border-border bg-background px-4 py-3 font-display text-sm font-bold uppercase tracking-wide transition-colors hover:border-primary/60 hover:text-primary disabled:opacity-60"
        >
          {state.status === "loading" ? (
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
          ) : (
            <MapPin className="size-4" aria-hidden="true" />
          )}
          {state.status === "loading" ? "Getting location…" : "Get my location"}
        </button>
      ) : (
        <div className="mt-4 space-y-3">
          <p className="break-all rounded-lg border border-border bg-background px-3 py-2 text-xs text-muted-foreground">
            {state.url}
          </p>
          <a
            href={whatsappLink(`${waMessages.location} ${state.url}`)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackConversion("whatsapp_click", { placement: "share_location" })}
            className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-whatsapp px-4 py-3 font-display text-sm font-bold uppercase tracking-wide text-whatsapp-foreground"
          >
            <WhatsAppIcon className="size-4" />
            Send location on WhatsApp
          </a>
        </div>
      )}

      <p aria-live="polite" className="mt-3 text-sm text-destructive">
        {state.status === "error" ? state.message : ""}
      </p>
    </div>
  );
}
