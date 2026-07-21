"use client";

import { useState, FormEvent, useRef } from "react";
import { Check, Mail, ArrowRight, Loader2, AlertCircle } from "lucide-react";
import Reveal from "./Reveal";
import { TEAM_SIZES } from "@/lib/schema";

const BENEFITS = [
  "Free 30-min platform walkthrough with your use case",
  "Custom program recommendation for your industry",
  "Pricing tailored to your team size and scope",
  "No commitment, no spam — just a conversation",
];

type Status = "idle" | "submitting" | "done" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: data.get("name") as string,
      email: data.get("email") as string,
      company: data.get("company") as string,
      teamSize: data.get("teamSize") as string,
      message: (data.get("message") as string) || undefined,
      website: (data.get("website") as string) || undefined,
    };

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus("done");
        return;
      }

      if (res.status === 429) {
        setErrorMessage(
          "Too many requests — please try again in a few minutes."
        );
        setStatus("error");
        return;
      }

      if (res.status === 400) {
        const body = await res.json();
        if (body.errors) {
          const messages = Object.entries(body.errors)
            .map(
              ([field, msgs]) =>
                `${field}: ${(msgs as string[]).join(", ")}`
            )
            .join(". ");
          setErrorMessage(messages);
        } else {
          setErrorMessage(body.error ?? "Please check your inputs.");
        }
        setStatus("error");
        return;
      }

      setErrorMessage("Something went wrong. Please try again or email us directly.");
      setStatus("error");
    } catch {
      setErrorMessage(
        "Something went wrong. Please try again or email us directly."
      );
      setStatus("error");
    }
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
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  {status === "error" && (
                    <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3">
                      <AlertCircle
                        size={16}
                        className="text-red-500 shrink-0 mt-0.5"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-[13px] text-red-700 leading-relaxed">
                          {errorMessage}
                        </p>
                        <button
                          type="button"
                          onClick={() => setStatus("idle")}
                          className="mt-1 text-[12px] font-semibold text-red-600 hover:text-red-800 underline underline-offset-2"
                        >
                          Try again
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Honeypot — visually hidden, focusable-by-bots only */}
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      left: "-9999px",
                      top: "-9999px",
                      width: "1px",
                      height: "1px",
                      overflow: "hidden",
                    }}
                  >
                    <label>
                      Website
                      <input
                        type="text"
                        name="website"
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </label>
                  </div>

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
