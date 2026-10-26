export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Services", href: "/services" },
  { label: "About us", href: "/about" },
  { label: "Contact us", href: "/contact" },
];
