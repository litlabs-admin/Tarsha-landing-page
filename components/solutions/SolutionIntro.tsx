"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { motion } from "framer-motion";
import type { ComponentType } from "react";

interface SolutionIntroProps {
  eyebrow?: string;
  heading: string;
  paragraphs: string[];
  Illustration?: ComponentType;
}

const EASE = [0.22, 1, 0.36, 1] as const;

export function SolutionIntro({ eyebrow, heading, paragraphs, Illustration }: SolutionIntroProps) {
  return (
    <section className="bg-bg py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-3 md:gap-16">
          {/* Text — spans 2 of 3 columns */}
          <div className="md:col-span-2">
            {eyebrow && (
              <ScrollReveal y={10} amount={0.5} once>
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-muted">
                  {eyebrow}
                </p>
              </ScrollReveal>
            )}
            <ScrollReveal y={20} duration={0.9} amount={0.3} once>
              <h2 className="font-display text-[2rem] font-bold leading-tight text-ink md:text-[2.5rem]">
                {heading}
              </h2>
            </ScrollReveal>
            <div className="mt-6 space-y-4">
              {paragraphs.map((para, i) => (
                <ScrollReveal
                  key={i}
                  y={14}
                  duration={0.8}
                  delay={0.09 + i * 0.09}
                  amount={0.3}
                  once
                >
                  <p className="text-[16px] leading-relaxed text-ink-muted">{para}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Illustration */}
          {Illustration && (
            <motion.div
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.72, ease: EASE, delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <Illustration />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
