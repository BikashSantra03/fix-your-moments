import type { Metadata } from "next";
import { Bodoni_Moda, Outfit } from "next/font/google";
import { siteSettings } from "@/config/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
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
      className={`${bodoniModa.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <div className="flex-1 flex flex-col pt-[78px]">{children}</div>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
