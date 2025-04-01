import { Terminal, Download, Code, Check, PlayCircle } from "lucide-react";
import { Card } from "../ui/card";
import { Step, Steps } from "./steps";
import { ShinyButton } from "../magicui/shiny-button";
import { HardwareTypeData } from "@/data/hardware-data";

interface RamInstallationGuideProps {
  scriptsData: HardwareTypeData;
  downloadScript: (name: string, content: string) => void;
}

function RamInstallationGuide({ scriptsData, downloadScript }: RamInstallationGuideProps) {
  return (
    <Card className="p-8 mt-20">
        <h2 className="text-2xl font-bold mb-2">{scriptsData.title}</h2>
        <h3 className="text-xl font-semibold mb-6">Configuration & Verification</h3>
        <div>
          <Steps>
             <Step title="Check BIOS/UEFI Settings" icon={<Code className="size-5" />}>
              <p>
                Restart your computer and enter the BIOS/UEFI setup (usually by pressing DEL, F2, or F12 during boot). Navigate to the memory settings and ensure that the XMP, EXPO, or DOCP profile is enabled to run your RAM at its advertised speed. Save changes and exit.
              </p>
            </Step>
            <Step title="Run Info Script (Optional)" icon={<PlayCircle className="size-5" />}>
               <p>
                 Download and run the <code>{scriptsData.scripts[0].name}</code> script to view details about your installed RAM modules in Windows. Right-click the file and select "Run with PowerShell".
               </p>
                <ShinyButton className="mt-2 px-6 py-1.5 bg-secondary rounded-md" onClick={() => { downloadScript(scriptsData.scripts[0].name, scriptsData.scripts[0].content) }}>Download Info Script</ShinyButton>
            </Step>
            <Step title="Verify in Windows" icon={<Check className="size-5" />}>
              <p>
                Open Task Manager (Ctrl+Shift+Esc), go to the "Performance" tab, and select "Memory". Check the listed speed – it should match (or be very close to) the speed advertised by your RAM kit's profile (e.g., 3200MHz, 3600MHz, 6000MHz). Note that DDR (Double Data Rate) RAM speed is often shown halved in some tools; e.g., 1600MHz might mean DDR4-3200.
              </p>
            </Step>
             <Step title="Stability Test (Recommended)" icon={<Terminal className="size-5" />}>
               <p>
                 For thorough testing, especially after enabling XMP/EXPO/DOCP or overclocking, consider running a dedicated memory test like MemTest86/Memtest86+ (requires creating a bootable USB drive) or Windows Memory Diagnostic (search from Start Menu).
               </p>
             </Step>
          </Steps>

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
        </div>
    </Card>
  );
}

export { RamInstallationGuide };
