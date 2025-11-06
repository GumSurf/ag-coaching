// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaInstagram, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-28 bg-(--color-background) (--color-text) overflow-hidden"
    >
      <svg
        className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Parlons de vos <span className="text-(--color-titre)">objectifs</span>
          </h2>
          <p className="text-lg md:text-xl (--color-text)-300 max-w-2xl mx-auto">
            Prêt à franchir une nouvelle étape dans votre transformation ?
            Contactez-moi directement ou suivez-moi sur Instagram.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-4 text-lg">
              <FaPhoneAlt className="text-[--color-primary] text-2xl" />
              <span className="font-semibold">07 81 58 90 22</span>
            </div>
            <div className="flex items-center gap-4 text-lg">
              <FaEnvelope className="text-[--color-primary] text-2xl" />
              <span className="font-semibold">contact@agcoaching56.com</span>
            </div>

            <motion.a
              href="https://instagram.com/agcoaching56"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(249,115,22,0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 inline-block bg-[--color-primary] hover:(--color-background)-500 transition-all (--color-text) px-10 py-4 rounded-full font-bold text-lg w-fit"
            >
              Me contacter sur Instagram
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center items-center"
          >
            <div className="absolute inset-0 bg-linear-to-tr from-[--color-primary]/20 via-pink-500/10 to-transparent blur-3xl rounded-full"></div>
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-linear-to-br from-[--color-primary] to-pink-600 flex items-center justify-center rounded-2xl shadow-xl mb-6">
                <FaInstagram className="(--color-text) text-5xl" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">
                Suivez-moi sur Instagram
              </h3>
              <p className="(--color-text)-400 max-w-sm">
                Découvrez les coulisses des séances, des transformations et
                conseils pour progresser chaque jour.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
