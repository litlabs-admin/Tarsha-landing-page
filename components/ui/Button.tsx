"use client";

import { cn } from "@/lib/cn";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import {
  forwardRef,
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react";

type Variant = "primary" | "ghost" | "outline" | "dark";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  icon?: "arrow" | "none";
  children: ReactNode;
  asMotion?: boolean;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-accent text-accent-ink hover:brightness-[0.92] font-semibold shadow-[0_1px_0_rgba(255,255,255,0.5)_inset,0_4px_18px_rgba(255,208,0,0.45)]",
  ghost:
    "bg-transparent text-ink hover:bg-surface-muted",
  outline:
    "bg-surface text-ink border border-border hover:border-ink/30 hover:bg-surface-muted",
  dark:
    "bg-ink text-white hover:bg-ink/90",
};

const sizeStyles: Record<Size, string> = {
  sm: "h-9 px-4 text-[13px]",
  md: "h-11 px-5 text-[14px]",
  lg: "h-12 px-6 text-[15px]",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      variant = "primary",
      size = "md",
      icon = "none",
      className,
      children,
      ...props
    },
    ref,
  ) {
    return (
      <motion.button
        ref={ref}
        whileHover={{ y: -1 }}
        whileTap={{ y: 0, scale: 0.985 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className={cn(
          "group/btn inline-flex items-center justify-center gap-2 rounded-xl font-medium",
          "transition-colors duration-200 ease-out focus-ring",
          variantStyles[variant],
          sizeStyles[size],
          className,
        )}
        {...(props as React.ComponentProps<typeof motion.button>)}
      >
        <span>{children}</span>
        {icon === "arrow" && (
          <ArrowUpRight
            className="h-4 w-4 -mr-0.5 transition-transform duration-200 ease-out group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
            strokeWidth={2}
          />
        )}
      </motion.button>
    );
  },
);
