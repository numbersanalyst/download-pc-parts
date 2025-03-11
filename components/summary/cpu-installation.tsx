"use client";

import { useStoreSelectors } from "@/stores/store";

import { InstallationDetails } from "@/components/summary/installation-details";
import { InstallationOptions } from "@/components/summary/installation-options";
import { SelectedCpuDetails } from "@/components/configuration/selected-cpu-details";
import { SelectionHeader } from "@/components/configuration/selection-header";

export const CpuInstallation = () => {
    const selectedProcessor = useStoreSelectors.use.selectedProcessor();
    return (
        selectedProcessor && (
            <>
                <SelectionHeader step={1} title="Upgrade your CPU" description="Follow steps bellow to upgrade your processor" />
                <SelectedCpuDetails />
                <InstallationDetails />
                <InstallationOptions />
            </>
        )
    )
}