import type { ReactNode } from "react";

interface SectionHeadingProps {
  id: string;
  eyebrow: string;
  tone?: "light" | "dark";
  className?: string;
  children: ReactNode;
}

const accent = {
  light: "text-(--color-accent-text)",
  dark: "text-(--color-on-dark-accent)",
};

const emphasisAccent = {
  light: "[&_em]:text-(--color-accent-text)",
  dark: "[&_em]:text-(--color-on-dark-accent)",
};

export function SectionHeading({ id, eyebrow, tone = "light", className = "", children }: SectionHeadingProps) {
  return (
    <div className="reveal">
      <p className={`mb-4 text-sm font-medium uppercase tracking-[0.16em] sm:mb-5 ${accent[tone]}`}>{eyebrow}</p>
      <h2 id={id} className={`text-[clamp(2.4rem,4.2vw,4rem)] leading-[1.06] ${emphasisAccent[tone]} ${className}`}>
        {children}
      </h2>
    </div>
  );
}
