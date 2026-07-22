import Link from "next/link";
import { twMerge } from "./cn";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-rose-gold text-white shadow-soft hover:bg-rose-gold-deep focus-visible:ring-rose-gold",
  secondary:
    "bg-white/80 text-ink border border-blush-deep/40 hover:bg-white focus-visible:ring-rose-gold",
  ghost:
    "bg-transparent text-ink hover:text-rose-gold focus-visible:ring-rose-gold",
};

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  external?: boolean;
  ariaLabel?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  external = false,
  ariaLabel,
}: ButtonProps) {
  const classes = twMerge(
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-cream",
    variants[variant],
    className,
  );

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
