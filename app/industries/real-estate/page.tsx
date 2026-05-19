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
import { MockRealEstateShowing } from "@/components/solutions/mocks/MockRealEstateShowing";
import { motion } from "framer-motion";
import { CalendarCheck, Clock, MapPin, UserCheck } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

// ─── Step illustrations ───────────────────────────────────────────────────────

function IllusStep1RealEstate() {
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
          <p className="text-[11px] text-ink-muted">Incoming · Jennifer Park</p>
          <p className="text-[13px] font-semibold text-ink">Interested in 142 Maple St · 3-bed</p>
        </div>
        <span className="shrink-0 rounded-full border border-green-200 bg-green-50 px-2 py-0.5 text-[10px] font-semibold text-green-700">
          Answered instantly
        </span>
      </div>
    </div>
  );
}

function IllusStep2RealEstate() {
  const fields = [
    { label: "Budget", value: "$450–520k", done: true },
    { label: "Timeline", value: "90 days", done: true },
    { label: "Pre-approved", value: "Yes", done: true },
  ];
  return (
    <div className="space-y-2">
      <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-sm">
        <div className="border-b border-border bg-surface-muted/60 px-3.5 py-2 text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
          Lead qualification
        </div>
        {fields.map(({ label, value, done }) => (
          <div key={label} className="flex gap-3 border-b border-border px-3.5 py-2 last:border-0">
            <span className="w-20 shrink-0 text-[10px] text-ink-muted">{label}</span>
            <span className="flex-1 text-[11px] text-ink">{value}</span>
            {done && <span className="text-[11px] font-semibold text-green-600">✓</span>}
          </div>
        ))}
      </div>
      <div className="rounded-xl border border-accent/30 bg-accent/10 px-3.5 py-2.5 text-[12px] font-semibold text-ink">
        🔥 Hot lead · priority callback
      </div>
    </div>
  );
}

function IllusStep3RealEstate() {
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
          Showing confirmed
        </p>
        <p className="mt-1 text-[14px] font-bold text-ink">142 Maple St · Saturday 10:00 AM</p>
      </motion.div>
      <div className="grid grid-cols-2 gap-1.5">
        {[
          { label: "Calendar event", status: "✓ added" },
          { label: "Confirmation sent", status: "✓ to buyer" },
        ].map(({ label, status }) => (
          <div key={label} className="rounded-lg border border-border bg-surface px-2.5 py-2 text-center">
            <p className="text-[10px] text-ink-muted">{label}</p>
            <p className="mt-0.5 text-[11px] font-semibold text-green-600">{status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Intro illustration ───────────────────────────────────────────────────────

function IllusIntroRealEstate() {
  const rows = [
    { icon: "🏠", title: "Buyer inquiry · 3-bed listing", sub: "Went to voicemail", badge: "Lost", color: "red" },
    { icon: "🏠", title: "Showing request · Saturday AM", sub: "No answer", badge: "Missed", color: "red" },
    { icon: "🏠", title: "Rental application question", sub: "Called another agent", badge: "Lost", color: "red" },
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
        <p className="text-[12px] text-ink-muted">The next agent who answers wins the deal</p>
      </motion.div>
    </div>
  );
}

// ─── Benefit mock UIs ─────────────────────────────────────────────────────────

function MockLeadScore() {
  const leads = [
    { name: "Jennifer P.", detail: "Budget ✓ Pre-approved ✓ Timeline ✓", badge: "🔥 Hot", badgeClass: "border-red-200 bg-red-50 text-red-700" },
    { name: "Mark R.", detail: "Budget ✓ No pre-approval", badge: "Warm", badgeClass: "border-amber-200 bg-amber-50 text-amber-700" },
    { name: "Unknown", detail: "Browsing, no timeline", badge: "Cool", badgeClass: "border-border bg-surface-muted/60 text-ink-muted" },
  ];
  return (
    <div className="mt-4 space-y-2">
      {leads.map(({ name, detail, badge, badgeClass }, i) => (
        <motion.div
          key={name}
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.35, ease: EASE }}
          className="flex items-center gap-3 rounded-lg border border-border bg-surface px-3 py-2.5"
        >
          <div className="flex-1 min-w-0">
            <p className="text-[12px] font-semibold text-ink">{name}</p>
            <p className="text-[11px] text-ink-muted truncate">{detail}</p>
          </div>
          <span className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-semibold ${badgeClass}`}>
            {badge}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

function MockShowingConfirmation() {
  return (
    <div className="mt-4 space-y-2">
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, ease: EASE }}
        className="rounded-xl border border-accent/30 bg-accent/10 p-4"
      >
        <p className="text-[12px] font-semibold uppercase tracking-wide text-ink-muted">
          Showing confirmed
        </p>
        <p className="mt-1 text-[15px] font-bold text-ink">Saturday 10:00 AM</p>
        <p className="mt-0.5 text-[12px] text-ink-muted">142 Maple St</p>
      </motion.div>
      <div className="grid grid-cols-2 gap-1.5">
        {[
          { label: "Calendar event", status: "✓ added" },
          { label: "Confirmation", status: "✓ sent" },
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

function MockMultiAgent() {
  const routes = [
    { rule: "Downtown listings", agent: "Alex Chen" },
    { rule: "Rentals", agent: "Sarah Park" },
    { rule: "Commercial", agent: "Michael Torres" },
  ];
  return (
    <div className="mt-4 space-y-2">
      {routes.map(({ rule, agent }, i) => (
        <motion.div
          key={rule}
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.35, ease: EASE }}
          className="flex items-center gap-2.5 rounded-lg border border-border bg-surface px-3 py-2.5"
        >
          <span className="flex-1 text-[12px] text-ink-muted">{rule}</span>
          <span className="text-[11px] text-ink-muted">→</span>
          <span className="rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 text-[11px] font-semibold text-ink">
            {agent}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

function MockAfterHoursRE() {
  return (
    <div className="mt-4 space-y-2.5">
      <div className="flex items-center justify-between rounded-xl border border-border bg-surface px-4 py-3">
        <div>
          <p className="text-[13px] font-medium text-ink">Evening inquiries captured</p>
          <p className="text-[11px] text-ink-muted">8:47 PM · tonight</p>
        </div>
        <motion.span
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
          className="font-display text-[2.25rem] font-bold text-ink"
        >
          3
        </motion.span>
      </div>
      <div className="space-y-1.5">
        {[
          { name: "Jennifer P.", note: "3-bed buyer · hot lead" },
          { name: "Carlos M.", note: "Rental inquiry · move-in soon" },
          { name: "Lisa W.", note: "Condo showing request" },
        ].map(({ name, note }) => (
          <div key={name} className="flex items-center gap-2.5 rounded-lg border border-border bg-surface px-3 py-2">
            <motion.span
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-green-500"
            />
            <span className="text-[12px] font-medium text-ink">{name}</span>
            <span className="text-[11px] text-ink-muted">· {note}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Page data ────────────────────────────────────────────────────────────────

const testimonials: TestimonialItem[] = [
  {
    quote:
      "Buyers call at the worst moments — when I'm in a showing, in a closing, driving between properties. Tarsha answers everything, schedules viewings into my calendar, and sends me a clean lead summary. I've closed three deals from leads that came in past 9 PM.",
    author: "Kevin O.",
    role: "Senior Agent",
    company: "Pinnacle Realty Group",
    avatarUrl: "https://i.pravatar.cc/150?img=62",
  },
  {
    quote:
      "We manage 12 agents and a high volume of inbound calls. Before Tarsha, calls were routed chaotically. Now every call is triaged, the right agent is contacted, and no lead falls through. Our team actually has time to sell because they're not chasing missed calls.",
    author: "Linda T.",
    role: "Brokerage Owner",
    company: "Summit Real Estate",
    avatarUrl: "https://i.pravatar.cc/150?img=43",
  },
  {
    quote:
      "Rental inquiries come in around the clock, especially for popular listings. Tarsha qualifies renters — budget, move-in date, pets, parking — before I even call back. I spend my time on qualified leads, not screening calls.",
    author: "Eric B.",
    role: "Property Investor",
    company: "BrightPath Rentals",
    avatarUrl: "https://i.pravatar.cc/150?img=26",
  },
];

const steps = [
  {
    title: "Inquiry captured within 2 seconds",
    description:
      "Every buyer and renter call is answered instantly — with your name, professional tone, and the caller's full contact details captured before you know they called.",
    Illustration: IllusStep1RealEstate,
  },
  {
    title: "Lead qualified automatically",
    description:
      "Tarsha asks the right questions — budget, timeline, pre-approval status, property preferences — and scores each lead so you always call back the hottest ones first.",
    Illustration: IllusStep2RealEstate,
  },
  {
    title: "Showing scheduled before they hang up",
    description:
      "If a caller wants to see a property, Tarsha checks your availability and locks in the showing before the call ends — confirmation to the buyer, calendar event to you.",
    Illustration: IllusStep3RealEstate,
  },
];

const benefits: Benefit[] = [
  {
    icon: UserCheck,
    title: "Instant lead qualification",
    description:
      "Budget, timeline, pre-approval, property type — Tarsha asks and scores automatically. You always know which leads to call back first.",
    MockUI: MockLeadScore,
    wide: true,
  },
  {
    icon: CalendarCheck,
    title: "Showings booked on the call",
    description:
      "Serious buyers get a confirmed showing time before they hang up. No callbacks needed to schedule.",
    MockUI: MockShowingConfirmation,
  },
  {
    icon: MapPin,
    title: "Multi-agent routing",
    description:
      "Multiple agents or specializations? Tarsha routes each inquiry to the right person based on listing type, area, or any rule you set.",
    MockUI: MockMultiAgent,
  },
  {
    icon: Clock,
    title: "24/7 inquiry capture",
    description:
      "Evening and weekend buyers are your best leads — they're actively looking. Tarsha captures and qualifies every one while you sleep.",
    MockUI: MockAfterHoursRE,
    wide: true,
  },
];

const industries = [
  "Real estate brokerages",
  "Property management firms",
  "Commercial real estate",
  "Vacation rentals",
  "Mortgage brokers",
  "Home inspectors",
  "Appraisers",
  "Title companies",
  "Relocation services",
  "New development sales",
  "Land & lot sales",
  "Investment property",
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function RealEstatePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-bg pt-[72px]">
        <SolutionHero
          eyebrow="Real Estate"
          titleBefore="Never miss a "
          titleHighlight="showing request"
          subtitle="Tarsha AI captures every buyer and renter inquiry, schedules showings directly into your calendar, and qualifies leads 24/7 — so you wake up with a full schedule, not a list of missed calls."
          MockUI={MockRealEstateShowing}
        />
        <SolutionTestimonials
          eyebrow="Trusted by real estate professionals"
          testimonials={testimonials}
        />
        <SolutionIntro
          eyebrow="The problem"
          heading="In real estate, speed wins — missed calls lose deals"
          paragraphs={[
            "Buyers and renters move fast. If they call about a listing and go to voicemail, they call the next agent. In a competitive market, a missed call isn't just a missed conversation — it's a missed deal. And the next agent answers within seconds.",
            "Tarsha AI answers every inquiry instantly, qualifies leads with the right questions, and schedules showings directly into your calendar — around the clock. You get a prioritized summary of every lead before you even call back. No more racing to return calls. No more lost opportunities.",
          ]}
          Illustration={IllusIntroRealEstate}
        />
        <SolutionHowItWorks
          heading="Every showing request captured and booked automatically"
          steps={steps}
        />
        <SolutionBenefits
          eyebrow="What you get"
          heading="Every lead qualified, every showing booked"
          benefits={benefits}
        />
        <SolutionIndustries
          eyebrow="Who uses this"
          heading="Built for every corner of real estate"
          industries={industries}
        />
        <SolutionCTA heading="Every showing request answered, every lead captured." />
      </main>
      <Footer />
    </>
  );
}
