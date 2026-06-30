import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, Poppins } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Salus Fitness | Premium Gym & Cardio Center",
  description:
    "Salus Fitness — Premium gym & cardio center in Hyderabad, Telangana. Green Hills Colony Rd No. 3. 4.5★ on Google · 185 reviews. Join 5000+ members transforming their bodies.",
  keywords: [
    "gym", "fitness", "cardio", "Salus Fitness", "personal training",
    "weight loss", "muscle building", "HIIT", "CrossFit", "luxury gym",
  ],
  authors: [{ name: "Salus Fitness" }],
  openGraph: {
    title: "Salus Fitness | Premium Gym & Cardio Center",
    description: "Transform your body at Salus Fitness — Gym & Cardio for Men & Women.",
    type: "website",
    siteName: "Salus Fitness",
  },
  twitter: {
    card: "summary_large_image",
    title: "Salus Fitness | Premium Gym & Cardio Center",
    description: "Transform your body at Salus Fitness — Gym & Cardio for Men & Women.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0A0A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${poppins.variable} antialiased`}
    >
      <body className="bg-[#0A0A0A] text-white overflow-x-hidden font-body selection:bg-[rgba(212,175,55,0.2)]">
        {children}
      </body>
    </html>
  );
}
