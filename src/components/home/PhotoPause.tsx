import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function PhotoPause() {
  return (
    <section aria-label="A moment by the sea" className="relative isolate flex min-h-[440px] overflow-hidden bg-(--color-text) sm:min-h-[560px] lg:min-h-[680px]">
      <Image
        src="/images/services/prewedding/couple-hands-by-sea.webp"
        alt="A couple holding hands across the frame, with the sea behind them"
        fill
        sizes="(max-width: 639px) 170vw, 100vw"
        className="-z-20 object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-black/65 via-black/30 via-55% to-transparent" />
      <Container className="pt-16 text-center sm:pt-20 lg:pt-24">
        <p className="reveal mx-auto max-w-[20ch] font-display text-[clamp(2rem,4.4vw,4.25rem)] leading-[1.1] tracking-[-0.02em] text-white">
          The smallest moments are the ones you <em>keep coming back to.</em>
        </p>
      </Container>
    </section>
  );
}
