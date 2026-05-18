"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { assets, brand } from "@/lib/assets";
import { cn } from "@/lib/cn";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

const columns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "Live demo", href: "#live-demo" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Law firms", href: "#live-demo" },
      { label: "Restaurants", href: "#live-demo" },
      { label: "Real estate", href: "#live-demo" },
      { label: "Insurance", href: "#live-demo" },
      { label: "Home services", href: "#live-demo" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Careers", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Contact", href: "mailto:hello@tarsha.ai" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Security", href: "#" },
      { label: "Cookies", href: "#" },
    ],
  },
];

const socials = [
  { Icon: Twitter, href: "#", label: "Twitter" },
  { Icon: Linkedin, href: "#", label: "LinkedIn" },
  { Icon: Youtube, href: "#", label: "YouTube" },
  { Icon: Github, href: "#", label: "GitHub" },
];

export function Footer() {
  return (
    <footer
      id="footer"
      className="relative isolate overflow-hidden bg-ink text-white"
    >
      <FinalCTA />

      <Container className="relative">
        <div className="grid grid-cols-2 gap-10 border-t border-white/10 pt-16 md:grid-cols-12 md:gap-12 md:pt-20">
          {/* Brand block */}
          <div className="col-span-2 md:col-span-4">
            <ScrollReveal y={16} duration={0.7}>
              <Link
                href="#top"
                className="inline-flex items-center gap-2 focus-ring rounded-md"
                aria-label={`${brand.name} home`}
              >
                <Image
                  src={assets.logo}
                  alt=""
                  width={32}
                  height={32}
                  className="h-8 w-8 object-contain"
                />
                <span className="font-display text-[20px] font-semibold tracking-tight">
                  {brand.name}
                </span>
              </Link>

              <p className="mt-5 max-w-[34ch] text-[14px] leading-[1.6] text-white/60">
                The AI voice receptionist that keeps your phone covered — so
                you never miss a lead or leave a customer waiting.
              </p>

              <div className="mt-7 flex items-center gap-2">
                {socials.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className={cn(
                      "flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70",
                      "transition-all duration-200 hover:border-accent hover:text-accent",
                    )}
                  >
                    <Icon className="h-4 w-4" strokeWidth={1.75} />
                  </a>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Link columns */}
          <div className="col-span-2 grid grid-cols-2 gap-8 md:col-span-8 md:grid-cols-4 md:gap-6">
            {columns.map((col, ci) => (
              <ScrollReveal key={col.title} y={14} duration={0.6} delay={0.05 * ci}>
                <div>
                  <h4 className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/80">
                    {col.title}
                  </h4>
                  <ul className="mt-4 flex flex-col gap-2.5">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className={cn(
                            "group/link inline-flex items-center gap-1 text-[14px] text-white/65",
                            "transition-colors duration-200 hover:text-white",
                          )}
                        >
                          <span>{link.label}</span>
                          <ArrowUpRight
                            className="h-3 w-3 opacity-0 -translate-x-1 transition-all duration-200 ease-out group-hover/link:opacity-60 group-hover/link:translate-x-0"
                            strokeWidth={2.2}
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Container>

      {/* Oversized brand wordmark — "Feather-style" */}
      <BrandWordmark />

      {/* Bottom legal bar */}
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-7 text-[12.5px] text-white/45 md:flex-row">
          <p>© {new Date().getFullYear()} <span className="text-accent font-semibold whitespace-nowrap">Tarsha AI</span> · Voice AI for SMBs · All rights reserved.</p>
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_0_3px_rgba(52,211,153,0.18)]" />
              All systems normal
            </span>
            <span className="hidden md:inline text-white/25">·</span>
            <span>Made with calls covered</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FinalCTA() {
  return (
    <Container>
      <div className="relative py-12 md:py-16">
        <ScrollReveal y={20} duration={0.9}>
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-3 py-1.5 text-[12px] tracking-[0.04em] text-white/70 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_0_4px_rgba(255,208,0,0.28)]" />
              Ready when you are
            </span>
            <h2 className="font-display font-semibold tracking-[-0.025em] text-white text-[clamp(2rem,4.4vw,3.5rem)] leading-[1.05]">
              Never miss another <br className="hidden sm:block" />
              <span className="relative inline-block">
                customer call
                <span className="absolute inset-x-0 bottom-[0.06em] -z-10 h-[0.32em] rounded-[2px] bg-accent" />
              </span>
              .
            </h2>
            <p className="mt-6 max-w-xl text-[17px] leading-[1.7] text-white/65 md:text-[18px]">
              Spin up <span className="text-accent font-semibold">Tarsha AI</span> in under a day. Live phone coverage, 24/7 — with a
              voice your customers will actually thank you for.
            </p>
            <div className="mt-9 flex flex-row flex-wrap items-center justify-center gap-3">
              <Button size="lg" variant="primary">
                Get started free
              </Button>
              <Button size="lg" variant="ghost" icon="arrow" className="text-white hover:bg-white/10">
                Book a demo
              </Button>
            </div>
            <p className="mt-4 text-[12.5px] text-white/40">
              No credit card · 14-day free trial · Cancel anytime
            </p>
          </div>
        </ScrollReveal>
      </div>
    </Container>
  );
}

function BrandWordmark() {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 100%", "end start"],
  });

  // Parallax shift for the wordmark on scroll (gentle so it doesn't fight Lenis).
  const wordmarkY = useTransform(scrollYProgress, [0, 1], [80, -40]);
  const stripeShift = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  return (
    <div
      ref={ref}
      aria-hidden
      className="relative mt-20 overflow-hidden md:mt-28"
    >
      {/* Vertical lime stripes — slowly drift on scroll, give the Feather-style ribbon feel */}
      <motion.div
        style={
          reducedMotion ? undefined : { backgroundPositionX: stripeShift }
        }
        className="pointer-events-none absolute inset-0"
        // 6 vertical lime "ribbons" at strategic positions
        // Using gradient stops to create discrete bars over the dark bg.
        // Mask the gradient with a vertical fade so the stripes look like beams.
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(180deg, rgba(17,17,17,1) 0%, rgba(17,17,17,0) 18%, rgba(17,17,17,0) 82%, rgba(17,17,17,1) 100%),
              repeating-linear-gradient(
                90deg,
                rgba(255,208,0,0) 0px,
                rgba(255,208,0,0) 96px,
                rgba(255,208,0,0.55) 96px,
                rgba(255,208,0,0.55) 104px,
                rgba(255,208,0,0) 104px,
                rgba(255,208,0,0) 220px,
                rgba(255,208,0,0.25) 220px,
                rgba(255,208,0,0.25) 232px,
                rgba(255,208,0,0) 232px,
                rgba(255,208,0,0) 360px
              )
            `,
          }}
        />
      </motion.div>

      {/* The wordmark itself — sits ON TOP of the stripe band, with the bar
          revealed only WITHIN the letterforms via mix-blend modes. */}
      <motion.div
        style={reducedMotion ? undefined : { y: wordmarkY }}
        className="relative flex select-none items-center justify-center"
      >
        <span
          className={cn(
            "block w-full text-center font-display font-semibold uppercase",
            "leading-[0.78] tracking-[-0.055em]",
            "text-[clamp(5rem,19vw,16rem)]",
          )}
          style={{
            color: "rgba(255,255,255,0.92)",
            WebkitTextStroke: "0",
            mixBlendMode: "difference",
          }}
        >
          tarsha ai
        </span>
      </motion.div>

      {/* Soft bottom edge fade so the wordmark melts into the bottom bar */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink to-transparent"
      />
    </div>
  );
}
