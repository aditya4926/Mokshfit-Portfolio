import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import caseStudies from "../data/caseStudies";

export default function CaseStudies() {
  return (
    <section id="work" className="relative bg-ink py-28 sm:py-36 border-t border-line-soft">
      <div className="container-px">
        <Reveal>
          <p className="eyebrow mb-6">14 / Proof</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display font-semibold text-[clamp(2.2rem,5.5vw,4rem)] leading-[1.02] tracking-tight text-bone max-w-3xl text-balance">
            Real problems. Solved.
          </h2>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {caseStudies.map((study, i) => (
            <Reveal key={study.name} delay={0.08 * i}>
              <a
                href="#contact"
                className="group flex flex-col justify-between h-72 border border-line-soft bg-charcoal p-8 hover:border-sage/50 transition-colors duration-400"
              >
                <div className="flex items-start justify-between">
                  <span className="text-xs font-mono tracking-widest text-bone-faint">{study.industry}</span>
                  <ArrowUpRight
                    size={20}
                    className="text-bone-faint group-hover:text-sage group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                  />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-2xl text-bone mb-3">{study.name}</h3>
                  <p className="text-bone-dim leading-relaxed">{study.description}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
