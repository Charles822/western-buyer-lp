import Image from "next/image";
import { cn } from "@/lib/utils";

/** Matches `public/convertree_new_logo.png` pixel dimensions for correct layout width from height. */
const LOGO_SRC_W = 1276;
const LOGO_SRC_H = 832;

export type ConvertreeLogoLockupProps = {
  /** Icon + wordmark contrast */
  variant: "onLight" | "onDark";
  size?: "nav" | "footer" | "headerCompact";
  className?: string;
  priority?: boolean;
};

const sizeStyles = {
  nav: {
    img: "h-[3.575rem] w-auto sm:h-[4.225rem]",
    text: "text-xl font-semibold tracking-tight sm:text-2xl",
  },
  footer: {
    img: "h-[2.925rem] w-auto",
    text: "text-lg font-semibold tracking-tight",
  },
  headerCompact: {
    img: "h-[2.925rem] w-auto sm:h-[3.25rem]",
    text: "text-lg font-semibold tracking-tight sm:text-xl",
  },
} as const;

export function ConvertreeLogoLockup({
  variant,
  size = "nav",
  className,
  priority,
}: ConvertreeLogoLockupProps) {
  const s = sizeStyles[size];
  const textColor = variant === "onLight" ? "text-stone-900" : "text-white";

  return (
    <span className={cn("inline-flex items-center gap-1", className)}>
      <Image
        src="/convertree_new_logo.png"
        alt=""
        width={LOGO_SRC_W}
        height={LOGO_SRC_H}
        className={cn(s.img, "shrink-0 object-contain")}
        sizes="140px"
        priority={priority}
        aria-hidden
      />
      <span className={cn(s.text, textColor)}>Convertree</span>
    </span>
  );
}
