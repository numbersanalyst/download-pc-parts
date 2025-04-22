import { Download, Terminal } from "lucide-react";

interface ScriptDownloadCardProps {
  scriptName: string;
  onDownload: (name: string) => void;
}

export function ScriptDownloadCard({ scriptName, onDownload }: ScriptDownloadCardProps) {
  return (
    <div
      className="bg-secondary hover:bg-secondary/50 rounded-lg p-4 flex items-center justify-between transition-colors"
    >
      <div className="flex items-center space-x-3">
        <Terminal className="w-5 h-5 text-gray-500 flex-shrink-0" />
        <span className="font-medium truncate">{scriptName}</span>
      </div>
      <button
        onClick={() => onDownload(scriptName)}
        className="flex items-center space-x-2 text-primary hover:text-gray-500 flex-shrink-0 ml-2"
        aria-label={`Download ${scriptName}`}
      >
        <Download className="w-5 h-5" />
        <span className="hidden sm:inline">Download</span>
      </button>
    </div>
  );
} 