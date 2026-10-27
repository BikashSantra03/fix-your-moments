import type { EnquiryInput } from "@/types/content";

export type EnquiryErrors = Partial<Record<keyof EnquiryInput, string>>;

// Indian mobile: optional +91/91 prefix, then 10 digits starting 6–9.
const MOBILE_PATTERN = /^(\+?91)?[6-9]\d{9}$/;

export function normalizeMobile(value: string): string {
  return value.replace(/[\s()-]/g, "");
}

// Local calendar date as YYYY-MM-DD, matching the value format of <input type="date">.
export function todayISO(now: Date = new Date()): string {
  const offset = now.getTimezoneOffset() * 60_000;
  return new Date(now.getTime() - offset).toISOString().slice(0, 10);
}

export function validateEnquiry(
  input: EnquiryInput,
  today: string = todayISO()
): EnquiryErrors {
  const errors: EnquiryErrors = {};

  if (input.name.trim().length < 2) errors.name = "Enter your name.";
  if (!MOBILE_PATTERN.test(normalizeMobile(input.mobile)))
    errors.mobile = "Enter a valid 10-digit mobile number.";
  if (input.location.trim().length < 2)
    errors.location = "Enter the city or venue.";
  if (input.purposes.length === 0) errors.purposes = "Choose at least one type of shoot.";
  if (input.date && input.date < today)
    errors.date = "Choose today or a future date.";
  if (input.message && input.message.length > 1000)
    errors.message = "Keep your message under 1000 characters.";

  return errors;
}
