import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { challenge } from "../data/content";

export default function Challenge() {
  return (
    <section className="relative bg-ink py-28 sm:py-36 border-t border-line-soft">
      <div className="container-px">
        <Reveal>
          <p className="eyebrow mb-6">{challenge.eyebrow}</p>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="font-display font-semibold text-[clamp(2.2rem,5.5vw,4.2rem)] leading-[1.02] tracking-tight text-bone max-w-4xl text-balance">
            {challenge.headline}
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-6 text-xl sm:text-2xl text-bone-dim max-w-2xl">{challenge.subhead}</p>
        </Reveal>

        <Reveal delay={0.25} className="mt-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 flex-wrap">
            {challenge.path.map((step, i) => (
              <motion.div key={step} className="flex items-center gap-4 sm:gap-6">
                <div
                  className={`px-6 py-3 border text-sm sm:text-base tracking-wide ${
                    i === 0
                      ? "border-sage text-bone bg-sage/5"
                      : "border-line text-bone-faint"
                  }`}
                >
                  {step}
                </div>
                {i < challenge.path.length - 1 && (
                  <ArrowRight size={18} className="text-bone-faint shrink-0" />
                )}
              </motion.div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.3} className="mt-14 max-w-xl border border-line-soft bg-charcoal p-7 sm:p-8">
          <p className="text-bone-dim text-base sm:text-lg leading-relaxed">{challenge.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
