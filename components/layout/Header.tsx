"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/Button";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

import { usePathname } from "next/navigation";

export const Header = () => {
  const { t, language, setLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Pages with dark hero sections where header should be transparent/white text initially
  const hasDarkHero = pathname === "/" || pathname === "/about";

  // Determine header state
  // If scrolled OR not on a dark hero page, show solid background and dark text
  const isSolid = isScrolled || !hasDarkHero;
  const isDarkText = isScrolled || !hasDarkHero;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "am" : "en");
  };

  const navLinks = [
    { name: t.nav.home, href: "/" },
    // { name: t.nav.menu, href: "/menu" },
    { name: t.nav.about, href: "/about" },
    { name: t.nav.gallery, href: "/gallery" },
    { name: t.nav.contact, href: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isSolid
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link
          href="/"
          className={cn(
            "text-2xl font-bold tracking-tighter flex items-center gap-1 font-serif transition-colors",
            isDarkText ? "text-deep" : "text-white"
          )}
        >
          Little{" "}
          <span
            className={cn(
              "italic transition-colors",
              isDarkText ? "text-gold" : "text-gold"
            )}
          >
            Paris
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-all duration-300 uppercase tracking-widest relative group",
                isDarkText
                  ? "text-deep hover:text-gold"
                  : "text-white/90 hover:text-white"
              )}
            >
              {link.name}
              <span
                className={cn(
                  "absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full",
                  isDarkText ? "bg-gold" : "bg-white"
                )}
              />
            </Link>
          ))}
          <button
            onClick={toggleLanguage}
            className={cn(
              "transition-colors hover:text-gold",
              isDarkText ? "text-deep" : "text-white"
            )}
            aria-label="Switch Language"
          >
            <Globe size={20} />
          </button>
          <Link href="/reservation">
            <Button
              size="sm"
              className={cn(
                "transition-all",
                !isSolid && "bg-white text-deep hover:bg-white/90"
              )}
            >
              {t.nav.reservation}
            </Button>
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "md:hidden transition-colors",
            isDarkText ? "text-deep" : "text-white"
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-white shadow-lg overflow-hidden md:hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-deep hover:text-gold font-medium py-2 border-b border-neutral-100"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-3 mt-2">
                <Button
                  variant="outline"
                  onClick={toggleLanguage}
                  className="justify-start w-full"
                >
                  <Globe size={16} className="mr-2" />
                  {language === "en"
                    ? "Switch to Amharic"
                    : "Switch to English"}
                </Button>
                <Link
                  href="/reservation"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button className="w-full">{t.nav.reservation}</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
