import { ServicePageLayout } from "@/components/services/ServicePageLayout";
import type { ServicePageContent } from "@/components/services/service-page.types";

const content: ServicePageContent = {
  slug: "bridhi",
  base: "/images/services/Bridhi/",
  hero: {
    image: "bride-between-red-drapes.webp",
    alt: "Bride in a white and red sari framed by flowing red drapes in an open field",
    eyebrow: "Bridhi photography",
    title: "Rooted in tradition.",
    emphasis: "Filled with you.",
    titleLeadClassName: "block",
    emphasisClassName: "block",
    description: "The familiar rituals, the red and white, the laughter before the celebrations begin. Photographs of your Bridhi day, with room for every little feeling.",
    primaryAction: "Enquire for your Bridhi",
    galleryAction: "Step into the celebration",
    titleClassName: "text-[clamp(2.8rem,4.4vw,4.8rem)] leading-[1.04] tracking-[-0.035em]",
    contentClassName: "max-w-[580px]",
    descriptionClassName: "max-w-[38ch]",
    containerClassName: "justify-end py-24",
    imageClassName: "object-[36%_center] sm:object-center",
    overlayClassName: "bg-[linear-gradient(180deg,rgba(25,14,10,.8)_0px,rgba(25,14,10,.4)_100px,transparent_230px),linear-gradient(180deg,rgba(25,14,10,.65)_0%,rgba(25,14,10,.5)_55%,rgba(25,14,10,.2)_100%)] sm:bg-[linear-gradient(180deg,rgba(25,14,10,.8)_0px,rgba(25,14,10,.4)_100px,transparent_230px),linear-gradient(270deg,rgba(25,14,10,.84)_0%,rgba(25,14,10,.72)_26%,rgba(25,14,10,.3)_48%,rgba(25,14,10,.06)_65%,transparent_80%)]",
  },
  story: {
    image: "ritual-hands-detail.webp",
    alt: "Hands wearing traditional red and white bangles holding a decorated ritual object",
    eyebrow: "The little things we remember",
    eyebrowPosition: "image",
    title: "Some moments hold generations.",
    description: "A familiar gesture. A quiet pause while getting ready. Friends bringing the whole room to life. We follow the details and the people around you, making space for portraits that feel as personal as the day itself.",
    titleClassName: "max-w-[18ch] text-[clamp(2.35rem,3.8vw,3.9rem)]",
    columnsClassName: "lg:grid-cols-[0.85fr_1.15fr]",
  },
  gallery: {
    id: "bridhi-gallery",
    eyebrow: "The Bridhi collection",
    title: "Tradition, in living colour.",
    mobileVisibleCount: 7,
    desktopColumns: 3,
    headingMarginClassName: "mb-9 sm:mb-12",
    gridGapClassName: "gap-x-3 gap-y-3 sm:gap-x-5 sm:gap-y-4",
    photos: [
      { src: "bride-with-ritual-crown.webp", alt: "Bride wearing a traditional white crown, photographed among trees", label: "A quiet beginning", position: "45% center" },
      { src: "groom-in-yellow-kurta.webp", alt: "Groom in a yellow kurta standing beside a decorated car", label: "In yellow" },
      { src: "bride-in-white-room.webp", alt: "Bride in a red and white sari standing in a softly lit white room", label: "Before the gathering" },
      { src: "bride-in-woodland.webp", alt: "Bride holding a decorated ceremonial tray in a leafy woodland", label: "Among the trees" },
      { src: "bride-and-friends-dancing.webp", alt: "Bride laughing and dancing with friends in yellow saris", label: "Joy, together", wide: true },
      { src: "bride-at-rustic-door.webp", alt: "Bride framed by the doorway of a rustic building", label: "At the doorway" },
      { src: "bride-on-staircase.webp", alt: "Bride looking back from a bright indoor staircase", label: "A moment of her own" },
      { src: "groom-by-riverside-railing.webp", alt: "Groom in yellow standing beside a riverside railing beneath trees", label: "By the water" },
      { src: "bride-by-green-wall.webp", alt: "Bride in a white and red sari against a wall of green leaves", label: "Red, white and green" },
      { src: "bride-smiling-outdoors.webp", alt: "Bride smiling in soft outdoor light", label: "An unguarded smile" },
      { src: "bride-beside-jeep.webp", alt: "Bride smiling beside a red jeep outdoors", label: "A playful pause" },
      { src: "groom-at-garden-arch.webp", alt: "Groom seated beneath a flowering garden arch", label: "In the garden" },
      { src: "bride-by-stone-wall.webp", alt: "Bride looking back with a smile beside a weathered stone wall", label: "Looking back", position: "62% center" },
      { src: "bride-window-silhouette.webp", alt: "Black and white silhouette of a bride beside a lace-curtained window", label: "Window light", position: "65% center" },
    ],
  },
  closing: {
    photos: [
      { src: "bride-indoor-portrait.webp", alt: "Bride smiling in a softly lit room before her celebration" },
      { src: "bride-peeking-around-tree.webp", alt: "Bride smiling playfully from behind a tree" },
    ],
    eyebrow: "Your traditions, your memories",
    title: "Let’s tell your Bridhi story.",
    description: "Tell us your date, your plans and the people you’re celebrating with. We’ll help you hold on to the moments that make the day yours.",
    action: "Plan your Bridhi photography",
    titleClassName: "max-w-[15ch] text-[clamp(2.7rem,4.5vw,4.8rem)]",
  },
};

export function BridhiPage() {
  return <ServicePageLayout content={content} />;
}
