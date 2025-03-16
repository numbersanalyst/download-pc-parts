import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Clipboard, Check } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
}

function CodeBlock({
  code,
  language = "tsx",
  showLineNumbers = false,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full rounded-md overflow-hidden mt-5">
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        showLineNumbers={showLineNumbers}
        wrapLines={true}
        customStyle={{
          margin: 0,
          borderRadius: "0.5rem",
          padding: "1rem",
          maxHeight: "350px",
        }}
      >
        {code}
      </SyntaxHighlighter>
      <button
        onClick={handleCopy}
        className="absolute right-4 top-4 h-6 w-6 rounded-md hover:bg-zinc-700 inline-flex items-center justify-center"
        aria-label={copied ? "Copied" : "Copy to clipboard"}
      >
        {copied ? (
          <Check className="h-3 w-3 text-zinc-50" />
        ) : (
          <Clipboard className="h-3 w-3 text-zinc-50" />
        )}
        <span className="sr-only">{copied ? "Copied" : "Copy"}</span>
      </button>
    </div>
  );
}

export { CodeBlock };
