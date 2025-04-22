import { useState } from "react";
import { Terminal, Download, Check, PlayCircle, FlaskConical, Gauge, ChevronUp } from "lucide-react";
import { Card } from "../ui/card";
import { Tabs, TabsContent, TabsList } from "../ui/tabs";
import { Step, Steps } from "./steps";
import { ShinyButton } from "../magicui/shiny-button";
import { HardwareTypeData } from "@/data/hardware-data";
import { CustomTabsTrigger } from "@/components/ui/custom-tabs-trigger";
import { ScriptsGrid } from "../ui/scripts-grid";

interface RamInstallationGuideProps {
  scriptsData: HardwareTypeData;
  downloadScript: (name: string, content: string) => void;
}

function RamInstallationGuide({ scriptsData, downloadScript }: RamInstallationGuideProps) {
  const [activeTab, setActiveTab] = useState("check");
  const mainScriptName = scriptsData.scripts[0]?.name ?? "ram_info.ps1";

  return (
    <Card className="p-8 relative mt-20">
      <Tabs defaultValue="check" onValueChange={setActiveTab}>
        <div className="absolute -top-7 left-0 right-0 flex justify-center">
          <TabsList className="gap-3 bg-white dark:bg-black border border-border px-2 py-6 rounded-full shadow-lg mb-3">
            <CustomTabsTrigger value="check" isActive={activeTab === "check"} layoutId="lamp-ram">
              <Check className="-ms-0.5 me-1.5 opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
              Check
            </CustomTabsTrigger>
            <CustomTabsTrigger value="optimize" isActive={activeTab === "optimize"} layoutId="lamp-ram">
              <Gauge className="-ms-0.5 me-1.5 opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
              Optimize
            </CustomTabsTrigger>
          </TabsList>
        </div>

        <h2 className="text-2xl font-bold mb-2 relative">{scriptsData.title}<span className="text-sm font-semibold mb-2 absolute top-0 right-2 border border-border px-3 py-2 rounded-full inline-flex gap-x-2 items-center">Beta <FlaskConical size={14} /></span></h2>
        <h3 className="text-xl font-semibold">Memory Verification & Optimization</h3>
        <h4 className="mb-6">(we currently working on new RAM installation solution)</h4>

        {/* Check Tab */}
        <TabsContent value="check">
          <Steps>
            <Step title="Download Info Script" icon={<Download className="size-5" />}>
              <p>
                Click the button below to get the <code>{mainScriptName}</code> script that will help you check your RAM details.
              </p>
              <ShinyButton className="mt-2 px-12 py-2 bg-secondary rounded-md" onClick={() => { downloadScript(scriptsData.scripts[0].name, scriptsData.scripts[0].content) }}>Download RAM Info Script</ShinyButton>
            </Step>
            <Step title="Run the Script" icon={<PlayCircle className="size-5" />}>
              <p>
                Find the downloaded <code>{mainScriptName}</code> file. Right-click on it and select <b>"Run with PowerShell"</b>. This will show you detailed information about your RAM modules.
              </p>
            </Step>
            <Step title="Check Current Speed" icon={<Gauge className="size-5" />}>
              <p>
                First, verify your current RAM speed in Task Manager or using the RAM Info script. If your RAM is running at a lower speed than its rating (e.g., 2133MHz instead of 3200MHz), you need to enable XMP/EXPO/DOCP. Follow steps bellow to do that. That will boost your FPS.
              </p>
            </Step>
            <Step title="Enter BIOS/UEFI" icon={<ChevronUp className="size-5" />}>
              <p>
                Restart your computer and enter BIOS/UEFI by pressing the designated key during startup (usually DEL, F2, or F12, depending on your motherboard). Check your motherboard manual if unsure.
              </p>
            </Step>
            <Step title="Enable XMP/EXPO/DOCP" icon={<Check className="size-5" />}>
              <p>
                Navigate to the memory settings section (often called "Overclocking", "Advanced", or "AI Tweaker"). Look for XMP (Intel), EXPO (AMD), or DOCP (ASUS) and enable it. Select Profile 1 if multiple profiles are available. Save changes and exit (usually F10).
              </p>
              <p className="mt-2">
                After your system reboots, run the RAM Info script again or check Task Manager to verify the speed has increased to the rated value.
              </p>
            </Step>
          </Steps>

          <ScriptsGrid
            scripts={scriptsData.scripts}
            downloadScript={downloadScript}
            title="Utility Scripts"
          />
        </TabsContent>

        {/* Optimize Tab */}
        <TabsContent value="optimize">
          <Steps>
            <Step title="Download Memory Cleaner" icon={<Download className="size-5" />}>
              <p>
                Download Windows Memory Cleaner, a free memory optimization tool that uses native Windows features to clean up RAM. This helps speed up your system by freeing memory without needing to restart.
              </p>
              <div className="mt-2">
                <a href="https://github.com/IgorMundstein/WinMemoryCleaner/releases/latest" target="_blank" rel="noopener noreferrer">
                  <ShinyButton className="px-6 py-3 bg-secondary rounded-md inline-flex items-center gap-2">
                    Donwload RAM Optimization Tool
                  </ShinyButton>
                </a>
              </div>
            </Step>
            <Step title="Run the Application" icon={<PlayCircle className="size-5" />}>
              <p>
                After downloading, run the executable file. The application requires administrator privileges to work properly. When prompted, click "Yes" to allow the program to make changes to your device.
              </p>
            </Step>
            <Step title="Optimize Your Memory" icon={<Gauge className="size-5" />}>
              <p>
                Click the "Optimize" button in the application to free up unused memory. You can also set up automatic optimization based on:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Time intervals (every X hours)</li>
                <li>When free memory falls below a certain percentage</li>
              </ul>
              <p className="mt-2">
                The application will clean several memory areas, including standby lists, working sets, and modified page lists, helping to recover RAM that applications failed to release properly.
              </p>
            </Step>
          </Steps>

          <div className="mt-8 p-6 border border-border rounded-lg bg-secondary/30">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 relative overflow-hidden rounded-full bg-primary/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><line x1="12" y1="22" x2="12" y2="12"></line></svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Windows Memory Cleaner</h4>
                  <p className="text-sm opacity-70">By Igor Mundstein • Free & Open Source</p>
                </div>
              </div>
              <div className="flex-grow"></div>
              <a href="https://github.com/IgorMundstein/WinMemoryCleaner/releases/latest" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md w-full md:w-fit">
                <Download className="size-5" />
                <span>Download</span>
              </a>
            </div>
            <div className="mt-4">
              <p className="text-sm">
                This free RAM cleaner uses native Windows features to clean memory areas. It helps speed up your system when programs fail to release allocated memory, letting you continue working without restarting your computer.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="text-xs bg-primary/10 px-2 py-1 rounded">Windows 10/11</span>
                <span className="text-xs bg-primary/10 px-2 py-1 rounded">Portable</span>
                <span className="text-xs bg-primary/10 px-2 py-1 rounded">No Installation</span>
                <span className="text-xs bg-primary/10 px-2 py-1 rounded">3.2k+ Stars on GitHub</span>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  );
}

export { RamInstallationGuide };
