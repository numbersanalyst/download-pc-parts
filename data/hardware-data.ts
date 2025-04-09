import { useStoreSelectors } from "@/stores/store";

export interface HardwareScript {
  name: string;
  content: string;
}

export interface HardwareTypeData {
  title: string;
  scripts: HardwareScript[];
}

export interface HardwareData {
  cpu: HardwareTypeData;
  gpu: HardwareTypeData;
  ram: HardwareTypeData;
}

export function getCpuNameValue(): string {
  const selectedCpuBrand = useStoreSelectors.use.selectedCpuBrand();
  const selectedProcessor = useStoreSelectors.use.selectedProcessor();

  return selectedProcessor
    ? selectedCpuBrand === "AMD"
      ? `${selectedCpuBrand} ${selectedProcessor.model} ${selectedProcessor.coreCount}-Core Processor`
      : selectedCpuBrand === "Intel"
      ? `Intel(R) ${selectedProcessor.model} CPU @ ${selectedProcessor.coreClock}`
      : `${selectedCpuBrand} ${selectedProcessor.model} ${selectedProcessor.coreClock}`
    : "Your Custom CPU Name";
}

export function getGpuNameValue(): string {
  const selectedGpuBrand = useStoreSelectors.use.selectedGpuBrand();
  const selectedGraphicCard = useStoreSelectors.use.selectedGraphicCard();

  if (!selectedGraphicCard) {
    return "Your Custom GPU Name";
  }

  if (selectedGraphicCard.model && !selectedGpuBrand && !selectedGraphicCard.vram) {
    return selectedGraphicCard.model;
  }

  return selectedGpuBrand === "AMD"
    ? `${selectedGpuBrand} ${selectedGraphicCard.model} ${selectedGraphicCard.vram}`
    : selectedGpuBrand === "Intel"
    ? `Intel(R) ${selectedGraphicCard.model} ${selectedGraphicCard.vram}`
    : `${selectedGpuBrand} ${selectedGraphicCard.model} ${selectedGraphicCard.vram}`;
}

export function getHardwareScriptsData(): HardwareData {
  const cpuNameValue = getCpuNameValue();
  const gpuNameValue = getGpuNameValue();

  return {
    cpu: {
      title: "CPU Installation",
      scripts: [
        {
          name: "cpu_changer.ps1",
          content: `
  if (!([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] "Administrator")) {
      Write-Host "This script requires administrator privileges. Restarting with elevated permissions..." -ForegroundColor Yellow
      Start-Process powershell.exe "-NoProfile -ExecutionPolicy Bypass -File \`"$PSCommandPath\`"" -Verb RunAs
      exit
  }
  
  Write-Host "CPU Changer Script" -ForegroundColor Cyan
  Write-Host "------------------------" -ForegroundColor Cyan
  
  $currentName = (Get-ItemProperty -Path "HKLM:\\HARDWARE\\DESCRIPTION\\System\\CentralProcessor\\0").ProcessorNameString
  Write-Host "Current CPU: $currentName" -ForegroundColor Cyan
  
  $changeConfirm = Read-Host "Do you want to change the CPU to '${cpuNameValue}'? (Y/N) [Default: Y]"
  if ([string]::IsNullOrEmpty($changeConfirm)) { $changeConfirm = "Y" }
  
  if ($changeConfirm.ToUpper() -eq "Y") {
      # Change CPU immediately
      Write-Host "Changing CPU..." -ForegroundColor Green
      try {
          Set-ItemProperty -Path "HKLM:\\HARDWARE\\DESCRIPTION\\System\\CentralProcessor\\0" -Name "ProcessorNameString" -Value "${cpuNameValue}"
          Write-Host "CPU changed successfully." -ForegroundColor Green
      } catch {
          Write-Host "An error occurred while changing the CPU: $_" -ForegroundColor Red
      }
  
      $persistConfirm = Read-Host "Do you want to make this change persist after restarts? (Y/N) [Default: N]"
      if ([string]::IsNullOrEmpty($persistConfirm)) { $persistConfirm = "N" }
  
      if ($persistConfirm.ToUpper() -eq "Y") {
          # Set up persistence with a scheduled task
          $taskName = "SetCPUAtStartup"
          try {
              $task = Get-ScheduledTask -TaskName $taskName -ErrorAction Stop
              Write-Host "Scheduled task '$taskName' already exists. Use cpu_uninstaller.ps1 to remove it." -ForegroundColor Yellow
          } catch {
              # Create the scheduled task
              $action = New-ScheduledTaskAction -Execute "powershell.exe" -Argument "-Command \`"Set-ItemProperty -Path 'HKLM:\\HARDWARE\\DESCRIPTION\\System\\CentralProcessor\\0' -Name 'ProcessorNameString' -Value '${cpuNameValue}'\`""
              $trigger = New-ScheduledTaskTrigger -AtStartup
              $principal = New-ScheduledTaskPrincipal -UserId "SYSTEM" -LogonType ServiceAccount -RunLevel Highest
              try {
                  Register-ScheduledTask -TaskName $taskName -Action $action -Trigger $trigger -Principal $principal -Description "Set CPU (name) at startup"
                  Write-Host "Scheduled task '$taskName' created to persist CPU name change." -ForegroundColor Green
              } catch {
                  Write-Host "An error occurred while creating the scheduled task: $_" -ForegroundColor Red
              }
          }
      } else {
          Write-Host "The new CPU will not persist after restart." -ForegroundColor Yellow
      }
  } else {
      Write-Host "Operation cancelled." -ForegroundColor Yellow
  }
  
  # Pause for user to read output
  Write-Host "Press any key to exit..." -ForegroundColor Cyan
  $null = $host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
            `.trim(),
        },
        {
          name: "cpu_uninstaller.ps1",
          content: `
  if (!([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] "Administrator")) {
      Write-Host "This script requires administrator privileges. Restarting with elevated permissions..." -ForegroundColor Yellow
      Start-Process powershell.exe "-NoProfile -ExecutionPolicy Bypass -File \`"$PSCommandPath\`"" -Verb RunAs
      exit
  }

  Write-Host "CPU Persistence Task Deleter" -ForegroundColor Cyan
  Write-Host "----------------------------------" -ForegroundColor Cyan

  $taskName = "SetCPUAtStartup"

  $task = Get-ScheduledTask -TaskName $taskName -ErrorAction SilentlyContinue
  if ($task) {
      # Ask for confirmation to delete the task
      $deleteConfirm = Read-Host "The scheduled task '$taskName' exists. Do you want to delete it? (Y/N) [Default: Y]"
      if ([string]::IsNullOrEmpty($deleteConfirm)) { $deleteConfirm = "Y" }
      if ($deleteConfirm.ToUpper() -eq "Y") {
          try {
              # Delete the scheduled task
              Unregister-ScheduledTask -TaskName $taskName -Confirm:$false
              Write-Host "Scheduled task '$taskName' has been deleted successfully." -ForegroundColor Green
          } catch {
              Write-Host "An error occurred while deleting the scheduled task: $_" -ForegroundColor Red
          }
      } else {
          Write-Host "Operation cancelled. The scheduled task was not deleted." -ForegroundColor Yellow
      }
  } else {
      Write-Host "No scheduled task named '$taskName' was found." -ForegroundColor Yellow
  }

  Write-Host "Press any key to exit..." -ForegroundColor Cyan
  $null = $host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
            `.trim(),
        },
      ],
    },
    gpu: {
      title: "GPU Setup",
      scripts: [
        {
          name: "gpu_changer.ps1",
          content: `
if (!([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] "Administrator")) {
    Write-Host "This script requires administrator privileges. Restarting with elevated permissions..." -ForegroundColor Yellow
    Start-Process powershell.exe "-NoProfile -ExecutionPolicy Bypass -File \`"$PSCommandPath\`"" -Verb RunAs
    exit
}

$NewGpuName = "${gpuNameValue}"

Write-Host "GPU Changer Script" -ForegroundColor Cyan
Write-Host "-------------------------------" -ForegroundColor Cyan
Write-Host "Target Name: $NewGpuName" -ForegroundColor Yellow

Write-Host "Detecting GPUs..." -ForegroundColor Cyan
$gpus = Get-PnpDevice -Class 'Display' -Present -Status 'OK' -ErrorAction SilentlyContinue

if (-not $gpus) {
    Write-Error "No active display adapters (GPUs) found."
    Read-Host "Press Enter to exit"
    exit 1
}

$selectedGpu = \$null
if ($gpus.Count -eq 1) {
    $selectedGpu = $gpus
    Write-Host "Found GPU: \$($selectedGpu.FriendlyName) (\$($selectedGpu.DeviceID))" -ForegroundColor Green
} else {
    Write-Host "Multiple GPUs found. Please select one:" -ForegroundColor Yellow
    for (\$i = 0; \$i -lt \$gpus.Count; \$i++) {
        Write-Host "[\$(\$i+1)] \$($gpus[\$i].FriendlyName) (\$($gpus[\$i].DeviceID))"
    }

    do {
        \$choice = Read-Host "Enter the number of the GPU to modify"
        if (\$choice -match '^\\d+\$' -and [int]\$choice -ge 1 -and [int]\$choice -le \$gpus.Count) {
            \$selectedGpu = \$gpus[[int]\$choice - 1]
        } else {
            Write-Warning "Invalid selection. Please enter a number between 1 and \$(\$gpus.Count)."
        }
    } while (-not \$selectedGpu)
     Write-Host "Selected GPU: \$($selectedGpu.FriendlyName)" -ForegroundColor Green
}

\$instanceId = \$selectedGpu.InstanceID
\$regPathBase = "HKLM:\\\\SYSTEM\\\\CurrentControlSet\\\\Enum"
\$gpuRegPath = Join-Path -Path \$regPathBase -ChildPath \$instanceId

if (-not (Test-Path -Path \$gpuRegPath -PathType Container)) {
     Write-Error "Could not determine the correct registry path for the selected GPU: \$gpuRegPath"
     Read-Host "Press Enter to exit"
     exit 1
}

Write-Host "Registry Path: \$gpuRegPath" -ForegroundColor Cyan

\$currentFriendlyName = (Get-ItemProperty -Path \$gpuRegPath -Name "FriendlyName" -ErrorAction SilentlyContinue).FriendlyName
if (\$currentFriendlyName) {
    Write-Host "Current GPU: \$currentFriendlyName" -ForegroundColor Cyan
} else {
    Write-Host "No custom software currently set for this GPU." -ForegroundColor Cyan
}

\$changeConfirm = Read-Host "Do you want to change the GPU to '\$NewGpuName'? (Y/N) [Default: Y]"
if ([string]::IsNullOrEmpty(\$changeConfirm)) { \$changeConfirm = "Y" }

if (\$changeConfirm.ToUpper() -eq "Y") {
    Write-Host "Changing GPU..." -ForegroundColor Green
    try {
        New-ItemProperty -Path \$gpuRegPath -Name "FriendlyName" -Value \$NewGpuName -PropertyType String -Force -ErrorAction Stop
        Write-Host "GPU changed successfully." -ForegroundColor Green
        Write-Host "A restart might be required for the change to appear everywhere (like Task Manager)." -ForegroundColor Yellow
    } catch {
        Write-Error "An error occurred while changing the GPU FriendlyName: \$_"
        Read-Host "Press Enter to exit"
        exit 1
    }

    $persistConfirm = Read-Host "Do you want to make this change persist after restarts (via Scheduled Task)? (Y/N) [Default: N]"
    if ([string]::IsNullOrEmpty($persistConfirm)) { $persistConfirm = "N" }

    if ($persistConfirm.ToUpper() -eq "Y") {
        $taskName = "SetGPUFriendlyNameAtStartup"
        $commandArg = "-Command \`"& { New-ItemProperty -Path '$($gpuRegPath -replace \"'\", \"''\")' -Name FriendlyName -Value '$($NewGpuName -replace \"'\", \"''\")' -PropertyType String -Force }\`""
        
        try {
            Get-ScheduledTask -TaskName $taskName -ErrorAction Stop
            Write-Warning "Scheduled task '$taskName' already exists. Use the GPU uninstaller script to remove it."
        } catch {
            # Create the scheduled task
            Write-Host "Creating scheduled task '$taskName' for persistence..." -ForegroundColor Green
            try {
                $action = New-ScheduledTaskAction -Execute "powershell.exe" -Argument $commandArg
                $trigger = New-ScheduledTaskTrigger -AtStartup
                $principal = New-ScheduledTaskPrincipal -UserId "SYSTEM" -LogonType ServiceAccount -RunLevel Highest
                $settings = New-ScheduledTaskSettingsSet -Compatibility Win8 -AllowStartIfOnBatteries -DontStopIfGoingOnBatteries

                Register-ScheduledTask -TaskName $taskName -Action $action -Trigger $trigger -Principal $principal -Settings $settings -Description "Persist GPU name change" -Force
                Write-Host "Scheduled task created successfully." -ForegroundColor Green
            } catch {
                Write-Error "Failed to create scheduled task: $_"
            }
        }
    } else {
        Write-Host "The new GPU will likely not persist after driver updates or restarts." -ForegroundColor Yellow
    }
} else {
    Write-Host "Operation cancelled." -ForegroundColor Yellow
}

Write-Host "Script finished. Press any key to exit..." -ForegroundColor Cyan
\$null = \$host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
exit 0
            `.trim(),
        },
        {
          name: "gpu_uninstaller.ps1",
          content: `
if (!([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] "Administrator")) {
    Write-Host "This script requires administrator privileges. Restarting with elevated permissions..." -ForegroundColor Yellow
    Start-Process powershell.exe "-NoProfile -ExecutionPolicy Bypass -File \`"$PSCommandPath\`"" -Verb RunAs
    exit
}

Write-Host "GPU Persistence Task Deleter" -ForegroundColor Cyan
Write-Host "-----------------------------------" -ForegroundColor Cyan

$taskName = "SetGPUFriendlyNameAtStartup"

$task = Get-ScheduledTask -TaskName $taskName -ErrorAction SilentlyContinue
if ($task) {
    # Ask for confirmation to delete the task
    $deleteConfirm = Read-Host "The scheduled task '\$taskName' exists. Do you want to delete it? (Y/N) [Default: Y]"
    if ([string]::IsNullOrEmpty($deleteConfirm)) { $deleteConfirm = "Y" }
    if ($deleteConfirm.ToUpper() -eq "Y") {
        try {
            # Delete the scheduled task
            Unregister-ScheduledTask -TaskName $taskName -Confirm:$false
            Write-Host "Scheduled task '\$taskName' has been deleted successfully." -ForegroundColor Green
        } catch {
            Write-Host "An error occurred while deleting the scheduled task: \$_" -ForegroundColor Red
        }
    } else {
        Write-Host "Operation cancelled. The scheduled task was not deleted." -ForegroundColor Yellow
    }
} else {
    Write-Host "No scheduled task named '\$taskName' was found." -ForegroundColor Yellow
}

Write-Host "Press any key to exit..." -ForegroundColor Cyan
$null = $host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
            `.trim(),
        },
      ],
    },
    ram: {
      title: "RAM Configuration",
      scripts: [
        {
          name: "ram_check_info.ps1",
          content: `
  # RAM Information Script
  Write-Host "RAM Information" -ForegroundColor Cyan
  Write-Host "---------------" -ForegroundColor Cyan
  
  try {
      # Get total physical memory
      $totalMemory = (Get-CimInstance Win32_ComputerSystem).TotalPhysicalMemory / 1GB
      Write-Host "Total Installed RAM: $($totalMemory.ToString('F2')) GB" -ForegroundColor Green
  
      # Get detailed RAM stick information
      Write-Host "Memory Module Details:" -ForegroundColor Cyan
      Get-CimInstance Win32_PhysicalMemory | Format-Table BankLabel, DeviceLocator, Capacity, Speed, Manufacturer, PartNumber -AutoSize
  
      # Check XMP/DOCP profile status (Advanced - Requires specific WMI providers or tools, often BIOS check is easier)
      # This is a placeholder example, actual implementation varies greatly
      Write-Host "Note: Checking XMP/DOCP status programmatically is complex." -ForegroundColor Yellow
      Write-Host "Please verify XMP/DOCP/EXPO is enabled in your system BIOS/UEFI for optimal performance." -ForegroundColor Yellow
  
  } catch {
      Write-Host "An error occurred while retrieving RAM information: $_" -ForegroundColor Red
  }
  
  # Pause for user
  Write-Host "Press any key to exit..." -ForegroundColor Cyan
  $null = $host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
            `.trim(),
        },
        {
          name: "ram_test.sh",
          content:
            '#!/bin/bash\n\n# RAM Testing Script (Placeholder)\necho "Testing RAM stability..."\n# Consider using tools like memtest86+ (bootable) for thorough testing.',
        },
      ],
    },
  };
}
