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
import { MockQAConversation } from "@/components/solutions/mocks/MockQAConversation";
import { cn } from "@/lib/cn";
import { motion } from "framer-motion";
import { ArrowUpRight, Brain, MessageCircle, RefreshCw } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

// ─── Step illustrations ───────────────────────────────────────────────────────

function IllusFAQUpload() {
  const items = [
    { q: "What are your business hours?", live: true },
    { q: "Do you offer free consultations?", live: true },
    { q: "What's your cancellation policy?", live: true },
    { q: "Do you accept insurance?", live: false },
  ];
  return (
    <div className="space-y-1.5">
      {items.map(({ q, live }, i) => (
        <motion.div
          key={q}
          initial={{ opacity: 0, x: -6 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08, duration: 0.32, ease: EASE }}
          className="flex items-center justify-between rounded-lg border border-border bg-surface px-3 py-2"
        >
          <span className="text-[11px] text-ink truncate pr-2">{q}</span>
          <span
            className={cn(
              "shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold border",
              live
                ? "bg-green-50 text-green-700 border-green-200"
                : "bg-surface-muted text-ink-muted border-border",
            )}
          >
            {live ? "live" : "draft"}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

function IllusCallerAsking() {
  return (
    <div className="space-y-2">
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.38, ease: EASE }}
        className="flex justify-start"
      >
        <div className="max-w-[85%] rounded-2xl rounded-tl-sm border border-border bg-surface px-3.5 py-2.5 text-[13px] text-ink shadow-sm">
          "Do you guys offer weekend appointments?"
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.38, ease: EASE }}
        className="flex justify-end"
      >
        <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-ink px-3.5 py-2.5 text-[13px] leading-relaxed text-white shadow-sm">
          Yes! We're open Saturdays 9 AM–2 PM. Want me to check availability for you?
        </div>
      </motion.div>
    </div>
  );
}

function IllusInstantAnswer() {
  return (
    <div className="grid grid-cols-2 gap-2">
      {[
        { value: "0.4s", label: "Response time" },
        { value: "100%", label: "Accuracy rate" },
        { value: "142", label: "Qs handled today" },
        { value: "3", label: "Escalations today" },
      ].map(({ value, label }, i) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.07, duration: 0.35, ease: EASE }}
          className="rounded-xl border border-border bg-surface p-3 text-center shadow-sm"
        >
          <p className="font-display text-[1.4rem] font-bold text-ink">{value}</p>
          <p className="mt-0.5 text-[10px] text-ink-muted">{label}</p>
        </motion.div>
      ))}
    </div>
  );
}

// ─── Intro illustration ───────────────────────────────────────────────────────

function IllusIntroRepeatQuestions() {
  const items = [
    { q: "What are your opening hours?", badge: "×14 today", highlight: true },
    { q: "Do you accept walk-ins?", badge: null, highlight: false },
    { q: "What are your opening hours?", badge: "×14 today", highlight: true },
    { q: "How much does a consultation cost?", badge: null, highlight: false },
  ];
  return (
    <div className="space-y-2">
      <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-muted">
        Today's incoming calls
      </p>
      {items.map(({ q, badge, highlight }, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.09, duration: 0.35, ease: EASE }}
          className={`flex items-center gap-2.5 rounded-xl border px-3 py-2.5 ${
            highlight
              ? "border-amber-200 bg-amber-50"
              : "border-border bg-surface"
          }`}
        >
          <span className="text-[13px]">💬</span>
          <p className="flex-1 text-[12px] text-ink">{q}</p>
          {badge && (
            <span className="shrink-0 rounded-full bg-amber-100 px-1.5 py-0.5 text-[9px] font-bold text-amber-700">
              {badge}
            </span>
          )}
        </motion.div>
      ))}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.42, duration: 0.4, ease: EASE }}
        className="flex items-center gap-2.5 rounded-xl border border-border bg-surface-muted/60 px-3.5 py-2.5"
      >
        <span className="text-[15px]">⏱️</span>
        <p className="text-[12px] text-ink-muted">~2 hrs/day answering the same questions</p>
      </motion.div>
    </div>
  );
}

// ─── Benefit mock UIs ─────────────────────────────────────────────────────────

function MockKnowledgeBase() {
  const items = [
    { q: "What are your hours?", status: "live" },
    { q: "Do you offer free consultations?", status: "live" },
    { q: "What's your cancellation policy?", status: "live" },
    { q: "Do you accept insurance?", status: "draft" },
  ];
  return (
    <div className="mt-4 space-y-1.5">
      {items.map(({ q, status }, i) => (
        <motion.div
          key={q}
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.09, duration: 0.35, ease: EASE }}
          className="flex items-center justify-between rounded-lg border border-border bg-surface px-3 py-2.5"
        >
          <span className="text-[12px] text-ink">{q}</span>
          <span
            className={cn(
              "rounded-full px-2 py-0.5 text-[10px] font-semibold border",
              status === "live"
                ? "bg-green-50 text-green-700 border-green-200"
                : "bg-surface-muted text-ink-muted border-border",
            )}
          >
            {status}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

function MockNaturalChat() {
  const msgs = [
    { text: "How much does it cost?", side: "left" as const },
    {
      text: "Plans start at $99/mo. Want me to walk you through what's included?",
      side: "right" as const,
    },
  ];
  return (
    <div className="mt-4 space-y-2">
      {msgs.map(({ text, side }, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: side === "left" ? -10 : 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.18, duration: 0.38, ease: EASE }}
          className={`flex ${side === "left" ? "justify-start" : "justify-end"}`}
        >
          <div
            className={cn(
              "max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed shadow-sm",
              side === "left"
                ? "rounded-tl-sm border border-border bg-surface text-ink"
                : "rounded-tr-sm bg-ink text-white",
            )}
          >
            {text}
          </div>
        </motion.div>
      ))}
      <div className="flex items-center gap-1.5 pl-1">
        {[0, 0.2, 0.4].map((delay) => (
          <motion.span
            key={delay}
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut", delay }}
            className="h-1.5 w-1.5 rounded-full bg-ink/40"
          />
        ))}
        <span className="ml-1 text-[11px] text-ink-muted">Tarsha AI is typing…</span>
      </div>
    </div>
  );
}

function MockEscalation() {
  return (
    <div className="mt-4 space-y-2">
      <div className="rounded-xl border border-border bg-surface p-3.5">
        <p className="text-[12px] font-semibold text-ink-muted uppercase tracking-wide">
          Escalation triggered
        </p>
        <p className="mt-1.5 text-[13px] text-ink">
          "I'd like to speak with someone about a billing dispute."
        </p>
      </div>
      <div className="flex items-center gap-2.5 rounded-xl border border-accent/30 bg-accent/10 px-3.5 py-2.5">
        <span className="text-[16px]">→</span>
        <div>
          <p className="text-[12px] font-medium text-ink">Transferring to billing team</p>
          <p className="text-[11px] text-ink-muted">With context summary attached</p>
        </div>
      </div>
    </div>
  );
}

function MockUpdateBadge() {
  return (
    <div className="mt-4 space-y-2.5">
      <div className="rounded-xl border border-border bg-surface p-4">
        <div className="flex items-center justify-between">
          <p className="text-[13px] font-medium text-ink">Holiday hours updated</p>
          <span className="text-[11px] text-ink-muted">just now</span>
        </div>
        <p className="mt-1 text-[12px] text-ink-muted">
          New hours active across all callers instantly
        </p>
      </div>
      <div className="grid grid-cols-2 gap-1.5">
        {[
          { label: "Questions answered", value: "142" },
          { label: "Escalations today", value: "3" },
        ].map(({ label, value }) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: EASE }}
            className="rounded-lg border border-border bg-surface p-3 text-center"
          >
            <p className="font-display text-[1.75rem] font-bold text-ink">{value}</p>
            <p className="text-[11px] text-ink-muted">{label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ─── Page data ────────────────────────────────────────────────────────────────

const testimonials: TestimonialItem[] = [
  {
    quote:
      "Our team was spending 40% of their time answering the same 10 questions over and over, hours, pricing, insurance. Tarsha handles all of it instantly now. Patient satisfaction scores went up, and so did our productivity.",
    author: "Dr. Rachel K.",
    role: "Practice Manager",
    company: "Sunrise Dental",
    avatarUrl: "https://i.pravatar.cc/150?img=32",
  },
  {
    quote:
      "People called constantly asking if we were open or what was on the menu. Tarsha handles those instantly in English and Spanish. Our phone is quiet, and my staff are actually cooking and serving, not answering the same question for the hundredth time.",
    author: "Carlos M.",
    role: "Owner",
    company: "The Local Table",
    avatarUrl: "https://i.pravatar.cc/150?img=60",
  },
  {
    quote:
      "Tenants call at 10 PM asking about maintenance procedures or lease terms. Tarsha answers accurately every time with the right information. We've had zero complaints about unreturned calls since we made the switch six months ago.",
    author: "Lisa P.",
    role: "Operations Lead",
    company: "Metro Property Group",
    avatarUrl: "https://i.pravatar.cc/150?img=38",
  },
];

const steps = [
  {
    title: "Upload your FAQ",
    description:
      "Add your hours, pricing, services, policies, anything callers ask about. Takes under 5 minutes, and you can update it any time from your dashboard.",
    Illustration: IllusFAQUpload,
  },
  {
    title: "A caller asks a question",
    description:
      "Any question, at any time, in any language. Tarsha AI understands natural speech, no menus, no prompts, no frustrating hold music.",
    Illustration: IllusCallerAsking,
  },
  {
    title: "Instant, accurate answer",
    description:
      "Tarsha responds with exactly the right information from your knowledge base. If a question needs a human, it escalates immediately with full context.",
    Illustration: IllusInstantAnswer,
  },
];

const benefits: Benefit[] = [
  {
    icon: Brain,
    title: "Custom knowledge base",
    description:
      "Train Tarsha on your exact answers, your tone, and your business, not generic responses.",
    MockUI: MockKnowledgeBase,
    wide: true,
  },
  {
    icon: MessageCircle,
    title: "Natural conversation",
    description:
      "Sounds human. No reading from a script, no robotic menus, just a natural, helpful exchange.",
    MockUI: MockNaturalChat,
  },
  {
    icon: ArrowUpRight,
    title: "Smart escalation",
    description:
      "When a question needs a human, Tarsha hands off seamlessly, with a full context summary attached.",
    MockUI: MockEscalation,
  },
  {
    icon: RefreshCw,
    title: "Always up to date",
    description:
      "Change your hours, add a new service, update pricing, every caller gets the new answer instantly.",
    MockUI: MockUpdateBadge,
    wide: true,
  },
];

const industries = [
  "Restaurants & cafes",
  "Retailers",
  "Medical offices",
  "Dental practices",
  "Property management",
  "Legal practices",
  "E-commerce",
  "Hotels & hospitality",
  "Gyms & studios",
  "Insurance agencies",
  "Auto dealerships",
  "Home services",
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AnswerQuestionsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-bg pt-[72px]">
        <SolutionHero
          eyebrow="Answer Questions"
          titleBefore="Train once. Answer "
          titleHighlight="every question"
          titleAfter=" forever."
          subtitle="Upload your FAQ and business info. Tarsha AI gives every caller an instant, accurate answer, no hold music, no waiting, no staff needed."
          MockUI={MockQAConversation}
        />
        <SolutionTestimonials
          eyebrow="What businesses are saying"
          testimonials={testimonials}
        />
        <SolutionIntro
          eyebrow="The problem"
          heading="The same 10 questions shouldn't take 2 hours a day"
          paragraphs={[
            "Most businesses answer the same handful of questions on every call, hours, pricing, services, location. These are necessary calls, but they consume time your staff could be spending on higher-value work.",
            "Tarsha AI learns your business inside and out. Upload your FAQ, policies, and service details once, and it will answer any version of those questions instantly, accurately, and around the clock, in any language. When something genuinely requires a human, Tarsha escalates immediately with full context.",
          ]}
          Illustration={IllusIntroRepeatQuestions}
        />
        <SolutionHowItWorks
          heading="Set up once, answers run forever"
          steps={steps}
        />
        <SolutionBenefits
          eyebrow="What you get"
          heading="Every caller gets the right answer, instantly"
          benefits={benefits}
        />
        <SolutionIndustries
          eyebrow="Who uses this"
          heading="Any business tired of answering the same questions"
          industries={industries}
        />
        <SolutionCTA heading="Every caller deserves an instant answer." />
      </main>
      <Footer />
    </>
  );
}
