import { Outfit, Lora } from "next/font/google";
import "./globals.css";

const geistSans = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const geistMono = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata = {
  title: "Snazzyblog - Fashion & Lifestyle",
  description:
    "Discover the latest trends in fashion, lifestyle, and travel with Snazzyblog. Get inspired by our curated content and expert advice.",
  keywords: ["fashion", "lifestyle", "travel", "blog", "trends", "style"],
  openGraph: {
    title: "Snazzyblog - Fashion & Lifestyle",
    description:
      "Discover the latest trends in fashion, lifestyle, and travel with Snazzyblog.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Snazzyblog - Fashion & Lifestyle",
      },
    ],
  },
};

import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
