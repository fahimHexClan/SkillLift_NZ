"use client";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, CheckCircle, GraduationCap, Star, Sparkles, TrendingUp } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const trustPoints = [
  "Internationally Recognized Certificates",
  "Expert-Led Live & Recorded Sessions",
  "Lifetime LMS Access Guaranteed",
];
const stats = [
  { val: "2,000+", label: "Active Students",   sub: "NZ & Sri Lanka"   },
  { val: "15+",    label: "Expert Instructors", sub: "Industry Verified" },
  { val: "7",      label: "Courses Available",  sub: "Career Focused"   },
  { val: "2",      label: "Countries",          sub: "Global Reach"     },
];
const avatars = [
  { initials: "NK", color: "#1a56db" },
  { initials: "AM", color: "#0ea5e9" },
  { initials: "VH", color: "#7c3aed" },
  { initials: "SN", color: "#059669" },
  { initials: "RK", color: "#dc2626" },
];

function useCounter(target: number, duration = 1800, delay = 0) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  useEffect(() => { const t = setTimeout(() => setStarted(true), delay); return () => clearTimeout(t); }, [delay]);
  useEffect(() => {
    if (!started) return;
    let n = 0; const step = target / (duration / 16);
    const iv = setInterval(() => {
      n += step;
      if (n >= target) { setCount(target); clearInterval(iv); }
      else setCount(Math.floor(n));
    }, 16);
    return () => clearInterval(iv);
  }, [started, target, duration]);
  return count;
}

function AnimatedStat({ val, label, sub, delay }: { val: string; label: string; sub: string; delay: number }) {
  const num = parseInt(val.replace(/\D/g, "")) || 0;
  const suffix = val.replace(/[0-9]/g, "");
  const count = useCounter(num, 1800, delay);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: delay / 1000 + 0.6, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ background: "rgba(255,255,255,0.06)" }}
      style={{ padding: "14px 13px", transition: "background 0.2s" }}
    >
      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 800, color: "#fff", lineHeight: 1, letterSpacing: "-0.02em" }}>
        {count}{suffix}
      </div>
      <div style={{ fontSize: 10, fontWeight: 600, color: "rgba(255,255,255,0.5)", marginTop: 3, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{label}</div>
      <div style={{ fontSize: 8.5, color: "rgba(255,255,255,0.2)", marginTop: 1, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{sub}</div>
    </motion.div>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const leftY      = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const rightY     = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);
  const imgScale   = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const [videoModal, setVideoModal] = useState(false);

  return (
    <>
      {/* ═══════════════════════════════════════════
          HERO  —  75 vh, 50/50 split
      ═══════════════════════════════════════════ */}
      <section ref={ref} style={{
        width: "100%",
        height: "78vh",       /* ← compact height */
        minHeight: 540,
        maxHeight: 780,
        display: "flex",
        overflow: "hidden",
        position: "relative",
      }}>

        {/* ══ LEFT 52 % ══════════════════════════════════ */}
        <motion.div style={{
          flex: "0 0 52%", height: "100%",
          background: "linear-gradient(150deg,#060d1c 0%,#0a1628 55%,#0d1b38 100%)",
          padding: "0 48px 0 60px",
          display: "flex", flexDirection: "column", justifyContent: "center",
          position: "relative", zIndex: 2, overflow: "hidden",
          y: leftY,
        }}>
          {/* grid texture */}
          <svg style={{ position:"absolute", inset:0, width:"100%", height:"100%", opacity:0.04, pointerEvents:"none" }}>
            <defs><pattern id="hg" width="56" height="56" patternUnits="userSpaceOnUse">
              <path d="M 56 0 L 0 0 0 56" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern></defs>
            <rect width="100%" height="100%" fill="url(#hg)"/>
          </svg>

          {/* ambient glows */}
          <div style={{ position:"absolute", top:"-15%", right:"-20%", width:"70%", height:"70%", background:"radial-gradient(circle,rgba(26,86,219,0.22) 0%,transparent 68%)", pointerEvents:"none" }}/>
          <div style={{ position:"absolute", bottom:"-8%", left:"-10%", width:"52%", height:"52%", background:"radial-gradient(circle,rgba(14,165,233,0.1) 0%,transparent 68%)", pointerEvents:"none" }}/>

          {/* right-edge accent line */}
          <div style={{ position:"absolute", right:0, top:"10%", bottom:"10%", width:1, background:"linear-gradient(to bottom,transparent,rgba(26,86,219,0.4),transparent)" }}/>

          {/* floating particles */}
          {[{top:"17%",left:"6%",s:5,c:"#1a56db",d:0},{top:"76%",left:"4%",s:4,c:"#0ea5e9",d:1.4},{top:"44%",left:"91%",s:3,c:"#7c3aed",d:0.8}].map((p,i)=>(
            <motion.div key={i} animate={{y:[0,-14,0],opacity:[0.25,0.7,0.25]}} transition={{duration:3.2+i*0.5,repeat:Infinity,ease:"easeInOut",delay:p.d}}
              style={{position:"absolute",top:p.top,left:p.left,width:p.s,height:p.s,borderRadius:"50%",background:p.c,boxShadow:`0 0 ${p.s*4}px ${p.c}`,pointerEvents:"none"}}
            />
          ))}

          {/* ── content ── */}
          <motion.div style={{ opacity: heroOpacity, position:"relative", zIndex:2, maxWidth:460 }}>

            {/* badge */}
            <motion.div initial={{opacity:0,x:-22}} animate={{opacity:1,x:0}} transition={{duration:0.65,delay:0.08,ease:[0.22,1,0.36,1]}}
              style={{display:"inline-flex",alignItems:"center",gap:9,padding:"5px 15px 5px 7px",borderRadius:100,marginBottom:18,background:"rgba(14,165,233,0.08)",border:"1px solid rgba(14,165,233,0.22)",backdropFilter:"blur(12px)"}}
            >
              <motion.span animate={{boxShadow:["0 0 0px #0ea5e9","0 0 12px #0ea5e9","0 0 0px #0ea5e9"]}} transition={{duration:2,repeat:Infinity}}
                style={{background:"linear-gradient(135deg,#1a56db,#0ea5e9)",color:"#fff",padding:"2px 10px",borderRadius:100,fontSize:9,fontWeight:800,letterSpacing:"0.14em",fontFamily:"'Plus Jakarta Sans',sans-serif"}}
              >NEW</motion.span>
              <span style={{fontSize:11.5,color:"rgba(255,255,255,0.58)",fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:500}}>2025 Intake Now Open — NZ &amp; Sri Lanka</span>
              <motion.div animate={{scale:[1,1.5,1],opacity:[1,0.2,1]}} transition={{duration:1.8,repeat:Infinity}}
                style={{width:5,height:5,borderRadius:"50%",background:"#0ea5e9",flexShrink:0}}
              />
            </motion.div>

            {/* H1 */}
            <div style={{overflow:"hidden",marginBottom:14}}>
              <motion.h1 initial={{y:70,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.9,delay:0.16,ease:[0.22,1,0.36,1]}}
                style={{fontFamily:"'Playfair Display',serif",fontSize:"clamp(30px,3.8vw,52px)",fontWeight:800,color:"#fff",lineHeight:1.06,letterSpacing:"-0.026em"}}
              >
                A Globally{" "}
                <span style={{position:"relative",display:"inline-block"}}>
                  <em style={{fontStyle:"italic",color:"#60a5fa"}}>Recognized</em>
                  <motion.span initial={{scaleX:0}} animate={{scaleX:1}} transition={{duration:0.85,delay:0.88,ease:[0.22,1,0.36,1]}}
                    style={{position:"absolute",bottom:4,left:0,right:0,height:2.5,borderRadius:2,transformOrigin:"left",background:"linear-gradient(90deg,#60a5fa,#0ea5e9,transparent)"}}
                  />
                </span>
                <br/>Educational Institute
              </motion.h1>
            </div>

            {/* desc */}
            <motion.p initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:0.75,delay:0.3}}
              style={{fontSize:14,color:"rgba(255,255,255,0.44)",lineHeight:1.72,marginBottom:22,fontFamily:"'Plus Jakarta Sans',sans-serif"}}
            >
              Career-focused, industry-relevant training across New Zealand &amp; Sri Lanka — building skills that employers actually value.
            </motion.p>

            {/* CTAs */}
            <motion.div initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} transition={{duration:0.65,delay:0.38}}
              style={{display:"flex",gap:11,flexWrap:"wrap",marginBottom:24}}
            >
              {/* primary */}
              <motion.button whileHover={{scale:1.04,boxShadow:"0 16px 38px rgba(26,86,219,0.52)"}} whileTap={{scale:0.97}}
                style={{display:"inline-flex",alignItems:"center",gap:8,padding:"11px 28px",borderRadius:9,background:"linear-gradient(135deg,#1a56db,#0ea5e9)",color:"#fff",border:"none",cursor:"pointer",fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:13.5,fontWeight:700,boxShadow:"0 5px 20px rgba(26,86,219,0.38)",position:"relative",overflow:"hidden",transition:"box-shadow 0.25s"}}
              >
                <motion.div animate={{x:["-110%","210%"]}} transition={{duration:2.5,repeat:Infinity,repeatDelay:3}}
                  style={{position:"absolute",inset:0,background:"linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent)",pointerEvents:"none"}}
                />
                Explore Courses <ArrowRight size={14}/>
              </motion.button>

              {/* ghost */}
              <motion.button whileHover={{background:"rgba(255,255,255,0.1)",scale:1.02}} whileTap={{scale:0.97}} onClick={()=>setVideoModal(true)}
                style={{display:"inline-flex",alignItems:"center",gap:10,padding:"10px 22px",borderRadius:9,background:"rgba(255,255,255,0.055)",border:"1px solid rgba(255,255,255,0.14)",color:"rgba(255,255,255,0.8)",cursor:"pointer",fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:13.5,fontWeight:600,backdropFilter:"blur(14px)",transition:"all 0.2s"}}
              >
                <motion.div animate={{boxShadow:["0 0 0 rgba(255,255,255,0.2)","0 0 13px rgba(255,255,255,0.22)","0 0 0 rgba(255,255,255,0.2)"]}} transition={{duration:2,repeat:Infinity}}
                  style={{width:32,height:32,borderRadius:"50%",background:"rgba(255,255,255,0.1)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}
                >
                  <Play size={12} fill="white" color="white" style={{marginLeft:2}}/>
                </motion.div>
                Watch Overview
              </motion.button>
            </motion.div>

            {/* social proof */}
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5}}>
              <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:13}}>
                <div style={{display:"flex"}}>
                  {avatars.map((a,i)=>(
                    <motion.div key={i} initial={{opacity:0,x:-7}} animate={{opacity:1,x:0}} transition={{delay:0.54+i*0.06}}
                      style={{width:29,height:29,borderRadius:"50%",background:a.color,border:"2px solid rgba(6,13,28,0.92)",marginLeft:i>0?-9:0,zIndex:avatars.length-i,position:"relative",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:9,fontWeight:800,color:"#fff",boxShadow:"0 2px 6px rgba(0,0,0,0.32)"}}
                    >{a.initials}</motion.div>
                  ))}
                </div>
                <div>
                  <div style={{display:"flex",alignItems:"center",gap:3,marginBottom:2}}>
                    {[...Array(5)].map((_,i)=><Star key={i} size={11} fill="#f59e0b" color="#f59e0b"/>)}
                    <span style={{fontSize:12,fontWeight:700,color:"#f59e0b",fontFamily:"'Plus Jakarta Sans',sans-serif",marginLeft:3}}>5.0</span>
                  </div>
                  <div style={{fontSize:11,color:"rgba(255,255,255,0.35)",fontFamily:"'Plus Jakarta Sans',sans-serif"}}>Loved by 2,000+ students</div>
                </div>
              </div>

              {/* trust checkpoints */}
              {trustPoints.map((pt,i)=>(
                <motion.div key={pt} initial={{opacity:0,x:-13}} animate={{opacity:1,x:0}} transition={{delay:0.58+i*0.09}}
                  style={{display:"flex",alignItems:"center",gap:9,marginBottom:7}}
                >
                  <div style={{width:18,height:18,borderRadius:"50%",background:"rgba(14,165,233,0.12)",border:"1px solid rgba(14,165,233,0.28)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                    <CheckCircle size={10} color="#0ea5e9"/>
                  </div>
                  <span style={{fontSize:12.5,color:"rgba(255,255,255,0.42)",fontFamily:"'Plus Jakarta Sans',sans-serif"}}>{pt}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ══ RIGHT 48 % — photo ══════════════════════════ */}
        <motion.div style={{flex:"0 0 48%",position:"relative",overflow:"hidden",y:rightY}}>

          {/* parallax image */}
          <motion.div style={{position:"absolute",inset:"-6%",scale:imgScale,transformOrigin:"center"}}>
            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1400&q=90" alt="Students"
              style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center 22%"}}
            />
          </motion.div>

          {/* cinematic overlays */}
          <div style={{position:"absolute",inset:0,background:"linear-gradient(to right,rgba(6,13,28,0.9) 0%,rgba(6,13,28,0.38) 32%,rgba(6,13,28,0.04) 62%,rgba(6,13,28,0.14) 100%)"}}/>
          <div style={{position:"absolute",inset:0,background:"linear-gradient(to top,rgba(6,13,28,0.94) 0%,rgba(6,13,28,0.42) 24%,transparent 52%)"}}/>
          <div style={{position:"absolute",inset:0,background:"rgba(10,22,64,0.24)",mixBlendMode:"multiply"}}/>
          <div style={{position:"absolute",top:0,left:0,right:0,height:"38%",background:"linear-gradient(to bottom,rgba(10,22,64,0.48),transparent)"}}/>

          {/* ── Enrollment card ── */}
          <motion.div initial={{opacity:0,y:-26,x:26}} animate={{opacity:1,y:0,x:0}} transition={{duration:0.88,delay:0.6,ease:[0.22,1,0.36,1]}}
            style={{position:"absolute",top:80,right:20,width:240,background:"rgba(6,13,28,0.84)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:18,padding:"18px 16px",backdropFilter:"blur(28px)",boxShadow:"0 22px 56px rgba(0,0,0,0.46),inset 0 1px 0 rgba(255,255,255,0.08)"}}
          >
            <div style={{position:"absolute",top:-28,right:-28,width:100,height:100,background:"radial-gradient(circle,rgba(26,86,219,0.22),transparent)",pointerEvents:"none"}}/>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:14}}>
              <div>
                <div style={{fontSize:8,fontWeight:700,letterSpacing:"0.18em",color:"#0ea5e9",textTransform:"uppercase",fontFamily:"'Plus Jakarta Sans',sans-serif",marginBottom:5}}>Enrollment Overview</div>
                <div style={{fontFamily:"'Playfair Display',serif",fontSize:15,fontWeight:700,color:"#fff",lineHeight:1.25}}>Join 2,000+<br/>Real Careers</div>
              </div>
              <div style={{display:"flex",alignItems:"center",gap:4,background:"rgba(34,197,94,0.12)",border:"1px solid rgba(34,197,94,0.28)",padding:"3px 8px",borderRadius:100,flexShrink:0}}>
                <motion.div animate={{opacity:[1,0.2,1]}} transition={{duration:1.3,repeat:Infinity}}
                  style={{width:5,height:5,borderRadius:"50%",background:"#22c55e",boxShadow:"0 0 5px #22c55e"}}/>
                <span style={{fontSize:8,fontWeight:800,color:"#22c55e",fontFamily:"'Plus Jakarta Sans',sans-serif",letterSpacing:"0.08em"}}>LIVE</span>
              </div>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:1,background:"rgba(255,255,255,0.05)",borderRadius:10,overflow:"hidden"}}>
              {stats.map((s,i)=><AnimatedStat key={i} {...s} delay={800+i*140}/>)}
            </div>
          </motion.div>

          {/* ── #1 chip ── */}
          <motion.div initial={{opacity:0,x:-18}} animate={{opacity:1,x:0}} transition={{duration:0.65,delay:0.88}}
            style={{position:"absolute",top:88,left:20,background:"linear-gradient(135deg,#1a56db,#0ea5e9)",borderRadius:100,padding:"6px 14px",display:"flex",alignItems:"center",gap:6,boxShadow:"0 8px 22px rgba(26,86,219,0.46)"}}
          >
            <TrendingUp size={12} color="#fff"/>
            <span style={{fontSize:11,fontWeight:700,color:"#fff",fontFamily:"'Plus Jakarta Sans',sans-serif"}}>#1 in Sri Lanka</span>
          </motion.div>

          {/* ── Trophy badge ── */}
          <motion.div initial={{opacity:0,scale:0.7,rotate:-8}} animate={{opacity:1,scale:1,rotate:0}} transition={{duration:0.78,delay:1.05,ease:[0.22,1,0.36,1]}}
            style={{position:"absolute",top:"40%",left:20,background:"rgba(6,13,28,0.86)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:13,padding:"12px 14px",backdropFilter:"blur(24px)",boxShadow:"0 14px 38px rgba(0,0,0,0.42)",display:"flex",alignItems:"center",gap:10}}
          >
            <motion.div animate={{rotate:[0,10,-5,10,0]}} transition={{duration:3,repeat:Infinity,repeatDelay:2}} style={{fontSize:24,lineHeight:1}}>🏆</motion.div>
            <div>
              <div style={{fontSize:12.5,fontWeight:700,color:"#fff",fontFamily:"'Plus Jakarta Sans',sans-serif",marginBottom:1}}>94% Employment</div>
              <div style={{fontSize:9.5,color:"rgba(255,255,255,0.38)",fontFamily:"'Plus Jakarta Sans',sans-serif"}}>After Graduation</div>
            </div>
          </motion.div>

          {/* ── campus cards ── */}
          <div style={{position:"absolute",bottom:64,left:18,right:18,display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
            {[
              {flag:"🇱🇰",code:"LK",label:"Sri Lanka",  detail:"Panadura Campus", phone:"+94 713 680 690",color:"#1a56db",delay:0.75},
              {flag:"🇳🇿",code:"NZ",label:"New Zealand",detail:"Auckland Campus",  phone:"+64 20 454 8250",color:"#0ea5e9",delay:0.88},
            ].map(loc=>(
              <motion.div key={loc.label} initial={{opacity:0,y:22}} animate={{opacity:1,y:0}} transition={{duration:0.78,delay:loc.delay,ease:[0.22,1,0.36,1]}}
                whileHover={{y:-3,borderColor:`${loc.color}55`}}
                style={{background:"rgba(6,13,28,0.82)",border:"1px solid rgba(255,255,255,0.09)",borderRadius:13,padding:"13px 12px",backdropFilter:"blur(24px)",boxShadow:"0 10px 28px rgba(0,0,0,0.36)",transition:"all 0.24s",position:"relative",overflow:"hidden"}}
              >
                <div style={{position:"absolute",top:-16,right:-16,width:60,height:60,background:`radial-gradient(circle,${loc.color}26,transparent)`,pointerEvents:"none"}}/>
                <div style={{display:"flex",alignItems:"center",gap:7,marginBottom:9}}>
                  <span style={{fontSize:17}}>{loc.flag}</span>
                  <span style={{fontSize:8,fontWeight:800,color:loc.color==="#1a56db"?"#93c5fd":"#7dd3fc",background:`${loc.color}22`,border:`1px solid ${loc.color}33`,padding:"1px 6px",borderRadius:3,letterSpacing:"0.1em",fontFamily:"'Plus Jakarta Sans',sans-serif"}}>{loc.code}</span>
                </div>
                <div style={{fontFamily:"'Playfair Display',serif",fontSize:13,fontWeight:700,color:"#fff",marginBottom:2}}>{loc.label}</div>
                <div style={{fontSize:9.5,color:"rgba(255,255,255,0.36)",fontFamily:"'Plus Jakarta Sans',sans-serif",marginBottom:6}}>{loc.detail}</div>
                <div style={{fontSize:10,fontWeight:600,color:loc.color==="#1a56db"?"#93c5fd":"#7dd3fc",fontFamily:"'Plus Jakarta Sans',sans-serif"}}>{loc.phone}</div>
              </motion.div>
            ))}
          </div>

          {/* ── next batch strip ── */}
          <motion.div initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:0.75,delay:1.0,ease:[0.22,1,0.36,1]}}
            whileHover={{borderColor:"rgba(255,255,255,0.18)"}}
            style={{position:"absolute",bottom:14,left:18,right:18,background:"rgba(6,13,28,0.86)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:11,padding:"11px 15px",backdropFilter:"blur(24px)",display:"flex",alignItems:"center",justifyContent:"space-between",boxShadow:"0 6px 20px rgba(0,0,0,0.3)",cursor:"pointer",transition:"border-color 0.2s"}}
          >
            <div style={{display:"flex",alignItems:"center",gap:10}}>
              <div style={{width:30,height:30,borderRadius:8,background:"linear-gradient(135deg,#1a56db,#0ea5e9)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,boxShadow:"0 3px 10px rgba(26,86,219,0.4)"}}>
                <GraduationCap size={13} color="#fff" strokeWidth={1.75}/>
              </div>
              <div>
                <div style={{fontSize:12,fontWeight:700,color:"#fff",fontFamily:"'Plus Jakarta Sans',sans-serif",marginBottom:1}}>Next Batch Starts Soon</div>
                <div style={{fontSize:9.5,color:"rgba(255,255,255,0.3)",fontFamily:"'Plus Jakarta Sans',sans-serif"}}>Crypto · Korean · Marketing · Design</div>
              </div>
            </div>
            <motion.div whileHover={{x:3}} style={{display:"flex",alignItems:"center",gap:4,flexShrink:0}}>
              <span style={{fontSize:11.5,fontWeight:700,color:"#0ea5e9",fontFamily:"'Plus Jakarta Sans',sans-serif"}}>Enroll</span>
              <ArrowRight size={12} color="#0ea5e9"/>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ── VIDEO MODAL ──────────────────────────── */}
      <AnimatePresence>
        {videoModal && (
          <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setVideoModal(false)}
            style={{position:"fixed",inset:0,zIndex:9999,background:"rgba(0,0,0,0.9)",backdropFilter:"blur(10px)",display:"flex",alignItems:"center",justifyContent:"center"}}
          >
            <motion.div initial={{scale:0.84,opacity:0}} animate={{scale:1,opacity:1}} exit={{scale:0.86,opacity:0}} transition={{duration:0.33,ease:[0.22,1,0.36,1]}}
              onClick={e=>e.stopPropagation()}
              style={{background:"#0a0f1e",borderRadius:20,border:"1px solid rgba(255,255,255,0.1)",padding:"44px",maxWidth:440,width:"90%",textAlign:"center",boxShadow:"0 40px 80px rgba(0,0,0,0.6)"}}
            >
              <div style={{width:66,height:66,borderRadius:"50%",background:"linear-gradient(135deg,#1a56db,#0ea5e9)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 18px",boxShadow:"0 12px 30px rgba(26,86,219,0.42)"}}>
                <Play size={25} fill="white" color="white" style={{marginLeft:3}}/>
              </div>
              <div style={{fontFamily:"'Playfair Display',serif",fontSize:20,fontWeight:700,color:"#fff",marginBottom:10}}>SkillLift Overview</div>
              <p style={{fontSize:13.5,color:"rgba(255,255,255,0.42)",fontFamily:"'Plus Jakarta Sans',sans-serif",marginBottom:22,lineHeight:1.65}}>
                See how SkillLift transforms careers across Sri Lanka and New Zealand.
              </p>
              <button onClick={()=>setVideoModal(false)} style={{background:"rgba(255,255,255,0.08)",border:"1px solid rgba(255,255,255,0.12)",color:"rgba(255,255,255,0.65)",padding:"10px 24px",borderRadius:9,cursor:"pointer",fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:13,fontWeight:600}}>Close</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}