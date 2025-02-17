import { cn } from "@/lib/utils";
import { MagicCard } from "../magicui/magic-card";
import Image from "next/image";

interface NvidiaBrandCardProps {
    selected: boolean;
    onClick?: () => void;
    thing?: string;
}

export const NvidiaBrandCard = ({
    selected,
    onClick,
    thing = "graphics cards",
}: NvidiaBrandCardProps) => {
    return (
        <MagicCard
            className={cn(
                "cursor-pointer flex-col items-center justify-center text-2xl shadow-2xl",
                selected && "ring-1 ring-green-700 ring-opacity-60"
            )}
            gradientColor={"#7ab547"}
            gradientOpacity={0.1}
            gradientSize={300}
            gradientFrom="#61ff95"
            gradientTo="#7ab547"
            onClick={onClick}
        >
            <div className="relative">
                <div className="flex justify-center items-center">
                    <Image
                        className="dark:invert dark:hue-rotate-180"
                        src={"/nvidia-logo.svg"}
                        alt="nvidia brand logo"
                        width={150}
                        height={150}
                    />
                </div>
                <div className="flex justify-center items-center text-nowrap text-gray-500 lg:absolute text-center w-full mt-2 lg:mt-5">
                    Nvidia {thing}
                </div>
            </div>
        </MagicCard>
    );
};
