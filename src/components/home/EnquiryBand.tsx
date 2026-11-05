import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { whatsappChatLink } from "@/lib/contact";

export function EnquiryBand() {
  return (
    <section aria-labelledby="enquiry-band-heading" className="bg-(--color-accent) py-16 text-white sm:py-20 lg:py-24">
      <Container className="reveal text-center">
        <h2 id="enquiry-band-heading" className="text-[clamp(2.5rem,5vw,4.75rem)] leading-[1.05]">
          Have a date <em className="whitespace-nowrap">in mind?</em>
        </h2>
        <p className="mx-auto mt-5 max-w-[44ch] text-balance text-base leading-relaxed text-white/95 sm:text-lg">
          Tell us the date and the place. We&apos;ll take the conversation from there.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/contact#enquiry" variant="inverse" className="focus-visible:outline-white">Book your date</Button>
          {whatsappChatLink && (
            <Button href={whatsappChatLink} variant="outline-light" className="focus-visible:outline-white">Chat on WhatsApp</Button>
          )}
        </div>
      </Container>
    </section>
  );
}
