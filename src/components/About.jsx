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
                Tenho 20 anos, sou natural de Recife-PE e trabalho atualmente como Engenheiro de Redes na{' '}
                <span className="text-slate-800 font-medium">Tely</span>, especificamente no setor de transmissão.
              </p>
              <p>
                Profissional de Redes de Computadores com experiência em telecomunicações, atuando em redes
                de transmissão óptica DWDM e operações de backbone IP. Experiência em comissionamento,
                ativação e monitoramento de redes de transmissão, além de suporte N3 para ambientes Carrier e ISP.
              </p>
              <p>
                Trabalho com protocolos como{' '}
                <span className="text-slate-800 font-medium">OSPF, BGP, MPLS, L2VPN, L3VPN e MPLS-TE</span>,
                com experiência em equipamentos{' '}
                <span className="text-slate-800 font-medium">Cisco, Huawei, Juniper, Extreme Networks e MikroTik</span>.
                Certificado em tecnologias DWDM pela Padtec, com atuação em projetos, operação, manutenção
                e comissionamento de sistemas ópticos de alta capacidade. Formado em Redes de Computadores pelo IFPB.
              </p>
              <p>
                Também tenho domínio em plataformas da{' '}
                <span className="text-slate-800 font-medium">Ciena, Padtec, Infinera e Datacom</span>,
                conhecendo suas soluções e aplicações em redes ópticas de alta capacidade.
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
