import { Navigation } from "@/components/configuration/navigation";
import { SelectionHeader } from "@/components/configuration/selection-header";
import { SelectCpuBrand } from "@/components/configuration/select-cpu-brand";
import { SelectCpuModel } from "@/components/configuration/select-cpu-model";
import { SelectedCpuDetails } from "@/components/configuration/selected-cpu-details";
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
    </>
  );
}
