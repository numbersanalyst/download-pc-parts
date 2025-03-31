import { NavigationBtn } from "@/components/nav-btn";
import { MoveLeft } from "lucide-react";
import { InstallationGuide } from "@/components/summary/installation-guide";
import { ConfettiWithSelectionCheck } from "@/components/summary/confetti-with-selection-check";
import { Hero } from "@/components/summary/hero";

export default function Summary() {


  return (
    <>
      <Hero />
      <main className="flex flex-col justify-center items-center">
        <div className="flex flex-col gap-8 w-full max-w-6xl relative p-8 md:p-12">
          <NavigationBtn path="/configure" text="Go back" icon={<MoveLeft />} />
        </div>

        <InstallationGuide />

        <ConfettiWithSelectionCheck />
      </main>
    </>
  );
}
