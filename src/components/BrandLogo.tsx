import Image from "next/image";
import { siteConfig } from "@/lib/site";
import { twMerge } from "./cn";

type BrandLogoProps = {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  priority?: boolean;
};

const sizes = {
  sm: { box: "h-16 w-16", image: 72 },
  md: { box: "h-20 w-20 md:h-24 md:w-24", image: 112 },
  lg: { box: "h-24 w-24 md:h-28 md:w-28", image: 128 },
  xl: { box: "h-[6.5rem] w-[6.5rem] sm:h-28 sm:w-28 md:h-32 md:w-32", image: 160 },
};

export function BrandLogo({
  size = "md",
  className,
  priority = false,
}: BrandLogoProps) {
  const { box, image } = sizes[size];

  return (
    <span
      className={twMerge(
        "logo-plate inline-flex shrink-0 items-center justify-center overflow-hidden rounded-[1.35rem]",
        box,
        className,
      )}
    >
      <Image
        src={siteConfig.logoSrc}
        alt={`Logo ${siteConfig.brandName}`}
        width={image}
        height={image}
        className="h-[92%] w-[92%] object-contain"
        priority={priority}
      />
    </span>
  );
}
