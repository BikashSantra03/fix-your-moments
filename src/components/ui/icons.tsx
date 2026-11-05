import type { ReactNode } from "react";

interface IconProps {
  className?: string;
}

function OutlineIcon({ className = "h-5 w-5", children }: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <OutlineIcon {...props}>
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
    </OutlineIcon>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <OutlineIcon {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </OutlineIcon>
  );
}

export function ChevronLeftIcon(props: IconProps) {
  return (
    <OutlineIcon {...props}>
      <path d="M15 5l-7 7 7 7" />
    </OutlineIcon>
  );
}

export function ChevronRightIcon(props: IconProps) {
  return (
    <OutlineIcon {...props}>
      <path d="M9 5l7 7-7 7" />
    </OutlineIcon>
  );
}

export function QuoteIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={`fill-current ${className}`} aria-hidden="true">
      <path d="M10 6C6.7 7.2 4 10 4 14v4h6v-6H7.2c.3-1.9 1.5-3.2 3.3-3.9zM20 6c-3.3 1.2-6 4-6 8v4h6v-6h-2.8c.3-1.9 1.5-3.2 3.3-3.9z" />
    </svg>
  );
}
