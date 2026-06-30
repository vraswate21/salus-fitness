import type { Metadata } from "next";
import { SEOPage } from "@/components/seo/SEOPage";

export const metadata: Metadata = {
  title: "Gym in Hyderabad | Salus Fitness — Premium AC Gym",
  description:
    "Looking for the best gym in Hyderabad? Salus Fitness on Green Hills Colony Rd offers premium equipment, AC facility, personal training, and expert coaches. 4.5★ · 185 Google reviews. Free first session.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://gym-three-mauve.vercel.app"}/gym-in-hyderabad`,
  },
  openGraph: {
    title: "Best Gym in Hyderabad | Salus Fitness",
    description: "Premium AC gym in Hyderabad with expert coaches, modern equipment, and affordable plans. Free first session. Call 76740 14383.",
  },
};

export default function GymInHyderabadPage() {
  return (
    <SEOPage
      eyebrow="Salus Fitness · Hyderabad"
      h1="Best Gym in"
      h1Gold="Hyderabad"
      description="Salus Fitness is one of Hyderabad's most trusted premium gyms — located on Green Hills Colony Rd No. 3. With 5,000+ members, 185 Google reviews, and a 4.5-star rating, we've been helping Hyderabad transform since 2016. Whether you're a beginner or experienced, you'll find everything you need here."
      benefits={[
        "Fully air-conditioned, clean & premium facility",
        "Modern cardio & strength equipment",
        "Certified personal trainers on-site",
        "Group classes: HIIT, CrossFit, Yoga, Zumba",
        "Flexible plans from ₹1,200/month",
        "Free first trial session — no commitment",
        "Open 7 days a week from 6 AM",
        "4.5★ rating · 185 verified Google reviews",
        "Locker rooms & changing facilities",
        "Personalized diet & nutrition plans",
      ]}
    />
  );
}
