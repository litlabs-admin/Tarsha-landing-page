"use client";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { motion, useInView } from "framer-motion";
import React from "react";
import {
  ArrowRight,
  BookOpen,
  ChevronRight,
  Clock,
  CreditCard,
  Layers,
  Mic,
  Phone,
  Play,
  Settings,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

// ─── Step illustration mocks ──────────────────────────────────────────────────

function IllusForwarding() {
  const digits = ["**21*", "8 3 3", "–, –", "8 2 7", "#"];
  return (
    <div className="rounded-2xl border border-border bg-surface-muted/60 p-5 shadow-soft">
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-muted">
        Dial from your phone
      </p>
      <div className="flex items-center gap-2">
        {digits.map((d, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 + i * 0.12, duration: 0.35, ease: EASE }}
            className="flex h-9 min-w-[36px] items-center justify-center rounded-lg border border-border bg-surface px-2 font-display text-[15px] font-bold tracking-widest text-ink shadow-soft"
          >
            {d}
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.4, ease: EASE }}
        className="mt-4 flex items-center gap-2 rounded-xl border border-green-200 bg-green-50 px-3 py-2.5"
      >
        <motion.span
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_0_4px_rgba(34,197,94,0.15)]"
        />
        <span className="text-[12px] font-medium text-green-700">Forwarding active, all carriers</span>
      </motion.div>
      <div className="mt-3 space-y-1.5">
        {["AT&T", "Verizon", "T-Mobile"].map((c, i) => (
          <motion.div
            key={c}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.0 + i * 0.1, duration: 0.3, ease: EASE }}
            className="flex items-center gap-2 text-[11px] text-ink-muted"
          >
            <span className="text-green-500">✓</span> {c}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function IllusGreeting() {
  const words = ["Thank", "you", "for", "calling", "[Your Business]."];
  const [shown, setShown] = React.useState(0);

  React.useEffect(() => {
    if (shown >= words.length) return;
    const t = setTimeout(() => setShown((s) => s + 1), 280 + shown * 60);
    return () => clearTimeout(t);
  }, [shown, words.length]);

  return (
    <div className="rounded-2xl border border-border bg-surface-muted/60 p-5 shadow-soft">
      <div className="flex items-center gap-3 border-b border-border pb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 text-[18px]">
          🎙️
        </div>
        <div>
          <p className="text-[13px] font-semibold text-ink">Aria, Professional</p>
          <div className="mt-0.5 flex items-center gap-1">
            <motion.span
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{ duration: 1.2, repeat: Infinity }}
              className="h-1.5 w-1.5 rounded-full bg-green-500"
            />
            <span className="text-[11px] text-ink-muted">Live · English</span>
          </div>
        </div>
      </div>
      <div className="mt-4 min-h-[60px] rounded-xl border border-border bg-bg px-4 py-3">
        <p className="text-[14px] leading-relaxed text-ink">
          {words.slice(0, shown).join(" ")}
          {shown < words.length && (
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.6, repeat: Infinity }}
              className="ml-0.5 inline-block h-4 w-0.5 bg-accent align-middle"
            />
          )}
        </p>
      </div>
      <div className="mt-3 flex gap-1.5">
        {[3,5,8,4,9,6,11,7,4,8,5,9,3,6,8,4,7,5].map((h, i) => (
          <motion.div
            key={i}
            className="w-[3px] rounded-full bg-accent/60"
            animate={{ height: [h, h * 1.5, h] }}
            transition={{ duration: 0.6 + (i % 4) * 0.1, repeat: Infinity, ease: "easeInOut", delay: i * 0.04 }}
            style={{ height: h }}
          />
        ))}
      </div>
    </div>
  );
}

function IllusCapture() {
  return (
    <div className="space-y-3">
      <motion.div
        initial={{ opacity: 0, x: 16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.45, ease: EASE }}
        className="overflow-hidden rounded-2xl border border-border bg-surface shadow-soft"
      >
        <div className="border-b border-border bg-surface-muted/60 px-4 py-2.5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-muted">New lead captured</p>
        </div>
        {[
          { label: "Name", value: "Sarah M." },
          { label: "Phone", value: "(512) 555-0182" },
          { label: "Reason", value: "HVAC repair, unit not cooling" },
        ].map(({ label, value }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.12, duration: 0.35 }}
            className="flex gap-3 border-b border-border px-4 py-2 last:border-0"
          >
            <span className="w-12 shrink-0 text-[10px] text-ink-muted">{label}</span>
            <span className="text-[12px] text-ink">{value}</span>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7, duration: 0.4, ease: EASE }}
        className="flex items-center gap-2.5 rounded-xl border border-border bg-surface-muted/60 px-4 py-3"
      >
        <motion.span
          animate={{ opacity: [1, 0.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="h-1.5 w-1.5 rounded-full bg-green-500"
        />
        <span className="text-[12px] text-ink-muted">Summary sent to inbox · just now</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.9, duration: 0.4, ease: EASE }}
        className="rounded-xl border border-accent/30 bg-accent/10 px-4 py-2.5 text-[13px] font-semibold text-ink"
      >
        🔥 Hot lead, marked for priority callback
      </motion.div>
    </div>
  );
}

// ─── Hero illustration ────────────────────────────────────────────────────────

const HERO_STEPS = [
  { label: "Forward your calls", icon: "📞", time: "~2 min" },
  { label: "Set your greeting", icon: "🎙️", time: "~3 min" },
  { label: "Start capturing leads", icon: "⚡", time: "~5 min" },
];

function HeroSetupMock() {
  const [activeStep, setActiveStep] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => setActiveStep((s) => (s + 1) % HERO_STEPS.length), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
      className="hidden md:block"
    >
      {/* Phone frame */}
      <div className="relative mx-auto w-[260px]">
        {/* Glow */}
        <div className="absolute inset-0 -z-10 rounded-[3rem] bg-accent/20 blur-[40px]" />

        {/* Device shell */}
        <div className="relative overflow-hidden rounded-[3rem] border-[6px] border-ink/10 bg-ink shadow-[0_24px_60px_rgba(0,0,0,0.18)]">
          {/* Status bar */}
          <div className="flex items-center justify-between bg-ink px-5 pt-3 pb-1">
            <span className="text-[10px] font-semibold text-white/50">9:41</span>
            <div className="h-4 w-16 rounded-full bg-ink/80 border border-white/10" />
            <div className="flex items-center gap-1">
              {[1,1,1].map((_, i) => (
                <div key={i} className="h-2.5 w-[3px] rounded-sm bg-white/40" style={{ height: 6 + i * 3 }} />
              ))}
              <div className="ml-1 h-2.5 w-4 rounded-sm border border-white/30 p-px">
                <div className="h-full w-3/4 rounded-sm bg-green-400" />
              </div>
            </div>
          </div>

          {/* Screen content */}
          <div className="bg-surface px-4 pb-5 pt-4">
            {/* App header */}
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-accent text-[14px]">T</div>
              <div>
                <p className="text-[10px] font-bold text-ink leading-none">Tarsha AI</p>
                <p className="text-[8px] text-ink-muted">Setup wizard</p>
              </div>
              <div className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-green-100">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
              </div>
            </div>

            <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.08em] text-ink-muted">Setup progress</p>

            {/* Step list */}
            <div className="space-y-2">
              {HERO_STEPS.map((step, i) => {
                const done = i < activeStep;
                const active = i === activeStep;
                return (
                  <motion.div
                    key={step.label}
                    animate={{
                      backgroundColor: active ? "rgba(255,208,0,0.08)" : done ? "rgba(34,197,94,0.06)" : "rgba(255,255,255,0)",
                      borderColor: active ? "rgba(255,208,0,0.3)" : done ? "rgba(34,197,94,0.25)" : "rgba(234,216,112,0.4)",
                    }}
                    transition={{ duration: 0.4 }}
                    className="flex items-center gap-3 rounded-xl border px-3 py-2.5"
                  >
                    <motion.div
                      animate={{
                        backgroundColor: done ? "#22c55e" : active ? "#FFD000" : "#f3f4f6",
                        scale: active ? 1.12 : 1,
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[13px]"
                    >
                      {done ? "✓" : step.icon}
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <p className={`text-[11px] font-semibold leading-tight ${active ? "text-ink" : done ? "text-ink/60 line-through" : "text-ink-muted"}`}>
                        {step.label}
                      </p>
                      {active && (
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-[9px] text-accent font-medium"
                        >
                          In progress…
                        </motion.p>
                      )}
                    </div>
                    <span className="text-[9px] text-ink-faint shrink-0">{step.time}</span>
                  </motion.div>
                );
              })}
            </div>

            {/* Progress bar */}
            <div className="mt-4">
              <div className="flex items-center justify-between mb-1">
                <p className="text-[9px] text-ink-muted">Overall progress</p>
                <p className="text-[9px] font-bold text-ink">{Math.round(((activeStep) / HERO_STEPS.length) * 100)}%</p>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-border">
                <motion.div
                  className="h-full rounded-full bg-accent"
                  animate={{ width: `${(activeStep / HERO_STEPS.length) * 100}%` }}
                  transition={{ duration: 0.6, ease: EASE }}
                />
              </div>
            </div>

            {/* Live call indicator */}
            <motion.div
              animate={{ opacity: activeStep === HERO_STEPS.length - 1 ? 1 : 0, y: activeStep === HERO_STEPS.length - 1 ? 0 : 6 }}
              transition={{ duration: 0.4 }}
              className="mt-4 flex items-center gap-2 rounded-xl border border-green-200 bg-green-50 px-3 py-2.5"
            >
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.2, repeat: Infinity }}
                className="h-2 w-2 rounded-full bg-green-500"
              />
              <span className="text-[10px] font-semibold text-green-700">Live, calls being answered</span>
            </motion.div>
          </div>
        </div>

        {/* Floating badges */}
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-10 top-1/4 rounded-xl border border-border bg-surface px-3 py-2 shadow-lift"
        >
          <p className="text-[10px] font-bold text-ink">35+ guides</p>
          <p className="text-[8px] text-ink-muted">all carriers</p>
        </motion.div>

        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute -right-10 bottom-1/4 rounded-xl border border-border bg-surface px-3 py-2 shadow-lift"
        >
          <p className="text-[10px] font-bold text-ink">No tech skills</p>
          <p className="text-[8px] text-ink-muted">required</p>
        </motion.div>
      </div>
    </motion.div>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const quickStartSteps = [
  {
    step: "01",
    icon: Phone,
    title: "Forward your calls",
    description: "Dial a simple code from your phone to forward calls to your Tarsha number. Takes under 2 minutes on any carrier, AT&T, Verizon, T-Mobile, or landline.",
    time: "~2 min",
    Illustration: IllusForwarding,
  },
  {
    step: "02",
    icon: Mic,
    title: "Set your greeting",
    description: "Tell Tarsha your business name and pick a voice. Your customized greeting goes live instantly, no recording required.",
    time: "~3 min",
    Illustration: IllusGreeting,
  },
  {
    step: "03",
    icon: Zap,
    title: "Start capturing leads",
    description: "Every call is answered, every detail captured, and every summary sent to your inbox the moment the call ends. You're live.",
    time: "~5 min",
    Illustration: IllusCapture,
  },
];

const categories = [
  {
    icon: Phone,
    title: "Call Forwarding",
    description: "Set up forwarding on any carrier or VoIP system",
    color: { bg: "#dbeafe", text: "#1e40af", accent: "#3b82f6" },
    guideCount: 8,
    guides: [
      { title: "Call forwarding on AT&T", time: "3 min" },
      { title: "Call forwarding on Verizon", time: "3 min" },
      { title: "Call forwarding on T-Mobile", time: "2 min" },
      { title: "Google Voice setup guide", time: "5 min" },
      { title: "RingCentral integration", time: "6 min" },
      { title: "Forwarding from a landline", time: "4 min" },
    ],
  },
  {
    icon: Mic,
    title: "Greeting & Scripts",
    description: "Customize what Tarsha says to your callers",
    color: { bg: "#d1fae5", text: "#065f46", accent: "#10b981" },
    guideCount: 6,
    guides: [
      { title: "Writing your first greeting script", time: "5 min" },
      { title: "Setting business hours", time: "3 min" },
      { title: "After-hours message setup", time: "4 min" },
      { title: "Holiday greeting templates", time: "4 min" },
      { title: "Multilingual greeting setup", time: "6 min" },
      { title: "Adding qualifying questions", time: "5 min" },
    ],
  },
  {
    icon: Layers,
    title: "Integrations",
    description: "Connect Tarsha to your CRM, email, and calendar",
    color: { bg: "#ede9fe", text: "#4c1d95", accent: "#8b5cf6" },
    guideCount: 9,
    guides: [
      { title: "Email notification setup", time: "2 min" },
      { title: "SMS alerts configuration", time: "3 min" },
      { title: "Google Calendar sync", time: "7 min" },
      { title: "Salesforce CRM integration", time: "10 min" },
      { title: "HubSpot connection guide", time: "8 min" },
      { title: "Zapier automation setup", time: "8 min" },
    ],
  },
  {
    icon: Settings,
    title: "Advanced Features",
    description: "Unlock the full power of Tarsha AI",
    color: { bg: "#fef3c7", text: "#92400e", accent: "#f59e0b" },
    guideCount: 7,
    guides: [
      { title: "Lead qualification questions", time: "5 min" },
      { title: "Call routing rules", time: "6 min" },
      { title: "Appointment booking setup", time: "8 min" },
      { title: "Spam call blocking", time: "3 min" },
      { title: "Call recording settings", time: "4 min" },
      { title: "Voicemail transcription", time: "3 min" },
    ],
  },
  {
    icon: CreditCard,
    title: "Account & Billing",
    description: "Manage your subscription and team",
    color: { bg: "#fce7f3", text: "#9d174d", accent: "#ec4899" },
    guideCount: 5,
    guides: [
      { title: "Upgrading your plan", time: "2 min" },
      { title: "Adding team members", time: "4 min" },
      { title: "Downloading invoices", time: "2 min" },
      { title: "Changing your number", time: "5 min" },
      { title: "Cancellation & data export", time: "3 min" },
    ],
  },
];

const popularGuides = [
  { title: "Complete call forwarding guide for any carrier", category: "Call Forwarding", time: "8 min", views: "12.4K views" },
  { title: "How to write a greeting script that converts callers", category: "Greeting & Scripts", time: "6 min", views: "9.8K views" },
  { title: "Setting up SMS lead alerts", category: "Integrations", time: "3 min", views: "7.2K views" },
  { title: "Configuring lead qualification questions", category: "Advanced Features", time: "5 min", views: "6.1K views" },
  { title: "After-hours answering: complete setup guide", category: "Advanced Features", time: "7 min", views: "5.9K views" },
];

// ─── Quick start progress ─────────────────────────────────────────────────────

function QuickStartStep({ step, index }: { step: typeof quickStartSteps[0]; index: number }) {
  const Icon = step.icon;
  const Illustration = step.Illustration;
  const isEven = index % 2 === 0;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: EASE }}
      className={`grid items-center gap-8 md:grid-cols-2 md:gap-12 ${!isEven ? "md:[&>*:first-child]:order-2" : ""}`}
    >
      {/* Text side */}
      <div className="flex flex-col">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-border bg-surface shadow-soft">
            <Icon className="h-5 w-5 text-ink/60" strokeWidth={1.5} />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-accent">Step {step.step}</span>
            <h3 className="font-display text-[18px] font-bold text-ink">{step.title}</h3>
          </div>
        </div>
        <p className="mt-4 text-[14px] leading-relaxed text-ink-muted">{step.description}</p>
        <div className="mt-5 flex items-center gap-4">
          <span className="inline-flex items-center gap-1 rounded-full border border-border bg-surface-muted px-3 py-1 text-[12px] font-medium text-ink-muted">
            <Clock className="h-3 w-3" /> {step.time}
          </span>
          <button className="inline-flex items-center gap-1 text-[13px] font-semibold text-ink transition-colors hover:text-accent">
            View guide <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Illustration side */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? 20 : -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, delay: index * 0.08 + 0.15, ease: EASE }}
      >
        <Illustration />
      </motion.div>
    </motion.div>
  );
}

// ─── Category card ────────────────────────────────────────────────────────────

function CategoryCard({ cat, index }: { cat: typeof categories[0]; index: number }) {
  const Icon = cat.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: EASE }}
      whileHover={{ y: -4 }}
      className="group overflow-hidden rounded-2xl border border-border bg-surface shadow-soft transition-shadow duration-300 hover:shadow-lift"
    >
      {/* Header */}
      <div className="p-6 pb-4" style={{ background: `linear-gradient(135deg, ${cat.color.bg}60, transparent)` }}>
        <div className="flex items-start justify-between gap-3">
          <div
            className="flex h-11 w-11 items-center justify-center rounded-xl border shadow-soft"
            style={{ backgroundColor: cat.color.bg, borderColor: cat.color.bg }}
          >
            <Icon className="h-5 w-5" style={{ color: cat.color.text }} strokeWidth={1.5} />
          </div>
          <span className="rounded-full border border-border bg-surface px-2.5 py-0.5 text-[11px] font-medium text-ink-muted">
            {cat.guideCount} guides
          </span>
        </div>
        <h3 className="mt-3 font-display text-[17px] font-bold text-ink">{cat.title}</h3>
        <p className="mt-1 text-[13px] text-ink-muted">{cat.description}</p>
      </div>

      {/* Guide list */}
      <ul className="border-t border-border px-6 py-4 space-y-1">
        {cat.guides.slice(0, 4).map((guide) => (
          <li key={guide.title}>
            <Link
              href={`/resources/setup-guides/${guide.title.toLowerCase().replace(/\s+/g, "-")}`}
              className="flex items-center justify-between gap-2 rounded-lg px-2 py-2 text-[13px] text-ink-muted transition-colors hover:bg-surface-muted hover:text-ink"
            >
              <span className="flex-1 leading-snug">{guide.title}</span>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-[11px] text-ink-faint">{guide.time}</span>
                <ChevronRight className="h-3.5 w-3.5 text-ink-faint group-hover:text-ink transition-colors" />
              </div>
            </Link>
          </li>
        ))}
      </ul>
      {cat.guides.length > 4 && (
        <div className="border-t border-border px-6 py-3">
          <button className="text-[13px] font-semibold text-ink-muted transition-colors hover:text-ink flex items-center gap-1">
            +{cat.guides.length - 4} more guides <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>
      )}
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SetupGuidesPage() {
  const headlineRef = useRef<HTMLSpanElement>(null);
  const headlineInView = useInView(headlineRef, { once: true });

  return (
    <>
      <Header />
      <main className="min-h-screen bg-bg pt-[72px]">

        {/* Hero */}
        <section className="relative overflow-hidden py-20 md:py-28">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute right-0 top-0 h-[400px] w-[500px] rounded-full bg-accent/8 blur-[100px]" />
          </div>
          <div className="relative mx-auto max-w-[960px] px-6 md:px-10">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: EASE }}
                  className="mb-5 text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-muted"
                >
                  <span className="mr-2 inline-block h-1.5 w-1.5 translate-y-[-1px] rounded-full bg-accent align-middle" />
                  Setup Guides
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.08, ease: EASE }}
                  className="section-heading font-display font-bold tracking-tighter2 text-ink"
                >
                  From zero to{" "}
                  <span ref={headlineRef} className={`accent-underline${headlineInView ? " is-revealed" : ""}`}>
                    live in 10 minutes
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.18, ease: EASE }}
                  className="mt-5 text-[17px] leading-relaxed text-ink-muted"
                >
                  Three steps. Any carrier. No tech skills. Our step-by-step guides walk you through forwarding your calls, setting your greeting, and going live, in under 10 minutes flat.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.24, ease: EASE }}
                  className="mt-6 flex flex-wrap gap-2"
                >
                  {["AT&T", "Verizon", "T-Mobile", "Landline", "VoIP"].map((c) => (
                    <span key={c} className="rounded-full border border-border bg-surface px-3 py-1 text-[12px] font-medium text-ink-muted shadow-soft">
                      {c}
                    </span>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.28, ease: EASE }}
                  className="mt-8 flex flex-wrap gap-3"
                >
                  <Link
                    href="#quick-start"
                    className="inline-flex items-center gap-2 rounded-xl bg-ink px-5 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-ink/80"
                  >
                    Quick start guide <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="#categories"
                    className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-5 py-3 text-[14px] font-medium text-ink transition-colors hover:bg-surface-muted"
                  >
                    Browse all guides
                  </Link>
                </motion.div>
              </div>

              {/* Hero illustration, setup progress mock */}
              <HeroSetupMock />
            </div>
          </div>
        </section>

        {/* Quick start */}
        <section id="quick-start" className="border-t border-border bg-surface py-16 md:py-20">
          <div className="mx-auto max-w-[1100px] px-6 md:px-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EASE }}
              className="mb-12 text-center"
            >
              <p className="eyebrow mb-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-muted">Quick start</p>
              <h2 className="font-display text-[1.75rem] font-bold tracking-tighter2 text-ink md:text-[2.25rem]">
                Three steps to your first answered call
              </h2>
            </motion.div>
            <div className="space-y-16 md:space-y-20">
              {quickStartSteps.map((step, i) => (
                <QuickStartStep key={step.step} step={step} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Video CTA */}
        <section className="py-12">
          <div className="mx-auto max-w-[960px] px-6 md:px-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, ease: EASE }}
              className="relative overflow-hidden rounded-3xl bg-ink px-8 py-10 md:flex md:items-center md:justify-between md:gap-8"
            >
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute right-0 top-0 h-[200px] w-[300px] rounded-full bg-accent/10 blur-[80px]" />
              </div>
              <div className="relative">
                <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-accent">Video walkthrough</p>
                <h3 className="mt-2 font-display text-[1.4rem] font-bold text-white md:text-[1.75rem]">
                  Watch: Setup from zero to live in 8 minutes
                </h3>
                <p className="mt-2 text-[14px] text-white/60">
                  Our most popular guide, a full screen recording of the entire setup process.
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative mt-6 flex shrink-0 items-center gap-3 rounded-2xl bg-accent px-6 py-4 text-[15px] font-semibold text-ink md:mt-0"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-ink/10">
                  <Play className="h-4 w-4 translate-x-0.5 text-ink" />
                </div>
                Watch video
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Popular guides */}
        <section className="py-12 border-t border-border">
          <div className="mx-auto max-w-[960px] px-6 md:px-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-muted">Most popular</p>
              <div className="space-y-2">
                {popularGuides.map((guide, i) => (
                  <motion.div
                    key={guide.title}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07, duration: 0.45, ease: EASE }}
                    whileHover={{ x: 4 }}
                  >
                    <Link
                      href="#"
                      className="group flex items-center justify-between gap-4 rounded-xl border border-border bg-surface px-5 py-4 transition-all hover:border-accent/30 hover:shadow-soft"
                    >
                      <div className="flex items-center gap-4 min-w-0">
                        <span className="font-display text-[14px] font-bold text-ink-faint">{String(i + 1).padStart(2, "0")}</span>
                        <div className="min-w-0">
                          <p className="font-medium text-[14px] text-ink truncate group-hover:text-ink/80">{guide.title}</p>
                          <p className="text-[12px] text-ink-faint mt-0.5">{guide.category}</p>
                        </div>
                      </div>
                      <div className="flex shrink-0 items-center gap-3">
                        <span className="hidden text-[12px] text-ink-faint sm:block">{guide.views}</span>
                        <span className="flex items-center gap-1 text-[12px] text-ink-faint">
                          <Clock className="h-3 w-3" /> {guide.time}
                        </span>
                        <ChevronRight className="h-4 w-4 text-ink-faint transition-transform group-hover:translate-x-1" />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories */}
        <section id="categories" className="py-16 md:py-20 border-t border-border">
          <div className="mx-auto max-w-[1240px] px-6 md:px-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EASE }}
              className="mb-10 text-center"
            >
              <p className="eyebrow mb-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-muted">Browse by topic</p>
              <h2 className="font-display text-[1.75rem] font-bold tracking-tighter2 text-ink md:text-[2.25rem]">
                All guides, organized
              </h2>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {categories.map((cat, i) => (
                <CategoryCard key={cat.title} cat={cat} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Help CTA */}
        <section className="border-t border-border bg-surface py-16">
          <div className="mx-auto max-w-[960px] px-6 text-center md:px-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <span className="mb-4 inline-block text-4xl">🤝</span>
              <h2 className="font-display text-[1.75rem] font-bold tracking-tighter2 text-ink">
                Still have questions?
              </h2>
              <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-ink-muted">
                Our support team responds in under 2 hours on business days. We&apos;ll get you set up no matter what.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/resources/help-center"
                  className="inline-flex items-center gap-2 rounded-xl bg-ink px-5 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-ink/80"
                >
                  Visit help center <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="mailto:hello@tarsha.ai"
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-bg px-5 py-3 text-[14px] font-medium text-ink transition-colors hover:bg-surface-muted"
                >
                  Email support
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
