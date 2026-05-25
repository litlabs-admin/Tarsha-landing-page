"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { brand } from "@/lib/assets";

interface SolutionCTAProps {
  heading: string;
  subheading?: string;
}

export function SolutionCTA({
  heading,
  subheading = "No contracts. No setup fees. Cancel any time.",
}: SolutionCTAProps) {
  return (
    <section className="relative overflow-hidden bg-surface-muted/60 py-24 md:py-32">
      {/* Decorative yellow glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/18 blur-[90px]" />

      {/* Subtle dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle, #18130A 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black, transparent)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black, transparent)",
        }}
      />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <ScrollReveal y={18} amount={0.3} once>
          <h2 className="font-display text-[2.25rem] font-bold leading-tight text-ink md:text-[3rem]">
            {heading}
          </h2>
          {subheading && (
            <p className="mt-4 text-[16px] text-ink-muted">{subheading}</p>
          )}
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button size="lg" variant="primary" icon="arrow" href={brand.bookDemoUrl}>
              Book a demo
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
