"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { motion } from "framer-motion";

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl: string;
}

interface SolutionTestimonialsProps {
  eyebrow?: string;
  testimonials: TestimonialItem[];
}

const EASE = [0.22, 1, 0.36, 1] as const;

function TestimonialCard({ item, delay }: { item: TestimonialItem; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -4,
        boxShadow:
          "0 12px 40px rgba(17,17,17,0.09), 0 2px 8px rgba(17,17,17,0.05), 0 0 0 1px rgba(17,17,17,0.07)",
        transition: { type: "spring", stiffness: 300, damping: 22 },
      }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, ease: EASE, delay }}
      className="group relative flex flex-col rounded-2xl border border-border bg-surface p-6 shadow-[0_1px_3px_rgba(17,17,17,0.04)]"
    >
      {/* Hover sheen */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br from-white/30 to-transparent" />

      {/* Avatar + author */}
      <div className="relative flex items-center gap-3">
        <div className="h-11 w-11 shrink-0 overflow-hidden rounded-full border border-border bg-surface-muted">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.avatarUrl}
            alt={item.author}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <p className="text-[14px] font-semibold text-ink">{item.author}</p>
          <p className="text-[12px] text-ink-muted">
            {item.role}, {item.company}
          </p>
        </div>
      </div>

      {/* Stars */}
      <div className="relative mt-4 flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: delay + 0.1 + i * 0.04, duration: 0.28, ease: EASE }}
            className="text-[14px] text-accent"
          >
            ★
          </motion.span>
        ))}
      </div>

      {/* Quote */}
      <blockquote className="relative mt-3 flex-1 text-[14px] leading-relaxed text-ink-muted">
        "{item.quote}"
      </blockquote>
    </motion.div>
  );
}

export function SolutionTestimonials({
  eyebrow = "What customers say",
  testimonials,
}: SolutionTestimonialsProps) {
  return (
    <section className="bg-surface-muted/40 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal y={12} amount={0.4} once className="mb-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-muted">
            {eyebrow}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <TestimonialCard key={item.author} item={item} delay={i * 0.09} />
          ))}
        </div>
      </div>
    </section>
  );
}
