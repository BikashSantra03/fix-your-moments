import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "inverse" | "outline-light";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-(--color-cta) text-(--color-cta-contrast) hover:brightness-110",
  secondary:
    "border border-(--color-border-dark) text-(--color-text) hover:border-(--color-accent) hover:text-(--color-accent-text)",
  inverse:
    "bg-(--color-white) text-(--color-accent-text) hover:bg-(--color-surface)",
  "outline-light":
    "border border-white/70 text-white hover:bg-white/10",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 min-h-11 text-sm font-medium transition-colors duration-200";

interface BaseProps {
  variant?: Variant;
  className?: string;
}

interface ButtonAsButton
  extends BaseProps,
    ButtonHTMLAttributes<HTMLButtonElement> {
  href?: undefined;
}

interface ButtonAsLink
  extends BaseProps,
    AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if ("href" in props && props.href) {
    const { href, ...anchorProps } = props;
    const isExternal = /^https?:\/\//.test(href);
    return (
      <Link
        href={href}
        className={classes}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...anchorProps}
      >
        {props.children}
      </Link>
    );
  }

  const { ...buttonProps } = props as ButtonAsButton;
  return (
    <button className={classes} {...buttonProps}>
      {buttonProps.children}
    </button>
  );
}
