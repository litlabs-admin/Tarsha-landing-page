"use client";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { NewsletterSignup } from "@/components/resources/NewsletterSignup";
import { FeaturedCard, ResourceCard, type ArticleCardData } from "@/components/resources/ResourceCard";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

// ─── Data ─────────────────────────────────────────────────────────────────────

const CATEGORY_COLORS: Record<string, string> = {
  "Business Growth": "#16a34a",
  "Call Management": "#2563eb",
  "AI & Technology": "#9333ea",
  "Industry Insights": "#d97706",
  "Customer Stories": "#dc2626",
  "Guides": "#0891b2",
};

const articles: ArticleCardData[] = [
  {
    slug: "true-cost-of-missed-call",
    category: "Call Management",
    categoryColor: CATEGORY_COLORS["Call Management"],
    title: "The True Cost of a Missed Call (And How to Stop Losing Them)",
    excerpt: "Most small businesses underestimate what a missed call actually costs. When you factor in lost revenue, repeat dials, and competitor defection, the number is sobering — here's how to fix it.",
    imageUrl: "https://picsum.photos/seed/missed-call/800/450",
    authorName: "Sarah Chen",
    authorAvatar: "https://i.pravatar.cc/150?img=47",
    date: "May 16, 2025",
    readTime: "6 min read",
  },
  {
    slug: "switching-voicemail-to-ai",
    category: "Business Growth",
    categoryColor: CATEGORY_COLORS["Business Growth"],
    title: "Why Small Businesses Are Switching from Voicemail to AI Answering",
    excerpt: "Voicemail made sense in 1995. Today, 80% of callers hang up without leaving a message. Here's why AI phone answering is the upgrade your business actually needs.",
    imageUrl: "https://picsum.photos/seed/voicemail-ai/800/450",
    authorName: "Marcus Bell",
    authorAvatar: "https://i.pravatar.cc/150?img=15",
    date: "May 12, 2025",
    readTime: "5 min read",
  },
  {
    slug: "plumber-doubled-bookings",
    category: "Customer Stories",
    categoryColor: CATEGORY_COLORS["Customer Stories"],
    title: "How a Plumber in Austin Doubled His Bookings with AI Phone Answering",
    excerpt: "Jake Morales was losing $2,000+ per month in missed calls while on job sites. Six weeks after switching to Tarsha AI, his call conversion rate had doubled and he'd hired a second technician.",
    imageUrl: "https://picsum.photos/seed/plumber-bookings/800/450",
    authorName: "Tarsha Team",
    authorAvatar: "https://i.pravatar.cc/150?img=60",
    date: "May 9, 2025",
    readTime: "4 min read",
  },
  {
    slug: "call-forwarding-101",
    category: "Guides",
    categoryColor: CATEGORY_COLORS["Guides"],
    title: "Call Forwarding 101: Setting It Up the Right Way",
    excerpt: "A step-by-step walkthrough for every major carrier — AT&T, Verizon, T-Mobile, and VoIP providers. Get your calls routing to Tarsha AI in under 10 minutes.",
    imageUrl: "https://picsum.photos/seed/call-forwarding/800/450",
    authorName: "Dev Team",
    authorAvatar: "https://i.pravatar.cc/150?img=53",
    date: "May 6, 2025",
    readTime: "8 min read",
  },
  {
    slug: "ai-vs-human-receptionists",
    category: "AI & Technology",
    categoryColor: CATEGORY_COLORS["AI & Technology"],
    title: "AI vs. Human Receptionists: What's Right for Your Business?",
    excerpt: "We ran the numbers on cost, availability, accuracy, and caller experience. The results may surprise you — and the right answer depends heavily on your call volume and budget.",
    imageUrl: "https://picsum.photos/seed/ai-receptionist/800/450",
    authorName: "Sarah Chen",
    authorAvatar: "https://i.pravatar.cc/150?img=47",
    date: "May 2, 2025",
    readTime: "7 min read",
  },
  {
    slug: "5-types-of-calls",
    category: "Call Management",
    categoryColor: CATEGORY_COLORS["Call Management"],
    title: "The 5 Types of Calls Every Small Business Gets (And How to Handle Each)",
    excerpt: "New leads, existing clients, vendors, solicitors, and wrong numbers — each needs a different response. Here's how Tarsha AI handles them all so you don't have to.",
    imageUrl: "https://picsum.photos/seed/call-types/800/450",
    authorName: "Marcus Bell",
    authorAvatar: "https://i.pravatar.cc/150?img=15",
    date: "Apr 28, 2025",
    readTime: "5 min read",
  },
  {
    slug: "law-firms-ai-calls",
    category: "Industry Insights",
    categoryColor: CATEGORY_COLORS["Industry Insights"],
    title: "How Law Firms Are Using AI to Never Miss a Client Call",
    excerpt: "New client intake is the lifeblood of any law practice. We spoke with 12 attorneys about how AI phone answering transformed their intake process and reduced after-hours anxiety.",
    imageUrl: "https://picsum.photos/seed/law-firm-calls/800/450",
    authorName: "Tarsha Team",
    authorAvatar: "https://i.pravatar.cc/150?img=60",
    date: "Apr 24, 2025",
    readTime: "6 min read",
  },
  {
    slug: "hvac-peak-season",
    category: "Industry Insights",
    categoryColor: CATEGORY_COLORS["Industry Insights"],
    title: "HVAC Businesses: Surviving Peak Season Without Hiring",
    excerpt: "Summer and winter spikes can overwhelm even the most organized HVAC company. Here's how AI call answering lets you scale your call capacity without scaling your payroll.",
    imageUrl: "https://picsum.photos/seed/hvac-season/800/450",
    authorName: "Marcus Bell",
    authorAvatar: "https://i.pravatar.cc/150?img=15",
    date: "Apr 20, 2025",
    readTime: "4 min read",
  },
  {
    slug: "after-hours-answering",
    category: "Business Growth",
    categoryColor: CATEGORY_COLORS["Business Growth"],
    title: "What Is After-Hours Answering and Why Does It Matter?",
    excerpt: "Your competitors close at 5pm. Your customers don't. An after-hours answering solution captures leads while you sleep and turns evening calls into morning wins.",
    imageUrl: "https://picsum.photos/seed/after-hours/800/450",
    authorName: "Sarah Chen",
    authorAvatar: "https://i.pravatar.cc/150?img=47",
    date: "Apr 15, 2025",
    readTime: "5 min read",
  },
  {
    slug: "bilingual-phone-answering",
    category: "AI & Technology",
    categoryColor: CATEGORY_COLORS["AI & Technology"],
    title: "Bilingual Phone Answering: How to Reach More Customers",
    excerpt: "42 million Spanish speakers in the US. If your phone line is English-only, you're leaving a massive market on the table. Here's why bilingual AI answering is a competitive advantage.",
    imageUrl: "https://picsum.photos/seed/bilingual-answering/800/450",
    authorName: "Dev Team",
    authorAvatar: "https://i.pravatar.cc/150?img=53",
    date: "Apr 11, 2025",
    readTime: "4 min read",
  },
  {
    slug: "perfect-greeting-script",
    category: "Guides",
    categoryColor: CATEGORY_COLORS["Guides"],
    title: "How to Write the Perfect Greeting Script for Your Business",
    excerpt: "Your greeting sets the tone for the entire caller experience. We analyzed thousands of calls to find the greeting patterns that build trust, capture information, and convert callers into clients.",
    imageUrl: "https://picsum.photos/seed/greeting-script/800/450",
    authorName: "Sarah Chen",
    authorAvatar: "https://i.pravatar.cc/150?img=47",
    date: "Apr 7, 2025",
    readTime: "6 min read",
  },
  {
    slug: "restaurant-reservation-ai",
    category: "Industry Insights",
    categoryColor: CATEGORY_COLORS["Industry Insights"],
    title: "Restaurant Reservation Management with AI Phone Answering",
    excerpt: "Front-of-house staff shouldn't be tethered to a phone during the dinner rush. See how restaurants are using Tarsha AI to handle reservations, hours inquiries, and dietary questions automatically.",
    imageUrl: "https://picsum.photos/seed/restaurant-ai/800/450",
    authorName: "Tarsha Team",
    authorAvatar: "https://i.pravatar.cc/150?img=60",
    date: "Apr 2, 2025",
    readTime: "5 min read",
  },
];

const CATEGORIES = ["All", "Business Growth", "Call Management", "AI & Technology", "Industry Insights", "Customer Stories", "Guides"];

const [featured, ...rest] = articles;

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const headlineRef = useRef<HTMLSpanElement>(null);
  const headlineInView = useInView(headlineRef, { once: true });

  const filtered = activeCategory === "All"
    ? rest
    : rest.filter((a) => a.category === activeCategory);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-bg pt-[72px]">
        {/* Hero */}
        <section className="relative overflow-hidden py-20 md:py-28">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-0 h-[480px] w-[800px] -translate-x-1/2 rounded-full bg-accent/8 blur-[120px]" />
          </div>
          <div className="relative mx-auto max-w-[960px] px-6 text-center md:px-10">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="mb-5 text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-muted"
            >
              <span className="mr-2 inline-block h-1.5 w-1.5 translate-y-[-1px] rounded-full bg-accent align-middle" />
              The Tarsha Blog
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: EASE }}
              className="section-heading font-display font-bold tracking-tighter2 text-ink"
            >
              Insights for businesses{" "}
              <span ref={headlineRef} className={`accent-underline${headlineInView ? " is-revealed" : ""}`}>
                that live by the phone
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18, ease: EASE }}
              className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-ink-muted"
            >
              Actionable advice on call management, AI phone answering, and growing the businesses that run on relationships — not algorithms.
            </motion.p>
          </div>
        </section>

        {/* Featured article */}
        <section className="mx-auto max-w-[1240px] px-6 md:px-10">
          <FeaturedCard article={featured} />
        </section>

        {/* Category filter */}
        <section className="mt-12 border-b border-border bg-surface shadow-soft">
          <div className="mx-auto max-w-[1240px] overflow-x-auto px-6 md:px-10">
            <div className="flex min-w-max gap-1 py-3">
              {CATEGORIES.map((cat) => (
                <motion.button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  whileTap={{ scale: 0.95 }}
                  className={`relative rounded-full px-4 py-2 text-[13px] font-medium transition-colors ${
                    activeCategory === cat
                      ? "text-ink"
                      : "text-ink-muted hover:text-ink"
                  }`}
                >
                  {activeCategory === cat && (
                    <motion.span
                      layoutId="blog-category-bg"
                      className="absolute inset-0 rounded-full bg-surface shadow-soft border border-border"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative">{cat}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Article grid */}
        <section className="mx-auto max-w-[1240px] px-6 py-12 md:px-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filtered.map((article, i) => (
                <ResourceCard key={article.slug} article={article} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-20 text-center text-[15px] text-ink-muted"
            >
              No articles in this category yet — check back soon.
            </motion.p>
          )}
        </section>

        {/* Newsletter */}
        <NewsletterSignup />
      </main>
      <Footer />
    </>
  );
}
