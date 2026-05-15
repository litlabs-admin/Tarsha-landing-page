"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { assets } from "@/lib/assets";
import { cn } from "@/lib/cn";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  BadgeCheck,
  Headphones,
  PhoneOff,
  Plus,
  Sparkles,
  WifiOff,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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
              <span className="text-ink-muted">Tarsha AI pays you back.</span>
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
            videoSrc={assets.oldWayVideo}
            stats={[
              { icon: PhoneOff, text: "62% of missed calls never call back" },
              { icon: WifiOff, text: "Voicemail conversion: under 3%" },
            ]}
          />
          <ComparisonCard
            variant="new"
            label="The Tarsha AI way"
            title="Answered, qualified, and booked."
            description="Tarsha AI picks up on the first ring, captures the details that matter, and books the next step before the caller is off the phone."
            videoSrc={assets.newWayVideo}
            stats={[
              { icon: Zap, text: "Answers in under 0.4 seconds" },
              { icon: BadgeCheck, text: "Up to 38% lift in booked calls" },
            ]}
          />
        </div>

        {/* Why Tarsha — second subsection */}
        <WhyTarsha />
      </Container>
    </section>
  );
}

interface ComparisonCardProps {
  variant: "old" | "new";
  label: string;
  title: string;
  description: string;
  videoSrc: string;
  stats: { icon: typeof Zap; text: string }[];
}

function ComparisonCard({
  variant,
  label,
  title,
  description,
  videoSrc,
  stats,
}: ComparisonCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!videoRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        if (entry.isIntersecting) {
          videoRef.current?.play().catch(() => {});
        } else {
          videoRef.current?.pause();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, []);

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
      {/* Lime aura on the "new" card */}
      {isNew && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 0%, rgba(183,255,94,0.20) 0%, rgba(183,255,94,0) 70%)",
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
                : "bg-ink-faint/70 ring-2 ring-ink-faint/20",
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

      {/* Video frame */}
      <div
        className={cn(
          "relative aspect-[16/10] w-full overflow-hidden rounded-2xl",
          isNew ? "bg-ink" : "bg-surface-muted",
        )}
      >
        <video
          ref={videoRef}
          src={videoSrc}
          muted
          playsInline
          loop
          preload="metadata"
          className={cn(
            "h-full w-full object-cover transition-all duration-700",
            !isNew && "saturate-[0.55] opacity-90",
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

        {/* Dim guard for "old" card to lean into the muted feel */}
        {!isNew && inView && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-ink/[0.06]"
          />
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

        <ul className="mt-5 flex flex-col gap-2.5 border-t border-border/70 pt-4">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <li
                key={i}
                className="flex items-center gap-2.5 text-[13.5px] text-ink-muted"
              >
                <span
                  className={cn(
                    "flex h-6 w-6 items-center justify-center rounded-full",
                    isNew
                      ? "bg-accent/80 text-accent-ink"
                      : "bg-surface-muted text-ink-muted",
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
    </motion.div>
  );
}

function WhyTarsha() {
  const benefits = [
    {
      title: "Affordable, reliable, and always on",
      body: "Predictable monthly pricing — no hidden per-minute fees, no after-hours surcharges. Tarsha AI runs while you sleep.",
    },
    {
      title: "Simple to set up — we're here to help",
      body: "Most teams go live in under a day. Our onboarding crew helps you train Tarsha AI on your hours, scripts, and FAQs.",
    },
    {
      title: "High-quality, human-like voices",
      body: "Callers hear a warm, natural voice — not a robot reading a script. Tarsha AI listens, pauses, and responds like a person.",
    },
    {
      title: "Support by email, chat, or phone",
      body: "Real humans behind the AI. Reach out anytime — our team answers fast and helps you tune Tarsha AI as you grow.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="mt-32 md:mt-40">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20 lg:items-center">
        {/* Left: visual */}
        <ScrollReveal y={24} duration={0.9}>
          <WhyTarshaVisual />
        </ScrollReveal>

        {/* Right: copy + list */}
        <div
          onMouseLeave={() => setActiveIndex(0)}
        >
          <ScrollReveal y={16} duration={0.7}>
            <Eyebrow className="mb-5">Why Tarsha AI</Eyebrow>
          </ScrollReveal>
          <ScrollReveal y={20} duration={0.9} delay={0.05}>
            <h2 className="section-heading font-display text-ink">
              What makes our AI receptionist different?
            </h2>
          </ScrollReveal>
          <ScrollReveal y={16} duration={0.7} delay={0.1}>
            <p className="mt-5 max-w-lg text-[16px] leading-[1.65] text-ink-muted md:text-[17px]">
              No hold music. No missed calls. No frustrated customers. Tarsha AI
              makes your day easier and your callers happier.
            </p>
          </ScrollReveal>

          <ul className="mt-9 flex flex-col">
            {benefits.map((b, i) => (
              <BenefitRow
                key={i}
                index={i}
                title={b.title}
                body={b.body}
                isOpen={activeIndex === i}
                onOpen={() => setActiveIndex(i)}
                isLast={i === benefits.length - 1}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function BenefitRow({
  index,
  title,
  body,
  isOpen,
  onOpen,
  isLast,
}: {
  index: number;
  title: string;
  body: string;
  isOpen: boolean;
  onOpen: () => void;
  isLast: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const numberLabel = String(index + 1).padStart(2, "0");
  const active = isOpen || hovered;

  return (
    <motion.li
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.4 }}
      transition={{ duration: 0.55, ease: EASE, delay: 0.05 * index }}
      onMouseEnter={() => {
        setHovered(true);
        onOpen();
      }}
      onMouseLeave={() => setHovered(false)}
      onFocus={onOpen}
      onClick={onOpen}
      tabIndex={0}
      role="button"
      aria-expanded={isOpen}
      className={cn(
        "group relative cursor-pointer select-none border-t border-border/80 outline-none",
        isLast && "border-b",
      )}
    >
      {/* Soft hover backdrop */}
      <motion.span
        aria-hidden
        initial={false}
        animate={{ opacity: active ? 1 : 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="pointer-events-none absolute inset-x-0 inset-y-0 -mx-3 rounded-2xl bg-gradient-to-r from-accent/[0.07] via-accent/[0.04] to-transparent"
      />

      <div className="relative flex items-start gap-4 py-5 pr-2">
        {/* Editorial number prefix */}
        <motion.span
          aria-hidden
          animate={{
            color: active ? "var(--ink)" : "var(--ink-faint)",
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="mt-0.5 inline-block w-7 shrink-0 font-display text-[12px] font-medium tabular-nums tracking-[0.12em]"
        >
          {numberLabel}
        </motion.span>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3">
            <motion.span
              aria-hidden
              animate={{
                scale: active ? 1 : 0.6,
                opacity: active ? 1 : 0.4,
              }}
              transition={{ duration: 0.35, ease: EASE }}
              className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_0_4px_rgba(183,255,94,0.18)]"
            />
            <motion.h3
              animate={{
                x: active ? 0 : 0,
                color: active ? "var(--ink)" : "var(--ink-muted)",
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="font-display text-[18px] font-semibold tracking-[-0.01em] md:text-[19px]"
            >
              {title}
            </motion.h3>
          </div>

          {/* Body — animates with grid-template-rows trick for perfectly smooth height */}
          <motion.div
            initial={false}
            animate={{
              gridTemplateRows: isOpen ? "1fr" : "0fr",
              opacity: isOpen ? 1 : 0,
              marginTop: isOpen ? 10 : 0,
            }}
            transition={{
              gridTemplateRows: { duration: 0.45, ease: EASE },
              opacity: { duration: isOpen ? 0.35 : 0.2, ease: "easeOut", delay: isOpen ? 0.1 : 0 },
              marginTop: { duration: 0.4, ease: EASE },
            }}
            style={{ display: "grid" }}
            className="overflow-hidden pl-[18px]"
          >
            <div className="min-h-0 overflow-hidden">
              <motion.p
                initial={false}
                animate={{ y: isOpen ? 0 : -6 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="text-[14px] leading-[1.6] text-ink-muted md:text-[14.5px]"
              >
                {body}
              </motion.p>
            </div>
          </motion.div>
        </div>

        {/* Plus → X toggle icon */}
        <motion.span
          aria-hidden
          animate={{
            rotate: isOpen ? 45 : 0,
            backgroundColor: isOpen ? "var(--accent)" : "transparent",
            borderColor: active ? "var(--ink)" : "var(--border)",
            color: isOpen ? "var(--accent-ink)" : "var(--ink-muted)",
          }}
          transition={{ duration: 0.35, ease: EASE }}
          className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border"
        >
          <Plus className="h-3.5 w-3.5" strokeWidth={2.4} />
        </motion.span>
      </div>

      {/* Accent underline that grows on open */}
      <motion.span
        aria-hidden
        initial={false}
        animate={{ scaleX: isOpen ? 1 : 0 }}
        transition={{ duration: 0.55, ease: EASE }}
        className="absolute -bottom-px left-0 right-0 h-px origin-left bg-accent"
      />
    </motion.li>
  );
}

function WhyTarshaVisual() {
  // Polar layout: outer ring at inset-[14%] → avatars sit ON the ring at 12/3/6/9 o'clock.
  // Using top+left with motion's x/y (-50%/-50%) so centering composes with animated scale.
  const callers = [
    {
      src: "https://i.pravatar.cc/200?img=47",
      name: "Maya",
      label: "Booked appointment",
      position: { top: "14%", left: "50%" },
      angle: 0,
      delay: 0.0,
      pillSide: "top" as const,
    },
    {
      src: "https://i.pravatar.cc/200?img=68",
      name: "Daniel",
      label: "Quoted in 28 sec",
      position: { top: "50%", left: "86%" },
      angle: 90,
      delay: 0.15,
      pillSide: "left" as const,
    },
    {
      src: "https://i.pravatar.cc/200?img=32",
      name: "Priya",
      label: "Routed to owner",
      position: { top: "86%", left: "50%" },
      angle: 180,
      delay: 0.3,
      pillSide: "bottom" as const,
    },
    {
      src: "https://i.pravatar.cc/200?img=12",
      name: "Theo",
      label: "Message sent",
      position: { top: "50%", left: "14%" },
      angle: 270,
      delay: 0.45,
      pillSide: "right" as const,
    },
  ];

  // Ring center radius (% from container center) corresponding to inset-[14%].
  const RING_RADIUS = 36;

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[440px]">
      {/* Soft lime aura */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(closest-side, rgba(183,255,94,0.35) 0%, rgba(183,255,94,0.08) 50%, rgba(183,255,94,0) 75%)",
          filter: "blur(8px)",
        }}
      />

      {/* Outer ring (avatars sit on this) + traveling dot */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[14%] rounded-full border border-accent/55"
      >
        <span className="absolute -top-[3px] left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_0_4px_rgba(183,255,94,0.25)]" />
      </motion.div>

      {/* Middle ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[26%] rounded-full border border-ink/10"
      />

      {/* Hairline dashed inner ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[36%] rounded-full border border-dashed border-ink/[0.08]"
      />

      {/* Connector lines from each avatar to the Tarsha node */}
      <svg
        aria-hidden
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full"
      >
        {callers.map((c, i) => {
          const rad = (c.angle * Math.PI) / 180;
          const x2 = 50 + RING_RADIUS * Math.sin(rad);
          const y2 = 50 - RING_RADIUS * Math.cos(rad);
          return (
            <motion.line
              key={i}
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.45 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 1.1, ease: EASE, delay: 0.55 + c.delay }}
              x1="50"
              y1="50"
              x2={x2}
              y2={y2}
              stroke="rgba(17,17,17,0.18)"
              strokeWidth="0.18"
              strokeDasharray="0.6 0.8"
              vectorEffect="non-scaling-stroke"
            />
          );
        })}
      </svg>

      {/* Center Tarsha node — breathing pulse */}
      <motion.div
        style={{ position: "absolute", left: "50%", top: "50%", x: "-50%", y: "-50%" }}
      >
        <motion.div
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
          className="relative flex h-28 w-28 items-center justify-center rounded-full bg-ink text-white shadow-lift md:h-32 md:w-32"
        >
          {/* Outer pulse ring */}
          <motion.span
            animate={{ scale: [1, 1.5], opacity: [0.45, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
            className="absolute inset-0 rounded-full bg-accent/40"
          />
          <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-ink md:h-[72px] md:w-[72px]">
            <Headphones className="h-7 w-7 md:h-8 md:w-8" strokeWidth={1.75} />
          </div>
        </motion.div>
      </motion.div>

      {/* Orbiting caller avatars with status pills */}
      {callers.map((c, i) => (
        <OrbitAvatar
          key={i}
          src={c.src}
          name={c.name}
          label={c.label}
          delay={c.delay}
          pillSide={c.pillSide}
          position={c.position}
        />
      ))}
    </div>
  );
}

interface OrbitAvatarProps {
  src: string;
  name: string;
  label: string;
  delay: number;
  pillSide: "left" | "right" | "top" | "bottom";
  position: {
    top: string;
    left: string;
  };
}

function OrbitAvatar({
  src,
  name,
  label,
  delay,
  pillSide,
  position,
}: OrbitAvatarProps) {
  const [hovered, setHovered] = useState(false);

  // Outer wrapper: positioned via top/left, centered with motion's x/y (-50%/-50%).
  // These compose with animated scale on inner elements without being overridden.
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.4 }}
      transition={{ duration: 0.5, ease: EASE, delay }}
      style={{
        position: "absolute",
        top: position.top,
        left: position.left,
        x: "-50%",
        y: "-50%",
      }}
      className="z-10"
    >
      {/* Pop-in scale wrapper (composes cleanly because it's a separate node) */}
      <motion.div
        initial={{ scale: 0.7 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.6, ease: EASE, delay }}
      >
        {/* Float loop wrapper — independent rhythm per avatar */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{
            duration: 4 + delay * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay,
          }}
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
          className="relative"
        >
          <motion.div
            animate={{ scale: hovered ? 1.08 : 1 }}
            transition={{ type: "spring", stiffness: 320, damping: 22 }}
            className="relative h-16 w-16 overflow-hidden rounded-full bg-surface ring-2 ring-white shadow-lift"
          >
            <Image
              src={src}
              alt={`${name}, a Tarsha AI customer`}
              fill
              sizes="64px"
              className="object-cover"
            />
            {/* Active call indicator */}
            <motion.span
              animate={{ scale: [1, 1.15, 1], opacity: [0.85, 0.6, 0.85] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay,
              }}
              className="absolute -right-0.5 -top-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-emerald-500 ring-2 ring-white"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
            </motion.span>
          </motion.div>

          {/* Status pill — reveals on hover, always away from orbit center */}
          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.22, ease: EASE }}
                className={cn(
                  "absolute z-10 whitespace-nowrap",
                  pillSide === "left" &&
                    "right-[calc(100%+10px)] top-1/2 -translate-y-1/2",
                  pillSide === "right" &&
                    "left-[calc(100%+10px)] top-1/2 -translate-y-1/2",
                  pillSide === "top" &&
                    "bottom-[calc(100%+10px)] left-1/2 -translate-x-1/2",
                  pillSide === "bottom" &&
                    "top-[calc(100%+10px)] left-1/2 -translate-x-1/2",
                )}
              >
                <div className="flex flex-col items-stretch gap-0.5 rounded-2xl border border-border bg-surface/95 px-3 py-2 shadow-lift backdrop-blur-md">
                  <span className="text-[12px] font-semibold leading-tight text-ink">
                    {name}
                  </span>
                  <span className="text-[11px] leading-tight text-ink-muted">
                    {label}
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
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
