import { createFileRoute } from "@tanstack/react-router";
import { LocationPage } from "@/components/sections/LocationPage";
import { breadcrumbSchema } from "@/components/layout/Breadcrumbs";
import { serviceSchema } from "@/lib/schema";
import { absoluteUrl } from "@/config/site";

const path = "/vehicle-recovery-north-london";
const title = 'Vehicle Recovery North London | Islington, Camden & Haringey | MPG Recovery';
const description = 'Vehicle recovery in North London covering Islington, Camden, Haringey, Enfield and Barnet. WhatsApp your location or call 07884 889128.';

export const Route = createFileRoute("/vehicle-recovery-north-london")({
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
          serviceSchema("Vehicle Recovery North London", description, path),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Areas We Cover", path: "/areas-we-cover" },
            { name: "Vehicle Recovery North London", path },
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
      slug="north-london"
      name="North London"
      h1={"Vehicle Recovery in North London"}
      intro={"From the inner boroughs out to the North Circular. Tight permit streets and fast arterial roads in equal measure — send a photo of the street and we’ll plan the collection."}
    />
  );
}
