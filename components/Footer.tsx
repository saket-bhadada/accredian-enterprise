import { Globe, Send, AtSign, Mail } from "lucide-react";

const COLUMNS = [
  {
    title: "Solutions",
    links: [
      "Enterprise Learning",
      "Custom Programs",
      "Analytics Dashboard",
      "HR Integrations",
      "Certificates",
    ],
  },
  {
    title: "Programs",
    links: [
      "Data Science & AI",
      "Product Management",
      "Leadership",
      "Business Analytics",
      "Cloud Computing",
    ],
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Blog", "Press", "Contact"],
  },
  {
    title: "Resources",
    links: [
      "Case Studies",
      "Whitepapers",
      "Webinars",
      "L&D Playbook",
      "API Docs",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-line-dark">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-10">
        <div className="grid lg:grid-cols-[1.2fr_2fr] gap-14">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <span className="grid place-items-center w-8 h-8 rounded-[7px] bg-gold text-ink font-display font-bold text-sm">
                A
              </span>
              <span className="font-display font-semibold text-[15px] tracking-tight text-paper">
                Accredian<span className="text-gold">Enterprise</span>
              </span>
            </a>
            <p className="mt-5 text-[13.5px] leading-relaxed text-mist max-w-xs">
              India&rsquo;s most trusted enterprise learning platform.
              Upskill your workforce with programs from IITs, IIMs, and
              global universities.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[Globe, Send, AtSign, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href={Icon === Mail ? "mailto:enterprise@accredian.com" : "#"}
                  className="grid place-items-center w-9 h-9 rounded-full border border-line-dark text-mist hover:text-paper hover:border-mist transition-colors"
                  aria-label="social link"
                >
                  <Icon size={15} strokeWidth={1.75} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-gold-soft mb-4">
                  {col.title}
                </p>
                <ul className="space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-[13px] text-mist hover:text-paper transition-colors"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-7 border-t border-line-dark flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-[12px] text-mist">
            © 2026 Accredian. All rights reserved. Accredian is a registered
            trademark.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (l) => (
                <a
                  key={l}
                  href="#"
                  className="text-[12px] text-mist hover:text-paper transition-colors"
                >
                  {l}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
