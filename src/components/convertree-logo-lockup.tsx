import Image from "next/image";
import { cn } from "@/lib/utils";

/** Intrinsic size of `public/convertree_new_logo.png` (color, light backgrounds). */
const LOGO_COLOR_W = 1276;
const LOGO_COLOR_H = 832;
/** Intrinsic size of `public/convertree_new_logo_white.png` (dark backgrounds). */
const LOGO_WHITE_W = 356;
const LOGO_WHITE_H = 648;

export type ConvertreeLogoMarkOverride = {
  src: string;
  width: number;
  height: number;
};

export type ConvertreeLogoLockupProps = {
  /** Icon + wordmark contrast */
  variant: "onLight" | "onDark";
  size?: "nav" | "footer" | "headerCompact";
  className?: string;
  priority?: boolean;
  /** When set, replaces the default mark (e.g. multicolor icon on voice landings). */
  markImage?: ConvertreeLogoMarkOverride;
};

const sizeStyles = {
  nav: {
    img: "h-[2.06rem] w-auto sm:h-[3.38rem]",
    text: "text-xl font-semibold leading-none tracking-tight sm:text-2xl",
  },
  footer: {
    img: "h-[2.34rem] w-auto",
    text: "text-lg font-semibold leading-none tracking-tight",
  },
  headerCompact: {
    img: "h-[2.34rem] w-auto sm:h-[2.6rem]",
    text: "text-lg font-semibold leading-none tracking-tight sm:text-xl",
  },
} as const;

export function ConvertreeLogoLockup({
  variant,
  size = "nav",
  className,
  priority,
  markImage,
}: ConvertreeLogoLockupProps) {
  const s = sizeStyles[size];
  const textColor = variant === "onLight" ? "text-stone-900" : "text-white";
  const logoAsset = markImage
    ? markImage
    : variant === "onDark"
      ? {
          src: "/convertree_new_logo_white.png",
          width: LOGO_WHITE_W,
          height: LOGO_WHITE_H,
        }
      : {
          src: "/convertree_new_logo.png",
          width: LOGO_COLOR_W,
          height: LOGO_COLOR_H,
        };

  return (
    <span className={cn("inline-flex items-end gap-1", className)}>
      <Image
        src={logoAsset.src}
        alt=""
        width={logoAsset.width}
        height={logoAsset.height}
        className={cn(s.img, "block shrink-0 object-contain object-bottom")}
        sizes="140px"
        priority={priority}
        aria-hidden
      />
      <span className={cn(s.text, textColor)}>Convertree</span>
    </span>
  );
}
