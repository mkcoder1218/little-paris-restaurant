import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ReservationForm } from '@/components/reservation/ReservationForm';

export default function ReservationPage() {
  return (
    <main className="min-h-screen flex flex-col bg-neutral-soft">
      <Header />
      <div className="pt-32 pb-20 container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/2">
            <h1 className="text-5xl font-bold text-deep mb-6 font-serif">Book Your Table</h1>
            <div className="w-20 h-1 bg-gold mb-8" />
            <p className="text-neutral-600 mb-8 text-lg leading-relaxed">
              Reserve your spot at Little Paris for an unforgettable dining experience. 
              Whether it's a romantic dinner or a family gathering, we are ready to serve you.
            </p>
            <div className="bg-deep text-white p-8 rounded-2xl mb-8 shadow-xl">
              <h3 className="text-xl font-bold mb-4 text-gold">Opening Hours</h3>
              <ul className="space-y-3 text-neutral-300">
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>Mon - Fri</span>
                  <span>11:00 AM - 10:00 PM</span>
                </li>
                <li className="flex justify-between pt-2">
                  <span>Sat - Sun</span>
                  <span>10:00 AM - 11:00 PM</span>
                </li>
              </ul>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg border border-white/50">
               {/* Map Placeholder - utilizing a generic Addis Ababa location */}
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.543453775466!2d38.7865!3d9.0125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa!5e0!3m2!1sen!2set!4v1635756789012!5m2!1sen!2set" 
                 width="100%" 
                 height="100%" 
                 style={{ border: 0 }} 
                 allowFullScreen 
                 loading="lazy"
                 className="grayscale hover:grayscale-0 transition-all duration-500"
               ></iframe>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <ReservationForm />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
