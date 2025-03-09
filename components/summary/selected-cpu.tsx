"use client";

import { useStoreSelectors } from "@/stores/store";
import { PcPart } from "./selected-part";

export const SelectedCpu = () => {
  const selectedCpuBrand = useStoreSelectors.use.selectedCpuBrand();
  const selectedProcessor = useStoreSelectors.use.selectedProcessor();

  return (
    selectedProcessor && (
      <PcPart
        partSrc={selectedProcessor.image}
        partAlt="Selected CPU image"
        brand={`${selectedCpuBrand} CPU`}
        title={selectedProcessor.model}
        subtitle={`${selectedProcessor.microarchitecture} / ${selectedProcessor.coreClock} / ${selectedProcessor.coreCount} core(s) / ${selectedProcessor.threadCount} thread(s)`}
      />
    )
  );
};
