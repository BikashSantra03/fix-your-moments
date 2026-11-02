import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactDetails } from "@/components/contact/ContactDetails";
import { ContactMap } from "@/components/contact/ContactMap";
import { services } from "@/data/services";
import { siteSettings } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact us",
  description: "Tell Fix Your Moments about your celebration or next event. Call, WhatsApp, visit our studio or send a photography enquiry.",
};

export default async function ContactPage({ searchParams }: PageProps<"/contact">) {
  const { service } = await searchParams;
  const initialPurpose = services.find((s) => s.id === service)?.name;
  return (
    <main className="flex-1">
      <section aria-labelledby="contact-heading" className="relative isolate -mt-[78px] flex min-h-[380px] items-center overflow-hidden bg-(--color-text) pt-28 pb-8 text-white sm:min-h-[440px] sm:py-28 lg:min-h-[480px] lg:pt-28 lg:pb-12">
        <Image
          src="/images/contact/bride-red-veil-hero.webp"
          alt="Bride in a red veil, photographed in soft dramatic light"
          fill
          unoptimized
          priority
          sizes="100vw"
          className="-z-20 object-cover object-[75%_center] sm:object-[80%_center] lg:object-center"
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(15,8,10,0.65),rgba(15,8,10,0.45)_40%,rgba(15,8,10,0.7))] lg:bg-[linear-gradient(180deg,rgba(15,8,10,0.35),transparent_45%),linear-gradient(90deg,rgba(15,8,10,0.25),rgba(15,8,10,0.15)_45%,transparent_80%)]" />
        <Container>
          <div className="max-w-xl lg:mr-auto lg:w-[52%]">
            <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.2em] text-white/90 sm:text-xs">A good story starts with hello</p>
            <h1 id="contact-heading" className="max-w-[17ch] text-[clamp(2rem,8vw,2.25rem)] sm:text-[clamp(2.25rem,4.5vw,4rem)] leading-[1.08]">Let&apos;s make something <em className="text-(--color-surface)">memorable.</em></h1>
            <p className="mt-4 max-w-[42ch] text-sm leading-relaxed text-white/90 sm:mt-5 sm:text-base">A celebration on the calendar, a story in mind, or just a few questions. We&apos;d love to hear from you.</p>
            <a href="#enquiry" className="mt-3 inline-flex min-h-11 items-center gap-3 text-sm font-medium text-white underline-offset-4 hover:underline sm:mt-4">Tell us about your plans <span aria-hidden="true">↓</span></a>
          </div>
        </Container>
      </section>
      <section aria-label="Ways to get in touch" className="py-7 sm:py-14 lg:py-16">
        <Container><ContactDetails /></Container>
      </section>
      <section id="enquiry" aria-labelledby="enquiry-heading" className="scroll-mt-28 border-y border-(--color-border-dark) bg-(--color-surface) py-9 sm:py-20">
        <Container>
          <div className="grid items-start gap-6 sm:gap-9 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-(--color-accent-text)">Your plans, our next conversation</p>
              <h2 id="enquiry-heading" className="max-w-[18ch] text-3xl sm:max-w-[12ch] sm:text-5xl">Tell us what you have in mind.</h2>
              <p className="mt-4 sm:mt-6 max-w-[35ch] text-base leading-relaxed text-(--color-muted)">We&apos;d love to hear about your plans.</p>
              {siteSettings.email && <p className="mt-5 sm:mt-8 text-sm text-(--color-muted)">Prefer email?<a href={`mailto:${siteSettings.email}`} className="mt-2 block break-words font-medium text-(--color-accent-text) underline-offset-4 hover:underline">{siteSettings.email}</a></p>}
              <div className="relative mt-10 hidden aspect-[4/3] w-full max-w-[25rem] overflow-hidden lg:block">
                <Image src="/images/services/wedding/couple-under-red-drapes.webp" alt="A couple together beneath red drapes" fill sizes="(min-width: 1024px) 400px, 0px" className="object-cover object-[center_35%]" />
              </div>
            </div>
            <div className="min-w-0 border border-(--color-border-dark) bg-(--color-bg) p-5 shadow-sm shadow-(--color-accent)/5 sm:p-7 lg:p-8">
              <div className="mb-5 border-b border-(--color-border-dark) pb-4 sm:mb-6">
                <h3 className="text-2xl sm:text-3xl">Send an enquiry</h3>
                <p className="mt-2 text-sm leading-relaxed text-(--color-muted)">Share what you know so far; we can discuss the rest together.</p>
              </div>
              <ContactForm key={initialPurpose ?? "general"} initialPurpose={initialPurpose} />
            </div>
          </div>
        </Container>
      </section>
      <Container><ContactMap /></Container>
    </main>
  );
}
