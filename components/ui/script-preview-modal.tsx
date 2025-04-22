import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { CodeBlock } from "./code-block";

interface ScriptPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  scriptName: string;
  scriptContent: string;
}

export function ScriptPreviewModal({ isOpen, onClose, scriptName, scriptContent }: ScriptPreviewModalProps) {

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm z-50
                  animate-in fade-in duration-500"
      onClick={onClose}
    >
      <div
        className="bg-card text-card-foreground p-6 rounded-lg shadow-lg w-[95%] max-w-5xl mx-4 max-h-[90vh] overflow-auto
                   transition-all duration-300 ease-out"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">{scriptName}</h3>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-secondary"
            aria-label="Close preview"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <CodeBlock code={scriptContent} language="powershell" />

        <div className="mt-4 p-3 bg-secondary/50 rounded-md text-sm">
          <p><strong>Note:</strong> This is a PowerShell script that is safe to use. It only changes the name in the Windows Registry (CPU and GPU changer) and doesn't perform any other actions. Feel free to review the code before running it.</p>
        </div>
      </div>
    </div>
  );
} 