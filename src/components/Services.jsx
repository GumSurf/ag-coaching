// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import React from "react";
import { FaFootballBall, FaDumbbell, FaBuilding, FaInstagram, FaChartLine, FaHandshake, FaStar } from "react-icons/fa";

const activities = [
  {
    title: "Préparation Physique Collective",
    icon: <FaFootballBall />,
    desc: "Entraînements pour clubs et équipes de haut niveau.",
    features: [
      "N1 Handball - HLB",
      "US Montagnarde Football",
      "Club de Football de Landévant",
      "AS Calan",
    ],
    highlight: "Expert en performance collective",
  },
  {
    title: "Préparation Physique Individuelle",
    icon: <FaDumbbell />,
    desc: "Coaching personnalisé pour améliorer vos performances.",
    features: [
      "Analyse des besoins individuels",
      "Programme de développement athlétique",
      "Suivi des performances",
      "Préparation spécifique compétition",
    ],
    highlight: "Expertise en développement sportif individuel",
  },
  {
    title: "Partenaires & Structures",
    icon: <FaBuilding />,
    desc: "Interventions dans des structures sportives professionnelles.",
    features: [
      "Fitness Time Hennebont",
      "Calan Gym Fitness",
      "Stade Landévantais",
      "Section Gym & Run Aventure",
    ],
    highlight: "Réseau d’installations professionnelles",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-16 relative z-10">
        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-[Montserrat] font-extrabold mb-4 text-orange-500">
            Mes Services
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Coaching sportif et bien-être pour particuliers et clubs, avec un suivi personnalisé et des méthodes professionnelles.
          </p>
        </motion.div>

        {/* Cartes */}
        <div className="grid lg:grid-cols-3 gap-12 justify-center">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gradient-to-br from-orange-500/20 via-orange-500/10 to-gray-900/10 border border-orange-500/20 p-8 md:p-10 rounded-3xl flex flex-col items-center text-center shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all max-w-sm mx-auto"
            >
              {React.cloneElement(activity.icon, { className: "text-orange-500 text-5xl mb-4" })}
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-orange-500">{activity.title}</h3>
              <p className="text-gray-200 mb-6">{activity.desc}</p>

              <ul className="space-y-1.5 mb-6 text-gray-300 text-lg">
                {activity.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 justify-center hover:text-white/90 transition">
                    <span className="text-orange-400">•</span> {feature}
                  </li>
                ))}
              </ul>

              <p className="text-sm md:text-base font-semibold text-orange-400">{activity.highlight}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-3 text-white bg-orange-500 py-4 px-12 rounded-lg font-[Montserrat] font-bold text-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Contactez-moi pour démarrer
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-4"
        >
          <motion.a
            href="#avis"
            className="inline-flex items-center gap-2 text-orange-500 bg-gray-800 border border-gray-900 py-2 px-6 rounded-lg font-[Montserrat] font-medium text-xs shadow-sm hover:bg-gray-400/20 hover:scale-105 hover:shadow-md transition-all"
          >
            <FaStar className="text-xs" />
            Voir les avis clients
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
