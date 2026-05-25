"use client";

import { cn } from "@/lib/cn";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const messages = [
  { text: "What are your business hours?", side: "left" as const },
  {
    text: "We're open Mon–Fri, 8 AM to 6 PM, and weekends 9 AM to 2 PM.",
    side: "right" as const,
  },
  { text: "Do you offer free consultations?", side: "left" as const },
  {
    text: "Yes, first consultations are always free. Want me to book one for you?",
    side: "right" as const,
  },
  { text: "Yes please, tomorrow works.", side: "left" as const },
  {
    text: "Done! You're booked for Friday at 10 AM. Confirmation coming your way.",
    side: "right" as const,
  },
];

export function MockQAConversation() {
  return (
    <motion.div
      className="space-y-2"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={{ show: { transition: { staggerChildren: 0.13, delayChildren: 0.08 } } }}
    >
      {messages.map(({ text, side }, i) => (
        <motion.div
          key={i}
          variants={{
            hidden: { opacity: 0, x: side === "left" ? -14 : 14 },
            show: { opacity: 1, x: 0, transition: { duration: 0.38, ease: EASE } },
          }}
          className={cn("flex", side === "left" ? "justify-start" : "justify-end")}
        >
          <div
            className={cn(
              "max-w-[82%] rounded-2xl px-3.5 py-2.5 shadow-sm text-[13px] leading-relaxed",
              side === "left"
                ? "rounded-tl-sm border border-border bg-surface text-ink"
                : "rounded-tr-sm bg-ink text-white",
            )}
          >
            {text}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
