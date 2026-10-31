
import { useState } from "react";
import { motion } from "motion/react";
import {
  CalendarDays,
  Clock,
  Users,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    occasion: "",
    message: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneRegex = /^[0-9]{10}$/;

    if (!phoneRegex.test(formData.phone)) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }

    const whatsappNumber = "917089724059"; // Replace with restaurant WhatsApp number

    const message = `
Hello NOIR! I'd like to make a reservation.

Name: ${formData.name}
Phone: ${formData.phone}
Date: ${formData.date}
Time: ${formData.time}
Guests: ${formData.guests}
Occasion: ${formData.occasion || "Not specified"}
Special Requests: ${formData.message || "None"}

Please confirm my reservation. Thank you!
    `;

    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  const today = new Date().toLocaleDateString("en-CA");

  return (
    <section
      id="reservation"
      className="relative overflow-hidden bg-noir px-6 py-24 md:py-32"
    >
      {/* Background Decoration */}
      <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-noir-gold/5 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-5 text-xs font-semibold tracking-[0.4em] text-noir-gold">
            YOUR TABLE AWAITS
          </p>

          <h2 className="font-display text-4xl leading-tight text-noir-cream md:text-6xl">
            Make Your
            <br />
            <span className="italic text-noir-gold">
              Moments Special.
            </span>
          </h2>

          <p className="mt-8 max-w-lg text-sm leading-8 text-noir-muted">
            Whether it's a romantic dinner, a family gathering or
            a special celebration, we'd love to make your experience
            unforgettable.
          </p>

          <div className="mt-12 space-y-7">

            <div className="flex items-center gap-5">
              <div className="flex h-12 w-12 items-center justify-center border border-noir-gold/30 text-noir-gold">
                <CalendarDays size={21} />
              </div>

              <div>
                <p className="text-sm text-noir-cream">
                  Plan Your Visit
                </p>
                <p className="mt-1 text-xs text-noir-muted">
                  Choose your preferred date and time.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="flex h-12 w-12 items-center justify-center border border-noir-gold/30 text-noir-gold">
                <Users size={21} />
              </div>

              <div>
                <p className="text-sm text-noir-cream">
                  Any Occasion
                </p>
                <p className="mt-1 text-xs text-noir-muted">
                  Intimate dinners to group celebrations.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="flex h-12 w-12 items-center justify-center border border-noir-gold/30 text-noir-gold">
                <MessageCircle size={21} />
              </div>

              <div>
                <p className="text-sm text-noir-cream">
                  Easy Confirmation
                </p>
                <p className="mt-1 text-xs text-noir-muted">
                  Send your enquiry directly through WhatsApp.
                </p>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Reservation Form */}
        <motion.div
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border border-white/10 bg-noir-card p-7 md:p-10"
        >
          <div className="mb-9">
            <p className="text-xs tracking-[0.3em] text-noir-gold">
              RESERVATION
            </p>

            <h3 className="mt-3 font-display text-3xl text-noir-cream">
              Book Your Table
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Name */}
            <div>
              <label className="mb-2 block text-xs text-noir-muted">
                Full Name *
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                maxLength={80}
                className="w-full border border-white/10 bg-black/20 px-4 py-4 text-sm text-white outline-none transition focus:border-noir-gold"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="mb-2 block text-xs text-noir-muted">
                Phone Number *
              </label>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="10-digit mobile number"
                pattern="[0-9]{10}"
                maxLength={10}
                required
                className="w-full border border-white/10 bg-black/20 px-4 py-4 text-sm text-white outline-none transition focus:border-noir-gold"
              />
            </div>

            {/* Date and Time */}
            <div className="grid gap-5 sm:grid-cols-2">

              <div>
                <label className="mb-2 block text-xs text-noir-muted">
                  Reservation Date *
                </label>

                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  min={today}
                  required
                  className="w-full border border-white/10 bg-black/20 px-3 py-4 text-sm text-white outline-none focus:border-noir-gold [color-scheme:dark]"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs text-noir-muted">
                  Preferred Time *
                </label>

                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full border border-white/10 bg-black/20 px-3 py-4 text-sm text-white outline-none focus:border-noir-gold [color-scheme:dark]"
                />
              </div>

            </div>

            {/* Guests and Occasion */}
            <div className="grid gap-5 sm:grid-cols-2">

              <div>
                <label className="mb-2 block text-xs text-noir-muted">
                  Number of Guests *
                </label>

                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  required
                  className="w-full border border-white/10 bg-[#191815] px-4 py-4 text-sm text-white outline-none focus:border-noir-gold"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(
                    (number) => (
                      <option key={number} value={number}>
                        {number} {number === 1 ? "Guest" : "Guests"}
                      </option>
                    )
                  )}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-xs text-noir-muted">
                  Occasion
                </label>

                <select
                  name="occasion"
                  value={formData.occasion}
                  onChange={handleChange}
                  className="w-full border border-white/10 bg-[#191815] px-4 py-4 text-sm text-white outline-none focus:border-noir-gold"
                >
                  <option value="">Select occasion</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Anniversary">Anniversary</option>
                  <option value="Date Night">Date Night</option>
                  <option value="Family Dinner">Family Dinner</option>
                  <option value="Other">Other</option>
                </select>
              </div>

            </div>

            {/* Special Requests */}
            <div>
              <label className="mb-2 block text-xs text-noir-muted">
                Special Requests
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Any special requirements?"
                rows={3}
                maxLength={500}
                className="w-full resize-none border border-white/10 bg-black/20 px-4 py-4 text-sm text-white outline-none focus:border-noir-gold"
              />
            </div>

            {/* Error */}
            {error && (
              <p role="alert" className="text-sm text-red-400">
                {error}
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-3 bg-noir-gold px-6 py-5 text-xs font-semibold tracking-[0.2em] text-noir transition hover:bg-noir-cream"
            >
              SEND RESERVATION REQUEST

              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>

            <p className="text-center text-[11px] leading-5 text-noir-muted">
              Your request will open in WhatsApp. Your reservation
              is not confirmed until the restaurant responds.
            </p>

          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default Reservation;

