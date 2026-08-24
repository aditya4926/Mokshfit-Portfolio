import Reveal from "./Reveal";
import { process } from "../data/content";

export default function Approach() {
  return (
    <section id="approach" className="relative bg-ink py-28 sm:py-36 border-t border-line-soft">
      <div className="container-px">
        <Reveal>
          <p className="eyebrow mb-6">{process.eyebrow}</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display font-semibold text-[clamp(2.2rem,5.5vw,4rem)] leading-[1.02] tracking-tight text-bone max-w-3xl text-balance">
            {process.headline}
          </h2>
        </Reveal>

        <div className="mt-20 relative">
          <div className="hidden md:block absolute top-0 left-[1.65rem] w-px h-full bg-line" />
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-0">
            {process.steps.map((step, i) => (
              <Reveal key={step.n} delay={0.05 * i} className="relative py-8 md:py-10 border-b border-line-soft md:border-none">
                <div className="flex gap-6">
                  <div className="relative shrink-0">
                    <div className="w-14 h-14 rounded-full border border-line flex items-center justify-center font-mono text-sm text-sage bg-ink z-10 relative">
                      {step.n}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-xl sm:text-2xl text-bone mb-2">
                      {step.title}
                    </h3>
                    <p className="text-bone-dim leading-relaxed max-w-sm">{step.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
