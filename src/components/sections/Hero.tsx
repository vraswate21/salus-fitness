"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

/* ─── Stable particle positions – never change between renders ─── */
const PARTICLES = Array.from({ length: 28 }, (_, i) => ({
  left:     ((i * 41 + 7)  % 91) + 4,
  top:      ((i * 67 + 13) % 85) + 5,
  size:     i % 3 === 0 ? 2 : 1,
  duration: 5 + (i % 6),
  delay:    (i * 0.38) % 5,
  opacity:  0.12 + (i % 5) * 0.07,
}));

/* ─── Stats ─── */
const STATS = [
  { value: 5000, suffix: "+", label: "Members" },
  { value: 15,   suffix: "+", label: "Programs" },
  { value: 8,    suffix: "+", label: "Years of Excellence" },
  { value: 4.9,  suffix: "",  label: "Google Rating" },
];

function AnimatedNumber({ to, duration = 1.8 }: { to: number; duration?: number }) {
  const [val, setVal] = useState(0);
  const [on,  setOn]  = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setOn(true); },
      { threshold: 0.5 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!on) return;
    const isFloat = to % 1 !== 0;
    const steps = 50;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = to * eased;
      setVal(isFloat ? parseFloat(current.toFixed(1)) : Math.floor(current));
      if (step >= steps) { setVal(to); clearInterval(timer); }
    }, (duration * 1000) / steps);
    return () => clearInterval(timer);
  }, [on, to, duration]);

  return <span ref={ref}>{val}</span>;
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const contentY  = useTransform(scrollY, [0, 700], [0, 120]);
  const contentOp = useTransform(scrollY, [0, 450], [1, 0]);

  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ─── Background layers ─── */}
      <div className="absolute inset-0 bg-[#B7B3A7]">
        {/* Grid */}
        <div className="absolute inset-0 cinema-grid" />

        {/* Primary radial — center */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(212,175,55,0.07) 0%, transparent 70%)",
          }}
        />

        {/* Secondary glow — bottom right */}
        <div
          className="absolute bottom-0 right-0 w-[50vw] h-[50vh]"
          style={{
            background: "radial-gradient(ellipse at bottom right, rgba(212,175,55,0.04) 0%, transparent 70%)",
          }}
        />

        {/* Vertical hairlines */}
        {[12, 28, 50, 72, 88].map((pct, i) => (
          <motion.div
            key={i}
            className="absolute top-0 bottom-0 w-px"
            style={{
              left: `${pct}%`,
              background: "linear-gradient(180deg, transparent, rgba(212,175,55,0.06) 30%, rgba(212,175,55,0.06) 70%, transparent)",
            }}
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ duration: 2, delay: i * 0.15, ease: [0.16,1,0.3,1] }}
          />
        ))}

        {/* Horizontal hairline */}
        <motion.div
          className="absolute left-0 right-0 h-px"
          style={{
            top: "65%",
            background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.05) 20%, rgba(212,175,55,0.05) 80%, transparent)",
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2.5, delay: 0.5 }}
        />

        {/* Particles */}
        {PARTICLES.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#96690A]"
            style={{
              left: `${p.left}%`,
              top:  `${p.top}%`,
              width:  p.size,
              height: p.size,
              opacity: p.opacity,
            }}
            animate={{ y: [0, -18, 0], opacity: [p.opacity, p.opacity * 2.5, p.opacity] }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Light sweep */}
        <motion.div
          className="absolute inset-x-0 h-[1px] pointer-events-none"
          style={{ background: "linear-gradient(90deg, transparent 10%, rgba(212,175,55,0.12) 50%, transparent 90%)" }}
          animate={{ y: ["-5vh", "105vh"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear", repeatDelay: 6 }}
        />
      </div>

      {/* ─── Content ─── */}
      <motion.div
        style={{ y: contentY, opacity: contentOp }}
        className="relative z-10 container-wide flex flex-col items-center text-center pt-24 md:pt-28 pb-10 md:pb-12"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16,1,0.3,1] }}
          className="flex items-center gap-4 mb-10"
        >
          <span className="w-10 h-px bg-[#96690A]" />
          <span className="eyebrow opacity-80">Since 2016 · Premium Gym & Cardio · Hyderabad</span>
          <span className="w-10 h-px bg-[#96690A]" />
        </motion.div>

        {/* Headline — single h1 for SEO */}
        <h1 className="mb-10" aria-label="Transform Your Body at Salus Fitness Gym Hyderabad">
          <div className="overflow-hidden mb-1">
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, delay: 0.55, ease: [0.16,1,0.3,1] }}
              className="block font-display font-black leading-[0.88] tracking-[-0.03em] text-[#1C1914]"
              style={{ fontSize: "clamp(44px,12vw,190px)" }}
            >
              TRANSFORM
            </motion.span>
          </div>
          <div className="overflow-hidden">
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, delay: 0.7, ease: [0.16,1,0.3,1] }}
              className="block font-display font-black leading-[0.88] tracking-[-0.03em] text-gradient-gold"
              style={{ fontSize: "clamp(44px,12vw,190px)" }}
            >
              YOUR BODY
            </motion.span>
          </div>
        </h1>

        {/* Sub copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.95, ease: [0.16,1,0.3,1] }}
          className="font-body text-[#4A453B] text-base md:text-xl max-w-xs md:max-w-md leading-[1.65] mb-10 md:mb-12"
        >
          Build strength. Burn fat. Become someone new.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1, ease: [0.16,1,0.3,1] }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full sm:w-auto mb-16 md:mb-24 px-4 sm:px-0"
        >
          {/* Primary */}
          <motion.button
            whileHover={{ scale: 1.04, y: -3 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => scrollTo("#membership")}
            className="group relative flex items-center justify-center gap-3 bg-[#D4AF37] text-[#0A0A0A] font-sans font-bold text-[11px] tracking-[0.22em] uppercase px-9 py-[17px] rounded-full overflow-hidden transition-colors duration-300 hover:bg-[#E8CC5F] cursor-pointer border-none glow-gold min-h-[52px]"
          >
            <span className="relative z-10">Join Today</span>
            <motion.span
              className="relative z-10"
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
            >
              <ArrowRight size={14} />
            </motion.span>
          </motion.button>

          {/* Secondary */}
          <motion.button
            whileHover={{ scale: 1.04, y: -3 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => scrollTo("#bmi")}
            className="flex items-center justify-center gap-2 font-sans font-semibold text-[11px] tracking-[0.2em] uppercase px-9 py-[17px] rounded-full text-[#1C1914] border border-[rgba(0,0,0,0.15)] hover:border-[rgba(150,105,10,0.4)] hover:text-[#96690A] backdrop-blur-sm transition-all duration-300 cursor-pointer bg-transparent min-h-[52px]"
          >
            Free Trial
          </motion.button>
        </motion.div>

        {/* ─── Stats ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3, ease: [0.16,1,0.3,1] }}
          className="w-full max-w-2xl px-0"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[rgba(0,0,0,0.08)] border border-[rgba(0,0,0,0.08)] rounded-2xl overflow-hidden glass">
            {STATS.map((s, i) => (
              <div key={s.label} className="flex flex-col items-center justify-center py-7 px-4 group relative">
                {/* Hover accent */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "radial-gradient(ellipse at center, rgba(212,175,55,0.04) 0%, transparent 70%)" }} />

                <div className="font-display font-black text-[28px] md:text-[34px] tracking-[-0.03em] text-[#1C1914] leading-none mb-1">
                  <AnimatedNumber to={s.value} duration={1.6 + i * 0.2} />
                  <span className="text-[#96690A]">{s.suffix}</span>
                </div>
                <div className="eyebrow opacity-40 text-[9px]">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* ─── Scroll Indicator ─── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="scroll-arrow"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="eyebrow text-[9px] opacity-30">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-[rgba(212,175,55,0.5)] to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
