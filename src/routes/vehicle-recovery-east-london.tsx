import { createFileRoute } from "@tanstack/react-router";
import { LocationPage } from "@/components/sections/LocationPage";
import { breadcrumbSchema } from "@/components/layout/Breadcrumbs";
import { serviceSchema } from "@/lib/schema";
import { absoluteUrl } from "@/config/site";

const path = "/vehicle-recovery-east-london";
const title = 'Vehicle Recovery East London | Car Recovery E1 & Docklands | MPG Recovery';
const description = 'Vehicle recovery in East London from our E1 base. Tower Hamlets, Hackney, Stratford, Newham and the Docklands. WhatsApp or call 07884 889128.';

export const Route = createFileRoute("/vehicle-recovery-east-london")({
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
          serviceSchema("Vehicle Recovery East London", description, path),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Areas We Cover", path: "/areas-we-cover" },
            { name: "Vehicle Recovery East London", path },
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
      slug="east-london"
      name="East London"
      h1={"Vehicle Recovery in East London"}
      intro={"MPG Recovery is based in the railway arches on Tent Street, E1. East London is home ground — from Whitechapel and Bethnal Green out through Stratford, Barking and Romford."}
    />
  );
}
