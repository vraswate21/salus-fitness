import Link from "next/link";
import { Phone, MessageCircle, MapPin, ArrowLeft, Check } from "lucide-react";

interface SEOPageProps {
  eyebrow: string;
  h1: string;
  h1Gold: string;
  description: string;
  benefits: string[];
  extra?: React.ReactNode;
}

export function SEOPage({ eyebrow, h1, h1Gold, description, benefits, extra }: SEOPageProps) {
  return (
    <div className="min-h-screen bg-[#B7B3A7] text-[#1C1914] font-sans">
      {/* Minimal header */}
      <header className="border-b border-[#A29D8F] px-6 py-4 flex items-center justify-between max-w-5xl mx-auto">
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-black text-xl tracking-[0.07em] text-[#1C1914]">SALUS</span>
          <span className="text-[8px] tracking-[0.4em] text-[#96690A] font-semibold">FITNESS</span>
        </Link>
        <Link
          href="/"
          className="flex items-center gap-1.5 text-[#6B6658] hover:text-[#96690A] text-xs transition-colors duration-200"
        >
          <ArrowLeft size={12} />
          Back to main site
        </Link>
      </header>

      {/* Hero content */}
      <main className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        <p className="text-[10px] tracking-[0.3em] text-[#96690A] uppercase mb-4">{eyebrow}</p>
        <h1 className="font-black leading-[1.0] tracking-[-0.025em] mb-6" style={{ fontSize: "clamp(36px, 6vw, 72px)" }}>
          <span className="text-[#1C1914]">{h1} </span>
          <span style={{ color: "#96690A" }}>{h1Gold}</span>
        </h1>
        <p className="text-[#6B6658] text-base md:text-lg leading-[1.75] max-w-2xl mb-12">
          {description}
        </p>

        {/* Benefits */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-14">
          {benefits.map((b) => (
            <li key={b} className="flex items-start gap-3 bg-[#CAC6B9] border border-[#A29D8F] rounded-xl p-4">
              <div className="w-5 h-5 rounded-full bg-[rgba(150,105,10,0.12)] flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check size={10} style={{ color: "#96690A" }} />
              </div>
              <span className="text-[#4A453B] text-sm leading-snug">{b}</span>
            </li>
          ))}
        </ul>

        {extra && <div className="mb-14">{extra}</div>}

        {/* CTA block */}
        <div className="border border-[rgba(150,105,10,0.2)] rounded-2xl p-8 bg-[#C4C0B4] mb-14">
          <h2 className="text-[#1C1914] font-black text-2xl mb-2">Ready to start?</h2>
          <p className="text-[#6B6658] text-sm mb-6">Free first session · No lock-in · Call or WhatsApp us now.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:7674014383"
              className="flex items-center justify-center gap-2 bg-[#D4AF37] text-[#0A0A0A] font-bold text-sm px-8 py-4 rounded-full hover:bg-[#E8CC5F] transition-colors duration-200 min-h-[52px]"
            >
              <Phone size={15} />
              Call 76740 14383
            </a>
            <a
              href="https://wa.me/918686656564?text=Hi%2C%20I%20want%20to%20know%20more%20about%20Salus%20Fitness"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-[#128C4A] text-[#128C4A] font-bold text-sm px-8 py-4 rounded-full hover:bg-[rgba(18,140,74,0.08)] transition-colors duration-200 min-h-[52px]"
            >
              <MessageCircle size={15} />
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-start gap-3 text-[#8C8776] text-sm">
          <MapPin size={14} className="text-[#96690A] flex-shrink-0 mt-0.5" />
          <div>
            <span className="text-[#6B6658]">Green Hills Colony Rd No. 3, Hyderabad, Telangana</span>
            <br />
            <span className="text-[#8C8776] text-xs">Mon–Fri: 6 AM–10 PM · Sat: 6 AM–9 PM · Sun: 8 AM–8 PM</span>
          </div>
        </div>
      </main>

      {/* Minimal footer */}
      <footer className="border-t border-[#A29D8F] px-6 py-6 max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-[#8C8776] text-xs">© {new Date().getFullYear()} Salus Fitness Gym. All rights reserved.</p>
        <Link href="/" className="text-[rgba(150,105,10,0.6)] text-xs hover:text-[#96690A] transition-colors">
          salusfitness.in
        </Link>
      </footer>
    </div>
  );
}
