import { useEffect, useRef, useState } from "react";

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return reduced;
}

/** True on hydrated, pointer-capable, reasonably powerful devices. */
export function useRichMotion() {
  const reduced = usePrefersReducedMotion();
  const [capable, setCapable] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const cores = (navigator as Navigator & { hardwareConcurrency?: number })
      .hardwareConcurrency;
    setCapable(fine && (cores === undefined || cores >= 4));
  }, []);

  return { reduced, pointerParallax: capable && !reduced };
}

/** Adds data-revealed="true" once the element scrolls into view. */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      el.setAttribute("data-revealed", "true");
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).setAttribute("data-revealed", "true");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 },
    );

    io.observe(el);
    const children = el.querySelectorAll<HTMLElement>("[data-reveal-child]");
    children.forEach((child) => io.observe(child));

    return () => io.disconnect();
  }, []);

  return ref;
}

/**
 * Document-wide scroll reveal.
 *
 * Mounted once at the root. Every `.reveal` element in the document is
 * observed, including ones added later, so sections never depend on being
 * nested inside a particular ref. If motion is reduced or observers are
 * unavailable, `data-motion` is never set and everything stays visible.
 */
export function useRevealObserver() {
  useEffect(() => {
    const root = document.documentElement;

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    root.setAttribute("data-motion", "on");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).setAttribute("data-revealed", "true");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.05 },
    );

    const observeAll = () => {
      document
        .querySelectorAll<HTMLElement>(".reveal:not([data-revealed='true'])")
        .forEach((el) => io.observe(el));
    };

    // Start after hydration settles so the observer never writes
    // `data-revealed` onto nodes React is still matching against SSR markup.
    const mo = new MutationObserver(observeAll);
    const start = window.setTimeout(() => {
      observeAll();
      mo.observe(document.body, { childList: true, subtree: true });
    }, 300);


    // Safety net: anything still hidden after 3s is shown regardless.
    const timer = window.setTimeout(() => {
      document
        .querySelectorAll<HTMLElement>(".reveal:not([data-revealed='true'])")
        .forEach((el) => {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight * 1.5) {
            el.setAttribute("data-revealed", "true");
          }
        });
    }, 3000);

    return () => {
      io.disconnect();
      mo.disconnect();
      window.clearTimeout(timer);
      root.removeAttribute("data-motion");
    };
  }, []);
}
