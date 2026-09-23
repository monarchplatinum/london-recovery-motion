import type { FaqItem } from "@/components/sections/Faq";

/**
 * Answers must stay within what the owner has confirmed (see CLAUDE.md).
 * Response times are described as typical, never guaranteed, and the
 * insurance answer says hire and reward — not "fully insured".
 */
export const homeFaqs: FaqItem[] = [
  {
    q: "How quickly can you get to me?",
    a: "We answer the phone and WhatsApp around the clock, usually straight away. From our base in E1 we are typically with you in 5 to 15 minutes across East London, though traffic, the time of day and how far out you are all change that. Tell us where you are and we will give you a realistic time before you commit to anything.",
  },
  {
    q: "Are you available at night and at weekends?",
    a: "Yes. MPG Recovery is on call 24 hours a day, seven days a week, including nights, weekends and bank holidays.",
  },
  {
    q: "Do you charge for a quote?",
    a: "No. Quotes are free. Send the collection point, the destination and the vehicle details and we will price the job before anything is arranged.",
  },
  {
    q: "Is there a callout fee?",
    a: "Only in one situation: if we have already travelled to you and you then no longer need the vehicle moved. If we do the job, there is no separate callout charge on top of the price we agreed.",
  },
  {
    q: "Are you insured to move my vehicle?",
    a: "Yes. MPG Recovery holds business hire and reward insurance, which is the cover needed to carry customers' vehicles for payment.",
  },
  {
    q: "Do you offer vehicle recovery in London?",
    a: "Yes. MPG Recovery is based in London and arranges vehicle recovery and transport across the capital and surrounding areas. Message us with the location and vehicle details and we can confirm availability.",
  },
  {
    q: "What information should I send for a recovery quote?",
    a: "Send your collection location, destination, vehicle make/model, registration if appropriate, whether the vehicle runs and when you need it moved. Photos can also help us understand the job.",
  },
  {
    q: "Can you transport a car to a garage?",
    a: "Yes. Garage, bodyshop and specialist movements are common jobs. Let us know the garage address, the collection point and whether the vehicle rolls and steers.",
  },
  {
    q: "Can you collect a vehicle I have purchased?",
    a: "Yes. Whether the vehicle was bought privately, from a dealer or through an auction, send the collection postcode, the delivery postcode and the vehicle details and we can discuss the move.",
  },
  {
    q: "Which areas of London do you cover?",
    a: "We work across East, Central, North, South and West London and surrounding areas. Our base is in E1, so East London and the Docklands are covered particularly regularly. Send both postcodes and we can confirm.",
  },
  {
    q: "Can I send my location through WhatsApp?",
    a: "Yes, and it is usually the quickest way to reach us. You can attach a WhatsApp live or static location, or paste a Google Maps link. This site also has an optional button that fetches your coordinates on your device only when you tap it.",
  },
  {
    q: "How do I request vehicle transport?",
    a: "Message us on WhatsApp with the collection postcode, delivery postcode, vehicle make and model, and when it needs to move. We'll reply in the same thread.",
  },
  {
    q: "Do you recover non-running vehicles?",
    a: "Yes. Tell us whether the vehicle rolls and steers, whether the keys are available and how it is parked, as that affects how it is loaded.",
  },
];
