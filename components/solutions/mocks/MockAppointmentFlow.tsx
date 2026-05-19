"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const days = [
  { day: "Mon", date: "19", available: true, selected: false },
  { day: "Tue", date: "20", available: true, selected: false },
  { day: "Wed", date: "21", available: true, selected: true },
  { day: "Thu", date: "22", available: false, selected: false },
  { day: "Fri", date: "23", available: true, selected: false },
];

export function MockAppointmentFlow() {
  return (
    <div className="rounded-2xl border border-border bg-surface p-4 shadow-sm space-y-3">
      <div className="flex items-center gap-2">
        <motion.span
          className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_0_4px_rgba(34,197,94,0.18)]"
          animate={{ opacity: [1, 0.25, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        />
        <span className="text-[12px] font-medium text-ink">Booking in progress</span>
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
          <p className="text-[12px] text-ink">"Can I book an appointment for next week?"</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.22, duration: 0.35, ease: EASE }}
          className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm border border-accent/30 bg-accent/10 px-3 py-2"
        >
          <p className="text-[12px] text-ink">"Wednesday at 10 AM works — shall I book it?"</p>
        </motion.div>
      </div>

      {/* 5-day calendar strip */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.4, ease: EASE }}
        className="flex gap-1.5"
      >
        {days.map(({ day, date, available, selected }, i) => (
          <motion.div
            key={day}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 + i * 0.07, duration: 0.28, ease: EASE }}
            className={`flex-1 rounded-xl border py-2 text-center ${
              selected
                ? "border-accent bg-accent text-ink"
                : available
                ? "border-border bg-surface-muted/60 text-ink-muted"
                : "border-border/50 bg-surface opacity-40"
            }`}
          >
            <p className="text-[11px] font-medium">{day}</p>
            <p className="text-[13px] font-semibold">{date}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Confirmation tiles */}
      <div className="grid grid-cols-2 gap-2">
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.35, ease: EASE }}
          className="rounded-xl border border-green-200 bg-green-50 px-3 py-2"
        >
          <p className="text-[11px] font-semibold text-green-700">Booked</p>
          <p className="text-[12px] text-green-800">Wed · 10:00 AM</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.92, duration: 0.35, ease: EASE }}
          className="rounded-xl border border-accent/30 bg-accent/10 px-3 py-2"
        >
          <p className="text-[11px] font-semibold text-ink">Reminder</p>
          <p className="text-[12px] text-ink-muted">24 hrs prior</p>
        </motion.div>
      </div>
    </div>
  );
}
