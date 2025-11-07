// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative pb-12 pt-28 bg-(--color-background) text-(--color-text) overflow-hidden"
    >
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <img
            src="logos/agcoaching-logo.jpg"
            alt="Logo AG Coaching"
            className="mx-auto mb-6 w-1/2 h-auto"
          />
          <h2 className="text-4xl md:text-4xl font-bold mb-6">
            UN PROJET À PRÉPARER ?
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Professionnels ou particuliers, je vous accompagne pour atteindre vos objectifs. 
            Besoin de préparer une compétition, de travailler vos séances spécifiques 
            ou atteindre vos objectifs de remise en forme : je vous aide à progresser 
            à chaque étape.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
