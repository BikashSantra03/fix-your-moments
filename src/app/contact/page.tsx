import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactDetails } from "@/components/contact/ContactDetails";
import { ContactMap } from "@/components/contact/ContactMap";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Contact us",
  description:
    "Tell Fix Your Moments about your wedding, ritual, event or portrait shoot. Visit our studio in Karimpur, Nadia or call and WhatsApp us.",
};

// Accepts ?service=<id> so service pages can pre-select the shoot type.
export default async function ContactPage({ searchParams }: PageProps<"/contact">) {
  const { service } = await searchParams;
  const initialPurpose = services.find((s) => s.id === service)?.name;

  return (
    <main className="flex-1">
      <section className="relative isolate overflow-hidden pt-20 pb-36 sm:pt-28 sm:pb-44">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_60%_at_80%_0%,color-mix(in_srgb,var(--color-accent)_22%,transparent),transparent_70%)]"
        />
        <div
          aria-hidden="true"
          className="absolute -right-40 -top-40 -z-10 h-[34rem] w-[34rem] rounded-full border border-(--color-accent)/20 sm:-right-24"
        >
          <div className="absolute inset-16 rounded-full border border-(--color-accent)/15" />
          <div className="absolute inset-32 rounded-full border border-(--color-accent)/10" />
        </div>
        <Container>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-(--color-border-dark) bg-(--color-surface)/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-(--color-accent-text) backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-(--color-accent)" aria-hidden="true" />
            Contact us
          </p>
          <h1 className="max-w-[14ch] text-[clamp(3rem,8vw,6.5rem)] text-(--color-text)">
            Let&apos;s frame your <em className="text-(--color-accent-text)">story</em>
          </h1>
          <p className="mt-6 max-w-[52ch] text-base text-(--color-muted) sm:text-lg">
            Tell us about your day: where, when and what matters most. We&apos;ll come back with availability and a
            plan built around you.
          </p>
        </Container>
      </section>

      <section className="relative -mt-24 pb-20 sm:-mt-28 sm:pb-28">
        <Container>
          <div className="grid items-start gap-6 lg:grid-cols-[1.25fr_0.75fr] lg:gap-8">
            <div className="rounded-3xl border border-(--color-border-dark) bg-(--color-surface) p-6 shadow-xl shadow-(--color-accent)/10 sm:p-10">
              <h2 className="mb-8 text-3xl text-(--color-text) sm:text-4xl">Send us an enquiry</h2>
              <ContactForm initialPurpose={initialPurpose} />
            </div>
            <aside aria-labelledby="contact-details-heading" className="lg:sticky lg:top-28">
              <h2 id="contact-details-heading" className="sr-only">
                Contact details
              </h2>
              <ContactDetails />
            </aside>
          </div>

          <ContactMap />
        </Container>
      </section>
    </main>
  );
}
