"use client";

import { useStoreSelectors } from "@/stores/store";
import { PcPart } from "./selected-part";
import { scrollToElement } from "@/lib/utils";

export const SelectedRam = () => {
  const selectedRam = useStoreSelectors.use.selectedRam();

  return (
    selectedRam && (
      <PcPart
        partSrc={selectedRam.image}
        type="RAM"
        title={selectedRam.model}
        onClick={() => scrollToElement("#ram-installation")}
        subtitle={`${selectedRam.capacity} / ${selectedRam.speed} / ${selectedRam.latency} / ${selectedRam.voltage}`}
      />
    )
  );
};
