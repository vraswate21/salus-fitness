import type { Metadata } from "next";
import { SEOPage } from "@/components/seo/SEOPage";

export const metadata: Metadata = {
  title: "Women's Fitness Gym in Hyderabad | Salus Fitness",
  description:
    "Salus Fitness in Hyderabad is a welcoming, comfortable gym for women. Expert coaches, group classes, toning programs, and flexible memberships. Free first session.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://gym-three-mauve.vercel.app"}/women-fitness`,
  },
  openGraph: {
    title: "Women's Fitness Gym Hyderabad | Salus Fitness",
    description: "A welcoming gym for women in Hyderabad. Expert coaches, group classes, toning programs. Free first session at Salus Fitness.",
  },
};

export default function WomenFitnessPage() {
  return (
    <SEOPage
      eyebrow="Women's Fitness · Hyderabad"
      h1="A Gym That Feels"
      h1Gold="Made For You"
      description="At Salus Fitness, women train with confidence. Our environment is welcoming, our coaches are supportive, and our programs are designed to help you achieve real results — whether you want to tone up, lose weight, build strength, or simply feel better every day."
      benefits={[
        "Welcoming, judgment-free environment",
        "Experienced coaches who understand women's fitness",
        "Toning & flexibility programs (8–10 weeks)",
        "Group classes: Zumba, Yoga, Pilates, HIIT",
        "Personalized diet & nutrition guidance",
        "Body measurements & progress tracking",
        "Locker rooms & changing facilities",
        "Safe, comfortable gym space",
        "Flexible membership plans from ₹1,200/month",
        "Free first trial session — walk in anytime",
      ]}
    />
  );
}
