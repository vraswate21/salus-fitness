import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://gym-three-mauve.vercel.app";
const GA_ID    = process.env.NEXT_PUBLIC_GA_ID;
const GTM_ID   = process.env.NEXT_PUBLIC_GTM_ID;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Salus Fitness Gym Hyderabad | Premium AC Gym & Cardio Center",
    template: "%s | Salus Fitness Gym Hyderabad",
  },

  description:
    "Salus Fitness — Premium AC gym & cardio center in Hyderabad, Telangana. Green Hills Colony Rd No. 3. 4.5★ · 185 Google reviews. Personal training, weight loss & muscle building programs. Join 5,000+ members. Free first session.",

  keywords: [
    "Salus Fitness",
    "Salus Fitness Gym",
    "Salus Fitness Hyderabad",
    "gym in Hyderabad",
    "AC gym Hyderabad",
    "premium gym Hyderabad",
    "best gym Hyderabad",
    "gym near me Hyderabad",
    "personal training Hyderabad",
    "weight loss gym Hyderabad",
    "muscle building gym Hyderabad",
    "women gym Hyderabad",
    "cardio center Hyderabad",
    "Green Hills Colony gym",
    "fitness center Hyderabad",
    "HIIT Hyderabad",
    "CrossFit Hyderabad",
  ],

  authors: [{ name: "Salus Fitness", url: SITE_URL }],
  creator: "Salus Fitness",
  publisher: "Salus Fitness",

  alternates: {
    canonical: SITE_URL,
  },

  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Salus Fitness Gym",
    title: "Salus Fitness Gym Hyderabad | Premium AC Gym & Cardio Center",
    description:
      "Premium AC gym & cardio center in Hyderabad. Personal training, weight loss, muscle building. 4.5★ on Google · 185 reviews. Free first session. Call 76740 14383.",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    site: "@salus_fitnessgym",
    creator: "@salus_fitnessgym",
    title: "Salus Fitness Gym Hyderabad | Premium AC Gym & Cardio Center",
    description:
      "Premium AC gym & cardio center in Hyderabad. Personal training, weight loss, muscle building. 4.5★ on Google · 185 reviews. Free first session.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
  },

  category: "health & fitness",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0A0A",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-IN"
      className={`${spaceGrotesk.variable} ${inter.variable} ${poppins.variable} antialiased`}
    >
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://maps.google.com" />
        <link rel="dns-prefetch" href="https://wa.me" />
      </head>

      <body className="bg-[#0A0A0A] text-white overflow-x-hidden font-body selection:bg-[rgba(212,175,55,0.2)]">
        {children}

        {/* Google Tag Manager */}
        {GTM_ID && (
          <Script id="gtm" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
          </Script>
        )}

        {/* Google Analytics 4 */}
        {GA_ID && !GTM_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}',{page_path:window.location.pathname});`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
