"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { brand } from "@/lib/assets";
import { motion } from "framer-motion";
import type { ComponentType } from "react";

interface SolutionHeroProps {
  eyebrow: string;
  titleBefore: string;
  titleHighlight: string;
  titleAfter?: string;
  subtitle: string;
  MockUI: ComponentType;
  primaryCta?: string;
}

const EASE = [0.22, 1, 0.36, 1] as const;

export function SolutionHero({
  eyebrow,
  titleBefore,
  titleHighlight,
  titleAfter = "",
  subtitle,
  MockUI,
  primaryCta = "Book a demo",
}: SolutionHeroProps) {
  return (
    <section className="relative overflow-hidden bg-bg py-20 md:py-28">
      {/* Subtle dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, #18130A 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black, transparent)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black, transparent)",
        }}
      />
      {/* Yellow glow behind mock */}
      <div className="pointer-events-none absolute right-0 top-1/2 h-[520px] w-[520px] -translate-y-1/2 translate-x-1/3 rounded-full bg-accent/20 blur-[90px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-14 md:grid-cols-2 md:gap-16">
          {/* Left: copy */}
          <div>
            <ScrollReveal y={12} duration={0.7} amount={0.4} once>
              <Eyebrow asPill className="mb-6">
                <motion.span
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                  className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-accent"
                />
                {eyebrow}
              </Eyebrow>
            </ScrollReveal>

            <ScrollReveal y={22} duration={0.95} delay={0.07} amount={0.3} once>
              <h1 className="section-heading font-display text-ink">
                {titleBefore}
                <span className="accent-underline">{titleHighlight}</span>
                {titleAfter}
              </h1>
            </ScrollReveal>

            <ScrollReveal y={16} duration={0.85} delay={0.14} amount={0.3} once>
              <p className="mt-5 max-w-md text-[17px] leading-relaxed text-ink-muted">
                {subtitle}
              </p>
            </ScrollReveal>

            <ScrollReveal y={12} duration={0.7} delay={0.2} amount={0.4} once>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button size="lg" variant="primary" icon="arrow" href={brand.bookDemoUrl}>
                  {primaryCta}
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: mock UI */}
          <motion.div
            initial={{ opacity: 0, x: 28, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.95, ease: EASE, delay: 0.3 }}
            className="relative"
          >
            {/* Card glow */}
            <div className="absolute -inset-5 rounded-3xl bg-accent/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-border bg-surface p-6 shadow-[0_8px_48px_rgba(17,17,17,0.1)]">
              <MockUI />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
