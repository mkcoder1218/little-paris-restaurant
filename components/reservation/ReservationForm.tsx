"use client";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/Button";
import { Calendar, Clock, Users, User, Mail, Phone } from "lucide-react";

export const ReservationForm = () => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      guests: formData.get("guests"),
      date: formData.get("date"),
      time: formData.get("time"),
      requests: formData.get("requests"),
    };

    try {
      const res = await fetch("/api/send-telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      console.log("Telegram response:", data);

      alert("Reservation submitted successfully!");
      form.reset();
    } catch (error) {
      console.error(error);
      alert("Failed to submit reservation.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-3xl shadow-xl border border-neutral-100 hover:shadow-2xl transition-shadow duration-500"
    >
      <div className="mb-6">
        <h3 className="text-2xl font-light text-deep mb-2 font-serif tracking-tight">
          {t.reservation.title}
        </h3>
        <p className="text-neutral-500 font-light">
          Fill in your details and we'll confirm your reservation
        </p>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="group">
            <label className="block text-sm font-medium text-neutral-700 mb-2 tracking-wide">
              {t.reservation.name}
            </label>
            <div className="relative">
              <User
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 group-focus-within:text-gold transition-colors"
              />
              <input
                name="name"
                type="text"
                required
                className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-neutral-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all font-light bg-neutral-50/50 focus:bg-white"
                placeholder="Your name"
              />
            </div>
          </div>

          <div className="group">
            <label className="block text-sm font-medium text-neutral-700 mb-2 tracking-wide">
              {t.reservation.email}
            </label>
            <div className="relative">
              <Mail
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 group-focus-within:text-gold transition-colors"
              />
              <input
                name="email"
                type="email"
                required
                className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-neutral-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all font-light bg-neutral-50/50 focus:bg-white"
                placeholder="your@email.com"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="group">
            <label className="block text-sm font-medium text-neutral-700 mb-2 tracking-wide">
              {t.reservation.phone}
            </label>
            <div className="relative">
              <Phone
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 group-focus-within:text-gold transition-colors"
              />
              <input
                name="phone"
                type="tel"
                required
                className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-neutral-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all font-light bg-neutral-50/50 focus:bg-white"
                placeholder="+251 912 345 678"
              />
            </div>
          </div>

          <div className="group">
            <label className="block text-sm font-medium text-neutral-700 mb-2 tracking-wide">
              {t.reservation.guests}
            </label>
            <div className="relative">
              <Users
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 group-focus-within:text-gold transition-colors"
              />
              <select
                name="guests"
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-neutral-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all font-light bg-neutral-50/50 focus:bg-white appearance-none cursor-pointer"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, "8+"].map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? "Guest" : "Guests"}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="group">
            <label className="block text-sm font-medium text-neutral-700 mb-2 tracking-wide">
              {t.reservation.date}
            </label>
            <div className="relative">
              <Calendar
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 group-focus-within:text-gold transition-colors pointer-events-none"
              />
              <input
                name="date"
                type="date"
                required
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-neutral-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all font-light bg-neutral-50/50 focus:bg-white"
              />
            </div>
          </div>

          <div className="group">
            <label className="block text-sm font-medium text-neutral-700 mb-2 tracking-wide">
              {t.reservation.time}
            </label>
            <div className="relative">
              <Clock
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 group-focus-within:text-gold transition-colors pointer-events-none"
              />
              <input
                name="time"
                type="time"
                required
                className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-neutral-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all font-light bg-neutral-50/50 focus:bg-white"
              />
            </div>
          </div>
        </div>

        <div className="group">
          <label className="block text-sm font-medium text-neutral-700 mb-2 tracking-wide">
            Special Requests (Optional)
          </label>
          <textarea
            name="requests"
            rows={3}
            className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all font-light bg-neutral-50/50 focus:bg-white resize-none"
            placeholder="Any dietary restrictions or special occasions?"
          />
        </div>
      </div>

      <Button
        type="submit"
        className="w-full mt-6 h-12 text-base font-medium bg-gradient-to-r from-gold to-gold/90 hover:from-gold/90 hover:to-gold shadow-lg hover:shadow-xl transition-all duration-300"
        size="lg"
        isLoading={isSubmitting}
      >
        {t.reservation.submit}
      </Button>
    </form>
  );
};
