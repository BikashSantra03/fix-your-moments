"use client";

import { useRef, useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import { services } from "@/data/services";
import { submitEnquiry } from "@/lib/enquiry";
import { todayISO, validateEnquiry, type EnquiryErrors } from "@/lib/validation";
import type { EnquiryInput } from "@/types/content";

const purposeOptions = [...services.map((service) => service.name), "Something else"];

// Field order drives which invalid field receives focus first.
const fieldOrder: (keyof EnquiryInput)[] = ["name", "mobile", "location", "purposes", "date", "message"];

const emptyValues: EnquiryInput = { name: "", mobile: "", location: "", purposes: [], date: "", message: "" };

const controlClasses =
  "w-full rounded-xl border border-(--color-border-dark) bg-(--color-bg) px-4 py-3.5 text-base text-(--color-text) placeholder:text-(--color-muted)/60 transition-[border-color,box-shadow] duration-200 focus:border-(--color-accent) focus:outline-none focus:ring-4 focus:ring-(--color-accent)/15 aria-invalid:border-(--color-error) aria-invalid:focus:ring-(--color-error)/15";

interface FieldProps {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  optional?: boolean;
  className?: string;
  children: ReactNode;
}

function Field({ id, label, error, hint, optional, className = "", children }: FieldProps) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label htmlFor={id} className="text-sm font-medium text-(--color-text)">
        {label}
        {optional && <span className="ml-1.5 font-normal text-(--color-muted)">(optional)</span>}
      </label>
      {children}
      <ErrorText id={`${id}-error`} error={error} hint={hint} hintId={`${id}-hint`} />
    </div>
  );
}

function ErrorText({ id, error, hint, hintId }: { id: string; error?: string; hint?: string; hintId?: string }) {
  if (hint && !error)
    return (
      <p id={hintId} className="text-xs text-(--color-muted)">
        {hint}
      </p>
    );
  return (
    <p id={id} className="min-h-4 text-xs text-(--color-error)" aria-live="polite">
      {error}
    </p>
  );
}

interface ContactFormProps {
  initialPurpose?: string;
}

export function ContactForm({ initialPurpose = "" }: ContactFormProps) {
  const [values, setValues] = useState<EnquiryInput>({
    ...emptyValues,
    purposes: purposeOptions.includes(initialPurpose) ? [initialPurpose] : [],
  });
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "failed">("idle");
  const [submittedName, setSubmittedName] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  function update(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const name = event.target.name as keyof EnquiryInput;
    setValues((prev) => ({ ...prev, [name]: event.target.value }));
    // Clear a field's error as soon as the user edits it; full re-check happens on submit.
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  function togglePurpose(event: ChangeEvent<HTMLInputElement>) {
    const { value, checked } = event.target;
    setValues((prev) => ({
      ...prev,
      purposes: checked ? [...prev.purposes, value] : prev.purposes.filter((p) => p !== value),
    }));
    if (errors.purposes) setErrors((prev) => ({ ...prev, purposes: undefined }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    const nextErrors = validateEnquiry(values);
    setErrors(nextErrors);
    const firstInvalid = fieldOrder.find((field) => nextErrors[field]);
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    setStatus("submitting");
    try {
      await submitEnquiry(values);
    } catch {
      setStatus("failed");
      return;
    }
    setSubmittedName(values.name.trim().split(/\s+/)[0]);
    setValues(emptyValues);
    setStatus("done");
  }

  function describedBy(field: keyof EnquiryInput, hasHint = false) {
    if (errors[field]) return `f-${field}-error`;
    return hasHint ? `f-${field}-hint` : undefined;
  }

  if (status === "done") {
    return (
      <div role="status" className="flex flex-col items-center py-12 text-center">
        <span className="mb-6 grid h-16 w-16 place-items-center rounded-full bg-(--color-accent)/15 text-(--color-accent)">
          <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <path d="M5 12.5l4.5 4.5L19 7.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h3 className="text-3xl sm:text-4xl text-(--color-text)">Thank you, {submittedName}!</h3>
        <p className="mt-3 max-w-[38ch] text-(--color-muted)">
          We&apos;ve received your enquiry and will get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 text-sm font-medium text-(--color-accent) underline-offset-4 hover:underline"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate aria-busy={submitting} className="grid gap-x-5 gap-y-4 sm:grid-cols-2">
      <Field id="f-name" label="Your name" error={errors.name}>
        <input
          id="f-name"
          name="name"
          autoComplete="name"
          placeholder="Full name"
          required
          value={values.name}
          onChange={update}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={describedBy("name")}
          className={controlClasses}
        />
      </Field>

      <Field id="f-mobile" label="Mobile number" error={errors.mobile}>
        <input
          id="f-mobile"
          name="mobile"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="10-digit number"
          required
          value={values.mobile}
          onChange={update}
          aria-invalid={Boolean(errors.mobile)}
          aria-describedby={describedBy("mobile")}
          className={controlClasses}
        />
      </Field>

      <fieldset className="sm:col-span-2 flex flex-col gap-2.5" aria-describedby={describedBy("purposes")}>
        <legend className="mb-2.5 text-sm font-medium text-(--color-text)">
          What would you like photographed?
          <span className="ml-1.5 font-normal text-(--color-muted)">Choose all that apply</span>
        </legend>
        <div className="flex flex-wrap gap-2">
          {purposeOptions.map((option) => (
            <label
              key={option}
              className="group inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-(--color-border-dark) px-4 py-2 text-sm text-(--color-muted) transition-colors duration-200 hover:border-(--color-accent) hover:text-(--color-text) has-checked:border-(--color-accent) has-checked:bg-(--color-accent) has-checked:font-medium has-checked:text-(--color-accent-contrast) has-focus-visible:ring-4 has-focus-visible:ring-(--color-accent)/25"
            >
              <input
                type="checkbox"
                name="purposes"
                value={option}
                checked={values.purposes.includes(option)}
                onChange={togglePurpose}
                className="sr-only"
              />
              <svg viewBox="0 0 24 24" className="hidden h-3.5 w-3.5 group-has-checked:block" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
                <path d="M5 12.5l4.5 4.5L19 7.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {option}
            </label>
          ))}
        </div>
        <ErrorText id="f-purposes-error" error={errors.purposes} />
      </fieldset>

      <Field id="f-location" label="Location of shoot" error={errors.location}>
        <input
          id="f-location"
          name="location"
          placeholder="City or venue"
          required
          value={values.location}
          onChange={update}
          aria-invalid={Boolean(errors.location)}
          aria-describedby={describedBy("location")}
          className={controlClasses}
        />
      </Field>

      <Field id="f-date" label="Preferred date" optional hint="Leave blank if it's not fixed yet." error={errors.date}>
        <input
          id="f-date"
          name="date"
          type="date"
          // min depends on the viewer's local date, which can differ from the server's.
          min={todayISO()}
          suppressHydrationWarning
          value={values.date}
          onChange={update}
          aria-invalid={Boolean(errors.date)}
          aria-describedby={describedBy("date", true)}
          className={`${controlClasses}`}
        />
      </Field>

      <Field id="f-message" label="Tell us about your day" optional error={errors.message} className="sm:col-span-2">
        <textarea
          id="f-message"
          name="message"
          rows={4}
          maxLength={1000}
          placeholder="Venue, number of guests, rituals you'd like covered…"
          value={values.message}
          onChange={update}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={describedBy("message")}
          className={`${controlClasses} min-h-28 resize-y`}
        />
      </Field>

      <div className="sm:col-span-2 mt-1 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-[40ch] text-xs text-(--color-muted)">
          {status === "failed" ? (
            <span role="alert" className="text-(--color-error)">
              Something went wrong sending your enquiry. Please try again, or call us directly.
            </span>
          ) : (
            "We use these details only to reply to your enquiry."
          )}
        </p>
        <button
          type="submit"
          disabled={submitting}
          className="group inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-full bg-(--color-cta) px-8 py-3.5 text-sm font-medium text-(--color-cta-contrast) shadow-lg shadow-(--color-accent)/20 transition-[filter,transform] duration-200 hover:-translate-y-0.5 hover:brightness-110 disabled:translate-y-0 disabled:cursor-wait disabled:opacity-80 sm:w-auto"
        >
          {submitting ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" aria-hidden="true" />
              Sending…
            </>
          ) : (
            <>
              Send enquiry
              <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
