import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import { FaGoogle, FaStar } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Jérôme Nicolas",
    text: "Adam m’accompagne depuis maintenant quasi 2 ans et je dois dire que le travail porte ses fruits. Les séances sont variées et son degré d’exigence permet d’être aussi exigeant avec soi-même. Bonne humeur et sourire sont toujours au rendez-vous.",
    date: "Février 2024",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    name: "Gaël Pennéguès",
    text: "Je recommande vivement Adam ! C’est un très bon coach avec des connaissances poussées sur le corps et son fonctionnement. Très attentif aux positions et à la progression.",
    date: "Novembre 2023",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
  },
  {
    name: "Antoine Videau",
    text: "Adam m'accompagne au quotidien, à l'écoute, il sait s'adapter à mes besoins tout en me challengeant. Ma progression physique est notable. Je recommande sans hésiter !",
    date: "Novembre 2023",
    image: "https://randomuser.me/api/portraits/men/18.jpg",
  },
  {
    name: "Raphaël Gerbeaud",
    text: "Très satisfait du travail fourni. Adam a été à l’écoute tout au long du suivi et a su s’adapter à mes besoins. Je recommande vivement.",
    date: "Août 2023",
    image: "https://randomuser.me/api/portraits/men/23.jpg",
  },
  {
    name: "David Ogor",
    text: "Adam est à l'écoute et met en place des séances adaptées aux objectifs fixés ensemble. Toujours motivant et professionnel !",
    date: "Août 2023",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
  },
]

export default function ReviewsCarousel() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true }, // Loop activé
    [
      AutoScroll({
        playOnInit: true, // démarre auto
        speed: 0.5,         // vitesse de défilement
        stopOnInteraction: false, // ne stoppe pas au scroll manuel
      }),
    ]
  )

  return (
    <section id="avis" className="relative py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-14 text-orange-500">
          Avis de nos clients
        </h2>

        <div className="relative overflow-hidden">
          {/* Dégradés latéraux */}
          <div className="absolute left-0 top-0 h-full w-6 sm:w-24 md:w-24 lg:w-24 bg-gradient-to-l from-transparent to-gray-900 z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-6 sm:w-24 md:w-24 lg:w-24 bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none" />

          <div className="mx-auto py-8">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {reviews.concat(reviews).map((r, i) => (
                  <div
                    key={i}
                    className="bg-gray-900/50 backdrop-blur-xl border border-gray-700/20 rounded-3xl p-6 w-72 sm:w-80 shrink-0 mx-4 flex flex-col justify-between shadow-2xl"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={r.image}
                        alt={r.name}
                        className="w-16 h-16 rounded-full object-cover ring-2 ring-orange-400"
                      />
                      <div className="text-left">
                        <p className="font-bold text-orange-500 text-lg">{r.name}</p>
                        <p className="text-gray-400 text-sm">{r.date}</p>
                      </div>
                    </div>
                    <p className="text-white/90 text-sm italic leading-relaxed mb-4">“{r.text}”</p>
                    <div className="flex justify-start space-x-1">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            className="w-5 h-5 text-yellow-400"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <p className="mt-14 text-gray-500 text-sm">
          Des retours authentiques de nos clients satisfaits
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://g.page/agcoaching/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-orange-500 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          >
            <FaGoogle className="text-white" />
            <span>Laisser un avis sur Google</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
