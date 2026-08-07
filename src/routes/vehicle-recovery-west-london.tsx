import { createFileRoute } from "@tanstack/react-router";
import { LocationPage } from "@/components/sections/LocationPage";
import { breadcrumbSchema } from "@/components/layout/Breadcrumbs";
import { serviceSchema } from "@/lib/schema";
import { absoluteUrl } from "@/config/site";

const path = "/vehicle-recovery-west-london";
const title = 'Vehicle Recovery West London | Kensington, Ealing & Hounslow | MPG Recovery';
const description = 'Vehicle recovery in West London covering Westminster, Kensington, Hammersmith, Ealing, Chiswick and Hounslow. WhatsApp or call 07884 889128.';

export const Route = createFileRoute("/vehicle-recovery-west-london")({
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
          serviceSchema("Vehicle Recovery West London", description, path),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Areas We Cover", path: "/areas-we-cover" },
            { name: "Vehicle Recovery West London", path },
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
      slug="west-london"
      name="West London"
      h1={"Vehicle Recovery in West London"}
      intro={"Westminster out along the A40 and M4 towards Heathrow. Mews access, gated roads and longer transport runs out of the capital."}
    />
  );
}
