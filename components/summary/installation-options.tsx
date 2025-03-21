"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bot, ListOrdered } from "lucide-react";
import { Step, Steps } from "./steps";
import { Terminal, Code, RotateCcw } from "lucide-react";
import { CodeBlock } from "@/components/ui/code-block";
import { useStoreSelectors } from "@/stores/store";
import { motion } from "framer-motion";
import { useState } from "react";

type CustomTabsTriggerProps = {
  value: string;
  isActive: boolean | undefined;
  children: React.ReactNode;
}

function CustomTabsTrigger({ value, isActive, children }: CustomTabsTriggerProps) {
  return (
    <TabsTrigger value={value} className="relative flex items-center gap-2 cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors text-foreground/80 hover:text-primary data-[state=active]:bg-muted data-[state=active]:text-primary">
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

function InstallationOptions() {
  const selectedProcessor = useStoreSelectors.use.selectedProcessor();
  const cpuNameValue = selectedProcessor
    ? `${selectedProcessor.model} ${selectedProcessor.coreClock}`
    : "Your Custom CPU Name";
  const [activeTab, setActiveTab] = useState("tab-1");

  return (
    <Tabs defaultValue="tab-1" onValueChange={setActiveTab} className="text-center mt-5">
      <TabsList className="gap-3 bg-transparent border border-border px-2 py-6 rounded-full shadow-lg mb-3">
        <CustomTabsTrigger value="tab-1" isActive={activeTab === "tab-1"}>
          <Bot className="-ms-0.5 me-1.5 opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
          Automatically
        </CustomTabsTrigger>
        <CustomTabsTrigger value="tab-2" isActive={activeTab === "tab-2"}>
          <ListOrdered className="-ms-0.5 me-1.5 opacity-60" size={16} strokeWidth={2} aria-hidden="true" />
          Manual
        </CustomTabsTrigger>
      </TabsList>
      <TabsContent value="tab-1" className="text-start container max-w-2xl py-8">
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
      <TabsContent value="tab-2" className="text-start container max-w-2xl py-8">
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
              In Registry Editor, navigate to the following path by expanding the folders in the left panel or paste it into the address bar:
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
