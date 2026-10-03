import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import { useRef } from 'react'
import SectionLabel from '@/components/SectionLabel'
import { SYSTEM_LAYERS } from '@/data/portfolio'

// Each layer has an ASCII-like / SVG architecture
const LAYER_ART: Record<string, React.ReactNode> = {
  surface: (
    <g>
      <rect x="20" y="35" width="60" height="30" fill="none" stroke="#ffb347" strokeOpacity="0.6" />
      <text x="26" y="46" fill="#ffb347" fontFamily="JetBrains Mono" fontSize="4">[ VIEWPORT ]</text>
      <rect x="26" y="50" width="48" height="3" fill="#ffb347" fillOpacity="0.4" />
      <rect x="26" y="56" width="36" height="2" fill="#ffb347" fillOpacity="0.2" />
      <rect x="26" y="60" width="42" height="2" fill="#ffb347" fillOpacity="0.2" />
    </g>
  ),
  application: (
    <g>
      <rect x="15" y="20" width="25" height="20" fill="none" stroke="#ffb347" strokeOpacity="0.5" />
      <text x="18" y="32" fill="#ffb347" fontSize="3" fontFamily="JetBrains Mono">UI</text>
      <rect x="45" y="20" width="25" height="20" fill="none" stroke="#ffb347" strokeOpacity="0.5" />
      <text x="48" y="32" fill="#ffb347" fontSize="3" fontFamily="JetBrains Mono">STATE</text>
      <rect x="75" y="20" width="15" height="20" fill="none" stroke="#ffb347" strokeOpacity="0.5" />
      <text x="78" y="32" fill="#ffb347" fontSize="3" fontFamily="JetBrains Mono">ROUTE</text>
      <rect x="30" y="55" width="40" height="15" fill="none" stroke="#00e5a0" strokeOpacity="0.5" />
      <text x="35" y="64" fill="#00e5a0" fontSize="3" fontFamily="JetBrains Mono">COMPONENTS</text>
      {['M27.5 40 L45 55', 'M57.5 40 L50 55', 'M82.5 40 L55 55'].map((d, i) => (
        <path key={i} d={d} stroke="#00e5a0" strokeOpacity="0.4" strokeWidth="0.3" fill="none" strokeDasharray="1 1" />
      ))}
    </g>
  ),
  backend: (
    <g>
      {[
        { x: 10, label: 'AUTH' },
        { x: 32, label: 'ROUTES' },
        { x: 54, label: 'SERVICES' },
        { x: 76, label: 'QUEUE' },
      ].map((b) => (
        <g key={b.label}>
          <rect x={b.x} y={20} width="18" height="14" fill="none" stroke="#00e5a0" strokeOpacity="0.6" />
          <text x={b.x + 2} y={29} fill="#00e5a0" fontSize="3" fontFamily="JetBrains Mono">{b.label}</text>
        </g>
      ))}
      <rect x="20" y="55" width="60" height="14" fill="none" stroke="#3da9ff" strokeOpacity="0.6" />
      <text x="25" y="64" fill="#3da9ff" fontSize="3" fontFamily="JetBrains Mono">[ API GATEWAY ]</text>
      {['M19 34 L30 55', 'M41 34 L40 55', 'M63 34 L55 55', 'M85 34 L70 55'].map((d, i) => (
        <path key={i} d={d} stroke="#00e5a0" strokeOpacity="0.4" strokeWidth="0.3" fill="none" />
      ))}
    </g>
  ),
  data: (
    <g>
      <rect x="20" y="15" width="60" height="10" fill="none" stroke="#3da9ff" strokeOpacity="0.5" />
      <text x="25" y="22" fill="#3da9ff" fontSize="3" fontFamily="JetBrains Mono">STREAMS / QUEUES</text>
      <rect x="15" y="35" width="18" height="20" fill="none" stroke="#3da9ff" strokeOpacity="0.6" />
      <text x="19" y="46" fill="#3da9ff" fontSize="2.5" fontFamily="JetBrains Mono">SQL</text>
      <rect x="41" y="35" width="18" height="20" fill="none" stroke="#3da9ff" strokeOpacity="0.6" />
      <text x="44" y="46" fill="#3da9ff" fontSize="2.5" fontFamily="JetBrains Mono">MONGO</text>
      <rect x="67" y="35" width="18" height="20" fill="none" stroke="#3da9ff" strokeOpacity="0.6" />
      <text x="69" y="46" fill="#3da9ff" fontSize="2.5" fontFamily="JetBrains Mono">REDIS</text>
      <rect x="30" y="68" width="40" height="10" fill="none" stroke="#3da9ff" strokeOpacity="0.4" />
      <text x="34" y="75" fill="#3da9ff" fontSize="3" fontFamily="JetBrains Mono">CACHE / REPLICAS</text>
    </g>
  ),
  retrieval: (
    <g>
      <rect x="10" y="20" width="15" height="12" fill="none" stroke="#7c5cff" strokeOpacity="0.6" />
      <text x="12" y="28" fill="#7c5cff" fontSize="2.5" fontFamily="JetBrains Mono">QUERY</text>
      <rect x="30" y="20" width="18" height="12" fill="none" stroke="#7c5cff" strokeOpacity="0.6" />
      <text x="33" y="28" fill="#7c5cff" fontSize="2.5" fontFamily="JetBrains Mono">EMBED</text>
      <rect x="54" y="20" width="18" height="12" fill="none" stroke="#7c5cff" strokeOpacity="0.6" />
      <text x="56" y="28" fill="#7c5cff" fontSize="2.5" fontFamily="JetBrains Mono">VECTOR</text>
      <rect x="78" y="20" width="12" height="12" fill="none" stroke="#7c5cff" strokeOpacity="0.6" />
      <text x="80" y="28" fill="#7c5cff" fontSize="2.5" fontFamily="JetBrains Mono">KNN</text>
      <rect x="35" y="50" width="30" height="14" fill="none" stroke="#00e5a0" strokeOpacity="0.5" />
      <text x="38" y="59" fill="#00e5a0" fontSize="3" fontFamily="JetBrains Mono">RERANK</text>
      <path d="M17.5 32 Q40 45 50 50" stroke="#7c5cff" strokeOpacity="0.4" strokeWidth="0.3" fill="none" strokeDasharray="1 1" />
      <path d="M39 32 Q45 45 50 50" stroke="#7c5cff" strokeOpacity="0.4" strokeWidth="0.3" fill="none" strokeDasharray="1 1" />
      <path d="M63 32 Q58 45 55 50" stroke="#7c5cff" strokeOpacity="0.4" strokeWidth="0.3" fill="none" strokeDasharray="1 1" />
    </g>
  ),
  ai: (
    <g>
      <rect x="35" y="12" width="30" height="12" fill="none" stroke="#7c5cff" strokeOpacity="0.8" />
      <text x="40" y="20" fill="#7c5cff" fontSize="3" fontFamily="JetBrains Mono">[ MODEL ]</text>
      {[-2, -1, 0, 1, 2].map((o, i) => (
        <circle key={i} cx={50 + o * 6} cy={35} r="1.5" fill="#7c5cff" fillOpacity={0.2 + Math.abs(o) * -0.05 + 0.3} />
      ))}
      {[-1, 0, 1].map((o, i) => (
        <circle key={'n' + i} cx={50 + o * 10} cy={50} r="2" fill="#7c5cff" fillOpacity={0.4} />
      ))}
      <path d="M35 55 L50 65 L65 55" stroke="#7c5cff" strokeOpacity="0.5" strokeWidth="0.3" fill="none" />
      <text x="42" y="75" fill="#7c5cff" fontSize="3" fontFamily="JetBrains Mono">CONTEXT → TOKENS → OUTPUT</text>
    </g>
  ),
  system: (
    <g>
      {/* Full connected architecture */}
      <rect x="5" y="8" width="18" height="10" fill="none" stroke="#ffb347" strokeOpacity="0.5" />
      <text x="7" y="15" fill="#ffb347" fontSize="2.5" fontFamily="JetBrains Mono">CLIENT</text>
      <rect x="28" y="8" width="18" height="10" fill="none" stroke="#00e5a0" strokeOpacity="0.5" />
      <text x="31" y="15" fill="#00e5a0" fontSize="2.5" fontFamily="JetBrains Mono">API</text>
      <rect x="51" y="8" width="18" height="10" fill="none" stroke="#00e5a0" strokeOpacity="0.5" />
      <text x="54" y="15" fill="#00e5a0" fontSize="2.5" fontFamily="JetBrains Mono">SVC</text>
      <rect x="74" y="8" width="18" height="10" fill="none" stroke="#3da9ff" strokeOpacity="0.5" />
      <text x="77" y="15" fill="#3da9ff" fontSize="2.5" fontFamily="JetBrains Mono">DB</text>
      <rect x="40" y="32" width="20" height="10" fill="none" stroke="#7c5cff" strokeOpacity="0.7" />
      <text x="44" y="39" fill="#7c5cff" fontSize="2.5" fontFamily="JetBrains Mono">AI</text>
      <rect x="10" y="55" width="80" height="15" fill="none" stroke="#ffffff" strokeOpacity="0.2" />
      <text x="14" y="64" fill="#e8e8e8" fontSize="3" fontFamily="JetBrains Mono" fillOpacity="0.8">[ OBSERVABILITY · LOGS · TRACING · EVAL ]</text>
      <g strokeWidth="0.3" fill="none" strokeDasharray="1 1">
        <path d="M23 13 L28 13" stroke="#ffb347" strokeOpacity="0.6" />
        <path d="M46 13 L51 13" stroke="#00e5a0" strokeOpacity="0.6" />
        <path d="M69 13 L74 13" stroke="#00e5a0" strokeOpacity="0.6" />
        <path d="M60 18 L50 32" stroke="#7c5cff" strokeOpacity="0.5" />
        <path d="M83 18 L83 55" stroke="#3da9ff" strokeOpacity="0.4" />
        <path d="M14 18 L14 55" stroke="#ffb347" strokeOpacity="0.4" />
      </g>
    </g>
  ),
}

export default function SystemsDepth() {
  const ref = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  return (
    <section id="systems" ref={ref} className="relative py-32 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <SectionLabel number="03" label="SYSTEM DEPTH">
          <h2 className="mt-3 font-display font-black tracking-tighter text-4xl md:text-6xl lg:text-7xl leading-[0.9]">
            I don't just build what users see.
            <br />
            <span className="text-accent">I understand what happens underneath.</span>
          </h2>
        </SectionLabel>

        <div className="mt-16 space-y-16">
          {SYSTEM_LAYERS.map((layer, i) => (
            <LayerRow key={layer.id} layer={layer} index={i} total={SYSTEM_LAYERS.length} scrollYProgress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  )
}

function LayerRow({ layer, index: i, total, scrollYProgress }: { layer: (typeof SYSTEM_LAYERS)[number]; index: number; total: number; scrollYProgress: MotionValue<number> }) {
  const start = i / total
  const end = (i + 1) / total
  const prog = useTransform(scrollYProgress, [start - 0.05, start + 0.15, end - 0.1, end], [0, 1, 1, 0])
  const y = useTransform(prog, [0, 1], [40, 0])
  const scale = useTransform(prog, [0, 1], [0.98, 1])
  const colors: Record<string, string> = {
    surface: '#ffb347',
    application: '#ffb347',
    backend: '#00e5a0',
    data: '#3da9ff',
    retrieval: '#7c5cff',
    ai: '#7c5cff',
    system: '#e8e8e8',
  }
  const c = colors[layer.id]
  return (
    <motion.div
      style={{ opacity: prog, y, scale }}
      className="grid grid-cols-12 gap-6 items-center"
    >
      <div className="col-span-12 md:col-span-5">
        <div className="font-mono text-[10px] tracking-widest text-dim mb-2">
          LAYER {String(i).padStart(2, '0')} / 0{total - 1}
        </div>
        <div className="font-display font-black tracking-tighter text-5xl md:text-7xl" style={{ color: c }}>
          {layer.label}
        </div>
        <div className="mt-3 font-mono text-sm text-dim">{layer.tagline}</div>
      </div>
      <div className="col-span-12 md:col-span-7">
        <div className="relative aspect-[16/8] border border-border tech-border p-4 overflow-hidden">
          <div className="absolute inset-0 grid-bg-fine opacity-40" />
          <svg viewBox="0 0 100 85" className="w-full h-full relative">
            {LAYER_ART[layer.id]}
            {i > 0 && Array.from({ length: 5 }).map((_, k) => (
              <motion.circle
                key={k}
                r="0.6"
                fill={c}
                opacity="0.7"
                initial={{ cx: -5, cy: 15 + k * 14 }}
                animate={{ cx: 105 }}
                transition={{ duration: 3 + k * 0.4, repeat: Infinity, delay: k * 0.5, ease: 'linear' }}
              />
            ))}
          </svg>
          <div className="absolute bottom-2 left-3 font-mono text-[9px] tracking-widest text-dim">
            DEPTH: {layer.label.toUpperCase()}
          </div>
          <div className="absolute top-2 right-3 flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ backgroundColor: c }} />
            <span className="font-mono text-[9px] tracking-widest text-dim">LIVE</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
