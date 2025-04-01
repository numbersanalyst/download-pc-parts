"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bot, ListOrdered, Terminal, Code, PlayCircle, Check, CheckCheck } from "lucide-react";
import { Step, Steps } from "./steps";
import { CodeBlock } from "@/components/ui/code-block";
import { useStoreSelectors } from "@/stores/store";
import { motion } from "framer-motion";
import { useState } from "react";

type CustomTabsTriggerProps = {
  value: string;
  isActive: boolean | undefined;
  children: React.ReactNode;
};

function CustomTabsTrigger({ value, isActive, children }: CustomTabsTriggerProps) {
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

function InstallationOptions() {
  const selectedCpuBrand = useStoreSelectors.use.selectedCpuBrand();
  const selectedProcessor = useStoreSelectors.use.selectedProcessor();
  const [activeTab, setActiveTab] = useState("tab-1");

  // Construct cpuNameValue based on the CPU brand
  const cpuNameValue = selectedProcessor
    ? selectedCpuBrand === "AMD"
      ? `${selectedCpuBrand} ${selectedProcessor.model} ${selectedProcessor.coreCount}-Core Processor`
      : selectedCpuBrand === "Intel"
      ? `Intel(R) ${selectedProcessor.model} CPU @ ${selectedProcessor.coreClock}`
      : `${selectedCpuBrand} ${selectedProcessor.model} ${selectedProcessor.coreClock}`
    : "Your Custom CPU Name";

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
      title="Download Script"
      icon={<Download className="h-5 w-5" />}
    >
      <p>
        Click the button below to download the PowerShell script that will automatically change your CPU name.
      </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Download Script
        </button>
      <p className="mt-2 text-sm text-gray-500">
        Make sure you know where the file is being saved on your computer.
      </p>
    </Step>
    <Step
      title="Run with PowerShell"
      icon={<PlayCircle className="h-5 w-5" />}
    >
      <p>
        Once the script (<code></code>) is downloaded, locate it in your file explorer.
      </p>
      <ol className="list-decimal pl-5">
        <li>Right-click on the <code></code> file.</li>
        <li>Select <strong>"Run with PowerShell"</strong> from the context menu.</li>
        <li>If prompted by User Account Control, click <strong>"Yes"</strong> to allow the script to make changes to your device.</li>
      </ol>
    </Step>
    <Step title="Install" icon={<Code className="h-5 w-5" />}>
      <p>
        The PowerShell script will now run and modify your system settings.
      </p>
      <p>
        <strong>Follow the instructions on the screen if any are displayed by the script.</strong> The script might provide feedback or ask for confirmation.
      </p>
    </Step>
    <Step title="Ready" icon={<CheckCheck className="h-5 w-5" />}> {/* You might need to import this icon */}
      <p>
        Your CPU name has been updated.
      </p>
      <p className="italic text-gray-600">
        Your CPU will need some time to become better.
      </p>
    </Step>
  </Steps>
      </TabsContent>

      <TabsContent value="tab-2" className="text-start container max-w-2xl py-8">
        <Steps>
          <Step title="Open Registry Editor" icon={<Terminal className="h-5 w-5" />}>
            <p>
              Press <strong>Win+R</strong> on your keyboard to open the Run dialog.
              Type <strong>"regedit"</strong> and press Enter or click OK. If prompted by User Account Control, click <strong>Yes</strong>.
            </p>
          </Step>
          <Step title="Navigate to the processor registry key" icon={<Code className="h-5 w-5" />}>
            <p>
              In Registry Editor, navigate to the following path by expanding the folders in the left panel or paste it into the address bar:
            </p>
            <CodeBlock language="text" code={`HKEY_LOCAL_MACHINE\\HARDWARE\\DESCRIPTION\\System\\CentralProcessor\\0`} />
          </Step>
          <Step title="Modify the ProcessorNameString value" icon={<ListOrdered className="h-5 w-5" />}>
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
  );
}

export { InstallationOptions };
