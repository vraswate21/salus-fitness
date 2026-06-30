"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  label?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export function SectionTitle({
  label,
  title,
  highlight,
  subtitle,
  align = "center",
  className,
}: SectionTitleProps) {
  const alignClass = {
    left:   "text-left items-start",
    center: "text-center items-center",
    right:  "text-right items-end",
  }[align];

  return (
    <div className={cn("flex flex-col mb-16 md:mb-20", alignClass, className)}>
      {label && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16,1,0.3,1] }}
          className={cn("flex items-center gap-3 mb-6", align === "center" && "justify-center")}
        >
          <span className="w-6 h-px bg-[#D4AF37] opacity-70" />
          <span className="eyebrow opacity-70">{label}</span>
          <span className="w-6 h-px bg-[#D4AF37] opacity-70" />
        </motion.div>
      )}

      <div className="overflow-hidden">
        <motion.h2
          initial={{ y: "100%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, delay: label ? 0.1 : 0, ease: [0.16,1,0.3,1] }}
          className="font-display font-black leading-[1.0] tracking-[-0.025em]"
          style={{ fontSize: "clamp(36px, 6vw, 76px)" }}
        >
          <span className="text-white">{title} </span>
          {highlight && <span className="text-gradient-gold">{highlight}</span>}
        </motion.h2>
      </div>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16,1,0.3,1] }}
          className="text-[#666] text-sm md:text-base lg:text-lg max-w-sm md:max-w-xl leading-[1.75] mt-4 md:mt-5"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
