import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { diagnostics } from "../data/content";

export default function Diagnostics() {
  return (
    <section className="relative bg-ink py-28 sm:py-36 border-t border-line-soft">
      <div className="container-px">
        <Reveal>
          <p className="eyebrow mb-6">{diagnostics.eyebrow}</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display font-semibold text-[clamp(2.2rem,5.5vw,4rem)] leading-[1.02] tracking-tight text-bone max-w-3xl text-balance">
            {diagnostics.headline}
          </h2>
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-[1fr_auto] gap-16 items-start">
          <div>
            {diagnostics.areas.map((area, i) => (
              <Reveal key={area.title} delay={0.06 * i}>
                <div className="py-6 border-b border-line-soft">
                  <div className="flex items-baseline justify-between mb-3">
                    <span className="text-bone text-base sm:text-lg">{area.title}</span>
                    <span className="font-mono text-sage text-sm">{area.score}/100</span>
                  </div>
                  <div className="h-1.5 w-full bg-charcoal-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${area.score}%` }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 1, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] }}
                      className="h-full bg-sage"
                    />
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={0.3} className="mt-8 flex items-baseline justify-between">
              <span className="font-display text-xl text-bone">{diagnostics.overallLabel}</span>
              <span className="font-mono text-3xl text-sage-bright">{diagnostics.overallScore}<span className="text-bone-faint text-lg"> / 100</span></span>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="w-full lg:w-72">
            <div className="border border-line-soft bg-charcoal p-7">
              <p className="text-sm text-bone-dim leading-relaxed">{diagnostics.note}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
