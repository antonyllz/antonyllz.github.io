import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const experiences = [
  {
    role: 'Network Engineer (Transmission)',
    company: 'Tely',
    period: 'Oct 2024 — Present',
    desc: 'Working with DWDM optical transmission networks and IP backbone in Carrier and ISP environments. Responsible for commissioning, activation, and maintenance of high-capacity optical circuits, performing optical power measurements, OSNR analysis, and spectrum verification.',
    tags: ['DWDM', 'OTN', 'Backbone IP', 'Ciena'],
    current: true,
  },
  {
    role: 'Technical Operations Analyst',
    company: 'Tely',
    period: 'Apr 2024 — Oct 2024',
    desc: 'Analysis and resolution of incidents in optical and IP networks, with troubleshooting of routing protocols such as OSPF, BGP, and MPLS. Performance monitoring, capacity planning, and coordination with field teams for fiber restoration and equipment replacement, ensuring SLA compliance.',
    tags: ['OSPF', 'BGP', 'MPLS', 'N3 Support', 'Troubleshooting'],
    current: false,
  },
  {
    role: 'NOC Analyst',
    company: 'Tely',
    period: 'Nov 2023 — Apr 2024',
    desc: 'Real-time monitoring of optical and IP networks, ticket management, incident escalation, and coordination with field engineers. First point of contact for fault detection in DWDM transmission and IP backbone environments, with initial triage and diagnosis of network events.',
    tags: ['NOC', 'DWDM', 'Incident Response', 'Monitoring'],
    current: false,
  },
]

function TimelineItem({ exp, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="relative pl-8 pb-10 last:pb-0"
    >
      <div className={`absolute left-0 top-1.5 w-3 h-3 rounded-full border-2 z-10 ${
        exp.current ? 'border-blue-600 bg-blue-600' : 'border-slate-300 bg-white'
      }`}>
        {exp.current && <span className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-50" />}
      </div>

      <div className="card-surface card-surface-hover rounded-xl p-5">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
          <div>
            <h3 className="text-base font-semibold text-slate-900">{exp.role}</h3>
            <p className="text-blue-600 text-sm font-medium">{exp.company}</p>
          </div>
          <span className="text-xs text-slate-400 bg-slate-100 px-3 py-1 rounded-full shrink-0 font-medium">
            {exp.period}
          </span>
        </div>
        <p className="text-slate-500 text-sm leading-relaxed mb-3">{exp.desc}</p>
        <div className="flex flex-wrap gap-1.5">
          {exp.tags.map(t => (
            <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 font-medium">
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
    <section id="experience" className="py-28 px-6 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-12"
        >
          <p className="text-blue-600 text-xs font-semibold tracking-widest uppercase mb-3">Career</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Professional Experience</h2>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, delay: 0.15, ease: 'easeOut' }}
            style={{ originY: 0 }}
            className="absolute left-[5px] top-2 bottom-0 w-px bg-gradient-to-b from-blue-400 via-blue-200 to-transparent"
          />
          {experiences.map((exp, i) => (
            <TimelineItem key={exp.period} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
