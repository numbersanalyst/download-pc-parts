"use client";

import { useStoreSelectors } from "@/stores/store";
import { SelectedComponentDetails } from "./selected-part-details";

interface SelectedGpuDetailsProps {
  showCustomGpu?: boolean;
}
export const SelectedGpuDetails = ({showCustomGpu = false} : SelectedGpuDetailsProps) => {
  const selectedGpuBrand = useStoreSelectors.use.selectedGpuBrand();
  const selectedGraphicCard = useStoreSelectors.use.selectedGraphicCard();

  if (!selectedGraphicCard) return null;

  if (!showCustomGpu && !selectedGpuBrand) return null;

  const properties = [
    { title: "Model", key: "model" },
    { title: "VRAM", key: "vram" },
    { title: "Memory Bus", key: "memoryBus" },
    { title: "Core Clock", key: "coreClock" },
    { title: "Boost Clock", key: "boostClock" },
    { title: "TDP", key: "tdp" },
    { title: "Power Connectors", key: "powerConnectors" },
    { title: "Ports", key: "ports" },
  ];

  return (
    <SelectedComponentDetails
      type="GPU"
      brand={selectedGpuBrand}
      selectedItem={selectedGraphicCard}
      properties={properties}
    />
  );
};