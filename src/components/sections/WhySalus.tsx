"use client";

import { motion } from "framer-motion";
import {
  Dumbbell, Heart, Salad, TrendingUp, Zap, Activity,
  Flame, Timer, Target, Wind, Users2, Shield
} from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";

const features = [
  {
    icon: Dumbbell,
    title: "Imported Equipment",
    desc: "World-class machines imported from top global brands for superior performance.",
    color: "#D4AF37",
  },
  {
    icon: Shield,
    title: "Certified Trainers",
    desc: "Our expert trainers hold certifications from internationally recognized institutes.",
    color: "#00E676",
  },
  {
    icon: Salad,
    title: "Personal Diet Plans",
    desc: "Customized nutrition guidance tailored to your body type and fitness goals.",
    color: "#D4AF37",
  },
  {
    icon: TrendingUp,
    title: "Body Transformation",
    desc: "Proven transformation programs with tracked progress and guaranteed results.",
    color: "#00E676",
  },
  {
    icon: Target,
    title: "Strength Training",
    desc: "Complete free weights zone with barbells, dumbbells, cable machines, and more.",
    color: "#D4AF37",
  },
  {
    icon: Heart,
    title: "Cardio Zone",
    desc: "Treadmills, bikes, ellipticals, and rowers — premium cardio equipment.",
    color: "#00E676",
  },
  {
    icon: Zap,
    title: "CrossFit",
    desc: "Functional movements performed at high intensity to maximize conditioning.",
    color: "#D4AF37",
  },
  {
    icon: Flame,
    title: "HIIT",
    desc: "High-Intensity Interval Training sessions that burn fat fast and build stamina.",
    color: "#00E676",
  },
  {
    icon: Activity,
    title: "Functional Training",
    desc: "Movement-based workouts to improve everyday performance and posture.",
    color: "#D4AF37",
  },
  {
    icon: Wind,
    title: "AC Gym",
    desc: "Fully air-conditioned facility for an uninterrupted, comfortable workout.",
    color: "#00E676",
  },
  {
    icon: Users2,
    title: "Women's Zone",
    desc: "Private, dedicated area for women with curated equipment and female trainers.",
    color: "#D4AF37",
  },
  {
    icon: Timer,
    title: "Flexible Hours",
    desc: "Open 6 AM – 10 PM, seven days a week, to fit your schedule perfectly.",
    color: "#00E676",
  },
];

export function WhySalus() {
  return (
    <section id="why-salus" className="section-padding bg-[#0A0A0A] relative overflow-hidden">
      {/* Background accents */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(212,175,55,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="container-wide relative">
        <SectionTitle
          label="Why Choose Us"
          title="Everything You Need"
          highlight="Under One Roof"
          subtitle="We've built a complete fitness ecosystem where every detail is designed to help you reach your peak."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: (i % 4) * 0.08,
                ease: [0.25, 1, 0.5, 1],
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative premium-card p-6 cursor-default"
            >
              {/* Card glow on hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(ellipse at top left, ${feature.color}08 0%, transparent 60%)`,
                }}
              />

              {/* Icon */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 relative"
                style={{ background: `${feature.color}12` }}
              >
                <feature.icon size={20} style={{ color: feature.color }} />
              </div>

              {/* Content */}
              <h3 className="font-sans font-semibold text-white text-base mb-2 leading-snug">
                {feature.title}
              </h3>
              <p className="text-[#666666] text-sm leading-relaxed font-body">
                {feature.desc}
              </p>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, ${feature.color}40, transparent)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
