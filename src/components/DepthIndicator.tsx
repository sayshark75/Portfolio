import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { SYSTEM_LAYERS } from '@/data/portfolio'
import { useEffect, useState } from 'react'

export default function DepthIndicator() {
  const { scrollYProgress } = useScroll()
  const smooth = useSpring(scrollYProgress, { stiffness: 80, damping: 20 })
  const [active, setActive] = useState(0)

  useEffect(() => {
    return smooth.on('change', (v) => {
      // Map v (0..1) across the 7 layers. Hero is ~0-0.1, subsequent layers distribute
      const layers = SYSTEM_LAYERS.length
      const idx = Math.min(layers - 1, Math.floor(v * layers))
      setActive(idx)
    })
  }, [smooth])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 3 }}
      className="fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-end gap-3 font-mono text-[10px] tracking-[0.2em] uppercase"
    >
      <div className="text-dim mb-1">[DEPTH]</div>
      <div className="relative h-40 w-px bg-border overflow-hidden">
        <motion.div
          style={{ scaleY: smooth, originY: 0 }}
          className="absolute inset-x-0 top-0 bg-gradient-to-b from-accent to-ai origin-top h-full"
        />
        {SYSTEM_LAYERS.map((_, i) => (
          <div key={i} className="absolute w-1 h-px bg-border-strong" style={{ top: `${(i / (SYSTEM_LAYERS.length - 1)) * 100}%`, right: 0 }} />
        ))}
      </div>
      <div className="text-right min-h-[2.5rem]">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-accent"
        >
          {SYSTEM_LAYERS[active].label}
        </motion.div>
        <div className="text-dim text-[9px] mt-1 max-w-[8rem] leading-tight">
          {SYSTEM_LAYERS[active].tagline}
        </div>
      </div>
    </motion.div>
  )
}
