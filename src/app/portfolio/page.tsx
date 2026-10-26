import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "A selection of weddings, rituals, events and portraits by Fix Your Moments.",
};

export default function PortfolioPage() {
  return (
    <main className="flex-1">
      <Container>
        <section className="py-24">
          <SectionTitle
            eyebrow="Portfolio"
            title="A selection of our work"
            description="Gallery, filters and lightbox are coming in Phase 4."
          />
        </section>
      </Container>
    </main>
  );
}
