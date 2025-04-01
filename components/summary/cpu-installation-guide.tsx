import { useState } from "react";
import { Terminal, Download, Bot, ListOrdered, Code, Check, PlayCircle } from "lucide-react";
import { Card } from "../ui/card";
import { Tabs, TabsContent, TabsList } from "../ui/tabs";
import { Step, Steps } from "./steps";
import { CodeBlock } from "../ui/code-block";
import { ShinyButton } from "../magicui/shiny-button";
import { HardwareTypeData } from "@/data/hardware-data";
import { CustomTabsTrigger } from "@/components/ui/custom-tabs-trigger";

interface CpuInstallationGuideProps {
    cpuNameValue: string;
    scriptsData: HardwareTypeData;
    downloadScript: (name: string, content: string) => void;
}

function CpuInstallationGuide({ cpuNameValue, scriptsData, downloadScript }: CpuInstallationGuideProps) {
    const [activeTab, setActiveTab] = useState("tab-1");

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

                {/* Automatic Tab */}
                <TabsContent value="tab-1">
                    <Steps>
                        <Step title="Download Script" icon={<Download className="size-5" />}>
                            <p>
                                Use button or scroll bellow and download from <b>Configuration Scripts</b> - <b>{scriptsData.scripts[0].name}</b> script.
                            </p>
                            <ShinyButton className="mt-2 px-12 py-2 bg-secondary rounded-md" onClick={() => { downloadScript(scriptsData.scripts[0].name, scriptsData.scripts[0].content) }}>Download now</ShinyButton>
                        </Step>
                        <Step title="Run with PowerShell" icon={<PlayCircle className="size-5" />}>
                            <p>
                                Right-click on the downloaded <code>.ps1</code> file and select <b>"Run with PowerShell"</b> from the context menu. You may need administrator privileges.
                            </p>
                        </Step>
                        <Step title="Follow Prompts" icon={<Code className="size-5" />}>
                            <p>
                                The PowerShell script will guide you through the process. It will display the current CPU name and ask for confirmation before making changes. Follow the on-screen instructions.
                            </p>
                        </Step>
                        <Step title="Verify (Optional)" icon={<Check className="size-5" />}>
                            <p>
                                After the script finishes (and potentially a restart if you chose persistence), you can verify the change by checking Task Manager (Ctrl+Shift+Esc) under the "Performance" tab or System Information (msinfo32).
                            </p>
                        </Step>
                    </Steps>
                    <div>
                        <h3 className="text-xl font-semibold my-4 pt-4 border-t">
                            Configuration Scripts
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
                        <Step title="Open Registry Editor" icon={<Terminal className="size-5" />}>
                            <p>
                                Press <strong>Win+R</strong>, type <strong>"regedit"</strong>, and press Enter. Confirm the User Account Control prompt if it appears.
                            </p>
                        </Step>
                        <Step title="Navigate to Key" icon={<Code className="size-5" />}>
                            <p>
                                In the Registry Editor address bar, paste the following path and press Enter:
                            </p>
                            <CodeBlock language="text" code={`HKEY_LOCAL_MACHINE\\HARDWARE\\DESCRIPTION\\System\\CentralProcessor\\0`} />
                        </Step>
                        <Step title="Modify Value" icon={<ListOrdered className="size-5" />}>
                            <p>Use this value as your new CPU name:</p>
                            <CodeBlock language="text" code={cpuNameValue} />
                            <ul className="list-disc pl-5 space-y-1 mt-4 mb-2">
                                <li>Find <strong>"ProcessorNameString"</strong> in the right-hand pane.</li>
                                <li>Right-click on it and select <strong>"Modify"</strong>.</li>
                                <li>Paste the new CPU name into the <strong>"Value data"</strong> field.</li>
                                <li>Click <strong>OK</strong>.</li>
                                <li>Close the Registry Editor. The change takes effect immediately in most places, but a restart might be needed for all software to reflect it.</li>
                            </ul>
                            <p><b>Note:</b> This change is temporary and will revert on restart unless you also set up the persistence task described in the automatic script.</p>
                        </Step>
                    </Steps>
                </TabsContent>
            </Tabs>
        </Card>
    );
}

export { CpuInstallationGuide };
