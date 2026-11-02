import { ServicePageLayout } from "@/components/services/ServicePageLayout";
import type { ServicePageContent } from "@/components/services/service-page.types";

const content: ServicePageContent = {
  slug: "rice",
  base: "/images/services/rice-ceremony/",
  hero: {
    image: "baby-in-festive-setting.webp",
    alt: "Smiling baby in a cream festive outfit and knitted hat against pink decorations and fairy lights",
    eyebrow: "Rice ceremony photography",
    title: "Little firsts.",
    emphasis: "Lasting memories.",
    titleLeadClassName: "block",
    emphasisClassName: "block",
    description: "A first taste, a curious little smile, a family gathered close. Photographs of your baby’s rice ceremony and the love surrounding this new beginning.",
    primaryAction: "Enquire for your rice ceremony",
    galleryAction: "Discover the little moments",
    titleClassName: "text-[clamp(2.35rem,9vw,2.65rem)] sm:text-[clamp(2.8rem,4.4vw,4.8rem)] leading-[1.04] tracking-[-0.035em]",
    contentClassName: "max-w-[580px]",
    descriptionClassName: "max-w-[38ch]",
    containerClassName: "justify-end py-24",
    imageClassName: "object-[36%_center] sm:object-center",
    overlayClassName: "bg-[linear-gradient(180deg,rgba(30,15,15,.8)_0px,rgba(30,15,15,.35)_100px,transparent_230px),linear-gradient(180deg,rgba(30,15,15,.65)_0%,rgba(30,15,15,.45)_55%,rgba(30,15,15,.15)_100%)] sm:bg-[linear-gradient(180deg,rgba(30,15,15,.8)_0px,rgba(30,15,15,.35)_100px,transparent_230px),linear-gradient(270deg,rgba(30,15,15,.85)_0%,rgba(30,15,15,.7)_28%,rgba(30,15,15,.2)_52%,transparent_72%)]",
  },
  story: {
    image: "baby-in-krishna-attire-portrait.webp",
    alt: "Baby wearing a peacock-feather crown and pearl necklaces in a leafy outdoor setting",
    eyebrow: "Small moments, so much meaning",
    eyebrowPosition: "image",
    title: "They grow. The feeling stays.",
    description: "The tiny hands, the changing expressions, the comfort of a familiar face. We take a gentle, unhurried approach to baby portraits, making room for breaks and the little moments that happen in between.",
    titleClassName: "max-w-[18ch] text-[clamp(2.35rem,3.8vw,3.9rem)]",
    columnsClassName: "lg:grid-cols-[0.85fr_1.15fr]",
    imagePosition: "center 35%",
  },
  gallery: {
    id: "rice-ceremony-gallery",
    eyebrow: "The rice ceremony collection",
    title: "Their little world, in photographs.",
    mobileVisibleCount: 6,
    desktopColumns: 3,
    headingMarginClassName: "mb-9 sm:mb-12",
    gridGapClassName: "gap-x-3 gap-y-3 sm:gap-x-5 sm:gap-y-4",
    photos: [
      { src: "baby-in-red-turban-closeup.webp", alt: "Close portrait of a baby wearing a red turban and bow tie", label: "Those curious eyes", position: "60% center" },
      { src: "baby-in-white-shirt.webp", alt: "Baby smiling outdoors in a white shirt and black bow tie", label: "A little sunshine", position: "65% center" },
      { src: "baby-with-yellow-teddy-bear.webp", alt: "Baby in red traditional attire seated beside a yellow teddy bear", label: "A new friend" },
      { src: "baby-in-red-outfit.webp", alt: "Baby in a patterned red outfit holding a toy", label: "Time to play", position: "center 40%" },
      { src: "baby-with-red-teddy-bear.webp", alt: "Baby resting on a colourful blanket beside a red teddy bear", label: "The sweetest smile", position: "70% center" },
      { src: "baby-in-red-turban-seated.webp", alt: "Baby seated in a red turban and patterned waistcoat, looking down at a toy", label: "In their own world" },
    ],
  },
  closing: {
    eyebrow: "A little milestone, a lot of love",
    title: "Let’s remember their firsts.",
    description: "Tell us your ceremony date, venue and what you have in mind. We’ll talk through the portraits and moments you’d love to keep, with your baby’s comfort at the heart of the plan.",
    action: "Plan your rice ceremony photography",
    titleClassName: "text-[clamp(2.35rem,4.2vw,4.5rem)]",
  },
};

export function RiceCeremonyPage() {
  return <ServicePageLayout content={content} />;
}
