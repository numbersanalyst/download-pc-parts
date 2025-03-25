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
import { InstallationGuide } from "@/components/summary/installation-guide";

export default function Summary() {
  return (
    <main className="flex flex-col justify-center items-center">
      <div className="flex flex-col gap-8 w-full max-w-6xl relative p-8 md:p-12">
        <NavigationBtn path="/configure" text="Go back" icon={<MoveLeft />} />
      </div>

      <InstallationGuide />

      <ConfettiSideCannons />
    </main>
  );
}
