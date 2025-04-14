"use client";

import { useStoreSelectors } from "@/stores/store";
import { SelectedComponentDetails } from "./selected-part-details";

interface SelectedCpuDetailsProps {
  showCustomCpu?: boolean;
}

export const SelectedCpuDetails = ({ showCustomCpu = false }: SelectedCpuDetailsProps) => {
  const selectedCpuBrand = useStoreSelectors.use.selectedCpuBrand();
  const selectedProcessor = useStoreSelectors.use.selectedProcessor();

  if (!selectedProcessor) return null;

  if (!showCustomCpu && !selectedCpuBrand) return null;

  const properties = [
    { title: "Model", key: "model" },
    { title: "Microarchitecture", key: "microarchitecture" },
    { title: "Socket", key: "socket" },
    { title: "Core Count", key: "coreCount" },
    { title: "Thread Count", key: "threadCount" },
    { title: "Performance Core Clock", key: "coreClock" },
    { title: "Performance Core Boost Clock", key: "boostClock" },
    { title: "TDP", key: "tdp" },
    { title: "Integrated Graphics", key: "integratedGraphics" },
  ];

  return (
    <SelectedComponentDetails
      type="CPU"
      brand={selectedCpuBrand}
      selectedItem={selectedProcessor}
      properties={properties}
    />
  );
};