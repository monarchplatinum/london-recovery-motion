import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileDock } from "@/components/layout/MobileDock";
import { siteConfig } from "@/config/site";
import { organizationSchema } from "@/lib/schema";
import { useRevealObserver } from "@/hooks/use-motion";


function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <p className="text-eyebrow">404</p>
        <h1 className="mt-3 font-display text-4xl font-extrabold">Page not found</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          That page doesn&rsquo;t exist. If you need a vehicle recovered or transported,
          message MPG Recovery on WhatsApp or call {siteConfig.phoneDisplay}.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <Link
            to="/"
            className="inline-flex min-h-11 items-center justify-center rounded-lg bg-primary px-5 py-3 font-display text-sm font-bold uppercase text-primary-foreground"
          >
            Go home
          </Link>
          <Link
            to="/contact"
            className="inline-flex min-h-11 items-center justify-center rounded-lg border border-border px-5 py-3 font-display text-sm font-bold uppercase"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl font-extrabold">This page didn&rsquo;t load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong. You can try again, or call {siteConfig.phoneDisplay}.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex min-h-11 items-center justify-center rounded-lg bg-primary px-5 py-3 font-display text-sm font-bold uppercase text-primary-foreground"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex min-h-11 items-center justify-center rounded-lg border border-border px-5 py-3 font-display text-sm font-bold uppercase"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#141518" },
      { name: "author", content: siteConfig.legalName },
      { name: "publisher", content: siteConfig.legalName },
      { name: "application-name", content: siteConfig.name },
      { name: "apple-mobile-web-app-title", content: siteConfig.name },
      { name: "format-detection", content: "telephone=yes" },
      { title: `${siteConfig.name} | ${siteConfig.tagline}` },
      { property: "og:site_name", content: siteConfig.name },
      { property: "og:locale", content: "en_GB" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      ...(siteConfig.analytics.GOOGLE_SITE_VERIFICATION
        ? [
            {
              name: "google-site-verification",
              content: siteConfig.analytics.GOOGLE_SITE_VERIFICATION,
            },
          ]
        : []),
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Archivo:wght@600;700;800;900&family=Inter:wght@400;500;600&display=swap",
      },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      { rel: "manifest", href: "/site.webmanifest" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(organizationSchema()),
      },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en-GB">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  useRevealObserver();



  return (
    <QueryClientProvider client={queryClient}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-3 focus:font-display focus:text-sm focus:font-bold focus:text-primary-foreground"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main">
        {/* Required: nested routes render here. */}
        <Outlet />
      </main>
      <Footer />
      <MobileDock />
    </QueryClientProvider>
  );
}
