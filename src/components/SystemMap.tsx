import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

const NODES = [
  { id: 'profile', label: 'PROFILE', num: '00' },
  { id: 'foundation', label: 'FOUNDATION', num: '01' },
  { id: 'experience', label: 'EXPERIENCE', num: '02' },
  { id: 'systems', label: 'SYSTEMS', num: '03' },
  { id: 'ai', label: 'AI', num: '04' },
  { id: 'mess', label: 'DEBUG', num: '05' },
  { id: 'projects', label: 'PROJECTS', num: '06' },
  { id: 'skills', label: 'CONSTELLATION', num: '07' },
  { id: 'philosophy', label: 'PRINCIPLES', num: '08' },
  { id: 'contact', label: 'CONTACT', num: '09' },
]

export default function SystemMap() {
  const { scrollYProgress } = useScroll()
  const raw = useTransform(scrollYProgress, [0, 1], [0, 1])
  const progress = useSpring(raw, { stiffness: 120, damping: 20, mass: 0.3 })
  const [active, setActive] = useState(0)

  useEffect(() => {
    return progress.on('change', (v) => {
      // compute active node
      const idx = Math.min(NODES.length - 1, Math.floor(v * NODES.length + 0.02))
      setActive(idx)
    })
  }, [progress])

  const goTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2.4, duration: 0.8 }}
      className="fixed left-4 md:left-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-start gap-0 select-none"
    >
      <div className="flex items-center gap-2 mb-3">
        <div className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
        <span className="text-[10px] tracking-[0.25em] text-dim font-mono uppercase">System Map</span>
      </div>
      <div className="relative pl-3">
        {/* vertical line */}
        <div className="absolute left-[7px] top-1 bottom-1 w-px bg-border" />
        <motion.div
          style={{ scaleY: progress, originY: 0 }}
          className="absolute left-[7px] top-1 w-px h-[calc(100%-8px)] bg-accent origin-top"
        />
        <div className="flex flex-col gap-[14px]">
          {NODES.map((n, i) => {
            const isActive = i === active
            const isDone = i < active
            return (
              <button
                key={n.id}
                onClick={() => goTo(n.id)}
                className="group flex items-center gap-3 text-left"
              >
                <div className="relative">
                  <motion.div
                    animate={{
                      scale: isActive ? 1.2 : 1,
                      backgroundColor: isActive ? '#00e5a0' : isDone ? 'rgba(0,229,160,0.5)' : 'rgba(255,255,255,0.2)',
                      boxShadow: isActive ? '0 0 14px rgba(0,229,160,0.8)' : 'none',
                    }}
                    transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                    className="h-[9px] w-[9px] rounded-full border border-black/50"
                  />
                  {isActive && (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0.6 }}
                      animate={{ scale: 2.2, opacity: 0 }}
                      transition={{ repeat: Infinity, duration: 1.6 }}
                      className="absolute inset-0 rounded-full bg-accent"
                    />
                  )}
                </div>
                <span
                  className={`text-[10px] font-mono tracking-[0.2em] transition-all duration-300 ${
                    isActive ? 'text-ink opacity-100 translate-x-0' : 'text-dim opacity-60 -translate-x-1 group-hover:opacity-100 group-hover:text-ink'
                  }`}
                >
                  <span className="text-[9px] text-muted mr-1">{n.num}</span>
                  {n.label}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}
