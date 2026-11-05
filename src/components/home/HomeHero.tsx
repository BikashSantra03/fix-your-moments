import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { media } from "@/config/media";
import { siteSettings } from "@/config/site";
import { services } from "@/data/services";

export function HomeHero() {
  const [lead, emphasis] = siteSettings.tagline.split(/(?<=\.)\s+/);

  return (
    <div className="flex flex-col lg:min-h-[min(900px,100svh)]">
      <section aria-labelledby="home-heading" className="relative isolate flex min-h-[max(640px,100svh)] flex-1 overflow-hidden bg-(--color-hero-backdrop) text-white max-[359px]:min-h-[max(680px,100svh)] lg:min-h-0">
        <div className="absolute inset-0 -z-10 overflow-hidden lg:left-[28%]">
          <Image
            src={media.hero.image}
            alt={media.hero.alt}
            fill
            priority
            sizes="(min-width: 1024px) 72vw, 240vw"
            className="home-hero-photo object-cover object-[36%_center] sm:object-[44%_center] lg:object-[28%_30%]"
          />
          {/* Mobile: readable text at the bottom. Desktop: dissolves the photo's edge and watermark into the backdrop. */}
          <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,3,2,.6)_0%,transparent_20%,transparent_38%,rgba(7,3,2,.94)_74%)] lg:bg-[linear-gradient(90deg,var(--color-hero-backdrop)_25%,rgba(7,3,2,.55)_29%,transparent_35%),linear-gradient(180deg,rgba(7,3,2,.5)_0%,transparent_18%)]" />
        </div>

        {/* The extra bottom padding on the narrowest phones keeps the actions clear of the floating WhatsApp button. */}
        <Container className="flex items-end pt-32 pb-10 max-[359px]:pb-24 sm:pb-14 lg:items-center lg:py-28">
          <div className="max-w-[620px]">
            <h1 id="home-heading" className="text-[clamp(2.25rem,10.5vw,3.75rem)] leading-[1.03] tracking-[-0.03em] lg:text-[clamp(2.9rem,4.3vw,4.25rem)]">
              <span className="block max-w-[9em]">{lead}</span>{" "}
              <em className="-ml-[0.1em] block font-normal text-(--color-on-dark-accent)">{emphasis}</em>
            </h1>
            <p className="mt-5 max-w-[44ch] text-[15px] leading-relaxed text-white/90 sm:mt-6 sm:text-lg lg:max-w-[38ch]">
              From quiet rituals to grand celebrations, we frame the moments you will want to return to.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-9">
              <Button href="/contact#enquiry">Book your date</Button>
              <a href="#selected-work" className="inline-flex min-h-11 items-center gap-2 px-3 text-sm font-medium text-white underline-offset-4 hover:underline">
                See our work <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      <nav aria-label="Our services" className="bg-(--color-accent)">
        <Container>
          <ul className="flex flex-wrap items-center justify-center gap-x-5 py-1.5 text-sm font-normal text-white sm:gap-x-8 lg:justify-start lg:gap-x-12">
            {services.map((service) => (
              <li key={service.id}>
                <Link href={`/services/${service.id}`} className="inline-flex min-h-11 items-center underline-offset-4 hover:underline focus-visible:outline-white">
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </nav>
    </div>
  );
}
