"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { formatDate } from "@/lib/utils";
import Image from "next/image";

const Cards = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post, index) => (
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
  );
};

export default Cards;
