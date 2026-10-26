import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

export const metadata: Metadata = {
  title: "Contact us",
  description: "Get in touch with Fix Your Moments about your shoot.",
};

export default function ContactPage() {
  return (
    <main className="flex-1">
      <Container>
        <section className="py-24">
          <SectionTitle
            eyebrow="Contact us"
            title="Tell us about your event"
            description="The enquiry form and WhatsApp handoff are coming in Phase 6."
          />
        </section>
      </Container>
    </main>
  );
}
