import type { ReactNode } from "react";
import { siteSettings } from "@/config/site";
import { getSocialLinks, type SocialNetwork } from "@/lib/contact";

const icons: Record<SocialNetwork, ReactNode> = {
  facebook: (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden="true">
      <path d="M9.1 23.7v-8H6.6V12h2.5v-1.6c0-4.1 1.8-6 5.9-6 .8 0 2.1.2 2.6.3v3.3h-1.4c-1.4 0-2.1.4-2.1 2.1V12h3.9l-.7 3.7H14v8.2A12 12 0 1 0 9.1 23.7z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden="true">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.5 15.6V8.4l6.3 3.6-6.3 3.6z" />
    </svg>
  ),
};

// Renders only the networks configured in site.ts — nothing when none are set.
export function SocialLinks({ className = "" }: { className?: string }) {
  const links = getSocialLinks();

  if (links.length === 0) return null;

  return (
    <ul className={`flex flex-wrap gap-3 ${className}`}>
      {links.map((link) => (
        <li key={link.network}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${siteSettings.brandName} on ${link.label}`}
            className="grid h-10 w-10 place-items-center rounded-full border border-(--color-border-dark) text-(--color-muted) transition-colors duration-200 hover:border-(--color-accent) hover:bg-(--color-accent) hover:text-(--color-accent-contrast)"
          >
            {icons[link.network]}
          </a>
        </li>
      ))}
    </ul>
  );
}
