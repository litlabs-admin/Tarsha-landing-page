"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { brand } from "@/lib/assets";
import { cn } from "@/lib/cn";
import { AnimatePresence, motion } from "framer-motion";
import {
  Brain,
  CalendarCheck,
  Check,
  Clock,
  Languages,
  MessageSquare,
  Mic,
  PhoneForwarded,
  ShieldX,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

interface Tier {
  id: "starter" | "premium" | "pro" | "scale";
  name: string;
  calls: string;
  priceMonthly: string;
  priceAnnual: string;
  overage: string;
  description: string;
  popular?: boolean;
}

const tiers: Tier[] = [
  {
    id: "starter",
    name: "Starter",
    calls: "30 calls",
    priceMonthly: "24.95",
    priceAnnual: "19.96",
    overage: "$1.50 per additional call",
    description: "For solo operators testing the waters.",
  },
  {
    id: "premium",
    name: "Premium",
    calls: "90 calls",
    priceMonthly: "59.95",
    priceAnnual: "47.96",
    overage: "$1.00 per additional call",
    description: "For small teams handling steady inbound.",
  },
  {
    id: "pro",
    name: "Pro",
    calls: "300 calls",
    priceMonthly: "159.95",
    priceAnnual: "127.96",
    overage: "$0.75 per additional call",
    description: "For growing businesses that can't miss a beat.",
    popular: true,
  },
  {
    id: "scale",
    name: "Scale",
    calls: "600 calls",
    priceMonthly: "299.00",
    priceAnnual: "239.20",
    overage: "$0.70 per additional call",
    description: "For high-volume operations and multi-location teams.",
  },
];

interface FeatureItem {
  icon: LucideIcon;
  label: string;
}

const features: FeatureItem[] = [
  { icon: Clock, label: "24/7 answering" },
  { icon: Sparkles, label: "Instant call summaries" },
  { icon: Mic, label: "Call recordings & transcription" },
  { icon: PhoneForwarded, label: "Call transfers" },
  { icon: CalendarCheck, label: "Appointment scheduling" },
  { icon: MessageSquare, label: "Send text messages" },
  { icon: ShieldX, label: "Spam blocking" },
  { icon: Workflow, label: "Zapier integration" },
  { icon: Languages, label: "35+ languages" },
  { icon: Brain, label: "Memory" },
];

export function Pricing() {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="relative isolate overflow-hidden bg-bg py-28 md:py-36"
    >
      <Backdrop />

      <Container>
        {/* Heading */}
        <ScrollReveal y={20} duration={0.9}>
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <Eyebrow asPill className="mb-6">
              <span className="text-ink-muted">Simple, transparent pricing</span>
            </Eyebrow>
            <h2
              id="pricing-heading"
              className="section-heading font-display text-ink"
            >
              Pricing that scales with your business.
            </h2>
            <p className="mt-5 max-w-xl text-balance text-[16px] leading-[1.65] text-ink-muted md:text-[17px]">
              Pick the plan that fits your call volume. Upgrade, downgrade, or
              cancel anytime, no fine print.
            </p>
          </div>
        </ScrollReveal>

        {/* Billing toggle */}
        <ScrollReveal y={12} duration={0.6} delay={0.1}>
          <div className="mt-10 flex items-center justify-center">
            <BillingToggle billing={billing} setBilling={setBilling} />
          </div>
        </ScrollReveal>

        {/* Tier cards */}
        <div className="mt-14 grid grid-cols-1 gap-5 md:mt-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {tiers.map((tier, i) => (
            <TierCard
              key={tier.id}
              tier={tier}
              billing={billing}
              index={i}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}

function BillingToggle({
  billing,
  setBilling,
}: {
  billing: "monthly" | "annual";
  setBilling: (b: "monthly" | "annual") => void;
}) {
  return (
    <div className="flex items-center gap-3">
      <div
        role="group"
        aria-label="Billing period"
        className="relative inline-flex items-center rounded-full border border-border bg-surface p-1 shadow-soft"
      >
        {/* Sliding pill, sits behind the two equal-width buttons */}
        <motion.span
          aria-hidden
          animate={{ x: billing === "monthly" ? "0%" : "100%" }}
          transition={{ type: "spring", stiffness: 380, damping: 32 }}
          className="absolute left-1 top-1 h-[calc(100%-0.5rem)] w-[calc(50%-0.25rem)] rounded-full bg-ink"
        />
        <button
          onClick={() => setBilling("monthly")}
          aria-pressed={billing === "monthly"}
          className={cn(
            "relative z-10 flex-1 rounded-full px-7 py-2 text-[13.5px] font-medium leading-none transition-colors duration-200",
            billing === "monthly" ? "text-white" : "text-ink-muted hover:text-ink",
          )}
        >
          Monthly
        </button>
        <button
          onClick={() => setBilling("annual")}
          aria-pressed={billing === "annual"}
          className={cn(
            "relative z-10 flex-1 rounded-full px-7 py-2 text-[13.5px] font-medium leading-none transition-colors duration-200",
            billing === "annual" ? "text-white" : "text-ink-muted hover:text-ink",
          )}
        >
          Annual
        </button>
      </div>

      {/* Save badge floats outside the toggle with a curved connector */}
      <div className="relative flex items-center">
        {/* Curved connector arrow */}
        <svg
          aria-hidden
          width="32"
          height="22"
          viewBox="0 0 32 22"
          fill="none"
          className="text-ink-muted/70"
        >
          <motion.path
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.25 }}
            d="M2 11 C 10 11, 14 4, 26 4"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeDasharray="2 3"
          />
          <motion.path
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.2, delay: 0.85 }}
            d="M22 1 L26 4 L23 8"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <motion.span
          animate={{
            backgroundColor:
              billing === "annual" ? "var(--accent)" : "rgba(255,208,0,0.18)",
            color:
              billing === "annual" ? "var(--accent-ink)" : "var(--ink)",
          }}
          transition={{ duration: 0.3, ease: EASE }}
          className="-ml-1 inline-flex items-center gap-1 rounded-full border border-accent/30 px-2.5 py-1 text-[11px] font-semibold tracking-[0.04em]"
        >
          Save 20%
        </motion.span>
      </div>
    </div>
  );
}

function TierCard({
  tier,
  billing,
  index,
}: {
  tier: Tier;
  billing: "monthly" | "annual";
  index: number;
}) {
  const isPopular = tier.popular;
  const price = billing === "monthly" ? tier.priceMonthly : tier.priceAnnual;
  const [dollars, cents] = price.split(".");

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: EASE, delay: 0.06 * index }}
      whileHover={{ y: -4 }}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-3xl border transition-shadow duration-300 ease-out",
        isPopular
          ? "border-ink bg-ink text-white shadow-lift"
          : "border-border bg-surface text-ink shadow-soft hover:shadow-lift",
      )}
    >
      {/* Lime glow on popular card */}
      {isPopular && (
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(60% 50% at 50% 0%, rgba(255,208,0,0.22) 0%, rgba(255,208,0,0) 70%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(255,208,0,0.7) 50%, transparent 100%)",
            }}
          />
        </>
      )}

      {/* Header */}
      <div className="px-6 pt-7 md:px-7 md:pt-8">
        <div className="flex items-center justify-between gap-2">
          <span
            className={cn(
              "text-[11px] font-semibold uppercase tracking-[0.16em]",
              isPopular ? "text-accent" : "text-ink-muted",
            )}
          >
            {tier.name}
          </span>
          {isPopular && (
            <span className="flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 text-[10.5px] font-semibold tracking-wide text-accent-ink">
              <Sparkles className="h-3 w-3" strokeWidth={2.4} />
              Most popular
            </span>
          )}
        </div>

        {/* Call quota, big number */}
        <div className="mt-4">
          <p
            className={cn(
              "font-display text-[28px] font-semibold tracking-[-0.02em] leading-none md:text-[30px]",
              isPopular ? "text-white" : "text-ink",
            )}
          >
            {tier.calls}
          </p>
          <p
            className={cn(
              "mt-2 text-[13.5px] leading-[1.5]",
              isPopular ? "text-white/65" : "text-ink-muted",
            )}
          >
            {tier.description}
          </p>
        </div>
      </div>

      {/* Hairline divider */}
      <div
        className={cn(
          "mx-6 my-6 h-px md:mx-7",
          isPopular ? "bg-white/15" : "bg-border",
        )}
      />

      {/* Price */}
      <div className="px-6 md:px-7">
        <AnimatePresence mode="wait">
          <motion.div
            key={billing}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: EASE }}
            className="flex items-baseline gap-1.5"
          >
            <span
              className={cn(
                "font-display text-[15px] font-medium",
                isPopular ? "text-white/70" : "text-ink-muted",
              )}
            >
              $
            </span>
            <span
              className={cn(
                "font-display text-[44px] font-semibold tracking-[-0.025em] leading-none tabular-nums md:text-[48px]",
                isPopular ? "text-white" : "text-ink",
              )}
            >
              {dollars}
            </span>
            <span
              className={cn(
                "font-display text-[20px] font-medium tabular-nums",
                isPopular ? "text-white/70" : "text-ink-muted",
              )}
            >
              .{cents}
            </span>
            <span
              className={cn(
                "ml-1 text-[13px]",
                isPopular ? "text-white/55" : "text-ink-muted",
              )}
            >
              /month
            </span>
          </motion.div>
        </AnimatePresence>

        <p
          className={cn(
            "mt-2 text-[12.5px]",
            isPopular ? "text-white/55" : "text-ink-muted",
          )}
        >
          {tier.overage}
          {billing === "annual" && (
            <span
              className={cn(
                "ml-1.5",
                isPopular ? "text-accent" : "text-ink",
              )}
            >
              · billed annually
            </span>
          )}
        </p>

        {/* CTA */}
        <div className="mt-6">
          {isPopular ? (
            <Button variant="primary" size="md" className="w-full" href={brand.bookDemoUrl}>
              Book a demo
            </Button>
          ) : (
            <Button variant="dark" size="md" className="w-full" href={brand.bookDemoUrl}>
              Book a demo
            </Button>
          )}
        </div>
      </div>

      {/* Hairline divider */}
      <div
        className={cn(
          "mx-6 mb-5 mt-7 h-px md:mx-7",
          isPopular ? "bg-white/15" : "bg-border",
        )}
      />

      {/* Features */}
      <ul className="flex flex-col gap-3 px-6 pb-7 md:px-7 md:pb-8">
        <li
          className={cn(
            "text-[11px] font-semibold uppercase tracking-[0.14em]",
            isPopular ? "text-white/55" : "text-ink-muted",
          )}
        >
          Every plan includes
        </li>
        {features.map((f) => {
          const Icon = f.icon;
          return (
            <li
              key={f.label}
              className={cn(
                "flex items-center gap-2.5 text-[13.5px] leading-tight",
                isPopular ? "text-white/85" : "text-ink-muted",
              )}
            >
              <span
                className={cn(
                  "flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                  isPopular ? "bg-accent/20 text-accent" : "bg-surface-muted text-ink",
                )}
              >
                <Check className="h-3 w-3" strokeWidth={2.6} />
              </span>
              <span className="flex items-center gap-1.5">
                <Icon
                  className={cn(
                    "h-3.5 w-3.5 shrink-0",
                    isPopular ? "text-white/45" : "text-ink-muted",
                  )}
                  strokeWidth={1.75}
                />
                {f.label}
              </span>
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
}

function Backdrop() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-surface-muted/60 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(rgba(17,17,17,0.05) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 35%, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 35%, black 30%, transparent 75%)",
        }}
      />
    </>
  );
}
