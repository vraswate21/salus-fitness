"use client";

import { motion } from "framer-motion";
import { ExternalLink, Dumbbell, Award, Clock } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";

const trainers = [
  {
    name: "Rahul Sharma",
    role: "Head Trainer",
    exp: "8 Years",
    specialization: "Strength & Powerlifting",
    cert: "ISSA Certified",
    initials: "RS",
    color: "#D4AF37",
    ig: "salus_fitness_gym",
  },
  {
    name: "Priya Mehta",
    role: "Women's Fitness Coach",
    exp: "5 Years",
    specialization: "Yoga & Functional",
    cert: "ACE Certified",
    initials: "PM",
    color: "#E8CC5F",
    ig: "salus_fitness_gym",
  },
  {
    name: "Vikram Nair",
    role: "Cardio Specialist",
    exp: "6 Years",
    specialization: "HIIT & Cardio",
    cert: "NASM Certified",
    initials: "VN",
    color: "#00E676",
    ig: "salus_fitness_gym",
  },
  {
    name: "Anjali Singh",
    role: "Nutrition Coach",
    exp: "4 Years",
    specialization: "Diet & Wellness",
    cert: "Precision Nutrition",
    initials: "AS",
    color: "#D4AF37",
    ig: "salus_fitness_gym",
  },
];

export function Trainers() {
  return (
    <section id="trainers" className="section-padding bg-[#090909] relative overflow-hidden">
      <div
        className="absolute right-0 bottom-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(212,175,55,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="container-wide relative">
        <SectionTitle
          label="Our Experts"
          title="Meet Your"
          highlight="Trainers"
          subtitle="Our certified professionals bring expertise, passion, and personalized attention to every session."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {trainers.map((trainer, i) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="bg-[#111111] border border-[#1E1E1E] rounded-2xl overflow-hidden transition-all duration-500 group-hover:border-[rgba(212,175,55,0.25)] group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                {/* Avatar area */}
                <div
                  className="relative h-56 flex items-center justify-center overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${trainer.color}10 0%, #0d0d0d 100%)`,
                  }}
                >
                  {/* Background pattern */}
                  <div className="absolute inset-0 cinema-grid opacity-20" />

                  {/* Glow */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `radial-gradient(ellipse at center, ${trainer.color}08 0%, transparent 70%)`,
                    }}
                  />

                  {/* Initials avatar */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative z-10 w-28 h-28 rounded-full border-2 flex items-center justify-center font-display font-black text-3xl"
                    style={{
                      borderColor: `${trainer.color}60`,
                      background: `${trainer.color}15`,
                      color: trainer.color,
                    }}
                  >
                    {trainer.initials}

                    {/* Rotating ring */}
                    <motion.div
                      className="absolute inset-0 rounded-full border border-dashed"
                      style={{ borderColor: `${trainer.color}30` }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />
                  </motion.div>

                  {/* Certification badge */}
                  <div
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full text-[10px] font-semibold tracking-wider uppercase flex items-center gap-1.5 whitespace-nowrap"
                    style={{
                      background: `${trainer.color}15`,
                      color: trainer.color,
                      border: `1px solid ${trainer.color}30`,
                    }}
                  >
                    <Award size={9} />
                    {trainer.cert}
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="font-sans font-bold text-white text-lg leading-snug mb-0.5">
                    {trainer.name}
                  </h3>
                  <p className="text-[#D4AF37] text-xs tracking-wide font-medium mb-3">
                    {trainer.role}
                  </p>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1.5 text-[#555555] text-xs">
                      <Clock size={11} />
                      <span>{trainer.exp}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[#555555] text-xs">
                      <Dumbbell size={11} />
                      <span>{trainer.specialization}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <motion.a
                      href={`https://instagram.com/${trainer.ig}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      className="flex-1 flex items-center justify-center gap-1.5 border border-[#2A2A2A] text-[#B8B8B8] hover:border-[#E1306C] hover:text-[#E1306C] text-xs py-2.5 rounded-xl transition-all duration-300"
                    >
                      <ExternalLink size={12} />
                      Follow
                    </motion.a>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      className="flex-1 text-[#0A0A0A] font-bold text-xs py-2.5 rounded-xl cursor-pointer border-none transition-all duration-300"
                      style={{ background: trainer.color }}
                    >
                      Book PT
                    </motion.button>
                  </div>
                </div>
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
          <p className="text-[#444] text-sm mb-4 font-body">
            All trainers available for 1:1 personal training sessions
          </p>
          <motion.a
            href="tel:7674014383"
            whileHover={{ scale: 1.04 }}
            className="inline-flex items-center gap-2 border border-[rgba(212,175,55,0.3)] text-[#D4AF37] text-sm font-semibold px-8 py-3.5 rounded-full hover:bg-[rgba(212,175,55,0.06)] transition-all duration-300"
          >
            Book a Session — 76740 14383
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
