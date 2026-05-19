"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { motion } from "framer-motion";

interface SolutionTestimonialProps {
  quote: string;
  author: string;
  role: string;
}

export function SolutionTestimonial({ quote, author, role }: SolutionTestimonialProps) {
  const initial = author.trim()[0]?.toUpperCase() ?? "T";

  return (
    <section className="bg-surface py-20 md:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <ScrollReveal y={18} amount={0.3} once>
          <motion.div
            whileHover={{
              y: -3,
              boxShadow: "0 16px 48px rgba(17,17,17,0.08)",
              transition: { type: "spring", stiffness: 280, damping: 22 },
            }}
            className="relative overflow-hidden rounded-2xl border border-border bg-surface-muted/50 p-8 shadow-[0_2px_10px_rgba(17,17,17,0.04)] md:p-10"
          >
            {/* Decorative large quote mark */}
            <div className="pointer-events-none absolute -right-2 -top-8 select-none font-display text-[11rem] font-extrabold leading-none text-border/70">
              "
            </div>

            {/* Stars */}
            <div className="mb-5 flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="text-[18px]"
                >
                  ★
                </motion.span>
              ))}
            </div>

            <blockquote className="relative text-[17px] leading-relaxed text-ink md:text-[19px]">
              "{quote}"
            </blockquote>

            <div className="mt-7 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20 text-[15px] font-bold text-ink">
                {initial}
              </div>
              <div>
                <p className="text-[14px] font-semibold text-ink">{author}</p>
                <p className="text-[13px] text-ink-muted">{role}</p>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
