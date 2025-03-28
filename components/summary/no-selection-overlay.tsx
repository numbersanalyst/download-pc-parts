"use client";

import { Button } from "@/components/ui/button";
import { useStoreSelectors } from "@/stores/store";
import { ShieldBan } from "lucide-react";
import Link from "next/link";

const NoSelectionOverlay = () => {
  const selectedCpu = useStoreSelectors.use.selectedProcessor();
  const selectedGpu = useStoreSelectors.use.selectedGraphicCard();
  const selectedRam = useStoreSelectors.use.selectedRam();

  if (selectedCpu || selectedGpu || selectedRam) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-[200]">
      <div className="text-white text-center p-4">
        <ShieldBan className="size-12 mx-auto mb-2" />
        <h2 className="text-2xl font-bold">No Part Selected</h2>
        <p className="mt-2">Please select a part to continue.</p>
        <Link href={"/configure"}>
          <Button className="mt-4 w-32">Go Back</Button>
        </Link>
      </div>
    </div>
  );
};

export { NoSelectionOverlay };
