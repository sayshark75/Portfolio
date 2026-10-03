import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import { useRef } from 'react'
import SectionLabel from '@/components/SectionLabel'
import { PHILOSOPHY } from '@/data/portfolio'

const HIGHLIGHT = new Set([
  'systems,', 'demos.', 'data', 'model.', 'component,', 'product.', 'complexity', 'observable.', 'layer', 'abstraction.',
])

export default function Philosophy() {
  const ref = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  return (
    <section id="philosophy" ref={ref} className="relative py-40 px-6 md:px-10">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative max-w-5xl mx-auto">
        <SectionLabel number="08" label="ENGINEERING PHILOSOPHY" />

        <div className="mt-10 space-y-16 md:space-y-24">
          {PHILOSOPHY.map((p, i) => (
            <PhilosophyRow key={p} text={p} index={i} total={PHILOSOPHY.length} scrollYProgress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  )
}

function PhilosophyRow({ text, index: i, total, scrollYProgress }: { text: string; index: number; total: number; scrollYProgress: MotionValue<number> }) {
  const start = i / total
  const end = (i + 1) / total
  const prog = useTransform(scrollYProgress, [start - 0.1, start + 0.15, end - 0.1, end + 0.05], [0, 1, 1, 0])
  const y = useTransform(prog, [0, 1], [40, 0])
  return (
    <motion.div style={{ opacity: prog, y }} className="relative">
      <div className="flex items-start gap-6">
        <div className="font-mono text-[11px] tracking-widest text-accent mt-3 hidden md:block">
          {String(i + 1).padStart(2, '0')} / 0{total}
        </div>
        <p className="font-display font-black tracking-tight leading-[1.05] text-3xl md:text-5xl lg:text-6xl text-balance">
          {text.split(' ').map((word, wi) => (
            <span key={wi}>
              {HIGHLIGHT.has(word) ? <span className="text-accent">{word}</span> : word}{' '}
            </span>
          ))}
        </p>
      </div>
      <motion.div
        style={{ scaleX: prog, originX: 0 }}
        className="mt-6 h-px bg-gradient-to-r from-accent/60 via-accent/20 to-transparent"
      />
    </motion.div>
  )
}
