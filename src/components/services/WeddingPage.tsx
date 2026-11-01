import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { WeddingGallery } from "@/components/services/WeddingGallery";

const base = "/images/services/wedding/";

export function WeddingPage() {
  return (
    <main className="-mt-[78px] flex-1 overflow-hidden">
      <section className="relative isolate min-h-[690px] overflow-hidden bg-(--color-text) sm:min-h-[720px] lg:min-h-[min(900px,100svh)]">
        <Image
          src={`${base}wedding-ritual-with-family.webp`}
          alt="Newlyweds seated together during a wedding ritual, surrounded by family"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-[54%_center] sm:object-center"
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-black/75 via-black/35 to-black/10 sm:bg-[linear-gradient(90deg,rgba(0,0,0,.84)_0%,rgba(0,0,0,.68)_24%,rgba(0,0,0,.25)_48%,transparent_72%)]" />
        <Container className="flex min-h-[690px] items-start py-20 sm:min-h-[720px] sm:items-center lg:min-h-[min(900px,100svh)]">
          <div className="max-w-[520px] text-white">
            <p className="mb-5 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.18em] text-white/90">
              <span aria-hidden="true" className="h-px w-8 bg-white/80" /> Wedding photography
            </p>
            <h1 className="max-w-[9ch] text-[clamp(3.5rem,6vw,6rem)] leading-[0.98] tracking-[-0.035em]">
              A day to <em className="font-normal text-[#ffd9dc]">remember.</em>
            </h1>
            <p className="mt-7 max-w-[38ch] text-base leading-relaxed text-white/90 sm:text-lg">
              The rituals, the rush, the quiet glances between it all. A wedding is made of moments both grand and small.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="/contact?service=wedding">Enquire for your wedding</Button>
              <a href="#wedding-gallery" className="inline-flex min-h-11 items-center px-3 text-sm font-medium text-white underline-offset-4 hover:underline">Explore the photographs ↓</a>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20 lg:py-28">
        <Container className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <p className="mb-6 text-sm font-medium uppercase tracking-[0.16em] text-(--color-accent-text)">The story in every frame</p>
            <div className="relative aspect-[4/5] max-h-[590px] overflow-hidden bg-(--color-surface)">
              <Image src={`${base}bride-in-red-sari-portrait.webp`} alt="Bride in a red sari during her wedding celebrations" fill sizes="(max-width: 1023px) 100vw, 42vw" className="object-cover" />
            </div>
          </div>
          <div>
            <h2 className="max-w-[18ch] text-[clamp(2.35rem,3.8vw,3.9rem)]">Your day, held in every frame.</h2>
            <p className="mt-6 max-w-[60ch] text-base leading-relaxed text-(--color-muted) sm:text-lg">
              From the first preparations to the last gathering of family, each part of a wedding carries its own feeling. Explore the celebrations, portraits and rituals in the collection below.
            </p>
          </div>
        </Container>
      </section>

      <WeddingGallery />

      <section className="py-14 sm:py-20 lg:py-28">
        <Container className="grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div className="grid grid-cols-2 gap-3 sm:gap-5">
            <div className="relative aspect-[3/4] translate-y-3 overflow-hidden bg-(--color-surface) sm:translate-y-5 lg:translate-y-8">
              <Image src={`${base}bride-holding-betel-leaf.webp`} alt="Bride holding a betel leaf during a wedding ritual" fill sizes="(max-width: 1023px) 50vw, 25vw" className="object-cover" />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden bg-(--color-surface)">
              <Image src={`${base}couple-forehead-touch.webp`} alt="Newly married couple sharing a quiet moment" fill sizes="(max-width: 1023px) 50vw, 25vw" className="object-cover" />
            </div>
          </div>
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.16em] text-(--color-accent-text)">Your day, your story</p>
            <h2 className="max-w-[15ch] text-[clamp(2.7rem,4.5vw,4.8rem)]">Let&apos;s talk about your celebration.</h2>
            <p className="mt-6 max-w-[46ch] text-base leading-relaxed text-(--color-muted) sm:text-lg">Tell us the date, the place and the moments that matter to you. We&apos;ll take the conversation from there.</p>
            <div className="mt-8"><Button href="/contact?service=wedding">Enquire for your wedding</Button></div>
          </div>
        </Container>
      </section>
    </main>
  );
}
