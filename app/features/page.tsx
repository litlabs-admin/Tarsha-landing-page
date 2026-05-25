"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { brand } from "@/lib/assets";
import { cn } from "@/lib/cn";
import { motion } from "framer-motion";
import {
  CalendarCheck,
  Globe,
  MessageSquareText,
  Mic,
  Moon,
  PencilLine,
  PhoneForwarded,
} from "lucide-react";

// ─── Mock UI components ───────────────────────────────────────────────────────

function MockTranscript() {
  return (
    <div className="mt-4 overflow-hidden rounded-xl border border-border bg-surface shadow-sm">
      <div className="border-b border-border bg-surface-muted/60 px-4 py-2.5 text-[11px] font-medium uppercase tracking-[0.07em] text-ink-muted">
        New message
      </div>
      <div className="divide-y divide-border">
        {[
          { label: "Caller", value: "Sarah Mitchell" },
          { label: "Phone", value: "(619) 555-0142" },
          {
            label: "Message",
            value: "Calling about a quote for landscaping, backyard, roughly 3,000 sq ft.",
          },
        ].map(({ label, value }) => (
          <div key={label} className="flex items-start gap-3 px-4 py-3">
            <span className="mt-0.5 w-14 shrink-0 text-[12px] text-ink-muted">{label}</span>
            <span className="text-[13px] text-ink">{value}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 border-t border-border bg-surface-muted/40 px-4 py-2.5">
        <motion.span
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_0_3px_rgba(34,197,94,0.2)]"
        />
        <span className="text-[12px] text-ink-muted">Sent to your inbox • just now</span>
      </div>
    </div>
  );
}

function MockCalendar() {
  const days = ["M", "T", "W", "T", "F"];
  const dates = [
    [1, 2, 3, 4, 5],
    [8, 9, 10, 11, 12],
    [15, 16, 17, 18, 19],
    [22, 23, 24, 25, 26],
  ];
  const highlighted = 17;

  return (
    <div className="mt-4 overflow-hidden rounded-xl border border-border bg-surface p-3 shadow-sm">
      <div className="mb-2 flex items-center justify-between px-1">
        <span className="text-[12px] font-semibold text-ink">June 2025</span>
        <div className="flex gap-1">
          <div className="h-5 w-5 rounded bg-surface-muted" />
          <div className="h-5 w-5 rounded bg-surface-muted" />
        </div>
      </div>
      <div className="grid grid-cols-5 gap-1 text-center">
        {days.map((d) => (
          <div key={d} className="py-1 text-[11px] font-medium text-ink-muted">
            {d}
          </div>
        ))}
        {dates.map((week) =>
          week.map((date) =>
            date === highlighted ? (
              <motion.div
                key={date}
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="flex h-7 w-full items-center justify-center rounded-lg bg-accent text-[12px] font-medium text-accent-ink shadow-sm"
              >
                {date}
              </motion.div>
            ) : (
              <div
                key={date}
                className="flex h-7 w-full items-center justify-center rounded-lg text-[12px] font-medium text-ink hover:bg-surface-muted"
              >
                {date}
              </div>
            ),
          ),
        )}
      </div>
      <div className="mt-2 rounded-lg border border-accent/30 bg-accent/10 px-3 py-2">
        <span className="text-[12px] font-medium text-ink">Wed Jun 17 · 2:00 PM</span>
        <span className="ml-2 text-[12px] text-ink-muted">confirmed</span>
      </div>
    </div>
  );
}

const chatBubbleVariants = {
  hidden: (side: "left" | "right") => ({ opacity: 0, x: side === "left" ? -14 : 14 }),
  show: { opacity: 1, x: 0, transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] } },
};

const chatBubbles = [
  { text: '"What are your business hours?"', side: "left" as const },
  {
    text: "We're open Mon–Fri, 8 am–6 pm. I can also book you an appointment right now if you'd like!",
    side: "right" as const,
  },
  { text: '"Yes please, tomorrow afternoon?"', side: "left" as const },
  { text: "I've got 2 PM open. Shall I book that for you?", side: "right" as const },
];

function MockChat() {
  return (
    <motion.div
      className="mt-4 flex flex-col gap-2"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      variants={{ show: { transition: { staggerChildren: 0.11, delayChildren: 0.05 } } }}
    >
      {chatBubbles.map(({ text, side }, i) => (
        <motion.div
          key={i}
          custom={side}
          variants={chatBubbleVariants}
          className={cn(
            "max-w-[85%] rounded-2xl px-3.5 py-2.5 shadow-sm",
            side === "left"
              ? "self-start rounded-tl-sm border border-border bg-surface"
              : "self-end rounded-tr-sm bg-ink",
          )}
        >
          <p className={cn("text-[13px]", side === "left" ? "text-ink" : "text-white")}>{text}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}

function MockBilingual() {
  const languages = [
    { flag: "🇺🇸", label: "English" },
    { flag: "🇲🇽", label: "Spanish" },
    { flag: "🇫🇷", label: "French" },
    { flag: "🇩🇪", label: "German" },
  ];
  return (
    <div className="mt-4 space-y-3">
      <div className="flex flex-wrap gap-2">
        {languages.map(({ flag, label }, i) => (
          <motion.span
            key={label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[13px] font-medium",
              i === 1
                ? "border-accent/50 bg-accent/15 text-ink"
                : "border-border bg-surface text-ink/70",
            )}
          >
            {flag} {label}
          </motion.span>
        ))}
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.24, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1.5 text-[13px] text-ink-muted"
        >
          +32 more
        </motion.span>
      </div>
      <div className="rounded-xl border border-border bg-surface p-4 shadow-sm">
        <p className="text-[13px] font-medium text-ink-muted">Active greeting · Spanish</p>
        <p className="mt-1.5 text-[15px] text-ink">
          "¡Hola! Gracias por llamar. ¿En qué puedo ayudarte hoy?"
        </p>
      </div>
    </div>
  );
}

function MockTransfer() {
  return (
    <div className="mt-4 flex items-center justify-center gap-3">
      {(
        [
          { emoji: "📞", label: "Caller", bg: "bg-surface" },
          { emoji: "✨", label: "Tarsha AI", bg: "bg-accent/15 border-accent/30" },
          { emoji: "👤", label: "Your team", bg: "bg-surface" },
        ] as const
      ).map(({ emoji, label, bg }, i) => (
        <div key={label} className="flex items-center gap-3">
          {i > 0 && (
            <div className="flex items-center gap-1 text-ink/30">
              <div className="h-px w-5 bg-border" />
              <span className="text-[11px]">→</span>
            </div>
          )}
          <motion.div
            className="flex flex-col items-center gap-1.5"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className={cn(
                "flex h-11 w-11 items-center justify-center rounded-full border border-border shadow-sm",
                bg,
              )}
            >
              <span className="text-xl">{emoji}</span>
            </div>
            <p className="text-[11px] text-ink-muted">{label}</p>
          </motion.div>
        </div>
      ))}
    </div>
  );
}

function MockAfterHours() {
  return (
    <div className="mt-4 space-y-3">
      <div className="flex items-center gap-3 rounded-xl border border-border bg-surface p-4 shadow-sm">
        <span className="text-3xl">🕙</span>
        <div>
          <p className="text-[15px] font-semibold text-ink">10:47 PM</p>
          <div className="mt-0.5 flex items-center gap-1.5">
            <motion.span
              animate={{ opacity: [1, 0.25, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_0_3px_rgba(34,197,94,0.2)]"
            />
            <span className="text-[12px] text-ink-muted">Tarsha AI is active</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {[
          { value: "12", label: "calls tonight" },
          { value: "0", label: "missed" },
        ].map(({ value, label }) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-xl border border-border bg-surface p-3 text-center shadow-sm"
          >
            <p className="text-[20px] font-bold text-ink">{value}</p>
            <p className="text-[11px] text-ink-muted">{label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function MockRecording() {
  const bars = [3, 5, 8, 6, 4, 9, 7, 5, 3, 6, 8, 4, 7, 5, 9, 6, 4, 7, 5, 8];
  return (
    <div className="mt-4 space-y-3">
      <div className="rounded-xl border border-border bg-surface p-4 shadow-sm">
        <div className="mb-3 flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-ink text-white">
            <span className="text-[10px]">▶</span>
          </div>
          <div className="flex flex-1 items-end gap-0.5">
            {bars.map((h, i) => (
              <motion.div
                key={i}
                className={cn("w-1.5 rounded-full", i < 10 ? "bg-ink" : "bg-ink/20")}
                animate={{
                  height: [`${h * 2.5}px`, `${Math.max(h * 0.5, 1.5) * 2.5}px`, `${h * 2.5}px`],
                }}
                transition={{
                  duration: 0.9 + (i % 6) * 0.13,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.045,
                }}
              />
            ))}
          </div>
          <span className="text-[12px] text-ink-muted">1:32</span>
        </div>
        <div className="rounded-lg bg-surface-muted/80 px-3 py-2.5">
          <p className="text-[12px] italic leading-relaxed text-ink/70">
            "Thank you for calling. I'm Tarsha, your virtual receptionist. How can I help you
            today?"
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Bento card ───────────────────────────────────────────────────────────────

interface BentoCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

function BentoCard({ icon, title, desc, children, className, delay = 0 }: BentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -4,
        boxShadow:
          "0 12px 40px rgba(17,17,17,0.09), 0 2px 8px rgba(17,17,17,0.05), 0 0 0 1px rgba(17,17,17,0.07)",
        transition: { type: "spring", stiffness: 300, damping: 22 },
      }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 shadow-[0_1px_3px_rgba(17,17,17,0.04)] cursor-default",
        className,
      )}
    >
      {/* Subtle hover sheen */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br from-white/30 to-transparent" />

      <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-surface shadow-sm transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-rotate-3">
        {icon}
      </div>
      <h3 className="mt-3 text-[17px] font-semibold text-ink">{title}</h3>
      <p className="mt-1.5 text-[13px] leading-relaxed text-ink-muted">{desc}</p>
      {children}
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function FeaturesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-bg pt-[72px]">
        {/* Page hero */}
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <ScrollReveal y={12} duration={0.7} amount={0.4}>
              <Eyebrow asPill className="mb-6">
                <motion.span
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                  className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-accent"
                />
                <span className="text-ink-muted">Everything Tarsha AI does</span>
              </Eyebrow>
            </ScrollReveal>
            <ScrollReveal y={22} duration={0.95} delay={0.07} amount={0.3}>
              <h1 className="section-heading font-display text-ink">
                One AI receptionist,{" "}
                <span className="accent-underline">every feature</span> you need
              </h1>
            </ScrollReveal>
            <ScrollReveal y={16} duration={0.85} delay={0.14} amount={0.3}>
              <p className="mx-auto mt-5 max-w-xl text-[16px] leading-relaxed text-ink-muted">
                From answering calls to booking appointments and transferring to your team, Tarsha
                AI handles it all, 24/7, in any language.
              </p>
            </ScrollReveal>
            <ScrollReveal y={12} duration={0.7} delay={0.2} amount={0.4}>
              <div className="mt-8 flex items-center justify-center gap-3">
                <Button size="md" variant="primary" icon="arrow" href={brand.bookDemoUrl}>
                  Book a demo
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Bento grid */}
        <section className="mx-auto max-w-6xl px-6 pb-24">
          {/* Row 1 */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <BentoCard
              icon={<PencilLine className="h-4 w-4 text-ink/60" strokeWidth={1.5} />}
              title="Take messages"
              desc="Capture every important detail from your callers automatically and receive it in your inbox the moment the call ends."
              className="md:col-span-2"
              delay={0}
            >
              <MockTranscript />
            </BentoCard>

            <BentoCard
              icon={<CalendarCheck className="h-4 w-4 text-ink/60" strokeWidth={1.5} />}
              title="Book appointments"
              desc="Confirm a time directly or send a one-tap booking link. It shows up on your calendar automatically."
              delay={0.06}
            >
              <MockCalendar />
            </BentoCard>
          </div>

          {/* Row 2 */}
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
            <BentoCard
              icon={<MessageSquareText className="h-4 w-4 text-ink/60" strokeWidth={1.5} />}
              title="Answer questions"
              desc="Train Tarsha AI on your FAQ so customers get instant, accurate answers, no hold music, no waiting."
              delay={0.08}
            >
              <MockChat />
            </BentoCard>

            <BentoCard
              icon={<Globe className="h-4 w-4 text-ink/60" strokeWidth={1.5} />}
              title="Bilingual answering"
              desc="Speak with callers in their preferred language, English, Spanish, French and 35+ others, automatically detected."
              className="md:col-span-2"
              delay={0.12}
            >
              <MockBilingual />
            </BentoCard>
          </div>

          {/* Row 3 */}
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
            <BentoCard
              icon={<PhoneForwarded className="h-4 w-4 text-ink/60" strokeWidth={1.5} />}
              title="Transfer calls"
              desc="Route the right callers directly to you or a teammate, every time, instantly."
              delay={0.1}
            >
              <MockTransfer />
            </BentoCard>

            <BentoCard
              icon={<Moon className="h-4 w-4 text-ink/60" strokeWidth={1.5} />}
              title="After hours calls"
              desc="Tarsha AI never sleeps. Callers get help around the clock, even on weekends and holidays."
              delay={0.14}
            >
              <MockAfterHours />
            </BentoCard>

            <BentoCard
              icon={<Mic className="h-4 w-4 text-ink/60" strokeWidth={1.5} />}
              title="Call recording"
              desc="Every call recorded with a full transcript delivered to your inbox. Never miss context again."
              delay={0.18}
            >
              <MockRecording />
            </BentoCard>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
