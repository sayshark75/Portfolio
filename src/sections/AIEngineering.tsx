import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import { useRef } from 'react'
import SectionLabel from '@/components/SectionLabel'
import { RAG_PIPELINE } from '@/data/portfolio'
import { Brain, Cpu, Database, Workflow } from 'lucide-react'

export default function AIEngineering() {
  const ref = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  // When scroll through first third of section: black box "opens"
  const boxOpen = useTransform(scrollYProgress, [0.05, 0.35], [0, 1])

  return (
    <section id="ai" ref={ref} className="relative py-32 px-6 md:px-10 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute inset-0 bg-gradient-radial from-ai/5 via-transparent to-transparent" style={{
        background: 'radial-gradient(ellipse at 50% 40%, rgba(124,92,255,0.08), transparent 60%)',
      }} />

      <div className="relative max-w-6xl mx-auto">
        <SectionLabel number="04" label="AI ENGINEERING">
          <h2 className="mt-3 font-display font-black tracking-tighter text-4xl md:text-6xl lg:text-7xl leading-[0.9]">
            BEYOND
            <br />
            <span className="text-ai">THE PROMPT.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-ink/70 leading-relaxed">
            AI isn't just about asking a model a question. It's about data, context, retrieval,
            architecture, evaluation and reliability.
          </p>
        </SectionLabel>

        {/* Black box reveal */}
        <div className="relative mt-20 h-[140vh]">
          <div className="sticky top-24 h-auto">
            {/* The "closed" black box */}
            <motion.div
              style={{
                opacity: useTransform(boxOpen, [0, 0.3], [1, 0]),
                scale: useTransform(boxOpen, [0, 0.5], [1, 1.2]),
                filter: useTransform(boxOpen, [0, 0.5], ['blur(0px)', 'blur(8px)']),
              }}
              className="flex flex-col items-center justify-center py-10"
            >
              <div className="flex flex-col items-center gap-2 font-mono text-xs tracking-[0.3em] text-ink/60">
                <span className="text-dim">USER INPUT</span>
                <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                  <ArrowDown color="#7c5cff" />
                </motion.div>
              </div>
              <div className="relative my-4 w-72 md:w-[32rem] h-36 md:h-44 border border-ai/50 bg-black flex items-center justify-center shadow-[0_0_80px_-10px_rgba(124,92,255,0.4)]">
                <div className="absolute inset-0 diagonal-lines opacity-30" />
                <div className="text-center">
                  <div className="text-ai text-4xl md:text-6xl font-display font-black tracking-tight">AI</div>
                  <div className="font-mono text-[10px] tracking-widest text-ink/40 mt-2">[ BLACK BOX ]</div>
                </div>
                <motion.div
                  className="absolute inset-0 border-2 border-ai/40"
                  animate={{ scale: [1, 1.05, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </div>
              <div className="flex flex-col items-center gap-2 font-mono text-xs tracking-[0.3em] text-ink/60">
                <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                  <ArrowDown color="#00e5a0" />
                </motion.div>
                <span className="text-dim">ANSWER</span>
              </div>
              <div className="mt-6 font-mono text-[11px] tracking-widest text-accent animate-pulse">
                [ SCROLL TO DECOMPILE ]
              </div>
            </motion.div>

            {/* The open pipeline */}
            <motion.div
              style={{
                opacity: useTransform(boxOpen, [0.4, 0.8], [0, 1]),
                y: useTransform(boxOpen, [0.4, 0.8], [40, 0]),
              }}
              className="absolute inset-0 top-0"
            >
              <Pipeline scrollProgress={scrollYProgress} />
            </motion.div>
          </div>
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-20%' }}
          transition={{ duration: 0.8 }}
          className="mt-16 max-w-3xl"
        >
          <p className="font-display text-2xl md:text-4xl leading-tight tracking-tight">
            <span className="text-ai">AI is rarely just the model.</span>
          </p>
          <p className="mt-4 text-xl md:text-2xl text-ink/70 leading-snug">
            The engineering <em>around</em> the model determines what the model can actually do.
          </p>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
            {['Python', 'FastAPI', 'Ollama', 'LLMs', 'RAG', 'ChromaDB', 'Embeddings', 'BGE reranking', 'LangChain', 'LangGraph', 'Hugging Face', 'Pydantic', 'Pandas'].map((t, i) => (
              <motion.div
                key={t}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="tech-border px-3 py-2 font-mono text-xs tracking-wider text-ink/80 flex items-center justify-between"
              >
                <span>{t}</span>
                <span className="text-ai/60 text-[10px]">·</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 tech-border p-5">
            <div className="flex items-center gap-2 text-[11px] font-mono tracking-widest text-dim uppercase mb-3">
              <Workflow size={12} className="text-ai" />
              Context
            </div>
            <p className="text-ink/70 leading-relaxed text-sm">
              The RAG pipeline above is <span className="text-accent">personal AI engineering / R&D</span> —
              experiments with local LLMs, embeddings, vector search and document processing. It reflects
              the direction of my engineering work, not production claims.
            </p>
          </div>
        </motion.div>

        {/* Stack icon blocks */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4">
          <IconCard icon={<Brain size={20} />} color="#7c5cff" label="RETRIEVAL" desc="Embeddings, vector search, reranking, grounded context." />
          <IconCard icon={<Workflow size={20} />} color="#00e5a0" label="PIPELINES" desc="Chunking, ingestion, evaluation, observability." />
          <IconCard icon={<Cpu size={20} />} color="#3da9ff" label="LOCAL AI" desc="Ollama, Hugging Face models, offline experimentation." />
        </div>
      </div>
    </section>
  )
}

function ArrowDown({ color }: { color: string }) {
  return (
    <svg width="24" height="48" viewBox="0 0 24 48" fill="none">
      <path d="M12 0 L12 40" stroke={color} strokeWidth="1.5" strokeDasharray="3 3" />
      <path d="M6 34 L12 42 L18 34" stroke={color} strokeWidth="1.5" fill="none" />
    </svg>
  )
}

function IconCard({ icon, color, label, desc }: { icon: React.ReactNode; color: string; label: string; desc: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      className="tech-border p-5"
    >
      <div className="flex items-center gap-2 mb-3" style={{ color }}>
        {icon}
        <span className="font-mono text-[10px] tracking-widest">{label}</span>
      </div>
      <p className="text-sm text-ink/70 leading-relaxed">{desc}</p>
    </motion.div>
  )
}

function Pipeline({ scrollProgress }: { scrollProgress: MotionValue<number> }) {
  return (
    <div className="relative py-4">
      <div className="flex items-center justify-between mb-4 font-mono text-[10px] tracking-widest text-dim uppercase">
        <span>QUESTION</span>
        <span className="text-accent flex items-center gap-1.5">
          <Database size={10} />
          DECOMPILED PIPELINE
        </span>
        <span>ANSWER</span>
      </div>

      <div className="relative">
        {/* Vertical pipeline */}
        <div className="relative mx-auto max-w-2xl">
          {RAG_PIPELINE.map((stage, i) => (
            <PipelineStage key={stage.id} stage={stage} index={i} total={RAG_PIPELINE.length} scrollProgress={scrollProgress} />
          ))}
        </div>
      </div>
    </div>
  )
}

function PipelineStage({ stage, index: i, total, scrollProgress }: { stage: (typeof RAG_PIPELINE)[number]; index: number; total: number; scrollProgress: MotionValue<number> }) {
  const start = 0.4 + (i / total) * 0.55
  const end = start + 0.05
  const active = useTransform(scrollProgress, [start - 0.02, start, end, end + 0.05], [0, 1, 1, 0.4])
  const x = useTransform(active, [0, 1], [-20, 0])
  const isLast = i === total - 1
  return (
    <div className="relative">
      {!isLast && (
        <motion.div
          style={{ opacity: active, scaleY: active, originY: 0 }}
          className="absolute left-6 top-[40px] w-px h-12 origin-top"
        >
          <div className="w-full h-full bg-gradient-to-b from-ai to-ai/20" />
          <motion.div
            className="absolute top-0 w-1 h-1 rounded-full bg-ai"
            animate={{ top: ['0%', '100%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            style={{ left: -2 }}
          />
        </motion.div>
      )}
      <motion.div
        style={{ opacity: active, x }}
        className="grid grid-cols-[40px_1fr] gap-4 py-3 items-start"
      >
        <div className="flex items-center justify-center h-8 w-8 relative">
          <div className="h-8 w-8 border border-ai/50 bg-black flex items-center justify-center">
            <span className="font-mono text-[10px] text-ai">{String(i + 1).padStart(2, '0')}</span>
          </div>
          <div className="absolute inset-0 border border-ai/20 scale-125 opacity-50" />
        </div>
        <div>
          <div className="flex items-baseline gap-3">
            <span className="font-display font-bold tracking-tight text-2xl text-ink">{stage.label}</span>
          </div>
          <p className="mt-1 text-sm text-ink/60 leading-relaxed">{stage.detail}</p>
        </div>
      </motion.div>
    </div>
  )
}
