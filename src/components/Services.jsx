import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import services from "../data/services";

export default function Services() {
  const [openKey, setOpenKey] = useState(services[0].key);

  return (
    <section id="services" className="relative bg-ink py-28 sm:py-36 border-t border-line-soft">
      <div className="container-px">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <div>
            <Reveal>
              <p className="eyebrow mb-6">06 / Services</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display font-semibold text-[clamp(2.2rem,5.5vw,4rem)] leading-[1.02] tracking-tight text-bone max-w-2xl text-balance">
                Everything seen before they choose you.
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="border-t border-line">
          {services.map((service, i) => {
            const isOpen = openKey === service.key;
            return (
              <Reveal key={service.key} delay={0.05 * i}>
                <motion.div
                  className="border-b border-line py-8 sm:py-10 cursor-pointer group"
                  onClick={() => setOpenKey(isOpen ? null : service.key)}
                >
                  <div className="flex items-center justify-between gap-6">
                    <div className="flex items-baseline gap-6 sm:gap-10">
                      <span className="font-mono text-sm text-sage tracking-widest">{service.number}</span>
                      <h3
                        className={`font-display font-semibold text-2xl sm:text-4xl transition-colors duration-300 ${
                          isOpen ? "text-sage-bright" : "text-bone group-hover:text-bone-dim"
                        }`}
                      >
                        {service.title}
                      </h3>
                    </div>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="shrink-0 text-bone-faint group-hover:text-sage transition-colors"
                    >
                      <ArrowUpRight size={26} />
                    </motion.span>
                  </div>

                  <motion.div
                    initial={false}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0,
                      marginTop: isOpen ? 24 : 0,
                    }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pl-0 sm:pl-[4.5rem] max-w-2xl">
                      <p className="text-bone-dim text-base sm:text-lg leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {service.items.map((item) => (
                          <span
                            key={item}
                            className="text-sm text-bone-dim border border-line px-4 py-2"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
