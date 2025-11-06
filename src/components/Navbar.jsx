import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
      className="fixed top-0 left-0 w-full z-50 (--color-background)k/30 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">

        <a href="#" className="flex items-center gap-3">
          <img
            src="/logos/agcoaching-logo.jpg"
            alt="Logo AG Coaching"
            className="h-12 w-auto object-contain rounded-full"
          />
        </a>

        <div className="hidden md:flex items-center gap-8 (--color-text)/80 font-semibold uppercase tracking-wide">
          <a href="#" className="hover:text-(--color-primary) transition">Accueil</a>
          <a href="#about" className="hover:text-(--color-primary) transition">À propos</a>
          <a href="#services" className="hover:text-(--color-primary) transition">Services</a>
          <a href="#partenaires" className="hover:text-(--color-primary) transition">Partenaires</a>
          <a href="#avis" className="hover:text-(--color-primary) transition">Avis</a>
          <a href="#galleries" className="hover:text-(--color-primary) transition">Galeries</a>
          <a href="#contact" className="hover:text-(--color-primary) transition">Contact</a>
          <a
            href="https://instagram.com/agcoaching56"
            target="_blank"
            rel="noopener noreferrer"
            className="text-(--color-primary) hover:(--color-text) transition flex items-center gap-2"
          >
            <FaInstagram />
          </a>
        </div>

        <button
          className="md:hidden (--color-text) text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Ouvrir le menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden absolute top-full left-0 w-full (--color-background)k/90 backdrop-blur-lg border-t border-white/10 flex flex-col items-center (--color-text)/90 font-semibold uppercase tracking-wide space-y-6 py-8 text-lg"
          >
            <a href="#" className="hover:text-(--color-primary) transition" onClick={() => setIsOpen(false)}>
              Accueil
            </a>
            <a href="#about" className="hover:text-(--color-primary) transition" onClick={() => setIsOpen(false)}>
              À propos
            </a>
            <a href="#services" className="hover:text-(--color-primary) transition" onClick={() => setIsOpen(false)}>
              Services
            </a>
            <a href="#partenaires" className="hover:text-(--color-primary) transition" onClick={() => setIsOpen(false)}>
              Partenaires
            </a>
            <a href="#avis" className="hover:text-(--color-primary) transition" onClick={() => setIsOpen(false)}>
              Avis
            </a>
            <a href="#galleries" className="hover:text-(--color-primary) transition" onClick={() => setIsOpen(false)}>
              Galeries
            </a>
            <a href="#contact" className="hover:text-(--color-primary) transition" onClick={() => setIsOpen(false)}>
              Contact
            </a>
            <a
              href="https://instagram.com/agcoaching56"
              target="_blank"
              rel="noopener noreferrer"
              className="text-(--color-primary) hover:(--color-text) transition flex items-center gap-2"
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
