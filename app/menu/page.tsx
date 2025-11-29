"use client";
import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { DishCard } from '@/components/menu/DishCard';
import { Button } from '@/components/ui/Button';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

const menuItems = [
  { id: 1, category: 'starters', title: "Escargots de Bourgogne", description: "Snails cooked in garlic herb butter.", price: "450 ETB", image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?q=80&w=1974&auto=format&fit=crop" },
  { id: 2, category: 'starters', title: "French Onion Soup", description: "Rich beef broth with caramelized onions and melted cheese.", price: "350 ETB", image: "https://images.unsplash.com/photo-1547592166-23acbe3a624b?q=80&w=1974&auto=format&fit=crop" },
  { id: 3, category: 'mains', title: "Coq au Vin", description: "Chicken braised with wine, lardons, mushrooms, and garlic.", price: "850 ETB", image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=2070&auto=format&fit=crop" },
  { id: 4, category: 'mains', title: "Steak Frites", description: "Pan-seared steak served with crispy french fries.", price: "1200 ETB", image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=2070&auto=format&fit=crop" },
  { id: 5, category: 'desserts', title: "Crème Brûlée", description: "Rich custard base topped with a layer of hardened caramelized sugar.", price: "300 ETB", image: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?q=80&w=2070&auto=format&fit=crop" },
  { id: 6, category: 'drinks', title: "Tej (Honey Wine)", description: "Traditional Ethiopian honey wine.", price: "250 ETB", image: "https://images.unsplash.com/photo-1566703378610-b6c38a9e0421?q=80&w=1974&auto=format&fit=crop" },
  { id: 7, category: 'mains', title: "Doro Wat", description: "Spicy Ethiopian chicken stew served with hard-boiled eggs and injera.", price: "650 ETB", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop" },
  { id: 8, category: 'starters', title: "Sambusa", description: "Crispy pastry filled with spiced lentils or meat.", price: "150 ETB", image: "https://images.unsplash.com/photo-1604152135912-04a022e23696?q=80&w=1974&auto=format&fit=crop" },
];

export default function MenuPage() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'starters', label: t.menu.starters },
    { id: 'mains', label: t.menu.mains },
    { id: 'desserts', label: t.menu.desserts },
    { id: 'drinks', label: t.menu.drinks },
  ];

  const filteredItems = filter === 'all' ? menuItems : menuItems.filter(item => item.category === filter);

  return (
    <main className="min-h-screen flex flex-col bg-neutral-soft">
      <Header />
      
      {/* Luxurious Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </motion.div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="text-gold uppercase tracking-[0.2em] text-sm font-medium mb-4 block">Notre Menu</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium mb-6 tracking-tight font-serif leading-none">
              {t.menu.title}
            </h1>
            <div className="w-24 h-[2px] bg-gold mx-auto mb-6" />
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-neutral-100 font-light leading-relaxed">
              Explore our wide range of delicious dishes, carefully crafted to bring you the best of two worlds.
            </p>
          </motion.div>
        </div>

        {/* Decorative Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral-soft to-transparent z-10" />
      </section>

      {/* Menu Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Category Filters */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
            >
              <Button
                variant={filter === cat.id ? 'primary' : 'outline'}
                onClick={() => setFilter(cat.id)}
                className={`
                  min-w-[120px] h-11 rounded-full font-medium tracking-wide text-sm
                  transition-all duration-300
                  ${filter === cat.id 
                    ? 'bg-gold text-white shadow-lg shadow-gold/30 border-gold' 
                    : 'border-neutral-300 text-neutral-600 hover:border-gold hover:text-gold backdrop-blur-sm'
                  }
                `}
              >
                {cat.label}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Dishes Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          layout
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              layout
            >
              <DishCard {...item} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}
