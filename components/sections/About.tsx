"use client";

import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { Fragment, useMemo, useRef } from "react";

const PARAGRAPHS: string[] = [
  "Tarsha AI helps businesses **never miss another customer call**. Powered by real-time Voice AI, Tarsha AI answers instantly, qualifies leads, and books appointments — all with a **natural, human-like voice**.",
  "Built for SMBs that can't justify full-time reception staff, Tarsha AI replaces voicemail dead ends with **intelligent conversations** that scale customer support **without scaling headcount**.",
];

// Scroll progress window for the reveal.
// Start slightly later so text is already entering view when animation begins.
const REVEAL_START = 0.04;
const REVEAL_END = 0.62;

const EASE = [0.22, 1, 0.36, 1] as const;

// --- Parse ----------------------------------------------------------------

function parseSegments(src: string): { text: string; accent: boolean }[] {
  const segments: { text: string; accent: boolean }[] = [];
  let i = 0;
  while (i < src.length) {
    const marker = src.indexOf("**", i);
    if (marker === -1) {
      segments.push({ text: src.slice(i), accent: false });
      break;
    }
    if (marker > i) {
      segments.push({ text: src.slice(i, marker), accent: false });
    }
    const close = src.indexOf("**", marker + 2);
    if (close === -1) {
      segments.push({ text: src.slice(marker), accent: false });
      break;
    }
    segments.push({ text: src.slice(marker + 2, close), accent: true });
    i = close + 2;
  }
  return segments;
}

function tokenize(text: string) {
  const parts = text.split(/(\s+)/);
  return parts
    .filter((p) => p.length > 0)
    .map((p) => ({ text: p, isWord: !/^\s+$/.test(p) }));
}

// --- Component ------------------------------------------------------------

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 25%"],
  });

  const parsed = useMemo(
    () =>
      PARAGRAPHS.map((p) =>
        parseSegments(p).map((seg) => ({ ...seg, tokens: tokenize(seg.text) })),
      ),
    [],
  );

  const totalWords = useMemo(
    () =>
      parsed.reduce(
        (sum, para) =>
          sum +
          para.reduce(
            (s, seg) => s + seg.tokens.filter((t) => t.isWord).length,
            0,
          ),
        0,
      ),
    [parsed],
  );

  const revealRange = REVEAL_END - REVEAL_START;
  // Wider window = each word transitions slower & overlaps more with neighbours.
  const stagger = revealRange / Math.max(totalWords, 1);
  const windowSize = stagger * 6;

  let wordCursor = 0;

  return (
    <section
      ref={sectionRef}
      id="about"
      aria-labelledby="about-heading"
      className="relative isolate overflow-hidden bg-bg py-16 md:py-24"
    >
      <Backdrop />

      <Container>
        <div className="mx-auto max-w-[860px]">
          {/* Section heading — centered */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="mb-16 flex flex-col items-center text-center md:mb-24"
          >
            <span
              aria-hidden
              className="mb-6 inline-flex h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_0_5px_rgba(255,208,0,0.28)]"
            />
            <h2
              id="about-heading"
              className="font-display font-semibold tracking-[-0.025em] text-ink text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05]"
            >
              Why we built <span className="text-accent">Tarsha AI</span>.
            </h2>
          </motion.div>

          {/* Body — two large editorial paragraphs with per-word scroll reveal */}
          <div className="flex flex-col gap-14 md:gap-18">
            {parsed.map((paragraph, pIdx) => (
              <p
                key={pIdx}
                className={cn(
                  "font-display font-semibold tracking-[-0.022em]",
                  "text-[clamp(1.625rem,3.2vw,2.625rem)] leading-[1.35]",
                  "text-center",
                )}
              >
                {paragraph.map((seg, segIdx) => {
                  const segWords = seg.tokens.filter((t) => t.isWord).length;
                  const segStartCursor = wordCursor;
                  wordCursor += segWords;

                  let localWordIdx = 0;
                  const content = seg.tokens.map((tok, tIdx) => {
                    if (!tok.isWord) {
                      return <Fragment key={tIdx}>{tok.text}</Fragment>;
                    }
                    const globalIdx = segStartCursor + localWordIdx;
                    localWordIdx++;
                    const start = REVEAL_START + globalIdx * stagger;
                    const end = Math.min(REVEAL_END, start + windowSize);
                    return (
                      <Word
                        key={tIdx}
                        text={tok.text}
                        scrollProgress={scrollYProgress}
                        start={start}
                        end={end}
                        accent={seg.accent}
                        reducedMotion={!!reducedMotion}
                      />
                    );
                  });

                  if (seg.accent) {
                    return (
                      <span
                        key={segIdx}
                        style={{
                          backgroundImage:
                            "linear-gradient(180deg, transparent 0%, transparent 62%, var(--accent) 62%, var(--accent) 92%, transparent 92%)",
                          boxDecorationBreak: "clone",
                          WebkitBoxDecorationBreak: "clone",
                        }}
                      >
                        {content}
                      </span>
                    );
                  }
                  return <Fragment key={segIdx}>{content}</Fragment>;
                })}
              </p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

// Color constants — warm tan to full ink. Avoids variable references
// inside useTransform which only accepts resolved values.
const COLOR_UNREVEALED = "rgb(180, 155, 80)"; // warm golden tan, visible on --bg
const COLOR_REVEALED = "rgb(24, 19, 10)";      // --ink

function Word({
  text,
  scrollProgress,
  start,
  end,
  accent,
  reducedMotion,
}: {
  text: string;
  scrollProgress: MotionValue<number>;
  start: number;
  end: number;
  accent: boolean;
  reducedMotion: boolean;
}) {
  const color = useTransform(
    scrollProgress,
    [start, end],
    [COLOR_UNREVEALED, COLOR_REVEALED],
  );
  const opacity = useTransform(scrollProgress, [start, end], [0.38, 1]);
  const y = useTransform(scrollProgress, [start, end], [10, 0]);

  if (reducedMotion) {
    return <span>{text}</span>;
  }

  return (
    <motion.span
      style={{
        color,
        opacity,
        y,
        display: "inline-block",
        willChange: "color, opacity, transform",
      }}
    >
      {text}
    </motion.span>
  );
}

function Backdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-surface-muted/60 to-transparent"
    />
  );
}
