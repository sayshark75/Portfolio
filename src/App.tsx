import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Nav from '@/components/Nav'
import Hero from '@/sections/Hero'
import About from '@/sections/About'
import Experience from '@/sections/Experience'
import AIEngineering from '@/sections/AIEngineering'
import Projects from '@/sections/Projects'
import Skills from '@/sections/Skills'
import Philosophy from '@/sections/Philosophy'
import Contact from '@/sections/Contact'

function Loader({ onDone }: { onDone: () => void }) {
  const [show, setShow] = useState(true)
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 500)
    const t2 = setTimeout(onDone, 900)
    return () => {
      clearTimeout(t)
      clearTimeout(t2)
    }
  }, [onDone])
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[200] bg-bg flex items-center justify-center"
        >
          <div className="font-mono text-xs tracking-widest text-accent">LOADING…</div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function App() {
  const [booted, setBooted] = useState(false)
  return (
    <div className="relative min-h-screen bg-bg text-ink antialiased selection:bg-accent selection:text-bg">
      <AnimatePresence>{!booted && <Loader onDone={() => setBooted(true)} />}</AnimatePresence>
      {booted && (
        <>
          <Nav />
          <main>
            <Hero />
            <About />
            <Experience />
            <AIEngineering />
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
