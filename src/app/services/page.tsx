import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Wedding, pre-wedding, haldi, rice ceremony, corporate event and editorial photography services from Fix Your Moments.",
};

export default function ServicesPage() {
  return (
    <main className="flex-1">
      <Container>
        <section className="py-24">
          <SectionTitle
            eyebrow="Services"
            title="Six kinds of days, one way of working"
            description="Detailed service sections are coming in Phase 5."
          />
        </section>
      </Container>
    </main>
  );
}
