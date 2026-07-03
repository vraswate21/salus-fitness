"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Star, ArrowRight, Phone } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";

const PLANS = [
  {
    id: "monthly",
    name: "Monthly",
    price: 1200,
    monthlyEq: 1200,
    badge: null,
    highlight: false,
    features: [
      "Full gym & cardio access",
      "AC facility",
      "Locker & changing room",
      "Basic trainer guidance",
      "Progress tracking app",
    ],
  },
  {
    id: "quarterly",
    name: "3 Months",
    price: 3200,
    monthlyEq: 1067,
    badge: "Save ₹400",
    highlight: false,
    features: [
      "Full gym & cardio access",
      "AC facility",
      "Locker & changing room",
      "Custom diet plan",
      "2 PT sessions / month",
      "Progress tracking app",
    ],
  },
  {
    id: "halfyearly",
    name: "6 Months",
    price: 5500,
    monthlyEq: 917,
    badge: "Best Value",
    highlight: true,
    features: [
      "Full gym & cardio access",
      "AC facility",
      "Locker & changing room",
      "Personalized diet plan",
      "4 PT sessions / month",
      "Body measurements",
      "Priority support",
    ],
  },
  {
    id: "annual",
    name: "Annual",
    price: 9500,
    monthlyEq: 792,
    badge: "Max Savings",
    highlight: false,
    features: [
      "Full gym & cardio access",
      "AC facility",
      "Locker & changing room",
      "Personalized diet plan",
      "Unlimited PT sessions",
      "Body measurements",
      "Priority 1-on-1 support",
      "Salus merchandise",
    ],
  },
];

export function Membership() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="membership" className="section-padding bg-[#B7B3A7] relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 cinema-grid opacity-30" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center top, rgba(212,175,55,0.05) 0%, transparent 65%)" }}
      />

      <div className="container-wide relative">
        <SectionTitle
          label="Membership"
          title="Invest in the"
          highlight="best version of you."
          subtitle="Flexible plans. No hidden costs. Start with a free trial."
        />


        {/* Trust signals */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16,1,0.3,1] }}
          className="flex flex-wrap items-center justify-center gap-6 mb-14"
        >
          {["Free first session", "No lock-in contract", "Student discounts", "Couple discounts"].map((t) => (
            <div key={t} className="flex items-center gap-2">
              <Check size={12} className="text-[#96690A]" />
              <span className="font-body text-[#6B6658] text-xs tracking-wide">{t}</span>
            </div>
          ))}
        </motion.div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {PLANS.map((plan, i) => {
            const isHovered = hovered === plan.id;
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.09, ease: [0.16,1,0.3,1] }}
                onHoverStart={() => setHovered(plan.id)}
                onHoverEnd={() => setHovered(null)}
                className="relative flex flex-col"
              >
                {/* Highlighted plan outer glow */}
                {plan.highlight && (
                  <div
                    className="absolute -inset-px rounded-[22px] pointer-events-none z-0"
                    style={{ background: "linear-gradient(135deg, rgba(212,175,55,0.35), transparent 50%, rgba(212,175,55,0.12))" }}
                  />
                )}

                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className={`relative z-10 flex flex-col h-full rounded-[20px] p-7 border transition-all duration-400 ${
                    plan.highlight
                      ? "bg-[#CDC9BC] border-[rgba(150,105,10,0.35)] shadow-[0_0_70px_rgba(150,105,10,0.12)]"
                      : "bg-[#C4C0B4] border-[#A29D8F] hover:border-[rgba(150,105,10,0.25)]"
                  }`}
                >
                  {/* Badge */}
                  <div className="h-8 mb-4 flex items-center">
                    {plan.badge && (
                      <span
                        className="flex items-center gap-1.5 text-[10px] font-bold tracking-[0.18em] uppercase px-3 py-1.5 rounded-full"
                        style={
                          plan.highlight
                            ? { background: "rgba(150,105,10,0.14)", color: "#96690A", border: "1px solid rgba(150,105,10,0.3)" }
                            : { background: "rgba(0,0,0,0.05)", color: "#4A453B", border: "1px solid rgba(0,0,0,0.08)" }
                        }
                      >
                        {plan.highlight && <Star size={9} fill="currentColor" />}
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  {/* Plan name */}
                  <div className="eyebrow text-[9px] opacity-50 mb-3">{plan.name}</div>

                  {/* Price */}
                  <div className="flex items-end gap-1 mb-1">
                    <span className="text-[#4A453B] text-base font-sans mt-1">₹</span>
                    <span
                      className="font-display font-black leading-none tracking-[-0.03em]"
                      style={{
                        fontSize: "clamp(36px, 5vw, 48px)",
                        color: plan.highlight ? "#96690A" : "#1C1914",
                      }}
                    >
                      {plan.price.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <div className="font-body text-[#8C8776] text-xs mb-1">/{plan.name.toLowerCase()}</div>
                  <div className="font-body text-[#8C8776] text-[11px] mb-7">
                    ≈ ₹{plan.monthlyEq.toLocaleString("en-IN")} / month
                  </div>

                  {/* Divider */}
                  <div
                    className="w-full h-px mb-6 transition-colors duration-300"
                    style={{ background: plan.highlight ? "rgba(150,105,10,0.15)" : "#A29D8F" }}
                  />

                  {/* Features */}
                  <div className="flex-1 space-y-3 mb-8">
                    {plan.features.map((f) => (
                      <div key={f} className="flex items-start gap-2.5">
                        <div
                          className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ background: "rgba(150,105,10,0.12)" }}
                        >
                          <Check size={9} style={{ color: "#96690A" }} />
                        </div>
                        <span className="font-body text-[#4A453B] text-[13px] leading-snug">{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => {
                      window.open(`https://wa.me/917674014383?text=Hi%2C%20I%27d%20like%20to%20join%20the%20${encodeURIComponent(plan.name)}%20plan%20at%20Salus%20Fitness.`, "_blank");
                    }}
                    className="w-full py-4 rounded-2xl font-sans font-bold text-[11px] tracking-[0.18em] uppercase flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer border-none"
                    style={
                      plan.highlight
                        ? { background: "#D4AF37", color: "#0A0A0A", boxShadow: "0 0 35px rgba(212,175,55,0.25)" }
                        : { background: "transparent", color: "#6B6658", border: "1px solid #A29D8F" }
                    }
                  >
                    Get Started
                    <ArrowRight size={12} />
                  </motion.button>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom trust row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
        >
          <p className="font-body text-[#8C8776] text-xs text-center">
            All plans include AC gym · Changing rooms · Basic nutrition guidance
          </p>
          <span className="hidden sm:block text-[#A29D8F] text-xs">·</span>
          <a
            href="tel:7674014383"
            className="flex items-center gap-1.5 font-body text-[#96690A] text-xs hover:underline"
          >
            <Phone size={11} />
            Call 76740 14383 for student & couple deals
          </a>
        </motion.div>
      </div>
    </section>
  );
}
