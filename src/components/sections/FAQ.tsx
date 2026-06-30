"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";

const faqs = [
  {
    q: "What are the gym timings?",
    a: "Salus Fitness is open Monday to Saturday from 6:00 AM to 10:00 PM, and Sunday from 8:00 AM to 8:00 PM. We recommend arriving 15 minutes before your first class.",
  },
  {
    q: "Do you offer a free trial?",
    a: "Yes! We offer a complimentary free trial session for all new visitors. Simply call 76740 14383 or walk in to schedule your free workout session with one of our trainers.",
  },
  {
    q: "Is there a separate area for women?",
    a: "Absolutely. Salus Fitness has a dedicated, private women's zone with curated equipment, female trainers, and a comfortable environment. You will feel safe and supported.",
  },
  {
    q: "What memberships are available?",
    a: "We offer Monthly (₹1,200), Quarterly (₹3,200), Half Yearly (₹5,500), and Annual (₹9,500) plans. Student and couple discounts are also available.",
  },
  {
    q: "Are personal training sessions included?",
    a: "Basic trainer guidance is included in all plans. Personal training sessions are available as add-ons or included in Quarterly+ plans. Annual members get unlimited PT sessions.",
  },
  {
    q: "Do you provide diet and nutrition plans?",
    a: "Yes. From Quarterly onwards, personalized diet plans prepared by our certified nutrition coach Anjali are included. For Monthly members, nutrition guidance is available as an add-on.",
  },
  {
    q: "What equipment do you have?",
    a: "We have imported treadmills, ellipticals, stationary bikes, rowers, a full free weights zone with dumbbells up to 60 kg, barbells, cable machines, functional training rigs, and CrossFit equipment.",
  },
  {
    q: "Is parking available?",
    a: "Yes, ample free parking is available for members on two-wheelers and four-wheelers.",
  },
  {
    q: "Can I pause or transfer my membership?",
    a: "Membership pauses are allowed for medical reasons with documentation. Transfers to another person are not permitted. Contact our team to discuss your specific situation.",
  },
  {
    q: "How do I contact Salus Fitness?",
    a: "Call or WhatsApp us at 76740 14383 or 86866 56564. You can also reach us on Instagram @salus_fitness_gym. We respond within 30 minutes during gym hours.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding bg-[#090909] relative">
      <div className="container-wide">
        <SectionTitle
          label="FAQ"
          title="Frequently Asked"
          highlight="Questions"
          subtitle="Everything you need to know before joining Salus Fitness."
        />

        <div className="max-w-3xl mx-auto space-y-2">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`border rounded-2xl overflow-hidden transition-all duration-400 ${
                open === i
                  ? "border-[rgba(212,175,55,0.3)] bg-[rgba(212,175,55,0.03)]"
                  : "border-[#1A1A1A] bg-[#111]"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left cursor-pointer bg-transparent border-none"
              >
                <span
                  className="font-sans font-semibold text-sm md:text-base leading-snug pr-4 transition-colors duration-300"
                  style={{ color: open === i ? "#D4AF37" : "#FFFFFF" }}
                >
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  {open === i ? (
                    <Minus size={16} className="text-[#D4AF37]" />
                  ) : (
                    <Plus size={16} className="text-[#555]" />
                  )}
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                    style={{ overflow: "hidden" }}
                  >
                    <div className="px-5 pb-5">
                      <div className="h-px bg-[rgba(212,175,55,0.1)] mb-4" />
                      <p className="text-[#888] text-sm leading-relaxed font-body">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
