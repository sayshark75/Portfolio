import { motion } from 'framer-motion'
import { ReactNode } from 'react'

type Props = {
  number: string
  label: string
  children?: ReactNode
  className?: string
}

export default function SectionLabel({ number, label, children, className = '' }: Props) {
  return (
    <div className={`flex items-start gap-4 mb-8 ${className}`}>
      <div className="flex flex-col items-center pt-1">
        <span className="font-mono text-[11px] tracking-widest text-accent">{number}</span>
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: 40 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-px bg-border-strong mt-2"
        />
      </div>
      <div>
        <h2 className="font-mono text-xs tracking-[0.3em] text-dim uppercase">
          {'// '}
          {label}
        </h2>
        {children}
      </div>
    </div>
  )
}
