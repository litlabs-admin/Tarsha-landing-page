"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export function MockRestaurantReservation() {
  return (
    <div className="rounded-2xl border border-border bg-surface p-4 shadow-sm space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <motion.span
            className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_0_4px_rgba(34,197,94,0.18)]"
            animate={{ opacity: [1, 0.25, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="text-[12px] font-medium text-ink">Reservation line · Live</span>
        </div>
        <span className="text-[11px] text-ink-muted">Sat evening</span>
      </div>

      {/* Incoming request card */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.08, duration: 0.38, ease: EASE }}
        className="flex items-center gap-3 rounded-xl border border-border bg-surface-muted/60 p-3"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-lg shadow-sm"
        >
          🍽️
        </motion.div>
        <div>
          <p className="text-[12px] font-medium text-ink">Table for 4 · Saturday 7 PM</p>
          <p className="text-[11px] text-ink-muted">Maria L. · +1 (555) 849-2241</p>
        </div>
      </motion.div>

      {/* Chat exchange */}
      <div className="space-y-2">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.22, duration: 0.35, ease: EASE }}
          className="max-w-[85%] rounded-2xl rounded-tl-sm border border-border bg-surface-muted/60 px-3 py-2"
        >
          <p className="text-[12px] text-ink">"Do you have anything near the window?"</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.38, duration: 0.35, ease: EASE }}
          className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm border border-accent/30 bg-accent/10 px-3 py-2"
        >
          <p className="text-[12px] text-ink">"Window table secured for you — noted!"</p>
        </motion.div>
      </div>

      {/* Captured details */}
      <div className="grid grid-cols-2 gap-1.5">
        {[
          { label: "Party size", value: "4 guests" },
          { label: "Special request", value: "Window table" },
        ].map(({ label, value }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.52 + i * 0.1, duration: 0.3, ease: EASE }}
            className="rounded-xl border border-border bg-surface-muted/60 px-2.5 py-2 text-center"
          >
            <p className="text-[10px] text-ink-muted">{label}</p>
            <p className="text-[12px] font-semibold text-ink">{value}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.78, duration: 0.3, ease: EASE }}
        className="rounded-xl border border-accent/30 bg-accent/10 px-3.5 py-2"
      >
        <p className="text-[12px] font-medium text-ink">Confirmed · Sat May 22, 7:00 PM · Party of 4</p>
      </motion.div>
    </div>
  );
}
