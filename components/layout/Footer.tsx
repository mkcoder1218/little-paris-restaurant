"use client";
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-deep text-neutral-soft pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="text-3xl font-bold tracking-tighter text-white mb-6 block">
              Little <span className="text-gold">Paris</span>
            </Link>
            <p className="text-neutral-400 mb-6 max-w-xs">
              {t.hero.subtitle}
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white hover:text-gold transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-white hover:text-gold transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-white hover:text-gold transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">{t.contact.title}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-neutral-400">
                <MapPin size={20} className="text-gold shrink-0 mt-1" />
                <span>{t.contact.address}</span>
              </li>
              <li className="flex items-center gap-3 text-neutral-400">
                <Phone size={20} className="text-gold shrink-0" />
                <span>{t.contact.phone}</span>
              </li>
              <li className="flex items-center gap-3 text-neutral-400">
                <Mail size={20} className="text-gold shrink-0" />
                <span>{t.contact.email}</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Opening Hours</h3>
            <ul className="space-y-2 text-neutral-400">
              <li className="flex justify-between">
                <span>Mon - Fri</span>
                <span>11:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sat - Sun</span>
                <span>10:00 AM - 11:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-neutral-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Little Paris Restaurant. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
};
