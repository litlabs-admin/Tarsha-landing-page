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
import { MockClientIntakeForm } from "@/components/solutions/mocks/MockClientIntakeForm";
import { motion } from "framer-motion";
import { ClipboardList, Database, UserCheck, Zap } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

// ─── Step illustrations ───────────────────────────────────────────────────────

function IllusStep1Intake() {
  const lines = [
    { speaker: "Caller", text: "Hi, I'm looking to get some legal advice about a contract dispute" },
    { speaker: "Tarsha AI", text: "Happy to connect you with the right attorney. May I get your full name and best contact number?" },
  ];
  return (
    <div className="space-y-2.5">
      {lines.map(({ speaker, text }, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 + i * 0.2, duration: 0.4, ease: EASE }}
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

function IllusStep2Intake() {
  const fields = [
    { label: "Full name", value: "Alex Thompson" },
    { label: "Phone", value: "(650) 555-0284" },
    { label: "Matter type", value: "Contract dispute · commercial" },
    { label: "Urgency", value: "Within 2 weeks" },
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
    </div>
  );
}

function IllusStep3Intake() {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-sm">
      <div className="border-b border-border bg-surface-muted/60 px-3.5 py-2">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-muted">New intake</p>
      </div>
      {[
        { label: "Name", value: "Alex Thompson" },
        { label: "Phone", value: "(650) 555-0284" },
        { label: "Matter", value: "Contract dispute · commercial" },
        { label: "Timeline", value: "Within 2 weeks" },
      ].map(({ label, value }) => (
        <div key={label} className="flex gap-3 border-b border-border px-3.5 py-2 last:border-0">
          <span className="w-12 shrink-0 text-[10px] text-ink-muted">{label}</span>
          <span className="text-[11px] text-ink">{value}</span>
        </div>
      ))}
      <div className="flex items-center gap-2 bg-surface-muted/40 px-3.5 py-2">
        <motion.span
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="h-1.5 w-1.5 rounded-full bg-green-500"
        />
        <span className="text-[11px] text-ink-muted">Ready for callback · full context attached</span>
      </div>
    </div>
  );
}

// ─── Intro illustration ───────────────────────────────────────────────────────

function IllusIntroIntake() {
  return (
    <div className="space-y-3">
      <motion.div
        initial={{ opacity: 0, x: 14 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0, duration: 0.4, ease: EASE }}
        className="rounded-xl border border-border bg-surface-muted/40 p-3.5"
      >
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.08em] text-ink-muted">
          Without intake
        </p>
        {[
          "Meeting starts",
          "\"Can I get your name again?\"",
          "\"What brings you in today?\"",
          "\"And your contact number?\"",
        ].map((line) => (
          <p key={line} className="text-[12px] text-ink-muted">{line}</p>
        ))}
        <p className="mt-2 text-[11px] text-red-600">10 minutes of the meeting gone before work starts</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 14 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.12, duration: 0.4, ease: EASE }}
        className="rounded-xl border border-accent/30 bg-accent/10 p-3.5"
      >
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.08em] text-ink-muted">
          With Tarsha intake
        </p>
        {["Name ✓", "Contact ✓", "Reason ✓", "Context ✓"].map((item) => (
          <p key={item} className="text-[12px] font-medium text-ink">{item}</p>
        ))}
        <p className="mt-2 text-[11px] font-medium text-green-600">Walk in prepared · meeting starts immediately</p>
      </motion.div>
    </div>
  );
}

// ─── Benefit mock UIs ─────────────────────────────────────────────────────────

function MockIntakeForm() {
  const fields = [
    { label: "Name", value: "Alex Thompson" },
    { label: "Phone", value: "(650) 555-0284" },
    { label: "Inquiry type", value: "Commercial contract" },
    { label: "Timeline", value: "Within 2 weeks" },
    { label: "Referred by", value: "Google Search" },
  ];
  return (
    <div className="mt-4 overflow-hidden rounded-xl border border-border bg-surface shadow-sm">
      {fields.map(({ label, value }) => (
        <div key={label} className="flex gap-3 border-b border-border px-3.5 py-2.5 last:border-0">
          <span className="w-20 shrink-0 text-[11px] text-ink-muted">{label}</span>
          <span className="text-[12px] text-ink">{value}</span>
        </div>
      ))}
    </div>
  );
}

function MockCustomFields() {
  const examples = [
    { industry: "For law firms:", fields: "Matter type, opposing party, urgency" },
    { industry: "For medical:", fields: "Insurance provider, symptom description, physician" },
    { industry: "For insurance:", fields: "Coverage type, current provider, timeline" },
  ];
  return (
    <div className="mt-4 space-y-2">
      {examples.map(({ industry, fields }, i) => (
        <motion.div
          key={industry}
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.35, ease: EASE }}
          className="rounded-lg border border-border bg-surface px-3 py-2.5"
        >
          <p className="text-[11px] font-semibold text-ink">{industry}</p>
          <p className="mt-0.5 text-[11px] text-ink-muted">{fields}</p>
        </motion.div>
      ))}
    </div>
  );
}

function MockCRMReady() {
  const rows = [
    { key: "name", value: "Alex Thompson" },
    { key: "phone", value: "(650) 555-0284" },
    { key: "matter_type", value: "contract_dispute" },
    { key: "timeline", value: "within_2_weeks" },
  ];
  return (
    <div className="mt-4 space-y-2">
      <div className="overflow-hidden rounded-xl border border-border bg-surface-muted/60 p-3 font-mono text-[11px]">
        {rows.map(({ key, value }) => (
          <div key={key} className="flex gap-2 py-0.5">
            <span className="text-ink-muted">{key}:</span>
            <span className="text-ink">&quot;{value}&quot;</span>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 rounded-xl border border-accent/30 bg-accent/10 px-3.5 py-2">
        <span className="text-[11px] font-semibold text-ink">Export to Salesforce / HubSpot / Zapier</span>
      </div>
    </div>
  );
}

function MockIntakeSummary() {
  return (
    <div className="mt-4 space-y-2">
      <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-sm">
        <div className="border-b border-border bg-surface-muted/60 px-3.5 py-2 text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
          Before your meeting
        </div>
        {[
          { label: "Name", value: "Alex Thompson" },
          { label: "Phone", value: "(650) 555-0284" },
          { label: "Matter", value: "Contract dispute" },
          { label: "Timeline", value: "Within 2 weeks" },
        ].map(({ label, value }) => (
          <div key={label} className="flex gap-3 border-b border-border px-3.5 py-2 last:border-0">
            <span className="w-12 shrink-0 text-[10px] text-ink-muted">{label}</span>
            <span className="text-[11px] text-ink">{value}</span>
          </div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.4, ease: EASE }}
        className="flex items-center justify-center gap-2 rounded-xl border border-accent/30 bg-accent/10 px-3.5 py-2.5"
      >
        <span className="text-[12px] font-semibold text-ink">Prepared for your meeting</span>
      </motion.div>
    </div>
  );
}

// ─── Page data ────────────────────────────────────────────────────────────────

const testimonials: TestimonialItem[] = [
  {
    quote:
      "Before Tarsha, every new client meeting started with 10 minutes of 'let me get your details.' Now those details are already in the intake summary — collected during the first call. We get right to work immediately. Clients notice and appreciate it.",
    author: "Olivia K.",
    role: "Senior Attorney",
    company: "Keller & Park Family Law",
    avatarUrl: "https://i.pravatar.cc/150?img=9",
  },
  {
    quote:
      "We're a therapy practice. Intake is sensitive and important. Tarsha collects the basics professionally — name, contact, reason for seeking services, insurance — without being clinical or robotic. It actually does it better than some staff I've had.",
    author: "Dr. Marcus A.",
    role: "Clinical Director",
    company: "Waverly Counseling Center",
    avatarUrl: "https://i.pravatar.cc/150?img=66",
  },
  {
    quote:
      "Insurance intake used to take 15 minutes per new client call. Now Tarsha collects coverage type, current provider, timeline, and contact details in the first call. My agents spend that 15 minutes selling, not form-filling.",
    author: "Brenda S.",
    role: "Agency Principal",
    company: "Suncoast Insurance",
    avatarUrl: "https://i.pravatar.cc/150?img=10",
  },
];

const steps = [
  {
    title: "Natural intake conversation",
    description:
      "Tarsha collects intake details through normal conversation — not a robotic form-filling exercise. Callers feel heard, not interrogated, and provide more accurate information.",
    Illustration: IllusStep1Intake,
  },
  {
    title: "Every field captured accurately",
    description:
      "Name, contact, reason, urgency, relevant specifics — all captured and structured automatically. No handwritten notes, no transcription errors, no missing information.",
    Illustration: IllusStep2Intake,
  },
  {
    title: "Structured summary delivered instantly",
    description:
      "Before your team makes contact, they have a complete intake summary. Walk into every conversation already knowing who you're talking to and why they're there.",
    Illustration: IllusStep3Intake,
  },
];

const benefits: Benefit[] = [
  {
    icon: ClipboardList,
    title: "Complete intake on the first call",
    description:
      "Every new caller's details collected naturally and accurately — before your team ever makes contact.",
    MockUI: MockIntakeForm,
    wide: true,
  },
  {
    icon: UserCheck,
    title: "Custom intake fields",
    description:
      "Configure Tarsha to collect exactly what your business needs — matter type for law, insurance details for healthcare, whatever your intake process requires.",
    MockUI: MockCustomFields,
  },
  {
    icon: Database,
    title: "CRM-ready structured data",
    description:
      "Intake summaries are formatted for your CRM or workflow tool — no manual data entry, no reformatting needed.",
    MockUI: MockCRMReady,
  },
  {
    icon: Zap,
    title: "Team briefed before first contact",
    description:
      "Your team receives the complete intake summary instantly — so every first meeting starts informed, not from scratch.",
    MockUI: MockIntakeSummary,
    wide: true,
  },
];

const industries = [
  "Law firms",
  "Medical practices",
  "Therapy & counseling",
  "Insurance agencies",
  "Financial advisors",
  "Accountants",
  "Dental offices",
  "Veterinary clinics",
  "HR consulting",
  "Real estate",
  "Mortgage brokers",
  "Business consultants",
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ClientIntakePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-bg pt-[72px]">
        <SolutionHero
          eyebrow="Client Intake"
          titleBefore="First meetings start "
          titleHighlight="fully informed"
          subtitle="Tarsha AI collects every detail from a new caller's first contact — name, contact info, reason for calling, and relevant context — so your team walks into every conversation already prepared."
          MockUI={MockClientIntakeForm}
        />
        <SolutionTestimonials
          eyebrow="Trusted by businesses like yours"
          testimonials={testimonials}
        />
        <SolutionIntro
          eyebrow="The capability"
          heading="Your team shouldn't learn who a client is after they've already arrived"
          paragraphs={[
            "The first meeting with a new client should feel prepared and professional. But when intake happens during the meeting itself — scrambling for contact details, asking why they're there, learning their history on the fly — it undermines trust before you've said anything meaningful.",
            "Tarsha AI handles intake in the first call. Name, contact information, reason for reaching out, specific details relevant to your business — all collected naturally through conversation and delivered as a structured summary before your team makes contact. Every first impression is prepared.",
          ]}
          Illustration={IllusIntroIntake}
        />
        <SolutionHowItWorks
          heading="Full intake before your team ever picks up the phone"
          steps={steps}
        />
        <SolutionBenefits
          eyebrow="What you get"
          heading="Walk into every first meeting already prepared"
          benefits={benefits}
        />
        <SolutionIndustries
          eyebrow="Who uses this"
          heading="Built for any business where first impressions matter"
          industries={industries}
        />
        <SolutionCTA heading="Every new client deserves to feel you were expecting them." />
      </main>
      <Footer />
    </>
  );
}
