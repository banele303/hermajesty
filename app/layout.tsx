import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { WhatsAppFloating } from "@/components/whatsapp-floating";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SqwizFlow Ai | Premium Digital Assets & AI Automation",
  description: "Elite web systems, custom AI agents, and high-performance digital ecosystems in South Africa. Architecting the future of human-AI collaboration.",
  generator: 'v0.app',
  openGraph: {
    title: "SqwizFlow Ai | Premium Digital Assets & AI Automation",
    description: "Architecting high-performance digital ecosystems and elite AI automation agents.",
    locale: "en_ZA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <Header />
        {children}
        <WhatsAppFloating />
      </body>
    </html>
  );
}
