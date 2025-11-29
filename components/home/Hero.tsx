"use client";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { motion } from "framer-motion";

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative h-[85vh] min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyCwH6f-u_IpGSId09Dzy2wOH5qNOP_Ll41lY76yROJ75lZa6RUBrVvs-uoimTft1RRj3e6jFXNrFSlLWMzZLClN8y5aQeC__1D00CeEetmSwpJdraWjk5cB4hvzSD7Uc8ukIRaYA=s1360-w1360-h1020-rw')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90" />{" "}
        {/* Lighter Overlay */}
      </motion.div>

      <div className="container mx-auto px-4 relative z-10 text-center text-white mt-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="text-gold uppercase tracking-[0.2em] text-sm font-medium mb-4 block animate-fade-in">
            Bienvenue à Addis Ababa
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium mb-6 tracking-tight font-serif leading-none">
            Little <span className="text-gold italic font-light">Paris</span>
          </h1>
          <p className="text-lg md:text-2xl mb-10 max-w-2xl mx-auto text-neutral-100 font-light leading-relaxed">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/reservation">
              <Button
                size="lg"
                className="min-w-[180px] h-12 text-base bg-gold hover:bg-white hover:text-deep transition-all duration-300 shadow-md font-medium"
              >
                {t.hero.cta}
              </Button>
            </Link>
            <Link href="/menu">
              <Button
                variant="outline"
                size="lg"
                className="min-w-[180px] h-12 text-base text-white border-white/50 hover:bg-white/10 hover:border-white backdrop-blur-sm font-medium"
              >
                {t.hero.viewMenu}
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/50 to-transparent mx-auto" />
        <span className="text-xs uppercase tracking-widest mt-2 block">
          Scroll
        </span>
      </motion.div>
    </section>
  );
};
