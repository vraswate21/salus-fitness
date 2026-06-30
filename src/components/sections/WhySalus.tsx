"use client";

import { motion } from "framer-motion";
import {
  Dumbbell, Shield, Salad, TrendingUp, Zap, Flame,
  Wind, Users2, Timer, Activity
} from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";

const FEATURES = [
  { num: "01", icon: Dumbbell,  title: "Machines that perform",   desc: "World-class imported equipment — because results start with the right tools." },
  { num: "02", icon: Shield,    title: "Coaches who care",         desc: "Every certified trainer is invested in your transformation, not just your attendance." },
  { num: "03", icon: Salad,     title: "Fuel your body right",     desc: "Personalized nutrition plans built around your metabolism, not generic templates." },
  { num: "04", icon: TrendingUp,title: "Results you can see",      desc: "Proven body transformation programs with measurable milestones at every step." },
  { num: "05", icon: Zap,       title: "Intensity that works",     desc: "CrossFit and HIIT sessions engineered to burn fat and build real endurance fast." },
  { num: "06", icon: Flame,     title: "Strength without limits",  desc: "Full free-weights zone — barbells, dumbbells to 60kg, cables, power racks." },
  { num: "07", icon: Wind,      title: "Comfort while you grind",  desc: "Fully air-conditioned facility so nothing stands between you and your best session." },
  { num: "08", icon: Users2,    title: "A space made for women",   desc: "Private zone, female trainers, curated equipment — training the way you deserve." },
  { num: "09", icon: Activity,  title: "Move better every day",    desc: "Functional training that improves posture, mobility, and real-world performance." },
  { num: "10", icon: Timer,     title: "On your schedule",         desc: "Open 6 AM – 10 PM, Mon–Sat. Your progress doesn't wait for convenience." },
];

export function WhySalus() {
  return (
    <section id="why-salus" className="section-padding bg-[#0A0A0A] relative overflow-hidden">
      {/* Background accents */}
      <div
        className="absolute right-0 top-0 w-[600px] h-[600px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top right, rgba(212,175,55,0.035) 0%, transparent 65%)" }}
      />
      <div
        className="absolute left-0 bottom-0 w-[400px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at bottom left, rgba(212,175,55,0.02) 0%, transparent 65%)" }}
      />

      <div className="container-wide relative">
        {/* Header — editorial split */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-20">
          <div className="lg:max-w-lg">
            <SectionTitle
              label="Why Salus"
              title="Built for people who"
              highlight="don't quit."
              align="left"
              className="mb-0"
            />
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16,1,0.3,1] }}
            className="lg:max-w-xs font-body text-[#555] text-sm leading-[1.85]"
          >
            We built Salus Fitness around one obsession — making it impossible for you to not see results. Every detail here has a purpose.
          </motion.p>
        </div>

        {/* Feature grid — no gap, divided by 1px lines */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-[#141414]">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: (i % 5) * 0.07, ease: [0.16,1,0.3,1] }}
              className="group relative bg-[#0A0A0A] p-7 cursor-default overflow-hidden transition-colors duration-400 hover:bg-[#0E0E0E]"
            >
              {/* Hover: gold top border draw */}
              <div className="absolute top-0 left-0 right-0 h-px bg-[#D4AF37] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              {/* Big number — ghost text */}
              <div
                className="font-display font-black text-[#141414] group-hover:text-[rgba(212,175,55,0.07)] transition-colors duration-500 select-none leading-none mb-4"
                style={{ fontSize: "clamp(44px, 5.5vw, 72px)" }}
              >
                {f.num}
              </div>

              {/* Icon */}
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center mb-4 transition-transform duration-400 group-hover:scale-110"
                style={{ background: "rgba(212,175,55,0.07)" }}
              >
                <f.icon size={16} style={{ color: "#D4AF37" }} />
              </div>

              {/* Title */}
              <h3 className="font-sans font-semibold text-[13px] text-white leading-snug mb-2.5 tracking-[-0.01em]">
                {f.title}
              </h3>

              {/* Description */}
              <p className="font-body text-[#555] text-[12px] leading-[1.75]">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
