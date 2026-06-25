import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const experiences = [
  {
    role: 'Network Engineer (Transmission)',
    company: 'Tely',
    period: 'Oct 2024 — Present',
    desc: 'Design, commissioning and maintenance of DWDM optical links at major data centers. Working with Ciena 6500 and GeoMesh platforms, coordinating end-to-end circuit activation, performing OSNR and optical power measurements with test equipment.',
    tags: ['DWDM', 'Ciena 6500', 'OTN', 'Equinix', 'Cirion'],
    current: true,
  },
  {
    role: 'Technical Operations Analyst',
    company: 'Tely',
    period: 'Apr 2024 — Oct 2024',
    desc: 'Analysis and troubleshooting of optical network incidents, performance monitoring and capacity planning. Coordinated field teams for fiber restoration and equipment swaps, ensuring SLA compliance.',
    tags: ['Troubleshooting', 'Performance', 'Fiber Optics', 'SLA'],
    current: false,
  },
  {
    role: 'NOC Analyst',
    company: 'Tely',
    period: 'Nov 2023 — Apr 2024',
    desc: 'Real-time monitoring of optical and IP networks, ticket management, incident escalation and coordination with field engineers. First point of contact for network fault detection.',
    tags: ['Network Monitoring', 'Incident Response', 'NOC'],
    current: false,
  },
]

function TimelineItem({ exp, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-1 w-3 h-3 rounded-full border-2 border-[#00cfff] bg-[#04040c] z-10">
        {exp.current && (
          <span className="absolute inset-0 rounded-full bg-[#00cfff]/40 animate-ping" />
        )}
      </div>

      {/* Card */}
      <div className="card-glass rounded-xl p-6 hover:border-[#00cfff]/20 transition-colors duration-300">
        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
          <div>
            <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
            <p className="text-[#00cfff] font-medium text-sm">{exp.company}</p>
          </div>
          <span className="font-mono text-xs text-slate-500 bg-slate-800/50 px-3 py-1 rounded-full shrink-0">
            {exp.period}
          </span>
        </div>
        <p className="text-slate-400 text-sm leading-relaxed mb-4">{exp.desc}</p>
        <div className="flex flex-wrap gap-2">
          {exp.tags.map((t) => (
            <span
              key={t}
              className="text-xs font-mono px-2.5 py-1 rounded bg-white/5 text-slate-400 border border-white/8"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="font-mono text-[#00cfff] text-xs tracking-[0.3em] uppercase mb-3">Career</p>
          <h2 className="text-4xl font-bold text-gradient-subtle">Professional Experience</h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            style={{ originY: 0 }}
            className="absolute left-[5px] top-2 bottom-0 w-px bg-gradient-to-b from-[#00cfff]/60 via-[#00cfff]/20 to-transparent"
          />

          {experiences.map((exp, i) => (
            <TimelineItem key={exp.period} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
