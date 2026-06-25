import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Education() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="education" className="py-32 px-6">
      <div className="max-w-3xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="font-mono text-[#00cfff] text-xs tracking-[0.3em] uppercase mb-3">Formation</p>
          <h2 className="text-4xl font-bold text-gradient-subtle">Academic Background</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="card-glass rounded-xl p-8 glow-cyan"
        >
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-[#00cfff]/10 border border-[#00cfff]/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#00cfff]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422A12.083 12.083 0 0122 14.26V19a2 2 0 01-2 2H4a2 2 0 01-2-2v-4.74a12.083 12.083 0 013.84-3.682L12 14z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Computer Networks</h3>
                  <p className="text-[#00cfff] text-sm font-medium">IFPB — Instituto Federal da Paraíba</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mt-3">
                Technology degree focused on network infrastructure, protocols, and telecommunications
                systems. Building the theoretical foundations that complement daily hands-on work
                in optical transmission networks.
              </p>
            </div>
            <span className="font-mono text-xs text-slate-500 bg-slate-800/50 px-3 py-1 rounded-full shrink-0">
              Mar 2023 — Present
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
