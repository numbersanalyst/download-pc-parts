import { useState } from "react";
import { Terminal, Download, Bot, ListOrdered, Code, Check, PlayCircle, Settings, Search } from "lucide-react";
import { Card } from "../ui/card";
import { Tabs, TabsContent, TabsList } from "../ui/tabs";
import { Step, Steps } from "./steps";
import { ShinyButton } from "../magicui/shiny-button";
import { HardwareTypeData, getGpuNameValue } from "@/data/hardware-data";
import { CustomTabsTrigger } from "../ui/custom-tabs-trigger";
import { CodeBlock } from "../ui/code-block";

interface GpuInstallationGuideProps {
  scriptsData: HardwareTypeData;
  downloadScript: (name: string, content: string) => void;
}

function GpuInstallationGuide({ scriptsData, downloadScript }: GpuInstallationGuideProps) {
  const [activeTab, setActiveTab] = useState("tab-1");
  const gpuNameValue = getGpuNameValue();

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
              Manual
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

        {/* Manual Tab */}
        <TabsContent value="tab-2">
          <Steps>
            <Step title="Find GPU Driver Key" icon={<Settings className="size-5" />}>
              <p>
                Open <strong>Device Manager</strong> (search for it in the Start Menu).
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-2 mb-2">
                <li>Expand the <strong>"Display adapters"</strong> section.</li>
                <li>Right-click on your GPU and select <strong>"Properties"</strong>.</li>
                <li>Go to the <strong>"Details"</strong> tab.</li>
                <li>Select <strong>"Driver key"</strong> from the "Property" dropdown menu.</li>
                <li>Right-click the value shown (it looks like <code>EN_10DE&DEV_1C03&SUBSYS_37181458&REV_A1</code>) and select <strong>"Copy"</strong>.</li>
              </ul>
            </Step>

            <Step title="Open Registry Editor" icon={<Terminal className="size-5" />}>
              <p>
                Press <strong>Win+R</strong>, type <strong>"regedit"</strong>, and press Enter. Confirm the User Account Control prompt if it appears.
              </p>
            </Step>

            <Step title="Locate GPU Registry Key" icon={<Search className="size-5" />}>
              <p>
                In the Registry Editor, navigate to the following path:
              </p>
              <CodeBlock language="text" code={`HKEY_LOCAL_MACHINE\\SYSTEM\\ControlSet001\\Enum`} />
              <ul className="list-disc pl-5 space-y-1 mt-2 mb-2">
                <li>Right-click on the <strong>Enum</strong> folder and select <strong>"Find"</strong>.</li>
                <li>Paste the <strong>Driver Key</strong> you copied earlier into the "Find what" box.</li>
                <li>Ensure only <strong>"Data"</strong> is checked under "Look at".</li>
                <li>Click <strong>"Find Next"</strong>.</li>
                <li>The search will highlight the specific key associated with your GPU (it will likely be under a subfolder like `PCI\VEN_xxxx&DEV_xxxx...`). You need the key folder itself, not the specific value found.</li>
              </ul>
            </Step>

            <Step title="Set New GPU Name" icon={<ListOrdered className="size-5" />}>
              <p>Use this value as your new GPU name:</p>
              <CodeBlock language="text" code={gpuNameValue} />
              <ul className="list-disc pl-5 space-y-1 mt-4 mb-2">
                <li>In the right-hand pane of the key folder found in the previous step, right-click on an empty space.</li>
                <li>Select <strong>"New"</strong> -&gt; <strong>"String Value"</strong>.</li>
                <li>Name the new value exactly: <strong>FriendlyName</strong></li>
                <li>Double-click the new <strong>FriendlyName</strong> value.</li>
                <li>Paste the desired GPU name (from the code block above) into the <strong>"Value data"</strong> field.</li>
                <li>Click <strong>OK</strong>.</li>
              </ul>
            </Step>
          </Steps>
        </TabsContent>
      </Tabs>
    </Card>
  );
}

export { GpuInstallationGuide };