"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const messages = [
  { text: "Hola, ¿hablan español?", side: "left" as const, lang: "ES" },
  { text: "¡Por supuesto! ¿En qué le puedo ayudar hoy?", side: "right" as const, lang: "ES" },
  { text: "Actually, I prefer English — can you switch?", side: "left" as const, lang: "EN" },
  { text: "Of course! How can I help you today?", side: "right" as const, lang: "EN" },
];

export function MockBilingualCall() {
  return (
    <div className="rounded-2xl border border-border bg-surface p-4 shadow-sm space-y-3">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <motion.span
            animate={{ opacity: [1, 0.25, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_0_4px_rgba(34,197,94,0.18)]"
          />
          <span className="text-[13px] font-medium text-ink">Tarsha AI · Live</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="rounded-full border border-border bg-surface-muted px-2 py-0.5 text-[11px] font-medium text-ink">
            🇺🇸 EN
          </span>
          <span className="rounded-full border border-border bg-surface-muted px-2 py-0.5 text-[11px] font-medium text-ink">
            🇪🇸 ES
          </span>
        </div>
      </div>

      {/* Messages */}
      <div className="space-y-2">
        {messages.map(({ text, side, lang }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: side === "left" ? -12 : 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.18, duration: 0.38, ease: EASE }}
            className={`flex items-end gap-1.5 ${side === "left" ? "justify-start" : "justify-end"}`}
          >
            {side === "left" && (
              <span className="rounded-full bg-surface-muted px-1.5 py-0.5 text-[9px] font-bold text-ink-muted shrink-0 mb-0.5">
                {lang}
              </span>
            )}
            <div
              className={`max-w-[78%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed shadow-sm ${
                side === "left"
                  ? "rounded-tl-sm border border-border bg-surface text-ink"
                  : "rounded-tr-sm bg-ink text-white"
              }`}
            >
              {text}
            </div>
            {side === "right" && (
              <span className="rounded-full bg-surface-muted px-1.5 py-0.5 text-[9px] font-bold text-ink-muted shrink-0 mb-0.5">
                {lang}
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
