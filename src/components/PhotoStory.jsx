import { useRef } from 'react'
import { useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const photos = [
  '/IMG_4855.jpeg',
  '/IMG_4853.jpeg',
  '/IMG_4852.jpeg',
  '/IMG_4950.jpeg',
  '/IMG_4941.jpeg',
  '/IMG_2027.jpeg',
  '/IMG_1999.jpeg',
  '/IMG_5001.jpeg',
  '/IMG_8631.jpeg',
]

function CloseIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

function ChevronIcon({ dir }) {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d={dir === 'left' ? 'M15 19l-7-7 7-7' : 'M9 5l7 7-7 7'} />
    </svg>
  )
}

export default function PhotoStory() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [selected, setSelected] = useState(null)

  const prev = () => setSelected(s => (s - 1 + photos.length) % photos.length)
  const next = () => setSelected(s => (s + 1) % photos.length)

  return (
    <section id="fieldwork" className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-12"
        >
          <p className="text-blue-600 text-xs font-semibold tracking-widest uppercase mb-3">Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Field Work</h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {photos.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="relative overflow-hidden rounded-xl cursor-pointer group aspect-[4/3] bg-slate-100"
              onClick={() => setSelected(i)}
            >
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Subtle hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative"
              onClick={e => e.stopPropagation()}
            >
              <img
                src={photos[selected]}
                alt=""
                className="max-h-[85vh] max-w-[90vw] rounded-xl object-contain"
              />

              {/* Close */}
              <button
                onClick={() => setSelected(null)}
                className="absolute -top-3 -right-3 w-9 h-9 rounded-full bg-white flex items-center justify-center text-slate-700 hover:bg-slate-100 shadow-lg transition-colors"
              >
                <CloseIcon />
              </button>

              {/* Prev */}
              <button
                onClick={e => { e.stopPropagation(); prev() }}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center text-slate-700 hover:bg-white shadow-lg transition-colors"
              >
                <ChevronIcon dir="left" />
              </button>

              {/* Next */}
              <button
                onClick={e => { e.stopPropagation(); next() }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center text-slate-700 hover:bg-white shadow-lg transition-colors"
              >
                <ChevronIcon dir="right" />
              </button>

              {/* Counter */}
              <p className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-white/50 text-xs font-mono">
                {selected + 1} / {photos.length}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
