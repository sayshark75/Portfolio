import { motion, useInView } from 'framer-motion'
import { ReactNode, useRef } from 'react'

type Props = {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  once?: boolean
}

export default function Reveal({ children, className = '', delay = 0, y = 24, once = true }: Props) {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { amount: 0.2, once })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
