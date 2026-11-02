import { ServicePageLayout } from "@/components/services/ServicePageLayout";
import type { ServicePageContent } from "@/components/services/service-page.types";

const content: ServicePageContent = {
  slug: "wedding",
  base: "/images/services/wedding/",
  hero: {
    image: "wedding-ritual-with-family.webp",
    alt: "Newlyweds seated together during a wedding ritual, surrounded by family",
    eyebrow: "Wedding photography",
    title: "A day to",
    emphasis: "remember.",
    description: "The rituals, the rush, the quiet glances between it all. A wedding is made of moments both grand and small.",
    primaryAction: "Enquire for your wedding",
    galleryAction: "Explore the celebrations",
    titleClassName: "max-w-[9ch] text-[clamp(2.5rem,10vw,3rem)] sm:text-[clamp(3.5rem,6vw,6rem)] leading-[0.98] tracking-[-0.035em]",
    contentClassName: "max-w-[520px]",
    descriptionClassName: "max-w-[38ch]",
    containerClassName: "py-20",
    imageClassName: "object-[54%_center] sm:object-center",
    overlayClassName: "bg-gradient-to-b from-black/75 via-black/35 to-black/10 sm:bg-[linear-gradient(90deg,rgba(0,0,0,.84)_0%,rgba(0,0,0,.68)_24%,rgba(0,0,0,.25)_48%,transparent_72%)]",
  },
  story: {
    image: "bride-in-red-sari-portrait.webp",
    alt: "Bride in a red sari during her wedding celebrations",
    eyebrow: "The story in every frame",
    eyebrowPosition: "image",
    title: "Your day, held in every frame.",
    description: "From the first preparations to the last gathering of family, each part of a wedding carries its own feeling. Explore the celebrations, portraits and rituals in the collection below.",
    titleClassName: "max-w-[18ch] text-[clamp(2.35rem,3.8vw,3.9rem)]",
    columnsClassName: "lg:grid-cols-[0.85fr_1.15fr]",
  },
  gallery: {
    id: "wedding-gallery",
    eyebrow: "The wedding collection",
    title: "A wedding, in moments.",
    mobileVisibleCount: 7,
    desktopColumns: 3,
    headingMarginClassName: "mb-10 sm:mb-14",
    gridGapClassName: "gap-x-3 gap-y-3 sm:gap-x-5 sm:gap-y-4",
    photos: [
      { src: "couple-under-fairy-lights.webp", alt: "Couple together under warm fairy lights", label: "Together" },
      { src: "groom-at-wedding-ritual.webp", alt: "Groom seated at the wedding ritual", label: "The ceremony" },
      { src: "couple-beneath-chandelier.webp", alt: "Couple standing beneath a chandelier", label: "Evening" },
      { src: "bride-jewellery-closeup.webp", alt: "Close portrait of the bride and her wedding jewellery", label: "The details" },
      { src: "bride-in-red-veil-profile.webp", alt: "Bride in profile beneath a red veil", label: "The bride", wide: true },
      { src: "couple-with-sparklers.webp", alt: "Couple standing together with sparklers behind them", label: "The night" },
      { src: "bride-in-ceremonial-crown.webp", alt: "Bride wearing a ceremonial crown", label: "The crown" },
      { src: "bride-in-evening-attire.webp", alt: "Bride in evening attire", label: "A quiet portrait" },
      { src: "couple-at-floral-stage.webp", alt: "Couple standing together at a floral wedding stage", label: "At the stage" },
      { src: "bride-behind-red-veil.webp", alt: "Bride looking through her red wedding veil", label: "Behind the veil" },
      { src: "couple-under-red-drapes.webp", alt: "Couple standing together beneath red wedding drapes", label: "Red drapes" },
      { src: "bride-in-shadow.webp", alt: "Bride photographed in soft shadow", label: "In the shadows" },
      { src: "couple-in-evening-attire.webp", alt: "Couple dressed for an evening celebration", label: "The celebration" },
      { src: "bride-silhouette.webp", alt: "Silhouette portrait of the bride", label: "The silhouette" },
    ],
  },
  closing: {
    photos: [
      { src: "bride-holding-betel-leaf.webp", alt: "Bride holding a betel leaf during a wedding ritual" },
      { src: "couple-forehead-touch.webp", alt: "Newly married couple sharing a quiet moment" },
    ],
    eyebrow: "Your day, your story",
    title: "Let’s talk about your celebration.",
    description: "Tell us the date, the place and the moments that matter to you. We’ll take the conversation from there.",
    action: "Enquire for your wedding",
    titleClassName: "max-w-[15ch] text-[clamp(2.7rem,4.5vw,4.8rem)]",
  },
};

export function WeddingPage() {
  return <ServicePageLayout content={content} />;
}
