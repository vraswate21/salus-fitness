import type { Metadata } from "next";
import { SEOPage } from "@/components/seo/SEOPage";

export const metadata: Metadata = {
  title: "Personal Training in Hyderabad | Salus Fitness",
  description:
    "Get results faster with certified personal trainers at Salus Fitness Hyderabad. 1-on-1 sessions, custom workout plans, diet coaching, and real accountability. Free first session.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://gym-three-mauve.vercel.app"}/personal-training`,
  },
  openGraph: {
    title: "Personal Training Hyderabad | Salus Fitness",
    description: "Certified personal trainers in Hyderabad. Custom workout plans, diet coaching, and real results. Book a free session at Salus Fitness.",
  },
};

export default function PersonalTrainingPage() {
  return (
    <SEOPage
      eyebrow="Personal Training · Hyderabad"
      h1="Train 1-on-1 With"
      h1Gold="Expert Coaches"
      description="Personal training at Salus Fitness isn't just about workouts — it's about results. Our certified trainers build plans around your body, goals, schedule, and lifestyle. Whether you want to lose weight, build muscle, or improve overall fitness, your trainer makes sure every session counts."
      benefits={[
        "Certified personal trainers (ISSA, ACE, NASM)",
        "Fully customized workout plan for your goals",
        "Detailed body assessment & progress tracking",
        "Personalized diet and nutrition coaching",
        "Constant motivation and accountability",
        "PT included in Quarterly, Half-Yearly & Annual plans",
        "Unlimited PT sessions on Annual membership",
        "Suitable for beginners to advanced athletes",
        "Regular body measurements & progress reviews",
        "Flexible scheduling around your availability",
      ]}
    />
  );
}
