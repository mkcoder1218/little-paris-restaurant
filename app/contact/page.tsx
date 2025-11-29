'use client';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ReservationForm } from '@/components/reservation/ReservationForm';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-b from-neutral-50 to-white">
      <Header />
      <div className="pt-24 pb-12 container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-light text-deep mb-4 font-serif tracking-tight">Get in Touch</h1>
          <p className="text-neutral-500 text-base max-w-2xl mx-auto mb-4 font-light">
            We'd love to hear from you. Reach out for reservations, events, or any inquiries.
          </p>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
        </motion.div>


        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="group relative bg-white p-5 rounded-xl shadow-sm border border-neutral-100 text-center hover:shadow-lg hover:border-gold/20 transition-all duration-300 overflow-hidden"
            variants={itemVariants}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="w-10 h-10 bg-gradient-to-br from-gold/20 to-gold/5 rounded-lg flex items-center justify-center mx-auto mb-3 text-gold group-hover:scale-105 transition-transform duration-300">
                <Phone size={18} strokeWidth={1.5} />
              </div>
              <h3 className="text-base font-semibold text-deep mb-2 tracking-wide">Phone</h3>
              <a href="tel:0922784470" className="text-neutral-600 hover:text-gold transition-colors text-sm font-light">
                092 278 4470
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="group relative bg-white p-5 rounded-xl shadow-sm border border-neutral-100 text-center hover:shadow-lg hover:border-gold/20 transition-all duration-300 overflow-hidden"
            variants={itemVariants}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="w-10 h-10 bg-gradient-to-br from-gold/20 to-gold/5 rounded-lg flex items-center justify-center mx-auto mb-3 text-gold group-hover:scale-105 transition-transform duration-300">
                <Mail size={18} strokeWidth={1.5} />
              </div>
              <h3 className="text-base font-semibold text-deep mb-2 tracking-wide">Email</h3>
              <div className="space-y-1">
                <a href="mailto:info@littleparisaddis.com" className="block text-neutral-600 hover:text-gold transition-colors font-light text-sm">
                  info@littleparisaddis.com
                </a>
                <a href="mailto:events@littleparisaddis.com" className="block text-neutral-600 hover:text-gold transition-colors font-light text-sm">
                  events@littleparisaddis.com
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="group relative bg-white p-5 rounded-xl shadow-sm border border-neutral-100 text-center hover:shadow-lg hover:border-gold/20 transition-all duration-300 overflow-hidden"
            variants={itemVariants}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="w-10 h-10 bg-gradient-to-br from-gold/20 to-gold/5 rounded-lg flex items-center justify-center mx-auto mb-3 text-gold group-hover:scale-105 transition-transform duration-300">
                <MapPin size={18} strokeWidth={1.5} />
              </div>
              <h3 className="text-base font-semibold text-deep mb-2 tracking-wide">Location</h3>
              <p className="text-neutral-600 font-light leading-relaxed text-sm">
                Marine Building | Summit<br />
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="flex flex-col lg:flex-row gap-6 items-start"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
           <div className="lg:w-1/2 h-[450px] rounded-3xl overflow-hidden shadow-xl ring-1 ring-neutral-200/50 hover:shadow-2xl transition-shadow duration-500">
             <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.2856!2d38.8436215!3d9.0024777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b9be5ab22232d%3A0x68a5da43e68bfa09!2sMarine%20Building%20%7C%20Summit!5e0!3m2!1sen!2set!4v1635756789012!5m2!1sen!2set" 
                 width="100%" 
                 height="100%" 
                 style={{ border: 0 }} 
                 allowFullScreen 
                 loading="lazy"
                 className="grayscale-[0.3] hover:grayscale-0 transition-all duration-700 contrast-110"
               ></iframe>
           </div>
           <div className="lg:w-1/2">
             <ReservationForm />
           </div>
        </motion.div>
      </div>
      <Footer />
    </main>
  );
}
