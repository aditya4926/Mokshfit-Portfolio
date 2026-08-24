import Reveal from "./Reveal";
import { differentiation } from "../data/content";

export default function Differentiation() {
  return (
    <section className="relative bg-charcoal py-24 sm:py-32 border-t border-line-soft">
      <div className="container-px text-center">
        <Reveal>
          <p className="eyebrow mb-6">{differentiation.eyebrow}</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display font-semibold text-[clamp(1.9rem,5vw,3.4rem)] leading-[1.05] tracking-tight text-bone max-w-3xl mx-auto text-balance">
            {differentiation.headline}
          </h2>
        </Reveal>

        <Reveal delay={0.2} className="mt-16">
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-4">
            {differentiation.journey.map((stop, i) => {
              const isLast = i === differentiation.journey.length - 1;
              return (
                <span key={stop} className="flex items-center gap-2">
                  <span
                    className={`text-sm sm:text-lg tracking-wide px-4 py-2 border transition-colors ${
                      isLast
                        ? "border-sage text-sage-bright"
                        : "border-transparent text-bone-faint line-through decoration-bone-faint/50"
                    }`}
                  >
                    {stop}
                  </span>
                  {!isLast && <span className="text-bone-faint">—</span>}
                </span>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
