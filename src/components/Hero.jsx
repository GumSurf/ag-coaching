// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import Navbar from "./Navbar";

const titleWords = ["Performance.", "Progression.", "Vous."];

export default function Hero() {
  return (
    <>
      <Navbar />
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-(--color-background) px-4 sm:px-8 md:px-16">

        <div className="absolute inset-0">
          <img
            src="/images/salle-de-sport.jpg"
            alt="Salle de sport"
            className="w-full h-full object-cover filter blur-sm brightness-50"
          />
          <div className="absolute inset-0 bg-linear-to-b from-white/40 via-white/50 to-white/80" />
        </div>

        <motion.div
          className="absolute top-[10%] left-[5%] w-24 sm:w-32 h-24 sm:h-32 bg-(--color-primary)]/30 rounded-full blur-3xl"
          animate={{ rotate: [0, 15, -10, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-[5%] right-[5%] w-32 sm:w-40 h-32 sm:h-40 (--color-background)/10 rounded-full blur-2xl"
          animate={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        <motion.div
          className="relative z-10 flex flex-col items-center sm:items-start text-center sm:text-left max-w-full sm:max-w-xl space-y-2 sm:space-y-4"
        >
          {titleWords.map((word, i) => (
            <motion.h1
              key={i}
              className={`font-extrabold text-[clamp(2rem,8vw,6rem)] leading-none ${i % 2 === 1 ? '' : '(--color-text)'} text-(--color-accent)`}
              style={{ color: i % 2 === 1 ? 'var(--color-titre)' : undefined }}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.15 }}
            >
              {word}
            </motion.h1>
          ))}

          <motion.h2
            className="font-semibold text-[clamp(1rem,3vw,1.5rem)] text-(--color-titre)/80 mt-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            Préparateur sportif à Hennebont et Lorient, je vous accompagne dans votre progression
          </motion.h2>

          <motion.a
            href="https://instagram.com/agcoaching56"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center sm:justify-start gap-2 (--color-text) bg-(--color-primary)] px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-bold uppercase shadow-2xl mt-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1, boxShadow: "0 0 20px var(--color-primary)" }}
            transition={{ duration: 0.5, delay: 1.4 }}
            aria-label="Me contacter sur Instagram"
          >
            <FaInstagram /> Me contacter
          </motion.a>
        </motion.div>
      </section>
    </>
  );
}
