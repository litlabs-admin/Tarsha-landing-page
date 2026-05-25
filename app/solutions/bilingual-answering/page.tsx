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
import { MockBilingualCall } from "@/components/solutions/mocks/MockBilingualCall";
import { motion } from "framer-motion";
import { Globe, Languages, MessageCircle, Route } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

// ─── Step illustrations ───────────────────────────────────────────────────────

function IllusLangDetect() {
  const items = [
    { flag: "🇺🇸", lang: "English" },
    { flag: "🇪🇸", lang: "Spanish" },
  ];
  return (
    <div className="space-y-2">
      {items.map(({ flag, lang }, i) => (
        <motion.div
          key={lang}
          initial={{ opacity: 0, x: 14 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.4, ease: EASE }}
          className="flex items-center gap-3 rounded-xl border border-border bg-surface px-3.5 py-2.5"
        >
          <span className="text-[18px]">{flag}</span>
          <span className="flex-1 text-[13px] font-medium text-ink">{lang}</span>
          <motion.span
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="rounded-full border border-green-200 bg-green-50 px-2 py-0.5 text-[10px] font-semibold text-green-700"
          >
            detected
          </motion.span>
        </motion.div>
      ))}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.25, duration: 0.4, ease: EASE }}
        className="rounded-xl border border-border bg-surface-muted/60 px-3.5 py-2.5"
      >
        <p className="text-[12px] text-ink">
          "Hola, me gustaría hacer una cita"
        </p>
        <span className="mt-1.5 inline-block rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 text-[10px] font-semibold text-ink">
          → Spanish detected
        </span>
      </motion.div>
    </div>
  );
}

function IllusLangSwitch() {
  return (
    <div className="space-y-2">
      {/* Spanish exchange */}
      <div className="flex flex-col gap-1.5">
        <div className="self-start rounded-xl border border-border bg-surface px-3 py-2 text-[12px] text-ink">
          ¿Tienen disponibilidad el viernes?
        </div>
        <div className="self-end rounded-xl bg-ink px-3 py-2 text-[12px] text-white">
          ¡Sí! Tenemos horarios disponibles el viernes.
        </div>
      </div>
      {/* Language switch indicator */}
      <div className="flex justify-center">
        <span className="rounded-full border border-border bg-surface-muted/60 px-2.5 py-0.5 text-[10px] font-medium text-ink-muted">
          🇪🇸 → 🇺🇸
        </span>
      </div>
      {/* English exchange */}
      <div className="flex flex-col gap-1.5">
        <div className="self-start rounded-xl border border-border bg-surface px-3 py-2 text-[12px] text-ink">
          Can I book for 2 PM?
        </div>
        <div className="self-end rounded-xl bg-ink px-3 py-2 text-[12px] text-white">
          Absolutely, 2 PM Friday is confirmed!
        </div>
      </div>
    </div>
  );
}

function IllusLangResult() {
  return (
    <div className="rounded-xl border border-accent/30 bg-accent/10 p-3.5">
      <p className="text-[13px] font-semibold text-ink">Booking confirmed</p>
      <p className="mt-0.5 text-[12px] text-ink-muted">
        Viernes 2:00 PM · Consulta · 45 min
      </p>
      <div className="mt-3 space-y-1.5">
        {[
          { label: "Language", value: "Spanish" },
          { label: "Routing", value: "correct" },
        ].map(({ label, value }) => (
          <div key={label} className="flex items-center gap-2">
            <span className="text-[10px] font-semibold uppercase tracking-wide text-ink-muted">
              {label}
            </span>
            <span className="rounded-full border border-green-200 bg-green-50 px-2 py-0.5 text-[10px] font-semibold text-green-700">
              {value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Intro illustration ───────────────────────────────────────────────────────

function IllusIntroBilingualProblem() {
  const calls = [
    {
      caller: "Maria called about an appointment",
      issue: "No Spanish support available",
    },
    {
      caller: "Carlos called about pricing",
      issue: "Couldn't communicate clearly",
    },
  ];
  return (
    <div className="space-y-2">
      {calls.map(({ caller, issue }, i) => (
        <motion.div
          key={caller}
          initial={{ opacity: 0, x: 14 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.12, duration: 0.4, ease: EASE }}
          className="flex items-start gap-2.5 rounded-xl border border-red-200 bg-red-50 p-3.5"
        >
          <span className="mt-0.5 shrink-0 text-[16px]">📞</span>
          <div className="flex-1 min-w-0">
            <p className="text-[12px] font-medium text-ink">{caller}</p>
            <p className="mt-0.5 text-[11px] text-ink-muted">{issue}</p>
          </div>
          <span className="shrink-0 rounded-full border border-red-200 bg-red-100 px-2 py-0.5 text-[10px] font-semibold text-red-700">
            Call dropped
          </span>
        </motion.div>
      ))}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.28, duration: 0.35, ease: EASE }}
        className="text-center text-[11px] text-ink-muted"
      >
        happens every day
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.38, duration: 0.4, ease: EASE }}
        className="flex gap-2.5 rounded-xl border border-border bg-surface-muted/60 px-3.5 py-2.5"
      >
        <span className="shrink-0 text-[15px]">⚠️</span>
        <p className="text-[12px] text-ink-muted">
          These callers called a competitor next
        </p>
      </motion.div>
    </div>
  );
}

// ─── Benefit mock UIs ─────────────────────────────────────────────────────────

function MockAutoDetect() {
  const items = [
    { flag: "🇺🇸", lang: "English" },
    { flag: "🇪🇸", lang: "Español" },
  ];
  return (
    <div className="mt-4 space-y-2">
      {items.map(({ flag, lang }, i) => (
        <motion.div
          key={lang}
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.35, ease: EASE }}
          className="flex items-center gap-3 rounded-xl border border-border bg-surface px-3.5 py-2.5"
        >
          <span className="text-[18px]">{flag}</span>
          <span className="flex-1 text-[13px] font-medium text-ink">{lang}</span>
          <span className="rounded-full border border-green-200 bg-green-50 px-2 py-0.5 text-[10px] font-semibold text-green-700">
            detected ✓
          </span>
        </motion.div>
      ))}
    </div>
  );
}

function MockFluency() {
  return (
    <div className="mt-4 space-y-3">
      {/* English exchange */}
      <div className="flex flex-col gap-1.5">
        <div className="self-start rounded-xl border border-border bg-surface px-3 py-2 text-[12px] text-ink">
          What are your hours?
        </div>
        <div className="self-end rounded-xl bg-ink px-3 py-2 text-[12px] text-white">
          We're open Monday to Friday, 9 AM to 6 PM.
        </div>
      </div>
      {/* Spanish exchange */}
      <div className="flex flex-col gap-1.5">
        <div className="self-start rounded-xl border border-border bg-surface px-3 py-2 text-[12px] text-ink">
          ¿Cuál es su horario?
        </div>
        <div className="self-end rounded-xl bg-ink px-3 py-2 text-[12px] text-white">
          Estamos abiertos de lunes a viernes, de 9 a 18 h.
        </div>
      </div>
    </div>
  );
}

function MockLangRouting() {
  return (
    <div className="mt-4 overflow-hidden rounded-xl border border-border bg-surface shadow-sm">
      <div className="border-b border-border bg-surface-muted/60 px-3.5 py-2 text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
        New message
      </div>
      {[
        { label: "Caller", value: "Sofia R." },
        { label: "Language", value: "Spanish → translated" },
        { label: "Reason", value: "Appointment inquiry" },
        { label: "Routed to", value: "Booking team" },
      ].map(({ label, value }) => (
        <div key={label} className="flex gap-3 border-b border-border px-3.5 py-2 last:border-0">
          <span className="w-16 shrink-0 text-[10px] text-ink-muted">{label}</span>
          <span className="text-[11px] text-ink">{value}</span>
        </div>
      ))}
    </div>
  );
}

function MockLangRoadmap() {
  const languages = [
    { flag: "🇺🇸", name: "English", status: "Live", live: true },
    { flag: "🇪🇸", name: "Spanish", status: "Live", live: true },
    { flag: "🇫🇷", name: "French", status: "Coming soon", live: false },
    { flag: "🇧🇷", name: "Portuguese", status: "Coming soon", live: false },
    { flag: "🇨🇳", name: "Mandarin", status: "In development", live: false },
  ];
  return (
    <div className="mt-4 space-y-2">
      {languages.map(({ flag, name, status, live }) => (
        <div
          key={name}
          className="flex items-center gap-3 rounded-xl border border-border bg-surface px-3.5 py-2.5"
        >
          <span className="text-[16px]">{flag}</span>
          <span className="flex-1 text-[12px] font-medium text-ink">{name}</span>
          <span
            className={
              live
                ? "rounded-full border border-green-200 bg-green-50 px-2 py-0.5 text-[10px] font-semibold text-green-700"
                : "rounded-full border border-border bg-surface-muted/60 px-2 py-0.5 text-[10px] font-medium text-ink-muted"
            }
          >
            {status}
          </span>
        </div>
      ))}
    </div>
  );
}

// ─── Page data ────────────────────────────────────────────────────────────────

const testimonials: TestimonialItem[] = [
  {
    quote:
      "Over 40% of our customers are Spanish speakers. Before Tarsha, they'd hang up because no one could help them. Now every Spanish-speaking caller gets the same service as everyone else, they actually comment on how impressed they are.",
    author: "Maria G.",
    role: "Owner",
    company: "Casa Verde Restaurant",
    avatarUrl: "https://i.pravatar.cc/150?img=21",
  },
  {
    quote:
      "Our practice has a large Hispanic patient base. Bilingual staff are hard to find and expensive. Tarsha handles Spanish calls perfectly, appointment booking, FAQs, everything, without us needing to hire anyone additional.",
    author: "Dr. Carlos R.",
    role: "Practice Director",
    company: "Sunrise Family Health",
    avatarUrl: "https://i.pravatar.cc/150?img=56",
  },
  {
    quote:
      "Many of our tenants speak Spanish as a first language. Maintenance requests, lease questions, payment issues, they used to need a translator. Tarsha handles all of it fluently and routes correctly. Tenant satisfaction is up significantly.",
    author: "Elena M.",
    role: "Operations Manager",
    company: "Vista Property Group",
    avatarUrl: "https://i.pravatar.cc/150?img=35",
  },
];

const steps = [
  {
    title: "Caller speaks, Tarsha listens",
    description:
      "Within the first sentence, Tarsha detects whether the caller is speaking English or Spanish and responds immediately in the same language, no prompts, no menus, no awkward pauses.",
    Illustration: IllusLangDetect,
  },
  {
    title: "Natural conversation, their language",
    description:
      "Tarsha holds a fully natural conversation in the caller's language, answering questions, booking appointments, qualifying leads, and routing calls, exactly as it would in English.",
    Illustration: IllusLangSwitch,
  },
  {
    title: "Same outcome, every time",
    description:
      "Every caller gets the same result regardless of language. Bookings confirmed, questions answered, leads captured, and you receive the same clean summary, in English.",
    Illustration: IllusLangResult,
  },
];

const benefits: Benefit[] = [
  {
    icon: Languages,
    title: "Auto language detection",
    description:
      "Identifies the caller's language from the first sentence. No 'press 1 for English', just a seamless, natural experience from the first word.",
    MockUI: MockAutoDetect,
    wide: true,
  },
  {
    icon: MessageCircle,
    title: "Native fluency in English & Spanish",
    description:
      "Not translated in real time, natively trained in both languages with natural phrasing, correct idioms, and the right professional tone.",
    MockUI: MockFluency,
  },
  {
    icon: Route,
    title: "Language-accurate routing",
    description:
      "Captures and routes caller information correctly regardless of language. Bilingual call summaries delivered to your inbox in English.",
    MockUI: MockLangRouting,
  },
  {
    icon: Globe,
    title: "More languages coming",
    description:
      "English and Spanish are live. French, Portuguese, and Mandarin are in development, giving you coverage across the widest possible customer base.",
    MockUI: MockLangRoadmap,
    wide: true,
  },
];

const industries = [
  "Restaurants & cafes",
  "Medical practices",
  "Legal firms",
  "Real estate",
  "Home services",
  "Hotels & hospitality",
  "Auto services",
  "Property management",
  "Insurance agencies",
  "Dental practices",
  "Retail stores",
  "Educational services",
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BilingualAnsweringPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-bg pt-[72px]">
        <SolutionHero
          eyebrow="Bilingual Answering"
          titleBefore="Every caller feels at home, "
          titleHighlight="in any language"
          subtitle="Tarsha AI speaks English and Spanish natively, detecting the caller's language from the first word and switching automatically. Every caller gets the same warm, professional experience, 24/7."
          MockUI={MockBilingualCall}
        />
        <SolutionTestimonials
          eyebrow="Trusted by businesses like yours"
          testimonials={testimonials}
        />
        <SolutionIntro
          eyebrow="The problem"
          heading="Language barriers cost you customers"
          paragraphs={[
            "When a Spanish-speaking caller reaches an English-only business, they don't wait, they hang up and call someone else. For businesses in diverse markets, this isn't an edge case. It's a consistent gap in service that costs real revenue.",
            "Tarsha AI detects language from the very first word and responds naturally, no menu selection, no awkward pauses, no putting callers on hold to find someone bilingual. The same professional experience, in the caller's language, every single time.",
          ]}
          Illustration={IllusIntroBilingualProblem}
        />
        <SolutionHowItWorks
          heading="Answer every caller in their own language"
          steps={steps}
        />
        <SolutionBenefits
          eyebrow="What you get"
          heading="Full bilingual coverage, zero extra headcount"
          benefits={benefits}
        />
        <SolutionIndustries
          eyebrow="Who uses this"
          heading="Built for any business serving a diverse community"
          industries={industries}
        />
        <SolutionCTA heading="Speak every customer's language, starting today." />
      </main>
      <Footer />
    </>
  );
}
