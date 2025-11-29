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
  title: "Little Paris Restaurant | Best French & Ethiopian Cuisine in Addis Ababa",
  description: "Experience the finest dining at Little Paris Restaurant in Addis Ababa. Serving authentic French and Ethiopian dishes in an elegant setting. Book your table today.",
  keywords: ["Restaurants in Addis Ababa", "Best Addis Ababa restaurant", "Little Paris Restaurant menu", "French restaurant Addis Ababa", "Ethiopian food Addis Ababa", "Fine dining Addis Ababa"],
  openGraph: {
    title: "Little Paris Restaurant | Addis Ababa",
    description: "A Taste of Paris in the Heart of Addis Ababa.",
    type: "website",
    locale: "en_US",
    siteName: "Little Paris Restaurant",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${notoSansEthiopic.variable} ${cormorant.variable} antialiased bg-background text-foreground`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
