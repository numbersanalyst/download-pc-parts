"use client";

import { useStoreSelectors } from "@/stores/store";
import { PcPart } from "./selected-part";

export const SelectedGpu = () => {
  const selectedGpuBrand = useStoreSelectors.use.selectedGpuBrand();
  const selectedGraphicCard = useStoreSelectors.use.selectedGraphicCard();

  return (
    selectedGraphicCard && (
      <PcPart
        partSrc={selectedGraphicCard.image}
        partAlt="Selected GPU image"
        brand={`${selectedGpuBrand} GPU`}
        title={selectedGraphicCard.model}
        subtitle={`${selectedGraphicCard.vram} / ${selectedGraphicCard.tdp} / ${selectedGraphicCard.coreClock} / ${selectedGraphicCard.memoryBus}`}
      />
    )
  );
};
