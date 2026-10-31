
import { motion } from "motion/react";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  Clock,
} from "lucide-react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Our Story", href: "#about" },
    { name: "Menu", href: "#signature" },
    { name: "Gallery", href: "#gallery" },
    { name: "Reservations", href: "#reservation" },
  ];

  return (
    <footer
      id="contact"
      className="bg-[#0B0B0A] border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-8">

        {/* Main Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <a href="#home" className="inline-flex items-center gap-3">
              <img
                src="/favicon.webp"
                alt="NOIR Restaurant Logo"
                className="h-14 w-14 object-contain"
              />

              <span className="font-display text-3xl tracking-[0.2em] text-noir-cream">
                NOIR
              </span>
            </a>

            <p className="text-[#A7A197] text-sm leading-7 mt-6 max-w-xs">
              An extraordinary dining experience where exceptional
              flavours, elegant ambience and memorable moments come together.
            </p>

            <div className="flex gap-4 mt-7">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 border border-white/15 rounded-full flex items-center justify-center text-[#A7A197] hover:text-[#C6A15B] hover:border-[#C6A15B] transition"
              >
                <FaInstagram size={17} />
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 border border-white/15 rounded-full flex items-center justify-center text-[#A7A197] hover:text-[#C6A15B] hover:border-[#C6A15B] transition"
              >
                <FaFacebookF size={17} />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-medium tracking-wider mb-7">
              QUICK LINKS
            </h3>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-[#A7A197] hover:text-[#C6A15B] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-medium tracking-wider mb-7">
              CONTACT US
            </h3>

            <ul className="space-y-5 text-sm text-[#A7A197]">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#C6A15B] shrink-0" />
                <span>
                  Your Restaurant Address,
                  <br />
                  Your City, India
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone size={17} className="text-[#C6A15B] shrink-0" />
                <a href="tel:+919876543210" className="hover:text-[#C6A15B]">
                  +91 98765 43210
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail size={17} className="text-[#C6A15B] shrink-0" />
                <a
                  href="mailto:hello@noirrestaurant.com"
                  className="hover:text-[#C6A15B]"
                >
                  hello@noirrestaurant.com
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-white font-medium tracking-wider mb-7">
              OPENING HOURS
            </h3>

            <div className="flex items-start gap-3 text-sm text-[#A7A197]">
              <Clock size={18} className="text-[#C6A15B] shrink-0" />

              <div className="space-y-3">
                <p>Monday – Friday</p>
                <p className="text-white">12:00 PM – 11:00 PM</p>

                <p className="pt-2">Saturday – Sunday</p>
                <p className="text-white">12:00 PM – 12:00 AM</p>
              </div>
            </div>

            <a
              href="#reservation"
              className="inline-flex items-center gap-2 mt-7 text-sm text-[#C6A15B] hover:gap-3 transition-all"
            >
              Book a Table <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-16 pt-7 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#77736B]">
            © {currentYear} NOIR. All rights reserved.
          </p>

          <p className="text-xs text-[#77736B]">
            Crafted with care for a memorable dining experience.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
