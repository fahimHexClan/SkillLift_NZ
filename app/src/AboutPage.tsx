"use client";
import { useEffect } from "react";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import AboutHero from "@/components/about/AboutHero";
import AboutBenefits from "@/components/about/AboutBenefits";
import AboutStory from "@/components/about/AboutStory";
import AboutStats from "@/components/about/AboutStats";
import AboutInstructors from "@/components/about/AboutInstructors";
import AboutCTA from "@/components/about/AboutCTA";

export default function AboutPage() {
  useEffect(() => {
    const scrollBtn = document.getElementById("scrollTopBtn");
    const handleScroll = () => scrollBtn?.classList.toggle("show", window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main>
      <Navbar />
      <AboutHero />
      <AboutBenefits />
      <AboutStory />
      <AboutStats />
      <AboutInstructors />
      <AboutCTA />
      <Footer />
      <button
        id="scrollTopBtn"
        className="scroll-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
      >↑</button>
    </main>
  );
}