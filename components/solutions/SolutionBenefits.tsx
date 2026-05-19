"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { cn } from "@/lib/cn";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import type { ComponentType } from "react";

export interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
  MockUI: ComponentType;
  wide?: boolean;
}

interface SolutionBenefitsProps {
  eyebrow?: string;
  heading?: string;
  benefits: Benefit[];
}

function BentoCard({
  icon: Icon,
  title,
  description,
  MockUI,
  wide,
  delay = 0,
}: Benefit & { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -4,
        boxShadow:
          "0 12px 40px rgba(17,17,17,0.09), 0 2px 8px rgba(17,17,17,0.05), 0 0 0 1px rgba(17,17,17,0.07)",
        transition: { type: "spring", stiffness: 300, damping: 22 },
      }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 shadow-[0_1px_3px_rgba(17,17,17,0.04)] cursor-default",
        wide && "md:col-span-2",
      )}
    >
      {/* Hover sheen */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br from-white/30 to-transparent" />

      <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-surface shadow-sm transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-rotate-3">
        <Icon className="h-4 w-4 text-ink/60" strokeWidth={1.5} />
      </div>
      <h3 className="mt-3 text-[17px] font-semibold text-ink">{title}</h3>
      <p className="mt-1.5 text-[13px] leading-relaxed text-ink-muted">{description}</p>
      <MockUI />
    </motion.div>
  );
}

export function SolutionBenefits({
  eyebrow = "What you get",
  heading,
  benefits,
}: SolutionBenefitsProps) {
  return (
    <section className="bg-surface-muted/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal y={14} amount={0.4} once className="mb-12 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-muted">
            {eyebrow}
          </p>
          {heading && (
            <h2 className="mt-3 font-display text-[2rem] font-bold text-ink md:text-[2.5rem]">
              {heading}
            </h2>
          )}
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {benefits.map((benefit, i) => (
            <BentoCard key={benefit.title} {...benefit} delay={i * 0.07} />
          ))}
        </div>
      </div>
    </section>
  );
}
