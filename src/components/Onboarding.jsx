import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { onboarding } from "../data/content";

export default function Onboarding() {
  return (
    <section className="relative bg-charcoal py-28 sm:py-36 border-t border-line-soft">
      <div className="container-px">
        <Reveal>
          <p className="eyebrow mb-6">{onboarding.eyebrow}</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display font-semibold text-[clamp(2.2rem,5.5vw,4rem)] leading-[1.02] tracking-tight text-bone max-w-3xl text-balance">
            {onboarding.headline}
          </h2>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line">
          {onboarding.weeks.map((w, i) => (
            <Reveal key={w.week} delay={0.06 * i}>
              <div className="relative bg-charcoal p-7 min-h-[190px] flex flex-col justify-between">
                <span className="eyebrow">{w.week}</span>
                <p className="text-bone text-lg leading-snug">{w.title}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mt-14">
          <div className="flex flex-wrap items-center gap-3 border border-line-soft px-6 sm:px-8 py-6">
            {onboarding.loop.map((item, i) => (
              <span key={item} className="flex items-center gap-3">
                <span className="font-mono text-sm sm:text-base tracking-wide text-bone-dim">{item}</span>
                {i < onboarding.loop.length - 1 && (
                  <ArrowRight size={16} className="text-sage" />
                )}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
