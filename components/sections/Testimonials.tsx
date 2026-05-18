"use client";

import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { cn } from "@/lib/cn";
import { motion } from "framer-motion";
import Image from "next/image";

const EASE = [0.22, 1, 0.36, 1] as const;

type CardType = "tall" | "mid" | "short";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  img: string;
  type: CardType;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "We used to miss calls every time we were in court. Tarsha AI handles every new client inquiry instantly — we've booked 3 extra consultations a week from calls we would have lost.",
    name: "Linda Mensah",
    role: "Managing Partner",
    company: "Mensah & Associates Law",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=480&h=600&fit=crop&crop=faces&q=85",
    type: "tall",
  },
  {
    quote:
      "Working with Tarsha AI was a game-changer. Our customers actually compliment our phone service now — something we never heard before.",
    name: "David Okoro",
    role: "Partner",
    company: "Okoro Legal Group",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=640&h=360&fit=crop&crop=faces&q=85",
    type: "short",
  },
  {
    quote:
      "In real estate, speed is everything. Tarsha AI qualifies my leads and books showings while I'm with another client. I haven't missed a hot lead in months.",
    name: "Aisha Boateng",
    role: "Real Estate Agent",
    company: "Casa Real Estate",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=500&fit=crop&crop=faces&q=85",
    type: "mid",
  },
  {
    quote:
      "I was losing jobs to competitors who answered faster. Now Tarsha AI picks up every call, captures the job details, and I follow up when I'm free.",
    name: "James Calloway",
    role: "Owner",
    company: "Calloway HVAC Services",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=480&h=600&fit=crop&crop=faces&q=85",
    type: "tall",
  },
  {
    quote:
      "Our dental office gets flooded with appointment requests. Tarsha AI handles routine calls so our team can focus on patients who are actually in the building.",
    name: "Sofia Andrade",
    role: "Practice Manager",
    company: "Andrade Family Dental",
    img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=640&h=360&fit=crop&crop=faces&q=85",
    type: "short",
  },
  {
    quote:
      "Clients call at all hours for policy questions. Tarsha AI is professional, never makes a caller feel ignored. My client retention has visibly improved.",
    name: "Michael Reeves",
    role: "Independent Agent",
    company: "Reeves Insurance Group",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=500&fit=crop&crop=faces&q=85",
    type: "mid",
  },
];

const aspectClass: Record<CardType, string> = {
  tall: "aspect-[4/5]",
  mid: "aspect-square",
  short: "aspect-video",
};

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
            "0 1px 3px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.04)",
        },
        hovered: {
          y: -2,
          boxShadow:
            "0 4px 16px rgba(0,0,0,0.10), 0 8px 24px rgba(0,0,0,0.06)",
        },
      }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="overflow-hidden rounded-2xl bg-surface cursor-default"
    >
      {/* Image block */}
      <div className={cn("relative w-full overflow-hidden", aspectClass[t.type])}>
        <motion.div
          variants={{ rest: { scale: 1 }, hovered: { scale: 1.08 } }}
          transition={{ duration: 0.4, ease: "easeOut" }}
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
          className="absolute inset-x-0 bottom-0 pt-10 px-4 pb-4"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 100%)",
          }}
        >
          <p
            className="text-[18px] font-bold leading-tight text-white"
            style={{ textShadow: "0 1px 4px rgba(0,0,0,0.3)" }}
          >
            {t.name}
          </p>
          <p
            className="mt-0.5 text-[13px] font-medium text-white/85"
            style={{ textShadow: "0 1px 4px rgba(0,0,0,0.3)" }}
          >
            {t.role} · {t.company}
          </p>
        </div>
      </div>

      {/* Quote block */}
      <div className="px-4 py-3.5">
        <p className="text-[14px] leading-[1.45] text-ink">
          &ldquo;{t.quote}&rdquo;
        </p>
      </div>
    </motion.article>
  );
}

export function Testimonials() {
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

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 pb-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.05 * i }}
              className="break-inside-avoid mb-5"
            >
              <TestimonialCard t={t} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
