"use client";

import { motion } from "framer-motion";
import {
  Wind, Zap, Lock, ShowerHead, Car, Music2, Flame,
  Utensils, Users2, Dumbbell, Activity, Timer
} from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";

const facilities = [
  { icon: Dumbbell, label: "Cardio Zone", sub: "30+ machines" },
  { icon: Zap, label: "Strength Zone", sub: "Full free weights" },
  { icon: Lock, label: "Locker Rooms", sub: "Secure storage" },
  { icon: Users2, label: "Changing Room", sub: "Men & Women" },
  { icon: ShowerHead, label: "Shower", sub: "Hot & cold" },
  { icon: Car, label: "Free Parking", sub: "Ample space" },
  { icon: Flame, label: "Steam Room", sub: "Coming soon" },
  { icon: Music2, label: "DJ Music", sub: "Premium sound" },
  { icon: Wind, label: "Full AC", sub: "Year-round comfort" },
  { icon: Utensils, label: "Nutrition Bar", sub: "Protein & diet" },
  { icon: Activity, label: "CrossFit Area", sub: "Functional rigs" },
  { icon: Timer, label: "HIIT Zone", sub: "Dedicated space" },
];

export function Facilities() {
  return (
    <section id="facilities" className="section-padding bg-[#B7B3A7] relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(212,175,55,0.03) 0%, transparent 70%)",
        }}
      />

      <div className="container-wide relative">
        <SectionTitle
          label="Facilities"
          title="World-Class"
          highlight="Amenities"
          subtitle="Every convenience you need, precisely where you need it."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-3">
          {facilities.map((facility, i) => (
            <motion.div
              key={facility.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -6, scale: 1.05 }}
              className="group flex flex-col items-center text-center p-3 md:p-5 rounded-xl md:rounded-2xl bg-[#CAC6B9] border border-[#A29D8F] hover:border-[rgba(150,105,10,0.35)] transition-all duration-400 cursor-default"
            >
              <motion.div
                className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-2 md:mb-3 transition-all duration-400"
                style={{ background: "rgba(150,105,10,0.1)" }}
                whileHover={{ background: "rgba(150,105,10,0.18)", rotate: 5 }}
              >
                <facility.icon size={20} className="text-[#96690A]" />
              </motion.div>
              <span className="font-sans font-semibold text-[#1C1914] text-xs leading-snug mb-1">
                {facility.label}
              </span>
              <span className="text-[#8C8776] text-[10px] font-body">{facility.sub}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
