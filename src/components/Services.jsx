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
    title: "PRÉPARATION PHYSIQUE INDIVIDUELLE",
    icon: <FaFootballBall />,
    desc: "Je conçois des séances personnalisées visant à améliorer les capacités physiques essentielles à la pratique d'une discipline.",
    features: ["À partir de 30€ (en salle ou à domicile)"],
    highlight: "Accompagnement individuel sur mesure",
  },
  {
    title: "PRÉPARATION PHYSIQUE COLLECTIVE",
    icon: <FaDumbbell />,
    desc: "J'accompagne vos équipes pour développer leurs qualités physiques et optimiser leur performance.",
    features: ["Sur devis"],
    highlight: "Expert en performance collective",
  },
  {
    title: "SMALL GROUP TRAINING",
    icon: <FaBuilding />,
    desc: "Des séances ciblées sur une discipline commune : le concept parfait pour booster ta condition physique et te dépasser grâce à l'énergie du groupe !",
    features: ["15€/personnes"],
    highlight: "Réseau professionnel actif",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden py-32 bg-(--color-text) text-(--color-background)"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.08),transparent_60%)]" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold bg-linear-to-r from-(--color-background) to-white bg-clip-text text-transparent mb-6">
            MES SERVICES
          </h2>

          <p className="text-lg md:text-xl text-(--color-background)/0.7">
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
              className="group relative bg-(--color-background)/0.05 backdrop-blur border border-white/10 p-10
                         transition-all duration-500 hover:bg-(--color-background)/0.12
                         hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(255,255,255,0.20)]"
            >
              <div className="absolute inset-x-0 -top-px h-0.5 bg-linear-to-r from-transparent via-(--color-background) to-transparent opacity-70" />

              <div className="flex flex-col items-start gap-5">
                <div className="p-4 border border-(--color-background) bg-(--color-primary)/0.10 text-(--color-background) text-4xl group-hover:scale-110 transition-transform duration-500">
                  {React.cloneElement(activity.icon, { className: "text-5xl" })}
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-(--color-title)">
                  {activity.title}
                </h3>

                <p className="text-(--color-background)/0.7 leading-relaxed">
                  {activity.desc}
                </p>

                <ul className="mt-6 space-y-3 text-(--color-background)/0.8 text-sm md:text-base">
                  {activity.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <FaChartLine className="text-(--color-background)" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <p className="mt-6 text-sm font-semibold text-(--color-background)">
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
            className="relative inline-flex items-center justify-center px-10 py-4 font-semibold text-lg
                       bg-(--color-text) text-(--color-background) border border-(--color-border)
                       transition-all duration-500 group"
          >
            <span
              className="absolute inset-0 scale-0 opacity-0 bg-(--color-background) transition-all duration-500 group-hover:scale-100 group-hover:opacity-100"
            />
            <span className="relative z-10 group-hover:text-(--color-text)">
              Démarrer mon accompagnement
            </span>
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
            className="inline-flex items-center gap-2 text-(--color-background)/0.7 hover:text-(--color-background) transition-all"
          >
            <FaStar className="text-(--color-background)" />
            Voir les avis clients
          </a>
        </motion.div>
      </div>
    </section>
  );
}
