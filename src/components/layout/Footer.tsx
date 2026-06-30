"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Clock, ExternalLink, MessageCircle, Mail } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#hero" },
  { label: "About Us", href: "#why-salus" },
  { label: "Programs", href: "#programs" },
  { label: "Membership", href: "#membership" },
  { label: "Trainers", href: "#trainers" },
  { label: "Gallery", href: "#gallery" },
  { label: "Schedule", href: "#schedule" },
  { label: "FAQ", href: "#faq" },
];

const policies = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Membership Policy", href: "#" },
  { label: "Refund Policy", href: "#" },
];

export function Footer() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      id="footer"
      className="bg-[#080808] border-t border-[#111] relative overflow-hidden"
    >
      {/* Top accent */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-30" />

      {/* Background pattern */}
      <div className="absolute inset-0 cinema-grid opacity-20 pointer-events-none" />

      <div className="container-wide relative">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-16">
          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-1"
          >
            <div className="mb-6">
              <div className="font-display font-black text-2xl tracking-[0.08em] text-white leading-none">
                SALUS
              </div>
              <div className="font-sans text-xs tracking-[0.35em] text-[#D4AF37] font-medium mt-0.5">
                FITNESS
              </div>
            </div>
            <p className="text-[#555] text-sm leading-relaxed mb-6 font-body max-w-xs">
              A perfect destination for your health. Premium gym & cardio center
              for men & women since 2016.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3">
              <motion.a
                href="https://instagram.com/salus_fitness_gym"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-9 h-9 rounded-full border border-[#1E1E1E] flex items-center justify-center text-[#555] hover:border-[#E1306C] hover:text-[#E1306C] transition-all duration-300"
              >
                <ExternalLink size={15} />
              </motion.a>
              <motion.a
                href="https://wa.me/917674014383"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-9 h-9 rounded-full border border-[#1E1E1E] flex items-center justify-center text-[#555] hover:border-[#25D366] hover:text-[#25D366] transition-all duration-300"
              >
                <MessageCircle size={15} />
              </motion.a>
              <motion.a
                href="tel:7674014383"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-9 h-9 rounded-full border border-[#1E1E1E] flex items-center justify-center text-[#555] hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300"
              >
                <Phone size={15} />
              </motion.a>
              <motion.a
                href="mailto:info@salusfitness.in"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-9 h-9 rounded-full border border-[#1E1E1E] flex items-center justify-center text-[#555] hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300"
              >
                <Mail size={15} />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h4 className="font-sans font-semibold text-white text-sm tracking-widest uppercase mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-[#555] hover:text-[#D4AF37] text-sm transition-colors duration-300 font-body flex items-center gap-2 group cursor-pointer bg-transparent border-none p-0"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-[#D4AF37] transition-all duration-300 overflow-hidden" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h4 className="font-sans font-semibold text-white text-sm tracking-widest uppercase mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:7674014383"
                  className="flex items-start gap-3 text-[#555] hover:text-[#D4AF37] transition-colors duration-300 group"
                >
                  <Phone
                    size={14}
                    className="text-[#D4AF37] flex-shrink-0 mt-0.5"
                  />
                  <div className="font-body text-sm">
                    <div>76740 14383</div>
                    <div className="text-[#333] mt-0.5">86866 56564</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/917674014383"
                  className="flex items-start gap-3 text-[#555] hover:text-[#25D366] transition-colors duration-300"
                >
                  <MessageCircle
                    size={14}
                    className="text-[#25D366] flex-shrink-0 mt-0.5"
                  />
                  <span className="font-body text-sm">WhatsApp Us</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-[#555]">
                  <MapPin
                    size={14}
                    className="text-[#D4AF37] flex-shrink-0 mt-0.5"
                  />
                  <span className="font-body text-sm leading-relaxed">
                    Salus Fitness Gym,
                    <br />
                    Your City, State
                    <br />
                    <span className="text-[#333] text-xs">
                      (Visit us for exact location)
                    </span>
                  </span>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h4 className="font-sans font-semibold text-white text-sm tracking-widest uppercase mb-6">
              Opening Hours
            </h4>
            <ul className="space-y-3 font-body">
              {[
                { day: "Monday – Friday", hours: "6:00 AM – 10:00 PM" },
                { day: "Saturday", hours: "6:00 AM – 9:00 PM" },
                { day: "Sunday", hours: "8:00 AM – 8:00 PM" },
              ].map((item) => (
                <li key={item.day} className="flex items-start gap-3 text-sm">
                  <Clock size={14} className="text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[#888]">{item.day}</div>
                    <div className="text-[#555] text-xs mt-0.5">{item.hours}</div>
                  </div>
                </li>
              ))}
            </ul>

            {/* Newsletter / WhatsApp */}
            <div className="mt-6 p-4 rounded-xl bg-[rgba(212,175,55,0.05)] border border-[rgba(212,175,55,0.1)]">
              <p className="text-[#555] text-xs mb-3 font-body">
                Get fitness tips & offers on WhatsApp
              </p>
              <a
                href="https://wa.me/917674014383?text=Hi%2C%20I%20want%20to%20join%20Salus%20Fitness"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider py-2.5 rounded-lg hover:bg-[#22C55E] transition-colors duration-300"
              >
                <MessageCircle size={13} />
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#111] py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#333] text-xs font-body">
            © {new Date().getFullYear()} Salus Fitness. All rights reserved.
            <span className="ml-2 text-[#D4AF37]">@salus_fitness_gym</span>
          </p>

          <div className="flex items-center gap-6">
            {policies.map((p) => (
              <a
                key={p.label}
                href={p.href}
                className="text-[#333] hover:text-[#555] text-xs transition-colors duration-300 font-body"
              >
                {p.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
