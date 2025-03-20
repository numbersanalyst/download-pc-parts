"use client";

import { useStoreSelectors } from "@/stores/store";

import { InstallationOptions } from "@/components/summary/installation-options";
import { SelectedPartPhoto } from "./selected-part-photo";
import { SelectedPartHeader } from "./selected-part-header";

export const CpuInstallation = () => {
    const selectedCpuBrand = useStoreSelectors.use.selectedCpuBrand();
    const selectedProcessor = useStoreSelectors.use.selectedProcessor();
    return (
        selectedProcessor && (
            <div className="flex flex-col items-center w-full">
                <SelectedPartHeader step={1} title="Upgrade your CPU" description="Follow steps bellow to install your processor"/>
                <SelectedPartPhoto text={selectedCpuBrand + " " + selectedProcessor.model} imgSrc={selectedProcessor.image} id="cpu-installation"/>
                <InstallationOptions />
            </div>
        )
    )
}