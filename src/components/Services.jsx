// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import React from "react";
import {
  FaFootballBall,
  FaDumbbell,
  FaBuilding,
  FaChartLine,
  FaHandshake,
  FaStar,
} from "react-icons/fa";

const activities = [
  {
    title: "Préparation Physique Collective",
    icon: <FaFootballBall />,
    desc: "Optimisez la performance de votre équipe avec des séances sur mesure et un suivi méthodique.",
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
    desc: "Des programmes personnalisés et mesurables pour atteindre vos objectifs physiques.",
    features: [
      "Analyse des besoins",
      "Suivi de progression",
      "Méthodes adaptées",
      "Préparation compétition",
    ],
    highlight: "Accompagnement individuel sur mesure",
  },
  {
    title: "Partenariats & Structures",
    icon: <FaBuilding />,
    desc: "Collaboration avec des salles, clubs et entreprises pour des projets sportifs durables.",
    features: [
      "Fitness Time Hennebont",
      "Calan Gym Fitness",
      "Stade Landévantais",
      "Run Aventure",
    ],
    highlight: "Réseau professionnel actif",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden py-32 bg-(color-background) (--color-text)"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.08),transparent_60%)]"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold bg-linear-to-r from-(--color-titre)] to-white bg-clip-text text-(--color-titre) mb-6">
            Mes Services
          </h2>
          <p className="text-lg md:text-xl (--color-text)/70">
            Coaching individuel, collectif ou professionnel — chaque programme est conçu pour
            maximiser votre potentiel.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 relative">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative (--color-background)/5 backdrop-blur-sm border border-white/10 rounded-xl p-10 hover:(--color-background)/10 hover:-translate-y-2 transition-all duration-500"
            >
              <div className="absolute inset-x-0 -top-px h-[2px] bg-linear-to-r from-transparent via-(--color-primary)] to-transparent opacity-70"></div>

              <div className="flex flex-col items-start gap-5">
                <div className="p-4 rounded-xl bg-(--color-primary)]/10 text-(--color-primary)] text-4xl group-hover:scale-110 transition-transform">
                  {React.cloneElement(activity.icon, { className: "text-5xl" })}
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-(--color-title)">
                  {activity.title}
                </h3>

                <p className="(--color-text)/70 leading-relaxed">{activity.desc}</p>

                <ul className="mt-6 space-y-2 (--color-text)/80 text-sm md:text-base">
                  {activity.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 group-hover:(--color-text) transition"
                    >
                      <FaChartLine className="text-(--color-primary)]" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <p className="mt-6 text-sm font-semibold text-(--color-primary)]">
                  {activity.highlight}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <a
            href="#contact"
            className="relative inline-flex items-center justify-center px-12 py-4 rounded-full overflow-hidden font-semibold text-lg transition-all duration-500 group"
          >
            <span className="absolute inset-0 bg-linear-to-r from-(--color-primary)] to-pink-500 opacity-80 group-hover:opacity-100 transition-opacity"></span>
            <span className="relative (--color-text)">Démarrer mon accompagnement</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-6"
        >
          <a
            href="#avis"
            className="inline-flex items-center gap-2 (--color-text)/70 hover:text-(--color-primary)] transition-all"
          >
            <FaStar className="text-(--color-primary)]" />
            Voir les avis clients
          </a>
        </motion.div>
      </div>
    </section>
  );
}
