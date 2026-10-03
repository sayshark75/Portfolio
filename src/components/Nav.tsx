import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Terminal } from 'lucide-react'
import { PERSON } from '@/data/portfolio'
import { useEffect, useState } from 'react'

export default function Nav() {
  const [time, setTime] = useState('')
  useEffect(() => {
    const update = () => {
      const d = new Date()
      setTime(
        d.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
      )
    }
    update()
    const i = setInterval(update, 1000)
    return () => clearInterval(i)
  }, [])

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="fixed top-0 left-0 right-0 z-40 px-4 md:px-8 py-4 flex items-center justify-between mix-blend-difference"
    >
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 text-ink font-mono text-sm">
          <Terminal size={14} className="text-accent" />
          <span className="font-bold tracking-widest">
            {PERSON.first[0]}.{PERSON.last}
          </span>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-6 font-mono text-[11px] tracking-[0.25em] text-ink/80 uppercase">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          <span>System Online</span>
        </div>
        <div className="text-ink/50">{time} UTC</div>
      </div>

      <div className="flex items-center gap-3">
        <a href={PERSON.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-ink/70 hover:text-accent transition-colors">
          <Github size={16} />
        </a>
        <a href={PERSON.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-ink/70 hover:text-accent transition-colors">
          <Linkedin size={16} />
        </a>
        <a href={`mailto:${PERSON.email}`} aria-label="Email" className="text-ink/70 hover:text-accent transition-colors">
          <Mail size={16} />
        </a>
      </div>
    </motion.header>
  )
}
