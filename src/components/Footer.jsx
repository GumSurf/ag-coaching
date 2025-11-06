import { useState } from "react";
import { FaInstagram, FaLinkedin, FaFacebookF, FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  const [showLegal, setShowLegal] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-(--color-text) text-(--color-background) border-t border-white/10">
      {/* Bouton retour en haut */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 bg-(--color-background) text-(--color-text) p-3 rounded-full shadow-lg hover:bg-(--color-text) hover:text-(--color-background) hover:shadow-[0_0_15px_var(--color-text)] transition-all"
        aria-label="Retour en haut"
      >
        <FaArrowUp />
      </motion.button>

      {/* Contacts et réseaux */}
      <div className="w-full max-w-7xl mx-auto px-6 pt-12 grid gap-6 md:grid-cols-3 text-center place-items-center">
        {/* PAR TÉLÉPHONE */}
        <div className="flex flex-col items-center">
          <h4 className="text-(--color-background) font-semibold uppercase mb-2 tracking-wider text-xl">
            Par téléphone
          </h4>
          <p className="text-(--color-background)/90 hover:text-[--color-primary] transition font-medium text-lg">
            <a href="tel:0670578581">06 70 57 85 81</a>
          </p>
        </div>

        {/* PAR MAIL */}
        <div className="flex flex-col items-center">
          <h4 className="text-(--color-background) font-semibold uppercase mb-2 tracking-wider text-xl">
            Par mail
          </h4>
          <p className="text-(--color-background)/90 hover:text-[--color-primary] transition font-medium text-lg">
            <a href="mailto:agcoaching56@gmail.com">agcoaching56@gmail.com</a>
          </p>
        </div>

        {/* SUR LES RÉSEAUX */}
        <div className="flex flex-col items-center">
          <h4 className="text-(--color-background) font-semibold uppercase mb-2 tracking-wider text-xl">
            Sur les réseaux
          </h4>
          <div className="flex gap-4 justify-center mt-1">
            <a
              href="https://instagram.com/agcoaching56"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-(--color-background)/5 
             hover:bg-gradient-to-tr from-[#f58529] via-[#dd2a7b] to-[#8134af] 
             text-(--color-background) transition-all text-2xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100076831442890"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-(--color-background)/5 hover:bg-blue-700 text-(--color-background) transition text-2xl"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.linkedin.com/in/adam-gigault-137b82209"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-(--color-background)/5 hover:bg-blue-400 text-(--color-background) transition text-2xl"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="py-6 px-6 text-sm text-(--color-background)/70">
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 min-h-[100px] text-center">
          {/* Copyright */}
          <div className="flex-1 text-center">
            <p>© {new Date().getFullYear()} AG Coaching — Tous droits réservés.</p>
          </div>

          {/* Mentions légales */}
          <div className="flex-1 text-center">
            <button
              onClick={() => setShowLegal(true)}
              className="hover:text-(--color-background)/70 text-xs"
            >
              Mentions légales & Politique de confidentialité
            </button>
          </div>

          {/* Créateur */}
          <div className="flex-1 text-center">
            Créé par{" "}
            <a
              href="https://gabrielchriste.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-(--color-background)/70 hover:underline text-xs"
            >
              Gabriel Christe
            </a>
          </div>
        </div>

      </div>

      {/* Modal mentions légales */}
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: showLegal ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 60, damping: 20 }}
        className="fixed bottom-0 left-0 w-full h-1/3 bg-(--color-text) text-(--color-background) border-t border-white/20 px-8 py-10 z-50 shadow-2xl"
      >
        <div className="max-w-3xl mx-auto text-sm leading-relaxed">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Mentions légales & Politique de confidentialité
          </h2>
          <p className="mb-3">
            Site édité par <strong>AgCoaching</strong> — 28 Rue de Kergreis,
            56600 Lanester — <a href="mailto:agcoaching56@gmail.com" className="underline">agcoaching56@gmail.com</a>
          </p>
          <p className="mt-3">
            Ce site ne collecte aucune donnée personnelle et sert uniquement à
            présenter les prestations de coaching sportif.
          </p>

          <button
            onClick={() => setShowLegal(false)}
            className="mt-8 block mx-auto px-8 py-3
              bg-(--color-text) text-(--color-background)
              border border-(--color-text)
              hover:bg-(--color-background) hover:text-(--color-text)
              transition-all duration-600"
          >
            Fermer
          </button>
        </div>
      </motion.div>
    </footer>
  );
}
