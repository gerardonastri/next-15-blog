"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function SearchComponent({ onClose }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    console.log("Searching for:", searchQuery);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="fixed inset-0 bg-white z-50 flex items-center justify-center p-4"
    >
      <div className="w-full max-w-2xl">
        <div className="flex justify-end mb-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="rounded-full"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>
        <form action="/search" className="flex gap-2">
          <Input
            type="text"
            name="query"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-grow text-lg py-6 px-4 rounded-full border-2 border-gray-200 focus:border-black focus:ring-0"
          />
          <Button
            type="submit"
            className="rounded-full bg-black text-white hover:bg-black/90 px-8"
          >
            Search
          </Button>
        </form>
      </div>
    </motion.div>
  );
}
