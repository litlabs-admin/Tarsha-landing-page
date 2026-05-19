"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  BookOpen,
  ChevronRight,
  FileText,
  HelpCircle,
  Mic,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";

interface Resource {
  icon: LucideIcon;
  label: string;
  desc: string;
  href: string;
}

const resources: Resource[] = [
  { icon: FileText, label: "Blog", desc: "Tips for small business owners", href: "/resources/blog" },
  { icon: BookOpen, label: "Setup guides", desc: "Step-by-step call forwarding help", href: "/resources/setup-guides" },
  { icon: Mic, label: "Voice library", desc: "Browse realistic AI voices", href: "/resources/voice-library" },
  { icon: HelpCircle, label: "Help center", desc: "Answers to common questions", href: "/resources/help-center" },
];

export function ResourcesMenu({ visible }: { visible: boolean }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 6 }}
          transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
          className="absolute right-0 top-full mt-2 w-[500px] overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_8px_48px_rgba(17,17,17,0.13)]"
        >
          <div className="grid grid-cols-[188px_1fr]">
            {/* Left: Featured story card */}
            <div className="border-r border-border p-4">
              {/* Mock thumbnail — simulated customer story card */}
              <div className="mb-3 h-[120px] w-full overflow-hidden rounded-xl bg-[#1a1f14]">
                {/* Dark scene with a "call dashboard" mock */}
                <div className="relative flex h-full w-full flex-col justify-between p-3">
                  {/* Top bar */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                      <div className="h-1.5 w-12 rounded-full bg-white/20" />
                    </div>
                    <div className="rounded-full bg-white/10 px-2 py-0.5 text-[9px] font-medium text-white/60">
                      LIVE
                    </div>
                  </div>

                  {/* Fake waveform */}
                  <div className="flex items-end justify-center gap-0.5 py-1">
                    {[2, 4, 6, 8, 5, 9, 4, 7, 3, 8, 6, 4, 9, 5, 7, 3, 6, 8, 4, 5].map((h, i) => (
                      <div
                        key={i}
                        className="w-[3px] rounded-full bg-accent/70"
                        style={{ height: `${h * 2.5}px` }}
                      />
                    ))}
                  </div>

                  {/* Bottom info row */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/20 text-[9px]">
                        ✦
                      </div>
                      <div className="h-1.5 w-16 rounded-full bg-white/20" />
                    </div>
                    <div className="h-1.5 w-8 rounded-full bg-white/10" />
                  </div>
                </div>
              </div>
              <p className="text-[13px] font-semibold text-ink">Customer stories</p>
              <p className="mt-1 text-[12px] leading-relaxed text-ink-muted">
                See how businesses use Tarsha AI to handle calls 24/7
              </p>
              <Link
                href="/resources/customer-stories"
                className="mt-2 inline-flex items-center gap-1 text-[12px] font-medium text-ink transition-colors hover:text-ink/60"
              >
                Read more <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Right: Resource links */}
            <div className="p-4">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-muted">
                Resources
              </p>
              <ul className="space-y-0.5">
                {resources.map(({ icon: Icon, label, desc, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="group flex items-center gap-3 rounded-xl p-2.5 transition-colors hover:bg-surface-muted"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-surface shadow-sm">
                        <Icon className="h-4 w-4 text-ink/60" strokeWidth={1.5} />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[13px] font-medium text-ink">{label}</span>
                        <span className="block text-[12px] leading-snug text-ink-muted">{desc}</span>
                      </span>
                      <ChevronRight className="h-4 w-4 shrink-0 text-ink/25 transition-colors group-hover:text-ink/50" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
