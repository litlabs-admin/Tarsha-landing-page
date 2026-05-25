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
import { MockOverflowDashboard } from "@/components/solutions/mocks/MockOverflowDashboard";
import { motion } from "framer-motion";
import { Clock, Layers, PhoneForwarded, Zap } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

// ─── Step illustrations ───────────────────────────────────────────────────────

function IllusStep1Overflow() {
  const lines = [
    { label: "Line 1", status: "busy" },
    { label: "Line 2", status: "busy" },
    { label: "Line 3", status: "busy" },
  ];
  return (
    <div className="space-y-2">
      {lines.map(({ label, status }, i) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.35, ease: EASE }}
          className="flex items-center justify-between rounded-lg border border-red-200 bg-red-50 px-3 py-2.5"
        >
          <span className="text-[12px] font-medium text-ink">{label}</span>
          <span className="rounded-full bg-red-100 border border-red-200 px-2 py-0.5 text-[10px] font-semibold text-red-600">
            {status}
          </span>
        </motion.div>
      ))}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.35, duration: 0.4, ease: EASE }}
        className="flex items-center justify-between rounded-lg border border-green-200 bg-green-50 px-3 py-2.5"
      >
        <span className="text-[12px] font-medium text-ink">Tarsha AI</span>
        <div className="flex items-center gap-1.5">
          <motion.span
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="h-1.5 w-1.5 rounded-full bg-green-500"
          />
          <span className="text-[10px] font-semibold text-green-700">Auto overflow · ready</span>
        </div>
      </motion.div>
    </div>
  );
}

function IllusStep2Overflow() {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2.5 rounded-xl border border-accent/30 bg-accent/10 px-3.5 py-2.5">
        <motion.span
          animate={{ opacity: [1, 0.25, 1] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_0_3px_rgba(34,197,94,0.2)]"
        />
        <span className="text-[12px] font-medium text-ink">Call active · overflow mode</span>
        <span className="ml-auto tabular-nums text-[11px] text-ink-muted">0:22</span>
      </div>
      <div className="rounded-xl border border-border bg-surface p-3 text-[12px] leading-relaxed text-ink">
        "Thank you for calling{" "}
        <span className="font-semibold">[Your Business]</span>. This is Tarsha, how can I help
        you today?"
      </div>
    </div>
  );
}

function IllusStep3Overflow() {
  const calls = [
    { name: "Sarah M.", detail: "Invoice question", status: "captured" },
    { name: "Tom K.", detail: "New inquiry", status: "routed" },
    { name: "Unknown", detail: "Left message", status: "delivered" },
  ];
  return (
    <div className="space-y-2">
      <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-muted">
        Overflow calls today
      </p>
      {calls.map(({ name, detail, status }, i) => (
        <motion.div
          key={name}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.38, ease: EASE }}
          className="flex items-center gap-3 rounded-xl border border-border bg-surface p-3"
        >
          <div className="flex-1 min-w-0">
            <p className="text-[12px] font-medium text-ink truncate">{name}</p>
            <p className="text-[11px] text-ink-muted">{detail}</p>
          </div>
          <span className="shrink-0 rounded-full bg-green-50 border border-green-200 px-2 py-0.5 text-[10px] font-semibold text-green-700">
            {status}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

// ─── Intro illustration ───────────────────────────────────────────────────────

function IllusIntroOverflow() {
  return (
    <div className="space-y-2">
      <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-muted">
        Peak hours · what happens without overflow coverage
      </p>
      <motion.div
        initial={{ opacity: 0, x: 14 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.4, ease: EASE }}
        className="rounded-xl border border-red-200 bg-red-50 p-3"
      >
        <div className="flex gap-2 flex-wrap">
          {["Line 1 busy", "Line 2 busy", "Line 3 busy"].map((label) => (
            <span
              key={label}
              className="rounded-full border border-red-200 bg-red-100 px-2 py-0.5 text-[10px] font-semibold text-red-600"
            >
              {label}
            </span>
          ))}
        </div>
      </motion.div>
      {[
        { caller: "Caller 1", detail: "on hold 6 min → hung up" },
        { caller: "Caller 2", detail: "busy signal → called competitor" },
      ].map(({ caller, detail }, i) => (
        <motion.div
          key={caller}
          initial={{ opacity: 0, x: 14 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 + i * 0.1, duration: 0.4, ease: EASE }}
          className="flex items-center gap-3 rounded-xl border border-border bg-surface p-3"
        >
          <div className="flex-1 min-w-0">
            <p className="text-[12px] font-medium text-ink">{caller}</p>
            <p className="text-[11px] text-ink-muted">{detail}</p>
          </div>
          <span className="shrink-0 rounded-full border border-red-200 bg-red-50 px-2 py-0.5 text-[10px] font-bold text-red-600">
            Lost
          </span>
        </motion.div>
      ))}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.45, duration: 0.4, ease: EASE }}
        className="flex items-center gap-2.5 rounded-xl border border-border bg-surface-muted/60 px-3.5 py-2.5"
      >
        <span className="text-[15px]">⚠️</span>
        <p className="text-[12px] text-ink-muted">Peak hours shouldn&apos;t mean lost customers</p>
      </motion.div>
    </div>
  );
}

// ─── Benefit mock UIs ─────────────────────────────────────────────────────────

function MockOverflowTrigger() {
  return (
    <div className="mt-4 space-y-2.5">
      <div className="flex items-center justify-between rounded-xl border border-red-200 bg-red-50 px-4 py-3">
        <div>
          <p className="text-[13px] font-medium text-ink">Staff lines: 3/3 in use</p>
          <p className="text-[11px] text-ink-muted">All channels occupied</p>
        </div>
        <motion.span
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.4, repeat: Infinity }}
          className="h-2.5 w-2.5 rounded-full bg-red-500 shadow-[0_0_0_4px_rgba(239,68,68,0.18)]"
        />
      </div>
      <div className="flex items-center gap-3 rounded-xl border border-green-200 bg-green-50 px-4 py-3">
        <div className="flex-1">
          <p className="text-[13px] font-medium text-ink">→ Tarsha overflow activated</p>
          <p className="text-[11px] text-ink-muted">Caller waited: 0 seconds</p>
        </div>
        <motion.span
          animate={{ scale: [1, 1.15, 1], opacity: [1, 0.6, 1] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="rounded-full bg-green-100 border border-green-300 px-2.5 py-0.5 text-[10px] font-bold text-green-700"
        >
          LIVE
        </motion.span>
      </div>
    </div>
  );
}

function MockUnlimitedCapacity() {
  return (
    <div className="mt-4 space-y-2.5">
      <div className="rounded-xl border border-border bg-surface px-4 py-4 text-center">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
          Tarsha AI · simultaneous calls
        </p>
        <motion.p
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
          className="font-display text-[3rem] font-bold text-ink leading-none mt-2"
        >
          ∞
        </motion.p>
      </div>
      <div className="rounded-xl border border-border bg-surface-muted/60 px-4 py-2.5 text-center text-[12px] font-medium text-ink-muted">
        No busy signals · no hold queues
      </div>
    </div>
  );
}

function MockOverflowSchedule() {
  const rows = [
    { day: "Mon–Fri", window: "12 PM–2 PM, 5 PM–6 PM", active: true },
    { day: "Weekends", window: "Always Tarsha", active: true },
  ];
  return (
    <div className="mt-4 space-y-2">
      {rows.map(({ day, window, active }) => (
        <div
          key={day}
          className="flex items-center justify-between rounded-lg border border-border bg-surface px-3 py-2.5"
        >
          <div>
            <p className="text-[12px] font-medium text-ink">{day}</p>
            <p className="text-[11px] text-ink-muted">{window}</p>
          </div>
          <span className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold ${
            active ? "border-green-200 bg-green-50 text-green-700" : "border-border bg-surface-muted text-ink-muted"
          }`}>
            {active ? "auto overflow on" : "off"}
          </span>
        </div>
      ))}
    </div>
  );
}

function MockOverflowSummary() {
  return (
    <div className="mt-4 space-y-2.5">
      <div className="rounded-xl border border-border bg-surface p-4">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
          Today&apos;s overflow summary
        </p>
        <div className="mt-3 grid grid-cols-2 gap-2">
          {[
            { label: "Overflow calls", value: "23" },
            { label: "Handled by Tarsha", value: "100%" },
            { label: "Callbacks required", value: "4" },
            { label: "Avg. wait time", value: "0 sec" },
          ].map(({ label, value }) => (
            <div key={label} className="rounded-lg border border-border bg-surface-muted/60 p-2.5 text-center">
              <p className="font-display text-[1.25rem] font-bold text-ink">{value}</p>
              <p className="mt-0.5 text-[10px] text-ink-muted">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Page data ────────────────────────────────────────────────────────────────

const testimonials: TestimonialItem[] = [
  {
    quote:
      "Friday afternoons used to be chaos. Every line busy, calls going to voicemail, angry callbacks Monday morning. Tarsha catches every overflow call instantly, handles it professionally, and I come in Monday to a clean list, not a damage control situation.",
    author: "Angela T.",
    role: "Office Manager",
    company: "Riverside Medical Group",
    avatarUrl: "https://i.pravatar.cc/150?img=46",
  },
  {
    quote:
      "We have a 5-person reception team but during peak hours they're all occupied. Tarsha acts as an unlimited overflow capacity, the sixth, seventh, tenth receptionist if needed. No caller ever gets a busy signal from us anymore.",
    author: "Robert H.",
    role: "CEO",
    company: "Hamilton Property Management",
    avatarUrl: "https://i.pravatar.cc/150?img=23",
  },
  {
    quote:
      "Trade show season floods our inbound lines for two weeks a year. Previously we'd hire temp staff and still miss calls. Now Tarsha handles the overflow completely, same quality, same information, instantly. We don't even notice the volume spike anymore.",
    author: "Lauren K.",
    role: "Director of Operations",
    company: "Pacific Exhibits",
    avatarUrl: "https://i.pravatar.cc/150?img=27",
  },
];

const steps = [
  {
    title: "Lines full, Tarsha takes over instantly",
    description:
      "The moment your lines reach capacity, calls automatically route to Tarsha. No busy signal, no hold music, no missed calls. The transition is seamless and instant.",
    Illustration: IllusStep1Overflow,
  },
  {
    title: "Same professional handling every time",
    description:
      "Overflow callers hear your business name, receive the same information, and get the same professional experience, whether it's your staff or Tarsha answering.",
    Illustration: IllusStep2Overflow,
  },
  {
    title: "Every overflow call logged and summarized",
    description:
      "At the end of each day, you see exactly what Tarsha handled during overflow periods, who called, why, what was captured, and what needs follow-up.",
    Illustration: IllusStep3Overflow,
  },
];

const benefits: Benefit[] = [
  {
    icon: Zap,
    title: "Instant overflow activation",
    description:
      "The moment your lines are full, calls route to Tarsha automatically. Zero setup per call, zero hold time for the caller.",
    MockUI: MockOverflowTrigger,
    wide: true,
  },
  {
    icon: Layers,
    title: "Unlimited simultaneous handling",
    description:
      "There's no limit to how many overflow calls Tarsha can handle at once. Peak hours don't create problems anymore.",
    MockUI: MockUnlimitedCapacity,
  },
  {
    icon: Clock,
    title: "Scheduled overflow windows",
    description:
      "Know your peak hours? Configure overflow to activate automatically during those windows, no manual switching needed.",
    MockUI: MockOverflowSchedule,
  },
  {
    icon: PhoneForwarded,
    title: "Daily overflow reports",
    description:
      "See every call Tarsha handled as overflow, who called, what they needed, and what your team needs to follow up on.",
    MockUI: MockOverflowSummary,
    wide: true,
  },
];

const industries = [
  "Medical practices",
  "Legal firms",
  "Property management",
  "Insurance agencies",
  "HVAC companies",
  "Retailers",
  "Hotels & hospitality",
  "Dental offices",
  "Financial services",
  "Real estate",
  "Home services",
  "Call centers",
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function OverflowReceptionPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-bg pt-[72px]">
        <SolutionHero
          eyebrow="Overflow Reception"
          titleBefore="Never put a caller "
          titleHighlight="on hold again"
          subtitle="When your lines are busy, Tarsha AI catches every overflow call instantly, answering professionally, capturing details, and routing appropriately so no one ever waits."
          MockUI={MockOverflowDashboard}
        />
        <SolutionTestimonials
          eyebrow="Trusted by businesses like yours"
          testimonials={testimonials}
        />
        <SolutionIntro
          eyebrow="The capability"
          heading="Every busy signal is a customer experience failure"
          paragraphs={[
            "When a caller gets a busy signal or sits on hold, they don't wait patiently, they hang up and try a competitor. For most businesses, peak call hours are predictable. But the solution shouldn't be to overstaff your reception desk for every busy Friday afternoon.",
            "Tarsha AI acts as your overflow safety net. When your lines are at capacity, calls flow to Tarsha instantly, with the same professional greeting, the same information, the same quality of handling. Callers never know the difference, and you never miss an opportunity.",
          ]}
          Illustration={IllusIntroOverflow}
        />
        <SolutionHowItWorks
          heading="Every overflow call handled without missing a beat"
          steps={steps}
        />
        <SolutionBenefits
          eyebrow="What you get"
          heading="Unlimited capacity when you need it most"
          benefits={benefits}
        />
        <SolutionIndustries
          eyebrow="Who uses this"
          heading="Built for any business with predictable peak hours"
          industries={industries}
        />
        <SolutionCTA heading="No more busy signals. No more lost customers during peak hours." />
      </main>
      <Footer />
    </>
  );
}
