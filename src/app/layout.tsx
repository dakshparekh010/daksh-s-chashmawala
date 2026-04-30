import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Daksh's Chashmawala — Premium Luxury Eyewear",
  description:
    "See Beyond Ordinary. Premium modern eyewear crafted with attitude. Luxury sunglasses with polarized lenses, 24K gold-plated hardware, and Italian acetate frames.",
  keywords: [
    "luxury sunglasses",
    "premium eyewear",
    "designer sunglasses",
    "polarized lenses",
    "Daksh Chashmawala",
  ],
  openGraph: {
    title: "Daksh's Chashmawala — Premium Luxury Eyewear",
    description: "See Beyond Ordinary. Luxury eyewear crafted for those who lead, not follow.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
