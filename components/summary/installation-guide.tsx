"use client";

import { useState } from "react";
import { Terminal, Download, Bot, ListOrdered, Code, Check, PlayCircle } from "lucide-react";
import { Card } from "../ui/card";
import { Tabs, TabsContent, TabsList } from "../ui/tabs";
import { TabsTrigger } from "@radix-ui/react-tabs";
import { motion } from "framer-motion";
import { SelectedCpuDetails } from "../configuration/selected-cpu-details";
import { SelectedGpuDetails } from "../configuration/selected-gpu-details";
import { SelectedRamDetails } from "../configuration/selected-ram-details";
import { HardwareSelection } from "./hardware-selection";
import { useStoreSelectors } from "@/stores/store";
import { Step, Steps } from "./steps";
import { CodeBlock } from "../ui/code-block";

interface HardwareData {
  title: string;
  scripts: {
    name: string;
    content: string;
  }[];
}

type CustomTabsTriggerProps = {
  value: string;
  isActive: boolean | undefined;
  children: React.ReactNode;
};

function CustomTabsTrigger({
  value,
  isActive,
  children,
}: CustomTabsTriggerProps) {
  return (
    <TabsTrigger
      value={value}
      className="relative flex items-center gap-2 cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors text-foreground/80 hover:text-primary data-[state=active]:bg-muted data-[state=active]:text-primary"
    >
      {children}
      {isActive && (
        <motion.div
          layoutId="lamp"
          className="absolute inset-0 w-full bg-primary/5 rounded-full z-1"
          initial={false}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
        >
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
            <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
            <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
            <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
          </div>
        </motion.div>
      )}
    </TabsTrigger>
  );
}

function InstallationGuide() {
  const [selectedHardware, setSelectedHardware] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("tab-1");

  const selectedCpuBrand = useStoreSelectors.use.selectedCpuBrand();
  const selectedProcessor = useStoreSelectors.use.selectedProcessor();

  // Construct cpuNameValue based on the CPU brand
  const cpuNameValue = selectedProcessor
    ? selectedCpuBrand === "AMD"
      ? `${selectedCpuBrand} ${selectedProcessor.model} ${selectedProcessor.coreCount}-Core Processor`
      : selectedCpuBrand === "Intel"
        ? `Intel(R) ${selectedProcessor.model} CPU @ ${selectedProcessor.coreClock}`
        : `${selectedCpuBrand} ${selectedProcessor.model} ${selectedProcessor.coreClock}`
    : "Your Custom CPU Name";

  const hardwareData: Record<string, HardwareData> = {
    cpu: {
      title: "CPU Installation",
      scripts: [
        {
          name: "cpu_changer.ps1",
          content: `
          # Check if running as administrator
          if (!([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] "Administrator")) {
              Write-Host "This script requires administrator privileges. Restarting with elevated permissions..." -ForegroundColor Yellow
              Start-Process powershell.exe "-NoProfile -ExecutionPolicy Bypass -File \`"$PSCommandPath\`"" -Verb RunAs
              exit
          }
          
          # Script header
          Write-Host "CPU Name Changer Script" -ForegroundColor Cyan
          Write-Host "------------------------" -ForegroundColor Cyan
          
          # Display current CPU name
          $currentName = (Get-ItemProperty -Path "HKLM:\\HARDWARE\\DESCRIPTION\\System\\CentralProcessor\\0").ProcessorNameString
          Write-Host "Current CPU name: $currentName" -ForegroundColor Cyan
          
          # Ask for confirmation to change CPU name with default 'Y'
          $changeConfirm = Read-Host "Do you want to change the CPU name to '${cpuNameValue}'? (Y/N) [Default: Y]"
          if ([string]::IsNullOrEmpty($changeConfirm)) { $changeConfirm = "Y" }
          
          if ($changeConfirm.ToUpper() -eq "Y") {
              # Change CPU name immediately
              Write-Host "Changing CPU name..." -ForegroundColor Green
              try {
                  Set-ItemProperty -Path "HKLM:\\HARDWARE\\DESCRIPTION\\System\\CentralProcessor\\0" -Name "ProcessorNameString" -Value "${cpuNameValue}"
                  Write-Host "CPU name changed successfully." -ForegroundColor Green
              } catch {
                  Write-Host "An error occurred while changing the CPU name: $_" -ForegroundColor Red
              }
          
              # Ask for confirmation to make the change persist with default 'N'
              $persistConfirm = Read-Host "Do you want to make this change persist after restarts? (Y/N) [Default: N]"
              if ([string]::IsNullOrEmpty($persistConfirm)) { $persistConfirm = "N" }
          
              if ($persistConfirm.ToUpper() -eq "Y") {
                  # Set up persistence with a scheduled task
                  $taskName = "SetCPUNameAtStartup"
                  try {
                      $task = Get-ScheduledTask -TaskName $taskName -ErrorAction Stop
                      Write-Host "Scheduled task '$taskName' already exists." -ForegroundColor Yellow
                  } catch {
                      # Create the scheduled task
                      $action = New-ScheduledTaskAction -Execute "powershell.exe" -Argument "-Command \`"Set-ItemProperty -Path 'HKLM:\HARDWARE\DESCRIPTION\System\CentralProcessor\0' -Name 'ProcessorNameString' -Value '${cpuNameValue}'\`""
                      $trigger = New-ScheduledTaskTrigger -AtStartup
                      $principal = New-ScheduledTaskPrincipal -UserId "SYSTEM" -LogonType ServiceAccount -RunLevel Highest
                      try {
                          Register-ScheduledTask -TaskName $taskName -Action $action -Trigger $trigger -Principal $principal -Description "Set CPU name at startup"
                          Write-Host "Scheduled task '$taskName' created to persist CPU name change." -ForegroundColor Green
                      } catch {
                          Write-Host "An error occurred while creating the scheduled task: $_" -ForegroundColor Red
                      }
                  }
              } else {
                  Write-Host "The CPU name change will not persist after restart." -ForegroundColor Yellow
              }
          } else {
              Write-Host "Operation cancelled." -ForegroundColor Yellow
          }
          
          # Pause for user to read output
          Write-Host "Press any key to exit..." -ForegroundColor Cyan
          $null = $host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
          `,
        },
        {
          name: "cpu_monitor.sh",
          content:
            '#!/bin/bash\n\n# CPU Monitoring Script\necho "Starting CPU monitoring..."',
        },
      ],
    },
    gpu: {
      title: "GPU Setup",
      scripts: [
        {
          name: "gpu_overclock.sh",
          content:
            '#!/bin/bash\n\n# GPU Overclocking Script\necho "Configuring GPU settings..."',
        },
        {
          name: "gpu_benchmark.sh",
          content:
            '#!/bin/bash\n\n# GPU Benchmark Script\necho "Running GPU benchmarks..."',
        },
      ],
    },
    ram: {
      title: "RAM Configuration",
      scripts: [
        {
          name: "ram_optimize.sh",
          content:
            '#!/bin/bash\n\n# RAM Optimization Script\necho "Optimizing RAM configuration..."',
        },
        {
          name: "ram_test.sh",
          content:
            '#!/bin/bash\n\n# RAM Testing Script\necho "Testing RAM stability..."',
        },
      ],
    },
  };

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
          Hardware Installation Guide
        </h1>
        <p className="text-center">
          Click bellow on the component guidance you want to see
        </p>

        <HardwareSelection
          onSelect={setSelectedHardware}
          selectedHardware={selectedHardware}
        />

        {selectedHardware && selectedHardware === "cpu" && (
          <SelectedCpuDetails />
        )}

        {selectedHardware && selectedHardware === "gpu" && (
          <SelectedGpuDetails />
        )}

        {selectedHardware && selectedHardware === "ram" && (
          <SelectedRamDetails />
        )}

        {selectedHardware && (
          <Card className="p-8 relative mt-20">
            <Tabs defaultValue="tab-1" onValueChange={setActiveTab}>
              <div className="absolute -top-7 left-0 right-0 flex justify-center">
                <TabsList className="gap-3 bg-white dark:bg-black border border-border px-2 py-6 rounded-full shadow-lg mb-3">
                  <CustomTabsTrigger
                    value="tab-1"
                    isActive={activeTab === "tab-1"}
                  >
                    <Bot
                      className="-ms-0.5 me-1.5 opacity-60"
                      size={16}
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                    Automatically
                  </CustomTabsTrigger>
                  <CustomTabsTrigger
                    value="tab-2"
                    isActive={activeTab === "tab-2"}
                  >
                    <ListOrdered
                      className="-ms-0.5 me-1.5 opacity-60"
                      size={16}
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                    Manual
                  </CustomTabsTrigger>
                </TabsList>
              </div>

              <h2 className="text-2xl font-bold mb-2">
                {hardwareData[selectedHardware].title}
              </h2>
              <h3 className="text-xl font-semibold mb-6">Installation Steps</h3>

              <TabsContent value="tab-1">
                <Steps>
                  <Step
                    title="Download Script"
                    icon={<Download className="size-5" />}
                  >
                    
                    <p>
                      Use button or scroll bellow and download from <b>Configuration Scripts</b> - <b>{hardwareData[selectedHardware].scripts[0].name}</b> script.
                    </p>

                    <button className="mt-2 px-12 py-2 bg-secondary rounded-md" onClick={()=>{downloadScript(hardwareData[selectedHardware].scripts[0].name, hardwareData[selectedHardware].scripts[0].content)}}>Download now</button>
                  </Step>
                  <Step
                    title="Run with PowerShell"
                    icon={<PlayCircle className="size-5" />}
                  >
                    <p>
                      Right-click on the file and select <b>"Run with PowerShell"</b> from the context menu.
                    </p>
                  </Step>
                  <Step title="Install" icon={<Code className="size-5" />}>
                    <p>
                      The PowerShell script will now run and modify your computer. The script might provide feedback or ask for confirmation.
                    </p>
                  </Step>
                  <Step title="Ready" icon={<Check className="size-5" />}>
                    <p>
                      Your CPU has been updated. It may take a while for your CPU to be as good as downloaded.
                    </p>
                  </Step>
                </Steps>
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Configuration Scripts
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {hardwareData[selectedHardware].scripts.map((script) => (
                      <div
                        key={script.name}
                        className="bg-secondary hover:bg-secondary/50 rounded-lg p-4 flex items-center justify-between transition-colors"
                      >
                        <div className="flex items-center space-x-3">
                          <Terminal className="w-5 h-5 text-gray-500" />
                          <span className="font-medium">{script.name}</span>
                        </div>
                        <button
                          onClick={() =>
                            downloadScript(script.name, script.content)
                          }
                          className="flex items-center space-x-2 text-primary hover:text-gray-500"
                        >
                          <Download className="w-5 h-5" />
                          <span>Download</span>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="tab-2">
                <Steps>
                  <Step title="Open Registry Editor" icon={<Terminal className="size-5" />}>
                    <p>
                      Press <strong>Win+R</strong> on your keyboard to open the Run dialog.
                      Type <strong>"regedit"</strong> and press Enter or click OK. If prompted by User Account Control, click <strong>Yes</strong>.
                    </p>
                  </Step>
                  <Step title="Navigate to the processor registry key" icon={<Code className="size-5" />}>
                    <p>
                      In Registry Editor, navigate to the following path by expanding the folders in the left panel or paste it into the address bar:
                    </p>
                    <CodeBlock language="text" code={`HKEY_LOCAL_MACHINE\\HARDWARE\\DESCRIPTION\\System\\CentralProcessor\\0`} />
                  </Step>
                  <Step title="Modify the ProcessorNameString value" icon={<ListOrdered className="size-5" />}>
                    <p>Use this value as your CPU name:</p>
                    <CodeBlock language="text" code={cpuNameValue} />
                    <ul className="list-disc pl-5 space-y-1 mt-4">
                      <li>In the right panel, find the <strong>"ProcessorNameString"</strong> value.</li>
                      <li>Right-click on it and select <strong>"Modify"</strong>.</li>
                      <li>Enter your desired CPU name in the <strong>"Value data"</strong> field.</li>
                      <li>Click <strong>OK</strong> to save the changes.</li>
                    </ul>
                  </Step>
                </Steps>
              </TabsContent>
            </Tabs>
          </Card>
        )}
      </div>
    </div>
  );
}

export { InstallationGuide };
