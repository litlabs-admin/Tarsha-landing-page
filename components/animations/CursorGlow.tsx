"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface CursorGlowProps {
  /** Glow radius in px (also controls blur softness). */
  size?: number;
  /** Glow opacity multiplier (0–1). */
  intensity?: number;
}

/**
 * Section-scoped cursor-tracked cloudy glow.
 * Mount inside a `relative` parent (e.g. the Hero section) and it will
 * track the pointer ONLY within that parent's bounds.
 *
 * Auto-disabled on touch devices and when prefers-reduced-motion is set.
 */
export function CursorGlow({ size = 560, intensity = 1 }: CursorGlowProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(-9999);
  const y = useMotionValue(-9999);
  const sx = useSpring(x, { stiffness: 140, damping: 22, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 140, damping: 22, mass: 0.6 });
  const [visible, setVisible] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    // Listen on the parent of our wrapper so the glow tracks only within
    // its hosting section. We attach to the immediate offset parent.
    const parent = wrapRef.current?.parentElement;
    if (!parent) return;

    const handleMove = (e: PointerEvent) => {
      const rect = parent.getBoundingClientRect();
      x.set(e.clientX - rect.left);
      y.set(e.clientY - rect.top);
      setVisible(true);
    };
    const handleLeave = () => setVisible(false);
    const handleEnter = () => setVisible(true);

    parent.addEventListener("pointermove", handleMove);
    parent.addEventListener("pointerleave", handleLeave);
    parent.addEventListener("pointerenter", handleEnter);

    return () => {
      parent.removeEventListener("pointermove", handleMove);
      parent.removeEventListener("pointerleave", handleLeave);
      parent.removeEventListener("pointerenter", handleEnter);
    };
  }, [reducedMotion, x, y]);

  if (reducedMotion) return null;

  return (
    <div
      ref={wrapRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
    >
      {/* Primary cloudy lime tint — multiply blend so it sinks into the page */}
      <motion.div
        style={{
          x: sx,
          y: sy,
          width: size,
          height: size,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(closest-side, rgba(255,208,0,0.62) 0%, rgba(255,208,0,0) 65%)",
          opacity: visible ? 0.85 * intensity : 0,
          filter: "blur(42px)",
          mixBlendMode: "multiply",
        }}
        transition={{ opacity: { duration: 0.6, ease: "easeOut" } }}
        className="absolute left-0 top-0 rounded-full"
      />
      {/* Soft white core — soft-light blend so it brightens the underlying surface */}
      <motion.div
        style={{
          x: sx,
          y: sy,
          width: size * 0.42,
          height: size * 0.42,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(closest-side, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0) 70%)",
          opacity: visible ? 0.6 * intensity : 0,
          filter: "blur(28px)",
          mixBlendMode: "soft-light",
        }}
        transition={{ opacity: { duration: 0.6, ease: "easeOut" } }}
        className="absolute left-0 top-0 rounded-full"
      />
    </div>
  );
}
