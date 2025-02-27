import { Navigation } from "@/components/configuration/navigation";
import { SelectionHeader } from "@/components/configuration/selection-header";
import { SelectCpuBrand } from "@/components/configuration/select-cpu-brand";
import { SelectCpuModel } from "@/components/configuration/select-cpu-model";
import { SelectedCpuDetails } from "@/components/configuration/selected-cpu-details";
import { SelectGpuBrand } from "@/components/configuration/select-gpu-brand";
import { SelectGpuModel } from "@/components/configuration/select-gpu-model";
import { SelectedGpuDetails } from "@/components/configuration/selected-gpu-details";
// import { Hero } from "@/components/configuration/hero";

export default function Configure() {
  return (
    <>
      <Navigation />

      {/* Dont working on stackblitz */}
      {/* <Hero /> */}

      <SelectionHeader 
        step={1}
        title="Select your CPU" 
        description="Choose brand, model and you are ready to go" 
      />

      <SelectCpuBrand />
      <SelectCpuModel />
      <SelectedCpuDetails />



      <p className="mt-24">TESTING GPU SELECTION</p>

      <SelectionHeader 
        step={2}
        title="Select your GPU" 
        description="Choose brand, model and you are ready to go" 
      />

      <SelectGpuBrand />
      <SelectGpuModel />
      <SelectedGpuDetails />
    </>
  );
}
