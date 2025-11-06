// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaGraduationCap, FaDumbbell, FaHandshake, FaChartLine } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-32 bg-linear-to-b from-(--color-background) via-(--color-background) to-(--color-background) text-(--color-text)"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.07),transparent_60%)] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            MA MISSION : REVELER LE MEILLEUR DE VOUS-MEME
          </h2>
          <p className="text-lg md:text-xl text-(--color-texte)/70 leading-relaxed">
            Chez <span className="text-(--color-primary)] font-semibold">AG Coaching</span>, 
            chaque séance est une expérience sur mesure. L’objectif : 
            vous aider à atteindre vos résultats tout en construisant une relation durable avec votre corps.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-20">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src="images/Coach.jpg"
                alt="Coach sportif"
                className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-(--color-background)70 via-transparent to-transparent"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2 flex flex-col gap-10"
          >
            <div className="group (--color-background)/5 backdrop-blur-md border border-white/10 rounded-xl p-8 hover:(--color-background)/10 transition-all duration-500">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <FaGraduationCap className="text-(--color-primary)] text-3xl" />
                Diplômes & Certifications
              </h3>
              <ul className="space-y-3 text-(--color-texte)/80 text-lg">
                <li>🎓 Brevet de Moniteur de Football</li>
                <li>🏋️‍♂️ Licence STAPS — Entraînement Sportif</li>
                <li>📘 Baccalauréat ES</li>
              </ul>
            </div>

            <div className="group bg-(--color-background)/5 backdrop-blur-md border border-(--color-background)/10 rounded-xl p-8 hover:bg-(--color-background)/10 transition-all duration-500">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <FaDumbbell className="text-(--color-primary)] text-3xl" />
                Mon approche
              </h3>
              <ul className="space-y-3 text-(--color-texte)/80 text-lg">
                <li className="flex items-center gap-2">
                  <FaChartLine className="text-(--color-primary)] text-xl" />
                  Programmes sur mesure
                </li>
                <li className="flex items-center gap-2">
                  <FaHandshake className="text-(--color-primary)] text-xl" />
                  Suivi humain & bienveillant
                </li>
                <li className="flex items-center gap-2">
                  <FaDumbbell className="text-(--color-primary)] text-xl" />
                  Adapté à chaque profil
                </li>
                <li className="flex items-center gap-2">
                  <FaHandshake className="text-(--color-primary)] text-xl" />
                  Objectifs atteignables et durables
                </li>
              </ul>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <a
                href="#services"
                className="relative inline-flex items-center justify-center overflow-hidden rounded-full px-10 py-4 font-semibold text-lg transition-all duration-500 group"
              >
                <span className="absolute inset-0 bg-linear-to-r from-(--color-titre)] to-(--color-accent) opacity-80 group-hover:opacity-100 transition-opacity duration-500"></span>
                <span className="relative text-white">Découvrir mes services</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
