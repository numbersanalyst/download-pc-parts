"use client";

import { useStoreSelectors } from "@/stores/store";
import { scrollToElement } from "@/lib/utils";
import { BrandCard } from "./card-brand";

export const SelectCpuBrand = () => {
  const selectedCpuBrand = useStoreSelectors.use.selectedCpuBrand();
  const setCpuBrand = useStoreSelectors.use.setCpuBrand();

  return (
    <div className="flex h-[500px] lg:h-[400px] flex-col gap-4 lg:flex-row select-none" id="cpu-brands">
      <BrandCard
        thing="AMD processors"
        selected={selectedCpuBrand === "AMD"}
        onClick={() => {
          setCpuBrand("AMD");
          scrollToElement("#cpu-carousel");
        }}
        logoSrc={"logos/amd-logo.svg"}
        logoAlt="AMD brand logo"
        logoSize={270}
        gradientColor="#ff0000"
        gradientFrom="#ffc0c0"
        gradientTo="#ff9980"
        ringColor="ring-red-500"
      />
      <BrandCard
        thing="Intel processors"
        selected={selectedCpuBrand === "Intel"}
        onClick={() => {
          setCpuBrand("Intel");
          scrollToElement("#cpu-carousel");
        }}
        logoSrc={"logos/intel-logo.svg"}
        logoAlt="Intel brand logo"
        logoSize={200}
        gradientColor="#0099ff"
        gradientFrom="#ccccff"
        gradientTo="#66ccff"
        ringColor="ring-blue-500"
        darkHueRotate={true}
      />
    </div>
  );
};
