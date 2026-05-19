"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const criteria = [
  { label: "Budget confirmed", confirmed: true },
  { label: "Timeline: within 3 months", confirmed: true },
  { label: "Decision maker on call", confirmed: true },
];

export function MockLeadQualScore() {
  return (
    <div className="rounded-2xl border border-border bg-surface p-4 shadow-sm space-y-3">
      <div className="flex items-center gap-2">
        <motion.span
          className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_0_4px_rgba(34,197,94,0.18)]"
          animate={{ opacity: [1, 0.25, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        />
        <span className="text-[12px] font-medium text-ink">Lead qualification · Running</span>
      </div>

      <div className="space-y-2">
        {criteria.map(({ label, confirmed }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.4, ease: EASE }}
            className="flex items-center justify-between rounded-lg border border-border bg-surface-muted/60 px-3 py-2"
          >
            <span className="text-[12px] text-ink-muted">{label}</span>
            <motion.span
              initial={{ backgroundColor: "#E5E7EB", color: "#6B7280" }}
              whileInView={{ backgroundColor: confirmed ? "#dcfce7" : "#E5E7EB", color: confirmed ? "#15803d" : "#6B7280" }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 + 0.35, duration: 0.3, ease: EASE }}
              className="rounded-full px-2 py-0.5 text-[11px] font-semibold"
            >
              {confirmed ? "Confirmed" : "Asking…"}
            </motion.span>
          </motion.div>
        ))}
      </div>

      {/* Score bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.75, duration: 0.3, ease: EASE }}
        className="space-y-1.5"
      >
        <div className="flex items-center justify-between">
          <span className="text-[11px] text-ink-muted">Lead score</span>
          <span className="text-[12px] font-semibold text-green-600">83 · Hot lead</span>
        </div>
        <div className="h-2 w-full rounded-full bg-surface-muted overflow-hidden">
          <motion.div
            initial={{ width: "0%" }}
            whileInView={{ width: "83%" }}
            viewport={{ once: true }}
            transition={{ delay: 0.9, duration: 0.8, ease: EASE }}
            className="h-full rounded-full bg-green-500"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.1, duration: 0.3, ease: EASE }}
        className="rounded-xl border border-accent/30 bg-accent/10 px-3.5 py-2"
      >
        <p className="text-[12px] font-medium text-ink">Added to callback queue · Priority: high</p>
      </motion.div>
    </div>
  );
}
