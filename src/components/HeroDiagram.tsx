import { motion, useMotionValue, useSpring, useTransform, MotionValue } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { useScrollVelocity } from '@/hooks/useScrollVelocity'

const NODES = [
  { id: 'core', label: 'SHARUK', x: 50, y: 50, primary: true, color: '#00e5a0' },
  { id: 'fe', label: 'FRONTEND', x: 18, y: 22, color: '#ffb347' },
  { id: 'be', label: 'BACKEND', x: 82, y: 22, color: '#00e5a0' },
  { id: 'data', label: 'DATA', x: 82, y: 78, color: '#3da9ff' },
  { id: 'ai', label: 'AI', x: 18, y: 78, color: '#7c5cff' },
]

const LINKS = [
  ['core', 'fe'],
  ['core', 'be'],
  ['core', 'data'],
  ['core', 'ai'],
] as const

function mapParallax(mv: MotionValue<number>, amt: number) {
  return useTransform(mv, (v) => (v - 0.5) * amt)
}

export default function HeroDiagram({ initialized }: { initialized: boolean }) {
  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)
  const smx = useSpring(mx, { stiffness: 80, damping: 20 })
  const smy = useSpring(my, { stiffness: 80, damping: 20 })
  const { velocity } = useScrollVelocity()
  const containerRef = useRef<HTMLDivElement | null>(null)
  const particlesRef = useRef<{ t: number; linkIndex: number; speed: number }[]>(
    Array.from({ length: 14 }, (_, i) => ({ t: Math.random(), linkIndex: i % LINKS.length, speed: 0.15 + Math.random() * 0.2 }))
  )
  const svgRef = useRef<SVGSVGElement | null>(null)
  const rafRef = useRef<number | null>(null)

  // Pre-compute parallax transforms for each node
  const nodeTransforms = NODES.map((n) => {
    const amt = n.primary ? 0 : 2.4
    return { px: mapParallax(smx, amt), py: mapParallax(smy, amt) }
  })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      mx.set((e.clientX - rect.left) / rect.width)
      my.set((e.clientY - rect.top) / rect.height)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [mx, my])

  useEffect(() => {
    const render = () => {
      const svg = svgRef.current
      if (!svg) {
        rafRef.current = requestAnimationFrame(render)
        return
      }
      const w = svg.clientWidth
      const h = svg.clientHeight
      const vel = Math.min(3, Math.abs(velocity * 4))
      particlesRef.current.forEach((p, i) => {
        p.t += (p.speed + vel * 0.15) * 0.008
        if (p.t > 1) p.t = 0
        const circ = svg.querySelector(`[data-particle="${i}"]`) as SVGCircleElement | null
        if (circ) {
          const [a, b] = LINKS[p.linkIndex]
          const na = NODES.find((n) => n.id === a)!
          const nb = NODES.find((n) => n.id === b)!
          const parX = (smx.get() - 0.5) * 6
          const parY = (smy.get() - 0.5) * 6
          const ax = (na.x / 100) * w + parX * (na.primary ? 0 : 1)
          const ay = (na.y / 100) * h + parY * (na.primary ? 0 : 1)
          const bx = (nb.x / 100) * w + parX * (nb.primary ? 0 : 1)
          const by = (nb.y / 100) * h + parY * (nb.primary ? 0 : 1)
          const ease = p.t * p.t * (3 - 2 * p.t)
          const px = ax + (bx - ax) * ease
          const py = ay + (by - ay) * ease
          circ.setAttribute('cx', String(px))
          circ.setAttribute('cy', String(py))
          circ.setAttribute('opacity', String(0.6 + vel * 0.1))
        }
      })
      const linkPaths = svg.querySelectorAll('[data-link]')
      linkPaths.forEach((el, li) => {
        const [a, b] = LINKS[li]
        const na = NODES.find((n) => n.id === a)!
        const nb = NODES.find((n) => n.id === b)!
        const parX = (smx.get() - 0.5) * 14
        const parY = (smy.get() - 0.5) * 14
        const ax = (na.x / 100) * w + parX * (na.primary ? 0 : 1.2)
        const ay = (na.y / 100) * h + parY * (na.primary ? 0 : 1.2)
        const bx = (nb.x / 100) * w + parX * (nb.primary ? 0 : 1.2)
        const by = (nb.y / 100) * h + parY * (nb.primary ? 0 : 1.2)
        const cx = (ax + bx) / 2 + parX * 0.4
        const cy = (ay + by) / 2 + parY * 0.4
        ;(el as SVGPathElement).setAttribute('d', `M ${ax} ${ay} Q ${cx} ${cy} ${bx} ${by}`)
      })
      rafRef.current = requestAnimationFrame(render)
    }
    rafRef.current = requestAnimationFrame(render)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [velocity, smx, smy])

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none">
      <svg ref={svgRef} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" className="w-full h-full" style={{ overflow: 'visible' }}>
        <defs>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00e5a0" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#00e5a0" stopOpacity="0" />
          </radialGradient>
        </defs>

        <motion.circle
          cx="50"
          cy="50"
          r="18"
          fill="url(#coreGlow)"
          initial={{ opacity: 0 }}
          animate={{ opacity: initialized ? 1 : 0 }}
          transition={{ duration: 1.2, delay: 1.2 }}
        />

        {LINKS.map(([a, b], i) => {
          const na = NODES.find((n) => n.id === a)!
          const nb = NODES.find((n) => n.id === b)!
          const mxPt = (na.x + nb.x) / 2
          const myPt = (na.y + nb.y) / 2
          const d = `M ${na.x} ${na.y} Q ${mxPt} ${myPt} ${nb.x} ${nb.y}`
          return (
            <g key={`${a}-${b}`}>
              <motion.path
                data-link
                d={d}
                stroke={nb.color}
                strokeOpacity="0.15"
                strokeWidth="0.15"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: initialized ? 1 : 0, opacity: initialized ? 1 : 0 }}
                transition={{ duration: 1, delay: 0.9 + i * 0.12, ease: 'easeOut' }}
              />
              <motion.path
                d={d}
                stroke={nb.color}
                strokeOpacity="0.6"
                strokeWidth="0.12"
                fill="none"
                strokeDasharray="0.8 2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: initialized ? 1 : 0, opacity: initialized ? 0.8 : 0 }}
                transition={{ duration: 1.4, delay: 1.2 + i * 0.12, ease: 'easeOut' }}
              />
            </g>
          )
        })}

        {particlesRef.current.map((_, i) => {
          const linkIdx = i % LINKS.length
          const nb = NODES.find((n) => n.id === LINKS[linkIdx][1])!
          return (
            <circle
              key={i}
              data-particle={i}
              r="0.45"
              fill={nb.color}
              cx="0"
              cy="0"
              opacity="0"
            />
          )
        })}

        {NODES.map((n, i) => {
          const t = nodeTransforms[i]
          return (
            <motion.g
              key={n.id}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: initialized ? 1 : 0, scale: initialized ? 1 : 0 }}
              transition={{
                type: 'spring',
                stiffness: 120,
                damping: 12,
                delay: n.primary ? 1.5 : 0.9 + i * 0.1,
              }}
              style={{ x: t.px, y: t.py }}
            >
              {n.primary ? (
                <>
                  <circle cx={n.x} cy={n.y} r="5" fill={n.color} opacity="0.08" />
                  <circle cx={n.x} cy={n.y} r="2.2" fill={n.color} opacity="0.2" />
                  <circle cx={n.x} cy={n.y} r="1.1" fill={n.color} />
                  <circle cx={n.x} cy={n.y} r="0.4" fill="#0a0a0a" />
                </>
              ) : (
                <>
                  <circle cx={n.x} cy={n.y} r="2" fill={n.color} opacity="0.1" />
                  <circle cx={n.x} cy={n.y} r="0.7" fill={n.color} />
                </>
              )}
              <text
                x={n.x}
                y={n.primary ? n.y + 8.5 : n.y + (n.y > 50 ? 4 : -3)}
                textAnchor="middle"
                fill={n.color}
                fontFamily="JetBrains Mono, monospace"
                fontSize={n.primary ? '2.4' : '1.5'}
                fontWeight="600"
                letterSpacing="0.1"
                opacity={n.primary ? 1 : 0.8}
              >
                {n.label}
              </text>
            </motion.g>
          )
        })}
      </svg>
    </div>
  )
}
