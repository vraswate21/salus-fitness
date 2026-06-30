"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Clock, ExternalLink, MessageCircle, Mail } from "lucide-react";

const QUICK_LINKS = [
  { label: "Home",       href: "#hero" },
  { label: "About Us",  href: "#why-salus" },
  { label: "Programs",  href: "#programs" },
  { label: "Pricing",   href: "#membership" },
  { label: "Trainers",  href: "#trainers" },
  { label: "Gallery",   href: "#gallery" },
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">

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
              {[
                { href: "https://instagram.com/salus_fitness_gym", icon: ExternalLink, label: "Instagram", hover: "hover:border-[#E1306C] hover:text-[#E1306C]" },
                { href: "https://wa.me/917674014383",              icon: MessageCircle, label: "WhatsApp",  hover: "hover:border-[#25D366] hover:text-[#25D366]" },
                { href: "tel:7674014383",                          icon: Phone,         label: "Phone",    hover: "hover:border-[rgba(212,175,55,0.6)] hover:text-[#D4AF37]" },
                { href: "mailto:info@salusfitness.in",             icon: Mail,          label: "Email",    hover: "hover:border-[rgba(212,175,55,0.6)] hover:text-[#D4AF37]" },
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
                <div className="flex items-start gap-3 text-[#444]">
                  <MapPin size={13} className="text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <div className="font-body text-sm leading-relaxed">
                    Salus Fitness Gym
                    <br />
                    <span className="text-[#333] text-xs">(Walk in or call for directions)</span>
                  </div>
                </div>
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

        {/* Bottom bar */}
        <div className="border-t border-[#0E0E0E] py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-body text-[#2A2A2A] text-xs">
            © {new Date().getFullYear()} Salus Fitness. All rights reserved.
            <span className="ml-2 text-[rgba(212,175,55,0.5)]">@salus_fitness_gym</span>
          </p>
          <p className="font-body text-[#1A1A1A] text-[11px]">
            Built with precision · Powered by passion
          </p>
        </div>
      </div>
    </footer>
  );
}
