"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { formatDate } from "@/lib/utils";

const Posts = ({ allPosts }) => {
  const [visiblePosts, setVisiblePosts] = useState(12);

  const loadMore = () => {
    setVisiblePosts((prevVisible) =>
      Math.min(prevVisible + 12, allPosts.length)
    );
  };

  console.log(allPosts);

  return (
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
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Carica altri articoli
          </Button>
        </div>
      )}
    </main>
  );
};

export default Posts;
