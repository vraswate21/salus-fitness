"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";

const reviews = [
  {
    name: "Rohan Patil",
    rating: 5,
    date: "2 weeks ago",
    text: "Absolutely world-class gym. The equipment is imported and top quality. The trainers are incredibly knowledgeable and push you in the right direction. Lost 12 kg in 3 months!",
    initials: "RP",
    color: "#D4AF37",
  },
  {
    name: "Sneha Kulkarni",
    rating: 5,
    date: "1 month ago",
    text: "As a woman, I always wanted a safe and comfortable gym. Salus Fitness has a dedicated women's area that feels premium. Priya ma'am is the best trainer I've ever had.",
    initials: "SK",
    color: "#FF4B8B",
  },
  {
    name: "Arjun Deshmukh",
    rating: 5,
    date: "3 weeks ago",
    text: "Joined for the annual plan and it's worth every rupee. The AC, the music, the cleanliness — everything is perfect. Gained 8 kg muscle in 4 months. Highly recommend!",
    initials: "AD",
    color: "#00E676",
  },
  {
    name: "Meera Joshi",
    rating: 5,
    date: "2 months ago",
    text: "The diet plan they gave me was amazing. Combined with the HIIT sessions, I've transformed completely. The trainers actually care about your progress.",
    initials: "MJ",
    color: "#64B5F6",
  },
  {
    name: "Kiran Sharma",
    rating: 5,
    date: "1 week ago",
    text: "Best gym in the city, no competition. The CrossFit area is excellent and the trainer Rahul sir is a beast — motivates you like no other. 10/10.",
    initials: "KS",
    color: "#E8CC5F",
  },
  {
    name: "Pooja Nair",
    rating: 5,
    date: "3 months ago",
    text: "I was a complete beginner and the trainers made me feel so welcome. The beginner program is perfect. Six months in and I've completely changed my body and lifestyle.",
    initials: "PN",
    color: "#D4AF37",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={12}
          className={i < rating ? "text-[#D4AF37]" : "text-[#333]"}
          fill={i < rating ? "#D4AF37" : "none"}
        />
      ))}
    </div>
  );
}

export function Reviews() {
  const [page, setPage] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(reviews.length / perPage);
  const visible = reviews.slice(page * perPage, page * perPage + perPage);

  return (
    <section id="reviews" className="section-padding bg-[#090909] relative overflow-hidden">
      <div
        className="absolute top-0 right-0 w-[600px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at top right, rgba(212,175,55,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="container-wide relative">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionTitle
            label="Testimonials"
            title="What Our"
            highlight="Members Say"
            align="left"
            className="mb-0"
          />

          {/* Google rating summary */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-shrink-0 bg-[#111] border border-[#1E1E1E] rounded-2xl px-6 py-4 flex items-center gap-4"
          >
            <div className="text-center">
              <div className="font-display font-black text-4xl text-white leading-none">4.9</div>
              <div className="flex justify-center mt-1.5 mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={10} fill="#D4AF37" className="text-[#D4AF37]" />
                ))}
              </div>
              <div className="text-[#444] text-xs font-body">Google Rating</div>
            </div>
            <div className="w-px h-12 bg-[#1E1E1E]" />
            <div className="text-center">
              <div className="font-display font-black text-2xl text-white leading-none">500+</div>
              <div className="text-[#444] text-xs mt-1.5 font-body">Reviews</div>
            </div>
          </motion.div>
        </div>

        {/* Reviews grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10"
          >
            {visible.map((review, i) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#111] border border-[#1E1E1E] rounded-2xl p-6 hover:border-[rgba(212,175,55,0.2)] transition-all duration-400 group relative overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, transparent, ${review.color}60, transparent)` }}
                />

                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center font-display font-black text-sm"
                      style={{ background: `${review.color}18`, color: review.color }}
                    >
                      {review.initials}
                    </div>
                    <div>
                      <div className="font-sans font-semibold text-white text-sm">{review.name}</div>
                      <div className="text-[#444] text-xs font-body">{review.date}</div>
                    </div>
                  </div>
                  <Quote size={18} className="text-[#1E1E1E]" />
                </div>

                <StarRating rating={review.rating} />

                <p className="text-[#888] text-sm leading-relaxed mt-3 font-body">
                  "{review.text}"
                </p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="w-10 h-10 rounded-full border border-[#2A2A2A] flex items-center justify-center text-[#666] hover:border-[#D4AF37] hover:text-[#D4AF37] disabled:opacity-30 transition-all duration-300 cursor-pointer bg-transparent"
          >
            <ChevronLeft size={16} />
          </motion.button>

          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className="transition-all duration-300 cursor-pointer border-none rounded-full"
                style={{
                  width: page === i ? "24px" : "6px",
                  height: "6px",
                  background: page === i ? "#D4AF37" : "#2A2A2A",
                }}
              />
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            className="w-10 h-10 rounded-full border border-[#2A2A2A] flex items-center justify-center text-[#666] hover:border-[#D4AF37] hover:text-[#D4AF37] disabled:opacity-30 transition-all duration-300 cursor-pointer bg-transparent"
          >
            <ChevronRight size={16} />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
