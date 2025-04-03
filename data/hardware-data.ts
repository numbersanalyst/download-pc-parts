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

export function getHardwareScriptsData(): HardwareData {
  const cpuNameValue = getCpuNameValue();

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

  Write-Host "CPU Name Persistence Task Deleter" -ForegroundColor Cyan
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
          name: "gpu_driver_install.ps1",
          content: `
  # GPU Driver Installation Helper Script (Placeholder)
  Write-Host "GPU Driver Installation Helper" -ForegroundColor Cyan
  Write-Host "-----------------------------" -ForegroundColor Cyan
  
  # Detect GPU (Example - replace with actual detection logic if possible)
  try {
      $gpuInfo = Get-WmiObject Win32_VideoController | Select-Object -First 1 -ExpandProperty Name
      Write-Host "Detected GPU: $gpuInfo" -ForegroundColor Green
  } catch {
      Write-Host "Could not automatically detect GPU." -ForegroundColor Yellow
  }
  
  Write-Host "Please download the latest driver for your GPU:" -ForegroundColor Yellow
  Write-Host "- NVIDIA: https://www.nvidia.com/Download/index.aspx"
  Write-Host "- AMD: https://www.amd.com/en/support"
  Write-Host "- Intel: https://www.intel.com/content/www/us/en/download-center/home.html"
  Write-Host ""
  Write-Host "After downloading, run the installer and follow the on-screen instructions." -ForegroundColor Cyan
  Write-Host "It's recommended to choose 'Clean Installation' if available."
  
  # Pause for user
  Write-Host "Press any key to exit..." -ForegroundColor Cyan
  $null = $host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
            `.trim(),
        },
        {
          name: "gpu_benchmark.sh",
          content:
            '#!/bin/bash\n\n# GPU Benchmark Script (Placeholder)\necho "Running GPU benchmarks..."\n# Add actual benchmark commands here, e.g., using glmark2 or unigine-heaven',
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
