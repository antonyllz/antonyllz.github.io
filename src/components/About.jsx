import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skills = [
  'OSPF', 'BGP', 'MPLS', 'L2VPN', 'L3VPN', 'MPLS-TE',
  'DWDM', 'OTN', 'SDH/PDH', 'Backbone IP',
  'Cisco', 'Huawei', 'Juniper', 'Extreme Networks', 'MikroTik',
  'Ciena', 'Padtec', 'Infinera', 'Datacom', 'NOC Operations',
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-28 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* Photo */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <img
                src="/profile.jpeg"
                alt="Antony Araújo"
                className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-2xl shadow-xl shadow-slate-200"
              />
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border-2 border-blue-200 -z-10" />
            </div>
          </div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="text-blue-600 text-xs font-semibold tracking-widest uppercase mb-3">About me</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-snug">
              Network Engineer.
            </h2>

            <div className="space-y-4 text-slate-500 leading-relaxed mb-8 text-[15px]">
              <p>
                I&apos;m 20 years old, originally from Recife-PE, and currently work as a Network Engineer at{' '}
                <span className="text-slate-800 font-medium">Tely</span>, specifically in the transmission sector.
              </p>
              <p>
                Computer Networks professional with experience in telecommunications, working with DWDM optical
                transmission networks and IP backbone operations. Experienced in commissioning, activation, and
                monitoring of transmission networks, as well as N3 support for Carrier and ISP environments.
              </p>
              <p>
                I work with protocols such as{' '}
                <span className="text-slate-800 font-medium">OSPF, BGP, MPLS, L2VPN, L3VPN, and MPLS-TE</span>,
                with experience on{' '}
                <span className="text-slate-800 font-medium">Cisco, Huawei, Juniper, Extreme Networks, and MikroTik</span>{' '}
                equipment. Certified in DWDM technologies by Padtec, with expertise in design, operation, maintenance,
                and commissioning of high-capacity optical systems. Graduated in Computer Networks from IFPB.
              </p>
              <p>
                I also have expertise in platforms from{' '}
                <span className="text-slate-800 font-medium">Ciena, Padtec, Infinera, and Datacom</span>,
                with knowledge of their solutions and applications in high-capacity optical networks.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {skills.map(s => (
                <span key={s}
                  className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-700 transition-colors cursor-default">
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
