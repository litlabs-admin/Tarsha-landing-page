"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { VideoModal } from "@/components/ui/VideoModal";
import { assets, brand } from "@/lib/assets";
import { cn } from "@/lib/cn";
import { motion, useReducedMotion } from "framer-motion";
import { Phone, Play, Sparkles } from "lucide-react";
import Image from "next/image";
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
  const [open, setOpen] = useState(false);
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
      className="relative isolate overflow-hidden pt-20 md:pt-24 lg:pt-28 pb-12 md:pb-16"
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
            <Eyebrow asPill icon={<Phone className="h-3 w-3" strokeWidth={2.4} />}>
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
            className="mt-9 max-w-[42rem] text-balance text-[17px] leading-[1.65] text-ink-muted md:text-[18px]"
          >
            Tarsha AI is the answering service that keeps your phone covered, so
            you never miss a lead or leave a customer waiting.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-3"
          >
            <Button size="lg" variant="primary">
              Get started free
            </Button>
            <Button size="lg" variant="ghost" icon="arrow">
              Book a demo
            </Button>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="mt-4 text-[13px] text-ink-faint"
          >
            No credit card required · 14-day free trial
          </motion.p>
        </motion.div>

        {/* Product preview card */}
        <motion.div
          initial={{ opacity: 0, y: 56 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: reducedMotion ? 0 : 0.85,
            ease: REVEAL_EASE,
          }}
          className="relative mx-auto mt-16 max-w-[1080px] md:mt-20"
        >
          <ProductPreviewCard onPlay={() => setOpen(true)} />

          {/* Floating chat bubble decoration */}
          <FloatingChatBubble reducedMotion={!!reducedMotion} />
        </motion.div>
      </Container>

      <VideoModal
        open={open}
        onClose={() => setOpen(false)}
        videoSrc={assets.heroVideo}
        poster={assets.heroProduct}
      />
    </section>
  );
}

function ProductPreviewCard({ onPlay }: { onPlay: () => void }) {
  return (
    <motion.button
      onClick={onPlay}
      aria-label="Play Tarsha AI product demo video"
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 220, damping: 24 }}
      className={cn(
        "group relative block w-full overflow-hidden rounded-3xl text-left",
        "bg-surface shadow-card focus-ring",
        "transition-shadow duration-300 ease-out hover:shadow-lift",
      )}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={assets.heroProduct}
          alt="Tarsha AI receptionist dashboard showing live calls and call summaries"
          fill
          priority
          sizes="(min-width: 1024px) 1080px, 92vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
        />

        {/* Play overlay — appears on hover */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/85 shadow-lift backdrop-blur-md transition-all duration-300 ease-out group-hover:scale-110 group-hover:bg-white">
            <Play className="h-7 w-7 translate-x-0.5 text-ink" fill="currentColor" strokeWidth={0} />
          </div>
        </div>

        {/* Subtle gradient veneer at top for contrast */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/[0.04] to-transparent" />
      </div>

      {/* Bottom hint strip */}
      <div className="flex items-center justify-between border-t border-border/70 bg-surface px-5 py-3">
        <div className="flex items-center gap-2 text-[13px] text-ink-muted">
          <Sparkles className="h-3.5 w-3.5 text-ink-muted" strokeWidth={2} />
          <span>Watch how Tarsha AI handles a real call</span>
        </div>
        <div className="flex items-center gap-1.5 text-[12px] font-medium text-ink-muted">
          <span className="flex h-1.5 w-1.5 rounded-full bg-accent ring-2 ring-accent/30" />
          <span>1 min preview</span>
        </div>
      </div>
    </motion.button>
  );
}

function FloatingChatBubble({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20, y: 10 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.8, delay: 1.4, ease: REVEAL_EASE }}
      className="absolute -right-2 top-6 hidden md:block lg:-right-6 lg:top-10"
      aria-hidden="true"
    >
      <motion.div
        animate={
          reducedMotion ? undefined : { y: [0, -6, 0] }
        }
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="flex items-center gap-3 rounded-2xl bg-ink px-4 py-3 text-white shadow-lift"
      >
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-accent-ink">
          <span className="font-display text-[14px] font-bold">t</span>
        </div>
        <div className="text-left">
          <p className="text-[13px] font-medium leading-tight">
            Hey — I&apos;m Tarsha.
          </p>
          <p className="text-[12px] leading-tight text-white/60">
            How can I help your business?
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

function BackdropOrnaments() {
  return (
    <>
      {/* Subtle dot grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.5]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(17,17,17,0.06) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          maskImage:
            "radial-gradient(ellipse 70% 55% at 50% 25%, black 30%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 55% at 50% 25%, black 30%, transparent 70%)",
        }}
      />
      {/* Top fade so header sits on solid bg */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-24 bg-gradient-to-b from-bg to-transparent"
      />
    </>
  );
}
