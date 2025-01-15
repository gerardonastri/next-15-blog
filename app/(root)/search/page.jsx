"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Calendar,
  Clock,
  Search,
  ExternalLink,
  ArrowUpRight,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import client from "@/lib/contentful";
import FancyLoading from "@/components/Loading";
import { formatDate } from "@/lib/utils";

const ITEMS_PER_PAGE = 9;
// const mockResults = Array.from({ length: 50 }, (_, i) => ({
//   id: `post-${i + 1}`,
//   title: "Design System con Tailwind e shadcn/ui",
//   excerpt:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//   image: "/post-2.webp",
//   date: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
//   readTime: `${Math.floor(Math.random() * 10) + 5} min`,
//   category: ["Design", "Arredamento", "Tendenze", "Materiali", "Colori"][
//     Math.floor(Math.random() * 5)
//   ],
//   url: `/blog/post-${i + 1}`,
//   author: {
//     name: "Giuseppe Verdi",
//     avatar: "/placeholder.svg?height=40&width=40",
//     initials: "GV",
//   },
// }));

export default function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const [newQuery, setNewQuery] = useState(query);
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState([]); // Stato per salvare i dati recuperati
  const [loading, setLoading] = useState(true); // Stato per il caricamento

  // Calcola il numero totale di pagine in base ai dati recuperati
  const totalPages = Math.ceil(posts.length / ITEMS_PER_PAGE);

  // Dati della pagina corrente
  const paginatedResults = posts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  useEffect(() => {
    const getPosts = async () => {
      try {
        setLoading(true); // Avvia il caricamento
        const entry = await client.getEntries({
          content_type: "post",
          "fields.title[match]": query,
        });

        // Salva i dati nel nostro stato
        setPosts(entry.items);
      } catch (error) {
        console.error("Errore durante il recupero dei post:", error);
      } finally {
        setLoading(false); // Termina il caricamento
      }
    };

    getPosts();
  }, [query]); // Ricarica quando cambia il parametro `slug`

  if (loading) {
    return <FancyLoading />;
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 pt-[150px]">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Risultati di ricerca
        </h1>

        {/* Search form */}
        <form action="/search" className="mb-12 max-w-2xl mx-auto">
          <div className="flex gap-4">
            <Input
              type="search"
              name="query"
              placeholder="Cerca articoli..."
              className="flex-1"
              value={newQuery}
              onChange={(e) => setNewQuery(e.target.value)}
            />
            <Button type="submit">
              <Search className="w-4 h-4 mr-2" />
              Cerca
            </Button>
          </div>
        </form>

        <p className="text-center mb-8 text-muted-foreground">
          {posts?.length} risultati trovati per "{query}"
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {paginatedResults?.map((post, index) => (
            <motion.article
              key={post.fields.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/blog/${post.fields.slug}`} className="block">
                <div className="relative aspect-[4/3] mb-6 overflow-hidden rounded-2xl">
                  <Image
                    src={`https:${post.fields?.image?.fields?.file?.url}` || ""}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
                    {post.fields.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 flex-shrink-0 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                </div>

                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.fields.excerpt || ""}
                </p>

                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    {/* <AvatarImage
                         src={post.author.avatar || ""}
                         alt={post.author.name || ""}
                       /> */}
                    <AvatarFallback>GN</AvatarFallback>
                  </Avatar>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="font-medium">Gerardo Nastri</span>
                    <span>•</span>
                    <time>{formatDate(post.sys.updatedAt)}</time>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                className={
                  currentPage === 1 ? "pointer-events-none opacity-50" : ""
                }
              />
            </PaginationItem>
            {[...Array(totalPages)].map((_, i) => (
              <PaginationItem key={i}>
                {Math.abs(currentPage - (i + 1)) <= 2 ? (
                  <PaginationLink
                    href="#"
                    onClick={() => setCurrentPage(i + 1)}
                    isActive={currentPage === i + 1}
                  >
                    {i + 1}
                  </PaginationLink>
                ) : i === 0 || i === totalPages - 1 ? (
                  <PaginationEllipsis />
                ) : null}
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                className={
                  currentPage === totalPages
                    ? "pointer-events-none opacity-50"
                    : ""
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
