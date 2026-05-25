"use client";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AnimatePresence, motion, useInView } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  ChevronDown,
  ChevronRight,
  CreditCard,
  HelpCircle,
  Layers,
  MessageSquare,
  Mic,
  Phone,
  Search,
  Settings,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

// ─── Data ─────────────────────────────────────────────────────────────────────

const categories = [
  {
    icon: Zap,
    title: "Getting Started",
    description: "New to Tarsha? Start here.",
    color: { bg: "#fef3c7", text: "#92400e", border: "#fde68a" },
    articleCount: 12,
    articles: [
      { title: "What is Tarsha AI?", popular: true },
      { title: "How to sign up for free", popular: true },
      { title: "Your first call: what to expect" },
      { title: "Setting up your business profile" },
      { title: "How Tarsha learns your business" },
    ],
  },
  {
    icon: Phone,
    title: "Call Forwarding",
    description: "Route calls from any number or carrier.",
    color: { bg: "#dbeafe", text: "#1e40af", border: "#bfdbfe" },
    articleCount: 9,
    articles: [
      { title: "How call forwarding works", popular: true },
      { title: "Forwarding on AT&T, Verizon, T-Mobile" },
      { title: "Can I forward from a landline?" },
      { title: "Call forwarding codes by carrier" },
      { title: "Why isn't my forwarding working?" },
    ],
  },
  {
    icon: Mic,
    title: "Greetings & Voice",
    description: "Customize what callers hear.",
    color: { bg: "#d1fae5", text: "#065f46", border: "#a7f3d0" },
    articleCount: 8,
    articles: [
      { title: "Changing your AI voice" },
      { title: "How to edit your greeting script", popular: true },
      { title: "Setting business hours" },
      { title: "After-hours message setup" },
      { title: "Language & bilingual settings" },
    ],
  },
  {
    icon: Layers,
    title: "Integrations",
    description: "Connect your tools and automations.",
    color: { bg: "#ede9fe", text: "#4c1d95", border: "#ddd6fe" },
    articleCount: 11,
    articles: [
      { title: "Setting up email notifications", popular: true },
      { title: "SMS and text alerts" },
      { title: "Connecting to Google Calendar" },
      { title: "Zapier integration guide" },
      { title: "CRM integrations overview" },
    ],
  },
  {
    icon: Settings,
    title: "Features",
    description: "Get the most out of every capability.",
    color: { bg: "#fce7f3", text: "#9d174d", border: "#fbcfe8" },
    articleCount: 14,
    articles: [
      { title: "Lead qualification setup" },
      { title: "How appointment booking works" },
      { title: "Spam call blocking" },
      { title: "Call recording and storage" },
      { title: "Voicemail transcription" },
    ],
  },
  {
    icon: CreditCard,
    title: "Billing & Account",
    description: "Manage your subscription and settings.",
    color: { bg: "#e0f2fe", text: "#075985", border: "#bae6fd" },
    articleCount: 7,
    articles: [
      { title: "How billing works" },
      { title: "Changing or cancelling your plan" },
      { title: "Adding team members" },
      { title: "Downloading invoices" },
      { title: "Deleting your account" },
    ],
  },
];

const faqs = [
  {
    q: "Does Tarsha really pick up within 2 seconds?",
    a: "Yes, our average answer time is under 1.8 seconds. Your callers will never hear more than two rings before Tarsha picks up, 24 hours a day, 365 days a year.",
  },
  {
    q: "Do I need any special equipment or tech skills?",
    a: "None. If you have a smartphone or landline, you can use Tarsha. Setup takes under 10 minutes and requires only dialing a forwarding code from your phone.",
  },
  {
    q: "Can Tarsha book appointments directly?",
    a: "Yes, Tarsha can offer available slots, confirm appointments, and sync with Google Calendar. You can define your availability and it will only offer times you've approved.",
  },
  {
    q: "What happens to my existing phone number?",
    a: "Nothing changes. You keep your number and callers continue dialing it. Call forwarding redirects calls to Tarsha behind the scenes. You can turn it off at any time.",
  },
  {
    q: "Is there a long-term contract?",
    a: "No contracts, ever. You're on a month-to-month subscription and can cancel any time from your dashboard. We'll even export your call history so you never lose your data.",
  },
  {
    q: "How does the 14-day free trial work?",
    a: "Sign up, complete setup, and forward your calls. For 14 days you get full access to every feature, no credit card required. If you love it, stay. If not, walk away.",
  },
];

// ─── FAQ item ─────────────────────────────────────────────────────────────────

function FaqItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.45, ease: EASE }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="group relative border-b border-border last:border-0"
    >
      {/* Left accent bar */}
      <motion.div
        animate={{ scaleY: open ? 1 : 0, opacity: open ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        style={{ originY: 0 }}
        className="absolute left-0 top-0 h-full w-[3px] rounded-full bg-accent"
      />

      {/* Background fill */}
      <motion.div
        animate={{ opacity: open ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="pointer-events-none absolute inset-0 rounded-r-xl bg-surface-muted/60"
      />

      <button
        onClick={() => setOpen((o) => !o)}
        className="relative flex w-full items-center gap-5 py-5 pl-6 pr-4 text-left"
      >
        {/* Number */}
        <motion.span
          animate={{ color: open ? "var(--accent-ink)" : "var(--ink-faint)", opacity: open ? 1 : 0.4 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 font-display text-[13px] font-bold tabular-nums"
        >
          {num}
        </motion.span>

        <span className="flex-1 font-display text-[15px] font-semibold text-ink">
          {faq.q}
        </span>

        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="shrink-0"
        >
          <ChevronDown className="h-5 w-5 text-ink-muted" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0, y: -4 }}
            animate={{ height: "auto", opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="overflow-hidden"
          >
            <p className="pb-5 pl-6 pr-6 text-[14px] leading-relaxed text-ink-muted md:pl-16">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Category card ────────────────────────────────────────────────────────────

function CategoryCard({ cat, index }: { cat: typeof categories[0]; index: number }) {
  const Icon = cat.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: EASE }}
      whileHover={{ y: -4 }}
      className="group rounded-2xl border border-border bg-surface p-6 shadow-soft transition-shadow duration-300 hover:shadow-lift"
    >
      <div className="flex items-start gap-4">
        <div
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border shadow-soft"
          style={{ backgroundColor: cat.color.bg, borderColor: cat.color.border }}
        >
          <Icon className="h-5 w-5" style={{ color: cat.color.text }} strokeWidth={1.5} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-display text-[16px] font-bold text-ink">{cat.title}</h3>
            <span className="shrink-0 text-[11px] text-ink-faint">{cat.articleCount} articles</span>
          </div>
          <p className="mt-0.5 text-[13px] text-ink-muted">{cat.description}</p>
        </div>
      </div>

      <ul className="mt-5 space-y-1.5">
        {cat.articles.map((article) => (
          <li key={article.title}>
            <Link
              href="#"
              className="group/link flex items-center gap-2 rounded-lg px-2 py-1.5 text-[13px] text-ink-muted transition-all hover:bg-surface-muted hover:text-ink"
            >
              <ChevronRight className="h-3.5 w-3.5 shrink-0 text-ink-faint transition-transform group-hover/link:translate-x-0.5" />
              <span className="flex-1 leading-snug">{article.title}</span>
              {article.popular && (
                <span className="shrink-0 rounded-full bg-accent/15 px-2 py-0.5 text-[10px] font-semibold text-accent-ink">
                  Popular
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-4 border-t border-border pt-4">
        <button className="flex items-center gap-1 text-[12px] font-semibold text-ink-muted transition-colors hover:text-ink">
          Browse all {cat.articleCount} articles <ChevronRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HelpCenterPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  const headlineRef = useRef<HTMLSpanElement>(null);
  const headlineInView = useInView(headlineRef, { once: true });

  return (
    <>
      <Header />
      <main className="min-h-screen bg-bg pt-[72px]">

        {/* Hero with search */}
        <section className="relative overflow-hidden py-20 md:py-28">
          {/* Light cream background with accent glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-accent/15 blur-[120px]" />
            <div className="absolute right-0 bottom-0 h-[300px] w-[400px] rounded-full bg-accent/8 blur-[80px]" />
          </div>

          <div className="relative mx-auto max-w-[800px] px-6 text-center md:px-10">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="mb-5 text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-muted"
            >
              <span className="mr-2 inline-block h-1.5 w-1.5 translate-y-[-1px] rounded-full bg-accent align-middle" />
              Help Center
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: EASE }}
              className="section-heading font-display font-bold tracking-tighter2 text-ink"
            >
              How can we{" "}
              <span ref={headlineRef} className={`accent-underline${headlineInView ? " is-revealed" : ""}`}>
                help
              </span>{" "}you?
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18, ease: EASE }}
              className="mx-auto mt-4 max-w-md text-[16px] leading-relaxed text-ink-muted"
            >
              Search our knowledge base or browse by category. Most questions are answered in under 2 minutes.
            </motion.p>

            {/* Search bar */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.28, ease: EASE }}
              className="relative mx-auto mt-8 max-w-xl"
            >
              <motion.div
                animate={searchFocused ? { boxShadow: "0 0 0 3px rgba(255,208,0,0.3)" } : { boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}
                className="relative overflow-hidden rounded-2xl border border-border bg-surface transition-all"
              >
                <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-faint" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                  placeholder="Search articles, guides, FAQs..."
                  className="w-full bg-transparent py-4 pl-14 pr-6 text-[15px] text-ink placeholder:text-ink-faint focus:outline-none"
                />
                {searchQuery && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-xl bg-accent px-4 py-2 text-[13px] font-semibold text-ink"
                  >
                    Search
                  </motion.button>
                )}
              </motion.div>

              {/* Quick search suggestions */}
              <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                <span className="text-[12px] text-ink-faint">Popular:</span>
                {["call forwarding", "greeting setup", "cancel plan", "forwarding codes"].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSearchQuery(tag)}
                    className="rounded-full border border-border bg-surface px-3 py-1 text-[12px] text-ink-muted shadow-soft transition-colors hover:border-accent/40 hover:text-ink"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.4, ease: EASE }}
              className="mt-10 flex flex-wrap items-center justify-center gap-6"
            >
              {[
                { value: "54", label: "help articles" },
                { value: "< 2 hr", label: "response time" },
                { value: "24/7", label: "chat support" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-[1.4rem] font-bold tracking-tighter2 text-ink">{stat.value}</p>
                  <p className="text-[11px] text-ink-muted">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-[1240px] px-6 md:px-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EASE }}
              className="mb-10"
            >
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-muted">Browse by topic</p>
              <h2 className="font-display text-[1.75rem] font-bold tracking-tighter2 text-ink">
                Find answers fast
              </h2>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {categories.map((cat, i) => (
                <CategoryCard key={cat.title} cat={cat} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-border bg-surface py-16 md:py-20">
          <div className="mx-auto max-w-[800px] px-6 md:px-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EASE }}
              className="mb-10 text-center"
            >
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-muted">FAQ</p>
              <h2 className="font-display text-[1.75rem] font-bold tracking-tighter2 text-ink">
                Frequently asked questions
              </h2>
            </motion.div>

            <div className="divide-y divide-border rounded-2xl border border-border bg-bg px-6">
              {faqs.map((faq, i) => (
                <FaqItem key={faq.q} faq={faq} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Resources quick links */}
        <section className="py-12 border-t border-border">
          <div className="mx-auto max-w-[960px] px-6 md:px-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EASE }}
              className="mb-8 text-center"
            >
              <p className="text-[15px] font-medium text-ink-muted">Explore more resources</p>
            </motion.div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { icon: BookOpen, label: "Setup Guides", desc: "Step-by-step walkthroughs", href: "/resources/setup-guides" },
                { icon: Mic, label: "Voice Library", desc: "Browse AI voices", href: "/resources/voice-library" },
                { icon: MessageSquare, label: "Blog", desc: "Tips and best practices", href: "/resources/blog" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.45, ease: EASE }}
                    whileHover={{ y: -3 }}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center gap-4 rounded-xl border border-border bg-surface p-5 shadow-soft transition-all hover:shadow-lift hover:border-accent/30 group"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-bg shadow-soft">
                        <Icon className="h-4.5 w-4.5 text-ink/60" strokeWidth={1.5} />
                      </span>
                      <div className="min-w-0">
                        <p className="font-display text-[14px] font-bold text-ink">{item.label}</p>
                        <p className="text-[12px] text-ink-muted">{item.desc}</p>
                      </div>
                      <ChevronRight className="ml-auto h-4 w-4 shrink-0 text-ink-faint transition-transform group-hover:translate-x-1" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact support */}
        <section className="bg-ink py-16">
          <div className="mx-auto max-w-[960px] px-6 md:px-10">
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  icon: "💬",
                  title: "Chat with us",
                  desc: "Our team typically replies within 90 minutes on business days. Real humans, real answers.",
                  cta: "Start chat",
                  href: "#",
                },
                {
                  icon: "📧",
                  title: "Send an email",
                  desc: "Drop us a detailed question and we'll reply with a full step-by-step answer, usually within 2 hours.",
                  cta: "Email support",
                  href: "mailto:hello@tarsha.ai",
                },
              ].map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: EASE }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-8 transition-colors hover:bg-white/8"
                >
                  <span className="text-3xl">{card.icon}</span>
                  <h3 className="mt-4 font-display text-[18px] font-bold text-white">{card.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-white/60">{card.desc}</p>
                  <Link
                    href={card.href}
                    className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-accent hover:text-ink"
                  >
                    {card.cta} <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
