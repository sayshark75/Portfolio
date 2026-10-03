import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import SectionLabel from '@/components/SectionLabel'
import { PROJECTS, Project } from '@/data/portfolio'
import { ArrowUpRight, ExternalLink, Github, X } from 'lucide-react'

export default function Projects() {
  const featured = PROJECTS.find((p) => p.category === 'FEATURED')!
  const professional = PROJECTS.filter((p) => p.category === 'PROFESSIONAL')
  const personal = PROJECTS.filter((p) => p.category === 'PERSONAL')
  const [open, setOpen] = useState<Project | null>(null)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <section id="projects" className="relative py-32 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <SectionLabel number="06" label="CASE FILES / PROJECTS">
          <h2 className="mt-3 font-display font-black tracking-tighter text-4xl md:text-6xl lg:text-7xl leading-[0.9]">
            Things I've <span className="text-accent">shipped.</span>
          </h2>
        </SectionLabel>

        {/* Featured */}
        <ProjectCase project={featured} featured onOpen={() => setOpen(featured)} />

        {/* Professional */}
        <div className="mt-20">
          <div className="flex items-center gap-3 mb-6 font-mono text-[11px] tracking-[0.3em] text-dim uppercase">
            <span className="h-px w-6 bg-data" />
            Professional Work
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-border/50 border border-border/50">
            {professional.map((p, i) => (
              <ProjectCase key={p.slug} project={p} index={i} onOpen={() => setOpen(p)} />
            ))}
          </div>
        </div>

        {/* Personal */}
        <div className="mt-20">
          <div className="flex items-center gap-3 mb-6 font-mono text-[11px] tracking-[0.3em] text-dim uppercase">
            <span className="h-px w-6 bg-warn" />
            Personal / Learning Projects
            <span className="text-muted font-normal tracking-normal text-[10px]">— older projects, visibly receded</span>
          </div>
          <div className="grid md:grid-cols-3 gap-3">
            {personal.map((p, i) => (
              <ProjectCase key={p.slug} project={p} compact index={i} onOpen={() => setOpen(p)} />
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && <ProjectModal project={open} onClose={() => setOpen(null)} />}
      </AnimatePresence>
    </section>
  )
}

function ProjectCase({
  project,
  onOpen,
  featured,
  compact,
  index = 0,
}: {
  project: Project
  onOpen: () => void
  featured?: boolean
  compact?: boolean
  index?: number
}) {
  const categoryColor =
    project.category === 'FEATURED' ? '#00e5a0' : project.category === 'PROFESSIONAL' ? '#3da9ff' : '#ff6b3d'
  const [hover, setHover] = useState(false)

  return (
    <motion.button
      onClick={onOpen}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.08 }}
      className={`group relative text-left bg-panel hover:bg-surface transition-colors duration-500 overflow-hidden ${
        featured ? 'aspect-[16/9] md:aspect-[2/1]' : compact ? 'aspect-[4/3]' : 'aspect-[4/3]'
      } ${!featured && !compact ? 'md:aspect-[4/3]' : ''}`}
    >
      {/* Image */}
      <div className="absolute inset-0">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          style={{
            filter: hover ? 'saturate(1.1) contrast(1.05)' : 'saturate(0.7) contrast(0.9)',
            opacity: hover ? 0.85 : 0.55,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" />
        {compact && <div className="absolute inset-0 bg-black/40" />}
      </div>

      {/* Corner marks */}
      <div className="absolute top-3 left-3 h-3 w-3 border-l border-t" style={{ borderColor: categoryColor + '80' }} />
      <div className="absolute top-3 right-3 h-3 w-3 border-r border-t" style={{ borderColor: categoryColor + '80' }} />
      <div className="absolute bottom-3 left-3 h-3 w-3 border-l border-b" style={{ borderColor: categoryColor + '80' }} />
      <div className="absolute bottom-3 right-3 h-3 w-3 border-r border-b" style={{ borderColor: categoryColor + '80' }} />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
        <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.25em] mb-2">
          <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: categoryColor }} />
          <span style={{ color: categoryColor }}>{project.category}</span>
          {project.year && <span className="text-dim">· {project.year}</span>}
          <span className="flex-1" />
          <span className="text-dim hidden md:block">STATUS: {project.status}</span>
        </div>

        <h3 className={`font-display font-black tracking-tight leading-[0.9] ${featured ? 'text-4xl md:text-6xl' : compact ? 'text-lg md:text-xl' : 'text-2xl md:text-3xl'} text-ink`}>
          {project.title}
        </h3>

        {/* Revealed meta on hover */}
        <motion.div
          initial={false}
          animate={{ height: hover ? 'auto' : 0, opacity: hover ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="pt-3 flex flex-wrap items-end gap-4">
            {!compact && (
              <p className="text-sm text-ink/70 max-w-md line-clamp-2">{project.description}</p>
            )}
            <div className="ml-auto flex items-center gap-2 font-mono text-[10px] tracking-widest text-accent">
              OPEN FILE <ArrowUpRight size={12} />
            </div>
          </div>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.stack.slice(0, compact ? 3 : 5).map((s) => (
              <span key={s} className="font-mono text-[9px] tracking-wider px-1.5 py-0.5 border border-border text-dim">
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Signal line */}
      <motion.div
        initial={false}
        animate={{ scaleX: hover ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="absolute bottom-0 left-0 right-0 h-px origin-left"
        style={{ backgroundColor: categoryColor }}
      />
    </motion.button>
  )
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const categoryColor =
    project.category === 'FEATURED' ? '#00e5a0' : project.category === 'PROFESSIONAL' ? '#3da9ff' : '#ff6b3d'
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
    >
      <motion.div
        initial={{ y: 40, scale: 0.96, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 26 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl w-full max-h-[90vh] overflow-y-auto bg-panel border border-border-strong"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 h-10 w-10 border border-border hover:border-accent hover:text-accent flex items-center justify-center"
          aria-label="Close"
        >
          <X size={16} />
        </button>

        <div className="relative aspect-[16/8] overflow-hidden">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" style={{ filter: 'saturate(0.8)' }} />
          <div className="absolute inset-0 bg-gradient-to-t from-panel via-transparent to-transparent" />
        </div>

        <div className="p-6 md:p-10">
          <div className="flex items-center gap-2 font-mono text-[11px] tracking-[0.25em] mb-3">
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: categoryColor }} />
            <span style={{ color: categoryColor }}>{project.category}</span>
            {project.year && <span className="text-dim">· {project.year}</span>}
            <span className="text-dim">· {project.status}</span>
          </div>
          <h3 className="font-display font-black tracking-tighter text-4xl md:text-6xl leading-[0.9]">
            {project.title}
          </h3>
          <p className="mt-5 text-lg text-ink/70 max-w-3xl leading-relaxed">{project.description}</p>

          <div className="mt-8 grid md:grid-cols-3 gap-px bg-border/50 border border-border/50">
            <InfoBlock label="ROLE" value={project.role} />
            <InfoBlock label="STACK" value={project.stack.join(' · ')} />
            <InfoBlock label="STATUS" value={project.status} />
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 bg-accent text-black font-mono text-xs tracking-widest hover:bg-accent/90">
                <ExternalLink size={12} />
                LIVE
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 border border-border-strong text-ink font-mono text-xs tracking-widest hover:border-accent hover:text-accent">
                <Github size={12} />
                SOURCE
              </a>
            )}
          </div>

          <div className="mt-8 font-mono text-[10px] tracking-widest text-dim uppercase">
            {'// end of file'}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function InfoBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-panel p-4">
      <div className="font-mono text-[10px] tracking-[0.25em] text-dim mb-2">{label}</div>
      <div className="font-mono text-xs text-ink/90 leading-relaxed">{value}</div>
    </div>
  )
}
