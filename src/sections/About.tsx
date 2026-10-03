import Reveal from '@/components/Reveal'
import { PERSON } from '@/data/portfolio'

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6 md:px-10">
      <div className="max-w-content mx-auto grid md:grid-cols-[200px_1fr] gap-10 md:gap-16 items-start">
        <Reveal>
          <div className="font-mono text-xs tracking-widest uppercase text-accent">
            <span className="text-muted">01 /</span> About
          </div>
          <h2 className="mt-4 font-sans font-bold text-3xl md:text-4xl tracking-tight">
            Engineer<br />by background,<br />builder by trade.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-6 text-lg text-dim leading-relaxed max-w-2xl">
            <p className="text-ink/90">
              I'm a software engineer with a background in electronics and embedded systems, turned
              full-stack developer, now focused on building AI-powered products.
            </p>
            <p>
              My path started at the hardware layer — circuits, microcontrollers, C++, Arduino — and
              worked its way up through web development, full-stack product engineering, and now AI
              systems. That foundation gives me a useful habit: I don't stop at the interface. I want to
              understand the full system, from what the user clicks to how the data flows to what the
              model actually sees.
            </p>
            <p>
              Today I spend most of my time on React and Next.js frontends, Node.js and Python services,
              data-heavy workflows, and AI tooling — RAG pipelines, retrieval, embeddings, and local
              model experimentation. I like shipping things that are useful, reliable, and honest about
              what they do.
            </p>

            <div className="pt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { k: 'Frontend', v: 'React · Next.js · TypeScript' },
                { k: 'Backend', v: 'Node · Python · FastAPI · Prisma' },
                { k: 'AI', v: 'RAG · LLMs · Embeddings · Python' },
                { k: 'Data', v: 'SQL · MongoDB · Pandas · Redis' },
                { k: 'Infra', v: 'AWS · Docker · Vercel · Linux' },
                { k: 'Foundations', v: 'C++ · Arduino · Electronics' },
              ].map((x) => (
                <div key={x.k} className="card-surface p-3 rounded-sm transition-colors">
                  <div className="font-mono text-[10px] tracking-widest uppercase text-accent mb-1">{x.k}</div>
                  <div className="text-sm text-ink/80">{x.v}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
