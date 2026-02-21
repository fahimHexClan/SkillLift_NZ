"use client";
import { motion } from "framer-motion";
import { Linkedin, Twitter, ExternalLink } from "lucide-react";

const instructors = [
  {
    name: "Nadeesha Kawishka",
    role: "Lead Technology Instructor",
    specialty: "Full-Stack Development",
    courses: 3, students: 620,
    initials: "NK",
    color: "linear-gradient(135deg, #1e3a8a, #1a56db)",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Achintha Madusanka",
    role: "Marketing Director",
    specialty: "Digital & Social Media",
    courses: 2, students: 480,
    initials: "AM",
    color: "linear-gradient(135deg, #0c4a6e, #0369a1)",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Vishan Heleesha",
    role: "Senior Designer",
    specialty: "Brand & Visual Identity",
    courses: 2, students: 530,
    initials: "VH",
    color: "linear-gradient(135deg, #2e1065, #6d28d9)",
    img: "https://randomuser.me/api/portraits/men/58.jpg",
  },
  {
    name: "Sadupa Nayanajith",
    role: "Language Specialist",
    specialty: "Korean & Linguistics",
    courses: 2, students: 370,
    initials: "SN",
    color: "linear-gradient(135deg, #064e3b, #065f46)",
    img: "https://randomuser.me/api/portraits/men/71.jpg",
  },
];

export default function AboutInstructors() {
  return (
    <section style={{ padding: "100px 48px", background: "#f8fafc" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            display: "flex", justifyContent: "space-between",
            alignItems: "flex-end", marginBottom: 64, flexWrap: "wrap", gap: 20,
          }}
        >
          <div>
            <div className="eyebrow">Meet Our Instructors</div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(28px, 3.2vw, 44px)", fontWeight: 700,
              color: "#0a0f1e", lineHeight: 1.12, letterSpacing: "-0.022em",
            }}>
              Learn From Qualified &amp;{" "}
              <em style={{ fontStyle: "italic", color: "#1a56db" }}>Friendly Professionals</em>
            </h2>
          </div>
          <button style={{
            padding: "11px 28px", borderRadius: 8,
            background: "#0a0f1e", color: "#fff", border: "none",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 13, fontWeight: 600, cursor: "pointer",
            transition: "background 0.2s",
          }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#1a56db")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#0a0f1e")}
          >
            View All
          </button>
        </motion.div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }}>
          {instructors.map((ins, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.09, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5, boxShadow: "0 24px 56px rgba(10,15,30,0.12)" }}
              style={{
                background: "#fff", borderRadius: 20,
                border: "1px solid #e2e8f0",
                boxShadow: "0 4px 16px rgba(10,15,30,0.06)",
                overflow: "visible",
                transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
              }}
            >
              {/* Colored header */}
              <div style={{
                height: 110, background: ins.color,
                borderRadius: "20px 20px 0 0",
                position: "relative", overflow: "hidden",
              }}>
                {/* Dot pattern */}
                <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.08 }}>
                  <defs>
                    <pattern id={`iip-${i}`} width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="10" cy="10" r="0.8" fill="white"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill={`url(#iip-${i})`}/>
                </svg>
              </div>

              {/* Avatar */}
              <div style={{ padding: "0 24px" }}>
                <div style={{
                  width: 70, height: 70, borderRadius: "50%",
                  background: ins.color,
                  border: "3px solid #fff",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 21, fontWeight: 800, color: "#fff",
                  boxShadow: "0 6px 20px rgba(10,15,30,0.16)",
                  marginTop: -35, position: "relative", zIndex: 2,
                  overflow: "hidden",
                }}>
                  <img
                    src={ins.img}
                    alt={ins.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
              </div>

              {/* Body */}
              <div style={{ padding: "12px 24px 24px" }}>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 16, fontWeight: 700, color: "#0a0f1e",
                  marginBottom: 3, lineHeight: 1.3,
                }}>{ins.name}</h3>
                <div style={{ fontSize: 12, color: "#1a56db", fontWeight: 600, marginBottom: 2 }}>
                  {ins.role}
                </div>
                <div style={{ fontSize: 11, color: "#94a3b8", marginBottom: 16 }}>
                  {ins.specialty}
                </div>

                {/* Stats */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 16 }}>
                  {[
                    { val: ins.courses, label: "Courses" },
                    { val: `${ins.students}+`, label: "Students" },
                  ].map((m) => (
                    <div key={m.label} style={{
                      background: "#f8fafc", borderRadius: 10,
                      padding: "10px", textAlign: "center",
                      border: "1px solid #f1f5f9",
                    }}>
                      <div style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: 18, fontWeight: 700, color: "#0a0f1e",
                      }}>{m.val}</div>
                      <div style={{ fontSize: 10, color: "#94a3b8", fontWeight: 500 }}>{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Socials */}
                <div style={{ display: "flex", gap: 8 }}>
                  {[Linkedin, Twitter].map((Icon, j) => (
                    <button key={j} style={{
                      width: 32, height: 32, borderRadius: 8,
                      border: "1px solid #e2e8f0", background: "#fff",
                      cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#64748b", transition: "all 0.2s",
                    }}
                      onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "#0a0f1e"; el.style.borderColor = "#0a0f1e"; el.style.color = "#fff"; }}
                      onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "#fff"; el.style.borderColor = "#e2e8f0"; el.style.color = "#64748b"; }}
                    >
                      <Icon size={12} strokeWidth={2} />
                    </button>
                  ))}
                  <button style={{
                    marginLeft: "auto", width: 32, height: 32, borderRadius: 8,
                    background: "#0a0f1e", border: "1px solid #0a0f1e",
                    cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#fff", transition: "background 0.2s",
                  }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#1a56db")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#0a0f1e")}
                  >
                    <ExternalLink size={12} strokeWidth={2} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
