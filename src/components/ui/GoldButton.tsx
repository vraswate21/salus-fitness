"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface GoldButtonProps {
  children: ReactNode;
  variant?: "filled" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: ReactNode;
  fullWidth?: boolean;
}

export function GoldButton({
  children,
  variant = "filled",
  size = "md",
  href,
  onClick,
  className,
  icon,
  fullWidth,
}: GoldButtonProps) {
  const sizeClasses = {
    sm: "px-6 py-2.5 text-sm",
    md: "px-8 py-4 text-sm",
    lg: "px-10 py-5 text-base",
  }[size];

  const variantClasses = {
    filled:
      "bg-[#D4AF37] text-[#0A0A0A] font-bold hover:bg-[#E8CC5F] shadow-[0_0_30px_rgba(212,175,55,0.2)]",
    outline:
      "border border-[#D4AF37] text-[#D4AF37] hover:bg-[rgba(212,175,55,0.08)] backdrop-blur-sm",
    ghost: "text-white hover:text-[#D4AF37]",
  }[variant];

  const classes = cn(
    "relative inline-flex items-center justify-center gap-2 rounded-full",
    "font-semibold tracking-wider uppercase text-xs",
    "transition-all duration-300 ease-out cursor-pointer",
    "focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 focus:ring-offset-[#0A0A0A]",
    sizeClasses,
    variantClasses,
    fullWidth && "w-full",
    className
  );

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && <span className="ml-1">{icon}</span>}
      </span>
      {variant !== "ghost" && (
        <motion.span
          className="absolute inset-0 rounded-full"
          initial={false}
          whileHover={{
            background:
              variant === "filled"
                ? "rgba(255,255,255,0.1)"
                : "rgba(212,175,55,0.05)",
          }}
          transition={{ duration: 0.3 }}
        />
      )}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      {content}
    </motion.button>
  );
}
