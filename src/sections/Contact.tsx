import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import MagneticButton from '@/components/MagneticButton'
import { PERSON } from '@/data/portfolio'
import { Download, Github, Linkedin, Mail, Terminal } from 'lucide-react'

export default function Contact() {
  const ref = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end end'] })
  const fadeToBlack = useTransform(scrollYProgress, [0.5, 0.9], [0, 1])
  const simplify = useTransform(scrollYProgress, [0.5, 0.85], [0, 1])

  return (
    <section id="contact" ref={ref} className="relative">
      {/* Build something that matters moment */}
      <div className="relative h-[120vh]">
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <motion.div
            style={{ opacity: fadeToBlack }}
            className="absolute inset-0 bg-black"
          />
          <motion.div
            style={{ opacity: simplify }}
            className="absolute inset-0 flex items-center justify-center px-6"
          >
            <div className="text-center">
              <div className="font-mono text-[11px] tracking-[0.3em] text-accent mb-8">
                {'// SYSTEM CONVERGED'}
              </div>
              <h2 className="font-display font-black tracking-tighter text-5xl md:text-8xl lg:text-9xl leading-[0.9] text-ink">
                BUILD SOMETHING
                <br />
                THAT <span className="text-accent">MATTERS.</span>
              </h2>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact */}
      <div className="relative py-32 px-6 md:px-10 bg-black">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="flex items-center gap-2 font-mono text-[11px] tracking-[0.3em] text-accent mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              READY
            </div>

            <h2 className="font-display font-black tracking-tighter text-5xl md:text-7xl lg:text-8xl leading-[0.9]">
              SYSTEM
              <br />
              <span className="text-accent">READY.</span>
            </h2>

            <p className="mt-8 max-w-2xl text-xl md:text-2xl text-ink/70 leading-snug">
              Have a difficult product problem?
              <br />
              Let's understand the system first.
            </p>

            <div className="mt-12 grid md:grid-cols-2 gap-4 max-w-2xl">
              <MagneticButton href={`mailto:${PERSON.email}`} icon={<Mail size={14} />}>
                Email Sharuk
              </MagneticButton>
              <MagneticButton variant="secondary" href={PERSON.linkedin} icon={<Linkedin size={14} />}>
                LinkedIn
              </MagneticButton>
              <MagneticButton variant="secondary" href={PERSON.github} icon={<Github size={14} />}>
                GitHub
              </MagneticButton>
              <MagneticButton variant="secondary" href={PERSON.resumeUrl} icon={<Download size={14} />}>
                Download Resume
              </MagneticButton>
            </div>

            <div className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row md:items-end md:justify-between gap-4 font-mono text-[11px] tracking-widest text-dim">
              <div className="flex items-center gap-2">
                <Terminal size={12} className="text-accent" />
                <span>SHARUK.SYS // v2.0.0</span>
              </div>
              <div className="flex flex-col md:items-end gap-1">
                <span>{PERSON.email}</span>
                <span>© {new Date().getFullYear()} {PERSON.name}. Built from first principles.</span>
              </div>
            </div>

            <div className="mt-12 text-center font-mono text-[10px] tracking-widest text-muted">
              {'/* END OF TRANSMISSION */'}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
