import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { finalCta } from "../data/content";

export default function CTA() {
  return (
    <section className="relative bg-ink py-32 sm:py-44 border-t border-line-soft overflow-hidden">
      <motion.div
        animate={{ opacity: [0.08, 0.18, 0.08] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-sage) 0%, transparent 70%)" }}
      />
      <div className="container-px relative text-center">
        <Reveal>
          <h2 className="font-display font-semibold text-[clamp(2.4rem,7vw,5.5rem)] leading-[1.02] tracking-tight text-bone text-balance max-w-4xl mx-auto">
            {finalCta.headline}
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-7 text-lg sm:text-xl text-bone-dim max-w-xl mx-auto">{finalCta.subhead}</p>
        </Reveal>
        <Reveal delay={0.24} className="mt-12 flex flex-wrap items-center justify-center gap-5">
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 bg-sage text-ink px-8 py-4 text-sm font-medium tracking-wide hover:bg-sage-bright transition-colors"
          >
            Let's Work Together
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-bone text-sm tracking-wide border-b border-line pb-1 hover:border-sage transition-colors"
          >
            Start a Conversation
          </a>
        </Reveal>
      </div>
    </section>
  );
}
