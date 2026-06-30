"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Phone } from "lucide-react";

export function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section ref={ref} className="relative py-32 overflow-hidden bg-[#0A0A0A]">
      {/* Background layers */}
      <motion.div style={{ y }} className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 cinema-grid opacity-40" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(ellipse, rgba(212,175,55,0.07) 0%, transparent 70%)",
          }}
        />
      </motion.div>

      {/* Diagonal accent lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[-30, -10, 10, 30].map((deg, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-full bg-gradient-to-b from-transparent via-[rgba(212,175,55,0.06)] to-transparent"
            style={{ left: `${20 + i * 20}%`, transform: `rotate(${deg}deg)`, transformOrigin: "center" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: i * 0.15, duration: 1 }}
          />
        ))}
      </div>

      <div className="container-wide relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
        >
          {/* Label */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="w-12 h-px bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs font-semibold tracking-[0.3em] uppercase font-sans">
              The Time Is Now
            </span>
            <span className="w-12 h-px bg-[#D4AF37]" />
          </div>

          {/* Headline */}
          <div className="overflow-hidden mb-3">
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
              className="font-display font-black text-[clamp(48px,8vw,100px)] leading-[0.95] tracking-tight text-white"
            >
              READY TO
            </motion.h2>
          </div>

          <div className="overflow-hidden mb-10">
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.35, ease: [0.25, 1, 0.5, 1] }}
              className="font-display font-black text-[clamp(48px,8vw,100px)] leading-[0.95] tracking-tight text-gradient-gold"
            >
              TRANSFORM?
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-[#666] text-lg md:text-xl max-w-lg mx-auto mb-12 font-body"
          >
            Join Salus Fitness today and begin the most rewarding journey of your life.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.65, duration: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.06, y: -3 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => document.querySelector("#membership")?.scrollIntoView({ behavior: "smooth" })}
              className="group flex items-center gap-2 bg-[#D4AF37] text-[#0A0A0A] font-black text-sm tracking-[0.2em] uppercase px-10 py-5 rounded-full hover:bg-[#E8CC5F] transition-all duration-300 shadow-[0_0_50px_rgba(212,175,55,0.35)] cursor-pointer border-none"
            >
              Join Today
              <motion.span
                className="group-hover:translate-x-1 transition-transform duration-300"
              >
                <ArrowRight size={16} />
              </motion.span>
            </motion.button>

            <motion.a
              href="tel:7674014383"
              whileHover={{ scale: 1.06, y: -3 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-2 border border-[rgba(255,255,255,0.15)] text-white font-semibold text-sm tracking-wider uppercase px-10 py-5 rounded-full hover:border-[rgba(212,175,55,0.4)] hover:text-[#D4AF37] backdrop-blur-sm transition-all duration-300"
            >
              <Phone size={14} />
              Call Now
            </motion.a>
          </motion.div>

          {/* Info row */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-6 mt-12 text-[#333] text-xs font-body"
          >
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E676]" />
              No hidden fees
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              Free first session
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E676]" />
              Join any day
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              5000+ members trust us
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
