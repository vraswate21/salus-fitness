import type { Metadata } from "next";
import { SEOPage } from "@/components/seo/SEOPage";

export const metadata: Metadata = {
  title: "Muscle Building Program in Hyderabad | Salus Fitness",
  description:
    "Build serious muscle at Salus Fitness Hyderabad. 12–16 week progressive overload program with certified trainers, diet plans, and premium equipment. Members gained up to 9 kg of clean muscle. Free first session.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://gym-three-mauve.vercel.app"}/muscle-building-program`,
  },
  openGraph: {
    title: "Muscle Building Program Hyderabad | Salus Fitness",
    description: "12–16 week progressive muscle building program in Hyderabad. Premium equipment, expert coaches, personalized diet. Members gained up to 9 kg muscle. Free trial.",
  },
};

export default function MuscleBuildingProgramPage() {
  return (
    <SEOPage
      eyebrow="Muscle Building Program · Hyderabad"
      h1="Build the Body"
      h1Gold="You've Earned"
      description="The Muscle Building Program at Salus Fitness is a 12–16 week structured program built on progressive overload — the proven method for consistent muscle growth. With premium free weights (dumbbells up to 60 kg), dedicated strength zones, and certified trainers guiding every rep, our members have gained up to 9 kg of clean muscle."
      benefits={[
        "12–16 week structured progressive overload program",
        "Free weights up to 60 kg + full strength equipment",
        "Certified trainer guidance on every session",
        "Personalized diet plan for muscle growth",
        "Progressive tracking: weight, reps & measurements",
        "Dedicated strength & functional training zones",
        "Members gained up to 9 kg of clean muscle",
        "CrossFit & functional training integration",
        "Supplement guidance from our nutrition coach",
        "Included in Half-Yearly & Annual membership plans",
      ]}
    />
  );
}
