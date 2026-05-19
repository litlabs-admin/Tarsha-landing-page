"use client";

import { cn } from "@/lib/cn";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  CalendarCheck,
  Globe,
  MessageCircle,
  MessageSquareText,
  Moon,
  Phone,
  Route,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";

interface Solution {
  icon: LucideIcon;
  label: string;
  desc: string;
  href: string;
}

const mainSolutions: Solution[] = [
  { icon: Phone, label: "Answering service", desc: "Never miss a call again", href: "/solutions/answering-service" },
  { icon: CalendarCheck, label: "Appointment booking", desc: "Confirm times automatically", href: "/solutions/appointment-booking" },
  { icon: MessageSquareText, label: "Answer questions", desc: "24/7 instant answers", href: "/solutions/answer-questions" },
  { icon: Route, label: "Call routing", desc: "Send calls to the right place", href: "/solutions/call-routing" },
  { icon: Globe, label: "Bilingual answering", desc: "English, Spanish & more", href: "/solutions/bilingual-answering" },
  { icon: Moon, label: "After hours calls", desc: "Always available", href: "/solutions/after-hours-calls" },
  { icon: MessageCircle, label: "WhatsApp integration", desc: "AI receptionist on WhatsApp", href: "/solutions/whatsapp-integration" },
];

const byIndustry = [
  { label: "Law firms", href: "/industries/law-firms" },
  { label: "Restaurants", href: "/industries/restaurants" },
  { label: "Real estate", href: "/industries/real-estate" },
  { label: "Insurance", href: "/industries/insurance" },
  { label: "Accountants", href: "/industries/accountants" },
  { label: "Home services", href: "/industries/home-services" },
];

const capabilities = [
  { label: "Lead qualification", href: "/capabilities/lead-qualification" },
  { label: "Appointment taking", href: "/capabilities/appointment-taking" },
  { label: "Overflow reception", href: "/capabilities/overflow-reception" },
  { label: "Voicemail transcription", href: "/capabilities/voicemail-transcription" },
  { label: "Call recording", href: "/capabilities/call-recording" },
  { label: "Client intake", href: "/capabilities/client-intake" },
];

export function SolutionsMenu({ visible }: { visible: boolean }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 6 }}
          transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-1/2 top-full mt-2 w-[700px] -translate-x-1/2 overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_8px_48px_rgba(17,17,17,0.13)]"
        >
          <div className="grid grid-cols-[1fr_160px_180px]">
            {/* Left: Main solutions (icon cards) */}
            <div className="border-r border-border p-5">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-muted">
                Main solutions
              </p>
              <div className="grid grid-cols-2 gap-1.5">
                {mainSolutions.map(({ icon: Icon, label, desc, href }) => (
                  <Link
                    key={label}
                    href={href}
                    className="group flex items-start gap-2.5 rounded-xl p-2.5 transition-colors hover:bg-surface-muted"
                  >
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-surface shadow-sm">
                      <Icon className="h-4 w-4 text-ink/60" strokeWidth={1.5} />
                    </span>
                    <span>
                      <span className="block text-[13px] font-medium text-ink">{label}</span>
                      <span className="block text-[12px] text-ink-muted">{desc}</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Middle: By industry */}
            <div className="border-r border-border p-5">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-muted">
                By industry
              </p>
              <ul className="space-y-2.5">
                {byIndustry.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-[13px] text-ink/75 transition-colors hover:text-ink"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Capabilities */}
            <div className="p-5">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-muted">
                Capabilities
              </p>
              <ul className="space-y-2.5">
                {capabilities.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-[13px] text-ink/75 transition-colors hover:text-ink"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer strip */}
          <div className="flex items-center justify-between border-t border-border bg-surface-muted/60 px-5 py-3">
            <span className="text-[13px] text-ink-muted">Don't see what you need?</span>
            <Link
              href="#live-demo"
              className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-1.5 text-[13px] font-medium text-white transition-colors hover:bg-ink/85"
            >
              View all solutions
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
