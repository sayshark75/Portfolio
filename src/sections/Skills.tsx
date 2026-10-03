import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import SectionLabel from '@/components/SectionLabel'
import { CONSTELLATION } from '@/data/portfolio'

const LAYER_COLORS: Record<string, string> = {
  frontend: '#ffb347',
  backend: '#00e5a0',
  ai: '#7c5cff',
  infra: '#3da9ff',
  foundations: '#ff6b3d',
}

export default function Skills() {
  const [hovered, setHovered] = useState<string | null>(null)
  const [active, setActive] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const smx = useSpring(mx, { stiffness: 60, damping: 20 })
  const smy = useSpring(my, { stiffness: 60, damping: 20 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      mx.set(((e.clientX - rect.left) / rect.width - 0.5) * 2)
      my.set(((e.clientY - rect.top) / rect.height - 0.5) * 2)
    }
    const el = containerRef.current
    el?.addEventListener('mousemove', onMove)
    return () => el?.removeEventListener('mousemove', onMove)
  }, [mx, my])

  // Determine related nodes
  const connectedSet = new Set<string>()
  if (hovered || active) {
    const center = hovered || active
    if (center) {
      connectedSet.add(center)
      const node = CONSTELLATION.find((n) => n.id === center)
      if (node) {
        node.connections.forEach((c) => connectedSet.add(c))
        // add reverse connections
        CONSTELLATION.filter((n) => n.connections.includes(center)).forEach((n) => connectedSet.add(n.id))
      }
    }
  }
  const anyHover = !!hovered || !!active

  return (
    <section id="skills" className="relative py-32 px-6 md:px-10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <SectionLabel number="07" label="TECHNICAL CONSTELLATION">
          <h2 className="mt-3 font-display font-black tracking-tighter text-4xl md:text-6xl lg:text-7xl leading-[0.9]">
            Skills map to <span className="text-accent">relationships,</span>
            <br />
            not lists.
          </h2>
          <p className="mt-4 max-w-2xl text-ink/60">
            Hover a node to illuminate how it connects. A stack isn't a bag of buzzwords — it's a system.
          </p>
        </SectionLabel>

        <div
          ref={containerRef}
          className="relative mt-12 aspect-[4/5] md:aspect-[16/10] w-full border border-border bg-panel/30 overflow-hidden"
        >
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="absolute top-2 left-3 font-mono text-[10px] tracking-widest text-dim uppercase">
            [ CONSTELLATION.MAP ]
          </div>
          <div className="absolute top-2 right-3 font-mono text-[10px] tracking-widest text-dim">
            {hovered ? `FOCUS: ${hovered}` : active ? `LOCKED: ${active}` : 'IDLE'}
          </div>

          <svg
            viewBox="0 0 100 110"
            preserveAspectRatio="xMidYMid meet"
            className="w-full h-full relative"
          >
            <defs>
              {Object.entries(LAYER_COLORS).map(([k, c]) => (
                <radialGradient key={k} id={`glow-${k}`} cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor={c} stopOpacity="0.3" />
                  <stop offset="100%" stopColor={c} stopOpacity="0" />
                </radialGradient>
              ))}
            </defs>

            {/* Connection lines */}
            {CONSTELLATION.map((n) =>
              n.connections.map((cid) => {
                const target = CONSTELLATION.find((c) => c.id === cid)
                if (!target) return null
                const isHighlighted = connectedSet.has(n.id) && connectedSet.has(cid)
                return (
                  <line
                    key={`${n.id}-${cid}`}
                    x1={n.x}
                    y1={n.y}
                    x2={target.x}
                    y2={target.y}
                    stroke={LAYER_COLORS[n.layer]}
                    strokeWidth={isHighlighted ? 0.3 : 0.12}
                    strokeOpacity={anyHover ? (isHighlighted ? 0.8 : 0.06) : 0.22}
                    style={{ transition: 'all 0.3s ease' }}
                  />
                )
              })
            )}

            {/* Data pulses on highlighted edges */}
            {anyHover &&
              CONSTELLATION.map((n) =>
                n.connections.map((cid, i) => {
                  const target = CONSTELLATION.find((c) => c.id === cid)
                  if (!target) return null
                  const isHighlighted = connectedSet.has(n.id) && connectedSet.has(cid)
                  if (!isHighlighted) return null
                  return (
                    <motion.circle
                      key={`p-${n.id}-${cid}`}
                      r="0.5"
                      fill={LAYER_COLORS[n.layer]}
                      initial={{ cx: n.x, cy: n.y }}
                      animate={{ cx: target.x, cy: target.y }}
                      transition={{ duration: 1.5 + i * 0.2, repeat: Infinity, ease: 'linear', repeatType: 'loop' }}
                    />
                  )
                })
              )}

            {/* Nodes */}
            {CONSTELLATION.map((n) => {
              const color = LAYER_COLORS[n.layer]
              const isActive = connectedSet.has(n.id) || !anyHover
              const isCenter = n.id === hovered || n.id === active
              return (
                <g
                  key={n.id}
                  onMouseEnter={() => setHovered(n.id)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => setActive(active === n.id ? null : n.id)}
                  style={{ cursor: 'pointer' }}
                >
                  {isCenter && (
                    <circle cx={n.x} cy={n.y} r="4" fill={`url(#glow-${n.layer})`} />
                  )}
                  <circle
                    cx={n.x}
                    cy={n.y}
                    r={isCenter ? 1.3 : 0.8}
                    fill={color}
                    opacity={isActive ? 1 : 0.2}
                    style={{ transition: 'all 0.25s ease' }}
                  />
                  <text
                    x={n.x}
                    y={n.y - 2}
                    textAnchor="middle"
                    fontFamily="JetBrains Mono, monospace"
                    fontSize={isCenter ? 2.2 : 1.6}
                    fontWeight={isCenter ? 700 : 500}
                    fill={isActive ? color : 'rgba(255,255,255,0.25)'}
                    style={{ transition: 'all 0.25s ease', pointerEvents: 'none' }}
                  >
                    {n.id}
                  </text>
                </g>
              )
            })}
          </svg>

          {/* Layer legend */}
          <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[10px] tracking-widest uppercase">
            {Object.entries(LAYER_COLORS).map(([k, c]) => (
              <div key={k} className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: c }} />
                <span className="text-dim">{k}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Layered skill list */}
        <div className="mt-16 grid md:grid-cols-5 gap-4">
          {[
            { label: 'INTERFACE', color: '#ffb347', items: ['React', 'Next.js', 'TypeScript', 'Vite', 'Redux', 'Tailwind', 'Framer Motion'] },
            { label: 'APPLICATION', color: '#00e5a0', items: ['Node.js', 'Express', 'FastAPI', 'Prisma', 'SQL', 'MongoDB', 'WebSockets'] },
            { label: 'AI / DATA', color: '#7c5cff', items: ['Python', 'Pandas', 'RAG', 'LLMs', 'Embeddings', 'Vector DBs', 'Ollama', 'LangChain', 'LangGraph', 'Hugging Face'] },
            { label: 'INFRA', color: '#3da9ff', items: ['AWS', 'Docker', 'Vercel', 'Git', 'Linux'] },
            { label: 'FOUNDATIONS', color: '#ff6b3d', items: ['C++', 'Arduino', 'Raspberry Pi', 'Embedded C', 'Electronics', 'G-code'] },
          ].map((l) => (
            <div key={l.label} className="tech-border p-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-2 w-2" style={{ backgroundColor: l.color }} />
                <span className="font-mono text-[10px] tracking-[0.25em]" style={{ color: l.color }}>
                  {l.label}
                </span>
              </div>
              <ul className="space-y-1.5">
                {l.items.map((i) => (
                  <li key={i} className="font-mono text-xs text-ink/80 flex items-center gap-2">
                    <span className="h-px w-2" style={{ backgroundColor: l.color, opacity: 0.6 }} />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
