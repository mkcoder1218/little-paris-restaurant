"use client";
import { useLanguage } from '@/context/LanguageContext';
import { DishCard } from '@/components/menu/DishCard';
import { motion } from 'framer-motion';

export const FeaturedDishes = () => {
  const { t } = useLanguage();

  const dishes = [
    {
      title: "Coq au Vin",
      description: "Classic French chicken stew with wine, mushrooms, salt pork, and garlic.",
      price: "850 ETB",
      image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Doro Wat",
      description: "Spicy Ethiopian chicken stew served with hard-boiled eggs and injera.",
      price: "650 ETB",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Beef Bourguignon",
      description: "Beef braised in red wine, often beef broth, and flavored with carrots, onions, garlic.",
      price: "950 ETB",
      image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?q=80&w=1974&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-deep relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="text-gold uppercase tracking-[0.2em] text-xs font-medium mb-3 block">Taste the Extraordinary</span>
          <h2 className="text-4xl md:text-5xl font-medium text-white mb-4 font-serif">Signature Dishes</h2>
          <div className="w-16 h-px bg-gold mx-auto mb-6" />
          <p className="text-neutral-400 max-w-2xl mx-auto text-base font-light leading-relaxed">
            A curated selection of our chef's masterpieces, blending the finest French techniques with the soul of Ethiopian flavors.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <DishCard {...dish} />
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a href="/menu" className="inline-flex items-center gap-2 text-gold hover:text-white transition-colors uppercase tracking-widest text-sm font-bold border-b border-gold pb-1 hover:border-white">
            View Full Menu <span className="text-lg">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
};
