import Reveal from '@/components/Reveal'

const PRINCIPLES = [
  {
    k: 'Build systems, not demos.',
    v: 'A demo works once on a happy path. A system handles edge cases, bad input, and the next engineer reading it.',
  },
  {
    k: 'Understand the data before blaming the model.',
    v: 'Most AI failures aren\'t model failures — they\'re data, context, or retrieval failures. Fix the right layer.',
  },
  {
    k: 'AI is a component, not the product.',
    v: 'Users don\'t care that there\'s an LLM inside. They care that the product works quickly and correctly.',
  },
  {
    k: 'Make complexity observable.',
    v: 'Good engineering surfaces what\'s happening — logs, traces, metrics, readable code — so failures can be found.',
  },
  {
    k: 'Learn the layer below the abstraction.',
    v: 'I started in electronics and carry that habit: understand one layer deeper than you need to.',
  },
]

export default function Philosophy() {
  return (
    <section id="philosophy" className="relative py-28 px-6 md:px-10">
      <div className="max-w-content mx-auto">
        <Reveal>
          <div className="font-mono text-xs tracking-widest uppercase text-accent">
            <span className="text-muted">06 /</span> How I work
          </div>
          <h2 className="mt-4 font-sans font-bold text-3xl md:text-5xl tracking-tight max-w-3xl">
            A few principles I come back to.
          </h2>
        </Reveal>

        <div className="mt-14 space-y-10 md:space-y-14">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.k} delay={i * 0.05}>
              <div className="grid md:grid-cols-[80px_1fr] gap-4 md:gap-10 items-start">
                <div className="font-mono text-xs text-muted tracking-widest">
                  {String(i + 1).padStart(2, '0')} / 05
                </div>
                <div className="border-t border-line pt-5 md:pt-6 -mt-px">
                  <h3 className="font-sans font-bold text-2xl md:text-4xl tracking-tight leading-tight text-balance">
                    {p.k}
                  </h3>
                  <p className="mt-4 text-lg text-dim leading-relaxed max-w-2xl">{p.v}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
