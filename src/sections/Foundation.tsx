import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import SectionLabel from '@/components/SectionLabel'

const LAYERS = [
  { label: 'UI', color: '#ffb347' },
  { label: 'API', color: '#00e5a0' },
  { label: 'DATA', color: '#3da9ff' },
  { label: 'AI', color: '#7c5cff' },
  { label: 'SYSTEM', color: '#ff6b3d' },
]

export default function Foundation() {
  const ref = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const uiY = useTransform(scrollYProgress, [0, 0.3, 0.7], [40, 0, -80])
  const apiY = useTransform(scrollYProgress, [0.1, 0.4, 0.8], [80, 0, -60])
  const dataY = useTransform(scrollYProgress, [0.2, 0.5, 0.9], [120, 0, -40])
  const aiY = useTransform(scrollYProgress, [0.3, 0.6, 1], [160, 0, -20])
  const systemY = useTransform(scrollYProgress, [0.4, 0.7, 1], [200, 0, 0])
  const op = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.4])

  const yforms = [uiY, apiY, dataY, aiY, systemY]

  return (
    <section id="foundation" ref={ref} className="relative min-h-[120vh] py-32 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <SectionLabel number="01" label="FOUNDATION" />
        <motion.div style={{ opacity: op }}>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-20%' }}
            transition={{ duration: 0.8 }}
            className="font-display font-black leading-[0.9] tracking-tighter text-4xl md:text-7xl lg:text-8xl"
          >
            FULL STACK
            <br />
            WAS THE
            <br />
            <span className="text-accent">FOUNDATION.</span>
          </motion.h2>

          <div className="relative mt-20 md:mt-32 min-h-[60vh] flex flex-col items-center justify-center">
            {/* connecting line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border-strong to-transparent" />

            {LAYERS.map((l, i) => (
              <motion.div
                key={l.label}
                style={{ y: yforms[i] }}
                className="relative my-2 md:my-4"
              >
                <div className="flex items-center gap-4 md:gap-8">
                  <div className="text-right">
                    <div
                      className="font-display font-black tracking-tighter text-5xl md:text-8xl lg:text-9xl"
                      style={{ color: l.color, opacity: 0.9 }}
                    >
                      {l.label}
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: false, margin: '-20%' }}
                      transition={{ delay: i * 0.1, type: 'spring', stiffness: 200 }}
                      className="h-3 w-3 rounded-full"
                      style={{ backgroundColor: l.color, boxShadow: `0 0 20px ${l.color}` }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-20%' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-24 md:mt-32 max-w-3xl"
          >
            <p className="font-display text-2xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-balance">
              The interesting problems are usually{' '}
              <span className="text-accent italic">underneath</span> the interface.
            </p>
            <p className="mt-8 text-ink/60 max-w-xl leading-relaxed">
              A UI is the contract a product makes with a user. Engineering is what fulfills it — the
              APIs, data flows, retrieval paths, and models that sit below the surface. That's where
              the leverage lives.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
