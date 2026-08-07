import { createFileRoute } from "@tanstack/react-router";
import { LocationPage } from "@/components/sections/LocationPage";
import { breadcrumbSchema } from "@/components/layout/Breadcrumbs";
import { serviceSchema } from "@/lib/schema";
import { absoluteUrl } from "@/config/site";

const path = "/vehicle-recovery-central-london";
const title = 'Vehicle Recovery Central London | City & Westminster | MPG Recovery';
const description = 'Vehicle recovery in Central London. Congestion Charge zone, red routes and underground car parks planned around. WhatsApp or call 07884 889128.';

export const Route = createFileRoute("/vehicle-recovery-central-london")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: path },
    ],
    links: [{ rel: "canonical", href: absoluteUrl(path) || path }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          serviceSchema("Vehicle Recovery Central London", description, path),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Areas We Cover", path: "/areas-we-cover" },
            { name: "Vehicle Recovery Central London", path },
          ]),
        ),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <LocationPage
      slug="central-london"
      name="Central London"
      h1={"Vehicle Recovery in Central London"}
      intro={"Recovery inside the Congestion Charge zone takes planning. Send the street, the vehicle and where it needs to go, and we’ll work out where it can legally be loaded."}
    />
  );
}
