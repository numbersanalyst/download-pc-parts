"use client";

import { useStoreSelectors } from "@/stores/store";
import { PcPart } from "./selected-part";
import { scrollToElement } from "@/lib/utils";

export const SelectedCpu = () => {
  const selectedCpuBrand = useStoreSelectors.use.selectedCpuBrand();
  const selectedProcessor = useStoreSelectors.use.selectedProcessor();

  return (
    selectedProcessor && (
      <PcPart
        partSrc={selectedProcessor.image}
        type="CPU"
        brand={selectedCpuBrand}
        title={selectedProcessor.model}
        onClick={() => scrollToElement("#cpu-installation")}
        subtitle={`${selectedProcessor.microarchitecture} / ${selectedProcessor.coreClock} / ${selectedProcessor.coreCount} core(s) / ${selectedProcessor.threadCount} thread(s)`}
      />
    )
  );
};
