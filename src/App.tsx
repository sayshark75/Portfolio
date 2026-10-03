import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Nav from '@/components/Nav'
import SystemMap from '@/components/SystemMap'
import DepthIndicator from '@/components/DepthIndicator'
import { useCursor } from '@/hooks/useCursor'
import { useScrollVelocity } from '@/hooks/useScrollVelocity'
import Hero from '@/sections/Hero'
import Foundation from '@/sections/Foundation'
import Experience from '@/sections/Experience'
import SystemsDepth from '@/sections/SystemsDepth'
import AIEngineering from '@/sections/AIEngineering'
import Debug from '@/sections/Debug'
import Projects from '@/sections/Projects'
import Skills from '@/sections/Skills'
import Philosophy from '@/sections/Philosophy'
import Contact from '@/sections/Contact'

function Loader({ onDone }: { onDone: () => void }) {
  const [lines, setLines] = useState<string[]>([])
  const [exiting, setExiting] = useState(false)
  useEffect(() => {
    const boot = [
      '> boot: sharuk.sys',
      '> loading modules...',
      '  · interface .............. ok',
      '  · application ............ ok',
      '  · backend ................ ok',
      '  · data ................... ok',
      '  · retrieval .............. ok',
      '  · ai ..................... ok',
      '> compiling... OK',
      '> system ready.',
    ]
    let i = 0
    const int = setInterval(() => {
      setLines((prev) => [...prev, boot[i]])
      i++
      if (i >= boot.length) {
        clearInterval(int)
        setTimeout(() => setExiting(true), 500)
        setTimeout(onDone, 1100)
      }
    }, 80)
    return () => clearInterval(int)
  }, [onDone])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: exiting ? 0 : 1 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[200] bg-black flex items-center justify-center p-6"
    >
      <div className="w-full max-w-md font-mono text-xs text-accent/80 leading-relaxed">
        <div className="mb-6 flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
          <span className="tracking-[0.3em]">SYSTEM BOOT</span>
        </div>
        <div className="space-y-1">
          {lines.map((l, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.15 }}
            >
              {l}
            </motion.div>
          ))}
          <div className="caret" />
        </div>
      </div>
    </motion.div>
  )
}

function ScrollHud() {
  const { velocity, progress } = useScrollVelocity()
  const speed = Math.min(1, Math.abs(velocity) * 3)
  return (
    <div className="fixed bottom-4 left-4 md:left-auto md:right-6 z-40 font-mono text-[9px] tracking-widest uppercase text-dim hidden md:flex flex-col items-end gap-1 mix-blend-difference">
      <div className="flex items-center gap-2">
        <span>VELOCITY</span>
        <div className="w-16 h-px bg-border-strong overflow-hidden">
          <motion.div
            className="h-full bg-accent"
            style={{ width: `${speed * 100}%` }}
          />
        </div>
      </div>
      <div>
        PROGRESS {String(Math.round(progress * 100)).padStart(3, '0')}%
      </div>
    </div>
  )
}

export default function App() {
  const [booted, setBooted] = useState(false)
  useCursor()

  return (
    <div className="relative min-h-screen bg-bg text-ink">
      <AnimatePresence>
        {!booted && <Loader onDone={() => setBooted(true)} />}
      </AnimatePresence>

      {booted && (
        <>
          <Nav />
          <SystemMap />
          <DepthIndicator />
          <ScrollHud />
          <main>
            <Hero />
            <Foundation />
            <Experience />
            <SystemsDepth />
            <AIEngineering />
            <Debug />
            <Projects />
            <Skills />
            <Philosophy />
            <Contact />
          </main>
        </>
      )}
    </div>
  )
}
