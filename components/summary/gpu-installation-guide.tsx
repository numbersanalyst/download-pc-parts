import { useState } from "react";
import { Terminal, Download, Bot, ListOrdered, Code, Check, PlayCircle } from "lucide-react";
import { Card } from "../ui/card";
import { Tabs, TabsContent, TabsList } from "../ui/tabs";
import { Step, Steps } from "./steps";
import { ShinyButton } from "../magicui/shiny-button";
import { HardwareTypeData } from "@/data/hardware-data";
import { CustomTabsTrigger } from "../ui/custom-tabs-trigger";

interface GpuInstallationGuideProps {
  scriptsData: HardwareTypeData;
  downloadScript: (name: string, content: string) => void;
}

function GpuInstallationGuide({ scriptsData, downloadScript }: GpuInstallationGuideProps) {
  const [activeTab, setActiveTab] = useState("tab-1");

  return (
    <Card className="p-8 relative mt-20">
      <Tabs defaultValue="tab-1" onValueChange={setActiveTab}>
        <div className="absolute -top-7 left-0 right-0 flex justify-center">
          <TabsList className="gap-3 bg-white dark:bg-black border border-border px-2 py-6 rounded-full shadow-lg mb-3">
            <CustomTabsTrigger value="tab-1" isActive={activeTab === "tab-1"}>
              <Bot className="-ms-0.5 me-1.5 opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
              Instructions
            </CustomTabsTrigger>
            <CustomTabsTrigger value="tab-2" isActive={activeTab === "tab-2"}>
              <ListOrdered className="-ms-0.5 me-1.5 opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
              Manual (Advanced)
            </CustomTabsTrigger>
          </TabsList>
        </div>

        <h2 className="text-2xl font-bold mb-2">{scriptsData.title}</h2>
        <h3 className="text-xl font-semibold mb-6">Installation Steps</h3>

        {/* Automatic/Instructions Tab */}
        <TabsContent value="tab-1">
          <Steps>
             <Step title="Run Helper Script (Optional)" icon={<PlayCircle className="size-5" />}>
              <p>
                Download and run the <code>{scriptsData.scripts[0].name}</code> script for guidance and links. Right-click and select "Run with PowerShell".
              </p>
              <ShinyButton className="mt-2 px-6 py-1.5 bg-secondary rounded-md" onClick={() => { downloadScript(scriptsData.scripts[0].name, scriptsData.scripts[0].content) }}>Download Helper</ShinyButton>
            </Step>
            <Step title="Download Driver" icon={<Download className="size-5" />}>
              <p>
                Go to your GPU manufacturer's website (NVIDIA, AMD, or Intel) and download the latest stable driver for your specific GPU model and operating system.
              </p>
            </Step>
            <Step title="Install Driver" icon={<Code className="size-5" />}>
              <p>
                Run the downloaded installer. Follow the on-screen instructions. It's often recommended to select the "Clean Installation" option if available to remove old driver files.
              </p>
            </Step>
            <Step title="Restart & Verify" icon={<Check className="size-5" />}>
              <p>
                Restart your computer after the installation is complete. Verify the driver installation by checking the Device Manager (devmgmt.msc) under "Display adapters" or using the manufacturer's control panel software (e.g., NVIDIA Control Panel, AMD Software: Adrenalin Edition).
              </p>
            </Step>
          </Steps>
           {/* Configuration Scripts Section */}
          <div>
            <h3 className="text-xl font-semibold my-4 pt-4 border-t">
              Utility Scripts
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {scriptsData.scripts.map((script) => (
                <div
                  key={script.name}
                  className="bg-secondary hover:bg-secondary/50 rounded-lg p-4 flex items-center justify-between transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <Terminal className="w-5 h-5 text-gray-500" />
                    <span className="font-medium">{script.name}</span>
                  </div>
                  <button
                    onClick={() => downloadScript(script.name, script.content)}
                    className="flex items-center space-x-2 text-primary hover:text-gray-500"
                    aria-label={`Download ${script.name}`}
                  >
                    <Download className="w-5 h-5" />
                    <span>Download</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        {/* Manual Tab (Optional) */}
        <TabsContent value="tab-2">
           <p>Advanced manual GPU configuration steps (e.g., using specific command-line tools or registry edits) would go here. This is typically not required for standard installations.</p>
        </TabsContent>
      </Tabs>
    </Card>
  );
}

export { GpuInstallationGuide };