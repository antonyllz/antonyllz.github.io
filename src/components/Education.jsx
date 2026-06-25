import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Education() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="education" className="py-28 px-6 bg-white">
      <div className="max-w-3xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-12"
        >
          <p className="text-blue-600 text-xs font-semibold tracking-widest uppercase mb-3">Formation</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Academic Background</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="card-surface card-surface-hover rounded-xl p-7"
        >
          <div className="flex flex-wrap items-start gap-5">
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422A12.083 12.083 0 0122 14.26V19a2 2 0 01-2 2H4a2 2 0 01-2-2v-4.74a12.083 12.083 0 013.84-3.682L12 14z" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                <div>
                  <h3 className="text-base font-semibold text-slate-900">Computer Networks</h3>
                  <p className="text-blue-600 text-sm font-medium">IFPB — Instituto Federal da Paraíba</p>
                </div>
                <span className="text-xs text-slate-400 bg-slate-100 px-3 py-1 rounded-full font-medium shrink-0">
                  2023 — 2026
                </span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                Technology degree in network infrastructure, protocols, and telecommunications systems.
                Building the theoretical foundations that complement daily hands-on work in optical transmission networks.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
