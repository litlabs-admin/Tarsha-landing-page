"use client";

import { ResourcesMenu } from "@/components/nav/ResourcesMenu";
import { SolutionsMenu } from "@/components/nav/SolutionsMenu";
import { Button } from "@/components/ui/Button";
import { assets, brand } from "@/lib/assets";
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
import Image from "next/image";
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
      {/* Only the link scales — dropdown stays at full size */}
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
          className="flex items-center gap-2 focus-ring rounded-md"
          aria-label={`${brand.name} home`}
        >
          <Image
            src={assets.logo}
            alt=""
            width={32}
            height={32}
            priority
            className={cn(
              "object-contain transition-all duration-300",
              scrolled ? "h-7 w-7" : "h-8 w-8",
            )}
          />
          <span
            className={cn(
              "font-display font-semibold tracking-tight text-ink transition-all duration-300",
              scrolled ? "text-[18px]" : "text-[20px]",
            )}
          >
            {brand.name}
          </span>
        </Link>

        {/* Desktop nav — dock magnification applied here */}
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

        {/* CTA buttons — desktop */}
        <div className="hidden md:flex items-center gap-2">
          <Link
            href="#login"
            className="rounded-lg px-3.5 py-2 text-[14px] font-medium text-ink/80 transition-colors hover:bg-ink/5 hover:text-ink"
          >
            Login
          </Link>
          <Button size="sm" variant="primary">
            Try for free
          </Button>
        </div>

        {/* Mobile: Try for free + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <Button size="sm" variant="primary">
            Try for free
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

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden mx-3 mt-2 overflow-hidden rounded-2xl border border-border bg-[rgba(255,254,245,0.97)] backdrop-blur-xl shadow-[0_10px_30px_rgba(24,19,10,0.10)]"
          >
            <div className="flex flex-col gap-1 px-4 py-5">
              {navItems.map((item) =>
                item.menuId === "solutions" ? (
                  <div key={item.label}>
                    <button
                      onClick={() =>
                        setMobileExpandedMenu(
                          mobileExpandedMenu === "solutions" ? null : "solutions",
                        )
                      }
                      className="flex w-full items-center justify-between rounded-xl px-4 py-4 text-[17px] font-medium text-ink/90 hover:bg-ink/5"
                    >
                      {item.label}
                      <motion.span
                        animate={{ rotate: mobileExpandedMenu === "solutions" ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="h-4 w-4 text-ink-muted" />
                      </motion.span>
                    </button>
                    <AnimatePresence>
                      {mobileExpandedMenu === "solutions" && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="mb-1 ml-4 flex flex-col gap-0.5 rounded-xl border border-border bg-surface-muted/60 p-2">
                            {mobileSolutions.map(({ label, href }) => (
                              <Link
                                key={label}
                                href={href}
                                onClick={() => {
                                  setMobileOpen(false);
                                  setMobileExpandedMenu(null);
                                }}
                                className="rounded-lg px-3 py-2.5 text-[15px] font-medium text-ink/80 hover:bg-surface hover:text-ink"
                              >
                                {label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between rounded-xl px-4 py-4 text-[17px] font-medium text-ink/90 hover:bg-ink/5"
                  >
                    {item.label}
                  </Link>
                ),
              )}
              {/* By Industry accordion */}
              <div>
                <button
                  onClick={() =>
                    setMobileExpandedMenu(
                      mobileExpandedMenu === "industries" ? null : "industries",
                    )
                  }
                  className="flex w-full items-center justify-between rounded-xl px-4 py-4 text-[17px] font-medium text-ink/90 hover:bg-ink/5"
                >
                  By Industry
                  <motion.span
                    animate={{ rotate: mobileExpandedMenu === "industries" ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="h-4 w-4 text-ink-muted" />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {mobileExpandedMenu === "industries" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="mb-1 ml-4 flex flex-col gap-0.5 rounded-xl border border-border bg-surface-muted/60 p-2">
                        {mobileIndustries.map(({ label, href }) => (
                          <Link
                            key={label}
                            href={href}
                            onClick={() => {
                              setMobileOpen(false);
                              setMobileExpandedMenu(null);
                            }}
                            className="rounded-lg px-3 py-2.5 text-[15px] font-medium text-ink/80 hover:bg-surface hover:text-ink"
                          >
                            {label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Capabilities accordion */}
              <div>
                <button
                  onClick={() =>
                    setMobileExpandedMenu(
                      mobileExpandedMenu === "capabilities" ? null : "capabilities",
                    )
                  }
                  className="flex w-full items-center justify-between rounded-xl px-4 py-4 text-[17px] font-medium text-ink/90 hover:bg-ink/5"
                >
                  Capabilities
                  <motion.span
                    animate={{ rotate: mobileExpandedMenu === "capabilities" ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="h-4 w-4 text-ink-muted" />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {mobileExpandedMenu === "capabilities" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="mb-1 ml-4 flex flex-col gap-0.5 rounded-xl border border-border bg-surface-muted/60 p-2">
                        {mobileCapabilities.map(({ label, href }) => (
                          <Link
                            key={label}
                            href={href}
                            onClick={() => {
                              setMobileOpen(false);
                              setMobileExpandedMenu(null);
                            }}
                            className="rounded-lg px-3 py-2.5 text-[15px] font-medium text-ink/80 hover:bg-surface hover:text-ink"
                          >
                            {label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="mt-3 border-t border-border pt-4">
                <Link
                  href="#login"
                  onClick={() => setMobileOpen(false)}
                  className="flex w-full items-center justify-center rounded-xl border border-border bg-surface px-4 py-4 text-[17px] font-medium text-ink/80 hover:bg-surface-muted"
                >
                  Login
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
