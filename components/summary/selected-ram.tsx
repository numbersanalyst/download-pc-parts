"use client";

import { useStoreSelectors } from "@/stores/store";
import { PcPart } from "./selected-part";

export const SelectedRam = () => {
  const selectedRam = useStoreSelectors.use.selectedRam();

  return (
    selectedRam && (
      <PcPart
        partSrc={selectedRam.image}
        partAlt="Selected RAM image"
        brand="RAM"
        title={selectedRam.model}
        subtitle={`${selectedRam.capacity} / ${selectedRam.speed} / ${selectedRam.latency} / ${selectedRam.voltage}`}
      />
    )
  );
};
