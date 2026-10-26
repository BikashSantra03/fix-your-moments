interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionTitleProps) {
  const alignClasses = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`${alignClasses} ${className}`}>
      {eyebrow && (
        <p className="text-(--color-accent) text-sm tracking-wide uppercase mb-3 font-medium">
          {eyebrow}
        </p>
      )}
      <h2 className="text-[clamp(2.25rem,4.2vw,4.5rem)] text-(--color-ivory)">
        {title}
      </h2>
      {description && (
        <p
          className={`text-(--color-muted) text-base sm:text-lg mt-4 max-w-[56ch] ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
