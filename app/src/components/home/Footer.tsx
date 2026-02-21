"use client";
import { MapPin, Phone, Mail, Linkedin, Instagram, Youtube } from "lucide-react";

const usefulLinks = ["Home", "About Us", "Courses", "Instructors", "Contact Us", "Privacy Policy"];
const resources = ["Student Support", "Video Tutorials", "Terms & Conditions", "FAQ", "Security Policy"];

export default function Footer() {
  return (
    <footer style={{ background: "#060d1a", padding: "80px 48px 0" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        {/* Main grid */}
        <div style={{ display: "grid", gridTemplateColumns: "2.2fr 1fr 1fr 1.5fr", gap: 64, paddingBottom: 64, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>

          {/* Brand column */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
              <div style={{
                width: 40, height: 40, borderRadius: 10,
                background: "linear-gradient(135deg, #1a56db, #0ea5e9)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M3 15L10 4L17 15" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 11H14" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 18, color: "#fff" }}>SkillLift</div>
                <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.2em", color: "rgba(255,255,255,0.3)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>EDUCATION</div>
              </div>
            </div>

            <p style={{ fontSize: 13.5, lineHeight: 1.85, color: "rgba(255,255,255,0.35)", maxWidth: 280, marginBottom: 28, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              A globally recognized institution delivering career-focused, practical education across New Zealand and Sri Lanka.
            </p>

            <div style={{ display: "flex", gap: 10 }}>
              {[Linkedin, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" style={{
                  width: 36, height: 36, borderRadius: 8,
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "rgba(255,255,255,0.4)", textDecoration: "none",
                  transition: "all 0.2s",
                }}
                  onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "#1a56db"; el.style.borderColor = "#1a56db"; el.style.color = "#fff"; }}
                  onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(255,255,255,0.05)"; el.style.borderColor = "rgba(255,255,255,0.08)"; el.style.color = "rgba(255,255,255,0.4)"; }}
                >
                  <Icon size={14} strokeWidth={1.75} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {[
            { title: "Navigation", items: usefulLinks },
            { title: "Resources", items: resources },
          ].map((col) => (
            <div key={col.title}>
              <h4 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#fff", fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 24 }}>
                {col.title}
              </h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
                {col.items.map((item) => (
                  <li key={item}>
                    <a href="#" style={{
                      fontSize: 13.5, color: "rgba(255,255,255,0.38)",
                      textDecoration: "none", fontFamily: "'Plus Jakarta Sans', sans-serif",
                      transition: "color 0.2s",
                    }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.9)")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.38)")}
                    >{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#fff", fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 24 }}>
              Contact
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {/* SL */}
              <div style={{ marginBottom: 24, paddingBottom: 24, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.16em", color: "#0ea5e9", marginBottom: 12, textTransform: "uppercase" }}>Sri Lanka</div>
                {[
                  { Icon: MapPin, text: "309, Galle Road, Panadura" },
                  { Icon: Phone, text: "+94 713 680 690" },
                  { Icon: Mail, text: "info@skilllift.lk" },
                ].map(({ Icon, text }) => (
                  <div key={text} style={{ display: "flex", gap: 10, marginBottom: 10, alignItems: "flex-start" }}>
                    <Icon size={13} color="rgba(255,255,255,0.25)" style={{ marginTop: 1, flexShrink: 0 }} />
                    <span style={{ fontSize: 13, color: "rgba(255,255,255,0.38)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{text}</span>
                  </div>
                ))}
              </div>
              {/* NZ */}
              <div>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.16em", color: "#0ea5e9", marginBottom: 12, textTransform: "uppercase" }}>New Zealand</div>
                {[
                  { Icon: MapPin, text: "Mount Albert, Auckland" },
                  { Icon: Phone, text: "+64 20 454 8250" },
                ].map(({ Icon, text }) => (
                  <div key={text} style={{ display: "flex", gap: 10, marginBottom: 10, alignItems: "flex-start" }}>
                    <Icon size={13} color="rgba(255,255,255,0.25)" style={{ marginTop: 1, flexShrink: 0 }} />
                    <span style={{ fontSize: 13, color: "rgba(255,255,255,0.38)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          padding: "24px 0",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: 12,
        }}>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.25)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            © 2025 SkillLift Education Ltd. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: 24 }}>
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <a key={item} href="#" style={{
                fontSize: 12, color: "rgba(255,255,255,0.25)", textDecoration: "none",
                fontFamily: "'Plus Jakarta Sans', sans-serif", transition: "color 0.2s",
              }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.25)")}
              >{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}