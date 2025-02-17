import { cn } from "@/lib/utils";
import { MagicCard } from "../magicui/magic-card";
import Image from "next/image";

interface AmdBrandCardProps {
  selected: boolean;
  onClick: () => void;
  thing?: string;
}

export const AmdBrandCard = ({
  selected,
  onClick,
  thing="processors",
}: AmdBrandCardProps) => {
  return (
    <MagicCard
      className={cn(
        "cursor-pointer flex-col items-center justify-center text-2xl shadow-2xl",
        selected && "ring-1 ring-red-500 ring-opacity-60"
      )}
      gradientColor={"#ff0000"}
      gradientOpacity={0.1}
      gradientSize={300}
      gradientFrom="#ffc0c0"
      gradientTo="#ff9980"
      onClick={onClick}
    >
      <div className="relative">
        <Image
          className="dark:invert"
          src={"/amd-logo.svg"}
          alt="amd brand logo"
          width={270}
          height={270}
        />
        <p className="text-gray-500 lg:absolute text-center w-full mt-2 lg:mt-5">
          AMD {thing}
        </p>
      </div>
    </MagicCard>
  );
};
