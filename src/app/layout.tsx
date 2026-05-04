import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Good Luck Frame and Art | Artisanal Framing & Fine Art",
  description: "Artisanal framing for fine art collections. Handcrafted frames and fine art curated in our local atelier.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20 md:pt-24 pb-20 md:pb-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
