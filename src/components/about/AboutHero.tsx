import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function AboutHero() {
  return (
    <section aria-labelledby="about-heading" className="relative isolate flex min-h-[max(640px,100svh)] items-start overflow-hidden bg-(--color-text) text-white lg:min-h-[min(780px,92svh)] lg:items-center">
      <Image
        src="/images/services/prewedding/couple-on-mountain-hill.webp"
        alt="A couple embracing on a grassy hilltop above the clouds"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[30%_center] lg:object-[center_60%]"
      />
      {/* Phones and tablets: text at the top, over the sky, with the couple below. Desktop: text on the right. */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(15,8,10,.8)_0%,rgba(15,8,10,.5)_36%,transparent_58%)] lg:bg-[linear-gradient(270deg,rgba(15,8,10,.72)_0%,rgba(15,8,10,.45)_38%,transparent_68%),linear-gradient(180deg,rgba(15,8,10,.5)_0%,transparent_22%)]" />
      <Container className="flex pt-28 pb-12 lg:justify-end lg:py-28">
        <div className="max-w-[560px]">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-white/90 sm:mb-5">About us</p>
          <h1 id="about-heading" className="text-[clamp(2.4rem,9.5vw,3.5rem)] leading-[1.04] tracking-[-0.03em] lg:text-[clamp(3rem,4.6vw,4.5rem)]">
            Every frame begins with <em className="font-normal text-(--color-on-dark-accent)">a feeling.</em>
          </h1>
          <p className="mt-5 max-w-[42ch] text-[15px] leading-relaxed text-white/90 sm:mt-6 sm:text-lg">
            We are a photography studio from West Bengal, here to keep the moments you never want to forget.
          </p>
        </div>
      </Container>
    </section>
  );
}
