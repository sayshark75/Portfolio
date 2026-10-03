import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import { useRef } from 'react'
import SectionLabel from '@/components/SectionLabel'
import { EXPERIENCES, TIMELINE_NODES } from '@/data/portfolio'
import { Briefcase, Calendar } from 'lucide-react'

export default function Experience() {
  const ref = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  return (
    <section id="experience" ref={ref} className="relative py-32 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <SectionLabel number="02" label="ENGINEERING TIMELINE / TRANSFORMATION">
          <h2 className="mt-3 font-display font-black tracking-tighter text-4xl md:text-6xl lg:text-7xl leading-[0.9]">
            Different technologies.
            <br />
            <span className="text-accent">Same engineering mindset.</span>
          </h2>
        </SectionLabel>

        {/* Timeline graph */}
        <TimelineGraph scrollProgress={scrollYProgress} />

        {/* Detailed experience */}
        <div className="mt-32">
          <div className="flex items-center gap-3 mb-8 font-mono text-[11px] tracking-[0.3em] text-dim uppercase">
            <Briefcase size={12} className="text-accent" />
            Professional Experience
          </div>
          <div className="space-y-0">
            {EXPERIENCES.map((e, i) => (
              <ExperienceCard key={e.id} exp={e} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineGraph({ scrollProgress }: { scrollProgress: MotionValue<number> }) {
  const wrapRef = useRef<HTMLDivElement | null>(null)
  const smoothProgress = useTransform(scrollProgress, [0.1, 0.4], [0, 1], { clamp: true })

  return (
    <div ref={wrapRef} className="relative mt-16 md:mt-24">
      <div className="relative grid grid-cols-2 md:grid-cols-6 gap-6 md:gap-4">
        {/* connecting line */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          preserveAspectRatio="none"
        >
          <motion.line
            x1="0%"
            y1="50%"
            x2="100%"
            y2="50%"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1"
          />
          <motion.line
            x1="0%"
            y1="50%"
            x2="100%"
            y2="50%"
            stroke="#00e5a0"
            strokeWidth="1.5"
            style={{ pathLength: smoothProgress }}
            custom={{ length: 1 }}
          />
        </svg>

        {TIMELINE_NODES.map((n, i) => {
          const delay = i * 0.08
          const colors = ['#7c5cff', '#ff6b3d', '#ffb347', '#3da9ff', '#00e5a0', '#00e5a0']
          return (
            <motion.div
              key={n.year}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-20%' }}
              transition={{ duration: 0.6, delay }}
              className="relative flex flex-col items-start"
            >
              <div className="relative flex items-center gap-2 mb-3">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: false, margin: '-20%' }}
                  transition={{ delay: delay + 0.1, type: 'spring', stiffness: 200 }}
                  className="h-3 w-3 rounded-full border-2"
                  style={{ borderColor: colors[i], backgroundColor: 'rgba(10,10,10,1)' }}
                />
                <span className="font-mono text-xs text-dim">{n.year}</span>
              </div>
              <div
                className="font-display font-black tracking-tight text-xl md:text-2xl leading-tight"
                style={{ color: colors[i] }}
              >
                {n.title}
              </div>
              <ul className="mt-3 space-y-1">
                {n.items.map((it) => (
                  <li key={it} className="font-mono text-[10px] tracking-wider text-dim uppercase flex items-start gap-1.5">
                    <span className="mt-1 h-px w-2 bg-current flex-shrink-0" style={{ color: colors[i] }} />
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

function ExperienceCard({ exp, index }: { exp: (typeof EXPERIENCES)[number]; index: number }) {
  const ref = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end center'] })
  const borderColor = useTransform(scrollYProgress, [0, 1], ['rgba(255,255,255,0.05)', exp.color])
  const tagBg = useTransform(scrollYProgress, [0, 1], ['rgba(255,255,255,0.02)', `${exp.color}14`])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: '-15%' }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.05 }}
      style={{ borderColor }}
      className="group relative border-l border-t border-r last:border-b px-5 md:px-8 py-6 md:py-8 bg-panel/40 hover:bg-panel/80 transition-colors duration-500"
    >
      <motion.div
        style={{ backgroundColor: exp.color, opacity: useTransform(scrollYProgress, [0, 1], [0, 1]) }}
        className="absolute top-0 left-0 h-px w-12"
      />
      <div className="grid md:grid-cols-[1fr_2fr] gap-4 md:gap-8">
        <div>
          <div className="font-mono text-[11px] tracking-[0.2em] text-dim uppercase flex items-center gap-2 mb-2">
            <Calendar size={11} />
            {exp.period}
          </div>
          <h3
            className="font-display font-bold text-2xl md:text-3xl tracking-tight"
            style={{ color: exp.color }}
          >
            {exp.company}
          </h3>
          <div className="font-mono text-sm text-ink/80 mt-1">{exp.role}</div>
          <div className="mt-4 font-mono text-[10px] tracking-widest text-dim uppercase">
            ID: {String(index).padStart(2, '0')}
          </div>
        </div>
        <div>
          <ul className="space-y-2">
            {exp.bullets.map((b) => (
              <li key={b} className="flex gap-3 text-sm md:text-base text-ink/80 leading-relaxed">
                <span className="mt-2 h-px w-4 flex-shrink-0" style={{ backgroundColor: exp.color }} />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <motion.div
            style={{ backgroundColor: tagBg }}
            className="mt-5 flex flex-wrap gap-2 p-3 border border-border"
          >
            {exp.tags.map((t) => (
              <span
                key={t}
                className="font-mono text-[10px] tracking-wider px-2 py-1 border border-border text-ink/70"
                style={{ borderColor: `${exp.color}40` }}
              >
                {t}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
