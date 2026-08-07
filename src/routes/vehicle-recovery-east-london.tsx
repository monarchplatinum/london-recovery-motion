import { seoMeta, canonical } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { LocationPage } from "@/components/sections/LocationPage";
import { breadcrumbSchema } from "@/components/layout/Breadcrumbs";
import { serviceSchema } from "@/lib/schema";

const path = "/vehicle-recovery-east-london";
const title = 'Vehicle Recovery East London | Car Recovery E1 & Docklands | MPG Recovery';
const description = 'Vehicle recovery in East London from our E1 base. Tower Hamlets, Hackney, Stratford, Newham and the Docklands. WhatsApp or call 07884 889128.';

export const Route = createFileRoute("/vehicle-recovery-east-london")({
  head: () => ({
    meta: seoMeta({ title, description, path }),
    links: canonical(path),
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
