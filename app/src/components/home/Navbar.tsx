"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

const courses = [
  { id: "crypto-trading", name: "Crypto Trading Guide", icon: "₿", color: "#1a56db", desc: "Master cryptocurrency trading" },
  { id: "korean-language", name: "Korean Language", icon: "한", color: "#0ea5e9", desc: "Learn Korean from scratch" },
  { id: "social-media-marketing", name: "Social Media Marketing", icon: "📱", color: "#0ea5e9", desc: "Build powerful campaigns" },
  { id: "graphic-design", name: "Graphic Design", icon: "🎨", color: "#7c3aed", desc: "Create stunning visuals" },
];

const navItems = [
  { name: "Home", path: "/" },
  { name: "Courses", path: "/courses", hasDropdown: true },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
        background: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(226,232,240,0.8)" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        boxShadow: scrolled ? "0 4px 24px rgba(10,15,30,0.06)" : "none",
      }}
    >
      <div style={{
        maxWidth: 1320, margin: "0 auto", padding: "0 48px",
        height: 72, display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 14, textDecoration: "none" }}>
          <div style={{
            width: 42, height: 42, borderRadius: 10,
            background: "linear-gradient(135deg, #1a56db 0%, #0ea5e9 100%)",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 4px 12px rgba(26,86,219,0.3)",
            flexShrink: 0,
          }}>
            <span style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 800, fontSize: 15, color: "#fff",
              letterSpacing: "-0.03em", lineHeight: 1,
            }}>SL</span>
          </div>
          <div>
            <div style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700, fontSize: 18,
              color: scrolled ? "#0a0f1e" : "#fff",
              lineHeight: 1.1, letterSpacing: "-0.01em",
              transition: "color 0.35s",
            }}>SkillLift</div>
            <div style={{
              fontSize: 9, fontWeight: 700, letterSpacing: "0.2em",
              color: scrolled ? "#1a56db" : "rgba(255,255,255,0.55)",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              transition: "color 0.35s",
            }}>EDUCATION</div>
          </div>
        </Link>

        <nav style={{ display: "flex", gap: 2 }}>
          {navItems.map((item) => (
            <div
              key={item.path}
              style={{ position: "relative" }}
              onMouseEnter={() => item.hasDropdown && setShowDropdown(true)}
              onMouseLeave={() => item.hasDropdown && setShowDropdown(false)}
            >
              <Link href={item.path} style={{
                background: "none", border: "none", cursor: "pointer",
                padding: "8px 18px", borderRadius: 6,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 14, fontWeight: pathname === item.path || (item.hasDropdown && pathname.startsWith('/courses')) ? 600 : 500,
                color: scrolled
                  ? pathname === item.path || (item.hasDropdown && pathname.startsWith('/courses')) ? "#1a56db" : "#334155"
                  : pathname === item.path || (item.hasDropdown && pathname.startsWith('/courses')) ? "#fff" : "rgba(255,255,255,0.65)",
                transition: "all 0.2s",
                position: "relative",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 4,
              }}>
                {item.name}
                {item.hasDropdown && (
                  <ChevronDown 
                    size={14} 
                    style={{
                      transform: showDropdown ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.3s",
                    }}
                  />
                )}
                {(pathname === item.path || (item.hasDropdown && pathname.startsWith('/courses'))) && (
                  <span style={{
                    position: "absolute", bottom: 2, left: "50%",
                    transform: "translateX(-50%)", width: 16, height: 2,
                    background: scrolled ? "#1a56db" : "#fff",
                    borderRadius: 2, display: "block",
                  }} />
                )}
              </Link>

              {item.hasDropdown && showDropdown && (
                <div style={{
                  position: "absolute", top: "100%", left: "50%",
                  transform: "translateX(-50%)",
                  marginTop: 12,
                  background: "#fff",
                  borderRadius: 16,
                  padding: "12px",
                  boxShadow: "0 20px 60px rgba(10,15,30,0.2), 0 0 0 1px rgba(226,232,240,0.5)",
                  minWidth: 320,
                  zIndex: 1000,
                  animation: "dropdownFade 0.3s ease-out",
                }}>
                  <div style={{
                    position: "absolute",
                    top: -6,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 12,
                    height: 12,
                    background: "#fff",
                    borderRadius: 2,
                    rotate: "45deg",
                    boxShadow: "-2px -2px 4px rgba(10,15,30,0.05)",
                  }} />
                  
                  <div style={{
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#94a3b8",
                    padding: "8px 12px 12px",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}>Our Courses</div>

                  {courses.map((course, idx) => (
                    <Link
                      key={course.id}
                      href={`/courses/${course.id}`}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 14,
                        padding: "12px 14px",
                        borderRadius: 10,
                        textDecoration: "none",
                        transition: "all 0.25s cubic-bezier(0.4,0,0.2,1)",
                        background: pathname === `/courses/${course.id}` ? "#eff6ff" : "transparent",
                        border: "1px solid",
                        borderColor: pathname === `/courses/${course.id}` ? "rgba(26,86,219,0.15)" : "transparent",
                        marginBottom: idx < courses.length - 1 ? "6px" : "0",
                        position: "relative",
                        overflow: "hidden",
                      }}
                      onMouseEnter={(e) => {
                        if (pathname !== `/courses/${course.id}`) {
                          e.currentTarget.style.background = "#f8fafc";
                          e.currentTarget.style.borderColor = "#e2e8f0";
                          e.currentTarget.style.transform = "translateX(4px)";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (pathname !== `/courses/${course.id}`) {
                          e.currentTarget.style.background = "transparent";
                          e.currentTarget.style.borderColor = "transparent";
                          e.currentTarget.style.transform = "translateX(0)";
                        }
                      }}
                    >
                      <div style={{
                        width: 40,
                        height: 40,
                        borderRadius: 10,
                        background: `linear-gradient(135deg, ${course.color}15, ${course.color}08)`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 18,
                        flexShrink: 0,
                        border: `1px solid ${course.color}20`,
                      }}>
                        {course.icon}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{
                          fontSize: 13.5,
                          fontWeight: pathname === `/courses/${course.id}` ? 600 : 500,
                          color: pathname === `/courses/${course.id}` ? "#1a56db" : "#0a0f1e",
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          marginBottom: 2,
                          lineHeight: 1.3,
                        }}>
                          {course.name}
                        </div>
                        <div style={{
                          fontSize: 11,
                          color: "#94a3b8",
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          lineHeight: 1.4,
                        }}>
                          {course.desc}
                        </div>
                      </div>
                      {pathname === `/courses/${course.id}` && (
                        <div style={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          background: course.color,
                          flexShrink: 0,
                        }} />
                      )}
                    </Link>
                  ))}

                  <Link
                    href="/courses"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 6,
                      padding: "10px 14px",
                      marginTop: 8,
                      borderRadius: 10,
                      textDecoration: "none",
                      background: "linear-gradient(135deg, #1a56db, #0ea5e9)",
                      color: "#fff",
                      fontSize: 12,
                      fontWeight: 600,
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      transition: "all 0.2s",
                      boxShadow: "0 4px 12px rgba(26,86,219,0.25)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow = "0 8px 20px rgba(26,86,219,0.35)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 4px 12px rgba(26,86,219,0.25)";
                    }}
                  >
                    View All Courses
                    <ArrowRight size={12} />
                  </Link>
                </div>
              )}
            </div>
          ))}
        </nav>

        <button className="btn-primary" style={{ padding: "10px 24px", fontSize: 13 }}>
          Enroll Now <ArrowRight size={14} />
        </button>
      </div>

      <style jsx>{`
        @keyframes dropdownFade {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }
      `}</style>
    </header>
  );
}