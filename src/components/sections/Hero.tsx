"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Zap, Users, Award, Star } from "lucide-react";

const stats = [
  { value: 5000, suffix: "+", label: "Members", icon: Users },
  { value: 15, suffix: "+", label: "Trainers", icon: Zap },
  { value: 8, suffix: "+", label: "Years", icon: Award },
  { value: 4.9, suffix: "", label: "Google Rating", icon: Star },
];

function CountUp({ to, duration = 2 }: { to: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const isDecimal = to % 1 !== 0;
    const steps = 60;
    const increment = to / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= to) {
        setCount(to);
        clearInterval(timer);
      } else {
        setCount(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current));
      }
    }, (duration * 1000) / steps);
    return () => clearInterval(timer);
  }, [started, to, duration]);

  return <span ref={ref}>{count}</span>;
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 160]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      id="hero"
    >
      {/* ─── Cinematic Background ─── */}
      <div className="absolute inset-0 bg-[#0A0A0A]">
        {/* Grid */}
        <div className="absolute inset-0 cinema-grid opacity-60" />

        {/* Radial glow - top center */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[700px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(212,175,55,0.06) 0%, transparent 70%)",
          }}
        />

        {/* Radial glow - bottom left */}
        <div
          className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(212,175,55,0.04) 0%, transparent 70%)",
          }}
        />

        {/* Vertical accent lines */}
        <div className="absolute inset-0 overflow-hidden">
          {[15, 35, 65, 85].map((pos, i) => (
            <motion.div
              key={i}
              className="absolute top-0 bottom-0 w-px"
              style={{ left: `${pos}%`, background: "rgba(212,175,55,0.05)" }}
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.2 * i, ease: "easeOut" }}
            />
          ))}
        </div>

        {/* Scanning light */}
        <motion.div
          className="absolute inset-x-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(212,175,55,0.15), transparent)",
          }}
          animate={{ y: ["-10vh", "110vh"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear", repeatDelay: 4 }}
        />

        {/* Floating particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 rounded-full bg-[#D4AF37]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.4 + 0.1,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.1, 0.5, 0.1],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* ─── Main Content ─── */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 container-wide flex flex-col items-center text-center pt-24"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="w-8 h-px bg-[#D4AF37]" />
          <span className="text-[#D4AF37] text-xs font-semibold tracking-[0.3em] uppercase font-sans">
            A Perfect Destination For Your Health
          </span>
          <span className="w-8 h-px bg-[#D4AF37]" />
        </motion.div>

        {/* Main Headline */}
        <div className="overflow-hidden mb-4">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.25, 1, 0.5, 1] }}
            className="font-display font-black text-[clamp(64px,12vw,160px)] leading-[0.9] tracking-[-0.02em] text-white"
          >
            TRANSFORM
          </motion.h1>
        </div>

        <div className="overflow-hidden mb-8">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.65, ease: [0.25, 1, 0.5, 1] }}
            className="font-display font-black text-[clamp(64px,12vw,160px)] leading-[0.9] tracking-[-0.02em] text-gradient-gold"
          >
            YOUR BODY
          </motion.h1>
        </div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-[#B8B8B8] text-lg md:text-xl max-w-xl leading-relaxed mb-10 font-body"
        >
          Build strength. Lose fat. Become unstoppable.
          <br />
          <span className="text-[#555555] text-sm">Premium AC Gym & Cardio — For Men & Women</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-20"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              document.querySelector("#membership")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-[#D4AF37] text-[#0A0A0A] font-black text-sm tracking-[0.2em] uppercase px-10 py-4 rounded-full hover:bg-[#E8CC5F] transition-all duration-300 shadow-[0_0_40px_rgba(212,175,55,0.3)] cursor-pointer border-none"
          >
            Join Today
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              document.querySelector("#bmi")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="border border-[rgba(212,175,55,0.4)] text-white font-semibold text-sm tracking-[0.15em] uppercase px-10 py-4 rounded-full hover:border-[#D4AF37] hover:text-[#D4AF37] backdrop-blur-sm transition-all duration-300 cursor-pointer bg-transparent"
          >
            Book Free Trial
          </motion.button>
        </motion.div>

        {/* ─── Stats Row ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="w-full max-w-3xl grid grid-cols-2 md:grid-cols-4 gap-px bg-[rgba(255,255,255,0.06)] rounded-2xl overflow-hidden"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="relative bg-[rgba(10,10,10,0.8)] backdrop-blur-xl flex flex-col items-center py-6 px-4 group"
            >
              <motion.div
                className="absolute inset-0 bg-[rgba(212,175,55,0.03)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              <stat.icon size={14} className="text-[#D4AF37] mb-2" />
              <div className="font-display font-black text-2xl md:text-3xl text-white tracking-tight">
                <CountUp to={stat.value} duration={2 + i * 0.3} />
                {stat.suffix}
              </div>
              <div className="text-[#555555] text-xs tracking-wider uppercase mt-1 font-sans">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* ─── Scroll Indicator ─── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 scroll-indicator"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <span className="text-[#555555] text-[10px] tracking-[0.3em] uppercase font-sans">
          Scroll
        </span>
        <ChevronDown size={14} className="text-[#D4AF37]" />
      </motion.div>
    </section>
  );
}
