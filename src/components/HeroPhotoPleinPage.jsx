// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import Navbar from "./Navbar";

const titleWords = ["ADAM GIGAULT"];

export default function Hero() {
  return (
    <>
      <Navbar />

      <section className="relative min-h-screen overflow-hidden">
        {/* IMAGE FULL HERO */}
        <img
          src="/images/Coach.jpg"
          alt="Coach sportif"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* OVERLAY (lisibilité texte) */}
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent"></div>

        {/* CONTENU */}
        <motion.div
          className="
            relative z-10
            min-h-screen
            flex flex-col justify-center
            px-6 md:px-16
            text-center md:text-left
            text-white
            max-w-4xl
          "
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          {titleWords.map((word, i) => (
            <h1
              key={i}
              className="font-extrabold uppercase leading-none
              text-[clamp(2.2rem,6vw,4.5rem)]"
            >
              {word}
            </h1>
          ))}

          <h2 className="mt-6 text-[clamp(1.2rem,3vw,1.7rem)] opacity-90">
            Préparateur physique à Hennebont
          </h2>

          <h3 className="mt-2 text-[clamp(1rem,2.5vw,1.4rem)] italic opacity-80">
            Je vous accompagne dans votre progression
          </h3>

          {/* CTA */}
          <a
            href="https://instagram.com/agcoaching56"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-3
              mt-10 w-fit
              px-8 py-4
              font-bold uppercase
              border border-white
              hover:bg-white hover:text-black
              transition-all duration-500
            "
          >
            <FaInstagram className="text-xl" />
            Me contacter
          </a>
        </motion.div>
      </section>
    </>
  );
}
