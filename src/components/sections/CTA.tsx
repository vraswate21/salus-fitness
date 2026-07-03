"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Phone } from "lucide-react";

const TRUST = [
  { label: "No hidden fees",       dot: "#96690A" },
  { label: "Free first session",   dot: "#96690A" },
  { label: "Join any day",         dot: "#96690A" },
  { label: "5000+ happy members",  dot: "#96690A" },
];

export function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section ref={ref} className="relative py-36 overflow-hidden bg-[#B7B3A7]">
      {/* Parallax background layers */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 cinema-grid opacity-25" />
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 100% 70% at 50% 50%, rgba(212,175,55,0.06) 0%, transparent 65%)" }}
        />
      </motion.div>

      {/* Diagonal accent lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[15, 35, 65, 85].map((pos, i) => (
          <motion.div
            key={i}
            className="absolute top-0 bottom-0 w-px"
            style={{
              left: `${pos}%`,
              background: "linear-gradient(180deg, transparent, rgba(212,175,55,0.05) 30%, rgba(212,175,55,0.05) 70%, transparent)",
              transform: `rotate(${i % 2 === 0 ? "2deg" : "-2deg"})`,
            }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: i * 0.1, ease: [0.16,1,0.3,1] }}
          />
        ))}
      </div>

      <div className="container-wide relative text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16,1,0.3,1] }}
          className="flex items-center justify-center gap-4 mb-10"
        >
          <span className="w-12 h-px bg-[#96690A] opacity-60" />
          <span className="eyebrow opacity-60">The Time Is Now</span>
          <span className="w-12 h-px bg-[#96690A] opacity-60" />
        </motion.div>

        {/* Headline */}
        <div className="overflow-hidden mb-1">
          <motion.h2
            initial={{ y: "105%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16,1,0.3,1] }}
            className="font-display font-black leading-[0.92] tracking-[-0.03em] text-[#1C1914]"
            style={{ fontSize: "clamp(52px, 9vw, 110px)" }}
          >
            READY TO
          </motion.h2>
        </div>

        <div className="overflow-hidden mb-12">
          <motion.h2
            initial={{ y: "105%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16,1,0.3,1] }}
            className="font-display font-black leading-[0.92] tracking-[-0.03em] text-gradient-gold"
            style={{ fontSize: "clamp(52px, 9vw, 110px)" }}
          >
            TRANSFORM?
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.16,1,0.3,1] }}
          className="font-body text-[#6B6658] text-lg max-w-md mx-auto mb-12 leading-[1.7]"
        >
          Join Salus Fitness today. The only thing you have to lose is the version of you that keeps putting it off.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.65, duration: 0.8, ease: [0.16,1,0.3,1] }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-12 md:mb-14 px-4 sm:px-0"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => document.querySelector("#membership")?.scrollIntoView({ behavior: "smooth" })}
            className="flex items-center justify-center gap-2.5 bg-[#D4AF37] text-[#0A0A0A] font-sans font-bold text-[11px] tracking-[0.22em] uppercase px-10 py-5 rounded-full hover:bg-[#E8CC5F] transition-all duration-300 shadow-[0_0_60px_rgba(212,175,55,0.3)] cursor-pointer border-none min-h-[56px]"
          >
            Join Today
            <ArrowRight size={14} />
          </motion.button>

          <motion.a
            href="tel:7674014383"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center justify-center gap-2 font-sans font-semibold text-[11px] tracking-[0.2em] uppercase px-10 py-5 rounded-full text-[#1C1914] border border-[rgba(0,0,0,0.15)] hover:border-[rgba(150,105,10,0.4)] hover:text-[#96690A] transition-all duration-300 min-h-[56px]"
          >
            <Phone size={13} />
            Call Now
          </motion.a>
        </motion.div>

        {/* Trust signals */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.85 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          {TRUST.map((t) => (
            <span key={t.label} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: t.dot }} />
              <span className="font-body text-[#8C8776] text-xs">{t.label}</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
