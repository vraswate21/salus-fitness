"use client";

import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Clock } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";

const stories = [
  {
    name: "Rohit M.",
    type: "Weight Loss",
    duration: "4 Months",
    before: "94 kg",
    after: "72 kg",
    change: "−22 kg",
    color: "#00E676",
    icon: TrendingDown,
    quote: "I never believed I could transform this much. Salus Fitness changed my life.",
    initials: "RM",
  },
  {
    name: "Kavya S.",
    type: "Muscle Gain",
    duration: "6 Months",
    before: "52 kg",
    after: "61 kg",
    change: "+9 kg",
    color: "#D4AF37",
    icon: TrendingUp,
    quote: "From skinny to strong. The trainers guided me every step of the way.",
    initials: "KS",
  },
  {
    name: "Deepak R.",
    type: "Body Composition",
    duration: "5 Months",
    before: "28% BF",
    after: "14% BF",
    change: "−14% BF",
    color: "#E8CC5F",
    icon: TrendingDown,
    quote: "Lost fat and built muscle simultaneously. The diet plan was a game changer.",
    initials: "DR",
  },
  {
    name: "Ananya P.",
    type: "Strength",
    duration: "8 Months",
    before: "Bench: 20 kg",
    after: "Bench: 60 kg",
    change: "+40 kg",
    color: "#FF6B35",
    icon: TrendingUp,
    quote: "From absolute beginner to lifting 3× my starting weight. Unbelievable.",
    initials: "AP",
  },
];

export function Transformations() {
  return (
    <section id="transformations" className="section-padding bg-[#0A0A0A] relative overflow-hidden">
      <div
        className="absolute inset-0 cinema-grid opacity-30"
        style={{ backgroundSize: "80px 80px" }}
      />
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(212,175,55,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="container-wide relative">
        <SectionTitle
          label="Results"
          title="Real"
          highlight="Transformations"
          subtitle="These results belong to real Salus Fitness members — no filters, no shortcuts."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stories.map((story, i) => (
            <motion.div
              key={story.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-[#111] border border-[#1E1E1E] rounded-2xl overflow-hidden hover:border-[rgba(212,175,55,0.2)] transition-all duration-500 cursor-default"
            >
              {/* Top color bar */}
              <div className="h-1 w-full" style={{ background: story.color }} />

              {/* Avatar section */}
              <div
                className="relative p-6 pb-0 flex flex-col items-center text-center"
                style={{
                  background: `linear-gradient(180deg, ${story.color}08 0%, transparent 100%)`,
                }}
              >
                {/* Avatar */}
                <div
                  className="w-20 h-20 rounded-full border-2 flex items-center justify-center font-display font-black text-xl mb-4"
                  style={{ borderColor: `${story.color}50`, background: `${story.color}12`, color: story.color }}
                >
                  {story.initials}
                </div>

                <h3 className="font-sans font-bold text-white text-base">{story.name}</h3>
                <div
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full mt-2"
                  style={{ background: `${story.color}15`, color: story.color }}
                >
                  <story.icon size={10} />
                  {story.type}
                </div>
              </div>

              {/* Stats */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-center">
                    <div className="text-[#555] text-[10px] uppercase tracking-wider mb-1 font-sans">Before</div>
                    <div className="font-display font-bold text-white text-base">{story.before}</div>
                  </div>
                  <div
                    className="flex flex-col items-center"
                    style={{ color: story.color }}
                  >
                    <story.icon size={16} />
                    <span className="font-display font-black text-sm mt-0.5">{story.change}</span>
                  </div>
                  <div className="text-center">
                    <div className="text-[#555] text-[10px] uppercase tracking-wider mb-1 font-sans">After</div>
                    <div className="font-display font-bold text-white text-base">{story.after}</div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-[#444] text-xs mb-4 font-body">
                  <Clock size={11} />
                  <span>{story.duration} at Salus Fitness</span>
                </div>

                <p className="text-[#555] text-xs leading-relaxed italic font-body border-l-2 pl-3" style={{ borderColor: `${story.color}40` }}>
                  "{story.quote}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-[#333] text-sm mb-4 font-body">
            Results vary per individual. Consistent training + diet = guaranteed progress.
          </p>
          <motion.button
            whileHover={{ scale: 1.04 }}
            onClick={() => document.querySelector("#bmi")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-[#D4AF37] text-[#0A0A0A] font-black text-xs tracking-[0.2em] uppercase px-8 py-4 rounded-full hover:bg-[#E8CC5F] transition-all duration-300 cursor-pointer border-none shadow-[0_0_30px_rgba(212,175,55,0.2)]"
          >
            Start Your Transformation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
