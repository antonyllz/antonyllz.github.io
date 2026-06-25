import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.4 },
  },
}

const item = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.745l7.73-8.835L1.254 2.25H8.08l4.259 5.632 5.905-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid */}
      <div className="absolute inset-0 bg-grid" />

      {/* Radial fade overlay */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 120%, transparent, #04040c)' }} />

      {/* Orb — top left */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-cyan-500/8 blur-[100px] animate-float-slow pointer-events-none" />
      {/* Orb — bottom right */}
      <div className="absolute bottom-0 -right-32 w-[400px] h-[400px] rounded-full bg-violet-600/8 blur-[80px] animate-float pointer-events-none" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        <motion.p variants={item} className="font-mono text-[#00cfff] text-xs tracking-[0.3em] uppercase mb-6">
          Hello, world — I&apos;m
        </motion.p>

        <motion.h1 variants={item} className="text-6xl md:text-8xl font-bold tracking-tight mb-4 leading-none">
          <span className="text-gradient">Antony Araújo</span>
        </motion.h1>

        <motion.div variants={item} className="flex items-center justify-center gap-3 mb-3">
          <div className="h-px w-8 bg-[#00cfff]/40" />
          <p className="text-xl md:text-2xl text-slate-300 font-light tracking-wide">
            Transmission Specialist
          </p>
          <div className="h-px w-8 bg-[#00cfff]/40" />
        </motion.div>

        <motion.p variants={item} className="font-mono text-slate-500 text-sm tracking-widest mb-12">
          DWDM · Optical Networks · Fiber Infrastructure
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap gap-4 justify-center mb-14">
          <a
            href="#gallery"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#gallery')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="group px-7 py-3 bg-[#00cfff] text-black font-semibold rounded-lg hover:bg-cyan-300 transition-all duration-200 shadow-lg shadow-cyan-500/20"
          >
            View Field Work
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="px-7 py-3 border border-slate-700 text-slate-300 rounded-lg hover:border-[#00cfff]/40 hover:text-white hover:bg-white/5 transition-all duration-200"
          >
            About Me
          </a>
        </motion.div>

        {/* Social icons */}
        <motion.div variants={item} className="flex gap-5 justify-center">
          {[
            { href: 'https://github.com/antonyllz', icon: <GitHubIcon />, label: 'GitHub' },
            { href: 'https://www.linkedin.com/in/antonyqny/', icon: <LinkedInIcon />, label: 'LinkedIn' },
            { href: 'https://x.com/anthonyllz', icon: <XIcon />, label: 'X' },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-800 text-slate-500 hover:text-white hover:border-[#00cfff]/30 hover:bg-[#00cfff]/5 transition-all duration-200"
            >
              {icon}
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-scroll-bounce">
        <p className="font-mono text-xs text-slate-600 tracking-widest">scroll</p>
        <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
