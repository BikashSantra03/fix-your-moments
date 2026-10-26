import type { Metadata } from "next";
import { Bodoni_Moda, Outfit } from "next/font/google";
import { siteSettings } from "@/config/site";
import "./globals.css";

const bodoniModa = Bodoni_Moda({
  variable: "--font-bodoni-moda",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: `${siteSettings.brandName} — Wedding, Event & Portrait Photography`,
    template: `%s — ${siteSettings.brandName}`,
  },
  description:
    "Fix Your Moments — wedding, pre-wedding, haldi, rice ceremony, corporate event and editorial portrait photography.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="cinematic"
      className={`${bodoniModa.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
