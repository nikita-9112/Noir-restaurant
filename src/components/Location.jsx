
import { motion } from "motion/react";
import { MapPin, Navigation, Clock } from "lucide-react";

const Location = () => {
  // Demo location — replace with the actual restaurant location.
  const address = "Indore, Madhya Pradesh, India";

  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <section
      id="location"
      className="bg-[#10100E] py-24 md:py-32 px-6 md:px-10"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-[#C6A15B] text-xs tracking-[0.3em] uppercase">
            Find Us
          </span>

          <h2 className="font-display text-4xl md:text-5xl mt-4">
            Visit <span className="text-[#C6A15B] italic">NOIR</span>
          </h2>

          <p className="text-[#A7A197] mt-5 max-w-xl mx-auto text-sm leading-7">
            We look forward to welcoming you. Find us and experience
            an unforgettable dining atmosphere.
          </p>
        </motion.div>

        {/* Map + Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 h-[350px] md:h-[450px] overflow-hidden rounded-sm border border-white/10"
          >
            <iframe
              title="NOIR restaurant location"
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          {/* Location Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#191815] p-8 md:p-10 flex flex-col justify-center"
          >
            <MapPin className="text-[#C6A15B] mb-5" size={30} />

            <h3 className="font-display text-2xl mb-4">
              Our Location
            </h3>

            <p className="text-[#A7A197] text-sm leading-7">
              {address}
            </p>

            <div className="border-t border-white/10 my-8" />

            <div className="flex items-start gap-3">
              <Clock className="text-[#C6A15B] shrink-0" size={20} />

              <div>
                <h4 className="text-white text-sm mb-2">
                  Opening Hours
                </h4>

                <p className="text-[#A7A197] text-sm leading-7">
                  Monday – Friday: 12 PM – 11 PM
                  <br />
                  Saturday – Sunday: 12 PM – 12 AM
                </p>
              </div>
            </div>

            <a
              href={directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-9 bg-[#C6A15B] text-[#10100E] py-4 px-5 flex items-center justify-center gap-3 text-xs tracking-widest font-semibold hover:bg-[#D8B875] transition-colors"
            >
              GET DIRECTIONS
              <Navigation size={16} />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Location;
