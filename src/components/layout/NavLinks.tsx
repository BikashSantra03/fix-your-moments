"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/config/navigation";

export function NavLinks() {
  const pathname = usePathname();

  return (
    <nav aria-label="Main" className="hidden md:block">
      <ul className="flex gap-8 text-sm">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`relative py-1.5 transition-colors duration-200 ${
                  isActive
                    ? "text-(--color-text)"
                    : "text-(--color-muted) hover:text-(--color-text)"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute left-0 right-0 -bottom-0.5 h-px bg-(--color-accent)" />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
