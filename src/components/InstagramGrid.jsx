// components/InstagramMosaicMotion.jsx
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const instagramPhotos = [
  { src: 'https://picsum.photos/id/1011/400/500', span: 'row-span-2 col-span-2' },
  { src: 'https://picsum.photos/id/1021/400/400', span: 'row-span-1 col-span-1' },
  { src: 'https://picsum.photos/id/1031/400/600', span: 'row-span-2 col-span-1' },
  { src: 'https://picsum.photos/id/1041/400/400', span: 'row-span-1 col-span-1' },
  { src: 'https://picsum.photos/id/1051/400/400', span: 'row-span-1 col-span-2' },
  { src: 'https://picsum.photos/id/1061/400/500', span: 'row-span-2 col-span-1' },
  { src: 'https://picsum.photos/id/1071/400/400', span: 'row-span-1 col-span-1' },
  { src: 'https://picsum.photos/id/1081/400/600', span: 'row-span-2 col-span-2' },
  { src: 'https://picsum.photos/id/1091/400/400', span: 'row-span-1 col-span-1' },
  { src: 'https://picsum.photos/id/1101/400/400', span: 'row-span-1 col-span-1' },
  { src: 'https://picsum.photos/id/1111/400/500', span: 'row-span-2 col-span-1' },
  { src: 'https://picsum.photos/id/1121/400/400', span: 'row-span-1 col-span-1' },
]

export default function InstagramMosaicMotion() {
  const [modalOpen, setModalOpen] = useState(false)
  const [activeImage, setActiveImage] = useState('')

  const openModal = (src) => {
    setActiveImage(src)
    setModalOpen(true)
  }
  const closeModal = () => setModalOpen(false)

  return (
    <section id="galleries" className="py-16 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-orange-500 mb-10 text-center">
          Suivez nos séances sur Instagram
        </h2>

        {/* Grille mosaïque */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 auto-rows-[150px]">
          {instagramPhotos.map((photo, i) => (
            <motion.div
              key={i}
              className={`${photo.span} overflow-hidden rounded-2xl relative cursor-pointer`}
              onClick={() => openModal(photo.src)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
            >
              <img
                src={photo.src}
                alt={`Photo ${i + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              src={activeImage}
              alt="Agrandie"
              className="max-h-full max-w-full rounded-2xl shadow-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()} // empêche la fermeture si on clique sur l'image
            />
            <button
              className="absolute top-6 right-6 text-white text-3xl font-bold"
              onClick={closeModal}
            >
              &times;
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
