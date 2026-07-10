const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://gym-three-mauve.vercel.app";

const localBusiness = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["HealthClub", "LocalBusiness"],
      "@id": `${SITE_URL}/#gym`,
      "name": "Salus Fitness Gym",
      "alternateName": ["Salus Fitness", "Salus Gym Hyderabad"],
      "description":
        "Premium AC gym & cardio center in Hyderabad. Personal training, weight loss, muscle building, HIIT, CrossFit, Zumba and more. 5,000+ members. Free first session.",
      "url": SITE_URL,
      "telephone": ["+917674014383", "+918686656564"],
      "priceRange": "₹₹",
      "currenciesAccepted": "INR",
      "paymentAccepted": "Cash, UPI, Card",
      "image": `${SITE_URL}/og-image.jpg`,
      "logo": `${SITE_URL}/logo.png`,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Green Hills Colony Rd Number 3",
        "addressLocality": "Hyderabad",
        "addressRegion": "Telangana",
        "addressCountry": "IN",
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.5",
        "bestRating": "5",
        "worstRating": "1",
        "reviewCount": "185",
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "06:00",
          "closes": "22:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "06:00",
          "closes": "21:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "08:00",
          "closes": "20:00",
        },
      ],
      "amenityFeature": [
        { "@type": "LocationFeatureSpecification", "name": "Air Conditioning", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Locker Room", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Changing Room", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Personal Training", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Group Classes", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Cardio Equipment", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Free Weights", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Diet Consultation", "value": true },
      ],
      "hasMap": "https://maps.google.com/maps?q=Salus+Fitness+Gym+Hyderabad",
      "sameAs": [
        "https://instagram.com/salus_fitnessgym",
        "https://wa.me/917674014383",
      ],
      "knowsAbout": [
        "Weight Loss",
        "Muscle Building",
        "Personal Training",
        "HIIT",
        "CrossFit",
        "Zumba",
        "Yoga",
        "Cardio",
        "Strength Training",
        "Nutrition Coaching",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      "url": SITE_URL,
      "name": "Salus Fitness Gym",
      "description": "Premium AC gym & cardio center in Hyderabad, Telangana.",
      "publisher": { "@id": `${SITE_URL}/#gym` },
      "potentialAction": {
        "@type": "SearchAction",
        "target": { "@type": "EntryPoint", "urlTemplate": `${SITE_URL}/?q={search_term_string}` },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are the membership plans at Salus Fitness?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Salus Fitness offers 4 plans: Monthly (₹1,200), Quarterly 3 months (₹3,200), Half Yearly 6 months (₹5,000 – Best Value), and Annual (₹9,000). All plans include full gym & cardio access, AC facility, and locker rooms.",
          },
        },
        {
          "@type": "Question",
          "name": "Where is Salus Fitness Gym located in Hyderabad?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Salus Fitness Gym is located on Green Hills Colony Rd Number 3, Hyderabad, Telangana. You can walk in directly or call 76740 14383 for directions.",
          },
        },
        {
          "@type": "Question",
          "name": "What are the gym timings?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Salus Fitness is open Monday to Friday from 6:00 AM to 10:00 PM, Saturday from 6:00 AM to 9:00 PM, and Sunday from 8:00 AM to 8:00 PM.",
          },
        },
        {
          "@type": "Question",
          "name": "Does Salus Fitness offer a free trial?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Salus Fitness offers a free first session for new visitors. Walk in or call 76740 14383 to schedule your free trial. No commitment required.",
          },
        },
        {
          "@type": "Question",
          "name": "Does Salus Fitness have personal training?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Certified personal trainers are available for 1-on-1 sessions. PT sessions are included in Quarterly and above plans. Annual members get unlimited personal training sessions.",
          },
        },
        {
          "@type": "Question",
          "name": "Is Salus Fitness suitable for women?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. Salus Fitness is a welcoming space for everyone. Women train here comfortably with proper equipment and experienced coaches.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/#breadcrumb`,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": SITE_URL,
        },
      ],
    },
  ],
};

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
    />
  );
}
