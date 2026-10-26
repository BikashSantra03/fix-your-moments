import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

export const metadata: Metadata = {
  title: "About us",
  description: "The story behind Fix Your Moments.",
};

export default function AboutPage() {
  return (
    <main className="flex-1">
      <Container>
        <section className="py-24">
          <SectionTitle
            eyebrow="About us"
            title="Our story"
            description="Founder story, approach and process are coming in Phase 5."
          />
        </section>
      </Container>
    </main>
  );
}
