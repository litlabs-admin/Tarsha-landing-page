"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { motion } from "framer-motion";

interface SolutionIndustriesProps {
  eyebrow?: string;
  heading?: string;
  industries: string[];
}

const EASE = [0.22, 1, 0.36, 1] as const;

export function SolutionIndustries({
  eyebrow = "Industries served",
  heading = "Built for any business that relies on the phone",
  industries,
}: SolutionIndustriesProps) {
  return (
    <section className="bg-bg py-20 md:py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <ScrollReveal y={14} amount={0.4} once>
          <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-muted">
            {eyebrow}
          </p>
          <h2 className="mt-3 font-display text-[1.75rem] font-bold text-ink md:text-[2.25rem]">
            {heading}
          </h2>
        </ScrollReveal>

        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-2.5"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            show: { transition: { staggerChildren: 0.045, delayChildren: 0.1 } },
          }}
        >
          {industries.map((industry) => (
            <motion.span
              key={industry}
              variants={{
                hidden: { opacity: 0, scale: 0.88, y: 6 },
                show: {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: { duration: 0.38, ease: EASE },
                },
              }}
              whileHover={{
                scale: 1.04,
                backgroundColor: "rgba(255,208,0,0.14)",
                borderColor: "rgba(255,208,0,0.5)",
                transition: { duration: 0.2 },
              }}
              className="cursor-default rounded-full border border-border bg-surface px-4 py-2 text-[14px] font-medium text-ink transition-shadow hover:shadow-sm"
            >
              {industry}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
