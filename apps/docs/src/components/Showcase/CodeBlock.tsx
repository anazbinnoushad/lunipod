"use client";

import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { synthwave84 } from "react-syntax-highlighter/dist/esm/styles/prism";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";
import { toast } from "sonner";

interface CodeBlockProps {
  language: string;
  code: string;
  className?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language, code, className }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      toast("✅ Code copied successfully");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <div
      className={cn(
        "relative rounded-lg border border-muted text-sm overflow-hidden bg-black",
        className,
      )}
    >
      <Button
        variant="ghost"
        size="icon"
        className={cn(
          "absolute top-2 right-2 z-10 h-8 w-8 rounded-md text-muted-foreground hover:bg-muted",
          copied && "text-green-500",
        )}
        onClick={handleCopy}
      >
        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      </Button>

      <SyntaxHighlighter language={language} style={synthwave84}>
        {code.trim()}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
