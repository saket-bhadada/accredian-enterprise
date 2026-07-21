"use client";

import { useState, FormEvent } from "react";
import { Check, Mail, ArrowRight, Loader2 } from "lucide-react";
import Reveal from "./Reveal";

const BENEFITS = [
  "Free 30-min platform walkthrough with your use case",
  "Custom program recommendation for your industry",
  "Pricing tailored to your team size and scope",
  "No commitment, no spam — just a conversation",
];

const TEAM_SIZES = [
  "1 – 10 employees",
  "11 – 50 employees",
  "51 – 200 employees",
  "201 – 500 employees",
  "501 – 1,000 employees",
  "1,000+ employees",
];

type Status = "idle" | "submitting" | "done";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    window.setTimeout(() => setStatus("done"), 900);
  }

  return (
    <section id="contact" className="bg-paper">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-28">
        <div className="grid lg:grid-cols-[0.85fr_1fr] gap-14 lg:gap-20">
          <Reveal>
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-indigo mb-3">
              Get in Touch
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink text-balance">
              Let&rsquo;s build your learning future together.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft max-w-md">
              Fill in the form and one of our enterprise L&amp;D consultants
              will reach out within 24 hours to understand your needs and
              schedule a personalized demo.
            </p>

            <ul className="mt-8 space-y-3.5">
              {BENEFITS.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="grid place-items-center w-5 h-5 rounded-full bg-ink text-gold-soft shrink-0 mt-0.5">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span className="text-[13.5px] leading-relaxed text-ink-soft">
                    {b}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10 pt-8 border-t border-line-light">
              <p className="text-[12px] text-ink-soft mb-2">
                Or reach us directly:
              </p>
              <a
                href="mailto:enterprise@accredian.com"
                className="inline-flex items-center gap-2 text-[14px] font-semibold text-ink hover:text-indigo transition-colors"
              >
                <Mail size={16} strokeWidth={2} />
                enterprise@accredian.com
              </a>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="rounded-2xl border border-line-light bg-paper-card p-7 sm:p-9 shadow-sm">
              {status === "done" ? (
                <div className="py-12 text-center">
                  <div className="mx-auto grid place-items-center w-14 h-14 rounded-full bg-ink text-gold-soft mb-5">
                    <Check size={24} strokeWidth={2.5} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-ink mb-2">
                    Request received.
                  </h3>
                  <p className="text-[14px] text-ink-soft max-w-xs mx-auto">
                    A member of our enterprise team will reach out within 24
                    hours to schedule your demo.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Full Name" required>
                      <input
                        required
                        type="text"
                        name="name"
                        className="form-input"
                        placeholder="Jordan Lee"
                      />
                    </Field>
                    <Field label="Work Email" required>
                      <input
                        required
                        type="email"
                        name="email"
                        className="form-input"
                        placeholder="jordan@company.com"
                      />
                    </Field>
                  </div>

                  <Field label="Company Name" required>
                    <input
                      required
                      type="text"
                      name="company"
                      className="form-input"
                      placeholder="Your organization"
                    />
                  </Field>

                  <Field label="Team Size" required>
                    <select required name="teamSize" defaultValue="" className="form-input">
                      <option value="" disabled>
                        Select team size
                      </option>
                      {TEAM_SIZES.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <Field label="Message" hint="(optional)">
                    <textarea
                      name="message"
                      rows={3}
                      className="form-input resize-none"
                      placeholder="Tell us about your team's goals…"
                    />
                  </Field>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-[14px] font-semibold text-paper hover:bg-navy transition-colors disabled:opacity-70"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Request a Free Demo
                        <ArrowRight size={16} strokeWidth={2.5} />
                      </>
                    )}
                  </button>

                  <p className="text-[11.5px] text-center text-ink-soft/80">
                    By submitting, you agree to our{" "}
                    <a href="#" className="underline hover:text-ink">
                      Privacy Policy
                    </a>
                    . No spam, ever.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  required,
  hint,
  children,
}: {
  label: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-[12.5px] font-medium text-ink mb-2">
        {label}
        {required && <span className="text-gold ml-0.5">*</span>}
        {hint && <span className="text-ink-soft/70 font-normal"> {hint}</span>}
      </span>
      {children}
    </label>
  );
}
