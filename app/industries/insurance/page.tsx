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
import { MockInsuranceClaim } from "@/components/solutions/mocks/MockInsuranceClaim";
import { motion } from "framer-motion";
import { Clock, FileText, Route, ShieldCheck } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

// ─── Step illustrations ───────────────────────────────────────────────────────

function IllusStep1Insurance() {
  return (
    <div className="rounded-xl border border-border bg-surface-muted/60 p-3.5">
      <div className="flex items-center gap-3">
        <motion.div
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-xl shadow-sm"
        >
          📞
        </motion.div>
        <div className="flex-1">
          <p className="text-[11px] text-ink-muted">Incoming · Robert Chen</p>
          <p className="text-[13px] font-semibold text-ink">Auto accident · first notice</p>
        </div>
        <span className="shrink-0 rounded-full border border-green-200 bg-green-50 px-2 py-0.5 text-[10px] font-semibold text-green-700">
          Answered in &lt;2s
        </span>
      </div>
    </div>
  );
}

function IllusStep2Insurance() {
  const fields = [
    { label: "Policy number", value: "Collecting...", status: "✓ confirmed" },
    { label: "Incident date/time", value: "", status: "✓ captured" },
    { label: "Location", value: "", status: "✓ captured" },
    { label: "Injuries", value: "None reported", status: "✓" },
  ];
  return (
    <div className="space-y-2">
      <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-sm">
        <div className="border-b border-border bg-surface-muted/60 px-3.5 py-2 text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
          Claim details
        </div>
        {fields.map(({ label, status }) => (
          <div key={label} className="flex gap-3 border-b border-border px-3.5 py-2 last:border-0">
            <span className="w-28 shrink-0 text-[10px] text-ink-muted">{label}</span>
            <span className="flex-1 text-[11px] font-medium text-green-600">{status}</span>
          </div>
        ))}
      </div>
      <div className="rounded-xl border border-accent/30 bg-accent/10 px-3.5 py-2.5 text-[12px] font-semibold text-ink">
        Claim initiated · details complete
      </div>
    </div>
  );
}

function IllusStep3Insurance() {
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
          Routed to
        </p>
        <p className="mt-1 text-[14px] font-bold text-ink">Claims team</p>
      </motion.div>
      <div className="grid grid-cols-2 gap-1.5">
        {[
          { label: "Claim file", status: "✓ created" },
          { label: "Agent notified", status: "✓ notified" },
        ].map(({ label, status }) => (
          <div key={label} className="rounded-lg border border-border bg-surface px-2.5 py-2 text-center">
            <p className="text-[10px] text-ink-muted">{label}</p>
            <p className="mt-0.5 text-[11px] font-semibold text-green-600">{status}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2.5 rounded-lg border border-border bg-surface px-3 py-2">
        <motion.span
          animate={{ opacity: [1, 0.25, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="h-2 w-2 shrink-0 rounded-full bg-green-500 shadow-[0_0_0_3px_rgba(34,197,94,0.2)]"
        />
        <span className="text-[11px] text-ink-muted">Agent on call · summary ready</span>
      </div>
    </div>
  );
}

// ─── Intro illustration ───────────────────────────────────────────────────────

function IllusIntroInsurance() {
  const rows = [
    { icon: "🚗", title: "Auto claim · accident just happened", sub: "Reached voicemail", badge: "Trust damaged" },
    { icon: "🏠", title: "Home claim · water damage", sub: "No answer", badge: "Client at risk" },
    { icon: "💼", title: "New business quote request", sub: "Never called back", badge: "Lead lost" },
  ];
  return (
    <div className="space-y-2">
      {rows.map(({ icon, title, sub, badge }, i) => (
        <motion.div
          key={title}
          initial={{ opacity: 0, x: 14 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.4, ease: EASE }}
          className="flex items-center gap-3 rounded-xl border border-border bg-surface p-3"
        >
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-50 text-[14px]">
            {icon}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[12px] font-medium text-ink truncate">{title}</p>
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
        <p className="text-[12px] text-ink-muted">In insurance, reliability IS your product</p>
      </motion.div>
    </div>
  );
}

// ─── Benefit mock UIs ─────────────────────────────────────────────────────────

function MockClaimCapture() {
  const fields = [
    { label: "Policy holder", value: "Robert Chen" },
    { label: "Type", value: "Auto · collision" },
    { label: "Date", value: "May 20 · 3:47 PM" },
  ];
  return (
    <div className="mt-4 space-y-2">
      <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-sm">
        <div className="border-b border-border bg-surface-muted/60 px-3.5 py-2 text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
          Claim details captured
        </div>
        {fields.map(({ label, value }) => (
          <div key={label} className="flex gap-3 border-b border-border px-3.5 py-2 last:border-0">
            <span className="w-24 shrink-0 text-[10px] text-ink-muted">{label}</span>
            <span className="text-[11px] text-ink">{value}</span>
          </div>
        ))}
        <div className="flex gap-3 px-3.5 py-2">
          <span className="w-24 shrink-0 text-[10px] text-ink-muted">Status</span>
          <span className="text-[11px] font-semibold text-green-600">✓ Claim initiated</span>
        </div>
      </div>
      <div className="flex items-center gap-2.5 rounded-xl border border-accent/30 bg-accent/10 px-3.5 py-2.5">
        <motion.span
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-1.5 w-1.5 shrink-0 rounded-full bg-green-500"
        />
        <span className="text-[12px] text-ink-muted">Sent to claims team</span>
      </div>
    </div>
  );
}

function MockUrgentClaim() {
  return (
    <div className="mt-4 space-y-2.5">
      <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3">
        <p className="text-[12px] font-semibold text-red-700">Claim flagged as urgent</p>
        <div className="mt-1 flex items-center gap-2">
          <span className="text-[11px] text-red-600">→ On-call adjuster · immediately</span>
        </div>
      </div>
      <div className="flex items-center justify-between rounded-xl border border-border bg-surface px-4 py-3">
        <span className="text-[13px] font-medium text-ink">Adjuster reached</span>
        <span className="rounded-full border border-green-200 bg-green-50 px-2.5 py-0.5 text-[11px] font-semibold text-green-700">
          in 0.6s
        </span>
      </div>
    </div>
  );
}

function MockLineRouting() {
  const routes = [
    { type: "Auto claim", dest: "Claims dept" },
    { type: "Quote request", dest: "Sales team" },
    { type: "Policy question", dest: "Service team" },
  ];
  return (
    <div className="mt-4 space-y-2">
      {routes.map(({ type, dest }, i) => (
        <motion.div
          key={type}
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.35, ease: EASE }}
          className="flex items-center gap-2.5 rounded-lg border border-border bg-surface px-3 py-2.5"
        >
          <span className="flex-1 text-[12px] text-ink-muted">{type}</span>
          <span className="text-[11px] text-ink-muted">→</span>
          <span className="rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 text-[11px] font-semibold text-ink">
            {dest}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

function MockClaimLog() {
  const entries = [
    { time: "9:12 AM", type: "New quote", status: "Callback set" },
    { time: "2:34 PM", type: "Auto claim", status: "Escalated" },
    { time: "6:18 PM", type: "Policy inquiry", status: "Answered" },
  ];
  return (
    <div className="mt-4 overflow-hidden rounded-xl border border-border bg-surface shadow-sm">
      <div className="border-b border-border bg-surface-muted/60 px-3.5 py-2 text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
        Today&apos;s call log
      </div>
      {entries.map(({ time, type, status }, i) => (
        <motion.div
          key={time}
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.35, ease: EASE }}
          className="flex items-center gap-3 border-b border-border px-3.5 py-2.5 last:border-0"
        >
          <span className="w-14 shrink-0 tabular-nums text-[10px] text-ink-muted">{time}</span>
          <span className="flex-1 text-[11px] text-ink">{type}</span>
          <span className="text-[11px] font-medium text-ink-muted">{status}</span>
        </motion.div>
      ))}
    </div>
  );
}

// ─── Page data ────────────────────────────────────────────────────────────────

const testimonials: TestimonialItem[] = [
  {
    quote:
      "A client had a car accident at 11 PM on a Sunday. Tarsha answered, captured all the details, and immediately routed to our emergency line. The client told me it was the most reassuring experience they'd ever had with an insurance company. That's the kind of service that earns referrals.",
    author: "Patricia K.",
    role: "Agency Owner",
    company: "Keystone Insurance Partners",
    avatarUrl: "https://i.pravatar.cc/150?img=41",
  },
  {
    quote:
      "We were losing quote requests constantly — callers going to voicemail during busy periods and never calling back. Tarsha answers every single one, captures the prospect's details and coverage needs, and queues them for callbacks. Our conversion rate went up 28% in 60 days.",
    author: "Brian M.",
    role: "Principal Broker",
    company: "Meridian Insurance Group",
    avatarUrl: "https://i.pravatar.cc/150?img=18",
  },
  {
    quote:
      "Commercial and personal lines need to go to completely different teams. Calls were being mixed up constantly. Tarsha identifies the caller's needs in the first 30 seconds and routes them perfectly. Zero misdirected calls since day one.",
    author: "Sandra L.",
    role: "Operations Manager",
    company: "Pacific Shield Insurance",
    avatarUrl: "https://i.pravatar.cc/150?img=37",
  },
];

const steps = [
  {
    title: "Claim calls answered instantly",
    description:
      "First-notice calls are answered immediately, 24 hours a day. No voicemail, no hold music — a calm, professional voice that reassures your client from the first second.",
    Illustration: IllusStep1Insurance,
  },
  {
    title: "Every detail accurately captured",
    description:
      "Policy number, incident details, contact information, urgency level — Tarsha collects everything your claims team needs before they pick up the phone.",
    Illustration: IllusStep2Insurance,
  },
  {
    title: "Routed to the right team",
    description:
      "Auto, home, commercial, life — Tarsha routes each caller to the right specialist instantly, with a complete summary so your agent is already prepared.",
    Illustration: IllusStep3Insurance,
  },
];

const benefits: Benefit[] = [
  {
    icon: ShieldCheck,
    title: "Accurate first-notice documentation",
    description:
      "Every claim detail captured precisely the first time — no missing information, no follow-up calls just to collect basics.",
    MockUI: MockClaimCapture,
    wide: true,
  },
  {
    icon: Clock,
    title: "24/7 emergency response",
    description:
      "Accidents don't happen during business hours. Tarsha answers urgent claim calls around the clock and escalates immediately.",
    MockUI: MockUrgentClaim,
  },
  {
    icon: Route,
    title: "Smart product-line routing",
    description:
      "Auto, home, commercial, life — every caller reaches the right specialist instantly, without being transferred twice.",
    MockUI: MockLineRouting,
  },
  {
    icon: FileText,
    title: "Every interaction logged",
    description:
      "Clean records of every call, claim, and quote request — organized in your inbox and ready for your team.",
    MockUI: MockClaimLog,
    wide: true,
  },
];

const industries = [
  "P&C agencies",
  "Life & health brokers",
  "Commercial insurance",
  "Specialty lines",
  "Captive agencies",
  "Independent brokers",
  "MGA offices",
  "Claims management firms",
  "Benefits brokers",
  "Risk consultants",
  "Surety agencies",
  "Reinsurance",
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function InsurancePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-bg pt-[72px]">
        <SolutionHero
          eyebrow="Insurance Agencies"
          titleBefore="Every claim call "
          titleHighlight="answered immediately"
          subtitle="Tarsha AI handles first-notice calls, routes to the right agent, and captures every quote request — with the professionalism and accuracy that insurance clients expect, 24/7."
          MockUI={MockInsuranceClaim}
        />
        <SolutionTestimonials
          eyebrow="Trusted by insurance professionals"
          testimonials={testimonials}
        />
        <SolutionIntro
          eyebrow="The problem"
          heading="Insurance clients call when something goes wrong — they can't wait"
          paragraphs={[
            "A burst pipe at midnight. A fender bender during rush hour. A business break-in on a Saturday. Insurance clients call in moments of stress — and if they reach voicemail, you haven't just missed a call. You've damaged trust at the worst possible moment.",
            "Tarsha AI answers every call instantly, with calm professionalism. First-notice calls are documented and escalated appropriately. Quote requests are captured in full. Existing clients are routed to the right agent. Your agency stays responsive around the clock — without adding headcount.",
          ]}
          Illustration={IllusIntroInsurance}
        />
        <SolutionHowItWorks
          heading="Every call handled with precision and care"
          steps={steps}
        />
        <SolutionBenefits
          eyebrow="What you get"
          heading="The responsiveness your clients expect, without the overhead"
          benefits={benefits}
        />
        <SolutionIndustries
          eyebrow="Who uses this"
          heading="Built for every type of insurance agency"
          industries={industries}
        />
        <SolutionCTA heading="Be the agency that's always there when clients need you most." />
      </main>
      <Footer />
    </>
  );
}
