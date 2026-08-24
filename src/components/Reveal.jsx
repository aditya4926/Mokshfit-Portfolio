import { motion } from "framer-motion";

/**
 * Fade-up viewport reveal used across sections for consistent, restrained motion.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  duration = 0.7,
  className = "",
  as = "div",
  once = true,
}) {
  const Component = motion[as] ?? motion.div;
  return (
    <Component
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </Component>
  );
}
