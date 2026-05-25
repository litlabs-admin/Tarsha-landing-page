"use client";

import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  img: string;
}

const allTestimonials: Testimonial[] = [
  // ── Initial 3 ──────────────────────────────────────────────────────────────
  {
    quote:
      "Working with Tarsha AI was a game-changer. Our customers actually compliment our phone service now, something we never heard before.",
    name: "Will Sinclair",
    role: "Sales Director",
    company: "Sales Geek",
    img: "/assets/william.png",
  },
  {
    quote:
      "I was losing jobs to competitors who answered faster. Now Tarsha AI picks up every call, captures the job details, and I follow up when I'm free.",
    name: "Calum Maguire",
    role: "Director",
    company: "RACAM Security & Communications Ltd",
    img: "/assets/callum.png",
  },
  {
    quote:
      "Clients call at all hours for policy questions. Tarsha AI is professional, never makes a caller feel ignored. My client retention has visibly improved.",
    name: "Jim Craig",
    role: "Managing Director",
    company: "RoswellIt",
    img: "/assets/jim.png",
  },
  // ── Extra 3 (hidden behind See More) ───────────────────────────────────────
  {
    quote:
      "Reservation calls were killing us during dinner service. Tarsha AI handles every booking now, our staff focuses entirely on the guests already in the restaurant.",
    name: "Marcus Thompson",
    role: "Owner",
    company: "Thompson's Bistro",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=480&h=640&fit=crop&crop=faces&q=85",
  },
  {
    quote:
      "Missed calls during depositions cost us clients. Tarsha AI qualifies every lead within seconds. We've signed four new clients from calls we would have otherwise lost.",
    name: "Ryan Patel",
    role: "Managing Attorney",
    company: "Patel Law Office",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=480&h=640&fit=crop&crop=faces&q=85",
  },
  {
    quote:
      "When I'm on a job site I can't pick up the phone. Tarsha AI captures every service request with all the details I need, no more playing phone tag with customers.",
    name: "Kevin Brooks",
    role: "Owner",
    company: "Brooks Electric",
    img: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=480&h=640&fit=crop&crop=faces&q=85",
  },
];

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <motion.article
      whileHover="hovered"
      initial="rest"
      animate="rest"
      variants={{
        rest: {
          y: 0,
          boxShadow:
            "0 1px 3px rgba(24,19,10,0.05), 0 6px 20px rgba(24,19,10,0.05)",
        },
        hovered: {
          y: -4,
          boxShadow:
            "0 0 0 1px rgba(234,216,112,0.7), 0 14px 34px rgba(24,19,10,0.12)",
        },
      }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface cursor-default"
    >
      {/* Image block, uniform 3/4 portrait for all cards */}
      <div className="relative w-full aspect-[3/4] overflow-hidden flex-shrink-0">
        <motion.div
          variants={{ rest: { scale: 1 }, hovered: { scale: 1.06 } }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={t.img}
            alt={t.name}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            quality={90}
            className="object-cover object-top"
          />
        </motion.div>

        {/* Name overlay */}
        <div
          className="absolute inset-x-0 bottom-0 px-5 pb-4 pt-14"
          style={{
            background:
              "linear-gradient(to top, rgba(15,12,3,0.82) 0%, rgba(15,12,3,0.30) 55%, transparent 100%)",
          }}
        >
          <p
            className="font-display text-[19px] font-bold leading-tight text-white"
            style={{ textShadow: "0 1px 6px rgba(0,0,0,0.35)" }}
          >
            {t.name}
          </p>
          <p
            className="mt-1 text-[12.5px] font-medium leading-snug text-white/85"
            style={{ textShadow: "0 1px 6px rgba(0,0,0,0.35)" }}
          >
            {t.role} · {t.company}
          </p>
        </div>
      </div>

      {/* Quote block, grows to fill remaining card height */}
      <div className="relative flex flex-1 flex-col px-5 pb-6 pt-5">
        {/* Decorative quotation mark */}
        <span
          aria-hidden
          className="pointer-events-none absolute right-4 top-1 select-none font-display text-[64px] leading-none"
          style={{ color: "rgba(255,208,0,0.32)" }}
        >
          &rdquo;
        </span>

        {/* Star rating */}
        <div className="mb-3 flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className="h-3.5 w-3.5 fill-accent text-accent"
              strokeWidth={0}
            />
          ))}
        </div>

        <p className="relative text-[14.5px] leading-[1.65] text-ink/90">
          {t.quote}
        </p>
      </div>
    </motion.article>
  );
}

export function Testimonials() {
  const [expanded, setExpanded] = useState(false);
  const initial = allTestimonials.slice(0, 3);
  const extra = allTestimonials.slice(3);

  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 bg-surface-muted overflow-hidden"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-4 flex justify-center"
        >
          <Eyebrow asPill>Testimonials</Eyebrow>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.07, ease: EASE }}
          className="section-heading text-center text-ink mb-12 md:mb-16"
        >
          Loved by businesses{" "}
          <span className="text-accent">around the world</span>
        </motion.h2>

        {/* Uniform CSS Grid, all cards same height per row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Always-visible initial 3 */}
          {initial.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.05 * i }}
            >
              <TestimonialCard t={t} />
            </motion.div>
          ))}

          {/* Extra 3, staggered enter/exit */}
          <AnimatePresence>
            {expanded &&
              extra.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 32, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 16, scale: 0.97 }}
                  transition={{ duration: 0.55, ease: EASE, delay: 0.08 * i }}
                >
                  <TestimonialCard t={t} />
                </motion.div>
              ))}
          </AnimatePresence>
        </div>

        {/* See more / Show less button */}
        <div className="mt-8 flex justify-center">
          <motion.button
            onClick={() => setExpanded((v) => !v)}
            whileHover={{ y: -1, boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="flex items-center gap-2.5 rounded-full border border-border bg-surface px-6 py-3 text-[14px] font-medium text-ink shadow-soft hover:border-ink/25 transition-colors duration-200"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={expanded ? "less" : "more"}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.18 }}
              >
                {expanded ? "Show less" : "See 3 more stories"}
              </motion.span>
            </AnimatePresence>
            <motion.span
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="flex items-center"
            >
              <ChevronDown className="h-4 w-4 text-ink-muted" strokeWidth={2} />
            </motion.span>
          </motion.button>
        </div>
      </Container>
    </section>
  );
}
