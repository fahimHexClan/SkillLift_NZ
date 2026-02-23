"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight, ChevronDown, Menu, X,
  Globe, TrendingUp, Palette, BookOpen,
  Users, Phone, Info, Home, GraduationCap,
  Star, Zap, LogIn, UserPlus, Sparkles,
} from "lucide-react";
import { usePathname } from "next/navigation";

// ─────────────────────────────────────────────────────────
const COURSES = [
  {
    icon: TrendingUp,
    title: "Crypto Trading Guide",
    desc: "Master blockchain & live trading",
    price: "Rs. 28,000",
    level: "Advanced",
    students: "5,000+",
    href: "/courses/crypto-trading",
    color: "#1a56db",
    bg: "linear-gradient(135deg,#0d1b38,#1a3a6b)",
    letter: "C",
  },
  {
    icon: Globe,
    title: "Korean Language",
    desc: "Foundation to conversational fluency",
    price: "Rs. 15,000",
    level: "Beginner",
    students: "200+",
    href: "/courses/korean-language",
    color: "#0ea5e9",
    bg: "linear-gradient(135deg,#0c4a6e,#0369a1)",
    letter: "K",
  },
  {
    icon: TrendingUp,
    title: "Social Media Marketing",
    desc: "Digital campaigns & brand strategy",
    price: "Rs. 29,000",
    level: "Advanced",
    students: "150+",
    href: "/courses/social-media-marketing",
    color: "#0284c7",
    bg: "linear-gradient(135deg,#164e63,#0e7490)",
    letter: "S",
  },
  {
    icon: Palette,
    title: "Certificate in Graphic Design",
    desc: "Brand identity & visual mastery",
    price: "Rs. 15,000",
    level: "Advanced",
    students: "180+",
    href: "/courses/graphic-design",
    color: "#7c3aed",
    bg: "linear-gradient(135deg,#2e1065,#4c1d95)",
    letter: "G",
  },
];

const NAV_LINKS = [
  { label: "Home",     href: "/" },
  { label: "Courses",  href: "/courses", hasMega: true },
  { label: "About",    href: "/about" },
  { label: "Gallery",  href: "/gallery" },
  { label: "Contact",  href: "/contact" },
];

// ─────────────────────────────────────────────────────────
export default function Navbar() {
  const pathname = usePathname();
  const [scrolled,    setScrolled]    = useState(false);
  const [scrollY,     setScrollY]     = useState(0);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const [announcementVisible, setAnnouncementVisible] = useState(true);
  const [hoveredCourse, setHoveredCourse] = useState<number | null>(null);
  const megaRef   = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const fn = () => { setScrolled(window.scrollY > 60); setScrollY(window.scrollY); };
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) setCoursesOpen(false);
    };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  const isDark   = !scrolled;
  const textMain = isDark ? "#fff"                  : "#0a0f1e";
  const textMuted= isDark ? "rgba(255,255,255,0.62)" : "#64748b";
  const textHover= isDark ? "#fff"                  : "#1a56db";

  return (
    <>
      {/* ── ANNOUNCEMENT BAR ──────────────────────────── */}
      <AnimatePresence>
        {announcementVisible && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 40, opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            style={{
              background: "linear-gradient(90deg,#1a56db,#0ea5e9,#1a56db)",
              backgroundSize: "200% 100%",
              overflow: "hidden", position: "relative", zIndex: 1001,
            }}
          >
            <motion.div
              animate={{ backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              style={{
                height: "100%",
                background: "linear-gradient(90deg,#1a56db,#0ea5e9,#6d28d9,#0ea5e9,#1a56db)",
                backgroundSize: "300% 100%",
                display: "flex", alignItems: "center", justifyContent: "center", gap: 12,
              }}
            >
              <Sparkles size={13} color="rgba(255,255,255,0.9)" />
              <span style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 12.5, fontWeight: 600, color: "#fff",
                letterSpacing: "0.04em",
              }}>
                🎓 New Batch Starting Soon — Enroll now & get early access!
              </span>
              <Link href="/courses" style={{ textDecoration: "none" }}>
                <span style={{
                  fontSize: 11, fontWeight: 700, color: "#fff",
                  background: "rgba(255,255,255,0.2)", border: "1px solid rgba(255,255,255,0.35)",
                  padding: "2px 10px", borderRadius: 20, cursor: "pointer",
                  fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: "0.06em",
                }}>View →</span>
              </Link>
              <button
                onClick={() => setAnnouncementVisible(false)}
                style={{
                  position: "absolute", right: 20, background: "none",
                  border: "none", cursor: "pointer", color: "rgba(255,255,255,0.7)",
                  display: "flex", alignItems: "center",
                }}
              >
                <X size={14} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── MAIN HEADER ───────────────────────────────── */}
      <motion.header
        style={{
          position: "fixed",
          top: announcementVisible ? 40 : 0,
          left: 0, right: 0, zIndex: 1000,
          transition: "top 0.35s",
        }}
      >
        {/* Floating pill wrapper (activates on scroll) */}
        <motion.div
          animate={scrolled ? {
            margin: "12px auto 0",
            maxWidth: 1100,
            borderRadius: 20,
            background: "rgba(255,255,255,0.97)",
            boxShadow: "0 8px 40px rgba(10,15,30,0.12), 0 2px 8px rgba(10,15,30,0.06)",
            border: "1px solid rgba(226,232,240,0.9)",
            backdropFilter: "blur(32px)",
          } : {
            margin: "0 auto",
            maxWidth: "100%",
            borderRadius: 0,
            background: "rgba(10,15,30,0.08)",
            boxShadow: "none",
            border: "1px solid rgba(255,255,255,0.07)",
            backdropFilter: "blur(20px)",
          }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          style={{ overflow: "visible" }}
        >
          <div style={{
            maxWidth: scrolled ? "100%" : 1320,
            margin: "0 auto",
            padding: scrolled ? "0 32px" : "0 48px",
            height: scrolled ? 64 : 72,
            display: "flex", alignItems: "center", justifyContent: "space-between",
            transition: "height 0.35s, padding 0.35s",
          }}>

            {/* ── LOGO ── */}
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none", flexShrink: 0 }}>
              <motion.div
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                style={{
                  width: scrolled ? 38 : 42, height: scrolled ? 38 : 42,
                  flexShrink: 0,
                  transition: "width 0.35s, height 0.35s",
                }}
              >
                <img 
                  src="/images/Logo/skilllift-logo.png" 
                  alt="SkillLift Logo" 
                  style={{ width: "100%", height: "100%", objectFit: "contain" }}
                />
              </motion.div>
              <div>
                <div style={{
                  fontFamily: "'Playfair Display',serif", fontWeight: 700,
                  fontSize: scrolled ? 16 : 18, color: textMain,
                  lineHeight: 1.1, letterSpacing: "-0.015em",
                  transition: "color 0.35s, font-size 0.35s",
                }}>SkillLift</div>
                <div style={{
                  fontSize: 8, fontWeight: 700, letterSpacing: "0.24em",
                  color: scrolled ? "#1a56db" : "rgba(255,255,255,0.42)",
                  fontFamily: "'Plus Jakarta Sans',sans-serif",
                  transition: "color 0.35s", textTransform: "uppercase",
                }}>Education</div>
              </div>
            </Link>

            {/* ── DESKTOP NAV ── */}
            <nav style={{ display: "flex", alignItems: "center", gap: 0 }} className="desktop-nav">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href.split("#")[0]));

                if (link.hasMega) {
                  return (
                    <div
                      key={link.label}
                      ref={megaRef}
                      style={{ position: "relative" }}
                      onMouseEnter={() => { clearTimeout(closeTimer.current); setCoursesOpen(true); }}
                      onMouseLeave={() => { closeTimer.current = setTimeout(() => setCoursesOpen(false), 200); }}
                    >
                      <motion.button
                        onClick={() => setCoursesOpen(o => !o)}
                        whileHover={{ color: textHover }}
                        style={{
                          display: "flex", alignItems: "center", gap: 5,
                          background: "none", border: "none", cursor: "pointer",
                          padding: "9px 16px", borderRadius: 8,
                          fontFamily: "'Plus Jakarta Sans',sans-serif",
                          fontSize: 13.5, fontWeight: isActive || coursesOpen ? 700 : 500,
                          color: isActive || coursesOpen ? (scrolled ? "#1a56db" : "#fff") : textMuted,
                          transition: "color 0.2s",
                          position: "relative",
                        }}
                      >
                        {link.label}
                        <motion.span animate={{ rotate: coursesOpen ? 180 : 0 }} transition={{ duration: 0.22 }} style={{ display: "flex" }}>
                          <ChevronDown size={13} strokeWidth={2.5} />
                        </motion.span>
                        {(isActive || coursesOpen) && (
                          <motion.span layoutId="nav-pill" style={{
                            position: "absolute", bottom: 2, left: "50%", transform: "translateX(-50%)",
                            width: 20, height: 2.5, borderRadius: 2,
                            background: scrolled ? "#1a56db" : "#fff",
                          }} />
                        )}
                      </motion.button>

                      {/* ── MEGA MENU ── */}
                      <AnimatePresence>
                        {coursesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 16, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.97, transition: { duration: 0.15 } }}
                            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                            style={{
                              position: "absolute", top: "calc(100% + 16px)",
                              left: "50%", transform: "translateX(-50%)",
                              width: 720, background: "#fff",
                              borderRadius: 24, border: "1px solid #e2e8f0",
                              boxShadow: "0 32px 80px rgba(10,15,30,0.18), 0 8px 24px rgba(10,15,30,0.08)",
                              overflow: "hidden", zIndex: 200,
                            }}
                          >
                            {/* Arrow pointer */}
                            <div style={{
                              position: "absolute", top: -6, left: "50%", transform: "translateX(-50%)",
                              width: 12, height: 12, background: "#fff",
                              border: "1px solid #e2e8f0", rotate: "45deg",
                              borderBottom: "none", borderRight: "none",
                            }} />

                            {/* Header */}
                            <div style={{ padding: "22px 24px 16px", borderBottom: "1px solid #f1f5f9", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                              <div>
                                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 16, fontWeight: 700, color: "#0a0f1e" }}>Our Programs</div>
                                <div style={{ fontSize: 12, color: "#94a3b8", fontFamily: "'Plus Jakarta Sans',sans-serif", marginTop: 2 }}>4 career-focused courses available</div>
                              </div>
                              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                                {[1,2,3,4,5].map(i => <Star key={i} size={11} fill="#f59e0b" color="#f59e0b" />)}
                                <span style={{ fontSize: 11.5, color: "#64748b", fontFamily: "'Plus Jakarta Sans',sans-serif" }}>5.0 · 2,000+ students</span>
                              </div>
                            </div>

                            {/* Course grid */}
                            <div style={{ padding: "16px 20px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                              {COURSES.map((c, i) => {
                                const Icon = c.icon;
                                const isHov = hoveredCourse === i;
                                return (
                                  <Link key={c.href} href={c.href} style={{ textDecoration: "none" }} onClick={() => setCoursesOpen(false)}>
                                    <motion.div
                                      onMouseEnter={() => setHoveredCourse(i)}
                                      onMouseLeave={() => setHoveredCourse(null)}
                                      animate={{ background: isHov ? "#f8fafc" : "#fff" }}
                                      style={{
                                        display: "flex", gap: 14, padding: "14px",
                                        borderRadius: 14,
                                        border: isHov ? `1px solid ${c.color}30` : "1px solid transparent",
                                        cursor: "pointer", transition: "border 0.2s",
                                      }}
                                    >
                                      {/* Mini thumbnail */}
                                      <div style={{
                                        width: 48, height: 48, borderRadius: 12,
                                        background: c.bg,
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        flexShrink: 0, overflow: "hidden",
                                        boxShadow: `0 4px 12px ${c.color}30`,
                                      }}>
                                        <span style={{ fontFamily: "'Playfair Display',serif", fontSize: 20, fontWeight: 800, color: "rgba(255,255,255,0.9)" }}>{c.letter}</span>
                                      </div>

                                      <div style={{ flex: 1, minWidth: 0 }}>
                                        <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 13.5, fontWeight: 700, color: "#0a0f1e", marginBottom: 3, lineHeight: 1.25 }}>{c.title}</div>
                                        <div style={{ fontSize: 11.5, color: "#64748b", fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: 7, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{c.desc}</div>
                                        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                                          <span style={{ fontSize: 11, fontWeight: 700, color: c.color, fontFamily: "'Plus Jakarta Sans',sans-serif" }}>{c.price}</span>
                                          <span style={{ fontSize: 10, color: "#94a3b8", background: "#f1f5f9", padding: "1px 7px", borderRadius: 4, fontFamily: "'Plus Jakarta Sans',sans-serif" }}>{c.level}</span>
                                          <span style={{ fontSize: 10, color: "#94a3b8", fontFamily: "'Plus Jakarta Sans',sans-serif", marginLeft: "auto" }}>👥 {c.students}</span>
                                        </div>
                                      </div>

                                      {/* Hover arrow */}
                                      <motion.div
                                        animate={{ opacity: isHov ? 1 : 0, x: isHov ? 0 : -4 }}
                                        style={{ flexShrink: 0, display: "flex", alignItems: "center" }}
                                      >
                                        <ArrowRight size={14} color={c.color} />
                                      </motion.div>
                                    </motion.div>
                                  </Link>
                                );
                              })}
                            </div>

                            {/* Footer row */}
                            <div style={{
                              padding: "14px 24px", background: "linear-gradient(to right, #f8fafc, #eff6ff)",
                              borderTop: "1px solid #f1f5f9",
                              display: "flex", justifyContent: "space-between", alignItems: "center",
                            }}>
                              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                <Zap size={13} color="#f59e0b" />
                                <span style={{ fontSize: 12, color: "#64748b", fontFamily: "'Plus Jakarta Sans',sans-serif" }}>New batch starting soon</span>
                              </div>
                              <Link href="/courses" style={{ textDecoration: "none" }} onClick={() => setCoursesOpen(false)}>
                                <motion.div
                                  whileHover={{ x: 3 }}
                                  style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12.5, fontWeight: 700, color: "#1a56db", fontFamily: "'Plus Jakarta Sans',sans-serif", cursor: "pointer" }}
                                >
                                  Browse all courses <ArrowRight size={13} />
                                </motion.div>
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link key={link.label} href={link.href} style={{ textDecoration: "none" }}>
                    <motion.div
                      whileHover={{ color: textHover }}
                      style={{
                        padding: "9px 16px", borderRadius: 8, cursor: "pointer",
                        fontFamily: "'Plus Jakarta Sans',sans-serif",
                        fontSize: 13.5, fontWeight: isActive ? 700 : 500,
                        color: isActive ? (scrolled ? "#1a56db" : "#fff") : textMuted,
                        position: "relative", transition: "color 0.2s",
                      }}
                    >
                      {link.label}
                      {isActive && (
                        <motion.span layoutId="nav-pill" style={{
                          position: "absolute", bottom: 2, left: "50%", transform: "translateX(-50%)",
                          width: 20, height: 2.5, borderRadius: 2,
                          background: scrolled ? "#1a56db" : "#fff",
                        }} />
                      )}
                    </motion.div>
                  </Link>
                );
              })}
            </nav>

            {/* ── RIGHT ACTIONS ── */}
            <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>

              {/* Phone (only when scrolled) */}
              <AnimatePresence>
                {scrolled && (
                  <motion.a
                    href="tel:+94713680690"
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
                    style={{
                      display: "flex", alignItems: "center", gap: 6,
                      textDecoration: "none", overflow: "hidden",
                    }}
                  >
                    <div style={{ width: 30, height: 30, borderRadius: 8, background: "#eff6ff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Phone size={13} color="#1a56db" />
                    </div>
                    <div style={{ whiteSpace: "nowrap" }}>
                      <div style={{ fontSize: 9, color: "#94a3b8", fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 600, letterSpacing: "0.08em" }}>CALL US</div>
                      <div style={{ fontSize: 12, fontWeight: 700, color: "#0a0f1e", fontFamily: "'Plus Jakarta Sans',sans-serif" }}>+94 713 680 690</div>
                    </div>
                  </motion.a>
                )}
              </AnimatePresence>

              {/* Divider */}
              <div style={{ width: 1, height: 24, background: scrolled ? "#e2e8f0" : "rgba(255,255,255,0.15)" }} />

              {/* Login */}
              <Link href="/login" style={{ textDecoration: "none" }}>
                <motion.button
                  whileHover={{ background: scrolled ? "#f1f5f9" : "rgba(255,255,255,0.14)" }}
                  style={{
                    display: "flex", alignItems: "center", gap: 7,
                    background: "transparent",
                    border: `1px solid ${scrolled ? "#e2e8f0" : "rgba(255,255,255,0.2)"}`,
                    color: scrolled ? "#334155" : "rgba(255,255,255,0.82)",
                    padding: "8px 16px", borderRadius: 9, cursor: "pointer",
                    fontFamily: "'Plus Jakarta Sans',sans-serif",
                    fontSize: 13, fontWeight: 600, transition: "all 0.2s",
                  }}
                >
                  <LogIn size={13} strokeWidth={2} />
                  Login
                </motion.button>
              </Link>

              {/* Enroll CTA */}
              <Link href="/courses" style={{ textDecoration: "none" }}>
                <motion.button
                  whileHover={{ scale: 1.04, boxShadow: "0 10px 28px rgba(26,86,219,0.4)" }}
                  whileTap={{ scale: 0.96 }}
                  style={{
                    display: "flex", alignItems: "center", gap: 7,
                    background: "linear-gradient(135deg,#1a56db,#0ea5e9)",
                    color: "#fff", border: "none", cursor: "pointer",
                    padding: "9px 22px", borderRadius: 9,
                    fontFamily: "'Plus Jakarta Sans',sans-serif",
                    fontSize: 13, fontWeight: 700,
                    boxShadow: "0 4px 16px rgba(26,86,219,0.35)",
                    position: "relative", overflow: "hidden",
                  }}
                >
                  {/* Shine sweep */}
                  <motion.div
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
                    style={{
                      position: "absolute", top: 0, left: 0, bottom: 0,
                      width: "40%",
                      background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.18),transparent)",
                      pointerEvents: "none",
                    }}
                  />
                  Enroll Now <ArrowRight size={14} />
                </motion.button>
              </Link>

              {/* Mobile hamburger */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileOpen(o => !o)}
                className="mobile-menu-btn"
                style={{
                  display: "none",
                  width: 40, height: 40, borderRadius: 10,
                  background: scrolled ? "#f1f5f9" : "rgba(255,255,255,0.1)",
                  border: `1px solid ${scrolled ? "#e2e8f0" : "rgba(255,255,255,0.15)"}`,
                  cursor: "pointer", alignItems: "center", justifyContent: "center",
                  color: scrolled ? "#0a0f1e" : "#fff",
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div key={mobileOpen ? "close" : "menu"} initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    {mobileOpen ? <X size={17} /> : <Menu size={17} />}
                  </motion.div>
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.header>

      {/* ── MOBILE DRAWER ──────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              style={{ position: "fixed", inset: 0, background: "rgba(10,15,30,0.55)", zIndex: 998, backdropFilter: "blur(6px)" }}
            />
            <motion.div
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{
                position: "fixed", top: 0, right: 0, bottom: 0, width: 340,
                background: "#fff", zIndex: 999, display: "flex", flexDirection: "column",
                boxShadow: "-20px 0 60px rgba(10,15,30,0.22)",
              }}
            >
              {/* Header */}
              <div style={{ padding: "22px 22px 18px", borderBottom: "1px solid #f1f5f9", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
                  <div style={{ width: 38, height: 38, flexShrink: 0 }}>
                    <img 
                      src="/images/Logo/skilllift-logo.png" 
                      alt="SkillLift Logo" 
                      style={{ width: "100%", height: "100%", objectFit: "contain" }}
                    />
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 16, fontWeight: 700, color: "#0a0f1e" }}>SkillLift</div>
                    <div style={{ fontSize: 8.5, fontWeight: 700, letterSpacing: "0.2em", color: "#1a56db", fontFamily: "'Plus Jakarta Sans',sans-serif" }}>EDUCATION</div>
                  </div>
                </div>
                <button onClick={() => setMobileOpen(false)} style={{ width: 36, height: 36, borderRadius: 9, background: "#f8fafc", border: "1px solid #e2e8f0", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <X size={15} color="#64748b" />
                </button>
              </div>

              {/* Nav links */}
              <div style={{ flex: 1, overflowY: "auto", padding: "14px" }}>
                {[
                  { icon: Home, label: "Home", href: "/" },
                  { icon: Info, label: "About", href: "/about" },
                  { icon: BookOpen, label: "Gallery", href: "/gallery" },
                  { icon: Phone, label: "Contact", href: "/contact" },
                ].map(link => {
                  const Icon = link.icon;
                  return (
                    <Link key={link.href} href={link.href} style={{ textDecoration: "none" }} onClick={() => setMobileOpen(false)}>
                      <motion.div whileHover={{ background: "#f8fafc", x: 3 }} style={{ display: "flex", alignItems: "center", gap: 14, padding: "12px 14px", borderRadius: 12, marginBottom: 3 }}>
                        <div style={{ width: 38, height: 38, borderRadius: 10, background: "#eff6ff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <Icon size={16} color="#1a56db" strokeWidth={1.75} />
                        </div>
                        <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 14, fontWeight: 600, color: "#334155" }}>{link.label}</span>
                      </motion.div>
                    </Link>
                  );
                })}

                {/* Mobile courses accordion */}
                <button onClick={() => setMobileCoursesOpen(o => !o)} style={{ width: "100%", display: "flex", alignItems: "center", gap: 14, padding: "12px 14px", borderRadius: 12, background: "none", border: "none", cursor: "pointer", marginBottom: 3 }}>
                  <div style={{ width: 38, height: 38, borderRadius: 10, background: "#eff6ff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <GraduationCap size={16} color="#1a56db" strokeWidth={1.75} />
                  </div>
                  <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 14, fontWeight: 600, color: "#334155", flex: 1, textAlign: "left" }}>Courses</span>
                  <motion.div animate={{ rotate: mobileCoursesOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown size={14} color="#94a3b8" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {mobileCoursesOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} style={{ overflow: "hidden", paddingLeft: 12, paddingBottom: 6 }}>
                      {COURSES.map(c => (
                        <Link key={c.href} href={c.href} style={{ textDecoration: "none" }} onClick={() => setMobileOpen(false)}>
                          <div style={{ display: "flex", gap: 12, padding: "11px 12px", borderRadius: 10, marginBottom: 5, background: "#fafafa", border: "1px solid #f1f5f9" }}>
                            <div style={{ width: 36, height: 36, borderRadius: 9, background: c.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                              <span style={{ fontFamily: "'Playfair Display',serif", fontSize: 14, fontWeight: 800, color: "rgba(255,255,255,0.9)" }}>{c.letter}</span>
                            </div>
                            <div>
                              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 13, fontWeight: 700, color: "#0a0f1e", marginBottom: 2 }}>{c.title}</div>
                              <div style={{ display: "flex", gap: 8 }}>
                                <span style={{ fontSize: 11, fontWeight: 700, color: c.color, fontFamily: "'Plus Jakarta Sans',sans-serif" }}>{c.price}</span>
                                <span style={{ fontSize: 10, color: "#94a3b8", fontFamily: "'Plus Jakarta Sans',sans-serif" }}>{c.level}</span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Contact info */}
                <div style={{ margin: "16px 4px 0", padding: "16px", background: "#f8fafc", borderRadius: 14, border: "1px solid #f1f5f9" }}>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", color: "#94a3b8", textTransform: "uppercase", fontFamily: "'Plus Jakarta Sans',sans-serif", marginBottom: 10 }}>Contact</div>
                  <a href="tel:+94713680690" style={{ display: "flex", gap: 10, textDecoration: "none", marginBottom: 8, alignItems: "center" }}>
                    <Phone size={13} color="#1a56db" />
                    <span style={{ fontSize: 13, fontWeight: 600, color: "#334155", fontFamily: "'Plus Jakarta Sans',sans-serif" }}>+94 713 680 690</span>
                  </a>
                  <a href="tel:+6420454825" style={{ display: "flex", gap: 10, textDecoration: "none", alignItems: "center" }}>
                    <Phone size={13} color="#0ea5e9" />
                    <span style={{ fontSize: 13, fontWeight: 600, color: "#334155", fontFamily: "'Plus Jakarta Sans',sans-serif" }}>+64 20 454 8250</span>
                  </a>
                </div>
              </div>

              {/* Footer */}
              <div style={{ padding: "16px 18px 28px", borderTop: "1px solid #f1f5f9", display: "flex", flexDirection: "column", gap: 10 }}>
                <Link href="/login" style={{ textDecoration: "none" }} onClick={() => setMobileOpen(false)}>
                  <button style={{ width: "100%", padding: "13px", borderRadius: 11, background: "#f8fafc", border: "1px solid #e2e8f0", cursor: "pointer", fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 14, fontWeight: 600, color: "#334155", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                    <LogIn size={15} color="#64748b" /> Login to Account
                  </button>
                </Link>
                <Link href="/courses" style={{ textDecoration: "none" }} onClick={() => setMobileOpen(false)}>
                  <button style={{ width: "100%", padding: "13px", borderRadius: 11, background: "linear-gradient(135deg,#1a56db,#0ea5e9)", color: "#fff", border: "none", cursor: "pointer", fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 14, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, boxShadow: "0 4px 16px rgba(26,86,219,0.3)" }}>
                    Enroll Now <ArrowRight size={15} />
                  </button>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}