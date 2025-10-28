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
      className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">

        {/* === Logo === */}
        <a href="#" className="flex items-center gap-3">
          <img
            src="/logos/agcoaching-logo.jpg"
            alt="Logo AG Coaching"
            className="h-12 w-auto object-contain rounded-full"
          />
        </a>

        {/* === Liens desktop === */}
        <div className="hidden md:flex items-center gap-8 text-white/80 font-semibold uppercase tracking-wide">
          <a href="#" className="hover:text-orange-500 transition">Accueil</a>
          <a href="#about" className="hover:text-orange-500 transition">À propos</a>
          <a href="#partenaires" className="hover:text-orange-500 transition">Partenaires</a>
          <a href="#avis" className="hover:text-orange-500 transition">Avis</a>
          <a href="#galleries" className="hover:text-orange-500 transition">Galeries</a>
          <a href="#contact" className="hover:text-orange-500 transition">Contact</a>
          <a
            href="https://instagram.com/agcoaching56"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 hover:text-white transition flex items-center gap-2"
          >
            <FaInstagram />
          </a>
        </div>

        {/* === Menu burger mobile === */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Ouvrir le menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* === Menu mobile === */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-lg border-t border-white/10 flex flex-col items-center text-white/90 font-semibold uppercase tracking-wide space-y-6 py-8 text-lg"
          >
            <a href="#" className="hover:text-orange-500 transition" onClick={() => setIsOpen(false)}>
              Accueil
            </a>
            <a href="#about" className="hover:text-orange-500 transition" onClick={() => setIsOpen(false)}>
              À propos
            </a>
            <a href="#partenaires" className="hover:text-orange-500 transition" onClick={() => setIsOpen(false)}>
              Partenaires
            </a>
            <a href="#avis" className="hover:text-orange-500 transition" onClick={() => setIsOpen(false)}>
              Avis
            </a>
            <a href="#galleries" className="hover:text-orange-500 transition" onClick={() => setIsOpen(false)}>
              Galeries
            </a>
            <a href="#contact" className="hover:text-orange-500 transition" onClick={() => setIsOpen(false)}>
              Contact
            </a>
            <a
              href="https://instagram.com/agcoaching56"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-white transition flex items-center gap-2"
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
