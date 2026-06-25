import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skills = [
  'DWDM', 'OTN', 'SDH/PDH', 'Ciena 6500', 'Ciena GeoMesh',
  'Fiber Optics', 'VIAVI MTS 6000A', 'JDSU MTS-8000',
  'OTDR', 'Network Engineering', 'NOC Operations', 'Linux',
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* Photo side */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-[#00cfff]/30 to-violet-500/20 blur-md" />
              <img
                src="/profile.jpeg"
                alt="Antony Araújo"
                className="relative w-72 h-72 md:w-80 md:h-80 object-cover rounded-2xl border border-white/10"
              />
            </div>
          </div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          >
            <p className="font-mono text-[#00cfff] text-xs tracking-[0.3em] uppercase mb-4">About Me</p>
            <h2 className="text-4xl font-bold text-gradient-subtle mb-6 leading-snug">
              Building the backbone<br />of digital connectivity.
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed mb-8">
              <p>
                I work at the core of digital infrastructure — configuring and maintaining DWDM optical
                networks that carry terabits of data across São Paulo and beyond. As a Transmission
                Specialist at Tely, I operate inside major facilities including{' '}
                <span className="text-slate-200 font-medium">Equinix</span>,{' '}
                <span className="text-slate-200 font-medium">Cirion</span>,{' '}
                <span className="text-slate-200 font-medium">Eletronet</span> and{' '}
                <span className="text-slate-200 font-medium">Scala</span>.
              </p>
              <p>
                My expertise spans the full lifecycle of optical links: from commissioning Ciena 6500
                platforms and running OSA measurements with VIAVI and JDSU test equipment, to
                real-time fault isolation and capacity management inside large-scale carrier environments.
              </p>
              <p>
                Currently pursuing a degree in <span className="text-slate-200 font-medium">Computer Networks</span> at IFPB,
                deepening the theoretical foundations behind everything I build in the field.
              </p>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span
                  key={s}
                  className="text-xs font-mono px-3 py-1.5 rounded-md bg-[#00cfff]/5 border border-[#00cfff]/15 text-[#00cfff]/80 hover:bg-[#00cfff]/10 hover:border-[#00cfff]/30 transition-colors cursor-default"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
