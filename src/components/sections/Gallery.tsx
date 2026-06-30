"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";

const CARDS = [
  {
    id: 1,
    label: "Strength Zone",
    sub: "Iron. Sweat. Repeat.",
    bg: "linear-gradient(135deg, #1A0F00 0%, #0D0900 50%, #050300 100%)",
    accent: "#D4AF37",
    pattern: "rings",
    size: "tall",
  },
  {
    id: 2,
    label: "Cardio Area",
    sub: "Your heart's second home.",
    bg: "linear-gradient(135deg, #001420 0%, #000D14 50%, #000508 100%)",
    accent: "#60A5FA",
    pattern: "waves",
    size: "wide",
  },
  {
    id: 3,
    label: "Free Weights",
    sub: "60kg dumbbells. No excuses.",
    bg: "linear-gradient(135deg, #0F0F0F 0%, #0A0A0A 100%)",
    accent: "#D4AF37",
    pattern: "grid",
    size: "square",
  },
  {
    id: 4,
    label: "Women's Zone",
    sub: "Private. Powerful. Yours.",
    bg: "linear-gradient(135deg, #1A001A 0%, #0D000D 50%, #050005 100%)",
    accent: "#F472B6",
    pattern: "dots",
    size: "square",
  },
  {
    id: 5,
    label: "CrossFit Area",
    sub: "Functional. Fierce. Fast.",
    bg: "linear-gradient(135deg, #001A00 0%, #000D00 50%, #000500 100%)",
    accent: "#34D399",
    pattern: "rings",
    size: "tall",
  },
  {
    id: 6,
    label: "HIIT Zone",
    sub: "Burn more in less time.",
    bg: "linear-gradient(135deg, #1A0800 0%, #0D0400 50%, #050200 100%)",
    accent: "#FB923C",
    pattern: "lines",
    size: "wide",
  },
  {
    id: 7,
    label: "Functional Training",
    sub: "Move better. Live stronger.",
    bg: "linear-gradient(135deg, #001818 0%, #000D0D 50%, #000505 100%)",
    accent: "#A78BFA",
    pattern: "grid",
    size: "square",
  },
  {
    id: 8,
    label: "Recovery Lounge",
    sub: "Rest is part of the plan.",
    bg: "linear-gradient(135deg, #111111 0%, #0A0A0A 100%)",
    accent: "#D4AF37",
    pattern: "dots",
    size: "square",
  },
];

function CardPattern({ pattern, accent }: { pattern: string; accent: string }) {
  if (pattern === "rings") return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200" fill="none">
      {[40, 70, 100, 130].map((r, i) => (
        <circle key={i} cx="100" cy="100" r={r} stroke={accent} strokeOpacity={0.06 + i * 0.02} strokeWidth="1" />
      ))}
      <circle cx="100" cy="100" r="8" fill={accent} fillOpacity="0.15" />
    </svg>
  );
  if (pattern === "waves") return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200" fill="none">
      {[0, 30, 60, 90, 120].map((y, i) => (
        <path key={i} d={`M0,${y+40} Q50,${y+20} 100,${y+40} T200,${y+40}`} stroke={accent} strokeOpacity={0.06} strokeWidth="1.5" />
      ))}
    </svg>
  );
  if (pattern === "grid") return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200" fill="none">
      {[0,1,2,3,4,5,6].map(i => (
        <line key={`v${i}`} x1={i*34} y1="0" x2={i*34} y2="200" stroke={accent} strokeOpacity="0.06" strokeWidth="1" />
      ))}
      {[0,1,2,3,4,5,6].map(i => (
        <line key={`h${i}`} x1="0" y1={i*34} x2="200" y2={i*34} stroke={accent} strokeOpacity="0.06" strokeWidth="1" />
      ))}
    </svg>
  );
  if (pattern === "dots") return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200" fill="none">
      {Array.from({ length: 25 }, (_, i) => (
        <circle key={i} cx={(i % 5) * 45 + 10} cy={Math.floor(i / 5) * 45 + 10} r="2" fill={accent} fillOpacity="0.1" />
      ))}
    </svg>
  );
  if (pattern === "lines") return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200" fill="none">
      {[0,1,2,3,4,5].map(i => (
        <line key={i} x1="0" y1={i*40+10} x2="200" y2={i*40-10} stroke={accent} strokeOpacity="0.07" strokeWidth="1.5" />
      ))}
    </svg>
  );
  return null;
}

export function Gallery() {
  const [selected, setSelected] = useState<(typeof CARDS)[0] | null>(null);

  const getClass = (size: string) => ({
    tall:   "md:row-span-2",
    wide:   "md:col-span-2",
    square: "",
  }[size] ?? "");

  return (
    <section id="gallery" className="section-padding bg-[#080808] relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(212,175,55,0.03) 0%, transparent 70%)" }}
      />

      <div className="container-wide relative">
        <SectionTitle
          label="Gallery"
          title="Every zone is"
          highlight="a statement."
          subtitle="Premium facilities designed with intent — not just square footage."
        />

        {/* Masonry grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] md:auto-rows-[200px] gap-2 md:gap-3">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: i * 0.055, ease: [0.16,1,0.3,1] }}
              className={`relative rounded-xl md:rounded-2xl overflow-hidden cursor-pointer group ${getClass(card.size)}`}
              onClick={() => setSelected(card)}
            >
              {/* Background */}
              <div className="absolute inset-0" style={{ background: card.bg }} />

              {/* Geometric pattern */}
              <CardPattern pattern={card.pattern} accent={card.accent} />

              {/* Radial glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(ellipse at center, ${card.accent}0D 0%, transparent 65%)` }}
              />

              {/* Corner accent */}
              <div
                className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full transition-all duration-400 group-hover:scale-150 group-hover:opacity-100 opacity-50"
                style={{ background: card.accent }}
              />

              {/* Top border — reveals on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                style={{ background: `linear-gradient(90deg, ${card.accent}, transparent)` }}
              />

              {/* Label — always visible, more premium on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[rgba(0,0,0,0.9)] via-[rgba(0,0,0,0.4)] to-transparent">
                <p className="eyebrow text-[9px] mb-1 opacity-0 group-hover:opacity-60 transition-opacity duration-300" style={{ color: card.accent }}>
                  Salus Fitness
                </p>
                <h3 className="font-sans font-bold text-white text-[13px] leading-tight tracking-[-0.01em]">
                  {card.label}
                </h3>
                <p className="font-body text-[11px] text-[#666] mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {card.sub}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram link */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-[#333] text-sm mt-10 font-body"
        >
          See more on Instagram{" "}
          <a
            href="https://instagram.com/salus_fitness_gym"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D4AF37] hover:underline"
          >
            @salus_fitness_gym
          </a>
        </motion.p>
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.92)] backdrop-blur-2xl p-6"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0, y: 20 }}
              animate={{ scale: 1,    opacity: 1, y: 0  }}
              exit={{ scale: 0.88,    opacity: 0, y: 20  }}
              transition={{ type: "spring", stiffness: 350, damping: 32 }}
              className="relative w-full max-w-xl rounded-2xl overflow-hidden"
              style={{ aspectRatio: "16/9" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Lightbox background */}
              <div className="absolute inset-0" style={{ background: selected.bg }} />
              <CardPattern pattern={selected.pattern} accent={selected.accent} />

              {/* Radial glow */}
              <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at center, ${selected.accent}0D 0%, transparent 70%)` }} />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <div
                  className="w-14 h-14 rounded-full border flex items-center justify-center mb-5"
                  style={{ borderColor: `${selected.accent}40`, background: `${selected.accent}08` }}
                >
                  <div className="w-3 h-3 rounded-full" style={{ background: selected.accent }} />
                </div>
                <h3 className="font-display font-black text-3xl text-white tracking-[-0.02em] mb-2">
                  {selected.label}
                </h3>
                <p className="font-body text-[#666] text-sm">{selected.sub}</p>
                <p className="font-body text-[#333] text-xs mt-4">Salus Fitness · Premium AC Gym</p>
              </div>

              {/* Close */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[rgba(0,0,0,0.6)] backdrop-blur flex items-center justify-center text-white cursor-pointer border border-[rgba(255,255,255,0.1)]"
              >
                <X size={15} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
