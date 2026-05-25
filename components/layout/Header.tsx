"use client";

import { ResourcesMenu } from "@/components/nav/ResourcesMenu";
import { SolutionsMenu } from "@/components/nav/SolutionsMenu";
import { Button } from "@/components/ui/Button";
import { TarshaLogo } from "@/components/ui/TarshaLogo";
import { brand } from "@/lib/assets";
import { cn } from "@/lib/cn";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState, type RefObject } from "react";

interface NavItem {
  label: string;
  href: string;
  menuId?: "solutions" | "resources";
}

const navItems: NavItem[] = [
  { label: "Features", href: "/features" },
  { label: "Solutions", href: "#live-demo", menuId: "solutions" },
  { label: "Resources", href: "#about", menuId: "resources" },
];

// ─── Dock scale hook ──────────────────────────────────────────────────────────

function useDockScale(mouseX: MotionValue<number>, ref: RefObject<HTMLElement | null>) {
  const distance = useTransform(mouseX, (val) => {
    const el = ref.current;
    if (!el) return 150;
    const rect = el.getBoundingClientRect();
    return Math.abs(val - (rect.left + rect.width / 2));
  });
  return useSpring(useTransform(distance, [0, 90], [1.1, 1.0]), {
    stiffness: 380,
    damping: 26,
    mass: 0.5,
  });
}

// ─── Individual nav item wrappers ─────────────────────────────────────────────

function PlainNavItem({
  item,
  mouseX,
}: {
  item: NavItem;
  mouseX: MotionValue<number>;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const scale = useDockScale(mouseX, ref as RefObject<HTMLElement | null>);

  return (
    <motion.div ref={ref} style={{ scale }}>
      <Link
        href={item.href}
        className="flex items-center gap-1 rounded-lg px-3.5 py-2 text-[14px] font-medium text-ink/80 transition-colors duration-200 hover:bg-ink/5 hover:text-ink"
      >
        {item.label}
      </Link>
    </motion.div>
  );
}

function MenuNavItem({
  item,
  mouseX,
  activeMenu,
  openMenu,
  scheduleClose,
}: {
  item: NavItem;
  mouseX: MotionValue<number>;
  activeMenu: string | null;
  openMenu: (id: string) => void;
  scheduleClose: () => void;
}) {
  const outerRef = useRef<HTMLDivElement>(null);
  const scale = useDockScale(mouseX, outerRef as RefObject<HTMLElement | null>);
  const isOpen = activeMenu === item.menuId;

  return (
    <div
      ref={outerRef}
      className="relative"
      onMouseEnter={() => openMenu(item.menuId!)}
      onMouseLeave={scheduleClose}
    >
      {/* Only the link scales, dropdown stays at full size */}
      <motion.div style={{ scale }}>
        <Link
          href={item.href}
          className={cn(
            "flex items-center gap-1 rounded-lg px-3.5 py-2",
            "text-[14px] font-medium text-ink/80 transition-colors duration-200",
            "hover:bg-ink/5 hover:text-ink",
            isOpen && "bg-ink/5 text-ink",
          )}
        >
          {item.label}
          <ChevronDown
            className={cn(
              "h-3.5 w-3.5 opacity-50 transition-transform duration-200",
              isOpen && "rotate-180 opacity-80",
            )}
            strokeWidth={2}
          />
        </Link>
      </motion.div>

      {/* Invisible bridge so cursor can reach dropdown without closing */}
      {isOpen && <div className="absolute left-0 top-full h-2 w-full" />}

      <div onMouseEnter={() => openMenu(item.menuId!)} onMouseLeave={scheduleClose}>
        {item.menuId === "solutions" && <SolutionsMenu visible={isOpen} />}
        {item.menuId === "resources" && <ResourcesMenu visible={isOpen} />}
      </div>
    </div>
  );
}

// ─── Mobile accordion ─────────────────────────────────────────────────────────

function MobileAccordion({
  label,
  id,
  expanded,
  onToggle,
  items,
  onNavigate,
}: {
  label: string;
  id: string;
  expanded: string | null;
  onToggle: (id: string | null) => void;
  items: { label: string; href: string }[];
  onNavigate: () => void;
}) {
  const isOpen = expanded === id;
  return (
    <div>
      <button
        onClick={() => onToggle(isOpen ? null : id)}
        className="flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-[16px] font-medium text-ink/90 hover:bg-ink/5"
      >
        {label}
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="h-4 w-4 text-ink-muted" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="mb-1 ml-4 flex flex-col gap-0.5 rounded-xl border border-border bg-surface-muted/60 p-2">
              {items.map(({ label: lbl, href }) => (
                <Link
                  key={lbl}
                  href={href}
                  onClick={onNavigate}
                  className="rounded-lg px-3 py-2.5 text-[15px] font-medium text-ink/80 hover:bg-surface hover:text-ink"
                >
                  {lbl}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Header ───────────────────────────────────────────────────────────────────

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const mouseX = useMotionValue(Infinity);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function openMenu(id: string) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(id);
  }

  function scheduleClose() {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 80);
  }

  const [mobileExpandedMenu, setMobileExpandedMenu] = useState<string | null>(null);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const mobileSolutions = [
    { label: "Answering service", href: "/solutions/answering-service" },
    { label: "Appointment booking", href: "/solutions/appointment-booking" },
    { label: "Answer questions", href: "/solutions/answer-questions" },
    { label: "Call routing", href: "/solutions/call-routing" },
    { label: "Bilingual answering", href: "/solutions/bilingual-answering" },
    { label: "After hours calls", href: "/solutions/after-hours-calls" },
    { label: "WhatsApp integration", href: "/solutions/whatsapp-integration" },
  ];

  const mobileIndustries = [
    { label: "Law firms", href: "/industries/law-firms" },
    { label: "Restaurants", href: "/industries/restaurants" },
    { label: "Real estate", href: "/industries/real-estate" },
    { label: "Insurance", href: "/industries/insurance" },
    { label: "Accountants", href: "/industries/accountants" },
    { label: "Home services", href: "/industries/home-services" },
  ];

  const mobileCapabilities = [
    { label: "Lead qualification", href: "/capabilities/lead-qualification" },
    { label: "Appointment taking", href: "/capabilities/appointment-taking" },
    { label: "Overflow reception", href: "/capabilities/overflow-reception" },
    { label: "Voicemail transcription", href: "/capabilities/voicemail-transcription" },
    { label: "Call recording", href: "/capabilities/call-recording" },
    { label: "Client intake", href: "/capabilities/client-intake" },
  ];

  const mobileResources = [
    { label: "Blog", href: "/resources/blog" },
    { label: "Customer Stories", href: "/resources/customer-stories" },
    { label: "Voice Library", href: "/resources/voice-library" },
    { label: "Setup Guides", href: "/resources/setup-guides" },
    { label: "Help Center", href: "/resources/help-center" },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 z-50 transition-all duration-400 ease-out",
        scrolled ? "top-3 md:top-5" : "top-0",
      )}
    >
      <div
        className={cn(
          "flex items-center justify-between transition-all duration-400 ease-out",
          scrolled
            ? "mx-3 h-[60px] max-w-[1180px] rounded-xl border border-[rgba(234,216,112,0.5)] bg-[rgba(255,254,245,0.96)] px-5 shadow-[0_1px_2px_rgba(24,19,10,0.06),0_18px_44px_rgba(24,19,10,0.14),inset_0_1px_0_rgba(255,255,255,0.7),inset_0_0_0_1px_rgba(255,253,240,0.5)] backdrop-blur-2xl md:mx-auto md:px-6"
            : "mx-auto h-[72px] max-w-[1240px] border border-transparent bg-transparent px-6 md:px-10",
        )}
      >
        {/* Logo */}
        <Link
          href="/"
          className="focus-ring rounded-md"
          aria-label={`${brand.name} home`}
        >
          <TarshaLogo
            variant="wordmark"
            wordmarkStyle="allura"
            byline="BY ROSWELLIT"
            bylineClassName="hidden sm:flex"
            theme="light"
            size={scrolled ? "md" : "lg"}
            className="transition-all duration-300"
          />
        </Link>

        {/* Desktop nav, dock magnification applied here */}
        <nav
          className="hidden md:flex items-center gap-1"
          onMouseMove={(e) => mouseX.set(e.clientX)}
          onMouseLeave={() => mouseX.set(Infinity)}
        >
          {navItems.map((item) =>
            item.menuId ? (
              <MenuNavItem
                key={item.label}
                item={item}
                mouseX={mouseX}
                activeMenu={activeMenu}
                openMenu={openMenu}
                scheduleClose={scheduleClose}
              />
            ) : (
              <PlainNavItem key={item.label} item={item} mouseX={mouseX} />
            ),
          )}
        </nav>

        {/* CTA button, desktop */}
        <div className="hidden md:flex items-center gap-2">
          <Button size="sm" variant="primary" href={brand.bookDemoUrl}>
            Book a demo
          </Button>
        </div>

        {/* Mobile: Book a demo + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <Button size="sm" variant="primary" href={brand.bookDemoUrl}>
            Book a demo
          </Button>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface/80 backdrop-blur-md focus-ring"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" strokeWidth={2} />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={2} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu, full-height scrollable overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden fixed inset-x-0 top-[64px] bottom-0 z-40 overflow-y-auto overscroll-contain bg-[rgba(255,254,245,0.98)] backdrop-blur-xl"
          >
            <div className="flex flex-col gap-0.5 px-4 py-4 pb-safe">

              {/* Features */}
              <Link
                href="/features"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between rounded-xl px-4 py-3.5 text-[16px] font-medium text-ink/90 hover:bg-ink/5"
              >
                Features
              </Link>

              {/* Solutions accordion */}
              <MobileAccordion
                label="Solutions"
                id="solutions"
                expanded={mobileExpandedMenu}
                onToggle={setMobileExpandedMenu}
                items={mobileSolutions}
                onNavigate={() => { setMobileOpen(false); setMobileExpandedMenu(null); }}
              />

              {/* Resources accordion */}
              <MobileAccordion
                label="Resources"
                id="resources"
                expanded={mobileExpandedMenu}
                onToggle={setMobileExpandedMenu}
                items={mobileResources}
                onNavigate={() => { setMobileOpen(false); setMobileExpandedMenu(null); }}
              />

              {/* By Industry accordion */}
              <MobileAccordion
                label="By Industry"
                id="industries"
                expanded={mobileExpandedMenu}
                onToggle={setMobileExpandedMenu}
                items={mobileIndustries}
                onNavigate={() => { setMobileOpen(false); setMobileExpandedMenu(null); }}
              />

              {/* Capabilities accordion */}
              <MobileAccordion
                label="Capabilities"
                id="capabilities"
                expanded={mobileExpandedMenu}
                onToggle={setMobileExpandedMenu}
                items={mobileCapabilities}
                onNavigate={() => { setMobileOpen(false); setMobileExpandedMenu(null); }}
              />

              {/* Divider + Book a demo */}
              <div className="mt-3 border-t border-border pt-3 pb-6">
                <Button
                  href={brand.bookDemoUrl}
                  variant="primary"
                  size="md"
                  onClick={() => setMobileOpen(false)}
                  className="w-full"
                >
                  Book a demo
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
