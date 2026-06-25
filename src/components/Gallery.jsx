import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'

const images = [
  {
    src: '/IMG_4852.jpeg',
    title: 'Equinix SP4',
    desc: 'SP3 — São Paulo, Brazil',
    category: 'equinix',
  },
  {
    src: '/IMG_4853.jpeg',
    title: 'High-Security Corridor',
    desc: 'Biometric access zone — Equinix SP4',
    category: 'equinix',
  },
  {
    src: '/IMG_4855.jpeg',
    title: 'Data Hall',
    desc: 'Server rack rows with redundant power — Equinix SP4',
    category: 'equinix',
  },
  {
    src: '/IMG_4950.jpeg',
    title: 'Cirion SP3',
    desc: 'Carrier-grade data center — São Paulo, Brazil',
    category: 'cirion',
  },
  {
    src: '/IMG_4941.jpeg',
    title: 'DWDM Commissioning',
    desc: 'Ciena 6500 — provisioning optical channels',
    category: 'technical',
  },
  {
    src: '/IMG_2027.jpeg',
    title: 'Ciena CLI Configuration',
    desc: 'SSH session — transceiver and link parameters',
    category: 'technical',
  },
  {
    src: '/IMG_1999.jpeg',
    title: 'Link Validation',
    desc: 'JDSU MTS-8000 — signal quality verification on Ciena CMD42',
    category: 'technical',
  },
  {
    src: '/IMG_5001.jpeg',
    title: 'Optical Spectrum Analysis',
    desc: 'VIAVI MTS 6000A — DWDM channel characterization (OSA)',
    category: 'technical',
  },
  {
    src: '/IMG_8631.jpeg',
    title: 'Fiber Infrastructure',
    desc: 'Ciena rack — structured cabling and OTN patch management',
    category: 'technical',
  },
]

const categories = ['All', 'Equinix', 'Cirion', 'Technical']

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

export default function Gallery() {
  const [active, setActive] = useState('All')
  const [selected, setSelected] = useState(null)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const filtered = active === 'All'
    ? images
    : images.filter((img) => img.category === active.toLowerCase())

  const close = useCallback(() => setSelected(null), [])
  const prev = useCallback(() =>
    setSelected((s) => (s - 1 + filtered.length) % filtered.length), [filtered.length])
  const next = useCallback(() =>
    setSelected((s) => (s + 1) % filtered.length), [filtered.length])

  useEffect(() => {
    if (selected === null) return
    const handler = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [selected, close, prev, next])

  useEffect(() => {
    document.body.style.overflow = selected !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [selected])

  return (
    <section id="gallery" className="py-32 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="font-mono text-[#00cfff] text-xs tracking-[0.3em] uppercase mb-3">Portfolio</p>
          <h2 className="text-4xl font-bold text-gradient-subtle mb-2">Field Work</h2>
          <p className="text-slate-500 max-w-lg">
            From the NOC to the datacenter floor — a visual log of projects, installations and operations.
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex gap-2 mb-10 flex-wrap"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActive(cat); setSelected(null) }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                active === cat
                  ? 'bg-[#00cfff] text-black'
                  : 'bg-white/5 text-slate-400 border border-white/8 hover:border-[#00cfff]/30 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((img, i) => (
              <motion.div
                key={img.src}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="relative group cursor-pointer rounded-xl overflow-hidden bg-slate-900 border border-white/5 hover:border-[#00cfff]/25 transition-colors duration-300"
                onClick={() => setSelected(i)}
              >
                <div className="overflow-hidden aspect-[4/3]">
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <p className="text-white font-semibold text-sm">{img.title}</p>
                  <p className="text-slate-300 text-xs mt-0.5">{img.desc}</p>
                </div>
                {/* Expand hint */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-black/60 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
            onClick={close}
          >
            {/* Content wrapper — stop propagation so clicks inside don't close */}
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-4xl w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <img
                src={filtered[selected].src}
                alt={filtered[selected].title}
                className="max-h-[75vh] w-auto max-w-full rounded-xl shadow-2xl object-contain"
              />

              {/* Caption */}
              <div className="mt-4 text-center">
                <p className="text-white font-semibold">{filtered[selected].title}</p>
                <p className="text-slate-400 text-sm mt-1">{filtered[selected].desc}</p>
                <p className="font-mono text-xs text-slate-600 mt-2">
                  {selected + 1} / {filtered.length}
                </p>
              </div>

              {/* Close */}
              <button
                onClick={close}
                className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
              >
                <CloseIcon />
              </button>

              {/* Prev */}
              {filtered.length > 1 && (
                <button
                  onClick={(e) => { e.stopPropagation(); prev() }}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 w-10 h-10 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                >
                  <ChevronIcon dir="left" />
                </button>
              )}

              {/* Next */}
              {filtered.length > 1 && (
                <button
                  onClick={(e) => { e.stopPropagation(); next() }}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 w-10 h-10 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                >
                  <ChevronIcon dir="right" />
                </button>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
