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
import { MockWhatsAppChat } from "@/components/solutions/mocks/MockWhatsAppChat";
import { motion } from "framer-motion";
import { ArrowUpRight, CalendarCheck, Globe, MessageCircle } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

// ─── Step illustrations ───────────────────────────────────────────────────────

function IllusWhatsAppIncoming() {
  return (
    <div className="overflow-hidden rounded-xl bg-[#ECE5DD] p-3.5">
      {/* Customer bubble */}
      <div className="flex justify-start">
        <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-white px-3.5 py-2.5 shadow-sm">
          <p className="text-[13px] text-[#111]">Hi, I'd like to know about your services and pricing</p>
        </div>
      </div>

      {/* Typing indicator */}
      <div className="mt-3 flex justify-end">
        <div className="flex items-center gap-2 rounded-2xl rounded-tr-sm bg-[#DCF8C6] px-3.5 py-2.5 shadow-sm">
          <span className="text-[12px] text-[#555]">Tarsha AI is typing</span>
          <div className="flex items-end gap-[3px]">
            {[0, 0.15, 0.3].map((delay, i) => (
              <motion.span
                key={i}
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 0.7, repeat: Infinity, delay, ease: "easeInOut" }}
                className="block h-1.5 w-1.5 rounded-full bg-[#555]"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function IllusWhatsAppHandles() {
  return (
    <div className="space-y-2.5">
      <div className="overflow-hidden rounded-xl bg-[#ECE5DD] p-3">
        {/* Exchange 1 */}
        <div className="flex justify-start">
          <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-white px-3 py-2 shadow-sm">
            <p className="text-[12px] text-[#111]">Do you offer weekend slots?</p>
          </div>
        </div>
        <div className="mt-2 flex justify-end">
          <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-[#DCF8C6] px-3 py-2 shadow-sm">
            <p className="text-[12px] text-[#111]">
              Yes! We have Saturday 10 AM, 12 PM, and 2 PM available this week.
            </p>
          </div>
        </div>
      </div>

      {/* Capability pills */}
      <div className="flex flex-wrap gap-1.5">
        {["Questions", "Booking", "Routing"].map((label, i) => (
          <motion.span
            key={label}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.3, ease: EASE }}
            className="rounded-full border border-border bg-surface px-2.5 py-0.5 text-[11px] font-medium text-ink"
          >
            {label}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

function IllusWhatsAppConfirm() {
  return (
    <div className="space-y-2.5">
      {/* Confirmation bubble */}
      <div className="overflow-hidden rounded-xl bg-[#ECE5DD] p-3">
        <div className="flex justify-end">
          <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-[#DCF8C6] px-3.5 py-2.5 shadow-sm">
            <p className="text-[13px] font-medium text-[#111]">
              Your appointment is confirmed for Saturday, 10:00 AM ✓
            </p>
            <p className="mt-1 text-[12px] text-[#555]">
              You'll receive a reminder 24 hours before.
            </p>
          </div>
        </div>
      </div>

      {/* Status grid */}
      <div className="grid grid-cols-2 gap-2">
        {[
          { label: "Calendar ✓ added" },
          { label: "Reminder ✓ set" },
        ].map(({ label }) => (
          <div
            key={label}
            className="rounded-xl border border-green-200 bg-green-50 px-3 py-2 text-center text-[12px] font-medium text-green-700"
          >
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Intro illustration ───────────────────────────────────────────────────────

function IllusIntroWhatsAppGap() {
  const messages = [
    { text: "Hi, are you open today?", time: "3 hrs ago", badge: "Unread", badgeColor: "red" as const },
    { text: "I'd like to book an appointment", time: "1.5 hrs ago", badge: "Unread", badgeColor: "red" as const },
    { text: "Anyone there?", time: "47 min ago", badge: "Unread", badgeColor: "amber" as const },
  ];

  return (
    <div className="space-y-2">
      <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-muted">
        Unread WhatsApp messages
      </p>
      {messages.map(({ text, time, badge, badgeColor }, i) => (
        <motion.div
          key={text}
          initial={{ opacity: 0, x: 14 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.4, ease: EASE }}
          className="flex items-center gap-3 rounded-xl border border-border bg-surface p-3"
        >
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#25D366]/15 text-[13px]">
            💬
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[12px] font-medium text-ink truncate">{text}</p>
            <p className="text-[11px] text-ink-muted">{time}</p>
          </div>
          <span
            className={
              badgeColor === "red"
                ? "shrink-0 rounded-full border border-red-200 bg-red-50 px-2 py-0.5 text-[10px] font-semibold text-red-600"
                : "shrink-0 rounded-full border border-amber-200 bg-amber-50 px-2 py-0.5 text-[10px] font-semibold text-amber-600"
            }
          >
            {badge}
          </span>
        </motion.div>
      ))}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.4, ease: EASE }}
        className="flex gap-2.5 rounded-xl border border-border bg-surface-muted/60 px-3.5 py-2.5"
      >
        <span className="text-[15px]">⚠️</span>
        <p className="text-[12px] text-ink-muted">
          3 customers waiting · Average wait: 2.5 hours
        </p>
      </motion.div>
    </div>
  );
}

// ─── Benefit mock UIs ─────────────────────────────────────────────────────────

function MockInstantResponse() {
  return (
    <div className="mt-4 space-y-2">
      <div className="overflow-hidden rounded-xl bg-[#ECE5DD] p-3">
        <div className="flex justify-start">
          <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-white px-3.5 py-2.5 shadow-sm">
            <p className="text-[13px] text-[#111]">What are your prices for a full set?</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between rounded-xl border border-accent/30 bg-accent/10 px-3.5 py-2.5">
        <span className="text-[13px] text-ink">Tarsha replied</span>
        <span className="text-[13px] font-bold text-ink">&lt; 1 second</span>
      </div>
    </div>
  );
}

function MockInChatBooking() {
  return (
    <div className="mt-4 space-y-2.5">
      <div className="rounded-xl border border-accent/30 bg-accent/10 p-4">
        <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-ink-muted">
          Booked in WhatsApp
        </p>
        <p className="mt-1.5 text-[13px] font-semibold text-ink">
          Saturday · 10:00 AM · Full set · 90 min
        </p>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {["Calendar ✓", "Confirmed ✓"].map((label) => (
          <div
            key={label}
            className="rounded-xl border border-green-200 bg-green-50 px-3 py-2 text-center text-[12px] font-medium text-green-700"
          >
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}

function MockWhatsAppBilingual() {
  return (
    <div className="mt-4 space-y-2">
      {/* English exchange */}
      <div className="overflow-hidden rounded-xl bg-[#ECE5DD] p-2.5">
        <div className="flex justify-start">
          <div className="rounded-2xl rounded-tl-sm bg-white px-3 py-2 shadow-sm">
            <p className="text-[12px] text-[#111]">When do you close today?</p>
          </div>
        </div>
        <div className="mt-1.5 flex justify-end">
          <div className="rounded-2xl rounded-tr-sm bg-[#DCF8C6] px-3 py-2 shadow-sm">
            <p className="text-[12px] text-[#111]">We close at 7 PM tonight!</p>
          </div>
        </div>
      </div>

      {/* Spanish exchange */}
      <div className="overflow-hidden rounded-xl bg-[#ECE5DD] p-2.5">
        <div className="flex justify-start">
          <div className="rounded-2xl rounded-tl-sm bg-white px-3 py-2 shadow-sm">
            <p className="text-[12px] text-[#111]">¿A qué hora cierran?</p>
          </div>
        </div>
        <div className="mt-1.5 flex justify-end">
          <div className="rounded-2xl rounded-tr-sm bg-[#DCF8C6] px-3 py-2 shadow-sm">
            <p className="text-[12px] text-[#111]">¡Cerramos a las 7 PM hoy!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MockWhatsAppHandoff() {
  return (
    <div className="mt-4 space-y-2">
      <div className="rounded-xl border border-border bg-surface p-3.5">
        <p className="text-[12px] text-ink-muted">
          Customer: <span className="font-medium text-ink">"I have a complaint about my last visit"</span>
        </p>
        <p className="mt-1.5 text-[12px] text-ink-muted">Escalating to team with full context</p>
      </div>
      <div className="flex items-center gap-2.5 rounded-xl border border-accent/30 bg-accent/10 px-3.5 py-2.5">
        <ArrowUpRight className="h-4 w-4 shrink-0 text-ink/60" strokeWidth={1.5} />
        <span className="text-[12px] font-medium text-ink">
          Full thread handed to support team · instantly
        </span>
      </div>
    </div>
  );
}

// ─── Page data ────────────────────────────────────────────────────────────────

const testimonials: TestimonialItem[] = [
  {
    quote:
      "Our customers are young and they don't call, they message. Since adding Tarsha to our WhatsApp, we've seen booking requests triple. It answers instantly, books them in, and sends a confirmation, all without us touching a phone.",
    author: "Priya K.",
    role: "Owner",
    company: "Bloom Beauty Studio",
    avatarUrl: "https://i.pravatar.cc/150?img=48",
  },
  {
    quote:
      "We get a huge volume of 'are you open?' and 'what's on the menu?' messages on WhatsApp. Tarsha handles all of them in English and Spanish, 24/7. Our team went from juggling messages all day to focusing entirely on food and service.",
    author: "Michael O.",
    role: "Owner",
    company: "The Golden Fork",
    avatarUrl: "https://i.pravatar.cc/150?img=20",
  },
  {
    quote:
      "Buyers send WhatsApp messages at all hours asking about listings. Tarsha answers every single one, qualifies the lead, and schedules viewings automatically. I've closed two deals from leads that came in at 11 PM, deals I would have missed before.",
    author: "Rachel S.",
    role: "Senior Agent",
    company: "Horizon Real Estate",
    avatarUrl: "https://i.pravatar.cc/150?img=36",
  },
];

const steps = [
  {
    title: "Customer messages your WhatsApp",
    description:
      "No forms, no phone calls, no waiting. The customer sends a message and Tarsha AI responds instantly, 24/7, in English or Spanish, with the same professional experience every time.",
    Illustration: IllusWhatsAppIncoming,
  },
  {
    title: "Full conversation handled",
    description:
      "Tarsha understands intent, answers questions from your knowledge base, and books appointments, all within the WhatsApp thread. No switching apps, no friction.",
    Illustration: IllusWhatsAppHandles,
  },
  {
    title: "Confirmed in the chat",
    description:
      "Bookings are locked in and confirmed inside WhatsApp. Reminders go out automatically. Complex issues are escalated to your team with full conversation context attached.",
    Illustration: IllusWhatsAppConfirm,
  },
];

const benefits: Benefit[] = [
  {
    icon: MessageCircle,
    title: "Instant WhatsApp responses",
    description:
      "No delays, no bots with slow menus, a natural, helpful conversation from the first message, around the clock.",
    MockUI: MockInstantResponse,
    wide: true,
  },
  {
    icon: CalendarCheck,
    title: "Bookings inside the chat",
    description:
      "Customers never leave WhatsApp. Tarsha checks availability, offers slots, confirms the booking, and sends reminders, entirely in-thread.",
    MockUI: MockInChatBooking,
  },
  {
    icon: Globe,
    title: "English & Spanish",
    description:
      "Tarsha responds in the customer's language automatically, no language selection needed, no separate number required.",
    MockUI: MockWhatsAppBilingual,
  },
  {
    icon: ArrowUpRight,
    title: "Seamless human handoff",
    description:
      "When a conversation needs a human, Tarsha hands it off instantly, with the complete message history and a context summary so your team picks up without missing a beat.",
    MockUI: MockWhatsAppHandoff,
    wide: true,
  },
];

const industries = [
  "Restaurants & cafes",
  "Salons & spas",
  "Real estate",
  "E-commerce",
  "Healthcare",
  "Hotels & hospitality",
  "Fitness studios",
  "Legal practices",
  "Insurance agencies",
  "Financial services",
  "Retail stores",
  "Home services",
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function WhatsAppIntegrationPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-bg pt-[72px]">
        <SolutionHero
          eyebrow="WhatsApp Integration"
          titleBefore="Your AI receptionist, "
          titleHighlight="now on WhatsApp"
          subtitle="Tarsha AI handles customer conversations on WhatsApp, answering questions, booking appointments, and routing inquiries automatically. Same intelligence as the phone, in the chat."
          MockUI={MockWhatsAppChat}
        />
        <SolutionTestimonials
          eyebrow="Trusted by businesses like yours"
          testimonials={testimonials}
        />
        <SolutionIntro
          eyebrow="The problem"
          heading="Customers prefer to message. Most businesses aren't ready."
          paragraphs={[
            "WhatsApp has over 2 billion users. For a growing number of customers, especially younger and international audiences, messaging is the default way they reach out. Businesses that only offer phone support are invisible to this segment.",
            "Tarsha AI connects to your WhatsApp Business account and handles conversations automatically. Questions get instant answers. Appointments get booked in the thread. Leads get qualified. Complex issues get escalated to your team with full context. Same intelligence as the phone, now in the chat.",
          ]}
          Illustration={IllusIntroWhatsAppGap}
        />
        <SolutionHowItWorks
          heading="Answer every message without lifting a finger"
          steps={steps}
        />
        <SolutionBenefits
          eyebrow="What you get"
          heading="Everything customers expect, delivered in the chat"
          benefits={benefits}
        />
        <SolutionIndustries
          eyebrow="Who uses this"
          heading="Built for any business customers message on WhatsApp"
          industries={industries}
        />
        <SolutionCTA heading="Meet your customers where they already are." />
      </main>
      <Footer />
    </>
  );
}
