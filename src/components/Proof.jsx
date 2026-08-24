import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { trust } from "../data/content";

export default function Proof() {
  const loopClients = [...trust.clients, ...trust.clients];

  return (
    <section className="relative bg-charcoal py-24 sm:py-32 border-t border-line-soft overflow-hidden">
      <div className="container-px">
        <Reveal>
          <p className="eyebrow mb-6">{trust.eyebrow}</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display font-semibold text-[clamp(1.8rem,4.5vw,3rem)] leading-[1.05] tracking-tight text-bone max-w-2xl text-balance">
            {trust.headline}
          </h2>
        </Reveal>
      </div>

      <div className="mt-16 relative">
        <div className="absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-charcoal to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-charcoal to-transparent z-10" />
        <motion.div
          className="flex gap-4 sm:gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        >
          {loopClients.map((client, i) => (
            <div
              key={`${client}-${i}`}
              className="shrink-0 border border-line-soft px-8 sm:px-10 py-6 sm:py-7 flex items-center"
            >
              <span className="font-display text-lg sm:text-2xl text-bone-dim whitespace-nowrap">
                {client}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
