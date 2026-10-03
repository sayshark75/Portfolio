import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import { PERSON } from '@/data/portfolio'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-32 pb-20 px-6 md:px-10 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 subtle-grid opacity-60" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-ai/5 rounded-full blur-[100px]" />

      <div className="relative max-w-content mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center gap-3 font-mono text-xs tracking-widest uppercase text-accent mb-8"
        >
          <span className="h-px w-8 bg-accent" />
          Available for new opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-sans font-bold tracking-tight text-ink leading-[1.02] text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Hi, I'm <span className="text-accent">{PERSON.first}.</span>
          <br />
          I build products
          <br />
          <span className="text-dim">powered by AI & full-stack engineering.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-8 max-w-2xl text-lg md:text-xl text-dim leading-relaxed"
        >
          {PERSON.tagline} I work across the stack — from clean, fast interfaces to backend services,
          data pipelines, and AI systems built with LLMs and retrieval. I care about shipping products
          that actually work, not just demos.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-accent text-bg font-medium hover:bg-accent/90 transition-colors"
          >
            See my work
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href={PERSON.resumeUrl}
            className="inline-flex items-center gap-2 px-6 py-3 border border-line-strong text-ink hover:border-accent hover:text-accent transition-colors"
          >
            <Download size={16} />
            Download Resume
          </a>
          <a
            href={`mailto:${PERSON.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 text-dim hover:text-ink transition-colors"
          >
            Get in touch →
          </a>
        </motion.div>

        {/* Quick facts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10"
        >
          {[
            { label: 'Role', value: 'Software Engineer' },
            { label: 'Focus', value: 'AI / Full Stack' },
            { label: 'Location', value: 'Pune, India' },
            { label: 'Experience', value: '5+ years' },
          ].map((f) => (
            <div key={f.label} className="border-t border-line pt-4">
              <div className="font-mono text-[10px] tracking-widest uppercase text-muted mb-1.5">{f.label}</div>
              <div className="text-ink font-medium text-base md:text-lg">{f.value}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-widest uppercase text-muted flex flex-col items-center gap-2"
      >
        <span>Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <div className="w-px h-8 bg-gradient-to-b from-muted to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}
