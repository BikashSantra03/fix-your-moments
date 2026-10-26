import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { siteSettings } from "@/config/site";

export default function Home() {
  return (
    <main className="flex-1 flex items-center">
      <Container>
        <section className="py-24">
          <SectionTitle
            eyebrow={siteSettings.founderName}
            title={siteSettings.tagline}
            description="Phase 1 scaffold: design tokens, typography and base components are wired up. Homepage content lands in Phase 3."
          />
          <div className="flex flex-wrap gap-4 mt-10">
            <Button href="#">Book your date</Button>
            <Button href="#" variant="secondary">
              See our work
            </Button>
          </div>
        </section>
      </Container>
    </main>
  );
}
