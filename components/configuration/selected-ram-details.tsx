"use client";

import { useStoreSelectors } from "@/stores/store";
import { SelectedComponentDetails } from "./selected-part-details";

export const SelectedRamDetails = () => {
  const selectedRam = useStoreSelectors.use.selectedRam();

  if (!selectedRam) return null;

  const properties = [
    { title: "Model", key: "model" },
    { title: "Price", key: "price" },
    { title: "Type", key: "type" },
    { title: "Capacity", key: "capacity" },
    { title: "Speed", key: "speed" },
    { title: "Voltage", key: "voltage" },
    { title: "Latency", key: "latency" },
  ];

  return (
    <SelectedComponentDetails
      type="RAM"
      selectedItem={selectedRam}
      properties={properties}
    />
  );
};