import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "./Reveal";
import { growthSystem } from "../data/content";

export default function GrowthSystem() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const stepCount = growthSystem.steps.length;
  const activeIndex = useTransform(scrollYProgress, (v) =>
    Math.min(stepCount - 1, Math.floor(v * stepCount))
  );

  return (
    <section className="relative bg-charcoal border-t border-line-soft">
      <div className="container-px pt-28 sm:pt-36">
        <Reveal>
          <p className="eyebrow mb-6">{growthSystem.eyebrow}</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display font-semibold text-[clamp(2.2rem,5.5vw,4rem)] leading-[1.02] tracking-tight text-bone max-w-3xl text-balance">
            {growthSystem.headline}
          </h2>
        </Reveal>
      </div>

      {/* Desktop: sticky visual + scroll driven steps */}
      <div ref={ref} className="hidden lg:block relative container-px" style={{ height: `${stepCount * 70}vh` }}>
        <div className="sticky top-0 h-screen grid grid-cols-2 gap-16 items-center">
          <div className="relative h-[420px]">
            {growthSystem.steps.map((step, i) => (
              <StepVisual key={step.n} index={i} activeIndex={activeIndex} step={step} />
            ))}
          </div>

          <div className="flex flex-col gap-2">
            {growthSystem.steps.map((step, i) => (
              <StepText key={step.n} index={i} activeIndex={activeIndex} step={step} />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile: stacked cards */}
      <div className="lg:hidden container-px py-16 flex flex-col gap-6">
        {growthSystem.steps.map((step, i) => (
          <Reveal key={step.n} delay={0.05 * i}>
            <div className="border border-line-soft bg-ink p-7">
              <span className="font-mono text-sage text-xs tracking-widest">{step.n}</span>
              <h3 className="font-display font-semibold text-2xl text-bone mt-3 mb-2">{step.title}</h3>
              <p className="text-xs text-bone-faint font-mono mb-3 tracking-wide">{step.tags}</p>
              <p className="text-bone-dim leading-relaxed">{step.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function StepVisual({ index, activeIndex, step }) {
  const opacity = useTransform(activeIndex, (v) => (v === index ? 1 : 0));
  const scale = useTransform(activeIndex, (v) => (v === index ? 1 : 0.92));
  return (
    <motion.div style={{ opacity, scale }} className="absolute inset-0 flex items-center justify-center">
      <div className="relative w-full h-full max-w-sm mx-auto flex items-center justify-center border border-line bg-ink">
        <span className="font-display text-[clamp(3rem,8vw,6rem)] font-semibold text-sage/25 select-none">
          {step.n}
        </span>
        <div className="absolute inset-6 border border-line-soft" />
      </div>
    </motion.div>
  );
}

function StepText({ index, activeIndex, step }) {
  const opacity = useTransform(activeIndex, (v) => (v === index ? 1 : 0.3));
  const x = useTransform(activeIndex, (v) => (v === index ? 0 : -8));
  return (
    <motion.div style={{ opacity, x }} className="py-6 border-b border-line-soft last:border-b-0">
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-sage text-sm">{step.n}</span>
        <h3 className="font-display font-semibold text-3xl text-bone">{step.title}</h3>
      </div>
      <p className="text-xs text-bone-faint font-mono mt-3 mb-2 tracking-wide">{step.tags}</p>
      <p className="text-bone-dim leading-relaxed max-w-md">{step.description}</p>
    </motion.div>
  );
}
