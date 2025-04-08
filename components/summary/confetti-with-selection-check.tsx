"use client";

import { useStoreSelectors } from "@/stores/store";
import { ConfettiSideCannons } from "./confetti";
import { NoSelectionOverlay } from "./no-selection-overlay";

const ConfettiWithSelectionCheck = () => {
  const isDataEmpty = useStoreSelectors.use.isDataEmpty();

  return (
    <>
      {
        !isDataEmpty() ? (
          <ConfettiSideCannons />
        ) : (
          <NoSelectionOverlay />
        )
      }
    </>
  );
};

export { ConfettiWithSelectionCheck };
