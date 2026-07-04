import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://jezrealmomoh.vercel.app'),
  title: "Jezreal Momoh | AI & Software Full-Stack Engineer",
  description: "AI & Software Full-Stack Engineer building in public from Nigeria. Founder of EduPilot.",
  keywords: ["Jezreal Momoh", "Jezreal", "Software Engineer", "Full-Stack Engineer", "AI Engineer", "Next.js", "Go", "React", "Developer", "Nigeria", "EduPilot"],
  authors: [{ name: "Jezreal Momoh", url: "https://jezrealmomoh.vercel.app" }],
  creator: "Jezreal Momoh",
  openGraph: {
    title: "Jezreal Momoh | AI & Software Full-Stack Engineer",
    description: "AI & Software Full-Stack Engineer building in public from Nigeria. Founder of EduPilot.",
    url: 'https://jezrealmomoh.vercel.app',
    siteName: 'Jezreal Momoh Portfolio',
    images: [
      {
        url: '/og-image.png', // Fallback, doesn't exist yet but good practice
        width: 1200,
        height: 630,
        alt: 'Jezreal Momoh - Software Engineer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Jezreal Momoh | AI & Software Full-Stack Engineer",
    description: "AI & Software Full-Stack Engineer building in public from Nigeria. Founder of EduPilot.",
    creator: '@jezrealmomoh', // Assuming, can be updated later
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://jezrealmomoh.vercel.app',
  },
};

import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${jetbrains.variable} scroll-smooth`}>
      <body className="antialiased min-h-screen flex flex-col justify-between">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <ChatWidget />
        <SpeedInsights />
      </body>
    </html>
  );
}
