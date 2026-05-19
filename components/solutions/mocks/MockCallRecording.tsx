"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const BAR_HEIGHTS = [2, 4, 6, 3, 7, 5, 8, 4, 6, 2, 5, 7, 3, 8, 6, 9, 5, 7, 4, 6, 3, 8, 5, 7, 4, 6, 3, 5];
const PLAYED_COUNT = 11;

export function MockCallRecording() {
  return (
    <div className="space-y-4">
      {/* Caller info card */}
      <div className="rounded-xl border border-border bg-surface-muted/60 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-ink/10 flex items-center justify-center text-[13px]">
            👤
          </div>
          <div>
            <p className="text-[13px] font-semibold text-ink">Michael Torres</p>
            <p className="text-[11px] text-ink-muted">Sales inquiry · inbound</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-[13px] font-semibold text-ink">4:23</p>
          <p className="text-[11px] text-ink-muted">May 20</p>
        </div>
      </div>

      {/* Player card */}
      <div className="rounded-xl border border-border bg-surface p-4 shadow-sm">
        {/* Controls row */}
        <div className="flex items-center gap-3 mb-3">
          <div className="h-9 w-9 rounded-full bg-ink flex items-center justify-center text-white text-[12px]">
            ▶
          </div>
          <div className="flex-1 h-1.5 rounded-full bg-border">
            <div className="w-2/5 h-full rounded-full bg-ink" />
          </div>
          <span className="text-[12px] text-ink-muted">1:47 / 4:23</span>
        </div>

        {/* Waveform */}
        <div className="flex items-end justify-center gap-[2px] py-1">
          {BAR_HEIGHTS.map((h, i) => {
            const played = i < PLAYED_COUNT;
            return played ? (
              <motion.span
                key={i}
                animate={{ height: [`${h}px`, `${h * 0.7}px`, `${h}px`] }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.06,
                }}
                className="w-[3px] rounded-full bg-ink"
                style={{ height: `${h}px` }}
              />
            ) : (
              <span
                key={i}
                className="w-[3px] rounded-full bg-ink/20"
                style={{ height: `${h}px` }}
              />
            );
          })}
        </div>
      </div>

      {/* Search badge */}
      <div className="flex items-center gap-2.5 rounded-xl border border-border bg-surface px-4 py-2.5">
        <span className="text-[14px]">🔍</span>
        <span className="text-[12px] text-ink-muted">Searchable · full transcript available</span>
      </div>

      {/* Compliance badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.45, ease: EASE }}
        className="flex items-center gap-2.5 rounded-xl border border-accent/30 bg-accent/10 px-4 py-2.5"
      >
        <motion.span
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-1.5 w-1.5 rounded-full bg-green-500"
        />
        <span className="text-[13px] font-medium text-ink">Recording stored securely · HIPAA-ready</span>
      </motion.div>
    </div>
  );
}
