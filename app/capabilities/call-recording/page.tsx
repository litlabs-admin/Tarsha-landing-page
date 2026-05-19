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
import { MockCallRecording } from "@/components/solutions/mocks/MockCallRecording";
import { motion } from "framer-motion";
import { BarChart3, Mic, Search, ShieldCheck } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

// ─── Step illustrations ───────────────────────────────────────────────────────

function IllusStep1Recording() {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-3 rounded-xl border border-border bg-surface p-3.5">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-surface-muted text-xl"
        >
          📞
        </motion.div>
        <div className="flex-1">
          <p className="text-[11px] text-ink-muted">Incoming call</p>
          <p className="text-[13px] font-semibold text-ink">Michael Torres</p>
        </div>
        <div className="text-right">
          <p className="tabular-nums text-[13px] font-semibold text-ink">2:34</p>
        </div>
      </div>
      <div className="flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-3.5 py-2.5">
        <motion.span
          animate={{ opacity: [1, 0.2, 1] }}
          transition={{ duration: 1.2, repeat: Infinity }}
          className="h-2 w-2 rounded-full bg-red-500 shadow-[0_0_0_4px_rgba(239,68,68,0.15)]"
        />
        <span className="text-[12px] font-medium text-red-700">Recording · active</span>
      </div>
      <div className="flex items-center justify-center gap-1.5 rounded-xl border border-border bg-surface px-3.5 py-2">
        <span className="text-[11px] text-ink-muted">🔒</span>
        <span className="text-[11px] text-ink-muted">End-to-end encrypted</span>
      </div>
    </div>
  );
}

function IllusStep2Recording() {
  const BAR_HEIGHTS = [3, 5, 8, 6, 4, 9, 7, 5, 3, 6, 8, 4, 7, 5];
  return (
    <div className="space-y-2">
      <div className="flex items-end gap-0.5 rounded-xl border border-border bg-surface px-4 py-3">
        {BAR_HEIGHTS.map((h, i) => (
          i < 8 ? (
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
          ) : (
            <span
              key={i}
              className="w-1.5 rounded-full bg-ink/20"
              style={{ height: `${h * 1.2}px` }}
            />
          )
        ))}
      </div>
      <div className="rounded-xl border border-border bg-surface p-3.5">
        <p className="text-[12px] leading-relaxed text-ink">
          "I wanted to follow up on the{" "}
          <span className="font-semibold text-ink">quote</span> we discussed — can we finalize it
          by <span className="font-semibold text-ink">Friday</span>?"
        </p>
      </div>
      <div className="flex items-center gap-2 rounded-xl border border-accent/30 bg-accent/10 px-3.5 py-2">
        <span className="text-[11px] font-semibold text-ink">Auto-transcribed</span>
        <span className="ml-auto text-[11px] text-ink-muted">Searchable</span>
      </div>
    </div>
  );
}

function IllusStep3Recording() {
  return (
    <div className="space-y-2">
      <div className="rounded-xl border border-border bg-surface p-4 shadow-sm">
        <div className="mb-3 flex items-center justify-between">
          <div>
            <p className="text-[13px] font-semibold text-ink">Michael Torres</p>
            <p className="text-[11px] text-ink-muted">Sales inquiry · 4:23 · May 20</p>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-full border border-border bg-surface text-[11px]">
              🔍
            </div>
            <div className="flex h-7 w-7 items-center justify-center rounded-full border border-border bg-surface text-[11px]">
              ▶
            </div>
            <div className="flex h-7 w-7 items-center justify-center rounded-full border border-border bg-surface text-[11px]">
              📤
            </div>
          </div>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-border">
          <div className="h-full w-2/5 rounded-full bg-ink" />
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.4, ease: EASE }}
        className="flex items-center gap-2 rounded-xl border border-accent/30 bg-accent/10 px-3.5 py-2.5"
      >
        <span className="text-[11px] font-medium text-ink">🔒 Stored securely · HIPAA-ready</span>
      </motion.div>
    </div>
  );
}

// ─── Intro illustration ───────────────────────────────────────────────────────

function IllusIntroCallRecording() {
  const useCases = [
    {
      emoji: "⚖️",
      before: "Client disputes a verbal agreement",
      after: "Recording resolves it in minutes",
    },
    {
      emoji: "🎓",
      before: "New hire needs training examples",
      after: "Real call library available instantly",
    },
    {
      emoji: "📋",
      before: "Compliance audit requires documentation",
      after: "Complete call history accessible",
    },
  ];
  return (
    <div className="space-y-2">
      {useCases.map(({ emoji, before, after }, i) => (
        <motion.div
          key={before}
          initial={{ opacity: 0, x: 14 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.4, ease: EASE }}
          className="rounded-xl border border-border bg-surface p-3"
        >
          <div className="flex items-start gap-2.5">
            <span className="mt-0.5 shrink-0 text-[16px]">{emoji}</span>
            <div className="flex-1 min-w-0">
              <p className="text-[12px] text-ink-muted">{before}</p>
              <p className="mt-0.5 text-[12px] font-medium text-ink">{after}</p>
            </div>
            <span className="shrink-0 rounded-full border border-green-200 bg-green-50 px-2 py-0.5 text-[10px] font-bold text-green-600">
              ✓
            </span>
          </div>
        </motion.div>
      ))}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.36, duration: 0.4, ease: EASE }}
        className="flex items-center justify-center gap-2 rounded-xl border border-border bg-surface-muted/60 px-3.5 py-2.5"
      >
        <span className="text-[12px] font-medium text-ink">
          Every call recorded · searchable · always accessible
        </span>
      </motion.div>
    </div>
  );
}

// ─── Benefit mock UIs ─────────────────────────────────────────────────────────

function MockRecordingLibrary() {
  const recordings = [
    { name: "Michael Torres", topic: "Sales inquiry", duration: "4:23", date: "May 20" },
    { name: "Karen Walsh", topic: "Support request", duration: "2:11", date: "May 20" },
    { name: "David Chen", topic: "Billing question", duration: "1:48", date: "May 19" },
  ];
  return (
    <div className="mt-4 space-y-2">
      {recordings.map(({ name, topic, duration, date }, i) => (
        <motion.div
          key={name}
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.35, ease: EASE }}
          className="flex items-center gap-3 rounded-lg border border-border bg-surface px-3 py-2.5"
        >
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink/10 text-[11px]">
            ▶
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[12px] font-medium text-ink truncate">{name}</p>
            <p className="text-[11px] text-ink-muted truncate">{topic}</p>
          </div>
          <div className="shrink-0 text-right">
            <p className="text-[11px] font-semibold text-ink">{duration}</p>
            <p className="text-[10px] text-ink-muted">{date}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function MockSearchRecordings() {
  return (
    <div className="mt-4 space-y-2">
      <div className="flex items-center gap-2 rounded-xl border border-border bg-surface px-3 py-2.5">
        <span className="text-[14px]">🔍</span>
        <span className="text-[12px] text-ink">pricing</span>
        <span className="ml-auto text-[11px] text-ink-muted">2 results</span>
      </div>
      {[
        { name: "Jennifer W.", excerpt: "asked about <b>pricing</b> for the annual plan" },
        { name: "Tom B.", excerpt: "compared our <b>pricing</b> with a competitor" },
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
    </div>
  );
}

function MockComplianceBadge() {
  const badges = [
    { label: "HIPAA compliant", emoji: "🏥" },
    { label: "End-to-end encrypted", emoji: "🔒" },
    { label: "90-day retention", emoji: "📁" },
  ];
  return (
    <div className="mt-4 space-y-2">
      {badges.map(({ label, emoji }, i) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.35, ease: EASE }}
          className="flex items-center gap-3 rounded-lg border border-border bg-surface px-3 py-2.5"
        >
          <span className="text-[16px]">{emoji}</span>
          <span className="text-[12px] font-medium text-ink">{label}</span>
          <span className="ml-auto text-[11px] font-semibold text-green-600">✓</span>
        </motion.div>
      ))}
      <p className="text-center text-[11px] text-ink-muted">
        Meets requirements for healthcare, legal, and financial services
      </p>
    </div>
  );
}

function MockTeamReview() {
  return (
    <div className="mt-4 space-y-2">
      <div className="rounded-xl border border-border bg-surface p-3.5 shadow-sm">
        <div className="mb-2.5 flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-ink/10 text-[11px]">
            ▶
          </div>
          <div className="flex-1">
            <p className="text-[12px] font-semibold text-ink">Michael Torres · 4:23</p>
          </div>
        </div>
        <div className="rounded-lg border border-accent/30 bg-accent/10 px-3 py-2">
          <p className="text-[11px] text-ink-muted">Shared with</p>
          <p className="text-[12px] font-medium text-ink">Sarah · Customer Success</p>
        </div>
        <p className="mt-2 text-[11px] italic text-ink-muted">
          "Great example of handling objections"
        </p>
      </div>
      <div className="flex items-center gap-2 rounded-xl border border-border bg-surface-muted/60 px-3.5 py-2">
        <span className="text-[11px] text-ink-muted">Shared with team · review ready</span>
      </div>
    </div>
  );
}

// ─── Page data ────────────────────────────────────────────────────────────────

const testimonials: TestimonialItem[] = [
  {
    quote:
      "A client disputed the scope of work we'd agreed on verbally. I had the recording in my account within 30 seconds. The dispute was resolved in one email. I can't put a price on that kind of protection for my business.",
    author: "Paul D.",
    role: "Owner",
    company: "DuraRoof Contractors",
    avatarUrl: "https://i.pravatar.cc/150?img=16",
  },
  {
    quote:
      "Training new agents used to be slow. Now I share recordings of our best calls — real examples of how to handle objections, close a booking, resolve a complaint. Our new hires ramp 40% faster because they're learning from actual calls, not role-plays.",
    author: "Monica R.",
    role: "Customer Success Lead",
    company: "Apex Insurance Group",
    avatarUrl: "https://i.pravatar.cc/150?img=44",
  },
  {
    quote:
      "We're in healthcare. Every patient interaction needs to be documentable. Tarsha records calls in a HIPAA-compliant way and makes them instantly accessible to my team. It's the most useful compliance tool I've added in five years.",
    author: "Dr. Kevin L.",
    role: "Practice Administrator",
    company: "Northern Shore Medical",
    avatarUrl: "https://i.pravatar.cc/150?img=64",
  },
];

const steps = [
  {
    title: "Every call recorded automatically",
    description:
      "Recording starts the moment a call connects — no activation needed, no manual steps. Every conversation is captured end-to-end and stored immediately.",
    Illustration: IllusStep1Recording,
  },
  {
    title: "Full transcript paired automatically",
    description:
      "Each recording is automatically paired with a full transcript, with key terms highlighted and caller details extracted. Search by name, topic, or keyword instantly.",
    Illustration: IllusStep2Recording,
  },
  {
    title: "Organized library, always accessible",
    description:
      "Your entire call history is organized by date, caller, and topic. Access any recording or transcript in seconds — from anywhere, on any device.",
    Illustration: IllusStep3Recording,
  },
];

const benefits: Benefit[] = [
  {
    icon: Mic,
    title: "Automatic recording library",
    description:
      "Every call, organized by date and caller. No manual activation, no missing recordings, no extra setup.",
    MockUI: MockRecordingLibrary,
    wide: true,
  },
  {
    icon: Search,
    title: "Searchable by keyword",
    description:
      "Find any call by what was said — not just who called. Search across your entire history in seconds.",
    MockUI: MockSearchRecordings,
  },
  {
    icon: ShieldCheck,
    title: "Compliant storage",
    description:
      "Recordings are stored with end-to-end encryption and meet HIPAA, legal, and financial services compliance requirements.",
    MockUI: MockComplianceBadge,
  },
  {
    icon: BarChart3,
    title: "Team training library",
    description:
      "Share recordings with your team for onboarding, coaching, and quality review — real calls, not role-plays.",
    MockUI: MockTeamReview,
    wide: true,
  },
];

const industries = [
  "Healthcare providers",
  "Legal firms",
  "Insurance agencies",
  "Financial services",
  "Real estate",
  "Sales teams",
  "Customer service",
  "Property management",
  "Contractors",
  "HR departments",
  "Compliance teams",
  "Training departments",
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CallRecordingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-bg pt-[72px]">
        <SolutionHero
          eyebrow="Call Recording"
          titleBefore="Every conversation "
          titleHighlight="on record"
          subtitle="Tarsha AI records every call and pairs it with a full transcript — searchable, organized, and accessible whenever you need to verify a detail, train a team member, or resolve a dispute."
          MockUI={MockCallRecording}
        />
        <SolutionTestimonials
          eyebrow="Trusted by businesses like yours"
          testimonials={testimonials}
        />
        <SolutionIntro
          eyebrow="The capability"
          heading="The most useful business conversations aren't written down — but they should be"
          paragraphs={[
            "Most critical business conversations happen on the phone — quotes accepted, commitments made, details agreed. But unless someone is taking perfect notes, the details fade. When there's a dispute, a question, or a training opportunity, the recording is the only source of truth.",
            "Tarsha AI records every call and pairs it with a full, searchable transcript. Your entire call history is organized, instantly accessible, and protected. Review a call in the car. Train a new hire with a real example. Resolve a dispute in minutes.",
          ]}
          Illustration={IllusIntroCallRecording}
        />
        <SolutionHowItWorks
          heading="Every call captured, organized, and always accessible"
          steps={steps}
        />
        <SolutionBenefits
          eyebrow="What you get"
          heading="A complete, searchable record of every conversation"
          benefits={benefits}
        />
        <SolutionIndustries
          eyebrow="Who uses this"
          heading="Built for any business where conversations matter"
          industries={industries}
        />
        <SolutionCTA heading="Every call, on record. Every conversation, protected." />
      </main>
      <Footer />
    </>
  );
}
