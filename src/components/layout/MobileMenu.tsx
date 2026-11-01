"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/config/navigation";
import { services } from "@/data/services";

export function MobileMenu({ overlay = false }: { overlay?: boolean }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuId = useId();

  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        className="relative h-11 w-11 cursor-pointer flex items-center justify-center"
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <span
          className={`absolute left-2.5 right-2.5 h-px transition-transform duration-300 ${overlay ? "bg-white" : "bg-(--color-text)"} ${
            open ? "translate-y-0 rotate-45" : "-translate-y-1.5"
          }`}
        />
        <span
          className={`absolute left-2.5 right-2.5 h-px transition-opacity duration-300 ${overlay ? "bg-white" : "bg-(--color-text)"} ${
            open ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`absolute left-2.5 right-2.5 h-px transition-transform duration-300 ${overlay ? "bg-white" : "bg-(--color-text)"} ${
            open ? "translate-y-0 -rotate-45" : "translate-y-1.5"
          }`}
        />
      </button>

      <nav
        id={menuId}
        aria-label="Mobile"
        aria-hidden={!open}
        className={`fixed inset-x-0 top-[78px] bottom-0 z-50 bg-(--color-bg) border-t border-(--color-border-dark) overflow-y-auto transition-transform duration-300 ${
          open ? "translate-y-0" : "-translate-y-[120%]"
        }`}
      >
        <ul className="flex flex-col px-(--page-gutter) py-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href === "/services" && pathname.startsWith("/services/"));
            return (
              <li key={link.href} className="border-b border-(--color-border-dark)">
                <Link
                  href={link.href}
                  tabIndex={open ? 0 : -1}
                  aria-current={isActive ? "page" : undefined}
                  className={`block py-4 text-2xl font-display ${
                    isActive ? "text-(--color-accent-text)" : "text-(--color-text)"
                  }`}
                >
                  {link.label}
                </Link>
                {link.href === "/services" && (
                  <ul aria-label="Service pages" className="grid grid-cols-2 gap-x-3 gap-y-1 pb-4 sm:grid-cols-3">
                    {services.map((service) => (
                      <li key={service.id}>
                        <Link href={`/services/${service.id}`} tabIndex={open ? 0 : -1} aria-current={pathname === `/services/${service.id}` ? "page" : undefined} className="block py-2 text-sm font-medium text-(--color-muted) hover:text-(--color-accent-text) aria-[current=page]:text-(--color-accent-text)">
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
