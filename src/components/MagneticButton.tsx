import { motion, useMotionValue, useSpring } from 'framer-motion'
import { ReactNode, useRef } from 'react'

type Props = {
  children: ReactNode
  href?: string
  className?: string
  icon?: ReactNode
}

export default function MagneticButton({ children, href, className = '', icon }: Props) {
  const ref = useRef<HTMLAnchorElement | null>(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 200, damping: 20 })
  const sy = useSpring(my, { stiffness: 200, damping: 20 })

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    mx.set((e.clientX - rect.left - rect.width / 2) * 0.2)
    my.set((e.clientY - rect.top - rect.height / 2) * 0.2)
  }
  const onLeave = () => {
    mx.set(0)
    my.set(0)
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      target={href && href.startsWith('http') ? '_blank' : undefined}
      rel={href && href.startsWith('http') ? 'noopener noreferrer' : undefined}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      className={`group inline-flex items-center gap-2 px-6 py-3 bg-accent text-bg font-medium hover:bg-accent/90 transition-colors font-mono text-xs tracking-wider uppercase ${className}`}
    >
      {icon}
      {children}
    </motion.a>
  )
}
