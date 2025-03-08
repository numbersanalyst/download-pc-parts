"use client";

import { useStoreSelectors } from "@/stores/store";
import { rams, RamType } from "@/data/rams";
import { SelectModelCarousel } from "./select-model-carousel";

export const SelectRam = () => {
  const selectedRam = useStoreSelectors.use.selectedRam();
  const setRam = useStoreSelectors.use.setRam();

  const items = rams;

  return (
    <SelectModelCarousel<RamType>
      type="RAM"
      items={items}
      selectedItem={selectedRam}
      setSelectedItem={setRam}
    />
  );
};
