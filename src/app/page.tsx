import type { Metadata } from "next";
import { ClientReviews } from "@/components/home/ClientReviews";
import { EnquiryBand } from "@/components/home/EnquiryBand";
import { HomeHero } from "@/components/home/HomeHero";
import { PhotoPause } from "@/components/home/PhotoPause";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { SelectedWork } from "@/components/home/SelectedWork";
import { ServiceMosaic } from "@/components/home/ServiceMosaic";
import { StudioIntro } from "@/components/home/StudioIntro";

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
      <PhotoPause />
      <ProcessSteps />
      <ClientReviews />
      <EnquiryBand />
    </main>
  );
}
