"use client";

import { motion } from "framer-motion";
import { ArrowRight, Flame, Dumbbell, Zap, Star, Heart, Users, Trophy } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";

const programs = [
  {
    icon: Flame,
    title: "Weight Loss",
    duration: "8–12 Weeks",
    intensity: "High",
    desc: "Structured cardio and strength circuits designed to torch fat and reveal a leaner physique.",
    color: "#C1440E",
    tag: "Popular",
  },
  {
    icon: Dumbbell,
    title: "Muscle Building",
    duration: "12–16 Weeks",
    intensity: "Moderate–High",
    desc: "Progressive overload protocol to maximize hypertrophy and build dense, defined muscle.",
    color: "#96690A",
    tag: "Best Seller",
  },
  {
    icon: Trophy,
    title: "Strength Training",
    duration: "16 Weeks",
    intensity: "High",
    desc: "Powerlifting and strength-focused program to build raw power and functional strength.",
    color: "#7A5808",
    tag: null,
  },
  {
    icon: Star,
    title: "Beginner Fitness",
    duration: "6 Weeks",
    intensity: "Low–Moderate",
    desc: "A gentle introduction to fitness with foundational movements, habits, and guidance.",
    color: "#0A7A4E",
    tag: "Starter",
  },
  {
    icon: Heart,
    title: "Toning & Flexibility",
    duration: "8–10 Weeks",
    intensity: "Moderate",
    desc: "Holistic program focused on toning, flexibility, and total-body sculpting for lasting results.",
    color: "#C2185B",
    tag: null,
  },
  {
    icon: Users,
    title: "Senior Fitness",
    duration: "Ongoing",
    intensity: "Low",
    desc: "Safe, joint-friendly movements to improve mobility, balance, and vitality.",
    color: "#1D4ED8",
    tag: null,
  },
  {
    icon: Zap,
    title: "Personal Training",
    duration: "Custom",
    intensity: "Custom",
    desc: "1:1 tailored sessions with a dedicated trainer focused entirely on your unique goals.",
    color: "#96690A",
    tag: "Premium",
  },
];

export function Programs() {
  return (
    <section id="programs" className="section-padding bg-[#B7B3A7] relative overflow-hidden">
      <div
        className="absolute left-0 top-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(212,175,55,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="container-wide relative">
        <SectionTitle
          label="Programs"
          title="Workout"
          highlight="Programs"
          subtitle="Scientifically designed programs to match every goal, level, and lifestyle."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
          {programs.map((program, i) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.09 }}
              whileHover={{ y: -8 }}
              className="group relative bg-[#CAC6B9] border border-[#A29D8F] rounded-2xl p-6 hover:border-[rgba(150,105,10,0.3)] transition-all duration-400 cursor-default overflow-hidden"
            >
              {/* Background accent */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at top left, ${program.color}06 0%, transparent 60%)`,
                }}
              />

              {/* Tag */}
              {program.tag && (
                <div
                  className="inline-block text-[9px] font-bold tracking-[0.2em] uppercase px-2.5 py-1 rounded-full mb-4"
                  style={{
                    background: `${program.color}15`,
                    color: program.color,
                    border: `1px solid ${program.color}30`,
                  }}
                >
                  {program.tag}
                </div>
              )}
              {!program.tag && <div className="h-6 mb-4 hidden sm:block" />}

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${program.color}12` }}
              >
                <program.icon size={22} style={{ color: program.color }} />
              </div>

              {/* Content */}
              <h3 className="font-sans font-bold text-[#1C1914] text-lg mb-2 leading-snug">
                {program.title}
              </h3>
              <p className="text-[#6B6658] text-sm leading-relaxed mb-4 font-body">
                {program.desc}
              </p>

              {/* Meta */}
              <div className="flex items-center gap-4 mb-5">
                <div className="text-xs text-[#8C8776] font-sans">
                  <span className="text-[#6B6658]">Duration:</span> {program.duration}
                </div>
                <div className="text-xs text-[#8C8776] font-sans">
                  <span className="text-[#6B6658]">Intensity:</span> {program.intensity}
                </div>
              </div>

              {/* CTA */}
              <motion.button
                whileHover={{ x: 4 }}
                className="flex items-center gap-1.5 text-sm font-semibold transition-colors duration-300 cursor-pointer bg-transparent border-none p-0"
                style={{ color: program.color }}
              >
                Enquire Now
                <ArrowRight size={14} />
              </motion.button>

              {/* Bottom accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, ${program.color}60, transparent)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
