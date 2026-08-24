import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import industries from "../data/industries";

export default function Industries() {
  return (
    <section id="industries" className="relative bg-charcoal py-28 sm:py-36 border-t border-line-soft">
      <div className="container-px">
        <Reveal>
          <p className="eyebrow mb-6">09 / Expertise</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display font-semibold text-[clamp(2.2rem,5.5vw,4rem)] leading-[1.02] tracking-tight text-bone max-w-3xl text-balance">
            Industries where local visibility matters.
          </h2>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line">
          {industries.map((industry, i) => (
            <Reveal key={industry.title} delay={0.04 * i}>
              <div className="group relative bg-charcoal hover:bg-ink transition-colors duration-500 p-8 sm:p-10 h-52 flex flex-col justify-between overflow-hidden">
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "radial-gradient(circle at 20% 20%, rgba(139,149,116,0.14) 0%, transparent 60%)",
                  }}
                />
                <ArrowUpRight
                  size={22}
                  className="relative text-bone-faint group-hover:text-sage group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                />
                <div className="relative">
                  <h3 className="font-display font-semibold text-2xl sm:text-3xl text-bone group-hover:translate-x-1 transition-transform duration-300">
                    {industry.title}
                  </h3>
                  <p className="mt-2 text-sm text-bone-faint tracking-wide">{industry.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
