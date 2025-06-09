"use client";

import { useState } from "react";
import { SelectedCpuDetails } from "../configuration/selected-cpu-details";
import { SelectedGpuDetails } from "../configuration/selected-gpu-details";
import { SelectedRamDetails } from "../configuration/selected-ram-details";
import { HardwareSelection } from "./hardware-selection";
import { getHardwareScriptsData, HardwareData } from "@/data/hardware-data";

import { CpuInstallationGuide } from "./cpu-installation-guide";
import { GpuInstallationGuide } from "./gpu-installation-guide";
import { RamInstallationGuide } from "./ram-installation-guide";
import { CustomCpuInput } from "./custom-cpu-input";
import { CustomGpuInput } from "./custom-gpu-input";

function InstallationGuide() {
  const [selectedHardware, setSelectedHardware] = useState<string | null>(null);

  const hardwareData: HardwareData = getHardwareScriptsData();

  const downloadScript = (name: string, content: string) => {
    const contentWithCRLF = content.replace(/\n/g, "\r\n");
    const blob = new Blob([contentWithCRLF], {
      type: "text/plain;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen w-full">
      <div className="container mx-auto px-4 py-12 mb-4 max-w-6xl">
        <h1 className="text-4xl font-bold text-center mb-2">
          Hardware Configuration Guide
        </h1>
        <p className="text-center text-muted-foreground mb-8">
          Select a component below to view configuration instructions and
          utilities.
        </p>

        <HardwareSelection
          onSelect={setSelectedHardware}
          selectedHardware={selectedHardware}
        />

        {selectedHardware === "cpu" && (
          <>
            <CustomCpuInput />
            <SelectedCpuDetails showCustomCpu={true} />
            <CpuInstallationGuide
              scriptsData={hardwareData.cpu}
              downloadScript={downloadScript}
            />
          </>
        )}

        {selectedHardware === "gpu" && (
          <>
            <CustomGpuInput />
            <SelectedGpuDetails showCustomGpu={true} />
            <GpuInstallationGuide
              scriptsData={hardwareData.gpu}
              downloadScript={downloadScript}
            />
          </>
        )}

        {selectedHardware === "ram" && (
          <>
            <SelectedRamDetails />
            <RamInstallationGuide
              scriptsData={hardwareData.ram}
              downloadScript={downloadScript}
            />
          </>
        )}
      </div>
    </div>
  );
}

export { InstallationGuide };
