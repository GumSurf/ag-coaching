import { motion } from "framer-motion";
import { FaGoogle, FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Marie L.",
    rating: 5,
    text: "Coach exceptionnel ! Son approche personnalisée m'a permis d'atteindre mes objectifs plus rapidement que prévu.",
    date: "Il y a 2 semaines"
  },
  {
    name: "Thomas B.",
    rating: 5,
    text: "Très professionnel et à l'écoute. Les séances sont variées et adaptées à mon niveau. Je recommande !",
    date: "Il y a 1 mois"
  },
  {
    name: "Sarah M.",
    rating: 5,
    text: "Grâce à AG Coaching, j'ai retrouvé la motivation et les résultats sont là. Un vrai accompagnement de qualité.",
    date: "Il y a 2 mois"
  },
  {
    name: "Pierre D.",
    rating: 5,
    text: "Coach passionné et très compétent. Les séances sont toujours efficaces et motivantes.",
    date: "Il y a 3 mois"
  }
];

export default function Reviews() {
  return (
    <section id="avis" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-6">Avis Google</h2>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <FaGoogle className="text-2xl text-blue-600" />
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-xl" />
              ))}
            </div>
            <span className="text-lg font-semibold">5.0</span>
          </div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl font-semibold text-blue-600">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold">{review.name}</h3>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 text-sm" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-3">{review.text}</p>
                <p className="text-sm text-gray-400">{review.date}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a
              href="https://g.page/agcoaching/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white border-2 border-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <FaGoogle className="text-blue-600" />
              <span>Laisser un avis sur Google</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}