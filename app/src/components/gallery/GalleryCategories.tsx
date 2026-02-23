"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { GraduationCap, Users, Award, Sparkles, Calendar, TrendingUp } from "lucide-react";

const categories = [
  { id: "all", label: "All Photos", icon: Sparkles },
  { id: "classes", label: "Classes", icon: GraduationCap },
  { id: "events", label: "Events", icon: Calendar },
  { id: "students", label: "Students", icon: Users },
  { id: "achievements", label: "Achievements", icon: Award },
  { id: "workshops", label: "Workshops", icon: TrendingUp },
];

export default function GalleryCategories() {
  const [active, setActive] = useState("all");

  return (
    <section style={{
      padding: "60px 48px 40px",
      background: "#fff",
      borderBottom: "1px solid #e2e8f0",
    }}>
      <div style={{
        maxWidth: 1320,
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: 12,
      }}>
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = active === cat.id;
          
          return (
            <motion.button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "12px 24px",
                borderRadius: 12,
                background: isActive ? "linear-gradient(135deg, #1a56db, #7c3aed)" : "#f8fafc",
                border: isActive ? "none" : "1px solid #e2e8f0",
                color: isActive ? "#fff" : "#64748b",
                cursor: "pointer",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 14,
                fontWeight: isActive ? 700 : 600,
                transition: "all 0.3s",
                boxShadow: isActive ? "0 4px 16px rgba(26,86,219,0.3)" : "none",
              }}
            >
              <Icon size={16} strokeWidth={2} />
              {cat.label}
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}
