import { cn } from "@/lib/utils";
import { MagicCard } from "../magicui/magic-card";
import Image from "next/image";

interface IntelBrandCardProps {
  selected: boolean;
  onClick?: () => void;
  thing?: string;
}

export const IntelBrandCard = ({
  selected,
  onClick,
  thing = "processors",
}: IntelBrandCardProps) => {
  return (
    <MagicCard
      className={cn(
        "cursor-pointer flex-col items-center justify-center text-2xl shadow-2xl",
        selected && "ring-1 ring-blue-500 ring-opacity-60"
      )}
      gradientColor={"#0099ff"}
      gradientOpacity={0.1}
      gradientSize={300}
      gradientFrom="#ccccff"
      gradientTo="#66ccff"
      onClick={onClick}
    >
      <div className="relative">
        <div className="flex justify-center items-center">
            <Image
            className="dark:invert dark:hue-rotate-180"
            src={"/intel-logo.svg"}
            alt="intel brand logo"
            width={200}
            height={200}
            />
        </div>
        <div className="flex justify-center items-center text-nowrap text-gray-500 lg:absolute text-center w-full mt-2 lg:mt-5">
          Intel {thing}
        </div>
      </div>
    </MagicCard>
  );
};
