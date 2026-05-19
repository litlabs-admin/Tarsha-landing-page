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
import { MockVoicemailInbox } from "@/components/solutions/mocks/MockVoicemailInbox";
import { motion } from "framer-motion";
import { Bell, Clock, FileText, Search } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

// ─── Step illustrations ───────────────────────────────────────────────────────

function IllusStep1Trans() {
  const BAR_HEIGHTS = [3, 5, 8, 6, 4, 9, 7, 5, 3, 6, 8, 4];
  return (
    <div className="rounded-xl border border-border bg-surface p-4 shadow-sm">
      <div className="mb-3 flex items-center gap-3">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-surface-muted text-xl"
        >
          📞
        </motion.div>
        <div className="flex-1">
          <p className="text-[11px] text-ink-muted">Recording in progress</p>
          <p className="text-[13px] font-semibold text-ink">David Chen</p>
        </div>
        <span className="tabular-nums text-[12px] text-ink-muted">0:43</span>
      </div>
      <div className="flex items-end gap-0.5">
        {BAR_HEIGHTS.map((h, i) => (
          <motion.span
            key={i}
            animate={{ height: [`${h * 2.5}px`, `${Math.max(h * 0.5, 1.5) * 2.5}px`, `${h * 2.5}px`] }}
            transition={{
              duration: 0.9 + (i % 6) * 0.13,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.05,
            }}
            className="w-1.5 rounded-full bg-ink"
            style={{ height: `${h * 2.5}px` }}
          />
        ))}
      </div>
      <div className="mt-3 flex items-center gap-2">
        <motion.span
          animate={{ opacity: [1, 0.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="h-2 w-2 rounded-full bg-red-500 shadow-[0_0_0_4px_rgba(239,68,68,0.15)]"
        />
        <span className="text-[11px] text-ink-muted">Recording in progress</span>
      </div>
    </div>
  );
}

function IllusStep2Trans() {
  const fields = [
    { label: "Caller", value: "David Chen" },
    { label: "Phone", value: "(415) 555-0193" },
    { label: "Topic", value: "Requesting a quote for office cleaning" },
  ];
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 rounded-xl border border-border bg-surface-muted/60 px-3.5 py-2.5">
        <motion.span
          animate={{ opacity: [1, 0.25, 1] }}
          transition={{ duration: 1.2, repeat: Infinity }}
          className="h-1.5 w-1.5 rounded-full bg-accent"
        />
        <span className="text-[12px] font-medium text-ink">Transcribing...</span>
        <span className="ml-auto text-[11px] font-semibold text-green-600">✓ Complete</span>
      </div>
      {fields.map(({ label, value }, i) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 + i * 0.1, duration: 0.35, ease: EASE }}
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

function IllusStep3Trans() {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-sm">
      <div className="border-b border-border bg-surface-muted/60 px-3.5 py-2 text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
        New voicemail transcript
      </div>
      {[
        { label: "From", value: "David Chen" },
        { label: "Phone", value: "(415) 555-0193" },
        { label: "Topic", value: "Quote · office cleaning · 2,400 sq ft" },
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
        <span className="text-[11px] text-ink-muted">Delivered to inbox · instantly</span>
      </div>
    </div>
  );
}

// ─── Intro illustration ───────────────────────────────────────────────────────

function IllusIntroTranscription() {
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
          Before: Listen to each message
        </p>
        {["⏱️ 90 sec per message", "⏱️ Replay 2× for numbers", "⏱️ 15 messages = 45 min/day"].map((item) => (
          <p key={item} className="text-[12px] text-ink-muted">{item}</p>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 14 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.12, duration: 0.4, ease: EASE }}
        className="rounded-xl border border-accent/30 bg-accent/10 p-3.5"
      >
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.08em] text-ink-muted">
          After: Read transcripts instantly
        </p>
        {["✓ Read in < 15 sec", "✓ Number auto-extracted", "✓ Urgent messages flagged"].map((item) => (
          <p key={item} className="text-[12px] text-ink">{item}</p>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.24, duration: 0.4, ease: EASE }}
        className="flex items-center justify-center gap-2 rounded-xl border border-border bg-surface px-3.5 py-2.5"
      >
        <span className="text-[12px] font-semibold text-ink">5× faster to process voicemails with Tarsha</span>
      </motion.div>
    </div>
  );
}

// ─── Benefit mock UIs ─────────────────────────────────────────────────────────

function MockTranscriptInbox() {
  const messages = [
    { urgency: "🔴 URGENT", name: "Sarah W.", detail: "medication concern", color: "text-red-600 bg-red-50 border-red-200" },
    { urgency: "Routine", name: "James R.", detail: "quote request · low urgency", color: "text-ink-muted bg-surface-muted border-border" },
    { urgency: "Routine", name: "Unknown", detail: "general inquiry · routine", color: "text-ink-muted bg-surface-muted border-border" },
  ];
  return (
    <div className="mt-4 space-y-2">
      {messages.map(({ urgency, name, detail, color }, i) => (
        <motion.div
          key={name}
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.35, ease: EASE }}
          className="flex items-center gap-3 rounded-lg border border-border bg-surface px-3 py-2.5"
        >
          <span className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-bold ${color}`}>
            {urgency}
          </span>
          <div className="flex-1 min-w-0">
            <p className="text-[12px] font-medium text-ink truncate">{name}</p>
            <p className="text-[11px] text-ink-muted truncate">{detail}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function MockNumberExtract() {
  const fields = [
    { label: "Name", value: "David Chen" },
    { label: "Phone", value: "(415) 555-0193" },
    { label: "Topic", value: "Office cleaning quote" },
    { label: "Urgency", value: "Routine" },
    { label: "Time", value: "2:14 PM today" },
  ];
  return (
    <div className="mt-4 space-y-2">
      <p className="text-[12px] italic leading-relaxed text-ink/60">
        "Hi, calling about office cleaning for about 2,400 sq ft, weekly service..."
      </p>
      <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-sm">
        {fields.map(({ label, value }) => (
          <div key={label} className="flex gap-3 border-b border-border px-3.5 py-2 last:border-0">
            <span className="w-12 shrink-0 text-[10px] text-ink-muted">{label}</span>
            <span className="flex-1 text-[11px] text-ink">{value}</span>
            <span className="text-[11px] font-semibold text-green-600">✓</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MockSearchable() {
  return (
    <div className="mt-4 space-y-2">
      <div className="flex items-center gap-2 rounded-xl border border-border bg-surface px-3 py-2.5">
        <span className="text-[14px]">🔍</span>
        <span className="text-[12px] text-ink">invoice</span>
        <span className="ml-auto text-[11px] text-ink-muted">2 results</span>
      </div>
      {[
        { name: "Karen F.", excerpt: "question about my <b>invoice</b> from last month" },
        { name: "Tom S.", excerpt: "<b>invoice</b> number missing, please call back" },
      ].map(({ name, excerpt }, i) => (
        <motion.div
          key={name}
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.35, ease: EASE }}
          className="rounded-lg border border-border bg-surface px-3 py-2.5"
        >
          <p className="text-[12px] font-medium text-ink">{name}</p>
          <p
            className="mt-0.5 text-[11px] text-ink-muted [&_b]:font-semibold [&_b]:text-ink"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />
        </motion.div>
      ))}
      <p className="text-center text-[11px] text-ink-muted">Search across all transcripts</p>
    </div>
  );
}

function MockUrgentFlag() {
  return (
    <div className="mt-4 space-y-2.5">
      <div className="overflow-hidden rounded-xl border border-red-200 bg-red-50 p-3.5">
        <div className="mb-1.5 flex items-center gap-2">
          <span className="rounded-full border border-red-200 bg-red-100 px-2 py-0.5 text-[10px] font-bold text-red-600">
            🔴 URGENT
          </span>
        </div>
        <p className="text-[12px] italic text-ink/70">
          "This is Sarah, it&apos;s <span className="font-semibold text-red-600">urgent</span> — I have a medication question and need a callback today..."
        </p>
      </div>
      <div className="overflow-hidden rounded-xl border border-border bg-surface p-3.5">
        <div className="mb-1.5 flex items-center gap-2">
          <span className="rounded-full border border-border bg-surface-muted px-2 py-0.5 text-[10px] font-semibold text-ink-muted">
            Routine
          </span>
        </div>
        <p className="text-[12px] italic text-ink/60">
          "Hi, calling about availability for new clients, no rush..."
        </p>
      </div>
      <p className="text-center text-[11px] text-ink-muted">Urgent messages surface automatically</p>
    </div>
  );
}

// ─── Page data ────────────────────────────────────────────────────────────────

const testimonials: TestimonialItem[] = [
  {
    quote:
      "I used to dread coming back from a week off — voicemails stacking up, no idea which were urgent. Now I have a text inbox of every message, sorted by what matters. I triaged 47 messages in 12 minutes flat. It would have taken me two hours otherwise.",
    author: "James F.",
    role: "Attorney",
    company: "Fox & McAllister Legal",
    avatarUrl: "https://i.pravatar.cc/150?img=58",
  },
  {
    quote:
      "We're a medical office. Accurate transcription is non-negotiable — patient names, medication questions, callback numbers. Tarsha gets everything right and flags anything that sounds urgent. Our nurses review the inbox in the morning instead of listening through recordings.",
    author: "Dr. Wendy P.",
    role: "Practice Director",
    company: "Lakeside Family Medicine",
    avatarUrl: "https://i.pravatar.cc/150?img=22",
  },
  {
    quote:
      "Sales calls come in all day. My team was spending 20 minutes each morning just listening to voicemails to prioritize callbacks. Now they read the transcripts in 3 minutes, decide priority, and start dialing. Time savings are enormous.",
    author: "Craig O.",
    role: "Sales Manager",
    company: "Orion Business Systems",
    avatarUrl: "https://i.pravatar.cc/150?img=3",
  },
];

const steps = [
  {
    title: "Caller leaves a message",
    description:
      "When your line is unavailable, Tarsha records the voicemail with the same professional greeting — no awkward system prompts, just a seamless experience for the caller.",
    Illustration: IllusStep1Trans,
  },
  {
    title: "Transcribed instantly, automatically",
    description:
      "The moment the call ends, Tarsha transcribes the message with high accuracy. Caller name, phone number, and key details are extracted automatically — no manual review needed.",
    Illustration: IllusStep2Trans,
  },
  {
    title: "Delivered to your inbox",
    description:
      "A clean text summary lands in your inbox before you even knew the call came in. Read it, prioritize it, forward it to a team member — all without ever pressing play.",
    Illustration: IllusStep3Trans,
  },
];

const benefits: Benefit[] = [
  {
    icon: FileText,
    title: "Instant transcription to inbox",
    description:
      "Every voicemail is transcribed and in your inbox before the caller hangs up. No listening required, no manual effort.",
    MockUI: MockTranscriptInbox,
    wide: true,
  },
  {
    icon: Clock,
    title: "Key details auto-extracted",
    description:
      "Name, phone number, reason for calling, and urgency level — pulled automatically from the transcript and formatted for fast action.",
    MockUI: MockNumberExtract,
  },
  {
    icon: Search,
    title: "Searchable archive",
    description:
      "Every transcription is stored and searchable. Find any message by name, topic, date, or keyword — instantly.",
    MockUI: MockSearchable,
  },
  {
    icon: Bell,
    title: "Urgent message flagging",
    description:
      "Keywords like 'urgent', 'emergency', 'asap' trigger automatic flagging so critical messages always surface to the top.",
    MockUI: MockUrgentFlag,
    wide: true,
  },
];

const industries = [
  "Medical practices",
  "Legal firms",
  "Insurance agencies",
  "Financial advisors",
  "Real estate",
  "Property management",
  "Accountants",
  "Dental offices",
  "Home services",
  "Sales teams",
  "HR departments",
  "Executive assistants",
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function VoicemailTranscriptionPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-bg pt-[72px]">
        <SolutionHero
          eyebrow="Voicemail Transcription"
          titleBefore="Read every voicemail "
          titleHighlight="in seconds, not minutes"
          subtitle="Tarsha AI transcribes every voicemail instantly and delivers a clean, searchable text summary to your inbox — so you never have to listen to a message to understand what it says."
          MockUI={MockVoicemailInbox}
        />
        <SolutionTestimonials
          eyebrow="Trusted by businesses like yours"
          testimonials={testimonials}
        />
        <SolutionIntro
          eyebrow="The capability"
          heading="Listening to voicemails is a surprisingly expensive habit"
          paragraphs={[
            "The average voicemail takes 90 seconds to listen to and requires you to replay it twice to catch the callback number. Multiply that by 15 messages a day and you've spent 45 minutes just reviewing voicemails — before you've returned a single call. That's a recurring daily tax on everyone's time.",
            "Tarsha AI transcribes every voicemail instantly, with high accuracy. You get a text version of the message, the caller's number extracted automatically, and an urgency assessment — delivered to your inbox the moment the call ends. Reading is 5× faster than listening.",
          ]}
          Illustration={IllusIntroTranscription}
        />
        <SolutionHowItWorks
          heading="From voicemail to text in your inbox — automatically"
          steps={steps}
        />
        <SolutionBenefits
          eyebrow="What you get"
          heading="A smarter inbox for every missed call"
          benefits={benefits}
        />
        <SolutionIndustries
          eyebrow="Who uses this"
          heading="Built for any business that receives voicemails"
          industries={industries}
        />
        <SolutionCTA heading="Stop listening to voicemails. Start reading them." />
      </main>
      <Footer />
    </>
  );
}
