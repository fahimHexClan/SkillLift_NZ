"use client";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import CoursesHero from "./CoursesHero";
import CoursesGrid from "./CoursesGrid";

export default function CoursesPage() {
  return (
    <main>
      <Navbar />
      <CoursesHero />
      <CoursesGrid />
      <Footer />
    </main>
  );
}