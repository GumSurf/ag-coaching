import { useState } from "react";
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
    hidden: { scale: 0.95, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.35, ease: "easeOut" } },
    exit: { scale: 0.95, opacity: 0, transition: { duration: 0.25, ease: "easeIn" } },
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between lg:justify-center items-center px-6 py-3">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <img
            src="/logos/agcoaching-logo.jpg"
            alt="Logo AG Coaching"
            className="h-12 w-auto object-contain"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center font-semibold uppercase tracking-wide text-white">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-6 py-3 relative group transition-all duration-300"
            >
              {link.name}
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-white group-hover:w-full transition-all duration-300" />
            </a>
          ))}

          <a
            href="https://instagram.com/agcoaching56"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 p-3 rounded-full border border-white/30 text-white text-xl hover:bg-white hover:text-black hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Mobile Burger */}
        <button
          className="lg:hidden text-white text-2xl z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Ouvrir le menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.25 } }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
            />

            {/* Centered Drawer */}
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="
                fixed top-full right-0
                w-11/12 sm:w-7/12
                bg-black/95 backdrop-blur-xl
                flex flex-col items-center justify-center
                space-y-6 py-8 px-6
                text-white z-50
              "
            >
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="w-full text-center py-3 rounded-md border border-white/20 hover:bg-white hover:text-black hover:-translate-y-1 transition-all duration-300 text-lg font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}

              <a
                href="https://instagram.com/agcoaching56"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3 rounded-md border border-white/20 hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-2 text-lg font-semibold"
                onClick={() => setIsOpen(false)}
              >
                <FaInstagram /> Instagram
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
