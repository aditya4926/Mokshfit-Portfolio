import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

export default function MajorClient() {
return ( <Reveal delay={0.08}> <a
     href="#contact"
     className="group relative block border border-line-soft bg-charcoal p-8 sm:p-10 hover:border-sage/50 transition-colors duration-400 overflow-hidden"
   >
{/* Subtle background glow */} <div className="absolute -top-24 -right-24 w-56 h-56 bg-sage/5 blur-3xl rounded-full group-hover:bg-sage/10 transition-all duration-700" />


    <div className="relative z-10 flex flex-col md:flex-row md:items-end md:justify-between gap-10">
      <div>
        <div className="flex items-center gap-4 mb-8">
          <span className="text-xs font-mono tracking-widest text-sage">
            MAJOR CLIENT
          </span>

          <span className="h-px w-12 bg-line-soft group-hover:w-20 group-hover:bg-sage/50 transition-all duration-500" />
        </div>

        <h3 className="font-display font-semibold text-[clamp(2.5rem,6vw,5rem)] leading-none tracking-tight text-bone">
          Tilak Studio
        </h3>

        <p className="mt-5 max-w-xl text-bone-dim leading-relaxed">
          A featured Mokshfit client focused on building a stronger
          digital presence and creating meaningful business growth.
        </p>
      </div>

      <div className="flex items-center justify-between md:justify-end gap-6">
        <span className="text-xs font-mono tracking-widest text-bone-faint">
          FEATURED
        </span>

        <ArrowUpRight
          size={24}
          className="text-bone-faint group-hover:text-sage group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
        />
      </div>
    </div>
  </a>
</Reveal>


);
}
