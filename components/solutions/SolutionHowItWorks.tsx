"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { motion } from "framer-motion";
import type { ComponentType } from "react";

export interface Step {
  title: string;
  description: string;
  Illustration?: ComponentType;
}

interface SolutionHowItWorksProps {
  eyebrow?: string;
  heading?: string;
  steps: Step[];
}

const EASE = [0.22, 1, 0.36, 1] as const;

export function SolutionHowItWorks({
  eyebrow = "How it works",
  heading = "Up and running in minutes",
  steps,
}: SolutionHowItWorksProps) {
  return (
    <section className="bg-surface-muted/30 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal y={14} amount={0.4} once className="mb-14 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-muted">
            {eyebrow}
          </p>
          <h2 className="mt-3 font-display text-[2rem] font-bold text-ink md:text-[2.5rem]">
            {heading}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {steps.map(({ title, description, Illustration }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -4,
                boxShadow:
                  "0 12px 40px rgba(17,17,17,0.09), 0 2px 8px rgba(17,17,17,0.05), 0 0 0 1px rgba(17,17,17,0.07)",
                transition: { type: "spring", stiffness: 300, damping: 22 },
              }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 shadow-[0_1px_3px_rgba(17,17,17,0.04)]"
            >
              {/* Hover sheen */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br from-white/30 to-transparent" />

              {/* Large decorative step number */}
              <div className="pointer-events-none absolute -right-1 -top-4 select-none font-display text-[7rem] font-extrabold leading-none text-border/50">
                {i + 1}
              </div>

              {/* Step indicator */}
              <div className="relative mb-4 flex h-9 w-9 items-center justify-center rounded-full border-2 border-accent bg-accent/15 text-[14px] font-bold text-ink">
                {i + 1}
              </div>

              <h3 className="relative text-[17px] font-semibold text-ink">{title}</h3>
              <p className="relative mt-2 text-[13px] leading-relaxed text-ink-muted">
                {description}
              </p>

              {Illustration && (
                <div className="relative mt-5">
                  <Illustration />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
