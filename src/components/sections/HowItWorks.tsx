import { useReveal } from "@/hooks/use-motion";

const steps = [
  {
    n: "01",
    title: "Message or Call",
    copy: "Send your vehicle details and location through WhatsApp or call us.",
  },
  {
    n: "02",
    title: "Tell Us Where It Is Going",
    copy: "Share the collection point, destination and vehicle information.",
  },
  {
    n: "03",
    title: "We Arrange Your Recovery",
    copy: "MPG Recovery confirms the job details and arranges collection.",
  },
];

export function HowItWorks() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="border-y border-border bg-surface/30">
      <div ref={ref} className="reveal mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-24">
        <p className="text-eyebrow">How it works</p>
        <h2 className="mt-3 text-balance font-display text-[1.8rem] font-extrabold sm:text-4xl md:text-5xl">
          Three steps to getting moving
        </h2>

        <div className="relative mt-9 sm:mt-12">
          {/* animated route line */}
          <svg
            aria-hidden="true"
            viewBox="0 0 1000 40"
            preserveAspectRatio="none"
            className="absolute left-0 top-7 hidden h-10 w-full md:block"
          >
            <line x1="60" y1="20" x2="940" y2="20" stroke="oklch(0.20 0.012 350 / 0.26)" strokeWidth="2" />
            <line
              x1="60"
              y1="20"
              x2="940"
              y2="20"
              stroke="var(--color-primary)"
              strokeWidth="2"
              strokeDasharray="14 14"
              className="road-dash"
            />
          </svg>

          <ol className="relative grid gap-7 md:grid-cols-3">
            {steps.map((step) => (
              <li key={step.n} data-reveal-child className="reveal">
                <div className="flex size-12 sm:size-14 items-center justify-center rounded-full border border-primary/40 bg-background font-display text-lg font-extrabold text-primary">
                  {step.n}
                </div>
                <h3 className="mt-4 font-display text-lg font-bold sm:mt-5 sm:text-xl">{step.title}</h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                  {step.copy}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
