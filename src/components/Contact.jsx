import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, CheckCircle2, Loader2 } from "lucide-react";
import Reveal from "./Reveal";
import { contact } from "../data/content";
import services from "../data/services";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  message: "",
};

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (values.phone && !/^[+()\d\s-]{7,}$/.test(values.phone)) {
    errors.phone = "Please enter a valid phone number.";
  }
  if (!values.message.trim()) errors.message = "Tell us a little about your business.";
  return errors;
}

export default function Contact() {
  const [values, setValues] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  }

  function handleBlur(e) {
    const { name } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors(validate({ ...values }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    setTouched({ name: true, email: true, phone: true, message: true });
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("loading");
    // Placeholder submit — wire up to EmailJS / an API route / backend of choice.
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setStatus("success");
    setValues(initialForm);
    setTouched({});
  }

  return (
    <section id="contact" className="relative bg-charcoal py-28 sm:py-36 border-t border-line-soft">
      <div className="container-px grid lg:grid-cols-[0.9fr_1.1fr] gap-16">
        <div>
          <Reveal>
            <p className="eyebrow mb-6">16 / Contact</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display font-semibold text-[clamp(2.2rem,5vw,3.6rem)] leading-[1.05] tracking-tight text-bone text-balance">
              Let's start a conversation.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 text-bone-dim text-lg leading-relaxed max-w-md">
              Tell us about your business and where you'd like it to grow. We'll
              come back with next steps.
            </p>
          </Reveal>

          <Reveal delay={0.25} className="mt-12 flex flex-col gap-5">
            <div className="flex items-center gap-4 text-bone-dim">
              <Mail size={18} className="text-sage shrink-0" />
              <span>themokshfit@gmail.com</span>
            </div>
            <div className="flex items-center gap-4 text-bone-dim">
              <Phone size={18} className="text-sage shrink-0" />
              <span>8104152021</span>
            </div>
            <div className="flex items-center gap-4 text-bone-dim">
              <MapPin size={18} className="text-sage shrink-0" />
              <span>Bhandup,Mumbai</span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <form onSubmit={handleSubmit} noValidate className="relative">
            <AnimatePresence>
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-10 bg-charcoal flex flex-col items-center justify-center text-center px-8 border border-sage/40"
                >
                  <CheckCircle2 size={40} className="text-sage mb-4" />
                  <h3 className="font-display text-2xl text-bone mb-2">Inquiry sent.</h3>
                  <p className="text-bone-dim mb-6">We'll be in touch shortly.</p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="text-sm text-sage border-b border-sage pb-0.5"
                  >
                    Send another inquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="grid sm:grid-cols-2 gap-6">
              <Field
                label="Name"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.name && errors.name}
                autoComplete="name"
              />
              <Field
                label="Email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && errors.email}
                autoComplete="email"
              />
              <Field
                label="Phone"
                name="phone"
                type="tel"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.phone && errors.phone}
                autoComplete="tel"
                optional
              />
              <Field
                label="Company"
                name="company"
                value={values.company}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="organization"
                optional
              />
            </div>

            <div className="mt-6">
              <label htmlFor="service" className="block text-xs font-mono tracking-widest text-bone-faint mb-2">
                SERVICE OF INTEREST
              </label>
              <select
                id="service"
                name="service"
                value={values.service}
                onChange={handleChange}
                className="w-full bg-transparent border border-line focus:border-sage px-4 py-3 text-bone outline-none transition-colors"
              >
                <option value="" className="bg-charcoal">Select a service</option>
                {services.map((s) => (
                  <option key={s.key} value={s.title} className="bg-charcoal">
                    {s.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-6">
              <label htmlFor="message" className="block text-xs font-mono tracking-widest text-bone-faint mb-2">
                MESSAGE
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={Boolean(touched.message && errors.message)}
                className={`w-full bg-transparent border px-4 py-3 text-bone outline-none transition-colors resize-none ${
                  touched.message && errors.message ? "border-red-400/60" : "border-line focus:border-sage"
                }`}
              />
              {touched.message && errors.message && (
                <p className="mt-2 text-xs text-red-400">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-8 inline-flex items-center gap-3 bg-sage text-ink px-8 py-4 text-sm font-medium tracking-wide hover:bg-sage-bright transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "loading" ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Sending…
                </>
              ) : (
                "Send Inquiry"
              )}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, name, value, onChange, onBlur, error, type = "text", autoComplete, optional }) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs font-mono tracking-widest text-bone-faint mb-2">
        {label.toUpperCase()} {optional && <span className="text-bone-faint/60 normal-case">(optional)</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        className={`w-full bg-transparent border px-4 py-3 text-bone outline-none transition-colors ${
          error ? "border-red-400/60" : "border-line focus:border-sage"
        }`}
      />
      {error && <p className="mt-2 text-xs text-red-400">{error}</p>}
    </div>
  );
}
