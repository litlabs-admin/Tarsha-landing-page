"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email) setSubmitted(true);
  }

  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-[960px] px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="relative overflow-hidden rounded-3xl border border-border bg-surface px-8 py-12 md:px-12 shadow-card"
        >
          {/* Background accent glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-accent/10 blur-3xl" />

          <div className="relative flex flex-col items-center text-center">
            <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-border bg-surface-muted px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-muted">
              <Sparkles className="h-3 w-3 text-accent" />
              Weekly insights
            </span>

            <h2 className="font-display text-[1.75rem] font-bold tracking-tighter2 text-ink md:text-[2.25rem]">
              Tips for businesses that live and die{" "}
              <span className="relative inline-block">
                by the phone
                <span className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-accent" />
              </span>
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink-muted">
              One practical email per week. Real tactics for handling calls, converting leads, and
              running a tighter operation. No fluff.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="mt-8 flex items-center gap-2 rounded-full border border-border bg-surface-muted px-6 py-3 text-[14px] font-medium text-ink"
              >
                <span className="text-green-500">✓</span> You&apos;re in, check your inbox!
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 flex w-full max-w-md gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@yourbusiness.com"
                  className="flex-1 rounded-xl border border-border bg-bg px-4 py-3 text-[14px] text-ink placeholder:text-ink-faint focus:border-accent/60 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                />
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="flex items-center gap-2 rounded-xl bg-ink px-5 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-ink/80"
                >
                  Subscribe <ArrowRight className="h-4 w-4" />
                </motion.button>
              </form>
            )}

            <p className="mt-4 text-[12px] text-ink-faint">
              Join 3,400+ small business owners. Unsubscribe anytime.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
