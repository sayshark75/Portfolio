import Reveal from '@/components/Reveal'
import { SKILL_LAYERS } from '@/data/portfolio'

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6 md:px-10">
      <div className="max-w-content mx-auto">
        <Reveal>
          <div className="font-mono text-xs tracking-widest uppercase text-accent">
            <span className="text-muted">05 /</span> Skills & Tools
          </div>
          <h2 className="mt-4 font-sans font-bold text-3xl md:text-5xl tracking-tight max-w-3xl">
            Tools I use, organized by the layer I use them in.
          </h2>
          <p className="mt-4 text-lg text-dim max-w-2xl">
            No proficiency percentages. Just the tools I reach for regularly, grouped by where they
            live in a system.
          </p>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_LAYERS.map((l, i) => (
            <Reveal key={l.id} delay={i * 0.05}>
              <div className="card-surface p-6 rounded-sm h-full transition-colors">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-line">
                  <span className="h-2 w-2 rounded-full" style={{ backgroundColor: l.color }} />
                  <span className="font-mono text-[11px] tracking-widest uppercase" style={{ color: l.color }}>
                    {l.label}
                  </span>
                </div>
                <ul className="space-y-2">
                  {l.items.map((it) => (
                    <li key={it} className="flex items-center gap-3 text-ink/85 group">
                      <span className="h-px w-4" style={{ backgroundColor: l.color, opacity: 0.5 }} />
                      <span className="group-hover:text-ink text-dim group-hover:translate-x-1 transition-all">
                        {it}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
