"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/config/navigation";
import { services } from "@/data/services";

export function NavLinks({ overlay = false }: { overlay?: boolean }) {
  const pathname = usePathname();
  const [servicesClosed, setServicesClosed] = useState(false);

  function closeServices(event: React.MouseEvent<HTMLAnchorElement>) {
    setServicesClosed(true);
    event.currentTarget.blur();
  }

  return (
    <nav aria-label="Main" className="hidden lg:block">
      <ul className="flex gap-7 text-base font-normal xl:gap-9">
        {navLinks.map((link) => {
          const isActive = pathname === link.href || (link.href === "/services" && pathname.startsWith("/services/"));
          return (
            <li
              key={link.href}
              className={link.href === "/services" ? "group relative" : undefined}
              onMouseEnter={link.href === "/services" ? () => setServicesClosed(false) : undefined}
              onFocusCapture={link.href === "/services" ? () => setServicesClosed(false) : undefined}
            >
              <Link
                href={link.href}
                onClick={link.href === "/services" ? closeServices : undefined}
                aria-current={isActive ? "page" : undefined}
                className={`group relative py-1.5 tracking-[0.01em] transition-colors duration-200 ${
                  overlay
                    ? "text-white drop-shadow-md hover:text-white"
                    : isActive
                    ? "text-(--color-text)"
                    : "text-(--color-muted) hover:text-(--color-text)"
                }`}
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 -bottom-0.5 h-0.5 origin-center rounded-full bg-(--color-accent) transition-transform duration-300 ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100 group-focus-within:scale-x-100"
                  }`}
                />
              </Link>
              {link.href === "/services" && (
                <div className={`absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 pt-5 transition-opacity duration-200 ${servicesClosed ? "invisible opacity-0" : "invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100"}`}>
                  <ul aria-label="Service pages" className="rounded-md border border-(--color-border-dark) bg-(--color-bg) p-2 shadow-xl shadow-(--color-accent)/10">
                    {services.map((service) => (
                      <li key={service.id}>
                        <Link href={`/services/${service.id}`} onClick={closeServices} aria-current={pathname === `/services/${service.id}` ? "page" : undefined} className="block rounded-sm px-3 py-2.5 text-sm text-(--color-text) hover:bg-(--color-surface) hover:text-(--color-accent-text) focus-visible:bg-(--color-surface)">
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
