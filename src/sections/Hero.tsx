import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { ArrowDownRight, ArrowRight, FileText, Github, Linkedin, Mail } from 'lucide-react'
import HeroDiagram from '@/components/HeroDiagram'
import MagneticButton from '@/components/MagneticButton'
import { PERSON } from '@/data/portfolio'

type Phase = 'idle' | 'deconstruct' | 'layers' | 'rebuild' | 'done'

export default function Hero() {
  const [phase, setPhase] = useState<Phase>('idle')
  const [bootLines, setBootLines] = useState<string[]>([])

  useEffect(() => {
    if (phase !== 'deconstruct' && phase !== 'layers' && phase !== 'rebuild') return
    const lines = [
      '> loading profile.sys ...',
      '> decompiling surface layer ...',
      '> mount: /interface',
      '> mount: /application',
      '> mount: /backend',
      '> mount: /data',
      '> mount: /retrieval',
      '> mount: /ai',
      '> mount: /system',
      '> handshaking components ... OK',
      '> profile loaded.',
    ]
    let i = 0
    const int = setInterval(() => {
      setBootLines((prev) => [...prev, lines[i]])
      i++
      if (i >= lines.length) {
        clearInterval(int)
        setTimeout(() => setPhase('rebuild'), 400)
        setTimeout(() => setPhase('done'), 1200)
      }
    }, 90)
    return () => clearInterval(int)
  }, [phase])

  const initialize = () => {
    if (phase !== 'idle') {
      document.getElementById('foundation')?.scrollIntoView({ behavior: 'smooth' })
      return
    }
    setPhase('deconstruct')
    setTimeout(() => setPhase('layers'), 600)
  }

  const layers = ['FRONTEND', 'BACKEND', 'DATA', 'AI', 'SYSTEMS']

  return (
    <section id="profile" className="relative min-h-screen w-full overflow-hidden">
      {/* background grid */}
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg/40 to-bg" />
      <div className="absolute inset-0 noise" />

      {/* corner markers */}
      <CornerMarkers />

      {/* Hero system diagram */}
      <div className="absolute inset-0">
        <HeroDiagram initialized={phase === 'done'} />
      </div>

      {/* Decompile overlay */}
      <AnimatePresence>
        {(phase === 'deconstruct' || phase === 'layers' || phase === 'rebuild') && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 z-20 bg-black/80 backdrop-blur-sm pointer-events-none"
          >
            {/* Scrambling typography lines */}
            <div className="absolute inset-0 overflow-hidden">
              {Array.from({ length: 14 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ x: '-100%', opacity: 0 }}
                  animate={{ x: '100%', opacity: [0, 0.5, 0] }}
                  transition={{
                    duration: 0.8 + Math.random() * 0.6,
                    delay: i * 0.06,
                    ease: 'linear',
                  }}
                  className="absolute h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent"
                  style={{ top: `${(i / 14) * 100}%`, width: '60%' }}
                />
              ))}
            </div>

            {/* Layer words appear */}
            {phase === 'layers' && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-wrap justify-center gap-x-10 gap-y-6 max-w-4xl px-6">
                  {layers.map((l, i) => (
                    <motion.div
                      key={l}
                      initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ delay: i * 0.12, duration: 0.5 }}
                      className="text-center"
                    >
                      <div
                        className="font-display font-black tracking-tighter text-4xl md:text-6xl"
                        style={{
                          color: ['#ffb347', '#00e5a0', '#3da9ff', '#7c5cff', '#ff6b3d'][i],
                        }}
                      >
                        {l}
                      </div>
                      <div className="mt-1 font-mono text-[10px] tracking-widest text-dim">
                        0{i + 1} / MOUNTED
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* boot log */}
            <div className="absolute bottom-8 left-4 md:left-8 max-w-md font-mono text-[11px] leading-relaxed text-accent/80 space-y-1">
              {bootLines.map((l, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {l}
                </motion.div>
              ))}
              <div className="caret" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-between px-6 md:px-10 pt-28 pb-10">
        {/* Top status */}
        <div className="flex items-start justify-between text-[11px] font-mono tracking-widest uppercase text-dim">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              <span>STATUS: IDLE</span>
            </div>
            <div>LOCATION: PUNE, IN</div>
          </div>
          <div className="hidden md:block text-right space-y-1">
            <div>BUILD: v2.0.0</div>
            <div className="text-accent">AI_CAPABLE: TRUE</div>
          </div>
        </div>

        {/* Center identity */}
        <div className="relative max-w-6xl mx-auto w-full py-10">
          <AnimatePresence mode="wait">
            {phase === 'done' ? (
              <motion.div
                key="done"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
              >
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
                  <div>
                    <div className="font-mono text-xs tracking-[0.3em] text-accent mb-4">
                      {'>> PROFILE INITIALIZED'}
                    </div>
                    <h1 className="font-display font-black leading-[0.82] tracking-tighter text-5xl md:text-8xl lg:text-9xl">
                      <span className="block text-ink">{PERSON.first}</span>
                      <span className="block text-ink">{PERSON.last}</span>
                    </h1>
                    <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-sm text-dim">
                      <span className="text-accent">{PERSON.role}</span>
                      <span className="h-1 w-1 bg-dim rounded-full" />
                      <span>{PERSON.subrole}</span>
                    </div>
                    <p className="mt-6 max-w-xl text-ink/80 text-base md:text-lg leading-relaxed font-sans">
                      {PERSON.tagline}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                      <MagneticButton onClick={() => document.getElementById('foundation')?.scrollIntoView({ behavior: 'smooth' })}>
                        ENTER THE SYSTEM
                      </MagneticButton>
                      <MagneticButton variant="secondary" href={PERSON.resumeUrl} icon={<FileText size={14} />}>
                        VIEW RESUME
                      </MagneticButton>
                    </div>
                  </div>

                  <div className="w-full md:w-80 tech-border p-5">
                    <div className="flex items-center gap-2 text-[10px] font-mono tracking-[0.25em] text-dim uppercase mb-4">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                      Current Focus
                    </div>
                    <div className="space-y-2">
                      {PERSON.focus.map((f, i) => (
                        <motion.div
                          key={f}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + i * 0.08 }}
                          className="flex items-center gap-3 font-mono text-sm"
                        >
                          <span className="text-accent w-4 text-[10px]">0{i + 1}</span>
                          <span className="text-ink">{f}</span>
                          <span className="flex-1 h-px bg-border" />
                          <span className="h-1 w-1 rounded-full bg-accent" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="idle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center md:text-left"
              >
                <div className="font-mono text-xs tracking-[0.4em] text-accent mb-8">
                  {'>'} SOFTWARE ENGINEER
                </div>
                <h1 className="font-display font-black leading-[0.85] tracking-tighter text-6xl md:text-9xl lg:text-[10rem]">
                  <motion.span
                    initial={{ y: 60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
                    className="block text-ink/90"
                  >
                    {PERSON.first}
                  </motion.span>
                  <motion.span
                    initial={{ y: 60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.65, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
                    className="block text-ink/90"
                  >
                    {PERSON.last}
                  </motion.span>
                </h1>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 }}
                  className="mt-12 flex flex-col items-center md:items-start gap-6"
                >
                  <div className="font-mono text-[11px] tracking-[0.3em] text-dim uppercase">
                    {PERSON.subrole}
                  </div>
                  <button
                    onClick={initialize}
                    className="group relative inline-flex items-center gap-4 px-8 py-5 border border-border-strong hover:border-accent transition-colors"
                  >
                    <span className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors" />
                    <span className="relative flex items-center gap-3 font-mono text-sm tracking-[0.3em] text-ink">
                      <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                      [ INITIALIZE PROFILE ]
                    </span>
                    <ArrowRight size={16} className="relative text-accent group-hover:translate-x-1 transition-transform" />
                  </button>
                  <div className="flex items-center gap-6 text-dim">
                    <a href={PERSON.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="GitHub"><Github size={16} /></a>
                    <a href={PERSON.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="LinkedIn"><Linkedin size={16} /></a>
                    <a href={`mailto:${PERSON.email}`} className="hover:text-accent transition-colors" aria-label="Email"><Mail size={16} /></a>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom scroll indicator */}
        {phase === 'done' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="flex items-end justify-between text-[11px] font-mono tracking-widest uppercase text-dim"
          >
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowDownRight size={14} className="text-accent" />
              </motion.div>
              <span>SCROLL TO ENTER DEPTH</span>
            </div>
            <div className="hidden md:block text-right font-mono text-[10px] text-dim space-y-1">
              <div>SURFACE · APPLICATION · BACKEND</div>
              <div>DATA · RETRIEVAL · AI · SYSTEM</div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Vignette edges */}
      <div className="pointer-events-none absolute inset-0" style={{
        background: 'radial-gradient(ellipse at center, transparent 40%, rgba(10,10,10,0.6) 100%)',
      }} />
    </section>
  )
}

function CornerMarkers() {
  const cls = 'absolute w-6 h-6 border-accent/40'
  return (
    <>
      <div className={`${cls} top-20 left-4 md:left-8 border-t border-l`} />
      <div className={`${cls} top-20 right-4 md:right-8 border-t border-r`} />
      <div className={`${cls} bottom-6 left-4 md:left-8 border-b border-l`} />
      <div className={`${cls} bottom-6 right-4 md:right-8 border-b border-r`} />
    </>
  )
}
