"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { brand } from "@/lib/assets";
import { cn } from "@/lib/cn";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const REVEAL_EASE = [0.22, 1, 0.36, 1] as const;

const headlineParts = [
  { text: "AI receptionist that", accent: false },
  { text: "answers calls", accent: false },
];
const accentLine = {
  prefix: "while you",
  highlight: "run your business",
};

export function Hero() {
  const [revealed, setRevealed] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const timer = setTimeout(() => setRevealed(true), reducedMotion ? 0 : 1100);
    return () => clearTimeout(timer);
  }, [reducedMotion]);

  const containerVariants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: reducedMotion ? 0 : 0.08,
        delayChildren: reducedMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: REVEAL_EASE },
    },
  };

  const headlineWord = {
    hidden: { opacity: 0, y: 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: REVEAL_EASE },
    },
  };

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-surface-muted pt-20 md:pt-24 lg:pt-28 pb-10 md:pb-12"
    >
      {/* Ambient backdrop — soft conic gradient + grid */}
      <BackdropOrnaments />

      <Container className="relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center"
        >
          <motion.div variants={itemVariants}>
            <Eyebrow asPill>
              <span className="text-ink-muted">Call our AI receptionist · </span>
              <span className="font-semibold text-ink">{brand.phoneDisplay}</span>
            </Eyebrow>
          </motion.div>

          <motion.h1
            id="hero-heading"
            className="hero-display mt-10 max-w-[22ch] font-display text-ink"
          >
            <span className="block">
              {headlineParts.map((p, i) => (
                <motion.span
                  key={i}
                  variants={headlineWord}
                  className="mr-[0.25em] inline-block"
                >
                  {p.text}
                </motion.span>
              ))}
            </span>
            <span className="block">
              <motion.span
                variants={headlineWord}
                className="mr-[0.25em] inline-block text-ink-muted"
              >
                {accentLine.prefix}
              </motion.span>
              <motion.span
                variants={headlineWord}
                className={cn(
                  "inline-block accent-underline",
                  revealed && "is-revealed",
                )}
              >
                {accentLine.highlight}
              </motion.span>
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-9 max-w-[42rem] text-balance text-[18px] leading-[1.7] text-ink-muted md:text-[19px]"
          >
            <span className="text-[#B8960A] font-semibold">Tarsha AI</span> is the answering service that keeps your phone covered, so
            you never miss a lead or leave a customer waiting.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-row items-center justify-center gap-3"
          >
            <Button size="md" variant="primary" className="sm:h-12 sm:px-6 sm:text-[15px]">
              Get started free
            </Button>
            <Button size="md" variant="ghost" icon="arrow" className="border border-border sm:h-12 sm:px-6 sm:text-[15px]">
              Book a demo
            </Button>
          </motion.div>

          
        </motion.div>

      </Container>

    </section>
  );
}

function BackdropOrnaments() {
  return (
    <>
      {/* Very light yellow tint */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[rgba(255,208,0,0.04)]"
      />
      {/* Subtle warm dot grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(rgba(24,19,10,0.05) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 40%, black 20%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 40%, black 20%, transparent 75%)",
        }}
      />
      {/* Bottom fade into next section */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-bg to-transparent"
      />
    </>
  );
}
