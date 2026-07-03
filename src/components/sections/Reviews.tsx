"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";

const REVIEWS = [
  {
    name: "Ravi Kumar",
    rating: 5,
    date: "2 weeks ago",
    text: "Best gym in Hyderabad, no doubt. Equipment is top quality and the trainers are extremely knowledgeable. Lost 10 kg in 3 months — results I never got anywhere else.",
    initials: "RK",
    color: "#96690A",
  },
  {
    name: "Priya Reddy",
    rating: 5,
    date: "1 month ago",
    text: "Very clean and well-maintained gym. The coaches are supportive and the environment is welcoming. I feel so comfortable here. Highly recommend to everyone!",
    initials: "PR",
    color: "#C2185B",
  },
  {
    name: "Aakash Rao",
    rating: 5,
    date: "3 weeks ago",
    text: "Annual plan is absolutely worth it. AC facility, great music, excellent cleanliness. Gained solid muscle in 4 months with the trainer's guidance. 10/10.",
    initials: "AR",
    color: "#96690A",
  },
  {
    name: "Divya Sharma",
    rating: 5,
    date: "2 months ago",
    text: "The diet plan combined with the workout sessions has been a game-changer for me. Trainers track your progress and genuinely push you to be better. Love it here.",
    initials: "DS",
    color: "#1D4ED8",
  },
  {
    name: "Suresh Naidu",
    rating: 5,
    date: "1 week ago",
    text: "Amazing gym on Green Hills Colony Road. Very affordable membership and the facilities are premium. The free trial session convinced me instantly. Great place!",
    initials: "SN",
    color: "#96690A",
  },
  {
    name: "Kavitha Menon",
    rating: 5,
    date: "3 months ago",
    text: "Started as a complete beginner and felt so welcome from day one. Six months later my body and confidence have completely transformed. The community is special.",
    initials: "KM",
    color: "#6D28D9",
  },
];

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={11} fill={i < n ? "#96690A" : "none"} className={i < n ? "text-[#96690A]" : "text-[#A29D8F]"} />
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
    <section id="reviews" className="section-padding bg-[#B7B3A7] relative overflow-hidden">
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
            className="flex-shrink-0 glass border border-[rgba(0,0,0,0.08)] rounded-2xl px-5 py-4 md:px-6 md:py-5 flex items-center gap-4 md:gap-5"
          >
            <div className="text-center">
              <div className="font-display font-black text-4xl text-[#1C1914] leading-none tracking-[-0.03em]">4.5</div>
              <div className="flex justify-center mt-1.5 mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={10} fill={i < 4 ? "#96690A" : "none"} strokeWidth={i < 4 ? 0 : 1.5} className={i < 4 ? "text-[#96690A]" : "text-[#96690A]"} />
                ))}
              </div>
              <div className="font-body text-[#8C8776] text-[10px] tracking-wider">Google Rating</div>
            </div>
            <div className="w-px h-10 bg-[#A29D8F]" />
            <div className="text-center">
              <a
                href="https://maps.google.com/maps?q=Salus+Fitness+Gym+Hyderabad"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:opacity-80 transition-opacity"
              >
                <div className="font-display font-black text-2xl text-[#1C1914] leading-none tracking-[-0.02em]">185</div>
                <div className="font-body text-[#8C8776] text-[10px] tracking-wider mt-1.5">Google Reviews</div>
              </a>
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
                className="group relative bg-[#CDC9BC] border border-[#A29D8F] rounded-2xl p-6 hover:border-[rgba(150,105,10,0.3)] transition-all duration-400 overflow-hidden"
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
                    <div className="font-sans font-semibold text-[#1C1914] text-[13px]">{r.name}</div>
                    <div className="font-body text-[#8C8776] text-[11px] mt-0.5">{r.date}</div>
                  </div>
                </div>

                <Stars n={r.rating} />

                <p className="font-body text-[#6B6658] text-[13px] leading-[1.75] mt-3">
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
            className="w-9 h-9 rounded-full border border-[#A29D8F] flex items-center justify-center text-[#6B6658] hover:border-[rgba(150,105,10,0.4)] hover:text-[#96690A] disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-300 cursor-pointer bg-transparent"
          >
            <ChevronLeft size={15} />
          </motion.button>

          <div className="flex gap-2">
            {Array.from({ length: total }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className="rounded-full transition-all duration-300 cursor-pointer border-none"
                style={{ width: page === i ? 22 : 6, height: 6, background: page === i ? "#96690A" : "#A29D8F" }}
              />
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => setPage((p) => Math.min(total - 1, p + 1))}
            disabled={page === total - 1}
            className="w-9 h-9 rounded-full border border-[#A29D8F] flex items-center justify-center text-[#6B6658] hover:border-[rgba(150,105,10,0.4)] hover:text-[#96690A] disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-300 cursor-pointer bg-transparent"
          >
            <ChevronRight size={15} />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
