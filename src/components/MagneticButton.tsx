import { motion, useMotionValue, useSpring } from 'framer-motion'
import { ReactNode, useRef } from 'react'

type Props = {
  children: ReactNode
  onClick?: () => void
  href?: string
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
  strength?: number
  icon?: ReactNode
}

export default function MagneticButton({ children, onClick, href, variant = 'primary', className = '', strength = 0.35, icon }: Props) {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 220, damping: 18 })
  const sy = useSpring(my, { stiffness: 220, damping: 18 })

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) * strength
    const y = (e.clientY - rect.top - rect.height / 2) * strength
    mx.set(x)
    my.set(y)
  }
  const onLeave = () => {
    mx.set(0)
    my.set(0)
  }

  const base =
    'group relative inline-flex items-center gap-3 px-6 py-3 font-mono text-sm tracking-wider uppercase transition-colors duration-300 overflow-hidden'
  const styles: Record<string, string> = {
    primary:
      'bg-accent text-black hover:bg-accent/90',
    secondary:
      'border border-border-strong text-ink hover:border-accent hover:text-accent',
    ghost: 'text-dim hover:text-ink',
  }

  const content = (
    <>
      {variant === 'primary' && (
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
      )}
      {variant === 'secondary' && (
        <span className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      )}
      <span className="relative flex items-center gap-2">
        {icon}
        {children}
      </span>
      <span className="relative w-2 h-2">
        <span className="absolute inset-0 bg-current opacity-60 rotate-45 scale-75 group-hover:scale-100 transition-transform" />
      </span>
    </>
  )

  const style = { x: sx, y: sy }

  if (href) {
    return (
      <motion.a
        ref={ref as any}
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={style}
        className={`${base} ${styles[variant]} ${className}`}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      ref={ref as any}
      onClick={onClick}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={style}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {content}
    </motion.button>
  )
}
