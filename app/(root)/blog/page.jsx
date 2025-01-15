import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import NewsletterSection from "@/components/Newsletter";
import { Input } from "@/components/ui/input";
import Posts from "./_components/posts";
import client from "@/lib/contentful";

// Simuliamo un array di 30 articoli per dimostrare il caricamento progressivo
const allPosts = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  title: `Articolo ${i + 1}: Tecniche Avanzate di Sviluppo Web`,
  excerpt:
    "Esploriamo le ultime tendenze e best practices nello sviluppo web moderno, con focus su performance e user experience.",
  image: `/post-2.webp`,
  author: {
    name: "Marco Rossi",
    avatar: "/placeholder.svg?height=40&width=40&text=MR",
    initials: "MR",
  },
  date: `${Math.floor(Math.random() * 28) + 1} Gen 2024`,
  readTime: `${Math.floor(Math.random() * 10) + 5} min`,
}));

const BlogPage = async () => {
  const entries = await client.getEntries({ content_type: "post" });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative pt-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920&text=Blog+Background')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Esplora il Nostro Blog
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Scopri le ultime tendenze, tutorial e approfondimenti nel mondo
              dello sviluppo web e del design
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-2xl mx-auto">
              <Input
                type="search"
                placeholder="Cerca articoli..."
                className="bg-white/20 border-white/30 text-white placeholder-white/70 w-full sm:w-auto"
              />
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-white/90 w-full sm:w-auto"
              >
                <Search className="w-5 h-5 mr-2" /> Cerca
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* BLOG SECTION  */}
      <Posts allPosts={entries?.items} />
      <NewsletterSection />
    </div>
  );
};

export default BlogPage;
