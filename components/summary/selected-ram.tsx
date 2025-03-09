"use client";

import { useStoreSelectors } from "@/stores/store";
import { PcPart } from "./selected-part";

export const SelectedRam = () => {
  const selectedRam = useStoreSelectors.use.selectedRam();

  return (
    selectedRam && (
      <PcPart
        partSrc={selectedRam.image}
        type="RAM"
        title={selectedRam.model}
        subtitle={`${selectedRam.capacity} / ${selectedRam.speed} / ${selectedRam.latency} / ${selectedRam.voltage}`}
      />
    )
  );
};
