import Image from "next/image";
import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

interface PhotoQuoteProps {
  image: string;
  alt: string;
  /** Names the section for screen readers. */
  label: string;
  /** Where the line sits, so it can stay clear of the photo's subject. */
  align?: "top" | "bottom";
  imagePosition?: string;
  children: ReactNode;
}

const layout = {
  top: { section: "", text: "pt-16 sm:pt-20 lg:pt-24", scrim: "bg-gradient-to-b" },
  bottom: { section: "items-end", text: "pb-16 sm:pb-20 lg:pb-24", scrim: "bg-gradient-to-t" },
};

// A full-width photograph with a single line of display text over it.
export function PhotoQuote({ image, alt, label, align = "top", imagePosition, children }: PhotoQuoteProps) {
  const { section, text, scrim } = layout[align];
  return (
    <section aria-label={label} className={`relative isolate flex min-h-[440px] overflow-hidden bg-(--color-text) sm:min-h-[560px] lg:min-h-[680px] ${section}`}>
      <Image
        src={image}
        alt={alt}
        fill
        sizes="(max-width: 639px) 170vw, 100vw"
        className="-z-20 object-cover"
        style={imagePosition ? { objectPosition: imagePosition } : undefined}
      />
      <div aria-hidden="true" className={`absolute inset-0 -z-10 ${scrim} from-black/65 via-black/30 via-55% to-transparent`} />
      <Container className={`text-center ${text}`}>
        <p className="reveal mx-auto max-w-[20ch] font-display text-[clamp(2rem,4.4vw,4.25rem)] leading-[1.1] tracking-[-0.02em] text-white">
          {children}
        </p>
      </Container>
    </section>
  );
}
