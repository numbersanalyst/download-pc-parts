"use client";

import { useStoreSelectors } from "@/stores/store";
import { processors, ProcessorType } from "@/data/processors";
import { SelectModelCarousel } from "./select-model-carousel";

export const SelectCpuModel = () => {
  const selectedCpuBrand = useStoreSelectors.use.selectedCpuBrand();
  const selectedProcessor = useStoreSelectors.use.selectedProcessor();
  const setProcessor = useStoreSelectors.use.setProcessor();

  if (!selectedCpuBrand) return null;

  // const items = processors[selectedCpuBrand];

  const amdCpus = processors["AMD"];
  const intelCpus = processors["Intel"];

  return (
    <>
      {selectedCpuBrand && selectedCpuBrand == "AMD" && (
        <SelectModelCarousel<ProcessorType>
          type="CPU"
          brand={selectedCpuBrand}
          items={amdCpus}
          selectedItem={selectedProcessor}
          setSelectedItem={setProcessor}
        />
      )}

      {selectedCpuBrand && selectedCpuBrand == "Intel" && (
        <SelectModelCarousel<ProcessorType>
          type="CPU"
          brand={selectedCpuBrand}
          items={intelCpus}
          selectedItem={selectedProcessor}
          setSelectedItem={setProcessor}
        />
      )}
    </>
  );
};
