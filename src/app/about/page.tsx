import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutProcess } from "@/components/about/AboutProcess";
import { AboutValues } from "@/components/about/AboutValues";
import { FounderStory } from "@/components/about/FounderStory";
import { ClientReviews } from "@/components/sections/ClientReviews";
import { EnquiryBand } from "@/components/sections/EnquiryBand";
import { PhotoQuote } from "@/components/sections/PhotoQuote";

export const metadata: Metadata = {
  title: "About us",
  description: "Meet Fix Your Moments, a wedding and event photography studio from West Bengal, and the founder behind it.",
};

export default function AboutPage() {
  return (
    <main className="-mt-[78px] flex-1 overflow-x-clip">
      <AboutHero />
      <FounderStory />
      <AboutValues />
      <PhotoQuote
        image="/images/services/corporate/durga-idol-at-pandal.webp"
        alt="Durga Puja idol decorated in a pandal"
        label="Rooted in Bengal"
        align="bottom"
      >
        Rooted in Bengal, <em>at home in its rituals.</em>
      </PhotoQuote>
      <AboutProcess />
      <ClientReviews />
      <EnquiryBand />
    </main>
  );
}
