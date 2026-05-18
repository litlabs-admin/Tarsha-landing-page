"use client";

import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { motion, useReducedMotion } from "framer-motion";
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

const testimonials: Testimonial[] = [
  {
    quote:
      "We used to miss calls every time we were in court. Tarsha AI handles every new client inquiry instantly — we've booked 3 extra consultations a week from calls we would have lost.",
    name: "Linda Mensah",
    role: "Managing Partner",
    company: "Mensah & Associates Law",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=640&h=800&fit=crop&crop=faces&q=85",
  },
  {
    quote:
      "Working with Tarsha AI was a game-changer. Our customers actually compliment our phone service now — something we never heard before.",
    name: "David Okoro",
    role: "Partner",
    company: "Okoro Legal Group",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=640&h=800&fit=crop&crop=faces&q=85",
  },
  {
    quote:
      "In real estate, speed is everything. Tarsha AI qualifies my leads and books showings while I'm with another client. I haven't missed a hot lead in months.",
    name: "Aisha Boateng",
    role: "Real Estate Agent",
    company: "Casa Real Estate",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=640&h=800&fit=crop&crop=faces&q=85",
  },
  {
    quote:
      "I was losing jobs to competitors who answered faster. Now Tarsha AI picks up every call, captures the job details, and I follow up when I'm free.",
    name: "James Calloway",
    role: "Owner",
    company: "Calloway HVAC Services",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=640&h=800&fit=crop&crop=faces&q=85",
  },
  {
    quote:
      "Our dental office gets flooded with appointment requests. Tarsha AI handles routine calls so our team can focus on patients who are actually in the building.",
    name: "Sofia Andrade",
    role: "Practice Manager",
    company: "Andrade Family Dental",
    img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=640&h=800&fit=crop&crop=faces&q=85",
  },
  {
    quote:
      "Clients call at all hours for policy questions. Tarsha AI is professional, never makes a caller feel ignored. My client retention has visibly improved.",
    name: "Michael Reeves",
    role: "Independent Agent",
    company: "Reeves Insurance Group",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=640&h=800&fit=crop&crop=faces&q=85",
  },
];

// Duplicate for seamless infinite loop
const doubled = [...testimonials, ...testimonials];

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <motion.article
      whileHover={{ scale: 1.02, transition: { type: "spring", stiffness: 280, damping: 22 } }}
      className="relative flex-shrink-0 overflow-hidden rounded-2xl w-[320px] h-[460px] shadow-lift"
    >
      {/* Full-bleed portrait */}
      <Image
        src={t.img}
        alt={t.name}
        fill
        sizes="320px"
        quality={90}
        className="object-cover object-top"
      />

      {/* Cinematic gradient — transparent top, near-black bottom */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(24,19,10,0.96) 0%, rgba(24,19,10,0.80) 28%, rgba(24,19,10,0.40) 52%, rgba(24,19,10,0.10) 68%, transparent 82%)",
        }}
      />

      {/* Text block — pinned to card bottom */}
      <div className="absolute inset-x-0 bottom-0 z-10 px-5 pb-5">
        <span aria-hidden className="block font-display text-[36px] leading-none text-accent -mb-1">
          &ldquo;
        </span>
        <blockquote className="text-[13px] leading-[1.65] text-white line-clamp-6">
          {t.quote}&rdquo;
        </blockquote>
        <div className="mt-3 border-t border-white/15 pt-3">
          <p className="text-[12.5px] font-semibold text-white leading-tight">{t.name}</p>
          <p className="text-[11px] leading-tight text-white/55">
            {t.role} &middot; {t.company}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

function Ticker() {
  const [paused, setPaused] = useState(false);
  const reducedMotion = useReducedMotion();

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Left edge fade */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20"
        style={{
          background: "linear-gradient(to right, #FFFBEA, transparent)",
        }}
      />
      {/* Right edge fade */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20"
        style={{
          background: "linear-gradient(to left, #FFFBEA, transparent)",
        }}
      />

      {/* Scrolling track */}
      <div
        className="flex gap-5 py-4"
        style={{
          animation: reducedMotion ? "none" : "marquee 45s linear infinite",
          animationPlayState: paused ? "paused" : "running",
          width: "max-content",
        }}
      >
        {doubled.map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} t={t} />
        ))}
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 bg-surface-muted overflow-hidden"
    >
      {/* Heading — inside Container */}
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-4 flex justify-center"
        >
          <Eyebrow asPill>Testimonial</Eyebrow>
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

        
      </Container>

      {/* Full-width ticker — no Container wrapper */}
      <Ticker />
    </section>
  );
}
