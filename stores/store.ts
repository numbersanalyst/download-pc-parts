import { create } from "zustand";
import { createSelectors } from "./create-selectors";

type ProcessorType = {
  id: number;
  model: string;
  price: number;
  image: string;
  microarchitecture: string;
  socket: string;
  coreCount: number;
  threadCount: number;
  coreClock: string;
  boostClock: string | null;
  tdp: string;
  integratedGraphics: string | null;
};

type StoreData = {
  selectedCpuBrand: "AMD" | "Intel" | "";
  selectedProcessor: ProcessorType | null;

  setCpuBrand: (brand: "AMD" | "Intel" | "") => void;
  setProcessor: (processor: ProcessorType | null) => void;
  resetData: () => void;
};

const useStore = create<StoreData>((set) => ({
  selectedCpuBrand: "",
  selectedProcessor: null,

  setCpuBrand: (brand) => set({ selectedCpuBrand: brand }),
  setProcessor: (processor) => set({ selectedProcessor: processor }),
  resetData: () =>
    set({
      selectedCpuBrand: "",
      selectedProcessor: null,
    }),
}));

export const useStoreSelectors = createSelectors(useStore);

export default useStore;
