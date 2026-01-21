"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Copy, Check, ExternalLink, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface AIPromptCardProps {
  title: string;
  description?: string;
  prompt: string;
  blocks?: { key: string; description: string; example?: string }[];
  category?: string;
  className?: string;
}

const AI_TOOLS = [
  {
    name: "Claude",
    url: "https://claude.ai/new",
    color: "bg-orange-500 hover:bg-orange-600",
  },
  {
    name: "ChatGPT",
    url: "https://chat.openai.com/",
    color: "bg-emerald-500 hover:bg-emerald-600",
  },
  {
    name: "Gemini",
    url: "https://gemini.google.com/",
    color: "bg-blue-500 hover:bg-blue-600",
  },
];

export function AIPromptCard({
  title,
  description,
  prompt,
  blocks = [],
  category,
  className,
}: AIPromptCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpenInTool = (url: string) => {
    navigator.clipboard.writeText(prompt);
    window.open(url, "_blank");
  };

  // Highlight blocks in the prompt
  const highlightedPrompt = prompt.replace(
    /\[([^\]]+)\]/g,
    '<span class="bg-rose-100 text-rose-700 px-1 rounded font-medium">[$1]</span>'
  );

  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            {category && (
              <Badge variant="secondary" className="mb-2 text-xs">
                {category}
              </Badge>
            )}
            <CardTitle className="text-lg flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-rose-500" />
              {title}
            </CardTitle>
            {description && (
              <CardDescription className="mt-1">{description}</CardDescription>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Prompt Display */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
          <p
            className="text-sm text-slate-700 whitespace-pre-wrap leading-relaxed"
            dangerouslySetInnerHTML={{ __html: highlightedPrompt }}
          />
        </div>

        {/* Input Blocks Reference */}
        {blocks.length > 0 && (
          <div className="space-y-2">
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">
              Replace these blocks with your info:
            </p>
            <div className="flex flex-wrap gap-2">
              {blocks.map((block) => (
                <div
                  key={block.key}
                  className="text-xs bg-rose-50 border border-rose-200 rounded px-2 py-1"
                >
                  <span className="font-medium text-rose-700">[{block.key}]</span>
                  <span className="text-slate-500 ml-1">- {block.description}</span>
                  {block.example && (
                    <span className="text-slate-400 ml-1 italic">e.g., {block.example}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
          <Button
            variant="outline"
            size="sm"
            onClick={handleCopy}
            className="gap-2"
          >
            {copied ? (
              <>
                <Check className="h-3 w-3" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="h-3 w-3" />
                Copy Prompt
              </>
            )}
          </Button>

          <div className="flex-1" />

          <span className="text-xs text-slate-400 mr-2">Open in:</span>
          {AI_TOOLS.map((tool) => (
            <Button
              key={tool.name}
              size="sm"
              onClick={() => handleOpenInTool(tool.url)}
              className={cn("gap-1 text-white", tool.color)}
            >
              {tool.name}
              <ExternalLink className="h-3 w-3" />
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

// Compact version for inline use
export function AIPromptInline({
  prompt,
  label = "Generate with AI",
}: {
  prompt: string;
  label?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpenInTool = (url: string) => {
    navigator.clipboard.writeText(prompt);
    window.open(url, "_blank");
  };

  return (
    <div className="flex items-center gap-2 p-2 bg-slate-50 rounded-lg border border-slate-200">
      <Sparkles className="h-4 w-4 text-rose-500 flex-shrink-0" />
      <span className="text-sm text-slate-600 flex-1">{label}</span>
      <Button variant="ghost" size="sm" onClick={handleCopy} className="h-7 px-2">
        {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
      </Button>
      {AI_TOOLS.map((tool) => (
        <Button
          key={tool.name}
          variant="ghost"
          size="sm"
          onClick={() => handleOpenInTool(tool.url)}
          className="h-7 px-2 text-xs"
        >
          {tool.name}
        </Button>
      ))}
    </div>
  );
}
