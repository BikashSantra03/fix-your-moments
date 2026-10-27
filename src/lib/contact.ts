import { siteSettings } from "@/config/site";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import type { SocialLinks } from "@/types/content";

export function telHref(phone: string): string {
  return `tel:${phone.replace(/\s/g, "")}`;
}

export function directionsUrl(destination: string): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`;
}

// Shared by every "chat on WhatsApp" entry point; null when no number is configured.
export const whatsappChatLink = buildWhatsAppLink(
  siteSettings.whatsappNumber,
  `Hi ${siteSettings.brandName}, I'd like to enquire about a shoot.`
);

export type SocialNetwork = keyof SocialLinks;

const socialLabels: Record<SocialNetwork, string> = {
  facebook: "Facebook",
  instagram: "Instagram",
  youtube: "YouTube",
};

// Only networks with a configured URL (Rules.md §7), in display order.
export function getSocialLinks(): { network: SocialNetwork; label: string; href: string }[] {
  return (Object.keys(socialLabels) as SocialNetwork[]).flatMap((network) => {
    const href = siteSettings.social[network];
    return href ? [{ network, label: socialLabels[network], href }] : [];
  });
}
