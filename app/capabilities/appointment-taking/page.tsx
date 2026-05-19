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
import { MockAppointmentFlow } from "@/components/solutions/mocks/MockAppointmentFlow";
import { cn } from "@/lib/cn";
import { motion } from "framer-motion";
import { Bell, CalendarCheck, RefreshCw, Settings } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

// ─── Step illustrations ───────────────────────────────────────────────────────

function IllusStep1Appt() {
  const slots = [
    { time: "9:00 AM", open: true },
    { time: "10:30 AM", open: false },
    { time: "11:00 AM", open: true },
    { time: "2:00 PM", open: true, selected: true },
    { time: "3:30 PM", open: true },
    { time: "5:00 PM", open: false },
  ];
  return (
    <div className="space-y-2.5">
      <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
        Available today
      </p>
      <div className="grid grid-cols-3 gap-1.5">
        {slots.map(({ time, open, selected }, i) => (
          <motion.div
            key={time}
            initial={{ opacity: 0, scale: 0.88 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07, duration: 0.35, ease: EASE }}
            className={cn(
              "flex items-center justify-center rounded-lg border py-2.5 text-[11px] font-medium",
              selected
                ? "border-accent bg-accent text-accent-ink shadow-sm"
                : open
                  ? "border-border bg-surface text-ink"
                  : "cursor-not-allowed border-border/50 bg-surface-muted/40 text-ink/25",
            )}
          >
            {time}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function IllusStep2Appt() {
  const lines = [
    { speaker: "Caller", text: "I'd like to book a consultation for next week" },
    { speaker: "Tarsha AI", text: "I have Thursday at 10 AM or Friday at 2 PM available. Which works for you?" },
  ];
  return (
    <div className="space-y-2.5">
      {lines.map(({ speaker, text }, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 + i * 0.2, duration: 0.4, ease: EASE }}
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

function IllusStep3Appt() {
  const reminders = [
    { label: "Email confirmation", status: "sent" },
    { label: "SMS reminder", detail: "24hrs before", status: "sent" },
    { label: "Final reminder", detail: "1hr before", status: "scheduled" },
  ];
  return (
    <div className="space-y-2">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.38, ease: EASE }}
        className="rounded-xl border border-accent/30 bg-accent/10 p-3"
      >
        <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
          Booking confirmed
        </p>
        <p className="mt-1 text-[13px] font-bold text-ink">Thu Jun 19 · 10:00 AM · Consultation</p>
      </motion.div>
      {reminders.map(({ label, detail, status }, i) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 + i * 0.1, duration: 0.35, ease: EASE }}
          className="flex items-center gap-3 rounded-lg border border-border bg-surface px-3 py-2"
        >
          <div className="flex-1 min-w-0">
            <p className="text-[12px] font-medium text-ink">{label}</p>
            {detail && <p className="text-[11px] text-ink-muted">{detail}</p>}
          </div>
          <span className={`text-[11px] font-semibold ${status === "sent" ? "text-green-600" : "text-ink-muted"}`}>
            {status === "sent" ? "→ sent" : "→ scheduled"}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

// ─── Intro illustration ───────────────────────────────────────────────────────

function IllusIntroAppointment() {
  const rows = [
    { label: "Check calendar availability", cost: "1–2 min" },
    { label: "Offer and negotiate times", cost: "2–3 min" },
    { label: "Confirm and log the booking", cost: "1–2 min" },
    { label: "Send confirmation manually", cost: "1–2 min" },
  ];
  return (
    <div className="space-y-2">
      <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-muted">
        Average booking call · manual process
      </p>
      {rows.map(({ label, cost }, i) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, x: 14 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.4, ease: EASE }}
          className="flex items-center gap-3 rounded-xl border border-border bg-surface p-3"
        >
          <span className="text-[14px]">⏱️</span>
          <p className="flex-1 text-[12px] text-ink">{label}</p>
          <span className="shrink-0 rounded-md bg-surface-muted px-2 py-0.5 text-[11px] font-semibold text-ink-muted">
            {cost}
          </span>
        </motion.div>
      ))}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.45, duration: 0.4, ease: EASE }}
        className="rounded-xl border border-border bg-surface-muted/60 px-3.5 py-2.5"
      >
        <p className="text-[12px] font-semibold text-ink">~5–9 min per booking</p>
        <p className="mt-0.5 text-[11px] text-ink-muted">20 bookings/day = 2.5 hrs of staff time</p>
      </motion.div>
    </div>
  );
}

// ─── Benefit mock UIs ─────────────────────────────────────────────────────────

function MockRealTimeCalendar() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const booked = [1, 3];
  return (
    <div className="mt-4 space-y-2">
      <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
        This week · available slots
      </p>
      <div className="grid grid-cols-5 gap-1.5">
        {days.map((day, i) => (
          <motion.div
            key={day}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07, duration: 0.35, ease: EASE }}
            className={`flex flex-col items-center rounded-lg border py-2 text-[11px] font-medium ${
              booked.includes(i)
                ? "border-border bg-surface-muted/60 text-ink/30"
                : "border-border bg-surface text-ink"
            }`}
          >
            <span>{day}</span>
            <span className={`mt-0.5 text-[10px] ${booked.includes(i) ? "text-ink/20" : "text-green-600"}`}>
              {booked.includes(i) ? "full" : "open"}
            </span>
          </motion.div>
        ))}
      </div>
      <div className="flex items-center gap-2 rounded-lg border border-accent/30 bg-accent/10 px-3 py-2">
        <motion.span
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-1.5 w-1.5 rounded-full bg-green-500"
        />
        <span className="text-[12px] text-ink-muted">Syncing with Google Calendar</span>
      </div>
    </div>
  );
}

function MockReminderFlow() {
  return (
    <div className="mt-4 space-y-2">
      {[
        { icon: "📧", label: "Email confirmation", time: "Sent immediately", sent: true },
        { icon: "💬", label: "SMS reminder", time: "24 hrs before", sent: true },
        { icon: "📱", label: "Final reminder", time: "1 hr before", sent: false },
      ].map(({ icon, label, time, sent }, i) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.38, ease: EASE }}
          className="flex items-center gap-3 rounded-lg border border-border bg-surface px-3 py-2.5"
        >
          <span className="text-[16px]">{icon}</span>
          <div className="flex-1">
            <p className="text-[12px] font-medium text-ink">{label}</p>
            <p className="text-[11px] text-ink-muted">{time}</p>
          </div>
          <span className={`text-[11px] font-medium ${sent ? "text-green-600" : "text-ink-muted"}`}>
            {sent ? "✓ sent" : "pending"}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

function MockBookingRulesCapability() {
  return (
    <div className="mt-4 space-y-2">
      {[
        { label: "Buffer between bookings", value: "15 min" },
        { label: "Max bookings per day", value: "8" },
        { label: "Advance booking window", value: "30 days" },
      ].map(({ label, value }) => (
        <div
          key={label}
          className="flex items-center justify-between rounded-lg border border-border bg-surface px-3 py-2.5"
        >
          <span className="text-[12px] text-ink-muted">{label}</span>
          <span className="rounded-md bg-surface-muted px-2 py-0.5 text-[12px] font-semibold text-ink">
            {value}
          </span>
        </div>
      ))}
    </div>
  );
}

function MockNoShowStats() {
  const stats = [
    { label: "No-show rate (before)", value: "22%" },
    { label: "No-show rate (after)", value: "8%" },
    { label: "Reminders sent/week", value: "147" },
    { label: "Bookings automated", value: "100%" },
  ];
  return (
    <div className="mt-4 grid grid-cols-2 gap-2">
      {stats.map(({ label, value }, i) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08, duration: 0.35, ease: EASE }}
          className="rounded-xl border border-border bg-surface p-3 text-center"
        >
          <p className="font-display text-[1.5rem] font-bold text-ink">{value}</p>
          <p className="mt-0.5 text-[11px] text-ink-muted">{label}</p>
        </motion.div>
      ))}
    </div>
  );
}

// ─── Page data ────────────────────────────────────────────────────────────────

const testimonials: TestimonialItem[] = [
  {
    quote:
      "My front desk was spending 3 hours a day just booking appointments over the phone. Tarsha does it all automatically now — the calendar stays full, my team stays focused, and patients actually say scheduling has never been easier.",
    author: "Dr. Amy C.",
    role: "Practice Owner",
    company: "Westside Chiropractic",
    avatarUrl: "https://i.pravatar.cc/150?img=34",
  },
  {
    quote:
      "We do high-volume appointment booking — hundreds a week. Before Tarsha we needed two dedicated staff members just to manage the phone schedule. Now it's fully automated, double-bookings are zero, and our no-show rate dropped 55% with the reminders.",
    author: "Mark F.",
    role: "Operations Director",
    company: "FitLife Studios Network",
    avatarUrl: "https://i.pravatar.cc/150?img=19",
  },
  {
    quote:
      "New clients call wanting to book a consultation. Old system was: take a message, call back, play phone tag, finally book. With Tarsha they call, get asked two questions, pick a time, and hang up confirmed. Our conversion from call to consultation went from 60% to 94%.",
    author: "Sophie H.",
    role: "Managing Partner",
    company: "Halston Law Group",
    avatarUrl: "https://i.pravatar.cc/150?img=30",
  },
];

const steps = [
  {
    title: "Live availability checked instantly",
    description:
      "Tarsha reads your real-time calendar — Google Calendar, Outlook, Acuity, Calendly. No outdated slots, no double-bookings, ever.",
    Illustration: IllusStep1Appt,
  },
  {
    title: "Booking conversation handled",
    description:
      "Tarsha offers available slots, qualifies the appointment type, collects the caller's details, and confirms the time — entirely within the phone call.",
    Illustration: IllusStep2Appt,
  },
  {
    title: "Confirmation and reminders sent automatically",
    description:
      "The moment the booking is confirmed, a calendar event is created, the caller gets a confirmation, and a reminder sequence starts — reducing no-shows by up to 60%.",
    Illustration: IllusStep3Appt,
  },
];

const benefits: Benefit[] = [
  {
    icon: CalendarCheck,
    title: "Real-time calendar sync",
    description:
      "Connects to Google Calendar, Outlook, Acuity, Calendly, and more. Always shows live availability — no back-and-forth, no double-bookings.",
    MockUI: MockRealTimeCalendar,
    wide: true,
  },
  {
    icon: Bell,
    title: "Automated reminder sequences",
    description:
      "Confirmation email, 24-hour SMS reminder, 1-hour final reminder — sent automatically, reducing no-shows by up to 60%.",
    MockUI: MockReminderFlow,
  },
  {
    icon: Settings,
    title: "Booking rules you control",
    description:
      "Buffer time, max daily bookings, advance booking window, service types — your calendar, your rules.",
    MockUI: MockBookingRulesCapability,
  },
  {
    icon: RefreshCw,
    title: "No-show reduction",
    description:
      "Automated reminders turn forgotten appointments into attended ones. Most businesses see no-show rates cut by more than half.",
    MockUI: MockNoShowStats,
    wide: true,
  },
];

const industries = [
  "Medical practices",
  "Dental offices",
  "Law firms",
  "Salons & spas",
  "Chiropractors",
  "Financial advisors",
  "Real estate agents",
  "Therapists",
  "Fitness studios",
  "Veterinary clinics",
  "Home inspectors",
  "Consultants",
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AppointmentTakingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-bg pt-[72px]">
        <SolutionHero
          eyebrow="Appointment Taking"
          titleBefore="Book appointments "
          titleHighlight="without lifting a finger"
          subtitle="Tarsha AI handles the entire booking conversation in real time — checking availability, offering slots, confirming the appointment, and sending reminders automatically."
          MockUI={MockAppointmentFlow}
        />
        <SolutionTestimonials
          eyebrow="Trusted by appointment-based businesses"
          testimonials={testimonials}
        />
        <SolutionIntro
          eyebrow="The capability"
          heading="Every booking call takes 3–8 minutes of someone's time. It doesn't have to."
          paragraphs={[
            "Booking an appointment over the phone is deceptively expensive. A staff member stops what they're doing, checks the calendar, offers times, waits for the caller to decide, confirms details, hangs up, and logs it. Multiply that by 20 bookings a day and you've spent 2 hours on pure scheduling.",
            "Tarsha AI handles every step of the booking call automatically. It checks your live calendar, offers available slots, confirms the booking, and sends reminders that reduce no-shows — all within the call, with no human involvement required.",
          ]}
          Illustration={IllusIntroAppointment}
        />
        <SolutionHowItWorks
          heading="Booked and confirmed before the call ends"
          steps={steps}
        />
        <SolutionBenefits
          eyebrow="What you get"
          heading="Every appointment filled, zero effort from you"
          benefits={benefits}
        />
        <SolutionIndustries
          eyebrow="Who uses this"
          heading="Any business where bookings mean revenue"
          industries={industries}
        />
        <SolutionCTA heading="Fill your calendar automatically — without interrupting your day." />
      </main>
      <Footer />
    </>
  );
}
