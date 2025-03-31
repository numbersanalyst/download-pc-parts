"use client";

import { Cpu, Wallpaper as Gpu, MemoryStick as Memory } from "lucide-react";
import { HardwareCardItem } from "./hardware-card-item";

interface HardwareSelectionProps {
  onSelect: (hardware: string) => void;
  selectedHardware: string | null;
}

const HardwareSelection = ({
  onSelect,
  selectedHardware,
}: HardwareSelectionProps) => {
  return (
    <div className="grid md:grid-cols-3 gap-6 my-12" id="hardware-selection">
      <HardwareCardItem
        id="cpu"
        title="CPU Installation"
        description="Learn how to safely install or upgrade your processor"
        icon={<Cpu className="w-8 h-8" />}
        onSelect={onSelect}
        isSelected={selectedHardware === "cpu"}
      />
      <HardwareCardItem
        id="gpu"
        title="GPU Setup"
        description="Guide for graphics card installation and driver setup"
        icon={<Gpu className="w-8 h-8" />}
        onSelect={onSelect}
        isSelected={selectedHardware === "gpu"}
      />
      <HardwareCardItem
        id="ram"
        title="RAM Configuration"
        description="Steps to install and optimize your memory modules"
        icon={<Memory className="w-8 h-8" />}
        onSelect={onSelect}
        isSelected={selectedHardware === "ram"}
      />
    </div>
  );
};

export { HardwareSelection };
