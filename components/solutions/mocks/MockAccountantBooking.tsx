"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

const slots = [
  { day: "Mon", time: "9:00 AM", selected: false },
  { day: "Tue", time: "2:00 PM", selected: true },
  { day: "Wed", time: "10:00 AM", selected: false },
];

function AnimatedCounter() {
  const count = useMotionValue(47);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    const ctrl = animate(count, [47, 48, 49], {
      duration: 3,
      ease: "linear",
      repeat: Infinity,
      repeatDelay: 1.2,
    });
    return () => ctrl.stop();
  }, [count]);

  return (
    <motion.span className="tabular-nums text-[13px] font-semibold text-ink">
      {rounded}
    </motion.span>
  );
}

export function MockAccountantBooking() {
  return (
    <div className="rounded-2xl border border-border bg-surface p-4 shadow-sm space-y-3">
      {/* Tax season header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-amber-400 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-amber-900">
            Tax season
          </span>
          <span className="text-[12px] font-medium text-ink-muted">High volume</span>
        </div>
        <div className="flex items-center gap-1 text-[12px] text-ink-muted">
          <AnimatedCounter /> calls today
        </div>
      </div>

      {/* Available slots */}
      <div className="space-y-1.5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.07em] text-ink-muted">Available slots</p>
        <div className="flex gap-2">
          {slots.map(({ day, time, selected }, i) => (
            <motion.button
              key={day}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.35, ease: EASE }}
              className={`flex-1 rounded-xl border py-2 text-center transition-none ${
                selected
                  ? "border-accent bg-accent/15 font-semibold text-ink"
                  : "border-border bg-surface-muted/60 text-ink-muted"
              }`}
            >
              <p className="text-[12px] font-medium">{day}</p>
              <p className="text-[11px]">{time}</p>
              {selected && (
                <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-wide text-ink/60">
                  Selected
                </p>
              )}
            </motion.button>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.4, ease: EASE }}
        className="rounded-xl border border-border bg-surface p-3 flex items-center gap-3"
      >
        <img
          src="https://i.pravatar.cc/150?img=60"
          alt=""
          className="h-9 w-9 rounded-full object-cover shrink-0"
        />
        <div>
          <p className="text-[12px] font-medium text-ink">Consultation confirmed · David Park, CPA</p>
          <p className="text-[11px] text-ink-muted">Tue 2:00 PM · Calendar invite sent</p>
        </div>
      </motion.div>
    </div>
  );
}
