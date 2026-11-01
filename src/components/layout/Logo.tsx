import Image from "next/image";
import Link from "next/link";
import { media } from "@/config/media";
import { siteSettings } from "@/config/site";

interface LogoProps {
  size?: number;
  overlay?: boolean;
}

export function Logo({ size = 32, overlay = false }: LogoProps) {
  return (
    <Link
      href="/"
      className="flex items-center gap-2.5"
      aria-label={`${siteSettings.brandName} — home`}
    >
      <Image
        src={media.logo.src}
        alt=""
        width={media.logo.width}
        height={media.logo.height}
        className="rounded-md"
        style={{ width: size, height: size }}
        priority
      />
      <span className={`font-display text-xl ${overlay ? "text-white drop-shadow-md" : "text-(--color-text)"}`}>
        {siteSettings.brandName}
      </span>
    </Link>
  );
}
