"use client";

import { NavigationBtn } from "@/components/nav-btn";
import { ConfettiSideCannons, triggerConfetti } from "@/components/summary/confetti";
import { CpuInstallation } from "@/components/summary/cpu-installation";
import { SelectedCpu } from "@/components/summary/selected-cpu";
import { SelectedGpu } from "@/components/summary/selected-gpu";
import { SelectedRam } from "@/components/summary/selected-ram";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MoveLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function Summary() {
  return (
    <main className="flex flex-col justify-center items-center">
      <div className="flex flex-col gap-8 w-full max-w-6xl relative p-8 md:p-12">
        <NavigationBtn path="/configure" text="Go back" icon={<MoveLeft />} />
      </div>

      <div className="flex flex-col lg:flex-row justify-center w-full lg:h-[50vh] lg:min-h-[750px] gap-x-14 p-6">
        <div className="flex flex-col items-center gap-y-8 h-full lg:max-h-[100hv]">
          <div>
            <h1 className="whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-7xl md:text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 p-2 hover:scale-105 transition-scale duration-500 ease-in-out cursor-pointer select-none" onClick={triggerConfetti}>
              Congrats
            </h1>
            <h2 className="text-gray-500 whitespace-pre-wrap text-center text-md md:text-lg">
              You can now download your new PC parts
            </h2>
          </div>

            <SelectedCpu />
            <SelectedGpu />
            <SelectedRam />
        </div>

        <motion.div
          className="mt-20 lg:mt-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
        >
          <ScrollArea className="h-full lg:px-6">
            <CpuInstallation />
          </ScrollArea>
        </motion.div>

      </div>

      <ConfettiSideCannons />
    </main>
  );
}
