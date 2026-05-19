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
import { MockLeadQualScore } from "@/components/solutions/mocks/MockLeadQualScore";
import { motion } from "framer-motion";
import { ArrowUpRight, BarChart3, UserCheck, Zap } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

// ─── Step illustrations ───────────────────────────────────────────────────────

function IllusStep1LeadQual() {
  const lines = [
    { speaker: "Caller", text: "I'm looking for HVAC installation for my new office" },
    { speaker: "Tarsha AI", text: "Great! Roughly what's your budget for this project?" },
    { speaker: "Caller", text: "Around $15,000" },
    { speaker: "Tarsha AI", text: "And are you the decision maker on this project, or is there a procurement team involved?" },
  ];
  return (
    <div className="space-y-2.5">
      {lines.map(({ speaker, text }, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 + i * 0.18, duration: 0.4, ease: EASE }}
          className="flex items-start gap-2.5"
        >
          <span
            className={`mt-0.5 w-16 shrink-0 text-[11px] font-semibold ${
              speaker === "Tarsha AI" ? "text-accent-ink/70" : "text-ink-muted"
            }`}
          >
            {speaker}
          </span>
          <p className="text-[12px] leading-relaxed text-ink">{text}</p>
        </motion.div>
      ))}
    </div>
  );
}

function IllusStep2LeadQual() {
  const fields = [
    { label: "Industry", value: "Commercial real estate" },
    { label: "Budget", value: "$15,000" },
    { label: "Timeline", value: "4–6 weeks" },
    { label: "Decision maker", value: "Yes" },
  ];
  return (
    <div className="space-y-2">
      {fields.map(({ label, value }, i) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.35, ease: EASE }}
          className="flex items-center justify-between rounded-lg border border-border bg-surface px-3 py-2"
        >
          <span className="text-[11px] text-ink-muted">{label}</span>
          <span className="text-[11px] font-semibold text-ink">
            {value} <span className="ml-1 text-green-600">✓</span>
          </span>
        </motion.div>
      ))}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.45, duration: 0.4, ease: EASE }}
        className="rounded-lg border border-accent/30 bg-accent/10 px-3 py-2 text-center text-[12px] font-semibold text-ink"
      >
        🔥 Hot lead · priority callback
      </motion.div>
    </div>
  );
}

function IllusStep3LeadQual() {
  const queue = [
    { badge: "🔥 Hot", name: "Jennifer W.", detail: "HVAC · $15k", action: "call now", color: "text-red-600 bg-red-50 border-red-200" },
    { badge: "Warm", name: "Mark T.", detail: "Follow up today", action: "", color: "text-amber-600 bg-amber-50 border-amber-200" },
    { badge: "Routine", name: "Browsing inquiry", detail: "This week", action: "", color: "text-ink-muted bg-surface-muted border-border" },
  ];
  return (
    <div className="space-y-2">
      {queue.map(({ badge, name, detail, action, color }, i) => (
        <motion.div
          key={name}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.12, duration: 0.38, ease: EASE }}
          className="flex items-center gap-3 rounded-xl border border-border bg-surface p-3"
        >
          <span className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-bold ${color}`}>
            {badge}
          </span>
          <div className="flex-1 min-w-0">
            <p className="text-[12px] font-medium text-ink truncate">{name}</p>
            <p className="text-[11px] text-ink-muted">{detail}</p>
          </div>
          {action && (
            <span className="shrink-0 text-[11px] font-semibold text-red-600">{action}</span>
          )}
        </motion.div>
      ))}
    </div>
  );
}

// ─── Intro illustration ───────────────────────────────────────────────────────

function IllusIntroLeadQual() {
  const callers = [
    {
      emoji: "🔥",
      name: "Jennifer W.",
      detail: "Budget: $25k · Timeline: 30 days · Decision maker",
      badge: "Hot lead",
      badgeColor: "text-red-600 bg-red-50 border-red-200",
    },
    {
      emoji: "💛",
      name: "Mark T.",
      detail: "Interested but no timeline yet",
      badge: "Warm",
      badgeColor: "text-amber-600 bg-amber-50 border-amber-200",
    },
    {
      emoji: "💬",
      name: "Unknown",
      detail: "Just browsing, no details",
      badge: "Routine",
      badgeColor: "text-ink-muted bg-surface-muted border-border",
    },
  ];
  return (
    <div className="space-y-2">
      {callers.map(({ emoji, name, detail, badge, badgeColor }, i) => (
        <motion.div
          key={name}
          initial={{ opacity: 0, x: 14 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.4, ease: EASE }}
          className="flex items-center gap-3 rounded-xl border border-border bg-surface p-3"
        >
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface-muted text-[14px]">
            {emoji}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[12px] font-medium text-ink truncate">{name}</p>
            <p className="text-[11px] text-ink-muted truncate">{detail}</p>
          </div>
          <span className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-semibold ${badgeColor}`}>
            {badge}
          </span>
        </motion.div>
      ))}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.38, duration: 0.4, ease: EASE }}
        className="flex items-center gap-2.5 rounded-xl border border-border bg-surface-muted/60 px-3.5 py-2.5"
      >
        <span className="text-green-600">✓</span>
        <p className="text-[12px] text-ink-muted">Hot lead contacted in &lt; 5 min · 3× better close rate</p>
      </motion.div>
    </div>
  );
}

// ─── Benefit mock UIs ─────────────────────────────────────────────────────────

function MockQualifyingScript() {
  const rows = [
    { question: "What's your approximate budget for this project?", condition: "if > $10k → hot" },
    { question: "What's your timeline to get started?", condition: "if < 30 days → hot" },
    { question: "Are you the decision maker on this?", condition: "if yes → score +1" },
    { question: "What's the main outcome you're looking for?", condition: "if specific → warm+" },
  ];
  return (
    <div className="mt-4 space-y-2">
      {rows.map(({ question, condition }, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.09, duration: 0.35, ease: EASE }}
          className="flex items-start justify-between gap-3 rounded-lg border border-border bg-surface px-3 py-2.5"
        >
          <p className="text-[12px] text-ink leading-snug">{question}</p>
          <span className="shrink-0 rounded-md border border-accent/40 bg-accent/10 px-1.5 py-0.5 text-[10px] font-semibold text-ink">
            {condition}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

function MockLeadScoreCard() {
  return (
    <div className="mt-4 space-y-2">
      <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-sm">
        {[
          { label: "Name", value: "Jennifer W." },
          { label: "Contact", value: "(619) 555-0197" },
          { label: "Budget", value: "$25,000" },
          { label: "Timeline", value: "30 days" },
        ].map(({ label, value }) => (
          <div key={label} className="flex gap-3 border-b border-border px-3.5 py-2 last:border-0">
            <span className="w-14 shrink-0 text-[10px] text-ink-muted">{label}</span>
            <span className="text-[11px] text-ink">{value}</span>
          </div>
        ))}
        <div className="flex gap-3 border-t border-border px-3.5 py-2">
          <span className="w-14 shrink-0 text-[10px] text-ink-muted">Intent</span>
          <div className="flex items-center gap-1">
            {[0, 1, 2].map((dot) => (
              <motion.span
                key={dot}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + dot * 0.1, duration: 0.3, ease: EASE }}
                className="h-2.5 w-2.5 rounded-full bg-accent"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-center text-[12px] font-semibold text-red-700">
        🔥 Hot lead · callback priority: immediate
      </div>
    </div>
  );
}

function MockCallbackQueue() {
  const leads = [
    { badge: "🔥 Hot", name: "Jennifer W.", detail: "HVAC · $25k", time: "2 min ago", color: "text-red-600 bg-red-50 border-red-200" },
    { badge: "Warm", name: "Mark T.", detail: "Interested · follow up today", time: "18 min ago", color: "text-amber-600 bg-amber-50 border-amber-200" },
    { badge: "Routine", name: "Browsing inquiry", detail: "No urgency", time: "1 hr ago", color: "text-ink-muted bg-surface-muted border-border" },
  ];
  return (
    <div className="mt-4 space-y-2">
      {leads.map(({ badge, name, detail, time, color }, i) => (
        <motion.div
          key={name}
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.35, ease: EASE }}
          className="flex items-center gap-3 rounded-lg border border-border bg-surface px-3 py-2.5"
        >
          <span className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-bold ${color}`}>
            {badge}
          </span>
          <div className="flex-1 min-w-0">
            <p className="text-[12px] font-medium text-ink truncate">{name}</p>
            <p className="text-[11px] text-ink-muted truncate">{detail}</p>
          </div>
          <span className="shrink-0 text-[11px] text-ink-muted">{time}</span>
        </motion.div>
      ))}
    </div>
  );
}

function MockConversionStats() {
  const stats = [
    { label: "Hot leads", value: "18%" },
    { label: "Close rate (hot)", value: "62%" },
    { label: "Time-to-callback", value: "< 4 min" },
    { label: "Leads qualified/day", value: "34" },
  ];
  return (
    <div className="mt-4 grid grid-cols-2 gap-2">
      {stats.map(({ label, value }, i) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08, duration: 0.35, ease: EASE }}
          className="rounded-xl border border-border bg-surface p-3 text-center"
        >
          <p className="font-display text-[1.5rem] font-bold text-ink">{value}</p>
          <p className="mt-0.5 text-[11px] text-ink-muted">{label}</p>
        </motion.div>
      ))}
    </div>
  );
}

// ─── Page data ────────────────────────────────────────────────────────────────

const testimonials: TestimonialItem[] = [
  {
    quote:
      "We were spending 40% of our sales team's time calling back leads that were never going to convert. Tarsha asks the right questions before they even reach us. Now we only call back qualified leads — our close rate doubled in 90 days.",
    author: "Nathan R.",
    role: "Head of Sales",
    company: "Vantage Solutions",
    avatarUrl: "https://i.pravatar.cc/150?img=53",
  },
  {
    quote:
      "As a solo broker I can't spend three hours a day returning calls only to discover the caller was just browsing. Tarsha qualifies every inquiry — budget confirmed, timeline clear, decision maker on the line. I work smarter now, not harder.",
    author: "Patricia L.",
    role: "Independent Broker",
    company: "Landmark Real Estate",
    avatarUrl: "https://i.pravatar.cc/150?img=39",
  },
  {
    quote:
      "Our team used to treat every inbound the same. Now Tarsha flags hot leads — the ones with budget, urgency, and clear intent — and we respond to those within minutes. Our revenue per call went up significantly because we prioritize correctly.",
    author: "Mike S.",
    role: "VP of Sales",
    company: "Clearfield Technologies",
    avatarUrl: "https://i.pravatar.cc/150?img=7",
  },
];

const steps = [
  {
    title: "Natural qualifying conversation",
    description:
      "Tarsha asks your custom qualifying questions through natural conversation — budget, timeline, decision-maker status, specific needs. No scripts that feel like a quiz, just a helpful exchange.",
    Illustration: IllusStep1LeadQual,
  },
  {
    title: "Lead scored automatically",
    description:
      "Based on the conversation, each lead is scored: hot (ready to buy, budget confirmed), warm (interested, more nurturing needed), or routine (browsing, low urgency). Rules you control.",
    Illustration: IllusStep2LeadQual,
  },
  {
    title: "Prioritized callback queue delivered",
    description:
      "Your team receives a ranked list of leads — hottest at the top, with full context. No wasted time on cold callbacks. No missed opportunities on hot ones.",
    Illustration: IllusStep3LeadQual,
  },
];

const benefits: Benefit[] = [
  {
    icon: UserCheck,
    title: "Custom qualification questions",
    description:
      "Define the exact questions Tarsha asks for your business — budget, timeline, company size, decision authority. Any criteria that matters to you.",
    MockUI: MockQualifyingScript,
    wide: true,
  },
  {
    icon: Zap,
    title: "Instant lead scoring",
    description:
      "Every lead is scored in real time during the call — no manual review, no data entry. Hot leads are flagged before the call even ends.",
    MockUI: MockLeadScoreCard,
  },
  {
    icon: ArrowUpRight,
    title: "Prioritized callback queue",
    description:
      "Your team gets a ranked list every time. Hottest leads at the top, full context included — so the right person gets called back within minutes.",
    MockUI: MockCallbackQueue,
  },
  {
    icon: BarChart3,
    title: "Conversion intelligence",
    description:
      "See which lead types convert best, how quickly hot leads are reached, and where your pipeline is strongest — built from every qualified call.",
    MockUI: MockConversionStats,
    wide: true,
  },
];

const industries = [
  "Sales teams",
  "Real estate agencies",
  "Insurance brokers",
  "HVAC & contractors",
  "Legal firms",
  "Financial advisors",
  "Recruitment agencies",
  "SaaS companies",
  "Mortgage brokers",
  "Auto dealerships",
  "Consulting firms",
  "Home services",
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function LeadQualificationPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-bg pt-[72px]">
        <SolutionHero
          eyebrow="Lead Qualification"
          titleBefore="Know which leads are "
          titleHighlight="worth calling back first"
          subtitle="Tarsha AI qualifies every caller with the right questions — scoring leads by budget, intent, and urgency so your team spends time on opportunities, not tire-kickers."
          MockUI={MockLeadQualScore}
        />
        <SolutionTestimonials
          eyebrow="Trusted by businesses like yours"
          testimonials={testimonials}
        />
        <SolutionIntro
          eyebrow="The capability"
          heading="Not every caller is worth the same callback time"
          paragraphs={[
            "Most businesses treat every inbound call the same — log it, call it back, discover it wasn't a real opportunity. That's expensive. A serious buyer with budget and urgency should reach you within minutes. Someone just browsing can wait — or be handled fully by Tarsha.",
            "Tarsha AI qualifies callers through natural conversation. It asks the right questions for your business, identifies intent and urgency, and scores each lead. You receive a prioritized summary — hot, warm, or routine — so your team knows exactly who to call back first and why.",
          ]}
          Illustration={IllusIntroLeadQual}
        />
        <SolutionHowItWorks
          heading="Every lead scored before you pick up the phone"
          steps={steps}
        />
        <SolutionBenefits
          eyebrow="What you get"
          heading="Focus on the leads that are ready to buy"
          benefits={benefits}
        />
        <SolutionIndustries
          eyebrow="Who benefits most"
          heading="Built for any team that sells over the phone"
          industries={industries}
        />
        <SolutionCTA heading="Spend your sales time on leads that are ready to buy." />
      </main>
      <Footer />
    </>
  );
}
