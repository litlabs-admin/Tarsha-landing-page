import { cn } from "@/lib/cn";
import type { HTMLAttributes, ReactNode } from "react";

interface EyebrowProps extends HTMLAttributes<HTMLDivElement> {
  icon?: ReactNode;
  children: ReactNode;
  asPill?: boolean;
}

export function Eyebrow({
  icon,
  children,
  asPill = false,
  className,
  ...props
}: EyebrowProps) {
  if (asPill) {
    return (
      <div
        className={cn(
          "inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3.5 py-1.5",
          "text-[12px] font-medium tracking-[0.04em] text-ink-muted backdrop-blur-md",
          "shadow-[0_1px_2px_rgba(17,17,17,0.04)]",
          className,
        )}
        {...props}
      >
        {icon && (
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/90 text-accent-ink">
            {icon}
          </span>
        )}
        <span>{children}</span>
      </div>
    );
  }

  return (
    <div className={cn("eyebrow inline-flex items-center gap-2", className)} {...props}>
      {icon && <span className="text-ink-muted">{icon}</span>}
      <span>{children}</span>
    </div>
  );
}
