import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { media } from "@/config/media";
import { siteSettings } from "@/config/site";
import { founderStory } from "@/data/about";

export function FounderStory() {
  const firstName = siteSettings.founderName.split(" ")[0];

  return (
    <section aria-labelledby="founder-heading" className="py-16 sm:py-24 lg:py-32">
      <Container className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <div className="reveal relative isolate mx-auto w-full max-w-[300px] sm:max-w-[400px] lg:mx-0 lg:max-w-[440px]">
          <div className="relative aspect-[4/5] overflow-hidden bg-(--color-surface)">
            <Image src={media.founder.image} alt={media.founder.alt} fill sizes="(max-width: 1023px) 90vw, 440px" className="object-cover" />
          </div>
          <div aria-hidden="true" className="absolute inset-0 -z-10 translate-x-4 translate-y-4 border border-(--color-accent)/40 sm:translate-x-6 sm:translate-y-6" />
        </div>

        <div>
          <SectionHeading id="founder-heading" eyebrow="Meet the founder">
            Hello, I&apos;m <em>{firstName}.</em>
          </SectionHeading>
          <div className="reveal mt-7 max-w-[54ch] space-y-5 text-base leading-relaxed text-(--color-muted) sm:text-lg">
            {founderStory.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="reveal mt-8 border-t border-(--color-border-dark) pt-6">
            <p className="font-display text-2xl italic text-(--color-text)">{siteSettings.founderName}</p>
            <p className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-(--color-accent-text)">Founder, {siteSettings.brandName}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
