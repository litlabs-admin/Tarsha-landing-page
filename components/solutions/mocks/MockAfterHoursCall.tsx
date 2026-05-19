"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export function MockAfterHoursCall() {
  return (
    <div className="rounded-2xl border border-border bg-surface p-4 shadow-sm space-y-3">
      {/* Header row */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[13px] font-semibold text-ink">10:47 PM</p>
          <p className="text-[11px] text-ink-muted">Office closed</p>
        </div>
        <motion.span
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="rounded-full border border-accent/30 bg-accent/15 px-2.5 py-1 text-[11px] font-semibold text-ink"
        >
          Tarsha on duty
        </motion.span>
      </div>

      {/* Incoming call card */}
      <div className="flex items-center gap-3 rounded-xl border border-border bg-surface p-3">
        <motion.span
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          className="text-[18px]"
        >
          📞
        </motion.span>
        <div className="flex-1 min-w-0">
          <p className="text-[13px] font-semibold text-ink">Incoming call · answered</p>
          <p className="text-[11px] text-ink-muted">Robert Chen · &lt;2 seconds</p>
        </div>
        <span className="rounded-full border border-green-200 bg-green-50 px-2 py-0.5 text-[11px] font-semibold text-green-700 shrink-0">
          Live
        </span>
      </div>

      {/* Routing options */}
      <div className="grid grid-cols-2 gap-2">
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.38, ease: EASE }}
          className="rounded-xl border border-red-200 bg-red-50 p-3 text-center"
        >
          <p className="text-[11px] font-semibold text-red-700">Urgent</p>
          <p className="text-[11px] text-red-600 mt-0.5">→ On-call line</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.38, ease: EASE }}
          className="rounded-xl border border-accent/30 bg-accent/10 p-3 text-center"
        >
          <p className="text-[11px] font-semibold text-ink">Routine</p>
          <p className="text-[11px] text-ink-muted mt-0.5">→ Morning callback</p>
        </motion.div>
      </div>

      {/* Bottom summary */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.42, duration: 0.38, ease: EASE }}
        className="flex items-center gap-2.5 rounded-xl border border-border bg-surface-muted/60 px-3.5 py-2.5"
      >
        <motion.span
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="h-2 w-2 rounded-full bg-green-500 shrink-0"
        />
        <span className="text-[12px] text-ink-muted">
          7 calls handled overnight · Summary in your inbox
        </span>
      </motion.div>
    </div>
  );
}
