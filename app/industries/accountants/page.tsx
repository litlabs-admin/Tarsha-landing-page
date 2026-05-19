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
import { MockAccountantBooking } from "@/components/solutions/mocks/MockAccountantBooking";
import { motion } from "framer-motion";
import { CalendarCheck, Clock, Layers, MessageSquare } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

// ─── Step illustrations ───────────────────────────────────────────────────────

function IllusStep1Accountants() {
  const slots = [
    { time: "9:00 AM", available: true },
    { time: "10:30 AM", available: false },
    { time: "11:00 AM", available: true },
    { time: "2:00 PM", available: true, selected: true },
    { time: "3:30 PM", available: true },
    { time: "5:00 PM", available: false },
  ];
  return (
    <div className="space-y-2.5">
      <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
        A caller asks for a consultation
      </p>
      <div className="grid grid-cols-3 gap-1.5">
        {slots.map(({ time, available, selected }, i) => (
          <motion.div
            key={time}
            initial={{ opacity: 0, scale: 0.88 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07, duration: 0.35, ease: EASE }}
            className={`flex items-center justify-center rounded-lg border py-2.5 text-[12px] font-medium ${
              selected
                ? "border-accent bg-accent text-accent-ink shadow-sm"
                : available
                  ? "border-border bg-surface text-ink"
                  : "cursor-not-allowed border-border bg-surface-muted/60 text-ink/25"
            }`}
          >
            {time}
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.55, duration: 0.4, ease: EASE }}
        className="flex items-center gap-2 rounded-lg border border-accent/30 bg-accent/10 px-3 py-2"
      >
        <span className="text-[13px]">✓</span>
        <span className="text-[12px] font-medium text-ink">Wednesday 2 PM — selected</span>
      </motion.div>
    </div>
  );
}

function IllusStep2Accountants() {
  return (
    <div className="space-y-2">
      <div className="flex items-start gap-2.5">
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border bg-surface-muted text-[12px]">
          👤
        </div>
        <div className="rounded-xl rounded-tl-sm border border-border bg-surface px-3 py-2">
          <p className="text-[12px] text-ink">"When is the deadline for corporate tax?"</p>
        </div>
      </div>
      <div className="flex items-start gap-2.5">
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-[12px]">
          ✨
        </div>
        <div className="rounded-xl rounded-tl-sm border border-accent/30 bg-accent/10 px-3 py-2">
          <p className="text-[12px] text-ink">
            "The federal corporate tax deadline is April 15th. For extensions, the deadline is October 15th."
          </p>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.35, ease: EASE }}
        className="flex items-center justify-end gap-1.5"
      >
        <span className="rounded-full border border-green-200 bg-green-50 px-2 py-0.5 text-[10px] font-semibold text-green-700">
          &lt; 0.5s
        </span>
      </motion.div>
    </div>
  );
}

function IllusStep3Accountants() {
  return (
    <div className="space-y-2">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: EASE }}
        className="rounded-xl border border-accent/30 bg-accent/10 p-3.5"
      >
        <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
          Booking confirmed
        </p>
        <p className="mt-1 text-[14px] font-bold text-ink">Consultation · Wednesday May 22 · 2:00 PM</p>
      </motion.div>
      <div className="grid grid-cols-2 gap-1.5">
        {[
          { label: "Calendar event", status: "✓ added" },
          { label: "Confirmation sent", status: "✓ sent" },
        ].map(({ label, status }) => (
          <div
            key={label}
            className="rounded-lg border border-border bg-surface px-2.5 py-2 text-center"
          >
            <p className="text-[10px] text-ink-muted">{label}</p>
            <p className="mt-0.5 text-[11px] font-semibold text-green-600">{status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Intro illustration ───────────────────────────────────────────────────────

function IllusIntroAccountants() {
  const calls = [
    { emoji: "💼", label: "New client · needs filing help", outcome: "Reached voicemail", badge: "Missed", badgeClass: "border-red-200 bg-red-50 text-red-600" },
    { emoji: "💼", label: "Extension request question", outcome: "On hold 8 min", badge: "Frustrated", badgeClass: "border-amber-200 bg-amber-50 text-amber-600" },
    { emoji: "💼", label: "Bookkeeping inquiry", outcome: "No answer", badge: "Missed", badgeClass: "border-red-200 bg-red-50 text-red-600" },
    { emoji: "💼", label: "Business tax consultation", outcome: "Gave up", badge: "Lost", badgeClass: "border-red-200 bg-red-50 text-red-600" },
  ];
  return (
    <div className="space-y-2">
      <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-muted">
        Tax season · call volume
      </p>
      {calls.map(({ emoji, label, outcome, badge, badgeClass }, i) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, x: 14 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.4, ease: EASE }}
          className="flex items-center gap-2.5 rounded-xl border border-border bg-surface p-3"
        >
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface-muted text-[13px]">
            {emoji}
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[12px] font-medium text-ink">{label}</p>
            <p className="text-[11px] text-ink-muted">{outcome}</p>
          </div>
          <span className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-semibold ${badgeClass}`}>
            {badge}
          </span>
        </motion.div>
      ))}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.44, duration: 0.4, ease: EASE }}
        className="flex items-center gap-2.5 rounded-xl border border-border bg-surface-muted/60 px-3.5 py-2.5"
      >
        <span className="text-[15px]">⏱️</span>
        <p className="text-[12px] text-ink-muted">
          ~40 calls/day during peak season · capacity issues every year
        </p>
      </motion.div>
    </div>
  );
}

// ─── Benefit mock UIs ─────────────────────────────────────────────────────────

function MockSeasonalOverflow() {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const heights = [20, 85, 92, 90, 30, 22, 18, 20, 24, 28, 22, 18];
  return (
    <div className="mt-4 space-y-3">
      <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
        Call volume · by month
      </p>
      <div className="flex items-end gap-1 h-16">
        {months.map((month, i) => (
          <motion.div
            key={month}
            initial={{ scaleY: 0, originY: 1 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.045, duration: 0.4, ease: EASE }}
            className="flex-1 rounded-t"
            style={{
              height: `${heights[i]}%`,
              transformOrigin: "bottom",
              backgroundColor: heights[i] > 50 ? "rgb(var(--color-accent) / 0.8)" : "rgb(var(--color-border))",
            }}
          />
        ))}
      </div>
      <div className="flex items-center justify-between text-[10px] text-ink-muted">
        <span>Jan</span>
        <span>Apr</span>
        <span>Dec</span>
      </div>
      <div className="flex items-center gap-2 rounded-lg border border-green-200 bg-green-50 px-3 py-2">
        <span className="text-[13px]">✓</span>
        <span className="text-[12px] font-medium text-green-700">
          All handled · no missed calls regardless of volume
        </span>
      </div>
    </div>
  );
}

function MockFAQAccounting() {
  const faqs = [
    "What documents do I need?",
    "Can I file an extension?",
    "What's the penalty for late filing?",
    "Do you do bookkeeping?",
  ];
  return (
    <div className="mt-4 space-y-2">
      {faqs.map((question, i) => (
        <motion.div
          key={question}
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.09, duration: 0.35, ease: EASE }}
          className="flex items-center justify-between rounded-lg border border-border bg-surface px-3 py-2.5"
        >
          <span className="text-[12px] text-ink">{question}</span>
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="text-[10px] font-medium text-green-600">answered</span>
            <span className="rounded-full border border-green-200 bg-green-50 px-1.5 py-0.5 text-[10px] font-semibold text-green-700">
              &lt; 1s
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function MockConsultationBooking() {
  return (
    <div className="mt-4 space-y-2.5">
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, ease: EASE }}
        className="rounded-xl border border-accent/30 bg-accent/10 p-4"
      >
        <p className="text-[12px] font-semibold uppercase tracking-wide text-ink-muted">
          New client consultation
        </p>
        <p className="mt-1 text-[15px] font-bold text-ink">Wed May 22 · 2:00 PM</p>
        <p className="mt-0.5 text-[12px] text-ink-muted">Consultation · 45 min</p>
      </motion.div>
      <div className="grid grid-cols-2 gap-1.5">
        {[
          { label: "Calendar event", status: "✓ added" },
          { label: "Confirmation sent", status: "✓ sent" },
        ].map(({ label, status }) => (
          <div key={label} className="rounded-lg border border-border bg-surface px-3 py-2 text-center">
            <p className="text-[11px] text-ink-muted">{label}</p>
            <p className="mt-0.5 text-[12px] font-semibold text-green-600">{status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function MockPriorityCallback() {
  const callers = [
    { emoji: "🔥", label: "Business owner · urgent · callback today", priority: "high" as const },
    { emoji: "⭐", label: "Warm lead · interested in bookkeeping package", priority: "medium" as const },
    { emoji: "📋", label: "Existing client · has questions", priority: "normal" as const },
  ];
  return (
    <div className="mt-4 space-y-2">
      {callers.map(({ emoji, label, priority }, i) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.38, ease: EASE }}
          className={`flex items-center gap-3 rounded-lg border px-3 py-2.5 ${
            priority === "high"
              ? "border-red-200 bg-red-50"
              : priority === "medium"
                ? "border-accent/30 bg-accent/10"
                : "border-border bg-surface"
          }`}
        >
          <span className="text-[15px]">{emoji}</span>
          <span className="text-[12px] text-ink">{label}</span>
        </motion.div>
      ))}
    </div>
  );
}

// ─── Page data ────────────────────────────────────────────────────────────────

const testimonials: TestimonialItem[] = [
  {
    quote:
      "February through April, my phone never stops. Every year I missed consultations because I was heads-down in returns. Tarsha books every appointment automatically, and I haven't lost a single new client to voicemail in two tax seasons.",
    author: "Paul N.",
    role: "CPA & Partner",
    company: "Nordstrom Tax Advisory",
    avatarUrl: "https://i.pravatar.cc/150?img=50",
  },
  {
    quote:
      "We get the same questions every season — deadlines, document requirements, extension options. Tarsha answers them all instantly and confidently. My team is focused on work that actually requires their expertise, not answering 'when's the last day to file?'",
    author: "Diana C.",
    role: "Managing Partner",
    company: "Chen & Clarke CPAs",
    avatarUrl: "https://i.pravatar.cc/150?img=31",
  },
  {
    quote:
      "I'm a solo practitioner. I can't answer calls while I'm with a client. Tarsha is my front office — it books consultations, answers questions, and never lets a new business owner feel ignored. My client list grew 40% this year, partly because I was available every time someone tried to reach me.",
    author: "Thomas B.",
    role: "Independent CPA",
    company: "Blanchard Accounting",
    avatarUrl: "https://i.pravatar.cc/150?img=49",
  },
];

const steps = [
  {
    title: "Consultations booked automatically",
    description:
      "New clients can book a consultation while you're deep in a tax return. Tarsha checks your calendar in real time and locks in the appointment — no interruptions, no callbacks needed.",
    Illustration: IllusStep1Accountants,
  },
  {
    title: "Deadline and FAQ questions answered",
    description:
      "Filing deadlines, extension rules, required documents, business entity differences — Tarsha answers these instantly so callers get information without tying up your team.",
    Illustration: IllusStep2Accountants,
  },
  {
    title: "Peak season overflow handled",
    description:
      "When calls stack up during tax season, Tarsha handles every one professionally. Priority callers are flagged for immediate callbacks. New inquiries are queued and ready for your team.",
    Illustration: IllusStep3Accountants,
  },
];

const benefits: Benefit[] = [
  {
    icon: Clock,
    title: "Peak season overflow handling",
    description:
      "Tax season phone volume stops being a problem. Every call is answered, every lead is captured — regardless of how many come in at once.",
    MockUI: MockSeasonalOverflow,
    wide: true,
  },
  {
    icon: MessageSquare,
    title: "Instant FAQ answers",
    description:
      "Deadlines, extensions, documents, business structures — answered instantly from your knowledge base, 24/7.",
    MockUI: MockFAQAccounting,
  },
  {
    icon: CalendarCheck,
    title: "New client booking",
    description:
      "Consultations book directly into your calendar. New clients are ready to meet — not waiting on a callback.",
    MockUI: MockConsultationBooking,
  },
  {
    icon: Layers,
    title: "Priority callback queue",
    description:
      "Not all calls are equal. Tarsha flags urgent callers, high-value leads, and time-sensitive inquiries for priority callbacks.",
    MockUI: MockPriorityCallback,
    wide: true,
  },
];

const industries = [
  "Tax preparation firms",
  "CPA practices",
  "Bookkeeping services",
  "Financial advisors",
  "Business consultants",
  "Payroll services",
  "Audit firms",
  "Nonprofit accounting",
  "Estate planners",
  "Forensic accountants",
  "Law firms",
  "Insurance agencies",
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AccountantsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-bg pt-[72px]">
        <SolutionHero
          eyebrow="Accountants & CPA Firms"
          titleBefore="Keep your calendar full "
          titleHighlight="through every tax season"
          subtitle="Tarsha AI handles appointment scheduling, client FAQs, and overflow calls year-round — so you can focus on the work, not the phone."
          MockUI={MockAccountantBooking}
        />
        <SolutionTestimonials
          eyebrow="Trusted by accounting professionals"
          testimonials={testimonials}
        />
        <SolutionIntro
          eyebrow="The problem"
          heading="Tax season floods your phone — off-season dries it up. Neither should cost you clients."
          paragraphs={[
            "For accounting firms, the phone is feast or famine. During tax season, calls come in faster than anyone can handle. Off-season, you're chasing appointment requests that slipped through. Either way, the result is the same: potential clients who couldn't reach you and went elsewhere.",
            "Tarsha AI manages your phone intelligently year-round. During peak season it handles overflow instantly so no call is missed. Off-season it books consultations, answers deadlines questions, and keeps your pipeline moving. One consistent, professional voice — whatever the volume.",
          ]}
          Illustration={IllusIntroAccountants}
        />
        <SolutionHowItWorks
          heading="Handle tax season without dropping a single call"
          steps={steps}
        />
        <SolutionBenefits
          eyebrow="What you get"
          heading="Everything your front desk needs, without the overhead"
          benefits={benefits}
        />
        <SolutionIndustries
          eyebrow="Who uses this"
          heading="Built for every corner of the accounting profession"
          industries={industries}
        />
        <SolutionCTA heading="Never let a tax season cost you a new client again." />
      </main>
      <Footer />
    </>
  );
}
