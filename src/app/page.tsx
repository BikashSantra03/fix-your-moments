import type { Metadata } from "next";
import { HomeHero } from "@/components/home/HomeHero";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { SelectedWork } from "@/components/home/SelectedWork";
import { ServiceMosaic } from "@/components/home/ServiceMosaic";
import { StudioIntro } from "@/components/home/StudioIntro";
import { ClientReviews } from "@/components/sections/ClientReviews";
import { EnquiryBand } from "@/components/sections/EnquiryBand";
import { PhotoQuote } from "@/components/sections/PhotoQuote";

export const metadata: Metadata = {
  description:
    "Fix Your Moments is a wedding and event photography studio serving Kolkata and West Bengal, covering weddings, pre-wedding shoots, engagements, Bridhi, rice ceremonies and corporate events.",
};

export default function Home() {
  return (
    <main className="-mt-[78px] flex-1 overflow-x-clip">
      <HomeHero />
      <StudioIntro />
      <ServiceMosaic />
      <SelectedWork />
      <PhotoQuote
        image="/images/services/prewedding/couple-hands-by-sea.webp"
        alt="A couple holding hands across the frame, with the sea behind them"
        label="A moment by the sea"
      >
        The smallest moments are the ones you <em>keep coming back to.</em>
      </PhotoQuote>
      <ProcessSteps />
      <ClientReviews />
      <EnquiryBand />
    </main>
  );
}
