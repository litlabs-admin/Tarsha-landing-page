"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const lines = [
  { speaker: "Caller", text: "Hi, I'm calling about a quote for landscaping." },
  {
    speaker: "Tarsha AI",
    text: "Happy to help! Could I get your name and the best number to reach you?",
  },
  { speaker: "Caller", text: "It's Michael Reed, (619) 555-0182." },
  {
    speaker: "Tarsha AI",
    text: "Got it. I've noted everything, someone from the team will follow up shortly.",
  },
];

export function MockPhoneCall() {
  return (
    <div className="space-y-4">
      {/* Call status */}
      <div className="flex items-center justify-between rounded-xl border border-border bg-surface-muted/60 px-4 py-3">
        <div className="flex items-center gap-2.5">
          <motion.span
            animate={{ opacity: [1, 0.25, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_0_4px_rgba(34,197,94,0.18)]"
          />
          <span className="text-[13px] font-medium text-ink">Call active · Tarsha AI</span>
        </div>
        <span className="tabular-nums text-[12px] text-ink-muted">0:48</span>
      </div>

      {/* Live transcript */}
      <div className="space-y-3">
        {lines.map(({ speaker, text }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.2, duration: 0.45, ease: EASE }}
            className="flex items-start gap-3"
          >
            <span
              className={`mt-0.5 w-16 shrink-0 text-[11px] font-semibold ${
                speaker === "Tarsha AI" ? "text-accent-ink/70" : "text-ink-muted"
              }`}
            >
              {speaker}
            </span>
            <p className="text-[13px] leading-relaxed text-ink">{text}</p>
          </motion.div>
        ))}
      </div>

      {/* Summary sent badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.1, duration: 0.45, ease: EASE }}
        className="flex items-center gap-2.5 rounded-xl border border-accent/30 bg-accent/10 px-4 py-2.5"
      >
        <motion.span
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-1.5 w-1.5 rounded-full bg-green-500"
        />
        <span className="text-[13px] font-medium text-ink">Summary sent to your inbox</span>
      </motion.div>
    </div>
  );
}
