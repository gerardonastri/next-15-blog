"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Clock,
  Search,
  Layout,
  Server,
  Code,
  Palette,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import NewsletterSection from "@/components/Newsletter";
import { formatDate } from "@/lib/utils";

const categories = [
  {
    slug: "frontend",
    name: "Front-end",
    icon: Layout,
    color: "from-blue-400 to-blue-600",
    description: "UI, React, Vue, e altro",
  },
  {
    slug: "backend",
    name: "Back-end",
    icon: Server,
    color: "from-green-400 to-green-600",
    description: "API, Database, Server",
  },
  {
    slug: "devops",
    name: "DevOps",
    icon: Code,
    color: "from-purple-400 to-purple-600",
    description: "CI/CD, Cloud, Containers",
  },
  {
    slug: "ux-ui",
    name: "UX/UI",
    icon: Palette,
    color: "from-orange-400 to-orange-600",
    description: "Design, Usabilità, Prototipi",
  },
];

// Simuliamo un array di 30 articoli per dimostrare il caricamento progressivo
// const generatePosts = (category) =>
//   Array.from({ length: 30 }, (_, i) => ({
//     id: i + 1,
//     title: `${category.name} - Articolo ${i + 1}: Tecniche Avanzate`,
//     excerpt: `Esploriamo le ultime tendenze e best practices in ${category.name}, con focus su performance e user experience.`,
//     image: `/post-3.webp`,
//     author: {
//       name: "Marco Rossi",
//       avatar: "/placeholder.svg?height=40&width=40&text=MR",
//       initials: "MR",
//     },
//     date: `${Math.floor(Math.random() * 28) + 1} Gen 2024`,
//     readTime: `${Math.floor(Math.random() * 10) + 5} min`,
//   }));

const CategoryPosts = ({ posts, slug }) => {
  const [category, setCategory] = useState(null);
  const [visiblePosts, setVisiblePosts] = useState(12);
  const [allPosts, setAllPosts] = useState(posts);

  useEffect(() => {
    const currentCategory = categories.find((cat) => cat.slug === slug);
    if (currentCategory) {
      setCategory(currentCategory);
    }
  }, [slug]);

  const loadMore = () => {
    setVisiblePosts((prevVisible) =>
      Math.min(prevVisible + 12, allPosts.length)
    );
  };

  if (!category) return null;

  const CategoryIcon = category.icon;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        className={`relative pt-12 bg-gradient-to-r ${category.color} text-white overflow-hidden`}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920&text=Category+Background')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className={`p-4 rounded-full bg-white/20 backdrop-blur-sm`}>
                <CategoryIcon size={48} />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {category.name}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              {category.description}
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-2xl mx-auto">
              <Input
                type="search"
                placeholder={`Cerca articoli in ${category.name}...`}
                className="bg-white/20 border-white/30 text-white placeholder-white/70 w-full sm:w-auto"
              />
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-white/90 w-full sm:w-auto"
              >
                <Search className="w-5 h-5 mr-2" /> Cerca
              </Button>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Category Stats */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <h3 className="text-4xl font-bold text-gray-800 mb-2">
                {allPosts.length}
              </h3>
              <p className="text-gray-600">Articoli Totali</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center"
            >
              <h3 className="text-4xl font-bold text-gray-800 mb-2">15k+</h3>
              <p className="text-gray-600">Lettori Mensili</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-center"
            >
              <h3 className="text-4xl font-bold text-gray-800 mb-2">4.9/5</h3>
              <p className="text-gray-600">Valutazione Media</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allPosts.slice(0, visiblePosts).map((post, index) => (
            <motion.article
              key={index}
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
        {visiblePosts < allPosts.length && (
          <div className="mt-12 text-center">
            <Button
              onClick={loadMore}
              size="lg"
              className={`bg-gradient-to-r ${category.color} text-white hover:opacity-90`}
            >
              Carica altri articoli
            </Button>
          </div>
        )}
      </main>
      <NewsletterSection />
    </div>
  );
};

export default CategoryPosts;
