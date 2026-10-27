"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/config/navigation";

export function NavLinks() {
  const pathname = usePathname();

  return (
    <nav aria-label="Main" className="hidden lg:block">
      <ul className="flex gap-7 text-base font-normal xl:gap-9">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`group relative py-1.5 tracking-[0.01em] transition-colors duration-200 ${
                  isActive
                    ? "text-(--color-text)"
                    : "text-(--color-muted) hover:text-(--color-text)"
                }`}
              >
                {link.label}
                {/* Gold underline: full width when active, grows from the centre on hover. */}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 -bottom-0.5 h-0.5 origin-center rounded-full bg-(--color-accent) transition-transform duration-300 ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
