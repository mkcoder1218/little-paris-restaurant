import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/home/Hero';
import { FeaturedDishes } from '@/components/home/FeaturedDishes';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <FeaturedDishes />
      
      {/* About Preview Section */}
      <section className="relative py-20 bg-neutral-soft overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2 relative">
            <div className="relative h-[500px] w-full rounded-none overflow-hidden shadow-xl">
               <img 
                 src="https://lh3.googleusercontent.com/p/AF1QipO5u1E0LFzED0aoKdsA9Ogfa9howSqDrsi1FBE=s1360-w1360-h1020-rw" 
                 alt="Restaurant Interior" 
                 className="object-cover w-full h-full hover:scale-105 transition-transform duration-[2s]"
               />
               <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gold/10 rounded-full blur-3xl z-0" />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-5 shadow-lg max-w-xs hidden md:block border-l-2 border-gold">
              <p className="font-serif italic text-lg text-deep">"The best French dining experience in East Africa."</p>
              <p className="text-xs text-neutral-400 mt-2 uppercase tracking-widest">- Food Guide 2024</p>
            </div>
          </div>
          <div className="md:w-1/2">
            <span className="text-gold uppercase tracking-widest text-xs font-medium mb-3 block">Our Philosophy</span>
            <h2 className="text-4xl md:text-5xl font-medium text-deep mb-6 font-serif leading-tight">A Culinary <br/><span className="italic text-gold font-light">Journey</span></h2>
            <p className="text-neutral-600 mb-6 leading-relaxed text-base font-light">
              Little Paris brings the elegance of French dining to the vibrant heart of Addis Ababa. 
              Our chefs blend traditional French techniques with the warmth of Ethiopian hospitality 
              to create a unique gastronomic experience.
            </p>
            <p className="text-neutral-600 mb-8 leading-relaxed text-base font-light">
              Whether you are here for a romantic dinner, a business lunch, or a celebration, 
              we promise an unforgettable evening of taste and luxury.
            </p>
            <a href="/about" className="group inline-flex items-center gap-3 text-deep font-medium hover:text-gold transition-colors text-base">
              <span className="border-b border-deep group-hover:border-gold pb-0.5 transition-colors">Read Our Story</span>
              <span className="text-xl group-hover:translate-x-1 transition-transform">&rarr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* Parallax Break Section */}
      <section className="relative h-[60vh] bg-fixed bg-center bg-cover flex items-center justify-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?q=80&w=2070&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4">
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 italic">"Bon Appétit"</h2>
          <p className="text-white/80 text-xl max-w-2xl mx-auto font-light">Experience the art of French cooking in every bite.</p>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
