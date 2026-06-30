"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About", href: "#why-salus" },
  { label: "Programs", href: "#programs" },
  { label: "Pricing", href: "#membership" },
  { label: "Gallery", href: "#gallery" },
  { label: "Trainers", href: "#trainers" },
  { label: "Contact", href: "#footer" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-[rgba(10,10,10,0.92)] backdrop-blur-xl border-b border-[rgba(212,175,55,0.1)] py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="container-wide flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.02 }}
            className="flex flex-col leading-none select-none"
          >
            <span className="font-display font-black text-xl tracking-[0.08em] text-white">
              SALUS
            </span>
            <span className="font-sans text-[10px] tracking-[0.35em] text-[#D4AF37] font-medium">
              FITNESS
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
                className="hover-line text-[#B8B8B8] hover:text-white text-sm font-medium tracking-wide transition-colors duration-300 cursor-pointer bg-transparent border-none"
              >
                {link.label}
              </motion.button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <motion.a
              href="tel:7674014383"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-2 text-[#B8B8B8] hover:text-[#D4AF37] text-sm transition-colors duration-300"
            >
              <Phone size={14} />
              <span className="font-medium">76740 14383</span>
            </motion.a>

            <motion.button
              onClick={() => handleNavClick("#membership")}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#D4AF37] text-[#0A0A0A] font-bold text-xs tracking-widest uppercase px-6 py-3 rounded-full hover:bg-[#E8CC5F] transition-colors duration-300 cursor-pointer border-none shadow-[0_0_20px_rgba(212,175,55,0.25)]"
            >
              Join Today
            </motion.button>
          </div>

          {/* Mobile Toggle */}
          <motion.button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2 cursor-pointer bg-transparent border-none"
            whileTap={{ scale: 0.9 }}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 35 }}
            className="fixed inset-0 z-40 bg-[#0A0A0A] flex flex-col pt-24 px-8 pb-8"
          >
            <nav className="flex flex-col gap-2 flex-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="text-left text-3xl font-display font-bold text-white hover:text-[#D4AF37] transition-colors duration-300 py-3 border-b border-[#1A1A1A] cursor-pointer bg-transparent border-x-0 border-t-0"
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>

            <div className="space-y-3">
              <a
                href="tel:7674014383"
                className="flex items-center gap-3 text-[#B8B8B8] py-3"
              >
                <Phone size={16} className="text-[#D4AF37]" />
                <span className="text-lg font-medium">76740 14383</span>
              </a>
              <button
                onClick={() => handleNavClick("#membership")}
                className="w-full bg-[#D4AF37] text-[#0A0A0A] font-black text-sm tracking-widest uppercase py-4 rounded-full cursor-pointer border-none"
              >
                Join Today
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Sticky Bottom CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[rgba(10,10,10,0.95)] backdrop-blur-xl border-t border-[rgba(212,175,55,0.15)] px-4 py-3 flex gap-3">
        <a
          href="tel:7674014383"
          className="flex-1 flex items-center justify-center gap-2 border border-[rgba(212,175,55,0.3)] text-[#D4AF37] text-sm font-semibold py-3 rounded-full"
        >
          <Phone size={14} />
          Call Now
        </a>
        <a
          href="https://wa.me/917674014383"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-[#D4AF37] text-[#0A0A0A] text-sm font-black uppercase tracking-wider py-3 rounded-full text-center"
        >
          WhatsApp
        </a>
      </div>
    </>
  );
}
