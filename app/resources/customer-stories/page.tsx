"use client";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { ArrowRight, ChevronRight, Quote, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

// ─── Count-up hook ─────────────────────────────────────────────────────────

function useCountUp(target: number, duration = 1600) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return { ref, count };
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const INDUSTRY_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  "Home Services": { bg: "#fef3c7", text: "#92400e", border: "#fde68a" },
  "Healthcare":    { bg: "#dbeafe", text: "#1e40af", border: "#bfdbfe" },
  "Real Estate":   { bg: "#d1fae5", text: "#065f46", border: "#a7f3d0" },
  "Restaurants":   { bg: "#fce7f3", text: "#9d174d", border: "#fbcfe8" },
  "Law":           { bg: "#ede9fe", text: "#4c1d95", border: "#ddd6fe" },
};

interface Story {
  id: string;
  industry: string;
  name: string;
  role: string;
  company: string;
  location: string;
  photo: string;
  quote: string;
  metrics: { label: string; value: string; delta: string }[];
  description: string;
  featured?: boolean;
}

const stories: Story[] = [
  {
    id: "marcus-premier-plumbing",
    industry: "Home Services",
    name: "Marcus Torres",
    role: "Owner",
    company: "Premier Plumbing",
    location: "Austin, TX",
    photo: "https://i.pravatar.cc/400?img=57",
    quote: "Before Tarsha, I was losing 6–8 calls every week while on job sites. Each one was $400–800 in potential work. Now I come home to a clean list of leads every evening. It paid for itself in week two.",
    metrics: [
      { label: "Calls captured", value: "100%", delta: "↑ from ~60%" },
      { label: "Monthly revenue", value: "+$8,200", delta: "new bookings" },
      { label: "Setup time", value: "8 min", delta: "from scratch" },
    ],
    description: "Marcus runs a 3-person plumbing crew in Austin. With job sites pulling him away from his phone all day, leads were slipping through the cracks. Tarsha AI now answers every call, captures the details, and texts Marcus a clean summary so he can call back during breaks.",
    featured: true,
  },
  {
    id: "priya-lakewood",
    industry: "Healthcare",
    name: "Dr. Priya Sharma",
    role: "Practice Manager",
    company: "Lakewood Family Medicine",
    location: "Denver, CO",
    photo: "https://i.pravatar.cc/400?img=44",
    quote: "Our front desk was drowning in calls. Tarsha answers, takes complete messages, and now our staff actually have time to focus on patients in the office. It's genuinely transformed how our practice runs.",
    metrics: [
      { label: "Front desk calls", value: "−62%", delta: "handled by AI" },
      { label: "Patient wait time", value: "−40%", delta: "on hold" },
      { label: "Staff satisfaction", value: "9.4/10", delta: "↑ from 6.1" },
    ],
    description: "Lakewood Family Medicine sees 120+ patients per week. The front desk was perpetually overwhelmed. Tarsha now handles appointment confirmation, hours inquiries, and after-hours messages — letting staff focus on in-person care.",
  },
  {
    id: "jennifer-harbor-real-estate",
    industry: "Real Estate",
    name: "Jennifer Kim",
    role: "Principal Broker",
    company: "Harbor Real Estate Group",
    location: "San Diego, CA",
    photo: "https://i.pravatar.cc/400?img=48",
    quote: "In real estate, speed-to-lead is everything. Tarsha catches every call while I'm showing homes and I'm back to prospects within 20 minutes. My close rate went up almost immediately.",
    metrics: [
      { label: "Lead response time", value: "18 min", delta: "↓ from 3.2 hrs" },
      { label: "Leads captured", value: "+34%", delta: "more per month" },
      { label: "Commission revenue", value: "+$47K", delta: "attributed Q1" },
    ],
    description: "Jennifer manages a 6-agent brokerage. Missed calls during showings were costing her deals. With Tarsha AI, every prospective buyer is greeted professionally and their details captured instantly.",
  },
  {
    id: "carlos-buena-vista",
    industry: "Restaurants",
    name: "Carlos Mendoza",
    role: "General Manager",
    company: "Buena Vista Restaurant",
    location: "Chicago, IL",
    photo: "https://i.pravatar.cc/400?img=33",
    quote: "During dinner rush, my staff can't be answering phones. Tarsha handles reservations, dietary questions, and hours calls — and we haven't missed a reservation inquiry since we set it up.",
    metrics: [
      { label: "Reservations captured", value: "100%", delta: "zero missed" },
      { label: "Staff interruptions", value: "−78%", delta: "during service" },
      { label: "Online reviews", value: "+4.8★", delta: "avg from 4.2★" },
    ],
    description: "Buena Vista is a 90-seat restaurant in Chicago's Wicker Park. During Friday and Saturday service, phones were ringing off the hook and staff couldn't keep up. Tarsha now handles all incoming reservation and inquiry calls, and relays detailed summaries after each shift.",
  },
  {
    id: "david-sterling-law",
    industry: "Law",
    name: "David Llewelyn",
    role: "Managing Partner",
    company: "Sterling Law Group",
    location: "Houston, TX",
    photo: "https://i.pravatar.cc/400?img=11",
    quote: "New client intake is everything for a law firm. Tarsha handles our after-hours calls with professionalism, captures the right details, and we start every morning with a full intake queue. Incredible.",
    metrics: [
      { label: "Intake calls captured", value: "100%", delta: "24/7 coverage" },
      { label: "New matters/month", value: "+22%", delta: "increase" },
      { label: "After-hours leads", value: "31%", delta: "of total intake" },
    ],
    description: "Sterling Law Group handles personal injury and employment law. A significant portion of client inquiries happen outside business hours — evenings and weekends. Tarsha captures every call and delivers structured intake summaries each morning.",
  },
  {
    id: "rosa-sunrise",
    industry: "Home Services",
    name: "Rosa Tejada",
    role: "Owner",
    company: "Sunrise Home Services",
    location: "Miami, FL",
    photo: "https://i.pravatar.cc/400?img=38",
    quote: "Most of my clients speak Spanish. Tarsha handles both English and Spanish calls flawlessly. I've picked up three times more Spanish-speaking clients since switching — it's been a game changer.",
    metrics: [
      { label: "Spanish leads captured", value: "3×", delta: "more per month" },
      { label: "Bilingual coverage", value: "24/7", delta: "English & Spanish" },
      { label: "Revenue growth", value: "+68%", delta: "in 90 days" },
    ],
    description: "Rosa runs a residential cleaning business in Miami's bilingual market. Before Tarsha, Spanish-speaking callers who couldn't get through in English often gave up. Now every caller is served in their preferred language.",
  },
];

const FILTERS = ["All", "Home Services", "Healthcare", "Real Estate", "Restaurants", "Law"];

const featuredStory = stories.find((s) => s.featured)!;
const otherStories = stories.filter((s) => !s.featured);

// ─── Stat counter ─────────────────────────────────────────────────────────────

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, count } = useCountUp(value);
  return (
    <div className="flex flex-col items-center px-2 py-2 text-center">
      <span ref={ref} className="font-display text-[1.6rem] font-bold tracking-tighter2 text-ink md:text-[2.5rem]">
        {count.toLocaleString()}{suffix}
      </span>
      <span className="mt-1 text-[11px] leading-snug text-ink-muted md:text-[13px]">{label}</span>
    </div>
  );
}

// ─── Story card ───────────────────────────────────────────────────────────────

function StoryCard({ story, index }: { story: Story; index: number }) {
  const colors = INDUSTRY_COLORS[story.industry] ?? { bg: "#f3f4f6", text: "#374151", border: "#e5e7eb" };

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: EASE }}
      whileHover={{ y: -5 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-soft transition-shadow duration-300 hover:shadow-lift"
    >
      {/* Top section */}
      <div className="relative overflow-hidden bg-surface-muted/60 p-6 pb-0">
        <div
          className="absolute inset-0 opacity-40"
          style={{ background: `radial-gradient(ellipse at 80% 0%, ${colors.bg}, transparent 70%)` }}
        />
        <div className="relative flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-full border-2 border-border bg-surface-muted shadow-soft">
              <Image src={story.photo} alt={story.name} fill className="object-cover" sizes="56px" />
            </div>
            <div>
              <p className="font-display text-[15px] font-bold text-ink">{story.name}</p>
              <p className="text-[12px] text-ink-muted">{story.role}, {story.company}</p>
              <p className="text-[11px] text-ink-faint">{story.location}</p>
            </div>
          </div>
          <span
            className="shrink-0 rounded-full px-2.5 py-1 text-[10px] font-semibold"
            style={{ backgroundColor: colors.bg, color: colors.text, border: `1px solid ${colors.border}` }}
          >
            {story.industry}
          </span>
        </div>

        {/* Stars */}
        <div className="relative mt-4 flex gap-0.5">
          {[1,2,3,4,5].map((s) => (
            <Star key={s} className="h-3.5 w-3.5 fill-accent text-accent" />
          ))}
        </div>
      </div>

      {/* Quote */}
      <div className="flex flex-1 flex-col p-6 pt-4">
        <Quote className="mb-2 h-5 w-5 text-accent/40" />
        <p className="flex-1 text-[14px] leading-relaxed text-ink">
          &ldquo;{story.quote}&rdquo;
        </p>

        {/* Metrics */}
        <div className="mt-5 grid grid-cols-3 gap-2 rounded-xl border border-border bg-surface-muted/60 p-3">
          {story.metrics.map((m) => (
            <div key={m.label} className="flex flex-col items-center text-center">
              <span className="font-display text-[15px] font-bold text-ink">{m.value}</span>
              <span className="mt-0.5 text-[10px] font-medium text-accent">{m.delta}</span>
              <span className="mt-0.5 text-[10px] text-ink-faint">{m.label}</span>
            </div>
          ))}
        </div>

        <Link
          href={`/resources/customer-stories/${story.id}`}
          className="mt-4 flex items-center gap-1 text-[13px] font-semibold text-ink-muted transition-colors group-hover:text-ink"
        >
          Read full story <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CustomerStoriesPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const headlineRef = useRef<HTMLSpanElement>(null);
  const headlineInView = useInView(headlineRef, { once: true });

  const filtered = activeFilter === "All"
    ? otherStories
    : otherStories.filter((s) => s.industry === activeFilter);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-bg pt-[72px]">

        {/* Hero */}
        <section className="relative overflow-hidden py-20 md:py-28">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/4 top-0 h-[500px] w-[600px] rounded-full bg-accent/8 blur-[120px]" />
            <div className="absolute right-0 top-1/4 h-[300px] w-[400px] rounded-full bg-accent/5 blur-[80px]" />
          </div>
          <div className="relative mx-auto max-w-[960px] px-6 text-center md:px-10">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="mb-5 text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-muted"
            >
              <span className="mr-2 inline-block h-1.5 w-1.5 translate-y-[-1px] rounded-full bg-accent align-middle" />
              Customer Stories
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: EASE }}
              className="section-heading font-display font-bold tracking-tighter2 text-ink"
            >
              Real businesses.{" "}
              <span ref={headlineRef} className={`accent-underline${headlineInView ? " is-revealed" : ""}`}>
                Real results.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18, ease: EASE }}
              className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-ink-muted"
            >
              See how small businesses across the US are using Tarsha AI to stop missing calls, capture more leads, and grow without adding headcount.
            </motion.p>
          </div>
        </section>

        {/* Stats bar */}
        <section className="border-y border-border bg-surface py-10">
          <div className="mx-auto max-w-[960px] px-6 md:px-10">
            <div className="grid grid-cols-3 gap-0 divide-x divide-border">
              <StatCounter value={50000} suffix="+" label="calls answered every month" />
              <StatCounter value={1200} suffix="+" label="businesses using Tarsha AI" />
              <StatCounter value={49} suffix="/50" label="average customer rating" />
            </div>
          </div>
        </section>

        {/* Featured story */}
        <section className="mx-auto max-w-[1240px] px-6 py-16 md:px-10">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE }}
            className="mb-6 text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-muted"
          >
            Featured story
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: EASE }}
            className="overflow-hidden rounded-3xl border border-border bg-surface shadow-card md:grid md:grid-cols-[1fr_420px]"
          >
            {/* Content */}
            <div className="flex flex-col justify-center p-8 md:p-12">
              <div className="flex items-center gap-3">
                <span
                  className="rounded-full px-2.5 py-1 text-[10px] font-semibold"
                  style={{
                    backgroundColor: INDUSTRY_COLORS[featuredStory.industry]?.bg,
                    color: INDUSTRY_COLORS[featuredStory.industry]?.text,
                    border: `1px solid ${INDUSTRY_COLORS[featuredStory.industry]?.border}`,
                  }}
                >
                  {featuredStory.industry}
                </span>
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map((s) => <Star key={s} className="h-3.5 w-3.5 fill-accent text-accent" />)}
                </div>
              </div>

              <blockquote className="mt-6">
                <Quote className="mb-3 h-6 w-6 text-accent/40" />
                <p className="font-display text-[1.2rem] font-medium leading-relaxed text-ink md:text-[1.4rem]">
                  &ldquo;{featuredStory.quote}&rdquo;
                </p>
              </blockquote>

              <div className="mt-6 flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-full border border-border bg-surface-muted">
                  <Image src={featuredStory.photo} alt={featuredStory.name} fill className="object-cover" sizes="48px" />
                </div>
                <div>
                  <p className="font-display text-[15px] font-bold text-ink">{featuredStory.name}</p>
                  <p className="text-[13px] text-ink-muted">{featuredStory.role} · {featuredStory.company} · {featuredStory.location}</p>
                </div>
              </div>

              {/* Metrics */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                {featuredStory.metrics.map((m, i) => (
                  <motion.div
                    key={m.label}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.45, ease: EASE }}
                    className="rounded-xl border border-border bg-surface-muted/60 p-3 text-center"
                  >
                    <p className="font-display text-[1.4rem] font-bold text-ink">{m.value}</p>
                    <p className="mt-0.5 text-[11px] font-semibold text-accent">{m.delta}</p>
                    <p className="mt-0.5 text-[11px] text-ink-faint">{m.label}</p>
                  </motion.div>
                ))}
              </div>

              <Link
                href={`/resources/customer-stories/${featuredStory.id}`}
                className="mt-8 inline-flex items-center gap-2 self-start rounded-xl bg-ink px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-ink/80"
              >
                Read full story <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Photo */}
            <div className="relative h-[300px] overflow-hidden bg-surface-muted md:h-auto">
              <Image
                src={featuredStory.photo}
                alt={featuredStory.name}
                fill
                className="object-cover object-top"
                sizes="420px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-md">
                <p className="text-[13px] font-semibold text-white">{featuredStory.company}</p>
                <p className="text-[12px] text-white/70">{featuredStory.location}</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Filter + grid */}
        <section className="mx-auto max-w-[1240px] px-6 pb-20 md:px-10">
          <div className="mb-8 flex items-center justify-between gap-4">
            <h2 className="font-display text-[1.4rem] font-bold tracking-tight text-ink">
              More stories
            </h2>
            <div className="flex flex-wrap gap-2">
              {FILTERS.map((f) => (
                <motion.button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  whileTap={{ scale: 0.95 }}
                  className={`rounded-full border px-3.5 py-1.5 text-[12px] font-medium transition-all ${
                    activeFilter === f
                      ? "border-ink bg-ink text-white"
                      : "border-border bg-surface text-ink-muted hover:border-ink/40 hover:text-ink"
                  }`}
                >
                  {f}
                </motion.button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {filtered.map((story, i) => (
                <StoryCard key={story.id} story={story} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        </section>

        {/* CTA */}
        <section className="bg-ink py-20">
          <div className="mx-auto max-w-[960px] px-6 text-center md:px-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <h2 className="font-display text-[2rem] font-bold tracking-tighter2 text-white md:text-[2.75rem]">
                Your business could be{" "}
                <span className="text-accent">next</span>.
              </h2>
              <p className="mx-auto mt-4 max-w-md text-[16px] leading-relaxed text-white/60">
                Join 1,200+ small businesses that never miss a call. Try Tarsha AI free for 14 days — no credit card required.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/#pricing"
                  className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-[15px] font-semibold text-ink transition-opacity hover:opacity-90"
                >
                  Start free trial <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/#demo"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Book a demo
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
