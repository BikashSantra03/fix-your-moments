import { ReviewSlider } from "@/components/sections/ReviewSlider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { clientReviews } from "@/data/reviews";

export function ClientReviews() {
  return (
    <section aria-labelledby="reviews-heading" className="bg-(--color-surface) py-16 sm:py-24 lg:py-28">
      <Container>
        <div className="mb-10 text-center sm:mb-14">
          <SectionHeading id="reviews-heading" eyebrow="Client reviews">
            In their <em>own words.</em>
          </SectionHeading>
        </div>
        <div className="reveal">
          <ReviewSlider reviews={clientReviews} />
        </div>
      </Container>
    </section>
  );
}
