import { Navigation } from "@/components/configuration/navigation";
import { SelectionHeader } from "@/components/configuration/selection-header";
import { SelectCpuBrand } from "@/components/configuration/select-cpu-brand";
import { SelectCpuModel } from "@/components/configuration/select-cpu-model";
import { SelectedCpuDetails } from "@/components/configuration/selected-cpu-details";
import { SelectGpuBrand } from "@/components/configuration/select-gpu-brand";
import { SelectGpuModel } from "@/components/configuration/select-gpu-model";
import { SelectedGpuDetails } from "@/components/configuration/selected-gpu-details";
import { SelectRam } from "@/components/configuration/select-ram";
import { SelectedRamDetails } from "@/components/configuration/selected-ram-details";
import { HeroBackground } from "@/components/configuration/hero";

export default function Configure() {
  return (
    <>
      <HeroBackground />
      <main className="flex justify-center">
        <div className="flex flex-col gap-8 w-full max-w-6xl relative p-4 sm:p-6 md:p-12">
          <Navigation />

          <SelectionHeader
            step={1}
            title="Select your CPU"
            description="Choose brand, model and you are ready to go"
          />
          <SelectCpuBrand />
          <SelectCpuModel />
          <SelectedCpuDetails />

          <SelectionHeader
            step={2}
            title="Select your GPU"
            description="Choose brand, model and you are ready to go"
          />
          <SelectGpuBrand />
          <SelectGpuModel />
          <SelectedGpuDetails />

          <SelectionHeader
            step={3}
            title="Select your RAM"
            description="Choose amount of RAM and you are ready to go"
          />
          <SelectRam />
          <SelectedRamDetails />

          <Navigation className="mt-6 md:mt-12 mb-16" />
        </div>
      </main>
    </>
  );
}
