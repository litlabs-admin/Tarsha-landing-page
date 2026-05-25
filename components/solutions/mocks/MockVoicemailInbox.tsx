"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const BAR_HEIGHTS = [3, 5, 7, 4, 8, 6, 9, 5, 7, 3, 6, 8, 4, 5];

const messages = [
  {
    name: "Sarah Mitchell",
    duration: "0:52",
    time: "2:14 PM",
    transcript: `"Hi, calling about a quote for office cleaning, about 2,400 sq ft, weekly service..."`,
    active: true,
  },
  {
    name: "James R.",
    duration: "1:08",
    time: "11:47 AM",
    transcript: `"Wanted to follow up on the proposal you sent last week. Could someone call me back?"`,
    active: false,
  },
  {
    name: "Unknown",
    duration: "0:34",
    time: "9:22 AM",
    transcript: `"Hi, I found you online. Do you have availability for a new client this month?"`,
    active: false,
  },
];

export function MockVoicemailInbox() {
  return (
    <div className="space-y-4">
      {/* Header row */}
      <div className="flex items-center justify-between rounded-xl border border-border bg-surface-muted/60 px-4 py-3">
        <div className="flex items-center gap-2.5">
          <motion.span
            animate={{ opacity: [1, 0.25, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_0_4px_rgba(34,197,94,0.18)]"
          />
          <span className="text-[13px] font-medium text-ink">Voicemail inbox · 3 new</span>
        </div>
        <span className="text-[12px] text-ink-muted">Today</span>
      </div>

      {/* Message cards */}
      {messages.map(({ name, duration, time, transcript, active }, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.18, duration: 0.45, ease: EASE }}
          className="rounded-xl border border-border bg-surface p-4 shadow-sm"
        >
          {/* Top row */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <span className="text-[13px] font-semibold text-ink">{name}</span>
              <span className="text-[11px] text-ink-muted ml-2">{duration}</span>
            </div>
            <span className="text-[11px] text-ink-muted">{time}</span>
          </div>

          {/* Waveform */}
          <div className="flex items-end gap-0.5 mb-2">
            {BAR_HEIGHTS.map((h, j) => (
              active ? (
                <motion.span
                  key={j}
                  animate={{ height: [`${h}px`, `${h * 0.5}px`, `${h}px`] }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: j * 0.07,
                  }}
                  className="w-1.5 rounded-full bg-ink"
                  style={{ height: `${h}px` }}
                />
              ) : (
                <span
                  key={j}
                  className="w-1.5 rounded-full bg-ink/20"
                  style={{ height: `${h * 0.5}px` }}
                />
              )
            ))}
          </div>

          {/* Transcript */}
          <p className="text-[12px] italic leading-relaxed text-ink/60">{transcript}</p>
        </motion.div>
      ))}

      {/* Bottom badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7, duration: 0.45, ease: EASE }}
        className="flex items-center gap-2.5 rounded-xl border border-accent/30 bg-accent/10 px-4 py-2.5"
      >
        <motion.span
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-1.5 w-1.5 rounded-full bg-green-500"
        />
        <span className="text-[13px] font-medium text-ink">Transcripts delivered to your inbox</span>
      </motion.div>
    </div>
  );
}
