import { useState } from "react";
import { Terminal, Download, Bot, ListOrdered, Code, PlayCircle, Settings, Search, Info } from "lucide-react";
import { Card } from "../ui/card";
import { Tabs, TabsContent, TabsList } from "../ui/tabs";
import { Step, Steps } from "./steps";
import { ShinyButton } from "../magicui/shiny-button";
import { HardwareTypeData, getGpuNameValue } from "@/data/hardware-data";
import { CustomTabsTrigger } from "../ui/custom-tabs-trigger";
import { CodeBlock } from "../ui/code-block";
import { ScriptsGrid } from "@/components/ui/scripts-grid";

interface GpuInstallationGuideProps {
  scriptsData: HardwareTypeData;
  downloadScript: (name: string, content: string) => void;
}

function GpuInstallationGuide({ scriptsData, downloadScript }: GpuInstallationGuideProps) {
  const [activeTab, setActiveTab] = useState("tab-1");
  const mainScriptName = scriptsData.scripts[0]?.name ?? "gpu_changer.ps1";
  const gpuNameValue = getGpuNameValue();

  return (
    <Card className="p-8 relative mt-20">
      <Tabs defaultValue="tab-1" onValueChange={setActiveTab}>
        <div className="absolute -top-7 left-0 right-0 flex justify-center">
          <TabsList className="gap-3 bg-white dark:bg-black border border-border px-2 py-6 rounded-full shadow-lg mb-3">
            <CustomTabsTrigger value="tab-1" isActive={activeTab === "tab-1"}>
              <Bot className="-ms-0.5 me-1.5 opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
              Automatically
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
          <div className="bg-secondary/20 dark:bg-secondary/10 border rounded-lg p-4 mb-6 text-sm text-muted-foreground">
            <p className="flex items-center gap-4">
              <Info className="size-4 shrink-0" />
              Note: The automatic script is currently optimized for NVIDIA GPUs. If you encounter any issues with other GPU brands, please use the manual installation method in the tab above.
            </p>
          </div>
          <Steps>
            <Step title="Download Script" icon={<Download className="size-5" />}>
              <p>
                Click the button below to get the <code>{mainScriptName}</code> script. You can also find it in the <b>Configuration Scripts</b> list further down.
              </p>
              <ShinyButton className="mt-2 px-12 py-2 bg-secondary rounded-md" onClick={() => { downloadScript(mainScriptName, scriptsData.scripts[0].content) }}>Download now</ShinyButton>
            </Step>
            <Step title="Run Script" icon={<PlayCircle className="size-5" />}>
              <p>
                Find the downloaded <code>{mainScriptName}</code> file. Right-click on it and select <b>"Run with PowerShell"</b>. Approve the administrator prompt if it appears.
              </p>
            </Step>
            <Step title="Follow Prompts" icon={<Code className="size-5" />}>
              <p>
                A PowerShell window will open. The script will show your current GPUs and ask which one you want to change. Simply follow the on-screen instructions (usually pressing 'Y' or 'N' and Enter).
              </p>
            </Step>
          </Steps>
          
          <ScriptsGrid 
            scripts={scriptsData.scripts}
            downloadScript={downloadScript}
            title="Utility Scripts"
          />
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
              <p><b>Note:</b> This change is temporary and may revert on restart or driver update unless you also set up the persistence task described in the automatic script.</p>
            </Step>
          </Steps>
        </TabsContent>
      </Tabs>
    </Card>
  );
}

export { GpuInstallationGuide };