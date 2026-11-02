import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteSettings } from "@/config/site";

export default function Home() {
  return (
    <main className="flex-1">
      <section className="border-b border-(--color-border-dark) bg-(--color-surface)">
        <Container className="grid min-h-[min(720px,calc(100svh-78px))] items-center gap-12 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:py-20">
          <div>
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-(--color-accent-text)">
              Kolkata · Wedding & event photography
            </p>
            <h1 className="max-w-[12ch] text-[clamp(3.5rem,6vw,6.5rem)] leading-[1.02] text-(--color-text)">
              {siteSettings.tagline}
            </h1>
            <div className="mt-8 h-0.5 w-14 bg-(--color-accent)" aria-hidden="true" />
            <p className="mt-7 max-w-[48ch] text-base text-(--color-muted) sm:text-lg">
              From quiet rituals to grand celebrations, we frame the moments you will want to return to.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button href="/contact#enquiry">Book your date</Button>
              <Button href="/portfolio" variant="secondary">See our work</Button>
            </div>
          </div>
          <div className="relative aspect-[4/5] max-h-[620px] overflow-hidden rounded-sm bg-(--color-border-dark) sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src="/images/services/wedding/couple-beneath-chandelier.webp"
              alt="A couple standing together beneath a chandelier"
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>
    </main>
  );
}
