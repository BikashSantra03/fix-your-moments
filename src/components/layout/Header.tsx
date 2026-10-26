import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { NavLinks } from "@/components/layout/NavLinks";
import { Logo } from "@/components/layout/Logo";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-(--color-bg)/90 backdrop-blur-sm border-b border-(--color-border-dark)">
      <Container>
        <div className="flex items-center justify-between h-[78px]">
          <Logo />

          <NavLinks />

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <div className="hidden md:block">
              <Button href="/contact">Book a shoot</Button>
            </div>
            <MobileMenu />
          </div>
        </div>
      </Container>
    </header>
  );
}
