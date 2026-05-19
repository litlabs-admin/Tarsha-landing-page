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
import { MockPhoneCall } from "@/components/solutions/mocks/MockPhoneCall";
import { motion } from "framer-motion";
import { Bell, MessageSquare, ShieldCheck, UserCheck } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

// ─── Step illustrations ───────────────────────────────────────────────────────

function IllusIncomingCall() {
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
          <p className="text-[11px] text-ink-muted">Incoming call · any time</p>
          <p className="text-[13px] font-semibold text-ink">Michael Reed</p>
        </div>
        <motion.span
          animate={{ opacity: [1, 0.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="h-2.5 w-2.5 rounded-full bg-green-500 shadow-[0_0_0_4px_rgba(34,197,94,0.15)]"
        />
      </div>
    </div>
  );
}

function IllusActiveCall() {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2.5 rounded-xl border border-accent/30 bg-accent/10 px-3.5 py-2.5">
        <motion.span
          animate={{ opacity: [1, 0.25, 1] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_0_3px_rgba(34,197,94,0.2)]"
        />
        <span className="text-[12px] font-medium text-ink">Call active · Tarsha AI</span>
        <span className="ml-auto tabular-nums text-[11px] text-ink-muted">0:18</span>
      </div>
      <div className="rounded-xl border border-border bg-surface p-3 text-[12px] leading-relaxed text-ink">
        "Thank you for calling{" "}
        <span className="font-semibold">[Your Business]</span>. This is Tarsha — how can I help
        you today?"
      </div>
    </div>
  );
}

function IllusSummaryInbox() {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-sm">
      <div className="border-b border-border bg-surface-muted/60 px-3.5 py-2 text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
        New message
      </div>
      {[
        { label: "Name", value: "Michael Reed" },
        { label: "Phone", value: "(619) 555-0182" },
        { label: "Reason", value: "Landscaping quote, backyard ~3k sq ft" },
      ].map(({ label, value }) => (
        <div key={label} className="flex gap-3 border-b border-border px-3.5 py-2 last:border-0">
          <span className="w-10 shrink-0 text-[10px] text-ink-muted">{label}</span>
          <span className="text-[11px] text-ink">{value}</span>
        </div>
      ))}
      <div className="flex items-center gap-2 bg-surface-muted/40 px-3.5 py-2">
        <motion.span
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="h-1.5 w-1.5 rounded-full bg-green-500"
        />
        <span className="text-[11px] text-ink-muted">Sent to your inbox · just now</span>
      </div>
    </div>
  );
}

// ─── Intro illustration ───────────────────────────────────────────────────────

function IllusIntroMissedCalls() {
  const calls = [
    { name: "David M.", time: "8 min ago" },
    { name: "Karen F.", time: "23 min ago" },
    { name: "Unknown caller", time: "1 hr ago" },
  ];
  return (
    <div className="space-y-2">
      <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-muted">
        Recent missed calls
      </p>
      {calls.map(({ name, time }, i) => (
        <motion.div
          key={name}
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
            <p className="text-[12px] font-medium text-ink truncate">{name}</p>
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
        transition={{ delay: 0.38, duration: 0.4, ease: EASE }}
        className="flex items-center gap-2.5 rounded-xl border border-border bg-surface-muted/60 px-3.5 py-2.5"
      >
        <span className="text-[15px]">⚠️</span>
        <p className="text-[12px] text-ink-muted">These callers may have found a competitor</p>
      </motion.div>
    </div>
  );
}

// ─── Benefit mock UIs ─────────────────────────────────────────────────────────

function MockGreeting() {
  return (
    <div className="mt-4 rounded-xl border border-border bg-surface-muted/60 p-4">
      <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
        Active greeting
      </p>
      <p className="mt-2 text-[14px] leading-relaxed text-ink">
        "Thank you for calling{" "}
        <span className="font-semibold">[Your Business]</span>. This is Tarsha — how can I help
        you today?"
      </p>
      <div className="mt-3 flex items-center gap-2">
        <motion.span
          animate={{ opacity: [1, 0.25, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-1.5 w-1.5 rounded-full bg-green-500"
        />
        <span className="text-[12px] text-ink-muted">Live · English &amp; Spanish</span>
      </div>
    </div>
  );
}

function MockMessageCapture() {
  return (
    <div className="mt-4 overflow-hidden rounded-xl border border-border bg-surface shadow-sm">
      <div className="border-b border-border bg-surface-muted/60 px-4 py-2 text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
        New message
      </div>
      {[
        { label: "Caller", value: "Sarah Mitchell" },
        { label: "Phone", value: "(619) 555-0142" },
        { label: "Reason", value: "Calling about a landscaping quote — backyard, ~3,000 sq ft." },
      ].map(({ label, value }) => (
        <div key={label} className="flex gap-3 border-b border-border px-4 py-2.5 last:border-0">
          <span className="w-12 shrink-0 text-[11px] text-ink-muted">{label}</span>
          <span className="text-[12px] text-ink">{value}</span>
        </div>
      ))}
    </div>
  );
}

function MockLeadQual() {
  const points = ["Budget confirmed ✓", "Timeline: next 2 weeks ✓", "Decision maker ✓"];
  return (
    <div className="mt-4 space-y-2">
      {points.map((point, i) => (
        <motion.div
          key={point}
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.35, ease: EASE }}
          className="flex items-center gap-2.5 rounded-lg border border-border bg-surface px-3 py-2.5 text-[13px] text-ink"
        >
          {point}
        </motion.div>
      ))}
      <div className="rounded-lg border border-accent/30 bg-accent/10 px-3 py-2 text-[12px] font-semibold text-ink">
        🔥 Hot lead — flagged for priority callback
      </div>
    </div>
  );
}

function MockSpamBlock() {
  return (
    <div className="mt-4 space-y-2.5">
      <div className="flex items-center justify-between rounded-xl border border-border bg-surface px-4 py-3">
        <div>
          <p className="text-[13px] font-medium text-ink">Spam calls blocked</p>
          <p className="text-[11px] text-ink-muted">This month</p>
        </div>
        <motion.span
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
          className="font-display text-[2.25rem] font-bold text-ink"
        >
          47
        </motion.span>
      </div>
      <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-2.5 text-[12px] text-red-700">
        🚫 "Warranty Services" — blocked automatically
      </div>
    </div>
  );
}

// ─── Page data ────────────────────────────────────────────────────────────────

const testimonials: TestimonialItem[] = [
  {
    quote:
      "Before Tarsha, I was missing 6–8 calls every week while on job sites. Each one was potentially $400–800 in business. Now I come home to a clean list of leads every evening. It paid for itself in week two.",
    author: "Marcus T.",
    role: "Owner",
    company: "Premier Plumbing",
    avatarUrl: "https://i.pravatar.cc/150?img=15",
  },
  {
    quote:
      "Our front desk was drowning in calls. Tarsha answers, takes complete messages, and now our staff actually have time to focus on patients in the office. It's genuinely transformed how our practice runs day to day.",
    author: "Dr. Priya S.",
    role: "Practice Manager",
    company: "Lakewood Family Medicine",
    avatarUrl: "https://i.pravatar.cc/150?img=44",
  },
  {
    quote:
      "I was losing clients to competitors simply because my phone went to voicemail. Tarsha is the first thing anyone reaches now — professional, on-brand, and it never misses a call. My close rate went up almost immediately.",
    author: "Chris R.",
    role: "Independent Broker",
    company: "All-State Insurance",
    avatarUrl: "https://i.pravatar.cc/150?img=11",
  },
];

const steps = [
  {
    title: "A call comes in",
    description:
      "Day, night, weekend, or holiday — every call is answered within 2 seconds. No voicemail, no missed opportunities, ever.",
    Illustration: IllusIncomingCall,
  },
  {
    title: "Tarsha AI handles it professionally",
    description:
      "Your caller hears a warm greeting in your business name. Tarsha captures their name, phone number, and the reason for calling.",
    Illustration: IllusActiveCall,
  },
  {
    title: "You get a clean summary instantly",
    description:
      "The moment the call ends, a full summary lands in your inbox. Act on the leads that matter — nothing falls through the cracks.",
    Illustration: IllusSummaryInbox,
  },
];

const benefits: Benefit[] = [
  {
    icon: Bell,
    title: "Professional greeting",
    description:
      "Every caller hears your business name. Fully customizable — update the greeting in seconds to match your tone and brand.",
    MockUI: MockGreeting,
    wide: true,
  },
  {
    icon: MessageSquare,
    title: "Message capture",
    description:
      "Name, number, reason for calling — clean and organized in your inbox the moment the call ends.",
    MockUI: MockMessageCapture,
  },
  {
    icon: UserCheck,
    title: "Lead qualification",
    description:
      "Tarsha asks the right questions so you know exactly which callbacks to prioritize.",
    MockUI: MockLeadQual,
  },
  {
    icon: ShieldCheck,
    title: "Spam blocking",
    description:
      "Robo-calls, warranty scams, and solicitors are stopped before they ever reach you.",
    MockUI: MockSpamBlock,
    wide: true,
  },
];

const industries = [
  "Law firms",
  "Real estate agencies",
  "Plumbers & contractors",
  "Insurance brokers",
  "Medical practices",
  "HVAC companies",
  "Salons & spas",
  "Accountants",
  "Home services",
  "Veterinary clinics",
  "Dental offices",
  "Property management",
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AnsweringServicePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-bg pt-[72px]">
        <SolutionHero
          eyebrow="Answering Service"
          titleBefore="The business phone line that "
          titleHighlight="never sleeps"
          subtitle="Tarsha AI picks up every call, captures the details, and delivers a clean summary to your inbox — in seconds, 24/7, no staff required."
          MockUI={MockPhoneCall}
        />
        <SolutionTestimonials
          eyebrow="Trusted by businesses like yours"
          testimonials={testimonials}
        />
        <SolutionIntro
          eyebrow="The problem"
          heading="Your phone line should never be a liability"
          paragraphs={[
            "Every missed call is a missed opportunity. For most small businesses, phone calls are how new clients make first contact — and if that call goes to voicemail, there's a good chance they're calling your competitor next.",
            "Tarsha AI answers every single call within 2 seconds, 24 hours a day, 365 days a year. It greets callers in your business name, captures every detail, and sends you a clean summary the moment the call ends. No hold music. No voicemail. No missed leads.",
          ]}
          Illustration={IllusIntroMissedCalls}
        />
        <SolutionHowItWorks
          heading="Answer every call without picking up the phone"
          steps={steps}
        />
        <SolutionBenefits
          eyebrow="What you get"
          heading="Everything a receptionist does, without the overhead"
          benefits={benefits}
        />
        <SolutionIndustries
          eyebrow="Who uses this"
          heading="Built for any business that relies on the phone"
          industries={industries}
        />
        <SolutionCTA heading="Stop missing calls. Start capturing every lead." />
      </main>
      <Footer />
    </>
  );
}
