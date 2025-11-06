import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Accueil", href: "#" },
    { name: "À propos", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Partenaires", href: "#partenaires" },
    { name: "Avis", href: "#avis" },
    { name: "Galeries", href: "#galleries" },
    { name: "Contact", href: "#contact" },
  ];

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-2">

        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <img
            src="/logos/agcoaching-logo.jpg"
            alt="Logo AG Coaching"
            className="h-12 w-auto object-contain"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center font-semibold uppercase tracking-wide">
          {links.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              className={`
                w-38 h-12 flex items-center justify-center border border-gray-200
                first:border-l-0
                text-black bg-white font-semibold transition-colors duration-300
                hover:text-white hover:bg-black
              `}
            >
              {link.name}
            </a>
          ))}

          {/* Instagram */}
          <a
            href="https://instagram.com/agcoaching56"
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-12 h-12 flex items-center justify-center border-gray-200
              text-black bg-white font-semibold transition-colors duration-300
              hover:text-white hover:bg-black
              gap-2
            "
          >
            <FaInstagram />
          </a>
        </div>

        {/* Mobile Burger */}
        <button
          className="md:hidden text-black text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Ouvrir le menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden absolute top-full left-0 w-full bg-white flex flex-col items-center font-semibold uppercase tracking-wide space-y-4 py-6 border-t border-gray-200"
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="w-3/4 text-center py-3 border border-gray-200 text-black transition-colors duration-300 hover:bg-black hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://instagram.com/agcoaching56"
              target="_blank"
              rel="noopener noreferrer"
              className="w-3/4 text-center py-3 border border-gray-200 text-black transition-colors duration-300 hover:bg-black hover:text-white flex items-center justify-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              <FaInstagram /> Instagram
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
