
import { NavigationBtn } from "@/components/nav-btn";
import { ConfettiSideCannons, triggerConfetti } from "@/components/summary/confetti";
import { CpuInstallation } from "@/components/summary/cpu-installation";
import { SelectedCpu } from "@/components/summary/selected-cpu";
import { SelectedGpu } from "@/components/summary/selected-gpu";
import { SelectedRam } from "@/components/summary/selected-ram";
import { MoveLeft } from "lucide-react";

export default function Summary() {
  return (
    <main className="flex justify-center">
      <div className="flex flex-col gap-8 w-full max-w-6xl relative p-8 md:p-12">
        <NavigationBtn path="/configure" text="Go back" icon={<MoveLeft />} />

        <div className="mt-20 flex flex-col items-center gap-8">
          <h1 className="whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-5xl md:text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 p-2 hover:scale-105 transition-scale duration-500 ease-in-out cursor-pointer select-none" onClick={triggerConfetti}>
            Congrats
          </h1>
          <h2 className="text-gray-500 whitespace-pre-wrap text-center text-xl md:text-2xl">
            You can now download your new PC parts
          </h2>

          <SelectedCpu />
          <SelectedGpu />
          <SelectedRam />
        </div>

        <CpuInstallation />

        <ConfettiSideCannons />
      </div>
    </main>
  );
}
