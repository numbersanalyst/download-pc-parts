"use client";

import { useStoreSelectors } from "@/stores/store";
import { graphicsCards, GraphicsCardsType } from "@/data/graphics-cards";
import { SelectModelCarousel } from "./select-model-carousel";

export const SelectGpuModel = () => {
  const selectedGpuBrand = useStoreSelectors.use.selectedGpuBrand();
  const selectedGraphicCard = useStoreSelectors.use.selectedGraphicCard();
  const setGraphicCard = useStoreSelectors.use.setGraphicCard();

  if (!selectedGpuBrand) return null;

  const items = graphicsCards[selectedGpuBrand];

  return (
    <SelectModelCarousel<GraphicsCardsType>
      type="GPU"
      brand={selectedGpuBrand}
      items={items}
      selectedItem={selectedGraphicCard}
      setSelectedItem={setGraphicCard}
    />
  );
};
