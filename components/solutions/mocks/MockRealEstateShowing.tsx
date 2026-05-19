"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const qualCriteria = [
  { label: "Pre-approved", check: true },
  { label: "Timeline: 60 days", check: true },
  { label: "Budget: $620k", check: true },
  { label: "Decision maker", check: true },
];

export function MockRealEstateShowing() {
  return (
    <div className="rounded-2xl border border-border bg-surface p-4 shadow-sm space-y-3">
      <div className="flex items-center gap-2">
        <motion.span
          className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_0_4px_rgba(34,197,94,0.18)]"
          animate={{ opacity: [1, 0.25, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        />
        <span className="text-[12px] font-medium text-ink">Buyer inquiry · Qualifying</span>
      </div>

      {/* Buyer card */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.4, ease: EASE }}
        className="rounded-xl border border-border bg-surface-muted/60 p-3 flex items-center gap-3"
      >
        <img
          src="https://i.pravatar.cc/150?img=33"
          alt=""
          className="h-9 w-9 rounded-full object-cover shrink-0"
        />
        <div>
          <p className="text-[12px] font-medium text-ink">Alex &amp; Jamie Foster</p>
          <p className="text-[11px] text-ink-muted">3BR in Riverside · Ready to move</p>
        </div>
      </motion.div>

      {/* 2×2 qualification grid */}
      <div className="grid grid-cols-2 gap-1.5">
        {qualCriteria.map(({ label, check }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 + i * 0.12, duration: 0.3, ease: EASE }}
            className="flex items-center gap-1.5 rounded-lg border border-green-200 bg-green-50 px-2.5 py-2"
          >
            <span className="text-green-600 text-[12px]">✓</span>
            <span className="text-[11px] font-medium text-green-800">{label}</span>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.85, duration: 0.3, ease: EASE }}
        className="rounded-xl border border-accent/30 bg-accent/10 px-3.5 py-2"
      >
        <p className="text-[12px] font-medium text-ink">Showing confirmed · Thu May 22, 2:00 PM</p>
      </motion.div>
    </div>
  );
}
