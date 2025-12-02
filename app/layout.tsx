import type { Metadata } from "next";
import { Outfit, Noto_Sans_Ethiopic, Cormorant_Garamond } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const notoSansEthiopic = Noto_Sans_Ethiopic({
  subsets: ["ethiopic"],
  variable: "--font-noto-ethiopic",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Little Paris Restaurant – Authentic French Dining in Addis Ababa (Summit Cambridge)",
  description: "Little Paris Restaurant offers authentic French cuisine in Addis Ababa, Ethiopia. Located at Summit Cambridge, we serve pastries, steaks, desserts, wine menus, and cozy café experiences. Perfect for family dining, romantic dates, and special events.",
  keywords: ["Little Paris Addis Ababa", "French restaurant Addis", "restaurant in Summit Cambridge", "Addis Ababa dining", "pastries Addis", "romantic restaurant Addis", "Little Paris Ethiopia", "best restaurants Addis", "French cuisine Ethiopia"],
  authors: [{ name: "Little Paris Restaurant" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://littleparisrestaurant.vercel.app",
  },
  openGraph: {
    title: "Little Paris Restaurant – Authentic French Cuisine in Addis Ababa",
    description: "Experience authentic French dining in Addis Ababa at Little Paris Restaurant, located in Summit Cambridge. Enjoy pastries, steaks, desserts, wine, and cozy café vibes.",
    url: "https://littleparisrestaurant.vercel.app",
    siteName: "Little Paris Restaurant",
    images: [
      {
        url: "/images/little-paris-cover.jpg",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Little Paris Restaurant – Addis Ababa",
    description: "Authentic French cuisine, pastries, desserts, and fine dining at Little Paris Restaurant in Addis Ababa’s Summit Cambridge area.",
    images: ["/images/little-paris-cover.jpg"],
  },
  other: {
    "geo.region": "ET-AA",
    "geo.placename": "Addis Ababa",
    "geo.position": "9.0365;38.7613",
    "ICBM": "9.0365, 38.7613",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Little Paris Restaurant",
    "image": "https://littleparisrestaurant.vercel.app/images/little-paris-cover.jpg",
    "@id": "https://littleparisrestaurant.vercel.app",
    "url": "https://littleparisrestaurant.vercel.app",
    "telephone": "+251-000-000-0000",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Summit Cambridge Area",
      "addressLocality": "Addis Ababa",
      "addressCountry": "ET"
    },
    "servesCuisine": ["French", "European", "Pastries", "Café"],
    "priceRange": "$$",
    "openingHours": "Mo-Su 08:00-23:00",
    "description": "Little Paris Restaurant offers authentic French dining in Addis Ababa with pastries, steaks, desserts, wine, and a cozy Parisian ambiance."
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${notoSansEthiopic.variable} ${cormorant.variable} antialiased bg-background text-foreground`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
