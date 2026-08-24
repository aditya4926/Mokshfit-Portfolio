const LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "Industries", href: "#industries" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative bg-ink border-t border-line-soft pt-20 pb-10">
      <div className="container-px">
        <div className="grid sm:grid-cols-[1.3fr_1fr_1fr] gap-12">
          <div>
            <p className="font-display text-2xl font-semibold tracking-wide text-bone mb-4">MOKSHFIT</p>
            <p className="text-bone-dim leading-relaxed max-w-xs">
              From digital presence to business growth. A digital system built
              for ambitious businesses.
            </p>
          </div>

          <div>
            <p className="eyebrow mb-5">Navigate</p>
            <ul className="flex flex-col gap-3">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-bone-dim hover:text-sage transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-5">Connect</p>
            <ul className="flex flex-col gap-3 text-bone-dim">
              <li>[Add Instagram handle]</li>
              <li>[Add LinkedIn URL]</li>
              <li>[Add contact email]</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-line-soft flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-bone-faint">© {new Date().getFullYear()} Mokshfit. All rights reserved.</p>
          <p className="text-xs text-bone-faint font-mono tracking-wide">Digital Growth Partner</p>
        </div>
      </div>
    </footer>
  );
}
