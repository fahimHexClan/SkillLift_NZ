"use client";
import { useEffect } from "react";
import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import Benefits from "@/components/home/Benefits";
import About from "@/components/home/About";
import Stats from "@/components/home/Stats";
import Courses from "@/components/home/Courses";
import HowItWorks from "@/components/home/HowItWorks";
import Instructors from "@/components/home/Instructors";
import Newsletter from "@/components/home/Newsletter";
import Footer from "@/components/home/Footer";

export default function HomePage() {
  useEffect(() => {
    const scrollBtn = document.getElementById("scrollTopBtn");
    const handleScroll = () => {
      scrollBtn?.classList.toggle("show", window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); observer.unobserve(e.target); } }),
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => { window.removeEventListener("scroll", handleScroll); observer.disconnect(); };
  }, []);

  return (
    <main>
      <Navbar />
      <Hero />
      <Benefits />
      <About />
      <Stats counts={{ s: 2000, i: 15, c: 7, co: 2 }} />
      <Courses />
      <HowItWorks />
      <Instructors />
      <Newsletter />
      <Footer />
      <button id="scrollTopBtn" className="scroll-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>↑</button>
    </main>
  );
}