"use client";

import { useStoreSelectors } from "@/stores/store";
import { ConfettiSideCannons } from "./confetti";
import { NoSelectionOverlay } from "./no-selection-overlay";

const ConfettiWithSelectionCheck = () => {
  const selectedCpu = useStoreSelectors.use.selectedProcessor();
  const selectedGpu = useStoreSelectors.use.selectedGraphicCard();
  const selectedRam = useStoreSelectors.use.selectedRam();

  const isAnyPartSelected = selectedCpu || selectedGpu || selectedRam;

  return (
    <>
      {isAnyPartSelected && <ConfettiSideCannons />}
      {!isAnyPartSelected && <NoSelectionOverlay />}
    </>
  );
};

export { ConfettiWithSelectionCheck };
