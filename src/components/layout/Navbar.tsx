"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "About",     href: "#why-salus" },
  { label: "Programs",  href: "#programs" },
  { label: "Pricing",   href: "#membership" },
  { label: "Schedule",  href: "#schedule" },
  { label: "Contact",   href: "#footer" },
];

export function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const go = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16,1,0.3,1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "py-3 bg-[rgba(183,179,167,0.94)] backdrop-blur-2xl border-b border-[rgba(150,105,10,0.12)] shadow-[0_1px_40px_rgba(0,0,0,0.15)]"
            : "py-5 bg-transparent"
        )}
      >
        <div className="container-wide flex items-center justify-between">

          {/* ── Logo ── */}
          <motion.a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            whileHover={{ scale: 1.03 }}
            className="flex flex-col leading-none select-none group cursor-pointer"
          >
            <span
              className="font-display font-black tracking-[0.07em] text-[#1C1914] transition-colors duration-300 group-hover:text-[#B8860B]"
              style={{ fontSize: "clamp(18px, 2vw, 22px)" }}
            >
              SALUS
            </span>
            <span className="font-sans font-semibold tracking-[0.4em] text-[#96690A] leading-none" style={{ fontSize: "9px" }}>
              FITNESS
            </span>
          </motion.a>

          {/* ── Desktop nav ── */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link, i) => (
              <motion.button
                key={link.label}
                onClick={() => go(link.href)}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * i + 0.3, duration: 0.5, ease: [0.16,1,0.3,1] }}
                className="hover-line font-sans font-medium text-[13px] tracking-[0.06em] text-[#4A453B] hover:text-[#1C1914] transition-colors duration-300 cursor-pointer bg-transparent border-none"
              >
                {link.label}
              </motion.button>
            ))}
          </nav>

          {/* ── Desktop CTA ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="hidden lg:flex items-center gap-3"
          >
            <a
              href="tel:7674014383"
              className="flex items-center gap-1.5 text-[#6B6658] hover:text-[#96690A] text-[12px] font-sans transition-colors duration-300"
            >
              <Phone size={12} />
              <span>76740 14383</span>
            </a>

            <motion.button
              onClick={() => go("#membership")}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-2 bg-[#D4AF37] text-[#0A0A0A] font-sans font-bold text-[11px] tracking-[0.2em] uppercase px-6 py-3 rounded-full hover:bg-[#E8CC5F] transition-all duration-300 cursor-pointer border-none shadow-[0_0_24px_rgba(212,175,55,0.22)]"
            >
              Join Today
              <ArrowRight size={11} />
            </motion.button>
          </motion.div>

          {/* ── Mobile hamburger ── */}
          <motion.button
            onClick={() => setMobileOpen(!mobileOpen)}
            whileTap={{ scale: 0.88 }}
            className="lg:hidden relative w-9 h-9 flex items-center justify-center text-[#1C1914] cursor-pointer bg-transparent border-none"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen
                ? <motion.span key="x" initial={{ rotate:-90, opacity:0 }} animate={{ rotate:0, opacity:1 }} exit={{ rotate:90, opacity:0 }} transition={{ duration:0.2 }}>
                    <X size={20} />
                  </motion.span>
                : <motion.span key="m" initial={{ rotate:90, opacity:0 }} animate={{ rotate:0, opacity:1 }} exit={{ rotate:-90, opacity:0 }} transition={{ duration:0.2 }}>
                    <Menu size={20} />
                  </motion.span>
              }
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.header>

      {/* ── Mobile fullscreen menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, clipPath: "circle(0% at calc(100% - 48px) 28px)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at calc(100% - 48px) 28px)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at calc(100% - 48px) 28px)" }}
            transition={{ duration: 0.5, ease: [0.16,1,0.3,1] }}
            className="fixed inset-0 z-40 bg-[#B7B3A7] flex flex-col"
          >
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[rgba(150,105,10,0.4)] to-transparent" />

            <div className="flex-1 flex flex-col justify-center px-8 pt-20 pb-10">
              <nav className="flex flex-col gap-1 mb-12">
                {NAV_LINKS.map((link, i) => (
                  <motion.button
                    key={link.label}
                    onClick={() => go(link.href)}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i + 0.1, ease: [0.16,1,0.3,1] }}
                    className="text-left py-4 border-b border-[#A29D8F] cursor-pointer bg-transparent border-x-0 border-t-0 group flex items-center justify-between"
                  >
                    <span className="font-display font-black text-[32px] text-[#1C1914] group-hover:text-[#96690A] transition-colors duration-300 tracking-[-0.02em]">
                      {link.label}
                    </span>
                    <ArrowRight size={18} className="text-[#8C8776] group-hover:text-[#96690A] group-hover:translate-x-1 transition-all duration-300" />
                  </motion.button>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="space-y-3"
              >
                <a href="tel:7674014383" className="flex items-center gap-3 text-[#6B6658] py-2">
                  <Phone size={15} className="text-[#96690A]" />
                  <span className="font-sans text-base">76740 14383</span>
                </a>
                <button
                  onClick={() => go("#membership")}
                  className="w-full bg-[#D4AF37] text-[#0A0A0A] font-display font-black text-sm tracking-[0.18em] uppercase py-5 rounded-full cursor-pointer border-none shadow-[0_0_40px_rgba(212,175,55,0.3)]"
                >
                  Join Today — Free Trial
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Mobile sticky bottom bar ── */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 flex gap-3 px-4 py-3 bg-[rgba(183,179,167,0.96)] backdrop-blur-xl border-t border-[rgba(150,105,10,0.15)]">
        <a
          href="tel:7674014383"
          className="flex-1 flex items-center justify-center gap-2 text-[#96690A] text-[12px] font-sans font-semibold tracking-wider py-3.5 rounded-full border border-[rgba(150,105,10,0.3)]"
        >
          <Phone size={13} /> Call Now
        </a>
        <a
          href="https://wa.me/917674014383?text=Hi%2C%20I%27d%20like%20to%20join%20Salus%20Fitness"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-[#D4AF37] text-[#0A0A0A] text-[12px] font-sans font-black tracking-wider uppercase py-3.5 rounded-full text-center"
        >
          WhatsApp
        </a>
      </div>
    </>
  );
}
