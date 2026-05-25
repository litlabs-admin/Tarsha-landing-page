"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const fields = [
  { label: "Name", value: "Sarah Mitchell" },
  { label: "Matter type", value: "Personal injury" },
  { label: "Conflict check", value: "Clear, no conflicts" },
];

export function MockLegalIntake() {
  return (
    <div className="rounded-2xl border border-border bg-surface p-4 shadow-sm space-y-3">
      <div className="flex items-center gap-2">
        <motion.span
          className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_0_4px_rgba(34,197,94,0.18)]"
          animate={{ opacity: [1, 0.25, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        />
        <span className="text-[12px] font-medium text-ink">Intake call · in progress</span>
      </div>

      <div className="space-y-2">
        {fields.map(({ label, value }, i) => (
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
          src="https://i.pravatar.cc/150?img=52"
          alt=""
          className="h-9 w-9 rounded-full object-cover shrink-0"
        />
        <div>
          <p className="text-[12px] font-medium text-ink">Routing to → Marcus Webb, Partner</p>
          <p className="text-[11px] text-ink-muted">Personal injury · Available now</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.85, duration: 0.3, ease: EASE }}
        className="rounded-xl border border-accent/30 bg-accent/10 px-3.5 py-2"
      >
        <p className="text-[12px] font-medium text-ink">Conflict-free · Marked urgent · Notes ready</p>
      </motion.div>
    </div>
  );
}
