import { Link } from "@tanstack/react-router";
import { PageHero, Prose } from "@/components/layout/PageParts";
import { ContextualCta } from "@/components/cta/Cta";
import { ContactSection } from "@/components/sections/ContactSection";
import { locationBodies } from "@/content/locations";
import { waMessages } from "@/config/site";

export function LocationPage({
  slug,
  name,
  h1,
  intro,
}: {
  slug: string;
  name: string;
  h1: string;
  intro: string;
}) {
  const body = locationBodies[slug];

  return (
    <>
      <PageHero
        eyebrow={`Vehicle recovery — ${name}`}
        title={h1}
        intro={intro}
        crumbs={[
          { label: "Areas We Cover", to: "/areas-we-cover" },
          { label: `Vehicle Recovery ${name}` },
        ]}
        ctaLabel={`WhatsApp for recovery in ${name}`}
        ctaMessage={waMessages.recovery}
      />

      <Prose>
        {body?.sections.map((section) => (
          <section key={section.h2}>
            <h2>{section.h2}</h2>
            {section.paras.map((para) => (
              <p key={para.slice(0, 40)}>{para}</p>
            ))}
          </section>
        ))}

        <ContextualCta
          heading={`Vehicle in ${name}?`}
          label="Send us your location"
          message={waMessages.location}
          event="recovery_enquiry_click"
        />

        <section>
          <h2>Related services</h2>
          <ul>
            <li>
              <Link to="/vehicle-recovery-london" className="text-primary hover:underline">
                Vehicle recovery in London
              </Link>
            </li>
            <li>
              <Link to="/breakdown-recovery-london" className="text-primary hover:underline">
                Breakdown recovery in London
              </Link>
            </li>
            <li>
              <Link to="/vehicle-transport-london" className="text-primary hover:underline">
                Vehicle transport in London
              </Link>
            </li>
            <li>
              <Link to="/areas-we-cover" className="text-primary hover:underline">
                All areas we cover
              </Link>
            </li>
          </ul>
        </section>
      </Prose>

      <ContactSection />
    </>
  );
}
