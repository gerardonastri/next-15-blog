"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  Calendar,
  Clock,
  User,
  ChevronRight,
  ArrowRight,
  ListOrdered,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const tableOfContents = [
  { id: "introduction", title: "Introduzione" },
  { id: "materials", title: "Materiali e Finiture" },
  { id: "design", title: "Design e Stile" },
  { id: "functionality", title: "Funzionalità" },
  { id: "conclusion", title: "Conclusione" },
];

const relatedArticles = [
  {
    title: "Come Scegliere il Pavimento Perfetto",
    excerpt:
      "Una guida completa alla scelta dei materiali e degli stili per il pavimento della tua casa.",
    image: "/post-1.jpeg",
    date: "2024-01-02",
    readTime: "8 min",
  },
  {
    title: "Tendenze Design 2024",
    excerpt:
      "Scopri le ultime tendenze nel design d'interni per il nuovo anno.",
    image: "/post-2.webp",
    date: "2024-01-01",
    readTime: "6 min",
  },
  {
    title: "L'Arte del Minimalismo",
    excerpt: "Come creare spazi eleganti e funzionali con meno elementi.",
    image: "/post-3.webp",
    date: "2023-12-30",
    readTime: "5 min",
  },
];

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className="mb-4 text-gray-800">{children}</p>
    ),
    [BLOCKS.HEADING_1]: (node, children) => (
      <h1 className="text-4xl font-title mb-4">{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <h2 className="text-2xl text-[#333] font-bold mb-4">{children}</h2>
    ),
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { title, file } = node.data.target.fields;
      return (
        <img
          src={file.url}
          alt={title || "Contentful Asset"}
          className="my-4 rounded-lg"
        />
      );
    },
    [BLOCKS.CODE]: (node) => {
      // Il contenuto del codice è contenuto in `node.content[0].value`
      return (
        <SyntaxHighlighter language="html" style={vscDarkPlus}>
          {node.content[0].value}
        </SyntaxHighlighter>
      );
    },
    [INLINES.HYPERLINK]: (node, children) => (
      <a
        href={node.data.uri}
        className="text-blue-600 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
};

const SinglePage = ({ item }) => {
  const [activeSection, setActiveSection] = useState("introduction");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    tableOfContents.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50"
        style={{ scaleX }}
      />

      {/* Article header */}
      <header className="relative py-24 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <Badge variant="secondary" className="mb-4">
            {item.fields.category}
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {item.fields.title}
          </h1>
          <p className="text-lg text-[#71717A] mb-6 max-w-2xl mx-auto">
            {item.fields.excerpt}
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-[#71717A]">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              <span>di Gerardo Nastri</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{formatDate(item.sys.createdAt)}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>10 min lettura</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="container mx-auto px-4 max-w-7xl mb-[100px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Table of contents - Desktop */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-8">
              <div className="flex items-center gap-2 mb-4">
                <ListOrdered className="w-5 h-5" />
                <h2 className="font-semibold">Sommario</h2>
              </div>
              <nav className="space-y-1">
                {tableOfContents.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`block py-2 px-3 text-sm rounded-lg transition-colors ${
                      activeSection === item.id
                        ? "bg-secondary text-primary font-medium"
                        : "text-[#71717A] hover:bg-secondary"
                    }`}
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Article content */}
          <div className="lg:col-span-9">
            <div className="prose prose-lg max-w-none">
              <Image
                src={`https:${item.fields.image.fields.file.url}`}
                alt="Modern interior design"
                width={900}
                height={300}
                className="rounded-lg mb-8 w-[900px] h-[500px] object-cover"
              />

              <div className="prose ">
                {documentToReactComponents(item.fields.content, options)}
              </div>
            </div>

            {/* Related articles */}
            <section className="mt-16 border-t pt-16">
              <h2 className="text-2xl font-bold mb-8">Articoli Correlati</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedArticles.map((article, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-lg transition-shadow"
                  >
                    <CardContent className="p-4">
                      <Image
                        src={article.image}
                        alt={article.title}
                        width={400}
                        height={250}
                        className="rounded-lg mb-4 object-cover h-[250px] w-[300px]"
                      />
                      <h3 className="font-semibold  transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-sm text-[#71717A] mt-2">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-4 text-sm text-[#71717A]">
                        <span>
                          {new Date(article.date).toLocaleDateString("it-IT")}
                        </span>
                        <span>{article.readTime}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
