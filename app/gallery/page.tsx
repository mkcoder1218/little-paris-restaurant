"use client";
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

const images = [
  "https://lh3.googleusercontent.com/p/AF1QipO5u1E0LFzED0aoKdsA9Ogfa9howSqDrsi1FBE=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/p/AF1QipN3w--M72BQB39srayOWu99DjU_7smhDMIHPw0=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwJIAzFFgh77_MN30W1BsI4zLrFK7Ag698PC3F6W_Jvos1zmJlKuS-z2b4JkL_Q9y7p1yT-pssH61INNCI9mCowqb2BYtjS4pIR1Xjrg4IhXLijLnzeQWdM9Oy-LvPE9eWqGP1Nhg=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyH6ond_QChpQ_9IzqZ6Jw-3gD81fBF8ySYz33jsuzb5KhuuRKeKjiBSZnbHcyPdDeqZDNl_cLe9lRZQMV8vTaZsoEm5TRoAwFG1qBdgXmNE3F6MXksMOAb6C0hNfnfU6X16ggxo1Ju79-0=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/p/AF1QipMFZ3jxmoFGY10accfawO8N4mLddZHjPkVYC3E=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzR2a4z7bGLOXH83ZeoPOjcPOwmW9SnMpqfloHCPxb4zrh6v9-N0KphLi0bFxYLGI_N6yGazNiSLwGDNvmcaJ0t5-PpBvdeZhShxa2emN5FwiynhG_nRwq_sZWLtt-JY4AexlkAvRlrAlD7=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/p/AF1QipOO3MAxGV6OgK3DxfgwbaaLu44GeIZbDIROlmE=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzCKSHe9VKNqLcpRI241WeWx80aRNBK30Iz1xL3LxP_3fjY7Wt9ahinGJAtWU-0-NgCEBaR45QJ_57rb7UQkezIU6CvTBWY9H1biFtfXJpfV807saacDc3BBzlq4FCW6iwJvpGVhBF0Ed6O=s1360-w1360-h1020-rw",
  "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyk89O7dAeno-GBifaT422OOEmfH30Z_5AyvDVQ8xWTbCM8qPGk-Vy6B5yiJW3GbNXM4fmXUkBjSHvlmKYFCESzgYNr5gw-ObDyrl4cLJo9w8lu4N_D41Sf9HU2XeVb2wnAuxWFBPOIgUQM=s1360-w1360-h1020-rw"
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

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
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/p/AF1QipO5u1E0LFzED0aoKdsA9Ogfa9howSqDrsi1FBE=s1360-w1360-h1020-rw')" }}
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
            <span className="text-gold uppercase tracking-[0.2em] text-sm font-medium mb-4 block">Notre Galerie</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium mb-6 tracking-tight font-serif leading-none">
              Gallery
            </h1>
            <div className="w-24 h-[2px] bg-gold mx-auto mb-6" />
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-neutral-100 font-light leading-relaxed">
              A glimpse into our world of culinary artistry and elegant ambiance.
            </p>
          </motion.div>
        </div>

        {/* Decorative Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral-soft to-transparent z-10" />
      </section>

      {/* Gallery Content */}
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="relative h-80 group overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-500 cursor-pointer"
              onClick={() => setSelectedImage(index)}
              whileHover={{ y: -8 }}
            >
              <Image
                src={src}
                alt={`Gallery Image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                <span className="text-white font-serif italic text-2xl tracking-wide">Little Paris</span>
              </div>
              {/* Gold border on hover */}
              <div className="absolute inset-0 border-2 border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-6xl max-h-[90vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[selectedImage]}
              alt={`Gallery Image ${selectedImage + 1}`}
              fill
              className="object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white bg-black/50 hover:bg-gold transition-colors duration-300 rounded-full w-12 h-12 flex items-center justify-center text-2xl backdrop-blur-sm"
            >
              ×
            </button>
            {/* Navigation arrows */}
            {selectedImage > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(selectedImage - 1);
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-gold transition-colors duration-300 rounded-full w-12 h-12 flex items-center justify-center text-2xl backdrop-blur-sm"
              >
                ‹
              </button>
            )}
            {selectedImage < images.length - 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(selectedImage + 1);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-gold transition-colors duration-300 rounded-full w-12 h-12 flex items-center justify-center text-2xl backdrop-blur-sm"
              >
                ›
              </button>
            )}
          </motion.div>
        </motion.div>
      )}

      <Footer />
    </main>
  );
}
