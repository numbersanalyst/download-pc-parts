import { create } from "zustand";
import { persist } from "zustand/middleware";
import { createSelectors } from "./create-selectors";
import { ProcessorType } from "@/data/processors";
import { GraphicsCardsType } from "@/data/graphics-cards";
import { RamType } from "@/data/rams";

type StoreData = {
  selectedCpuBrand: "AMD" | "Intel" | null;
  selectedGpuBrand: "AMD" | "Intel" | "Nvidia" | null;
  selectedProcessor: ProcessorType | null;
  selectedGraphicCard: GraphicsCardsType | null;
  selectedRam: RamType | null;

  setCpuBrand: (brand: "AMD" | "Intel" | null) => void;
  setGpuBrand: (brand: "AMD" | "Intel" | "Nvidia" | null) => void;
  setProcessor: (processor: ProcessorType | null) => void;
  setGraphicCard: (gpu: GraphicsCardsType | null) => void;
  setRam: (ram: RamType | null) => void;
  resetData: () => void;
  isDataEmpty: () => boolean;
};

const useStore = create<StoreData>()(persist((set, get) => ({
  selectedCpuBrand: null,
  selectedGpuBrand: null,
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
      selectedCpuBrand: null,
      selectedGpuBrand: null,
      selectedProcessor: null,
      selectedGraphicCard: null,
      selectedRam: null,
    }),
  isDataEmpty: () => {
    const state = get();
    return !state.selectedCpuBrand && 
           !state.selectedGpuBrand && 
           !state.selectedProcessor && 
           !state.selectedGraphicCard && 
           !state.selectedRam;
  },
}), {
  name: "downloadpcparts-data",
}));

export const useStoreSelectors = createSelectors(useStore);

export default useStore;
