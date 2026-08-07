import { Facebook, Instagram, Linkedin, Youtube, Globe, MapPin } from "lucide-react";
import type { ComponentType } from "react";
import { siteConfig } from "@/config/site";

type Platform = { label: string; Icon: ComponentType<{ className?: string }> };

/** Maps a profile URL to a recognisable label + icon. */
function platformFor(url: string): Platform {
  const u = url.toLowerCase();
  if (u.includes("facebook.")) return { label: "Facebook", Icon: Facebook };
  if (u.includes("instagram.")) return { label: "Instagram", Icon: Instagram };
  if (u.includes("linkedin.")) return { label: "LinkedIn", Icon: Linkedin };
  if (u.includes("youtube.") || u.includes("youtu.be")) return { label: "YouTube", Icon: Youtube };
  if (u.includes("google.") || u.includes("goo.gl") || u.includes("maps.app"))
    return { label: "Google Business Profile", Icon: MapPin };
  return { label: "Profile", Icon: Globe };
}

/**
 * Renders links only for profiles that genuinely exist
 * (siteConfig.social + Google Business Profile). Nothing renders while empty.
 */
export function SocialLinks({ className = "" }: { className?: string }) {
  const urls = [
    ...siteConfig.social,
    ...(siteConfig.GOOGLE_BUSINESS_PROFILE_URL ? [siteConfig.GOOGLE_BUSINESS_PROFILE_URL] : []),
  ];
  if (urls.length === 0) return null;

  return (
    <ul className={`flex flex-wrap items-center gap-2 ${className}`}>
      {urls.map((url) => {
        const { label, Icon } = platformFor(url);
        return (
          <li key={url}>
            <a
              href={url}
              target="_blank"
              rel="me noopener noreferrer"
              aria-label={`${siteConfig.name} on ${label}`}
              title={label}
              className="inline-flex size-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
            >
              <Icon className="size-4" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
