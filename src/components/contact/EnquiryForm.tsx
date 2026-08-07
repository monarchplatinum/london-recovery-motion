import { useState } from "react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { whatsappLink } from "@/config/site";
import { trackConversion } from "@/lib/analytics";

const fields = [
  { id: "name", label: "Name", type: "text", autoComplete: "name" },
  { id: "phone", label: "Phone", type: "tel", autoComplete: "tel" },
  { id: "from", label: "Collection postcode or location", type: "text", autoComplete: "off" },
  { id: "to", label: "Destination", type: "text", autoComplete: "off" },
  { id: "vehicle", label: "Vehicle", type: "text", autoComplete: "off" },
] as const;

type FieldId = (typeof fields)[number]["id"] | "message";

/**
 * Deliberately minimal. The form composes a WhatsApp message rather than
 * posting anywhere — no accounts, no stored personal data.
 */
export function EnquiryForm() {
  const [values, setValues] = useState<Record<FieldId, string>>({
    name: "",
    phone: "",
    from: "",
    to: "",
    vehicle: "",
    message: "",
  });

  const set = (id: FieldId, value: string) =>
    setValues((prev) => ({ ...prev, [id]: value }));

  const compose = () => {
    const lines = [
      "Hi MPG Recovery, I'd like to arrange a vehicle move.",
      "",
      values.name ? `Name: ${values.name}` : "",
      values.phone ? `Phone: ${values.phone}` : "",
      values.from ? `Collection: ${values.from}` : "",
      values.to ? `Destination: ${values.to}` : "",
      values.vehicle ? `Vehicle: ${values.vehicle}` : "",
      values.message ? `Notes: ${values.message}` : "",
    ].filter(Boolean);
    return lines.join("\n");
  };

  return (
    <form
      className="rounded-2xl border border-border bg-surface/60 p-6"
      onSubmit={(e) => {
        e.preventDefault();
        trackConversion("whatsapp_click", { placement: "enquiry_form" });
        window.open(whatsappLink(compose()), "_blank", "noopener,noreferrer");
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {fields.map((field) => (
          <div key={field.id} className={field.id === "vehicle" ? "sm:col-span-2" : ""}>
            <label
              htmlFor={`enq-${field.id}`}
              className="block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground"
            >
              {field.label}
            </label>
            <input
              id={`enq-${field.id}`}
              name={field.id}
              type={field.type}
              autoComplete={field.autoComplete}
              value={values[field.id]}
              onChange={(e) => set(field.id, e.target.value)}
              className="mt-2 min-h-11 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground"
            />
          </div>
        ))}
        <div className="sm:col-span-2">
          <label
            htmlFor="enq-message"
            className="block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground"
          >
            Message
          </label>
          <textarea
            id="enq-message"
            name="message"
            rows={4}
            value={values.message}
            onChange={(e) => set("message", e.target.value)}
            className="mt-2 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-whatsapp px-6 py-3 font-display text-sm font-bold uppercase tracking-wide text-whatsapp-foreground sm:w-auto"
      >
        <WhatsAppIcon className="size-5" />
        Send enquiry
      </button>
      <p className="mt-3 text-xs text-muted-foreground">
        Opens WhatsApp with your details pre-written. Nothing is stored on this website.
      </p>
    </form>
  );
}
