import { cn } from "@/lib/utils";
import { MagicCard } from "../magicui/magic-card";
import Image from "next/image";

interface BrandCardProps extends React.HTMLAttributes<HTMLDivElement> {
  thing?: string;
  selected?: boolean;
  onClick?: () => void;
  logoSrc: string;
  logoAlt: string;
  logoSize: number;
  gradientColor: string;
  gradientFrom: string;
  gradientTo: string;
  ringColor: string;
  darkHueRotate?: boolean;
}

export const BrandCard = ({
  className,
  selected = false,
  thing,
  onClick,
  logoSrc,
  logoAlt,
  logoSize,
  gradientColor,
  gradientFrom,
  gradientTo,
  ringColor,
  darkHueRotate = false,
  ...props
}: BrandCardProps) => {
  return (
    <MagicCard
      className={cn(
        "cursor-pointer flex-col items-center justify-center text-2xl shadow-2xl",
        selected && `ring-1 ${ringColor} ring-opacity-60`,
        className
      )}
      gradientOpacity={0.1}
      gradientSize={300}
      gradientColor={gradientColor}
      gradientFrom={gradientFrom}
      gradientTo={gradientTo}
      onClick={onClick}
      {...props}
    >
      <div className="relative">
        <div className="flex justify-center items-center">
          <Image
            className={cn("dark:invert text-center p-6 sm:p-0", darkHueRotate && "dark:hue-rotate-180")}
            src={logoSrc}
            alt={logoAlt}
            width={logoSize}
            height={logoSize}
          />
        </div>
        <div className="flex justify-center items-center text-nowrap text-gray-500 lg:absolute text-center w-full mt-2 lg:mt-5">
          {thing}
        </div>
      </div>
    </MagicCard>
  );
};
