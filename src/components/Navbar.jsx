
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "Our Story", href: "#about" },
    { name: "Menu", href: "#signature" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#10100E]/85 backdrop-blur-md shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <img
            src="/noir-logo.png"
            alt="NOIR Restaurant Logo"
            className="h-11 w-11 object-contain"
          />

          <span className="font-display text-2xl tracking-[0.2em] text-noir-cream">
            NOIR
          </span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-noir-cream/80 transition hover:text-noir-gold"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Reservation button */}
        <a
          href="#reservation"
          className="hidden border border-noir-gold px-5 py-3 text-xs tracking-widest text-noir-gold transition hover:bg-noir-gold hover:text-noir md:block"
        >
          RESERVE A TABLE
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-noir-cream md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile navigation */}
      {isOpen && (
        <div
          id="mobile-navigation"
          className="flex flex-col gap-5 border-t border-white/10 bg-[#10100E] px-6 py-7 md:hidden"
        >
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-sm text-noir-cream transition hover:text-noir-gold"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#reservation"
            onClick={() => setIsOpen(false)}
            className="border border-noir-gold px-5 py-3 text-center text-xs tracking-widest text-noir-gold"
          >
            RESERVE A TABLE
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
