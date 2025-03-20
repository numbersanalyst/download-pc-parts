"use client";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bot, ListOrdered } from "lucide-react";
import { Step, Steps } from "./steps";
import { Terminal, Code, RotateCcw } from "lucide-react";
import { CodeBlock } from "@/components/ui/code-block";
import { useStoreSelectors } from "@/stores/store";

function InstallationOptions() {
  const selectedProcessor = useStoreSelectors.use.selectedProcessor();

  const cpuNameValue = selectedProcessor 
    ? `${selectedProcessor.model} ${selectedProcessor.coreClock}`
    : "Your Custom CPU Name";

  return (
    <Tabs defaultValue="tab-1" className="text-center">
      <ScrollArea>
        <TabsList className="mb-3 gap-1 bg-transparent">
          <TabsTrigger
            value="tab-1"
            className="rounded-full px-5 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-none"
          >
            <Bot
              className="-ms-0.5 me-1.5 opacity-60"
              size={16}
              strokeWidth={2}
              aria-hidden="true"
            />
            Automatically
          </TabsTrigger>
          <TabsTrigger
            value="tab-2"
            className="rounded-full px-5 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-none"
          >
            <ListOrdered
              className="-ms-0.5 me-1.5 opacity-60"
              size={16}
              strokeWidth={2}
              aria-hidden="true"
            />
            Manual
          </TabsTrigger>
        </TabsList>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <TabsContent
        value="tab-1"
        className="text-start container max-w-2xl py-12"
      >
        <Steps>
          <Step
            title="Open Windows Terminal as Administrator"
            icon={<Terminal className="h-5 w-5" />}
          >
            <p>
              Right-click on the <strong>Start menu</strong> and select <strong>"Windows Terminal (Admin)"</strong> or search for
              "Windows Terminal" in the Start menu, right-click it, and select <strong>"Run as administrator"</strong>.
            </p>
          </Step>
          <Step
            title="Run the PowerShell command to change CPU name"
            icon={<Code className="h-5 w-5" />}
          >
            <p>
              Copy and paste the following command into the PowerShell window. This will modify
              the registry to change how Windows displays your CPU name.
            </p>

            <CodeBlock
              language="powershell"
              code={`${cpuNameValue ? "" : "# Change the value to your desired CPU name\n"}Set-ItemProperty -Path "HKLM:\\HARDWARE\\DESCRIPTION\\System\\CentralProcessor\\0" -Name "ProcessorNameString" -Value "${cpuNameValue}"`}
            />
          </Step>
          <Step
            title="Restart your computer to apply changes"
            icon={<RotateCcw className="h-5 w-5" />}
          >
            <p>
              For the changes to take effect, you'll need to <strong>restart your computer</strong>.
              Your new CPU name will be visible in System Information and other system tools after reboot.
            </p>
          </Step>
        </Steps>
      </TabsContent>
      <TabsContent
        value="tab-2"
        className="text-start container max-w-2xl py-12"
      >
        <Steps>
          <Step
            title="Open Registry Editor"
            icon={<Terminal className="h-5 w-5" />}
          >
            <p>
              Press <strong>Win+R</strong> on your keyboard to open the Run dialog.
              Type <strong>"regedit"</strong> and press Enter or click OK. If prompted by User Account Control, click <strong>Yes</strong>.
            </p>
          </Step>
          <Step
            title="Navigate to the processor registry key"
            icon={<Code className="h-5 w-5" />}
          >
            <p>
              In Registry Editor, navigate to the following path by expanding the folders in the left panel:
            </p>
            
            <CodeBlock
              language="text"
              code={`HKEY_LOCAL_MACHINE\\HARDWARE\\DESCRIPTION\\System\\CentralProcessor\\0`}
            />
          </Step>
          <Step
            title="Modify the ProcessorNameString value"
            icon={<ListOrdered className="h-5 w-5" />}
          >
            <p>Use this value as your CPU name:</p>
            <CodeBlock
              language="text"
              code={cpuNameValue}
            />
            <ul className="list-disc pl-5 space-y-1 mt-4">
              <li>In the right panel, find the <strong>"ProcessorNameString"</strong> value.</li>
              <li>Right-click on it and select <strong>"Modify"</strong>.</li>
              <li>Enter your desired CPU name in the <strong>"Value data"</strong> field.</li>
              <li>Click <strong>OK</strong> to save the changes.</li>
            </ul>
          </Step>
          <Step
            title="Restart your computer"
            icon={<RotateCcw className="h-5 w-5" />}
          >
            <p>
              Close Registry Editor and <strong>restart your computer</strong> for the changes to take effect.
              After restarting, check System Information to verify the CPU name has been updated.
            </p>
          </Step>
        </Steps>
      </TabsContent>
    </Tabs>
  );
}

export { InstallationOptions };
