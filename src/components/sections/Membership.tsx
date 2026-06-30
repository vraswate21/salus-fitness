"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Star, Zap } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";

const plans = [
  {
    id: "monthly",
    name: "Monthly",
    price: 1200,
    period: "month",
    badge: null,
    color: "#B8B8B8",
    features: [
      "Full gym access",
      "Cardio zone",
      "Locker facility",
      "Basic trainer guidance",
      "Progress tracking",
    ],
    missing: ["Diet plan", "Personal training", "Priority support"],
  },
  {
    id: "quarterly",
    name: "Quarterly",
    price: 3200,
    period: "3 months",
    badge: null,
    color: "#D4AF37",
    features: [
      "Full gym access",
      "Cardio zone",
      "Locker facility",
      "Diet plan included",
      "2 PT sessions/month",
      "Progress tracking",
    ],
    missing: ["Personal training", "Priority support"],
  },
  {
    id: "halfyearly",
    name: "Half Yearly",
    price: 5500,
    period: "6 months",
    badge: "Best Value",
    color: "#D4AF37",
    features: [
      "Full gym access",
      "Cardio zone",
      "Locker facility",
      "Personalized diet plan",
      "4 PT sessions/month",
      "Body measurements",
      "Priority support",
    ],
    missing: [],
  },
  {
    id: "annual",
    name: "Annual",
    price: 9500,
    period: "year",
    badge: "Most Savings",
    color: "#00E676",
    features: [
      "Full gym access",
      "Cardio zone",
      "Locker facility",
      "Personalized diet plan",
      "Unlimited PT sessions",
      "Body measurements",
      "Priority 1:1 support",
      "Free gym merchandise",
    ],
    missing: [],
  },
];

export function Membership() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="membership" className="section-padding bg-[#090909] relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 cinema-grid opacity-40"
        style={{ backgroundSize: "60px 60px" }}
      />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center top, rgba(212,175,55,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="container-wide relative">
        <SectionTitle
          label="Pricing"
          title="Choose Your"
          highlight="Plan"
          subtitle="Flexible membership options designed to match your commitment and budget."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {plans.map((plan, i) => {
            const isHighlighted = plan.badge === "Best Value";
            const isHovered = hovered === plan.id;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.25, 1, 0.5, 1] }}
                onHoverStart={() => setHovered(plan.id)}
                onHoverEnd={() => setHovered(null)}
                whileHover={{ y: -12, scale: 1.02 }}
                className="relative flex flex-col cursor-default"
              >
                {/* Best Value glow */}
                {isHighlighted && (
                  <div
                    className="absolute -inset-px rounded-2xl pointer-events-none"
                    style={{
                      background: "linear-gradient(135deg, rgba(212,175,55,0.4), transparent 50%, rgba(212,175,55,0.15))",
                    }}
                  />
                )}

                <div
                  className={`relative flex flex-col h-full rounded-2xl p-7 border transition-all duration-500 ${
                    isHighlighted
                      ? "bg-[#0F0F0F] border-[rgba(212,175,55,0.3)] shadow-[0_0_60px_rgba(212,175,55,0.1)]"
                      : "bg-[#111111] border-[#1E1E1E] hover:border-[rgba(212,175,55,0.2)]"
                  }`}
                >
                  {/* Badge */}
                  {plan.badge && (
                    <div className="flex justify-between items-start mb-4">
                      <span
                        className="text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full flex items-center gap-1.5"
                        style={{
                          background: plan.badge === "Best Value"
                            ? "rgba(212,175,55,0.15)"
                            : "rgba(0,230,118,0.12)",
                          color: plan.badge === "Best Value" ? "#D4AF37" : "#00E676",
                          border: `1px solid ${plan.badge === "Best Value" ? "rgba(212,175,55,0.3)" : "rgba(0,230,118,0.2)"}`,
                        }}
                      >
                        <Star size={10} fill="currentColor" />
                        {plan.badge}
                      </span>
                    </div>
                  )}
                  {!plan.badge && <div className="h-10 mb-4" />}

                  {/* Plan name */}
                  <div className="mb-6">
                    <span className="text-[#555555] text-xs tracking-[0.2em] uppercase font-sans">
                      {plan.name}
                    </span>
                    <div className="flex items-end gap-2 mt-2">
                      <span className="text-[#B8B8B8] text-lg font-medium">₹</span>
                      <span className="font-display font-black text-4xl text-white tracking-tight leading-none">
                        {plan.price.toLocaleString("en-IN")}
                      </span>
                    </div>
                    <span className="text-[#444444] text-sm mt-1 block">/{plan.period}</span>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-px bg-[#1E1E1E] mb-6" />

                  {/* Features */}
                  <div className="flex-1 space-y-3 mb-8">
                    {plan.features.map((f) => (
                      <div key={f} className="flex items-start gap-3">
                        <div
                          className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ background: `${plan.color}18` }}
                        >
                          <Check size={10} style={{ color: plan.color }} />
                        </div>
                        <span className="text-[#B8B8B8] text-sm leading-snug">{f}</span>
                      </div>
                    ))}
                    {plan.missing.map((f) => (
                      <div key={f} className="flex items-start gap-3 opacity-30">
                        <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-[#1A1A1A]">
                          <span className="w-1.5 h-px bg-[#444] block" />
                        </div>
                        <span className="text-[#444444] text-sm line-through leading-snug">{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full py-4 rounded-xl font-bold text-sm tracking-[0.15em] uppercase transition-all duration-300 cursor-pointer border-none"
                    style={
                      isHighlighted
                        ? {
                            background: "#D4AF37",
                            color: "#0A0A0A",
                            boxShadow: "0 0 30px rgba(212,175,55,0.25)",
                          }
                        : {
                            background: "transparent",
                            color: plan.color,
                            border: `1px solid ${plan.color}40`,
                          }
                    }
                  >
                    <span className="flex items-center justify-center gap-2">
                      <Zap size={14} />
                      Get Started
                    </span>
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-[#444444] text-sm mt-10 font-body"
        >
          All plans include AC gym access · Changing rooms · Basic nutrition guidance
          <br />
          <span className="text-[#D4AF37]">Call 76740 14383</span> to enroll or ask about student / couple discounts
        </motion.p>
      </div>
    </section>
  );
}
