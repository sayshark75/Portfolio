import Reveal from '@/components/Reveal'
import MagneticButton from '@/components/MagneticButton'
import { PERSON } from '@/data/portfolio'
import { Download, Github, Linkedin, Mail } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 md:py-40 px-6 md:px-10">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-accent/5 pointer-events-none" />
      <div className="relative max-w-3xl mx-auto text-center">
        <Reveal>
          <div className="font-mono text-xs tracking-widest uppercase text-accent mb-6">
            <span className="text-muted">07 /</span> Contact
          </div>
          <h2 className="font-sans font-bold text-4xl md:text-6xl lg:text-7xl tracking-tight leading-[1.05] text-balance">
            Let's build something <span className="text-accent">that matters.</span>
          </h2>
          <p className="mt-6 text-lg text-dim leading-relaxed max-w-xl mx-auto">
            Have a product problem you think I can help with? I'm always happy to talk — whether it's a
            role, a freelance project, or just a good engineering conversation.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <MagneticButton href={`mailto:${PERSON.email}`} icon={<Mail size={14} />}>
              Email me
            </MagneticButton>
            <a
              href={PERSON.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-line-strong text-ink hover:border-accent hover:text-accent transition-colors font-mono text-xs tracking-wider uppercase"
            >
              <Linkedin size={14} /> LinkedIn
            </a>
            <a
              href={PERSON.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-line-strong text-ink hover:border-accent hover:text-accent transition-colors font-mono text-xs tracking-wider uppercase"
            >
              <Github size={14} /> GitHub
            </a>
            <a
              href={PERSON.resumeUrl}
              className="inline-flex items-center gap-2 px-6 py-3 text-dim hover:text-ink transition-colors font-mono text-xs tracking-wider uppercase"
            >
              <Download size={14} /> Resume
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-20 pt-8 border-t border-line flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-muted">
            <span>© {new Date().getFullYear()} {PERSON.name}</span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              {PERSON.email}
            </span>
            <span>Built from first principles.</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
