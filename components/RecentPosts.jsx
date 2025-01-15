import Link from "next/link";

import { Card } from "./ui/card";
import client from "@/lib/contentful";
import Cards from "./Cards";

// const posts = [
//   {
//     id: 1,
//     title: "Architettura Moderna con Next.js 15",
//     excerpt:
//       "Scopri come strutturare applicazioni scalabili utilizzando le ultime feature di Next.js 15. Un'analisi approfondita delle best practices e dei pattern più efficaci.",
//     image: "/post-1.jpeg",
//     author: {
//       name: "Marco Rossi",
//       avatar: "/placeholder.svg?height=40&width=40",
//       initials: "MR",
//     },
//     date: "15 Gen 2024",
//   },
//   {
//     id: 2,
//     title: "Design System con Tailwind e shadcn/ui",
//     excerpt:
//       "La guida definitiva per creare un design system coerente e mantenibile utilizzando Tailwind CSS e i componenti shadcn/ui.",
//     image: "/post-2.webp",
//     author: {
//       name: "Laura Bianchi",
//       avatar: "/placeholder.svg?height=40&width=40",
//       initials: "LB",
//     },
//     date: "18 Gen 2024",
//   },
//   {
//     id: 3,
//     title: "Ottimizzazione SEO per Sviluppatori",
//     excerpt:
//       "Tecniche avanzate di SEO specifiche per applicazioni Next.js. Dalla configurazione dei metadata alle best practices per il rendering.",
//     image: "/post-3.webp",
//     author: {
//       name: "Giuseppe Verdi",
//       avatar: "/placeholder.svg?height=40&width=40",
//       initials: "GV",
//     },
//     date: "20 Gen 2024",
//   },
//   {
//     id: 4,
//     title: "Architettura Moderna con Next.js 15",
//     excerpt:
//       "Scopri come strutturare applicazioni scalabili utilizzando le ultime feature di Next.js 15. Un'analisi approfondita delle best practices e dei pattern più efficaci.",
//     image: "/post-1.jpeg",
//     author: {
//       name: "Marco Rossi",
//       avatar: "/placeholder.svg?height=40&width=40",
//       initials: "MR",
//     },
//     date: "15 Gen 2024",
//   },
//   {
//     id: 5,
//     title: "Design System con Tailwind e shadcn/ui",
//     excerpt:
//       "La guida definitiva per creare un design system coerente e mantenibile utilizzando Tailwind CSS e i componenti shadcn/ui.",
//     image: "/post-2.webp",
//     author: {
//       name: "Laura Bianchi",
//       avatar: "/placeholder.svg?height=40&width=40",
//       initials: "LB",
//     },
//     date: "18 Gen 2024",
//   },
//   {
//     id: 6,
//     title: "Ottimizzazione SEO per Sviluppatori",
//     excerpt:
//       "Tecniche avanzate di SEO specifiche per applicazioni Next.js. Dalla configurazione dei metadata alle best practices per il rendering.",
//     image: "/post-3.webp",
//     author: {
//       name: "Giuseppe Verdi",
//       avatar: "/placeholder.svg?height=40&width=40",
//       initials: "GV",
//     },
//     date: "20 Gen 2024",
//   },
//   {
//     id: 7,
//     title: "Architettura Moderna con Next.js 15",
//     excerpt:
//       "Scopri come strutturare applicazioni scalabili utilizzando le ultime feature di Next.js 15. Un'analisi approfondita delle best practices e dei pattern più efficaci.",
//     image: "/post-1.jpeg",
//     author: {
//       name: "Marco Rossi",
//       avatar: "/placeholder.svg?height=40&width=40",
//       initials: "MR",
//     },
//     date: "15 Gen 2024",
//   },
//   {
//     id: 8,
//     title: "Design System con Tailwind e shadcn/ui",
//     excerpt:
//       "La guida definitiva per creare un design system coerente e mantenibile utilizzando Tailwind CSS e i componenti shadcn/ui.",
//     image: "/post-2.webp",
//     author: {
//       name: "Laura Bianchi",
//       avatar: "/placeholder.svg?height=40&width=40",
//       initials: "LB",
//     },
//     date: "18 Gen 2024",
//   },
//   {
//     id: 9,
//     title: "Ottimizzazione SEO per Sviluppatori",
//     excerpt:
//       "Tecniche avanzate di SEO specifiche per applicazioni Next.js. Dalla configurazione dei metadata alle best practices per il rendering.",
//     image: "/post-3.webp",
//     author: {
//       name: "Giuseppe Verdi",
//       avatar: "/placeholder.svg?height=40&width=40",
//       initials: "GV",
//     },
//     date: "20 Gen 2024",
//   },
// ];

export default async function RecentPosts() {
  const entries = await client.getEntries({
    content_type: "post",
    order: "-sys.createdAt", // Ordina in ordine decrescente per `createdAt`
    limit: 6, // Limita i risultati a 6 articoli
  });

  return (
    <section className="py-16 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold">Articoli recenti</h2>
          <Link
            href="/blog"
            className="text-sm text-blue-600 hover:text-blue-800 bg-blue-50 px-4 py-2 rounded-full"
          >
            Vedi tutti gli articoli
          </Link>
        </div>

        <Cards posts={entries.items} />
      </div>
    </section>
  );
}
