// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const logos = [
  { name: "Fitness Time Hennebont", image: "/logos/fitness-time-logo.jpg" },
  { name: "Club de football de Landévan", image: "/logos/stade-landevantais-logo.jpg" },
  { name: "Calan Gym Fitness", image: "/logos/calan-logo.jpeg" },
  { name: "US Montagnarde", image: "/logos/us-montagnarde.svg" },
  { name: "HLB", image: "/logos/hennebont-lochrist-handball.png" },
  { name: "Arana 18", image: "/logos/arena18.svg" },
  { name: "AS Calandaise", image: "/logos/as-calan.jpg" },
  { name: "Run Aventure", image: "/logos/run-aventure.svg" },
];

export default function Partners() {
  return (
    <section id="partenaires" className="py-20 (--color-text)">
      <div className="container mx-auto px-4 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-(--color-titre)">
            Ils me font confiance
          </h2>
          <p className="text-lg md:text-xl (--color-text)-300 max-w-3xl mx-auto">
            Nous collaborons avec des clubs et salles de sport partenaires pour offrir le meilleur suivi à nos clients.
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex space-x-8 w-max animate-slideSlow"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          >
            {[...logos, ...logos].map((logo, idx) => (
              <div
                key={idx}
                className="shrink-0 w-28 sm:w-36 md:w-40 h-28 sm:h-36 md:h-40 p-3 flex items-center justify-center transition-transform hover:scale-110"
              >
                <img
                  src={logo.image}
                  alt={logo.name}
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}