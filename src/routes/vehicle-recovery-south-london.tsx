import { seoMeta, canonical } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { LocationPage } from "@/components/sections/LocationPage";
import { breadcrumbSchema } from "@/components/layout/Breadcrumbs";
import { serviceSchema } from "@/lib/schema";

const path = "/vehicle-recovery-south-london";
const title = 'Vehicle Recovery South London | Greenwich, Lewisham & Croydon | MPG Recovery';
const description = 'Vehicle recovery south of the river covering Greenwich, Lewisham, Southwark, Woolwich and Croydon. WhatsApp or call 07884 889128.';

export const Route = createFileRoute("/vehicle-recovery-south-london")({
  head: () => ({
    meta: seoMeta({ title, description, path }),
    links: canonical(path),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          serviceSchema("Vehicle Recovery South London", description, path),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Areas We Cover", path: "/areas-we-cover" },
            { name: "Vehicle Recovery South London", path },
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
      slug="south-london"
      name="South London"
      h1={"Vehicle Recovery in South London"}
      intro={"South London jobs usually start with a river crossing. Send both postcodes and the vehicle details and we’ll route it sensibly."}
    />
  );
}
