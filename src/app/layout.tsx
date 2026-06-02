import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Olia Family | Historical & Genealogical Record",
  description: "Explore the rich heritage of the Olia Family: a historical mercantile lineage tracing from the Central Asian Bayat Oghuz Turks to Rander, Burma, and Karachi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col font-sans bg-[#050808]">
        {children}
      </body>
    </html>
  );
}
