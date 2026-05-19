import type { Metadata } from "next";
import Link from "next/link";
import { Barlow_Condensed, Source_Sans_3 } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";

import "./globals.css";
const head = Barlow_Condensed({ weight: "700", subsets: ["latin"], variable: "--font-head" });
const font = Source_Sans_3({ subsets: ["latin"], variable: "--font-body" });
export const metadata: Metadata = {
  title: { default: "FW Roofing | Cranleigh", template: "%s" },
  description: "Roofing contractor demo.",
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${head.variable} ${font.variable}`}>
      <body className="flex min-h-screen flex-col antialiased">
        <header className="bg-[#2a3441] text-white">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="font-bold">FW Roofing</Link>
            <nav className="flex gap-5 text-sm"><a href="tel:01483200001" className="text-orange-400 font-bold">Call</a><Link href="/contact">Contact</Link></nav>
          </div>
        </header>
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
