"use client";

import { assets, brand } from "@/lib/assets";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Voice-agent themed page loader.
 * - Shows on first mount.
 * - Fades out when window.load fires (all resources ready) OR after a max timeout.
 * - Background resources keep loading; the loader is purely a stylish opening curtain.
 * - Honors prefers-reduced-motion by short-circuiting the wave bars.
 */
export function PageLoader() {
  const [done, setDone] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // Lock scroll while the curtain is up.
    document.body.style.overflow = "hidden";

    const minHold = 900; // never less than this so the brand moment lands
    const maxHold = 2400; // hard cap so we never block forever
    const start = performance.now();

    let unmounted = false;

    const finish = () => {
      if (unmounted) return;
      const elapsed = performance.now() - start;
      const wait = Math.max(0, minHold - elapsed);
      setTimeout(() => {
        setExiting(true);
        // Allow exit animation to play before unmounting
        setTimeout(() => setDone(true), 500);
      }, wait);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
    }

    const maxTimer = setTimeout(finish, maxHold);

    return () => {
      unmounted = true;
      window.removeEventListener("load", finish);
      clearTimeout(maxTimer);
      document.body.style.overflow = "";
    };
  }, []);

  // Once `done` we unmount the component entirely.
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={false}
          animate={exiting ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.55, ease: EASE }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-bg"
          aria-busy={!exiting}
          role="status"
          aria-label="Loading Tarsha AI"
        >
          {/* Soft lime aura behind the centerpiece */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(50% 40% at 50% 50%, rgba(255,208,0,0.16) 0%, rgba(255,208,0,0) 70%)",
            }}
          />

          <div className="relative flex flex-col items-center">
            {/* Concentric pulse rings */}
            <PulseRings exiting={exiting} />

            {/* Logo + brand */}
            <div className="relative flex items-center gap-3 px-2 py-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={
                  exiting
                    ? { opacity: 0, scale: 0.96 }
                    : { opacity: 1, scale: 1 }
                }
                transition={{ duration: 0.6, ease: EASE }}
                className="relative"
              >
                <motion.div
                  animate={{ scale: [1, 1.04, 1] }}
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative h-12 w-12"
                >
                  <Image
                    src={assets.logo}
                    alt=""
                    fill
                    sizes="48px"
                    priority
                    className="object-contain"
                  />
                </motion.div>
              </motion.div>

              <motion.span
                initial={{ opacity: 0, x: -8 }}
                animate={
                  exiting ? { opacity: 0, x: -4 } : { opacity: 1, x: 0 }
                }
                transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
                className="font-display text-[26px] font-semibold tracking-tight text-ink"
              >
                {brand.name.toLowerCase()}
              </motion.span>
            </div>

            {/* Voice waveform — 7 bars with offset height loops */}
            <div className="mt-6 flex items-center gap-[3px] h-7">
              {[0.45, 0.85, 0.6, 1, 0.7, 0.9, 0.5].map((peak, i) => (
                <motion.span
                  key={i}
                  animate={{
                    scaleY: [0.3, peak, 0.45, peak * 0.85, 0.55, peak],
                  }}
                  transition={{
                    duration: 1.1 + (i % 3) * 0.18,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.08,
                  }}
                  style={{ transformOrigin: "center" }}
                  className="block h-full w-[3px] rounded-full bg-accent"
                />
              ))}
            </div>

            {/* Caption — slow type-loop feel via opacity dot trail */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={exiting ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.25, ease: EASE }}
              className="mt-5 flex items-center gap-1.5"
            >
              <span className="text-[12px] font-medium tracking-[0.08em] text-ink-muted">
                Connecting
              </span>
              <DotTrail />
            </motion.div>
          </div>

          {/* Bottom progress hairline — fills from 0 to ~95% over the hold window */}
          <ProgressHairline exiting={exiting} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function PulseRings({ exiting }: { exiting: boolean }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute left-1/2 top-1/2 h-0 w-0"
    >
      {[0, 0.7, 1.4].map((delay, i) => (
        <motion.span
          key={i}
          initial={{ scale: 0.4, opacity: 0 }}
          animate={
            exiting
              ? { opacity: 0 }
              : { scale: [0.4, 1.6], opacity: [0.4, 0] }
          }
          transition={{
            duration: 2.1,
            repeat: Infinity,
            ease: "easeOut",
            delay,
          }}
          className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/35"
        />
      ))}
    </div>
  );
}

function DotTrail() {
  return (
    <span className="inline-flex items-end gap-0.5">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
          className="block h-1 w-1 rounded-full bg-ink-muted"
        />
      ))}
    </span>
  );
}

function ProgressHairline({ exiting }: { exiting: boolean }) {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px">
      <motion.span
        initial={{ scaleX: 0 }}
        animate={exiting ? { scaleX: 1 } : { scaleX: 0.92 }}
        transition={{
          duration: exiting ? 0.4 : 1.8,
          ease: exiting ? "easeOut" : [0.22, 1, 0.36, 1],
        }}
        style={{ transformOrigin: "left center" }}
        className="block h-full w-full bg-accent"
      />
    </div>
  );
}
