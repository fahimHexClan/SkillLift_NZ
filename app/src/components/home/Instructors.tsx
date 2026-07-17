"use client";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail, Award, Star } from "lucide-react";

const instructors = [
  {
    name: "Nadeesha Kawishka",
    role: "Lead Technology Instructor",
    specialty: "Full-Stack Development & Cloud Architecture",
    courses: 8, 
    students: 1240,
    rating: 4.9,
    image: "/images/instructor/1.png",
  },
  {
    name: "Achintha Madusanka",
    role: "Marketing Director",
    specialty: "Digital Marketing & Social Media Strategy",
    courses: 6, 
    students: 980,
    rating: 4.8,
    image: "/images/instructor/2.png",
  },
  {
    name: "Vishan Heleesha",
    role: "Senior Designer",
    specialty: "UI/UX Design & Brand Identity",
    courses: 5, 
    students: 850,
    rating: 4.9,
    image: "/images/instructor/3.png",
  },
  {
    name: "Sadupa Nayanajith",
    role: "Language Specialist",
    specialty: "Korean Language & TOPIK Preparation",
    courses: 4, 
    students: 670,
    rating: 5.0,
    image: "/images/instructor/4.png",
  },
];

export default function Instructors() {
  return (
    <section style={{ 
      padding: "100px 48px", 
      background: "#f0f7ff",
    }}>
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: 60 }}
        >
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "8px 20px",
            borderRadius: 100,
            background: "#ffffff",
            border: "1px solid #e2e8f0",
            marginBottom: 20,
          }}>
            <Award size={16} color="#2563eb" strokeWidth={2} />
            <span style={{
              fontSize: 13,
              fontWeight: 600,
              color: "#2563eb",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}>
              Expert Instructors
            </span>
          </div>

          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(32px, 4vw, 48px)",
            fontWeight: 700,
            color: "#0f172a",
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            marginBottom: 16,
          }}>
            Meet Our Instructors
          </h2>

          <p style={{
            fontSize: 17,
            color: "#64748b",
            lineHeight: 1.7,
            maxWidth: 640,
            margin: "0 auto",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}>
            Learn from industry professionals with years of experience and a passion for teaching
          </p>
        </motion.div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
          {instructors.map((ins, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(37,99,235,0.15)" }}
              style={{
                background: "#ffffff",
                borderRadius: 20,
                overflow: "hidden",
                boxShadow: "0 4px 20px rgba(15,23,42,0.08)",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                cursor: "pointer",
              }}
            >
              {/* Image Section */}
              <div style={{ 
                position: "relative", 
                height: 300,
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              }}>
                <img
                  src={ins.image}
                  alt={ins.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
                
                {/* Gradient Overlay */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(180deg, transparent 0%, rgba(15,23,42,0.7) 100%)",
                }} />

                {/* Rating Badge */}
                <div style={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  background: "#ffffff",
                  padding: "8px 16px",
                  borderRadius: 100,
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
                }}>
                  <Star size={14} fill="#f59e0b" color="#f59e0b" strokeWidth={0} />
                  <span style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#0f172a",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}>
                    {ins.rating}
                  </span>
                </div>

                {/* Name & Role Overlay */}
                <div style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "20px",
                }}>
                  <h3 style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 19,
                    fontWeight: 700,
                    color: "#ffffff",
                    marginBottom: 4,
                    lineHeight: 1.3,
                  }}>
                    {ins.name}
                  </h3>
                  <div style={{
                    fontSize: 13,
                    color: "#93c5fd",
                    fontWeight: 600,
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}>
                    {ins.role}
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div style={{ padding: "24px" }}>
                {/* Specialty */}
                <p style={{
                  fontSize: 13,
                  color: "#64748b",
                  lineHeight: 1.6,
                  marginBottom: 24,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  height: 40,
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}>
                  {ins.specialty}
                </p>

                {/* Stats */}
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  marginBottom: 24,
                  padding: "20px 0",
                  borderTop: "1px solid #f1f5f9",
                  borderBottom: "1px solid #f1f5f9",
                }}>
                  <div style={{ textAlign: "center" }}>
                    <div style={{
                      fontSize: 28,
                      fontWeight: 700,
                      color: "#2563eb",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      lineHeight: 1,
                      marginBottom: 6,
                    }}>
                      {ins.courses}
                    </div>
                    <div style={{
                      fontSize: 11,
                      color: "#94a3b8",
                      fontWeight: 600,
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}>
                      Courses
                    </div>
                  </div>

                  <div style={{ width: 1, height: 40, background: "#e2e8f0" }} />

                  <div style={{ textAlign: "center" }}>
                    <div style={{
                      fontSize: 28,
                      fontWeight: 700,
                      color: "#2563eb",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      lineHeight: 1,
                      marginBottom: 6,
                    }}>
                      {ins.students}+
                    </div>
                    <div style={{
                      fontSize: 11,
                      color: "#94a3b8",
                      fontWeight: 600,
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}>
                      Students
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div style={{ display: "flex", gap: 8 }}>
                  {[Linkedin, Twitter, Mail].map((Icon, j) => (
                    <motion.button
                      key={j}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        flex: 1,
                        height: 44,
                        borderRadius: 12,
                        border: "none",
                        background: "#f8fafc",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#64748b",
                        transition: "all 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.background = "#2563eb";
                        el.style.color = "#fff";
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.background = "#f8fafc";
                        el.style.color = "#64748b";
                      }}
                    >
                      <Icon size={18} strokeWidth={2} />
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
