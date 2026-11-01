"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { NavLinks } from "@/components/layout/NavLinks";
import { Logo } from "@/components/layout/Logo";

export function Header() {
  const pathname = usePathname();
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const update = () => setAtTop(window.scrollY < 32);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [pathname]);

  const overlayPhotoHero = ["/services/wedding", "/services/prewedding", "/services/engagement", "/services/bridhi"].includes(pathname) && atTop;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 border-b transition-[background-color,border-color] duration-300 ${overlayPhotoHero ? "border-transparent bg-transparent" : "border-(--color-border-dark) bg-(--color-bg)/90 backdrop-blur-sm"}`}
      />
      <Container className="relative">
        <div className="flex items-center justify-between h-[78px]">
          <Logo overlay={overlayPhotoHero} />

          <NavLinks overlay={overlayPhotoHero} />

          <div className="flex items-center gap-2">
            <div className="hidden md:block">
              <Button href="/contact">Book a shoot</Button>
            </div>
            <MobileMenu overlay={overlayPhotoHero} />
          </div>
        </div>
      </Container>
    </header>
  );
}
