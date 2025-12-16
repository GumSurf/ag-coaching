import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Accueil", href: "#" },
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
      className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-black/5"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">

        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <img
            src="/logos/agcoaching-logo.jpg"
            alt="Logo AG Coaching"
            className="h-12 w-auto object-contain"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center font-semibold uppercase tracking-wide">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="
                px-6 py-3 relative group
                text-black
                transition-all duration-300
              "
            >
              {link.name}

              {/* Ligne hover */}
              <span className="
                absolute left-0 bottom-0 h-0.5 w-0 bg-black
                group-hover:w-full transition-all duration-300
              "></span>
            </a>
          ))}

          {/* Instagram */}
          <a
            href="https://instagram.com/agcoaching56"
            target="_blank"
            rel="noopener noreferrer"
            className="
              ml-4 p-3 rounded-full border border-black/20
              hover:shadow-[0_0_12px_rgba(0,0,0,0.2)]
              hover:-translate-y-1 hover:bg-black hover:text-white
              transition-all duration-300 text-xl flex items-center justify-center
            "
          >
            <FaInstagram />
          </a>
        </div>

        {/* Mobile Burger */}
        <button
          className="lg:hidden text-black text-2xl"
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
            className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl flex flex-col items-center font-semibold uppercase tracking-wide space-y-4 py-6 border-t border-gray-200"
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="w-3/4 text-center py-3 rounded-md border border-gray-200 hover:-translate-y-1 hover:shadow-[0_0_12px_rgba(0,0,0,0.3)] hover:bg-black hover:text-white transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}

            <a
              href="https://instagram.com/agcoaching56"
              target="_blank"
              rel="noopener noreferrer"
              className="w-3/4 text-center py-3 rounded-md border border-gray-200 hover:-translate-y-1 hover:shadow-[0_0_12px_rgba(0,0,0,0.3)] hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
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
