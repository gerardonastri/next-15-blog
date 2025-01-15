"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const HeroItems = ({ items }) => {
  return (
    <div className="grid gap-4 md:grid-cols-[1.5fr_1fr]">
      {/* Main Article */}
      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative rounded-[32px] overflow-hidden"
      >
        <Link href={`/blog/${items[0].fields.slug}`}>
          <div className="relative size-full">
            <Image
              src={`https:${items[0].fields?.image?.fields?.file?.url}` || ""}
              alt="Article"
              fill
              className="object-cover"
              priority
            />
            <div className="overlay-1" />
          </div>
          <div className="absolute inset-0 p-8 flex flex-col justify-between">
            <span className="text-white text-sm">
              {items[0].fields.category}
            </span>
            <div className="space-y-4">
              <h1 className="text-white text-4xl md:text-5xl font-medium leading-tight">
                {items[0].fields.title}
              </h1>
              <div className="flex items-center gap-4">
                <button className="bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-colors">
                  Read article ↗
                </button>
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8 border-2 border-white">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>GN</AvatarFallback>
                  </Avatar>
                  <span className="text-white text-sm">by Gerardo Nastri</span>
                </div>
              </div>
              <p className="text-white/80 text-sm">{items[0].fields.excerpt}</p>
            </div>
          </div>
        </Link>
      </motion.article>

      {/* Side Articles */}
      <div className="flex flex-col gap-4">
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="relative rounded-[32px] overflow-hidden"
        >
          <Link href={`/blog/${items[1].fields.slug}`}>
            <div className="relative aspect-[3/2]">
              <Image
                src={`https:${items[1].fields?.image?.fields?.file?.url}` || ""}
                alt="Second article"
                fill
                className="object-cover"
              />
              <div className="overlay-1" />
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <span className="text-white text-sm">
                  {items[1].fields.category}
                </span>
                <h2 className="text-white text-3xl font-medium">
                  {items[1].fields.title}
                </h2>
              </div>
            </div>
          </Link>
        </motion.article>

        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="relative rounded-[32px] overflow-hidden"
        >
          <Link href={`/blog/${items[2].fields.slug}`}>
            <div className="relative aspect-[3/2]">
              <Image
                src={`https:${items[2].fields?.image?.fields?.file?.url}` || ""}
                alt="Lifestyle Article"
                fill
                className="object-cover"
              />
              <div className="overlay-1" />
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <span className="text-white text-sm">
                  {items[2].fields.category}
                </span>
                <h2 className="text-white text-3xl font-medium">
                  {items[1].fields.title}
                </h2>
              </div>
            </div>
          </Link>
        </motion.article>
      </div>
    </div>
  );
};

export default HeroItems;
