import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import { PERSON } from '@/data/portfolio'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg/80 backdrop-blur-md border-b border-line' : 'bg-transparent'
      }`}
    >
      <div className="max-w-content mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-mono text-sm">
          <span className="h-2 w-2 rounded-full bg-accent" />
          <span className="font-semibold tracking-wide">{PERSON.name}</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 font-mono text-xs tracking-wider uppercase text-dim">
          <a href="#about" className="hover:text-ink transition-colors">About</a>
          <a href="#experience" className="hover:text-ink transition-colors">Experience</a>
          <a href="#ai" className="hover:text-ink transition-colors">AI</a>
          <a href="#projects" className="hover:text-ink transition-colors">Projects</a>
          <a href="#skills" className="hover:text-ink transition-colors">Skills</a>
          <a href="#contact" className="hover:text-ink transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-4 text-dim">
          <a href={PERSON.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-ink transition-colors"><Github size={16} /></a>
          <a href={PERSON.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-ink transition-colors"><Linkedin size={16} /></a>
          <a href={`mailto:${PERSON.email}`} aria-label="Email" className="hover:text-ink transition-colors"><Mail size={16} /></a>
        </div>
      </div>
    </motion.header>
  )
}
