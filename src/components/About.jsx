// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaGraduationCap, FaDumbbell, FaHandshake, FaChartLine } from "react-icons/fa";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariantsLeft = { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0 } };
  const itemVariantsRight = { hidden: { opacity: 0, x: 60 }, visible: { opacity: 1, x: 0 } };

  return (
    <section id="about" className="relative py-24 text-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-16 relative z-10">
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-12 md:gap-16 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Image du coach */}
          <motion.div
            className="lg:w-1/3 rounded-3xl overflow-hidden shadow-2xl shrink-0"
            variants={itemVariantsLeft}
          >
            <img
              src="images/mark-farias-dt60oksDTx8-unsplash.jpg"
              alt="Coach sportif"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Texte + cartes */}
          <motion.div className="lg:w-2/3 flex flex-col gap-12" variants={itemVariantsRight}>
            <motion.div className="p-6 md:p-8">
              <h3 className="text-4xl font-[Montserrat] font-extrabold mb-4 text-orange-500">
                Ma Mission
              </h3>
              <p className="text-lg text-white/80 leading-relaxed">
                AG Coaching rend le sport accessible à tous, débutants ou athlètes confirmés.
                Grâce à un suivi personnalisé, vous atteignez vos objectifs tout en développant votre bien-être et une relation durable avec le sport.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Diplômes */}
              <motion.div
                className="bg-gray-800 border border-gray-800/20 p-6 md:p-8 rounded-3xl flex flex-col items-start shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all"
                variants={itemVariantsRight}
              >
                <h3 className="text-2xl font-bold mb-4 text-orange-500 flex items-center gap-3">
                  <FaGraduationCap className="text-orange-500 text-3xl" /> Diplômes & Certifications
                </h3>
                <ul className="space-y-2 text-white/70 text-lg">
                  <li>BPJEPS AGFF</li>
                  <li>DEUST AGAPSC</li>
                  <li>Licence STAPS</li>
                </ul>
              </motion.div>

              {/* Approche personnalisée */}
              <motion.div
                className="bg-gray-800 border border-gray-800/20 p-6 md:p-8 rounded-3xl flex flex-col items-start shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all"
                variants={itemVariantsRight}
              >
                <h3 className="text-2xl font-bold mb-4 text-orange-500 flex items-center gap-3">
                  <FaDumbbell className="text-orange-500 text-3xl" /> Approche Personnalisée
                </h3>
                <ul className="space-y-2 text-white/70 text-lg">
                  <li className="flex items-center gap-2"><FaChartLine className="text-orange-500 text-xl" /> Programmes sur mesure</li>
                  <li className="flex items-center gap-2"><FaHandshake className="text-orange-500 text-xl" /> Suivi personnalisé</li>
                  <li className="flex items-center gap-2"><FaDumbbell className="text-orange-500 text-xl" /> Méthodes adaptées à chaque profil</li>
                  <li className="flex items-center gap-2"><FaHandshake className="text-orange-500 text-xl" /> Accompagnement individuel</li>
                </ul>
              </motion.div>
            </div>

            {/* CTA final */}
            <motion.div className="mt-8 text-center">
              <motion.a
                href="#services"
                className="inline-flex items-center gap-3 text-white bg-orange-500 py-4 px-10 rounded-full font-[Montserrat] font-bold text-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Découvrir mes services
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
