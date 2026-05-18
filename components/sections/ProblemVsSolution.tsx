"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { assets } from "@/lib/assets";
import { cn } from "@/lib/cn";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  PhoneOff,
  Sparkles,
  WifiOff,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { type ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

export function ProblemVsSolution() {
  return (
    <section
      id="problem-solution"
      aria-labelledby="comparison-heading"
      className="relative isolate overflow-hidden bg-bg py-16 md:py-20"
    >
      <Backdrop />

      <Container>
        {/* Editorial heading */}
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <ScrollReveal y={12} duration={0.7} amount={0.4}>
            <Eyebrow asPill className="mb-6">
              <span className="text-ink-muted">The cost of a missed call</span>
            </Eyebrow>
          </ScrollReveal>
          <ScrollReveal y={22} duration={0.95} delay={0.07} amount={0.3}>
            <h2
              id="comparison-heading"
              className="section-heading font-display text-ink"
            >
              Missed calls cost you.
              <br />
              <span className="text-accent">Tarsha AI</span>{" "}
              <span className="text-ink-muted">pays you back.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal y={16} duration={0.8} delay={0.15} amount={0.3}>
            <p className="mt-5 max-w-xl text-balance text-[16px] leading-[1.65] text-ink-muted md:text-[17px]">
              Every unanswered ring is a customer choosing the next business
              that picks up. Here&apos;s the difference one AI receptionist
              makes.
            </p>
          </ScrollReveal>
        </div>

        {/* Side-by-side comparison */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:mt-20 md:grid-cols-2 md:gap-8">
          <ComparisonCard
            variant="old"
            label="The old way"
            title="Voicemail. Dead air. Lost lead."
            description="Phone rings, nobody picks up. Caller hangs up, dials the next listing, and you never know they were there."
            stats={[
              { icon: PhoneOff, text: "62% of missed calls never call back" },
              { icon: WifiOff, text: "Voicemail conversion: under 3%" },
            ]}
          />
          <ComparisonCard
            variant="new"
            label="The Tarsha AI way"
            title="Answered, qualified, and booked."
            description={<><span className="text-accent font-semibold">Tarsha AI</span> picks up on the first ring, captures the details that matter, and books the next step before the caller is off the phone.</>}
            stats={[
              { icon: Zap, text: "Answers in under 0.4 seconds" },
              { icon: BadgeCheck, text: "Up to 38% lift in booked calls" },
            ]}
          />
        </div>

      </Container>
    </section>
  );
}

interface ComparisonCardProps {
  variant: "old" | "new";
  label: string;
  title: string;
  description: ReactNode;
  stats: { icon: typeof Zap; text: string }[];
}

function ComparisonCard({
  variant,
  label,
  title,
  description,
  stats,
}: ComparisonCardProps) {
  const isNew = variant === "new";

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        duration: 0.85,
        ease: EASE,
        delay: isNew ? 0.15 : 0.05,
      }}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-3xl border p-2",
        "transition-all duration-500 ease-out",
        isNew
          ? "border-border bg-surface shadow-card hover:shadow-lift"
          : "border-border/60 bg-surface/60 shadow-soft",
      )}
    >
      {/* Yellow aura on the "new" card */}
      {isNew && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 0%, rgba(255,208,0,0.18) 0%, rgba(255,208,0,0) 70%)",
          }}
        />
      )}

      {/* Header strip */}
      <div className="flex items-center justify-between px-3 pb-2.5 pt-2">
        <div className="flex items-center gap-2">
          <span
            className={cn(
              "h-2 w-2 rounded-full",
              isNew
                ? "bg-accent ring-2 ring-accent/30"
                : "bg-ink-muted/40 ring-2 ring-ink-muted/15",
            )}
          />
          <span
            className={cn(
              "text-[12px] font-medium tracking-[0.04em]",
              isNew ? "text-ink" : "text-ink-muted",
            )}
          >
            {label}
          </span>
        </div>
        {isNew && (
          <span className="flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 text-[11px] font-semibold text-accent-ink">
            <Sparkles className="h-3 w-3" strokeWidth={2.4} />
            Recommended
          </span>
        )}
      </div>

      {/* Image frame */}
      <div
        className={cn(
          "relative aspect-[16/10] w-full overflow-hidden rounded-2xl",
          isNew ? "bg-ink" : "bg-surface-muted",
        )}
      >
        <Image
          src={assets.heroProduct}
          alt={isNew ? "Tarsha AI receptionist dashboard" : "Missed call — voicemail dead end"}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className={cn(
            "object-cover object-top transition-all duration-700",
            !isNew && "saturate-[0.3] opacity-70",
          )}
        />

        {/* Subtle vignette */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(0,0,0,0.25) 100%)",
          }}
        />

        {/* Live indicator (only "new" card) */}
        {isNew && (
          <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-ink shadow-soft backdrop-blur-md">
            <motion.span
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="h-1.5 w-1.5 rounded-full bg-red-500"
            />
            LIVE
          </div>
        )}
      </div>

      {/* Body */}
      <div className="px-4 pb-5 pt-5 md:px-5 md:pb-6 md:pt-6">
        <h3
          className={cn(
            "font-display text-[22px] font-semibold tracking-[-0.015em] md:text-[26px]",
            isNew ? "text-ink" : "text-ink-muted",
          )}
        >
          {title}
        </h3>
        <p className="mt-2.5 text-[14.5px] leading-[1.6] text-ink-muted md:text-[15px]">
          {description}
        </p>

        <div className="mt-5 border-t border-border/70 pt-4">
          <p className={cn(
            "mb-2.5 text-[10.5px] font-semibold uppercase tracking-[0.1em]",
            isNew ? "text-accent" : "text-red-500/80",
          )}>
            {isNew ? "What changes" : "The problem"}
          </p>
          <ul className="flex flex-col gap-2.5">
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <li
                  key={i}
                  className="flex items-center gap-2.5 text-[13.5px] text-ink"
                >
                  <span
                    className={cn(
                      "flex h-6 w-6 shrink-0 items-center justify-center rounded-full",
                      isNew
                        ? "bg-accent/80 text-accent-ink"
                        : "bg-red-500/10 text-red-500",
                    )}
                  >
                    <Icon className="h-3.5 w-3.5" strokeWidth={2} />
                  </span>
                  <span>{s.text}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

function Backdrop() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-surface-muted/60 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-bg to-transparent"
      />
    </>
  );
}
