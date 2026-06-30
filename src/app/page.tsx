import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { WhySalus } from "@/components/sections/WhySalus";
import { Gallery } from "@/components/sections/Gallery";
import { Membership } from "@/components/sections/Membership";
import { Trainers } from "@/components/sections/Trainers";
import { Transformations } from "@/components/sections/Transformations";
import { Facilities } from "@/components/sections/Facilities";
import { BMICalculator } from "@/components/sections/BMICalculator";
import { Programs } from "@/components/sections/Programs";
import { Schedule } from "@/components/sections/Schedule";
import { Reviews } from "@/components/sections/Reviews";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { AIChat } from "@/components/ui/AIChat";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { Cursor } from "@/components/ui/Cursor";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

export default function Home() {
  return (
    <SmoothScroll>
      <Cursor />
      <ScrollProgress />
      <Navbar />
      <main className="pb-safe-mobile lg:pb-0">
        <Hero />
        <WhySalus />
        <Gallery />
        <Membership />
        <Trainers />
        <Transformations />
        <Facilities />
        <BMICalculator />
        <Programs />
        <Schedule />
        <Reviews />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <AIChat />
    </SmoothScroll>
  );
}
