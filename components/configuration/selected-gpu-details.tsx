"use client";

import Image from "next/image";
import { useStoreSelectors } from "@/stores/store";
import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { Separator } from "../ui/separator";
import { ScrollArea } from "../ui/scroll-area";
import { DetailsItem } from "./details-item";

export const SelectedGpuDetails = () => {
  const selectedGpuBrand = useStoreSelectors.use.selectedGpuBrand();
  const selectedGraphicCard = useStoreSelectors.use.selectedGraphicCard();

  return (
    selectedGraphicCard && (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Card id="gpu-details" className="flex flex-col md:flex-row min-h-[500px] h-full z-20">
          <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-10 relative">
            <p
              className="text-5xl sm:text-6xl md:text-8xl text-center font-bold absolute select-none
                text-white
                mix-blend-difference
                opacity-75
                contrast-200
                brightness-200"
            >
              Details about your GPU
            </p>
            <Image
              src={selectedGraphicCard.image}
              alt={selectedGraphicCard.model + " GPU image"}
              width={350}
              height={350}
              className="object-contain w-[350px] h-[350px]"
            />
          </div>

          <Separator className="block md:hidden px-2" orientation="horizontal" />
          <Separator className="hidden md:block py-2" orientation="vertical" />

          <ScrollArea className="w-full md:w-1/2 h-full max-h-[500px]">
            <div className="flex flex-col gap-4 p-10 mb-14">
              <DetailsItem title="Manufacture" data={selectedGpuBrand} />
              <DetailsItem title="Model" data={selectedGraphicCard.model} />
              <DetailsItem title="VRAM" data={selectedGraphicCard.vram} />
              <DetailsItem title="Memory Bus" data={selectedGraphicCard.memoryBus} />
              <DetailsItem title="Core Clock" data={selectedGraphicCard.coreClock} />
              <DetailsItem title="Boost Clock" data={selectedGraphicCard.boostClock} />
              <DetailsItem title="TDP" data={selectedGraphicCard.tdp} />
              <DetailsItem title="Power Connectors" data={selectedGraphicCard.powerConnectors} />
              <DetailsItem title="Ports" data={selectedGraphicCard.ports} />
            </div>
            <div className="absolute left-2 right-2 bottom-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none"></div>
          </ScrollArea>
        </Card>
      </motion.div>
    )
  );
};
