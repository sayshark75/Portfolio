import Reveal from '@/components/Reveal'
import { RAG_PIPELINE } from '@/data/portfolio'
import { Bot, Braces, Database, FileSearch, LineChart, Workflow } from 'lucide-react'

export default function AIEngineering() {
  return (
    <section id="ai" className="relative py-28 px-6 md:px-10">
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-ai/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-content mx-auto">
        <Reveal>
          <div className="font-mono text-xs tracking-widest uppercase text-ai">
            <span className="text-muted">03 /</span> AI Engineering
          </div>
          <h2 className="mt-4 font-sans font-bold text-3xl md:text-5xl tracking-tight max-w-3xl">
            AI isn't magic. It's a system — <span className="text-accent">data, retrieval, and engineering.</span>
          </h2>
          <p className="mt-5 text-lg text-dim max-w-2xl leading-relaxed">
            A good AI product isn't just a model behind a prompt box. It's thoughtful data ingestion,
            reliable retrieval, context design, evaluation, and observability. That's where I spend my
            time.
          </p>
        </Reveal>

        {/* RAG pipeline — a clean horizontal flow, not an overbearing sticky scroller */}
        <Reveal delay={0.1}>
          <div className="mt-14 card-surface p-6 md:p-10 rounded-sm">
            <div className="flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase text-muted mb-8">
              <Workflow size={12} className="text-ai" />
              A retrieval pipeline, simplified
            </div>

            {/* Desktop: horizontal pipeline */}
            <div className="hidden md:block">
              <div className="relative flex items-start justify-between gap-2">
                <div className="absolute top-5 left-6 right-6 h-px bg-gradient-to-r from-ai/40 via-ai/20 to-accent/40" />
                {RAG_PIPELINE.map((s, i) => (
                  <div key={s.id} className="relative flex-1 flex flex-col items-center text-center px-1">
                    <div
                      className="relative z-10 h-10 w-10 rounded-full border flex items-center justify-center font-mono text-[10px]"
                      style={{
                        borderColor: i < 5 ? '#8b7cff' : '#00e5a0',
                        color: i < 5 ? '#8b7cff' : '#00e5a0',
                        background: '#08090b',
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div className="mt-4 font-sans font-semibold text-sm text-ink tracking-tight">
                      {s.label}
                    </div>
                    <div className="mt-1 text-[11px] text-dim leading-snug max-w-[120px]">
                      {s.detail}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile: vertical stack */}
            <div className="md:hidden space-y-5">
              {RAG_PIPELINE.map((s, i) => (
                <div key={s.id} className="flex gap-3">
                  <div
                    className="flex-shrink-0 h-8 w-8 rounded-full border flex items-center justify-center font-mono text-[10px]"
                    style={{
                      borderColor: i < 5 ? '#8b7cff' : '#00e5a0',
                      color: i < 5 ? '#8b7cff' : '#00e5a0',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <div className="font-semibold text-ink">{s.label}</div>
                    <div className="text-sm text-dim mt-0.5">{s.detail}</div>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm text-dim italic border-l-2 border-ai/40 pl-4 max-w-2xl">
              Personal AI engineering / R&D — experimentation with local LLMs, embeddings, and document
              pipelines. It reflects the direction of my work, not a production claim.
            </p>
          </div>
        </Reveal>

        {/* Focus areas */}
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              icon: <FileSearch size={18} />,
              color: '#8b7cff',
              title: 'Retrieval',
              desc: 'Embeddings, vector search, reranking, and designing context windows that actually help the model.',
            },
            {
              icon: <Database size={18} />,
              color: '#00e5a0',
              title: 'Data & pipelines',
              desc: 'Document ingestion, chunking, cleansing, validation, and processing large datasets end-to-end.',
            },
            {
              icon: <Bot size={18} />,
              color: '#3da9ff',
              title: 'Local & hosted models',
              desc: 'Working with Ollama, Hugging Face, and hosted LLM APIs — choosing the right tool for the problem.',
            },
            {
              icon: <Braces size={18} />,
              color: '#f2b482',
              title: 'APIs & integration',
              desc: 'FastAPI and Node.js services that connect AI pipelines to real products with type-safe contracts.',
            },
            {
              icon: <Workflow size={18} />,
              color: '#f28a5c',
              title: 'Orchestration',
              desc: 'LangChain / LangGraph patterns for multi-step workflows, agents, and structured outputs.',
            },
            {
              icon: <LineChart size={18} />,
              color: '#00e5a0',
              title: 'Evaluation',
              desc: 'Building the scaffolding to know when the system is getting better — not just hoping it is.',
            },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 0.06}>
              <div className="card-surface p-5 rounded-sm h-full transition-colors">
                <div className="flex items-center gap-2 mb-3" style={{ color: c.color }}>
                  {c.icon}
                  <span className="font-sans font-semibold text-ink">{c.title}</span>
                </div>
                <p className="text-sm text-dim leading-relaxed">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Tools */}
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap gap-2">
            {['Python', 'FastAPI', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Prisma', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'AWS', 'Ollama', 'LangChain', 'LangGraph', 'Hugging Face', 'Pydantic', 'Pandas', 'ChromaDB'].map((t) => (
              <span
                key={t}
                className="font-mono text-xs px-3 py-1.5 border border-line rounded-sm text-dim hover:border-accent hover:text-accent transition-colors"
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
