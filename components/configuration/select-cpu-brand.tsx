"use client";

import { useStoreSelectors } from "@/stores/store";
import { scrollToElement } from "@/lib/utils";
import { AmdBrandCard } from "./card-amd-brand";
import { IntelBrandCard } from "./card-intel-brand";

export const SelectCpuBrand = () => {
  const selectedCpuBrand = useStoreSelectors.use.selectedCpuBrand();
  const setCpuBrand = useStoreSelectors.use.setCpuBrand();

  return (
    <div className="flex h-[500px] lg:h-[400px] flex-col gap-4 lg:flex-row select-none">
      <AmdBrandCard
        selected={selectedCpuBrand === "AMD"}
        onClick={() => {
          setCpuBrand("AMD");
          scrollToElement("#cpu-carousel");
        }}
      />
      <IntelBrandCard
        selected={selectedCpuBrand === "Intel"}
        onClick={() => {
          setCpuBrand("Intel");
          scrollToElement("#cpu-carousel");
        }}
      />
    </div>
  );
};
