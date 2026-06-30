"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";

const galleryItems = [
  { id: 1, label: "Strength Zone", aspect: "tall", bg: "from-[#1a1200] to-[#0d0d0d]", accent: "#D4AF37" },
  { id: 2, label: "Cardio Area", aspect: "wide", bg: "from-[#001a0d] to-[#0d0d0d]", accent: "#00E676" },
  { id: 3, label: "Free Weights", aspect: "square", bg: "from-[#1a1200] to-[#0d0d0d]", accent: "#D4AF37" },
  { id: 4, label: "Women's Zone", aspect: "square", bg: "from-[#1a001a] to-[#0d0d0d]", accent: "#E8CC5F" },
  { id: 5, label: "CrossFit Area", aspect: "tall", bg: "from-[#001a0d] to-[#0d0d0d]", accent: "#00E676" },
  { id: 6, label: "Locker Room", aspect: "wide", bg: "from-[#0d0d1a] to-[#0d0d0d]", accent: "#D4AF37" },
  { id: 7, label: "HIIT Zone", aspect: "square", bg: "from-[#1a0d00] to-[#0d0d0d]", accent: "#E8CC5F" },
  { id: 8, label: "Functional Area", aspect: "square", bg: "from-[#001a1a] to-[#0d0d0d]", accent: "#00E676" },
];

const heightMap = {
  tall: "row-span-2 h-80 md:h-full",
  wide: "col-span-1 md:col-span-2 h-52",
  square: "h-52",
};

export function Gallery() {
  const [selected, setSelected] = useState<(typeof galleryItems)[0] | null>(null);

  return (
    <section id="gallery" className="section-padding bg-[#0A0A0A] relative">
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(212,175,55,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="container-wide relative">
        <SectionTitle
          label="Gallery"
          title="Inside"
          highlight="Salus Fitness"
          subtitle="State-of-the-art facilities designed for peak performance and comfort."
        />

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-auto">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className={`relative rounded-2xl overflow-hidden cursor-pointer group ${heightMap[item.aspect as keyof typeof heightMap]}`}
              onClick={() => setSelected(item)}
            >
              {/* Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.bg}`} />

              {/* Grid overlay */}
              <div className="absolute inset-0 cinema-grid opacity-30" />

              {/* Accent glow */}
              <div
                className="absolute inset-0"
                style={{
                  background: `radial-gradient(ellipse at center, ${item.accent}10 0%, transparent 70%)`,
                }}
              />

              {/* Decorative elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-16 h-16 rounded-full border opacity-20"
                  style={{ borderColor: item.accent }}
                />
              </div>
              <div
                className="absolute top-4 right-4 w-2 h-2 rounded-full"
                style={{ background: item.accent, opacity: 0.6 }}
              />

              {/* Hover overlay */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                style={{ background: "rgba(0,0,0,0.5)" }}
              >
                <ZoomIn size={28} style={{ color: item.accent }} />
              </motion.div>

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <span className="text-white text-sm font-semibold font-sans">{item.label}</span>
              </div>

              {/* Border glow on hover */}
              <div
                className="absolute inset-0 rounded-2xl border opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{ borderColor: `${item.accent}40` }}
              />
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-[#444] text-sm mt-8 font-body"
        >
          Follow{" "}
          <a
            href="https://instagram.com/salus_fitness_gym"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D4AF37] hover:underline"
          >
            @salus_fitness_gym
          </a>{" "}
          on Instagram for the latest updates
        </motion.p>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-full max-w-2xl aspect-video rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className={`w-full h-full bg-gradient-to-br ${selected.bg} flex items-center justify-center`}
              >
                <div className="text-center">
                  <div
                    className="w-24 h-24 rounded-full border-2 flex items-center justify-center mx-auto mb-4"
                    style={{ borderColor: selected.accent }}
                  >
                    <ZoomIn size={32} style={{ color: selected.accent }} />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white mb-2">
                    {selected.label}
                  </h3>
                  <p className="text-[#666] text-sm">
                    Premium facility at Salus Fitness
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur flex items-center justify-center text-white cursor-pointer border-none"
              >
                <X size={16} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
