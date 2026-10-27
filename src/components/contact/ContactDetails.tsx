import type { ReactNode } from "react";
import { siteSettings } from "@/config/site";
import { directionsUrl, getSocialLinks, telHref, whatsappChatLink } from "@/lib/contact";
import { HeartIcon, MailIcon, PhoneIcon, PinIcon } from "@/components/ui/icons";

const pillClasses =
  "inline-flex items-center gap-1.5 rounded-full border border-(--color-border-dark) px-4 py-2 text-sm font-medium text-(--color-text) transition-colors duration-200 hover:border-(--color-accent) hover:text-(--color-accent-text)";

function DetailCard({ icon, label, children }: { icon: ReactNode; label: string; children: ReactNode }) {
  return (
    <div className="flex gap-4 rounded-2xl border border-(--color-border-dark) bg-(--color-surface) p-5 sm:p-6">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-(--color-accent)/15 text-(--color-accent-text)">
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <h3 className="font-body text-xs font-medium uppercase tracking-[0.14em] text-(--color-muted)">{label}</h3>
        <div className="mt-1.5">{children}</div>
      </div>
    </div>
  );
}

// Each detail renders only once configured in site.ts (Rules.md §7).
export function ContactDetails() {
  const { phone, email, address, mapQuery } = siteSettings;
  const socialLinks = getSocialLinks();

  return (
    <div className="flex flex-col gap-4">
      {(phone || whatsappChatLink) && (
        <DetailCard icon={<PhoneIcon />} label={whatsappChatLink ? "Call or WhatsApp" : "Call"}>
          {phone && (
            <a
              href={telHref(phone)}
              className="whitespace-nowrap font-display text-xl text-(--color-text) hover:text-(--color-accent-text) sm:text-2xl"
            >
              {phone}
            </a>
          )}
          <div className="mt-4 flex flex-wrap gap-2">
            {phone && (
              <a href={telHref(phone)} className={pillClasses}>
                Call now
              </a>
            )}
            {whatsappChatLink && (
              <a href={whatsappChatLink} target="_blank" rel="noopener noreferrer" className={pillClasses}>
                Chat on WhatsApp
              </a>
            )}
          </div>
        </DetailCard>
      )}

      {address && (
        <DetailCard icon={<PinIcon />} label="Visit the studio">
          <address className="font-display text-lg not-italic leading-snug sm:text-xl text-(--color-text)">{address}</address>
          <a
            href={directionsUrl(mapQuery ?? address)}
            target="_blank"
            rel="noopener noreferrer"
            className={`${pillClasses} mt-4`}
          >
            Get directions
            <span aria-hidden="true">↗</span>
          </a>
        </DetailCard>
      )}

      {email && (
        <DetailCard icon={<MailIcon />} label="Email">
          {/* Sans is narrower than the display serif; <wbr> lets a long address wrap after "@" rather than mid-word. */}
          <a
            href={`mailto:${email}`}
            className="break-words text-lg font-normal text-(--color-text) hover:text-(--color-accent-text) sm:text-xl"
          >
            {email.split("@")[0]}@<wbr />
            {email.split("@")[1]}
          </a>
        </DetailCard>
      )}

      {socialLinks.length > 0 && (
        <DetailCard icon={<HeartIcon />} label="Follow our work">
          <div className="flex flex-wrap gap-2">
            {socialLinks.map((link) => (
              <a key={link.network} href={link.href} target="_blank" rel="noopener noreferrer" className={pillClasses}>
                {link.label}
              </a>
            ))}
          </div>
        </DetailCard>
      )}
    </div>
  );
}
