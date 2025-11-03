// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import Navbar from "./Navbar";

const titleWords = ["Performance.", "Progression.", "Vous."];

export default function Hero() {
  return (
    <>
      <Navbar />
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900 px-4 sm:px-8 md:px-16">

        {/* Fond salle de sport flou */}
        <div className="absolute inset-0">
          <img
            src="images/salle-de-sport.jpg"
            alt="Salle de sport"
            className="w-full h-full object-cover filter blur-sm brightness-50"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Formes graphiques animées */}
        <motion.div
          className="absolute top-[10%] left-[5%] w-24 sm:w-32 h-24 sm:h-32 bg-orange-500/30 rounded-full blur-3xl animate-pulse-slow"
        />
        <motion.div
          className="absolute bottom-[5%] right-[5%] w-32 sm:w-40 h-32 sm:h-40 bg-white/10 rounded-full blur-2xl animate-pulse-slow"
        />

        {/* Texte animé */}
        <motion.div
          className="relative z-10 flex flex-col items-center sm:items-start text-center sm:text-left max-w-full sm:max-w-xl space-y-2 sm:space-y-4"
        >
          {titleWords.map((word, i) => (
            <motion.h1
              key={i}
              className={`font-[Montserrat] font-extrabold text-[clamp(2rem,8vw,6rem)] leading-none ${i % 2 === 1 ? "text-orange-500" : "text-white"
                }`}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.15 }}
            >
              {word}
            </motion.h1>
          ))}

          {/* Sous-titre */}
          <motion.h2
            className="font-[Montserrat] font-semibold text-[clamp(1rem,3vw,1.5rem)] text-white/80 mt-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            Préparateur sportif à Hennebont et Lorient, je vous accompagne dans votre progression
          </motion.h2>

          {/* CTA */}
          <motion.a
            href="https://instagram.com/agcoaching56"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center sm:justify-start gap-2 text-white bg-orange-500 px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-[Montserrat] font-bold uppercase shadow-2xl mt-4 transition-transform duration-300 hover:scale-110 hover:shadow-orange-400/50"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <FaInstagram /> Me contacter
          </motion.a>
        </motion.div>
      </section>
    </>
  );
}
