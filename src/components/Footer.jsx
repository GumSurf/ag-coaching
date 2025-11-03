import { useState } from "react";
import { FaInstagram, FaLinkedin, FaFacebookF, FaArrowUp } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const [legalOpen, setLegalOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="relative bg-black/90 text-gray-400 overflow-hidden border-t border-white/10">
        {/* Bouton retour en haut */}
        <button
          onClick={scrollToTop}
          className="bg-orange-500 text-white p-4 rounded-lg shadow-lg fixed bottom-6 right-6 hover:bg-orange-600 transition-all z-50"
          aria-label="Retour en haut"
        >
          <FaArrowUp className="text-lg" />
        </button>

        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid gap-12 md:grid-cols-4">
            {/* Logo & description */}
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src="/logos/agcoaching-logo.jpg"
                  alt="Logo AG Coaching"
                  className="h-12 w-12 object-cover rounded-full"
                />
                <h3 className="text-white text-2xl font-bold tracking-wide uppercase">
                  AG <span className="text-orange-500">Coaching</span>
                </h3>
              </div>
              <p className="text-gray-400 max-w-md leading-relaxed">
                Le sport pour tous à Hennebont et Lorient. Coaching personnalisé,
                préparation physique et bien-être.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-white font-semibold uppercase mb-4">Navigation</h4>
              <ul className="space-y-2 font-medium">
                <li><a href="#" className="hover:text-orange-500 transition">Accueil</a></li>
                <li><a href="#about" className="hover:text-orange-500 transition">À propos</a></li>
                <li><a href="#services" className="hover:text-orange-500 transition">Services</a></li>
                <li><a href="#partenaires" className="hover:text-orange-500 transition">Partenaires</a></li>
                <li><a href="#contact" className="hover:text-orange-500 transition">Contact</a></li>
              </ul>
            </div>

            {/* Réseaux sociaux */}
            <div>
              <h4 className="text-white font-semibold uppercase mb-4">Réseaux</h4>
              <div className="flex flex-col gap-3 font-medium">
                <a
                  href="https://instagram.com/agcoaching56"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-orange-500 transition"
                >
                  <FaInstagram className="text-lg" /> Instagram
                </a>
                <a
                  href="https://www.linkedin.com/in/adam-gigault-137b82209"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-blue-400 transition"
                >
                  <FaLinkedin className="text-lg" /> LinkedIn
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100076831442890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-blue-600 transition"
                >
                  <FaFacebookF className="text-lg" /> Facebook
                </a>
              </div>
            </div>
          </div>

          {/* Bas de page */}
          <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 gap-4">
            <p>© {new Date().getFullYear()} AG Coaching — Tous droits réservés.</p>
            {/* Ligne "Créé par Gabriel Christe" */}
            <div className="text-xs text-gray-400">
              Créé par{' '}
              <a
                href="https://gabrielchriste.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:underline"
              >
                Gabriel Christe
              </a>
            </div>
            <div className="flex gap-6">
              <button
                onClick={() => setLegalOpen(true)}
                className="hover:text-orange-500 transition"
              >
                Mentions légales
              </button>
              <button
                onClick={() => setLegalOpen(true)}
                className="hover:text-orange-500 transition"
              >
                Politique de confidentialité
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* === Modal Mentions / Confidentialité === */}
      <AnimatePresence>
        {legalOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLegalOpen(false)}
          >
            <motion.div
              className="bg-gray-900 text-gray-200 rounded-2xl max-w-2xl w-full p-8 overflow-y-auto max-h-[80vh]"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold text-orange-500 mb-4 text-center">
                Mentions légales & Politique de confidentialité
              </h2>

              <div className="space-y-6 text-sm leading-relaxed">
                <div>
                  <h3 className="text-xl font-semibold text-orange-400 mb-2">Mentions légales</h3>
                  <p><strong>Nom de l’entreprise :</strong> AgCoaching</p>
                  <p><strong>Activité :</strong> Coaching sportif et accompagnement personnalisé</p>
                  <p><strong>Adresse :</strong> 28 Rue de Kergreis, 56600 Lanester</p>
                  <p><strong>Téléphone :</strong> 07 81 58 90 22</p>
                  <p><strong>Email :</strong> contact@agcoaching.fr</p>
                  <p><strong>Responsable de publication :</strong> Adam G.</p>
                  <p><strong>Hébergement :</strong> [Vercel / OVH / Netlify]</p>
                  <p><strong>SIRET :</strong> [numéro SIRET]</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-orange-400 mb-2">
                    Politique de confidentialité
                  </h3>
                  <p>
                    Ce site AgCoaching est uniquement destiné à l’affichage d’informations
                    sur les services proposés. <strong>Aucune donnée personnelle n’est collectée</strong>.
                  </p>
                </div>
              </div>

              <button
                onClick={() => setLegalOpen(false)}
                className="mt-6 w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition"
              >
                Fermer
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
