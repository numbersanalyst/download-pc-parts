import { useState } from "react";
import { Download, Terminal, Eye } from "lucide-react";
import { ScriptPreviewModal } from "./script-preview-modal";

interface ScriptDownloadCardProps {
  scriptName: string;
  scriptContent: string;
  onDownload: (name: string) => void;
}

export function ScriptDownloadCard({ scriptName, scriptContent, onDownload }: ScriptDownloadCardProps) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <>
      <div className="bg-secondary hover:bg-secondary/50 rounded-lg p-3 sm:p-4 flex items-center justify-between transition-colors">
        <div className="flex flex-1 items-center space-x-2 sm:space-x-3 min-w-0">
          <Terminal className="size-4 sm:size-5 text-gray-500 flex-shrink-0" />
          <span className="font-medium truncate text-sm sm:text-base">{scriptName}</span>
        </div>
        <div className="flex items-center gap-2 sm:gap-6 flex-shrink-0 ml-2">
          <button
            onClick={() => setIsPreviewOpen(true)}
            className="flex items-center space-x-1 sm:space-x-2 text-primary/75 hover:text-gray-700"
            aria-label={`Preview ${scriptName}`}
          >
            <Eye className="size-4 sm:size-5" />
            <span className="hidden lg:inline text-sm">Preview</span>
          </button>
          <button
            onClick={() => onDownload(scriptName)}
            className="flex items-center space-x-1 sm:space-x-2 text-primary hover:text-gray-500"
            aria-label={`Download ${scriptName}`}
          >
            <Download className="size-4 sm:size-5" />
            <span className="hidden sm:inline text-sm">Download</span>
          </button>
        </div>
      </div>

      {/* Script Preview Modal */}
      <ScriptPreviewModal
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        scriptName={scriptName}
        scriptContent={scriptContent}
      />
    </>
  );
} 