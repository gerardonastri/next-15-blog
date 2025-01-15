import CategoriesSection from "@/components/Categories";
import { HeroSection } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import NewsletterSection from "@/components/Newsletter";
import RecentPosts from "@/components/RecentPosts";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <RecentPosts />
      <CategoriesSection />
      <NewsletterSection />
    </main>
  );
}
