import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

const instagramPhotos = [
  { src: "/images/Echauffement.jpg" },
  { src: "/images/BabyFoot.jpg" },
  { src: "/images/Jambe.jpg" },
  { src: "/images/Loin.jpg" },
  { src: "/images/Extension.jpg" },
  { src: "/images/ExerciceAlthere.jpg" },
  { src: "/images/Mur.jpg" },
  { src: "/images/NoirEtBlanc.jpg" },
  { src: "/images/MurBalle.jpg" },
  { src: "/images/USMontagnarde.jpg" },
  { src: "/images/Passe.jpg" },
];

export default function InstagramMosaicMotion() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeImage, setActiveImage] = useState("");

  const openModal = (src) => {
    setActiveImage(src);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);

  return (
    <section
      id="galleries"
      className="py-24 bg-(--color-background) relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-4xl md:text-5xl font-extrabold tracking-wide mb-14 text-(--color-titre)">
          Suivez les séances sur{" "}
          <span className="text-[--color-primary]">Instagram</span>
        </h2>

        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3"
          style={{ gridAutoRows: "180px" }}
        >
          {instagramPhotos.map((photo, i) => (
            <motion.div
              key={i}
              className="group relative cursor-pointer overflow-hidden"
              onClick={() => openModal(photo.src)}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={photo.src}
                alt={`Photo ${i + 1}`}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:blur-[2px]"
              />
              <div className="absolute inset-0 (--color-background)k/0 group-hover:(--color-background)k/40 transition-all duration-500"></div>
              <motion.div
                className="absolute inset-0 flex items-center justify-center (--color-text) opacity-0 group-hover:opacity-100 transition-all duration-500"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
              >
                <span className="text-sm uppercase tracking-wider">
                  Voir la photo
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center (--color-background)k/90 backdrop-blur-sm p-4"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              src={activeImage}
              alt="Agrandie"
              className="max-h-[90vh] max-w-[90vw] object-contain shadow-2xl"
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute top-8 right-8 (--color-text)/80 hover:(--color-text) text-4xl transition-colors"
              onClick={closeModal}
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
