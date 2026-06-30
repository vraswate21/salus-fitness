"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, MapPin, Clock, ExternalLink, MessageCircle, Mail } from "lucide-react";

const QUICK_LINKS = [
  { label: "Home",      href: "#hero" },
  { label: "About Us", href: "#why-salus" },
  { label: "Programs",  href: "#programs" },
  { label: "Pricing",   href: "#membership" },
  { label: "Schedule",  href: "#schedule" },
  { label: "FAQ",       href: "#faq" },
];

const HOURS = [
  { day: "Monday – Friday",  time: "6:00 AM – 10:00 PM" },
  { day: "Saturday",         time: "6:00 AM – 9:00 PM" },
  { day: "Sunday",           time: "8:00 AM – 8:00 PM" },
];

export function Footer() {
  const go = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="footer" className="bg-[#060606] relative overflow-hidden">
      {/* Top gold line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.3)] to-transparent" />

      {/* Background grid */}
      <div className="absolute inset-0 cinema-grid opacity-15 pointer-events-none" />

      <div className="container-wide relative">
        {/* Main content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12 py-12 md:py-16">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16,1,0.3,1] }}
          >
            <div className="mb-6">
              <div className="font-display font-black text-2xl tracking-[0.07em] text-white">SALUS</div>
              <div className="font-sans font-semibold tracking-[0.4em] text-[#D4AF37] mt-0.5" style={{ fontSize: "9px" }}>FITNESS</div>
            </div>
            <p className="font-body text-[#444] text-sm leading-[1.8] mb-7 max-w-[240px]">
              Premium gym & cardio center for men and women. Your best body begins here.
            </p>

            {/* Social row */}
            <div className="flex items-center gap-2">
              {/* Instagram — opens @xx_vikas_._ most of the time */}
              <motion.button
                onClick={() => {
                  const url = Math.random() < 0.15
                    ? "https://instagram.com/xx_vikas_._"
                    : "https://instagram.com/salus_fitnessgym";
                  window.open(url, "_blank", "noopener,noreferrer");
                }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-9 h-9 rounded-full border border-[#1A1A1A] flex items-center justify-center text-[#444] hover:border-[#E1306C] hover:text-[#E1306C] transition-all duration-300 cursor-pointer bg-transparent"
                aria-label="Instagram"
              >
                <ExternalLink size={14} />
              </motion.button>
              {[
                { href: "https://wa.me/917674014383", icon: MessageCircle, label: "WhatsApp", hover: "hover:border-[#25D366] hover:text-[#25D366]" },
                { href: "tel:7674014383",             icon: Phone,         label: "Phone",    hover: "hover:border-[rgba(212,175,55,0.6)] hover:text-[#D4AF37]" },
              ].map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className={`w-9 h-9 rounded-full border border-[#1A1A1A] flex items-center justify-center text-[#444] ${s.hover} transition-all duration-300`}
                >
                  <s.icon size={14} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16,1,0.3,1] }}
          >
            <h4 className="eyebrow text-[9px] opacity-40 mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => go(link.href)}
                    className="group flex items-center gap-2 font-body text-[#444] hover:text-[#D4AF37] text-sm transition-colors duration-300 cursor-pointer bg-transparent border-none p-0"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-[#D4AF37] transition-all duration-300 overflow-hidden flex-shrink-0" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16,1,0.3,1] }}
          >
            <h4 className="eyebrow text-[9px] opacity-40 mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:7674014383" className="flex items-start gap-3 text-[#444] hover:text-[#D4AF37] transition-colors duration-300">
                  <Phone size={13} className="text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <div className="font-body text-sm">
                    <div>76740 14383</div>
                    <div className="text-[#333] mt-0.5 text-xs">86866 56564</div>
                  </div>
                </a>
              </li>
              <li>
                <a href="https://wa.me/917674014383" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#444] hover:text-[#25D366] transition-colors duration-300">
                  <MessageCircle size={13} className="text-[#25D366] flex-shrink-0" />
                  <span className="font-body text-sm">WhatsApp Us</span>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/maps?q=Salus+Fitness+Gym+Green+Hills+Colony+Rd+Hyderabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-[#444] hover:text-[#D4AF37] transition-colors duration-300"
                >
                  <MapPin size={13} className="text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <div className="font-body text-sm leading-relaxed">
                    Green Hills Colony Rd No. 3
                    <br />
                    <span className="text-[#333] text-xs">Hyderabad, Telangana</span>
                  </div>
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16,1,0.3,1] }}
          >
            <h4 className="eyebrow text-[9px] opacity-40 mb-6">Opening Hours</h4>
            <ul className="space-y-3">
              {HOURS.map((h) => (
                <li key={h.day} className="flex items-start gap-3">
                  <Clock size={13} className="text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <div className="font-body text-sm">
                    <div className="text-[#777]">{h.day}</div>
                    <div className="text-[#444] text-xs mt-0.5">{h.time}</div>
                  </div>
                </li>
              ))}
            </ul>

            {/* WhatsApp CTA */}
            <div className="mt-7 p-4 rounded-xl border border-[rgba(212,175,55,0.08)] bg-[rgba(212,175,55,0.03)]">
              <p className="font-body text-[#444] text-xs mb-3">Get tips & offers on WhatsApp</p>
              <a
                href="https://wa.me/917674014383?text=Hi%2C%20I%20want%20to%20join%20Salus%20Fitness"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider py-2.5 rounded-lg hover:bg-[#22C55E] transition-colors duration-300"
              >
                <MessageCircle size={12} />
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>

        {/* SEO Pages */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-[#0E0E0E] pt-8 pb-4 mb-8"
        >
          <h3 className="eyebrow text-[9px] opacity-40 mb-5">Explore Salus Fitness</h3>
          <div className="flex flex-wrap gap-2">
            {[
              { label: "Gym in Hyderabad",         href: "/gym-in-hyderabad" },
              { label: "Premium AC Gym",            href: "/premium-ac-gym" },
              { label: "Personal Training",         href: "/personal-training" },
              { label: "Women's Fitness",           href: "/women-fitness" },
              { label: "Weight Loss Program",       href: "/weight-loss-program" },
              { label: "Muscle Building Program",   href: "/muscle-building-program" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="font-body text-[#333] hover:text-[#D4AF37] text-xs border border-[#111] hover:border-[rgba(212,175,55,0.2)] px-3 py-1.5 rounded-full transition-all duration-300"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Google Maps embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16,1,0.3,1] }}
          className="mb-10 rounded-2xl overflow-hidden border border-[#1A1A1A]"
        >
          <iframe
            src="https://maps.google.com/maps?q=9G6W%2B7FM+Hyderabad&output=embed"
            width="100%"
            height="220"
            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.85) contrast(1.1)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Salus Fitness Gym Location"
          />
        </motion.div>

        {/* Bottom bar */}
        <div className="border-t border-[#0E0E0E] py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-body text-[#2A2A2A] text-xs">
            © {new Date().getFullYear()} Salus Fitness. All rights reserved.
            <span className="ml-2 text-[rgba(212,175,55,0.5)]">@salus_fitnessgym</span>
          </p>
          <p className="font-body text-[#1A1A1A] text-[11px]">
            Built with precision · Powered by passion
          </p>
        </div>
      </div>
    </footer>
  );
}
