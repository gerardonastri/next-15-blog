"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SearchComponent } from "./Search";

export function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navItems = [
    { href: "/category/frontend", label: "Frontend" },
    { href: "/category/backend", label: "Backend" },
    { href: "/category/devops", label: "Dev-Ops" },
    { href: "/category/ux-ui", label: "UX-UI" },
    { href: "/about", label: "About" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white"
    >
      <div className="container mx-auto px-6 h-20">
        <div className="flex items-center justify-between h-full">
          <Link href="/" className="text-xl font-bold">
            JerBlog
          </Link>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button className="rounded-full bg-black text-white hover:bg-black/90">
              <Link
                href="https://www.gerardonastri.it/"
                className="flex items-center gap-2"
              >
                gerardonastri.it
                <span className="ml-1">↗</span>
              </Link>
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <span className="sr-only">Menu</span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Button>
              </SheetTrigger>
              <SheetContent className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-2xl font-medium hover:text-gray-600 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isSearchOpen && (
          <SearchComponent onClose={() => setIsSearchOpen(false)} />
        )}
      </AnimatePresence>
    </motion.header>
  );
}
