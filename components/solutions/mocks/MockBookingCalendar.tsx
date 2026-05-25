"use client";

import { cn } from "@/lib/cn";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const slots = [
  { time: "9:00 AM", available: true },
  { time: "10:30 AM", available: false },
  { time: "11:00 AM", available: true },
  { time: "2:00 PM", available: true, selected: true },
  { time: "3:30 PM", available: true },
  { time: "5:00 PM", available: false },
];

export function MockBookingCalendar() {
  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-[14px] font-semibold text-ink">Thursday, June 19</span>
        <motion.span
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="rounded-full border border-accent/40 bg-accent/10 px-2.5 py-0.5 text-[11px] font-medium text-ink"
        >
          Live availability
        </motion.span>
      </div>

      {/* Time slots */}
      <div className="grid grid-cols-3 gap-1.5">
        {slots.map(({ time, available, selected }, i) => (
          <motion.div
            key={time}
            initial={{ opacity: 0, scale: 0.88 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07, duration: 0.35, ease: EASE }}
            className={cn(
              "flex items-center justify-center rounded-lg border py-2.5 text-[12px] font-medium",
              selected
                ? "border-accent bg-accent text-accent-ink shadow-sm"
                : available
                  ? "border-border bg-surface text-ink"
                  : "cursor-not-allowed border-border bg-surface-muted/60 text-ink/25",
            )}
          >
            {time}
          </motion.div>
        ))}
      </div>

      {/* Confirmation */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.45, ease: EASE }}
        className="rounded-xl border border-border bg-surface p-3.5 shadow-sm"
      >
        <div className="flex items-center gap-2">
          <span className="text-[18px]">✓</span>
          <div>
            <p className="text-[13px] font-semibold text-ink">Thu Jun 19 · 2:00 PM, confirmed</p>
            <p className="mt-0.5 text-[12px] text-ink-muted">
              Calendar invite sent · Reminder 1 hr before
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
