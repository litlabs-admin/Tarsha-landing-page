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
import { MockDispatchBoard } from "@/components/solutions/mocks/MockDispatchBoard";
import { motion } from "framer-motion";
import { Clock, Route, Wrench, Zap } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

// ─── Step illustrations ───────────────────────────────────────────────────────

function IllusStep1HomeServices() {
  return (
    <div className="space-y-2.5">
      <div className="flex items-center gap-3 rounded-xl border border-border bg-surface-muted/60 p-3">
        <motion.div
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-xl shadow-sm"
        >
          📞
        </motion.div>
        <div className="flex-1">
          <p className="text-[11px] text-ink-muted">Incoming · urgent</p>
          <p className="text-[13px] font-semibold text-ink">Burst pipe · flooding</p>
        </div>
        <span className="shrink-0 rounded-full border border-red-200 bg-red-50 px-2 py-0.5 text-[10px] font-semibold text-red-600">
          Emergency
        </span>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.25, duration: 0.38, ease: EASE }}
        className="flex items-center gap-3 rounded-xl border border-accent/30 bg-accent/10 px-3.5 py-2.5"
      >
        <motion.span
          animate={{ opacity: [1, 0.25, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_0_4px_rgba(34,197,94,0.15)]"
        />
        <span className="text-[12px] font-medium text-ink">Answered · Tarsha AI</span>
        <span className="ml-auto rounded-full border border-green-200 bg-green-50 px-2 py-0.5 text-[10px] font-semibold text-green-700">
          &lt; 2s
        </span>
      </motion.div>
    </div>
  );
}

function IllusStep2HomeServices() {
  return (
    <div className="space-y-2">
      <div className="flex items-start gap-2.5">
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border bg-surface-muted text-[12px]">
          👤
        </div>
        <div className="rounded-xl rounded-tl-sm border border-border bg-surface px-3 py-2">
          <p className="text-[12px] text-ink">"Water is coming through my ceiling right now"</p>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.38, ease: EASE }}
        className="flex items-center gap-2.5 rounded-xl border border-red-200 bg-red-50 px-3.5 py-2.5"
      >
        <span className="text-[15px]">🚨</span>
        <span className="text-[12px] font-semibold text-red-700">Emergency detected · dispatching now</span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.38, duration: 0.38, ease: EASE }}
        className="flex items-center gap-2.5 rounded-xl border border-border bg-surface px-3.5 py-2.5"
      >
        <span className="text-[15px]">📍</span>
        <span className="text-[12px] text-ink">
          Nearest available: <span className="font-semibold">Tom K.</span> · 8 min away
        </span>
      </motion.div>
    </div>
  );
}

function IllusStep3HomeServices() {
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
          New job booked
        </p>
        <p className="mt-1 text-[14px] font-bold text-ink">Thursday May 23</p>
        <p className="mt-0.5 text-[12px] text-ink-muted">HVAC inspection · 9:00 AM · Technician: Mike R.</p>
      </motion.div>
      <div className="grid grid-cols-2 gap-1.5">
        {[
          { label: "Customer notified", status: "✓ sent" },
          { label: "Team informed", status: "✓ sent" },
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

function IllusIntroHomeServices() {
  const calls = [
    { emoji: "🔧", label: "Emergency · burst pipe", outcome: "Voicemail", badge: "Critical missed", badgeClass: "border-red-200 bg-red-50 text-red-600" },
    { emoji: "🔧", label: "New job quote request", outcome: "Called 3 times, no answer", badge: "Lead lost", badgeClass: "border-red-200 bg-red-50 text-red-600" },
    { emoji: "🔧", label: "Existing job follow-up", outcome: "No answer", badge: "Frustrated", badgeClass: "border-amber-200 bg-amber-50 text-amber-600" },
    { emoji: "🔧", label: "Scheduling inquiry", outcome: "Never answered", badge: "Missed", badgeClass: "border-red-200 bg-red-50 text-red-600" },
  ];
  return (
    <div className="space-y-2">
      <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-muted">
        While your team is in the field
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
        <span className="text-[15px]">⚠️</span>
        <p className="text-[12px] text-ink-muted">
          Every unanswered call while your team is in the field costs real money
        </p>
      </motion.div>
    </div>
  );
}

// ─── Benefit mock UIs ─────────────────────────────────────────────────────────

function MockEmergencyDispatch() {
  return (
    <div className="mt-4 space-y-2.5">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: EASE }}
        className="rounded-xl border border-red-200 bg-red-50 p-3.5"
      >
        <p className="text-[11px] font-semibold uppercase tracking-wide text-red-500">
          Emergency detected
        </p>
        <p className="mt-1 text-[14px] font-bold text-ink">Burst pipe · immediate response</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.38, ease: EASE }}
        className="flex items-center gap-2 rounded-xl border border-border bg-surface px-3.5 py-2.5"
      >
        <span className="text-ink-muted">→</span>
        <span className="text-[13px] text-ink-muted">Dispatching:</span>
        <span className="text-[13px] font-semibold text-ink">Tom K. · closest available · ETA 12 min</span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.35, duration: 0.38, ease: EASE }}
        className="flex items-center gap-2 rounded-lg border border-green-200 bg-green-50 px-3 py-2"
      >
        <span className="text-[13px]">✓</span>
        <span className="text-[12px] font-semibold text-green-700">Call transferred</span>
      </motion.div>
    </div>
  );
}

function MockAfterHoursDispatch() {
  return (
    <div className="mt-4 space-y-2.5">
      <div className="flex items-center gap-3 rounded-xl border border-border bg-surface p-3.5">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-surface-muted text-xl">
          🌙
        </div>
        <div>
          <p className="text-[11px] text-ink-muted">11:23 PM · Sunday</p>
          <p className="text-[13px] font-semibold text-ink">Heating emergency</p>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.22, duration: 0.38, ease: EASE }}
        className="flex items-center gap-2 rounded-xl border border-green-200 bg-green-50 px-3.5 py-2.5"
      >
        <span className="text-[13px]">✓</span>
        <span className="text-[12px] font-semibold text-green-700">
          Routed to on-call · Mike R. reached
        </span>
      </motion.div>
    </div>
  );
}

function MockUrgencyTriage() {
  return (
    <div className="mt-4 space-y-2.5">
      <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
        Urgency triage
      </p>
      <div className="grid grid-cols-2 gap-2">
        <motion.div
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.38, ease: EASE }}
          className="rounded-xl border border-red-200 bg-red-50 p-3 text-center"
        >
          <p className="text-[12px] font-semibold text-red-700">Emergency</p>
          <p className="mt-1 text-[11px] text-red-600">→ on-call tech</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.38, ease: EASE }}
          className="rounded-xl border border-border bg-surface p-3 text-center"
        >
          <p className="text-[12px] font-semibold text-ink">Routine</p>
          <p className="mt-1 text-[11px] text-ink-muted">→ schedule queue</p>
        </motion.div>
      </div>
    </div>
  );
}

function MockJobQueue() {
  const jobs = [
    { time: "Thu 9:00 AM", label: "HVAC inspection", tech: "Mike R." },
    { time: "Thu 11:30 AM", label: "Drain clearing", tech: "Greg T." },
    { time: "Fri 8:00 AM", label: "Emergency electrical", tech: "Tom K." },
  ];
  return (
    <div className="mt-4 space-y-2">
      {jobs.map(({ time, label, tech }, i) => (
        <motion.div
          key={time}
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.38, ease: EASE }}
          className="flex items-center gap-3 rounded-lg border border-border bg-surface px-3 py-2.5"
        >
          <div className="flex-1">
            <p className="text-[12px] font-medium text-ink">{label}</p>
            <p className="text-[11px] text-ink-muted">{time}</p>
          </div>
          <span className="shrink-0 rounded-full border border-border bg-surface-muted px-2 py-0.5 text-[10px] font-medium text-ink-muted">
            {tech}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

// ─── Page data ────────────────────────────────────────────────────────────────

const testimonials: TestimonialItem[] = [
  {
    quote:
      "Plumbing emergencies don't wait. I was missing 5–6 calls a week while under a sink or in a crawlspace. Tarsha answers everything, determines urgency, routes to whoever's closest, and I get a summary when I surface. My revenue went up 30% the first year.",
    author: "Greg H.",
    role: "Owner",
    company: "Harbor Plumbing & Drains",
    avatarUrl: "https://i.pravatar.cc/150?img=8",
  },
  {
    quote:
      "I have four HVAC technicians in the field. Before Tarsha, calls were going to the wrong person or to voicemail while the guys were on rooftops. Now every call is answered, triaged by urgency, and dispatched to the right technician automatically. Dispatch chaos is gone.",
    author: "Nina T.",
    role: "Operations Manager",
    company: "CoolBreeze HVAC",
    avatarUrl: "https://i.pravatar.cc/150?img=42",
  },
  {
    quote:
      "Electricians in the field, phone ringing off the hook. Tarsha handles it all — new jobs, existing job questions, emergency calls. The emergency calls reach whoever is available. The routine bookings go on the schedule. I don't miss anything anymore.",
    author: "Derek S.",
    role: "Owner",
    company: "Spark Electrical Services",
    avatarUrl: "https://i.pravatar.cc/150?img=6",
  },
];

const steps = [
  {
    title: "Every call answered in the field",
    description:
      "Whether your technicians are on a roof, under a sink, or in a basement — every call is answered within 2 seconds by Tarsha AI with your business name and professional tone.",
    Illustration: IllusStep1HomeServices,
  },
  {
    title: "Urgency detected and dispatched",
    description:
      "Burst pipes, electrical hazards, no heat in winter — Tarsha identifies genuine emergencies and routes them to whoever is available immediately. Routine calls are handled differently.",
    Illustration: IllusStep2HomeServices,
  },
  {
    title: "New jobs booked automatically",
    description:
      "Quote requests and new job inquiries are captured with full details and booked into your schedule — customer notified, team informed, nothing missed.",
    Illustration: IllusStep3HomeServices,
  },
];

const benefits: Benefit[] = [
  {
    icon: Zap,
    title: "Emergency dispatch in seconds",
    description:
      "True emergencies — burst pipes, no heat, electrical hazards — reach your available technician in seconds. Not the next morning.",
    MockUI: MockEmergencyDispatch,
    wide: true,
  },
  {
    icon: Clock,
    title: "After-hours emergency coverage",
    description:
      "Home emergencies happen at 11 PM on Sundays. Tarsha answers and dispatches around the clock — urgent calls reach your on-call tech immediately.",
    MockUI: MockAfterHoursDispatch,
  },
  {
    icon: Route,
    title: "Smart technician routing",
    description:
      "Tarsha routes to the closest available technician based on job type, location, and availability — no dispatcher needed.",
    MockUI: MockUrgencyTriage,
  },
  {
    icon: Wrench,
    title: "New job scheduling",
    description:
      "Quote requests and new job bookings are captured in full and added to your schedule automatically — customer confirmation sent instantly.",
    MockUI: MockJobQueue,
    wide: true,
  },
];

const industries = [
  "Plumbers",
  "HVAC companies",
  "Electricians",
  "Roofers",
  "Landscapers",
  "Pest control",
  "Pool services",
  "Cleaning services",
  "Garage door repair",
  "Appliance repair",
  "Painting & drywall",
  "General contractors",
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomeServicesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-bg pt-[72px]">
        <SolutionHero
          eyebrow="Home Services"
          titleBefore="Answer every emergency call "
          titleHighlight="even when you're on the job"
          subtitle="Tarsha AI answers calls from job sites, dispatches to the right technician, and captures every new booking request — so nothing falls through the cracks while your team is in the field."
          MockUI={MockDispatchBoard}
        />
        <SolutionTestimonials
          eyebrow="Trusted by home service businesses"
          testimonials={testimonials}
        />
        <SolutionIntro
          eyebrow="The problem"
          heading="Your best technicians are always the least available to answer the phone"
          paragraphs={[
            "Home service businesses live on the phone. New jobs, emergency calls, existing customer questions — all coming in while your team is on ladders, under sinks, and in attics. The person most qualified to help is the last person who can pick up.",
            "Tarsha AI answers every call within 2 seconds, triages urgency, dispatches to the right technician, and books new jobs directly into your schedule. Emergencies reach the field immediately. Routine calls are captured cleanly. You come off the job to a clear inbox, not a list of missed opportunities.",
          ]}
          Illustration={IllusIntroHomeServices}
        />
        <SolutionHowItWorks
          heading="Handle every call while your team stays in the field"
          steps={steps}
        />
        <SolutionBenefits
          eyebrow="What you get"
          heading="Every call covered, every job captured"
          benefits={benefits}
        />
        <SolutionIndustries
          eyebrow="Who uses this"
          heading="Built for every home service trade"
          industries={industries}
        />
        <SolutionCTA heading="Stay in the field. Let Tarsha keep the calls covered." />
      </main>
      <Footer />
    </>
  );
}
