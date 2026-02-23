"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
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

// Floating Particles Component
function FloatingParticles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div style={{
      position: "fixed",
      inset: 0,
      pointerEvents: "none",
      zIndex: 1,
      overflow: "hidden",
    }}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: p.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: p.delay,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(26,86,219,0.4), rgba(124,58,237,0.2))",
            filter: "blur(1px)",
          }}
        />
      ))}
    </div>
  );
}

// Scroll Progress Bar
function ScrollProgress() {
  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        background: "linear-gradient(90deg, #1a56db, #7c3aed, #0ea5e9)",
        transformOrigin: "0%",
        zIndex: 9999,
      }}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: false, amount: 0 }}
    />
  );
}

// Cursor Glow Effect
function CursorGlow() {
  useEffect(() => {
    const cursor = document.getElementById("cursor-glow");
    const handleMouseMove = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      id="cursor-glow"
      style={{
        position: "fixed",
        width: 600,
        height: 600,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(26,86,219,0.08), transparent 70%)",
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        zIndex: 0,
        filter: "blur(60px)",
        transition: "left 0.3s ease, top 0.3s ease",
      }}
    />
  );
}

export default function HomePage() {
  useEffect(() => {
    // Scroll to top button
    const scrollBtn = document.getElementById("scrollTopBtn");
    const handleScroll = () => {
      scrollBtn?.classList.toggle("show", window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);

    // Intersection Observer for reveal animations
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <ScrollProgress />
      <CursorGlow />
      <FloatingParticles />
      
      <main style={{ position: "relative", zIndex: 2 }}>
        <Navbar />
        
        {/* Hero with fade in */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Hero />
        </motion.div>

        {/* Benefits with slide up */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Benefits />
        </motion.div>

        {/* About with scale */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <About />
        </motion.div>

        {/* Stats with fade */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <Stats counts={{ s: 2000, i: 15, c: 7, co: 2 }} />
        </motion.div>

        {/* Courses with slide */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Courses />
        </motion.div>

        {/* How It Works with slide */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <HowItWorks />
        </motion.div>

        {/* Instructors with fade */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Instructors />
        </motion.div>

        {/* Newsletter with scale */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Newsletter />
        </motion.div>

        <Footer />

        {/* Enhanced Scroll to Top Button */}
        <motion.button
          id="scrollTopBtn"
          className="scroll-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          whileHover={{ scale: 1.1, boxShadow: "0 10px 30px rgba(26,86,219,0.4)" }}
          whileTap={{ scale: 0.9 }}
          style={{
            position: "fixed",
            bottom: 30,
            right: 30,
            width: 50,
            height: 50,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #1a56db, #7c3aed)",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            fontSize: 20,
            fontWeight: 700,
            boxShadow: "0 4px 20px rgba(26,86,219,0.3)",
            zIndex: 1000,
            opacity: 0,
            transform: "translateY(100px)",
            transition: "opacity 0.3s, transform 0.3s",
          }}
        >
          ↑
        </motion.button>
      </main>

      <style jsx global>{`
        .scroll-top.show {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        /* Smooth animations */
        * {
          transition-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f5f9;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #1a56db, #7c3aed);
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #1e40af, #6d28d9);
        }

        /* Selection color */
        ::selection {
          background: rgba(26, 86, 219, 0.2);
          color: #0f172a;
        }

        /* Smooth scroll */
        html {
          scroll-behavior: smooth;
        }

        /* Page transitions */
        body {
          overflow-x: hidden;
        }
      `}</style>
    </>
  );
}
