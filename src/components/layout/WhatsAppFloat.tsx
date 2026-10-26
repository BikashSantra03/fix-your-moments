import { siteSettings } from "@/config/site";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function WhatsAppFloat() {
  const link = buildWhatsAppLink(
    siteSettings.whatsappNumber,
    `Hi ${siteSettings.brandName}, I'd like to enquire about a shoot.`
  );

  if (!link) return null;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed right-5 bottom-5 z-40 h-14 w-14 rounded-full bg-(--color-cta) flex items-center justify-center shadow-lg transition-transform duration-200 hover:scale-105"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6 fill-(--color-cta-contrast)"
        aria-hidden="true"
      >
        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.3 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.4-.7-2.8-1.1-4.6-4-4.8-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2.1 1-2.4c.3-.3.6-.3.8-.3h.6c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.3 0 .5l-.4.6-.4.4c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.5.1.6-.1l.9-1.1c.2-.3.4-.2.6-.1l2 1c.3.1.5.2.5.3.1.2.1.7-.1 1.3z" />
      </svg>
    </a>
  );
}
