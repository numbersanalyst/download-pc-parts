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

type GraphicsCardsType = {
  id: number;
  model: string;
  price: number;
  image: string;
  vram: string;
  memoryBus: string;
  coreClock: string;
  boostClock: string;
  tdp: string;
  powerConnectors: string;
  ports: string;
};

type RamType = {
  id: number;
  model: string;
  price: number;
  image: string;
  type: string;
  capacity: string;
  speed: string;
  voltage: string;
  latency: string;
};

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

  setCpuBrand: (brand) => set({ selectedCpuBrand: brand }),
  setGpuBrand: (brand) => set({ selectedGpuBrand: brand }),
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
