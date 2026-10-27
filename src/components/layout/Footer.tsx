import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { navLinks } from "@/config/navigation";
import { siteSettings } from "@/config/site";
import { Logo } from "@/components/layout/Logo";
import { SocialLinks } from "@/components/layout/SocialLinks";
import { MailIcon, PhoneIcon } from "@/components/ui/icons";
import { telHref } from "@/lib/contact";

const linkClasses =
  "inline-flex items-center gap-2.5 text-(--color-muted) transition-[color,transform] duration-200 hover:translate-x-1 hover:text-(--color-accent-text)";

const footerIconClasses = "h-4 w-4 shrink-0 text-(--color-accent-text)";

function FooterHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-5 font-display text-[1.375rem] text-(--color-text)">
      {children}
      <span aria-hidden="true" className="mt-3 block h-0.5 w-8 rounded-full bg-(--color-accent)" />
    </h2>
  );
}

export function Footer() {
  const { phone, email } = siteSettings;
  const hasReachUs = phone || email;

  return (
    <footer className="border-t border-(--color-border-dark) bg-(--color-surface) pt-14 pb-6 sm:pt-16">
      <Container>
        <div className="grid gap-10 sm:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-[34ch] text-base font-normal leading-relaxed text-(--color-muted)">
              Wedding, ritual, event and portrait photography by {siteSettings.founderName}.
            </p>
            <SocialLinks className="mt-7" />
          </div>

          <div>
            <FooterHeading>Explore</FooterHeading>
            <ul className="flex flex-col gap-3 text-base font-normal">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClasses}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {hasReachUs && (
            <div>
              <FooterHeading>Reach us</FooterHeading>
              <ul className="flex flex-col gap-3 text-base font-normal">
                {phone && (
                  <li>
                    <a href={telHref(phone)} className={linkClasses}>
                      <PhoneIcon className={footerIconClasses} />
                      {phone}
                    </a>
                  </li>
                )}
                {email && (
                  <li>
                    <a href={`mailto:${email}`} className={`${linkClasses} break-all`}>
                      <MailIcon className={footerIconClasses} />
                      {email}
                    </a>
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>

        <div aria-hidden="true" className="footer-watermark-wrap mt-10 select-none overflow-hidden">
          <div className="footer-watermark whitespace-nowrap">{siteSettings.brandName}</div>
        </div>

        <div className="mt-4 flex flex-wrap justify-between gap-4 border-t border-(--color-border-dark) pt-5 text-[0.8125rem] text-(--color-muted)">
          <span>
            &copy; {new Date().getFullYear()} {siteSettings.brandName}. All rights reserved.
          </span>
          <span>Photographs are the property of {siteSettings.brandName}.</span>
        </div>
      </Container>
    </footer>
  );
}
