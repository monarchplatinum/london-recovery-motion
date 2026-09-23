import { seoMeta, canonical } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import heroImg from "@/assets/gallery/mpg-recovery-truck-bca-auction.jpg";
import { HeroScene } from "@/components/hero/HeroScene";
import { RoadDivider } from "@/components/motion/RoadDivider";
import { WhatsAppCta, CallCta, ContextualCta } from "@/components/cta/Cta";
import { TrustStrip, QuickAssist } from "@/components/sections/QuickAssist";
import { Services } from "@/components/sections/Services";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Coverage } from "@/components/sections/Coverage";
import { WhyChoose, TransportSection, Scenarios } from "@/components/sections/HomeBlocks";
import { GalleryStrip } from "@/components/sections/GalleryStrip";
import { ContactSection } from "@/components/sections/ContactSection";
import { FaqList, faqSchema } from "@/components/sections/Faq";
import { homeFaqs } from "@/content/faqs";
import { waMessages } from "@/config/site";
import { localBusinessSchema, websiteSchema } from "@/lib/schema";

const path = "/";
const title = "Vehicle Recovery London | Towing & Vehicle Transport | MPG Recovery";
const description =
  "London vehicle recovery, towing and vehicle transport from MPG Recovery. WhatsApp or call 07884 889128 for vehicle recovery and transport enquiries.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: seoMeta({ title, description, path }),
    links: canonical(path),
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(localBusinessSchema()) },
      { type: "application/ld+json", children: JSON.stringify(websiteSchema()) },
      { type: "application/ld+json", children: JSON.stringify(faqSchema(homeFaqs)) },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImg}
          alt="The MPG Recovery flatbed truck at a BCA auction site, ready to collect a vehicle"
          width={1242}
          height={700}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 size-full object-cover opacity-30"
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_0%,transparent,var(--background)_78%)]"
          aria-hidden="true"
        />
        <HeroScene />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-linear-to-t from-background via-background/80 to-transparent"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-9 sm:px-6 sm:pb-44 sm:pt-24">


          <div className="max-w-2xl">
            <p className="text-eyebrow">London Vehicle Recovery &amp; Transport</p>
            <h1 className="mt-3 text-balance font-display text-[2.25rem] font-extrabold leading-[0.95] sm:text-6xl md:text-7xl">
              Stranded? We&rsquo;ll Get You Moving.
            </h1>
            <p className="mt-3 font-display text-[0.72rem] font-bold uppercase tracking-[0.16em] text-primary sm:text-sm sm:tracking-[0.28em]">
              Recovery. Transport. Delivered.
            </p>
            <p className="mt-4 max-w-xl text-[0.98rem] leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg">
              Reliable vehicle recovery, towing and vehicle transport across London and
              surrounding areas. Message MPG Recovery on WhatsApp or call us directly to
              arrange assistance.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
              <WhatsAppCta label="WhatsApp MPG Recovery" size="lg" pulse className="w-full sm:w-auto" />
              <CallCta size="lg" className="w-full sm:w-auto" />
            </div>

            <div className="mt-6 sm:mt-7">
              <TrustStrip />
            </div>
          </div>
        </div>
      </section>

      <QuickAssist />

      <div className="sr-only">
        <h2>Vehicle Recovery &amp; Transport in London</h2>
      </div>

      <RoadDivider />
      <Services />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <ContextualCta
          heading="Need recovery?"
          label="Message us on WhatsApp"
          message={waMessages.recovery}
          event="recovery_enquiry_click"
        />
      </div>

      <HowItWorks />
      <Coverage />
      <RoadDivider reverse />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <ContextualCta
          heading="Need a vehicle transported?"
          label="Get a quote on WhatsApp"
          message={waMessages.transport}
          event="transport_quote_click"
        />
      </div>

      <WhyChoose />
      <TransportSection />
      <Scenarios />
      <GalleryStrip />

      <section id="faq" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-24">
        <p className="text-eyebrow">FAQ</p>
        <h2 className="mt-3 text-balance font-display text-[1.8rem] font-extrabold sm:text-4xl md:text-5xl">
          Questions before you message
        </h2>
        <div className="mt-8 max-w-3xl">
          <FaqList items={homeFaqs} />
        </div>
        <p className="mt-8 max-w-3xl text-sm text-muted-foreground">

          Still unsure?{" "}
          <Link to="/contact" className="text-primary hover:underline">
            Contact MPG Recovery
          </Link>{" "}
          and describe the vehicle and where it needs to go.
        </p>
      </section>

      <ContactSection />
    </>
  );
}
