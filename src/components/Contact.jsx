import { motion } from "framer-motion";
import { FaInstagram, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">

      {/* Motif fitness SVG en background */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none -z-10"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern
            id="fitnessGrid"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="rgba(249,115,22,0.05)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#fitnessGrid)" />
      </svg>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center gap-16">

        {/* Titre et description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl"
        >
          <h2 className="text-5xl md:text-6xl font-[Montserrat] font-extrabold text-orange-500 mb-4">
            Contact
          </h2>
          <p className="text-xl md:text-2xl text-white/80">
            Prêt à transformer votre corps et votre vie ? Suivez-moi sur Instagram ou contactez-moi directement par téléphone ou email.
          </p>
        </motion.div>

        {/* Carte principale - CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-lg w-full bg-gray-800/40 backdrop-blur-md rounded-3xl shadow-2xl p-12 flex flex-col items-center gap-8"
        >
          <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 w-24 h-24 rounded-full flex items-center justify-center shadow-lg">
            <FaInstagram className="text-white text-5xl" />
          </div>

          <h3 className="text-3xl font-[Montserrat] font-bold text-white text-center">
            Suivez-moi sur Instagram
          </h3>
          <p className="text-white/70 text-center text-lg md:text-xl">
            Découvrez mes dernières actualités, conseils sportifs et témoignages de réussite.
          </p>

          {/* Coordonnées directes */}
          <div className="flex flex-col gap-4 mt-4 text-white/80 w-full">
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-orange-500" />
              <span className="font-semibold">07 81 58 90 22</span>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-orange-500" />
              <span className="font-semibold">contact@agcoaching56.com</span>
            </div>
          </div>

          {/* CTA Instagram */}
          <motion.a
            href="https://instagram.com/agcoaching56"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(249,115,22,0.6)" }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 inline-block bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white py-4 px-10 rounded-full font-[Montserrat] font-bold shadow-lg transition-all"
          >
            Me contacter
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
