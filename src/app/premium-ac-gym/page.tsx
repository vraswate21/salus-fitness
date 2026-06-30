import type { Metadata } from "next";
import { SEOPage } from "@/components/seo/SEOPage";

export const metadata: Metadata = {
  title: "Premium AC Gym in Hyderabad | Salus Fitness",
  description:
    "Train in comfort at Salus Fitness — a fully air-conditioned premium gym in Hyderabad. Modern equipment, clean facilities, expert trainers. ₹1,200/month onwards. Free trial session.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://gym-three-mauve.vercel.app"}/premium-ac-gym`,
  },
  openGraph: {
    title: "Premium AC Gym in Hyderabad | Salus Fitness",
    description: "Fully air-conditioned premium gym in Hyderabad. Modern equipment, expert coaches, affordable plans. Free trial session available.",
  },
};

export default function PremiumACGymPage() {
  return (
    <SEOPage
      eyebrow="AC Gym · Hyderabad"
      h1="Premium AC Gym"
      h1Gold="in Hyderabad"
      description="Hyderabad's heat shouldn't stop your workout. Salus Fitness is a fully air-conditioned premium gym where you train in comfort, year-round. Clean facilities, high-quality equipment, and an environment that keeps you coming back every day."
      benefits={[
        "100% air-conditioned — comfortable even in peak summer",
        "Premium imported cardio machines",
        "Heavy free weights: dumbbells up to 60 kg",
        "Dedicated strength & functional training zones",
        "Spotless changing rooms & lockers",
        "Motivating music & atmosphere",
        "Professional lighting & ventilation",
        "No overcrowding — comfortable training space",
        "Sanitized equipment after every use",
        "Multiple membership options from ₹1,200/month",
      ]}
    />
  );
}
