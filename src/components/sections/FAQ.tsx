"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";

const FAQS = [
  {
    q: "What are the gym timings?",
    a: "Salus Fitness is open Monday to Saturday from 6:00 AM to 10:00 PM, and Sunday from 8:00 AM to 8:00 PM. We recommend arriving 15 minutes before your first class.",
  },
  {
    q: "Do you offer a free trial?",
    a: "Yes — we offer a complimentary free trial session for all new visitors. Simply call 76740 14383 or walk in to schedule your free workout with one of our trainers.",
  },
  {
    q: "Is Salus Fitness suitable for women?",
    a: "Absolutely. Salus Fitness is a welcoming space for everyone. Women train here comfortably with proper equipment and experienced coaches. Call 76740 14383 to know more.",
  },
  {
    q: "What memberships are available?",
    a: "We offer Monthly (₹1,200), 3 Months (₹3,200), 6 Months (₹5,000), and Annual (₹9,000) plans. Student and couple discounts are also available — just ask.",
  },
  {
    q: "Are personal training sessions included?",
    a: "Basic trainer guidance is included in all plans. Dedicated PT sessions are included from the 3-Month plan onwards. Annual members get unlimited PT sessions.",
  },
  {
    q: "Do you provide diet and nutrition plans?",
    a: "Yes. From the 3-Month plan onwards, personalized diet plans are included. For Monthly members, nutrition guidance is available as an add-on.",
  },
  {
    q: "What equipment do you have?",
    a: "Imported treadmills, ellipticals, bikes, rowers, full free weights (dumbbells up to 60kg, barbells, cables), power racks, CrossFit rigs, and functional training equipment.",
  },
  {
    q: "Can I pause or transfer my membership?",
    a: "Pauses are allowed for medical reasons with documentation. Transfers to another person are not permitted. Contact our team to discuss your specific situation.",
  },
  {
    q: "How do I contact Salus Fitness?",
    a: "Call or WhatsApp us at 76740 14383 or 86866 56564. Also on Instagram @salus_fitnessgym. We respond within 30 minutes during gym hours.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding bg-[#B7B3A7] relative">
      <div className="container-wide">
        <SectionTitle
          label="FAQ"
          title="Questions we"
          highlight="get asked a lot."
          subtitle="Everything you need to know before taking the first step."
        />

        <div className="max-w-2xl mx-auto">
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.04, ease: [0.16,1,0.3,1] }}
              className="border-b border-[#A29D8F] first:border-t"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-4 md:py-5 text-left cursor-pointer bg-transparent border-none group min-h-[56px]"
              >
                <span
                  className="font-sans font-medium text-[14px] leading-snug pr-6 transition-colors duration-300"
                  style={{ color: open === i ? "#96690A" : "#2E2A22" }}
                >
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.25, ease: [0.16,1,0.3,1] }}
                  className="flex-shrink-0 w-5 h-5 rounded-full border flex items-center justify-center transition-colors duration-300"
                  style={{
                    borderColor: open === i ? "rgba(150,105,10,0.4)" : "rgba(0,0,0,0.12)",
                    background:  open === i ? "rgba(150,105,10,0.1)" : "transparent",
                  }}
                >
                  <Plus size={11} style={{ color: open === i ? "#96690A" : "#6B6658" }} />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16,1,0.3,1] }}
                    style={{ overflow: "hidden" }}
                  >
                    <div className="pb-5 md:pb-6 pr-8 md:pr-12">
                      <p className="font-body text-[#6B6658] text-sm leading-[1.75]">{faq.a}</p>
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
