"use client";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SolutionBenefits, type Benefit } from "@/components/solutions/SolutionBenefits";
import { SolutionCTA } from "@/components/solutions/SolutionCTA";
import { SolutionHero } from "@/components/solutions/SolutionHero";
import { SolutionHowItWorks } from "@/components/solutions/SolutionHowItWorks";
import { SolutionIndustries } from "@/components/solutions/SolutionIndustries";
import { SolutionIntro } from "@/components/solutions/SolutionIntro";
import { SolutionTestimonials, type TestimonialItem } from "@/components/solutions/SolutionTestimonials";
import { MockRouteFlow } from "@/components/solutions/mocks/MockRouteFlow";
import { motion } from "framer-motion";
import { Layers, Route, Voicemail, Zap } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

// ─── Step illustrations ───────────────────────────────────────────────────────

function IllusCallGreeting() {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-3 rounded-xl border border-border bg-surface p-3">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface-muted text-xl"
        >
          📞
        </motion.div>
        <div>
          <p className="text-[11px] text-ink-muted">Incoming call</p>
          <p className="text-[13px] font-semibold text-ink">Jennifer Walsh</p>
        </div>
        <motion.span
          animate={{ opacity: [1, 0.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="ml-auto h-2 w-2 rounded-full bg-green-500 shadow-[0_0_0_4px_rgba(34,197,94,0.15)]"
        />
      </div>
      <div className="rounded-xl border border-accent/30 bg-accent/10 px-3.5 py-2.5 text-[12px] text-ink">
        "Hi, you've reached{" "}
        <span className="font-semibold">[Your Business]</span>. How can I help you today?"
      </div>
    </div>
  );
}

function IllusAIQualifying() {
  const branches = [
    { label: "Billing", emoji: "💳", active: false },
    { label: "Support", emoji: "🛠️", active: false },
    { label: "Sales", emoji: "📈", active: true },
  ];
  return (
    <div className="space-y-2.5">
      <div className="rounded-xl border border-border bg-surface p-3 text-center">
        <p className="text-[11px] text-ink-muted">Caller says:</p>
        <p className="mt-1 text-[13px] font-medium text-ink">"I'm interested in your pricing"</p>
      </div>
      <div className="flex gap-1.5">
        {branches.map(({ label, emoji, active }) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: active ? 1 : 0.45, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, ease: EASE }}
            className={`flex flex-1 flex-col items-center gap-1 rounded-xl border py-2.5 text-center ${
              active
                ? "border-accent bg-accent/10 shadow-sm"
                : "border-border bg-surface"
            }`}
          >
            <span className="text-[16px]">{emoji}</span>
            <span className="text-[11px] font-medium text-ink">{label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function IllusTransferResult() {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-3 rounded-xl border border-border bg-surface p-3.5">
        <div className="flex items-center gap-2 flex-1">
          <span className="text-[16px]">📞</span>
          <span className="text-ink-muted text-[11px]">→</span>
          <span className="text-[16px]">✨</span>
          <span className="text-ink-muted text-[11px]">→</span>
          <span className="text-[16px]">👤</span>
        </div>
        <div className="text-right">
          <p className="text-[12px] font-semibold text-ink">Routed to Sales</p>
          <p className="text-[11px] font-bold text-green-600">0.8s</p>
        </div>
      </div>
      <div className="flex items-center gap-2 rounded-xl border border-accent/30 bg-accent/10 px-3.5 py-2.5">
        <motion.span
          animate={{ opacity: [1, 0.25, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="h-1.5 w-1.5 rounded-full bg-green-500"
        />
        <span className="text-[12px] text-ink-muted">Handoff summary sent to recipient</span>
      </div>
    </div>
  );
}

// ─── Intro illustration ───────────────────────────────────────────────────────

function IllusIntroWrongRoute() {
  return (
    <div className="space-y-2">
      <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-muted">
        A typical misdirected call
      </p>
      <div className="rounded-xl border border-border bg-surface p-3.5">
        <div className="flex items-start gap-2.5">
          <span className="mt-0.5 text-[16px]">📞</span>
          <div className="flex-1">
            <p className="text-[12px] font-medium text-ink">"I have a question about my invoice"</p>
            <p className="text-[11px] text-ink-muted">Connected to: Sales team</p>
          </div>
          <span className="text-[16px]">😕</span>
        </div>
      </div>
      <div className="flex items-center gap-2 px-2 text-[11px] text-ink-muted">
        <div className="h-px flex-1 bg-border/60" />
        <span>transferred</span>
        <div className="h-px flex-1 bg-border/60" />
      </div>
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.18, duration: 0.4, ease: EASE }}
        className="rounded-xl border border-border bg-surface p-3.5"
      >
        <div className="flex items-start gap-2.5">
          <span className="mt-0.5 text-[16px]">📞</span>
          <div className="flex-1">
            <p className="text-[12px] font-medium text-ink">"Sorry, let me transfer you again…"</p>
            <p className="text-[11px] text-ink-muted">Connected to: Support team</p>
          </div>
          <span className="text-[16px]">😤</span>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.34, duration: 0.4, ease: EASE }}
        className="flex items-center gap-2.5 rounded-xl border border-border bg-surface-muted/60 px-3.5 py-2.5"
      >
        <span className="text-[15px]">⏱️</span>
        <p className="text-[12px] text-ink-muted">2 wrong transfers · 4+ minutes wasted per call</p>
      </motion.div>
    </div>
  );
}

// ─── Benefit mock UIs ─────────────────────────────────────────────────────────

function MockSmartRules() {
  const rules = [
    { trigger: "Mentions 'billing'", destination: "→ Finance team" },
    { trigger: "Mentions 'urgent'", destination: "→ On-call line" },
    { trigger: "New inquiry", destination: "→ Sales team" },
  ];
  return (
    <div className="mt-4 space-y-1.5">
      {rules.map(({ trigger, destination }, i) => (
        <motion.div
          key={trigger}
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.38, ease: EASE }}
          className="flex items-center justify-between rounded-lg border border-border bg-surface px-3 py-2.5 text-[12px]"
        >
          <span className="text-ink-muted">{trigger}</span>
          <span className="font-medium text-ink">{destination}</span>
        </motion.div>
      ))}
    </div>
  );
}

function MockInstantTransfer() {
  return (
    <div className="mt-4 space-y-3">
      <div className="flex items-center justify-center gap-3">
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
              transition={{ delay: i * 0.13, duration: 0.4, ease: EASE }}
            >
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-full border border-border shadow-sm ${bg}`}
              >
                <span className="text-xl">{emoji}</span>
              </div>
              <p className="text-[11px] text-ink-muted">{label}</p>
            </motion.div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-2 rounded-xl border border-accent/30 bg-accent/10 px-4 py-2">
        <span className="text-[12px] font-medium text-ink">Average transfer time</span>
        <span className="font-display text-[1.4rem] font-bold text-ink">0.8s</span>
      </div>
    </div>
  );
}

function MockOverflow() {
  return (
    <div className="mt-4 space-y-2.5">
      <div className="flex items-center gap-3 rounded-xl border border-border bg-surface p-3.5">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-50 text-[16px]">
          🔴
        </div>
        <div>
          <p className="text-[12px] font-medium text-ink">Line 1 busy</p>
          <p className="text-[11px] text-ink-muted">3 active calls</p>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.4, ease: EASE }}
        className="flex items-center gap-3 rounded-xl border border-accent/30 bg-accent/10 p-3.5"
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/20 text-[16px]">
          ↪
        </div>
        <div>
          <p className="text-[12px] font-medium text-ink">Routed to Line 2</p>
          <p className="text-[11px] text-ink-muted">No hold time · answered instantly</p>
        </div>
      </motion.div>
    </div>
  );
}

function MockVoicemailFallback() {
  return (
    <div className="mt-4 space-y-2.5">
      <div className="rounded-xl border border-border bg-surface p-4 shadow-sm">
        <div className="mb-3 flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-ink text-white">
            <span className="text-[10px]">▶</span>
          </div>
          <div className="flex flex-1 items-end gap-0.5">
            {[3, 5, 8, 6, 4, 9, 7, 5, 3, 6, 8, 4].map((h, i) => (
              <motion.div
                key={i}
                className={`w-1.5 rounded-full ${i < 6 ? "bg-ink" : "bg-ink/20"}`}
                animate={{
                  height: [`${h * 2.5}px`, `${Math.max(h * 0.5, 1.5) * 2.5}px`, `${h * 2.5}px`],
                }}
                transition={{
                  duration: 0.9 + (i % 6) * 0.13,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.05,
                }}
              />
            ))}
          </div>
          <span className="text-[12px] text-ink-muted">0:38</span>
        </div>
        <p className="text-[12px] italic leading-relaxed text-ink/60">
          "Hi, this is David calling about a quote for office cleaning..."
        </p>
      </div>
      <div className="flex items-center gap-2 rounded-xl border border-border bg-surface px-3.5 py-2.5">
        <motion.span
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-1.5 w-1.5 rounded-full bg-green-500"
        />
        <span className="text-[12px] text-ink-muted">Transcript &amp; summary sent to inbox</span>
      </div>
    </div>
  );
}

// ─── Page data ────────────────────────────────────────────────────────────────

const testimonials: TestimonialItem[] = [
  {
    quote:
      "We have sales, support, and billing — and callers used to end up in the wrong place constantly. Tarsha figures out exactly what they need and routes them perfectly every time. My team has stopped dreading the phone.",
    author: "Tom B.",
    role: "Operations Manager",
    company: "Greenfield Business Services",
    avatarUrl: "https://i.pravatar.cc/150?img=17",
  },
  {
    quote:
      "With 4 locations and different teams, routing was a nightmare before Tarsha. Now new patients go to one team, billing to another, urgent calls get escalated immediately. It works so smoothly that patients actually comment on it.",
    author: "Amanda S.",
    role: "Practice Administrator",
    company: "ClearSmile Dental Group",
    avatarUrl: "https://i.pravatar.cc/150?img=47",
  },
  {
    quote:
      "We practice in three areas of law. Before Tarsha, clients calling about litigation would end up with our family law team by mistake. That doesn't happen anymore. Every call gets where it needs to go — in under a second.",
    author: "James W.",
    role: "Managing Partner",
    company: "Whitfield Legal",
    avatarUrl: "https://i.pravatar.cc/150?img=65",
  },
];

const steps = [
  {
    title: "A call comes in",
    description:
      "Tarsha AI answers immediately with a warm, professional greeting in your business name — day, night, or weekend.",
    Illustration: IllusCallGreeting,
  },
  {
    title: "AI qualifies the need",
    description:
      "Through natural conversation, Tarsha understands whether the caller needs billing, support, sales, or something else entirely.",
    Illustration: IllusAIQualifying,
  },
  {
    title: "Transferred in under a second",
    description:
      "No hold music. No confusion. The right person picks up — already briefed on why the caller is reaching out.",
    Illustration: IllusTransferResult,
  },
];

const benefits: Benefit[] = [
  {
    icon: Route,
    title: "Smart routing rules",
    description:
      "Route by topic, urgency, VIP status, or any custom rule you define — and update them in real time.",
    MockUI: MockSmartRules,
    wide: true,
  },
  {
    icon: Zap,
    title: "Instant transfers",
    description:
      "Calls are transferred in under a second. No hold music, no confusion — just the right person picking up.",
    MockUI: MockInstantTransfer,
  },
  {
    icon: Layers,
    title: "Overflow handling",
    description:
      "When a line is busy, calls are automatically routed to the next available option — no caller left waiting.",
    MockUI: MockOverflow,
  },
  {
    icon: Voicemail,
    title: "Voicemail fallback",
    description:
      "If no one picks up, Tarsha takes a message with full context and delivers a transcript to your inbox.",
    MockUI: MockVoicemailFallback,
    wide: true,
  },
];

const industries = [
  "Law firms",
  "Medical practices",
  "HVAC & contractors",
  "Multi-location businesses",
  "Sales teams",
  "Property management",
  "Hotels & hospitality",
  "Insurance agencies",
  "IT support companies",
  "Dental practices",
  "Financial services",
  "Home services",
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CallRoutingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-bg pt-[72px]">
        <SolutionHero
          eyebrow="Call Routing"
          titleBefore="Every call goes "
          titleHighlight="exactly where it needs to"
          subtitle="Tarsha AI greets every caller, understands their need, and routes them to the right person or team — instantly, every time, 24/7."
          MockUI={MockRouteFlow}
        />
        <SolutionTestimonials
          eyebrow="From businesses who rely on routing"
          testimonials={testimonials}
        />
        <SolutionIntro
          eyebrow="The problem"
          heading="The wrong person picking up costs everyone time"
          paragraphs={[
            "When callers reach the wrong department, they have to explain their situation twice — and your team wastes time transferring calls they shouldn't have taken. Multiply that across a full week and the hidden cost is significant.",
            "Tarsha AI answers every call, listens to understand what the caller actually needs, and routes them to exactly the right person in under a second — with a brief handoff summary so whoever answers is already informed. No phone trees, no confusion, no wasted time.",
          ]}
          Illustration={IllusIntroWrongRoute}
        />
        <SolutionHowItWorks
          heading="The right person, every time"
          steps={steps}
        />
        <SolutionBenefits
          eyebrow="What you get"
          heading="Intelligent routing that works while you sleep"
          benefits={benefits}
        />
        <SolutionIndustries
          eyebrow="Who uses this"
          heading="Any business with more than one person to call"
          industries={industries}
        />
        <SolutionCTA heading="Put every call exactly where it needs to go." />
      </main>
      <Footer />
    </>
  );
}
