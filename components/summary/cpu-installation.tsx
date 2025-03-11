"use client";

import { useStoreSelectors } from "@/stores/store";

import { InstallationDetails } from "@/components/summary/installation-details";
import { InstallationOptions } from "@/components/summary/installation-options";
import { SelectedPartPhoto } from "./selected-part-photo";
import { SelectedPartHeader } from "./selected-part-header";

export const CpuInstallation = () => {
    const selectedCpuBrand = useStoreSelectors.use.selectedCpuBrand();
    const selectedProcessor = useStoreSelectors.use.selectedProcessor();
    return (
        selectedProcessor && (
            <>
                <SelectedPartHeader step={1} title="Upgrade your CPU" description="Follow steps bellow to upgrade your processor" />
                <SelectedPartPhoto text={selectedCpuBrand + " " + selectedProcessor.model} imgSrc={selectedProcessor.image}/>
                <InstallationDetails />
                <InstallationOptions />
            </>
        )
    )
}