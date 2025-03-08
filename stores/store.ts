import { create } from "zustand";
import { createSelectors } from "./create-selectors";

import { ProcessorType } from "@/data/processors";
import { GraphicsCardsType } from "@/data/graphics-cards";
import { RamType } from "@/data/rams";

type StoreData = {
  selectedCpuBrand: "AMD" | "Intel" | "";
  selectedGpuBrand: "AMD" | "Intel" | "Nvidia" | "";
  selectedProcessor: ProcessorType | null;
  selectedGraphicCard: GraphicsCardsType | null;
  selectedRam: RamType | null;

  setCpuBrand: (brand: "AMD" | "Intel" | "") => void;
  setGpuBrand: (brand: "AMD" | "Intel" | "Nvidia" | "") => void;
  setProcessor: (processor: ProcessorType | null) => void;
  setGraphicCard: (gpu: GraphicsCardsType | null) => void;
  setRam: (ram: RamType | null) => void;
  resetData: () => void;
};

const useStore = create<StoreData>((set) => ({
  selectedCpuBrand: "",
  selectedGpuBrand: "",
  selectedProcessor: null,
  selectedGraphicCard: null,
  selectedRam: null,

  setCpuBrand: (brand) => set({ 
    selectedCpuBrand: brand,
    selectedProcessor: null 
  }),
  setGpuBrand: (brand) => set({ 
    selectedGpuBrand: brand,
    selectedGraphicCard: null 
  }),
  setProcessor: (processor) => set({ selectedProcessor: processor }),
  setGraphicCard: (gpu) => set({ selectedGraphicCard: gpu }),
  setRam: (ram) => set({ selectedRam: ram }),
  resetData: () =>
    set({
      selectedCpuBrand: "",
      selectedGpuBrand: "",
      selectedProcessor: null,
      selectedGraphicCard: null,
      selectedRam: null,
    }),
}));

export const useStoreSelectors = createSelectors(useStore);

export default useStore;
