import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { ecosystem } from "../data/content";

export default function GrowthEcosystem() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="relative bg-ink py-28 sm:py-36 border-t border-line-soft">
      <div className="container-px">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16 items-center">
          <div>
            <Reveal>
              <p className="eyebrow mb-6">{ecosystem.eyebrow}</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display font-semibold text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.02] tracking-tight text-bone text-balance">
                {ecosystem.headline}
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-md text-bone-dim text-lg leading-relaxed">
                Nine connected disciplines, working as a single system rather
                than isolated services.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="relative">
              {/* central node */}
              <div className="hidden sm:flex absolute -left-6 top-1/2 -translate-y-1/2 -translate-x-full items-center justify-center w-28 h-28 rounded-full border border-sage/40 bg-sage/5">
                <span className="font-display text-sm font-semibold tracking-wide text-sage text-center leading-tight">
                  MOKSHFIT
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-line border border-line">
                {ecosystem.nodes.map((node, i) => (
                  <motion.div
                    key={node}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    className="relative bg-ink p-6 h-28 flex items-center justify-center text-center overflow-hidden"
                  >
                    <motion.div
                      initial={false}
                      animate={{ opacity: hovered === i ? 1 : 0 }}
                      transition={{ duration: 0.35 }}
                      className="absolute inset-0"
                      style={{
                        background:
                          "radial-gradient(circle at 50% 50%, rgba(139,149,116,0.18) 0%, transparent 70%)",
                      }}
                    />
                    <span
                      className={`relative text-sm sm:text-base tracking-wide transition-colors duration-300 ${
                        hovered === i ? "text-sage-bright" : "text-bone-dim"
                      }`}
                    >
                      {node}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
