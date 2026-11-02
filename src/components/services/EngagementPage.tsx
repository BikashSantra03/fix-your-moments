import { ServicePageLayout } from "@/components/services/ServicePageLayout";
import type { ServicePageContent } from "@/components/services/service-page.types";

const content: ServicePageContent = {
  slug: "engagement",
  base: "/images/services/engagement/",
  hero: {
    image: "couple-on-tree-lined-lane.webp",
    alt: "A couple laughing together in traditional Bengali attire on a leafy neighbourhood lane",
    eyebrow: "Engagement photography",
    title: "A little yes.",
    emphasis: "A whole new story.",
    titleLeadClassName: "block",
    emphasisClassName: "block",
    description: "The exchanged rings, the familiar faces, the smile you keep finding across the room. We photograph the joy of your engagement, just as it unfolds.",
    primaryAction: "Enquire for your engagement",
    galleryAction: "Explore the moments",
    titleClassName: "text-[clamp(2.35rem,9vw,2.65rem)] sm:text-[clamp(2.8rem,4.7vw,5rem)] leading-[1.04] tracking-[-0.035em]",
    contentClassName: "max-w-[620px]",
    descriptionClassName: "max-w-[38ch]",
    containerClassName: "py-24",
    imageClassName: "object-[68%_center] sm:object-[62%_center] lg:object-center",
    overlayClassName: "bg-gradient-to-b from-black/80 via-black/55 to-black/20 sm:bg-[linear-gradient(90deg,rgba(0,0,0,.82)_0%,rgba(0,0,0,.65)_30%,rgba(0,0,0,.12)_65%,transparent_100%)]",
  },
  gallery: {
    id: "engagement-gallery",
    eyebrow: "The engagement collection",
    title: "The promise. The people. The feeling.",
    mobileVisibleCount: 4,
    desktopColumns: 4,
    headingMarginClassName: "mb-9 sm:mb-12",
    gridGapClassName: "gap-x-3 gap-y-4 sm:gap-x-5 sm:gap-y-6",
    photos: [
      { src: "couple-in-festive-attire.webp", alt: "Couple in a pink sari and purple kurta together beneath floral decorations", label: "Together", position: "center 40%" },
      { src: "engagement-rings-and-henna.webp", alt: "Engagement rings on a couple’s hands, with intricate henna and warm lights behind them", label: "The promise" },
      { src: "couple-in-open-field.webp", alt: "Couple smiling outdoors in peach and orange traditional attire", label: "A shared smile", position: "center 65%" },
      { src: "couple-traditional-closeup.webp", alt: "An intimate portrait of a couple in teal traditional attire and gold jewellery", label: "Close to you", position: "center 40%" },
    ],
  },
  closing: {
    eyebrow: "Your next chapter starts here",
    title: "Let’s celebrate your beginning.",
    description: "Planning an intimate ring ceremony or a gathering with everyone you love? Tell us your date, venue and plans, and we’ll talk about the moments you want to remember.",
    action: "Plan your engagement photography",
    titleClassName: "text-[clamp(2.35rem,4.2vw,4.5rem)]",
  },
};

export function EngagementPage() {
  return <ServicePageLayout content={content} />;
}
