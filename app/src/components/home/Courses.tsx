"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Users, Star, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const courses = [
  {
    id: "korean-language",
    title: "Korean Language Foundation",
    category: "Language & Culture",
    price: "LKR 15,000",
    duration: "12 Weeks",
    students: 200,
    rating: "4.9",
    level: "Beginner",
    desc: "Master foundational Korean — reading, writing, and conversational fluency for everyday and professional use.",
    accent: "#1a56db",
    tag: "POPULAR",
    image: "/images/courses/Korean-Language-Foundation-Course-bdetails.jpg",
  },
  {
    id: "social-media-marketing",
    title: "Social Media Marketing Mastery",
    category: "Digital Marketing",
    price: "LKR 29,000",
    duration: "10 Weeks",
    students: 150,
    rating: "4.8",
    level: "Intermediate",
    desc: "Build, launch, and scale campaigns across Instagram, TikTok, Facebook, and LinkedIn with data-driven strategy.",
    accent: "#0ea5e9",
    tag: "FEATURED",
    image: "/images/courses/2.jpg",
  },
  {
    id: "graphic-design",
    title: "Certificate in Graphic Design",
    category: "Creative Design",
    price: "LKR 15,000",
    duration: "8 Weeks",
    students: 180,
    rating: "4.9",
    level: "Beginner",
    desc: "From typography to brand identity — learn professional design using industry-standard tools and real briefs.",
    accent: "#7c3aed",
    tag: "NEW",
    image: "/images/courses/Graphic-design-bdetails.jpg",
  },
  {
    id: "crypto-trading",
    title: "Crypto Trading Guide",
    category: "Finance & Trading",
    price: "LKR 35,000",
    duration: "6 Weeks",
    students: 120,
    rating: "4.7",
    level: "Advanced",
    desc: "Learn cryptocurrency trading strategies, technical analysis, and risk management for profitable trading.",
    accent: "#f59e0b",
    tag: "TRENDING",
    image: "/images/courses/Crypto-trading-guide-bdetails.jpg",
  },
  {
    id: "korean-topik",
    title: "Korean TOPIK Level 2",
    category: "Language & Culture",
    price: "LKR 20,000",
    duration: "14 Weeks",
    students: 95,
    rating: "4.9",
    level: "Intermediate",
    desc: "Prepare for TOPIK Level 2 exam with comprehensive practice, grammar mastery, and test-taking strategies.",
    accent: "#1a56db",
    tag: "EXAM PREP",
    image: "/images/courses/Korean-S-TOPIK-LEVEL-2.jpg",
  },
  {
    id: "web-development",
    title: "Full Stack Web Development",
    category: "Technology",
    price: "LKR 45,000",
    duration: "16 Weeks",
    students: 220,
    rating: "4.8",
    level: "Beginner",
    desc: "Build modern web applications from scratch using React, Node.js, and MongoDB with hands-on projects.",
    accent: "#10b981",
    tag: "BESTSELLER",
    image: "/images/courses/3.jpg",
  },
];

export default function Courses() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCourses = courses.slice(currentIndex, currentIndex + 3);

  const handleNext = () => {
    if (currentIndex + 3 < courses.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section style={{ padding: "100px 48px", background: "#f0f7ff" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 72, flexWrap: "wrap", gap: 24 }}
        >
          <div>
            <div className="eyebrow">Our Programs</div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(30px, 3.5vw, 48px)", fontWeight: 700,
              color: "#0a0f1e", lineHeight: 1.12, letterSpacing: "-0.02em",
            }}>
              Career-Defining{" "}
              <em style={{ fontStyle: "italic", color: "#1a56db" }}>Courses</em>
            </h2>
          </div>
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                border: "2px solid #e2e8f0",
                background: currentIndex === 0 ? "#f8fafc" : "#fff",
                color: currentIndex === 0 ? "#cbd5e1" : "#1a56db",
                cursor: currentIndex === 0 ? "not-allowed" : "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s",
              }}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex + 3 >= courses.length}
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                border: "2px solid #e2e8f0",
                background: currentIndex + 3 >= courses.length ? "#f8fafc" : "#fff",
                color: currentIndex + 3 >= courses.length ? "#cbd5e1" : "#1a56db",
                cursor: currentIndex + 3 >= courses.length ? "not-allowed" : "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s",
              }}
            >
              <ChevronRight size={20} />
            </button>
            <Link href="/courses" style={{ textDecoration: "none" }}>
              <button className="btn-outline">View All Programs <ArrowUpRight size={14} /></button>
            </Link>
          </div>
        </motion.div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 28 }}>
          {visibleCourses.map((c, i) => (
            <Link key={c.id} href={`/courses/${c.id}`} style={{ textDecoration: "none", display: "block" }}>
              <motion.article
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{
                  background: "#fff", borderRadius: 20, overflow: "hidden",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 4px 20px rgba(10,15,30,0.06)",
                  transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
                  cursor: "pointer",
                }}
                whileHover={{
                  y: -6,
                  boxShadow: "0 28px 64px rgba(10,15,30,0.14)",
                  borderColor: c.accent,
                }}
              >
              {/* Thumbnail */}
              <div style={{
                height: 220,
                position: "relative", overflow: "hidden",
              }}>
                {/* Course Image */}
                <img 
                  src={c.image} 
                  alt={c.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.4s cubic-bezier(0.4,0,0.2,1)",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.08)"}
                  onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                />
                {/* Dark overlay */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(180deg, rgba(10,15,30,0.1) 0%, rgba(10,15,30,0.4) 100%)",
                }} />
                {/* Price badge */}
                <div style={{
                  position: "absolute", top: 20, left: 20,
                  background: "rgba(10,15,30,0.6)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "#fff", padding: "8px 16px", borderRadius: 8,
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 15, fontWeight: 700,
                }}>{c.price}</div>
                {/* Tag */}
                <div style={{
                  position: "absolute", top: 20, right: 20,
                  background: c.accent, color: "#fff",
                  padding: "5px 12px", borderRadius: 6,
                  fontSize: 9, fontWeight: 800,
                  letterSpacing: "0.12em",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}>{c.tag}</div>
                {/* Level */}
                <div style={{
                  position: "absolute", bottom: 20, left: 20,
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "rgba(255,255,255,0.8)",
                  padding: "4px 12px", borderRadius: 6,
                  fontSize: 11, fontWeight: 600,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}>{c.level}</div>
              </div>

              {/* Body */}
              <div style={{ padding: "28px 28px 24px" }}>
                <div style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: "0.14em",
                  color: c.accent, textTransform: "uppercase",
                  fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: 10,
                }}>{c.category}</div>

                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 19, fontWeight: 700, color: "#0a0f1e",
                  lineHeight: 1.3, marginBottom: 12,
                }}>{c.title}</h3>

                <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.7, marginBottom: 20 }}>
                  {c.desc}
                </p>

                {/* Meta row */}
                <div style={{
                  display: "flex", alignItems: "center", gap: 16,
                  paddingTop: 16, borderTop: "1px solid #f1f5f9",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 12, color: "#64748b" }}>
                    <Clock size={12} strokeWidth={2} /> {c.duration}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 12, color: "#64748b" }}>
                    <Users size={12} strokeWidth={2} /> {c.students}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 12, color: "#f59e0b", marginLeft: "auto" }}>
                    <Star size={12} fill="#f59e0b" strokeWidth={0} /> {c.rating}
                  </div>
                  <div style={{
                    width: 36, height: 36, borderRadius: "50%",
                    background: "#0a0f1e",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#fff", flexShrink: 0,
                    transition: "background 0.2s",
                  }}>
                    <ArrowUpRight size={15} />
                  </div>
                </div>
              </div>
            </motion.article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}