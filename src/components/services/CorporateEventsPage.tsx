import { ServicePageLayout } from "@/components/services/ServicePageLayout";
import type { ServicePageContent } from "@/components/services/service-page.types";

const content: ServicePageContent = {
  slug: "corporate",
  base: "/images/services/corporate/",
  hero: {
    image: "cricket-league-event-hall.webp",
    alt: "A sports league event with a speaker on stage, a branded backdrop and guests seated in the hall",
    eyebrow: "Corporate event photography",
    title: "Your event.",
    emphasis: "Every perspective.",
    titleLeadClassName: "block",
    emphasisClassName: "block",
    description: "The stage, the conversations, the people behind the occasion. Event photography that captures the atmosphere and gives your team a story to share.",
    primaryAction: "Discuss your event",
    galleryAction: "See the event highlights",
    titleClassName: "text-[clamp(2.35rem,9vw,2.65rem)] sm:text-[clamp(2.8rem,4.4vw,4.8rem)] leading-[1.04] tracking-[-0.035em]",
    contentClassName: "max-w-[620px]",
    descriptionClassName: "max-w-[40ch]",
    containerClassName: "py-24",
    imageClassName: "object-center",
    overlayClassName: "bg-[linear-gradient(180deg,rgba(10,12,18,.85)_0px,rgba(10,12,18,.35)_110px,transparent_250px),linear-gradient(180deg,rgba(10,12,18,.65)_0%,rgba(10,12,18,.5)_55%,rgba(10,12,18,.25)_100%)] sm:bg-[linear-gradient(180deg,rgba(10,12,18,.85)_0px,rgba(10,12,18,.35)_110px,transparent_250px),linear-gradient(90deg,rgba(10,12,18,.88)_0%,rgba(10,12,18,.72)_30%,rgba(10,12,18,.15)_65%,transparent_100%)]",
  },
  story: {
    image: "cricket-league-award-display.webp",
    alt: "A league trophy displayed in front of a branded player-auction backdrop",
    eyebrow: "The details behind the occasion",
    eyebrowPosition: "image",
    title: "The big picture. The finer details.",
    description: "An event is more than its headline moment. We follow the people, the atmosphere and the details that bring it together, from stage coverage and team portraits to the conversations in between.",
    titleClassName: "max-w-[18ch] text-[clamp(2.35rem,3.8vw,3.9rem)]",
    columnsClassName: "lg:grid-cols-[0.85fr_1.15fr]",
    imagePosition: "center 30%",
  },
  gallery: {
    id: "corporate-events-gallery",
    eyebrow: "The event collection",
    title: "On stage. In conversation. Together.",
    mobileVisibleCount: 4,
    desktopColumns: 3,
    headingMarginClassName: "mb-9 sm:mb-12",
    gridGapClassName: "gap-x-3 gap-y-3 sm:gap-x-5 sm:gap-y-4",
    photos: [
      { src: "cricket-league-stage-group.webp", alt: "League representatives and players gathered on a branded event stage", label: "The stage", wide: true },
      { src: "cricket-player-with-bat.webp", alt: "Cricket player in a maroon jersey holding a bat for a portrait", label: "Ready to play" },
      { src: "cricket-coach-at-ground.webp", alt: "A coach smiling beside the railing at a cricket ground", label: "Behind the team" },
      { src: "event-group-portrait-01.webp", alt: "Guests posing together for a group portrait at an event venue", label: "People behind the occasion", wide: true },
      { src: "cricket-team-standing.webp", alt: "Cricket players in matching maroon uniforms arranged for a team portrait", label: "Team identity", wide: true, position: "center 40%" },
      { src: "cricket-team-seated.webp", alt: "Cricket players posing together in matching maroon uniforms with a bat", label: "Together off the field" },
      { src: "cricket-league-trophy-detail.webp", alt: "A branded bidding paddle held upright against the blue lights of a league auction", label: "In the details" },
      { src: "cricket-league-panelists.webp", alt: "Two guests seated at the cricket league event", label: "In conversation", wide: true },
      { src: "cricket-team-on-field.webp", alt: "A cricket team and staff gathered for an outdoor group photograph", label: "One team", wide: true },
      { src: "cricket-player-portrait.webp", alt: "Cricket player posing in a maroon team jersey against a plain backdrop", label: "Individual spirit" },
      { src: "cricket-players-on-field.webp", alt: "Cricket players talking beside the boundary during an event", label: "Between the action" },
      { src: "event-group-portrait-02.webp", alt: "A group of guests posing together in a brightly lit venue lobby", label: "Shared moments", wide: true },
    ],
  },
  closing: {
    photos: [
      { src: "billiards-player-at-table.webp", alt: "Two people sharing a playful moment at a blue billiards table" },
      { src: "cricket-player-in-chair.webp", alt: "A man in a purple shirt seated in a green armchair for a portrait" },
    ],
    eyebrow: "Let’s plan the coverage",
    title: "Bring us into your next event.",
    description: "Share your event date, venue and schedule, along with the key people and moments to cover. We’ll discuss the photographs you need for your team, your communications and your event story.",
    action: "Enquire about event coverage",
    titleClassName: "max-w-[15ch] text-[clamp(2.35rem,4.2vw,4.5rem)]",
  },
};

export function CorporateEventsPage() {
  return <ServicePageLayout content={content} />;
}
