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
  title: "Jer Blog - Sviluppo e Programmazione",
  description:
    "Scopri tutorial, guide e consigli sullo sviluppo web e la programmazione con Jer Blog. Rimani aggiornato sulle ultime tecnologie e framework.",
  keywords: [
    "sviluppo web", "programmazione", "JavaScript", "React", "Next.js", 
    "Node.js", "TypeScript", "frontend", "backend", "full-stack", 
    "coding", "web development", "software engineering", "UI/UX", "API"
  ],
  openGraph: {
    title: "Jer Blog - Sviluppo e Programmazione",
    description:
      "Scopri tutorial, guide e consigli sullo sviluppo web e la programmazione con Jer Blog.",
    images: [
      {
        url: "/og-image-dev.jpg",
        width: 1200,
        height: 630,
        alt: "Jer Blog - Sviluppo e Programmazione",
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
