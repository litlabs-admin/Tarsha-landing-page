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
import { MockBookingCalendar } from "@/components/solutions/mocks/MockBookingCalendar";
import { cn } from "@/lib/cn";
import { motion } from "framer-motion";
import { Bell, CalendarCheck, CheckCircle, Settings } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

// ─── Step illustrations ───────────────────────────────────────────────────────

function IllusCalendarConnect() {
  return (
    <div className="space-y-2.5">
      <div className="flex items-center gap-3 rounded-xl border border-border bg-surface p-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface-muted text-lg">
          📅
        </div>
        <div className="flex-1">
          <p className="text-[12px] font-medium text-ink">Google Calendar</p>
          <p className="text-[11px] text-ink-muted">primary@yourbusiness.com</p>
        </div>
        <motion.span
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="rounded-full bg-green-50 px-2 py-0.5 text-[10px] font-semibold text-green-700 border border-green-200"
        >
          Connected
        </motion.span>
      </div>
      <div className="flex items-center gap-3 rounded-xl border border-border bg-surface p-3 opacity-60">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface-muted text-lg">
          🗓️
        </div>
        <div className="flex-1">
          <p className="text-[12px] font-medium text-ink">Outlook</p>
          <p className="text-[11px] text-ink-muted">Acuity, Calendly + more</p>
        </div>
        <span className="text-[11px] text-ink-muted">+ sync</span>
      </div>
    </div>
  );
}

function IllusSlotSelection() {
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
        {slots.map(({ time, open, selected }) => (
          <div
            key={time}
            className={cn(
              "flex items-center justify-center rounded-lg border py-2 text-[11px] font-medium",
              selected
                ? "border-accent bg-accent text-accent-ink shadow-sm"
                : open
                  ? "border-border bg-surface text-ink"
                  : "cursor-not-allowed border-border/50 bg-surface-muted/40 text-ink/25",
            )}
          >
            {time}
          </div>
        ))}
      </div>
    </div>
  );
}

function IllusBookingConfirmed() {
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
          Booking confirmed
        </p>
        <p className="mt-1 text-[14px] font-bold text-ink">Thu Jun 19 · 2:00 PM</p>
        <p className="mt-0.5 text-[11px] text-ink-muted">Consultation · 45 min</p>
      </motion.div>
      <div className="grid grid-cols-2 gap-1.5">
        {[
          { label: "Calendar event", status: "✓ added" },
          { label: "Confirmation", status: "✓ sent" },
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

function IllusIntroMissedBookings() {
  const slots = [
    { time: "Mon 9:00 AM", status: "missed" as const },
    { time: "Tue 11:30 AM", status: "booked" as const },
    { time: "Wed 2:00 PM", status: "missed" as const },
    { time: "Thu 4:30 PM", status: "missed" as const },
  ];
  return (
    <div className="space-y-2.5">
      <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-muted">
        This week · booking opportunities
      </p>
      <div className="grid grid-cols-2 gap-2">
        {slots.map(({ time, status }, i) => (
          <motion.div
            key={time}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.35, ease: EASE }}
            className={`rounded-xl border p-2.5 ${
              status === "missed"
                ? "border-red-200 bg-red-50"
                : "border-green-200 bg-green-50"
            }`}
          >
            <p className="text-[11px] font-medium text-ink">{time}</p>
            <p className={`mt-0.5 text-[11px] font-semibold ${status === "missed" ? "text-red-600" : "text-green-600"}`}>
              {status === "missed" ? "✕ no answer" : "✓ booked"}
            </p>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.4, ease: EASE }}
        className="rounded-xl border border-border bg-surface px-3.5 py-3"
      >
        <p className="text-[12px] font-semibold text-ink">3 missed bookings this week</p>
        <p className="mt-0.5 text-[11px] text-ink-muted">Avg. value $120 · ~$360 in lost revenue</p>
      </motion.div>
    </div>
  );
}

// ─── Benefit mock UIs ─────────────────────────────────────────────────────────

function MockAvailability() {
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

function MockReminder() {
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

function MockBookingRules() {
  return (
    <div className="mt-4 space-y-2">
      {[
        { label: "Buffer between bookings", value: "15 min" },
        { label: "Max bookings per day", value: "8" },
        { label: "Advance booking window", value: "30 days" },
      ].map(({ label, value }) => (
        <div key={label} className="flex items-center justify-between rounded-lg border border-border bg-surface px-3 py-2.5">
          <span className="text-[12px] text-ink-muted">{label}</span>
          <span className="rounded-md bg-surface-muted px-2 py-0.5 text-[12px] font-semibold text-ink">
            {value}
          </span>
        </div>
      ))}
    </div>
  );
}

function MockConfirmation() {
  return (
    <div className="mt-4 space-y-2.5">
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, ease: EASE }}
        className="rounded-xl border border-accent/30 bg-accent/10 p-4"
      >
        <p className="text-[12px] font-semibold uppercase tracking-wide text-ink-muted">
          Booking confirmed
        </p>
        <p className="mt-1 text-[15px] font-bold text-ink">Mon Jun 23 · 11:00 AM</p>
        <p className="mt-0.5 text-[12px] text-ink-muted">Consultation · 45 min</p>
      </motion.div>
      <div className="grid grid-cols-2 gap-1.5">
        {[
          { label: "Calendar event", status: "✓ added" },
          { label: "Confirmation sent", status: "✓ sent" },
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

// ─── Page data ────────────────────────────────────────────────────────────────

const testimonials: TestimonialItem[] = [
  {
    quote:
      "We were losing 3–4 bookings every single week because no one could answer during appointments. Tarsha books them while we're with clients. We filled 11 extra appointments in the first month alone — I wish we'd switched sooner.",
    author: "Jessica M.",
    role: "Owner",
    company: "Revive Hair Studio",
    avatarUrl: "https://i.pravatar.cc/150?img=5",
  },
  {
    quote:
      "My front desk was spending 2 hours a day booking appointments by phone. Tarsha handles all of it automatically now. The calendar is full, my team is less stressed, and patients actually comment on how easy scheduling has become.",
    author: "Dr. Sam L.",
    role: "Chiropractor",
    company: "Riverside Chiropractic",
    avatarUrl: "https://i.pravatar.cc/150?img=52",
  },
  {
    quote:
      "Buyers call at all hours wanting to schedule showings. With Tarsha I wake up to a full schedule every morning — synced to my calendar, confirmation sent, reminder set. I've genuinely stopped worrying about missed opportunities.",
    author: "Sarah K.",
    role: "Real Estate Agent",
    company: "Green Valley Properties",
    avatarUrl: "https://i.pravatar.cc/150?img=25",
  },
];

const steps = [
  {
    title: "Connect your calendar",
    description:
      "Link Google Calendar, Outlook, Acuity, or any major scheduling tool in under 5 minutes. Tarsha reads your real-time availability from that moment on.",
    Illustration: IllusCalendarConnect,
  },
  {
    title: "A caller asks for an appointment",
    description:
      "Tarsha AI checks your live availability, offers the right time slots, qualifies the booking, and handles the entire conversation — all within the call.",
    Illustration: IllusSlotSelection,
  },
  {
    title: "Confirmed and locked in instantly",
    description:
      "The appointment appears on your calendar automatically. The caller gets a confirmation, and reminders go out automatically. Zero follow-up needed.",
    Illustration: IllusBookingConfirmed,
  },
];

const benefits: Benefit[] = [
  {
    icon: CalendarCheck,
    title: "Real-time availability",
    description:
      "Tarsha reads your live calendar — no outdated slots, no double-bookings, ever.",
    MockUI: MockAvailability,
    wide: true,
  },
  {
    icon: Bell,
    title: "Automatic reminders",
    description:
      "Email and SMS confirmations sent instantly. Follow-up reminders reduce no-shows by up to 60%.",
    MockUI: MockReminder,
  },
  {
    icon: Settings,
    title: "Custom booking rules",
    description:
      "Set buffer times, max daily bookings, service types, and advance windows — your calendar, your rules.",
    MockUI: MockBookingRules,
  },
  {
    icon: CheckCircle,
    title: "Instant confirmation",
    description:
      "Caller gets a confirmation summary, you get a calendar event. Everything handled before the call ends.",
    MockUI: MockConfirmation,
    wide: true,
  },
];

const industries = [
  "Dental & medical offices",
  "Salons & spas",
  "Real estate agents",
  "Legal consultations",
  "HVAC & contractors",
  "Fitness studios",
  "Chiropractors",
  "Financial advisors",
  "Veterinary clinics",
  "Home inspectors",
  "Therapists & counselors",
  "Property management",
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AppointmentBookingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-bg pt-[72px]">
        <SolutionHero
          eyebrow="Appointment Booking"
          titleBefore="Book appointments "
          titleHighlight="while they're on the phone"
          subtitle="Tarsha AI syncs with your calendar and locks in bookings in real time — no follow-up emails, no double-bookings, no missed opportunities."
          MockUI={MockBookingCalendar}
        />
        <SolutionTestimonials
          eyebrow="Trusted by appointment-based businesses"
          testimonials={testimonials}
        />
        <SolutionIntro
          eyebrow="The problem"
          heading="Every missed call is a missed booking"
          paragraphs={[
            "When a potential client calls to book and nobody answers, they don't call back — they find someone else. For appointment-based businesses, that's not just a missed call, it's lost revenue that compounds week after week.",
            "Tarsha AI connects to your calendar and handles the entire booking conversation in real time — checking your availability, offering the right slots, confirming the appointment, and sending reminders that reduce no-shows by up to 60%. All without your staff picking up the phone.",
          ]}
          Illustration={IllusIntroMissedBookings}
        />
        <SolutionHowItWorks
          heading="Booked before the call ends"
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
        <SolutionCTA heading="Book more appointments without lifting a finger." />
      </main>
      <Footer />
    </>
  );
}
