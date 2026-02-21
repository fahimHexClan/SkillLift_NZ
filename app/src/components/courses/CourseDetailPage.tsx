"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Clock, BookOpen, Users, Video, BarChart2, Globe,
  CheckCircle, ChevronRight, Star, Share2, Facebook,
  Twitter, Linkedin, Youtube, AlertTriangle, CreditCard,
  Monitor, MapPin, ArrowRight
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";

// ── Course data extracted from all screenshots ──────────────────────
const courseData: Record<string, any> = {
  "crypto-trading": {
    title: "Crypto Trading Guide",
    category: "Crypto Trading",
    instructor: "SkillLift Team",
    updated: "25 November, 2025",
    rating: "5.00",
    reviews: 21,
    price: "Rs. 28,000",
    language: "Sinhala",
    level: "Advanced",
    duration: "24 Hours",
    lessons: 20,
    students: 5000,
    videoHours: "100 Hours",
    img: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&q=80",
    accent: "#1a56db",
    overview: [
      "A cryptocurrency is a digital currency designed to work as a medium of exchange through a computer network that is not reliant on any central authority, such as a government or bank, to uphold or maintain it. It is a decentralised system for verifying that the parties to a transaction have the money they claim to have, eliminating the need for traditional intermediaries such as banks, when funds are being transferred between two entities.",
      "Individual ownership records are stored in a ledger, which is a computerised database using strong cryptography to secure transaction records, control the creation of additional coins, and verify the transfer of coin ownership. Despite their name, cryptocurrencies are not considered to be currencies in the traditional sense, and while varying treatments have been applied to them, including classification as commodities, securities, and currencies, cryptocurrencies are generally viewed as a distinct asset class in practise.",
    ],
    overviewSubtitle: "What is Crypto Currency Trading?",
    overviewSub: "Cryptocurrency trading is the act of speculating on cryptocurrency price movements via a CFD trading account or buying and selling the underlying coins via an exchange. The aspects of Spot & Future will be mainly focused on Trading. The main intention of trading is to develop our equity systematically by managing the risk and profiting accordingly.",
    content: [
      "History of money", "Difference between fiat and crypto", "Opportunities of Cryptocurrency",
      "Blockchain technology", "Crypto mining", "Understanding platforms", "Risk awareness",
      "Wallet creation", "Binance introduction", "Coin analysis", "On-chain analysis",
      "Tokenomics", "Long term investing", "TradingView full guide",
      "Market structure & trend identification", "Support & resistance", "Candlestick patterns",
      "Chart patterns", "Breakout takeout", "Fibonacci", "Fib retracement",
      "Fib extension", "Fib based strategies", "Essential indicators & strategies",
      "Moving averages (MA, EMA)", "RSI, MACD, stochastic RSI, bollinger band(BB)",
      "Pivot point (PP), super trend, etc.", "Smart money concept (SMC)", "Paper trading",
      "Live trading", "Trading plan", "Trading psychology", "Spot trading", "Future trading",
    ],
    qualifications: {
      admission: [
        "The age limit should be between 18 – 45 years. If the student is under 18, require a parental permission letter",
        "Over 45 years old personnel are able to join with special approval of the ITF department",
        "Basic computer knowledge, internet knowledge, and basic English knowledge are mandatory",
        "A computer (laptop, desktop, or tablet) or a smartphone (finance compatible) with an internet connection",
        "A valid NIC, driving license or passport is a necessity",
        "Must have a bank account",
      ],
      eligible: [
        "Those who are interested in the crypto currency & blockchain field",
        "Those who expect to start an online business",
        "Those who aspire to earn in dollars",
        "Part-time income source seekers",
        "Who envisions beginning a global online business",
      ],
    },
    fees: {
      onlineDuration: "20 Sessions +3 Special Modules",
      offlineDuration: "3 Sessions +3 Special Modules",
      offlineModules: ["Module 1: SK system", "Module 2: Special revision", "Module 3: Market update"],
      options: [
        {
          label: "Option 1 — Full Payment",
          amount: "Rs. 28,000/=",
          online: "20 Sessions +3 Special Modules",
          offline: "11 Sessions +3 Special Modules",
        },
        {
          label: "Option 2 — Half Payment",
          amount: "Rs. 18,000/=",
          online: "8 Sessions",
          offline: "5 Sessions",
        },
        {
          label: "Option 2 — Balance Payment",
          amount: "Rs. 10,000/=",
          online: "12 Sessions +3 Special Modules",
          offline: "6 Sessions +3 Special Modules",
        },
      ],
      bankDetails: {
        account: "SkillLift Education (Pvt) Ltd.",
        number: "2000773564",
        bank: "Commercial Bank PLC",
        branch: "189-Panadura Second Branch",
      },
      notes: [
        "Payments made to the personal accounts of the course consultant officers are never approved by the institute and no responsibility is taken in this regard.",
        "If you pay the entire course fee in cash to our Talawatugoda or Wekada branches, you will get a discount of Rs.1000",
        "It is mandatory to use a card with OTP access when making card payments.",
        "If the transaction fails, use another card with OTP access.",
        "Institution will give you one year of service for this course which valid for one year from the first day of payment for the course.",
        "Please refer and follow below mentioned process to do payments.",
        "Click the link to login to your SkillLift profile & for payment process: https://portal.skillfit.lk",
        "Kindly note that payments are non-refundable (Terms & Conditions)",
      ],
      howToPay: [
        "Log to your profile by entering correct user name & password",
        "Click Pay by Online",
        "Select Right information",
        "Buy Course",
        "Enter Correct Card Details",
        "Pay",
      ],
    },
    conditions: {
      riskNotice: "The Financial Disclaimer Institute is not a financial advisor and does not provide any financial advice. There is a higher degree of risk involved in trading & investing, especially in cryptocurrencies. Past results are not indicative of future returns, and all individuals affiliated with these videos, content, recommendations & courses assume no responsibility for the course follower's trading and investment results.",
      courseConditions: [
        "The course is both online & offline engagement",
        "The institution's services are not your right. SkillLift is not responsible for any loss or damage caused due to services or trading.",
        "The institution will not accept any responsibility related to the risks and losses incurred in the transactions by you in any way.",
        "SkillLift will not be responsible for the risks faced by transactions beyond the security measures provided by the institution.",
        "SkillLift does not act as USDT buyers or sellers in P2P or any other financial non-financial platforms.",
        "The institution is not responsible for the problems occur to users' finance and other accounts due to the periodic changes (policy changes, rules & regulations, and updates).",
        "The institution provides for-free revisions & knowledge-sharing sessions for one year after you make the first payment.",
        "After the full payment, the students are added to the Market opportunity group, news update group, the SkillLift family chat group in Telegram and Facebook closed group.",
      ],
    },
  },
  "korean-language": {
    title: "Korean Language Foundation Course",
    category: "Language Learning",
    instructor: "Ishara Lakmali",
    updated: "25 November, 2025",
    rating: "5.00",
    reviews: 21,
    price: "Rs. 15,000",
    language: "Korean",
    level: "Advanced",
    duration: "200 Hours",
    lessons: 25,
    students: 200,
    videoHours: "100 Hours",
    img: "https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?w=800&q=80",
    accent: "#0ea5e9",
    overview: [
      "Korean, spoken by around 80 million people as their primary language, holds increasing significance due to its expanding economy, cultural influence, and technological advancements in South Korea. The country ranks among the world's top 15 economies and is the sixth-largest exporter as of 2022, with extensive international ties and investments reaching major nations. SkillLift conducts Korean Language Course using online and offline technology with an expert panel of lecturers.",
    ],
    content: ["Hangul basics", "Greetings & introductions", "Numbers & counting", "Colors & shapes", "Food vocabulary", "Family terms", "Daily routines", "Transportation", "Shopping phrases", "K-Drama vocabulary", "Formal vs informal speech", "Reading comprehension", "Writing practice"],
    qualifications: { admission: ["Open to all ages", "No prior Korean knowledge required", "Smartphone or computer required"], eligible: ["K-Pop & K-Drama fans", "Business travelers to Korea", "Those seeking language credentials", "Academic applicants"] },
    fees: { options: [{ label: "Full Payment", amount: "Rs. 15,000/=", online: "All Sessions", offline: "Workshop Included" }], howToPay: ["Log to portal", "Select course", "Choose payment", "Confirm enrollment"] },
    conditions: { riskNotice: "", courseConditions: ["Both online & offline classes available", "Certification upon completion", "Non-refundable fees"] },
  },
  "social-media-marketing": {
    title: "Social Media Marketing Mastery",
    category: "Digital Marketing",
    instructor: "Sadupa Nayanajith",
    updated: "25 November, 2025",
    rating: "5.00",
    reviews: 21,
    price: "Rs. 29,000",
    language: "Sinhala",
    level: "Advanced",
    duration: "24 Hours",
    lessons: 22,
    students: 150,
    videoHours: "10 Hours",
    img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
    accent: "#0ea5e9",
    overview: ["Master social media marketing across Instagram, TikTok, Facebook, and LinkedIn. Learn content strategy, paid advertising, analytics, and brand building from industry practitioners with real campaign experience."],
    content: ["Social media landscape", "Content strategy", "Instagram marketing", "Facebook Ads", "TikTok strategy", "LinkedIn B2B marketing", "Analytics & reporting", "Influencer marketing", "Brand storytelling", "Paid campaigns", "SEO for social", "Community management"],
    qualifications: { admission: ["Basic smartphone knowledge", "Active social media accounts", "Internet connection required"], eligible: ["Business owners", "Marketing students", "Freelancers", "Content creators"] },
    fees: { options: [{ label: "Full Payment", amount: "Rs. 29,000/=", online: "22 Sessions", offline: "Practical Workshops" }], howToPay: ["Log to portal", "Select course", "Pay online", "Confirm"] },
    conditions: { riskNotice: "", courseConditions: ["Online & offline classes", "Project-based learning", "Certificate on completion"] },
  },
  "graphic-design": {
    title: "Certificate in Graphic Design",
    category: "Graphic Design",
    instructor: "Geeth Tharangi",
    updated: "25 November, 2025",
    rating: "5.00",
    reviews: 21,
    price: "Rs. 15,000",
    language: "Sinhala",
    level: "Advanced",
    duration: "90 Hours",
    lessons: 25,
    students: 180,
    videoHours: "90 Hours",
    img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80",
    accent: "#7c3aed",
    overview: [
      "Graphic design encompasses the creation of visual and textual content to convey ideas and experiences. It involves communicating messages through mediums like business logos, intricate website layouts, and more. SkillLift conducts a graphic design course using online technology with an expert panel of lecturers.",
      "Graphic design is the art and practice of planning and projecting ideas and experiences with visual and textual content. In other terms, the graphic design communicates specific ideas or messages visually as business logos, complex website page layouts, etc. Companies use graphic designs to promote and sell products through advertising, infographics to convey complex info in a simplified way, or branding an identity, etc.",
    ],
    content: ["Design fundamentals", "Color theory", "Typography mastery", "Adobe Photoshop", "Adobe Illustrator", "InDesign basics", "Logo design", "Brand identity", "Social media design", "Print design", "Mockup creation", "Portfolio development"],
    qualifications: { admission: ["Basic computer skills", "Creative interest", "Laptop with design software"], eligible: ["Aspiring designers", "Marketing professionals", "Business owners", "Students"] },
    fees: { options: [{ label: "Full Payment", amount: "Rs. 15,000/=", online: "25 Sessions", offline: "Studio Workshops" }], howToPay: ["Log to portal", "Select course", "Pay online", "Start learning"] },
    conditions: { riskNotice: "", courseConditions: ["Online & offline design sessions", "Project portfolio required", "Industry tools provided"] },
  },
};

const TABS = ["Overview", "Content", "Qualifications", "Duration & Fees", "Conditions"];

interface Props { courseId: string; }

export default function CourseDetailPage({ courseId }: Props) {
  const c = courseData[courseId] || courseData["crypto-trading"];
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <main>
      <Navbar />

      {/* ── HERO ── */}
      <section style={{
        background: "linear-gradient(160deg, #060d1c 0%, #0d1b38 60%, #061426 100%)",
        padding: "140px 48px 80px", position: "relative", overflow: "hidden",
      }}>
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.04, pointerEvents: "none" }}>
          <defs><pattern id="cd-grid" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/></pattern></defs>
          <rect width="100%" height="100%" fill="url(#cd-grid)"/>
        </svg>
        <div style={{ maxWidth: 1320, margin: "0 auto", position: "relative", zIndex: 2, textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 20, fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.45)" }}>
            <Link href="/" style={{ color: "rgba(255,255,255,0.45)", textDecoration: "none" }}>Home</Link>
            <ChevronRight size={13} />
            <Link href="/courses" style={{ color: "rgba(255,255,255,0.45)", textDecoration: "none" }}>Courses</Link>
            <ChevronRight size={13} />
            <span style={{ color: "#0ea5e9" }}>Course Details</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 800, color: "#fff", lineHeight: 1.1, letterSpacing: "-0.025em" }}>
            {c.title}
          </h1>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section style={{ padding: "64px 48px 100px", background: "#f8fafc" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 360px", gap: 40, alignItems: "start" }}>

          {/* LEFT */}
          <div>
            {/* Course image */}
            <div style={{ borderRadius: 20, overflow: "hidden", marginBottom: 32, boxShadow: "0 16px 48px rgba(10,15,30,0.12)" }}>
              <img src={c.img} alt={c.title} style={{ width: "100%", height: 380, objectFit: "cover", display: "block" }} />
            </div>

            {/* Meta row */}
            <div style={{
              display: "flex", gap: 24, marginBottom: 20, flexWrap: "wrap",
              paddingBottom: 20, borderBottom: "1px solid #e2e8f0",
            }}>
              {[
                { label: "Category", val: c.category },
                { label: "Last Update", val: c.updated },
              ].map(m => (
                <div key={m.label}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#94a3b8", letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: 3 }}>{m.label}</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: c.accent, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{m.val}</div>
                </div>
              ))}
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#94a3b8", letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: 3 }}>Review</div>
                <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={13} fill="#f59e0b" color="#f59e0b" />)}
                  <span style={{ fontSize: 12, color: "#64748b" }}>({c.rating})</span>
                </div>
              </div>
            </div>

            {/* Title */}
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 800, color: "#0a0f1e", marginBottom: 24, letterSpacing: "-0.02em" }}>{c.title}</h2>

            {/* Tab nav */}
            <div style={{
              display: "flex", gap: 2, marginBottom: 32,
              background: "#fff", border: "1px solid #e2e8f0",
              borderRadius: 12, padding: 4, flexWrap: "wrap",
            }}>
              {TABS.map(tab => (
                <button key={tab} onClick={() => setActiveTab(tab)} style={{
                  padding: "10px 20px", borderRadius: 9, border: "none", cursor: "pointer",
                  fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, fontWeight: 600,
                  background: activeTab === tab ? c.accent : "transparent",
                  color: activeTab === tab ? "#fff" : "#64748b",
                  transition: "all 0.2s",
                }}>
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                style={{ background: "#fff", borderRadius: 16, padding: "36px", border: "1px solid #e2e8f0" }}
              >

                {/* ── OVERVIEW ── */}
                {activeTab === "Overview" && (
                  <div>
                    {c.overview.map((p: string, i: number) => (
                      <p key={i} style={{ fontSize: 14.5, color: "#475569", lineHeight: 1.82, marginBottom: 16, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{p}</p>
                    ))}
                    {c.overviewSubtitle && (
                      <>
                        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: "#0a0f1e", margin: "28px 0 14px" }}>{c.overviewSubtitle}</h3>
                        <p style={{ fontSize: 14.5, color: "#475569", lineHeight: 1.82, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{c.overviewSub}</p>
                      </>
                    )}
                  </div>
                )}

                {/* ── CONTENT ── */}
                {activeTab === "Content" && (
                  <div>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#0a0f1e", marginBottom: 24 }}>Course Content</h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                      {c.content.map((item: string, i: number) => (
                        <div key={i} style={{
                          display: "flex", alignItems: "center", gap: 14,
                          padding: "13px 0",
                          borderBottom: i < c.content.length - 1 ? "1px solid #f1f5f9" : "none",
                        }}>
                          <div style={{ width: 24, height: 24, borderRadius: "50%", background: "#eff6ff", border: "1px solid rgba(26,86,219,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                            <span style={{ fontSize: 10, fontWeight: 800, color: c.accent, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{i + 1}</span>
                          </div>
                          <span style={{ fontSize: 14, color: "#334155", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* ── QUALIFICATIONS ── */}
                {activeTab === "Qualifications" && (
                  <div>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#0a0f1e", marginBottom: 20 }}>Qualifications for Admission</h3>
                    <ul style={{ listStyle: "none", marginBottom: 36 }}>
                      {c.qualifications.admission.map((q: string, i: number) => (
                        <li key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 12 }}>
                          <CheckCircle size={16} color={c.accent} style={{ flexShrink: 0, marginTop: 2 }} />
                          <span style={{ fontSize: 14, color: "#475569", lineHeight: 1.6, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{q}</span>
                        </li>
                      ))}
                    </ul>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: "#0a0f1e", marginBottom: 16 }}>Who are eligible to enroll as a course follower?</h3>
                    <ul style={{ listStyle: "none" }}>
                      {c.qualifications.eligible.map((q: string, i: number) => (
                        <li key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 12 }}>
                          <CheckCircle size={16} color="#22c55e" style={{ flexShrink: 0, marginTop: 2 }} />
                          <span style={{ fontSize: 14, color: "#475569", lineHeight: 1.6, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{q}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* ── DURATION & FEES ── */}
                {activeTab === "Duration & Fees" && (
                  <div>
                    {c.fees.onlineDuration && (
                      <>
                        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#0a0f1e", marginBottom: 16 }}>Course Duration</h3>
                        <div style={{ marginBottom: 28 }}>
                          <div style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 10 }}>
                            <Monitor size={15} color={c.accent} style={{ marginTop: 2, flexShrink: 0 }} />
                            <span style={{ fontSize: 14, color: "#475569", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Online: {c.fees.onlineDuration}</span>
                          </div>
                          <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                            <MapPin size={15} color={c.accent} style={{ marginTop: 2, flexShrink: 0 }} />
                            <div>
                              <span style={{ fontSize: 14, color: "#475569", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Offline: {c.fees.offlineDuration}</span>
                              {c.fees.offlineModules && (
                                <ul style={{ marginTop: 8, listStyle: "none" }}>
                                  {c.fees.offlineModules.map((m: string) => (
                                    <li key={m} style={{ fontSize: 13, color: "#64748b", marginBottom: 4, paddingLeft: 12, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>• {m}</li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          </div>
                        </div>
                      </>
                    )}

                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#0a0f1e", marginBottom: 8 }}>Course Fees</h3>
                    <p style={{ fontSize: 13.5, color: "#64748b", marginBottom: 24, fontFamily: "'Plus Jakarta Sans', sans-serif", lineHeight: 1.7 }}>
                      Course fees includes tuition fee, cost of course materials. Course fees for the Crypto Currency Trading program may be paid upfront or in instalments. Students may choose one of the following two payment options.
                    </p>

                    {c.fees.options.map((opt: any, i: number) => (
                      <div key={i} style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 14, padding: "22px 24px", marginBottom: 16 }}>
                        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 700, color: "#0a0f1e", marginBottom: 12 }}>{opt.label}</div>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
                          <div style={{ background: "#fff", borderRadius: 10, padding: "12px 16px", border: "1px solid #e2e8f0", textAlign: "center" }}>
                            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 800, color: c.accent }}>{opt.amount}</div>
                            <div style={{ fontSize: 11, color: "#94a3b8", marginTop: 3 }}>Amount</div>
                          </div>
                          <div style={{ background: "#fff", borderRadius: 10, padding: "12px 16px", border: "1px solid #e2e8f0", textAlign: "center" }}>
                            <div style={{ fontSize: 12, fontWeight: 600, color: "#334155", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{opt.online}</div>
                            <div style={{ fontSize: 11, color: "#94a3b8", marginTop: 3 }}>Online</div>
                          </div>
                          <div style={{ background: "#fff", borderRadius: 10, padding: "12px 16px", border: "1px solid #e2e8f0", textAlign: "center" }}>
                            <div style={{ fontSize: 12, fontWeight: 600, color: "#334155", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{opt.offline}</div>
                            <div style={{ fontSize: 11, color: "#94a3b8", marginTop: 3 }}>Offline</div>
                          </div>
                        </div>
                      </div>
                    ))}

                    {c.fees.bankDetails && (
                      <div style={{ background: "#eff6ff", borderRadius: 14, padding: "20px 24px", marginBottom: 20, border: "1px solid rgba(26,86,219,0.15)" }}>
                        <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, fontWeight: 700, color: c.accent, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>Bank Transfer Details</div>
                        {Object.entries(c.fees.bankDetails).map(([k, v]) => (
                          <div key={k} style={{ fontSize: 13, color: "#334155", marginBottom: 4, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                            <span style={{ color: "#64748b", textTransform: "capitalize" }}>{k.replace(/([A-Z])/g, ' $1')}: </span>{v as string}
                          </div>
                        ))}
                      </div>
                    )}

                    {c.fees.notes && (
                      <div style={{ marginBottom: 28 }}>
                        {c.fees.notes.map((n: string, i: number) => (
                          <div key={i} style={{ display: "flex", gap: 10, marginBottom: 8, alignItems: "flex-start" }}>
                            <div style={{ width: 6, height: 6, borderRadius: "50%", background: c.accent, flexShrink: 0, marginTop: 6 }} />
                            <span style={{ fontSize: 13, color: "#64748b", lineHeight: 1.65, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{n}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {c.fees.howToPay && (
                      <>
                        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: "#0a0f1e", marginBottom: 20 }}>How to Pay</h3>
                        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                          {c.fees.howToPay.map((step: string, i: number) => (
                            <div key={i} style={{ display: "flex", alignItems: "center", gap: 16 }}>
                              <div style={{ width: 36, height: 36, borderRadius: "50%", background: c.accent, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Playfair Display', serif", fontSize: 15, fontWeight: 800, flexShrink: 0 }}>{i + 1}</div>
                              <span style={{ fontSize: 14, color: "#334155", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{step}</span>
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                )}

                {/* ── CONDITIONS ── */}
                {activeTab === "Conditions" && (
                  <div>
                    {c.conditions.riskNotice && (
                      <div style={{ background: "#fff7ed", border: "1px solid rgba(249,115,22,0.2)", borderRadius: 12, padding: "20px 24px", marginBottom: 28, display: "flex", gap: 14, alignItems: "flex-start" }}>
                        <AlertTriangle size={18} color="#f97316" style={{ flexShrink: 0, marginTop: 2 }} />
                        <div>
                          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 700, color: "#c2410c", marginBottom: 8 }}>Risk Notice</div>
                          <p style={{ fontSize: 13.5, color: "#7c3415", lineHeight: 1.75, margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{c.conditions.riskNotice}</p>
                        </div>
                      </div>
                    )}
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#0a0f1e", marginBottom: 20 }}>Course Conditions</h3>
                    <ul style={{ listStyle: "none" }}>
                      {c.conditions.courseConditions.map((cond: string, i: number) => (
                        <li key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 14 }}>
                          <CheckCircle size={16} color={c.accent} style={{ flexShrink: 0, marginTop: 2 }} />
                          <span style={{ fontSize: 14, color: "#475569", lineHeight: 1.65, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{cond}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT SIDEBAR */}
          <div style={{ position: "sticky", top: 100 }}>
            <div style={{ background: "#fff", borderRadius: 20, border: "1px solid #e2e8f0", overflow: "hidden", boxShadow: "0 8px 32px rgba(10,15,30,0.08)" }}>
              {/* Course Features */}
              <div style={{ padding: "28px 28px 0" }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: "#0a0f1e", marginBottom: 20 }}>Course Features</h3>
                {[
                  { icon: Clock, label: "Duration", val: c.duration },
                  { icon: BookOpen, label: "Lessons", val: c.lessons },
                  { icon: Users, label: "Students", val: c.students.toLocaleString() },
                  { icon: Video, label: "Video", val: c.videoHours },
                  { icon: BarChart2, label: "Skill Level", val: c.level },
                  { icon: Globe, label: "Language", val: c.language },
                ].map(({ icon: Icon, label, val }) => (
                  <div key={label} style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "12px 0", borderBottom: "1px solid #f1f5f9",
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <Icon size={15} color="#94a3b8" strokeWidth={1.75} />
                      <span style={{ fontSize: 13, color: "#64748b", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{label}</span>
                    </div>
                    <span style={{ fontSize: 13, fontWeight: 600, color: "#0a0f1e", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{val}</span>
                  </div>
                ))}
              </div>

              {/* Price + Enroll */}
              <div style={{ padding: "24px 28px 28px" }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 800, color: c.accent, marginBottom: 16 }}>
                  {c.price}/=
                </div>
                <button className="btn-primary" style={{ width: "100%", justifyContent: "center", padding: "15px", fontSize: 15 }}>
                  Enroll Now <ArrowRight size={15} />
                </button>

                {/* Share */}
                <div style={{ marginTop: 20, paddingTop: 20, borderTop: "1px solid #f1f5f9" }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: "#94a3b8", letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: 12 }}>Share on</div>
                  <div style={{ display: "flex", gap: 8 }}>
                    {[Facebook, Twitter, Linkedin, Youtube].map((Icon, i) => (
                      <button key={i} style={{
                        width: 34, height: 34, borderRadius: 8,
                        border: "1px solid #e2e8f0", background: "#fff",
                        cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                        color: "#64748b", transition: "all 0.2s",
                      }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#0a0f1e"; (e.currentTarget as HTMLElement).style.color = "#fff"; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#fff"; (e.currentTarget as HTMLElement).style.color = "#64748b"; }}
                      >
                        <Icon size={13} strokeWidth={2} />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}