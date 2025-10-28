import { FaInstagram, FaLinkedin, FaFacebookF, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-black/90 text-gray-400 overflow-hidden border-t border-white/10">
      {/* Bouton retour en haut */}
      <button
        onClick={scrollToTop}
        className="bg-orange-500 text-white p-4 rounded-full shadow-lg fixed bottom-6 right-6 hover:bg-orange-600 transition-all z-50"
        aria-label="Retour en haut"
      >
        <FaArrowUp className="text-lg" />
      </button>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          
          {/* === Logo & description === */}
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
              Le sport pour tous à Hennebont et Lorient. Coaching personnalisé, préparation physique et bien-être.
            </p>
          </div>

          {/* === Navigation === */}
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

          {/* === Réseaux sociaux === */}
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

        {/* === Bas de page === */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} AG Coaching — Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-orange-500 transition">Mentions légales</a>
            <a href="#" className="hover:text-orange-500 transition">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
