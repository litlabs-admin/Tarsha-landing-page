"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const claimFields = [
  { label: "Incident date", value: "May 19, 2026" },
  { label: "Property address", value: "4821 Maple Drive" },
  { label: "Loss type", value: "Water damage" },
];

export function MockInsuranceClaim() {
  return (
    <div className="rounded-2xl border border-border bg-surface p-4 shadow-sm space-y-3">
      <div className="flex items-center gap-2">
        <span className="rounded-full bg-red-500 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
          Live
        </span>
        <span className="text-[12px] font-medium text-ink">First notice of loss · Active</span>
      </div>

      <div className="space-y-2">
        {claimFields.map(({ label, value }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.18, duration: 0.4, ease: EASE }}
            className="flex items-center justify-between rounded-lg border border-border bg-surface-muted/60 px-3 py-2"
          >
            <span className="text-[12px] text-ink-muted">{label}</span>
            <span className="flex items-center gap-1.5 text-[12px] font-medium text-ink">
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.18 + 0.32, duration: 0.22, ease: EASE }}
                className="text-green-500"
              >
                ✓
              </motion.span>
              {value}
            </span>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.65, duration: 0.4, ease: EASE }}
        className="rounded-xl border border-border bg-surface p-3 flex items-center gap-3"
      >
        <img
          src="https://i.pravatar.cc/150?img=47"
          alt=""
          className="h-9 w-9 rounded-full object-cover shrink-0"
        />
        <div>
          <p className="text-[12px] font-medium text-ink">Assigned → Laura Chen, Claims Adjuster</p>
          <p className="text-[11px] text-ink-muted">Property claims · Notified immediately</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.85, duration: 0.3, ease: EASE }}
        className="rounded-xl border border-accent/30 bg-accent/10 px-3.5 py-2"
      >
        <p className="text-[12px] font-medium text-ink">Claim #TRS-2847 opened · Details emailed</p>
      </motion.div>
    </div>
  );
}
