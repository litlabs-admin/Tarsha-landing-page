"use client";

import { cn } from "@/lib/cn";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import {
  useCallback,
  useEffect,
  useRef,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";

interface VideoModalProps {
  open: boolean;
  onClose: () => void;
  videoSrc?: string;
  poster?: string;
  title?: string;
}

export function VideoModal({
  open,
  onClose,
  videoSrc,
  poster,
  title = "Tarsha AI product demo",
}: VideoModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const trapFocus = useCallback(
    (e: ReactKeyboardEvent<HTMLDivElement>) => {
      if (e.key === "Tab") {
        e.preventDefault();
        closeRef.current?.focus();
      }
    },
    [],
  );

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={title}
          onKeyDown={trapFocus}
          className="fixed inset-0 z-[100] flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <motion.div
            className="absolute inset-0 bg-ink/70 backdrop-blur-md"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            className={cn(
              "relative w-full max-w-[1080px] overflow-hidden rounded-3xl bg-surface",
              "shadow-lift",
            )}
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              ref={closeRef}
              onClick={onClose}
              aria-label="Close video"
              className={cn(
                "absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center",
                "rounded-full bg-white/90 text-ink shadow-soft transition-colors",
                "hover:bg-white focus-ring",
              )}
            >
              <X className="h-5 w-5" strokeWidth={2} />
            </button>

            <div className="aspect-video w-full bg-ink">
              {videoSrc ? (
                <video
                  controls
                  autoPlay
                  poster={poster}
                  className="h-full w-full object-cover"
                >
                  <source src={videoSrc} type="video/mp4" />
                </video>
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <div className="flex flex-col items-center gap-3 text-center text-white/90">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-7 w-7 translate-x-0.5"
                        fill="currentColor"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <p className="font-display text-xl font-semibold tracking-tight">
                      Demo video coming soon
                    </p>
                    <p className="max-w-xs text-sm text-white/60">
                      We&apos;re recording a fresh walkthrough of Tarsha AI in
                      action. Check back shortly.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
