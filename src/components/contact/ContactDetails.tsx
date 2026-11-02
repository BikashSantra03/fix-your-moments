import { siteSettings } from "@/config/site";
import { directionsUrl, telHref, whatsappChatLink } from "@/lib/contact";
import { ContactIcon, type ContactIconName } from "./ContactIcon";

type ContactOption = { icon: ContactIconName; title: string; description: string; href: string | null | undefined };

export function ContactDetails() {
  const { phone, address, mapQuery, social, googleReviewUrl } = siteSettings;
  const options: ContactOption[] = [
    { icon: "phone", title: "Call us", description: "", href: phone ? telHref(phone) : null },
    { icon: "whatsapp", title: "WhatsApp us", description: "Tell us about your plans.", href: whatsappChatLink },
    { icon: "location", title: "Visit us", description: address ?? "", href: address ? directionsUrl(mapQuery ?? address) : null },
    { icon: "facebook", title: "Facebook", description: "Stories from our latest shoots.", href: social.facebook },
    { icon: "instagram", title: "Instagram", description: "Behind the scenes and moments we love.", href: social.instagram },
    { icon: "review", title: "Google reviews", description: "Share your experience with us.", href: googleReviewUrl },
  ];

  return (
    <div className="grid grid-cols-2 gap-x-5 gap-y-5 sm:gap-x-10 sm:gap-y-6 lg:grid-cols-3 lg:gap-x-16">
      {options.filter((option): option is ContactOption & { href: string } => Boolean(option.href)).map((option) => (
        <a key={option.icon} href={option.href} target={option.icon === "phone" ? undefined : "_blank"} rel={option.icon === "phone" ? undefined : "noopener noreferrer"} className="group flex min-w-0 flex-col items-start transition-colors hover:text-(--color-accent-text)">
          <span className="mb-1.5 block sm:mb-2 transition-transform duration-300 ease-out group-hover:-translate-y-1 group-focus-visible:-translate-y-1 motion-reduce:transform-none"><ContactIcon name={option.icon} /></span>
          <h2 className="font-body text-base font-medium leading-tight tracking-tight sm:text-2xl">{option.title}</h2>
          <div className="mt-1.5 w-full border-t border-(--color-border-dark) pt-1.5 sm:mt-2 sm:pt-2">
            <p className="max-w-[34ch] break-words text-[13px] leading-[1.4] sm:text-base sm:leading-relaxed text-(--color-muted)">{option.icon === "phone" && phone ? <>Call us at <span className="whitespace-nowrap">{phone}</span></> : option.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
}
