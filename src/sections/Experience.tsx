import Reveal from '@/components/Reveal'
import { EXPERIENCES, TIMELINE_NODES } from '@/data/portfolio'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

const NODE_COLORS = ['#8b7cff', '#f28a5c', '#f2b482', '#3da9ff', '#00e5a0', '#00e5a0']

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6 md:px-10">
      <div className="max-w-content mx-auto">
        <Reveal>
          <div className="font-mono text-xs tracking-widest uppercase text-accent">
            <span className="text-muted">02 /</span> Experience
          </div>
          <h2 className="mt-4 font-sans font-bold text-3xl md:text-5xl tracking-tight max-w-3xl">
            A path from electronics to AI systems — through shipping product.
          </h2>
          <p className="mt-4 text-lg text-dim max-w-2xl">
            Different technologies, same engineering mindset: build, understand the system, fix what
            breaks, and keep shipping.
          </p>
        </Reveal>

        {/* Timeline */}
        <Reveal delay={0.1}>
          <div className="mt-16 relative">
            <div className="grid grid-cols-2 md:grid-cols-6 gap-6 md:gap-4">
              {TIMELINE_NODES.map((n, i) => (
                <div key={n.year} className="relative">
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className="h-2.5 w-2.5 rounded-full ring-4 ring-bg"
                      style={{ backgroundColor: NODE_COLORS[i] }}
                    />
                    <span className="font-mono text-xs text-muted">{n.year}</span>
                  </div>
                  <div
                    className="font-sans font-bold text-base md:text-lg tracking-tight"
                    style={{ color: NODE_COLORS[i] }}
                  >
                    {n.title}
                  </div>
                </div>
              ))}
            </div>
            {/* connecting line sits behind the dots */}
            <div
              className="absolute hidden md:block top-[5px] h-px bg-line-strong pointer-events-none"
              style={{ left: '5px', right: `calc(${100 / 12}% + 5px)` }}
            />
          </div>
        </Reveal>

        {/* Experience list */}
        <div className="mt-20 space-y-0">
          <Reveal>
            <div className="flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-dim pb-4 border-b border-line mb-2">
              <Briefcase size={12} className="text-accent" />
              Professional experience
            </div>
          </Reveal>

          {EXPERIENCES.map((e, i) => (
            <Reveal key={e.id} delay={i * 0.05}>
              <article className="group grid md:grid-cols-[220px_1fr] gap-4 md:gap-10 py-8 border-b border-line hover:bg-white/[0.015] transition-colors px-3 -mx-3">
                <div>
                  <div className="flex items-center gap-2 font-mono text-xs text-muted mb-1">
                    <Calendar size={11} />
                    {e.period}
                  </div>
                  <h3 className="font-sans font-bold text-xl md:text-2xl tracking-tight" style={{ color: e.color }}>
                    {e.company}
                  </h3>
                  <div className="text-sm text-dim mt-1">{e.role}</div>
                </div>

                <div>
                  <ul className="space-y-2 text-ink/85 leading-relaxed">
                    {e.bullets.map((b) => (
                      <li key={b} className="flex gap-3">
                        <span className="mt-2 h-px w-4 flex-shrink-0" style={{ backgroundColor: e.color }} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {e.tags.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10px] tracking-wider text-dim px-2 py-1 border border-line rounded-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-8 flex items-center gap-2 font-mono text-xs text-muted italic">
            <MapPin size={12} />
            Based in Pune, India — open to remote and hybrid opportunities.
          </div>
        </Reveal>
      </div>
    </section>
  )
}
