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
import { MockLegalIntake } from "@/components/solutions/mocks/MockLegalIntake";
import { motion } from "framer-motion";
import { Clock, FileText, PhoneCall, ShieldCheck } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

// ─── Step illustrations ───────────────────────────────────────────────────────

function IllusStep1LawFirm() {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-3 rounded-xl border border-border bg-surface-muted/60 p-3.5">
        <motion.div
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-xl shadow-sm"
        >
          📞
        </motion.div>
        <div className="flex-1 min-w-0">
          <p className="text-[11px] text-ink-muted">Incoming call</p>
          <p className="text-[13px] font-semibold text-ink">Claire Anderson · New inquiry</p>
        </div>
        <motion.span
          animate={{ opacity: [1, 0.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="h-2.5 w-2.5 shrink-0 rounded-full bg-green-500 shadow-[0_0_0_4px_rgba(34,197,94,0.15)]"
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.4, ease: EASE }}
        className="flex items-center gap-2 rounded-xl border border-accent/30 bg-accent/10 px-3.5 py-2"
      >
        <span className="text-[12px] font-semibold text-ink">Answered in &lt;2s</span>
      </motion.div>
    </div>
  );
}

function IllusStep2LawFirm() {
  const fields = [
    { label: "Caller", value: "Claire Anderson" },
    { label: "Matter type", value: "Family law, divorce" },
    { label: "Urgency", value: "Initial consultation" },
    { label: "Best time", value: "Mornings" },
  ];
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-sm">
      <div className="border-b border-border bg-surface-muted/60 px-3.5 py-2 text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
        Intake form
      </div>
      {fields.map(({ label, value }, i) => (
        <motion.div
          key={label}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.12, duration: 0.35, ease: EASE }}
          className="flex items-center gap-3 border-b border-border px-3.5 py-2 last:border-0"
        >
          <span className="w-20 shrink-0 text-[10px] text-ink-muted">{label}</span>
          <span className="flex-1 text-[11px] text-ink">{value}</span>
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 + i * 0.12, duration: 0.28, ease: EASE }}
            className="shrink-0 text-[11px] text-green-600"
          >
            ✓
          </motion.span>
        </motion.div>
      ))}
    </div>
  );
}

function IllusStep3LawFirm() {
  return (
    <div className="space-y-2">
      <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-sm">
        <div className="border-b border-border bg-surface-muted/60 px-3.5 py-2 text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
          Routing result
        </div>
        <div className="px-3.5 py-2.5">
          <p className="text-[12px] text-ink-muted">Routed to</p>
          <p className="text-[13px] font-semibold text-ink">Family Law team</p>
        </div>
      </div>
      <div className="flex items-center gap-2.5 rounded-xl border border-border bg-surface px-3.5 py-2.5">
        <motion.span
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="h-2 w-2 shrink-0 rounded-full bg-green-500 shadow-[0_0_0_3px_rgba(34,197,94,0.2)]"
        />
        <span className="text-[12px] text-ink">Intake summary sent</span>
      </div>
    </div>
  );
}

// ─── Intro illustration ───────────────────────────────────────────────────────

function IllusIntroLawFirm() {
  const rows = [
    { emoji: "👤", label: "New client inquiry", sub: "Went to voicemail", badge: "Lost", color: "red" as const },
    { emoji: "👤", label: "Urgent matter · existing client", sub: "No answer", badge: "Missed", color: "red" as const },
    { emoji: "👤", label: "Consultation request", sub: "Called competitor", badge: "Lost", color: "red" as const },
  ];
  return (
    <div className="space-y-2">
      <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-muted">
        Calls missed this week
      </p>
      {rows.map(({ emoji, label, sub, badge }, i) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, x: 14 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.4, ease: EASE }}
          className="flex items-center gap-3 rounded-xl border border-border bg-surface p-3"
        >
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-50 text-[14px]">
            {emoji}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[12px] font-medium text-ink truncate">{label}</p>
            <p className="text-[11px] text-ink-muted">{sub}</p>
          </div>
          <span className="shrink-0 rounded-full border border-red-200 bg-red-50 px-2 py-0.5 text-[10px] font-semibold text-red-600">
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
        <span className="text-[15px]">⚠️</span>
        <p className="text-[12px] text-ink-muted">
          Each missed call is a potential case, and revenue, walking away
        </p>
      </motion.div>
    </div>
  );
}

// ─── Benefit mock UIs ─────────────────────────────────────────────────────────

function MockIntakeCapture() {
  const fields = [
    { label: "Caller name", value: "Claire Anderson" },
    { label: "Contact number", value: "(619) 555-0204" },
    { label: "Matter type", value: "Family law, divorce" },
    { label: "Urgency", value: "Initial consultation" },
  ];
  return (
    <div className="mt-4 overflow-hidden rounded-xl border border-border bg-surface shadow-sm">
      <div className="border-b border-border bg-surface-muted/60 px-4 py-2 text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
        Intake details
      </div>
      {fields.map(({ label, value }) => (
        <div key={label} className="flex gap-3 border-b border-border px-4 py-2 last:border-0">
          <span className="w-24 shrink-0 text-[10px] text-ink-muted">{label}</span>
          <span className="text-[11px] text-ink">{value}</span>
        </div>
      ))}
      <div className="flex items-center gap-2 bg-accent/10 px-4 py-2">
        <span className="text-[11px] font-semibold text-ink">✓ Intake complete</span>
      </div>
    </div>
  );
}

function MockUrgentEscalation() {
  return (
    <div className="mt-4 space-y-2">
      <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3">
        <p className="text-[12px] font-semibold text-red-700">Caller flagged as urgent</p>
        <p className="text-[11px] text-red-600 mt-0.5">Bail request · time-sensitive</p>
      </div>
      <div className="flex items-center gap-2.5 rounded-xl border border-border bg-surface px-4 py-2.5">
        <span className="text-[12px] text-ink-muted">→</span>
        <span className="text-[12px] text-ink">Routed to duty attorney · immediately</span>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: EASE }}
        className="flex items-center gap-2 rounded-xl border border-accent/30 bg-accent/10 px-4 py-2"
      >
        <motion.span
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="h-1.5 w-1.5 rounded-full bg-green-500"
        />
        <span className="text-[12px] font-medium text-ink">Reached in 0.4s</span>
      </motion.div>
    </div>
  );
}

function MockAfterHoursLaw() {
  return (
    <div className="mt-4 space-y-2">
      <div className="flex items-center justify-between rounded-xl border border-border bg-surface px-4 py-3">
        <div>
          <p className="text-[13px] font-semibold text-ink">9:47 PM</p>
          <p className="text-[11px] text-ink-muted">After hours mode</p>
        </div>
        <span className="rounded-full border border-border bg-surface-muted/60 px-2.5 py-1 text-[10px] font-semibold text-ink-muted">
          Active
        </span>
      </div>
      <div className="rounded-xl border border-border bg-surface px-4 py-2.5">
        <p className="text-[12px] text-ink">Call answered · professional greeting</p>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-center">
          <p className="text-[10px] font-semibold text-red-700">Urgent</p>
          <p className="text-[10px] text-red-600 mt-0.5">→ On-call</p>
        </div>
        <div className="rounded-xl border border-border bg-surface-muted/60 px-3 py-2 text-center">
          <p className="text-[10px] font-semibold text-ink">Routine</p>
          <p className="text-[10px] text-ink-muted mt-0.5">→ Morning callback</p>
        </div>
      </div>
    </div>
  );
}

function MockCallLog() {
  const calls = [
    { name: "Claire Anderson", type: "Family law", status: "Routed", time: "9:12 AM" },
    { name: "David Ortiz", type: "Criminal defense", status: "Callback set", time: "11:34 AM" },
    { name: "Sarah Kim", type: "Estate planning", status: "Intake taken", time: "2:05 PM" },
  ];
  return (
    <div className="mt-4 overflow-hidden rounded-xl border border-border bg-surface shadow-sm">
      <div className="border-b border-border bg-surface-muted/60 px-4 py-2 text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
        Call log · today
      </div>
      {calls.map(({ name, type, status, time }, i) => (
        <motion.div
          key={name}
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.35, ease: EASE }}
          className="flex items-center gap-3 border-b border-border px-4 py-2.5 last:border-0"
        >
          <div className="flex-1 min-w-0">
            <p className="text-[12px] font-medium text-ink truncate">{name}</p>
            <p className="text-[10px] text-ink-muted">{type}</p>
          </div>
          <div className="text-right">
            <span className="block rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 text-[10px] font-semibold text-ink">
              {status}
            </span>
            <span className="mt-0.5 block text-[10px] text-ink-muted">{time}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// ─── Page data ────────────────────────────────────────────────────────────────

const testimonials: TestimonialItem[] = [
  {
    quote:
      "Client intake was consuming 3 hours of my paralegal's day. Calls coming in during depositions, court appearances, consultations, all going to voicemail. Tarsha now answers every single one, gathers intake info, and routes correctly. We haven't missed a new client inquiry in four months.",
    author: "Rebecca M.",
    role: "Managing Partner",
    company: "Morrison & Associates",
    avatarUrl: "https://i.pravatar.cc/150?img=29",
  },
  {
    quote:
      "In family law, callers are often in distress. They need to feel heard immediately. Tarsha greets them warmly, captures their situation professionally, and gets the right person on the line fast. Three clients told me this was the reason they chose our firm.",
    author: "Daniel H.",
    role: "Principal Attorney",
    company: "Hargrove Family Law",
    avatarUrl: "https://i.pravatar.cc/150?img=55",
  },
  {
    quote:
      "We do criminal defense, calls come at all hours, often urgent. Tarsha screens and routes them immediately. Emergency calls reach someone. Routine inquiries are captured and queued. I haven't missed a single urgent call since we switched.",
    author: "Marcus J.",
    role: "Partner",
    company: "Jensen Criminal Defense",
    avatarUrl: "https://i.pravatar.cc/150?img=12",
  },
];

const steps = [
  {
    title: "Every call answered, professionally",
    description:
      "Tarsha answers in your firm's name within 2 seconds, day, night, and weekends. Callers in distress hear a warm, professional voice immediately, not a voicemail prompt.",
    Illustration: IllusStep1LawFirm,
  },
  {
    title: "Precise intake captured",
    description:
      "Tarsha collects the caller's name, contact details, matter type, and urgency level, everything your team needs to prepare for a callback or consultation.",
    Illustration: IllusStep2LawFirm,
  },
  {
    title: "Routed to the right attorney",
    description:
      "Family law, criminal defense, estate planning, Tarsha routes each caller to the right practice area instantly, with a full summary so whoever picks up is already briefed.",
    Illustration: IllusStep3LawFirm,
  },
];

const benefits: Benefit[] = [
  {
    icon: FileText,
    title: "Accurate intake on every call",
    description:
      "Name, contact, matter type, urgency, captured precisely and delivered to your inbox before you call back.",
    MockUI: MockIntakeCapture,
    wide: true,
  },
  {
    icon: PhoneCall,
    title: "Urgent matter escalation",
    description:
      "Time-sensitive calls, custody emergencies, bail requests, court deadlines, are escalated immediately to the right attorney.",
    MockUI: MockUrgentEscalation,
  },
  {
    icon: Clock,
    title: "After-hours coverage",
    description:
      "Your firm never goes dark. Tarsha handles evening and weekend calls with the same professionalism, routing urgent matters to your on-call line.",
    MockUI: MockAfterHoursLaw,
  },
  {
    icon: ShieldCheck,
    title: "Confidential handling",
    description:
      "Callers are never asked to leave sensitive details in a voicemail. Tarsha handles intake conversations with appropriate discretion.",
    MockUI: MockCallLog,
    wide: true,
  },
];

const industries = [
  "Medical practices",
  "Insurance agencies",
  "Accountants & CPAs",
  "Real estate agencies",
  "Financial advisors",
  "Property management",
  "Dental practices",
  "Chiropractors",
  "Therapists & counselors",
  "Home services",
  "HVAC companies",
  "Contractors",
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function LawFirmsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-bg pt-[72px]">
        <SolutionHero
          eyebrow="Law Firms"
          titleBefore="Never let a potential client "
          titleHighlight="reach your voicemail"
          subtitle="Tarsha AI handles every call to your firm with discretion and professionalism, capturing intake details, routing to the right attorney, and covering after-hours without compromising your reputation."
          MockUI={MockLegalIntake}
        />
        <SolutionTestimonials
          eyebrow="Trusted by firms like yours"
          testimonials={testimonials}
        />
        <SolutionIntro
          eyebrow="The problem"
          heading="Missed calls cost law firms clients, and reputation"
          paragraphs={[
            "When someone calls a law firm, they're often in a stressful situation. They need to feel heard. If that call goes to voicemail, they call the next firm on the list, and your chance at that client is gone. For high-stakes referral businesses like law, first impressions are everything.",
            "Tarsha AI answers every call professionally in your firm's name, captures accurate intake information, and routes callers to the right attorney or team. Urgent matters are escalated immediately. After-hours calls are handled with the same professionalism as business-hours calls, and every interaction is logged with full context.",
          ]}
          Illustration={IllusIntroLawFirm}
        />
        <SolutionHowItWorks
          heading="Answer every call without missing a client"
          steps={steps}
        />
        <SolutionBenefits
          eyebrow="What you get"
          heading="Every client call handled with care"
          benefits={benefits}
        />
        <SolutionIndustries
          eyebrow="Who else uses Tarsha"
          heading="Built for any professional services firm"
          industries={industries}
        />
        <SolutionCTA heading="Every potential client deserves to be heard, starting with the first call." />
      </main>
      <Footer />
    </>
  );
}
