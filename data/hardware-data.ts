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

export function getHardwareScriptsData(cpuNameValue: string): HardwareData {
  return {
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
              $action = New-ScheduledTaskAction -Execute "powershell.exe" -Argument "-Command \`"Set-ItemProperty -Path 'HKLM:\\HARDWARE\\DESCRIPTION\\System\\CentralProcessor\\0' -Name 'ProcessorNameString' -Value '${cpuNameValue}'\`""
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
            `.trim(),
        },
        {
          name: "cpu_monitor.sh",
          content:
            '#!/bin/bash\n\necho "Starting CPU monitoring..."\ntop -b -n 1 | grep "Cpu(s)"',
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
