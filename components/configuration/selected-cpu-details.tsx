"use client";

import Image from "next/image";
import { useStoreSelectors } from "@/stores/store";
import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { Separator } from "../ui/separator";
import { ScrollArea } from "../ui/scroll-area";

export const SelectedCpuDetails = () => {
  const selectedCpuBrand = useStoreSelectors.use.selectedCpuBrand();
  const selectedProcessor = useStoreSelectors.use.selectedProcessor();

  return (
    selectedProcessor && (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Card id="cpu-details" className="flex flex-col md:flex-row min-h-[500px] h-full z-20">
          <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-10 relative bg-inherit">
            <p
              className="text-5xl sm:text-6xl md:text-8xl text-center font-bold absolute select-none
                text-white
                mix-blend-difference
                opacity-75
                contrast-200
                brightness-200"
            >
              Details about your CPU
            </p>
            <Image
              src={selectedProcessor.image}
              alt={selectedProcessor.model + " CPU image"}
              width={350}
              height={350}
              className="object-contain w-[350px] h-[350px]"
            />
          </div>

          <Separator className="block md:hidden px-2" orientation="horizontal"/>
          <Separator className="hidden md:block py-2" orientation="vertical" />

          <ScrollArea className="w-full md:w-1/2 h-full max-h-[500px] bg-inherit">
            <div className="flex flex-col gap-4 p-10 mb-14">
              <div>
                <p className="text-md text-gray-500">Manufacture</p>
                <p className="text-2xl font-semibold">{selectedCpuBrand}</p>
              </div>
              <div>
                <p className="text-md text-gray-500">Model</p>
                <p className="text-2xl font-semibold">
                  {selectedProcessor.model}
                </p>
              </div>
              <div>
                <p className="text-md text-gray-500">Microarchitecture</p>
                <p className="text-2xl font-semibold">
                  {selectedProcessor.microarchitecture}
                </p>
              </div>
              <div>
                <p className="text-md text-gray-500">Socket</p>
                <p className="text-2xl font-semibold">
                  {selectedProcessor.socket}
                </p>
              </div>
              <div>
                <p className="text-md text-gray-500">Core Count</p>
                <p className="text-2xl font-semibold">
                  {selectedProcessor.coreCount}
                </p>
              </div>
              <div>
                <p className="text-md text-gray-500">Thread Count</p>
                <p className="text-2xl font-semibold">
                  {selectedProcessor.threadCount}
                </p>
              </div>
              <div>
                <p className="text-md text-gray-500">Performance Core Clock</p>
                <p className="text-2xl font-semibold">
                  {selectedProcessor.coreClock}
                </p>
              </div>
              <div>
                <p className="text-md text-gray-500">
                  Performance Core Boost Clock
                </p>
                <p className="text-2xl font-semibold">
                  {selectedProcessor.boostClock || "N/A"}
                </p>
              </div>
              <div>
                <p className="text-md text-gray-500">TDP</p>
                <p className="text-2xl font-semibold">
                  {selectedProcessor.tdp}
                </p>
              </div>
              <div>
                <p className="text-md text-gray-500">Integrated Graphics</p>
                <p className="text-2xl font-semibold">
                  {selectedProcessor.integratedGraphics || "N/A"}
                </p>
              </div>
            </div>
            <div className="absolute left-2 right-2 bottom-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none"></div>
          </ScrollArea>
        </Card>
      </motion.div>
    )
  );
};
