"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const destinations = [
  { label: "Billing", emoji: "💳", colorClass: "bg-blue-50 border-blue-200 text-blue-800" },
  { label: "Support", emoji: "🛠️", colorClass: "bg-green-50 border-green-200 text-green-800" },
  {
    label: "Sales",
    emoji: "📈",
    colorClass: "bg-accent/10 border-accent/40 text-ink",
    active: true,
  },
];

export function MockRouteFlow() {
  return (
    <div className="space-y-3">
      {/* Incoming call */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: EASE }}
        className="flex items-center gap-3 rounded-xl border border-border bg-surface p-3 shadow-sm"
      >
        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface-muted text-lg">
          📞
        </div>
        <div>
          <p className="text-[11px] text-ink-muted">Incoming call</p>
          <p className="text-[13px] font-semibold text-ink">Jennifer Walsh</p>
        </div>
        <motion.span
          animate={{ opacity: [1, 0.25, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="ml-auto h-2 w-2 rounded-full bg-green-500 shadow-[0_0_0_4px_rgba(34,197,94,0.18)]"
        />
      </motion.div>

      {/* AI qualifier */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.22, duration: 0.4, ease: EASE }}
        className="flex items-center gap-3 rounded-xl border border-accent/30 bg-accent/10 p-3"
      >
        <span className="text-[18px]">✨</span>
        <div>
          <p className="text-[11px] text-ink-muted">Tarsha AI qualifying</p>
          <p className="text-[13px] font-medium text-ink">"How can I help you today?"</p>
        </div>
      </motion.div>

      {/* Route destinations */}
      <div className="grid grid-cols-3 gap-1.5">
        {destinations.map(({ label, emoji, colorClass, active }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.42 + i * 0.09, duration: 0.38, ease: EASE }}
            className={`flex flex-col items-center gap-1.5 rounded-xl border p-2.5 ${colorClass} ${active ? "shadow-sm" : ""}`}
          >
            <span className="text-[18px]">{emoji}</span>
            <span className="text-[11px] font-medium">{label}</span>
          </motion.div>
        ))}
      </div>

      {/* Route result */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.82, duration: 0.4, ease: EASE }}
        className="flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-2.5"
      >
        <span className="text-ink-muted">→</span>
        <span className="text-[13px] text-ink-muted">Routed to</span>
        <span className="text-[13px] font-semibold text-ink">Sales team</span>
        <span className="ml-auto text-[11px] font-medium text-green-600">0.8s</span>
      </motion.div>
    </div>
  );
}
