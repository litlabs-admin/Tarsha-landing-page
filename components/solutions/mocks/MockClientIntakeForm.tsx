"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const intakeFields = [
  { label: "Name", value: "Jordan Rivera" },
  { label: "Reason for call", value: "New client inquiry" },
  { label: "Preferred callback", value: "Tomorrow, 10–12 AM" },
];

export function MockClientIntakeForm() {
  return (
    <div className="rounded-2xl border border-border bg-surface p-4 shadow-sm space-y-3">
      <div className="flex items-center gap-2">
        <motion.span
          className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_0_4px_rgba(34,197,94,0.18)]"
          animate={{ opacity: [1, 0.25, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        />
        <span className="text-[12px] font-medium text-ink">Client intake · in progress</span>
      </div>

      {/* Chat bubbles */}
      <div className="space-y-2">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05, duration: 0.35, ease: EASE }}
          className="max-w-[80%] rounded-2xl rounded-tl-sm border border-border bg-surface-muted/60 px-3 py-2"
        >
          <p className="text-[12px] text-ink">"I'd like to know more about your services."</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.35, ease: EASE }}
          className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm border border-accent/30 bg-accent/10 px-3 py-2"
        >
          <p className="text-[12px] text-ink">"Of course! Can I get your name to get started?"</p>
        </motion.div>
      </div>

      {/* Intake fields populating */}
      <div className="space-y-2">
        {intakeFields.map(({ label, value }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 + i * 0.18, duration: 0.4, ease: EASE }}
            className="flex items-center justify-between rounded-lg border border-border bg-surface-muted/60 px-3 py-2"
          >
            <span className="text-[12px] text-ink-muted">{label}</span>
            <span className="flex items-center gap-1.5 text-[12px] font-medium text-ink">
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35 + i * 0.18 + 0.3, duration: 0.22, ease: EASE }}
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
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.05, duration: 0.3, ease: EASE }}
        className="rounded-xl border border-accent/30 bg-accent/10 px-3.5 py-2"
      >
        <p className="text-[12px] font-medium text-ink">Summary sent to team · 14s ago</p>
      </motion.div>
    </div>
  );
}
