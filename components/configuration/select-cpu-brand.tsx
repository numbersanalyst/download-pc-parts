"use client";

import Image from "next/image";
import { MagicCard } from "../magicui/magic-card";
import { useStoreSelectors } from "@/stores/store";
import { cn, scrollToElement } from "@/lib/utils";

export const SelectCpuBrand = () => {
    const selectedCpuBrand = useStoreSelectors.use.selectedCpuBrand();
    const setCpuBrand = useStoreSelectors.use.setCpuBrand();

    return (
        <div className="flex h-[500px] lg:h-[400px] flex-col gap-4 lg:flex-row select-none">
            <MagicCard
                className={cn(
                    "cursor-pointer flex-col items-center justify-center text-2xl shadow-2xl",
                    selectedCpuBrand === "AMD" && "ring-1 ring-red-500 ring-opacity-60"
                )}
                gradientColor={"#ff0000"}
                gradientOpacity={0.1}
                gradientSize={300}
                gradientFrom="#ffc0c0"
                gradientTo="#ff9980"
                onClick={() => {
                    setCpuBrand("AMD");
                    scrollToElement("#cpu-carousel");
                }}
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
                        AMD processors
                    </p>
                </div>
            </MagicCard>
            <MagicCard
                className={cn(
                    "cursor-pointer flex-col items-center justify-center text-2xl shadow-2xl",
                    selectedCpuBrand === "Intel" && "ring-1 ring-blue-500 ring-opacity-60"
                )}
                gradientColor={"#0099ff"}
                gradientOpacity={0.1}
                gradientSize={300}
                gradientFrom="#ccccff"
                gradientTo="#66ccff"
                onClick={() => {
                    setCpuBrand("Intel");
                    scrollToElement("#cpu-carousel");
                }}
            >
                <div className="relative">
                    <Image
                        className="dark:invert dark:hue-rotate-180"
                        src={"/intel-logo.svg"}
                        alt="intel brand logo"
                        width={200}
                        height={200}
                    />
                    <p className="text-gray-500 lg:absolute text-center w-full mt-2 lg:mt-5">
                        Intel processors
                    </p>
                </div>
            </MagicCard>
        </div>
    );
};
