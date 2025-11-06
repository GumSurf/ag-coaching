import { useState } from "react";
import { FaInstagram, FaLinkedin, FaFacebookF, FaArrowUp } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Footer() {
  const [showLegal, setShowLegal] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative (--color-background)k (--color-text)-400 border-t border-white/10">
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 bg-[--color-primary] (--color-text) p-3 rounded-full shadow-lg hover:shadow-[0_0_15px_var(--color-primary)] transition-all"
        aria-label="Retour en haut"
      >
        <FaArrowUp />
      </motion.button>

      <div className="max-w-7xl mx-auto px-6 py-20 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 space-y-5">
          <div className="flex items-center gap-3">
            <img
              src="/logos/agcoaching-logo.jpg"
              alt="Logo AG Coaching"
              className="h-12 w-12 object-cover rounded-md border border-white/10"
            />
            <h3 className="(--color-text) text-2xl font-bold tracking-wide uppercase">
              AG <span className="text-[--color-primary]">Coaching</span>
            </h3>
          </div>
          <p className="(--color-text)-400 max-w-md leading-relaxed">
            Coaching sportif personnalisé à Hennebont et Lorient. 
            Des séances sur mesure pour dépasser vos limites.
          </p>
        </div>

        <div>
          <h4 className="(--color-text) font-semibold uppercase mb-4 text-sm tracking-wider">
            Navigation
          </h4>
          <ul className="space-y-2">
            {["Accueil", "À propos", "Services", "Partenaires", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-[--color-primary] transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="(--color-text) font-semibold uppercase mb-4 text-sm tracking-wider">
            Suivez-moi
          </h4>
          <div className="flex gap-4">
            <a
              href="https://instagram.com/agcoaching56"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full (--color-background)/5 hover:bg-[--color-primary] (--color-text) transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/adam-gigault-137b82209"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full (--color-background)/5 hover:bg-blue-500 (--color-text) transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100076831442890"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full (--color-background)/5 hover:bg-blue-600 (--color-text) transition"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 px-6 text-sm (--color-text)-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} AG Coaching — Tous droits réservés.</p>

          <div className="flex gap-6 text-xs">
            <button onClick={() => setShowLegal(true)} className="hover:text-[--color-primary]">
              Mentions légales
            </button>
            <button onClick={() => setShowLegal(true)} className="hover:text-[--color-primary]">
              Politique de confidentialité
            </button>
          </div>

          <div className="text-xs">
            Créé par{" "}
            <a
              href="https://gabrielchriste.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[--color-primary] hover:underline"
            >
              Gabriel Christe
            </a>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: showLegal ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 60, damping: 20 }}
        className="fixed bottom-0 left-0 w-full bg-gray-950 (--color-text)-200 border-t border-white/10 px-8 py-10 z-50 shadow-2xl"
      >
        <div className="max-w-3xl mx-auto text-sm leading-relaxed">
          <h2 className="text-2xl font-bold text-(--color-titre) mb-4 text-center">
            Mentions légales & Politique de confidentialité
          </h2>
          <p>
            Site édité par <strong>AgCoaching</strong> — 28 Rue de Kergreis,
            56600 Lanester — contact@agcoaching.fr
          </p>
          <p className="mt-3">
            Ce site ne collecte aucune donnée personnelle et sert uniquement à
            présenter les prestations de coaching sportif.
          </p>

          <button
            onClick={() => setShowLegal(false)}
            className="mt-8 block mx-auto bg-[--color-primary] (--color-text) px-8 py-3 rounded-full hover:(--color-background)-600 transition"
          >
            Fermer
          </button>
        </div>
      </motion.div>
    </footer>
  );
}
