import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/data/process";

// A timeline: each step draws the line to the next one, so it starts and ends at a dot. It runs down the left
// on smaller screens and across on desktop. The offsets match the 2.5rem gap between steps.
const timelineLink =
  "before:absolute before:top-5 before:-bottom-9 before:left-[6px] before:w-px before:bg-(--color-accent)/30 last:before:hidden lg:before:top-[7px] lg:before:-right-9 lg:before:bottom-auto lg:before:left-5 lg:before:h-px lg:before:w-auto";

export function AboutProcess() {
  return (
    <section id="how-we-work" aria-labelledby="about-process-heading" className="scroll-mt-20 py-16 sm:py-24 lg:py-28">
      <Container>
        <div className="mb-10 sm:mb-14">
          <SectionHeading id="about-process-heading" eyebrow="How we work">
            From first hello to <em>final frame.</em>
          </SectionHeading>
        </div>
        <ol className="grid gap-10 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <li key={step.title} className={`reveal relative pl-10 lg:pt-12 lg:pl-0 ${timelineLink}`}>
              <span aria-hidden="true" className="absolute top-1 left-0 h-3.5 w-3.5 rounded-full border-2 border-(--color-accent) bg-(--color-bg) lg:top-0" />
              <span aria-hidden="true" className="font-display text-4xl text-(--color-accent-text)">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-1 text-[1.75rem] leading-tight">{step.title}</h3>
              <p className="mt-3 max-w-[46ch] text-base leading-relaxed text-(--color-muted)">{step.detail}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
