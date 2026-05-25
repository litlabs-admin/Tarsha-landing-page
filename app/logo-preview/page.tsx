"use client";

import { TarshaLogo, type WordmarkStyle } from "@/components/ui/TarshaLogo";
import Link from "next/link";

const STYLES: {
  id:          WordmarkStyle;
  label:       string;
  description: string;
}[] = [
  {
    id:          "weight-contrast",
    label:       "A, Weight Contrast",
    description: "Extrabold 'tarsha' + featherweight '.ai'. Clean hierarchy with no colour gimmick, works at every size and context. Safe default.",
  },
  {
    id:          "uppercase-badge",
    label:       "B, Uppercase + Badge",
    description: "Wide-tracked TARSHA stamped with a yellow '.ai' pill. Authority and modernity together, law firm trust meets AI energy.",
  },
  {
    id:          "mono-split",
    label:       "C, Mono Split",
    description: "Inter (body font) only, semibold 'tarsha' fades into a quieter '.ai'. Clinical precision, SaaS/fintech feel. No display warmth.",
  },
  {
    id:          "accent-letter",
    label:       "D, Accent Letter",
    description: "The opening 't' glows gold. Personality-first and approachable, resonates with SMBs in hospitality, real estate, and services.",
  },
  {
    id:          "superscript-ai",
    label:       "E, Superscript .ai",
    description: "'.ai' floats as a tiny superscript qualifier above the name. Editorial luxury, strong fit for law, finance, insurance verticals.",
  },
  // ── Premium serif / script ──────────────────────────────────────────────────
  {
    id:          "playfair-italic",
    label:       "F, Playfair Italic  ✦ new",
    description: "Playfair Display bold italic for 'tarsha', sweeping ink-stroke curves. '.ai' steps back in light Inter. Magazine-masthead authority.",
  },
  {
    id:          "cormorant",
    label:       "G, Cormorant  ✦ new",
    description: "Cormorant Garamond italic, gossamer strokes and generous kerns give the name a calligraphic grace without being a script font. Whisper luxury.",
  },
  {
    id:          "serif-split",
    label:       "H, Serif Split  ✦ new",
    description: "Playfair Display roman 'tarsha' + golden dot + Inter bold 'ai'. Old-world craft meets precision tech in a single seamless wordmark.",
  },
  {
    id:          "cedarville",
    label:       "I, Cedarville Cursive  ✦ new",
    description: "Genuine handwritten script for 'tarsha', flowing ink-pen warmth on the cream/yellow theme. Golden dot + Inter bold 'ai' snaps it back to tech. Especially warm and approachable for SMBs.",
  },
  {
    id:          "smith-style",
    label:       "J, Smith-style (Space Grotesk)  ✦",
    description: "Inspired by Smith.ai's clean premium wordmark. Space Grotesk weight 500, slightly distinctive letterforms (two-story 'a', notched joins) that feel crafted, not default. One ink, one gold dot. Pure restraint.",
  },
  {
    id:          "allura",
    label:       "K, Allura  ✦",
    description: "Allura, a refined signature script. Elegant and graceful, rendered larger so it stays clearly visible despite its delicate strokes. Deep warm ink on cream, white on dark.",
  },
];

const SIZES = ["sm", "md", "lg"] as const;

export default function LogoPreviewPage() {
  return (
    <div className="min-h-screen bg-[#F4F2EC] font-sans">
      {/* Sticky header */}
      <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#DDD8C8] bg-[#F4F2EC]/95 backdrop-blur-sm px-6 py-4">
        <div>
          <h1 className="font-display text-[18px] font-bold tracking-tight text-[#18130A]">
            Wordmark Preview, tarsha.ai
          </h1>
          <p className="text-[12px] text-[#7A6420] mt-0.5">
            5 typographic styles · light + dark · 3 sizes each, pick one to ship
          </p>
        </div>
        <Link
          href="/"
          className="rounded-lg border border-[#EAD870] bg-white px-3 py-1.5 text-[13px] font-medium text-[#18130A] hover:bg-[#FFFEF5] transition-colors"
        >
          ← Back to site
        </Link>
      </div>

      {/* Style cards */}
      <div className="mx-auto max-w-5xl px-6 py-10 flex flex-col gap-14">
        {STYLES.map(({ id, label, description }) => (
          <section key={id}>
            {/* Section header */}
            <div className="mb-5">
              <h2 className="font-display text-[15px] font-bold tracking-tight text-[#18130A]">
                {label}
              </h2>
              <p className="mt-1 text-[13px] leading-relaxed text-[#4A3C10] max-w-[56ch]">
                {description}
              </p>
            </div>

            {/* Light + Dark panels */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* Light panel */}
              <div className="rounded-2xl border border-[#EAD870]/60 bg-[#FFFEF5] p-8">
                <p className="mb-5 text-[11px] font-semibold uppercase tracking-widest text-[#7A6420]">
                  Light · on cream
                </p>
                <div className="flex flex-col gap-5">
                  {SIZES.map((size) => (
                    <div key={size} className="flex items-center gap-4">
                      <span className="w-5 shrink-0 text-[11px] font-medium text-[#7A6420]">
                        {size}
                      </span>
                      <TarshaLogo
                        variant="wordmark"
                        wordmarkStyle={id}
                        size={size}
                        theme="light"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Dark panel */}
              <div className="rounded-2xl bg-[#18130A] p-8">
                <p className="mb-5 text-[11px] font-semibold uppercase tracking-widest text-[#7A6420]">
                  Dark · on ink
                </p>
                <div className="flex flex-col gap-5">
                  {SIZES.map((size) => (
                    <div key={size} className="flex items-center gap-4">
                      <span className="w-5 shrink-0 text-[11px] font-medium text-[#4A3C10]">
                        {size}
                      </span>
                      <TarshaLogo
                        variant="wordmark"
                        wordmarkStyle={id}
                        size={size}
                        theme="dark"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* "Use this one" prompt */}
            <p className="mt-3 text-[12px] text-[#7A6420]">
              To use this style → set{" "}
              <code className="rounded bg-[#EAD870]/40 px-1 py-0.5 font-mono text-[11px] text-[#18130A]">
                wordmarkStyle="{id}"
              </code>{" "}
              in Header.tsx and Footer.tsx
            </p>
          </section>
        ))}
      </div>

      {/* Footer note */}
      <div className="border-t border-[#DDD8C8] px-6 py-6 text-center text-[12px] text-[#7A6420]">
        All styles use Plus Jakarta Sans (display) or Inter (sans), no external font needed.
        Both fonts are already loaded in{" "}
        <code className="font-mono text-[11px]">lib/fonts.ts</code>.
      </div>
    </div>
  );
}
