import Image from "next/image";
import { siteConfig } from "@/lib/site";
import { twMerge } from "./cn";

type BrandLogoProps = {
  size?: "sm" | "md" | "lg";
  className?: string;
  priority?: boolean;
};

const sizes = {
  sm: { box: "h-14 w-14", image: 56 },
  md: { box: "h-[4.5rem] w-[4.5rem] md:h-20 md:w-20", image: 96 },
  lg: { box: "h-20 w-20 md:h-24 md:w-24", image: 112 },
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
        "logo-plate inline-flex shrink-0 items-center justify-center overflow-hidden rounded-2xl",
        box,
        className,
      )}
    >
      <Image
        src={siteConfig.logoSrc}
        alt={`Logo ${siteConfig.brandName}`}
        width={image}
        height={image}
        className="h-full w-full object-cover"
        priority={priority}
      />
    </span>
  );
}
