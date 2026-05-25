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
import { MockAfterHoursCall } from "@/components/solutions/mocks/MockAfterHoursCall";
import { motion } from "framer-motion";
import { CalendarCheck, FileText, Moon, Zap } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

// ─── Step illustrations ───────────────────────────────────────────────────────

function IllusAfterHoursAnswered() {
  return (
    <div className="space-y-2.5">
      <div className="flex items-center justify-between rounded-xl border border-accent/30 bg-accent/10 px-3.5 py-2.5">
        <div className="flex items-center gap-2">
          <motion.span
            animate={{ opacity: [1, 0.25, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_0_3px_rgba(34,197,94,0.2)]"
          />
          <span className="text-[12px] font-medium text-ink">After hours · active</span>
        </div>
        <span className="tabular-nums text-[12px] font-semibold text-ink">6:23 PM</span>
      </div>
      <div className="flex items-center gap-3 rounded-xl border border-border bg-surface p-3">
        <motion.div
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-xl shadow-sm"
        >
          📞
        </motion.div>
        <div className="flex-1 min-w-0">
          <p className="text-[11px] text-ink-muted">Incoming call</p>
          <p className="text-[13px] font-semibold text-ink">Jennifer Walsh</p>
        </div>
        <span className="shrink-0 rounded-full border border-green-200 bg-green-50 px-2 py-0.5 text-[10px] font-semibold text-green-700">
          answered in &lt;2s
        </span>
      </div>
    </div>
  );
}

function IllusUrgencyTriage() {
  return (
    <div className="space-y-2.5">
      <div className="rounded-xl border border-border bg-surface p-3">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
          Caller says:
        </p>
        <p className="mt-1.5 text-[13px] leading-relaxed text-ink">
          "My pipe just burst, I need emergency help"
        </p>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.38, ease: EASE }}
          className="rounded-xl border border-red-300 bg-red-50 p-3 shadow-sm"
        >
          <p className="text-[12px] font-semibold text-red-700">🚨 Urgent</p>
          <p className="mt-0.5 text-[11px] text-red-600">→ Routed to on-call</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.38, ease: EASE }}
          className="rounded-xl border border-border bg-surface p-3 opacity-50"
        >
          <p className="text-[12px] font-semibold text-ink">📋 Routine</p>
          <p className="mt-0.5 text-[11px] text-ink-muted">→ Morning callback</p>
        </motion.div>
      </div>
    </div>
  );
}

function IllusMorningSummary() {
  const rows = [
    { label: "2 urgent calls · Escalated", badge: "Escalated", color: "red" as const },
    { label: "5 routine calls · Ready for callback", badge: "Callback", color: "accent" as const },
    { label: "1 booking · Confirmed for 9 AM", badge: "Confirmed", color: "green" as const },
  ];
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-sm">
      <div className="border-b border-border bg-surface-muted/60 px-3.5 py-2 flex items-center justify-between">
        <span className="text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
          Last night's summary
        </span>
        <span className="text-[11px] text-ink-muted">May 20</span>
      </div>
      {rows.map(({ label, badge, color }, i) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.38, ease: EASE }}
          className="flex items-center justify-between gap-3 border-b border-border px-3.5 py-2.5 last:border-0"
        >
          <span className="text-[12px] text-ink">{label}</span>
          <span
            className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold ${
              color === "red"
                ? "border border-red-200 bg-red-50 text-red-600"
                : color === "green"
                  ? "border border-green-200 bg-green-50 text-green-700"
                  : "border border-accent/30 bg-accent/10 text-ink"
            }`}
          >
            {badge}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

// ─── Intro illustration ───────────────────────────────────────────────────────

function IllusIntroAfterHours() {
  const calls = [
    { name: "Tom K.", time: "5:42 PM · After close" },
    { name: "Sarah W.", time: "7:18 PM" },
    { name: "David R.", time: "9:34 PM" },
    { name: "Unknown", time: "11:02 PM" },
  ];
  return (
    <div className="space-y-2">
      <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-muted">
        After business hours · missed calls
      </p>
      {calls.map(({ name, time }, i) => (
        <motion.div
          key={name + time}
          initial={{ opacity: 0, x: 14 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.4, ease: EASE }}
          className="flex items-center gap-3 rounded-xl border border-border bg-surface p-3"
        >
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-50 text-[14px]">
            📵
          </div>
          <div className="flex-1 min-w-0">
            <p className="truncate text-[12px] font-medium text-ink">{name}</p>
            <p className="text-[11px] text-ink-muted">{time}</p>
          </div>
          <span className="shrink-0 rounded-full border border-red-200 bg-red-50 px-2 py-0.5 text-[10px] font-semibold text-red-600">
            Missed
          </span>
        </motion.div>
      ))}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.45, duration: 0.4, ease: EASE }}
        className="flex gap-2.5 rounded-xl border border-border bg-surface-muted/60 px-3.5 py-2.5"
      >
        <span className="text-[15px]">⚠️</span>
        <p className="text-[12px] text-ink-muted">
          4 potential customers waited until morning, or didn't
        </p>
      </motion.div>
    </div>
  );
}

// ─── Benefit mock UIs ─────────────────────────────────────────────────────────

function MockAfterHoursMode() {
  const schedules = [
    { label: "Weekday evenings (6 PM–9 PM)", value: "Booking + messages" },
    { label: "Weekends", value: "Full service + urgent routing" },
    { label: "Holidays", value: "Emergency only" },
  ];
  return (
    <div className="mt-4 space-y-2">
      {schedules.map(({ label, value }) => (
        <div
          key={label}
          className="flex items-center justify-between rounded-lg border border-border bg-surface px-3 py-2.5 text-[12px]"
        >
          <span className="text-ink-muted">{label}</span>
          <span className="rounded-md bg-surface-muted px-2 py-0.5 text-[12px] font-semibold text-ink">
            {value}
          </span>
        </div>
      ))}
    </div>
  );
}

function MockUrgencyRoute() {
  return (
    <div className="mt-4 space-y-2">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0, duration: 0.38, ease: EASE }}
        className="rounded-xl border border-red-200 bg-red-50 p-3"
      >
        <p className="text-[12px] font-semibold text-red-700">🚨 Emergency detected</p>
        <p className="mt-0.5 text-[11px] text-red-600">→ On-call line · immediately</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.12, duration: 0.38, ease: EASE }}
        className="rounded-xl border border-accent/30 bg-accent/10 p-3"
      >
        <p className="text-[12px] font-semibold text-ink">📋 Routine inquiry</p>
        <p className="mt-0.5 text-[11px] text-ink-muted">→ Morning callback · captured</p>
      </motion.div>
    </div>
  );
}

function MockOvernightBooking() {
  return (
    <div className="mt-4 space-y-2.5">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: EASE }}
        className="rounded-xl border border-accent/30 bg-accent/10 p-3.5"
      >
        <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
          Booked while you slept
        </p>
        <p className="mt-1 text-[14px] font-bold text-ink">Tomorrow 9:00 AM · Consultation · 45 min</p>
      </motion.div>
      <div className="grid grid-cols-2 gap-1.5">
        {[
          { label: "Calendar event", status: "✓ added" },
          { label: "Confirmation", status: "✓ sent" },
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

function MockOvernightReport() {
  const rows = [
    { icon: "🚨", label: "1 urgent · Escalated to on-call", color: "text-red-600" },
    { icon: "📋", label: "3 messages · Ready for callback", color: "text-ink" },
    { icon: "✅", label: "1 booking · Confirmed for 9 AM", color: "text-green-700" },
  ];
  return (
    <div className="mt-4 overflow-hidden rounded-xl border border-border bg-surface shadow-sm">
      <div className="border-b border-border bg-surface-muted/60 px-3.5 py-2 text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
        Overnight summary · 5 calls
      </div>
      {rows.map(({ icon, label, color }, i) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.38, ease: EASE }}
          className="flex items-center gap-2.5 border-b border-border px-3.5 py-2.5 last:border-0"
        >
          <span className="text-[14px]">{icon}</span>
          <span className={`text-[12px] font-medium ${color}`}>{label}</span>
        </motion.div>
      ))}
    </div>
  );
}

// ─── Page data ────────────────────────────────────────────────────────────────

const testimonials: TestimonialItem[] = [
  {
    quote:
      "HVAC emergencies don't care about business hours. Before Tarsha, I was getting woken up at 2 AM by calls that weren't actually urgent. Now Tarsha screens everything, real emergencies reach me, everything else is ready in my inbox at 7 AM.",
    author: "Jake T.",
    role: "Owner",
    company: "Apex HVAC & Cooling",
    avatarUrl: "https://i.pravatar.cc/150?img=14",
  },
  {
    quote:
      "Patients call after hours anxious about symptoms. Tarsha handles the triage conversation, flags anything truly urgent to our on-call physician, and takes detailed messages for everything else. We wake up informed, not overwhelmed.",
    author: "Dr. Sarah M.",
    role: "Practice Manager",
    company: "Lakeside Medical Group",
    avatarUrl: "https://i.pravatar.cc/150?img=28",
  },
  {
    quote:
      "Property emergencies happen at midnight on Sundays. Tarsha answers every call, distinguishes between a broken heater in January and a general maintenance request, and routes accordingly. Our tenants feel cared for and our team isn't burned out.",
    author: "Rob P.",
    role: "Director of Operations",
    company: "Meridian Property Management",
    avatarUrl: "https://i.pravatar.cc/150?img=40",
  },
];

const steps = [
  {
    title: "Call comes in after hours",
    description:
      "Day or night, weekday or weekend, Tarsha answers every call within 2 seconds with your custom after-hours greeting. No voicemail, no missed opportunities.",
    Illustration: IllusAfterHoursAnswered,
  },
  {
    title: "Smart urgency detection",
    description:
      "Tarsha listens to understand the nature of the call. Genuinely urgent situations, broken pipes, medical concerns, security issues, are escalated immediately. Everything else is handled gracefully.",
    Illustration: IllusUrgencyTriage,
  },
  {
    title: "Morning summary waiting for you",
    description:
      "Every after-hours call is documented. Urgent ones were handled. Routine ones have full context. You start each day with a clean inbox, not a list of missed calls to chase.",
    Illustration: IllusMorningSummary,
  },
];

const benefits: Benefit[] = [
  {
    icon: Moon,
    title: "Custom after-hours mode",
    description:
      "Set a different greeting, routing logic, and escalation rules for evenings, weekends, and holidays, separate from your regular business hours.",
    MockUI: MockAfterHoursMode,
    wide: true,
  },
  {
    icon: Zap,
    title: "Urgency-based routing",
    description:
      "Truly urgent calls still reach the right person. Everything else is captured professionally and ready for the morning. No false alarms, no missed emergencies.",
    MockUI: MockUrgencyRoute,
  },
  {
    icon: CalendarCheck,
    title: "24/7 appointment booking",
    description:
      "Callers can book appointments around the clock. Tarsha locks in the next available slot and sends confirmation, without waking anyone up.",
    MockUI: MockOvernightBooking,
  },
  {
    icon: FileText,
    title: "Full overnight report",
    description:
      "Every after-hours interaction is logged. Wake up to a prioritized summary of what happened, what was handled, and what needs your attention.",
    MockUI: MockOvernightReport,
    wide: true,
  },
];

const industries = [
  "HVAC & contractors",
  "Medical practices",
  "Property management",
  "Legal firms",
  "Plumbers & electricians",
  "IT support",
  "Insurance agencies",
  "Hotels & hospitality",
  "Home services",
  "Dental offices",
  "Real estate",
  "Accountants",
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AfterHoursCallsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-bg pt-[72px]">
        <SolutionHero
          eyebrow="After Hours Calls"
          titleBefore="Business hours end. "
          titleHighlight="Tarsha doesn't."
          subtitle="Every call after 5 PM, on weekends, and through holidays is answered instantly. Urgent calls reach your on-call line. Routine calls are captured. Nothing waits until morning."
          MockUI={MockAfterHoursCall}
        />
        <SolutionTestimonials
          eyebrow="Trusted by businesses like yours"
          testimonials={testimonials}
        />
        <SolutionIntro
          eyebrow="The problem"
          heading="Your competitors don't close when you do"
          paragraphs={[
            "Customers don't limit their needs to business hours. Urgent issues, new inquiries, and booking requests come in at 9 PM on a Tuesday, on a Saturday morning, and through the holidays. If those calls hit voicemail, you're telling customers their time doesn't matter.",
            "Tarsha AI runs 24/7, fully configurable for your after-hours scenarios. Truly urgent calls reach your on-call line. Appointments are booked for the next available slot. Routine inquiries are answered and captured. You decide exactly how every after-hours call is handled, and you wake up to a clean summary.",
          ]}
          Illustration={IllusIntroAfterHours}
        />
        <SolutionHowItWorks
          heading="Answer every after-hours call without lifting a finger"
          steps={steps}
        />
        <SolutionBenefits
          eyebrow="What you get"
          heading="Everything you need for round-the-clock coverage"
          benefits={benefits}
        />
        <SolutionIndustries
          eyebrow="Who uses this"
          heading="Built for any business that can't afford to miss after-hours calls"
          industries={industries}
        />
        <SolutionCTA heading="Never let another after-hours call go unanswered." />
      </main>
      <Footer />
    </>
  );
}
