import type { Metadata } from "next";
import { Inter, Playfair_Display, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400", variable: "--font-bebas" });

export const metadata: Metadata = {
  title: "Ownly Examples — Industry Sample Sites",
  description: "Eight live one-page sample sites built by Ownly Web Studio across hospitality, services, advisory, and SaaS.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${bebas.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
