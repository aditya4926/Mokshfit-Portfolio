import Reveal from "./Reveal";
import { edge } from "../data/content";

export default function Edge() {
  return (
    <section className="relative bg-ink py-24 sm:py-32 border-t border-line-soft">
      <div className="container-px">
        <Reveal>
          <p className="eyebrow mb-6">{edge.eyebrow}</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display font-semibold text-[clamp(2rem,5vw,3.6rem)] leading-[1.05] tracking-tight text-bone max-w-3xl text-balance">
            {edge.headline}
          </h2>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 gap-x-12 gap-y-10">
          {edge.points.map((point, i) => (
            <Reveal key={point.title} delay={0.05 * i}>
              <div className="flex items-start gap-4 border-b border-line-soft pb-8">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sage shrink-0" />
                <div>
                  <h3 className="text-bone text-lg sm:text-xl mb-1">{point.title}</h3>
                  <p className="text-bone-faint text-sm">{point.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
