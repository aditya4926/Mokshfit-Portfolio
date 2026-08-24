import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { brand } from "../data/content";

export default function Hero() {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });

  const sphereX = useTransform(sx, [-1, 1], [-18, 18]);
  const sphereY = useTransform(sy, [-1, 1], [-14, 14]);
  const blockX = useTransform(sx, [-1, 1], [12, -12]);
  const blockY = useTransform(sy, [-1, 1], [10, -10]);

  function handleMouseMove(e) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mx.set(x * 2);
    my.set(y * 2);
  }

  return (
    <section
      id="home"
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center overflow-hidden bg-ink"
    >
      {/* ambient glow */}
      <div
        className="pointer-events-none absolute -top-1/4 right-[-10%] w-[60vw] h-[60vw] rounded-full blur-3xl opacity-[0.12]"
        style={{ background: "radial-gradient(circle, var(--color-sage) 0%, transparent 70%)" }}
      />
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-40" />

      <div className="container-px relative z-10 w-full grid lg:grid-cols-[1.15fr_0.85fr] gap-16 items-center pt-28 pb-20">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow mb-6"
          >
            {brand.tagline}
          </motion.p>

          <h1 className="font-display font-semibold text-bone leading-[0.95] tracking-tight text-balance">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="block text-[clamp(3rem,8vw,6.5rem)]"
            >
              {brand.name}
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-8 max-w-xl text-lg sm:text-xl text-bone-dim leading-relaxed"
          >
            <span className="text-bone">{brand.positioning}</span> {brand.subline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-4 max-w-lg text-base text-bone-faint leading-relaxed"
          >
            We don't just build digital presence. We build systems that turn
            visibility into business growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-11 flex flex-wrap items-center gap-5"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 bg-sage text-ink px-7 py-3.5 text-sm font-medium tracking-wide transition-colors hover:bg-sage-bright"
            >
              Let's Work Together
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#approach"
              className="group inline-flex items-center gap-2 text-bone text-sm tracking-wide border-b border-line pb-1 hover:border-sage transition-colors"
            >
              Explore Our Approach
              <ArrowDown size={14} className="transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
          </motion.div>
        </div>

        {/* Signature geometric composition — sage cylinder + sphere + stone block,
            echoing the presentation's hero visual */}
        <div className="relative h-[360px] sm:h-[440px] lg:h-[520px] hidden sm:block" aria-hidden="true">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-[8%] bottom-[14%] w-[46%] aspect-square rounded-full"
            style={{
              x: sphereX,
              y: sphereY,
              background:
                "linear-gradient(155deg, var(--color-sage-bright) 0%, var(--color-sage) 55%, var(--color-sage-dim) 100%)",
              boxShadow: "0 40px 80px -20px rgba(139,149,116,0.35)",
            }}
          />
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            style={{ x: blockX, y: blockY }}
            className="absolute right-[6%] top-[10%] w-[38%] h-[72%]"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full"
              style={{
                background: "linear-gradient(160deg, var(--color-stone) 0%, #a49c88 100%)",
                boxShadow: "0 40px 90px -25px rgba(0,0,0,0.6)",
              }}
            />
          </motion.div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border border-line rounded-full opacity-40"
            style={{ margin: "auto", width: "80%", height: "80%" }}
          />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-bone-faint"
      >
        <span className="eyebrow text-[0.62rem]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-bone-faint to-transparent"
        />
      </motion.div>
    </section>
  );
}
