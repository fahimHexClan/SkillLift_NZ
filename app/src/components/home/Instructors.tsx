"use client";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail, BookOpen, Users, Star, ArrowUpRight, Sparkles } from "lucide-react";

const instructors = [
  {
    name: "Nadeesha Kawishka",
    role: "Lead Technology Instructor",
    specialty: "Full-Stack Development",
    courses: 3, students: 620,
    rating: "4.9",
    image: "/images/instructor/1.png",
    color: "#1a56db",
  },
  {
    name: "Achintha Madusanka",
    role: "Marketing Director",
    specialty: "Digital & Social Media",
    courses: 2, students: 480,
    rating: "4.8",
    image: "/images/instructor/2.png",
    color: "#0ea5e9",
  },
  {
    name: "Vishan Heleesha",
    role: "Senior Designer",
    specialty: "Brand & Visual Identity",
    courses: 2, students: 530,
    rating: "4.9",
    image: "/images/instructor/3.png",
    color: "#7c3aed",
  },
  {
    name: "Sadupa Nayanajith",
    role: "Language Specialist",
    specialty: "Korean & Linguistics",
    courses: 2, students: 370,
    rating: "4.7",
    image: "/images/instructor/4.png",
    color: "#10b981",
  },
];

export default function Instructors() {
  return (
    <section style={{ 
      padding: "120px 48px", 
      background: "#fff",
      position: "relative",
      overflow: "hidden",
    }}>
      <div style={{ maxWidth: 1320, margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: 80 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "10px 24px",
              borderRadius: 100,
              background: "linear-gradient(135deg, #eff6ff, #f5f3ff)",
              border: "1px solid #e0e7ff",
              marginBottom: 24,
            }}
          >
            <Sparkles size={16} color="#1a56db" />
            <span style={{
              fontSize: 12,
              fontWeight: 800,
              background: "linear-gradient(135deg, #1a56db, #7c3aed)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "0.1em",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}>
              EXPERT INSTRUCTORS
            </span>
          </motion.div>

          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(36px, 5vw, 56px)", 
            fontWeight: 800,
            color: "#0f172a", 
            lineHeight: 1.1, 
            letterSpacing: "-0.03em",
            marginBottom: 20,
          }}>
            Meet Your{" "}
            <span style={{
              background: "linear-gradient(135deg, #1a56db, #7c3aed)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Mentors
            </span>
          </h2>

          <p style={{ 
            fontSize: 18, 
            color: "#64748b", 
            maxWidth: 680, 
            margin: "0 auto", 
            lineHeight: 1.7,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}>
            Industry professionals dedicated to your success
          </p>
        </motion.div>

        {/* Grid */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
          gap: 40 
        }}>
          {instructors.map((ins, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              style={{
                textAlign: "center",
                position: "relative",
              }}
            >
              {/* Circular Image with Ring */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                style={{
                  position: "relative",
                  width: 200,
                  height: 200,
                  margin: "0 auto 24px",
                }}
              >
                {/* Animated ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  style={{
                    position: "absolute",
                    inset: -8,
                    borderRadius: "50%",
                    background: `conic-gradient(from 0deg, ${ins.color}, transparent, ${ins.color})`,
                    opacity: 0.3,
                  }}
                />

                {/* Image container */}
                <div style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "4px solid #fff",
                  boxShadow: `0 20px 60px ${ins.color}40`,
                }}>
                  <img 
                    src={ins.image} 
                    alt={ins.name}
                    style={{ 
                      width: "100%", 
                      height: "100%", 
                      objectFit: "cover",
                    }}
                  />
                </div>

                {/* Rating badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3, type: "spring" }}
                  style={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: "#fff",
                    border: `3px solid ${ins.color}`,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                  }}
                >
                  <Star size={16} fill={ins.color} color={ins.color} />
                  <span style={{
                    fontSize: 13,
                    fontWeight: 800,
                    color: "#0f172a",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    marginTop: 2,
                  }}>
                    {ins.rating}
                  </span>
                </motion.div>
              </motion.div>

              {/* Name */}
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 24,
                fontWeight: 800,
                color: "#0f172a",
                marginBottom: 8,
                lineHeight: 1.2,
              }}>
                {ins.name}
              </h3>

              {/* Role */}
              <div style={{
                fontSize: 15,
                fontWeight: 700,
                color: ins.color,
                marginBottom: 4,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}>
                {ins.role}
              </div>

              {/* Specialty */}
              <div style={{
                fontSize: 13,
                color: "#94a3b8",
                marginBottom: 24,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}>
                {ins.specialty}
              </div>

              {/* Stats */}
              <div style={{
                display: "flex",
                justifyContent: "center",
                gap: 24,
                marginBottom: 24,
                padding: "20px",
                background: "#f8fafc",
                borderRadius: 16,
              }}>
                <div>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 6,
                    marginBottom: 4,
                  }}>
                    <BookOpen size={16} color={ins.color} />
                    <span style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 24,
                      fontWeight: 800,
                      color: "#0f172a",
                    }}>
                      {ins.courses}
                    </span>
                  </div>
                  <div style={{
                    fontSize: 11,
                    color: "#64748b",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}>
                    Courses
                  </div>
                </div>

                <div style={{
                  width: 1,
                  background: "#e2e8f0",
                }} />

                <div>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 6,
                    marginBottom: 4,
                  }}>
                    <Users size={16} color={ins.color} />
                    <span style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 24,
                      fontWeight: 800,
                      color: "#0f172a",
                    }}>
                      {ins.students}+
                    </span>
                  </div>
                  <div style={{
                    fontSize: 11,
                    color: "#64748b",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}>
                    Students
                  </div>
                </div>
              </div>

              {/* Social + CTA */}
              <div style={{
                display: "flex",
                gap: 8,
                justifyContent: "center",
              }}>
                {[Linkedin, Twitter, Mail].map((Icon, j) => (
                  <motion.button 
                    key={j}
                    whileHover={{ 
                      scale: 1.1, 
                      background: ins.color,
                      borderColor: ins.color,
                    }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      border: "2px solid #e2e8f0",
                      background: "#fff",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s",
                      color: "#64748b",
                    }}
                  >
                    <Icon size={18} strokeWidth={2} />
                  </motion.button>
                ))}
                
                <motion.button
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: `0 10px 30px ${ins.color}40` 
                  }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    flex: 1,
                    height: 44,
                    borderRadius: 12,
                    background: ins.color,
                    border: "none",
                    color: "#fff",
                    cursor: "pointer",
                    fontSize: 14,
                    fontWeight: 700,
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 6,
                    boxShadow: `0 4px 16px ${ins.color}30`,
                  }}
                >
                  Profile
                  <ArrowUpRight size={16} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
