import Reveal from '@/components/Reveal'
import { PROJECTS, Project } from '@/data/portfolio'
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react'

const featured = PROJECTS.find((p) => p.category === 'FEATURED')!
const professional = PROJECTS.filter((p) => p.category === 'PROFESSIONAL')
const personal = PROJECTS.filter((p) => p.category === 'PERSONAL')

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6 md:px-10">
      <div className="max-w-content mx-auto">
        <Reveal>
          <div className="font-mono text-xs tracking-widest uppercase text-accent">
            <span className="text-muted">04 /</span> Projects
          </div>
          <h2 className="mt-4 font-sans font-bold text-3xl md:text-5xl tracking-tight max-w-3xl">
            Selected work I've shipped.
          </h2>
          <p className="mt-4 text-lg text-dim max-w-2xl">
            A mix of client work, professional products, and side projects. Click any project to visit
            it live.
          </p>
        </Reveal>

        {/* Featured */}
        {featured && (
          <Reveal delay={0.1}>
            <a
              href={featured.live}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-14 block card-surface rounded-sm p-8 md:p-10 transition-all hover:border-accent/50"
            >
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <div className="font-mono text-[11px] tracking-widest uppercase text-accent mb-3">
                    Featured · {featured.status}
                  </div>
                  <h3 className="font-sans font-bold text-3xl md:text-5xl tracking-tight text-ink group-hover:text-accent transition-colors">
                    {featured.title}
                  </h3>
                  <p className="mt-4 text-lg text-dim max-w-2xl leading-relaxed">{featured.description}</p>
                </div>
                <ArrowUpRight size={22} className="text-dim group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </div>
              <div className="mt-6 flex flex-wrap gap-1.5">
                {featured.stack.map((s) => (
                  <span key={s} className="font-mono text-[11px] px-2 py-1 border border-line rounded-sm text-dim">
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-6 font-mono text-[11px] tracking-widest uppercase text-muted">
                <span>ROLE: {featured.role}</span>
                {featured.year && <span>{featured.year}</span>}
                {featured.live && <span className="text-accent">LIVE ↗</span>}
              </div>
            </a>
          </Reveal>
        )}

        {/* Professional */}
        <Reveal delay={0.1}>
          <div className="mt-16">
            <div className="flex items-baseline justify-between mb-5 pb-3 border-b border-line">
              <h3 className="font-sans font-semibold text-xl tracking-tight">Professional work</h3>
              <span className="font-mono text-[11px] tracking-widest uppercase text-muted">Shipped live</span>
            </div>
            <div className="divide-y divide-line border-y border-line">
              {professional.map((p, i) => (
                <ProjectRow key={p.slug} project={p} index={i} />
              ))}
            </div>
          </div>
        </Reveal>

        {/* Personal / learning */}
        <Reveal delay={0.1}>
          <div className="mt-16">
            <div className="flex items-baseline justify-between mb-5 pb-3 border-b border-line">
              <h3 className="font-sans font-semibold text-xl tracking-tight">Personal & learning projects</h3>
              <span className="font-mono text-[11px] tracking-widest uppercase text-muted">Archived · early work</span>
            </div>
            <div className="grid md:grid-cols-2 gap-0 md:divide-x md:divide-line border-y border-line">
              {personal.map((p, i) => (
                <ProjectRow key={p.slug} project={p} index={i} compact />
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <p className="mt-10 text-sm text-dim italic">
            Many more contributions exist inside private client and company repositories. Happy to walk
            through architecture decisions in a conversation.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

function ProjectRow({ project, compact }: { project: Project; index: number; compact?: boolean }) {
  return (
    <a
      href={project.live || project.github || '#'}
      target={project.live || project.github ? '_blank' : undefined}
      rel="noopener noreferrer"
      className={`group relative grid gap-4 md:gap-8 py-5 px-1 transition-colors hover:bg-white/[0.02] ${
        compact ? 'md:px-6' : 'md:grid-cols-[200px_1fr_auto] items-center'
      } ${compact && !project.live ? 'opacity-60 hover:opacity-100' : ''}`}
    >
      {compact ? (
        <>
          <div>
            <div className="flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase text-muted mb-1">
              {project.year && <span>{project.year}</span>}
              <span>· {project.status}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-sans font-semibold text-lg text-ink group-hover:text-accent transition-colors">
                {project.title}
              </span>
              {project.live && <ExternalLink size={13} className="text-dim group-hover:text-accent transition-colors" />}
            </div>
            <div className="mt-1.5 text-sm text-dim line-clamp-1">{project.description}</div>
            <div className="mt-2 flex flex-wrap gap-1">
              {project.stack.slice(0, 4).map((s) => (
                <span key={s} className="font-mono text-[10px] text-muted">{s}</span>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="font-mono text-xs tracking-widest text-muted">
            {project.year || '—'}
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-sans font-semibold text-lg md:text-xl text-ink group-hover:text-accent transition-colors">
                {project.title}
              </span>
              <span className="font-mono text-[10px] tracking-widest uppercase text-muted">
                {project.status}
              </span>
            </div>
            <p className="mt-1 text-sm text-dim leading-relaxed max-w-2xl">{project.description}</p>
            <div className="mt-2 flex flex-wrap gap-1">
              {project.stack.map((s) => (
                <span key={s} className="font-mono text-[10px] text-dim px-1.5 py-0.5">{s}</span>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3 text-dim group-hover:text-accent transition-colors">
            {project.live && <ExternalLink size={15} />}
            {project.github && <Github size={15} />}
            <span className="font-mono text-[10px] tracking-widest uppercase hidden md:inline">View</span>
          </div>
        </>
      )}
    </a>
  )
}
