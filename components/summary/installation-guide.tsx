"use client";

import { useState } from "react";
import { SelectedCpuDetails } from "../configuration/selected-cpu-details";
import { SelectedGpuDetails } from "../configuration/selected-gpu-details";
import { SelectedRamDetails } from "../configuration/selected-ram-details";
import { HardwareSelection } from "./hardware-selection";
import { useStoreSelectors } from "@/stores/store";
import { getHardwareScriptsData, HardwareData } from "@/data/hardware-data";

import { CpuInstallationGuide } from "./cpu-installation-guide";
import { GpuInstallationGuide } from "./gpu-installation-guide";
import { RamInstallationGuide } from "./ram-installation-guide";

function InstallationGuide() {
  const [selectedHardware, setSelectedHardware] = useState<string | null>(null);
  const selectedCpuBrand = useStoreSelectors.use.selectedCpuBrand();
  const selectedProcessor = useStoreSelectors.use.selectedProcessor();

  const cpuNameValue = selectedProcessor
    ? selectedCpuBrand === "AMD"
      ? `${selectedCpuBrand} ${selectedProcessor.model} ${selectedProcessor.coreCount}-Core Processor`
      : selectedCpuBrand === "Intel"
        ? `Intel(R) ${selectedProcessor.model} CPU @ ${selectedProcessor.coreClock}`
        : `${selectedCpuBrand} ${selectedProcessor.model} ${selectedProcessor.coreClock}`
    : "Your Custom CPU Name";

  const hardwareData: HardwareData = getHardwareScriptsData(cpuNameValue);

  const downloadScript = (name: string, content: string) => {
    const contentWithCRLF = content.replace(/\n/g, "\r\n");
    const blob = new Blob([contentWithCRLF], { type: "text/plain;charset=utf-8" });
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
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12 mb-4">
        <h1 className="text-4xl font-bold text-center mb-2">
          Hardware Configuration Guide
        </h1>
        <p className="text-center text-muted-foreground mb-8">
          Select a component below to view configuration instructions and utilities.
        </p>

        <HardwareSelection
          onSelect={setSelectedHardware}
          selectedHardware={selectedHardware}
        />

        {selectedHardware === "cpu" && <SelectedCpuDetails />}
        {selectedHardware === "gpu" && <SelectedGpuDetails />}
        {selectedHardware === "ram" && <SelectedRamDetails />}

        {selectedHardware === "cpu" && (
          <CpuInstallationGuide
            cpuNameValue={cpuNameValue}
            scriptsData={hardwareData.cpu}
            downloadScript={downloadScript}
          />
        )}

        {selectedHardware === "gpu" && (
           <GpuInstallationGuide
             scriptsData={hardwareData.gpu}
             downloadScript={downloadScript}
           />
        )}

        {selectedHardware === "ram" && (
           <RamInstallationGuide
             scriptsData={hardwareData.ram}
             downloadScript={downloadScript}
           />
        )}
      </div>
    </div>
  );
}

export { InstallationGuide };