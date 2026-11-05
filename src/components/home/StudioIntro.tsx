import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { siteSettings } from "@/config/site";

export function StudioIntro() {
  return (
    <section aria-labelledby="studio-heading" className="py-16 sm:py-24 lg:py-32">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
        <div className="reveal relative pb-10 sm:pb-14">
          <div className="relative aspect-[4/5] w-[78%] overflow-hidden bg-(--color-surface)">
            <Image
              src="/images/services/prewedding/couple-closeup.webp"
              alt="Couple touching foreheads and smiling, photographed up close"
              fill
              sizes="(max-width: 1023px) 78vw, 40vw"
              className="object-cover object-[center_40%]"
            />
          </div>
          <div className="absolute right-0 bottom-0 aspect-[3/4] w-[46%] overflow-hidden border-[6px] border-(--color-bg) bg-(--color-surface) sm:border-8">
            <Image
              src="/images/services/wedding/bride-jewellery-closeup.webp"
              alt="Close portrait of a bride in her wedding jewellery"
              fill
              sizes="(max-width: 1023px) 46vw, 24vw"
              className="object-cover object-[center_30%]"
            />
          </div>
        </div>

        <div>
          <SectionHeading id="studio-heading" eyebrow="The studio" className="max-w-[14ch]">
            Not just how it looked. <em className="block">How it felt.</em>
          </SectionHeading>
          <div className="reveal">
            <div className="mt-7 h-0.5 w-14 bg-(--color-accent)" aria-hidden="true" />
            <p className="mt-7 max-w-[50ch] text-base leading-relaxed text-(--color-muted) sm:text-lg">
              {siteSettings.brandName} is the photography studio of {siteSettings.founderName}, built around one simple idea: the photographs you keep should bring the day back to you. So we stay close to the rituals, the laughter and the quiet glances in between.
            </p>
            <a href="#how-it-works" className="mt-7 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-(--color-accent-text) underline-offset-4 hover:underline">
              See how we work <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
