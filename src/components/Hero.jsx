// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import Navbar from "./Navbar";

const titleWords = ["ADAM GIGAULT"];

export default function Hero() {
  return (
    <>
      <Navbar />
      <section className="relative min-h-screen pb-12 lg:pb-0 flex flex-col lg:flex-row bg-(--color-background) overflow-hidden">

        {/* IMAGE GAUCHE */}
        <div className="w-full lg:w-1/2 h-screen shrink-0 relative">
          <img
            src="/images/Coach.jpg"
            alt="Coach sportif"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-(--color-background)/80 to-transparent"></div>
        </div>

        {/* TEXTE DROITE */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-6 lg:px-16 space-y-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {titleWords.map((word, i) => (
            <h1
              key={i}
              className="font-extrabold text-[clamp(1.8rem,5vw,4rem)] leading-none uppercase text-(--color-titre)"
            >
              {word}
            </h1>
          ))}

          <h2 className="text-[clamp(1rem,2.5vw,1.5rem)] text-(--color-text-secondary) max-w-md mt-4">
            Préparateur sportif à Hennebont et Lorient, je vous accompagne dans votre progression
          </h2>

          {/* CTA */}
          <a
            href="https://instagram.com/agcoaching56"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center justify-center gap-2
              bg-(--color-text) text-(--color-background)
              px-6 py-3 font-bold uppercase mt-6
              border border-(--color-text)
              hover:bg-(--color-background) hover:text-(--color-text)
              transition-all duration-600
            "
          >
            <FaInstagram /> Me contacter
          </a>
        </motion.div>
      </section>
    </>
  );
}
