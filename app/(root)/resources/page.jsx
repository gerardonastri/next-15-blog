"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";

const categories = [
  { id: "all", name: "All" },
  { id: "web-dev", name: "Web Development" },
  { id: "mobile", name: "Mobile Dev" },
  { id: "backend", name: "Backend" },
  { id: "design", name: "Design" },
];

const resources = [
  {
    title: "The Ultimate Next.js",
    highlight: "Guide",
    description:
      "Master Next.js 14 with App Router, Server Actions, and the latest features",
    image: "/resources/next-guide.jpeg",
    gradient: "from-[#0070F3] to-[#00CFFF]",
    textColor: "text-[#00CFFF]",
    category: "web-dev",
    logo: "/resources/next-js.svg",
  },
  {
    title: "React Native",
    highlight: "Mastery",
    description:
      "Build cross-platform mobile applications with React Native and Expo",
    image: "/resources/react.png",
    gradient: "from-[#61DAFB] to-[#00D8FF]",
    textColor: "text-[#61DAFB]",
    category: "mobile",
    logo: "/resources/react.png",
  },
  {
    title: "Full Stack",
    highlight: "Development",
    description: "Learn end-to-end web development with modern technologies",
    image: "/resources/fullstack.jpeg",
    gradient: "from-[#FF4D4D] to-[#F9CB28]",
    textColor: "text-[#F9CB28]",
    category: "backend",
    logo: "/resources/node-logo.png",
  },
  {
    title: "UI/UX",
    highlight: "Design Mastery",
    description:
      "Create beautiful and functional user interfaces with modern design principles",
    image: "/resources/ui-ux.jpeg",
    gradient: "from-[#FF0080] to-[#7928CA]",
    textColor: "text-[#FF0080]",
    category: "design",
    logo: "/resources/figma.png",
  },
];

const techIcons = [
  {
    src: "/resources/react.png",
    alt: "React",
    className: "top-20 left-[10%] w-12 animate-float",
  },
  {
    src: "/resources/next-js.svg",
    alt: "Next.js",
    className: "top-40 right-[15%] w-16 animate-float-delayed",
  },
  {
    src: "/resources/node.png",
    alt: "Node.js",
    className: "bottom-20 left-[20%] w-14 animate-float",
  },
  {
    src: "/resources/typescript.png",
    alt: "TypeScript",
    className: "top-32 left-[30%] w-10 animate-float-delayed",
  },
  {
    src: "/resources/tailwind.png",
    alt: "Tailwind",
    className: "bottom-40 right-[25%] w-12 animate-float",
  },
];

const FloatingIcons = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 max-w-7xl mx-auto">
      {techIcons.map((icon, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.2, y: 0 }}
          transition={{
            duration: 1,
            delay: index * 0.2,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 2,
          }}
          className={`absolute ${icon.className}`}
        >
          <Image
            src={icon.src}
            alt={icon.alt}
            width={100}
            height={100}
            className="w-full h-auto"
          />
        </motion.div>
      ))}
    </div>
  </div>
);

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredResources = resources.filter(
    (resource) =>
      (activeCategory === "all" || resource.category === activeCategory) &&
      resource.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white pt-[100px]">
      <div className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />
        <FloatingIcons />

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
              Resources and Guides
            </h1>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Explore our comprehensive collection of resources to master modern
              web and mobile development
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto relative">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search resources..."
                className="w-full h-14 pl-14 pr-6 rounded-2xl bg-white/5 border-white/10 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-12 flex-wrap">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2.5 rounded-xl transition-all ${
                  activeCategory === category.id
                    ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25"
                    : "bg-white/5 text-gray-300 hover:bg-white/10"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 pb-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-12"
        >
          Most Popular Resources
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredResources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link href="#" className="block">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br opacity-75 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <div
                      className={`absolute inset-0 ${resource.gradient} opacity-75`}
                    />
                  </div>

                  <div className="relative z-20 p-8">
                    <Badge
                      variant="outline"
                      className="bg-white/10 text-white border-none mb-4 backdrop-blur-sm"
                    >
                      New
                    </Badge>

                    <h3 className="text-3xl font-bold mb-2 leading-tight">
                      {resource.title}{" "}
                      <span className={`${resource.textColor} font-extrabold`}>
                        {resource.highlight}
                      </span>
                    </h3>

                    <p className="text-white/80 mb-6 max-w-md">
                      {resource.description}
                    </p>

                    <div className="flex items-center text-sm text-white/60">
                      <span className="flex items-center">
                        Free Resource
                        <motion.span
                          className="ml-2 inline-block"
                          initial={{ x: 0 }}
                          animate={{ x: 5 }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            repeatType: "reverse",
                          }}
                        >
                          →
                        </motion.span>
                      </span>
                    </div>
                  </div>

                  <div className="absolute top-0 right-0 w-1/2 h-full z-0">
                    <Image
                      src={resource.image}
                      alt={resource.title}
                      layout="fill"
                      objectFit="cover"
                      className="opacity-50 group-hover:opacity-75 transition-opacity duration-300 transform group-hover:scale-105"
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
