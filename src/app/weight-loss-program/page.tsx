import type { Metadata } from "next";
import { SEOPage } from "@/components/seo/SEOPage";

export const metadata: Metadata = {
  title: "Weight Loss Program in Hyderabad | Salus Fitness",
  description:
    "Salus Fitness Weight Loss Program in Hyderabad — 8 to 12 weeks of structured cardio, HIIT, and strength training with personalized diet plans. Members have lost up to 22 kg. Free first session.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://gym-three-mauve.vercel.app"}/weight-loss-program`,
  },
  openGraph: {
    title: "Weight Loss Program Hyderabad | Salus Fitness",
    description: "Structured 8–12 week weight loss program in Hyderabad. Cardio, HIIT, strength training + diet plan. Members lost up to 22 kg. Free trial at Salus Fitness.",
  },
};

export default function WeightLossProgramPage() {
  return (
    <SEOPage
      eyebrow="Weight Loss Program · Hyderabad"
      h1="Lose Weight the"
      h1Gold="Right Way"
      description="Our 8–12 week Weight Loss Program at Salus Fitness is built around science, not shortcuts. Combining targeted cardio, HIIT sessions, and strength circuits with a customized diet plan, our members have consistently achieved results they couldn't get anywhere else. Members have lost up to 22 kg — sustainably."
      benefits={[
        "Structured 8–12 week progressive program",
        "Targeted cardio + HIIT + strength circuits",
        "Custom diet plan from our nutrition coach",
        "Weekly progress tracking & body measurements",
        "1-on-1 trainer sessions for accountability",
        "Suitable for all fitness levels — beginners welcome",
        "Members have lost up to 22 kg with this program",
        "No crash diets — sustainable, healthy fat loss",
        "Group motivation with HIIT & Zumba classes",
        "Inclusive in Quarterly, Half-Yearly & Annual plans",
      ]}
    />
  );
}
