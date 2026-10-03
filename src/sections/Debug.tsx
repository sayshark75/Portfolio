import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import SectionLabel from '@/components/SectionLabel'
import { AlertTriangle, Bug, Terminal } from 'lucide-react'

type Mode = 'ok' | 'failing' | 'trace'

const OK_FLOW = [
  { id: 'client', label: 'CLIENT', color: '#ffb347' },
  { id: 'api', label: 'API', color: '#00e5a0' },
  { id: 'svc', label: 'SERVICE', color: '#00e5a0' },
  { id: 'db', label: 'DATABASE', color: '#3da9ff' },
  { id: 'ai', label: 'AI', color: '#7c5cff' },
]

const FAIL_FLOW = [
  { id: 'bad-data', label: 'BAD DATA', color: '#ff6b3d', note: 'documents not parsed correctly' },
  { id: 'bad-ctx', label: 'BAD CONTEXT', color: '#ff6b3d', note: 'chunks are wrong size / stale' },
  { id: 'bad-ret', label: 'BAD RETRIEVAL', color: '#ff6b3d', note: 'irrelevant chunks hit top-K' },
  { id: 'bad-answer', label: 'BAD ANSWER', color: '#ff3b3b', note: 'confident hallucination' },
]

const TRACE = [
  { step: '0x01', layer: 'INGESTION', finding: 'PDF tables skipped during parsing → chunks truncated', severity: 'HIGH' },
  { step: '0x02', layer: 'CHUNKING', finding: 'Fixed 512-token chunks without semantic boundaries', severity: 'MED' },
  { step: '0x03', layer: 'EMBEDDINGS', finding: 'Embedding model mismatch for code-heavy documents', severity: 'MED' },
  { step: '0x04', layer: 'RETRIEVAL', finding: 'Top-k too high; no MMR or rerank', severity: 'HIGH' },
  { step: '0x05', layer: 'PROMPT', finding: 'No grounding instruction; no citation enforcement', severity: 'LOW' },
  { step: '0x06', layer: 'EVAL', finding: 'No eval set — failures invisible until user reports them', severity: 'HIGH' },
]

export default function Debug() {
  const [mode, setMode] = useState<Mode>('ok')
  const [traceIdx, setTraceIdx] = useState(0)
  const [logs, setLogs] = useState<string[]>([
    '$ system.run()',
    '> status: OPERATIONAL',
  ])

  useEffect(() => {
    if (mode === 'failing') {
      setLogs([
        '$ system.run()',
        '> warn: retrieval latency p95 > 1200ms',
        '> warn: chunk quality index 0.23',
        '> ERROR: RetrievalFailure — relevant doc not in top-K',
        '> ERROR: groundedness_check FAILED',
        '> status: DEGRADED',
      ])
    } else if (mode === 'trace') {
      let i = 0
      setTraceIdx(0)
      const int = setInterval(() => {
        i++
        setTraceIdx((v) => Math.min(v + 1, TRACE.length - 1))
        if (i >= TRACE.length) clearInterval(int)
      }, 600)
      setLogs([
        '$ trace --deep --from=retrieval',
        '> attaching tracer to pipeline...',
        '> following failure upstream...',
      ])
      return () => clearInterval(int)
    } else {
      setLogs(['$ system.run()', '> status: OPERATIONAL'])
      setTraceIdx(0)
    }
  }, [mode])

  return (
    <section id="mess" className="relative py-32 px-6 md:px-10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <SectionLabel number="05" label="WHEN THE SYSTEM BREAKS">
          <h2 className="mt-3 font-display font-black tracking-tighter text-4xl md:text-6xl lg:text-7xl leading-[0.9]">
            AI gets interesting
            <br />
            when it gets <span className="text-warn">messy.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-ink/70 leading-relaxed">
            Failures rarely announce where they came from. The job is to trace them through the
            architecture — data, context, retrieval, model, output — and fix the system, not just the symptom.
          </p>
        </SectionLabel>

        <div className="mt-12 grid md:grid-cols-[1.2fr_1fr] gap-6">
          {/* Flow visualization */}
          <div className="tech-border p-6 min-h-[420px] relative overflow-hidden">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.25em] uppercase">
                <span
                  className="h-2 w-2 rounded-full animate-pulse"
                  style={{
                    backgroundColor: mode === 'ok' ? '#00e5a0' : mode === 'failing' ? '#ff6b3d' : '#7c5cff',
                  }}
                />
                <span className="text-dim">Mode:</span>
                <span className="text-ink">
                  {mode === 'ok' ? 'NOMINAL' : mode === 'failing' ? 'RETRIEVAL FAILURE' : 'DEEP TRACE'}
                </span>
              </div>
              <div className="flex gap-2">
                <button onClick={() => setMode('ok')} className="text-[10px] font-mono tracking-widest px-2 py-1 border border-border hover:border-accent hover:text-accent">RESET</button>
                <button onClick={() => setMode('failing')} className="text-[10px] font-mono tracking-widest px-2 py-1 border border-border hover:border-warn hover:text-warn">INJECT FAILURE</button>
                <button onClick={() => setMode('trace')} className="text-[10px] font-mono tracking-widest px-2 py-1 border border-border hover:border-ai hover:text-ai" data-cursor="hover">TRACE THE PROBLEM</button>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {mode === 'ok' && <FlowChart key="ok" nodes={OK_FLOW} ok />}
              {mode === 'failing' && <FlowChart key="fail" nodes={FAIL_FLOW} error />}
              {mode === 'trace' && <TraceView traceIdx={traceIdx} />}
            </AnimatePresence>
          </div>

          {/* Console */}
          <div className="tech-border bg-black/80 p-5 font-mono text-[11px] leading-relaxed text-ink/80 relative overflow-hidden min-h-[220px] md:min-h-[420px]">
            <div className="flex items-center gap-1.5 mb-3 pb-2 border-b border-border">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
              <span className="ml-3 text-[10px] tracking-widest text-dim">debug.sys ~ bash</span>
            </div>
            <div className="space-y-1">
              {logs.map((l, i) => {
                const color = l.includes('ERROR') ? 'text-red-400' : l.includes('warn') ? 'text-yellow-400' : l.startsWith('$') ? 'text-accent' : 'text-ink/70'
                return (
                  <motion.div
                    key={i + l}
                    initial={{ opacity: 0, x: -4 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={color}
                  >
                    {l}
                  </motion.div>
                )
              })}
              {mode === 'trace' && traceIdx < TRACE.length && (
                <>
                  {TRACE.slice(0, traceIdx + 1).map((t, i) => (
                    <motion.div
                      key={t.step + i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-ai/80"
                    >
                      {'>'} {t.step} · {t.layer}: {t.finding} [{t.severity}]
                    </motion.div>
                  ))}
                </>
              )}
              <div className="caret text-accent" />
            </div>
          </div>
        </div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >
          <div className="flex items-start gap-4 max-w-3xl">
            <Bug className="text-accent mt-1 flex-shrink-0" size={22} />
            <div>
              <p className="font-display text-2xl md:text-3xl leading-tight tracking-tight">
                Reliable AI is an <span className="text-accent">engineering problem.</span>
              </p>
              <p className="mt-4 text-ink/70 leading-relaxed">
                The models aren't the hard part. The hard part is the data coming in, the context being
                retrieved, the eval that tells you when it breaks, and the engineering discipline to fix
                it at the layer where it actually broke.
              </p>
              <p className="mt-4 text-dim text-sm font-mono">
                {'/* Conceptual demonstration. Not a production incident claim. */'}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function FlowChart({ nodes, ok, error }: { nodes: { id: string; label: string; color: string; note?: string }[]; ok?: boolean; error?: boolean }) {
  return (
    <div className="relative h-[320px] flex flex-col justify-center">
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="errGrad" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#ff6b3d" />
            <stop offset="1" stopColor="#ff3b3b" />
          </linearGradient>
        </defs>
        {nodes.slice(0, -1).map((n, i) => {
          const next = nodes[i + 1]
          const y1 = 10 + (i / (nodes.length - 1)) * 80
          const y2 = 10 + ((i + 1) / (nodes.length - 1)) * 80
          return (
            <g key={n.id}>
              <motion.line
                x1="50"
                y1={y1 + 8}
                x2="50"
                y2={y2 - 8}
                stroke={error ? 'url(#errGrad)' : next.color}
                strokeWidth="0.6"
                strokeOpacity="0.6"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                style={{ pathLength: 1 } as any}
              />
              {error && (
                <motion.circle
                  r="0.8"
                  fill="#ff6b3d"
                  initial={{ cy: y1 + 8, cx: 50 }}
                  animate={{ cy: y2 - 8 }}
                  transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
                />
              )}
              {ok && (
                <motion.circle
                  r="0.6"
                  fill={next.color}
                  initial={{ cy: y1 + 8, cx: 50 }}
                  animate={{ cy: y2 - 8 }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                />
              )}
            </g>
          )
        })}
      </svg>

      <div className="relative flex flex-col items-center gap-0 py-2">
        {nodes.map((n, i) => (
          <motion.div
            key={n.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.15, type: 'spring', stiffness: 200 }}
            className="flex items-center gap-3 my-1"
          >
            <div
              className="px-4 py-1.5 font-mono text-sm tracking-wider border"
              style={{
                borderColor: `${n.color}60`,
                backgroundColor: error && i === nodes.length - 1 ? 'rgba(255,59,59,0.1)' : `${n.color}10`,
                color: n.color,
                boxShadow: error && i === nodes.length - 1 ? '0 0 30px -4px rgba(255,59,59,0.5)' : `0 0 20px -8px ${n.color}`,
              }}
            >
              {n.label}
            </div>
            {error && n.note && (
              <span className="hidden md:block font-mono text-[10px] text-dim italic">— {n.note}</span>
            )}
            {error && i > 0 && (
              <AlertTriangle size={14} className="text-warn animate-pulse" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function TraceView({ traceIdx }: { traceIdx: number }) {
  return (
    <div className="relative h-[320px] overflow-hidden">
      <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 py-2 font-mono text-[11px]">
        {TRACE.map((t, i) => {
          const active = i <= traceIdx
          const color = t.severity === 'HIGH' ? '#ff3b3b' : t.severity === 'MED' ? '#ff6b3d' : '#ffb347'
          return (
            <motion.div
              key={t.step}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: active ? 1 : 0.2, x: 0 }}
              className="contents"
            >
              <div className="flex items-start gap-2 pt-0.5">
                <span className={`${active ? 'text-ai' : 'text-muted'}`}>{t.step}</span>
                <span className="h-px w-3 mt-2.5" style={{ backgroundColor: active ? color : 'rgba(255,255,255,0.1)' }} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-ink">{t.layer}</span>
                  <span className="text-[9px] px-1 py-0.5 border" style={{ borderColor: color, color }}>
                    {t.severity}
                  </span>
                </div>
                <div className={`mt-0.5 leading-relaxed ${active ? 'text-ink/70' : 'text-muted'}`}>
                  {t.finding}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
      {traceIdx >= TRACE.length - 1 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-3 p-3 border border-accent/40 bg-accent/5"
        >
          <div className="flex items-center gap-2 text-accent font-mono text-[11px] tracking-widest">
            <Terminal size={12} />
            ROOT CAUSE IDENTIFIED
          </div>
          <div className="mt-1 text-ink/80 text-xs leading-relaxed">
            Failure originated at ingest/chunk layer, compounded through retrieval. Fix the pipeline
            stages; don't patch the prompt.
          </div>
        </motion.div>
      )}
    </div>
  )
}
