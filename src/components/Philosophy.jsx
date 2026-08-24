import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { philosophy } from "../data/content";

export default function Philosophy() {
  const [active, setActive] = useState(0);

  return (
    <section id="about" className="relative bg-charcoal py-28 sm:py-36 border-t border-line-soft overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06] transition-all duration-700"
        style={{
          background: `radial-gradient(circle at ${20 + active * 20}% 50%, var(--color-sage) 0%, transparent 55%)`,
        }}
      />
      <div className="container-px relative">
        <Reveal>
          <p className="eyebrow mb-6">{philosophy.eyebrow}</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display font-semibold text-[clamp(2rem,5vw,3.6rem)] leading-[1.05] tracking-tight text-bone max-w-3xl text-balance">
            {philosophy.headline}
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-6 max-w-xl text-bone-dim text-lg">{philosophy.subhead}</p>
        </Reveal>

        <Reveal delay={0.25} className="mt-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line">
            {philosophy.stages.map((stage, i) => {
              const isActive = active === i;
              return (
                <motion.button
                  key={stage.n}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={`relative text-left bg-charcoal p-8 min-h-[240px] flex flex-col justify-between transition-colors duration-500 ${
                    isActive ? "bg-ink" : ""
                  }`}
                >
                  <span
                    className={`font-mono text-xs tracking-widest transition-colors ${
                      isActive ? "text-sage" : "text-bone-faint"
                    }`}
                  >
                    {stage.n}
                  </span>
                  <div>
                    <h3
                      className={`font-display font-semibold text-2xl sm:text-3xl mb-3 transition-all duration-300 ${
                        isActive ? "text-sage-bright translate-x-1" : "text-bone"
                      }`}
                    >
                      {stage.title}
                    </h3>
                    <motion.p
                      initial={false}
                      animate={{ opacity: isActive ? 1 : 0.5, height: "auto" }}
                      className="text-sm text-bone-dim leading-relaxed"
                    >
                      {stage.description}
                    </motion.p>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
