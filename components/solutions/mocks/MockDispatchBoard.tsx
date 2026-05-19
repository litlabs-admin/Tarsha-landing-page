"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const technicians = [
  { name: "Jake R.", trade: "Plumber", status: "Available", available: true },
  { name: "Dan M.", trade: "Electrician", status: "On job", available: false },
  { name: "Chris P.", trade: "HVAC", status: "En route", available: false },
];

export function MockDispatchBoard() {
  return (
    <div className="rounded-2xl border border-border bg-surface p-4 shadow-sm space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <motion.span
            className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_0_4px_rgba(34,197,94,0.18)]"
            animate={{ opacity: [1, 0.25, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="text-[12px] font-medium text-ink">Dispatch board · Live</span>
        </div>
        <span className="text-[11px] text-ink-muted">3 techs tracked</span>
      </div>

      {/* Technician rows */}
      <div className="space-y-1.5">
        {technicians.map(({ name, trade, status, available }, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.36, ease: EASE }}
            className="flex items-center justify-between rounded-lg border border-border bg-surface-muted/60 px-3 py-2"
          >
            <div>
              <p className="text-[12px] font-medium text-ink">{name}</p>
              <p className="text-[11px] text-ink-muted">{trade}</p>
            </div>
            <span
              className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${
                available
                  ? "bg-green-100 text-green-700"
                  : "border border-border bg-surface-muted/60 text-ink-muted"
              }`}
            >
              {status}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Incoming emergency */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.45, duration: 0.4, ease: EASE }}
        className="flex items-center gap-3 rounded-xl border border-red-200 bg-red-50 p-3"
      >
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-red-200 bg-white text-lg shadow-sm"
        >
          🚨
        </motion.div>
        <div>
          <p className="text-[12px] font-semibold text-red-700">Burst pipe · flooding</p>
          <p className="text-[11px] text-red-500">4821 Maple Dr · Emergency</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.72, duration: 0.3, ease: EASE }}
        className="rounded-xl border border-accent/30 bg-accent/10 px-3.5 py-2"
      >
        <p className="text-[12px] font-medium text-ink">Jake R. dispatched · ETA 18 min · Owner notified</p>
      </motion.div>
    </div>
  );
}
