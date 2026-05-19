"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const lines = [
  { name: "Jessica Moore", title: "Receptionist", status: "Active", overflow: false },
  { name: "David Kim", title: "Front desk", status: "Active", overflow: false },
  { name: "Maria Santos", title: "Receptionist", status: "Active", overflow: false },
  { name: "Tarsha AI", title: "Overflow · handling", status: "Overflow", overflow: true },
];

export function MockOverflowDashboard() {
  return (
    <div className="rounded-2xl border border-border bg-surface p-4 shadow-sm space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <motion.span
            className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_0_4px_rgba(34,197,94,0.18)]"
            animate={{ opacity: [1, 0.25, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="text-[12px] font-medium text-ink">Reception lines · Live</span>
        </div>
        <span className="text-[11px] text-ink-muted">4 lines active</span>
      </div>

      <div className="space-y-1.5">
        {lines.map(({ name, title, status, overflow }, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.14, duration: 0.4, ease: EASE }}
            className={`flex items-center justify-between rounded-lg px-3 py-2 ${
              overflow
                ? "border border-accent/30 bg-accent/10"
                : "border border-border bg-surface-muted/60"
            }`}
          >
            <div>
              <p className={`text-[12px] font-medium ${overflow ? "text-ink" : "text-ink"}`}>{name}</p>
              <p className="text-[11px] text-ink-muted">{title}</p>
            </div>
            <span
              className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${
                overflow
                  ? "bg-accent/20 text-ink"
                  : "bg-green-100 text-green-700"
              }`}
            >
              {status}
            </span>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7, duration: 0.3, ease: EASE }}
        className="flex items-center gap-1.5 rounded-xl border border-green-200 bg-green-50 px-3.5 py-2"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
        <p className="text-[12px] font-medium text-green-700">0 callers on hold · No wait time</p>
      </motion.div>
    </div>
  );
}
