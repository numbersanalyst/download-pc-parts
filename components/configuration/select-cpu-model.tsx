"use client";

import { useStoreSelectors } from "@/stores/store";
import { processors, ProcessorType } from "@/data/processors";
import { SelectModelCarousel } from "./select-model-carousel";

export const SelectCpuModel = () => {
  const selectedCpuBrand = useStoreSelectors.use.selectedCpuBrand();
  const selectedProcessor = useStoreSelectors.use.selectedProcessor();
  const setProcessor = useStoreSelectors.use.setProcessor();

  if (!selectedCpuBrand) return null;

  const items = processors[selectedCpuBrand];

  return (
    <SelectModelCarousel<ProcessorType>
      type="CPU"
      brand={selectedCpuBrand}
      items={items}
      selectedItem={selectedProcessor}
      setSelectedItem={setProcessor}
    />
  );
};
