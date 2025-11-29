"use client";
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col bg-neutral-soft">
      <Header />
      
      {/* Luxurious Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
        >
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop"
              alt="About Hero"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
          </div>
        </motion.div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="text-gold uppercase tracking-[0.2em] text-sm font-medium mb-4 block">Notre Histoire</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium mb-6 tracking-tight font-serif leading-none">
              Our Story
            </h1>
            <div className="w-24 h-[2px] bg-gold mx-auto mb-6" />
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-neutral-100 font-light leading-relaxed">
              Tradition, Passion, and Excellence.
            </p>
          </motion.div>
        </div>

        {/* Decorative Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral-soft to-transparent z-10" />
      </section>

      {/* Content Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* The Beginning Section */}
          <motion.div 
            className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center mb-32"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="text-gold uppercase tracking-[0.15em] text-xs font-medium mb-3 block">Since 2015</span>
                <h2 className="text-4xl md:text-5xl font-medium text-deep mb-6 font-serif leading-tight">The Beginning</h2>
                <div className="w-20 h-[2px] bg-gold mb-8" />
                <p className="text-neutral-600 mb-6 leading-relaxed text-base font-light">
                  Founded in 2022, Little Paris started with a simple dream: to bring the authentic taste of French cuisine to the heart of Addis Ababa. 
                  What began as a small bistro has grown into one of the city's most beloved dining destinations.
                </p>
                <p className="text-neutral-600 leading-relaxed text-base font-light">
                  We believe in the power of food to bring people together. Our ingredients are locally sourced where possible, 
                  blending the freshness of Ethiopian produce with classic French cooking techniques.
                </p>
              </motion.div>
            </div>
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{ perspective: '1000px' }}
            >
              <div className="relative h-[450px] group">
                {/* Deep shadow layers for enhanced depth */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-deep/30 rounded-2xl blur-3xl transform translate-y-8 translate-x-4 opacity-60" />
                <div className="absolute inset-0 bg-black/20 rounded-2xl blur-2xl transform translate-y-6 translate-x-3 opacity-40" />
                
                {/* Main image container with rotation and depth */}
                <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl transform rotate-2 group-hover:rotate-0 transition-all duration-700 group-hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] group-hover:scale-105 group-hover:-translate-y-2" style={{ transformStyle: 'preserve-3d' }}>
                  <Image
                    src="https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyOZAEy2QW6w5Kj6yrqoHwuXzGbVfMkkUsqHL8NkbvaCdRBnzHNXqampBwBPQW0JZGlvdP6Iw1Jkphd5mcg_-eBaEMNyVK5irJcQN9dSi3BlzIdJFNc22T-3OtpyUd9K02Vpg=s1360-w1360-h1020-rw"
                    alt="Restaurant Ambience"
                    fill
                    className="object-cover object-center transition-transform duration-700  group-hover:scale-110"
                  />
                  
                  {/* Dark overlay for dramatic effect */}
                  <div className="absolute inset-0 bg-black/25" />
                  
                  {/* Animated gold border overlay */}
                  <div className="absolute inset-0 border-4 border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  
                  {/* Multi-layered gradient overlays for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-deep/20 opacity-60" />
                  
                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform -translate-x-full group-hover:translate-x-full" style={{ transition: 'transform 1.5s ease-in-out, opacity 0.7s' }} />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Meet the Chef Section */}
          <motion.div 
            className="flex flex-col md:flex-row-reverse gap-12 lg:gap-20 items-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="text-gold uppercase tracking-[0.15em] text-xs font-medium mb-3 block">Master Chef</span>
                <h2 className="text-4xl md:text-5xl font-medium text-deep mb-6 font-serif leading-tight">Meet the ChefFounded in 2022</h2>
                <div className="w-20 h-[2px] bg-gold mb-8" />
                <p className="text-neutral-600 mb-6 leading-relaxed text-base font-light">
                  Chef Jean-Pierre, with over 20 years of experience in Paris and Lyon, leads our kitchen with passion and precision. 
                  His philosophy is simple: respect the ingredients and cook with love.
                </p>
                <blockquote className="relative pl-6 border-l-2 border-gold">
                  <p className="text-neutral-700 leading-relaxed text-base italic font-light">
                    "Cooking is an art, but it is also a language. At Little Paris, we speak the language of flavor."
                  </p>
                  <cite className="text-gold text-sm font-medium not-italic block mt-3">— Chef Jean-Pierre</cite>
                </blockquote>
              </motion.div>
            </div>
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-2xl group">
                <Image
                  src="https://lh3.googleusercontent.com/p/AF1QipMedXl-_guKLtENw07ec_Mms-F0meQI9HVlbdA=s1360-w1360-h1020-rw"
                  alt="Chef"
                  fill
                  className="object-cover rotate-270 transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gold border overlay on hover */}
                <div className="absolute inset-0 border-4 border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white/50">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold uppercase tracking-[0.15em] text-xs font-medium mb-3 block">Our Philosophy</span>
            <h2 className="text-4xl md:text-5xl font-medium text-deep mb-6 font-serif">What We Stand For</h2>
            <div className="w-20 h-[2px] bg-gold mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Quality", description: "We source only the finest ingredients, ensuring every dish meets our exacting standards.", icon: "✨" },
              { title: "Authenticity", description: "Traditional French techniques combined with local Ethiopian flavors create unique experiences.", icon: "🎯" },
              { title: "Passion", description: "Every meal is prepared with love and dedication by our talented culinary team.", icon: "❤️" }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{value.icon}</div>
                <h3 className="text-2xl font-medium text-deep mb-4 font-serif group-hover:text-gold transition-colors duration-300">{value.title}</h3>
                <p className="text-neutral-600 leading-relaxed font-light">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
