import { NavigationBtn } from "@/components/nav-btn";
import { ConfettiSideCannons, triggerConfetti } from "@/components/summary/confetti";
import { MoveLeft } from "lucide-react";
import { InstallationGuide } from "@/components/summary/installation-guide";
import {NoSelectionOverlay} from "@/components/summary/no-selection-overlay";

export default function Summary() {


  return (
    <main className="flex flex-col justify-center items-center">
      <div className="flex flex-col gap-8 w-full max-w-6xl relative p-8 md:p-12">
        <NavigationBtn path="/configure" text="Go back" icon={<MoveLeft />} />
      </div>

      <InstallationGuide />

      <NoSelectionOverlay/>
      <ConfettiSideCannons />
    </main>
  );
}
