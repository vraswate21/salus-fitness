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
      "border border-[#96690A] text-[#96690A] hover:bg-[rgba(150,105,10,0.08)] backdrop-blur-sm",
    ghost: "text-[#1C1914] hover:text-[#96690A]",
  }[variant];

  const classes = cn(
    "relative inline-flex items-center justify-center gap-2 rounded-full",
    "font-semibold tracking-wider uppercase text-xs",
    "transition-all duration-300 ease-out cursor-pointer",
    "focus:outline-none focus:ring-2 focus:ring-[#96690A] focus:ring-offset-2 focus:ring-offset-[#B7B3A7]",
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
                ? "rgba(255,255,255,0.15)"
                : "rgba(150,105,10,0.05)",
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
