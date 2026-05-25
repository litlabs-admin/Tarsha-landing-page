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
import { MockRestaurantReservation } from "@/components/solutions/mocks/MockRestaurantReservation";
import { motion } from "framer-motion";
import { Clock, Globe, PhoneForwarded, UtensilsCrossed } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

// ─── Step illustrations ───────────────────────────────────────────────────────

function IllusStep1Restaurant() {
  const messages = [
    { speaker: "Caller", text: "Do you have a table for 4 on Saturday at 7?" },
    { speaker: "Tarsha AI", text: "Yes! I can book you for Saturday the 22nd at 7 PM. May I get your name?" },
  ];
  return (
    <div className="space-y-3">
      {messages.map(({ speaker, text }, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 + i * 0.18, duration: 0.4, ease: EASE }}
          className="flex items-start gap-3"
        >
          <span
            className={`mt-0.5 w-16 shrink-0 text-[11px] font-semibold ${
              speaker === "Tarsha AI" ? "text-accent-ink/70" : "text-ink-muted"
            }`}
          >
            {speaker}
          </span>
          <p className="text-[13px] leading-relaxed text-ink">{text}</p>
        </motion.div>
      ))}
    </div>
  );
}

function IllusStep2Restaurant() {
  return (
    <div className="space-y-2">
      <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-sm">
        <div className="border-b border-border bg-surface-muted/60 px-3.5 py-2 text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
          Booking confirmation
        </div>
        <div className="px-3.5 py-3">
          <p className="text-[14px] font-semibold text-ink">Table for 4 confirmed</p>
          <p className="text-[12px] text-ink-muted mt-0.5">Saturday May 22 · 7:00 PM</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.35, ease: EASE }}
          className="rounded-xl border border-accent/30 bg-accent/10 px-3 py-2 text-center"
        >
          <p className="text-[11px] font-semibold text-ink">Reservation added</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.35, ease: EASE }}
          className="rounded-xl border border-border bg-surface px-3 py-2 text-center"
        >
          <p className="text-[11px] font-semibold text-ink">Confirmation sent</p>
        </motion.div>
      </div>
    </div>
  );
}

function IllusStep3Restaurant() {
  const pairs = [
    {
      label: "English",
      caller: "Are you open Sunday?",
      tarsha: "Yes, we're open Sunday 11 AM to 9 PM!",
    },
    {
      label: "Español",
      caller: "¿Abren el domingo?",
      tarsha: "¡Sí, abrimos el domingo de 11 a 21 h!",
    },
  ];
  return (
    <div className="space-y-3">
      {pairs.map(({ label, caller, tarsha }, i) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15, duration: 0.4, ease: EASE }}
          className="rounded-xl border border-border bg-surface p-3 space-y-1.5"
        >
          <span className="inline-block rounded-full border border-border bg-surface-muted/60 px-2 py-0.5 text-[10px] font-semibold text-ink-muted">
            {label}
          </span>
          <div className="flex items-start gap-2">
            <span className="w-14 shrink-0 text-[10px] text-ink-muted">Caller</span>
            <p className="text-[12px] text-ink">{caller}</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="w-14 shrink-0 text-[10px] font-semibold text-accent-ink/70">Tarsha</span>
            <p className="text-[12px] text-ink">{tarsha}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// ─── Intro illustration ───────────────────────────────────────────────────────

function IllusIntroRestaurant() {
  const callItems = [
    { emoji: "💬", text: "Are you open for lunch?", badge: "×18 today", amber: true },
    { emoji: "💬", text: "Do you have vegetarian options?", badge: null, amber: false },
    { emoji: "💬", text: "What time do you close?", badge: "×12 today", amber: true },
    { emoji: "💬", text: "Can I make a reservation?", badge: null, amber: false },
  ];
  return (
    <div className="space-y-2">
      <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-muted">
        Today's incoming calls
      </p>
      {callItems.map(({ emoji, text, badge, amber }, i) => (
        <motion.div
          key={text}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.4, ease: EASE }}
          className="flex items-center gap-3 rounded-xl border border-border bg-surface p-3"
        >
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface-muted text-[14px]">
            {emoji}
          </div>
          <p className="flex-1 min-w-0 text-[12px] font-medium text-ink truncate">{text}</p>
          {badge && (
            <span
              className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                amber
                  ? "border border-amber-200 bg-amber-50 text-amber-700"
                  : "border border-border bg-surface-muted/60 text-ink-muted"
              }`}
            >
              {badge}
            </span>
          )}
        </motion.div>
      ))}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.45, duration: 0.4, ease: EASE }}
        className="flex items-center gap-2.5 rounded-xl border border-border bg-surface-muted/60 px-3.5 py-2.5"
      >
        <span className="text-[15px]">⏱️</span>
        <p className="text-[12px] text-ink-muted">
          ~1.5 hrs of staff time per day on routine questions
        </p>
      </motion.div>
    </div>
  );
}

// ─── Benefit mock UIs ─────────────────────────────────────────────────────────

function MockMenuFAQ() {
  const faqs = [
    { q: "What time do you close?", ms: "0.3s" },
    { q: "Do you have vegan options?", ms: "0.4s" },
    { q: "Is there parking nearby?", ms: "0.2s" },
    { q: "Do you accept reservations?", ms: "0.3s" },
  ];
  return (
    <div className="mt-4 space-y-2">
      {faqs.map(({ q, ms }, i) => (
        <motion.div
          key={q}
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.09, duration: 0.35, ease: EASE }}
          className="flex items-center justify-between rounded-xl border border-border bg-surface px-3.5 py-2.5"
        >
          <p className="text-[12px] text-ink">{q}</p>
          <span className="ml-3 shrink-0 rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 text-[10px] font-semibold text-ink">
            {ms}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

function MockReservationFlow() {
  return (
    <div className="mt-4 space-y-2">
      <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-sm">
        <div className="border-b border-border bg-surface-muted/60 px-4 py-2 text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
          Reservation
        </div>
        <div className="px-4 py-3">
          <p className="text-[13px] font-semibold text-ink">Table for 2</p>
          <p className="text-[11px] text-ink-muted mt-0.5">Friday May 23 · 8:00 PM</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-xl border border-accent/30 bg-accent/10 px-3 py-2 text-center">
          <p className="text-[11px] font-semibold text-ink">Confirmed</p>
        </div>
        <div className="rounded-xl border border-border bg-surface px-3 py-2 text-center">
          <p className="text-[11px] font-semibold text-ink">Reminder set</p>
        </div>
      </div>
    </div>
  );
}

function MockBilingualRestaurant() {
  const pairs = [
    { caller: "Are you open Sunday?", tarsha: "Yes, we're open Sunday 11 AM to 9 PM!", lang: "EN" },
    { caller: "¿Abren el domingo?", tarsha: "¡Sí, abrimos el domingo de 11 a 21 h!", lang: "ES" },
  ];
  return (
    <div className="mt-4 space-y-3">
      {pairs.map(({ caller, tarsha, lang }, i) => (
        <motion.div
          key={lang}
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.14, duration: 0.38, ease: EASE }}
          className="rounded-xl border border-border bg-surface p-3 space-y-1.5"
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-ink-muted">Caller</span>
            <span className="rounded-full border border-border bg-surface-muted/60 px-2 py-0.5 text-[10px] font-semibold text-ink-muted">
              {lang}
            </span>
          </div>
          <p className="text-[12px] text-ink">{caller}</p>
          <p className="text-[11px] text-ink-muted">Tarsha:</p>
          <p className="text-[12px] text-ink">{tarsha}</p>
        </motion.div>
      ))}
    </div>
  );
}

function MockPeakOverflow() {
  return (
    <div className="mt-4 space-y-2">
      <div className="flex items-center justify-between rounded-xl border border-border bg-surface px-4 py-3">
        <div>
          <p className="text-[12px] font-semibold text-ink">Peak hours · Friday 7 PM</p>
          <p className="text-[11px] text-red-600 mt-0.5">Line 1 busy · 3 active calls</p>
        </div>
        <motion.span
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.4, repeat: Infinity }}
          className="h-2.5 w-2.5 rounded-full bg-red-500 shadow-[0_0_0_4px_rgba(239,68,68,0.15)]"
        />
      </div>
      <div className="flex items-center gap-2.5 rounded-xl border border-accent/30 bg-accent/10 px-4 py-2.5">
        <motion.span
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="h-1.5 w-1.5 shrink-0 rounded-full bg-green-500"
        />
        <p className="text-[12px] font-medium text-ink">
          All calls answered by Tarsha · no hold time
        </p>
      </div>
    </div>
  );
}

// ─── Page data ────────────────────────────────────────────────────────────────

const testimonials: TestimonialItem[] = [
  {
    quote:
      "We get 80 calls a day asking if we're open, what's on the menu, and if we do takeout. My staff was spending more time on the phone than on the floor. Tarsha handles every single one instantly. I estimated we saved 2.5 hours of staff time every single day.",
    author: "Tony V.",
    role: "Owner",
    company: "Russo's Trattoria",
    avatarUrl: "https://i.pravatar.cc/150?img=57",
  },
  {
    quote:
      "Half our customers speak Spanish. We couldn't always find bilingual staff for every shift. Tarsha answers in whichever language the caller uses, automatically. Our Spanish-speaking regulars love it, and our Yelp reviews even mention the phone experience now.",
    author: "Rosa M.",
    role: "Owner & Head Chef",
    company: "La Cocina de Rosa",
    avatarUrl: "https://i.pravatar.cc/150?img=45",
  },
  {
    quote:
      "Friday and Saturday evenings we're overwhelmed. The phone rings constantly for reservations and we physically can't answer. Tarsha takes every reservation call, confirms the booking, and texts a confirmation. We went from turning people away to being fully booked.",
    author: "James K.",
    role: "General Manager",
    company: "The Copper Pan",
    avatarUrl: "https://i.pravatar.cc/150?img=33",
  },
];

const steps = [
  {
    title: "Questions answered instantly",
    description:
      "Hours, menu, dietary options, parking, directions, Tarsha knows your restaurant inside and out and answers any question in seconds, without pulling anyone from the floor.",
    Illustration: IllusStep1Restaurant,
  },
  {
    title: "Reservations taken automatically",
    description:
      "Callers can book a table directly over the phone. Tarsha checks availability, confirms the reservation, and sends a reminder, all within the call.",
    Illustration: IllusStep2Restaurant,
  },
  {
    title: "Bilingual from the first word",
    description:
      "English and Spanish speakers both get the same fast, natural experience. Tarsha detects the language automatically and responds without any prompts or menus.",
    Illustration: IllusStep3Restaurant,
  },
];

const benefits: Benefit[] = [
  {
    icon: UtensilsCrossed,
    title: "24/7 menu & FAQ answers",
    description:
      "Hours, menu items, dietary info, directions, answered instantly, around the clock, without any staff involvement.",
    MockUI: MockMenuFAQ,
    wide: true,
  },
  {
    icon: Clock,
    title: "Reservation taking",
    description:
      "Book tables directly over the phone. Tarsha confirms reservations and sends reminders, reducing no-shows automatically.",
    MockUI: MockReservationFlow,
  },
  {
    icon: Globe,
    title: "English & Spanish",
    description:
      "Tarsha switches languages automatically based on how the caller speaks, no button presses, no separate number needed.",
    MockUI: MockBilingualRestaurant,
  },
  {
    icon: PhoneForwarded,
    title: "Peak-hour overflow",
    description:
      "When the restaurant is slammed and the phone won't stop ringing, Tarsha handles overflow calls so nothing falls through the cracks.",
    MockUI: MockPeakOverflow,
    wide: true,
  },
];

const industries = [
  "Cafes & coffee shops",
  "Bars & pubs",
  "Food trucks",
  "Catering companies",
  "Bakeries",
  "Fine dining",
  "Fast casual",
  "Hotels & hospitality",
  "Event venues",
  "Takeout & delivery",
  "Grocery & deli",
  "Wine bars",
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function RestaurantsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-bg pt-[72px]">
        <SolutionHero
          eyebrow="Restaurants & Cafes"
          titleBefore="Answer every table question "
          titleHighlight="without leaving the kitchen"
          subtitle="Tarsha AI handles reservations, menu questions, and hours inquiries so your staff can focus on food and service, in English and Spanish, 24/7."
          MockUI={MockRestaurantReservation}
        />
        <SolutionTestimonials
          eyebrow="Trusted by restaurants like yours"
          testimonials={testimonials}
        />
        <SolutionIntro
          eyebrow="The problem"
          heading="Your staff should be serving, not answering phones"
          paragraphs={[
            "Restaurant phones ring all day, the same questions, over and over. Are you open? Do you have gluten-free options? Can I make a reservation for Saturday? Every time a staff member picks up that phone, they're not taking an order, running food, or serving a table.",
            "Tarsha AI answers every call instantly, reservations, menu questions, dietary info, hours, directions. In English and Spanish. It takes bookings directly into your calendar and handles peak-hour overflow when your line is ringing off the hook.",
          ]}
          Illustration={IllusIntroRestaurant}
        />
        <SolutionHowItWorks
          heading="Handle every call without leaving the floor"
          steps={steps}
        />
        <SolutionBenefits
          eyebrow="What you get"
          heading="Everything your host stand needs, fully automated"
          benefits={benefits}
        />
        <SolutionIndustries
          eyebrow="Who else uses Tarsha"
          heading="Built for every kind of food and hospitality business"
          industries={industries}
        />
        <SolutionCTA heading="Keep your staff on the floor and every caller answered." />
      </main>
      <Footer />
    </>
  );
}
