interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  className = "",
}: SectionTitleProps) {
  return (
    <div className={className}>
      {eyebrow && (
        <p className="text-(--color-accent) text-sm tracking-wide uppercase mb-3 font-medium">
          {eyebrow}
        </p>
      )}
      <h2 className="text-[clamp(2.25rem,4.2vw,4.5rem)] text-(--color-text)">
        {title}
      </h2>
      {description && (
        <p className="text-(--color-muted) text-base sm:text-lg mt-4 max-w-[56ch]">
          {description}
        </p>
      )}
    </div>
  );
}
