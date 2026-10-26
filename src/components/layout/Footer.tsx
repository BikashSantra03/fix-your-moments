import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { navLinks } from "@/config/navigation";
import { siteSettings } from "@/config/site";
import { Logo } from "@/components/layout/Logo";

export function Footer() {
  const { phone, email, social } = siteSettings;
  const hasSocial = Object.values(social).some(Boolean);
  const hasReachUs = phone || email || hasSocial;

  return (
    <footer className="border-t border-(--color-border-dark) bg-(--color-surface) pt-16 pb-8">
      <Container>
        <div className="grid gap-10 sm:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-[34ch] text-(--color-muted) text-sm">
              Wedding, ritual, event and portrait photography by {siteSettings.founderName}.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg text-(--color-text) mb-3">Explore</h4>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-(--color-muted) text-sm hover:text-(--color-accent)"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {hasReachUs && (
            <div>
              <h4 className="font-display text-lg text-(--color-text) mb-3">Reach us</h4>
              <ul className="flex flex-col gap-2 text-sm">
                {phone && (
                  <li>
                    <a
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="text-(--color-muted) hover:text-(--color-accent)"
                    >
                      {phone}
                    </a>
                  </li>
                )}
                {email && (
                  <li>
                    <a
                      href={`mailto:${email}`}
                      className="text-(--color-muted) hover:text-(--color-accent)"
                    >
                      {email}
                    </a>
                  </li>
                )}
                {social.facebook && (
                  <li>
                    <a
                      href={social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-(--color-muted) hover:text-(--color-accent)"
                    >
                      Facebook
                    </a>
                  </li>
                )}
                {social.instagram && (
                  <li>
                    <a
                      href={social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-(--color-muted) hover:text-(--color-accent)"
                    >
                      Instagram
                    </a>
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>

        <div className="mt-14 flex flex-wrap justify-between gap-4 border-t border-(--color-border-dark) pt-6 text-xs text-(--color-muted)">
          <span>
            &copy; {new Date().getFullYear()} {siteSettings.brandName}. All rights reserved.
          </span>
          <span>Photographs are the property of {siteSettings.brandName}.</span>
        </div>
      </Container>
    </footer>
  );
}
