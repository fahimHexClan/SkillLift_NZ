"use client";
import { motion } from "framer-motion";
import { Clock, Users, BookOpen, Star, ArrowUpRight, Search, SlidersHorizontal } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const courses = [
  {
    id: "crypto-trading",
    title: "Crypto Trading Guide",
    category: "Crypto Trading",
    price: "Rs. 28,000",
    rating: "5.00",
    reviews: 21,
    students: 5000,
    lessons: 20,
    hours: "100 Hours",
    level: "Advanced",
    language: "Sinhala",
    tags: ["SkillLift Team", "Crypto Trading"],
    instructor: "SkillLift Team",
    updated: "25 November, 2025",
    bg: "linear-gradient(155deg, #0d1b38 0%, #1a3a6b 100%)",
    img: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=600&q=80",
    accent: "#1a56db",
    desc: "Master cryptocurrency trading from fundamentals to advanced strategies. Learn blockchain technology, risk management, and live trading techniques.",
  },
  {
    id: "korean-language",
    title: "Korean Language Foundation Course",
    category: "Language Learning",
    price: "Rs. 15,000",
    rating: "5.00",
    reviews: 21,
    students: 200,
    lessons: 25,
    hours: "100 Hours",
    level: "Advanced",
    language: "Korean",
    tags: ["Korean Instructors", "Language Learning"],
    instructor: "Ishara Lakmali",
    updated: "25 November, 2025",
    bg: "linear-gradient(155deg, #0c4a6e 0%, #0369a1 100%)",
    img: "https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?w=600&q=80",
    accent: "#0ea5e9",
    desc: "Learn Korean from scratch — reading, writing, and conversational fluency for everyday and professional use with expert instructors.",
  },
  {
    id: "social-media-marketing",
    title: "Social Media Marketing Mastery",
    category: "Digital Marketing",
    price: "Rs. 29,000",
    rating: "5.00",
    reviews: 21,
    students: 150,
    lessons: 22,
    hours: "10 Hours",
    level: "Advanced",
    language: "Sinhala",
    tags: ["Marketing Experts", "Digital Marketing"],
    instructor: "Sadupa Nayanajith",
    updated: "25 November, 2025",
    bg: "linear-gradient(155deg, #164e63 0%, #0e7490 100%)",
    img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80",
    accent: "#0ea5e9",
    desc: "Build and scale campaigns across Instagram, TikTok, Facebook, and LinkedIn with data-driven strategies that deliver real results.",
  },
  {
    id: "graphic-design",
    title: "Certificate in Graphic Design",
    category: "Graphic Design",
    price: "Rs. 15,000",
    rating: "5.00",
    reviews: 21,
    students: 180,
    lessons: 25,
    hours: "90 Hours",
    level: "Advanced",
    language: "Sinhala",
    tags: ["Graphic Design Experts", "Design Faculty"],
    instructor: "Geeth Tharangi",
    updated: "25 November, 2025",
    bg: "linear-gradient(155deg, #2e1065 0%, #4c1d95 100%)",
    img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&q=80",
    accent: "#7c3aed",
    desc: "From typography to brand identity — learn professional design using industry-standard tools with real project briefs and expert feedback.",
  },
];

export default function CoursesGrid() {
  const [search, setSearch] = useState("");
  const filtered = courses.filter(c =>
    c.title.toLowerCase().includes(search.toLowerCase()) ||
    c.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section style={{ padding: "80px 48px 120px", background: "#f8fafc" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>

        {/* Top bar */}
        <div style={{
          display: "flex", justifyContent: "space-between",
          alignItems: "center", marginBottom: 40, flexWrap: "wrap", gap: 16,
        }}>
          <p style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 14, color: "#64748b",
          }}>
            Showing <strong style={{ color: "#1a56db" }}>{filtered.length} Courses</strong> of {courses.length} result
          </p>

          {/* Search */}
          <div style={{ position: "relative" }}>
            <Search size={15} color="#94a3b8" style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)" }} />
            <input
              type="text"
              placeholder="Search courses..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{
                padding: "11px 16px 11px 40px",
                borderRadius: 10, border: "1px solid #e2e8f0",
                background: "#fff", fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 13, color: "#0a0f1e", outline: "none", width: 260,
              }}
            />
          </div>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 28 }}>
          {filtered.map((c, i) => (
            <motion.article
              key={c.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6, boxShadow: "0 28px 64px rgba(10,15,30,0.13)", borderColor: c.accent }}
              style={{
                background: "#fff", borderRadius: 20, overflow: "hidden",
                border: "1px solid #e2e8f0",
                boxShadow: "0 4px 20px rgba(10,15,30,0.06)",
                transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
                cursor: "pointer",
              }}
            >
              {/* Thumbnail */}
              <Link href={`/courses/${c.id}`} style={{ textDecoration: "none", display: "block" }}>
                <div style={{ height: 210, position: "relative", overflow: "hidden" }}>
                  <img
                    src={c.img}
                    alt={c.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s" }}
                    onMouseEnter={e => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1.04)")}
                    onMouseLeave={e => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1)")}
                  />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,15,30,0.5), transparent 60%)" }} />

                  {/* Price */}
                  <div style={{
                    position: "absolute", top: 16, left: 16,
                    background: "rgba(10,15,30,0.7)", backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    color: "#fff", padding: "7px 14px", borderRadius: 8,
                    fontFamily: "'Playfair Display', serif", fontSize: 14, fontWeight: 700,
                  }}>{c.price}/=</div>

                  {/* Level badge */}
                  <div style={{
                    position: "absolute", top: 16, right: 16,
                    background: c.accent, color: "#fff",
                    padding: "5px 12px", borderRadius: 6,
                    fontSize: 10, fontWeight: 700, letterSpacing: "0.1em",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}>{c.level}</div>
                </div>
              </Link>

              {/* Body */}
              <div style={{ padding: "24px 24px 20px" }}>
                {/* Rating */}
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 10 }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} fill="#f59e0b" color="#f59e0b" />
                  ))}
                  <span style={{ fontSize: 12, color: "#94a3b8", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>({c.reviews})</span>
                </div>

                {/* Category */}
                <div style={{
                  fontSize: 10, fontWeight: 700, letterSpacing: "0.14em",
                  color: c.accent, textTransform: "uppercase",
                  fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: 8,
                }}>{c.category}</div>

                {/* Title */}
                <Link href={`/courses/${c.id}`} style={{ textDecoration: "none" }}>
                  <h3 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 17, fontWeight: 700, color: "#0a0f1e",
                    lineHeight: 1.3, marginBottom: 10,
                  }}>{c.title}</h3>
                </Link>

                {/* Meta row */}
                <div style={{
                  display: "flex", alignItems: "center", gap: 16,
                  paddingTop: 14, borderTop: "1px solid #f1f5f9",
                  marginTop: 4,
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 12, color: "#64748b", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <Users size={12} strokeWidth={2} /> {c.students.toLocaleString()}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 12, color: "#64748b", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <BookOpen size={12} strokeWidth={2} /> {c.lessons} Lessons
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 12, color: "#64748b", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    <Clock size={12} strokeWidth={2} /> {c.hours}
                  </div>
                </div>

                {/* Tags */}
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 14 }}>
                  {c.tags.map(t => (
                    <span key={t} style={{
                      padding: "4px 10px", borderRadius: 6,
                      background: "#f1f5f9", fontSize: 11,
                      color: "#475569", fontWeight: 600,
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                    }}>{t}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}