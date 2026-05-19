"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export interface Stat {
  value: string;
  label: string;
}

interface SolutionStatsProps {
  stats: Stat[];
}

const EASE = [0.22, 1, 0.36, 1] as const;

export function SolutionStats({ stats }: SolutionStatsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="border-y border-border bg-surface py-14">
      <div ref={ref} className="mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-2 gap-px bg-border/40 overflow-hidden rounded-2xl md:grid-cols-4">
          {stats.map(({ value, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.09 }}
              className="flex flex-col items-center bg-surface px-8 py-8 text-center"
            >
              <span className="font-display text-[2.5rem] font-bold leading-none tracking-tight text-ink">
                {value}
              </span>
              <span className="mt-2.5 text-[13px] leading-snug text-ink-muted">{label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
