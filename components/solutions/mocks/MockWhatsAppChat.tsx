"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const messages = [
  { text: "Hi! Are you open for appointments this week?", side: "left" as const },
  { text: "Hi! Yes, we have availability. Are you a new or returning client?", side: "right" as const },
  { text: "New client, I'd like a consultation please", side: "left" as const },
  {
    text: "Great! I have Thursday 2:00 PM or Friday 10:30 AM available. Which works better?",
    side: "right" as const,
  },
];

export function MockWhatsAppChat() {
  return (
    <div className="rounded-2xl overflow-hidden border border-border shadow-sm">
      {/* WhatsApp header */}
      <div className="bg-[#075E54] px-4 py-3 flex items-center gap-2.5">
        <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center text-[16px] shrink-0">
          ✨
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-white text-[13px] font-semibold leading-none">Tarsha AI</p>
          <p className="text-white/70 text-[10px] mt-0.5">online</p>
        </div>
        <motion.span
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="h-2 w-2 rounded-full bg-green-400 ml-auto shrink-0"
        />
      </div>

      {/* Chat area */}
      <div className="bg-[#ECE5DD] p-3 space-y-2">
        {messages.map(({ text, side }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.38, ease: EASE }}
            className={`flex ${side === "right" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] rounded-lg px-3 py-2 text-[12px] leading-relaxed shadow-sm ${
                side === "left"
                  ? "rounded-tl-none bg-white text-[#111]"
                  : "rounded-tr-none bg-[#DCF8C6] text-[#111]"
              }`}
            >
              {text}
              {side === "right" && (
                <p className="text-[9px] text-[#4FC3F7]/80 text-right mt-0.5">✓✓</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
