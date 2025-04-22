import { ScriptDownloadCard } from "./script-download-card";

interface Script {
  name: string;
  content: string;
}

interface ScriptsGridProps {
  scripts: Script[];
  downloadScript: (name: string, content: string) => void;
  title?: string;
}

export function ScriptsGrid({ scripts, downloadScript, title = "Configuration Scripts" }: ScriptsGridProps) {
  return (
    <div>
      {title && (
        <h3 className="text-xl font-semibold my-4 pt-4 border-t">
          {title}
        </h3>
      )}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
        {scripts.map((script) => (
          <ScriptDownloadCard
            key={script.name}
            scriptName={script.name}
            onDownload={(name) => downloadScript(name, script.content)}
          />
        ))}
      </div>
    </div>
  );
} 