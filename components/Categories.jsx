"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Code, Layout, Server, Palette } from "lucide-react";

const categories = [
  {
    name: "Front-end",
    slug: "frontend",
    icon: Layout,
    color: "from-blue-400 to-blue-600",
    description: "UI, React, Vue, e altro",
  },
  {
    name: "Back-end",
    slug: "backend",
    icon: Server,
    color: "from-green-400 to-green-600",
    description: "API, Database, Server",
  },
  {
    name: "DevOps",
    slug: "devops",
    icon: Code,
    color: "from-purple-400 to-purple-600",
    description: "CI/CD, Cloud, Containers",
  },
  {
    name: "UX/UI",
    slug: "ux-ui",
    icon: Palette,
    color: "from-orange-400 to-orange-600",
    description: "Design, Usabilità, Prototipi",
  },
];

export default function CategoriesSection() {
  return (
    <section className="py-20 px-4 md:px-6 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Esplora per Categoria
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/category/${category.slug}`} className="block group">
                <div
                  className={`p-8 rounded-2xl bg-gradient-to-br ${category.color} text-white shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl`}
                >
                  <category.icon
                    size={48}
                    className="mb-6 transform transition-transform duration-300 group-hover:scale-110"
                  />
                  <h3 className="text-2xl font-semibold mb-2">
                    {category.name}
                  </h3>
                  <p className="text-sm opacity-90">{category.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
