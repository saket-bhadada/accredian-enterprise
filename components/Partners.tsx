import Reveal from "./Reveal";
import Counter from "./Counter";

const ROW_1 = [
  { mark: "IIT", name: "IIT Delhi", tag: "IIT" },
  { mark: "IIT", name: "IIT Bombay", tag: "IIT" },
  { mark: "IIT", name: "IIT Kanpur", tag: "IIT" },
  { mark: "IIT", name: "IIT Madras", tag: "IIT" },
  { mark: "IIT", name: "IIT Roorkee", tag: "IIT" },
  { mark: "IIM", name: "IIM Bangalore", tag: "IIM" },
  { mark: "IIM", name: "IIM Kozhikode", tag: "IIM" },
  { mark: "IIM", name: "IIM Lucknow", tag: "IIM" },
];

const ROW_2 = [
  { mark: "GL", name: "Great Lakes", tag: "Global" },
  { mark: "NUS", name: "NUS Singapore", tag: "Global" },
  { mark: "MIT", name: "MIT xPRO", tag: "Global" },
  { mark: "G", name: "Google", tag: "Industry" },
  { mark: "MS", name: "Microsoft", tag: "Industry" },
  { mark: "AWS", name: "Amazon AWS", tag: "Industry" },
  { mark: "IBM", name: "IBM", tag: "Industry" },
  { mark: "TBL", name: "Tableau", tag: "Industry" },
];

function LogoPill({ mark, name, tag }: { mark: string; name: string; tag: string }) {
  return (
    <div className="flex items-center gap-3 shrink-0 rounded-xl border border-line-dark bg-navy px-5 py-3.5 mx-2.5">
      <span className="grid place-items-center w-9 h-9 rounded-lg bg-ink text-[11px] font-mono font-semibold text-gold-soft shrink-0">
        {mark}
      </span>
      <div>
        <p className="text-[13px] font-medium text-paper leading-tight whitespace-nowrap">
          {name}
        </p>
        <p className="text-[10px] text-mist leading-tight mt-0.5">{tag}</p>
      </div>
    </div>
  );
}

export default function Partners() {
  return (
    <section id="partners" className="bg-ink overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-24 lg:pt-28">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-gold-soft mb-3">
            Academic &amp; Industry Partners
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-paper text-balance">
            Built on world-class institutions.
          </h2>
          <p className="mt-4 text-[15.5px] leading-relaxed text-mist">
            Our programs are co-designed and certified by India&rsquo;s most
            prestigious academic institutions and global technology leaders.
          </p>
        </Reveal>
      </div>

      <div className="relative mt-14 py-1">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee">
          {[...ROW_1, ...ROW_1].map((p, i) => (
            <LogoPill key={`${p.name}-${i}`} {...p} />
          ))}
        </div>
        <div className="flex w-max animate-marquee mt-4" style={{ animationDirection: "reverse" }}>
          {[...ROW_2, ...ROW_2].map((p, i) => (
            <LogoPill key={`${p.name}-${i}`} {...p} />
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
        <Reveal>
          <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-center border-t border-line-dark pt-12">
            <div className="max-w-2xl">
              <h3 className="font-display text-xl font-semibold text-paper mb-3">
                Academic excellence meets industry relevance.
              </h3>
              <p className="text-[14px] leading-relaxed text-mist">
                Every program on our platform carries the credential of a
                top-tier institution. No fluff, no self-certification — real
                university partnerships, real accreditation.
              </p>
            </div>
            <div className="flex gap-10 shrink-0">
              <div>
                <p className="font-mono text-3xl font-semibold text-paper">
                  <Counter to={50} suffix="+" />
                </p>
                <p className="text-[12px] text-mist mt-1">
                  Partner Institutions
                </p>
              </div>
              <div>
                <p className="font-mono text-3xl font-semibold text-paper">
                  <Counter to={200} suffix="+" />
                </p>
                <p className="text-[12px] text-mist mt-1">
                  Certified Programs
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
