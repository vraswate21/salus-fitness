"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";

const REVIEWS = [
  {
    name: "Rohan Patil",
    rating: 5,
    date: "2 weeks ago",
    text: "World-class gym. The equipment is imported and top quality. Trainers are incredibly knowledgeable. Lost 12 kg in 3 months — results I never got anywhere else.",
    initials: "RP",
    color: "#D4AF37",
  },
  {
    name: "Sneha Kulkarni",
    rating: 5,
    date: "1 month ago",
    text: "As a woman, I always wanted a safe and comfortable gym. The dedicated women's area feels genuinely premium. Priya ma'am is the best trainer I've ever had.",
    initials: "SK",
    color: "#F472B6",
  },
  {
    name: "Arjun Deshmukh",
    rating: 5,
    date: "3 weeks ago",
    text: "Annual plan is worth every rupee. The AC, the music, the cleanliness — everything is perfect. Gained 8 kg of clean muscle in 4 months. Highly recommend.",
    initials: "AD",
    color: "#D4AF37",
  },
  {
    name: "Meera Joshi",
    rating: 5,
    date: "2 months ago",
    text: "The personalized diet plan was a game-changer. Combined with the HIIT sessions, I've completely transformed. Trainers actually track your progress and push you.",
    initials: "MJ",
    color: "#60A5FA",
  },
  {
    name: "Kiran Sharma",
    rating: 5,
    date: "1 week ago",
    text: "Best gym in the city, no competition. CrossFit area is excellent and trainer Rahul sir motivates you like no other. 10/10. Tell all your friends.",
    initials: "KS",
    color: "#D4AF37",
  },
  {
    name: "Pooja Nair",
    rating: 5,
    date: "3 months ago",
    text: "I was a complete beginner and felt so welcome. Six months in and I've completely changed my body and mindset. The community here is genuinely special.",
    initials: "PN",
    color: "#A78BFA",
  },
];

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={11} fill={i < n ? "#D4AF37" : "none"} className={i < n ? "text-[#D4AF37]" : "text-[#2A2A2A]"} />
      ))}
    </div>
  );
}

export function Reviews() {
  const [page, setPage] = useState(0);
  const perPage = 3;
  const total = Math.ceil(REVIEWS.length / perPage);
  const visible = REVIEWS.slice(page * perPage, page * perPage + perPage);

  return (
    <section id="reviews" className="section-padding bg-[#070707] relative overflow-hidden">
      <div
        className="absolute top-0 right-0 w-[500px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top right, rgba(212,175,55,0.035) 0%, transparent 65%)" }}
      />

      <div className="container-wide relative">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-8">
          <div className="md:max-w-lg">
            <SectionTitle
              label="Testimonials"
              title="Real results."
              highlight="Real people."
              align="left"
              className="mb-0"
            />
          </div>

          {/* Google rating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16,1,0.3,1] }}
            className="flex-shrink-0 glass border border-[rgba(255,255,255,0.05)] rounded-2xl px-5 py-4 md:px-6 md:py-5 flex items-center gap-4 md:gap-5"
          >
            <div className="text-center">
              <div className="font-display font-black text-4xl text-white leading-none tracking-[-0.03em]">4.9</div>
              <div className="flex justify-center mt-1.5 mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={10} fill="#D4AF37" className="text-[#D4AF37]" />
                ))}
              </div>
              <div className="font-body text-[#444] text-[10px] tracking-wider">Google Rating</div>
            </div>
            <div className="w-px h-10 bg-[#1A1A1A]" />
            <div className="text-center">
              <div className="font-display font-black text-2xl text-white leading-none tracking-[-0.02em]">500+</div>
              <div className="font-body text-[#444] text-[10px] tracking-wider mt-1.5">Reviews</div>
            </div>
          </motion.div>
        </div>

        {/* Review cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.45, ease: [0.16,1,0.3,1] }}
            className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-8 md:mb-10"
          >
            {visible.map((r, i) => (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, ease: [0.16,1,0.3,1] }}
                className="group relative bg-[#0D0D0D] border border-[#141414] rounded-2xl p-6 hover:border-[rgba(212,175,55,0.15)] transition-all duration-400 overflow-hidden"
              >
                {/* Hover: color top line */}
                <div
                  className="absolute top-0 left-0 right-0 h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                  style={{ background: `linear-gradient(90deg, ${r.color}, transparent)` }}
                />

                {/* Header */}
                <div className="flex items-start gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-display font-black text-[12px] flex-shrink-0"
                    style={{ background: `${r.color}12`, color: r.color }}
                  >
                    {r.initials}
                  </div>
                  <div>
                    <div className="font-sans font-semibold text-white text-[13px]">{r.name}</div>
                    <div className="font-body text-[#333] text-[11px] mt-0.5">{r.date}</div>
                  </div>
                </div>

                <Stars n={r.rating} />

                <p className="font-body text-[#666] text-[13px] leading-[1.75] mt-3">
                  &ldquo;{r.text}&rdquo;
                </p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="w-9 h-9 rounded-full border border-[#1E1E1E] flex items-center justify-center text-[#555] hover:border-[rgba(212,175,55,0.35)] hover:text-[#D4AF37] disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-300 cursor-pointer bg-transparent"
          >
            <ChevronLeft size={15} />
          </motion.button>

          <div className="flex gap-2">
            {Array.from({ length: total }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className="rounded-full transition-all duration-300 cursor-pointer border-none"
                style={{ width: page === i ? 22 : 6, height: 6, background: page === i ? "#D4AF37" : "#1E1E1E" }}
              />
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => setPage((p) => Math.min(total - 1, p + 1))}
            disabled={page === total - 1}
            className="w-9 h-9 rounded-full border border-[#1E1E1E] flex items-center justify-center text-[#555] hover:border-[rgba(212,175,55,0.35)] hover:text-[#D4AF37] disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-300 cursor-pointer bg-transparent"
          >
            <ChevronRight size={15} />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
