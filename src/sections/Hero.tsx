import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { PERSON } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="top" className="relative h-screen flex items-center pt-24 pb-10 px-6 md:px-10 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 subtle-grid opacity-50" />
      <div className="absolute -top-40 -right-20 w-[480px] h-[480px] bg-accent/5 rounded-full blur-[120px]" />
      <div className="absolute -bottom-40 left-1/4 w-[360px] h-[360px] bg-ai/5 rounded-full blur-[100px]" />

      <div className="relative max-w-content mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center gap-3 font-mono text-[11px] tracking-widest uppercase text-accent mb-5 md:mb-6"
        >
          <span className="h-px w-7 bg-accent" />
          Available for new opportunities · Pune, India
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="font-sans font-bold tracking-tight text-ink leading-[1.02] text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Hi, I'm <span className="text-accent">{PERSON.first}.</span>
          <br />
          I build products
          <br />
          <span className="text-dim">powered by AI & full-stack engineering.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-5 md:mt-6 max-w-2xl text-base md:text-lg text-dim leading-relaxed"
        >
          Software Engineer working across the interface, backend, and AI layers. I build products that actually work — clean UIs, reliable services,
          data pipelines, and AI systems grounded in real retrieval.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-6 md:mt-8 flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-bg font-medium hover:bg-accent/90 transition-colors text-sm"
          >
            See my work
            <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href={PERSON.resumeUrl}
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-line-strong text-ink hover:border-accent hover:text-accent transition-colors text-sm"
          >
            <Download size={14} />
            Resume
          </a>
          <a href={`mailto:${PERSON.email}`} className="inline-flex items-center gap-2 px-4 py-2.5 text-dim hover:text-ink transition-colors text-sm">
            Get in touch →
          </a>
        </motion.div>

        {/* Compact meta line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-8 md:mt-10 pt-4 md:pt-5 border-t border-line flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] tracking-wider uppercase text-muted"
        >
          <span>
            <span className="text-ink/80">Role</span> · Software Engineer
          </span>
          <span>
            <span className="text-ink/80">Focus</span> · AI / Full Stack
          </span>
          <span>
            <span className="text-ink/80">Exp</span> · 5+ years
          </span>
          <span className="hidden md:inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            Open to remote & hybrid
          </span>
        </motion.div>
      </div>
    </section>
  );
}
